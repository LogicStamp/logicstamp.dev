'use client'

import { useEffect, useState } from 'react'
import AnimatedSection from './AnimatedSection'

// Terminal animation component for how it works demonstration
function HowItWorksTerminalAnimation() {
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
📝 Writing to: /project/context.json
✅ Context written successfully

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
      title: 'Context Drift Detection',
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
📝 Writing to: /tmp/context-1763129398922.json
✅ Context written successfully

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

🔍 Comparing with existing context.json...


✅  PASS

Token Stats:
  Old: 9,488 (GPT-4o-mini) | 8,434 (Claude)
  New: 9,488 (GPT-4o-mini) | 8,434 (Claude)
  Δ 0 (+0.00%)`
    },
    {
      title: 'Validate Context',
      content: `$ stamp context validate
🔍 Validating "/project/context.json"...
✅ Valid context file with 22 bundle(s)
   Total nodes: 25
   Total edges: 3`
    },
    {
      title: 'context.json',
      content: `[
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
    if (typeof window === 'undefined') return

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

    startTyping()

    return () => {
      if (cursorInterval) clearInterval(cursorInterval)
      if (typingInterval) clearTimeout(typingInterval)
    }
  }, [currentDemo])

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

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Demo selector */}
      <div className="w-full px-2 sm:px-4">
        <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
          {demos.map((demo, index) => (
            <button
              key={index}
              onClick={() => handleDemoSwitch(index)}
              className={`px-2 py-1 text-xs sm:text-sm lg:text-base rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                currentDemo === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="relative rounded-xl bg-gradient-bg-card p-2 ring-1 ring-inset ring-secondary-200/20 dark:ring-secondary-400/20 lg:rounded-2xl lg:p-4 hover-lift shadow-lg mx-2 sm:mx-0">
        <div className="rounded-md bg-gray-900 shadow-2xl ring-1 ring-gray-900/10">
        <div className="flex items-center gap-x-4 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-700">
          <div className="flex gap-x-1.5">
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
          </div>
          <p className="text-xs lg:text-sm text-gray-400">LogicStamp Context CLI</p>
        </div>
        <pre className="px-3 sm:px-6 py-3 sm:py-5 text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-gray-300 font-mono whitespace-pre relative h-96 sm:h-[48rem] overflow-x-auto sm:overflow-hidden">
          {/* Invisible full content to reserve space */}
          <code className="invisible whitespace-pre">{demos[currentDemo].content}</code>
          {/* Visible animated content */}
          <code className="absolute inset-0 px-3 sm:px-6 py-3 sm:py-5 bg-transparent whitespace-pre">
            {displayText}
            {showCursor && <span className="animate-pulse">▋</span>}
          </code>
        </pre>
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-gradient-bg-section">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl">
              How it works
            </h2>
            <div className="mt-8 flex items-center justify-center space-x-4 text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Instant setup
              </span>
              <span className="text-gray-400">→</span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                AI-ready context
              </span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={200}>
          <div className="mx-auto mt-16 max-w-[1320px] sm:mt-20 lg:mt-24">
            <HowItWorksTerminalAnimation />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
