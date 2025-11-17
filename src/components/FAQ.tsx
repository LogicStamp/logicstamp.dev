'use client'

import { useState, useRef, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'
import GetStartedButton from './GetStartedButton'
import ReadTheDocsButton from './ReadTheDocsButton'

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
      'Install globally with `npm i -g logicstamp-context`, navigate to your project directory, and run `stamp context`. The CLI generates `context.json` with AI-ready bundles. Share this file with Claude, ChatGPT, or any AI assistant for instant codebase understanding. Use `stamp context validate` to verify the output.',
  },
  {
    id: 6,
    question: 'How does token optimization work?',
    answer:
      'LogicStamp Context offers three modes: `none` (contracts only, ~80% savings), `header` (recommended, ~66% savings with JSDoc headers), and `full` (complete source). The header mode includes just enough context for AI to understand component logic without wasting tokens on implementation details. Use `--compare-modes` to see exact savings for your codebase.',
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

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
    <section id="faq" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl">
              FAQs
            </h2>
            <p className="mt-6 text-base lg:text-xl leading-8 text-gray-600 dark:text-gray-300">
              Quick answers to common{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                questions
              </span>
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto mt-16">
          <dl className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openItem === faq.id

              return (
                <AnimatedSection
                  key={faq.id}
                  direction="up"
                  delay={120 + index * 80}
                >
                  <div
                    className={`
                      relative rounded-2xl transition-all duration-200 ease-out
                      ${
                        isOpen
                          ? 'bg-white/90 dark:bg-gray-900/80 border border-purple-500/40 shadow-[0_0_0_1px_rgba(168,85,247,0.45),0_18px_40px_rgba(15,23,42,0.75)]'
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
                          <span
                            className={`
                              text-lg lg:text-xl font-semibold leading-7
                              ${
                                isOpen
                                  ? 'text-purple-600 dark:text-purple-300'
                                  : 'text-gray-900 dark:text-white'
                              }
                            `}
                          >
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
                              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ease-in-out text-purple-600 dark:text-purple-400 ${
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
                </AnimatedSection>
              )
            })}
          </dl>

          {/* Documentation Link */}
          <AnimatedSection direction="up" delay={800}>
            <div className="mt-16 text-center">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-slate-950/70 px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
                {/* Subtle gradient wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/6 via-blue-500/4 to-transparent dark:from-purple-500/10 dark:via-blue-500/6 dark:to-transparent" />

                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Need more detailed information?
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Explore the LogicStamp docs for setup guides, profiles, token
                    savings examples, CI workflows, and advanced configuration
                    of <code className="font-mono text-sm">stamp context</code>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                      Quick Start Guide
                    </GetStartedButton>
                    <ReadTheDocsButton href="docs/" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
