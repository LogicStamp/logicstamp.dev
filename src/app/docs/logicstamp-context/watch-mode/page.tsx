import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'Watch Mode | LogicStamp Context Documentation',
  description:
    'Watch mode keeps your context files fresh with incremental rebuilds. Use strict watch to detect breaking changes and track violations as you code.',
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
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Mode + Strict Watch
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Watch Mode
                </code>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Keep your context files fresh automatically with incremental rebuilds. Watch mode detects file changes and updates only affected bundles.
                <span className="block mt-2">
                  Need guardrails?{' '}
                  <strong className="text-gray-900 dark:text-white">Strict Watch</strong> detects breaking changes (removed props/events/functions, etc.) and tracks violations during your coding session.
                </span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Why Watch Mode?</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode keeps your AI context <strong className="text-gray-900 dark:text-white">always up-to-date</strong> as you code. Instead of manually regenerating context files, it detects changes and incrementally rebuilds only the affected bundles.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

                  {/* Strict Watch */}
                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.53 20h15a2 2 0 001.74-3.14l-7.5-13a2 2 0 00-3.48 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-amber-900 dark:text-amber-200 text-sm">Strict Watch</p>
                      <p className="text-xs text-amber-800 dark:text-amber-300">Detect breaking changes + track violations</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Tip:</strong> Regular watch mode shows diffs. Add{' '}
                    <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--strict-watch</code>{' '}
                    to classify breaking changes and keep a violations report for the session.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={150}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Syntax</h2>
              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Watch Mode',
                      code: `# Start watch mode (recommended)
stamp context --watch
stamp context -w

# Alternative syntax
stamp context watch

# With options
stamp context --watch --log-file`,
                      copyText: 'stamp context --watch',
                    },
                    {
                      label: 'Strict Watch',
                      code: `# Strict watch mode (breaking changes + violations)
stamp context --watch --strict-watch

# With style metadata
stamp context --include-style --watch --strict-watch`,
                      copyText: 'stamp context --watch --strict-watch',
                    },
                  ]}
                />
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Watch mode runs in the foreground and monitors your project for changes. Press{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">Ctrl+C</code> to stop.
                  If you used <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--strict-watch</code>, the session will summarize violations on exit.
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">How It Works</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-full flex items-center justify-center text-cyan-700 dark:text-cyan-300 font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Initial Build</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Generates all context files (like{' '}
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code>
                        ) and initializes the watch cache
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center justify-center text-sky-700 dark:text-sky-300 font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">File Monitoring</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Uses <a href="https://github.com/paulmillr/chokidar" className="text-sky-600 dark:text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">chokidar</a> to watch for changes to{' '}
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code>,{' '}
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> files (and style files when enabled)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Debounced Rebuilds</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Changes are batched with a 500ms delay to handle rapid edits efficiently</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Incremental Updates</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Only affected bundles are rebuilt, not the entire project
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/40 rounded-full flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-sm">
                      5
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Change Detection</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Shows what changed (props, hooks, state, etc.)
                      </p>
                    </div>
                  </div>

                  {/* Strict watch step */}
                  <div className="flex items-start gap-4 p-4 bg-amber-50/60 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold text-sm">
                      6
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Strict Watch Mode</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Optionally track breaking changes (removed props, events, functions) and report violations in real-time with{' '}
                        <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--strict-watch</code>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">File Events</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Event</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">change</code>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">File content modified</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">add</code>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">New file created</td>
                        </tr>
                        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">unlink</code>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">File deleted</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Watched File Types</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">By default, watch mode monitors:</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code> files</li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> files</li>
                      </ul>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">When using <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-style</code>, it also watches:</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.css</code> files</li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.scss</code> files</li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.module.css</code> files</li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.module.scss</code> files</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Ignored Paths</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Watch mode automatically ignores:</p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">node_modules/</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">dist/</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">build/</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.next/</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">coverage/</code></li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.json</code> files (generated output)</li>
                        <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> (generated output)</li>
                      </ul>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Options</h2>
                </div>

                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 max-w-full">
                  <table className="w-full min-w-[760px] divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Option</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Alias</th>
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
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-w</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Enable watch mode for continuous file monitoring</td>
                      </tr>

                      {/* Strict watch row */}
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-amber-50/60 dark:bg-amber-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 rounded text-xs sm:text-sm font-mono">--strict-watch</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                          <strong className="text-gray-900 dark:text-white">Strict watch mode</strong> — detect breaking changes and track violations (errors/warnings) relative to baseline
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-cyan-50/30 dark:bg-cyan-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 rounded text-xs sm:text-sm font-mono">--log-file</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">off</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Write structured change logs to <code className="px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-900/40 rounded text-xs font-mono">.logicstamp/context_watch-mode-logs.json</code>
                        </td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--debug</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show detailed hash/diff information on changes</td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--quiet</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-q</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Suppress verbose output (show only errors)</td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--include-style</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs font-mono">false</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Watch style files and include style metadata in generated context</td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--profile watch-fast</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">default</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Use lighter style extraction for faster rebuilds</td>
                      </tr>

                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--depth &lt;n&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-xs text-gray-500 dark:text-gray-400">—</span>
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
                    All standard <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp context</code> options work with watch mode.{' '}
                    <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--strict-watch</code> adds violation tracking on top of normal diffs.
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">MCP Integration</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode is designed to work seamlessly with the <strong className="text-gray-900 dark:text-white">LogicStamp MCP server</strong>. When watch mode is active, MCP tools can skip expensive regeneration and access fresh context instantly.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">MCP Workflow with Watch Mode</h3>
                    <ol className="space-y-2 text-sm text-purple-800 dark:text-purple-300 ml-4 list-decimal">
                      <li>
                        Start watch mode in a terminal:{' '}
                        <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp context --watch</code>
                      </li>
                      <li>
                        MCP tool calls{' '}
                        <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">logicstamp_watch_status</code> first
                      </li>
                      <li>
                        If watch mode is active, skip{' '}
                        <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">refresh_snapshot</code> entirely
                      </li>
                      <li>
                        Go directly to{' '}
                        <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">list_bundles</code> →{' '}
                        <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">read_bundle</code>
                      </li>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Watch Status & Logs</h2>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Watch mode writes a status file at{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 rounded-md font-mono text-xs sm:text-sm">
                  .logicstamp/context_watch-status.json
                </code>{' '}
                that other tools (like MCP) can use to detect if watch mode is running.
              </p>

              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'context_watch-status.json',
                      code: `{
  "active": true,
  "projectRoot": "/path/to/project",
  "pid": 12345,
  "startedAt": "2025-01-19T10:30:00.000Z",
  "outputDir": "/path/to/project",
  "strictWatch": false
}`,
                      copyText: '',
                    },
                    {
                      label: 'watch-mode logs',
                      code: `# Opt-in: structured change logs (NDJSON/JSON entries)
stamp context --watch --log-file

# Writes to:
# .logicstamp/context_watch-mode-logs.json`,
                      copyText: 'stamp context --watch --log-file',
                    },
                  ]}
                />
              </div>

              <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">The status file is created when watch mode starts and cleaned up when watch mode stops.</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Watch Log (`.logicstamp/context_watch-mode-logs.json`)</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  <strong className="text-gray-900 dark:text-white">Opt-in with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--log-file</code> flag.</strong> When enabled, logs are appended after each regeneration:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Enable Logging',
                      code: `# Enable watch mode with log file output
stamp context --watch --log-file`,
                      copyText: 'stamp context --watch --log-file',
                    },
                    {
                      label: 'Log Format',
                      code: `{
  "timestamp": "2025-01-19T10:30:05.000Z",
  "changedFiles": ["src/components/Button.tsx"],
  "fileCount": 1,
  "durationMs": 234,
  "modifiedContracts": [...],
  "modifiedBundles": [...],
  "summary": {
    "modifiedContractsCount": 1,
    "modifiedBundlesCount": 1,
    "addedContractsCount": 0,
    "removedContractsCount": 0
  }
}`,
                      copyText: '',
                    },
                  ]}
                />
                <div className="mt-4 p-4 bg-cyan-50/50 dark:bg-cyan-950/20 border-l-4 border-cyan-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    By default, watch mode does not write log files. Use <code className="px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-900/40 rounded text-xs font-mono">--log-file</code> when you need structured change notifications (e.g., to display &quot;what changed&quot; in a UI or for debugging).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Example Workflows Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Example Workflows</h2>
              <div className="w-full max-w-full overflow-x-auto">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Quick Start',
                      code: `# Basic watch mode
stamp context --watch
stamp context -w

# Watch with style metadata
stamp context --include-style --watch

# Watch a specific directory
stamp context ./src/components --watch

# Watch with debug output (shows hash changes)
stamp context --watch --debug

# Watch with structured change logs (for change notifications)
stamp context --watch --log-file

# Strict watch mode - track breaking changes and violations
stamp context --watch --strict-watch`,
                      copyText: 'stamp context --watch',
                    },
                    {
                      label: 'Strict Watch',
                      code: `# Strict watch mode (breaking changes + violations)
stamp context --watch --strict-watch

# Combine with style metadata
stamp context --include-style --watch --strict-watch`,
                      copyText: 'stamp context --watch --strict-watch',
                    },
                    {
                      label: 'Background (Unix)',
                      code: `# Run watch mode in background (Unix/macOS)
stamp context --watch > watch.log 2>&1 &

# Check if running
ps aux | grep "stamp context"

# Stop it
kill $(pgrep -f "stamp context --watch")`,
                      copyText: 'stamp context --watch > watch.log 2>&1 &',
                    },
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">What Changes Are Detected?</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Watch mode tracks semantic changes to your components, not just file modifications.
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

                {/* strict watch note */}
                <div className="mt-6 p-4 bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Note:</strong> Regular watch mode shows changes, but doesn&apos;t classify them as breaking.
                    Use{' '}
                    <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--strict-watch</code>{' '}
                    to detect breaking changes (removed props/events/functions, etc.) with violation tracking.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Strict Watch Mode Section */}
          <AnimatedSection direction="up" delay={475}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.53 20h15a2 2 0 001.74-3.14l-7.5-13a2 2 0 00-3.48 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Strict Watch Mode</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Strict watch mode{' '}
                  <strong className="text-gray-900 dark:text-white">tracks breaking changes and violations</strong> during development. It compares the current contracts against the baseline (the state when watch mode started) and reports what&apos;s currently broken.
                </p>

                <div className="w-full max-w-full overflow-x-auto">
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Enable',
                        code: `# Enable strict watch mode
stamp context --watch --strict-watch

# Combine with style metadata
stamp context --include-style --watch --strict-watch`,
                        copyText: 'stamp context --watch --strict-watch',
                      },
                      {
                        label: 'Output Example',
                        code: `🔄 Regenerating (1 file changed)...

✏️  Modified contract:
  src/components/Button.tsx
   • Removed props: \`loading\`

✅ Regenerated

⚠️  Strict Watch: 1 violation(s) detected

   ❌ Errors (1):
      Breaking change: prop 'loading' removed from src/components/Button.tsx

   📊 Current state: 1 error(s), 0 warning(s)`,
                        copyText: '',
                      },
                      {
                        label: 'Violations Report',
                        code: `# Written only when violations exist:
# .logicstamp/strict_watch_violations.json

{
  "active": true,
  "startedAt": "2026-01-22T10:30:00.000Z",
  "cumulativeViolations": 1,
  "cumulativeErrors": 1,
  "cumulativeWarnings": 0,
  "regenerationCount": 5,
  "lastCheck": {
    "timestamp": "2026-01-22T10:35:00.000Z",
    "totalViolations": 1,
    "errors": 1,
    "warnings": 0,
    "changedFiles": ["src/components/Button.tsx"]
  }
}`,
                        copyText: '',
                      },
                    ]}
                  />
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">State-based semantics</h3>
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      Violations reflect the <strong>current</strong> state relative to baseline (like <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">git diff</code>).
                      If you fix/revert breaking changes, the report is deleted (no violations = no report).
                    </p>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Exit behavior</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      Watch mode is for <strong>development awareness</strong>, not CI enforcement. On{' '}
                      <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">Ctrl+C</code>,
                      it exits with signal code (130) regardless of violations.
                      <br /><br />
                      For CI with exit codes, use{' '}
                      <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">stamp compare</code> instead.
                    </p>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Best Practices</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Start watch mode when beginning a coding session</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Run <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context --watch</code> in a dedicated terminal alongside your dev server
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use strict watch during refactors</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Add{' '}
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--strict-watch</code> to catch breaking changes early and keep a violations report while you refactor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use with MCP for the best experience</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        MCP tools automatically detect watch mode and skip regeneration, giving you instant context access
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">
  Add{' '}
  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
    .logicstamp/
  </code>{' '}
  to{' '}
  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
    .gitignore
  </code>{' '}
  (automatically added when you run{' '}
  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
    stamp init
  </code>)
</p>
<p className="text-sm text-gray-700 dark:text-gray-300">
  The cache directory, watch status files, logs, and strict watch reports shouldn&apos;t be committed to version control.
</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--log-file</code> for debugging & notifications</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Enable logging to see structured rebuild info and “what changed” entries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Debug Mode Section */}
          <AnimatedSection direction="up" delay={525}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Debug Mode</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">--debug</code> to see detailed information about what changed:
                </p>

                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Enable Debug',
                      code: `stamp context --watch --debug`,
                      copyText: 'stamp context --watch --debug',
                    },
                    {
                      label: 'Debug Output',
                      code: `[DEBUG] Changed file: src/components/Button.tsx
[DEBUG] Modified contracts (1):
  ~ src/components/Button.tsx
    semanticHash (API/logic): uif:abc123... → uif:def456...
      ↳ Detects: props, events, state, hooks, components, functions
    Detailed changes:
      + Props: disabled
      - Props: loading`,
                      copyText: '',
                    },
                  ]}
                />

                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-sm">semanticHash</h3>
                    <p className="text-xs text-purple-800 dark:text-purple-300">
                      Changes when the component&apos;s API changes (props, events, state, hooks)
                    </p>
                  </div>

                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 text-sm">fileHash</h3>
                    <p className="text-xs text-indigo-800 dark:text-indigo-300">
                      Changes when any file content changes (including comments, formatting)
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-sm">bundleHash</h3>
                    <p className="text-xs text-blue-800 dark:text-blue-300">
                      Changes when the dependency graph structure changes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Performance Tips Section */}
          <AnimatedSection direction="up" delay={540}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Performance Tips</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Focus on subdirectories</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Watch a specific directory when working on one feature
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">watch-fast</code> profile</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Lighter style extraction when you need faster rebuilds
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Skip style if not needed</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Don&apos;t use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-style</code> if you don&apos;t need style metadata
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">Check debug mode sparingly</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Debug output adds overhead; use it for troubleshooting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Stopping Watch Mode Section */}
          <AnimatedSection direction="up" delay={555}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Stopping Watch Mode</h2>
                </div>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Press <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-slate-400 rounded-md font-mono text-xs sm:text-sm">Ctrl+C</code> to stop watch mode gracefully:
                </p>

                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Stop Watch Mode',
                      code: `^C
👋 Watch mode stopped`,
                      copyText: '',
                    },
                  ]}
                />

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-6 mb-4 leading-relaxed">
                  Watch mode cleans up:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li>Closes file watcher</li>
                  <li>Deletes watch status file (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.logicstamp/context_watch-status.json</code>)</li>
                  <li>Flushes any pending logs</li>
                </ul>

                <div className="mt-6 p-4 bg-slate-50/50 dark:bg-slate-950/20 border-l-4 border-slate-500 rounded-r-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Graceful Shutdown (v0.5.4+)</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Watch mode uses a centralized cleanup registry to ensure resources are properly cleaned up on any exit:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300 mt-2 ml-4 list-disc">
                    <li><strong>Signal handlers</strong> - SIGINT (Ctrl+C), SIGTERM, and SIGHUP all trigger graceful shutdown</li>
                    <li><strong>Error exits</strong> - Even when errors occur, cleanup handlers run before the process exits</li>
                    <li><strong>Priority ordering</strong> - Cleanup handlers run in priority order (watch mode cleanup runs first)</li>
                  </ul>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    This prevents orphaned resources (file watchers, status files) that could occur if the process exits unexpectedly. The cleanup is automatic—no user action required.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Troubleshooting Section */}
          <AnimatedSection direction="up" delay={570}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.53 20h15a2 2 0 001.74-3.14l-7.5-13a2 2 0 00-3.48 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Troubleshooting</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Changes not detected</h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li>Check if the file type is watched (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code>, or style files with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-style</code>)</li>
                      <li>Verify the file isn&apos;t in an ignored directory</li>
                      <li>Enable debug logging: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">LOGICSTAMP_DEBUG=1 stamp context --watch</code></li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Slow rebuilds</h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li>Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--profile watch-fast</code> for lighter style extraction</li>
                      <li>Focus on a subdirectory instead of the entire project</li>
                      <li>Check if you&apos;re hitting <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">max-nodes</code> limits</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Watch mode crashes</h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li>Check available memory (large projects need more RAM)</li>
                      <li>Enable debug mode to identify problematic files</li>
                      <li>Report issues at <a href="https://github.com/LogicStamp/logicstamp-context/issues" className="text-orange-600 dark:text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">https://github.com/LogicStamp/logicstamp-context/issues</a></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Commands Section */}
          <AnimatedSection direction="up" delay={585}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">See Also</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/docs/logicstamp-context/context"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="text-sm font-mono">stamp context</code> →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Generate context files (one-time)</p>
                </Link>

                <Link
                  href="/docs/mcp/reference"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">MCP Tools →</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">MCP server tool reference</p>
                </Link>

                <Link
                  href="/docs/logicstamp-context/context"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="text-sm font-mono">context.md</code> →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete <code className="text-xs font-mono">stamp context</code> command reference</p>
                </Link>

                <Link
                  href="/docs/logicstamp-context/style"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="text-sm font-mono">style.md</code> →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Style metadata extraction guide</p>
                </Link>

                <Link
                  href="/docs/logicstamp-context/compare-command"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="text-sm font-mono">compare.md</code> →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Context drift detection</p>
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <ReadyToGetStartedCard
            variant="green"
            description="Explore best practices, or jump to usage for more workflows (including strict watch during refactors)."
            primaryAction={{
              href: '/docs/best-practices',
              label: 'Best Practices',
            }}
            secondaryAction={{
              href: '/docs/logicstamp-context/usage',
              label: 'Usage Guide',
            }}
          />
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}