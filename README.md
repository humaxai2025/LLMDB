# LLM DB 🤖

**The Ultimate Large Language Model Comparison Tool**

LLM DB is a comprehensive, user-friendly web application that helps developers, researchers, and AI enthusiasts compare and choose the right Large Language Model (LLM) for their needs. With over 300+ models from 40+ providers, you'll never struggle to find pricing, context windows, or API integration details again.

[![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-red)](https://github.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

---

## 🎯 Why LLM DB?

Choosing the right LLM can be overwhelming. Different providers, different pricing models, varying context windows, and scattered documentation make it hard to make informed decisions. **LLM DB solves this by putting all the information you need in one place.**

### The Problem
- 🤯 **Too many models**: OpenAI, Anthropic, Google, Meta, Mistral, and 40+ other providers
- 💰 **Complex pricing**: Per-token costs, input vs output pricing, varying by provider
- 📊 **Hard to compare**: Context windows range from 4K to 2M tokens
- 🔍 **Scattered info**: Official docs across dozens of websites
- 💻 **Integration confusion**: Different SDKs, APIs, and authentication methods

### The Solution
LLM DB gives you:
- ✅ **Instant comparison** of 300+ models in a sortable table
- ✅ **Real-time cost calculator** to estimate your expenses
- ✅ **Quality scores** based on benchmark performance
- ✅ **Python code samples** ready to copy-paste for every model
- ✅ **Smart filtering** by price, context size, or provider
- ✅ **Side-by-side comparison** of multiple models

---

## ✨ Key Features

### 📊 Comprehensive Model Database
- **300+ models** from all major providers
- **40+ providers** including OpenAI, Anthropic, Google, Meta, xAI, DeepSeek, and more
- Regular updates with latest models and pricing

### 💰 Cost Analysis Tools
- **Pricing per million tokens** for both input and output
- **Real-world cost examples** (1K tokens, 10K tokens, 100K tokens)
- **Cost calculator** to estimate your monthly expenses
- **Sort by price** to find the most economical option

### 🧠 Smart Model Comparison
- **Quality scores** calculated from MMLU and HumanEval benchmarks
- **Context window size** - see which models can handle long documents
- **Books capacity** - understand size in terms of books (100K tokens each)
- **Performance benchmarks** (MMLU, HumanEval, inference speed)
- **Best use cases** - recommended applications for each model

### 💻 Developer-Friendly Integration
- **Python code samples** for EVERY model - no more searching docs!
- **Installation commands** - one-click copy of pip install
- **API integration examples** with proper authentication
- **Working code** for OpenAI, Anthropic, Google, Cohere, AWS, and 35+ other providers
- **Copy-to-clipboard** functionality

### 🎨 Beautiful User Interface
- **Collapsible sections** - only see what you need
- **Dark mode** support with automatic theme switching
- **Responsive design** - works perfectly on mobile, tablet, and desktop
- **Keyboard shortcuts** for power users
- **Favorites** - star your most-used models
- **Search & filter** - find models instantly

### 📱 Model Detail View
Click any model to see:
- **Overview** - primary purpose, best use cases, key features
- **Pricing & Economics** - detailed cost breakdown with examples
- **Technical Specs** - context window, capacity, last updated
- **Performance Benchmarks** - MMLU, HumanEval, speed ratings
- **Python Integration** - working code examples with installation
- **Tags** - quick identification of model capabilities

---

## 🚀 Quick Start

### For Users
Simply visit the live site and start exploring! No installation needed.

### For Developers

**Prerequisites:**
- Node.js 18+ installed
- npm or yarn package manager

**Installation:**

```bash
# Clone the repository
git clone <your-repo-url>
cd LLMDB

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

**Build for production:**

```bash
npm run build
npm start
```

---

## 📖 How to Use

### 1️⃣ Browse Models
- View the comprehensive table of all LLM models
- Sort by **name**, **provider**, **context window**, **price**, or **quality score**
- Use the search bar to find specific models

### 2️⃣ Filter & Compare
- Click **filter tabs** to view:
  - All models
  - Cheapest options
  - Large context models
  - Best value models
  - Your favorites
- **Star models** to add them to favorites
- **Select multiple models** to compare side-by-side

### 3️⃣ View Details
- Click the **ℹ️ info icon** on any model
- Explore organized sections:
  - **Overview** - what the model is good for
  - **Pricing** - detailed cost breakdown
  - **Specs** - technical specifications
  - **Benchmarks** - performance scores
  - **Python Code** - ready-to-use integration examples
- **Copy code** with one click

### 4️⃣ Calculate Costs
- Click **"Calculator"** button
- Enter your expected token usage
- See estimated costs for your selected model

### 5️⃣ Keyboard Shortcuts
Press **?** to see all keyboard shortcuts:
- `/` - Focus search
- `c` - Toggle calculator
- `?` - Show keyboard help

---

## 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Beautiful icons |
| **Vercel** | Deployment platform |

---

## 🎨 Features in Detail

### Cost Calculator
Estimate your monthly LLM costs based on:
- Expected monthly token usage
- Input/output token ratio
- Model pricing
- Real-time calculations

### Quality Scoring
We calculate quality scores using:
- **MMLU (Massive Multitask Language Understanding)** - 60% weight
- **HumanEval (Coding Capability)** - 40% weight
- Normalized to 0-10 scale
- Color-coded badges (green = excellent, blue = good, etc.)

### Python Code Examples
Every model includes:
- **Provider-specific SDKs** (OpenAI, Anthropic, Google, etc.)
- **OpenAI-compatible APIs** (xAI, DeepSeek, Perplexity, Groq, etc.)
- **REST API examples** (for providers without SDKs)
- **Correct authentication** patterns
- **Working imports** and initialization

### Supported Providers
OpenAI • Anthropic • Google • Meta • Mistral • Cohere • AWS • Azure • xAI • DeepSeek • Perplexity • Together AI • Groq • Fireworks • Anyscale • Replicate • Alibaba • Baidu • Tencent • Zhipu • MiniMax • Moonshot • AI21 • Databricks • Nvidia • Reka • Hugging Face • Stability AI • Microsoft • Amazon • Intel • IBM • and many more...

---

## 🛠️ Customization

### Adding New Models

Edit `app/data/llm-data.ts`:

```typescript
{
  id: "model-id",
  name: "Model Name",
  provider: "Provider Name",
  contextWindow: 128000,
  inputCostPer1M: 10.00,
  outputCostPer1M: 30.00,
  description: "Model description",
  released: "2024",
  tags: ["Latest", "Long Context"],
  bestFor: ["Complex tasks", "Long documents"],
  purpose: "Advanced AI applications",
  keyFeatures: ["128K context", "High performance"],
  benchmarks: {
    mmlu: 90.0,
    humanEval: 92.5,
    speed: "fast"
  }
}
```

### Updating Pricing

Pricing is in `app/data/llm-data.ts`. Update `inputCostPer1M` and `outputCostPer1M` fields.

### Styling

Customize in:
- `tailwind.config.ts` - Colors, spacing, fonts
- `app/globals.css` - Global styles and CSS variables

---

## 📦 Project Structure

```
LLMDB/
├── app/
│   ├── [modelId]/
│   │   └── page.tsx              # Model detail page
│   ├── components/
│   │   └── ModelDetailsCard.tsx  # Redesigned model card
│   ├── data/
│   │   └── llm-data.ts           # All model data
│   ├── types/
│   │   └── features.ts           # TypeScript types
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main table view
├── components/                    # Additional components
├── public/                        # Static assets
├── next.config.mjs               # Next.js config
├── tailwind.config.ts            # Tailwind config
└── package.json                  # Dependencies
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Option 1: Via GitHub**
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Option 2: Via CLI**
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Import from GitHub
- **Self-hosted**: Run `npm run build` and serve `.next` folder

---

## 🌟 Use Cases

### For Developers
- Compare API pricing before choosing a provider
- Get working Python code instantly
- Calculate monthly costs based on usage
- Find models with specific context windows

### For Researchers
- Compare benchmark scores across models
- Identify best models for specific tasks
- Track latest model releases
- Understand capability differences

### For Businesses
- Estimate LLM infrastructure costs
- Compare quality vs price trade-offs
- Find most cost-effective options
- Plan for scale with context window info

### For Students
- Learn about different LLM providers
- Understand pricing models
- Access Python integration examples
- Explore latest AI models

---

## 🎯 Roadmap

- [ ] Add JavaScript/TypeScript code samples
- [ ] API cost comparison charts
- [ ] Model performance visualizations
- [ ] Export comparison tables
- [ ] Save custom comparisons
- [ ] Email price alerts for models
- [ ] Advanced filtering (by benchmark scores, release date)
- [ ] Model availability by region

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Adding Models
Please ensure new models include:
- Accurate pricing from official sources
- Context window size
- Benchmark scores (if available)
- Proper provider attribution
- Release date

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Pricing data** sourced from official provider documentation
- **Benchmark scores** from published research papers and official announcements
- **Icons** by [Lucide](https://lucide.dev/)
- **Framework** by [Next.js](https://nextjs.org/)
- **Styling** by [Tailwind CSS](https://tailwindcss.com/)

---

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)
- **Updates**: Follow for latest model additions

---

## ⚠️ Disclaimer

Pricing and model information is updated regularly but may not always reflect the latest changes. Please verify critical information with official provider documentation. This tool is for informational purposes only.

---

Made with ❤️ by Sriram Srinivasan

**Last Updated**: November 2025
