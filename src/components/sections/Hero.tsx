'use client'

import { useEffect, useRef, useState, forwardRef } from 'react'
import CopyButton from '../ui/CopyButton'
import GitHubStats from '../common/GitHubStats'
import StarGitHubButton from '../ui/StarGitHubButton'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'
import HeroVisualization from '../features/HeroVisualization'
import CommunityCTA from './CommunityCTA'

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

// Enhanced visualization wrapper with scroll-based progressive reveal
const HeroVisualizationWrapper = forwardRef<HTMLDivElement, { inView: boolean }>(
  function HeroVisualizationWrapper({ inView }, ref) {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
      if (typeof window === 'undefined') return

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)

      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }

      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
      if (prefersReducedMotion || typeof window === 'undefined') {
        setScrollProgress(inView ? 1 : 0)
        return
      }

      const element = typeof ref === 'function' ? null : ref?.current
      if (!element) return

      const updateProgress = () => {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const elementTop = rect.top
        const elementHeight = rect.height
        
        // Calculate when element enters viewport
        const startPoint = windowHeight * 1.1 // Start animation when element is 80% down viewport
        const endPoint = windowHeight * 0.4 // Complete animation when element is 40% down viewport
        
        // Calculate progress (0 to 1)
        let progress = 0
        if (elementTop < startPoint && elementTop > -elementHeight + endPoint) {
          const distance = startPoint - endPoint
          const current = startPoint - elementTop
          progress = Math.min(1, Math.max(0, current / distance))
        } else if (elementTop <= -elementHeight + endPoint) {
          progress = 1
        }

        setScrollProgress(progress)
      }

      updateProgress()
      window.addEventListener('scroll', updateProgress, { passive: true })
      window.addEventListener('resize', updateProgress, { passive: true })

      return () => {
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }, [ref, inView, prefersReducedMotion])

    // Apply different animation progress to each panel
    const graphProgress = Math.min(1, scrollProgress * 1.3) // Graph animates faster
    const terminalProgress = Math.min(1, Math.max(0, (scrollProgress - 0.05) * 1.4)) // Terminal starts quickly after graph

    const graphOpacity = graphProgress
    const graphBlur = Math.max(0, 10 - graphProgress * 10)
    const graphScale = 0.9 + graphProgress * 0.1
    const graphTranslateX = (1 - graphProgress) * -30

    const terminalOpacity = terminalProgress
    const terminalBlur = Math.max(0, 10 - terminalProgress * 10)
    const terminalScale = 0.9 + terminalProgress * 0.1
    const terminalTranslateX = (1 - terminalProgress) * 30

    return (
      <HeroVisualization
        ref={ref}
        graphStyle={{
          opacity: graphOpacity,
          transform: `translateX(${graphTranslateX}px) scale(${graphScale})`,
          filter: `blur(${graphBlur}px)`,
          transition: prefersReducedMotion 
            ? 'opacity 0.3s' 
            : 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        terminalStyle={{
          opacity: terminalOpacity,
          transform: `translateX(${terminalTranslateX}px) scale(${terminalScale})`,
          filter: `blur(${terminalBlur}px)`,
          transition: prefersReducedMotion 
            ? 'opacity 0.3s' 
            : 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        arrowOpacity={Math.max(graphOpacity, terminalOpacity) * 0.8}
      />
    )
  }
)

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'cli' | 'mcp'>('cli')
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: descriptionRef, inView: descriptionInView } = useInView(0.1)
  const { ref: buttonsRef, inView: buttonsInView } = useInView(0.1)
  const { ref: installRef, inView: installInView } = useInView(0.1)
  const { ref: betaButtonRef, inView: betaButtonInView } = useInView(0.1)
  const { ref: badgesRef, inView: badgesInView } = useInView(0.1)
  const { ref: statsRef, inView: statsInView } = useInView(0.1)
  const { ref: visualizationRef, inView: visualizationInView } = useInView(0.1)
  const { ref: communityRef, inView: communityInView } = useInView(0.1)
  const { ref: workflowGifRef, inView: workflowGifInView } = useInView(0.1)
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 pt-28 pb-20 sm:pt-36 sm:pb-32 min-h-screen">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

      <div className="mx-auto max-w-[90rem] px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:max-w-6xl text-center">
          {/* Title */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl sm:text-balance leading-tight">
              {/* Mobile: 2 lines */}
              <span className="block sm:hidden">
                <span className="block whitespace-nowrap">Turn React/TS Into</span>
                <span className="block whitespace-nowrap">
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                      AI-Ready Context
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                  </span>
                </span>
              </span>
              {/* Desktop: single line */}
              <span className="hidden sm:inline">
                Turn React/TS Into{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    AI-Ready Context
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </span>
            </h1>
          </div>

          {/* Description paragraphs */}
          <div 
            ref={descriptionRef}
            className={`transition-all duration-1000 delay-200 ${
              descriptionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto">
              Generate AI-ready context bundles from your React/TypeScript codebase in seconds.{' '}
              <span className="text-secondary-700 dark:text-secondary-300 font-semibold">Zero config, up to 70% token savings.</span>
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-500 dark:text-gray-400">
              Fast • Deterministic • Open Source
            </p>
          </div>

          {/* Quick install snippet - More prominent */}
          <div 
            ref={installRef}
            className={`transition-all duration-1000 delay-300 ${
              installInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-10 sm:mt-12 flex flex-col items-center">
              {/* Tabs */}
              <div className="mb-4 flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 rounded-lg p-1 ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                <button
                  onClick={() => setActiveTab('cli')}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeTab === 'cli'
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Install the CLI
                </button>
                <button
                  onClick={() => setActiveTab('mcp')}
                  className={`px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                    activeTab === 'mcp'
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  Install the MCP
                </button>
              </div>
              
              {/* Install command */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative inline-flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                  <span className="hidden sm:inline text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
                    $
                  </span>
                  <code className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-gray-900 dark:text-gray-100" aria-label="Installation command">
                    {activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'}
                  </code>
                  <CopyButton 
                    text={activeTab === 'cli' ? 'npm install -g logicstamp-context' : 'npm install -g logicstamp-mcp'} 
                    className="ml-2" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div 
            ref={buttonsRef}
            className={`transition-all duration-1000 delay-400 ${
              buttonsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              <StarGitHubButton />
              <ReadTheDocsButton href="docs/" />
            </div>
          </div>

          {/* Public Beta Button */}
          <div 
            ref={betaButtonRef}
            className={`transition-all duration-1000 delay-500 ${
              betaButtonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center">
              <a
                href="/beta"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Join Public Beta</span>
              </a>
            </div>
          </div>

          {/* Launch Badge */}
          <div 
            ref={badgesRef}
            className={`transition-all duration-1000 delay-600 ${
              badgesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 lg:gap-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 lg:gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 lg:px-6 lg:py-2.5 text-sm lg:text-base font-semibold text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/30 animate-pulse">
                <svg className="h-4 w-4 lg:h-5 lg:w-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Just Launched
              </span>
              <span className="inline-flex items-center gap-1.5 lg:gap-2 rounded-full bg-gradient-blue-purple/10 px-3 py-1 lg:px-5 lg:py-2 text-xs sm:text-sm lg:text-base font-medium text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/20">
                <svg className="h-3.5 w-3.5 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
                100% Open Source
              </span>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div 
          ref={workflowGifRef}
          className={`mt-10 sm:mt-12 transition-all duration-1000 delay-700 sm:hidden ${
            workflowGifInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mx-auto max-w-md px-4">
            <a
              href="https://github.com/LogicStamp/.github/blob/main/profile/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50"
            >
              <div className="relative z-10 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  See LogicStamp in Action
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  View the complete workflow and documentation
                </p>
                <div className="inline-flex items-center gap-2 text-white font-semibold">
                  <span>View on GitHub</span>
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Workflow GIF - Desktop Only */}
        <div 
          ref={workflowGifRef}
          className={`hidden sm:block mt-10 sm:mt-12 transition-all duration-500 delay-300 ${
            workflowGifInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative mx-auto max-w-[120rem] px-0 sm:px-2 lg:px-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-700/50 bg-gray-900">
              <img 
                src="/logicstamp-workflow.gif" 
                alt="LogicStamp CLI and MCP workflow demonstration"
                className="w-full h-auto max-h-[1100px] sm:max-h-[1100px] lg:max-h-[1200px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* GitHub Stats Section */}
        <div 
          ref={statsRef}
          className={`transition-all duration-1000 delay-600 ${
            statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <GitHubStats />
        </div>

        {/* Dependency Graph Visualization with Context.json Preview */}
        <HeroVisualizationWrapper ref={visualizationRef} inView={visualizationInView} />

        {/* Community & Contribution CTA */}
        <div 
          ref={communityRef}
          className={`transition-all duration-1000 delay-800 ${
            communityInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <CommunityCTA />
        </div>
      </div>
    </section>
  )
}














