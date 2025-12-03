import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'LogicStamp Context CLI | Documentation',
  description: 'Complete documentation for LogicStamp Context CLI - commands, usage examples, token optimization, drift detection, and schema reference.',
}

const pages = [
  { title: 'README / Overview', href: '/docs/logicstamp-context/readme', description: 'High-level overview of LogicStamp Context and what it generates.' },
  { title: 'Commands', href: '/docs/logicstamp-context/commands', description: 'List of available CLI commands and global options.' },
  { title: '`init` Command', href: '/docs/logicstamp-context/init', description: 'Initialize LogicStamp in your project by setting up .gitignore patterns and LLM_CONTEXT.md.' },
  { title: '`context` Command', href: '/docs/logicstamp-context/context', description: 'Details for the primary context generation command.' },
  { title: '`style` Command', href: '/docs/logicstamp-context/style', description: 'Generate context bundles with style metadata included. Extract visual and layout information from React components.' },
  { title: '`compare` Command', href: '/docs/logicstamp-context/compare-command', description: 'Compare all context files to detect drift across your project.' },
  { title: '`validate` Command', href: '/docs/logicstamp-context/validate', description: 'Validate generated context files before sharing or committing.' },
  { title: '`clean` Command', href: '/docs/logicstamp-context/clean', description: 'Remove all generated context artifacts from your project.' },
  { title: 'Usage Guides', href: '/docs/logicstamp-context/usage', description: 'Practical examples and workflows using LogicStamp Context.' },
  { title: 'LLM Context Format', href: '/docs/logicstamp-context/llm-context', description: 'Schema and structure of the generated context for LLMs.' },
  { title: 'Changelog', href: '/docs/logicstamp-context/changelog', description: 'Release notes and version history.' },
  { title: 'GitHub Repository', href: 'https://github.com/LogicStamp/logicstamp-context', description: 'Full source code and canonical documentation.', external: true },
]

export default function LogicStampContextDocsPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                CLI Documentation Hub
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                LogicStamp Context CLI
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Complete documentation for LogicStamp Context CLI - commands, usage examples, token optimization, drift detection, and schema reference.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">8 Commands</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">15+ Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Zero config</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {pages.map((page, index) => {
            const isExternal = (page as any).external
            
            return (
              <AnimatedSection
                key={index}
                direction="up"
                delay={100 + index * 100}
              >
                <Link
                  href={page.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="block bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {page.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                        {page.description}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

