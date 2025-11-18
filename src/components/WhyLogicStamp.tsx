'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function WhyLogicStamp() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before')
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '65% smaller context bundles',
      description: 'Strips out imports, boilerplate, and implementation details. Only contracts and type signatures.',
      stat: '~65%',
      statLabel: 'Token Savings',
      color: 'blue',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Automatic dependency graphs',
      description: 'AI sees your entire codebase structure, imports, and component relationships instantly.',
      stat: '100%',
      statLabel: 'Visibility',
      color: 'purple',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Always up-to-date',
      description: 'Run stamp context before each AI session. Fresh context in seconds, not stale READMEs.',
      stat: '<5s',
      statLabel: 'Generation Time',
      color: 'green',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'CI/CD context drift detection',
      description: 'Track architectural changes with stamp context compare in your build pipeline.',
      stat: '✓',
      statLabel: 'CI Ready',
      color: 'emerald',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-gradient-bg-section overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Stop Pasting Code.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Start Stamping Context.
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
              </span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              One command. Instant AI-ready context bundles. Zero manual work.
            </p>
          </div>
        </AnimatedSection>

        {/* Interactive before/after comparison */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mx-auto max-w-6xl mb-20">
            {/* Tab selector */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg bg-white/80 dark:bg-gray-800/80 p-1 shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                <button
                  onClick={() => setActiveTab('before')}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'before'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Without LogicStamp
                </button>
                <button
                  onClick={() => setActiveTab('after')}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                    activeTab === 'after'
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  With LogicStamp
                </button>
              </div>
            </div>

            {/* Content area */}
            <div className="relative">
              {activeTab === 'before' ? (
                <div className="space-y-6">
                  {/* Before: Manual approach */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
                    <div className="relative rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 shadow-xl ring-1 ring-red-200/50 dark:ring-red-800/50">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 p-3 rounded-xl bg-red-100 dark:bg-red-900/30">
                          <svg
                            className="w-6 h-6 text-red-600 dark:text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            The Manual Grind
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            30+ minutes of copying, pasting, and explaining your codebase
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                            1
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Open every relevant file in your editor
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              Search for components, utils, types... which ones do you need again?
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                            2
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Copy entire files including imports and boilerplate
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              Pay for 3x more tokens than you actually need
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                            3
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Manually explain component relationships
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              "Button.tsx imports Icon.tsx and uses the theme from ThemeProvider.tsx..."
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                            4
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Forget a critical dependency and get confused AI responses
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              "Wait, I forgot to include the API client..."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                        <p className="text-sm font-semibold text-red-900 dark:text-red-300">
                          Result: 30+ minutes wasted. Incomplete context. Expensive tokens. Frustrated developer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* After: LogicStamp approach */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
                    <div className="relative rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 shadow-xl ring-1 ring-green-200/50 dark:ring-green-800/50">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0 p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                          <svg
                            className="w-6 h-6 text-green-600 dark:text-green-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            The LogicStamp Way
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            One command. 5 seconds. Perfect context every time.
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                            1
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Run one command in your terminal
                            </p>
                            <code className="text-xs text-green-600 dark:text-green-400 mt-1 block font-mono bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">
                              $ stamp context
                            </code>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                            2
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Get an optimized context.json bundle
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              Only type signatures, contracts, and dependency graphs. 65% smaller than raw source.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                            3
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Upload to ChatGPT, Claude, or any AI
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              AI instantly understands your entire codebase structure and relationships
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/30">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                            4
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              Get smarter AI responses immediately
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                              AI knows your imports, dependencies, types, and architecture without you explaining
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                        <p className="text-sm font-semibold text-green-900 dark:text-green-300">
                          Result: 30 minutes → 5 seconds. Complete dependency graphs. 65% cost savings. Happy developer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Key Benefits Grid */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Why Developers Choose{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  LogicStamp
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-lg -z-10 opacity-20"></span>
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 ${
                    hoveredBenefit === index
                      ? 'bg-white dark:bg-gray-800 shadow-xl transform scale-[1.02]'
                      : 'bg-white/50 dark:bg-gray-800/50 shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${
                        benefit.color === 'blue'
                          ? 'from-blue-500 to-blue-600'
                          : benefit.color === 'purple'
                          ? 'from-purple-500 to-purple-600'
                          : benefit.color === 'green'
                          ? 'from-green-500 to-green-600'
                          : 'from-emerald-500 to-emerald-600'
                      }`}
                    >
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{benefit.title}</h4>
                        <div className="flex flex-col items-end">
                          <span
                            className={`text-lg font-bold ${
                              benefit.color === 'blue'
                                ? 'text-blue-600 dark:text-blue-400'
                                : benefit.color === 'purple'
                                ? 'text-purple-600 dark:text-purple-400'
                                : benefit.color === 'green'
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-emerald-600 dark:text-emerald-400'
                            }`}
                          >
                            {benefit.stat}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{benefit.statLabel}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* The Hook */}
        <AnimatedSection direction="up" delay={600}>
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
            <div className="relative max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-8 py-6 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover-lift">
                <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">LogicStamp is your codebase&apos;s stamp of approval.</strong>{' '}
                    One command generates a verified, AI-optimized snapshot of your entire project structure—like an official document stamped and certified for AI consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
