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
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-32 sm:pt-32 sm:pb-40">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/3 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/3 to-purple-500/3 dark:from-indigo-500/2 dark:to-purple-500/2 rounded-full blur-3xl"></div>
        </div>

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
                🗺️ Roadmap
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
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
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
                  <p className="font-bold mb-2">v0.7.0 (Current) — 2026-03-03</p>
<ul className="list-disc list-inside space-y-1 ml-2">
  <li>
    ⚠️ <strong>Breaking:</strong> <code>stamp context style</code> now defaults to 
    <code>--style-mode lean</code> for smaller bundles. Use 
    <code>--style-mode full</code> for full metadata.
  </li>
  <li>
    <strong>Watch mode improvements:</strong> faster incremental rebuilds and cached style metadata.
  </li>
  <li>
    <strong>Extraction improvements:</strong> refactored prop extraction and expanded AST edge-case handling.
  </li>
  <li>
    <strong>Schema fixes:</strong> lean/full style modes now properly validated.
  </li>
  <li>
    <strong>Security awareness:</strong> CLI warns when security reports are missing.
  </li>
  <li>
    <strong>Testing & reliability:</strong> expanded coverage across watch mode, extraction, and dependency scenarios.
  </li>
  <li>
    <strong>Docs refresh:</strong> LogicStamp positioned as the <em>Context Compiler for TypeScript</em>.
  </li>
</ul>
                  </div>
                  <div>
                  <p className="font-bold mb-2">v0.6.0</p>
<ul className="list-disc list-inside space-y-1 ml-2">
  <li>
    <strong>Runtime schema validation:</strong> contracts now validated with AJV.
  </li>
  <li>
    <strong>Fail-closed loading:</strong> invalid or malformed contracts are rejected.
  </li>
  <li>
    <strong>Security hardening:</strong> path traversal protection and improved error handling.
  </li>
  <li>
    <strong>Dependency updates:</strong> improved TypeScript 5.x support and patched vulnerabilities.
  </li>
  <li>
    ⚠️ <strong>Node.js ≥ 20 required</strong>
  </li>
</ul>
                  </div>
                  <div>
                  <p className="font-bold mb-2">v0.5.0</p>
<ul className="list-disc list-inside space-y-1 ml-2">
  <li>
    <strong>Strict watch mode:</strong> detect breaking contract changes in real time.
  </li>
  <li>
    <strong>Violation reporting:</strong> structured JSON reports and CI-friendly exit codes.
  </li>
  <li>
    <strong>Schema clarity:</strong> improved contract field naming and semantics.
  </li>
  <li>
    <strong>Performance improvements:</strong> faster dependency tracking and extraction.
  </li>
</ul>
                  </div>
                  <div>
                  <p className="font-bold mb-2">v0.4.x</p>
<ul className="list-disc list-inside space-y-1 ml-2">
  <li>Watch mode with incremental rebuilds.</li>
  <li>Backend framework support (Express, NestJS).</li>
  <li>Vue 3 TypeScript support.</li>
  <li>Style metadata extraction across major UI frameworks.</li>
  <li>MCP server integration.</li>
</ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">v0.4.1 (January 2026)</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Watch mode - Automatic context regeneration when source files change. Incremental rebuilds only regenerate affected bundles. Detects and displays contract changes (props, hooks, state, events). Debounces rapid changes. Watches style files when using <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">--include-style</code>. Debug mode shows hash changes. Status files for tooling integration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">v0.4.0 (January 2026)</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Backend framework support - Comprehensive support for Node.js backend frameworks (Express.js, NestJS). Extracts API routes, HTTP methods, route parameters, request/response types, and framework-specific metadata. Automatically detects backend frameworks and skips frontend extraction for backend files. Introduces new <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">node:api</code> contract kind and extensible <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">language:type</code> pattern for future language support</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold mb-2">Earlier Releases</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>MCP Server Integration - Available now! <a href="/docs/mcp" className="text-green-600 dark:text-green-400 hover:underline font-semibold">Get started</a></li>
                      <li>Style metadata extraction (Tailwind, SCSS, Material UI, ShadCN, Radix UI, Framer Motion, Chakra UI, Ant Design)</li>
                      <li>Dynamic Tailwind class parsing (Phase 1) - Enhanced Tailwind CSS extractor to resolve dynamic class expressions</li>
                      <li>Vue.js TypeScript/TSX support - Comprehensive Vue 3 Composition API support</li>
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
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
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
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Emit Detection Accuracy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-green-600 dark:text-green-400 font-semibold">✅ Fixed in v0.3.7</span> - Emit detection now correctly distinguishes between internal handlers and component public API emits. Only handlers that are part of the component&apos;s Props interface/type are included in the emits object.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">✅ Fixed in v0.3.7</span>
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
                        Dynamic Class Parsing (Phase 2)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Resolve advanced variable-based classes within template literals. <span className="text-green-600 dark:text-green-400 font-semibold">Phase 1 complete (v0.3.9)</span> - handles const/let variables, object properties, and conditional expressions (~70-80% of patterns). Phase 2 will handle object lookups with variables, cross-file references, and function calls returning class strings (~15-20% of edge cases). Estimated effort: 8+ hours.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">🟡 Phase 1 Complete, Phase 2 Planned</span>
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
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Framework Expansion
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Backend Framework Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-green-600 dark:text-green-400 font-semibold">✅ Complete in v0.4.0</span> - Comprehensive support for Node.js backend frameworks (Express.js, NestJS). Extracts API routes, HTTP methods, route parameters, request/response types, and framework-specific metadata. Introduces new <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">node:api</code> contract kind.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">✅ Complete (v0.4.0)</span>
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
                        JavaScript & JSX Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add support for JavaScript (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.js</code>) and JSX (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.jsx</code>) files in addition to TypeScript. Extend AST parser to handle JavaScript syntax, support JSDoc type annotations for type inference, and handle JavaScript-specific patterns (CommonJS, ES modules).
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Watch Mode
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-green-600 dark:text-green-400 font-semibold">✅ Complete (v0.4.1)</span> - Automatic context regeneration when source files change. Incremental rebuilds only regenerate affected bundles. Change detection shows what changed (props, hooks, state, events, components, functions). Debouncing (500ms) batches rapid changes. Status files for tooling integration. Strict watch mode available for breaking change detection.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">✅ Complete (v0.4.1)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Complete Vue.js Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add full support for Vue Single File Components (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.vue</code> files). Parse template, script, and style blocks. Extract template syntax (directives, bindings, slots), script setup and composition API usage, and scoped styles/CSS modules. Support both Options API and Composition API.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">🟡 Partially Complete</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* MCP Server Enhancements */}
            <AnimatedSection direction="up" delay={250}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    MCP Server Enhancements
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Semantic Component Search
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add semantic search across component bundles. Search by component descriptions, prop names, functionality, or metadata rather than requiring exact file/component names.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Git Baseline for Compare
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add git-based baseline support for context comparison, enabling meaningful drift detection against known reference points. Supports <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">--baseline git:HEAD</code>, <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">git:main</code>, or any git ref. Uses git worktree for clean isolation. Enables CI integration and <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">--fail-on-breaking</code> flag for contract drift detection.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">High Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Configuration File Support
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Support <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">mcp-config.json</code> to set default values for profile, mode, paths, and other settings. Reduces parameter repetition and enables project-specific defaults.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                        <span className="ml-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">Medium Priority</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Progress/Status Reporting
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add progress reporting for long-running operations like <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">refresh_snapshot</code> and <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">compare_modes</code>. Use MCP progress notifications to provide real-time updates.
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
            <AnimatedSection direction="up" delay={300}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Medium Priority Improvements
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        CSS-in-JS Support Completeness
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-green-600 dark:text-green-400 font-semibold">✅ Complete in v0.5.1</span> - All major CSS-in-JS libraries now supported: styled-components, Emotion, Material UI, ShadCN/UI, Radix UI, Framer Motion, Styled JSX, Chakra UI, and Ant Design.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">✅ Complete (v0.5.1)</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Enhanced Third-Party Component Info (Phase 2)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        <span className="text-green-600 dark:text-green-400 font-semibold">Phase 1 complete (v0.3.8)</span> - Package names and versions now included. Phase 2 will extract prop types from TypeScript declaration files (<code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.d.ts</code>) in <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">node_modules</code>, handle different package structures and re-exports, and support generic types and type aliases.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">🟡 Phase 1 Complete, Phase 2 Pending</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-yellow-600 dark:text-yellow-400 font-bold">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        TypeScript Type Extraction
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Currently supports basic types, literal unions, and function types. Missing: generics (e.g., <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">ListProps&lt;T&gt;</code>), complex unions/intersections, and generic type parameters.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-semibold">🟡 Partially Complete</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-bold">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Project-Level Insights
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Add cross-folder relationships and project-wide statistics to <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">context_main.json</code>. Planned: cross-folder dependency analysis, project-wide component counts, aggregate style metadata statistics, and architecture pattern detection.
                      </p>
                      <div className="mt-2">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-semibold">🔴 Not Started</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Future Enhancements */}
            <AnimatedSection direction="up" delay={350}>
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    Future Enhancements
                  </h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Comparison & Drift Detection</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Git Baseline for Compare</span> - Add git-based baseline support using <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">--baseline git:&lt;ref&gt;</code> syntax. Enables CI/CD integration and <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">--fail-on-breaking</code> flag for contract drift detection. Uses git worktree for clean isolation.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Schema & Architecture</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Conditional Schema by Language</span> - <span className="text-purple-600 dark:text-purple-400">Planned for v0.8.x</span> - Make the UIFContract schema conditional based on the <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">kind</code> field. Use TypeScript discriminated unions and JSON Schema conditional validation to ensure language-specific fields are only present when relevant. Prerequisite for Python/Java support in v0.9.x.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Performance & Optimization</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Incremental bundle caching</span> - <span className="text-green-600 dark:text-green-400">Complete (v0.4.1)</span> - Only regenerates changed bundles in watch mode
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Output size optimization</span> - Further reduce token counts while maintaining accuracy
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Style metadata verbosity reduction</span> - Reduce style extraction verbosity for nested components (depth &gt;= 1) when using <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">depth=2</code>. Default behavior reduces Tailwind classes, component library lists, and removes SCSS/CSS details for nested components while preserving full extraction for entry components. Estimated ~30-40% reduction in style metadata tokens.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Framework Expansion</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Svelte Support</span> - Parse <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">.svelte</code> files. Extract props, reactive statements, stores, template syntax, bindings, scoped styles, and SvelteKit routing/layouts.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Python Support</span> - <span className="text-purple-600 dark:text-purple-400">Planned for v0.9.x</span> - Parse Python AST, extract function signatures, classes, modules, type hints, and docstrings. Support FastAPI, Django, Flask. Generate Python-specific contracts with <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">python:function</code> or <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">python:class</code> kind. Prerequisites: Conditional schema (v0.8.x) and JS/JSX support.
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Java Support</span> - <span className="text-purple-600 dark:text-purple-400">Planned for v0.9.x</span> - Parse Java source files, extract class definitions, methods, interfaces, annotations, and Javadoc. Support Spring Boot and other popular frameworks. Generate Java-specific contracts with <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">java:class</code> kind. Prerequisites: Conditional schema (v0.8.x) and JS/JSX support.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Configuration & Extensibility</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Custom profile configuration and overrides</span> - User-defined profiles beyond preset options
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Additional output formats</span> - More format options for different AI workflow patterns
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700"></div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-lg">Developer Experience</h4>
                    <div className="space-y-4 ml-2">
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Integration examples</span> - Examples for popular AI assistants (Cursor, Claude Desktop, GitHub Copilot Chat)
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-red-600 dark:text-red-400 font-bold">•</span>
                        <div className="text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Advanced debugging tools</span> - Better diagnostics and troubleshooting capabilities
                        </div>
                      </div>
                    </div>
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
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/docs/context/ROADMAP.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                Context ROADMAP.md
              </a>
              {' '}and{' '}
              <a href="https://github.com/LogicStamp/logicstamp-mcp/blob/main/docs/mcp/ROADMAP.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                MCP ROADMAP.md
              </a>
              . For known limitations with code evidence, see{' '}
              <a href="/docs/logicstamp-context/known-limitations" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Known Limitations
              </a>
              .
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 font-medium">
              Looking for contributors! If you're interested in helping build LogicStamp, check out the{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CONTRIBUTING.md" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                contributing guide
              </a>
              {' '}or reach out directly.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mt-4 font-medium">
              Repositories:{' '}
              <a href="https://github.com/LogicStamp/logicstamp-context" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                CLI
              </a>
              {' • '}
              <a href="https://github.com/LogicStamp/logicstamp-mcp" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                MCP Server
              </a>
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














