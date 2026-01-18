'use client'

import { useEffect, useState, forwardRef } from 'react'
import { Play } from 'lucide-react'
import DependencyGraph from './DependencyGraph'
import ContextJsonPreview from './ContextJsonPreview'

// Graph structure: nodes represent components, edges represent dependencies
const GRAPH_NODES = [
  { id: 0, label: 'App', x: 50, y: 50, type: 'root' as const },
  { id: 1, label: 'Header', x: 20, y: 30, type: 'component' as const },
  { id: 2, label: 'Hero', x: 50, y: 30, type: 'component' as const },
  { id: 3, label: 'Features', x: 80, y: 30, type: 'component' as const },
  { id: 4, label: 'Button', x: 20, y: 15, type: 'leaf' as const },
  { id: 5, label: 'Card', x: 35, y: 15, type: 'leaf' as const },
  { id: 6, label: 'Modal', x: 65, y: 15, type: 'leaf' as const },
  { id: 7, label: 'Footer', x: 80, y: 50, type: 'component' as const },
]

interface HeroVisualizationProps {
  graphStyle?: React.CSSProperties
  terminalStyle?: React.CSSProperties
  arrowOpacity?: number
}

const HeroVisualization = forwardRef<HTMLDivElement, HeroVisualizationProps>(
  function HeroVisualization({ graphStyle, terminalStyle, arrowOpacity = 1 }, ref) {
  const [animatedNodes, setAnimatedNodes] = useState<Set<number>>(new Set())
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Check for reduced motion preference
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

  // Animate nodes appearing one by one (skip if reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show all nodes immediately if reduced motion is preferred
      setAnimatedNodes(new Set(GRAPH_NODES.map((_, i) => i)))
      return
    }

    try {
      const nodeInterval = setInterval(() => {
        setAnimatedNodes((prev) => {
          if (prev.size < GRAPH_NODES.length) {
            const next = new Set(prev)
            next.add(prev.size)
            return next
          }
          return prev
        })
      }, 200)

      return () => {
        clearInterval(nodeInterval)
      }
    } catch (error) {
      console.error('Error setting up node animation:', error)
      // Fallback: show all nodes immediately
      setAnimatedNodes(new Set(GRAPH_NODES.map((_, i) => i)))
    }
  }, [prefersReducedMotion])

  // Reset animation on mount
  useEffect(() => {
    if (!prefersReducedMotion) {
      setAnimatedNodes(new Set())
    }
  }, [prefersReducedMotion])

  return (
    <div ref={ref} className="mt-16 flow-root sm:mt-24">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-10 max-w-[1340px] mx-auto">
          {/* Left: Dependency Graph */}
          <div 
            className="relative rounded-xl bg-gradient-bg-card pt-0.5 pb-2 px-2 ring-1 ring-inset ring-secondary-200/20 dark:ring-secondary-400/20 lg:rounded-2xl lg:pt-1 lg:pb-4 lg:px-4 hover-lift shadow-lg h-96 sm:h-[48rem] overflow-x-auto sm:overflow-hidden flex flex-col"
            style={graphStyle}
          >
            <div className="flex-1 flex items-center justify-center pb-0 sm:pb-40">
              <DependencyGraph animatedNodes={animatedNodes} />
            </div>
            {/* Command text positioned more toward center */}
            <div className="relative sm:absolute -mt-28 sm:mt-0 bottom-0 sm:bottom-20 left-0 right-0 pt-4 pb-2 sm:pb-0 border-t border-secondary-200/20 dark:border-secondary-400/20">
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-center mb-3 font-medium flex items-center justify-center gap-2">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Run to generate context bundles:
              </p>
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-lg lg:text-xl">
                <code className="font-mono font-semibold text-gray-700 dark:text-gray-300 px-2 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-100/50 dark:bg-gray-800/50 whitespace-nowrap">
                  stamp context
                </code>
                <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-lg lg:text-xl whitespace-nowrap">or</span>
                <code className="font-mono font-semibold text-gray-700 dark:text-gray-300 px-2 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gray-100/50 dark:bg-gray-800/50 whitespace-nowrap">
                  stamp context style
                </code>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 text-center mt-2 font-medium">
                or use the MCP: analyze with or without style
              </p>
            </div>
          </div>
          
          {/* Arrow indicator - Desktop: right arrow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
            <style jsx>{`
              @keyframes flowRight {
                0%, 100% {
                  transform: translateX(-8px);
                  opacity: 0.7;
                }
                50% {
                  transform: translateX(8px);
                  opacity: 1;
                }
              }
              @keyframes pulse-glow {
                0%, 100% {
                  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2);
                }
                50% {
                  box-shadow: 0 0 30px rgba(139, 92, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3);
                }
              }
              .flow-arrow-horizontal {
                animation: flowRight 2s ease-in-out infinite;
              }
              .pulse-glow-container {
                animation: pulse-glow 2s ease-in-out infinite;
              }
            `}</style>
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-secondary-200/30 dark:border-secondary-400/30 pulse-glow-container"
              style={{ 
                opacity: arrowOpacity,
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <svg
                className="w-6 h-6 text-secondary-600 dark:text-secondary-300 flow-arrow-horizontal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          {/* Arrow indicator - Mobile: down arrow */}
          <div className="flex items-center justify-center py-4 lg:hidden">
            <style jsx>{`
              @keyframes flowDown {
                0%, 100% {
                  transform: translateY(-8px);
                  opacity: 0.7;
                }
                50% {
                  transform: translateY(8px);
                  opacity: 1;
                }
              }
              .flow-arrow-vertical {
                animation: flowDown 2s ease-in-out infinite;
              }
            `}</style>
            <div 
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-secondary-200/30 dark:border-secondary-400/30 pulse-glow-container"
              style={{ 
                opacity: arrowOpacity,
                transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <svg
                className="w-6 h-6 text-secondary-600 dark:text-secondary-300 flow-arrow-vertical"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Right: Context.json Preview */}
          <div 
            className="relative h-96 sm:h-[48rem] overflow-x-auto sm:overflow-hidden"
            style={terminalStyle}
          >
            <ContextJsonPreview animatedNodes={animatedNodes} />
          </div>
        </div>
      </div>
  )
})

export default HeroVisualization















