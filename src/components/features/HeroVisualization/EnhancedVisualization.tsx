'use client'

import { useEffect, useState, useRef } from 'react'
import { Code2, FileJson, Network, Sparkles } from 'lucide-react'

// Graph structure: nodes represent components, edges represent dependencies
const GRAPH_NODES = [
  { id: 0, label: 'App', x: 50, y: 60, type: 'root' as const },
  { id: 1, label: 'Header', x: 12, y: 28, type: 'component' as const },
  { id: 2, label: 'Hero', x: 50, y: 28, type: 'component' as const },
  { id: 3, label: 'Features', x: 88, y: 28, type: 'component' as const },
  { id: 4, label: 'Button', x: 12, y: 8, type: 'leaf' as const },
  { id: 5, label: 'Card', x: 50, y: 8, type: 'leaf' as const },
  { id: 6, label: 'Modal', x: 88, y: 8, type: 'leaf' as const },
  { id: 7, label: 'Footer', x: 88, y: 60, type: 'component' as const },
  { id: 8, label: 'About', x: 12, y: 60, type: 'component' as const },
]

const GRAPH_EDGES = [
  { from: 0, to: 1, id: '0-1' },
  { from: 0, to: 2, id: '0-2' },
  { from: 0, to: 3, id: '0-3' },
  { from: 0, to: 7, id: '0-7' },
  { from: 0, to: 8, id: '0-8' },
  { from: 1, to: 4, id: '1-4' },
  { from: 2, to: 4, id: '2-4' },
  { from: 2, to: 5, id: '2-5' },
  { from: 3, to: 5, id: '3-5' },
  { from: 3, to: 6, id: '3-6' },
]

interface EnhancedVisualizationProps {
  inView: boolean
}

export default function EnhancedVisualization({ inView }: EnhancedVisualizationProps) {
  // Don't use isDarkMode - use CSS dark: classes instead to avoid hydration mismatch
  const [animatedNodes, setAnimatedNodes] = useState<Set<number>>(new Set())
  const [animatedEdges, setAnimatedEdges] = useState<Set<string>>(new Set())
  const [transformStage, setTransformStage] = useState<'ast' | 'processing' | 'json'>(inView ? 'ast' : 'ast')
  const [floatingBundles, setFloatingBundles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])
  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Animate nodes appearing
  useEffect(() => {
    if (!inView) return

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

    return () => clearInterval(nodeInterval)
  }, [inView])

  // Animate edges when nodes are visible
  useEffect(() => {
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
  }, [animatedNodes])

  // Transform animation stages
  useEffect(() => {
    if (!inView) return

    const stages: Array<'ast' | 'processing' | 'json'> = ['ast', 'processing', 'json']
    let currentStage = 0

    const stageInterval = setInterval(() => {
      currentStage = (currentStage + 1) % stages.length
      setTransformStage(stages[currentStage])
    }, 3000)

    return () => clearInterval(stageInterval)
  }, [inView])

  // Generate floating bundles
  useEffect(() => {
    if (!inView) return

    const bundles = GRAPH_NODES.filter((n) => n.type === 'root' || n.type === 'component')
      .map((node, idx) => ({
        id: node.id,
        x: 20 + (idx % 3) * 30 + Math.random() * 10,
        y: 15 + Math.floor(idx / 3) * 25 + Math.random() * 10,
        delay: idx * 0.2,
      }))
    setFloatingBundles(bundles)
  }, [inView])

  // Generate decorative particles (client-side only to avoid hydration mismatch)
  useEffect(() => {
    const particleCount = 20
    const generatedParticles = Array.from({ length: particleCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[650px] overflow-hidden rounded-2xl border border-gray-200/80 dark:border-gray-700/50" suppressHydrationWarning>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        @keyframes flow-right {
          0% {
            transform: translateX(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(20px);
            opacity: 0;
          }
        }
        @keyframes contract-pulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(139, 92, 246, 0.15);
          }
          50% {
            box-shadow: 0 0 16px rgba(139, 92, 246, 0.25);
          }
        }
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        .pulse-glow-animation {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .flow-right-animation {
          animation: flow-right 3s ease-in-out infinite;
        }
        .contract-pulse-animation {
          animation: contract-pulse 2s ease-in-out infinite;
        }
        @keyframes flowRight {
          0%, 100% {
            transform: translateX(-6px);
            opacity: 0.7;
          }
          50% {
            transform: translateX(6px);
            opacity: 1;
          }
        }
        @keyframes arrowPulseGlow {
          0%, 100% {
            box-shadow: 0 0 12px rgba(139, 92, 246, 0.3), 0 0 24px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 18px rgba(139, 92, 246, 0.5), 0 0 36px rgba(59, 130, 246, 0.3);
          }
        }
        .flow-arrow-horizontal {
          animation: flowRight 2s ease-in-out infinite;
        }
        .arrow-pulse-glow {
          animation: arrowPulseGlow 2s ease-in-out infinite;
        }
        /* Make dependency graph text larger on mobile */
        @media (max-width: 639px) {
          .dependency-graph-text {
            font-size: 6.5px !important;
          }
        }
      `}</style>

      {/* Background gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Dependency Graph - Top Left */}
      <div className={`absolute top-4 left-2 sm:left-4 w-[140px] sm:w-72 h-[180px] sm:h-[220px] backdrop-blur-sm rounded-lg border p-2 sm:p-3 bg-white/80 border-purple-500/30 shadow-sm dark:bg-gray-800/50 dark:border-purple-500/20 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`} style={{ transition: 'all 0.8s ease-out 0.2s' }} suppressHydrationWarning>
        <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 pb-1 sm:pb-2 border-b border-gray-300/50 dark:border-gray-700/50">
          <Network className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300">Dependency Graph</span>
        </div>
         <svg
           viewBox="0 0 100 100"
           className="w-full h-full"
           style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s' }}
         >
           <defs>
             <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
               <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
             </linearGradient>
           </defs>
           {/* Edges */}
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
              />
            )
          })}
          {/* Nodes */}
          {GRAPH_NODES.map((node) => {
            const isAnimated = animatedNodes.has(node.id)
            const nodeSize = node.type === 'root' ? 6 : node.type === 'component' ? 5 : 4.5
            const nodeColor =
              node.type === 'root'
                ? '#8b5cf6'
                : node.type === 'component'
                ? '#3b82f6'
                : '#10b981'
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={nodeSize}
                  fill={nodeColor}
                  opacity={isAnimated ? 1 : 0}
                  className="transition-all duration-500"
                />
                <text
                  x={node.x}
                  y={node.y + nodeSize + 6}
                  textAnchor="middle"
                  fontSize="5.5"
                  fill="#374151"
                  className="font-mono font-semibold dependency-graph-text dark:fill-[#d1d5db]"
                  opacity={isAnimated ? 1 : 0}
                  style={{ transition: 'opacity 0.5s' }}
                >
                  {node.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Arrow from Dependency Graph to Component Contract */}
      <div
        className={`absolute top-[90px] sm:top-[110px] left-1/2 -translate-x-1/2 z-20 pointer-events-none ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          transition: 'opacity 0.8s ease-out 0.4s'
        }}
      >
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/40 dark:border-purple-500/30">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 flow-arrow-horizontal text-purple-600 dark:text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Component Contract Node Example - Top Right */}
      <div
        className={`absolute top-4 right-2 sm:right-4 w-[140px] sm:w-72 h-[180px] sm:h-[220px] backdrop-blur-sm rounded-lg border p-2 sm:p-4 shadow-md bg-white/90 border-blue-500/40 dark:bg-gray-800/80 dark:border-blue-500/30 ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
        style={{ transition: 'all 0.8s ease-out 0.3s' }}
        suppressHydrationWarning
      >
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 pb-1 sm:pb-2 border-b border-gray-300/50 dark:border-gray-700/50">
          <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300">Component Contract</span>
          <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full pulse-glow-animation bg-green-500 dark:bg-green-400" />
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-start gap-1 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">entryId:</span>
            <span className="text-[9px] sm:text-[10px] font-mono truncate flex-1 text-green-600 dark:text-green-400">
              <span className="hidden sm:inline">"src/components/Hero.tsx"</span>
              <span className="sm:hidden">"Hero.tsx"</span>
            </span>
          </div>
          <div className="flex items-start gap-1 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">kind:</span>
            <span className="text-[9px] sm:text-[10px] font-mono text-purple-600 dark:text-purple-400">
              <span className="hidden sm:inline">"react:component"</span>
              <span className="sm:hidden">"component"</span>
            </span>
          </div>
          <div className="flex items-start gap-1 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">props:</span>
            <span className="text-[9px] sm:text-[10px] font-mono text-gray-600 dark:text-gray-400">{"{ title, desc }"}</span>
          </div>
          <div className="flex items-start gap-1 sm:gap-2">
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">
              <span className="hidden sm:inline">dependencies:</span>
              <span className="sm:hidden">deps:</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-yellow-600 dark:text-yellow-400">[Button, Card]</span>
          </div>
          <div className="flex items-start gap-1 sm:gap-2 pt-1 border-t border-gray-300/30 dark:border-gray-700/30">
            <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-cyan-600 dark:text-cyan-400">style:</span>
            <span className="text-[9px] sm:text-[10px] font-mono text-pink-600 dark:text-pink-400">{"{ tw: {...} }"}</span>
          </div>
        </div>
      </div>

      {/* AST → JSON Transformation Flow - Center */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 ${
        inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`} style={{ transition: 'all 0.8s ease-out 0.4s' }}>
        <div className="flex items-center justify-center gap-4">
          {/* AST Stage */}
          <div
            className={`flex flex-col items-center gap-2 ${
              transformStage === 'ast' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
            }`}
            style={{ transition: 'all 0.5s' }}
          >
            <div className={`w-16 h-16 bg-blue-500/20 rounded-lg border-2 flex items-center justify-center ${
              transformStage === 'ast' ? 'border-blue-500/80 shadow-lg shadow-blue-500/20' : 'border-blue-500/30'
            }`}>
              <Code2 className={`w-8 h-8 ${transformStage === 'ast' ? 'text-blue-600 dark:text-blue-400' : 'text-blue-500/50'}`} />
            </div>
            <span className={`text-xs font-semibold ${transformStage === 'ast' ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-500'}`}>AST</span>
          </div>

          {/* Arrow */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-green-500/50">
              <div
                className={`absolute top-1/2 left-0 w-3 h-3 bg-purple-500 rounded-full -translate-y-1/2 flow-right-animation ${
                  transformStage === 'processing' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.3s' }}
              />
            </div>
            <Sparkles className="w-5 h-5 mx-2 text-purple-600 dark:text-purple-400" />
          </div>

          {/* Processing Stage */}
          <div
            className={`flex flex-col items-center gap-2 ${
              transformStage === 'processing' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
            }`}
            style={{ transition: 'all 0.5s' }}
          >
            <div className={`w-16 h-16 bg-purple-500/20 rounded-lg border-2 flex items-center justify-center ${
              transformStage === 'processing' ? 'border-purple-500/80 shadow-lg shadow-purple-500/20 pulse-glow-animation' : 'border-purple-500/30'
            }`}>
              <Sparkles className={`w-8 h-8 ${transformStage === 'processing' ? 'text-purple-600 dark:text-purple-400' : 'text-purple-500/50'}`} />
            </div>
            <span className={`text-xs font-semibold ${transformStage === 'processing' ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-500'}`}>Transform</span>
          </div>

          {/* Arrow */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-0.5 bg-gradient-to-r from-purple-500/50 via-green-500/50 to-green-500/50">
              <div
                className={`absolute top-1/2 left-0 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 flow-right-animation ${
                  transformStage === 'json' ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transition: 'opacity 0.3s', animationDelay: '1.5s' }}
              />
            </div>
            <Sparkles className="w-5 h-5 mx-2 text-green-600 dark:text-green-400" />
          </div>

          {/* JSON Stage */}
          <div
            className={`flex flex-col items-center gap-2 ${
              transformStage === 'json' ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
            }`}
            style={{ transition: 'all 0.5s' }}
          >
            <div className={`w-16 h-16 bg-green-500/20 rounded-lg border-2 flex items-center justify-center ${
              transformStage === 'json' ? 'border-green-500/80 shadow-lg shadow-green-500/20' : 'border-green-500/30'
            }`}>
              <FileJson className={`w-8 h-8 ${transformStage === 'json' ? 'text-green-600 dark:text-green-400' : 'text-green-500/50'}`} />
            </div>
            <span className={`text-xs font-semibold ${transformStage === 'json' ? 'text-gray-800 dark:text-gray-200' : 'text-gray-600 dark:text-gray-500'}`}>JSON</span>
          </div>
        </div>
      </div>

      {/* Floating Context Bundle Visualizations - Bottom */}
      <div className={`absolute bottom-10 left-0 right-0 px-8 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} style={{ transition: 'all 0.8s ease-out 0.6s' }}>
        <div className="grid grid-cols-3 gap-5 justify-items-center max-w-2xl mx-auto">
          {floatingBundles.map((bundle, idx) => {
            const node = GRAPH_NODES.find((n) => n.id === bundle.id)
            if (!node) return null
            return (
              <div
                key={bundle.id}
                className="backdrop-blur-sm rounded-lg border p-3 w-full bg-white/70 border-purple-500/40 shadow-sm dark:bg-gray-800/60 dark:border-purple-500/30"
                suppressHydrationWarning
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full pulse-glow-animation bg-purple-600 dark:bg-purple-400" />
                  <span className="text-[10px] font-semibold text-gray-700 dark:text-gray-300">{node.label}</span>
                </div>
                <div className="text-[9px] font-mono text-gray-600 dark:text-gray-400">
                  <div>contract: UIFContract</div>
                  <div>deps: {GRAPH_EDGES.filter((e) => e.from === node.id).length}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full float-animation bg-purple-500/20 dark:bg-purple-400/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Note below entire visualization */}
      <div className={`absolute bottom-2 left-0 right-0 text-center px-4 ${inView ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 0.8s ease-out 0.8s' }}>
        <div className="text-[9px] sm:text-[10px] text-gray-500">
          <span className="italic">Simplified for display</span>
        </div>
      </div>
    </div>
  )
}
