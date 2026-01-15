import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'LLM Context Format | LogicStamp Context Documentation',
  description: 'Guide to the structure of folder-organized context files (context.json per folder plus context_main.json index) generated for LLM consumption.',
}

export default function LlmContextPage() {
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
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                LLM Context Format
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              LogicStamp Context – LLM Guide
            </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Understand the structure of the folder-organized context files (multiple <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.json</code> files plus <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> index) that LogicStamp Context generates for LLM consumption and how to interpret them.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Multi-file structure</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">AI-optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Schema compliant</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Overview Section */}
            <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Overview
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {[
                  {
                    icon: "⚡",
                    title: "AI-Friendly Bundles",
                    desc: "Generates context bundles from React/TypeScript projects without build steps"
                  },
                  {
                    icon: "🌐",
                    title: "Global CLI",
                    desc: "Install with npm install -g logicstamp-context, then use stamp context command"
                  },
                  {
                    icon: "🤖",
                    title: "LLM Optimized",
                    desc: "Optimized for assistants such as Claude or ChatGPT to improve code understanding"
                  },
                  {
                    icon: "📦",
                    title: "Node.js >= 18.18.0",
                    desc: "Requires Node.js >= 18.18.0 with access to your project's source tree"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
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
                  <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Note:</span> &quot;Global CLI&quot; means the tool is installed globally on your system (via <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">npm install -g</code>), making the <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp</code> command available from any directory in your terminal, not just within a specific project folder.
                </p>
              </div>
            </div>
          </div>
            </AnimatedSection>

        {/* Output Structure Section */}
            <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Output Structure
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                LogicStamp Context generates <strong className="text-gray-900 dark:text-white">folder-organized, multi-file output</strong>:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Multiple context.json files</h4>
                  <p className="text-sm text-purple-800 dark:text-purple-300">
                    One per folder containing components. Each file contains an array of LogicStamp bundles (one bundle per entry point/root component).
                  </p>
                </div>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">context_main.json index</h4>
                  <p className="text-sm text-indigo-800 dark:text-indigo-300">
                    Main index file with folder metadata, summary statistics, and references to all folder context files.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50/50 dark:bg-purple-950/20 border-l-4 border-purple-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-purple-900 dark:text-purple-200">✨ Design note:</span> LogicStamp Context uses per-root bundles (one bundle per entry point) rather than per-component files. This means each bundle contains the root component plus its complete dependency graph—all related components and their relationships in one self-contained unit. This design is optimized for AI consumption: when you need help with a specific page or feature, share that root bundle and the AI has complete context.
                </p>
              </div>
            </div>
          </div>
            </AnimatedSection>

        {/* What Each context.json Contains Section */}
            <AnimatedSection direction="up" delay={250}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  What Each <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-md font-mono text-sm">context.json</code> Contains
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Each folder's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-md font-mono text-sm">context.json</code> is an array of LogicStamp bundles. Each bundle represents one entry point plus its graph.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    title: "Top-level fields",
                    items: ["position", "type", "schemaVersion", "entryId", "depth", "createdAt", "bundleHash", "graph", "meta"]
                  },
                  {
                    title: "graph.nodes",
                    desc: "Contains UIF contracts describing functions, props, events, imports, and semantic/file hashes. Optional codeHeader blocks store contract headers or snippets when requested."
                  },
                  {
                    title: "graph.edges",
                    desc: "Lists dependency relationships between nodes (often empty when depth is 1)."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                      {item.title}
                    </h4>
                    {item.items && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.items.map((field, fIdx) => (
                          <code key={fIdx} className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs font-mono">
                            {field}
                          </code>
                        ))}
                      </div>
                    )}
                    {item.desc && (
                      <p className="text-sm text-green-800 dark:text-green-300 mt-2">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
            </AnimatedSection>

        {/* The context_main.json Index Section */}
            <AnimatedSection direction="up" delay={300}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-sm">context_main.json</code> Index
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-sm">context_main.json</code> file provides a complete directory index with:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2">summary</h4>
                  <p className="text-sm text-indigo-800 dark:text-indigo-300">
                    Overall statistics (total components, bundles, folders, token estimates)
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">folders</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                    Array of folder entries, each with:
                  </p>
                  <ul className="text-xs text-blue-800 dark:text-blue-300 space-y-1 ml-4">
                    <li>• path – relative path from project root</li>
                    <li>• contextFile – path to this folder's context.json</li>
                    <li>• bundles – number of bundles in this folder</li>
                    <li>• components – list of component file names</li>
                    <li>• isRoot – whether this is an application entry point</li>
                    <li>• tokenEstimate – token count for this folder's context</li>
                  </ul>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Use the index to discover which folders have context files and navigate to specific folder contexts.
              </p>
            </div>
          </div>
            </AnimatedSection>

        {/* The meta Section */}
            <AnimatedSection direction="up" delay={350}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-400 rounded-md font-mono text-sm">meta</code> Section
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-amber-600 dark:text-amber-400 rounded-md font-mono text-sm">meta</code> object provides metadata about bundle generation and dependency resolution:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">missing</h4>
                  <p className="text-sm text-amber-800 dark:text-amber-300">
                    Array of unresolved dependencies, each with name, reason, and referencedBy. An empty array means complete resolution.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">source</h4>
                  <p className="text-sm text-orange-800 dark:text-orange-300">
                    Generator version string, for example &quot;logicstamp-context@0.3.8&quot;
                  </p>
                </div>
              </div>
              <div className="bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 sm:p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">⚠️ Important:</span> When <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">meta.missing</code> is non-empty, treat analysis as partial and surface that to users.
                </p>
              </div>
            </div>
          </div>
            </AnimatedSection>

        {/* Best Practices Section */}
            <AnimatedSection direction="up" delay={400}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Best Practices for LLM Consumers
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'Start with context_main.json to understand the project structure and locate relevant folder contexts.',
                  'Load specific folder context.json files based on the area of code you\'re working with.',
                  'Check meta.missing before assuming complete component coverage.',
                  'Suggest increasing --depth if many "max depth exceeded" entries appear.',
                  'Flag "file not found" entries as potential bugs in the codebase.',
                  'Filter bundles by entryId to focus on relevant modules.',
                  'Use version.functions and logicSignature to reason about APIs without loading full source.',
                  'For deeper context, rerun the CLI with --include-code full or higher --depth before querying the assistant.'
                ].map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                    <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{practice}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        </DocsLayout>
      <Footer />
    </>
  )
}
















