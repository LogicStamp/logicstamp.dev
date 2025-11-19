import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'LogicStamp Context CLI | Documentation',
  description: 'Overview of the LogicStamp Context CLI and links to detailed docs pages.',
}

const pages = [
  { title: 'README / Overview', href: '/docs/logicstamp-context/readme', description: 'High-level overview of LogicStamp Context and what it generates.' },
  { title: 'Commands', href: '/docs/logicstamp-context/commands', description: 'List of available CLI commands and global options.' },
  { title: '`init` Command', href: '/docs/logicstamp-context/init', description: 'Initialize LogicStamp in your project by setting up .gitignore patterns and LLM_CONTEXT.md.' },
  { title: '`context` Command', href: '/docs/logicstamp-context/context', description: 'Details for the primary context generation command.' },
  { title: '`compare` Command', href: '/docs/logicstamp-context/compare-command', description: 'Compare all context files to detect drift across your project.' },
  { title: '`validate` Command', href: '/docs/logicstamp-context/validate', description: 'Validate generated context files before sharing or committing.' },
  { title: '`clean` Command', href: '/docs/logicstamp-context/clean', description: 'Remove all generated context artifacts from your project.' },
  { title: 'Usage Guides', href: '/docs/logicstamp-context/usage', description: 'Practical examples and workflows using LogicStamp Context.' },
  { title: 'LLM Context Format', href: '/docs/logicstamp-context/llm-context', description: 'Schema and structure of the generated context for LLMs.' },
  { title: 'Changelog', href: '/docs/logicstamp-context/changelog', description: 'Release notes and version history.' },
  { title: 'GitHub Repository', href: 'https://github.com/logicstamp/logicstamp-context', description: 'Full source code and canonical documentation.', external: true },
]

export default function LogicStampContextDocsPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              LogicStamp Context CLI
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Centralized documentation for the LogicStamp Context CLI used to generate AI-ready context
              from your React/TypeScript codebase.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                target={(page as any).external ? '_blank' : undefined}
                rel={(page as any).external ? 'noopener noreferrer' : undefined}
                className="block bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-sm transition-colors"
              >
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {page.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}


