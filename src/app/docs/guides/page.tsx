import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'Guides | LogicStamp Documentation',
  description: 'Step-by-step guides for using LogicStamp Context effectively with your codebase and LLM workflows.',
}

const guidePages = [
  {
    title: 'Usage Guides',
    href: '/docs/logicstamp-context/usage',
    description: 'End-to-end walkthroughs for generating context, curating bundles, and using them with LLMs.',
  },
  {
    title: 'Watch Mode',
    href: '/docs/logicstamp-context/watch-mode',
    description: 'Keep context files fresh automatically with incremental rebuilds. Perfect for active development and MCP workflows.',
  },
  {
    title: 'LLM Context Format',
    href: '/docs/logicstamp-context/llm-context',
    description: 'Deep dive into the structure of generated context, how to consume it, and how to customize prompts around it.',
  },
  {
    title: 'Best Practices',
    href: '/docs/best-practices',
    description: 'Recommended patterns for organizing projects, pruning noise, and getting the most out of LogicStamp with AI tools.',
  },
  {
    title: 'Hashes',
    href: '/docs/hashes',
    description: 'Understand fileHash, semanticHash, and bundleHash and how LogicStamp tracks changes across layers.',
  },
]

export default function GuidesHomePage() {
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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Guides Hub
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Guides & Playbooks
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Practical, scenario-based guides for installing LogicStamp, generating AI-ready context, and integrating it
                into your day-to-day workflow with LLMs.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Step-by-step</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Copy-paste ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Real-world examples</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Getting Started Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="group relative flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      Getting Started
                    </h3>
                    <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Install the CLI globally and set up your project with <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">stamp init</code>, then generate your first <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded font-mono text-xs">context.json</code>—CI-friendly and zero prompts.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Guides Section */}
        <AnimatedSection direction="up" delay={150}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Core Guides
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Essential guides for using LogicStamp Context effectively in your workflow.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {guidePages.map((page, index) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {page.title}
                    </h3>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {page.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Reference Links Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Reference Documentation
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Need detailed command reference or complete API documentation?
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Link
                href="/docs/cli"
                className="group p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    CLI Documentation Hub
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Complete documentation for all CLI commands, options, and usage examples.
                </p>
              </Link>

              <Link
                href="/docs/complete-reference"
                className="group p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    Complete Reference
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Comprehensive reference for all commands, options, formats, and advanced features.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
















