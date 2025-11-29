'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, Upload, Play, FileCode2, Zap, Package, Code2 } from 'lucide-react'
import CopyButton from './ui/CopyButton'

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
    <div className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      {user && (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">{user.name.charAt(0)}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{user.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
          <Button 
            onClick={() => onUpdate?.(user)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Update Profile
          </Button>
        </div>
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <Card className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DataTable data={data} />
          </div>
        )}
      </Card>
    </div>
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
]

// Extract Tailwind classes from code
function extractTailwindClasses(code: string) {
  const classNameMatches = code.match(/className=["']([^"']+)["']/g) || []
  const allClasses: string[] = []
  
  classNameMatches.forEach(match => {
    const classes = match.replace(/className=["']/, '').replace(/["']$/, '').split(/\s+/)
    allClasses.push(...classes)
  })
  
  return [...new Set(allClasses)].filter(c => c.length > 0)
}

// Categorize Tailwind classes
function categorizeTailwindClasses(classes: string[]) {
  const categories: Record<string, string[]> = {
    colors: [],
    spacing: [],
    layout: [],
    typography: [],
    borders: [],
    effects: [],
    sizing: [],
    transitions: [],
    other: []
  }
  
  const colorPatterns = /^(bg|text|border|ring|divide|outline|from|via|to|decoration|accent|caret|fill|stroke)-/
  const spacingPatterns = /^(m|p|gap|space|inset|top|right|bottom|left|mx|my|mt|mr|mb|ml|px|py|pt|pr|pb|pl|gap-x|gap-y)-/
  const layoutPatterns = /^(flex|grid|block|inline|hidden|container|box-border|box-content|table|table-row|table-cell|flow-root|float|clear|object|overflow|overscroll|static|fixed|absolute|relative|sticky|z-|order|col-|row-|justify|items|content|self|place-|grid-cols|grid-rows|auto-cols|auto-rows|gap|space-|divide-|place-items|place-content|place-self)/
  const typographyPatterns = /^(text|font|leading|tracking|align|whitespace|break|indent|decoration|underline|overline|line-through|uppercase|lowercase|capitalize|normal-case|truncate|antialiased|subpixel-antialiased)/
  const borderPatterns = /^(border|rounded|divide|outline|ring|ring-offset)-/
  const effectsPatterns = /^(shadow|opacity|blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia|backdrop-blur|backdrop-brightness|backdrop-contrast|backdrop-grayscale|backdrop-hue-rotate|backdrop-invert|backdrop-opacity|backdrop-saturate|backdrop-sepia)/
  const sizingPatterns = /^(w|h|min-w|min-h|max-w|max-h|size|basis|grow|shrink)-/
  const transitionPatterns = /^(transition|duration|ease|delay|animate|transform|scale|rotate|translate|skew|origin)-/
  
  classes.forEach(cls => {
    if (colorPatterns.test(cls)) {
      categories.colors.push(cls)
    } else if (spacingPatterns.test(cls)) {
      categories.spacing.push(cls)
    } else if (layoutPatterns.test(cls)) {
      categories.layout.push(cls)
    } else if (typographyPatterns.test(cls)) {
      categories.typography.push(cls)
    } else if (borderPatterns.test(cls)) {
      categories.borders.push(cls)
    } else if (effectsPatterns.test(cls)) {
      categories.effects.push(cls)
    } else if (sizingPatterns.test(cls)) {
      categories.sizing.push(cls)
    } else if (transitionPatterns.test(cls)) {
      categories.transitions.push(cls)
    } else {
      categories.other.push(cls)
    }
  })
  
  // Remove empty categories
  Object.keys(categories).forEach(key => {
    if (categories[key].length === 0) {
      delete categories[key]
    }
  })
  
  return categories
}

// Extract breakpoints from classes
function extractBreakpoints(classes: string[]): string[] {
  const breakpoints = new Set<string>()
  classes.forEach(cls => {
    const match = cls.match(/^(sm|md|lg|xl|2xl):/)
    if (match) {
      breakpoints.add(match[1])
    }
  })
  return Array.from(breakpoints).sort()
}

// Generate style metadata
function generateStyleMetadata(code: string) {
  const classes = extractTailwindClasses(code)
  const categories = categorizeTailwindClasses(classes)
  const breakpoints = extractBreakpoints(classes)
  const hasFlex = classes.some(c => c.includes('flex'))
  const hasGrid = classes.some(c => c.includes('grid'))
  const hasAnimations = classes.some(c => c.includes('animate') || c.includes('transition'))
  
  // Extract visual patterns
  const colors = [...new Set(classes.filter(c => /^(bg|text|border)-/.test(c)).map(c => {
    const match = c.match(/^(bg|text|border)-(.+)/)
    return match ? match[2] : c
  }))].slice(0, 10)
  
  const spacing = [...new Set(classes.filter(c => /^(m|p|gap)-/.test(c)))]
  const radius = classes.find(c => c.startsWith('rounded-'))?.replace('rounded-', '') || 'lg'
  const typography = [...new Set(classes.filter(c => /^(font|text)-/.test(c)))]
  
  return {
    styleSources: {
      tailwind: {
        categories: categories,
        breakpoints: breakpoints,
        classCount: classes.length
      }
    },
    layout: {
      type: hasGrid ? 'grid' : hasFlex ? 'flex' : 'block',
      ...(hasGrid && { cols: '2' }),
      ...(hasFlex && { hasFeatureCards: true })
    },
    visual: {
      colors: colors.slice(0, 10),
      spacing: spacing.slice(0, 10),
      radius: radius,
      typography: typography.slice(0, 10)
    },
    ...(hasAnimations && {
      animation: {
        library: 'css',
        type: classes.find(c => c.includes('animate-'))?.replace('animate-', '') || 'fade'
      }
    })
  }
}

// Generate mock context bundle based on input - matching real LogicStamp structure
function generateContextBundle(code: string, includeStyle = false) {
  // Simple analysis to create a realistic bundle
  const lines = code.split('\n')
  const imports = lines.filter(l => l.includes('import')).length
  
  // Extract component name - handle export const/function/class patterns
  let componentName = 'UserProfile'
  
  // Try to match: export const ComponentName: or export const ComponentName =
  const constMatch = code.match(/export\s+(?:default\s+)?const\s+([A-Z][a-zA-Z0-9_]*)\s*[:=]/)
  // Try to match: export function ComponentName or export default function ComponentName
  const functionMatch = code.match(/export\s+(?:default\s+)?function\s+([A-Z][a-zA-Z0-9_]*)\s*\(/)
  // Try to match: export class ComponentName or export default class ComponentName
  const classMatch = code.match(/export\s+(?:default\s+)?class\s+([A-Z][a-zA-Z0-9_]*)\s*[<{]/)
  
  if (constMatch && constMatch[1]) {
    componentName = constMatch[1]
  } else if (functionMatch && functionMatch[1]) {
    componentName = functionMatch[1]
  } else if (classMatch && classMatch[1]) {
    componentName = classMatch[1]
  }
  
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
              ...(includeStyle ? {
                "style": generateStyleMetadata(code)
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
function generateMultiFileContextBundle(files: UploadedFile[], includeStyle = false) {
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
      // Extract component name - handle export const/function/class patterns
      let componentName = file.name.replace(/\.(tsx?|jsx?)$/, '')
      
      // Try to match: export const ComponentName: or export const ComponentName =
      const constMatch = file.content.match(/export\s+(?:default\s+)?const\s+([A-Z][a-zA-Z0-9_]*)\s*[:=]/)
      // Try to match: export function ComponentName or export default function ComponentName
      const functionMatch = file.content.match(/export\s+(?:default\s+)?function\s+([A-Z][a-zA-Z0-9_]*)\s*\(/)
      // Try to match: export class ComponentName or export default class ComponentName
      const classMatch = file.content.match(/export\s+(?:default\s+)?class\s+([A-Z][a-zA-Z0-9_]*)\s*[<{]/)
      
      if (constMatch && constMatch[1]) {
        componentName = constMatch[1]
      } else if (functionMatch && functionMatch[1]) {
        componentName = functionMatch[1]
      } else if (classMatch && classMatch[1]) {
        componentName = classMatch[1]
      }
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
          ...(includeStyle ? {
            "style": generateStyleMetadata(file.content)
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
  const terminalScrollRef = useRef<HTMLDivElement>(null)

  // Intersection observer hooks for animations
  const { ref: headerRef, inView: headerInView } = useInView(0.1)
  const { ref: pillsRef, inView: pillsInView } = useInView(0.1)
  const { ref: contentRef, inView: contentInView } = useInView(0.1)
  const { ref: terminalRef, inView: terminalInView } = useInView(0.1)
  const { ref: ctaRef, inView: ctaInView } = useInView(0.1)

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight
    }
  }, [terminalOutput])

  const handleGenerate = async (includeStyle = false) => {
    setIsProcessing(true)
    setShowOutput(false)
    setTerminalOutput([])
    setContextBundle(null)
    setContextJsons(null)
    setContextMain(null)

    // Simulate terminal output progressively
    const commandLine = includeStyle ? '$ stamp context style' : '$ stamp context'
    const modifiedTerminalLines = terminalLines.map((line, index) => 
      index === 0 ? { ...line, text: commandLine } : line
    )

    for (let i = 0; i < modifiedTerminalLines.length; i++) {
      const prevDelay = i > 0 ? modifiedTerminalLines[i - 1].delay : 0
      const relativeDelay = modifiedTerminalLines[i].delay - prevDelay
      await new Promise(resolve => setTimeout(resolve, relativeDelay))
      setTerminalOutput(prev => [...prev, modifiedTerminalLines[i]])
    }

    // Generate and show bundle
    await new Promise(resolve => setTimeout(resolve, 200))

    if (uploadedFiles.length > 1) {
      // Generate multi-file context bundles
      const { contextJsons: folderContexts, contextMain: projectContext } = generateMultiFileContextBundle(uploadedFiles, includeStyle)
      setContextJsons(folderContexts)
      setContextMain(projectContext)
      setActiveContextView('main')
    } else {
      // Single file - use original generation
      const bundle = generateContextBundle(userCode, includeStyle)
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
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 pt-28 pb-20 overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Try{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              LogicStamp Context
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Paste your React/TypeScript code below and see how LogicStamp transforms it into an AI-optimized context bundle
          </p>
        </div>

        {/* Example selector pills */}
        <div 
          ref={pillsRef}
          className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-100 ${
            pillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
        </div>

        {/* Main content area */}
        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Code editor panel */}
          <div className="relative">
            {/* Files ready for context generation indicator */}
            {filesReadyForContextGeneration && uploadedFiles.length > 0 && (
              <div
                className="mb-4 px-4 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    {uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} ready for context generation
                  </span>
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <Code2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="font-mono text-sm text-gray-500 dark:text-gray-400 truncate max-w-[200px] sm:max-w-none">{fileName}</span>
                </div>
                <div className="flex items-center gap-3">
                  {uploadedFiles.length > 1 && (
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <span>{activeFileIndex + 1} of {uploadedFiles.length}</span>
                    </div>
                  )}
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
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
              <div className="relative overflow-hidden">
                <textarea
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  className="w-full h-[400px] lg:h-[350px] p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:outline-none overflow-x-auto"
                  placeholder="Paste your React/TypeScript code here..."
                  spellCheck={false}
                />
                <div className="absolute top-4 right-4">
                  <CopyButton text={userCode} />
                </div>
              </div>
            </div>

            {/* Generate buttons */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => handleGenerate(false)}
                disabled={isProcessing || !userCode.trim()}
                className={`w-full py-4 rounded-xl font-semibold text-white shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
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
              </button>
              <button
                onClick={() => handleGenerate(true)}
                disabled={isProcessing || !userCode.trim()}
                className={`w-full py-4 rounded-xl font-semibold text-white shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 ${
                  isProcessing 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Generate Context Style Bundle
                  </>
                )}
              </button>
            </div>
            
            {/* Demo purpose disclaimer */}
            <div className="mt-4 px-4 py-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 text-center">
                <strong>Demo Purpose Only:</strong> This is an interactive demonstration. For production use, install and run the CLI tool locally.
              </p>
            </div>
          </div>

          {/* Output panel */}
          <div className="space-y-6 w-full min-w-0">
            {/* Terminal output */}
            <div
              ref={terminalRef}
              className={`bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-800/50 overflow-hidden transition-all duration-1000 delay-300 ${
                terminalInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
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
                ref={terminalScrollRef}
                className="h-[280px] overflow-y-auto overflow-x-auto p-6 font-mono text-sm bg-gray-900 sidebar-scrollable"
              >
                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={`break-words transition-all duration-200 ${
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
                  </div>
                ))}
                {terminalOutput.length === 0 && (
                  <div className="text-gray-500">Ready to process your code...</div>
                )}
              </div>
            </div>

            {/* Context bundle output */}
            {showOutput && (contextBundle || contextMain) && (
              <div
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-2xl ring-1 ring-gray-200/50 dark:ring-gray-800/50 overflow-hidden w-full max-w-full transition-all duration-300"
              >
                  <div className="bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <div className="flex gap-1.5 flex-shrink-0">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-mono text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                        {activeContextView === 'main' ? 'context_main.json' :
                         activeContextView === 'folder' ? 'context.json (folder)' :
                         'context.json'}
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <CopyButton text={JSON.stringify(
                        activeContextView === 'main' ? contextMain :
                        activeContextView === 'folder' && contextJsons ? Object.values(contextJsons)[0] :
                        contextBundle,
                        null, 2
                      )} />
                    </div>
                  </div>

                  {/* Context view toggle buttons */}
                  {contextMain && contextJsons && (
                    <div className="bg-gray-100 dark:bg-gray-800/50 px-2 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
                      <button
                        onClick={() => setActiveContextView('main')}
                        className={`px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                          activeContextView === 'main'
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        context_main.json
                      </button>
                      <button
                        onClick={() => setActiveContextView('folder')}
                        className={`px-2 sm:px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                          activeContextView === 'folder'
                            ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700/50'
                        }`}
                      >
                        context.json (per folder)
                      </button>
                    </div>
                  )}

                  <div className="h-[280px] overflow-y-auto overflow-x-auto p-3 sm:p-6 bg-gray-50 dark:bg-gray-900 sidebar-scrollable w-full">
                    <pre className="text-xs sm:text-sm text-gray-800 dark:text-gray-100 font-mono leading-6 whitespace-pre-wrap break-all max-w-full">
                      {JSON.stringify(
                        activeContextView === 'main' ? contextMain :
                        activeContextView === 'folder' && contextJsons ? Object.values(contextJsons)[0] :
                        contextBundle,
                        null, 2
                      )}
                    </pre>
                  </div>
                </div>
              )}

            {/* Stats cards */}
            {showOutput && (
              <div
                className="grid grid-cols-3 gap-1.5 sm:gap-4 w-full max-w-full transition-all duration-500"
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2 sm:p-4 text-center shadow-lg min-w-0 overflow-hidden">
                  <Zap className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">78%</div>
                  <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 truncate">Size Reduction</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2 sm:p-4 text-center shadow-lg min-w-0 overflow-hidden">
                  <Package className="w-5 h-5 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">2.4KB</div>
                  <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 truncate">Bundle Size</div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-2 sm:p-4 text-center shadow-lg min-w-0 overflow-hidden">
                  <FileCode2 className="w-5 h-5 sm:w-8 sm:h-8 text-purple-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white truncate">1,200</div>
                  <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400 truncate">Tokens Saved</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
                href="https://github.com/LogicStamp/logicstamp-context"
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-lg font-semibold text-gray-900 dark:text-white hover:shadow-lg transition-all flex items-center gap-2"
              >
                View on GitHub
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}