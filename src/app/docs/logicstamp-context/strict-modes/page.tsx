import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'Strict Modes | LogicStamp Context Documentation',
  description: 'Compare compare --strict vs --strict-watch: breaking change detection for CI/CD and real-time development feedback.',
}

export default function StrictModesPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-rose-50/30 to-pink-50/20 dark:from-red-950/20 dark:via-rose-950/10 dark:to-pink-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-100 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40 text-red-700 dark:text-red-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-red-200/50 dark:border-red-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Breaking Change Detection
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Strict Modes
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Comparison of <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">compare --strict</code> vs <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-rose-600 dark:text-rose-400 rounded-md font-mono text-xs sm:text-sm">--strict-watch</code>: same violation detection, different execution modes.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Quick Answer */}
          <AnimatedSection direction="up" delay={100}>
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Answer</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Q: Does strict watch mode contain API signature comparisons as well?</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>A: No.</strong> API signature changes are tracked in comparison deltas but are <strong>not flagged as violations</strong> in either strict mode. API signature changes are informational only and do not trigger errors or warnings.
              </p>
            </div>
          </AnimatedSection>

          {/* Overview */}
          <AnimatedSection direction="up" delay={150}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Both <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">compare --strict</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--strict-watch</code> use the <strong>same violation detection logic</strong>, but they differ in execution mode, use cases, and behavior.
            </p>
          </AnimatedSection>

          {/* Violation Detection */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Violation Detection (Same for Both)
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-200 dark:border-red-800">
                    <h3 className="font-semibold text-red-900 dark:text-red-200 mb-3">Errors (Exit Code 1)</h3>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-300 ml-4 list-disc">
                      <li><strong>Contract removed</strong> – Component/module deleted</li>
                      <li><strong>Props removed</strong> – Prop removed from component</li>
                      <li><strong>Events removed</strong> – Event/callback removed</li>
                      <li><strong>Functions removed</strong> – Exported function removed</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3">Warnings (Reported, don&apos;t cause exit 1)</h3>
                    <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300 ml-4 list-disc">
                      <li><strong>Prop type changed</strong> – e.g., <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">string</code> → <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">number</code></li>
                      <li><strong>State removed</strong> – State variable removed</li>
                      <li><strong>Variables removed</strong> – Module variable removed</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Not Tracked as Violations</h3>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                    <li><strong>API signature changes</strong> – Tracked in deltas but not violations</li>
                    <li>Hash changes, imports, hooks, components, exports</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* compare --strict */}
          <AnimatedSection direction="up" delay={250}>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded font-mono">compare --strict</code>
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Command',
                    code: `stamp context compare --strict
stamp context compare --baseline git:main --strict`,
                    copyText: 'stamp context compare --strict'
                  }
                ]}
              />
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Execution Mode</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300">One-time comparison. Compares current state against baseline (disk or git ref). Generates fresh context files for comparison.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Use Cases</h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc space-y-1">
                    <li>CI/CD pipelines – Validate PRs don&apos;t introduce breaking changes</li>
                    <li>Pre-commit hooks – Check before committing</li>
                    <li>Release validation – Verify no breaking changes before release</li>
                    <li>Git baseline comparison – Compare against branches/tags/commits</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Exit Behavior</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300">Exit 0 if no violations (or drift approved); Exit 1 if errors detected. Non-interactive in CI.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* --watch --strict-watch */}
          <AnimatedSection direction="up" delay={300}>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-2xl border border-green-200 dark:border-green-800">
              <h2 className="text-2xl font-bold text-green-900 dark:text-green-200 mb-4">
                <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded font-mono">--watch --strict-watch</code>
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Command',
                    code: `stamp context --strict-watch
stamp context --watch --strict-watch  # Equivalent`,
                    copyText: 'stamp context --strict-watch'
                  }
                ]}
              />
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Execution Mode</h3>
                  <p className="text-sm text-green-800 dark:text-green-300">Continuous monitoring until stopped (Ctrl+C). Watches file system, incremental rebuilds. State-based diffing vs baseline when watch started.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Use Cases</h3>
                  <ul className="text-sm text-green-800 dark:text-green-300 ml-4 list-disc space-y-1">
                    <li>Development workflow – Real-time feedback as you code</li>
                    <li>Local development – Catch breaking changes immediately</li>
                    <li>Interactive debugging – See violations appear/disappear as you fix</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">Exit Behavior</h3>
                  <p className="text-sm text-green-800 dark:text-green-300">Exit 130 (SIGINT) on Ctrl+C. No exit code enforcement based on violations. Violations persist in <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.logicstamp/strict_watch_violations.json</code>.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Side-by-Side Comparison Table */}
          <AnimatedSection direction="up" delay={350}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Side-by-Side Comparison
              </h2>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Feature</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><code className="font-mono">compare --strict</code></th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"><code className="font-mono">--watch --strict-watch</code></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Execution</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">One-time</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Continuous (until stopped)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Use Case</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">CI/CD, validation</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Development, real-time feedback</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Exit Code</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">1 if errors detected</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">130 (SIGINT), not based on violations</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Output</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Full comparison diff + violations</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Real-time violation notifications</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Violations File</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">No</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Yes (<code className="text-xs font-mono">.logicstamp/strict_watch_violations.json</code>)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Git Baseline</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">✅ Supported</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">❌ Not supported</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Violation Types</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Same</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Same</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* When to Use Which */}
          <AnimatedSection direction="up" delay={400}>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4">Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-sm font-mono">compare --strict</code> when:</h3>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                  <li>Running in CI/CD pipelines</li>
                  <li>Validating PRs before merge</li>
                  <li>Pre-commit hooks</li>
                  <li>Release validation</li>
                  <li>Comparing against git refs</li>
                </ul>
              </div>
              <div className="p-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-200 dark:border-green-800">
                <h3 className="font-bold text-green-900 dark:text-green-200 mb-4">Use <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-sm font-mono">--strict-watch</code> when:</h3>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                  <li>Developing locally</li>
                  <li>Want real-time feedback as you code</li>
                  <li>Need to see violations appear/disappear interactively</li>
                  <li>Want violations persisted in a file for review</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* API Signature Handling */}
          <AnimatedSection direction="up" delay={450}>
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-800">
              <h2 className="text-xl font-bold text-amber-900 dark:text-amber-200 mb-4">
                API Signature Handling
              </h2>
              <p className="text-sm text-amber-800 dark:text-amber-300 mb-4">
                API signature changes (<code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">apiSignature</code> delta type) are <strong>not tracked as violations</strong> in either mode.
              </p>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-300 ml-4 list-disc mb-4">
                <li>✅ Tracked in comparison deltas – Shows up in compare output</li>
                <li>✅ Included in semantic hash – Affects hash calculation</li>
                <li>❌ Not flagged as violations – No errors or warnings</li>
              </ul>
              <p className="text-sm text-amber-800 dark:text-amber-300">
                This is intentional: API signature changes may be non-breaking (e.g., adding optional parameters). Backend API validation is planned for future enhancements.
              </p>
            </div>
          </AnimatedSection>

          {/* Summary */}
          <AnimatedSection direction="up" delay={500}>
            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Both modes use identical violation detection logic but serve different purposes:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 list-disc">
                <li><strong><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">compare --strict</code></strong> = CI/CD validation (one-time, exit codes, git baseline support)</li>
                <li><strong><code className="px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm font-mono">--watch --strict-watch</code></strong> = Development workflow (continuous, interactive, real-time feedback)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Neither mode treats API signature changes as violations—they&apos;re tracked in deltas but are informational only.
              </p>
            </div>
          </AnimatedSection>

          {/* Related Commands */}
          <AnimatedSection direction="up" delay={550}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Related Commands
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/docs/logicstamp-context/compare"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="text-sm font-mono">stamp context compare</code> →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Drift detection with <code className="text-xs font-mono">--strict</code> flag
                  </p>
                </Link>
                <Link
                  href="/docs/logicstamp-context/watch-mode"
                  className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Watch Mode →
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Incremental rebuilds with <code className="text-xs font-mono">--strict-watch</code>
                  </p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <ReadyToGetStartedCard
          variant="green"
          description="Explore compare command or watch mode for breaking change detection."
          primaryAction={{
            href: '/docs/logicstamp-context/compare',
            label: 'Compare Command',
          }}
          secondaryAction={{
            href: '/docs/logicstamp-context/watch-mode',
            label: 'Watch Mode',
          }}
          delay={600}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
