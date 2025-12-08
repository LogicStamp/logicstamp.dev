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
                Just Launched
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-8 sm:mb-10 tracking-tight leading-[1.1]">
                Just Launched<br />
                <span className="relative inline-block mt-2">
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
                As one of our first users, your feedback will directly shape what we build next. We're a small team, so you'll get real responses from the people building this.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Coming in Beta */}
      <section className="relative py-20 sm:py-28 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What We're Working On
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Here's what we're building next. Your feedback will help us prioritize what matters most.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto">
            <AnimatedSection direction="up" delay={100}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        MCP Server Integration
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        We're building a Model Context Protocol (MCP) server that will enable AI assistants like Claude Desktop to safely analyze and understand React/TypeScript codebases through LogicStamp Context. This will provide native integration with Claude Code and other MCP-compatible tools. <a href="/docs/mcp" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">Learn more about our MCP server</a>.
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-indigo-600 dark:text-indigo-400 font-semibold">
                        <span>Status:</span>
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-center">Coming soon</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Better Context Compression
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        We're experimenting with smarter ways to reduce bundle sizes while keeping the important stuff. Early tests show promising results, but we need real codebases to validate this works well in practice.
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        <span>Status:</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-center">In development</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Architecture Change Tracking
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        We want to help you see how your codebase structure changes over time. This is still early, but we think comparing context bundles across versions could be really useful for understanding architectural drift.
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-purple-600 dark:text-purple-400 font-semibold">
                        <span>Status:</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full text-center">Exploring ideas</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        More AI Platform Integrations
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        Right now you can use LogicStamp with any AI that accepts context. We're looking into making it easier to share context bundles directly with Cursor, GitHub Copilot, and others. Tell us which ones matter most to you.
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                        <span>Status:</span>
                        <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-center">Planning phase</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-6 group">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Performance Improvements
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                        We know it can be slow on bigger codebases. We're working on optimizations, but honestly, we need to see how it performs on real projects first. If you have a large codebase, we'd especially love your feedback.
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-amber-600 dark:text-amber-400 font-semibold">
                        <span>Status:</span>
                        <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 rounded-full text-center">Actively improving</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center italic">
                  This is our rough roadmap. We're a small team, so priorities will shift based on what we learn from early users.
                </p>
              </div>
            </AnimatedSection>
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
              <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-12 flex-wrap">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('input[type="email"]')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-800 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:shadow-xl ring-1 ring-gray-700 dark:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-all duration-200 whitespace-nowrap px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold"
                >
                  Join Beta Now
                </a>
                <ReadTheDocsButton href="/docs" size="sm" className="px-5 py-3 text-sm sm:px-8 sm:py-4 sm:text-base lg:text-lg" />
              </div>
              <p className="text-blue-100 text-sm">
                100% open source • Free forever • Built with your feedback
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}














