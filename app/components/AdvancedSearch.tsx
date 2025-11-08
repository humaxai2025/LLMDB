import React, { useState, useEffect } from 'react';
import { LLMModel } from '../data/llm-data';
import { FilterIcon, X, Search } from 'lucide-react';
import { findSimilarModels, findCheaperAlternatives, findBetterPerformance } from '../utils/modelRecommendations';

interface AdvancedSearchProps {
  models: LLMModel[];
  onSearchResults: (results: LLMModel[]) => void;
  onRecommendations?: (recommendations: {
    similar: LLMModel[];
    cheaper: LLMModel[];
    better: LLMModel[];
  }) => void;
  selectedModel?: LLMModel;
}

// Types for the ranges
interface ContextRange {
  label: string;
  min: number;
  max: number;
}

export default function AdvancedSearch({
  models,
  onSearchResults,
  onRecommendations,
  selectedModel
}: AdvancedSearchProps) {
  // UI State
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter States
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedContextRanges, setSelectedContextRanges] = useState<string[]>([]);
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>([]);
  const [mmluScore, setMmluScore] = useState(0);
  const [humanEvalScore, setHumanEvalScore] = useState(0);

  // Get unique providers from models
  const providers = Array.from(new Set(models.map(model => model.provider))).sort();

  // Predefined filter options
  const contextRanges = [
    { label: '< 100K', min: 0, max: 100000 },
    { label: '100K-500K', min: 100000, max: 500000 },
    { label: '500K-1M', min: 500000, max: 1000000 },
    { label: '1M+', min: 1000000, max: Number.MAX_SAFE_INTEGER }
  ];

  const capabilities = [
    'Vision',
    'Long Context',
    'Coding',
    'Multimodal',
    'Research',
    'Tool Use'
  ];

  const years = ['2023', '2024', '2025'];

  // Search and filter logic
  const handleSearch = () => {
    console.log('Searching with filters:', {
      query: searchQuery,
      providers: selectedProviders,
      years: selectedYears,
      contextRanges: selectedContextRanges,
      capabilities: selectedCapabilities,
      mmluScore,
      humanEvalScore
    });

    let filtered = [...models];

    // Text search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(model =>
        model.name.toLowerCase().includes(query) ||
        model.provider.toLowerCase().includes(query) ||
        model.description?.toLowerCase().includes(query) ||
        model.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        model.bestFor?.some(use => use.toLowerCase().includes(query)) ||
        model.keyFeatures?.some(feature => feature.toLowerCase().includes(query))
      );
    }

    // Provider filter
    if (selectedProviders.length > 0) {
      filtered = filtered.filter(model => selectedProviders.includes(model.provider));
    }

    // Year filter
    if (selectedYears.length > 0) {
      filtered = filtered.filter(model => 
        model.released && selectedYears.includes(model.released)
      );
    }

    // Context window filter
    if (selectedContextRanges.length > 0) {
      filtered = filtered.filter(model => {
        return selectedContextRanges.some(rangeLabel => {
          const range = contextRanges.find(r => r.label === rangeLabel);
          if (!range) return false;
          return model.contextWindow >= range.min && model.contextWindow < range.max;
        });
      });
    }

    // Capabilities filter
    if (selectedCapabilities.length > 0) {
      filtered = filtered.filter(model =>
        selectedCapabilities.every(capability =>
          model.tags?.includes(capability) ||
          model.keyFeatures?.some(feature => feature.includes(capability)) ||
          model.bestFor?.some(use => use.includes(capability))
        )
      );
    }

    // Benchmark scores filter
    if (mmluScore > 0) {
      filtered = filtered.filter(model =>
        (model.benchmarks?.mmlu || 0) >= mmluScore
      );
    }

    if (humanEvalScore > 0) {
      filtered = filtered.filter(model =>
        (model.benchmarks?.humanEval || 0) >= humanEvalScore
      );
    }

    console.log('Search results:', filtered.length);
    onSearchResults(filtered);
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="flex gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          placeholder="Search models by name, provider, capabilities..."
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors"
        >
          Search
        </button>
      </div>

      {/* Advanced Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Provider Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">Providers</h3>
          <div className="flex flex-wrap gap-2">
            {providers.map(provider => (
              <button
                key={provider}
                onClick={() => setSelectedProviders(prev =>
                  prev.includes(provider)
                    ? prev.filter(p => p !== provider)
                    : [...prev, provider]
                )}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedProviders.includes(provider)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {provider}
              </button>
            ))}
          </div>
        </div>

        {/* Year Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">Release Year</h3>
          <div className="flex gap-2">
            {[2023, 2024, 2025].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYears(prev =>
                  prev.includes(year.toString())
                    ? prev.filter(y => y !== year.toString())
                    : [...prev, year.toString()]
                )}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedYears.includes(year.toString())
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Context Window Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">Context Window</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '< 100K', min: 0, max: 100000 },
              { label: '100K-500K', min: 100000, max: 500000 },
              { label: '500K-1M', min: 500000, max: 1000000 },
              { label: '1M+', min: 1000000, max: Number.MAX_SAFE_INTEGER }
            ].map(range => (
              <button
                key={range.label}
                onClick={() => setSelectedContextRanges(prev =>
                  prev.includes(range.label)
                    ? prev.filter(r => r !== range.label)
                    : [...prev, range.label]
                )}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedContextRanges.includes(range.label)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities Filter */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-white">Capabilities</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'Vision',
              'Long Context',
              'Coding',
              'Multimodal',
              'Research',
              'Tool Use'
            ].map(capability => (
              <button
                key={capability}
                onClick={() => setSelectedCapabilities(prev =>
                  prev.includes(capability)
                    ? prev.filter(c => c !== capability)
                    : [...prev, capability]
                )}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCapabilities.includes(capability)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {capability}
              </button>
            ))}
          </div>
        </div>

        {/* Benchmark Ranges */}
        <div className="space-y-4 col-span-full md:col-span-2">
          <h3 className="font-semibold text-gray-900 dark:text-white">Benchmark Scores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">MMLU Score</label>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {mmluScore}+
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={mmluScore}
                onChange={(e) => setMmluScore(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">HumanEval Score</label>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {humanEvalScore}+
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={humanEvalScore}
                onChange={(e) => setHumanEvalScore(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {selectedModel && (
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Smart Recommendations</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                const similar = findSimilarModels(selectedModel, models);
                onRecommendations?.({
                  similar,
                  cheaper: [],
                  better: []
                });
              }}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 font-medium transition-colors"
            >
              Find Similar Models
            </button>
            <button
              onClick={() => {
                const cheaper = findCheaperAlternatives(selectedModel, models);
                onRecommendations?.({
                  similar: [],
                  cheaper,
                  better: []
                });
              }}
              className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 font-medium transition-colors"
            >
              Find Cheaper Alternatives
            </button>
            <button
              onClick={() => {
                const better = findBetterPerformance(selectedModel, models);
                onRecommendations?.({
                  similar: [],
                  cheaper: [],
                  better
                });
              }}
              className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 font-medium transition-colors"
            >
              Find Better Performance
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
