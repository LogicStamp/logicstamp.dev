'use client'

import { useEffect, useState, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

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

// Terminal animation component for how it works demonstration
function HowItWorksTerminalAnimation() {
  const { isDarkMode } = useTheme()
  const { ref: terminalRef, inView: terminalInView } = useInView(0.1)
  const [currentDemo, setCurrentDemo] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  
  const demos = [
    {
      title: 'Generate Context',
      content: `$ npm i -g logicstamp-context

changed 1 package, and audited 3 packages in 1s

found 0 vulnerabilities
$ stamp context
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=1, header only, max 100 nodes)
📦 Generating context for 22 root components (depth=1)...
🔍 Validating generated context...
✅ Validation passed
📝 Writing context files for 5 folders...
   ✓ context.json (2 bundles)
   ✓ src/context.json (3 bundles)
   ✓ src/components/context.json (5 bundles)
   ✓ src/utils/context.json (2 bundles)
   ✓ app/context.json (3 bundles)
📝 Writing main context index...
   ✓ context_main.json (index of 5 folders)
✅ 6 context files written successfully

📊 Summary:
   Total components: 24
   Root components: 22
   Leaf components: 20
   Bundles generated: 22
   Total nodes in context: 25
   Total edges: 3
   Missing dependencies: 0

📏 Token Estimates (header mode):
   GPT-4o-mini: 14,484 | Full code: ~42,977 (~66% savings)
   Claude:      12,875 | Full code: ~38,203 (~66% savings)

📊 Mode Comparison:
   none:       ~8,691 tokens
   header:     ~14,484 tokens
   full:       ~42,977 tokens

⏱  Completed in 3225ms`
    },
    {
      title: 'Token Optimization',
      content: `$ stamp context --compare-modes
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=1, header only, max 100 nodes)
📦 Generating context for 22 root components (depth=1)...

📊 Mode Comparison

Mode     | Tokens GPT-4o | Tokens Claude | Savings vs Full
---------|---------------|---------------|------------------
none     |         8,708 |         7,740 | 81%
header   |        14,512 |        12,900 | 68%
full     |        45,155 |        40,138 | 0%

⏱  Completed in 3256ms`
    },
    {
      title: 'Multi-File Compare',
      content: `$ stamp context compare --stats
🔄 Auto-compare mode: generating fresh context...

🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=1, header only, max 100 nodes)
📦 Generating context for 22 root components (depth=1)...
🔍 Validating generated context...
✅ Validation passed
📝 Writing context files for 5 folders...
   ✓ context.json (2 bundles)
   ✓ src/context.json (3 bundles)
   ✓ src/components/context.json (5 bundles)
   ✓ src/utils/context.json (2 bundles)
   ✓ app/context.json (3 bundles)
📝 Writing main context index...
   ✓ context_main.json (index of 5 folders)
✅ 6 context files written successfully

📊 Summary:
   Total components: 24
   Root components: 22
   Leaf components: 20
   Bundles generated: 22
   Total nodes in context: 25
   Total edges: 3
   Missing dependencies: 0

📏 Token Estimates (header mode):
   GPT-4o-mini: 14,512 | Full code: ~45,155 (~68% savings)
   Claude:      12,900 | Full code: ~40,138 (~68% savings)

📊 Mode Comparison:
   none:       ~8,708 tokens
   header:     ~14,512 tokens
   full:       ~45,155 tokens

⏱  Completed in 3472ms

🔍 Comparing with existing context files (multi-file mode)...


✅  PASS

📁 Folder Summary:
   Total folders: 14
   ✓  Unchanged folders: 14

📂 Folder Details:

   ✅ PASS: src/cli/context.json
      Path: src/cli

   ✅ PASS: src/core/context.json
      Path: src/core`
    },
    {
      title: 'Validate Context',
      content: `$ stamp context validate
🔍 Validating "context.json"...
✅ Valid context file with 4 bundle(s)
   Total nodes: 37
   Total edges: 42

$ stamp context validate context_main.json
🔍 Validating "context_main.json"...
✅ Valid index file with 5 folder(s)
   Total components: 42
   Total bundles: 15`
    },
    {
      title: 'Init & Clean',
      content: `$ stamp init
✅ Created .gitignore with LogicStamp patterns
✅ Created LLM_CONTEXT.md

$ stamp context clean
🧹 This will remove:
  - context_main.json
  - src/components/context.json
  - src/hooks/context.json
  - src/ui/context.json
  - .logicstamp/

💡 Run with --all --yes to confirm and delete these files.`
    },
    {
      title: 'context.json (folder)',
      content: `// src/components/context.json
[
  {
    "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
    "type": "LogicStampBundle",
    "schemaVersion": "0.1",
    "entryId": "src/components/Button.tsx",
    "depth": 1,
    "bundleHash": "uifb:abc123...",
    "graph": {
      "nodes": [
        {
          "entryId": "src/components/Button.tsx",
          "contract": {
            "kind": "react:component",
            "description": "Button - Interactive component",
            "version": {
              "variables": ["variant", "size"],
              "hooks": ["useState"],
              "functions": ["handleClick"]
            },
            "logicSignature": {
              "props": {
                "onClick": { "type": "function", "signature": "() => void" },
                "variant": { "type": "literal-union", "literals": ["primary", "secondary"] },
                ...
              },
              "events": {},
              "state": {}
            }
          }
        ...
  }
]`
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined' || !terminalInView) return

    let currentIndex = 0
    let cursorInterval: NodeJS.Timeout | undefined
    let typingInterval: NodeJS.Timeout | undefined

    const startTyping = () => {
      try {
        const currentContent = demos[currentDemo]?.content || ''
        if (!currentContent) {
          setIsTyping(false)
          return
        }

        currentIndex = 0
        setDisplayText('')
        setIsTyping(true)

        // Cursor blinking animation
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev)
        }, 530)

        // Typing animation
        const typeCharacter = () => {
          try {
            if (currentIndex < currentContent.length) {
              setDisplayText(currentContent.slice(0, currentIndex + 1))
              currentIndex++

              // Speed up typing for certain characters
              const char = currentContent[currentIndex - 1]
              const delay = char === '\n' ? 50 : char === ' ' ? 30 : 20

              typingInterval = setTimeout(typeCharacter, delay)
            } else {
              // Typing is complete
              setIsTyping(false)
              if (cursorInterval) clearInterval(cursorInterval)
              setShowCursor(true)
            }
          } catch (error) {
            console.error('Error in typing animation:', error)
            setIsTyping(false)
            if (cursorInterval) clearInterval(cursorInterval)
            setShowCursor(true)
            // Show full text on error
            setDisplayText(currentContent)
          }
        }

        typingInterval = setTimeout(typeCharacter, 500)
      } catch (error) {
        console.error('Error starting typing animation:', error)
        setIsTyping(false)
        setDisplayText(demos[currentDemo]?.content || '')
      }
    }

    // Small delay before starting to let the fade-in animation complete
    const startDelay = setTimeout(startTyping, 300)

    return () => {
      if (cursorInterval) clearInterval(cursorInterval)
      if (typingInterval) clearTimeout(typingInterval)
      clearTimeout(startDelay)
    }
  }, [currentDemo, terminalInView])

  // Auto-cycle through demos - only when not typing
  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      const interval = setInterval(() => {
        if (!isTyping && demos.length > 0) {
          setCurrentDemo((prev) => (prev + 1) % demos.length)
        }
      }, 8000) // Change demo every 8 seconds

      return () => clearInterval(interval)
    } catch (error) {
      console.error('Error setting up auto-cycle:', error)
    }
  }, [isTyping])

  // Handle manual demo switching
  const handleDemoSwitch = (index: number) => {
    try {
      if (index >= 0 && index < demos.length) {
        setCurrentDemo(index)
        // Reset typing state when manually switching
        setIsTyping(false)
      }
    } catch (error) {
      console.error('Error switching demo:', error)
    }
  }

  // Colorize terminal output
  const colorizeTerminalText = (text: string) => {
    if (!text) return null
    
    const lines = text.split('\n')
    return lines.map((line, lineIndex) => {
      const parts: JSX.Element[] = []
      
      // Match patterns
      const patterns = [
        // Command prompt ($)
        { regex: /^\$\s+/g, color: isDarkMode ? 'text-green-400' : 'text-green-600' },
        // Commands (stamp, npm, etc.)
        { regex: /\b(stamp|npm|i|install|-g|context|compare|validate|init|clean|--stats|--compare-modes|--approve|--clean-orphaned)\b/g, color: isDarkMode ? 'text-blue-400' : 'text-blue-600' },
        // Numbers
        { regex: /\b\d+\b/g, color: isDarkMode ? 'text-yellow-400' : 'text-yellow-600' },
        // Paths and URLs
        { regex: /(\/[\w\/\.-]+|https?:\/\/[^\s]+)/g, color: isDarkMode ? 'text-cyan-400' : 'text-cyan-600' },
        // Success messages (✅)
        { regex: /✅/g, color: isDarkMode ? 'text-green-400' : 'text-green-600' },
        // Emojis (🔍, 🔨, 📊, etc.)
        { regex: /[🔍🔨📊📋📦🔍✅📝⏱🔄]/g, color: isDarkMode ? 'text-yellow-400' : 'text-yellow-600' },
        // Status words
        { regex: /\b(PASS|FAIL|Completed|found|Analyzed|Scanning|Generating|Validating|Writing|Summary|Comparison|Mode|Tokens|Savings|Estimates)\b/gi, color: isDarkMode ? 'text-purple-400' : 'text-purple-600' },
        // Percentages and special numbers
        { regex: /(~|%|\+|-)\d+/g, color: isDarkMode ? 'text-orange-400' : 'text-orange-600' },
      ]
      
      // Process line with patterns
      const matches: Array<{ start: number; end: number; color: string; text: string }> = []
      
      patterns.forEach(({ regex, color }) => {
        let match
        regex.lastIndex = 0
        while ((match = regex.exec(line)) !== null) {
          matches.push({
            start: match.index,
            end: match.index + match[0].length,
            color,
            text: match[0]
          })
        }
      })
      
      // Sort matches by start position
      matches.sort((a, b) => a.start - b.start)
      
      // Remove overlapping matches (keep first)
      const nonOverlapping: typeof matches = []
      matches.forEach(match => {
        const overlaps = nonOverlapping.some(existing => 
          (match.start < existing.end && match.end > existing.start)
        )
        if (!overlaps) {
          nonOverlapping.push(match)
        }
      })
      
      // Build parts
      let currentIndex = 0
      nonOverlapping.forEach(match => {
        // Add text before match
        if (match.start > currentIndex) {
          parts.push(
            <span key={`${lineIndex}-${currentIndex}`} className={isDarkMode ? 'text-gray-100' : 'text-gray-800'}>
              {line.substring(currentIndex, match.start)}
            </span>
          )
        }
        // Add colored match
        parts.push(
          <span key={`${lineIndex}-${match.start}`} className={match.color}>
            {match.text}
          </span>
        )
        currentIndex = match.end
      })
      
      // Add remaining text
      if (currentIndex < line.length) {
        parts.push(
          <span key={`${lineIndex}-${currentIndex}`} className={isDarkMode ? 'text-gray-100' : 'text-gray-800'}>
            {line.substring(currentIndex)}
          </span>
        )
      }
      
      return (
        <span key={lineIndex}>
          {parts.length > 0 ? parts : <span className={isDarkMode ? 'text-gray-100' : 'text-gray-800'}>{line}</span>}
          {lineIndex < lines.length - 1 && '\n'}
        </span>
      )
    })
  }

  return (
    <div 
      ref={terminalRef}
      className={`space-y-4 sm:space-y-6 transition-all duration-1000 ${
        terminalInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Demo selector */}
      <div className="w-full px-2 sm:px-4">
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => handleDemoSwitch(index)}
              className={`px-4 py-2 text-xs sm:text-sm lg:text-base rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 font-medium ${
                currentDemo === index
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-105'
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="group relative rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-2 ring-1 ring-inset ring-gray-200/20 dark:ring-gray-700/20 lg:rounded-2xl lg:p-4 hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-gray-900" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-border-spin" />
        </div>

        <div className={`relative rounded-md shadow-xl ring-1 ${
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
            }`}>LogicStamp Context CLI</p>
          </div>
          <pre className={`px-3 sm:px-6 py-3 sm:py-5 text-sm sm:text-sm lg:text-sm leading-5 sm:leading-6 font-mono whitespace-pre relative h-96 sm:h-[40rem] lg:h-[36rem] overflow-x-auto sm:overflow-hidden ${
            isDarkMode ? 'text-gray-100' : 'text-gray-800'
          }`}>
            {/* Invisible full content to reserve space */}
            <code className="invisible whitespace-pre">{demos[currentDemo].content}</code>
            {/* Visible animated content with colors */}
            <code className={`absolute inset-0 px-3 sm:px-6 py-3 sm:py-5 whitespace-pre ${
              isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
              {colorizeTerminalText(displayText)}
              {showCursor && <span className={`animate-pulse ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>▋</span>}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const { ref: titleRef, inView: titleInView } = useInView(0.1)

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl">
            How it{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <div className={`mt-8 flex items-center justify-center space-x-4 text-lg lg:text-xl text-gray-600 dark:text-gray-300 transition-all duration-1000 delay-200 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Instant setup
            </span>
            <span className="text-gray-400">→</span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              AI-ready context
            </span>
          </div>
        </div>
        
        {/* Terminal Animation */}
        <div className="mx-auto mt-16 max-w-[1400px] sm:mt-20 lg:mt-24">
          <HowItWorksTerminalAnimation />
        </div>
      </div>

      <style jsx>{`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
