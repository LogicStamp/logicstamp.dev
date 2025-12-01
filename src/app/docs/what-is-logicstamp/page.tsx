import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import CopyButton from '@/components/ui/CopyButton'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'What is LogicStamp? | Documentation',
  description:
    'Learn what LogicStamp is, why it exists, and how it helps you generate AI-ready context from your codebase for chat, agents, and CI workflows.',
}

export default function WhatIsLogicStampPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Open Source & Beta
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                What is LogicStamp?
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                LogicStamp Context is an open-source CLI that generates{' '}
                <span className="font-semibold text-gray-900 dark:text-white">AI-ready context bundles</span> from your React/TypeScript codebase.
                No setup, no configuration—just install and run.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">

          {/* The Problem Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    The Problem LogicStamp Solves
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Today, working with AI on a real project usually means copying full source files, README snippets, and
                  screenshots into a chat window. That approach:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    {
                      icon: "🚫",
                      title: "Wastes Tokens",
                      desc: "Boilerplate, imports, and low-signal code instead of contracts that actually matter"
                    },
                    {
                      icon: "🔄",
                      title: "No Global View",
                      desc: "AI can't see component relationships, dependency graphs, or file structure"
                    },
                    {
                      icon: "📜",
                      title: "Stale Documentation",
                      desc: "Documentation drifts away from your real code over time"
                    },
                    {
                      icon: "⚙️",
                      title: "Not Automatable",
                      desc: "Impossible to automate in CI/CD - can't diff manual chat pastes"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Solution:</span> LogicStamp replaces this manual process with a repeatable CLI that scans your codebase and emits{' '}
                    <span className="font-semibold">folder-organized context files</span> (
                    <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context.json</code> per folder
                    plus a <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context_main.json</code> index)
                    describing the structure and contracts of your system in a way that LLMs can consume directly.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Idea Section */}
          <AnimatedSection direction="up" delay={150}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Core Idea: The Architectural Blueprint
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Think of LogicStamp as an <span className="font-semibold text-gray-900 dark:text-white">architectural blueprint</span> generator for
                  your codebase. Instead of giving an AI every brick and nail (every line of source), you hand it a compact
                  blueprint that shows:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {[
                    {
                      icon: "📦",
                      title: "Component Inventory",
                      desc: "Which components, modules, and files exist"
                    },
                    {
                      icon: "🔗",
                      title: "Dependency Graph",
                      desc: "How they import and depend on one another"
                    },
                    {
                      icon: "📋",
                      title: "Public Contracts",
                      desc: "Props, function signatures, types, and interfaces"
                    },
                    {
                      icon: "🎯",
                      title: "Key Behaviors",
                      desc: "Where important logic lives without full implementations"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800 hover:shadow-md transition-shadow">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-indigo-900 dark:text-indigo-200">✨ Result:</span> This blueprint is optimized for AI: high-signal, low-noise, easy to stream into a chat, an agent, or a
                    RAG pipeline.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What LogicStamp Context Provides
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                The <span className="font-semibold text-gray-900 dark:text-white">LogicStamp Context CLI</span> is a lightweight, zero-config tool
                that provides:
              </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                {
                  icon: "⚡",
                  title: "Context Generation",
                  desc: "Scan React/TypeScript codebase and emit folder-organized context files with component contracts, logic signatures, and dependency graphs",
                  color: "blue"
                },
                {
                  icon: "🎨",
                  title: "Style Metadata Extraction",
                  desc: "Extract visual and layout information from Tailwind CSS, SCSS/CSS modules, Material UI, inline styles, styled-components, and framer-motion for design-aware context bundles",
                  color: "purple"
                },
                {
                  icon: "💰",
                  title: "Token Optimization",
                  desc: "Built-in token cost analysis for GPT-4o-mini and Claude. Save up to ~70% tokens by including headers and contracts instead of full source",
                  color: "green"
                },
                {
                  icon: "🕸️",
                  title: "Dependency Graph",
                  desc: "Show which components import which others, so AI can reason about data flows and relationships across files",
                  color: "purple"
                },
                {
                  icon: "🔍",
                  title: "Context Drift Detection",
                  desc: "Compare context files to track changes between commits, PRs, or deployments. Detects added, orphaned, and changed folders",
                  color: "orange"
                },
                {
                  icon: "✅",
                  title: "Validation",
                  desc: "Ensure context files are well-formed and schema-compliant before sharing with teammates or committing to CI",
                  color: "teal"
                },
                {
                  icon: "🚀",
                  title: "Project Initialization",
                  desc: "Set up .gitignore patterns and generate LLM_CONTEXT.md via stamp init. stamp context is CI-friendly and never prompts—respects preferences automatically",
                  color: "indigo"
                },
                {
                  icon: "🧹",
                  title: "Cleanup Utilities",
                  desc: "Remove all generated context artifacts when resetting or switching branches. Safe by default with dry-run mode",
                  color: "pink"
                }
              ].map((feature, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 dark:opacity-10" />
                  <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="text-3xl flex-shrink-0 leading-none -mt-0.5">{feature.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                CLI Commands
              </h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                All features are exposed through simple CLI commands:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Initialize',
                    code: 'stamp init',
                    copyText: 'stamp init'
                  },
                  {
                    label: 'Generate Context',
                    code: 'stamp context',
                    copyText: 'stamp context'
                  },
                  {
                    label: 'Style',
                    code: 'stamp context style',
                    copyText: 'stamp context style'
                  },
                  {
                    label: 'Compare Changes',
                    code: 'stamp context compare',
                    copyText: 'stamp context compare'
                  },
                  {
                    label: 'Validate',
                    code: 'stamp context validate',
                    copyText: 'stamp context validate'
                  },
                  {
                    label: 'Clean',
                    code: 'stamp context clean',
                    copyText: 'stamp context clean'
                  }
                ]}
              />
            </div>
            </div>
          </AnimatedSection>

          {/* Workflow Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                How It Fits Into Your Workflow
              </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  step: 1,
                  title: "Install LogicStamp Context",
                  description: "Install globally to use the CLI from anywhere on your system",
                  code: "npm install -g logicstamp-context",
                  color: "blue"
                },
                {
                  step: 2,
                  title: "Generate Context Files",
                  description: "Run the context generator to analyze your codebase and create structured bundles",
                  code: "stamp context",
                  note: "CI-friendly: never prompts. If you skip stamp init, defaults to skipping both .gitignore and LLM_CONTEXT.md setup (safe for CI). Use stamp init to configure preferences first (optional).",
                  color: "purple"
                },
                {
                  step: 3,
                  title: "Share with AI Assistants",
                  description: "Use the generated context files with Claude, ChatGPT, or custom agents instead of pasting full source files",
                  code: "context.json files + context_main.json index",
                  color: "green"
                },
                {
                  step: 4,
                  title: "Track Changes (Optional)",
                  description: "Detect drift across all folders or compare specific files. Perfect for CI workflows",
                  code: "stamp context compare",
                  optional: true,
                  color: "orange"
                }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-6">
                    <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.25s_forwards]">
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${
                        item.color === 'blue' ? 'from-blue-500 to-blue-600' :
                        item.color === 'purple' ? 'from-purple-500 to-purple-600' :
                        item.color === 'green' ? 'from-green-500 to-emerald-600' :
                        'from-orange-500 to-red-600'
                      } text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg`}>
                        {item.step}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        {item.optional && (
                          <span className="text-xs sm:text-base font-normal px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">Optional</span>
                        )}
                      </div>
                      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      {item.note && (
                        <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 mb-3 sm:mb-4 rounded-r-lg">
                          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            {item.note}
                          </p>
                        </div>
                      )}
                      <div className="relative bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-900 dark:text-gray-100">
                        <CopyButton text={item.code} className="absolute top-2 right-2" />
                        {item.code}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

              <div className="mt-6 sm:mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border border-green-200 dark:border-green-800 rounded-xl p-4 sm:p-6">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-green-900 dark:text-green-200">✨ Result:</span> A <span className="font-semibold">repeatable, automatable</span> way to give AI an accurate,
                  up-to-date understanding of your codebase that scales with your team.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* When to use / not use */}
          <AnimatedSection direction="up" delay={300}>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* When to use */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    When LogicStamp is a Great Fit
                  </h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "You regularly ask AI to work on the same codebase (feature work, refactors, debugging)",
                    "Your project is large enough that pasting full files hits token or context limits",
                    "You want teammates and CI pipelines to share the same view of the system when using AI",
                    "You care about reproducibility: you want to know exactly what context the AI saw"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What it's not */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    What LogicStamp is Not
                  </h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Not an LLM or chat UI itself; it powers the context you feed into those tools",
                    "Not a replacement for good code comments or high-level design docs",
                    "Does not auto-fix your code – instead, it makes AI significantly better at reading and modifying your existing codebase"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>

          {/* Call to action for complete reference */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Ready to Get Started?
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    For complete documentation including all commands, options, troubleshooting guides, and advanced features, check out the comprehensive reference or start with the installation guide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Link
                      href="/docs/getting-started"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      Installation & Quick Start
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/docs/complete-reference"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      Complete Reference
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <a
                      href="https://github.com/LogicStamp/logicstamp-context"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
                    >
                      GitHub Repository
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}


