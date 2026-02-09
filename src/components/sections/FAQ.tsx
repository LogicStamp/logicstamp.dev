'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, X, HelpCircle } from 'lucide-react'
import GetStartedButton from '../ui/GetStartedButton'
import ReadTheDocsButton from '../ui/ReadTheDocsButton'

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

// Essential FAQs - the most common questions users ask
const faqs = [
  {
    id: 1,
    question: 'How does LogicStamp Context work?',
    answer:
      'LogicStamp Context scans your React/TypeScript codebase and generates structured context bundles optimized for AI consumption.\nIt analyzes component structure, extracts logic signatures (component props, state variables, event handlers, and exported functions), builds dependency graphs showing how components connect, and packages everything into machine-readable JSON with built-in token optimization.\nNo configuration needed - just run `stamp context` and get instant AI-ready context bundles.',
  },
  {
    id: 2,
    question: 'Why not just paste code into AI chats?',
    answer:
      'Pasting raw code wastes tokens on boilerplate, imports, and redundant formatting.\nLogicStamp Context extracts only what AI needs - component contracts, dependency relationships, and logic signatures - saving up to 65% tokens compared to full source code.\nPlus, it provides structured context that AI can actually parse and understand, not just raw text.',
  },
  {
    id: 3,
    question: 'Is LogicStamp free to use?',
    answer:
      'Yes! LogicStamp Context is completely free and open-source.\nInstall it globally with npm i -g logicstamp-context and use it.\nThe CLI (v0.5.2) includes context generation, drift detection (tracks changes in component contracts over time), validation, token optimization, security scanning (detects potential secrets in your code), style metadata extraction, and watch mode.\nMCP (Model Context Protocol) integration is also available for free, providing real-time context analysis in Cursor, Claude Desktop, and Claude CLI. Install with `npm install -g logicstamp-mcp` and configure your MCP client (see "How do I set up MCP integration?" below for details).\nAll features are available at no cost.',
  },
  {
    id: 4,
    question: 'What frameworks are supported?',
    answer:
      'Currently supports React and TypeScript projects (including Next.js), plus Vue 3 TypeScript/TSX files.\nBackend support for Express.js and NestJS is available in v0.5.2.\nRequires Node.js >= 18.18.0 (Node 20+ recommended).\nMCP integration is available for Cursor, Claude Desktop, and Claude CLI.\nWorks with any React/TypeScript codebase regardless of styling solution (Tailwind, styled-components, CSS modules, Material UI, ShadCN/UI, Radix UI, Framer Motion, etc.).\nNote: Vue Single File Components (.vue files) support is planned for a future release.',
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer:
      'Quick start: Run `npx logicstamp-context context` (no install needed) or install globally with `npm i -g logicstamp-context`.\nFor first-time setup, run `stamp init` in your project directory (sets up .gitignore patterns and scans for secrets). This step is optional but recommended.\nNext, run `stamp context` to generate multiple `context.json` files (one per folder) plus a `context_main.json` index with AI-ready bundles.\nShare these files with Claude, ChatGPT, or any AI assistant for instant codebase understanding.\nUse `stamp context validate` to verify the output, or try the MCP integration for real-time analysis in Cursor, Claude Desktop, or Claude CLI.',
  },
  {
    id: 6,
    question: 'How do I set up MCP integration?',
    answer:
      'MCP (Model Context Protocol) provides real-time context analysis directly in Cursor, Claude Desktop, or Claude CLI.\n\nSetup (one-time, global):\n1. Install LogicStamp CLI: `npm install -g logicstamp-context`\n2. Install MCP server: `npm install -g logicstamp-mcp`\n3. Configure your MCP client by adding LogicStamp to your config file:\n   - Cursor: `~/.cursor/mcp.json` (macOS/Linux) or `%USERPROFILE%\\.cursor\\mcp.json` (Windows)\n   - Claude CLI: `~/.claude.json` (macOS/Linux) or `%USERPROFILE%\\.claude.json` (Windows)\n   - Claude Desktop: `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or `%APPDATA%\\Claude\\claude_desktop_config.json` (Windows)\n\nAdd this configuration:\n{\n  "mcpServers": {\n    "logicstamp": {\n      "command": "npx",\n      "args": ["logicstamp-mcp"]\n    }\n  }\n}\n\nAfter setup, restart your MCP client. The AI can then use LogicStamp tools to analyze your codebase in real-time. See the MCP documentation at logicstamp.dev/docs/mcp for detailed platform-specific instructions.',
  },
  {
    id: 7,
    question: 'How does token optimization work?',
    answer:
      'LogicStamp Context offers three code inclusion modes: `none` (contracts only, ~79% savings vs full context), `header` (recommended, ~65% savings vs full context, ~70% vs raw source), and `full` (complete source).\nThe header mode includes just enough context for AI to understand component logic without wasting tokens on implementation details.\nAdditionally, you can use `--format toon` for an alternative output format (a compact text-based format) that uses ~40% fewer tokens than JSON while maintaining the same data structure.\nUse `stamp context --compare-modes` to see exact savings for your codebase.\n\nToken counts are automatically calculated using model-accurate tokenizers (GPT-4 and Claude) when available, or character-based estimation as a fallback.',
  },
  {
    id: 8,
    question: 'Why bundles instead of individual component files?',
    answer:
      'LogicStamp Context generates per-root bundles (one bundle per page/feature component) rather than individual files per component.\nEach bundle contains the root component plus its complete dependency graph - all related components together.\nThis design matches how developers work: when you need help with a specific page or feature, share that bundle and the AI has complete context in one self-contained unit.',
  },
  {
    id: 9,
    question: 'What does `stamp context style` do?',
    answer:
      'The `stamp context style` command generates context bundles with visual and layout metadata included.\nIt extracts style information from your components including Tailwind CSS classes, SCSS/CSS modules, inline styles, styled-components/Emotion, framer-motion animations, Material UI, ShadCN/UI, Radix UI, and Styled JSX.\nThis enables AI assistants to understand visual design, suggest visually consistent components, analyze layout patterns, track color palettes, and identify animations.\nUse it when you need AI to understand the visual aspects of your UI (design system analysis, styling questions, visual consistency checks). For logic-only questions, use regular `stamp context` to save tokens. Note: Style metadata adds more tokens (~52-65% of raw source vs ~30% for header mode), so use `--compare-modes` to see the exact cost impact for your codebase.',
  },
  {
    id: 10,
    question: 'Is watch mode available?',
    answer:
      'Yes! Watch mode is available.\nRun `stamp context --watch` to automatically regenerate context files when source files change.\nFeatures include incremental rebuilds (only affected bundles are regenerated), change detection (shows what changed: props, hooks, state), debouncing (batches rapid changes), and style file watching with `--include-style`.\nUse `--debug` to see detailed hash information, or `--log-file` for structured change logs.',
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const { ref: titleRef, inView: titleInView } = useInView(0.1)
  const { ref: faqsRef, inView: faqsInView } = useInView(0.1)
  const { ref: docsRef, inView: docsInView } = useInView(0.1)

  // Initialize refs array
  useEffect(() => {
    buttonRefs.current = buttonRefs.current.slice(0, faqs.length)
  }, [])

  const toggleItem = (id: number) => {
    setOpenItem(prev => (prev === id ? null : id))
  }

  // Keyboard navigation for FAQ items
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        newIndex = index < faqs.length - 1 ? index + 1 : 0
        break
      case 'ArrowUp':
        e.preventDefault()
        newIndex = index > 0 ? index - 1 : faqs.length - 1
        break
      case 'Home':
        e.preventDefault()
        newIndex = 0
        break
      case 'End':
        e.preventDefault()
        newIndex = faqs.length - 1
        break
      default:
        return
    }

    buttonRefs.current[newIndex]?.focus()
  }

  return (
    <section id="faq" className="relative pt-24 sm:pt-32 overflow-hidden pb-0 bg-white dark:bg-gray-950">
      <div className="relative mx-auto max-w-[1440px] px-4 lg:px-6">
        {/* Two-column layout */}
        <div 
          ref={faqsRef}
          className={`grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 py-16 transition-all duration-1000 ${
            faqsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left column - Title */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 text-center lg:text-left ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              Frequently asked questions
            </h2>
            <p className="mt-6 hidden lg:block text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              Answers about how LogicStamp works, how it reduces tokens, and how to integrate it into your workflow.
            </p>
          </div>

          {/* Right column - Questions */}
          <div className="space-y-0">
            <dl className="space-y-0">
              {faqs.map((faq, index) => {
                const isOpen = openItem === faq.id

                return (
                  <div
                    key={faq.id}
                    className={`
                      ${index > 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''}
                      py-6
                      ${faqsInView ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{ 
                      transitionProperty: 'opacity',
                      transitionDuration: '500ms',
                      transitionTimingFunction: 'ease-out',
                      transitionDelay: `${index * 50 + 200}ms`
                    }}
                  >
                    <dt className="m-0">
                      <button
                        ref={el => {
                          buttonRefs.current[index] = el
                        }}
                        type="button"
                        id={`faq-question-${faq.id}`}
                        className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:focus-visible:outline-indigo-400"
                        onClick={() => toggleItem(faq.id)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <span className={`
                          text-lg sm:text-xl font-medium leading-7 flex-1 min-w-0
                          transition-colors duration-200
                          ${isOpen 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-900 dark:text-gray-100'
                          }
                        `}>
                          {faq.question}
                        </span>
                        
                        {/* Icon container */}
                        <div
                          className="relative flex-shrink-0 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          {/* Plus icon (closed state) */}
                          <Plus
                            className={`h-7 w-7 text-gray-900 dark:text-gray-100 ${
                              isOpen
                                ? 'opacity-0 rotate-90'
                                : 'opacity-100 rotate-0'
                            }`}
                            strokeWidth={2}
                            style={{
                              transition: 'transform 400ms ease-in-out, opacity 50ms linear'
                            }}
                          />

                          {/* X icon (open state) */}
                          <X
                            className={`absolute h-7 w-7 text-gray-900 dark:text-gray-100 ${
                              isOpen
                                ? 'opacity-100 rotate-0'
                                : 'opacity-0 -rotate-90'
                            }`}
                            strokeWidth={2}
                            style={{
                              transition: 'transform 400ms ease-in-out, opacity 50ms linear'
                            }}
                          />
                        </div>
                      </button>
                    </dt>

                    {/* Answer */}
                    <dd
                      id={`faq-answer-${faq.id}`}
                      aria-labelledby={`faq-question-${faq.id}`}
                      className={`
                        m-0 grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400 space-y-4">
                          {faq.answer.split(/(Add this configuration:\n)/).map((part, idx) => {
                            // Check if this part is JSON (starts with { and contains mcpServers)
                            if (part.trim().startsWith('{') && part.includes('mcpServers')) {
                              // Split on double newline to separate JSON from following text
                              const [jsonContent, ...restParts] = part.split('\n\n');
                              const restOfText = restParts.join('\n\n');
                              return (
                                <div key={idx} className="space-y-4">
                                  <pre className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre text-gray-700 dark:text-gray-300">
                                    {jsonContent}
                                  </pre>
                                  {restOfText && <p className="whitespace-pre-line">{restOfText}</p>}
                                </div>
                              );
                            }
                            // Regular text parts - split by newlines for better formatting
                            return part.split('\n').map((line, lineIdx) => (
                              <p key={`${idx}-${lineIdx}`} className={lineIdx > 0 ? 'mt-4' : ''}>
                                {line}
                              </p>
                            ));
                          })}
                        </div>
                      </div>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>

      {/* Documentation Link */}
      <div 
        ref={docsRef}
        className={`w-full border-t border-gray-200 dark:border-gray-800 transition-all duration-1000 delay-300 ${
          docsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative mx-auto max-w-[1440px] px-4 lg:px-6 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="h-16 w-16 sm:h-16 sm:w-16 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need More Detailed Information?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore comprehensive documentation covering setup guides, token optimization strategies, CI/CD workflows, and advanced configuration options for{' '}
              <code className="font-mono text-sm text-indigo-600 dark:text-indigo-400 bg-gray-50 dark:bg-gray-900 px-2 py-1 rounded">
                stamp context
              </code>.
            </p>
            
            <div className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-4">
              <GetStartedButton href="docs/getting-started" className="text-xs sm:text-sm lg:text-base px-4 py-2 sm:px-6 sm:py-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Quick Start
              </GetStartedButton>
              <ReadTheDocsButton href="docs/" className="text-xs sm:text-sm lg:text-base px-4 py-2 sm:px-6 sm:py-3 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}














