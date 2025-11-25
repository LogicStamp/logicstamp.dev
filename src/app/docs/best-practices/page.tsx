import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Best Practices | LogicStamp Context Documentation',
  description: 'Practical guidelines for using LogicStamp Context with AI assistants and in your workflows.',
}

export default function BestPracticesPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                </svg>
                Best Practices
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Best Practices
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Opinionated guidance for getting the most out of LogicStamp Context with AI coding assistants.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {/* Core Prompting Rule */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-amber-200 dark:border-amber-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Use the Right Context Files in Prompts
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">
                  AI assistants do their best work when you give them a single, structured view of your project instead of raw source files.
                </p>
                <div className="bg-amber-50/70 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl p-3 sm:p-4 mb-4 sm:mb-5">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-amber-100">
                    <span className="font-semibold text-amber-900 dark:text-amber-200">💡 Best Practice:</span>{' '}
                    When prompting an AI assistant, explicitly tell it to use the per-folder{' '}
                    <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem] sm:text-xs">
                      context.json
                    </code>{' '}
                    files and the root{' '}
                    <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem] sm:text-xs">
                      context_main.json
                    </code>{' '}
                    to understand your project structure. This produces the most consistent and grounded results across all assistants.
                  </p>
                </div>

                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Component Query',
                      code: `Using src/app/docs/getting-started/context.json, explain how the Installation & Quick Start page is structured.`,
                      copyText:
                        'Using src/app/docs/getting-started/context.json, explain how the Installation & Quick Start page is structured.',
                    },
                    {
                      label: 'Architecture Review',
                      code: `From context_main.json, summarize the main folders, their context.json files, and what they cover.`,
                      copyText:
                        'From context_main.json, summarize the main folders, their context.json files, and what they cover.',
                    },
                    {
                      label: 'Dependency Check',
                      code: `Using src/components/context.json, list what depends on DocsLayout and how it is used.`,
                      copyText:
                        'Using src/components/context.json, list what depends on DocsLayout and how it is used.',
                    },
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Regeneration & Drift */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Keep Context Fresh After Refactors
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                  Stale context is worse than no context. Regenerate bundles when you make structural changes so assistants don&apos;t
                  reason about an outdated graph.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-indigo-900 dark:text-indigo-100 mb-2">
                      After big refactors
                    </h3>
                    <ul className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-200 space-y-1.5">
                      <li>• Moving components between folders</li>
                      <li>• Renaming shared utilities or hooks</li>
                      <li>• Changing public props or exported APIs</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/60 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Recommended workflow
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Detect drift',
                          code: 'stamp context compare',
                          copyText: 'stamp context compare',
                        },
                        {
                          label: 'Regenerate',
                          code: 'stamp context\nstamp context validate',
                          copyText: 'stamp context\nstamp context validate',
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Minimal vs Full Context */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Choose the Right Code Inclusion Mode
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                  Most teams never need full source code in every bundle. Start with headers, then selectively turn on full code for
                  deep investigations.
                </p>
                <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                  <table className="min-w-full text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Mode</th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">What it includes</th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Best for</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[0.7rem] sm:text-xs">
                            none
                          </code>
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">Contracts only</td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400">API docs, CI checks</td>
                      </tr>
                      <tr className="bg-emerald-50/60 dark:bg-emerald-950/20">
                        <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100 font-mono text-[0.7rem] sm:text-xs">
                            header
                          </code>{' '}
                          <span className="ml-1 text-[0.65rem] sm:text-xs font-semibold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200">
                            default
                          </span>
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          JSDoc, signatures, and contracts
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400">Everyday AI chat and code review</td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[0.7rem] sm:text-xs">
                            full
                          </code>
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">Complete source</td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400">Targeted deep dives on tricky areas</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 sm:mt-6">
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Compare modes',
                        code: 'stamp context --compare-modes',
                        copyText: 'stamp context --compare-modes',
                      },
                      {
                        label: 'Balanced default',
                        code: 'stamp context --include-code header',
                        copyText: 'stamp context --include-code header',
                      },
                      {
                        label: 'Minimal footprint',
                        code: 'stamp context --include-code none',
                        copyText: 'stamp context --include-code none',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Workflow Integration */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Integrate LogicStamp Into Your Workflow
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                  Treat context generation like tests or type-checking: something that runs regularly so your AI tools always see the
                  latest structure.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-purple-900 dark:text-purple-100 mb-2">
                      Local development
                    </h3>
                    <ul className="text-xs sm:text-sm text-purple-800 dark:text-purple-200 space-y-1.5">
                      <li>• Run on demand before complex AI-assisted work</li>
                      <li>• Keep bundles in sync with your feature branches</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/70 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                      CI / CD pipelines
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'CI snippet',
                          code: `# Generate fresh context
stamp context

# Validate before using or publishing
stamp context validate`,
                          copyText: `stamp context\nstamp context validate`,
                        },
                      ]}
                    />
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


