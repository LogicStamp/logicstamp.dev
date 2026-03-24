import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { docsBodyTextClass, docsMutedTextClass } from '@/lib/docs/text-styles'

export const metadata: Metadata = {
  title: 'What is LogicStamp? | Documentation',
  description:
    'LogicStamp Context compiles deterministic architectural contracts, explicit component interfaces, and dependency graphs for AI workflows from TypeScript codebases.',
}

export default function WhatIsLogicStampPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              What is LogicStamp?
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${docsBodyTextClass} mb-8 max-w-3xl leading-relaxed`}>
              LogicStamp Context is a context compiler that compiles deterministic architectural contracts, explicit component interfaces, and dependency graphs for AI workflows from your TypeScript codebase.
              Zero configuration. Install and run.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">

          {/* The Problem Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                Working with AI on real projects usually means copying full source files into chat. This wastes tokens, lacks context about relationships, and can't be automated.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Solution:</span> LogicStamp compiles your codebase into{' '}
                  <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context.json</code> files with component contracts, dependencies, and relationships—optimized for AI workflows.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Idea Section */}
          <AnimatedSection direction="up" delay={150}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                LogicStamp Context is <span className="font-semibold text-gray-900 dark:text-white">The Context Compiler for TypeScript</span> that compiles deterministic architectural contracts from your source code using the TypeScript compiler API (via ts-morph). It produces an <span className="font-semibold text-gray-900 dark:text-white">architectural blueprint</span> of your codebase:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                <li>• <strong>Component contracts</strong> - Props, hooks, and interfaces</li>
                <li>• <strong>Dependency graph</strong> - How components relate to each other</li>
                <li>• <strong>Type signatures</strong> - Function parameters and return types</li>
                <li>• <strong>Structure</strong> - File organization and relationships</li>
              </ul>
              <p className={`text-sm ${docsMutedTextClass}`}>
                High-signal, low-noise output optimized for AI workflows.
              </p>
            </div>
          </AnimatedSection>

          {/* What LogicStamp Generates Section */}
          <AnimatedSection direction="up" delay={175}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">What LogicStamp Compiles</h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                LogicStamp compiles <strong>deterministic contracts</strong> that describe a component's API without implementation noise:
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What is a Component Contract?</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  A component contract is a structured description of a component's API—everything needed to understand and use it without reading the implementation:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Props</strong> - Type information, default values, and required vs optional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Hooks</strong> - React hooks used (useState, useEffect, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>State</strong> - Component state structure and types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Events</strong> - Callbacks and event handlers</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What is Architectural Context?</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Architectural context captures the <strong>relationships and structure</strong> of your codebase:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Dependency graphs</strong> - Which components import and use which other components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>File organization</strong> - How your project structure maps to component relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span><strong>Framework detection</strong> - React, Next.js, Vue, Express, NestJS patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Key insight:</span> AI assistants don't need your implementation—they need your <em>interfaces</em>. LogicStamp Context extracts what matters and discards the noise, giving AI explicit architectural context instead of requiring it to infer from raw source code.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                <li>• <strong>Context compilation</strong> - Component contracts, dependencies, and type signatures</li>
                <li>• <strong>Style metadata</strong> - Extract Tailwind, SCSS, Material UI patterns (optional)</li>
                <li>• <strong>Token optimization</strong> - Save up to ~70% tokens vs full source</li>
                <li>• <strong>Watch mode</strong> - Auto-regenerate as you code</li>
                <li>• <strong>MCP integration</strong> - Native support for Claude Desktop, Claude Code, Cursor</li>
                <li>• <strong>CI-friendly</strong> - No prompts, deterministic output</li>
              </ul>
              <p className={`text-sm ${docsMutedTextClass}`}>
                <Link href="/docs/logicstamp-context/commands" className="text-blue-600 dark:text-blue-400 hover:underline">
                  See all CLI commands →
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* Workflow Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h2>
              <ol className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 dark:text-white">1.</span>
                  <span>Install: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">npm install -g logicstamp-context</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 dark:text-white">2.</span>
                  <span>Generate: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp context</code></span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-gray-900 dark:text-white">3.</span>
                  <span>Use context files with AI assistants or install MCP for native integration</span>
                </li>
              </ol>
              <p className={`text-sm ${docsMutedTextClass}`}>
                <Link href="/docs/getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Get started guide →
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* When to use */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">When to Use LogicStamp</h2>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
                <li>• You regularly work with AI on the same codebase</li>
                <li>• Your project is large enough that pasting files hits token limits</li>
                <li>• You want reproducible, automatable context for CI/CD</li>
                <li>• You need teammates to share the same view of the system</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <ReadyToGetStartedCard
            title="Ready to Get Started?"
            description="Install the CLI and generate your first context bundle."
            primaryAction={{
              href: '/docs/getting-started',
              label: 'Installation & Quick Start',
            }}
            secondaryAction={{
              href: '/docs/reference/complete',
              label: 'Complete Reference',
            }}
            delay={400}
            variant="blue"
          />
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
















