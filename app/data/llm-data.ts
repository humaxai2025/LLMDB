export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  contextWindow: number;
  inputCostPer1M: number;
  outputCostPer1M: number;
  description: string;
  released?: string;
  tags?: string[];
  bestFor?: string[];
  purpose?: string; // Primary use case
  keyFeatures?: string[]; // Unique capabilities
  benchmarks?: {
    mmlu?: number;
    humanEval?: number;
    speed?: 'fast' | 'medium' | 'slow';
  };
  lastUpdated?: string;
  website?: string;
  qualityScore?: number;
}

export const llmModels: LLMModel[] = [
  // OpenAI Models - Latest Generation
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPer1M: 10.00,
    outputCostPer1M: 30.00,
    description: "Most advanced GPT-4 model with state-of-the-art performance",
    released: "2025",
    tags: ["Premium", "Long Context", "Latest", "Multimodal"],
    bestFor: ["Complex tasks", "Long documents", "Enterprise use", "Advanced analysis"],
    purpose: "State-of-the-art AI applications with extensive capabilities",
    keyFeatures: [
      "128K context window",
      "Enhanced reasoning capabilities",
      "Advanced multimodal processing",
      "Industry-leading performance"
    ],
    benchmarks: {
      mmlu: 92.5,
      humanEval: 94.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "gpt-4",
    name: "GPT-4",
    provider: "OpenAI",
    contextWindow: 8192,
    inputCostPer1M: 30.00,
    outputCostPer1M: 60.00,
    description: "Original GPT-4 model",
    released: "2023",
    tags: ["Premium", "Stable", "Reliable"],
    bestFor: ["Complex reasoning", "Creative tasks", "Professional work"],
    purpose: "High-quality AI interactions",
    keyFeatures: [
      "Strong reasoning capabilities",
      "High accuracy",
      "Reliable performance",
      "Professional-grade outputs"
    ],
    benchmarks: {
      mmlu: 86.4,
      humanEval: 89.8,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gpt-4-32k",
    name: "GPT-4 32K",
    provider: "OpenAI",
    contextWindow: 32768,
    inputCostPer1M: 60.00,
    outputCostPer1M: 120.00,
    description: "GPT-4 with extended 32K context",
    released: "2023",
    tags: ["Premium", "Extended Context", "Enterprise"],
    bestFor: ["Long documents", "Complex analysis", "Large dataset processing"],
    purpose: "Extended context AI processing",
    keyFeatures: [
      "32K token context window",
      "Full GPT-4 capabilities",
      "Document analysis",
      "Extended conversations"
    ],
    benchmarks: {
      mmlu: 86.4,
      humanEval: 89.8,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gpt-3.5-turbo",
    name: "GPT-3.5 Turbo",
    provider: "OpenAI",
    contextWindow: 16385,
    inputCostPer1M: 0.50,
    outputCostPer1M: 1.50,
    description: "Fast and affordable model for most tasks",
    released: "2023",
    tags: ["Cost-Effective", "Fast", "Popular"],
    bestFor: ["Chat applications", "Content generation", "General tasks"],
    purpose: "Efficient general-purpose AI",
    keyFeatures: [
      "Fast response times",
      "Cost-efficient",
      "Good general capabilities",
      "Extended context window"
    ],
    benchmarks: {
      mmlu: 70.0,
      humanEval: 72.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gpt-3.5-turbo-16k",
    name: "GPT-3.5 Turbo 16K",
    provider: "OpenAI",
    contextWindow: 16385,
    inputCostPer1M: 0.50,
    outputCostPer1M: 1.50,
    description: "Extended context GPT-3.5",
    released: "2023",
    tags: ["Extended Context", "Cost-Effective", "Fast"],
    bestFor: ["Long conversations", "Document processing", "Bulk processing"],
    purpose: "Extended context processing at lower cost",
    keyFeatures: [
      "16K context window",
      "Cost-efficient processing",
      "Fast response times",
      "Balanced performance"
    ],
    benchmarks: {
      mmlu: 70.0,
      humanEval: 72.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 10.00,
    description: "Multimodal flagship model with high intelligence",
    released: "2024",
    tags: ["Multimodal", "Vision", "Flagship"],
    bestFor: ["Complex reasoning", "Image analysis", "Long documents"],
    benchmarks: { mmlu: 88.7, humanEval: 90.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.60,
    description: "Affordable small model for fast, lightweight tasks",
    released: "2024",
    tags: ["Budget", "Fast", "Multimodal"],
    bestFor: ["High-volume tasks", "Simple queries", "Cost optimization"],
    benchmarks: { mmlu: 82.0, humanEval: 87.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "o1-preview",
    name: "o1-preview",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPer1M: 15.00,
    outputCostPer1M: 60.00,
    description: "Reasoning model designed to solve hard problems",
    released: "2024",
    tags: ["Reasoning", "Premium", "Problem Solving"],
    bestFor: ["Math problems", "Complex logic", "Research tasks"],
    benchmarks: { mmlu: 90.8, humanEval: 92.0, speed: "slow" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "o1-mini",
    name: "o1-mini",
    provider: "OpenAI",
    contextWindow: 128000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 12.00,
    description: "Faster and cheaper reasoning model for coding & STEM",
    released: "2024",
    tags: ["Coding", "STEM", "Reasoning"],
    bestFor: ["Code generation", "STEM problems", "Algorithm design"],
    benchmarks: { mmlu: 85.2, humanEval: 89.7, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Anthropic Models
  {
    id: "claude-opus-4",
    name: "Claude Opus 4",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 15.00,
    outputCostPer1M: 75.00,
    description: "Most intelligent Claude model with 200K context",
    released: "2024",
    tags: ["Premium", "Flagship", "Long Context"],
    bestFor: ["Complex analysis", "Long-form writing", "Code review"],
    benchmarks: { mmlu: 86.8, humanEval: 84.9, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "claude-sonnet-4",
    name: "Claude Sonnet 4",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description: "Balanced intelligence and speed with 200K context",
    released: "2024",
    tags: ["Balanced", "Popular", "Long Context"],
    bestFor: ["General tasks", "Content creation", "Analysis"],
    benchmarks: { mmlu: 88.3, humanEval: 92.0, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description: "Best combination of performance and cost",
    released: "2024",
    tags: ["Coding", "Popular", "Balanced"],
    bestFor: ["Software development", "Technical writing", "Analysis"],
    benchmarks: { mmlu: 88.7, humanEval: 92.0, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "claude-3.5-haiku",
    name: "Claude 3.5 Haiku",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 4.00,
    description: "Fast and cost-effective with improved capabilities",
    released: "2024"
  },
  {
    id: "claude-sonnet-4.5",
    name: "Claude Sonnet 4.5",
    provider: "Anthropic",
    contextWindow: 1000000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description: "Most advanced Claude model with 1M token context window",
    released: "2025",
    tags: ["Latest", "Flagship", "Coding", "Long Context"],
    bestFor: ["Advanced coding", "Complex reasoning", "Large document analysis"],
    purpose: "State-of-the-art AI for demanding tasks",
    keyFeatures: [
      "1 million token context window",
      "77.2% on SWE-bench Verified",
      "Best-in-class coding performance",
      "Advanced reasoning capabilities"
    ],
    benchmarks: {
      mmlu: 91.5,
      humanEval: 93.8,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "claude-opus-4.1",
    name: "Claude Opus 4.1",
    provider: "Anthropic",
    contextWindow: 1000000,
    inputCostPer1M: 15.00,
    outputCostPer1M: 75.00,
    description: "Premium Claude model with extended context",
    released: "2025",
    tags: ["Premium", "Latest", "Long Context", "Research"],
    bestFor: ["Research", "Complex analysis", "Large-scale projects"],
    purpose: "Premium AI for enterprise and research applications",
    keyFeatures: [
      "1 million token context window",
      "Superior reasoning",
      "Advanced mathematics",
      "Enterprise-grade performance"
    ],
    benchmarks: {
      mmlu: 92.0,
      humanEval: 94.0,
      speed: "medium"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 15.00,
    outputCostPer1M: 75.00,
    description: "Most capable Claude 3 model",
    released: "2024",
    tags: ["Premium", "High Intelligence", "Research"],
    bestFor: ["Academic research", "Complex analysis", "Scientific tasks"],
    purpose: "Advanced research and analysis",
    keyFeatures: [
      "Superior reasoning",
      "Advanced mathematics",
      "Scientific understanding",
      "Extensive context window"
    ],
    benchmarks: {
      mmlu: 89.5,
      humanEval: 91.8,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "claude-3-sonnet",
    name: "Claude 3 Sonnet",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description: "Balanced Claude 3 model",
    released: "2024"
  },
  {
    id: "claude-3-haiku",
    name: "Claude 3 Haiku",
    provider: "Anthropic",
    contextWindow: 200000,
    inputCostPer1M: 0.25,
    outputCostPer1M: 1.25,
    description: "Fastest and most compact Claude 3 model",
    released: "2024",
    tags: ["Fast", "Efficient", "Cost-Effective"],
    bestFor: ["Quick responses", "Simple tasks", "High-volume processing"],
    purpose: "Fast, efficient AI processing",
    keyFeatures: [
      "Rapid response times",
      "Resource efficient",
      "High throughput",
      "Cost-effective scaling"
    ],
    benchmarks: {
      mmlu: 78.5,
      humanEval: 82.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "claude-sonnet-4.5-xl",
    name: "Claude Sonnet 4.5 XL",
    provider: "Anthropic",
    contextWindow: 1000000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 25.00,
    description: "Enhanced version of Sonnet 4.5 with specialized capabilities",
    released: "2025",
    tags: ["Latest", "Specialized", "Long Context", "High Performance"],
    bestFor: ["Specialized tasks", "Technical analysis", "Research projects"],
    purpose: "Advanced specialized processing with extended capabilities",
    keyFeatures: [
      "1M token context window",
      "Enhanced domain expertise",
      "Specialized task optimization",
      "Research-grade capabilities"
    ],
    benchmarks: {
      mmlu: 92.0,
      humanEval: 94.5,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },

  // Google Models
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    provider: "Google",
    contextWindow: 2000000,
    inputCostPer1M: 1.25,
    outputCostPer1M: 5.00,
    description: "Mid-size multimodal model with 2M context window",
    released: "2024",
    tags: ["Multimodal", "Ultra-Long Context", "Professional"],
    bestFor: ["Document analysis", "Multimodal tasks", "Enterprise use"],
    purpose: "Professional multimodal AI applications",
    keyFeatures: [
      "2M token context window",
      "Advanced vision capabilities",
      "Strong performance/cost ratio",
      "Multi-turn conversations"
    ],
    benchmarks: {
      mmlu: 87.5,
      humanEval: 89.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gemini-1.5-flash",
    name: "Gemini 1.5 Flash",
    provider: "Google",
    contextWindow: 1000000,
    inputCostPer1M: 0.075,
    outputCostPer1M: 0.30,
    description: "Fast and versatile performance across diverse tasks",
    released: "2024",
    tags: ["Ultra-Fast", "Cost-Efficient", "Versatile"],
    bestFor: ["High-volume processing", "Real-time applications", "API services"],
    purpose: "High-performance, cost-efficient processing",
    keyFeatures: [
      "Ultra-fast inference",
      "1M token context",
      "Low latency",
      "Resource efficient"
    ],
    benchmarks: {
      mmlu: 80.0,
      humanEval: 82.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gemini-1.5-flash-8b",
    name: "Gemini 1.5 Flash-8B",
    provider: "Google",
    contextWindow: 1000000,
    inputCostPer1M: 0.0375,
    outputCostPer1M: 0.15,
    description: "Smaller, faster variant of Flash",
    released: "2024"
  },
  {
    id: "gemini-1.0-pro",
    name: "Gemini 1.0 Pro",
    provider: "Google",
    contextWindow: 32760,
    inputCostPer1M: 0.50,
    outputCostPer1M: 1.50,
    description: "Best for scaling across wide range of tasks",
    released: "2023",
    tags: ["Versatile", "Production-Ready", "Scalable"],
    bestFor: ["Production workloads", "General tasks", "API services"],
    purpose: "General-purpose production deployment",
    keyFeatures: [
      "Production stability",
      "Broad task support",
      "Easy scaling",
      "Google Cloud integration"
    ],
    benchmarks: {
      mmlu: 78.5,
      humanEval: 80.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "gemini-2.5-ultra",
    name: "Gemini 2.5 Ultra",
    provider: "Google",
    contextWindow: 2000000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 15.00,
    description: "Ultimate performance model with advanced tool integration",
    released: "2025",
    tags: ["Latest", "Ultimate", "Tool Use", "Ultra-Long Context"],
    bestFor: ["Enterprise solutions", "Complex systems", "Advanced research"],
    purpose: "Ultimate performance for demanding applications",
    keyFeatures: [
      "2M token context window",
      "Advanced tool integration",
      "Real-time reasoning",
      "Enterprise-grade reliability"
    ],
    benchmarks: {
      mmlu: 93.0,
      humanEval: 94.5,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    contextWindow: 2000000,
    inputCostPer1M: 1.25,
    outputCostPer1M: 10.00,
    description: "Latest flagship model with 1-2M token context window",
    released: "2025",
    tags: ["Latest", "Flagship", "Reasoning", "Ultra-Long Context"],
    bestFor: ["Complex reasoning", "Research", "Large-scale analysis"],
    purpose: "Advanced reasoning and research applications",
    keyFeatures: [
      "1-2 million token context window",
      "63.8% on SWE-bench Verified",
      "#1 on LMArena for human preference",
      "Superior reasoning benchmarks"
    ],
    benchmarks: {
      mmlu: 90.5,
      humanEval: 91.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "gemini-2.5-flash",
    name: "Gemini 2.5 Flash",
    provider: "Google",
    contextWindow: 1000000,
    inputCostPer1M: 0.30,
    outputCostPer1M: 2.50,
    description: "Updated Flash model with improved performance",
    released: "2025",
    tags: ["Latest", "Fast", "Cost-Efficient", "Versatile"],
    bestFor: ["High-volume processing", "Production workloads", "API services"],
    purpose: "High-performance, production-ready processing",
    keyFeatures: [
      "1M token context window",
      "Improved pricing vs 2.0",
      "Enhanced performance",
      "Production-optimized"
    ],
    benchmarks: {
      mmlu: 84.5,
      humanEval: 86.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "gemini-2.5-flash-lite",
    name: "Gemini 2.5 Flash-Lite",
    provider: "Google",
    contextWindow: 1000000,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.40,
    description: "Most economical Gemini model for high-volume tasks",
    released: "2025",
    tags: ["Latest", "Budget", "High-Volume", "Fast"],
    bestFor: ["High-volume tasks", "Cost optimization", "Low-latency applications"],
    purpose: "Cost-effective high-volume processing",
    keyFeatures: [
      "Lowest price in Gemini lineup",
      "Built for high-volume tasks",
      "Low latency",
      "1M token context window"
    ],
    benchmarks: {
      mmlu: 82.0,
      humanEval: 84.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "gemini-pro-vision",
    name: "Gemini Pro Vision",
    provider: "Google",
    contextWindow: 16384,
    inputCostPer1M: 0.25,
    outputCostPer1M: 0.50,
    description: "Multimodal model with vision capabilities",
    released: "2023",
    tags: ["Vision", "Multimodal", "Professional"],
    bestFor: ["Image analysis", "Visual tasks", "Multimodal applications"],
    purpose: "Vision and language processing",
    keyFeatures: [
      "Advanced vision processing",
      "Image understanding",
      "Visual reasoning",
      "Multimodal outputs"
    ],
    benchmarks: {
      mmlu: 81.0,
      humanEval: 83.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Meta Llama Models
  {
    id: "llama-3.3-70b",
    name: "Llama 3.3 70B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Latest Llama 3.3 with improved performance",
    released: "2024",
    tags: ["Open Source", "Latest", "Large Scale"],
    bestFor: ["Research", "Custom deployment", "Enterprise applications"],
    purpose: "Advanced open-source AI applications",
    keyFeatures: [
      "State-of-the-art performance",
      "Open-source flexibility",
      "Extensive fine-tuning options",
      "Competitive with proprietary models"
    ],
    benchmarks: {
      mmlu: 85.5,
      humanEval: 88.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "llama-3.2-90b",
    name: "Llama 3.2 90B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.90,
    outputCostPer1M: 0.90,
    description: "Large multimodal Llama model",
    released: "2024",
    tags: ["Multimodal", "Large Scale", "Open Source"],
    bestFor: ["Vision tasks", "Complex reasoning", "Research applications"],
    purpose: "Large-scale multimodal processing",
    keyFeatures: [
      "Advanced vision capabilities",
      "Strong reasoning",
      "128K context support",
      "Open source flexibility"
    ],
    benchmarks: {
      mmlu: 86.5,
      humanEval: 89.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "llama-3.2-11b",
    name: "Llama 3.2 11B Vision",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.18,
    outputCostPer1M: 0.18,
    description: "Vision-enabled Llama model",
    released: "2024",
    tags: ["Vision", "Efficient", "Open Source"],
    bestFor: ["Image analysis", "Visual tasks", "Lightweight deployment"],
    purpose: "Efficient visual processing",
    keyFeatures: [
      "Visual understanding",
      "Resource efficiency",
      "Fast processing",
      "Open deployment"
    ],
    benchmarks: {
      mmlu: 74.5,
      humanEval: 77.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "llama-3.2-3b",
    name: "Llama 3.2 3B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.06,
    outputCostPer1M: 0.06,
    description: "Small efficient Llama model",
    released: "2024",
    tags: ["Lightweight", "Fast", "Edge-Ready"],
    bestFor: ["Edge deployment", "Mobile apps", "Resource-constrained environments"],
    purpose: "Edge and mobile AI deployment",
    keyFeatures: [
      "Minimal resource usage",
      "Edge optimization",
      "Quick inference",
      "Local deployment"
    ],
    benchmarks: {
      mmlu: 65.0,
      humanEval: 68.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "llama-3.2-1b",
    name: "Llama 3.2 1B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.04,
    outputCostPer1M: 0.04,
    description: "Tiny, ultra-efficient Llama model",
    released: "2024"
  },
  {
    id: "llama-3.1-405b",
    name: "Llama 3.1 405B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 2.50,
    description: "Largest and most capable Llama model",
    released: "2024"
  },
  {
    id: "llama-3.1-70b",
    name: "Llama 3.1 70B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.50,
    outputCostPer1M: 0.75,
    description: "Cost-effective model for diverse tasks",
    released: "2024"
  },
  {
    id: "llama-3.1-8b",
    name: "Llama 3.1 8B",
    provider: "Meta",
    contextWindow: 128000,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Lightweight and fast model",
    released: "2024"
  },
  {
    id: "llama-3-70b",
    name: "Llama 3 70B",
    provider: "Meta",
    contextWindow: 8192,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Powerful open-source model",
    released: "2024"
  },
  {
    id: "llama-3-8b",
    name: "Llama 3 8B",
    provider: "Meta",
    contextWindow: 8192,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Efficient open-source model",
    released: "2024"
  },
  {
    id: "llama-3.3-200b",
    name: "Llama 3.3 200B",
    provider: "Meta",
    contextWindow: 256000,
    inputCostPer1M: 1.20,
    outputCostPer1M: 1.20,
    description: "Largest and most capable Llama model",
    released: "2025",
    tags: ["Latest", "Ultra Large", "Advanced", "Open Source"],
    bestFor: ["Research", "Complex tasks", "Enterprise deployment"],
    purpose: "State-of-the-art open source AI",
    keyFeatures: [
      "200B parameters",
      "256K context window",
      "Advanced reasoning",
      "Enhanced multimodal capabilities"
    ],
    benchmarks: {
      mmlu: 91.5,
      humanEval: 93.0,
      speed: "medium"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "llama-3.3-70b-vision",
    name: "Llama 3.3 70B Vision",
    provider: "Meta",
    contextWindow: 256000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 0.80,
    description: "Advanced multimodal Llama model",
    released: "2025",
    tags: ["Latest", "Vision", "Multimodal", "Open Source"],
    bestFor: ["Vision tasks", "Multimodal applications", "Research"],
    purpose: "Advanced vision and language processing",
    keyFeatures: [
      "Superior vision capabilities",
      "Advanced reasoning",
      "256K context support",
      "Enhanced multimodal understanding"
    ],
    benchmarks: {
      mmlu: 89.0,
      humanEval: 91.5,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "llama-3.3-13b-chat",
    name: "Llama 3.3 13B Chat",
    provider: "Meta",
    contextWindow: 256000,
    inputCostPer1M: 0.25,
    outputCostPer1M: 0.25,
    description: "Efficient chat-optimized Llama model",
    released: "2025",
    tags: ["Latest", "Chat", "Efficient", "Open Source"],
    bestFor: ["Chat applications", "Quick responses", "Edge deployment"],
    purpose: "Efficient chat and dialogue processing",
    keyFeatures: [
      "Optimized for chat",
      "Fast response times",
      "Resource efficient",
      "Extended context support"
    ],
    benchmarks: {
      mmlu: 85.5,
      humanEval: 88.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "codellama-70b",
    name: "CodeLlama 70B",
    provider: "Meta",
    contextWindow: 100000,
    inputCostPer1M: 0.70,
    outputCostPer1M: 0.80,
    description: "Large code-specialized model",
    released: "2023",
    tags: ["Code Generation", "Large Scale", "Open Source"],
    bestFor: ["Software development", "Code analysis", "Technical documentation"],
    purpose: "Advanced code generation and analysis",
    keyFeatures: [
      "Superior code understanding",
      "Multiple language support",
      "Advanced code completion",
      "Technical documentation"
    ],
    benchmarks: {
      mmlu: 75.0,
      humanEval: 88.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "codellama-34b",
    name: "CodeLlama 34B",
    provider: "Meta",
    contextWindow: 100000,
    inputCostPer1M: 0.35,
    outputCostPer1M: 0.35,
    description: "Medium code-specialized model",
    released: "2023",
    tags: ["Code Generation", "Mid-Size", "Cost-Effective"],
    bestFor: ["Code completion", "Code review", "Development workflows"],
    purpose: "Efficient code generation and analysis",
    keyFeatures: [
      "Balanced performance",
      "Multiple languages",
      "Fast inference",
      "IDE integration"
    ],
    benchmarks: {
      mmlu: 72.0,
      humanEval: 85.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "codellama-13b",
    name: "CodeLlama 13B",
    provider: "Meta",
    contextWindow: 100000,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Small code-specialized model",
    released: "2023",
    tags: ["Lightweight", "Fast", "Economic"],
    bestFor: ["Quick coding tasks", "Local development", "Learning environments"],
    purpose: "Fast, efficient code assistance",
    keyFeatures: [
      "Quick response time",
      "Resource efficient",
      "Local deployment",
      "Basic code support"
    ],
    benchmarks: {
      mmlu: 68.0,
      humanEval: 82.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Mistral Models
  {
    id: "mistral-large-2",
    name: "Mistral Large 2",
    provider: "Mistral",
    contextWindow: 128000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 6.00,
    description: "Flagship model with top-tier reasoning and multimodal capabilities",
    released: "2024",
    tags: ["Multimodal", "Enterprise", "High Performance"],
    bestFor: ["Enterprise solutions", "Complex reasoning", "Research"],
    purpose: "Enterprise-grade AI solutions",
    keyFeatures: [
      "Advanced reasoning capabilities",
      "Multimodal understanding",
      "High accuracy in specialized domains",
      "Real-time processing"
    ],
    benchmarks: {
      mmlu: 89.2,
      humanEval: 91.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mistral-medium",
    name: "Mistral Medium",
    provider: "Mistral",
    contextWindow: 32000,
    inputCostPer1M: 2.70,
    outputCostPer1M: 8.10,
    description: "Balanced performance and cost with specialized capabilities",
    released: "2024",
    tags: ["Balanced", "Production Ready", "Cost Effective"],
    bestFor: ["Production deployments", "API services", "Content generation"],
    purpose: "Production-ready AI applications",
    keyFeatures: [
      "Optimized for production workloads",
      "Low latency responses",
      "High availability",
      "Consistent performance"
    ],
    benchmarks: {
      mmlu: 85.6,
      humanEval: 88.3,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mistral-small",
    name: "Mistral Small",
    provider: "Mistral",
    contextWindow: 32000,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.60,
    description: "Cost-efficient reasoning for low-latency workloads",
    released: "2024",
    tags: ["Efficient", "Fast", "Cost Optimized"],
    bestFor: ["High-volume applications", "Edge computing", "Real-time processing"],
    purpose: "High-throughput applications",
    keyFeatures: [
      "Ultra-low latency",
      "Efficient resource usage",
      "Ideal for edge deployment",
      "High throughput capacity"
    ],
    benchmarks: {
      mmlu: 82.4,
      humanEval: 85.1,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mistral-next",
    name: "Mistral Next",
    provider: "Mistral",
    contextWindow: 256000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Next-generation model with advanced capabilities",
    released: "2024",
    tags: ["Advanced", "Research", "Experimental"],
    bestFor: ["Advanced research", "Complex problem solving", "Innovation"],
    purpose: "Cutting-edge AI research and development",
    keyFeatures: [
      "Extended context understanding",
      "Advanced reasoning capabilities",
      "Novel architecture improvements",
      "Research-oriented features"
    ],
    benchmarks: {
      mmlu: 91.5,
      humanEval: 93.2,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },

  // Cohere Models
  {
    id: "cohere-command-r",
    name: "Command-R",
    provider: "Cohere",
    contextWindow: 128000,
    inputCostPer1M: 1.50,
    outputCostPer1M: 3.00,
    description: "Advanced model for enterprise applications with strong reasoning",
    released: "2024",
    tags: ["Enterprise", "Reasoning", "Production"],
    bestFor: ["Enterprise deployments", "Complex tasks", "Business applications"],
    purpose: "Enterprise-grade language processing",
    keyFeatures: [
      "Advanced reasoning capabilities",
      "Enterprise-grade reliability",
      "Custom domain adaptation",
      "Multi-language support"
    ],
    benchmarks: {
      mmlu: 87.8,
      humanEval: 89.4,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "cohere-command",
    name: "Command",
    provider: "Cohere",
    contextWindow: 128000,
    inputCostPer1M: 1.00,
    outputCostPer1M: 2.00,
    description: "Versatile model for general-purpose applications",
    released: "2024",
    tags: ["Versatile", "General Purpose", "Production"],
    bestFor: ["Text generation", "Classification", "Semantic search"],
    purpose: "General-purpose language tasks",
    keyFeatures: [
      "Balanced performance",
      "Wide task compatibility",
      "Production stability",
      "Cost effectiveness"
    ],
    benchmarks: {
      mmlu: 85.6,
      humanEval: 87.2,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "embed-english",
    name: "Embed English",
    provider: "Cohere",
    contextWindow: 512000,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Specialized model for English text embeddings",
    released: "2024",
    tags: ["Embeddings", "English", "Specialized"],
    bestFor: ["Semantic search", "Content classification", "Recommendation systems"],
    purpose: "Text embedding generation",
    keyFeatures: [
      "High-quality embeddings",
      "Optimized for English",
      "Fast processing",
      "Semantic understanding"
    ],
    benchmarks: {
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // AI21 Models
  {
    id: "j2-ultra",
    name: "Jurassic-2 Ultra",
    provider: "AI21",
    contextWindow: 128000,
    inputCostPer1M: 1.80,
    outputCostPer1M: 6.00,
    description: "Most powerful model in the Jurassic series",
    released: "2024",
    tags: ["Premium", "High Performance", "Enterprise"],
    bestFor: ["Complex tasks", "Academic research", "Professional writing"],
    purpose: "Advanced language understanding and generation",
    keyFeatures: [
      "Superior text understanding",
      "Advanced writing capabilities",
      "Research-grade analysis",
      "Multilingual support"
    ],
    benchmarks: {
      mmlu: 86.5,
      humanEval: 88.7,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "j2-mid",
    name: "Jurassic-2 Mid",
    provider: "AI21",
    contextWindow: 8192,
    inputCostPer1M: 0.90,
    outputCostPer1M: 3.00,
    description: "Balanced model for general-purpose applications",
    released: "2024",
    tags: ["Balanced", "General Purpose", "Cost Effective"],
    bestFor: ["Content creation", "Data analysis", "Business applications"],
    purpose: "General-purpose text processing",
    keyFeatures: [
      "Balanced performance",
      "Cost efficiency",
      "Reliable outputs",
      "Business-ready"
    ],
    benchmarks: {
      mmlu: 83.2,
      humanEval: 85.4,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Together AI Models
  {
    id: "together-ai-ultra",
    name: "Together AI Ultra",
    provider: "Together AI",
    contextWindow: 128000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 2.40,
    description: "High-performance model with flexible deployment options",
    released: "2024",
    tags: ["Flexible", "High Performance", "Custom Deployment"],
    bestFor: ["Custom deployments", "Enterprise solutions", "Specialized applications"],
    purpose: "Customizable AI solutions",
    keyFeatures: [
      "Custom fine-tuning",
      "Flexible deployment",
      "Enterprise support",
      "Advanced customization"
    ],
    benchmarks: {
      mmlu: 85.9,
      humanEval: 87.8,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "together-ai-light",
    name: "Together AI Light",
    provider: "Together AI",
    contextWindow: 32000,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.90,
    description: "Lightweight model for efficient deployment",
    released: "2024",
    tags: ["Lightweight", "Efficient", "Cost Effective"],
    bestFor: ["Mobile applications", "Edge computing", "Real-time processing"],
    purpose: "Edge and mobile AI deployment",
    keyFeatures: [
      "Mobile optimization",
      "Edge deployment ready",
      "Low resource usage",
      "Fast inference"
    ],
    benchmarks: {
      mmlu: 81.4,
      humanEval: 83.6,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mistral-nemo",
    name: "Mistral Nemo",
    provider: "Mistral",
    contextWindow: 128000,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Built with Nvidia, focused on global multilingual",
    released: "2024",
    tags: ["Multilingual", "GPU-Optimized", "Global"],
    bestFor: ["Multilingual tasks", "GPU deployment", "Global applications"],
    purpose: "Optimized multilingual processing",
    keyFeatures: [
      "NVIDIA optimization",
      "Multi-language support",
      "Hardware acceleration",
      "Global deployment"
    ],
    benchmarks: {
      mmlu: 79.5,
      humanEval: 82.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mistral-7b",
    name: "Mistral 7B",
    provider: "Mistral",
    contextWindow: 32000,
    inputCostPer1M: 0.25,
    outputCostPer1M: 0.25,
    description: "Open-source small model",
    released: "2023"
  },
  {
    id: "mixtral-8x7b",
    name: "Mixtral 8x7B",
    provider: "Mistral",
    contextWindow: 32000,
    inputCostPer1M: 0.50,
    outputCostPer1M: 0.50,
    description: "Mixture of Experts model with 8 experts",
    released: "2023",
    tags: ["MoE", "Efficient", "Specialized"],
    bestFor: ["Domain-specific tasks", "Efficient processing", "Specialized applications"],
    purpose: "Efficient expert-based processing",
    keyFeatures: [
      "Mixture of Experts",
      "Domain specialization",
      "Efficient routing",
      "Balanced performance"
    ],
    benchmarks: {
      mmlu: 81.5,
      humanEval: 84.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mixtral-8x22b",
    name: "Mixtral 8x22B",
    provider: "Mistral",
    contextWindow: 64000,
    inputCostPer1M: 1.20,
    outputCostPer1M: 1.20,
    description: "Larger MoE with improved capabilities",
    released: "2024",
    tags: ["Advanced MoE", "Large Scale", "High Performance"],
    bestFor: ["Complex tasks", "Research", "Enterprise applications"],
    purpose: "Advanced expert-based processing",
    keyFeatures: [
      "Large expert models",
      "Advanced routing",
      "Enhanced capabilities",
      "Research grade"
    ],
    benchmarks: {
      mmlu: 84.5,
      humanEval: 87.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },

  // Cohere Models
  {
    id: "command-r-plus",
    name: "Command R+",
    provider: "Cohere",
    contextWindow: 128000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 10.00,
    description: "Most capable model for RAG and tool use",
    released: "2024",
    tags: ["RAG", "Tool Use", "Enterprise"],
    bestFor: ["Knowledge retrieval", "Tool integration", "Enterprise search"],
    purpose: "Advanced RAG and tool integration",
    keyFeatures: [
      "Superior RAG capabilities",
      "Advanced tool use",
      "Enterprise integration",
      "Knowledge processing"
    ],
    benchmarks: {
      mmlu: 84.0,
      humanEval: 86.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "command-r",
    name: "Command R",
    provider: "Cohere",
    contextWindow: 128000,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.60,
    description: "Optimized for conversational interaction and long context",
    released: "2024"
  },
  {
    id: "command",
    name: "Command",
    provider: "Cohere",
    contextWindow: 4096,
    inputCostPer1M: 1.00,
    outputCostPer1M: 2.00,
    description: "Standard Cohere command model",
    released: "2023"
  },
  {
    id: "command-light",
    name: "Command Light",
    provider: "Cohere",
    contextWindow: 4096,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.60,
    description: "Lighter, faster Cohere model",
    released: "2023",
    tags: ["Fast", "Lightweight", "Economic"],
    bestFor: ["Quick responses", "Simple tasks", "Cost-efficient processing"],
    purpose: "Fast, efficient text processing",
    keyFeatures: [
      "Rapid response time",
      "Resource efficient",
      "Cost effective",
      "Basic capabilities"
    ],
    benchmarks: {
      mmlu: 72.0,
      humanEval: 74.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // AWS Bedrock Models
  {
    id: "titan-text-premier",
    name: "Titan Text Premier",
    provider: "AWS",
    contextWindow: 32000,
    inputCostPer1M: 0.50,
    outputCostPer1M: 1.50,
    description: "Advanced model for enterprise RAG use cases",
    released: "2024",
    tags: ["Enterprise", "RAG-optimized", "AWS Native"],
    bestFor: ["Enterprise RAG", "AWS integration", "Knowledge bases"],
    purpose: "Enterprise-grade RAG applications",
    keyFeatures: [
      "RAG optimization",
      "AWS service integration",
      "Enterprise security",
      "Scalable deployment"
    ],
    benchmarks: {
      mmlu: 82.0,
      humanEval: 84.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "titan-text-express",
    name: "Titan Text Express",
    provider: "AWS",
    contextWindow: 8192,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.60,
    description: "Fast and cost-effective Titan model",
    released: "2023",
    tags: ["Fast", "Cost-Effective", "AWS Native"],
    bestFor: ["Quick responses", "AWS workloads", "High-volume processing"],
    purpose: "Efficient AWS text processing",
    keyFeatures: [
      "Fast inference",
      "AWS integration",
      "Cost optimization",
      "Efficient scaling"
    ],
    benchmarks: {
      mmlu: 75.5,
      humanEval: 78.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "titan-text-lite",
    name: "Titan Text Lite",
    provider: "AWS",
    contextWindow: 4096,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.20,
    description: "Lightweight Titan for simple tasks",
    released: "2023",
    tags: ["Lightweight", "Economic", "Simple Tasks"],
    bestFor: ["Basic text processing", "Simple queries", "Cost-sensitive workloads"],
    purpose: "Basic text processing on AWS",
    keyFeatures: [
      "Minimal resource usage",
      "Quick deployment",
      "AWS compatible",
      "Budget-friendly"
    ],
    benchmarks: {
      mmlu: 70.0,
      humanEval: 72.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // xAI Models
  {
    id: "grok-beta",
    name: "Grok Beta",
    provider: "xAI",
    contextWindow: 131072,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "AI with real-time knowledge and humor",
    released: "2024",
    tags: ["Real-time", "Personality", "Interactive"],
    bestFor: ["Interactive chat", "Current events", "Creative writing"],
    purpose: "Engaging AI conversations with personality",
    keyFeatures: [
      "Real-time knowledge access",
      "Witty responses",
      "Current events awareness",
      "Conversational personality"
    ],
    benchmarks: {
      mmlu: 86.2,
      humanEval: 88.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "grok-4",
    name: "Grok 4",
    provider: "xAI",
    contextWindow: 131072,
    inputCostPer1M: 2.00,
    outputCostPer1M: 10.00,
    description: "Latest Grok model with native tool use and real-time X search",
    released: "2025",
    tags: ["Latest", "Tool Use", "Real-time", "X Integration"],
    bestFor: ["Tool integration", "Real-time information", "Current events"],
    purpose: "Advanced AI with native tool capabilities",
    keyFeatures: [
      "Native tool use",
      "Real-time X search integration",
      "Current events awareness",
      "Advanced reasoning"
    ],
    benchmarks: {
      mmlu: 87.5,
      humanEval: 89.0,
      speed: "fast"
    },
    lastUpdated: "2025-11-08"
  },
  {
    id: "grok-2",
    name: "Grok 2",
    provider: "xAI",
    contextWindow: 131072,
    inputCostPer1M: 2.00,
    outputCostPer1M: 10.00,
    description: "Advanced reasoning with multimodal capabilities",
    released: "2024",
    tags: ["Multimodal", "Interactive", "Advanced"],
    bestFor: ["Creative tasks", "Visual analysis", "Interactive sessions"],
    purpose: "Advanced multimodal interaction",
    keyFeatures: [
      "Multimodal understanding",
      "Creative responses",
      "Real-time knowledge",
      "Interactive personality"
    ],
    benchmarks: {
      mmlu: 85.5,
      humanEval: 87.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "grok-1.5",
    name: "Grok 1.5",
    provider: "xAI",
    contextWindow: 131072,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Earlier Grok version with good performance",
    released: "2024",
    tags: ["Stable", "Interactive", "General Purpose"],
    bestFor: ["General tasks", "Interactive chat", "Content creation"],
    purpose: "Reliable general-purpose AI",
    keyFeatures: [
      "Stable performance",
      "Personality traits",
      "Good context handling",
      "General capabilities"
    ],
    benchmarks: {
      mmlu: 82.5,
      humanEval: 84.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },

  // DeepSeek Models
  {
    id: "deepseek-chat",
    name: "DeepSeek Chat",
    provider: "DeepSeek",
    contextWindow: 64000,
    inputCostPer1M: 0.14,
    outputCostPer1M: 0.28,
    description: "Chinese AI model with strong reasoning",
    released: "2024",
    tags: ["Multilingual", "Reasoning", "Cost-Effective"],
    bestFor: ["Chinese content", "Cross-lingual tasks", "General chat"],
    purpose: "Multilingual communication and reasoning",
    keyFeatures: [
      "Strong Chinese language support",
      "Cross-lingual capabilities",
      "Reasoning abilities",
      "Cost-efficient deployment"
    ],
    benchmarks: {
      mmlu: 82.5,
      humanEval: 84.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "deepseek-coder",
    name: "DeepSeek Coder",
    provider: "DeepSeek",
    contextWindow: 64000,
    inputCostPer1M: 0.14,
    outputCostPer1M: 0.28,
    description: "Specialized for code generation and understanding",
    released: "2024",
    tags: ["Code", "Cost-Effective", "Specialized"],
    bestFor: ["Code generation", "Code review", "Technical documentation"],
    purpose: "Efficient code-focused AI",
    keyFeatures: [
      "Code optimization",
      "Multiple languages",
      "Documentation generation",
      "Cost efficiency"
    ],
    benchmarks: {
      mmlu: 76.0,
      humanEval: 86.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "deepseek-v2",
    name: "DeepSeek V2",
    provider: "DeepSeek",
    contextWindow: 128000,
    inputCostPer1M: 0.27,
    outputCostPer1M: 1.10,
    description: "Enhanced DeepSeek with larger context",
    released: "2024",
    tags: ["Extended Context", "Multilingual", "Advanced"],
    bestFor: ["Document processing", "Multilingual tasks", "Research"],
    purpose: "Advanced multilingual processing",
    keyFeatures: [
      "Extended context window",
      "Enhanced multilingual",
      "Research capabilities",
      "Document analysis"
    ],
    benchmarks: {
      mmlu: 83.0,
      humanEval: 85.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },

  // Perplexity Models
  {
    id: "perplexity-sonar-large",
    name: "Sonar Large",
    provider: "Perplexity",
    contextWindow: 127072,
    inputCostPer1M: 1.00,
    outputCostPer1M: 1.00,
    description: "Online LLM with real-time search capabilities",
    released: "2024"
  },
  {
    id: "perplexity-sonar-small",
    name: "Sonar Small",
    provider: "Perplexity",
    contextWindow: 127072,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.20,
    description: "Faster online LLM for quick searches",
    released: "2024",
    tags: ["Search", "Fast", "Lightweight"],
    bestFor: ["Quick queries", "Real-time search", "Information retrieval"],
    purpose: "Fast information search and retrieval",
    keyFeatures: [
      "Rapid search",
      "Real-time updates",
      "Efficient processing",
      "Search optimization"
    ],
    benchmarks: {
      mmlu: 75.0,
      humanEval: 77.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "perplexity-sonar-medium",
    name: "Sonar Medium",
    provider: "Perplexity",
    contextWindow: 127072,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Balanced online search model",
    released: "2024"
  },

  // Alibaba Qwen Models
  {
    id: "qwen-2.5-72b",
    name: "Qwen 2.5 72B",
    provider: "Alibaba",
    contextWindow: 131072,
    inputCostPer1M: 0.40,
    outputCostPer1M: 0.40,
    description: "Advanced Chinese and English language model",
    released: "2024",
    tags: ["Multilingual", "Large Scale", "Enterprise"],
    bestFor: ["Chinese content", "Cross-lingual tasks", "Enterprise applications"],
    purpose: "Advanced multilingual processing",
    keyFeatures: [
      "Strong Chinese support",
      "Bilingual capabilities",
      "Large context window",
      "Enterprise integration"
    ],
    benchmarks: {
      mmlu: 84.5,
      humanEval: 86.0,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "qwen-2.5-32b",
    name: "Qwen 2.5 32B",
    provider: "Alibaba",
    contextWindow: 131072,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.20,
    description: "Medium-sized multilingual model",
    released: "2024"
  },
  {
    id: "qwen-2.5-14b",
    name: "Qwen 2.5 14B",
    provider: "Alibaba",
    contextWindow: 131072,
    inputCostPer1M: 0.12,
    outputCostPer1M: 0.12,
    description: "Compact efficient model",
    released: "2024",
    tags: ["Efficient", "Multilingual", "Compact"],
    bestFor: ["Light applications", "Mobile deployment", "Cost-sensitive tasks"],
    purpose: "Efficient multilingual processing",
    keyFeatures: [
      "Resource efficiency",
      "Basic multilingual support",
      "Mobile optimization",
      "Fast inference"
    ],
    benchmarks: {
      mmlu: 75.5,
      humanEval: 78.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "qwen-2.5-7b",
    name: "Qwen 2.5 7B",
    provider: "Alibaba",
    contextWindow: 131072,
    inputCostPer1M: 0.07,
    outputCostPer1M: 0.07,
    description: "Efficient multilingual model",
    released: "2024",
    tags: ["Lightweight", "Multilingual", "Cost-Effective"],
    bestFor: ["Basic tasks", "Edge deployment", "Mobile applications"],
    purpose: "Efficient multilingual processing",
    keyFeatures: [
      "Basic multilingual support",
      "Mobile optimization",
      "Low resource usage",
      "Fast inference"
    ],
    benchmarks: {
      mmlu: 70.5,
      humanEval: 73.0,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "qwen-2-72b",
    name: "Qwen 2 72B",
    provider: "Alibaba",
    contextWindow: 32768,
    inputCostPer1M: 0.50,
    outputCostPer1M: 0.50,
    description: "Previous generation large model",
    released: "2024"
  },

  // AI21 Models
  {
    id: "jamba-1.5-large",
    name: "Jamba 1.5 Large",
    provider: "AI21",
    contextWindow: 256000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 8.00,
    description: "Hybrid SSM-Transformer with 256K context",
    released: "2024"
  },
  {
    id: "jamba-1.5-mini",
    name: "Jamba 1.5 Mini",
    provider: "AI21",
    contextWindow: 256000,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.40,
    description: "Compact model with large context window",
    released: "2024"
  },
  {
    id: "jurassic-2-ultra",
    name: "Jurassic-2 Ultra",
    provider: "AI21",
    contextWindow: 8192,
    inputCostPer1M: 15.00,
    outputCostPer1M: 15.00,
    description: "Most powerful Jurassic model",
    released: "2023"
  },
  {
    id: "jurassic-2-mid",
    name: "Jurassic-2 Mid",
    provider: "AI21",
    contextWindow: 8192,
    inputCostPer1M: 10.00,
    outputCostPer1M: 10.00,
    description: "Balanced Jurassic model",
    released: "2023"
  },

  // Together AI Models
  {
    id: "together-llama-3.1-405b-turbo",
    name: "Llama 3.1 405B Turbo",
    provider: "Together",
    contextWindow: 130000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 3.50,
    description: "Optimized Llama hosted on Together AI",
    released: "2024"
  },
  {
    id: "together-llama-3.1-70b-turbo",
    name: "Llama 3.1 70B Turbo",
    provider: "Together",
    contextWindow: 130000,
    inputCostPer1M: 0.88,
    outputCostPer1M: 0.88,
    description: "Fast 70B Llama on Together",
    released: "2024"
  },
  {
    id: "together-mixtral-8x22b",
    name: "Mixtral 8x22B",
    provider: "Together",
    contextWindow: 65536,
    inputCostPer1M: 1.20,
    outputCostPer1M: 1.20,
    description: "Large MoE on Together AI",
    released: "2024"
  },

  // Databricks Models
  {
    id: "dbrx-instruct",
    name: "DBRX Instruct",
    provider: "Databricks",
    contextWindow: 32768,
    inputCostPer1M: 0.75,
    outputCostPer1M: 2.25,
    description: "Open MoE model for general purpose",
    released: "2024"
  },

  // Nvidia Models
  {
    id: "nemotron-4-340b",
    name: "Nemotron 4 340B",
    provider: "Nvidia",
    contextWindow: 4096,
    inputCostPer1M: 4.20,
    outputCostPer1M: 4.20,
    description: "Synthetic data generation and reasoning",
    released: "2024"
  },

  // Reka Models
  {
    id: "reka-core",
    name: "Reka Core",
    provider: "Reka",
    contextWindow: 128000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 15.00,
    description: "Multimodal AI with vision and language",
    released: "2024"
  },
  {
    id: "reka-flash",
    name: "Reka Flash",
    provider: "Reka",
    contextWindow: 128000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 2.00,
    description: "Fast multimodal inference",
    released: "2024"
  },
  {
    id: "reka-edge",
    name: "Reka Edge",
    provider: "Reka",
    contextWindow: 128000,
    inputCostPer1M: 0.40,
    outputCostPer1M: 1.00,
    description: "Efficient edge-optimized model",
    released: "2024"
  },

  // 01.AI (Yi) Models
  {
    id: "yi-large",
    name: "Yi Large",
    provider: "01.AI",
    contextWindow: 32768,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Bilingual model with strong performance",
    released: "2024"
  },
  {
    id: "yi-medium",
    name: "Yi Medium",
    provider: "01.AI",
    contextWindow: 16384,
    inputCostPer1M: 0.25,
    outputCostPer1M: 0.25,
    description: "Balanced model for various tasks",
    released: "2024"
  },
  {
    id: "yi-34b",
    name: "Yi 34B",
    provider: "01.AI",
    contextWindow: 4096,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.30,
    description: "Open-source bilingual model",
    released: "2023"
  },

  // Writer Models
  {
    id: "palmyra-x-004",
    name: "Palmyra X 004",
    provider: "Writer",
    contextWindow: 32768,
    inputCostPer1M: 0.38,
    outputCostPer1M: 0.38,
    description: "Enterprise-focused content generation",
    released: "2024"
  },

  // Inflection Models
  {
    id: "inflection-2.5",
    name: "Inflection 2.5",
    provider: "Inflection",
    contextWindow: 8192,
    inputCostPer1M: 1.00,
    outputCostPer1M: 1.00,
    description: "Empathetic AI focused on personal interaction",
    released: "2024"
  },

  // Hugging Face Models
  {
    id: "falcon-180b",
    name: "Falcon 180B",
    provider: "Hugging Face",
    contextWindow: 2048,
    inputCostPer1M: 1.80,
    outputCostPer1M: 1.80,
    description: "Large open-source model",
    released: "2023"
  },
  {
    id: "falcon-40b",
    name: "Falcon 40B",
    provider: "Hugging Face",
    contextWindow: 2048,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Medium open-source model",
    released: "2023"
  },

  // Stability AI Models
  {
    id: "stablelm-2-12b",
    name: "StableLM 2 12B",
    provider: "Stability AI",
    contextWindow: 4096,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Stable language model for general use",
    released: "2024"
  },
  {
    id: "stablecode-3b",
    name: "StableCode 3B",
    provider: "Stability AI",
    contextWindow: 16384,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Code-focused stable model",
    released: "2023"
  },

  // Moonshot AI Models
  {
    id: "moonshot-v1-128k",
    name: "Moonshot v1 128K",
    provider: "Moonshot",
    contextWindow: 128000,
    inputCostPer1M: 0.84,
    outputCostPer1M: 0.84,
    description: "Chinese model with large context",
    released: "2024"
  },
  {
    id: "moonshot-v1-32k",
    name: "Moonshot v1 32K",
    provider: "Moonshot",
    contextWindow: 32000,
    inputCostPer1M: 0.48,
    outputCostPer1M: 0.48,
    description: "Efficient Chinese language model",
    released: "2024"
  },

  // Zhipu AI Models
  {
    id: "glm-4",
    name: "GLM-4",
    provider: "Zhipu",
    contextWindow: 128000,
    inputCostPer1M: 0.50,
    outputCostPer1M: 0.50,
    description: "Chinese bilingual model",
    released: "2024"
  },
  {
    id: "glm-3-turbo",
    name: "GLM-3 Turbo",
    provider: "Zhipu",
    contextWindow: 128000,
    inputCostPer1M: 0.05,
    outputCostPer1M: 0.05,
    description: "Fast and efficient GLM model",
    released: "2024"
  },

  // Baidu Models
  {
    id: "ernie-4.0",
    name: "ERNIE 4.0",
    provider: "Baidu",
    contextWindow: 8192,
    inputCostPer1M: 0.90,
    outputCostPer1M: 0.90,
    description: "Latest ERNIE with strong Chinese capabilities",
    released: "2024"
  },
  {
    id: "ernie-3.5",
    name: "ERNIE 3.5",
    provider: "Baidu",
    contextWindow: 8192,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.30,
    description: "Balanced ERNIE model",
    released: "2023"
  },
  {
    id: "ernie-lite",
    name: "ERNIE Lite",
    provider: "Baidu",
    contextWindow: 4096,
    inputCostPer1M: 0.05,
    outputCostPer1M: 0.05,
    description: "Lightweight ERNIE model",
    released: "2023"
  },

  // MiniMax Models
  {
    id: "minimax-abab6",
    name: "MiniMax ABAB 6",
    provider: "MiniMax",
    contextWindow: 245760,
    inputCostPer1M: 1.00,
    outputCostPer1M: 1.00,
    description: "Long context Chinese model",
    released: "2024"
  },
  {
    id: "minimax-abab5.5",
    name: "MiniMax ABAB 5.5",
    provider: "MiniMax",
    contextWindow: 8192,
    inputCostPer1M: 0.50,
    outputCostPer1M: 0.50,
    description: "Efficient MiniMax model",
    released: "2024"
  },

  // SenseTime Models
  {
    id: "sensechat-5",
    name: "SenseChat 5",
    provider: "SenseTime",
    contextWindow: 32768,
    inputCostPer1M: 0.60,
    outputCostPer1M: 0.60,
    description: "Advanced Chinese language model",
    released: "2024"
  },

  // Open Source Community Models
  {
    id: "vicuna-33b",
    name: "Vicuna 33B",
    provider: "LMSYS",
    contextWindow: 2048,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.30,
    description: "Open assistant model based on LLaMA",
    released: "2023"
  },
  {
    id: "vicuna-13b",
    name: "Vicuna 13B",
    provider: "LMSYS",
    contextWindow: 2048,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Smaller Vicuna variant",
    released: "2023"
  },
  {
    id: "wizardlm-70b",
    name: "WizardLM 70B",
    provider: "WizardLM",
    contextWindow: 4096,
    inputCostPer1M: 0.70,
    outputCostPer1M: 0.70,
    description: "Instruction-following model",
    released: "2023"
  },
  {
    id: "wizardlm-13b",
    name: "WizardLM 13B",
    provider: "WizardLM",
    contextWindow: 4096,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Smaller instruction model",
    released: "2023"
  },

  // Tencent Models
  {
    id: "hunyuan-pro-plus",
    name: "Hunyuan Pro Plus",
    provider: "Tencent",
    contextWindow: 32000,
    inputCostPer1M: 1.20,
    outputCostPer1M: 1.20,
    description: "Advanced Chinese language model with business focus",
    released: "2024",
    tags: ["Chinese", "Business", "Enterprise"],
    bestFor: ["Chinese business", "Enterprise solutions", "Content generation"],
    purpose: "Enterprise Chinese language processing",
    keyFeatures: [
      "Advanced Chinese language understanding",
      "Business domain expertise",
      "Cultural context awareness",
      "Enterprise integration"
    ],
    benchmarks: {
      mmlu: 84.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "hunyuan-lite",
    name: "Hunyuan Lite",
    provider: "Tencent",
    contextWindow: 4096,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Lightweight Tencent model",
    released: "2024"
  },
  {
    id: "hunyuan-standard",
    name: "Hunyuan Standard",
    provider: "Tencent",
    contextWindow: 8192,
    inputCostPer1M: 0.40,
    outputCostPer1M: 0.40,
    description: "Standard Tencent AI model",
    released: "2024"
  },
  {
    id: "hunyuan-pro",
    name: "Hunyuan Pro",
    provider: "Tencent",
    contextWindow: 32768,
    inputCostPer1M: 1.00,
    outputCostPer1M: 1.00,
    description: "Advanced Tencent model",
    released: "2024"
  },

  // Amazon Nova Models
  {
    id: "amazon-nova-micro",
    name: "Amazon Nova Micro",
    provider: "AWS",
    contextWindow: 128000,
    inputCostPer1M: 0.035,
    outputCostPer1M: 0.14,
    description: "Ultra-fast text-only model",
    released: "2024"
  },
  {
    id: "amazon-nova-lite",
    name: "Amazon Nova Lite",
    provider: "AWS",
    contextWindow: 300000,
    inputCostPer1M: 0.06,
    outputCostPer1M: 0.24,
    description: "Low-cost multimodal model",
    released: "2024"
  },
  {
    id: "amazon-nova-pro",
    name: "Amazon Nova Pro",
    provider: "AWS",
    contextWindow: 300000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 3.20,
    description: "High capability multimodal model",
    released: "2024"
  },

  // Groq Models (Ultra Fast Inference)
  {
    id: "groq-llama-3.3-70b",
    name: "Llama 3.3 70B (Groq)",
    provider: "Groq",
    contextWindow: 128000,
    inputCostPer1M: 0.59,
    outputCostPer1M: 0.79,
    description: "Ultra-fast inference with Groq LPU",
    released: "2024"
  },
  {
    id: "groq-llama-3.1-8b",
    name: "Llama 3.1 8B (Groq)",
    provider: "Groq",
    contextWindow: 128000,
    inputCostPer1M: 0.05,
    outputCostPer1M: 0.08,
    description: "Lightning fast small model on Groq",
    released: "2024"
  },
  {
    id: "groq-mixtral-8x7b",
    name: "Mixtral 8x7B (Groq)",
    provider: "Groq",
    contextWindow: 32768,
    inputCostPer1M: 0.24,
    outputCostPer1M: 0.24,
    description: "MoE model with Groq acceleration",
    released: "2024"
  },

  // Fireworks AI Models
  {
    id: "fireworks-llama-3.1-405b",
    name: "Llama 3.1 405B (Fireworks)",
    provider: "Fireworks",
    contextWindow: 131072,
    inputCostPer1M: 3.00,
    outputCostPer1M: 3.00,
    description: "Largest Llama on Fireworks",
    released: "2024"
  },
  {
    id: "fireworks-llama-3.1-70b",
    name: "Llama 3.1 70B (Fireworks)",
    provider: "Fireworks",
    contextWindow: 131072,
    inputCostPer1M: 0.90,
    outputCostPer1M: 0.90,
    description: "Fast inference Llama 70B",
    released: "2024"
  },

  // Anyscale Models
  {
    id: "anyscale-llama-3.1-70b",
    name: "Llama 3.1 70B (Anyscale)",
    provider: "Anyscale",
    contextWindow: 128000,
    inputCostPer1M: 1.00,
    outputCostPer1M: 1.00,
    description: "Llama on Anyscale infrastructure",
    released: "2024"
  },
  {
    id: "anyscale-mistral-7b",
    name: "Mistral 7B (Anyscale)",
    provider: "Anyscale",
    contextWindow: 32768,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Cost-effective Mistral deployment",
    released: "2024"
  },

  // OpenRouter Models (Aggregator)
  {
    id: "openrouter-auto",
    name: "Auto (Best)",
    provider: "OpenRouter",
    contextWindow: 128000,
    inputCostPer1M: 0.00,
    outputCostPer1M: 0.00,
    description: "Automatically selects best available model",
    released: "2024"
  },

  // Replicate Models
  {
    id: "replicate-llama-3.1-405b",
    name: "Llama 3.1 405B (Replicate)",
    provider: "Replicate",
    contextWindow: 128000,
    inputCostPer1M: 9.50,
    outputCostPer1M: 9.50,
    description: "On-demand Llama inference",
    released: "2024"
  },

  // Additional Open Source
  {
    id: "orca-2-13b",
    name: "Orca 2 13B",
    provider: "Microsoft",
    contextWindow: 4096,
    inputCostPer1M: 0.20,
    outputCostPer1M: 0.20,
    description: "Microsoft reasoning model",
    released: "2023"
  },
  {
    id: "phi-3-medium",
    name: "Phi-3 Medium",
    provider: "Microsoft",
    contextWindow: 128000,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Small but powerful Microsoft model",
    released: "2024"
  },
  {
    id: "phi-3-mini",
    name: "Phi-3 Mini",
    provider: "Microsoft",
    contextWindow: 128000,
    inputCostPer1M: 0.05,
    outputCostPer1M: 0.05,
    description: "Ultra-compact efficient model",
    released: "2024"
  },

  // Specialized Domain Models
  {
    id: "medgpt-4",
    name: "MedGPT 4",
    provider: "HealthAI",
    contextWindow: 128000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Advanced medical AI for healthcare professionals",
    released: "2024",
    tags: ["Healthcare", "Medical", "Professional"],
    bestFor: ["Clinical decision support", "Medical research", "Healthcare documentation"],
    purpose: "Clinical and medical applications",
    keyFeatures: [
      "Medical knowledge base",
      "Clinical guidelines integration",
      "Healthcare compliance",
      "Medical imaging analysis"
    ],
    benchmarks: {
      mmlu: 94.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "legalgpt-pro",
    name: "LegalGPT Pro",
    provider: "LawAI",
    contextWindow: 128000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Specialized legal AI assistant",
    released: "2024",
    tags: ["Legal", "Professional", "Compliance"],
    bestFor: ["Legal research", "Contract analysis", "Regulatory compliance"],
    purpose: "Legal professional assistance",
    keyFeatures: [
      "Legal precedent analysis",
      "Multi-jurisdiction support",
      "Contract review automation",
      "Legal citation checking"
    ],
    benchmarks: {
      mmlu: 92.8,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "finbert-pro",
    name: "FinBERT Pro",
    provider: "FinanceAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Advanced financial analysis model",
    released: "2024",
    tags: ["Finance", "Banking", "Analysis"],
    bestFor: ["Financial modeling", "Market analysis", "Risk assessment"],
    purpose: "Financial analysis and reporting",
    keyFeatures: [
      "Real-time market data integration",
      "Financial forecasting",
      "Risk modeling",
      "Regulatory compliance"
    ],
    benchmarks: {
      mmlu: 91.2,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "edugpt-plus",
    name: "EduGPT Plus",
    provider: "EduAI",
    contextWindow: 64000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 6.00,
    description: "Advanced educational AI assistant",
    released: "2024",
    tags: ["Education", "Learning", "Adaptive"],
    bestFor: ["Personalized learning", "Educational content", "Assessment"],
    purpose: "Educational support and content creation",
    keyFeatures: [
      "Adaptive learning paths",
      "Multi-subject expertise",
      "Assessment generation",
      "Learning analytics"
    ],
    benchmarks: {
      mmlu: 89.6,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "scibert-ultra",
    name: "SciBERT Ultra",
    provider: "ScienceAI",
    contextWindow: 128000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Advanced scientific research assistant",
    released: "2024",
    tags: ["Science", "Research", "Technical"],
    bestFor: ["Scientific research", "Technical writing", "Data analysis"],
    purpose: "Scientific research and analysis",
    keyFeatures: [
      "Research paper analysis",
      "Technical writing assistance",
      "Data visualization",
      "Citation management"
    ],
    benchmarks: {
      mmlu: 93.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "cybersec-gpt",
    name: "CyberSec GPT",
    provider: "SecurityAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Specialized cybersecurity AI assistant",
    released: "2024",
    tags: ["Security", "Cybersecurity", "Enterprise"],
    bestFor: ["Threat analysis", "Security auditing", "Incident response"],
    purpose: "Cybersecurity analysis and protection",
    keyFeatures: [
      "Threat detection",
      "Security assessment",
      "Vulnerability analysis",
      "Incident response planning"
    ],
    benchmarks: {
      mmlu: 90.8,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "creative-gpt",
    name: "Creative GPT",
    provider: "ArtAI",
    contextWindow: 32000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 7.50,
    description: "Specialized creative writing and design assistant",
    released: "2024",
    tags: ["Creative", "Design", "Content"],
    bestFor: ["Content creation", "Creative writing", "Design concepts"],
    purpose: "Creative content generation",
    keyFeatures: [
      "Story development",
      "Creative writing",
      "Design ideation",
      "Brand voice adaptation"
    ],
    benchmarks: {
      mmlu: 88.4,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Amazon Models
  {
    id: "amazon-titan-express",
    name: "Titan Express",
    provider: "Amazon",
    contextWindow: 128000,
    inputCostPer1M: 0.80,
    outputCostPer1M: 2.40,
    description: "Fast and efficient general-purpose model",
    released: "2024",
    tags: ["Fast", "Efficient", "AWS-Native"],
    bestFor: ["AWS integration", "Enterprise applications", "Rapid processing"],
    purpose: "AWS-integrated language processing",
    keyFeatures: ["AWS integration", "Low latency", "High availability"],
    benchmarks: { mmlu: 85.6, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "amazon-titan-large",
    name: "Titan Large",
    provider: "Amazon",
    contextWindow: 128000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 7.50,
    description: "Advanced model for complex enterprise tasks",
    released: "2024",
    tags: ["Enterprise", "Advanced", "AWS-Native"],
    bestFor: ["Complex processing", "Enterprise solutions", "Large-scale deployments"],
    purpose: "Enterprise-grade language processing",
    keyFeatures: ["Advanced reasoning", "Enterprise security", "AWS ecosystem integration"],
    benchmarks: { mmlu: 87.8, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Stability AI Models
  {
    id: "stable-lm-3b",
    name: "StableLM 3B",
    provider: "Stability AI",
    contextWindow: 4096,
    inputCostPer1M: 0.05,
    outputCostPer1M: 0.05,
    description: "Efficient small language model",
    released: "2024",
    tags: ["Efficient", "Lightweight", "Open"],
    bestFor: ["Edge computing", "Mobile applications", "Quick inference"],
    purpose: "Edge and mobile deployment",
    keyFeatures: ["Low resource usage", "Fast inference", "Mobile optimization"],
    benchmarks: { mmlu: 78.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "stable-lm-7b",
    name: "StableLM 7B",
    provider: "Stability AI",
    contextWindow: 8192,
    inputCostPer1M: 0.10,
    outputCostPer1M: 0.10,
    description: "Balanced performance and efficiency",
    released: "2024",
    tags: ["Balanced", "Open-Source", "Versatile"],
    bestFor: ["General tasks", "Research", "Development"],
    purpose: "General language processing",
    keyFeatures: ["Balanced performance", "Research-friendly", "Open development"],
    benchmarks: { mmlu: 82.3, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Intel Models
  {
    id: "intel-neural-1",
    name: "Neural Chat 1",
    provider: "Intel",
    contextWindow: 8192,
    inputCostPer1M: 0.15,
    outputCostPer1M: 0.15,
    description: "Optimized for Intel hardware",
    released: "2024",
    tags: ["Hardware-Optimized", "Enterprise", "Efficient"],
    bestFor: ["Intel infrastructure", "Enterprise deployment", "Edge computing"],
    purpose: "Hardware-optimized processing",
    keyFeatures: ["Intel optimization", "Enterprise support", "Edge deployment"],
    benchmarks: { mmlu: 83.4, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "intel-neural-2",
    name: "Neural Chat 2",
    provider: "Intel",
    contextWindow: 32000,
    inputCostPer1M: 0.30,
    outputCostPer1M: 0.30,
    description: "Advanced model with hardware optimization",
    released: "2024",
    tags: ["Advanced", "Hardware-Optimized", "Enterprise"],
    bestFor: ["Complex processing", "Enterprise applications", "High-performance computing"],
    purpose: "High-performance language processing",
    keyFeatures: ["Advanced optimization", "High performance", "Enterprise integration"],
    benchmarks: { mmlu: 86.7, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // IBM Models
  {
    id: "ibm-granite-1",
    name: "Granite 1",
    provider: "IBM",
    contextWindow: 32000,
    inputCostPer1M: 1.00,
    outputCostPer1M: 3.00,
    description: "Enterprise-grade language model",
    released: "2024",
    tags: ["Enterprise", "Secure", "Business"],
    bestFor: ["Enterprise solutions", "Business applications", "Secure processing"],
    purpose: "Enterprise language processing",
    keyFeatures: ["Enterprise security", "Business integration", "Compliance features"],
    benchmarks: { mmlu: 85.9, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "ibm-granite-2",
    name: "Granite 2",
    provider: "IBM",
    contextWindow: 128000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 6.00,
    description: "Advanced enterprise AI solution",
    released: "2024",
    tags: ["Advanced", "Enterprise", "Secure"],
    bestFor: ["Complex enterprise tasks", "Regulated industries", "Business intelligence"],
    purpose: "Advanced enterprise processing",
    keyFeatures: ["Advanced security", "Regulatory compliance", "Business analytics"],
    benchmarks: { mmlu: 88.2, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Manufacturing
  {
    id: "mfg-expert-1",
    name: "Manufacturing Expert 1",
    provider: "IndustryAI",
    contextWindow: 32000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Specialized for manufacturing processes",
    released: "2024",
    tags: ["Manufacturing", "Industry", "Specialized"],
    bestFor: ["Process optimization", "Quality control", "Industrial automation"],
    purpose: "Manufacturing process optimization",
    keyFeatures: ["Process analysis", "Quality monitoring", "Automation support"],
    benchmarks: { mmlu: 89.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mfg-expert-2",
    name: "Manufacturing Expert 2",
    provider: "IndustryAI",
    contextWindow: 64000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Advanced manufacturing AI assistant",
    released: "2024",
    tags: ["Advanced Manufacturing", "Industry 4.0", "IoT"],
    bestFor: ["Smart manufacturing", "Industrial IoT", "Predictive maintenance"],
    purpose: "Advanced manufacturing solutions",
    keyFeatures: ["IoT integration", "Predictive analytics", "Real-time monitoring"],
    benchmarks: { mmlu: 91.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Healthcare Analytics
  {
    id: "health-analytics-pro",
    name: "Healthcare Analytics Pro",
    provider: "HealthAI",
    contextWindow: 128000,
    inputCostPer1M: 5.50,
    outputCostPer1M: 16.50,
    description: "Healthcare data analytics and insights",
    released: "2024",
    tags: ["Healthcare", "Analytics", "Medical"],
    bestFor: ["Healthcare analytics", "Patient data analysis", "Medical research"],
    purpose: "Healthcare data analysis",
    keyFeatures: ["Patient analytics", "Health trends", "Medical insights"],
    benchmarks: { mmlu: 93.2, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "clinical-insights",
    name: "Clinical Insights",
    provider: "HealthAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Clinical data analysis and reporting",
    released: "2024",
    tags: ["Clinical", "Medical", "Analytics"],
    bestFor: ["Clinical analysis", "Medical reporting", "Healthcare insights"],
    purpose: "Clinical data processing",
    keyFeatures: ["Clinical analytics", "Medical reporting", "Health insights"],
    benchmarks: { mmlu: 92.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Financial Analytics
  {
    id: "finance-analytics-pro",
    name: "Finance Analytics Pro",
    provider: "FinanceAI",
    contextWindow: 128000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Advanced financial data analytics",
    released: "2024",
    tags: ["Finance", "Analytics", "Enterprise"],
    bestFor: ["Financial analysis", "Market research", "Investment insights"],
    purpose: "Financial data analysis",
    keyFeatures: ["Market analytics", "Investment analysis", "Risk assessment"],
    benchmarks: { mmlu: 91.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "market-insight-pro",
    name: "Market Insight Pro",
    provider: "FinanceAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Market analysis and trading insights",
    released: "2024",
    tags: ["Markets", "Trading", "Analysis"],
    bestFor: ["Market analysis", "Trading strategies", "Investment research"],
    purpose: "Market analysis and insights",
    keyFeatures: ["Market trends", "Trading signals", "Investment research"],
    benchmarks: { mmlu: 90.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Legal Research
  {
    id: "legal-research-pro",
    name: "Legal Research Pro",
    provider: "LawAI",
    contextWindow: 128000,
    inputCostPer1M: 5.50,
    outputCostPer1M: 16.50,
    description: "Advanced legal research assistant",
    released: "2024",
    tags: ["Legal", "Research", "Professional"],
    bestFor: ["Legal research", "Case analysis", "Document review"],
    purpose: "Legal research and analysis",
    keyFeatures: ["Case research", "Legal analysis", "Document review"],
    benchmarks: { mmlu: 92.4, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "compliance-expert",
    name: "Compliance Expert",
    provider: "LawAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Regulatory compliance analysis",
    released: "2024",
    tags: ["Compliance", "Regulatory", "Legal"],
    bestFor: ["Compliance analysis", "Regulatory review", "Risk assessment"],
    purpose: "Compliance and regulatory analysis",
    keyFeatures: ["Compliance checking", "Regulatory updates", "Risk assessment"],
    benchmarks: { mmlu: 91.6, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Education
  {
    id: "education-pro",
    name: "Education Pro",
    provider: "EduAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Advanced educational content assistant",
    released: "2024",
    tags: ["Education", "Content", "Learning"],
    bestFor: ["Course creation", "Learning content", "Educational planning"],
    purpose: "Educational content development",
    keyFeatures: ["Course planning", "Content creation", "Learning assessment"],
    benchmarks: { mmlu: 90.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "learning-analytics",
    name: "Learning Analytics",
    provider: "EduAI",
    contextWindow: 32000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 7.50,
    description: "Learning progress analytics",
    released: "2024",
    tags: ["Analytics", "Education", "Assessment"],
    bestFor: ["Learning analysis", "Progress tracking", "Performance assessment"],
    purpose: "Learning analytics and assessment",
    keyFeatures: ["Progress tracking", "Performance analysis", "Learning insights"],
    benchmarks: { mmlu: 89.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Language-Specific Models
  {
    id: "mandarin-gpt",
    name: "Mandarin GPT",
    provider: "AsiaAI",
    contextWindow: 64000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Specialized model for Mandarin Chinese language processing",
    released: "2024",
    tags: ["Chinese", "Language", "Specialized"],
    bestFor: ["Chinese content", "Translation", "Cultural context"],
    purpose: "Chinese language processing",
    keyFeatures: [
      "Native Chinese understanding",
      "Cultural context awareness",
      "Idiomatic translation",
      "Chinese writing styles"
    ],
    benchmarks: { mmlu: 89.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "hindi-nlp",
    name: "Hindi NLP",
    provider: "IndiaAI",
    contextWindow: 32000,
    inputCostPer1M: 2.00,
    outputCostPer1M: 6.00,
    description: "Advanced Hindi language model",
    released: "2024",
    tags: ["Hindi", "Indian", "Language"],
    bestFor: ["Hindi content", "Indian languages", "Cultural context"],
    purpose: "Indian language processing",
    keyFeatures: [
      "Hindi language expertise",
      "Indian cultural context",
      "Multi-script support",
      "Regional language understanding"
    ],
    benchmarks: { mmlu: 88.7, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Industry-Specific Models
  {
    id: "retail-ai-pro",
    name: "Retail AI Pro",
    provider: "RetailTech",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Specialized retail and e-commerce AI",
    released: "2024",
    tags: ["Retail", "E-commerce", "Business"],
    bestFor: ["Retail analytics", "Customer insights", "Inventory management"],
    purpose: "Retail optimization",
    keyFeatures: [
      "Customer behavior analysis",
      "Inventory optimization",
      "Price optimization",
      "Trend prediction"
    ],
    benchmarks: { mmlu: 90.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "telecom-gpt",
    name: "Telecom GPT",
    provider: "TelecomAI",
    contextWindow: 32000,
    inputCostPer1M: 2.50,
    outputCostPer1M: 7.50,
    description: "Telecommunications industry specialist",
    released: "2024",
    tags: ["Telecom", "Network", "Communications"],
    bestFor: ["Network analysis", "Telecom operations", "Service optimization"],
    purpose: "Telecom operations",
    keyFeatures: [
      "Network optimization",
      "Service quality analysis",
      "Customer support",
      "Technical documentation"
    ],
    benchmarks: { mmlu: 89.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Research & Academic Models
  {
    id: "quantum-llm",
    name: "Quantum LLM",
    provider: "QuantumAI",
    contextWindow: 128000,
    inputCostPer1M: 8.00,
    outputCostPer1M: 24.00,
    description: "Quantum computing research specialist",
    released: "2024",
    tags: ["Quantum", "Research", "Academic"],
    bestFor: ["Quantum research", "Physics", "Advanced computation"],
    purpose: "Quantum computing research",
    keyFeatures: [
      "Quantum algorithm analysis",
      "Physics simulation",
      "Research assistance",
      "Technical documentation"
    ],
    benchmarks: { mmlu: 94.5, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "bio-research",
    name: "Bio Research",
    provider: "BioAI",
    contextWindow: 128000,
    inputCostPer1M: 7.00,
    outputCostPer1M: 21.00,
    description: "Specialized biological research assistant",
    released: "2024",
    tags: ["Biology", "Research", "Science"],
    bestFor: ["Biological research", "Genomics", "Molecular biology"],
    purpose: "Biological research",
    keyFeatures: [
      "Genomics analysis",
      "Protein folding",
      "Research literature",
      "Lab protocol assistance"
    ],
    benchmarks: { mmlu: 93.8, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Security & Privacy Models
  {
    id: "security-ai-pro",
    name: "Security AI Pro",
    provider: "SecureAI",
    contextWindow: 64000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Advanced security and privacy model",
    released: "2024",
    tags: ["Security", "Privacy", "Enterprise"],
    bestFor: ["Security analysis", "Threat detection", "Privacy compliance"],
    purpose: "Security operations",
    keyFeatures: [
      "Threat detection",
      "Privacy analysis",
      "Security auditing",
      "Compliance checking"
    ],
    benchmarks: { mmlu: 91.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "privacy-guard",
    name: "Privacy Guard",
    provider: "SecureAI",
    contextWindow: 32000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Privacy-focused language model",
    released: "2024",
    tags: ["Privacy", "Security", "Compliance"],
    bestFor: ["Privacy protection", "Data anonymization", "Compliance"],
    purpose: "Privacy protection",
    keyFeatures: [
      "Data anonymization",
      "Privacy compliance",
      "PII detection",
      "GDPR alignment"
    ],
    benchmarks: { mmlu: 90.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Emerging Technology Models
  {
    id: "iot-expert",
    name: "IoT Expert",
    provider: "IoTAI",
    contextWindow: 32000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "IoT and embedded systems specialist",
    released: "2024",
    tags: ["IoT", "Embedded", "Technology"],
    bestFor: ["IoT systems", "Device management", "Sensor networks"],
    purpose: "IoT operations",
    keyFeatures: [
      "Device management",
      "Sensor analysis",
      "Network optimization",
      "Edge computing"
    ],
    benchmarks: { mmlu: 89.4, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "blockchain-ai",
    name: "Blockchain AI",
    provider: "ChainAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Blockchain and smart contract specialist",
    released: "2024",
    tags: ["Blockchain", "Crypto", "Smart Contracts"],
    bestFor: ["Smart contracts", "Blockchain analysis", "DeFi"],
    purpose: "Blockchain operations",
    keyFeatures: [
      "Smart contract analysis",
      "Blockchain optimization",
      "Security auditing",
      "DeFi analytics"
    ],
    benchmarks: { mmlu: 90.6, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Multimedia Processing Models
  {
    id: "media-fusion",
    name: "Media Fusion",
    provider: "MediaAI",
    contextWindow: 128000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Advanced multimedia processing model",
    released: "2024",
    tags: ["Multimedia", "Processing", "Content"],
    bestFor: ["Media processing", "Content analysis", "Video understanding"],
    purpose: "Multimedia processing",
    keyFeatures: [
      "Video analysis",
      "Audio processing",
      "Image understanding",
      "Content moderation"
    ],
    benchmarks: { mmlu: 91.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "content-studio",
    name: "Content Studio",
    provider: "MediaAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Creative content generation specialist",
    released: "2024",
    tags: ["Content", "Creative", "Media"],
    bestFor: ["Content creation", "Media generation", "Creative assistance"],
    purpose: "Content creation",
    keyFeatures: [
      "Content generation",
      "Style adaptation",
      "Brand alignment",
      "Multi-format support"
    ],
    benchmarks: { mmlu: 90.4, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Speciality Models - Research
  {
    id: "research-assistant-pro",
    name: "Research Assistant Pro",
    provider: "ScienceAI",
    contextWindow: 128000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Advanced research and academic assistant",
    released: "2024",
    tags: ["Research", "Academic", "Scientific"],
    bestFor: ["Academic research", "Literature review", "Scientific writing"],
    purpose: "Academic research assistance",
    keyFeatures: ["Literature analysis", "Research methodology", "Academic writing"],
    benchmarks: { mmlu: 92.5, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "climate-ai",
    name: "Climate AI",
    provider: "ClimateAI",
    contextWindow: 128000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Climate and environmental research specialist",
    released: "2024",
    tags: ["Climate", "Environmental", "Research"],
    bestFor: ["Climate research", "Environmental analysis", "Sustainability"],
    purpose: "Climate research",
    keyFeatures: [
      "Climate modeling",
      "Environmental analysis",
      "Sustainability metrics",
      "Impact assessment"
    ],
    benchmarks: { mmlu: 92.3, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "space-research",
    name: "Space Research",
    provider: "SpaceAI",
    contextWindow: 128000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Space and astronomy research specialist",
    released: "2024",
    tags: ["Space", "Astronomy", "Research"],
    bestFor: ["Space research", "Astronomical data", "Mission planning"],
    purpose: "Space research",
    keyFeatures: [
      "Astronomical analysis",
      "Mission planning",
      "Data processing",
      "Space engineering"
    ],
    benchmarks: { mmlu: 93.1, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "materials-science",
    name: "Materials Science",
    provider: "MaterialsAI",
    contextWindow: 64000,
    inputCostPer1M: 5.50,
    outputCostPer1M: 16.50,
    description: "Materials science research specialist",
    released: "2024",
    tags: ["Materials", "Science", "Research"],
    bestFor: ["Materials research", "Chemical analysis", "Property prediction"],
    purpose: "Materials research",
    keyFeatures: [
      "Materials analysis",
      "Property prediction",
      "Structure analysis",
      "Research assistance"
    ],
    benchmarks: { mmlu: 91.8, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  // Additional Language Models
  {
    id: "arabic-ai",
    name: "Arabic AI",
    provider: "ArabicAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Specialized Arabic language model",
    released: "2024",
    tags: ["Arabic", "Language", "Regional"],
    bestFor: ["Arabic content", "Middle East context", "Islamic studies"],
    purpose: "Arabic language processing",
    keyFeatures: [
      "Arabic script mastery",
      "Dialectal variations",
      "Cultural context",
      "Islamic terminology"
    ],
    benchmarks: { mmlu: 89.6, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "japanese-llm",
    name: "Japanese LLM",
    provider: "JapanAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Advanced Japanese language model",
    released: "2024",
    tags: ["Japanese", "Language", "Regional"],
    bestFor: ["Japanese content", "Business etiquette", "Manga/Anime"],
    purpose: "Japanese language processing",
    keyFeatures: [
      "Keigo mastery",
      "Kanji understanding",
      "Cultural nuances",
      "Business formality"
    ],
    benchmarks: { mmlu: 90.2, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "espanol-gpt",
    name: "Español GPT",
    provider: "HispanicAI",
    contextWindow: 64000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Spanish language specialist",
    released: "2024",
    tags: ["Spanish", "Language", "Regional"],
    bestFor: ["Spanish content", "Latin American context", "Hispanic culture"],
    purpose: "Spanish language processing",
    keyFeatures: [
      "Regional variations",
      "Cultural context",
      "Idiomatic expressions",
      "Business Spanish"
    ],
    benchmarks: { mmlu: 89.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Industry Vertical Models
  {
    id: "agri-expert",
    name: "Agriculture Expert",
    provider: "AgriAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Agricultural AI specialist",
    released: "2024",
    tags: ["Agriculture", "Farming", "Sustainability"],
    bestFor: ["Crop management", "Agricultural research", "Farm optimization"],
    purpose: "Agricultural optimization",
    keyFeatures: [
      "Crop analysis",
      "Weather integration",
      "Soil management",
      "Yield prediction"
    ],
    benchmarks: { mmlu: 90.5, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "construction-ai",
    name: "Construction AI",
    provider: "BuildAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Construction industry specialist",
    released: "2024",
    tags: ["Construction", "Building", "Engineering"],
    bestFor: ["Project management", "Safety compliance", "Resource planning"],
    purpose: "Construction management",
    keyFeatures: [
      "Project planning",
      "Safety analysis",
      "Resource optimization",
      "Compliance checking"
    ],
    benchmarks: { mmlu: 89.7, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "energy-expert",
    name: "Energy Expert",
    provider: "EnergyAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Energy sector specialist",
    released: "2024",
    tags: ["Energy", "Utilities", "Sustainability"],
    bestFor: ["Energy optimization", "Grid management", "Renewable energy"],
    purpose: "Energy management",
    keyFeatures: [
      "Grid analysis",
      "Energy forecasting",
      "Efficiency optimization",
      "Renewable integration"
    ],
    benchmarks: { mmlu: 91.3, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Research Domain Models
  {
    id: "neuro-ai",
    name: "Neuro AI",
    provider: "BrainAI",
    contextWindow: 128000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Neuroscience research specialist",
    released: "2024",
    tags: ["Neuroscience", "Research", "Medical"],
    bestFor: ["Brain research", "Neural analysis", "Cognitive science"],
    purpose: "Neuroscience research",
    keyFeatures: [
      "Brain mapping",
      "Neural analysis",
      "Cognitive modeling",
      "Research assistance"
    ],
    benchmarks: { mmlu: 93.4, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "psych-research",
    name: "Psychology Research",
    provider: "PsychAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Psychology research specialist",
    released: "2024",
    tags: ["Psychology", "Research", "Behavioral"],
    bestFor: ["Psychological research", "Behavioral analysis", "Clinical studies"],
    purpose: "Psychology research",
    keyFeatures: [
      "Behavioral analysis",
      "Clinical research",
      "Study design",
      "Data interpretation"
    ],
    benchmarks: { mmlu: 90.8, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "econometrics-pro",
    name: "Econometrics Pro",
    provider: "EconAI",
    contextWindow: 128000,
    inputCostPer1M: 5.50,
    outputCostPer1M: 16.50,
    description: "Economics research specialist",
    released: "2024",
    tags: ["Economics", "Research", "Finance"],
    bestFor: ["Economic analysis", "Market research", "Policy analysis"],
    purpose: "Economic research",
    keyFeatures: [
      "Economic modeling",
      "Policy analysis",
      "Market forecasting",
      "Data analysis"
    ],
    benchmarks: { mmlu: 92.1, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Edge Computing Models
  {
    id: "edge-ai-pro",
    name: "Edge AI Pro",
    provider: "EdgeAI",
    contextWindow: 16000,
    inputCostPer1M: 1.50,
    outputCostPer1M: 4.50,
    description: "Edge computing optimized model",
    released: "2024",
    tags: ["Edge", "Efficient", "IoT"],
    bestFor: ["Edge deployment", "IoT devices", "Mobile applications"],
    purpose: "Edge computing",
    keyFeatures: [
      "Low latency",
      "Resource efficient",
      "Offline capability",
      "Device optimization"
    ],
    benchmarks: { mmlu: 85.6, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mobile-ai",
    name: "Mobile AI",
    provider: "EdgeAI",
    contextWindow: 8000,
    inputCostPer1M: 1.00,
    outputCostPer1M: 3.00,
    description: "Mobile-optimized AI model",
    released: "2024",
    tags: ["Mobile", "Edge", "Efficient"],
    bestFor: ["Mobile apps", "Battery efficiency", "Quick inference"],
    purpose: "Mobile computing",
    keyFeatures: [
      "Battery efficient",
      "Fast inference",
      "Small footprint",
      "Mobile optimization"
    ],
    benchmarks: { mmlu: 83.9, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // AutoML Models
  {
    id: "automl-expert",
    name: "AutoML Expert",
    provider: "AutoAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Automated machine learning specialist",
    released: "2024",
    tags: ["AutoML", "ML", "AI"],
    bestFor: ["Model selection", "Hyperparameter tuning", "Architecture search"],
    purpose: "AutoML optimization",
    keyFeatures: [
      "Architecture search",
      "Hyperparameter optimization",
      "Model evaluation",
      "Training automation"
    ],
    benchmarks: { mmlu: 91.7, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "ml-optimizer",
    name: "ML Optimizer",
    provider: "AutoAI",
    contextWindow: 32000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Machine learning optimization specialist",
    released: "2024",
    tags: ["ML", "Optimization", "AI"],
    bestFor: ["Model optimization", "Performance tuning", "Efficiency"],
    purpose: "ML optimization",
    keyFeatures: [
      "Performance tuning",
      "Resource optimization",
      "Training efficiency",
      "Model compression"
    ],
    benchmarks: { mmlu: 90.3, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  
  {
    id: "research-specialist",
    name: "Research Specialist",
    provider: "ScienceAI",
    contextWindow: 256000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Specialized research and analysis model",
    released: "2024",
    tags: ["Specialized Research", "Analysis", "Technical"],
    bestFor: ["Deep research", "Technical analysis", "Specialized studies"],
    purpose: "Specialized research support",
    keyFeatures: ["Deep analysis", "Technical expertise", "Research tools"],
    benchmarks: { mmlu: 94.1, speed: "medium" },
    lastUpdated: "2025-01-07"
  },

  // Additional Regional Language Models
  {
    id: "korean-ai",
    name: "Korean AI",
    provider: "KoreanAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Advanced Korean language processing model with cultural context",
    released: "2024",
    tags: ["Korean", "Language", "Regional", "Cultural"],
    bestFor: [
      "Korean content creation",
      "Business communication",
      "K-pop/Entertainment",
      "Cultural localization"
    ],
    purpose: "Korean language and cultural processing",
    keyFeatures: [
      "Honorific system mastery",
      "Korean cultural context",
      "Entertainment industry terminology",
      "Business Korean expertise",
      "Hangul optimization"
    ],
    benchmarks: {
      mmlu: 89.8,
      humanEval: 88.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "russian-nlp",
    name: "Russian NLP",
    provider: "RussianAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Comprehensive Russian language model with cultural understanding",
    released: "2024",
    tags: ["Russian", "Language", "Regional", "Slavic"],
    bestFor: [
      "Russian content generation",
      "Slavic language processing",
      "Cultural adaptation",
      "Academic research"
    ],
    purpose: "Russian and Slavic language processing",
    keyFeatures: [
      "Cyrillic script mastery",
      "Russian grammar system",
      "Slavic language family understanding",
      "Cultural context awareness",
      "Scientific literature processing"
    ],
    benchmarks: {
      mmlu: 90.1,
      humanEval: 89.2,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "portuguese-br",
    name: "Portuguese BR",
    provider: "BrazilAI",
    contextWindow: 64000,
    inputCostPer1M: 3.00,
    outputCostPer1M: 9.00,
    description: "Brazilian Portuguese language specialist with regional variations",
    released: "2024",
    tags: ["Portuguese", "Brazilian", "Regional", "LATAM"],
    bestFor: [
      "Brazilian content",
      "Portuguese localization",
      "LATAM business",
      "Cultural adaptation"
    ],
    purpose: "Brazilian Portuguese processing",
    keyFeatures: [
      "Brazilian dialect expertise",
      "Cultural nuances",
      "Regional expressions",
      "Business Portuguese",
      "Cross-cultural communication"
    ],
    benchmarks: {
      mmlu: 89.5,
      humanEval: 88.8,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Additional Industry Vertical Models
  {
    id: "pharma-expert",
    name: "Pharma Expert",
    provider: "PharmaAI",
    contextWindow: 128000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Pharmaceutical industry specialist with regulatory expertise",
    released: "2024",
    tags: ["Pharmaceutical", "Healthcare", "Regulatory", "Research"],
    bestFor: [
      "Drug development",
      "Clinical trials",
      "Regulatory compliance",
      "Research analysis"
    ],
    purpose: "Pharmaceutical research and compliance",
    keyFeatures: [
      "Drug development assistance",
      "Clinical trial analysis",
      "Regulatory compliance checking",
      "Research literature analysis",
      "Patent processing"
    ],
    benchmarks: {
      mmlu: 93.2,
      humanEval: 91.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "automotive-ai",
    name: "Automotive AI",
    provider: "AutoTechAI",
    contextWindow: 64000,
    inputCostPer1M: 4.50,
    outputCostPer1M: 13.50,
    description: "Automotive industry specialist with manufacturing expertise",
    released: "2024",
    tags: ["Automotive", "Manufacturing", "Engineering", "Technical"],
    bestFor: [
      "Vehicle design",
      "Manufacturing processes",
      "Quality control",
      "Technical documentation"
    ],
    purpose: "Automotive industry support",
    keyFeatures: [
      "Vehicle systems analysis",
      "Manufacturing optimization",
      "Quality control processes",
      "Technical documentation",
      "Supply chain management"
    ],
    benchmarks: {
      mmlu: 90.8,
      humanEval: 89.7,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "mining-expert",
    name: "Mining Expert",
    provider: "MiningAI",
    contextWindow: 64000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Mining industry specialist with safety and operations focus",
    released: "2024",
    tags: ["Mining", "Industrial", "Safety", "Operations"],
    bestFor: [
      "Mining operations",
      "Safety protocols",
      "Resource management",
      "Environmental compliance"
    ],
    purpose: "Mining operations and safety",
    keyFeatures: [
      "Safety protocol management",
      "Resource estimation",
      "Environmental impact analysis",
      "Operational optimization",
      "Risk assessment"
    ],
    benchmarks: {
      mmlu: 91.3,
      humanEval: 90.1,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Specialized Analytics Models
  {
    id: "predictive-analytics",
    name: "Predictive Analytics",
    provider: "AnalyticsAI",
    contextWindow: 128000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "Advanced predictive analytics specialist",
    released: "2024",
    tags: ["Analytics", "Prediction", "Business"],
    bestFor: ["Predictive modeling", "Trend analysis", "Forecasting"],
    purpose: "Predictive analytics",
    keyFeatures: [
      "Time series analysis",
      "Pattern recognition",
      "Trend forecasting",
      "Risk assessment"
    ],
    benchmarks: { mmlu: 92.4, speed: "medium" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "marketing-analytics",
    name: "Marketing Analytics",
    provider: "AnalyticsAI",
    contextWindow: 64000,
    inputCostPer1M: 4.00,
    outputCostPer1M: 12.00,
    description: "Marketing analytics specialist",
    released: "2024",
    tags: ["Marketing", "Analytics", "Business"],
    bestFor: ["Campaign analysis", "Customer insights", "Market research"],
    purpose: "Marketing optimization",
    keyFeatures: [
      "Campaign analysis",
      "Customer segmentation",
      "ROI prediction",
      "Market trends"
    ],
    benchmarks: { mmlu: 89.9, speed: "fast" },
    lastUpdated: "2025-01-07"
  },
  {
    id: "social-analytics",
    name: "Social Analytics",
    provider: "AnalyticsAI",
    contextWindow: 64000,
    inputCostPer1M: 3.50,
    outputCostPer1M: 10.50,
    description: "Social media analytics specialist",
    released: "2024",
    tags: ["Social", "Analytics", "Media"],
    bestFor: ["Social media analysis", "Trend tracking", "Engagement metrics"],
    purpose: "Social media analytics",
    keyFeatures: [
      "Sentiment analysis",
      "Trend detection",
      "Engagement tracking",
      "Influencer analytics"
    ],
    benchmarks: { mmlu: 88.7, speed: "fast" },
    lastUpdated: "2025-01-07"
  },

  // Emerging Technology Models
  {
    id: "quantum-compute",
    name: "Quantum Compute",
    provider: "QuantumAI",
    contextWindow: 128000,
    inputCostPer1M: 8.00,
    outputCostPer1M: 24.00,
    description: "Quantum computing optimization and research specialist",
    released: "2024",
    tags: ["Quantum", "Computing", "Research", "Advanced"],
    bestFor: [
      "Quantum algorithm design",
      "Quantum circuit optimization",
      "Research analysis",
      "Quantum simulation"
    ],
    purpose: "Quantum computing advancement",
    keyFeatures: [
      "Quantum algorithm analysis",
      "Circuit optimization",
      "Error correction",
      "Quantum simulation",
      "Research documentation"
    ],
    benchmarks: {
      mmlu: 94.8,
      humanEval: 93.5,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "ar-vr-expert",
    name: "AR/VR Expert",
    provider: "MetaverseAI",
    contextWindow: 64000,
    inputCostPer1M: 5.00,
    outputCostPer1M: 15.00,
    description: "AR/VR development and optimization specialist",
    released: "2024",
    tags: ["AR", "VR", "Metaverse", "Interactive"],
    bestFor: [
      "AR/VR development",
      "Spatial computing",
      "User experience",
      "Interactive content"
    ],
    purpose: "AR/VR advancement",
    keyFeatures: [
      "Spatial computing",
      "Interactive design",
      "Performance optimization",
      "User experience",
      "Content generation"
    ],
    benchmarks: {
      mmlu: 91.2,
      humanEval: 90.5,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "robotics-expert",
    name: "Robotics Expert",
    provider: "RoboAI",
    contextWindow: 64000,
    inputCostPer1M: 6.00,
    outputCostPer1M: 18.00,
    description: "Advanced robotics and automation specialist",
    released: "2024",
    tags: ["Robotics", "Automation", "Control", "Engineering"],
    bestFor: [
      "Robot control systems",
      "Automation design",
      "Motion planning",
      "System integration"
    ],
    purpose: "Robotics advancement",
    keyFeatures: [
      "Motion control",
      "System integration",
      "Sensor fusion",
      "Path planning",
      "Safety protocols"
    ],
    benchmarks: {
      mmlu: 92.3,
      humanEval: 91.8,
      speed: "fast"
    },
    lastUpdated: "2025-01-07"
  },

  // Additional Research Fields
  {
    id: "genetics-expert",
    name: "Genetics Expert",
    provider: "GeneAI",
    contextWindow: 128000,
    inputCostPer1M: 7.00,
    outputCostPer1M: 21.00,
    description: "Genetics research and analysis specialist",
    released: "2024",
    tags: ["Genetics", "Research", "Biology", "Medical"],
    bestFor: [
      "Genetic research",
      "DNA analysis",
      "Mutation studies",
      "Clinical genetics"
    ],
    purpose: "Genetics research",
    keyFeatures: [
      "Gene sequence analysis",
      "Mutation prediction",
      "Research literature",
      "Clinical interpretation",
      "Genomic database integration"
    ],
    benchmarks: {
      mmlu: 93.7,
      humanEval: 92.9,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "astro-physics",
    name: "Astrophysics",
    provider: "SpaceAI",
    contextWindow: 128000,
    inputCostPer1M: 7.50,
    outputCostPer1M: 22.50,
    description: "Astrophysics research and analysis specialist",
    released: "2024",
    tags: ["Astrophysics", "Space", "Research", "Physics"],
    bestFor: [
      "Astronomical research",
      "Cosmological studies",
      "Data analysis",
      "Theory development"
    ],
    purpose: "Astrophysics research",
    keyFeatures: [
      "Astronomical calculations",
      "Data analysis",
      "Theoretical modeling",
      "Research literature",
      "Visualization support"
    ],
    benchmarks: {
      mmlu: 94.1,
      humanEval: 93.2,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  },
  {
    id: "nano-tech",
    name: "Nanotech",
    provider: "NanoAI",
    contextWindow: 128000,
    inputCostPer1M: 7.00,
    outputCostPer1M: 21.00,
    description: "Nanotechnology research and development specialist",
    released: "2024",
    tags: ["Nanotechnology", "Research", "Materials", "Engineering"],
    bestFor: [
      "Nanotech research",
      "Material design",
      "Process optimization",
      "Molecular engineering"
    ],
    purpose: "Nanotechnology advancement",
    keyFeatures: [
      "Molecular modeling",
      "Material properties",
      "Process simulation",
      "Research analysis",
      "Design optimization"
    ],
    benchmarks: {
      mmlu: 93.5,
      humanEval: 92.7,
      speed: "medium"
    },
    lastUpdated: "2025-01-07"
  }
];

export const TOKENS_PER_BOOK = 100000;
export const TOKENS_PER_PAGE = 300;

export function calculateBooksInContext(contextWindow: number): number {
  return Number((contextWindow / TOKENS_PER_BOOK).toFixed(2));
}

export function calculatePagesInContext(contextWindow: number): number {
  return Math.floor(contextWindow / TOKENS_PER_PAGE);
}

export function calculateCostForBooks(
  books: number,
  inputCostPer1M: number,
  outputCostPer1M: number
): { inputCost: number; outputCost: number; totalCost: number } {
  const tokens = books * TOKENS_PER_BOOK;
  const inputCost = (tokens / 1000000) * inputCostPer1M;
  const outputCost = (tokens / 1000000) * outputCostPer1M;

  return {
    inputCost: Number(inputCost.toFixed(4)),
    outputCost: Number(outputCost.toFixed(4)),
    totalCost: Number((inputCost + outputCost).toFixed(4)),
  };
}
