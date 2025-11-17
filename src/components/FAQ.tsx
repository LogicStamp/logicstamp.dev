'use client'

import { useState, useRef, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'

// Essential FAQs - the most common questions users ask
const faqs = [
  {
    id: 1,
    question: 'How does LogicStamp Context work?',
    answer: 'LogicStamp Context scans your React/TypeScript codebase and generates structured context bundles optimized for AI consumption. It analyzes component structure, extracts logic signatures (props, state, events), builds dependency graphs, and packages everything into machine-readable JSON with built-in token optimization. No configuration needed—just run `stamp context` and get instant AI-ready documentation.',
  },
  {
    id: 2,
    question: 'Why not just paste code into AI chats?',
    answer: 'Pasting raw code wastes tokens on boilerplate, imports, and redundant formatting. LogicStamp Context extracts only what AI needs—component contracts, dependency relationships, and logic signatures—saving up to 66% tokens compared to full source code. Plus, it provides structured context that AI can actually parse and understand, not just raw text.',
  },
  {
    id: 3,
    question: 'Is there a free version?',
    answer: 'Yes! LogicStamp Context is completely free and open-source. Install it globally with `npm i -g logicstamp-context` and use it unlimited times. The full LogicStamp CLI (with contract verification and watch mode) will be available soon with additional features.',
  },
  {
    id: 4,
    question: 'What frameworks are supported?',
    answer: 'Currently supports React and TypeScript projects (including Next.js). Coming soon: Vue 3, Svelte, and other modern frameworks. Works with any React/TypeScript codebase regardless of styling solution (Tailwind, styled-components, CSS modules, etc.).',
  },
  {
    id: 5,
    question: 'How do I get started?',
    answer: 'Install globally with `npm i -g logicstamp-context`, navigate to your project directory, and run `stamp context`. The CLI generates `context.json` with AI-ready bundles. Share this file with Claude, ChatGPT, or any AI assistant for instant codebase understanding. Use `stamp context validate` to verify the output.',
  },
  {
    id: 6,
    question: 'How does token optimization work?',
    answer: 'LogicStamp Context offers three modes: `none` (contracts only, 80% savings), `header` (recommended, 66% savings with JSDoc headers), and `full` (complete source). The header mode includes just enough context for AI to understand component logic without wasting tokens on implementation details. Use `--compare-modes` to see exact savings for your codebase.',
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
    setOpenItem(prev => prev === id ? null : id)
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
              Quick answers to common questions
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-16">
          <dl className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, index) => (
              <AnimatedSection 
                key={faq.id} 
                direction="up" 
                delay={200 + index * 100}
              >
                <div className="py-8">
                  <dt>
                    <button
                      ref={(el) => {
                        buttonRefs.current[index] = el
                      }}
                      type="button"
                      id={`faq-question-${faq.id}`}
                      className="flex w-full items-center justify-between text-left text-gray-900 dark:text-white pr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 rounded-md"
                      onClick={() => toggleItem(faq.id)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      aria-expanded={openItem === faq.id}
                      aria-controls={`faq-answer-${faq.id}`}
                    >
                      <span className="text-lg lg:text-3xl font-semibold leading-7">{faq.question}</span>
                      <div className="relative h-6 w-6 flex-shrink-0" aria-hidden="true">
                        <svg
                          className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                            openItem === faq.id ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          {/* Plus icon when closed */}
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg
                          className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                            openItem === faq.id ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                        >
                          {/* X icon when open */}
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </button>
                  </dt>
                  <dd
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItem === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="mt-4 pr-12 pb-2">
                      <p className="text-base lg:text-2xl leading-7 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              </AnimatedSection>
            ))}
          </dl>

          {/* Documentation Link */}
          <AnimatedSection direction="up" delay={800}>
            <div className="mt-16 text-center">
              <div className="relative rounded-3xl bg-gradient-bg-card dark:bg-gradient-bg-card p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:group-hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.4)] transition-all duration-300">
                    Need more detailed information?
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Explore our comprehensive documentation for detailed guides, API references, 
                    troubleshooting tips, and advanced configuration options.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="docs"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center px-8 py-4 border-0 text-base lg:text-lg font-semibold rounded-xl text-white bg-gradient-blue-purple hover:bg-gradient-blue-purple-deep focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform overflow-hidden"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      View Documentation
                    </a>
                    <a
                      href="docs/getting-started"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base lg:text-lg font-semibold rounded-xl text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform"
                    >
                      <svg className="w-5 h-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Quick Start Guide
                    </a>
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
