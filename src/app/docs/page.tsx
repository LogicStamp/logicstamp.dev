import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'Documentation | LogicStamp',
  description: 'Learn what LogicStamp is and get started with LogicStamp Context from your codebase.',
}

const docSections = [
  {
    title: 'Concepts Overview',
    description: 'Understand LogicStamp Context at a high level before you dive into the CLI.',
    pages: [
      {
        title: 'What is LogicStamp?',
        href: '/docs/what-is-logicstamp',
        description: 'Learn about this open-source CLI, the problems it solves, and how to use it with AI tools.',
      },
    ],
  },
  {
    title: 'Getting Started',
    description: 'Installation & setup for LogicStamp Context CLI.',
    pages: [
      {
        title: 'Installation & Quick Start',
        href: '/docs/getting-started',
        description: 'Install the CLI globally and generate your first context.json in seconds—zero config required.',
      },
    ],
  },
  {
    title: 'LogicStamp Context CLI',
    description: 'Complete documentation for all CLI commands and features.',
    pages: [
      {
        title: 'CLI Docs Hub',
        href: '/docs/logicstamp-context',
        description: 'Commands, usage examples, token optimization, drift detection, and schema reference.',
      },
    ],
  },
  {
    title: 'Open Source & Community',
    description: 'Contribute, report issues, and join the community.',
    pages: [
      {
        title: 'GitHub Repository',
        href: 'https://github.com/LogicStamp/logicstamp-context',
        description: 'View source code, contribute, report issues, and access the full README. MIT licensed.',
        external: true,
      },
    ],
  },
]

export default function DocumentationPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Documentation
              </h1>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
                Beta
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Open-source CLI for generating AI-ready context from React/TypeScript codebases. Zero config, built-in token optimization.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {docSections.map((section, sectionIndex) => (
            <AnimatedSection
              key={sectionIndex}
              direction="up"
              delay={100 + sectionIndex * 100}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {section.description}
                </p>
                <div className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      href={page.href}
                      target={(page as any).external ? '_blank' : undefined}
                      rel={(page as any).external ? 'noopener noreferrer' : undefined}
                      className="block p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {page.description}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
