import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'Guides | LogicStamp Documentation',
  description: 'Step-by-step guides for using LogicStamp Context effectively with your codebase and LLM workflows.',
}

const guidePages = [
  {
    title: 'Monorepo Support',
    href: '/docs/guides/monorepo',
    description: 'Work with multi-package repositories where frontend, backend, and shared packages live together.',
  },
  {
    title: 'Usage Guides',
    href: '/docs/guides/usage',
    description: 'End-to-end walkthroughs for generating context, curating bundles, and using them with LLMs.',
  },
  {
    title: 'Watch Mode',
    href: '/docs/logicstamp-context/watch-mode',
    description: 'Keep context files fresh automatically with incremental rebuilds. Perfect for active development and MCP workflows.',
  },
  {
    title: 'LLM Context Format',
    href: '/docs/guides/llm-context',
    description: 'Deep dive into the structure of generated context, how to consume it, and how to customize prompts around it.',
  },
  {
    title: 'Best Practices',
    href: '/docs/guides/best-practices',
    description: 'Recommended patterns for organizing projects, pruning noise, and getting the most out of LogicStamp with AI tools.',
  },
  {
    title: 'Hashes',
    href: '/docs/reference/hashes',
    description: 'Understand fileHash, semanticHash, and bundleHash and how LogicStamp tracks changes across layers.',
  },
]

export default function GuidesHomePage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              Guides & Playbooks
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
              Practical, scenario-based guides for installing LogicStamp, generating AI-ready context, and integrating it
              into your day-to-day workflow with LLMs.
            </p>
          </div>
        </AnimatedSection>

        {/* Getting Started Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Quick Start
                </h2>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                New to LogicStamp? Start here for installation and your first context generation.
              </p>

              <Link
                href="/docs/getting-started"
                className="group relative flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800 md:hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      Getting Started
                    </h3>
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Install the CLI globally and set up your project with <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">stamp init</code>, then generate your first <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded font-mono text-xs">context.json</code>—CI-friendly and zero prompts.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Guides Section */}
        <AnimatedSection direction="up" delay={150}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Guides
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Essential guides for using LogicStamp Context effectively in your workflow.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {guidePages.map((page, index) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {page.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Reference Links Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Reference Documentation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need detailed command docs or schema and contract reference?
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/logicstamp-context/cli"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    CLI Documentation Hub
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Complete documentation for all CLI commands, options, and usage examples.
                </p>
              </Link>

              <Link
                href="/docs/reference"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Reference
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Schema, UIF contracts, hashes, stampignore, and known limitations.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Initialize your project and generate your first context bundle."
          primaryAction={{
            href: '/docs/getting-started',
            label: 'Getting Started',
          }}
          secondaryAction={{
            href: '/docs/logicstamp-context/init',
            label: 'Initialize Project',
          }}
          delay={650}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
















