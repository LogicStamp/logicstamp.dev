'use client'

import { useEffect, useState } from 'react'

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

interface DependencyGraphProps {
  animatedNodes: Set<number>
}

export default function DependencyGraph({ animatedNodes }: DependencyGraphProps) {
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















