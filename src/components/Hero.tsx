'use client'

import { useEffect, useState } from 'react'
import AnimatedSection from './AnimatedSection'
import CopyButton from './CopyButton'
import GitHubStats from './GitHubStats'
import StarGitHubButton from './StarGitHubButton'
import ReadTheDocsButton from './ReadTheDocsButton'

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

const GRAPH_EDGES = [
  { from: 0, to: 1, id: '0-1' },
  { from: 0, to: 2, id: '0-2' },
  { from: 0, to: 3, id: '0-3' },
  { from: 0, to: 7, id: '0-7' },
  { from: 1, to: 4, id: '1-4' },
  { from: 2, to: 4, id: '2-4' },
  { from: 2, to: 5, id: '2-5' },
  { from: 3, to: 5, id: '3-5' },
  { from: 3, to: 6, id: '3-6' },
]

// Dependency Graph Visualization Component
function DependencyGraph({ animatedNodes }: { animatedNodes: Set<number> }) {
  const [animatedEdges, setAnimatedEdges] = useState<Set<string>>(new Set())
  const [hasError, setHasError] = useState(false)

  // Animate edges when their connected nodes are visible
  useEffect(() => {
    try {
      setAnimatedEdges((prev) => {
        const next = new Set(prev)
        GRAPH_EDGES.forEach((edge) => {
          if (
            animatedNodes.has(edge.from) &&
            animatedNodes.has(edge.to) &&
            !next.has(edge.id)
          ) {
            next.add(edge.id)
          }
        })
        return next
      })
    } catch (error) {
      console.error('Error animating graph edges:', error)
      setHasError(true)
    }
  }, [animatedNodes])

  if (hasError) {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-8">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Graph visualization unavailable
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-x-auto sm:overflow-hidden">
      <svg
        viewBox="5 5 90 90"
        className="w-full h-full min-w-full"
        style={{ maxWidth: '100%', height: 'auto' }}
        role="img"
        aria-label="Component dependency graph visualization"
      >
        {/* Animated background gradient */}
        <defs>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Render edges */}
        {GRAPH_EDGES.map((edge) => {
          const fromNode = GRAPH_NODES[edge.from]
          const toNode = GRAPH_NODES[edge.to]
          const isAnimated = animatedEdges.has(edge.id)

          return (
            <line
              key={edge.id}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="url(#edgeGradient)"
              strokeWidth={isAnimated ? '0.5' : '0'}
              opacity={isAnimated ? 0.6 : 0}
              className="transition-all duration-500"
              strokeDasharray={isAnimated ? '1.5,0.8' : '0'}
            />
          )
        })}

        {/* Render nodes */}
        {GRAPH_NODES.map((node) => {
          const isAnimated = animatedNodes.has(node.id)
          const nodeSize = node.type === 'root' ? 4 : node.type === 'component' ? 3.5 : 2.8
          const nodeColor =
            node.type === 'root'
              ? '#8b5cf6'
              : node.type === 'component'
              ? '#3b82f6'
              : '#10b981'

          return (
            <g key={node.id}>
              {/* Glow effect */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeSize + 1.5}
                fill={nodeColor}
                opacity={isAnimated ? 0.3 : 0}
                className="transition-opacity duration-500"
              />
              {/* Main node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeSize}
                fill={nodeColor}
                opacity={isAnimated ? 1 : 0}
                className="transition-all duration-500"
                style={{
                  filter: isAnimated ? 'drop-shadow(0 0 6px currentColor)' : 'none',
                }}
              >
                <animate
                  attributeName="r"
                  values={`${nodeSize * 0.5};${nodeSize * 1.2};${nodeSize}`}
                  dur="0.6s"
                  begin={isAnimated ? '0s' : '999s'}
                  fill="freeze"
                />
              </circle>
              {/* Node label */}
              <text
                x={node.x}
                y={node.y + nodeSize + 3.5}
                textAnchor="middle"
                fontSize="3.2"
                fill="currentColor"
                className="text-gray-700 dark:text-gray-300 font-mono font-semibold"
                opacity={isAnimated ? 1 : 0}
                style={{ transition: 'opacity 0.5s' }}
              >
                {node.label}
              </text>
            </g>
          )
        })}

        {/* Animated pulse rings */}
        {GRAPH_NODES.filter((node) => animatedNodes.has(node.id) && node.type === 'root')
          .map((node) => (
            <circle
              key={`pulse-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="2"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="0.2"
              opacity="0.6"
              className="animate-ping"
            />
          ))}
      </svg>

    </div>
  )
}

// Context.json Preview Component
function ContextJsonPreview({ animatedNodes }: { animatedNodes: Set<number> }) {
  const getNodePath = (nodeId: number) => {
    const node = GRAPH_NODES[nodeId]
    if (!node) return ''
    return `src/components/${node.label}.tsx`
  }

  const getDependencies = (nodeId: number) => {
    return GRAPH_EDGES
      .filter((e) => e.from === nodeId)
      .map((e) => getNodePath(e.to))
  }

  const visibleBundles = Array.from(animatedNodes)
    .filter((id) => GRAPH_NODES[id].type === 'root' || GRAPH_NODES[id].type === 'component')
    .sort()

  return (
    <div className="h-full flex flex-col rounded-md bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
      <div className="flex items-center gap-x-4 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
        <div className="flex gap-x-1.5">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
        </div>
        <p className="text-xs lg:text-sm text-gray-400">context.json</p>
      </div>
      <div className="flex-1 bg-gray-900 p-3 sm:p-4 lg:p-5 overflow-y-auto overflow-x-auto sm:overflow-x-hidden">
        <pre className="text-xs sm:text-sm lg:text-[0.875rem] text-gray-300 font-mono leading-5 sm:leading-6 whitespace-pre">
          <code>
            <span className="text-gray-500">[</span>
            {visibleBundles.length > 0 && (
              <>
                {'\n'}
                {visibleBundles.map((nodeId, index) => {
                  const node = GRAPH_NODES[nodeId]
                  const dependencies = getDependencies(nodeId)
                  const isLast = index === visibleBundles.length - 1

                  const position = `${index + 1}/${visibleBundles.length}`
                  const hasDeps = dependencies.length > 0

                  return (
                    <span key={nodeId} className="block">
                      {'  '}
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"$schema"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"https://logicstamp.dev/schemas/context/v0.1.json"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"position"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"{position}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"type"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"LogicStampBundle"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"schemaVersion"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"0.1"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"entryId"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"{getNodePath(nodeId)}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"depth"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">1</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"bundleHash"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"uifb:1826c1c7474a9f0113591904"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"graph"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className="text-gray-300">"nodes"</span>
                      <span className="text-gray-500">: [</span>
                      {'\n'}
                      {'        '}
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'          '}
                      <span className="text-gray-300">"entryId"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"{getNodePath(nodeId)}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'          '}
                      <span className="text-gray-300">"contract"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-300">"type"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"UIFContract"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-300">"kind"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"react:component"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-300">"description"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"{node.label} - {node.type === 'root' ? 'Interactive component' : 'Component'}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-300">"version"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className="text-gray-300">"components"</span>
                      <span className="text-gray-500">: [</span>
                      {hasDeps ? (
                        <>
                          {'\n'}
                          {dependencies.slice(0, 1).map((dep, depIdx) => (
                            <span key={depIdx}>
                              {'                '}
                              <span className="text-gray-300">"{dep.split('/').pop()?.replace('.tsx', '')}"</span>
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className="text-gray-600">
                              {'\n'}
                              {'                '}// {dependencies.length - 1} more...
                            </span>
                          )}
                          {'\n'}
                        </>
                      ) : (
                        <span className="text-gray-600"> </span>
                      )}
                      {'              '}
                      <span className="text-gray-500">]</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-600">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-300">"logicSignature"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className="text-gray-300">"props"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      <span className="text-gray-600">...</span>
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-600">,</span>
                      {'\n'}
                      {'              '}
                      <span className="text-gray-300">"emits"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      <span className="text-gray-600">...</span>
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'          '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-600">,</span>
                      {'\n'}
                      {'          '}
                      <span className="text-gray-300">"codeHeader"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">null</span>
                      {'\n'}
                      {'        '}
                      <span className="text-gray-500">{'}'}</span>
                      {hasDeps && (
                        <>
                          <span className="text-gray-500">,</span>
                          {'\n'}
                          {'        '}
                          <span className="text-gray-600">// {dependencies.length} more node{dependencies.length > 1 ? 's' : ''}...</span>
                        </>
                      )}
                      {'\n'}
                      {'      '}
                      <span className="text-gray-500">],</span>
                      {'\n'}
                      {'      '}
                      <span className="text-gray-300">"edges"</span>
                      <span className="text-gray-500">: [</span>
                      {hasDeps ? (
                        <>
                          {'\n'}
                          {dependencies.slice(0, 1).map((dep, depIndex) => (
                            <span key={depIndex} className="block">
                              {'        '}
                              <span className="text-gray-500">[</span>
                              {'\n'}
                              {'          '}
                              <span className="text-gray-300">"{getNodePath(nodeId)}"</span>
                              <span className="text-gray-500">,</span>
                              {'\n'}
                              {'          '}
                              <span className="text-gray-300">"{dep}"</span>
                              {'\n'}
                              {'        '}
                              <span className="text-gray-500">]</span>
                              {depIndex < Math.min(dependencies.length, 1) - 1 && <span className="text-gray-500">,</span>}
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className="text-gray-600 block">
                              {'        '}// {dependencies.length - 1} more edge{dependencies.length - 1 > 1 ? 's' : ''}...
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-600"> </span>
                      )}
                      {'\n'}
                      {'      '}
                      <span className="text-gray-500">]</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-600">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-300">"meta"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className="text-gray-300">"missing"</span>
                      <span className="text-gray-500">: [],</span>
                      {'\n'}
                      {'      '}
                      <span className="text-gray-300">"source"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-300">"logicstamp-context@0.1.0"</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'  '}
                      <span className="text-gray-500">{'}'}</span>
                      {!isLast && <span className="text-gray-500">,</span>}
                      {!isLast && <span className="text-gray-600">  // {visibleBundles.length - index - 1} more bundle{visibleBundles.length - index - 1 > 1 ? 's' : ''}...</span>}
                      {'\n'}
                    </span>
                  )
                })}
              </>
            )}
            {visibleBundles.length === 0 && (
              <span className="text-gray-600">  // Generating context bundles...</span>
            )}
            {'\n'}
            <span className="text-gray-500">]</span>
        </code>
      </pre>
      </div>
    </div>
  )
}

// Hero Visualization Container (manages shared state)
function HeroVisualization() {
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
    <AnimatedSection direction="up" delay={400}>
      <div className="mt-16 flow-root sm:mt-24">
        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left: Dependency Graph */}
          <div className="relative rounded-xl bg-gradient-bg-card p-2 ring-1 ring-inset ring-secondary-200/20 dark:ring-secondary-400/20 lg:rounded-2xl lg:p-4 hover-lift shadow-lg h-96 sm:h-[48rem] overflow-x-auto sm:overflow-hidden">
            <DependencyGraph animatedNodes={animatedNodes} />
          </div>
          
          {/* Arrow indicator - Desktop: right arrow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-blue-purple/20 backdrop-blur-sm border border-secondary-200/30 dark:border-secondary-400/30 shadow-lg">
              <svg
                className="w-5 h-5 text-secondary-600 dark:text-secondary-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
          
          {/* Arrow indicator - Mobile: down arrow */}
          <div className="flex items-center justify-center py-4 lg:hidden">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-blue-purple/20 backdrop-blur-sm border border-secondary-200/30 dark:border-secondary-400/30 shadow-lg">
              <svg
                className="w-5 h-5 text-secondary-600 dark:text-secondary-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
          
          {/* Right: Context.json Preview */}
          <div className="relative rounded-xl bg-gradient-bg-card p-2 ring-1 ring-inset ring-secondary-200/20 dark:ring-secondary-400/20 lg:rounded-2xl lg:p-4 hover-lift shadow-lg h-96 sm:h-[48rem] overflow-x-auto sm:overflow-hidden">
            <ContextJsonPreview animatedNodes={animatedNodes} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Hero() {
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
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl lg:max-w-6xl text-center">
            {/* Launch Badge */}
            <div className="mb-6 flex items-center justify-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 px-4 py-1.5 text-sm font-semibold text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/30 animate-pulse">
                <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Launching Soon
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-blue-purple/10 px-3 py-1 text-xs sm:text-sm font-medium text-secondary-700 dark:text-secondary-300 ring-1 ring-inset ring-secondary-500/20">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
                100% Open Source
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
                Public Beta
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl text-balance leading-tight">
              Turn Your Codebase Into{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Context
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-xl -z-10 opacity-20 animate-pulse"></span>
              </span>
            </h1>
            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto">
              The tiny CLI that transforms React/TypeScript codebases into{' '}
              <span className="text-secondary-700 dark:text-secondary-300 font-semibold">machine-readable context bundles</span>
              {' '}for AI assistants and CI pipelines.
            </p>
            <p className="mt-4 text-base lg:text-lg text-gray-500 dark:text-gray-400">
              Fast • Deterministic • Zero Config • Open Source
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <StarGitHubButton />
              <ReadTheDocsButton href="docs/" />
            </div>

            {/* Quick install snippet - More prominent */}
            <div className="mt-10 sm:mt-12 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative inline-flex items-center gap-3 rounded-xl bg-white dark:bg-gray-900 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50">
                  <span className="hidden sm:inline text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
                    $
                  </span>
                  <code className="text-sm sm:text-base lg:text-lg font-mono font-semibold text-gray-900 dark:text-gray-100" aria-label="Installation command">
                    npm install -g logicstamp-context
                  </code>
                  <CopyButton text="npm install -g logicstamp-context" className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* GitHub Stats Section */}
        <GitHubStats />

        {/* Dependency Graph Visualization with Context.json Preview */}
        <HeroVisualization />

        {/* Community & Contribution CTA */}
        <AnimatedSection direction="up" delay={800}>
          <div className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Join the Movement</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Built by Developers,{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    for Developers
                  </span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  LogicStamp is 100% open source and community-driven. Contribute code, report issues, suggest features, or just star the repo to show your support.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/docs/what-is-logicstamp"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 transition-all duration-200"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Contribute
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
