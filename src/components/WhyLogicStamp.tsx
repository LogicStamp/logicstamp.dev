'use client'

import { useState, useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'

export default function WhyLogicStamp() {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const [showSolution, setShowSolution] = useState(false)
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [commandExecuted, setCommandExecuted] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const problemRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const [visibleProblemSteps, setVisibleProblemSteps] = useState<number[]>([])
  const [visibleSolutionSteps, setVisibleSolutionSteps] = useState<number[]>([])
  const [matrixRain, setMatrixRain] = useState<string[]>([])

  // Matrix rain effect for background
  useEffect(() => {
    const chars = '01'
    const generateRain = () => {
      return Array.from({ length: 20 }, () => 
        Array.from({ length: Math.random() * 10 + 5 }, () => 
          chars[Math.floor(Math.random() * chars.length)]
        ).join('')
      )
    }
    setMatrixRain(generateRain())
    const interval = setInterval(() => {
      setMatrixRain(generateRain())
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Scroll-triggered animation for solution reveal
  useEffect(() => {
    const handleScroll = () => {
      if (problemRef.current) {
        const problemRect = problemRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Show problem summary as it comes into view
        const problemTop = problemRect.top
        if (problemTop < windowHeight * 0.8) {
          // Reveal problem summary
          setTimeout(() => {
            setVisibleProblemSteps([1])
          }, 200)
        }
        
        // Show solution when problem is scrolled past
        if (problemRect.bottom < windowHeight * 0.5 && !showSolution) {
          setShowSolution(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showSolution])

  // Terminal typing animation for solution
  useEffect(() => {
    if (showSolution && !commandExecuted) {
      const command = '$ stamp context'
      let index = 0
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setTerminalText(command.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          setCommandExecuted(true)
          // Show output after command
          setTimeout(() => {
            setShowOutput(true)
          }, 500)
        }
      }, 80)
      return () => clearInterval(typeInterval)
    }
  }, [showSolution, commandExecuted])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Show solution summary
  useEffect(() => {
    if (showOutput) {
      setTimeout(() => {
        setVisibleSolutionSteps([1])
      }, 300)
    }
  }, [showOutput])

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
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
        {matrixRain.map((rain, i) => (
          <div
            key={i}
            className="absolute text-green-500 font-mono text-xs animate-matrix-fall"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          >
            {rain}
          </div>
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              Stop Pasting Code.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Start Stamping Context.
                </span>
              </span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              One command. Instant AI-ready context bundles. Zero manual work.
            </p>
          </div>
        </AnimatedSection>

        {/* Problem → Solution Flow */}
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Problem Card */}
          <div ref={problemRef} className="relative">
            <AnimatedSection direction="left" delay={200}>
              <div className="relative group max-w-5xl mx-auto">
                <div className="relative rounded-2xl bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/80 dark:to-red-800/80 p-8 shadow-xl ring-1 ring-red-200/50 dark:ring-red-800/50 transform transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-red-100 dark:bg-red-900/80 animate-shake-slow">
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
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                        <span className="text-red-600">⚠</span> The Manual Grind
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        30+ minutes of copying, pasting, and explaining your codebase
                      </p>
                    </div>
                  </div>

                  {/* Code editor window */}
                  {visibleProblemSteps.length > 0 && (
                    <div className="mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner animate-slide-up">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-500 text-xs ml-2">editor</span>
                      </div>
                      <div className="flex gap-1 mb-2 border-b border-gray-700 overflow-x-auto">
                        <div className="px-2 sm:px-3 py-1 text-xs bg-gray-800 text-gray-400 border-t border-l border-r border-gray-700 rounded-t whitespace-nowrap flex-shrink-0">Button.tsx</div>
                        <div className="px-2 sm:px-3 py-1 text-xs bg-gray-900 text-gray-500 border-t border-l border-r border-gray-700 rounded-t whitespace-nowrap flex-shrink-0">Icon.tsx</div>
                        <div className="px-2 sm:px-3 py-1 text-xs bg-gray-900 text-gray-500 border-t border-l border-r border-gray-700 rounded-t whitespace-nowrap flex-shrink-0">ThemeProvider.tsx</div>
                        <div className="px-2 sm:px-3 py-1 text-xs bg-gray-900 text-gray-500 border-t border-l border-r border-gray-700 rounded-t whitespace-nowrap flex-shrink-0">...</div>
                      </div>
                      <div className="text-gray-300 text-xs space-y-1">
                        <div className="opacity-60">// Copying entire file...</div>
                        <div className="opacity-40">import React from &apos;react&apos;</div>
                        <div className="opacity-40">import {'{'} Icon {'}'} from &apos;./Icon&apos;</div>
                        <div className="opacity-40">import {'{'} useTheme {'}'} from &apos;./ThemeProvider&apos;</div>
                        <div className="opacity-40">// ... 200+ more lines of boilerplate</div>
                        <div className="text-red-400 mt-2">⚠ Missing: API client dependency</div>
                      </div>
                    </div>
                  )}

                  {visibleProblemSteps.length > 0 && (
                    <div className="mt-6 p-6 rounded-lg bg-red-100 dark:bg-red-900/80 border border-red-200 dark:border-red-800 animate-slide-up">
                      <p className="text-sm font-semibold text-red-900 dark:text-red-300 font-mono">
                        <span className="animate-blink">▸</span> Result: 30+ minutes wasted copying files, searching for dependencies, and manually explaining your codebase. Incomplete context leads to confused AI responses. Pay for 3x more tokens than needed. Frustrated developer.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Arrow indicator */}
          {showSolution && (
            <div className="flex justify-center animate-slide-down">
              <svg className="w-12 h-12 text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}

          {/* Solution Card */}
          <div 
            ref={solutionRef} 
            className={`relative transform transition-all duration-1000 ${
              showSolution ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <AnimatedSection direction="right" delay={0}>
              <div className="relative group max-w-5xl mx-auto">
                <div className="relative rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/80 dark:to-emerald-900/80 p-8 shadow-xl ring-1 ring-green-200/50 dark:ring-green-800/50 transform transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-green-100 dark:bg-green-900/80">
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
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-mono">
                        <span className="text-green-600">✓</span> The LogicStamp Way
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        One command. 5 seconds. Perfect context every time.
                      </p>
                    </div>
                  </div>

                  {/* Terminal window */}
                  {showSolution && (
                    <div className="mb-6 rounded-lg bg-gray-900 p-4 font-mono text-sm shadow-inner animate-slide-up">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-gray-500 text-xs ml-2">terminal</span>
                      </div>
                      <div className="text-green-400">
                        {terminalText}
                        {!commandExecuted && showCursor && <span className="animate-blink">_</span>}
                      </div>
                      {showOutput && (
                        <div className="mt-2 text-gray-300 text-xs space-y-1 animate-typewriter">
                          <div className="opacity-80">✓ Scanning 42 components...</div>
                          <div className="opacity-80">✓ Building dependency graphs...</div>
                          <div className="opacity-80">✓ Generating context bundles...</div>
                          <div className="text-green-400">✓ Complete! Context ready in 4.2s</div>
                        </div>
                      )}
                    </div>
                  )}

                  {visibleSolutionSteps.length > 0 && (
                    <div className="mt-6 p-6 rounded-lg bg-green-100 dark:bg-green-900/80 border border-green-200 dark:border-green-800 animate-slide-up">
                      <p className="text-sm font-semibold text-green-900 dark:text-green-300 font-mono">
                        <span className="animate-blink">▸</span> Result: 30 minutes → 5 seconds. One command (<code className="text-xs text-green-700 dark:text-green-300 font-mono bg-green-200 dark:bg-green-900/50 px-1.5 py-0.5 rounded">$ stamp context</code>) generates optimized context.json files with complete dependency graphs. 65% cost savings. AI instantly understands your entire codebase. Happy developer.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mt-32 mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Why Developers Choose{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  LogicStamp
                </span>
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    hoveredBenefit === index
                      ? 'bg-white dark:bg-gray-800 shadow-xl transform scale-[1.02] ring-2 ring-opacity-50'
                      : 'bg-white/50 dark:bg-gray-800/50 shadow-lg'
                  } ${
                    hoveredBenefit === index && benefit.color === 'blue' ? 'ring-blue-500' :
                    hoveredBenefit === index && benefit.color === 'purple' ? 'ring-purple-500' :
                    hoveredBenefit === index && benefit.color === 'green' ? 'ring-green-500' :
                    hoveredBenefit === index && benefit.color === 'emerald' ? 'ring-emerald-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br transition-all duration-300 ${
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
                            className={`text-lg font-bold font-mono ${
                              benefit.color === 'blue'
                                ? 'text-blue-600 dark:text-blue-400'
                                : benefit.color === 'purple'
                                ? 'text-purple-600 dark:text-purple-400'
                                : benefit.color === 'green'
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-emerald-600 dark:text-emerald-400'
                            } ${hoveredBenefit === index ? 'animate-counter' : ''}`}
                          >
                            {benefit.stat}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{benefit.statLabel}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{benefit.description}</p>
                    </div>
                  </div>
                  {hoveredBenefit === index && (
                    <div className="absolute inset-0 pointer-events-none rounded-2xl ring-2 ring-inset ring-white/20 dark:ring-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* The Hook */}
        <AnimatedSection direction="up" delay={600}>
          <div className="relative mb-16">
            <div className="relative max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-8 py-6 rounded-3xl border border-blue-200/50 dark:border-blue-800/50 shadow-lg hover-lift group">
                <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 group-hover:animate-spin-slow">
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
                    <strong className="text-gray-900 dark:text-white font-mono">LogicStamp is your codebase's stamp of approval.</strong>{' '}
                    One command generates a verified, AI-optimized snapshot of your entire project structure—like an official document stamped and certified for AI consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>

      {/* Add custom styles */}
      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes shake-slow {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
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

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes counter {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-matrix-fall {
          animation: matrix-fall linear infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }

        .animate-shake-slow {
          animation: shake-slow 4s ease-in-out infinite;
        }

        .animate-glitch {
          animation: glitch 0.3s ease-in-out;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.5s ease-out;
        }

        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end);
        }

        .animate-counter {
          animation: counter 0.5s ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  )
}