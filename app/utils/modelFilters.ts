import { LLMModel } from '../data/llm-data';

export interface FilterOptions {
  providers: string[];
  contextRanges: {
    min: number;
    max: number;
  }[];
  benchmarkRanges: {
    mmlu?: { min: number; max: number };
    humanEval?: { min: number; max: number };
  };
  releaseYears: number[];
  priceRanges: {
    min: number;
    max: number;
  }[];
  capabilities: string[];
}

export function searchModels(models: LLMModel[], query: string, filters?: FilterOptions): LLMModel[] {
  let filteredModels = models;

  // Full-text search
  if (query) {
    const searchQuery = query.toLowerCase();
    filteredModels = filteredModels.filter(model => 
      model.name.toLowerCase().includes(searchQuery) ||
      model.provider.toLowerCase().includes(searchQuery) ||
      model.description.toLowerCase().includes(searchQuery) ||
      model.tags?.some(tag => tag.toLowerCase().includes(searchQuery)) ||
      model.bestFor?.some(use => use.toLowerCase().includes(searchQuery)) ||
      model.keyFeatures?.some(feature => feature.toLowerCase().includes(searchQuery))
    );
  }

  // Apply filters if provided
  if (filters) {
    // Provider filter
    if (filters.providers.length > 0) {
      filteredModels = filteredModels.filter(model => 
        filters.providers.includes(model.provider)
      );
    }

    // Context window range filter
    if (filters.contextRanges.length > 0) {
      filteredModels = filteredModels.filter(model =>
        filters.contextRanges.some(range =>
          model.contextWindow >= range.min && model.contextWindow <= range.max
        )
      );
    }

    // Benchmark score filter
    if (filters.benchmarkRanges.mmlu || filters.benchmarkRanges.humanEval) {
      filteredModels = filteredModels.filter(model => {
        const mmluInRange = !filters.benchmarkRanges.mmlu || 
          (model.benchmarks?.mmlu && 
           model.benchmarks.mmlu >= filters.benchmarkRanges.mmlu.min &&
           model.benchmarks.mmlu <= filters.benchmarkRanges.mmlu.max);
        
        const humanEvalInRange = !filters.benchmarkRanges.humanEval ||
          (model.benchmarks?.humanEval &&
           model.benchmarks.humanEval >= filters.benchmarkRanges.humanEval.min &&
           model.benchmarks.humanEval <= filters.benchmarkRanges.humanEval.max);
        
        return mmluInRange && humanEvalInRange;
      });
    }

    // Release year filter
    if (filters.releaseYears.length > 0) {
      filteredModels = filteredModels.filter(model =>
        model.released && filters.releaseYears.includes(parseInt(model.released))
      );
    }

    // Price range filter
    if (filters.priceRanges.length > 0) {
      filteredModels = filteredModels.filter(model =>
        filters.priceRanges.some(range =>
          model.inputCostPer1M >= range.min && model.inputCostPer1M <= range.max
        )
      );
    }

    // Capabilities filter
    if (filters.capabilities.length > 0) {
      filteredModels = filteredModels.filter(model =>
        filters.capabilities.every(capability =>
          model.tags?.includes(capability) ||
          model.keyFeatures?.some(feature => feature.toLowerCase().includes(capability.toLowerCase())) ||
          model.bestFor?.some(use => use.toLowerCase().includes(capability.toLowerCase()))
        )
      );
    }
  }

  return filteredModels;
}

export function findSimilarModels(model: LLMModel, allModels: LLMModel[], limit: number = 5): LLMModel[] {
  const otherModels = allModels.filter(m => m.id !== model.id);
  
  return otherModels
    .map(otherModel => {
      let score = 0;
      
      // Compare context windows (normalized)
      score += (1 - Math.abs(model.contextWindow - otherModel.contextWindow) / Math.max(model.contextWindow, otherModel.contextWindow)) * 2;
      
      // Compare benchmarks
      if (model.benchmarks && otherModel.benchmarks) {
        if (model.benchmarks.mmlu && otherModel.benchmarks.mmlu) {
          score += (1 - Math.abs(model.benchmarks.mmlu - otherModel.benchmarks.mmlu) / 100) * 3;
        }
        if (model.benchmarks.humanEval && otherModel.benchmarks.humanEval) {
          score += (1 - Math.abs(model.benchmarks.humanEval - otherModel.benchmarks.humanEval) / 100) * 3;
        }
      }
      
      // Compare tags
      const modelTags = model.tags || [];
      const otherTags = otherModel.tags || [];
      const commonTags = modelTags.filter(tag => otherTags.includes(tag));
      score += (commonTags.length / Math.max(modelTags.length, otherTags.length)) * 2;
      
      return { model: otherModel, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(result => result.model);
}

export function findCheaperAlternatives(model: LLMModel, allModels: LLMModel[], limit: number = 5): LLMModel[] {
  const maxCostDifferencePercent = 40; // Allow up to 40% cheaper
  const minQualityThresholdPercent = 85; // Must maintain at least 85% of the quality
  
  const modelCost = (model.inputCostPer1M + model.outputCostPer1M) / 2;
  const modelQuality = model.benchmarks ? 
    ((model.benchmarks.mmlu || 0) + (model.benchmarks.humanEval || 0)) / 2 : 0;
  
  return allModels
    .filter(m => m.id !== model.id)
    .filter(m => {
      const cost = (m.inputCostPer1M + m.outputCostPer1M) / 2;
      const quality = m.benchmarks ?
        ((m.benchmarks.mmlu || 0) + (m.benchmarks.humanEval || 0)) / 2 : 0;
      
      return cost < modelCost && 
             cost >= modelCost * (1 - maxCostDifferencePercent/100) &&
             quality >= modelQuality * (minQualityThresholdPercent/100);
    })
    .sort((a, b) => {
      const costA = (a.inputCostPer1M + a.outputCostPer1M) / 2;
      const costB = (b.inputCostPer1M + b.outputCostPer1M) / 2;
      return costA - costB;
    })
    .slice(0, limit);
}

export function findBetterPerformance(model: LLMModel, allModels: LLMModel[], maxBudgetIncrease: number = 50, limit: number = 5): LLMModel[] {
  const modelCost = (model.inputCostPer1M + model.outputCostPer1M) / 2;
  const modelQuality = model.benchmarks ?
    ((model.benchmarks.mmlu || 0) + (model.benchmarks.humanEval || 0)) / 2 : 0;
  
  return allModels
    .filter(m => m.id !== model.id)
    .filter(m => {
      const cost = (m.inputCostPer1M + m.outputCostPer1M) / 2;
      const quality = m.benchmarks ?
        ((m.benchmarks.mmlu || 0) + (m.benchmarks.humanEval || 0)) / 2 : 0;
      
      return quality > modelQuality &&
             cost <= modelCost * (1 + maxBudgetIncrease/100);
    })
    .sort((a, b) => {
      const qualityA = a.benchmarks ?
        ((a.benchmarks.mmlu || 0) + (a.benchmarks.humanEval || 0)) / 2 : 0;
      const qualityB = b.benchmarks ?
        ((b.benchmarks.mmlu || 0) + (b.benchmarks.humanEval || 0)) / 2 : 0;
      return qualityB - qualityA;
    })
    .slice(0, limit);
}