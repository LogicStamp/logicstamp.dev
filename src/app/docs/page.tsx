import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

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
    description: 'Installation & setup for LogicStamp Context CLI and MCP Server.',
    pages: [
      {
        title: 'CLI – Installation & Quick Start',
        href: '/docs/getting-started',
        description: 'Install the CLI globally and set up your project with stamp init, then generate your first context.json—CI-friendly and zero prompts.',
      },
      {
        title: 'MCP – Installation & Quick Start',
        href: '/docs/mcp/getting-started',
        description: 'Install and configure the LogicStamp MCP server to use LogicStamp Context with AI assistants like Claude Desktop.',
      },
    ],
  },
  {
    title: 'LogicStamp Context CLI',
    description: 'Complete documentation for all CLI commands and features.',
    pages: [
      {
        title: 'CLI Docs Hub',
        href: '/docs/cli',
        description: 'Commands, usage examples, token optimization, drift detection, and schema reference. CI-friendly: never prompts, respects preferences from stamp init.',
      },
    ],
  },
  {
    title: 'MCP Server',
    description: 'Use LogicStamp Context as an MCP server for AI assistants.',
    pages: [
      {
        title: 'MCP Overview (Beta)',
        href: '/docs/mcp',
        description: 'Learn about the LogicStamp MCP server, how to install and configure it, and use it with AI assistants like Claude Desktop.',
      },
    ],
  },
  {
    title: 'Guides',
    description: 'Scenario-based walkthroughs and opinionated playbooks.',
    pages: [
      {
        title: 'Guides',
        href: '/docs/guides',
        description: 'Browse all LogicStamp guides, including usage walkthroughs, context format, and best practices.',
      },
    ],
  },
  {
    title: 'Reference',
    description: 'Complete reference documentation and advanced topics.',
    pages: [
      {
        title: 'Complete Reference',
        href: '/docs/complete-reference',
        description:
          'Comprehensive documentation including all commands, options, features, examples, and troubleshooting guides.',
      },
    ],
  },
  {
    title: 'Open Source & Community',
    description: 'Contribute, report issues, and join the community.',
    pages: [
      {
        title: 'CLI GitHub Repository',
        href: 'https://github.com/LogicStamp/logicstamp-context',
        description: 'View source code, contribute, report issues, and access the full README. MIT licensed.',
        external: true,
      },
      {
        title: 'MCP GitHub Repository',
        href: 'https://github.com/LogicStamp/logicstamp-mcp',
        description: 'View MCP server source code, contribute, report issues, and access MCP-specific documentation. MIT licensed.',
        external: true,
      },
    ],
  },
]

export default function DocumentationPage() {
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
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Documentation & Beta
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Documentation
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Open-source CLI for generating AI-ready context from React/TypeScript codebases. CI-friendly, zero prompts, built-in token optimization.
              </p>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-3xl">
                <span className="font-semibold">TypeScript-only analysis:</span> LogicStamp Context currently analyzes{' '}
                <code>.ts</code> and <code>.tsx</code> files. JavaScript <code>.js</code> and <code>.jsx</code> files
                are not analyzed yet, so JS components will not appear in generated context bundles.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">One-time setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">up to 70% token reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">AI-optimized output</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {docSections.map((section, sectionIndex) => (
            <AnimatedSection
              key={sectionIndex}
              direction="up"
              delay={100 + sectionIndex * 100}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                  {section.description}
                </p>
                <div className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      href={page.href}
                      target={(page as any).external ? '_blank' : undefined}
                      rel={(page as any).external ? 'noopener noreferrer' : undefined}
                      className="block p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                            {page.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
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
