'use client'

import { useTheme } from '../../contexts/ThemeContext'

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
  const { isDarkMode } = useTheme()
  
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
    <div className={`h-full flex flex-col rounded-md shadow-2xl ring-1 ${
      isDarkMode 
        ? 'bg-gray-900 ring-gray-800/50' 
        : 'bg-gray-50 ring-gray-200/50'
    }`}>
      <div className={`flex items-center gap-x-4 px-3 sm:px-4 py-2 sm:py-3 border-b ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className="flex gap-x-1.5">
          <div className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
            isDarkMode ? 'bg-red-500' : 'bg-red-400'
          }`} />
          <div className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
            isDarkMode ? 'bg-yellow-500' : 'bg-yellow-400'
          }`} />
          <div className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
            isDarkMode ? 'bg-green-500' : 'bg-green-400'
          }`} />
        </div>
        <p className={`text-xs lg:text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>src/components/context.json</p>
      </div>
      <div className={`flex-1 p-3 sm:p-4 lg:p-5 overflow-x-auto sm:overflow-hidden ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <pre className={`text-sm sm:text-sm lg:text-sm font-mono leading-5 sm:leading-6 whitespace-pre ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}>
          <code>
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>[</span>
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
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"$schema"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"https://logicstamp.dev/schemas/context/v0.1.json"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"position"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{position}"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"type"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>"LogicStampBundle"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"schemaVersion"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>"0.1"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"entryId"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{getNodePath(nodeId)}"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"depth"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>1</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"bundleHash"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"uifb:1826c1c7474a9f0113591904"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"graph"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"nodes"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: [</span>
                      {'\n'}
                      {'        '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'          '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"entryId"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{getNodePath(nodeId)}"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'          '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"contract"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"type"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>"UIFContract"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"kind"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"react:component"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"description"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{node.label} - {node.type === 'root' ? 'Interactive component' : 'Component'}"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"version"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"components"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: [</span>
                      {hasDeps ? (
                        <>
                          {'\n'}
                          {dependencies.slice(0, 1).map((dep, depIdx) => (
                            <span key={depIdx}>
                              {'                '}
                              <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{dep.split('/').pop()?.replace('.tsx', '')}"</span>
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>
                              {'\n'}
                              {'                '}// {dependencies.length - 1} more...
                            </span>
                          )}
                          {'\n'}
                        </>
                      ) : (
                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}> </span>
                      )}
                      {'              '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>]</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"logicSignature"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'              '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"props"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>...</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'              '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"emits"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>...</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      {'\n'}
                      {'            '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      {'\n'}
                      {'          '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'          '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"codeHeader"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>null</span>
                      {'\n'}
                      {'        '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      {hasDeps && (
                        <>
                          <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                          {'\n'}
                          {'        '}
                          <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>// {dependencies.length} more node{dependencies.length > 1 ? 's' : ''}...</span>
                        </>
                      )}
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>],</span>
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"edges"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: [</span>
                      {hasDeps ? (
                        <>
                          {'\n'}
                          {dependencies.slice(0, 1).map((dep, depIndex) => (
                            <span key={depIndex} className="block">
                              {'        '}
                              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>[</span>
                              {'\n'}
                              {'          '}
                              <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{getNodePath(nodeId)}"</span>
                              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                              {'\n'}
                              {'          '}
                              <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"{dep}"</span>
                              {'\n'}
                              {'        '}
                              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>]</span>
                              {depIndex < Math.min(dependencies.length, 1) - 1 && <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>}
                            </span>
                          ))}
                          {dependencies.length > 1 && (
                            <span className={`block ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                              {'        '}// {dependencies.length - 1} more edge{dependencies.length - 1 > 1 ? 's' : ''}...
                            </span>
                          )}
                        </>
                      ) : (
                        <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}> </span>
                      )}
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>]</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"meta"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"missing"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: [],</span>
                      {'\n'}
                      {'      '}
                      <span className={isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}>"source"</span>
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>: </span>
                      <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>"logicstamp-context@0.1.0"</span>
                      {'\n'}
                      {'    '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      {'\n'}
                      {'  '}
                      <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>{'}'}</span>
                      {!isLast && <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>,</span>}
                      {!isLast && <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>  // {visibleBundles.length - index - 1} more bundle{visibleBundles.length - index - 1 > 1 ? 's' : ''}...</span>}
                      {'\n'}
                    </span>
                  )
                })}
              </>
            )}
            {visibleBundles.length === 0 && (
              <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>  // Generating context bundles...</span>
            )}
            {'\n'}
            <span className={isDarkMode ? 'text-gray-500' : 'text-gray-400'}>]</span>
        </code>
      </pre>
      </div>
    </div>
  )
}

