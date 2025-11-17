'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function WhyLogicStamp() {
  const [hoveredProblem, setHoveredProblem] = useState<number | null>(null)
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null)

  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Token waste',
      description: 'Copying full source files to AI chats wastes tokens on boilerplate and imports.',
      stat: '~65%',
      statLabel: 'Token Waste',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Missing context',
      description: "AI can't see component relationships and dependency graphs without manual explanation.",
      stat: '0%',
      statLabel: 'Visibility',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Stale docs',
      description: 'README files go out of date. AI needs fresh, accurate codebase structure.',
      stat: 'Outdated',
      statLabel: 'Status',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'No drift detection',
      description: "Can't track what changed between context versions in CI/CD pipelines.",
      stat: '✗',
      statLabel: 'CI Ready',
    },
  ]

  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Token optimization',
      description: 'Get ~65% token savings by including only contracts and headers, not full source.',
      stat: '~65%',
      statLabel: 'Token Savings',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Dependency graphs',
      description: 'AI instantly sees component relationships, import structures, and how your codebase connects without manual explanation.',
      stat: '100%',
      statLabel: 'Visibility',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Always up-to-date',
      description: 'Generate fresh context in seconds with `stamp context` before each AI session.',
      stat: 'Generally <5s',
      statLabel: 'Generation Time',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Context drift detection',
      description: 'Compare versions with `stamp context compare` to track what changed in CI.',
      stat: '✓',
      statLabel: 'CI Ready',
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-gradient-bg-section overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-[1320px] px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl">
              Why LogicStamp{' '}
              <span className="bg-gradient-blue-purple bg-clip-text text-transparent">Context?</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              Purpose-built for AI and CI workflows
            </p>
          </div>
        </AnimatedSection>

        {/* Comparison Layout */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* The Problem */}
          <AnimatedSection direction="left" delay={200} className="w-full max-w-md lg:max-w-none">
              <div className="relative h-full w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
                <div className="relative rounded-3xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 border border-red-200/50 dark:border-red-800/50 shadow-xl hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-red-100 dark:bg-red-900/30">
                  <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    The Manual Context Problem
                  </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">What you're doing now</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {problems.map((problem, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredProblem(index)}
                        onMouseLeave={() => setHoveredProblem(null)}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          hoveredProblem === index
                            ? 'bg-red-100 dark:bg-red-900/30 shadow-lg transform scale-[1.01]'
                            : 'bg-white/50 dark:bg-gray-800/30'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                            hoveredProblem === index
                              ? 'bg-red-200 dark:bg-red-800/50 text-red-700 dark:text-red-400'
                              : 'bg-red-100/50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                          }`}>
                            {problem.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{problem.title}</h4>
                              <div className="flex flex-col items-end">
                                <span className="text-lg font-bold text-red-600 dark:text-red-400">{problem.stat}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{problem.statLabel}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{problem.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* The Solution */}
          <AnimatedSection direction="right" delay={400} className="w-full max-w-md lg:max-w-none">
              <div className="relative h-full w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
                <div className="relative rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 border border-green-200/50 dark:border-green-800/50 shadow-xl hover-lift">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-green-100 dark:bg-green-900/30">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    The LogicStamp Solution
                  </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">What you should do</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredSolution(index)}
                        onMouseLeave={() => setHoveredSolution(null)}
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          hoveredSolution === index
                            ? 'bg-green-100 dark:bg-green-900/30 shadow-lg transform scale-[1.02]'
                            : 'bg-white/50 dark:bg-gray-800/30'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                            hoveredSolution === index
                              ? 'bg-green-200 dark:bg-green-800/50 text-green-700 dark:text-green-400'
                              : 'bg-green-100/50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                          }`}>
                            {solution.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{solution.title}</h4>
                              <div className="flex flex-col items-end">
                                <span className="text-lg font-bold text-green-600 dark:text-green-400">{solution.stat}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{solution.statLabel}</span>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* The Analogy */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-20 dark:opacity-30"></div>
              <div className="relative max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-8 py-6 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover-lift">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300">
                      <strong className="text-gray-900 dark:text-white">Think of it this way:</strong>{' '}
                      Manual code sharing is like describing your house room by room.
                      LogicStamp is the <span className="bg-gradient-blue-purple bg-clip-text text-transparent font-semibold">architectural blueprint</span> that shows the complete structure at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection direction="up" delay={800}>
            <div className="mt-16 text-center">
              <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-4">
                Stop pasting code. Start sharing structured context bundles that AI actually understands.
              </p>
              <a
                href="docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-blue-purple px-6 py-3 text-sm lg:text-base font-semibold text-white shadow-lg hover:bg-gradient-blue-purple-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 transition-all duration-200 hover-lift"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
      </div>
    </section>
  )
}
