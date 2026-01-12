'use client'

import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import BetaSignup from '@/components/BetaSignup'
import ReadTheDocsButton from '@/components/ui/ReadTheDocsButton'

export default function BetaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero + Signup Section - Combined */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/30 pt-24 pb-32 sm:pt-32 sm:pb-40">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center">
              {/* Fox Mascot */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 animate-bounce bg-transparent">
                  <Image
                    src="/mascot/logicstamp-fox.svg"
                    alt="LogicStamp Fox Mascot"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full drop-shadow-2xl bg-transparent"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-8 sm:mb-10 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Early Access
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-8 sm:mb-10 tracking-tight leading-[1.1]">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Help Us Build This
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </h1>
            </div>
          </AnimatedSection>

          {/* Integrated Signup Form */}
          <AnimatedSection direction="up" delay={100}>
            <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
              <BetaSignup />

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mt-10 sm:mt-12 font-medium text-center">
                LogicStamp is live, and we're looking for early users to help us improve
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-8 sm:mt-10 text-center">
                LogicStamp is currently built and maintained primarily by{' '}
                <a
                  href="https://github.com/AmiteK23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Amit Levi
                </a>
                , with early contributions from the community. I'd love more collaborators - your feedback and ideas directly shape what we build next.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="relative py-20 sm:py-28 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Roadmap
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Here's what we're building next. Your feedback will help us prioritize what matters most.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Recent Achievements */}
            <AnimatedSection direction="up" delay={100}>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 sm:p-10 shadow-xl border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Recent Achievements
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <div>
                    <p className="font-semibold mb-2">v0.3.6 (January 2026)</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Hook parameter detection - Comprehensive support for extracting function signatures from custom React hooks</li>
                      <li>Default depth changed from 1 to 2 for better nested component signature extraction</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">v0.3.5 (January 2026)</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Styled JSX support with full CSS extraction</li>
                      <li>Enhanced inline style extraction</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">v0.3.4 (January 2026)</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Vue.js TypeScript/TSX support - Comprehensive Vue 3 Composition API support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Earlier Releases</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>MCP Server Integration - Available now! <a href="/docs/mcp" className="text-green-600 dark:text-green-400 hover:underline font-semibold">Get started</a></li>
                      <li>Style metadata extraction (Tailwind, SCSS, Material UI, ShadCN, Radix UI, Framer Motion)</li>
                      <li>Security scanning and secret sanitization</li>
                      <li>TOON output format</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* High Priority Bug Fixes */}
            <AnimatedSection direction="up" delay={150}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    High Priority Bug Fixes
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Emit Detection Accuracy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Distinguish internal handlers from public API emits. Currently, all <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">onXxx</code> handlers are treated as emits, even internal ones.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Dynamic Class Parsing
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Resolve variable-based classes within template literals. Currently, only static segments are extracted. Dynamic expressions within <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{'${}'}</code> are not resolved.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Framework Expansion - Near-Term */}
            <AnimatedSection direction="up" delay={200}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Framework Expansion (v0.4.x)
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        JavaScript & JSX Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add support for JavaScript (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.js</code>) and JSX (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.jsx</code>) files in addition to TypeScript. Support JSDoc type annotations for type inference.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Complete Vue.js Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add full support for Vue Single File Components (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.vue</code> files). Parse template, script, and style blocks. Support both Options API and Composition API.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">🟡 Partially Complete</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Watch Mode
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add a watch mode that automatically regenerates context files when source files change. Includes incremental updates, debouncing, and configurable watch patterns.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">Medium Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Medium Priority Improvements */}
            <AnimatedSection direction="up" delay={250}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Medium Priority Improvements
                  </h3>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">CSS-in-JS Support Completeness</span> - Add Chakra UI and Ant Design support
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Enhanced Third-Party Component Info</span> - Include package names, versions, and prop types
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">TypeScript Type Extraction</span> - Capture generics and complex unions/intersections
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Project-Level Insights</span> - Cross-folder relationships and project-wide statistics
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Future Enhancements */}
            <AnimatedSection direction="up" delay={300}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Future Enhancements (v0.5.x+)
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance & Optimization</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600 dark:text-gray-400">
                      <li>Incremental bundle caching - Only regenerate changed bundles</li>
                      <li>Output size optimization - Further reduce token counts while maintaining accuracy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Framework Expansion</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600 dark:text-gray-400">
                      <li>Svelte support - Parse <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.svelte</code> files</li>
                      <li>Python support (experimental) - Expand beyond JavaScript/TypeScript ecosystems</li>
                      <li>Java support (experimental) - Enterprise Java codebases</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Developer Experience</h4>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600 dark:text-gray-400">
                      <li>Integration examples for popular AI assistants</li>
                      <li>Advanced debugging tools and diagnostics</li>
                      <li>Custom profile configuration and overrides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              This roadmap is actively maintained. This is a solo project, so priorities will shift based on what I learn from early users.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              For the complete roadmap with detailed implementation plans, see{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/ROADMAP.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                ROADMAP.md
              </a>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 font-medium">
              Looking for contributors! If you're interested in helping build LogicStamp, check out the{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                contributing guide
              </a>
              {' '}or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Ideal Beta Candidates */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Who Should Join?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We're looking for developers who use AI assistants and want to help us make this better
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Developers Using AI Assistants
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you're already using Cursor, Copilot, or Claude regularly, you probably know the pain of managing context. Help us make it better.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={150}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Teams with React/TypeScript Codebases
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      LogicStamp works best with React and TypeScript right now. If that's your stack, we'd love to see how it works for your team.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-emerald-200 dark:border-emerald-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Open Source Maintainers
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you maintain an open source project, we think LogicStamp could help contributors understand your codebase faster. We'd love to test this theory.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={250}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-pink-200 dark:border-pink-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      People Who Like Trying New Tools
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you enjoy being an early adopter and don't mind the occasional rough edge, we'd love your feedback. We're responsive and actually listen.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Contributors Welcome
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      This is a solo project, and I'm actively looking for contributors! Whether it's bug fixes, new features, or documentation improvements, your contributions are welcome. Check out the{' '}
                      <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                        contributing guide
                      </a>
                      {' '}to get started.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={350}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Developers with Large Codebases
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      If you're working on a large codebase where context management is a real challenge, LogicStamp could help. We're especially interested in feedback from projects with complex architectures or many components.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Want to Help Us Build This?
              </h2>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                We're just getting started. Your feedback will help us figure out what to build next.
              </p>
              <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-8 flex-wrap">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:shadow-xl ring-1 ring-gray-700 dark:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200 whitespace-nowrap px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold"
                >
                  Get Involved
                </a>
                <ReadTheDocsButton href="/docs" size="sm" className="px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base lg:text-lg" />
                <a
                  href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 dark:bg-white/10 text-white shadow-lg hover:shadow-xl ring-1 ring-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 whitespace-nowrap px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold backdrop-blur-sm mt-4 sm:mt-0"
                >
                  Contribute
                </a>
              </div>
              <p className="text-blue-100 text-sm">
                Open source CLI • Free to use • Built with your feedback • Looking for contributors
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}














