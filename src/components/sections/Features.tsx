'use client'

import { useEffect, useState, useRef, useMemo } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { ChevronRight } from 'lucide-react'

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
  
  const demos = useMemo(() => [
    {
      title: 'Compile Context',
      content: `$ npm i -g logicstamp-context

changed 1 package, and audited 3 packages in 1s

found 0 vulnerabilities
$ stamp context
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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
   GPT-4o-mini: 14,484 | Full code: ~41,383 (~65% savings)
   Claude:      12,875 | Full code: ~36,785 (~65% savings)

📊 Mode Comparison:
   none:       ~8,691 tokens
   header:     ~14,484 tokens
   full:       ~41,383 tokens

⏱  Completed in 3225ms`
    },
    {
      title: 'Backend Support',
      content: `$ stamp context
🔍 Scanning /project/src...
   Found 32 files
🔨 Analyzing components...
   Analyzed 32 files
   ✓ Detected Express.js routes: 8 files
   ✓ Detected NestJS controllers: 3 files
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 28 root components (depth=2)...
🔍 Validating generated context...
✅ Validation passed
📝 Writing context files for 7 folders...
   ✓ context.json (3 bundles)
   ✓ src/context.json (4 bundles)
   ✓ src/routes/context.json (8 bundles)
   ✓ src/controllers/context.json (3 bundles)
   ✓ src/components/context.json (5 bundles)
   ✓ src/utils/context.json (2 bundles)
   ✓ app/context.json (3 bundles)
📝 Writing main context index...
   ✓ context_main.json (index of 7 folders)
✅ 8 context files written successfully

📊 Summary:
   Total components: 32
   Frontend components: 24
   Backend routes/controllers: 8
   Root components: 28
   Bundles generated: 28
   Total nodes in context: 35
   Total edges: 12
   Missing dependencies: 0

📏 Token Estimates (header mode):
   GPT-4o-mini: 18,234 | Full code: ~52,891 (~65% savings)
   Claude:      16,201 | Full code: ~47,012 (~65% savings)

⏱  Completed in 4123ms`
    },
    {
      title: 'Style Metadata',
      content: `$ stamp context style
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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

📏 Token Estimates (header+style mode):
   Token estimation: GPT-4o (tiktoken) | Claude (tokenizer)
   ⚠️  Current mode = tokenizer-based.
      Other modes / raw source = heuristic.
      For precise per-mode breakdown, use "stamp context --compare-modes".
   GPT-4o-mini: 16,234 tokens
   Claude:      14,428 tokens

   Comparison:
     Mode         | Tokens GPT-4o | Tokens Claude | Savings vs Raw Source
     -------------|---------------|---------------|------------------------
     Raw source   |        41,383 |        36,785 | 0%
     Header       |        12,228 |        10,867 | 70%
     Header+style |        16,234 |        14,428 | 39%

   Full context (code+style): ~48,234 GPT-4o-mini / ~42,856 Claude

📊 Current Mode Comparison:
   ⚠️  Current mode = tokenizer-based.
      Other modes / raw source = heuristic.
      For precise per-mode breakdown, use "stamp context --compare-modes".
   none:       ~8,337 tokens
   header+style  ~16,234 tokens
   full:       ~48,234 tokens

⏱  Completed in 3845ms`
    },
    {
      title: 'Token Optimization',
      content: `$ stamp context --compare-modes
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...

📊 Mode Comparison

Mode     | Tokens GPT-4o | Tokens Claude | Savings vs Full
---------|---------------|---------------|------------------
none     |         8,708 |         7,740 | 81%
header   |        14,512 |        12,900 | 65%
full     |        41,383 |        36,785 | 0%

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
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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
   GPT-4o-mini: 14,512 | Full code: ~41,383 (~65% savings)
   Claude:      12,900 | Full code: ~36,785 (~65% savings)

📊 Mode Comparison:
   none:       ~8,708 tokens
   header:     ~14,512 tokens
   full:       ~41,383 tokens

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
      title: 'Toon Output Format',
      content: `$ stamp context --format toon
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
🔍 Validating generated context...
✅ Validation passed
📝 Writing context files for 5 folders...
   ✓ context.toon (2 bundles)
   ✓ src/context.toon (3 bundles)
   ✓ src/components/context.toon (5 bundles)
   ✓ src/utils/context.toon (2 bundles)
   ✓ app/context.toon (3 bundles)
📝 Writing main context index...
   ✓ context_main.json (index of 5 folders)
✅ 6 context files written successfully

📊 Summary:
   Total components: 24
   Root components: 22
   Bundles generated: 22
   Format: TOON (Token-Oriented Object Notation)

📏 Token Estimates (TOON format):
   GPT-4o-mini: 8,540 tokens (~40% savings vs JSON)
   Claude:      7,590 tokens (~40% savings vs JSON)
   
   Comparison:
     Format     | Tokens GPT-4o | Tokens Claude | Savings vs JSON
     -----------|---------------|---------------|------------------
     JSON       |        14,512 |        12,900 | 0%
     TOON       |         8,540 |         7,590 | 40%

⏱  Completed in 3124ms`
    },
    {
      title: 'Watch Mode',
      content: `$ stamp context --watch
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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

👀 Watch mode enabled. Watching for file changes...

📝 File changed: src/components/Button.tsx
🔄 Incremental rebuild: src/components/context.json
   ✓ Updated 1 bundle in 234ms

📝 File changed: src/utils/helpers.ts
🔄 Incremental rebuild: src/utils/context.json
   ✓ Updated 1 bundle in 189ms

📝 Files changed: src/components/Card.tsx, src/components/Modal.tsx
🔄 Incremental rebuild: src/components/context.json
   ✓ Updated 2 bundles in 312ms

💡 Watch mode: Context bundles stay fresh automatically
   Press Ctrl+C to stop watching`
    },
    {
      title: 'Watch Mode with Style',
      content: `$ stamp context --watch --include-style
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
🎨 Extracting style metadata (Tailwind, SCSS, Material UI)...
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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
   Bundles generated: 22
   Style metadata: Enabled

📏 Token Estimates (header+style mode):
   GPT-4o-mini: 16,234 tokens
   Claude:      14,428 tokens

👀 Watch mode enabled. Watching for file changes...

📝 File changed: src/components/Button.tsx
🎨 Extracting style metadata...
🔄 Incremental rebuild: src/components/context.json
   ✓ Updated 1 bundle with style metadata in 312ms

📝 File changed: src/components/Card.tsx
🎨 Extracting style metadata (Tailwind classes detected)...
🔄 Incremental rebuild: src/components/context.json
   ✓ Updated 1 bundle with style metadata in 287ms

📝 Files changed: src/components/Modal.tsx, src/components/Dialog.tsx
🎨 Extracting style metadata (Material UI + animations detected)...
🔄 Incremental rebuild: src/components/context.json
   ✓ Updated 2 bundles with style metadata in 445ms

💡 Watch mode with style: Context bundles stay fresh with visual metadata
   Press Ctrl+C to stop watching`
    },
    {
      title: 'Strict Watch',
      content: `$ stamp context --watch --strict-watch
🔍 Scanning /project/src...
   Found 24 files
🔨 Analyzing components...
   Analyzed 24 components
📊 Building dependency graph...
📋 Using profile: llm-chat (depth=2, header only, max 100 nodes)
📦 Compiling context for 22 root components (depth=2)...
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

👀 Watch mode enabled. Watching for file changes...
   Strict mode: Tracking breaking changes

📝 Changed: src/components/Button.tsx

🔄 Regenerating (1 file changed)...

✏️  Modified contract:
  src/components/Button.tsx
   • Removed props: \`loading\`

✅ Regenerated

⚠️  Strict Watch: 1 violation(s) detected

   ❌ Errors (1):
      Breaking change: prop 'loading' removed from src/components/Button.tsx

   📊 Current state: 1 error(s), 0 warning(s)

📝 Changed: src/components/Button.tsx

🔄 Regenerating (1 file changed)...

✏️  Modified contract:
  src/components/Button.tsx
   • Added props: \`loading\`

✅ Regenerated

✅ Strict Watch: All violations resolved

💡 Strict watch: Detect breaking changes in real-time
   Press Ctrl+C to stop watching`
    },
    {
      title: 'Security Scan',
      content: `$ stamp security scan
🔒 Scanning for secrets (API keys, passwords, tokens)...
   Scanning TypeScript, JavaScript, and JSON files...
   Found 42 files to scan

🔍 Analyzing files...
   ✓ src/components/Button.tsx
   ✓ src/utils/helpers.ts
   ⚠️  src/config/api.ts - Potential secret detected
   ✓ src/hooks/useAuth.ts
   ⚠️  src/config/secrets.js - Potential secret detected
   ✓ src/app/page.tsx
   ... (36 more files)

🔒 Security scan complete

📊 Summary:
   Files scanned: 42
   Secrets found: 3
   Files with secrets: 2

⚠️  Detected Secrets:
   1. src/config/api.ts:15:12
      Type: API Key
      Severity: high
      Snippet: const apiKey = 'FAKE_SECRET_KEY_1234567890abcdefghijklmnop'

   2. src/config/secrets.js:8:23
      Type: Password
      Severity: high
      Snippet: const dbPassword = 'mySecretPassword123!'

   3. src/config/secrets.js:12:5
      Type: Token
      Severity: medium
      Snippet: token: 'ghp_FAKE_GITHUB_TOKEN_00000000000000000000000000000000'

📝 Report written to: stamp_security_report.json
🔒 Report automatically added to .gitignore

💡 Next steps:
   - Review the security report: stamp_security_report.json
   - Move secrets to .env files or environment variables
   - Use 'stamp ignore <file>' to exclude files from context generation
   - Run 'stamp security --hard-reset' to delete the report after remediation`
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
    "depth": 2,
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
  ], [])

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
  }, [currentDemo, terminalInView, demos])

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
  }, [isTyping, demos.length])

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
        { regex: /^\$\s+/g, color: 'text-green-400' },
        // Commands (stamp, npm, etc.)
        { regex: /\b(stamp|npm|i|install|-g|context|style|compare|validate|init|clean|security|scan|--stats|--compare-modes|--approve|--clean-orphaned|--include-style|--format|--watch|toon|--hard-reset)\b/g, color: 'text-blue-400' },
        // Numbers
        { regex: /\b\d+\b/g, color: 'text-yellow-400' },
        // Paths and URLs
        { regex: /(\/[\w\/\.-]+|https?:\/\/[^\s]+)/g, color: 'text-cyan-400' },
        // Success messages (✅)
        { regex: /✅/g, color: 'text-green-400' },
        // Warning messages (⚠️)
        { regex: /⚠️/g, color: 'text-orange-400' },
        // Emojis (🔍, 🔨, 📊, etc.)
        { regex: /[🔍🔨📊📋📦🔍✅📝⏱🔄🎨👀🔒]/g, color: 'text-yellow-400' },
        // Status words
        { regex: /\b(PASS|FAIL|Completed|found|Analyzed|Scanning|Generating|Validating|Writing|Summary|Comparison|Mode|Tokens|Savings|Estimates|Extracting|detected|Tailwind|Material UI|SCSS|CSS|Animations|Watch|Watching|Incremental|rebuild|TOON|Format|enabled|changed|Updated|Security|secrets|Secret|API Key|Password|Token|Severity|high|medium|low|Report|remediation)\b/gi, color: 'text-purple-400' },
        // Percentages and special numbers
        { regex: /(~|%|\+|-)\d+/g, color: 'text-orange-400' },
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
            <span key={`${lineIndex}-${currentIndex}`} className="text-gray-100">
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
          <span key={`${lineIndex}-${currentIndex}`} className="text-gray-100">
            {line.substring(currentIndex)}
          </span>
        )
      }
      
      return (
        <span key={lineIndex}>
          {parts.length > 0 ? parts : <span className="text-gray-100">{line}</span>}
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
                  : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50'
              }`}
            >
              {demo.title}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal */}
      <div className="relative rounded-2xl shadow-2xl ring-1 bg-gray-900 ring-gray-800/50 overflow-hidden">
          <div className="bg-gray-800 px-6 py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-3">
              <ChevronRight className="w-5 h-5 text-green-400" />
              <span className="text-xs lg:text-sm font-mono text-gray-400">LogicStamp Context CLI</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          </div>
          <pre className="p-6 text-sm sm:text-sm lg:text-sm leading-5 sm:leading-6 font-mono whitespace-pre relative h-96 sm:h-[40rem] lg:h-[36rem] overflow-y-auto overflow-x-auto bg-gray-900 text-gray-100">
            {/* Invisible full content to reserve space */}
            <code className="invisible whitespace-pre">{demos[currentDemo].content}</code>
            {/* Visible animated content with colors */}
            <code className="absolute inset-0 p-6 whitespace-pre bg-gray-900">
              {colorizeTerminalText(displayText)}
              {showCursor && <span className="animate-pulse text-gray-100">▋</span>}
            </code>
          </pre>
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

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
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
        <div className="mx-auto mt-16 max-w-[1440px] sm:mt-20 lg:mt-24">
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














