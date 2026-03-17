import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'Documentation | LogicStamp Context',
  description: 'The Context Compiler for TypeScript. Compile AI-ready context from your codebase. CI-friendly, zero prompts, built-in token optimization.',
}

export default function DocsHomePage() {
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
                Documentation
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Documentation
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                The Context Compiler for TypeScript. Compile AI-ready context from your codebase. CI-friendly, zero prompts, built-in token optimization.
              </p>

              {/* Technical Note */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 dark:border-amber-400 rounded-r-lg">
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-amber-900 dark:text-amber-200">TypeScript-only compilation:</span> LogicStamp Context currently compiles <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">.ts</code> and <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">.tsx</code> files. JavaScript <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">.js</code> and <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">.jsx</code> files are not compiled yet, so JS components will not appear in context bundles.
                </p>
              </div>

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

        {/* Concepts Overview */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-8 sm:mb-12">
            <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                Concepts Overview
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Understand LogicStamp Context at a high level before you dive into the CLI.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/what-is-logicstamp"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    What is LogicStamp?
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Learn about this open-source CLI, the problems it solves, and how to use it with AI tools.
                </p>
              </Link>
              <Link
                href="/docs/guides/uif-contracts"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-blue-500 dark:md:hover:border-blue-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    UIF Contracts
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-blue-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Understand component contracts, props, hooks, and how LogicStamp structures context.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Getting Started */}
        <AnimatedSection direction="up" delay={150}>
          <div className="mb-8 sm:mb-12">
            <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                Getting Started
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Installation & setup for LogicStamp Context CLI and MCP Server.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/getting-started"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-green-500 dark:md:hover:border-green-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    CLI - Installation & Quick Start
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-green-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Install the CLI globally and set up your project with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp init</code>, then generate your first <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">context.json</code>.
                </p>
              </Link>
              <Link
                href="/docs/mcp/getting-started"
                className="group p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-purple-500 dark:md:hover:border-purple-500 transition-colors"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    MCP - Getting Started
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 md:group-hover:text-purple-500 transition-transform md:group-hover:translate-x-1 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Set up the MCP server for native integration with Claude Desktop, Claude Code, and Cursor.
                </p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* LogicStamp Context CLI Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              LogicStamp Context CLI
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              The CLI provides commands for generating, validating, and managing AI-ready context files from your codebase.
            </p>
            <Link
              href="/docs/logicstamp-context/cli"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              CLI Docs Hub
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* MCP Server Section */}
        <AnimatedSection direction="up" delay={250}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              MCP Server
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Native Model Context Protocol (MCP) server enables AI assistants like Claude Desktop and Claude Code to analyze your codebase directly.
            </p>
            <Link
              href="/docs/mcp"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              MCP Overview (Beta)
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Guides Section */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Guides
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Step-by-step guides for common workflows and best practices.
            </p>
            <Link
              href="/docs/guides/best-practices"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Best Practices
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Reference Section */}
        <AnimatedSection direction="up" delay={350}>
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Reference
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Complete documentation for all commands, options, and features.
            </p>
            <Link
              href="/docs/complete-reference"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
            >
              Complete Reference
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>

        {/* Open Source & Community Section */}
        <AnimatedSection direction="up" delay={400}>
          <div className="relative mb-8 sm:mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Open Source & Community
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                LogicStamp Context is open source and community-driven. Contribute, report issues, or get help.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://github.com/LogicStamp/logicstamp-context"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  CLI GitHub Repository
                </a>
                <a
                  href="https://github.com/LogicStamp/logicstamp-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  MCP GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
