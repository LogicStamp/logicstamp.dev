'use client'

import { useState, useEffect, useRef } from 'react'
import AnimatedSection from '../AnimatedSection'

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export default function WhyLogicStamp() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [commandExecuted, setCommandExecuted] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: problemRef, inView: problemInView } = useInView(0.1)
  const { ref: solutionRef, inView: solutionInView } = useInView(0.1)
  const { ref: benefitsRef, inView: benefitsInView } = useInView(0.1)

  // Terminal typing animation for solution
  useEffect(() => {
    if (solutionInView && !commandExecuted) {
      const command = '$ stamp context'
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setTerminalText(command.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setCommandExecuted(true)
          setTimeout(() => {
            setShowOutput(true)
          }, 300)
        }
      }, 80)
      return () => clearInterval(typeInterval)
    }
  }, [solutionInView, commandExecuted])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

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
      gradient: 'from-blue-500/20 via-blue-600/20 to-indigo-600/20',
      borderGradient: 'from-blue-400 via-blue-500 to-indigo-600',
      iconBg: 'from-blue-500/10 to-indigo-600/10',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Automatic dependency graphs',
      description: 'AI sees your entire codebase structure, imports, and component relationships instantly.',
      stat: '100%',
      statLabel: 'Visibility',
      gradient: 'from-purple-500/20 via-violet-600/20 to-pink-600/20',
      borderGradient: 'from-purple-500 via-violet-600 to-pink-600',
      iconBg: 'from-purple-500/10 to-pink-600/10',
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
      gradient: 'from-emerald-500/20 via-green-600/20 to-teal-600/20',
      borderGradient: 'from-emerald-500 via-green-600 to-teal-600',
      iconBg: 'from-emerald-500/10 to-teal-600/10',
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
      gradient: 'from-cyan-500/20 via-teal-600/20 to-green-600/20',
      borderGradient: 'from-cyan-500 via-teal-600 to-green-600',
      iconBg: 'from-cyan-500/10 to-green-600/10',
    },
  ]

  return (
    <section id="why-logicstamp" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Stop Pasting Code.{' '}
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Start Stamping Context.
            </span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-600 dark:text-gray-300">
            One command. Instant AI-ready context bundles. Zero manual work.
          </p>
        </div>

        {/* Problem → Solution Flow */}
        <div className="mt-20 mx-auto max-w-6xl space-y-8">
          {/* Problem Card */}
          <div 
            ref={problemRef}
            className={`transition-all duration-1000 ${
              problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-red-200/50 dark:border-red-900/50 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/30 dark:from-red-900/20 dark:to-red-800/10 opacity-60" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/50">
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
                    <p className="text-gray-600 dark:text-gray-300">
                      30+ minutes of copying, pasting, and explaining your codebase
                    </p>
                  </div>
                </div>

                {/* Code editor window */}
                <div className={`mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner transition-all duration-700 delay-300 ${
                  problemInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-500 text-xs ml-2">editor</span>
                  </div>
                  <div className="text-gray-300 text-xs space-y-1">
                    <div className="opacity-60">// Copying entire file...</div>
                    <div className="opacity-40">import React from 'react'</div>
                    <div className="opacity-40">import {'{'} Icon {'}'} from './Icon'</div>
                    <div className="opacity-40">import {'{'} useTheme {'}'} from './ThemeProvider'</div>
                    <div className="opacity-40">// ... 200+ more lines of boilerplate</div>
                    <div className="text-red-400 mt-2">⚠ Missing: API client dependency</div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 transition-all duration-700 delay-500 ${
                  problemInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <p className="text-sm font-medium text-red-900 dark:text-red-300">
                    Result: 30+ minutes wasted copying files, searching for dependencies, and manually explaining your codebase. Incomplete context leads to confused AI responses. Pay for 3x more tokens than needed. Frustrated developer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow indicator */}
          <div className={`flex justify-center transition-all duration-700 ${
            solutionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
            <div className="p-3 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30">
              <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Solution Card */}
          <div 
            ref={solutionRef}
            className={`transition-all duration-1000 ${
              solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 shadow-sm transition-all duration-500 border border-emerald-200/50 dark:border-emerald-900/50 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-100/30 dark:from-emerald-900/20 dark:to-green-800/10 opacity-60" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-600/10">
                    <svg
                      className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
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
                    <p className="text-gray-600 dark:text-gray-300">
                      One command. 5 seconds. Perfect context every time.
                    </p>
                  </div>
                </div>

                {/* Terminal window */}
                <div className={`mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner transition-all duration-700 delay-300 min-h-[140px] ${
                  solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-gray-500 text-xs ml-2">terminal</span>
                  </div>
                  <div className="text-green-400 min-h-[20px]">
                    {terminalText}
                    {!commandExecuted && showCursor && <span className="animate-blink">_</span>}
                  </div>
                  <div className={`mt-2 text-gray-300 text-xs space-y-1 transition-opacity duration-300 ${
                    showOutput ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="opacity-80">✓ Scanning 42 components...</div>
                    <div className="opacity-80">✓ Building dependency graphs...</div>
                    <div className="opacity-80">✓ Generating context bundles...</div>
                    <div className="text-green-400">✓ Complete! Context ready in 4.2s</div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 transition-all duration-700 delay-500 ${
                  solutionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <p className="text-sm font-medium text-emerald-900 dark:text-emerald-300">
                    Result: 30 minutes → 5 seconds. One command (<code className="text-xs font-mono bg-emerald-200 dark:bg-emerald-900/50 px-1.5 py-0.5 rounded">$ stamp context</code>) generates optimized context.json files with complete dependency graphs. 65% cost savings. AI instantly understands your entire codebase. Happy developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="mt-24">
          <div 
            ref={benefitsRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl mb-3">
              Why Developers Choose LogicStamp
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional-grade tooling for modern development workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  benefitsInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative h-full rounded-2xl p-6 shadow-sm transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.iconBg}`}>
                        <div className="text-gray-700 dark:text-gray-300">
                          {benefit.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {benefit.title}
                          </h4>
                          <div className="flex flex-col items-end">
                            <span className="text-lg font-bold font-mono bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {benefit.stat}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{benefit.statLabel}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Hook */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          benefitsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 p-8 border border-purple-200/50 dark:border-purple-800/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
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
                    <strong className="text-gray-900 dark:text-white">LogicStamp is your codebase's stamp of approval.</strong>{' '}
                    One command generates a verified, AI-optimized snapshot of your entire project structure—like an official document stamped and certified for AI consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  )
}