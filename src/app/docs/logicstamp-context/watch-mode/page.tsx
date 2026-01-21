import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Watch Mode | LogicStamp Context Documentation',
  description: 'Keep your context files fresh automatically with incremental rebuilds. Watch mode detects file changes and updates only affected bundles.',
}

export default function WatchModePage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50/30 to-blue-50/20 dark:from-cyan-950/20 dark:via-sky-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900/40 dark:to-sky-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                v0.4.1 Feature
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Watch Mode</code>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Keep your context files fresh automatically with incremental rebuilds. Watch mode detects file changes and updates only affected bundles.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16 w-full max-w-full overflow-x-hidden">
          {/* Key Benefits Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Why Watch Mode?
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode keeps your AI context <strong className="text-gray-900 dark:text-white">always up-to-date</strong> as you code. Instead of manually regenerating context files, watch mode automatically detects changes and incrementally rebuilds only the affected bundles.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                    <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-cyan-900 dark:text-cyan-200 text-sm">Instant Context</p>
                      <p className="text-xs text-cyan-800 dark:text-cyan-300">Zero-cost access for MCP tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-sky-50 dark:bg-sky-950/20 rounded-lg border border-sky-200 dark:border-sky-800">
                    <svg className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sky-900 dark:text-sky-200 text-sm">Incremental Rebuilds</p>
                      <p className="text-xs text-sky-800 dark:text-sky-300">Only affected bundles update</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <div>
                      <p className="font-semibold text-blue-900 dark:text-blue-200 text-sm">Change Detection</p>
                      <p className="text-xs text-blue-800 dark:text-blue-300">See what changed (props, hooks, state)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={150}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Syntax
              </h2>
              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Start Watch Mode',
                      code: `# Start watch mode (recommended)
stamp context --watch

# Alternative syntax
stamp context watch

# With options
stamp context --watch --log-file ./watch.log`,
                      copyText: 'stamp context --watch'
                    }
                  ]}
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Watch mode runs in the foreground and monitors your project for changes. Press <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">Ctrl+C</code> to stop.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* How It Works Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    How It Works
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-700 dark:text-cyan-300 font-bold text-sm">1</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Initial Generation</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Watch mode first generates all context files (like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code>)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center justify-center text-sky-700 dark:text-sky-300 font-bold text-sm">2</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">File Monitoring</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Watches for changes to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.js</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.jsx</code> files in your project</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm">3</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Debounced Rebuilds</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Changes are batched with a 500ms delay to handle rapid edits efficiently</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm">4</div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Incremental Updates</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Only the affected folder's <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.json</code> is regenerated, not the entire project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Options Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Options
                  </h2>
                </div>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 max-w-full">
                  <table className="w-full min-w-[600px] divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Option</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Default</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--watch</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Enable watch mode for continuous file monitoring</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-cyan-50/30 dark:bg-cyan-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 rounded text-xs sm:text-sm font-mono">--log-file &lt;path&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">none</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Write structured change logs to a file for tracking modifications</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--include-style</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Include style metadata (Tailwind, SCSS, animations) in generated context</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--depth &lt;n&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">2</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dependency traversal depth for bundles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    All standard <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp context</code> options work with watch mode. The options above are watch-mode specific or commonly used together.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* MCP Integration Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    MCP Integration
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode is designed to work seamlessly with the <strong className="text-gray-900 dark:text-white">LogicStamp MCP server</strong>. When watch mode is active, MCP tools can skip expensive regeneration and access fresh context instantly.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">MCP Workflow with Watch Mode</h3>
                    <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-300 ml-4 list-decimal">
                      <li>Start watch mode in a terminal: <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp context --watch</code></li>
                      <li>MCP tool calls <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">logicstamp_watch_status</code> first</li>
                      <li>If watch mode is active, skip <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">refresh_snapshot</code> entirely</li>
                      <li>Go directly to <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">list_bundles</code> → <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">read_bundle</code></li>
                    </ol>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-green-900 dark:text-green-200">Zero-Cost Context Access</span>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      With watch mode active, LLM tools get instant access to fresh, pre-generated context without any regeneration overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Status File Section */}
          <AnimatedSection direction="up" delay={350}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Watch Status File
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Watch mode creates a status file at <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 rounded-md font-mono text-xs sm:text-sm">.logicstamp/context_watch-status.json</code> that MCP tools use to detect if watch mode is running:
              </p>
              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Status File',
                      code: `{
  "active": true,
  "projectRoot": "/path/to/project",
  "pid": 12345,
  "startedAt": "2026-01-21T11:33:48.260Z",
  "outputDir": "/path/to/project"
}`,
                      copyText: ''
                    }
                  ]}
                />
              </div>
              <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  The status file is automatically cleaned up when watch mode stops (normally or via Ctrl+C).
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Example Workflows Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example Workflows
              </h2>
              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Basic',
                      code: `# Start watch mode in a terminal
stamp context --watch

# Output:
# ✓ Initial context generated (96 components, 68 bundles)
# 👁 Watching for changes...
#
# [file change detected]
# ↻ Rebuilding src/components/Button...
# ✓ Updated in 45ms`,
                      copyText: 'stamp context --watch'
                    },
                    {
                      label: 'With Style',
                      code: `# Watch mode with style metadata extraction
stamp context --watch --include-style

# Style changes (Tailwind classes, animations) will also
# be tracked and updated in the context files`,
                      copyText: 'stamp context --watch --include-style'
                    },
                    {
                      label: 'With Logging',
                      code: `# Watch mode with structured change logs
stamp context --watch --log-file ./watch.log

# The log file contains NDJSON entries like:
# {"timestamp":"...","event":"rebuild","files":["src/App.tsx"],"changes":{"props":["added: theme"]}}`,
                      copyText: 'stamp context --watch --log-file ./watch.log'
                    },
                    {
                      label: 'Background (Unix)',
                      code: `# Run watch mode in background (Unix/macOS)
stamp context --watch > watch.log 2>&1 &

# Check if running
ps aux | grep "stamp context"

# Stop it
kill $(pgrep -f "stamp context --watch")`,
                      copyText: 'stamp context --watch > watch.log 2>&1 &'
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Change Detection Section */}
          <AnimatedSection direction="up" delay={450}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    What Changes Are Detected?
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode tracks semantic changes to your components, not just file modifications:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Component Changes</h3>
                    <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-300">
                      <li>• Props added/removed/modified</li>
                      <li>• State variables changed</li>
                      <li>• Hooks added/removed</li>
                      <li>• Emitted events changed</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h3 className="font-semibold text-orange-900 dark:text-orange-200 mb-2">Structural Changes</h3>
                    <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-300">
                      <li>• New components added</li>
                      <li>• Components deleted</li>
                      <li>• Import dependencies changed</li>
                      <li>• Export signatures modified</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Best Practices
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Start watch mode when beginning a coding session</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Run <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context --watch</code> in a dedicated terminal alongside your dev server</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use with MCP for the best experience</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">MCP tools automatically detect watch mode and skip regeneration, giving you instant context access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Add <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.logicstamp/</code> to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code></p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">The cache directory and watch status file shouldn't be committed to version control</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--log-file</code> for debugging</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">If you need to track what's changing, enable logging to see detailed rebuild information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Commands Section */}
          <AnimatedSection direction="up" delay={550}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Related Commands
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/docs/logicstamp-context/context" className="block p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-sm font-mono">stamp context</code>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-300">Generate context files (one-time)</p>
                </Link>
                <Link href="/docs/mcp/reference" className="block p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 rounded text-sm font-mono">MCP Tools</code>
                  </div>
                  <p className="text-sm text-purple-800 dark:text-purple-300">MCP server tool reference</p>
                </Link>
                <Link href="/docs/logicstamp-context/compare-command" className="block p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 rounded-xl border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 rounded text-sm font-mono">stamp context compare</code>
                  </div>
                  <p className="text-sm text-amber-800 dark:text-amber-300">Compare context snapshots</p>
                </Link>
                <Link href="/docs/logicstamp-context/clean" className="block p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10 rounded-xl border border-rose-200 dark:border-rose-800 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <code className="px-2 py-1 bg-rose-100 dark:bg-rose-900/40 text-rose-900 dark:text-rose-100 rounded text-sm font-mono">stamp context clean</code>
                  </div>
                  <p className="text-sm text-rose-800 dark:text-rose-300">Remove generated context files</p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
