'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Upload, Play, FileCode2, Zap, Package, Code2 } from 'lucide-react'
import CopyButton from './CopyButton'

// Sample code examples
const codeExamples = {
  react: {
    name: 'React Component',
    code: `import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { useAuth } from '../hooks/useAuth';

interface UserProfileProps {
  userId: string;
  onUpdate?: (data: UserData) => void;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      fetchUser(userId).then(setUser);
    }
  }, [userId, isAuthenticated]);
  
  return (
    <div className="profile">
      {user && (
        <>
          <h2>{user.name}</h2>
          <Button onClick={() => onUpdate?.(user)}>
            Update Profile
          </Button>
        </>
      )}
    </div>
  );
};`,
  },
  nextjs: {
    name: 'Next.js Page',
    code: `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { api } from '@/lib/api'

export default function DashboardPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  
  async function loadDashboard() {
    setLoading(true)
    try {
      const response = await api.get('/dashboard')
      setData(response.data)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <Card className="p-6">
      <h1>Dashboard</h1>
      {loading ? <Spinner /> : <DataTable data={data} />}
    </Card>
  )
}`,
  },
  typescript: {
    name: 'TypeScript Service',
    code: `import { EventEmitter } from 'events';
import { Logger } from './Logger';
import { Database } from './Database';

interface ServiceConfig {
  maxRetries: number;
  timeout: number;
}

export class DataService extends EventEmitter {
  private logger: Logger;
  private db: Database;
  private config: ServiceConfig;
  
  constructor(config: ServiceConfig) {
    super();
    this.config = config;
    this.logger = new Logger('DataService');
    this.db = new Database();
  }
  
  async fetchData<T>(query: string): Promise<T[]> {
    this.logger.info('Fetching data', { query });
    
    try {
      const result = await this.db.query<T>(query);
      this.emit('data:fetched', result);
      return result;
    } catch (error) {
      this.logger.error('Failed to fetch data', error);
      throw error;
    }
  }
}`,
  },
}

// Simulated terminal output lines - matching actual CLI behavior
const terminalLines = [
  { text: '$ stamp init', type: 'command', delay: 0 },
  { text: '', type: 'empty', delay: 50 },
  { text: '✓ Initializing LogicStamp in current directory...', type: 'success', delay: 100 },
  { text: '✓ Created .logicstamprc configuration', type: 'success', delay: 200 },
  { text: '', type: 'empty', delay: 250 },
  { text: '$ stamp context', type: 'command', delay: 400 },
  { text: '', type: 'empty', delay: 450 },
  { text: '🔍 Scanning project structure...', type: 'info', delay: 600 },
  { text: '   Found 5 components in src/components/', type: 'detail', delay: 800 },
  { text: '', type: 'empty', delay: 850 },
  { text: '📊 Analyzing dependencies...', type: 'info', delay: 1000 },
  { text: '   Building import graph...', type: 'detail', delay: 1200 },
  { text: '   Extracting component contracts...', type: 'detail', delay: 1400 },
  { text: '', type: 'empty', delay: 1450 },
  { text: '✨ Generating context bundles...', type: 'info', delay: 1600 },
  { text: '   [1/5] UserProfile.tsx → context.json', type: 'progress', delay: 1800 },
  { text: '   [2/5] Button.tsx → context.json', type: 'progress', delay: 2000 },
  { text: '   [3/5] Card.tsx → context.json', type: 'progress', delay: 2200 },
  { text: '   [4/5] Modal.tsx → context.json', type: 'progress', delay: 2400 },
  { text: '   [5/5] useAuth.ts → context.json', type: 'progress', delay: 2600 },
  { text: '', type: 'empty', delay: 2650 },
  { text: '✅ Context generation complete!', type: 'success', delay: 2800 },
  { text: '', type: 'empty', delay: 2850 },
  { text: '📦 Output: src/components/context.json', type: 'result', delay: 3000 },
  { text: '📏 Size: 2.4KB (78% reduction)', type: 'result', delay: 3200 },
  { text: '🎯 Tokens: ~1,200 (saved ~3,800 tokens)', type: 'result', delay: 3400 },
  { text: '', type: 'empty', delay: 3450 },
  { text: '💡 Tip: Use "stamp context --watch" for live updates', type: 'tip', delay: 3600 },
]

// Generate mock context bundle based on input - matching real LogicStamp structure
function generateContextBundle(code: string) {
  // Simple analysis to create a realistic bundle
  const lines = code.split('\n')
  const imports = lines.filter(l => l.includes('import')).length
  const componentMatch = code.match(/(?:export\s+(?:default\s+)?(?:function|const)\s+|class\s+)([A-Z]\w+)/g)
  const componentName = componentMatch ? componentMatch[0].replace(/^.*?\s+/, '') : 'UserProfile'
  const hooks = (code.match(/use[A-Z]\w+/g) || []).filter((v, i, a) => a.indexOf(v) === i)
  const isNextJs = code.includes('next/')
  const hasUseClient = code.includes("'use client'") || code.includes('"use client"')

  return [
    {
      "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
      "position": "1/1",
      "type": "LogicStampBundle",
      "schemaVersion": "0.1",
      "entryId": `c:/demo-project/src/components/${componentName}.tsx`,
      "depth": 1,
      "createdAt": new Date().toISOString(),
      "bundleHash": `uifb:${Math.random().toString(36).substring(2, 15)}`,
      "graph": {
        "nodes": [
          {
            "entryId": `c:/demo-project/src/components/${componentName}.tsx`,
            "contract": {
              "type": "UIFContract",
              "schemaVersion": "0.3",
              "kind": "react:component",
              "entryId": `c:/demo-project/src/components/${componentName}.tsx`,
              "entryPathAbs": `C:\\demo-project\\src\\components\\${componentName}.tsx`,
              "entryPathRel": `src/components/${componentName}.tsx`,
              "os": "win32",
              "description": `${componentName} - ${hooks.length > 0 ? 'Stateful' : 'Presentational'} component`,
              "version": {
                "variables": [],
                "hooks": hooks.map(h => h.replace(/^use/, '')).slice(0, 3),
                "components": [],
                "functions": [componentName],
                "imports": imports > 0 ? ["react"] : []
              },
              "logicSignature": {
                "props": code.includes('Props') ? {
                  "userId": "string",
                  "onUpdate": {
                    "type": "function",
                    "optional": true
                  }
                } : {},
                "emits": {},
                ...(hooks.length > 0 ? {
                  "state": {
                    "user": "UserData | null",
                    "loading": "boolean"
                  }
                } : {})
              },
              "exports": "default",
              ...(isNextJs && hasUseClient ? {
                "nextjs": {
                  "directive": "client"
                }
              } : {}),
              "semanticHash": `uif:${Math.random().toString(36).substring(2, 15)}`,
              "fileHash": `uif:${Math.random().toString(36).substring(2, 15)}`
            },
            "codeHeader": null
          }
        ],
        "edges": []
      },
      "meta": {
        "missing": [],
        "source": "logicstamp-context@0.1.0"
      }
    }
  ]
}

// Generate context bundles for multiple files
function generateMultiFileContextBundle(files: UploadedFile[]) {
  // Extract folder structure from file paths
  const folders = new Map<string, UploadedFile[]>()

  files.forEach(file => {
    const pathParts = file.path.split('/')
    const folderPath = pathParts.length > 1 ? pathParts.slice(0, -1).join('/') : 'root'
    if (!folders.has(folderPath)) {
      folders.set(folderPath, [])
    }
    folders.get(folderPath)!.push(file)
  })

  // Generate context.json for each folder
  const contextJsons: { [key: string]: any[] } = {}

  folders.forEach((folderFiles, folderPath) => {
    const nodes = folderFiles.map(file => {
      const lines = file.content.split('\n')
      const imports = lines.filter(l => l.includes('import')).length
      const componentMatch = file.content.match(/(?:export\s+(?:default\s+)?(?:function|const)\s+|class\s+)([A-Z]\w+)/g)
      const componentName = componentMatch ? componentMatch[0].replace(/^.*?\s+/, '') : file.name.replace(/\.(tsx?|jsx?)$/, '')
      const hooks = (file.content.match(/use[A-Z]\w+/g) || []).filter((v, i, a) => a.indexOf(v) === i)
      const isNextJs = file.content.includes('next/')
      const hasUseClient = file.content.includes("'use client'") || file.content.includes('"use client"')

      return {
        "entryId": `c:/demo-project/${file.path}`,
        "contract": {
          "type": "UIFContract",
          "schemaVersion": "0.3",
          "kind": "react:component",
          "entryId": `c:/demo-project/${file.path}`,
          "entryPathAbs": `C:\\demo-project\\${file.path.replace(/\//g, '\\\\')}`,
          "entryPathRel": file.path,
          "os": "win32",
          "description": `${componentName} - ${hooks.length > 0 ? 'Stateful' : 'Presentational'} component`,
          "version": {
            "variables": [],
            "hooks": hooks.map(h => h.replace(/^use/, '')).slice(0, 3),
            "components": [],
            "functions": [componentName],
            "imports": imports > 0 ? ["react"] : []
          },
          "logicSignature": {
            "props": file.content.includes('Props') ? {} : {},
            "emits": {},
            ...(hooks.length > 0 ? {
              "state": {}
            } : {})
          },
          "exports": "default",
          ...(isNextJs && hasUseClient ? {
            "nextjs": {
              "directive": "client"
            }
          } : {}),
          "semanticHash": `uif:${Math.random().toString(36).substring(2, 15)}`,
          "fileHash": `uif:${Math.random().toString(36).substring(2, 15)}`
        },
        "codeHeader": null
      }
    })

    contextJsons[folderPath] = [{
      "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
      "type": "LogicStampBundle",
      "schemaVersion": "0.1",
      "folderPath": folderPath,
      "depth": 1,
      "createdAt": new Date().toISOString(),
      "bundleHash": `uifb:${Math.random().toString(36).substring(2, 15)}`,
      "graph": {
        "nodes": nodes,
        "edges": []
      },
      "meta": {
        "missing": [],
        "source": "logicstamp-context@0.1.0"
      }
    }]
  })

  // Generate context_main.json (project-level)
  const allNodes = Array.from(folders.values()).flat().map(file => {
    const componentMatch = file.content.match(/(?:export\s+(?:default\s+)?(?:function|const)\s+|class\s+)([A-Z]\w+)/g)
    const componentName = componentMatch ? componentMatch[0].replace(/^.*?\s+/, '') : file.name.replace(/\.(tsx?|jsx?)$/, '')

    return {
      "entryId": `c:/demo-project/${file.path}`,
      "name": componentName,
      "path": file.path,
      "type": "component"
    }
  })

  const contextMain = {
    "$schema": "https://logicstamp.dev/schemas/context_main/v0.1.json",
    "type": "LogicStampProjectBundle",
    "schemaVersion": "0.1",
    "projectPath": "c:/demo-project",
    "createdAt": new Date().toISOString(),
    "bundleHash": `uifb:${Math.random().toString(36).substring(2, 15)}`,
    "folders": Array.from(folders.keys()),
    "summary": {
      "totalFiles": files.length,
      "totalFolders": folders.size,
      "components": allNodes
    },
    "meta": {
      "source": "logicstamp-context@0.1.0"
    }
  }

  return {
    contextJsons,
    contextMain
  }
}

interface UploadedFile {
  name: string
  content: string
  path: string
}

export default function Demo() {
  const [selectedExample, setSelectedExample] = useState<keyof typeof codeExamples>('react')
  const [userCode, setUserCode] = useState(codeExamples.react.code)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<typeof terminalLines>([])
  const [contextBundle, setContextBundle] = useState<any>(null)
  const [contextJsons, setContextJsons] = useState<any>(null)
  const [contextMain, setContextMain] = useState<any>(null)
  const [activeContextView, setActiveContextView] = useState<'bundle' | 'folder' | 'main'>('bundle')
  const [fileName, setFileName] = useState('UserProfile.tsx')
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [activeFileIndex, setActiveFileIndex] = useState(0)
  const [filesReadyForContextGeneration, setFilesReadyForContextGeneration] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalOutput])

  const handleGenerate = async () => {
    setIsProcessing(true)
    setShowOutput(false)
    setTerminalOutput([])
    setContextBundle(null)
    setContextJsons(null)
    setContextMain(null)

    // Simulate terminal output progressively
    for (let i = 0; i < terminalLines.length; i++) {
      const prevDelay = i > 0 ? terminalLines[i - 1].delay : 0
      const relativeDelay = terminalLines[i].delay - prevDelay
      await new Promise(resolve => setTimeout(resolve, relativeDelay))
      setTerminalOutput(prev => [...prev, terminalLines[i]])
    }

    // Generate and show bundle
    await new Promise(resolve => setTimeout(resolve, 200))

    if (uploadedFiles.length > 1) {
      // Generate multi-file context bundles
      const { contextJsons: folderContexts, contextMain: projectContext } = generateMultiFileContextBundle(uploadedFiles)
      setContextJsons(folderContexts)
      setContextMain(projectContext)
      setActiveContextView('main')
    } else {
      // Single file - use original generation
      const bundle = generateContextBundle(userCode)
      setContextBundle(bundle)
      setActiveContextView('bundle')
    }

    setShowOutput(true)
    setIsProcessing(false)
  }

  const handleExampleSelect = (example: keyof typeof codeExamples) => {
    setSelectedExample(example)
    setUserCode(codeExamples[example].code)
    setShowOutput(false)
    setTerminalOutput([])
    setContextBundle(null)

    // Update filename based on example
    if (example === 'react') {
      setFileName('UserProfile.tsx')
    } else if (example === 'nextjs') {
      setFileName('page.tsx')
    } else if (example === 'typescript') {
      setFileName('DataService.ts')
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (files.length === 0) return

    // Limit to 5 files
    const filesToProcess = files.slice(0, 5)

    const uploadedFilePromises = filesToProcess.map((file) => {
      return new Promise<UploadedFile>((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target?.result as string
          resolve({
            name: file.name,
            content,
            path: file.webkitRelativePath || file.name
          })
        }
        reader.readAsText(file)
      })
    })

    const processedFiles = await Promise.all(uploadedFilePromises)
    setUploadedFiles(processedFiles)
    setActiveFileIndex(0)
    setFileName(processedFiles[0].name)
    setUserCode(processedFiles[0].content)
    setFilesReadyForContextGeneration(true)
    setShowOutput(false)
    setTerminalOutput([])
    setContextBundle(null)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 pt-28 pb-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Try{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              LogicStamp Context
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Paste your React/TypeScript code below and see how LogicStamp transforms it into an AI-optimized context bundle
          </p>
        </motion.div>

        {/* Example selector pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {Object.entries(codeExamples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => handleExampleSelect(key as keyof typeof codeExamples)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedExample === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <FileCode2 className="inline-block w-4 h-4 mr-2" />
              {example.name}
            </button>
          ))}
          <label className="px-4 py-2 rounded-full font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md cursor-pointer transition-all">
            <Upload className="inline-block w-4 h-4 mr-2" />
            Upload Files
            <input
              type="file"
              accept=".ts,.tsx,.js,.jsx"
              onChange={handleFileUpload}
              className="hidden"
              multiple
              max={5}
            />
          </label>
        </motion.div>

        {/* Main content area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Code editor panel */}
          <div className="relative">
            {/* Files ready for context generation indicator */}
            {filesReadyForContextGeneration && uploadedFiles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 px-4 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} ready for context generation
                  </span>
                </div>
              </motion.div>
            )}

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Code2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400">{fileName}</span>
                </div>
                {uploadedFiles.length > 1 && (
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>{activeFileIndex + 1} of {uploadedFiles.length}</span>
                  </div>
                )}
              </div>

              {/* File tabs for multiple files */}
              {uploadedFiles.length > 1 && (
                <div className="bg-gray-100 dark:bg-gray-800/50 px-4 py-2 flex items-center gap-2 overflow-x-auto border-b border-gray-200 dark:border-gray-700 sidebar-scrollable">
                  {uploadedFiles.map((file, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveFileIndex(index)
                        setFileName(file.name)
                        setUserCode(file.content)
                      }}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs whitespace-nowrap transition-all ${
                        activeFileIndex === index
                          ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {file.name}
                    </button>
                  ))}
                </div>
              )}
              <div className="relative">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full h-[500px] p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:outline-none"
                  placeholder="Paste your React/TypeScript code here..."
                  spellCheck={false}
                />
                <div className="absolute top-4 right-4">
                  <CopyButton text={userCode} />
                </div>
              </div>
            </div>

            {/* Generate button */}
            <motion.button
              onClick={handleGenerate}
              disabled={isProcessing || !userCode.trim()}
              whileTap={{ scale: 0.98 }}
              className={`mt-6 w-full py-4 rounded-xl font-semibold text-white shadow-xl transition-all flex items-center justify-center gap-3 ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  Generate Context Bundle
                </>
              )}
            </motion.button>
          </div>

          {/* Output panel */}
          <div className="space-y-6">
            {/* Terminal output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-800/50 overflow-hidden"
            >
              <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-green-400" />
                  <span className="font-mono text-sm text-gray-400">bash</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div
                ref={terminalRef}
                className="h-[280px] overflow-y-auto p-6 font-mono text-sm bg-gray-900 sidebar-scrollable"
              >
                <AnimatePresence>
                  {terminalOutput.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`${
                        line.type === 'command' ? 'text-white font-semibold' :
                        line.type === 'info' ? 'text-blue-400' :
                        line.type === 'success' ? 'text-green-400' :
                        line.type === 'result' ? 'text-yellow-400' :
                        line.type === 'progress' ? 'text-purple-400' :
                        line.type === 'detail' ? 'text-gray-400' :
                        line.type === 'tip' ? 'text-cyan-400' :
                        'text-gray-400'
                      } ${line.type === 'empty' ? 'h-4' : ''}`}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                {terminalOutput.length === 0 && (
                  <div className="text-gray-500">Ready to process your code...</div>
                )}
              </div>
            </motion.div>

            {/* Context bundle output */}
            <AnimatePresence>
              {showOutput && (contextBundle || contextMain) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 overflow-hidden"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-mono text-sm text-gray-500 dark:text-gray-400">
                        {activeContextView === 'main' ? 'context_main.json' :
                         activeContextView === 'folder' ? 'context.json (folder)' :
                         'context.json'}
                      </span>
                    </div>
                    <CopyButton text={JSON.stringify(
                      activeContextView === 'main' ? contextMain :
                      activeContextView === 'folder' && contextJsons ? Object.values(contextJsons)[0] :
                      contextBundle,
                      null, 2
                    )} />
                  </div>

                  {/* Context view toggle buttons */}
                  {contextMain && contextJsons && (
                    <div className="bg-gray-100 dark:bg-gray-800/50 px-4 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setActiveContextView('main')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeContextView === 'main'
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        context_main.json
                      </button>
                      <button
                        onClick={() => setActiveContextView('folder')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          activeContextView === 'folder'
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        context.json (per folder)
                      </button>
                    </div>
                  )}

                  <div className="h-[280px] overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900 sidebar-scrollable">
                    <pre className="text-sm text-gray-800 dark:text-gray-100 font-mono leading-6">
                      {JSON.stringify(
                        activeContextView === 'main' ? contextMain :
                        activeContextView === 'folder' && contextJsons ? Object.values(contextJsons)[0] :
                        contextBundle,
                        null, 2
                      )}
                    </pre>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats cards */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">78%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Size Reduction</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-lg">
                  <Package className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2.4KB</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Bundle Size</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-lg">
                  <FileCode2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">1,200</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tokens Saved</div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to optimize your entire codebase?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Install LogicStamp Context CLI and start generating AI-ready context bundles in seconds
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <a
                href="https://github.com/amitek/logicstamp-context"
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg font-semibold text-gray-900 dark:text-white hover:shadow-lg transition-all flex items-center gap-2"
              >
                View on GitHub
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}