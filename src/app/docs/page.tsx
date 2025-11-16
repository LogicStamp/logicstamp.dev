import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Documentation | LogicStamp Context',
  description: 'Get started with LogicStamp Context - AI-ready context from your codebase',
}

const docSections = [
  {
    title: 'Getting Started',
    description: 'Get up and running with LogicStamp Context',
    pages: [
      { title: 'Installation & Quick Start', href: '/docs/getting-started', description: 'Install LogicStamp Context CLI and generate your first context.json' },
    ]
  },
  {
    title: 'LogicStamp Context CLI',
    description: 'All documentation for the LogicStamp Context CLI bundle in one place',
    pages: [
      { title: 'CLI Docs Hub', href: '/docs/logicstamp-context', description: 'Overview of LogicStamp Context and links to commands, usage, and schema docs' },
    ]
  },
  {
    title: 'More Information',
    description: 'Additional resources and documentation',
    pages: [
      { title: 'GitHub Repository', href: 'https://github.com/logicstamp/logicstamp-context', description: 'View source code, issues, and full documentation on GitHub', external: true },
    ]
  },
]

export default function DocumentationPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Documentation
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Quick start guide and resources
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
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
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
                        <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
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
        </div>
      </div>
      <Footer />
    </>
  )
}
