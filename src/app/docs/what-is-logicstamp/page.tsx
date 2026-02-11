import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'What is LogicStamp? | Documentation',
  description:
    'Learn what LogicStamp is, why it exists, and how it helps you generate AI-ready context from your codebase for chat, agents, and CI workflows.',
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
              LogicStamp Context is an open-source CLI that generates{' '}
              <span className="font-semibold text-gray-900 dark:text-white">AI-ready context bundles</span> from your TypeScript codebase.
              No setup, no configuration - just install and run.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">

          {/* The Problem Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">The Problem</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                Working with AI on real projects usually means copying full source files into chat. This wastes tokens, lacks context about relationships, and can't be automated.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Solution:</span> LogicStamp scans your codebase and generates{' '}
                  <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context.json</code> files with component contracts, dependencies, and relationships—optimized for AI consumption.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Core Idea Section */}
          <AnimatedSection direction="up" delay={150}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                LogicStamp generates an <span className="font-semibold text-gray-900 dark:text-white">architectural blueprint</span> of your codebase:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                <li>• <strong>Component contracts</strong> - Props, hooks, and interfaces</li>
                <li>• <strong>Dependency graph</strong> - How components relate to each other</li>
                <li>• <strong>Type signatures</strong> - Function parameters and return types</li>
                <li>• <strong>Structure</strong> - File organization and relationships</li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                High-signal, low-noise output optimized for AI consumption.
              </p>
            </div>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
              <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                <li>• <strong>Context generation</strong> - Component contracts, dependencies, and type signatures</li>
                <li>• <strong>Style metadata</strong> - Extract Tailwind, SCSS, Material UI patterns (optional)</li>
                <li>• <strong>Token optimization</strong> - Save up to ~70% tokens vs full source</li>
                <li>• <strong>Watch mode</strong> - Auto-regenerate as you code</li>
                <li>• <strong>MCP integration</strong> - Native support for Claude Desktop, Claude Code, Cursor</li>
                <li>• <strong>CI-friendly</strong> - No prompts, deterministic output</li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-500">
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
              <ol className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
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
              <p className="text-sm text-gray-500 dark:text-gray-500">
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
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
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
              href: '/docs/complete-reference',
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
















