import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Compare Modes Guide | LogicStamp Context Documentation',
  description: 'Detailed token cost analysis across all context generation modes to help you make informed decisions about token budgets.',
}

export default function CompareModesPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
                Mode Comparison
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Compare Modes Guide
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Detailed token cost analysis across all context generation modes to help you make informed decisions about token budgets.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Syntax
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: 'stamp context --compare-modes',
                    copyText: 'stamp context --compare-modes'
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Overview Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Context generation supports multiple modes that balance information completeness against token cost:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { mode: 'none', desc: 'Contracts only (props, state, hooks, dependencies) with no source code' },
                    { mode: 'header', desc: 'Contracts plus JSDoc headers and function signatures' },
                    { mode: 'header+style', desc: 'Header mode plus extracted style metadata (Tailwind, SCSS, animations, layout)' },
                    { mode: 'full', desc: 'Everything including complete source code' }
                  ].map((item) => (
                    <div key={item.mode} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-900 dark:text-cyan-100 rounded-md font-mono text-xs font-semibold">
                        {item.mode}
                      </code>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-cyan-600 dark:text-cyan-400 rounded-md font-mono text-xs sm:text-sm">--compare-modes</code> flag generates a detailed comparison table showing token costs for all modes, helping you understand the tradeoffs.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* When to Use Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    When to Use
                  </h2>
                </div>
                <div className="space-y-2">
                  {[
                    'Optimize token budgets - See exact costs for different modes before committing',
                    'Evaluate style overhead - Understand the token impact of including style metadata',
                    'Compare against raw source - Calculate savings from using LogicStamp vs raw file dumps',
                    'Plan AI workflows - Choose the most cost-effective mode for your use case',
                    'Budget for scale - Project token costs for larger codebases'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Output Format Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Output Format
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">--compare-modes</code> output includes three sections:
              </p>

              <div className="space-y-6">
                {/* Token Estimation Method */}
                <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">1. Token Estimation Method</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Shows which tokenizers are being used:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `📊 Mode Comparison

   Token estimation: GPT-4o (tiktoken) | Claude (tokenizer)`,
                        copyText: `📊 Mode Comparison

   Token estimation: GPT-4o (tiktoken) | Claude (tokenizer)`
                      }
                    ]}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Or if tokenizers aren't installed (automatic installation failed or skipped):
                  </p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Fallback',
                        code: `📊 Mode Comparison

   Token estimation: GPT-4o (approximation) | Claude (approximation)
   💡 Tip: Tokenizers are included as optional dependencies. If installation failed, manually install @dqbd/tiktoken (GPT-4) and/or @anthropic-ai/tokenizer (Claude) for accurate token counts`,
                        copyText: `📊 Mode Comparison

   Token estimation: GPT-4o (approximation) | Claude (approximation)
   💡 Tip: Tokenizers are included as optional dependencies. If installation failed, manually install @dqbd/tiktoken (GPT-4) and/or @anthropic-ai/tokenizer (Claude) for accurate token counts`
                      }
                    ]}
                  />
                </div>

                {/* Comparison vs Raw Source */}
                <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">2. Comparison vs Raw Source</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Shows token savings compared to dumping raw source files:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |       229,087 |       203,633 | 0%
     Header       |        77,533 |        84,245 | 66%
     Header+style |       158,696 |       172,061 | 31%`,
                        copyText: `   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |       229,087 |       203,633 | 0%
     Header       |        77,533 |        84,245 | 66%
     Header+style |       158,696 |       172,061 | 31%`
                      }
                    ]}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Interpretation:</p>
                    <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li><strong>Raw source</strong> - Baseline showing tokens for all source code without any processing</li>
                      <li><strong>Header</strong> - Typical savings of 60-70% by extracting only contracts and signatures</li>
                      <li><strong>Header+style</strong> - Moderate savings of 25-40% when including style metadata</li>
                    </ul>
                  </div>
                </div>

                {/* Mode Breakdown */}
                <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">3. Mode Breakdown vs Full Context</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Shows savings compared to the maximum information mode:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `   Mode breakdown:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Full Context
     -------------|---------------|---------------|--------------------------
     none         |        46,520 |        50,547 | 85%
     header       |        77,533 |        84,245 | 75%
     header+style |       158,696 |       172,061 | 48%
     full         |       306,620 |       287,878 | 0%`,
                        copyText: `   Mode breakdown:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Full Context
     -------------|---------------|---------------|--------------------------
     none         |        46,520 |        50,547 | 85%
     header       |        77,533 |        84,245 | 75%
     header+style |       158,696 |       172,061 | 48%
     full         |       306,620 |       287,878 | 0%`
                      }
                    ]}
                  />
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Interpretation:</p>
                    <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li><strong>none</strong> - Maximum compression, 80-90% savings, contracts only</li>
                      <li><strong>header</strong> - Balanced compression, 70-80% savings, includes function signatures</li>
                      <li><strong>header+style</strong> - Moderate compression, 40-60% savings, adds visual context</li>
                      <li><strong>full</strong> - No compression, includes all source code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Token Estimation Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Token Estimation
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Default: Character-Based Approximation</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      By default, token estimation uses character-based approximations:
                    </p>
                    <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li><strong>GPT-4o-mini</strong>: ~4 characters per token</li>
                      <li><strong>Claude</strong>: ~4.5 characters per token</li>
                    </ul>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      These approximations are reasonably accurate for most codebases (typically within 10-15% of actual token counts).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Accurate: Optional Tokenizers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      LogicStamp Context includes <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@dqbd/tiktoken</code> (GPT-4) and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@anthropic-ai/tokenizer</code> (Claude) as optional dependencies. npm automatically attempts to install them when you install <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">logicstamp-context</code>.
                    </p>
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800 mb-3">
                      <p className="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Behavior:</p>
                      <ul className="space-y-1.5 text-sm text-indigo-800 dark:text-indigo-200 ml-4 list-disc">
                        <li>npm automatically tries to install tokenizers when installing logicstamp-context</li>
                        <li>If installed, automatically detected and used for accurate counts</li>
                        <li>If not installed (installation failed/skipped), gracefully falls back to approximation</li>
                        <li>No configuration required - works automatically</li>
                      </ul>
                    </div>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Manual Installation',
                          code: `# For accurate GPT-4 token counts
npm install @dqbd/tiktoken

# For accurate Claude token counts
npm install @anthropic-ai/tokenizer

# Install both for complete accuracy
npm install @dqbd/tiktoken @anthropic-ai/tokenizer`,
                          copyText: `# For accurate GPT-4 token counts
npm install @dqbd/tiktoken

# For accurate Claude token counts
npm install @anthropic-ai/tokenizer

# Install both for complete accuracy
npm install @dqbd/tiktoken @anthropic-ai/tokenizer`
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mode Selection Guide */}
          <AnimatedSection direction="up" delay={600}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Mode Selection Guide
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    mode: 'none - Maximum Compression',
                    color: 'green',
                    bestFor: [
                      'CI/CD contract validation',
                      'Dependency graph analysis',
                      'Architecture reviews without implementation details',
                      'Maximum token efficiency'
                    ],
                    limitations: [
                      'No source code or implementation details',
                      'No visual/styling information',
                      'Limited context for code generation tasks'
                    ],
                    cost: 'Typically 15-20% of raw source'
                  },
                  {
                    mode: 'header - Balanced Compression',
                    color: 'blue',
                    bestFor: [
                      'General AI chat workflows (default for llm-chat profile)',
                      'Code review and refactoring',
                      'Understanding component interfaces',
                      'Most LLM interactions'
                    ],
                    includes: [
                      'Full contracts (props, state, hooks)',
                      'JSDoc headers and comments',
                      'Function signatures and types',
                      'Dependency relationships'
                    ],
                    cost: 'Typically 28-32% of raw source'
                  },
                  {
                    mode: 'header+style - Visual Context',
                    color: 'purple',
                    bestFor: [
                      'UI/UX discussions with AI',
                      'Design system maintenance',
                      'Frontend code generation',
                      'Visual consistency reviews'
                    ],
                    includes: [
                      'Everything from header mode',
                      'Tailwind/CSS class patterns',
                      'SCSS/CSS module analysis',
                      'Animation metadata',
                      'Layout patterns (flex/grid)',
                      'Color and spacing patterns'
                    ],
                    cost: 'Typically 58-65% of raw source'
                  },
                  {
                    mode: 'full - Complete Context',
                    color: 'orange',
                    bestFor: [
                      'Deep implementation reviews',
                      'Complex refactoring tasks',
                      'Bug investigation requiring source',
                      'When AI needs all implementation details'
                    ],
                    includes: [
                      'Everything from header+style mode',
                      'Complete source code for all components',
                      'Full file contents'
                    ],
                    cost: 'Typically 125-135% of raw source (plus contract overhead)'
                  }
                ].map((modeInfo) => (
                  <div key={modeInfo.mode} className={`p-4 bg-${modeInfo.color}-50 dark:bg-${modeInfo.color}-950/20 rounded-xl border border-${modeInfo.color}-200 dark:border-${modeInfo.color}-800`}>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">{modeInfo.mode}</h3>

                    <div className="mb-3">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Best for:</p>
                      <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400 ml-4 list-disc">
                        {modeInfo.bestFor.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {modeInfo.includes && (
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Includes:</p>
                        <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          {modeInfo.includes.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {modeInfo.limitations && (
                      <div className="mb-3">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Limitations:</p>
                        <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          {modeInfo.limitations.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs font-semibold text-gray-900 dark:text-white">Token cost: <span className="font-normal text-gray-600 dark:text-gray-400">{modeInfo.cost}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Example Workflows */}
          <AnimatedSection direction="up" delay={700}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Example Workflows
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Budget Planning',
                    code: `# See costs before generating context
stamp context --compare-modes

# Choose appropriate mode based on budget
stamp context --include-code header --max-nodes 50`
                  },
                  {
                    title: 'Style Cost Analysis',
                    code: `# Compare with and without style metadata
stamp context --compare-modes

# Enable style only if budget allows
stamp context style`
                  },
                  {
                    title: 'Production Optimization',
                    code: `# Audit token costs across repository
stamp context --compare-modes | tee token-analysis.txt

# Switch to more efficient mode if needed
stamp context --include-code none --profile ci-strict`
                  },
                  {
                    title: 'Multi-Repo Comparison',
                    code: `# Compare token costs across multiple projects
for repo in api web mobile; do
  echo "=== $repo ==="
  cd $repo
  stamp context --compare-modes --quiet
  cd ..
done`
                  }
                ].map((workflow) => (
                  <div key={workflow.title} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">{workflow.title}</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: workflow.title,
                          code: workflow.code,
                          copyText: workflow.code
                        }
                      ]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Common Questions */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Common Questions
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Why are my numbers different from raw file sizes?',
                      a: 'Token counts are not the same as character counts. Tokenizers split text into semantic units: common words = 1 token, rare words = multiple tokens, code symbols vary widely, and whitespace is typically compressed.'
                    },
                    {
                      q: 'Should I always use accurate tokenizers?',
                      a: 'Use approximation for rough estimates, development/prototyping, or when token costs aren\'t critical. Use tokenizers when precise costs matter for budgeting, production deployments, cost-sensitive workflows, or comparing against other tools.'
                    },
                    {
                      q: 'How much overhead do contracts add?',
                      a: 'Contracts typically add 5-15% overhead compared to raw source in full mode, but enable structured dependency graphs, semantic component analysis, missing dependency tracking, and reproducible builds. The overhead is well worth it for AI context generation.'
                    },
                    {
                      q: 'Does --compare-modes write files?',
                      a: 'No, --compare-modes is analysis-only: generates contracts in memory, computes token estimates, displays comparison tables, and exits without writing files. Use stamp context (without the flag) to actually generate files.'
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{faq.q}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Performance Notes */}
          <AnimatedSection direction="up" delay={900}>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Performance Notes
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--compare-modes</code> takes longer than normal generation (2-3x)</li>
                <li>Regenerates contracts with/without style for accurate comparison</li>
                <li>Uses in-memory processing, no disk writes</li>
                <li>Typical execution: 5-15 seconds for medium projects (50-150 files)</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
