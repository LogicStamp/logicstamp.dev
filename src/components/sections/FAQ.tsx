'use client'

import { useState, useRef, useEffect } from 'react'
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
      'LogicStamp Context scans your React/TypeScript codebase and generates structured context bundles optimized for AI consumption.\nIt analyzes component structure, extracts logic signatures (props, state, events), builds dependency graphs, and packages everything into machine-readable JSON with built-in token optimization.\nNo configuration needed - just run `stamp context` and get instant AI-ready context bundles.',
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
      'Yes! LogicStamp Context is completely free and open-source.\nInstall it globally with npm i -g logicstamp-context and use it.\nThe CLI (v0.3.8) is production-ready and includes context generation, drift detection, validation, token optimization, security scanning, and style metadata extraction.\nMCP (Model Context Protocol) integration is also available for free, providing real-time context analysis in Cursor, Claude Desktop, and Claude CLI. Install with `npm install -g logicstamp-mcp` and configure your MCP client (see "How do I set up MCP integration?" below for details).\nAll features are available at no cost.',
  },
  {
    id: 4,
    question: 'What frameworks are supported?',
    answer:
      'Currently supports React and TypeScript projects (including Next.js), plus Vue 3 TypeScript/TSX files.\nBackend support for Express.js and NestJS is available (new and experimental in v0.4.0).\nRequires Node.js >= 18.18.0 (Node 20+ recommended).\nMCP integration is available (v0.1.4) for Cursor, Claude Desktop, and Claude CLI.\nWorks with any React/TypeScript codebase regardless of styling solution (Tailwind, styled-components, CSS modules, Material UI, ShadCN/UI, Radix UI, Framer Motion, etc.).\nNote: Vue Single File Components (.vue files) support is planned for a future release.',
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer:
      'Quick start: Run `npx logicstamp-context context` (no install needed) or install globally with `npm i -g logicstamp-context`.\nFor first-time setup, run `stamp init` in your project directory (sets up .gitignore patterns and scans for secrets).\nNext, run `stamp context` to generate multiple `context.json` files (one per folder) plus a `context_main.json` index with AI-ready bundles.\nShare these files with Claude, ChatGPT, or any AI assistant for instant codebase understanding.\nUse `stamp context validate` to verify the output, or try the MCP integration for real-time analysis in Cursor, Claude Desktop, or Claude CLI.',
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
      'LogicStamp Context offers three code inclusion modes: `none` (contracts only, ~79% savings vs full context), `header` (recommended, ~65% savings vs full context, ~70% vs raw source), and `full` (complete source).\nThe header mode includes just enough context for AI to understand component logic without wasting tokens on implementation details.\nAdditionally, you can use `--format toon` for an alternative output format that uses ~40% fewer tokens than JSON while maintaining the same data structure.\nUse `stamp context --compare-modes` to see exact savings for your codebase.\n\nToken counts are automatically calculated using model-accurate tokenizers (GPT-4 and Claude) when available, or character-based estimation as a fallback.',
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
      'The `stamp context style` command generates context bundles with visual and layout metadata included.\nIt extracts style information from your components including Tailwind CSS classes, SCSS/CSS modules, inline styles, styled-components/Emotion, framer-motion animations, Material UI, ShadCN/UI, Radix UI, and Styled JSX.\nThis enables AI assistants to understand visual design, suggest visually consistent components, analyze layout patterns, track color palettes, and identify animations.\nUse it when you need AI to understand the visual aspects of your UI, not just the logic. Note: Style metadata adds more tokens (~52-65% of raw source vs ~30% for header mode), so use `--compare-modes` to see the exact cost impact for your codebase.',
  },
  {
    id: 10,
    question: 'Is watch mode available?',
    answer:
      'Yes! Watch mode is available in v0.4.1.\nRun `stamp context --watch` to automatically regenerate context files when source files change.\nFeatures include incremental rebuilds (only affected bundles are regenerated), change detection (shows what changed: props, hooks, state), debouncing (batches rapid changes), and style file watching with `--include-style`.\nUse `--debug` to see detailed hash information, or `--log-file` for structured change logs.',
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
    <section id="faq" className="relative pt-24 sm:pt-32 overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900/50 dark:via-gray-950 dark:to-gray-900/50 pb-0">
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
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
            FAQs
          </h2>
          <p className={`mt-6 text-base lg:text-xl leading-8 text-gray-600 dark:text-gray-300 transition-all duration-1000 delay-200 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Quick answers to common{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              questions
            </span>
          </p>
        </div>

        <div 
          ref={faqsRef}
          className={`mx-auto mt-16 mb-16 transition-all duration-1000 ${
            faqsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <dl className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openItem === faq.id

              return (
                <div
                  key={faq.id}
                  className={`
                    relative rounded-2xl p-6 sm:p-8
                    ${
                      faqsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }
                    ${
                      isOpen
                        ? 'border border-gray-900 dark:border-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.45),0_18px_40px_rgba(15,23,42,0.75)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_18px_40px_rgba(15,23,42,0.75)]'
                        : 'border border-gray-200/60 dark:border-gray-800/80'
                    }
                  `}
                  style={{ 
                    transitionProperty: 'opacity, transform, box-shadow',
                    transitionDuration: '700ms, 700ms, 200ms',
                    transitionTimingFunction: 'ease-out, ease-out, ease-out',
                    transitionDelay: `${index * 100 + 200}ms, ${index * 100 + 200}ms, 0ms`
                  }}
                >
                  <dt>
                      <button
                        ref={el => {
                          buttonRefs.current[index] = el
                        }}
                        type="button"
                        id={`faq-question-${faq.id}`}
                        className="flex w-full items-center justify-between text-left pr-2 sm:pr-8 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                        onClick={() => toggleItem(faq.id)}
                        onKeyDown={e => handleKeyDown(e, index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${faq.id}`}
                      >
                        <span className="text-xl lg:text-2xl font-semibold leading-7 text-gray-900 dark:text-white flex-1 min-w-0">
                          {faq.question}
                        </span>
                        <div
                          className="relative h-6 w-6 flex-shrink-0 ml-4 sm:ml-4"
                          aria-hidden="true"
                        >
                          {/* Plus icon */}
                          <svg
                            className={`absolute inset-0 h-6 w-6 transition-all duration-200 ease-in-out text-gray-500 dark:text-gray-400 ${
                              isOpen
                                ? 'opacity-0 rotate-90 scale-75'
                                : 'opacity-100 rotate-0 scale-100'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>

                          {/* Close icon */}
                          <svg
                            className={`absolute inset-0 h-6 w-6 transition-all duration-200 ease-in-out text-gray-900 dark:text-white ${
                              isOpen
                                ? 'opacity-100 rotate-0 scale-100'
                                : 'opacity-0 -rotate-90 scale-75'
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </button>
                    </dt>

                    {/* Answer */}
                    <dd
                      id={`faq-answer-${faq.id}`}
                      aria-labelledby={`faq-question-${faq.id}`}
                      className={`
                        grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out
                        ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                      `}
                    >
                      <div className="overflow-hidden">
                        <div className="text-xl lg:text-xl leading-7 text-gray-600 dark:text-gray-300 pr-2 sm:pr-8">
                          {faq.answer.split(/(Add this configuration:\n)/).map((part, idx) => {
                            // Check if this part is JSON (starts with { and contains mcpServers)
                            if (part.trim().startsWith('{') && part.includes('mcpServers')) {
                              // Split on double newline to separate JSON from following text
                              const [jsonContent, ...restParts] = part.split('\n\n');
                              const restOfText = restParts.join('\n\n');
                              return (
                                <div key={idx}>
                                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto my-3 whitespace-pre">
                                    {jsonContent}
                                  </pre>
                                  {restOfText && <p className="whitespace-pre-line">{restOfText}</p>}
                                </div>
                              );
                            }
                            // Regular text parts
                            return <p key={idx} className="whitespace-pre-line">{part}</p>;
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

      {/* Documentation Link - Full Width */}
      <div 
        ref={docsRef}
        className={`w-full transition-all duration-1000 delay-300 ${
          docsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="relative overflow-hidden rounded-none px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12 pb-24 sm:pb-32">
          {/* Subtle glass spark effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10 z-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need more detailed information?
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore the LogicStamp docs for setup guides, profiles, token
              savings examples, CI workflows, and advanced configuration
              of <code className="font-mono text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-1.5 py-0.5 rounded">stamp context</code>.
            </p>
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-4">
              <GetStartedButton href="docs/getting-started">
                <svg
                  className="w-5 h-5"
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
              <ReadTheDocsButton href="docs/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}














