'use client'

import { ChevronRight } from 'lucide-react'

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

interface ContextJsonPreviewProps {
  animatedNodes: Set<number>
}

export default function ContextJsonPreview({ animatedNodes }: ContextJsonPreviewProps) {
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
    <div className="h-full flex flex-col rounded-md shadow-2xl ring-1 bg-gray-900 ring-gray-800/50">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700 bg-gray-800">
        <div className="flex items-center gap-3">
          <ChevronRight className="w-5 h-5 text-green-400" />
          <span className="text-xs lg:text-sm font-mono text-gray-400">src/components/context.json</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="flex-1 p-3 sm:p-4 lg:p-5 overflow-x-auto sm:overflow-hidden bg-gray-900">
        <pre className="text-sm sm:text-sm lg:text-sm font-mono leading-5 sm:leading-6 whitespace-pre text-gray-100">
          <code>
            <span className="text-gray-400">[</span>
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
                      <span className="text-cyan-400">"$schema"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"https://logicstamp.dev/schemas/context/v0.1.json"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"position"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"{position}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"type"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-purple-400">"LogicStampBundle"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"schemaVersion"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-yellow-400">"0.1"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"entryId"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"{getNodePath(nodeId)}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"depth"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-yellow-400">1</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"bundleHash"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"uifb:1826c1c7474a9f0113591904"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"graph"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className="text-cyan-400">"nodes"</span>
                      <span className="text-gray-500">: [</span>
                      {'\n'}
                      {'        '}
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'          '}
                      <span className="text-cyan-400">"entryId"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"{getNodePath(nodeId)}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'          '}
                      <span className="text-cyan-400">"contract"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'            '}
                      <span className="text-cyan-400">"type"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-purple-400">"UIFContract"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-cyan-400">"kind"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"react:component"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-cyan-400">"description"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"{node.label} - {node.type === 'root' ? 'Interactive component' : 'Component'}"</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-cyan-400">"version"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className="text-cyan-400">"components"</span>
                      <span className="text-gray-500">: [</span>
                      {hasDeps ? (
                        <>
                          {'\n'}
                          {dependencies.slice(0, 1).map((dep, depIdx) => (
                            <span key={depIdx}>
                              {'                '}
                              <span className="text-green-400">"{dep.split('/').pop()?.replace('.tsx', '')}"</span>
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className="text-gray-500">
                              {'\n'}
                              {'                '}// {dependencies.length - 1} more...
                            </span>
                          )}
                          {'\n'}
                        </>
                      ) : (
                        <span className="text-gray-500"> </span>
                      )}
                      {'              '}
                      <span className="text-gray-500">]</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'            '}
                      <span className="text-cyan-400">"logicSignature"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className="text-cyan-400">"props"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      <span className="text-gray-500">...</span>
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'              '}
                      <span className="text-cyan-400">"emits"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      <span className="text-gray-500">...</span>
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'            '}
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'          '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'          '}
                      <span className="text-cyan-400">"codeHeader"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-blue-400">null</span>
                      {'\n'}
                      {'        '}
                      <span className="text-gray-500">{'}'}</span>
                      {hasDeps && (
                        <>
                          <span className="text-gray-500">,</span>
                          {'\n'}
                          {'        '}
                          <span className="text-gray-500">// {dependencies.length} more node{dependencies.length > 1 ? 's' : ''}...</span>
                        </>
                      )}
                      {'\n'}
                      {'      '}
                      <span className="text-gray-500">],</span>
                      {'\n'}
                      {'      '}
                      <span className="text-cyan-400">"edges"</span>
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
                              <span className="text-green-400">"{getNodePath(nodeId)}"</span>
                              <span className="text-gray-500">,</span>
                              {'\n'}
                              {'          '}
                              <span className="text-green-400">"{dep}"</span>
                              {'\n'}
                              {'        '}
                              <span className="text-gray-500">]</span>
                              {depIndex < Math.min(dependencies.length, 1) - 1 && <span className="text-gray-500">,</span>}
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className="block text-gray-500">
                              {'        '}// {dependencies.length - 1} more edge{dependencies.length - 1 > 1 ? 's' : ''}...
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-500"> </span>
                      )}
                      {'\n'}
                      {'      '}
                      <span className="text-gray-500">]</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-500">{'}'}</span>
                      <span className="text-gray-500">,</span>
                      {'\n'}
                      {'    '}
                      <span className="text-cyan-400">"meta"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-gray-500">{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className="text-cyan-400">"missing"</span>
                      <span className="text-gray-500">: [],</span>
                      {'\n'}
                      {'      '}
                      <span className="text-cyan-400">"source"</span>
                      <span className="text-gray-500">: </span>
                      <span className="text-green-400">"logicstamp-context@0.1.0"</span>
                      {'\n'}
                      {'    '}
                      <span className="text-gray-500">{'}'}</span>
                      {'\n'}
                      {'  '}
                      <span className="text-gray-500">{'}'}</span>
                      {!isLast && <span className="text-gray-500">,</span>}
                      {!isLast && <span className="text-gray-500">  // {visibleBundles.length - index - 1} more bundle{visibleBundles.length - index - 1 > 1 ? 's' : ''}...</span>}
                      {'\n'}
                    </span>
                  )
                })}
              </>
            )}
            {visibleBundles.length === 0 && (
              <span className="text-gray-500">  // Generating context bundles...</span>
            )}
            {'\n'}
            <span className="text-gray-500">]</span>
        </code>
      </pre>
      </div>
    </div>
  )
}

