'use client'

import { useState, useRef, useEffect } from 'react'
import GetStartedButton from './GetStartedButton'
import ReadTheDocsButton from './ReadTheDocsButton'

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
      'LogicStamp Context scans your React/TypeScript codebase and generates structured context bundles optimized for AI consumption. It analyzes component structure, extracts logic signatures (props, state, events), builds dependency graphs, and packages everything into machine-readable JSON with built-in token optimization. No configuration needed—just run `stamp context` and get instant AI-ready documentation.',
  },
  {
    id: 2,
    question: 'Why not just paste code into AI chats?',
    answer:
      'Pasting raw code wastes tokens on boilerplate, imports, and redundant formatting. LogicStamp Context extracts only what AI needs—component contracts, dependency relationships, and logic signatures—saving up to 66% tokens compared to full source code. Plus, it provides structured context that AI can actually parse and understand, not just raw text.',
  },
  {
    id: 3,
    question: 'Is there a free version?',
    answer:
      'Yes! LogicStamp Context is completely free and open-source. Install it globally with `npm i -g logicstamp-context` and use it unlimited times. The full LogicStamp CLI (with contract verification and watch mode) will be available soon with additional features.',
  },
  {
    id: 4,
    question: 'What frameworks are supported?',
    answer:
      'Currently supports React and TypeScript projects (including Next.js). Coming soon: Vue 3, Svelte, and other modern frameworks. Works with any React/TypeScript codebase regardless of styling solution (Tailwind, styled-components, CSS modules, etc.).',
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer:
      'Install globally with `npm i -g logicstamp-context`, navigate to your project directory, and run `stamp context`. The CLI generates multiple `context.json` files (one per folder) plus a `context_main.json` index with AI-ready bundles. Share these files with Claude, ChatGPT, or any AI assistant for instant codebase understanding. Use `stamp context validate` to verify the output.',
  },
  {
    id: 6,
    question: 'How does token optimization work?',
    answer:
      'LogicStamp Context offers three modes: `none` (contracts only, ~80% savings), `header` (recommended, ~66% savings with JSDoc headers), and `full` (complete source). The header mode includes just enough context for AI to understand component logic without wasting tokens on implementation details. Use `--compare-modes` to see exact savings for your codebase.',
  },
  {
    id: 7,
    question: 'Why bundles instead of individual component files?',
    answer:
      'LogicStamp Context generates per-root bundles (one bundle per page/feature component) rather than individual files per component. Each bundle contains the root component plus its complete dependency graph—all related components together. This design matches how developers work: when you need help with a specific page or feature, share that bundle and the AI has complete context in one self-contained unit.',
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
                  className={`transition-all duration-700 ${
                    faqsInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div
                    className={`
                      relative rounded-2xl transition-all duration-200 ease-out
                      ${
                        isOpen
                          ? 'bg-white/90 dark:bg-gray-900/80 border border-gray-900 dark:border-gray-100 shadow-[0_0_0_1px_rgba(0,0,0,0.45),0_18px_40px_rgba(15,23,42,0.75)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_18px_40px_rgba(15,23,42,0.75)]'
                          : 'bg-white/80 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/80 hover:border-gray-400/80 dark:hover:border-gray-600/80 hover:bg-white dark:hover:bg-gray-900'
                      }
                    `}
                  >
                    <div className="p-6 sm:p-8">
                      <dt>
                        <button
                          ref={el => {
                            buttonRefs.current[index] = el
                          }}
                          type="button"
                          id={`faq-question-${faq.id}`}
                          className="flex w-full items-center justify-between text-left pr-8 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                          onClick={() => toggleItem(faq.id)}
                          onKeyDown={e => handleKeyDown(e, index)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${faq.id}`}
                        >
                          <span className="text-lg lg:text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                            {faq.question}
                          </span>
                          <div
                            className="relative h-5 w-5 flex-shrink-0 ml-4"
                            aria-hidden="true"
                          >
                            {/* Plus icon */}
                            <svg
                              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ease-in-out text-gray-500 dark:text-gray-400 ${
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
                              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ease-in-out text-gray-900 dark:text-white ${
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
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                        className={`
                          grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out
                          ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                        `}
                      >
                        <div className="overflow-hidden">
                          <p className="text-base lg:text-lg leading-7 text-gray-600 dark:text-gray-300 pr-2 sm:pr-8">
                            {faq.answer}
                          </p>
                        </div>
                      </dd>
                    </div>
                  </div>
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
