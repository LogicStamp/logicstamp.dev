import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

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
                  deep investigations. Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--compare-modes</code> to see exact token costs before committing to a mode.
                </p>
                <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0">
                  <table className="min-w-full text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-gray-800">
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Mode</th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">What it includes</th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Best for</th>
                        <th className="px-2 sm:px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-200">Token cost</th>
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
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 text-xs">10-20% of raw</td>
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
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 text-xs">20-30% of raw</td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 font-mono text-[0.7rem] sm:text-xs">
                            header+style
                          </code>
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          Header + style metadata (Tailwind, SCSS, animations)
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400">UI/UX discussions, design system work</td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 text-xs">40-60% of raw</td>
                      </tr>
                      <tr>
                        <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-[0.7rem] sm:text-xs">
                            full
                          </code>
                        </td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 whitespace-nowrap">Complete source</td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400">Targeted deep dives on tricky areas</td>
                        <td className="px-2 sm:px-4 py-2 text-gray-600 dark:text-gray-400 text-xs">80-100% of raw</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 mt-4 sm:mt-6 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-blue-100">
                    <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Best Practice:</span>{' '}
                    Before generating context for a large project, run <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context --compare-modes</code> to see exact token costs across all modes. This helps you choose the most cost-effective mode for your use case and budget.
                  </p>
                </div>

                <div className="mt-4 sm:mt-6">
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Compare all modes',
                        code: '# See token costs for all modes before generating\nstamp context --compare-modes',
                        copyText: 'stamp context --compare-modes',
                      },
                      {
                        label: 'Balanced default',
                        code: 'stamp context --include-code header',
                        copyText: 'stamp context --include-code header',
                      },
                      {
                        label: 'With style metadata',
                        code: 'stamp context style\n# or\nstamp context --include-style',
                        copyText: 'stamp context style',
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

          {/* Compare Modes Best Practice */}
          <AnimatedSection direction="up" delay={325}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Use Compare Modes Before Generating Context
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                  The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--compare-modes</code> flag shows you token costs across all modes without writing any files. This helps you make informed decisions about which mode fits your budget and use case.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-5">
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      When to use compare modes
                    </h3>
                    <ul className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 space-y-1.5">
                      <li>• Before generating context for large projects</li>
                      <li>• When optimizing token budgets</li>
                      <li>• Evaluating style metadata overhead</li>
                      <li>• Planning AI workflow costs</li>
                      <li>• Comparing against raw source dumps</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/70 rounded-xl border border-gray-200 dark:border-gray-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-2">
                      What you get
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Example output',
                          code: `📊 Mode Comparison

   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |        22,000 |        19,556 | 0%
     Header       |        12,228 |        10,867 | 44%
     Header+style |        13,895 |        12,351 | 37%

   Mode breakdown:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Full Context
     -------------|---------------|---------------|--------------------------
     none         |         8,337 |         7,411 | 79%
     header       |        12,228 |        10,867 | 69%
     header+style |        13,895 |        12,351 | 65%
     full         |        39,141 |        34,792 | 0%`,
                          copyText: `stamp context --compare-modes`,
                        },
                      ]}
                    />
                  </div>
                </div>
                <div className="bg-cyan-50/50 dark:bg-cyan-950/20 border-l-4 border-cyan-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-cyan-100">
                    <span className="font-semibold text-cyan-900 dark:text-cyan-200">💡 Pro Tip:</span>{' '}
                    Compare modes is analysis-only—it doesn&apos;t write any files. Use it liberally to experiment with different configurations before committing to a mode. The analysis takes 2-3x longer than normal generation but provides invaluable cost insights.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Security Best Practices */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Security Best Practices
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-5 leading-relaxed">
                  Prevent secrets from being included in your context files. LogicStamp includes built-in security scanning to detect API keys, passwords, tokens, and other sensitive data in your JS/TS/JSON files before they reach context generation.
                </p>

                <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 dark:from-red-950/30 dark:via-orange-950/20 dark:to-amber-950/20 border-l-4 border-red-500 dark:border-red-400 p-4 sm:p-5 mb-4 sm:mb-6 rounded-r-lg">
                  <h3 className="text-base sm:text-lg font-bold text-red-900 dark:text-red-200 mb-2 sm:mb-3">
                    🔒 Use Secure Initialization
                  </h3>
                  <p className="text-xs sm:text-sm text-red-800 dark:text-red-300 mb-3 leading-relaxed">
                    Always use <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/50 rounded font-mono text-xs font-semibold">stamp init --secure</code> when setting up LogicStamp in a new project. This automatically scans for secrets in your JS/TS/JSON files and adds detected secret files to <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/50 rounded font-mono text-xs font-semibold">.stampignore</code>, preventing them from being included in context generation.
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Secure initialization',
                        code: 'cd your-react-project\nstamp init --secure',
                        copyText: 'cd your-react-project\nstamp init --secure',
                      },
                    ]}
                  />
                  <div className="mt-3 p-3 bg-red-50/50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-xs text-red-800 dark:text-red-300 mb-1">
                      <strong className="text-red-900 dark:text-red-200">⚠️ Important:</strong> If <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.stampignore</code> is created, it means secrets were detected—this is a bad sign. You should remove secrets from your codebase rather than ignoring them.
                    </p>
                    <p className="text-xs text-red-800 dark:text-red-300">
                      <strong className="text-red-900 dark:text-red-200">Proper solution:</strong> Move secrets to environment variables or a secrets manager (e.g., Vault, Doppler, AWS Secrets Manager). <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.stampignore</code> is only a temporary safety layer.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-5">
                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-orange-900 dark:text-orange-100 mb-2">
                      Regular security scans
                    </h3>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-200 mb-3">
                      Run security scans regularly, especially before generating context or committing code:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Scan for secrets',
                          code: '# Scan current directory\nstamp security scan\n\n# Scan and auto-apply to .stampignore\nstamp security scan --apply',
                          copyText: 'stamp security scan --apply',
                        },
                      ]}
                    />
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800 p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      CI/CD integration
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200 mb-3">
                      Add security scanning to your CI pipeline to catch secrets before they're committed:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'CI security check',
                          code: '# Fail build if secrets detected\nstamp security scan --quiet\n\n# Exit code: 0 (no secrets) or 1 (secrets found)',
                          copyText: 'stamp security scan --quiet',
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-gray-800 dark:text-blue-100">
                    <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Best Practice:</span>{' '}
                    Security scanning runs 100% locally—nothing is uploaded or sent anywhere. The scanner detects API keys, passwords, tokens, AWS keys, GitHub tokens, private keys, database URLs, JWT secrets, and more in your TypeScript, JavaScript, and JSON files.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Workflow Integration */}
          <AnimatedSection direction="up" delay={500}>
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
                          code: `# Scan for secrets first
stamp security scan --quiet

# Generate fresh context
stamp context

# Validate before using or publishing
stamp context validate`,
                          copyText: `stamp security scan --quiet\nstamp context\nstamp context validate`,
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
















