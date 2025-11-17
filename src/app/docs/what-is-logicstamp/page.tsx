import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'What is LogicStamp? | Documentation',
  description:
    'Learn what LogicStamp is, why it exists, and how it helps you generate AI-ready context from your codebase for chat, agents, and CI workflows.',
}

export default function WhatIsLogicStampPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-10">
            <div className="mb-4 flex items-start gap-2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white">
                What is LogicStamp?
              </h1>
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-600/20">
                Beta
              </span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-semibold">LogicStamp Context</span> is an open-source CLI that generates{' '}
              <span className="font-semibold">AI-ready context bundles</span> from your React/TypeScript codebase.
              No setup, no configuration—just install and run.
            </p>
            <div className="rounded-lg bg-gradient-blue-purple/5 border border-blue-200/50 dark:border-blue-800/50 p-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong className="font-semibold">Open Source & Community Driven:</strong> LogicStamp Context is MIT licensed and actively developed.
                  Contributions, issues, and feedback are welcome at{' '}
                  <a
                    href="https://github.com/LogicStamp/logicstamp-context"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    github.com/LogicStamp/logicstamp-context
                  </a>
                </span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* High-level overview */}
        <AnimatedSection direction="up" delay={100}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              The problem LogicStamp solves
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Today, working with AI on a real project usually means copying full source files, README snippets, and
              screenshots into a chat window. That approach:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Wastes tokens on boilerplate, imports, and low-signal code instead of the contracts that actually
                matter.
              </li>
              <li>
                Gives the AI no global view of your component relationships, dependency graph, or file structure.
              </li>
              <li>
                Depends on stale documentation that drifts away from your real code over time.
              </li>
              <li>
                Is impossible to automate in CI/CD – you cannot diff “whatever the last engineer pasted into ChatGPT”.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              LogicStamp replaces this manual process with a repeatable CLI that scans your codebase and emits a{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">context.json</code> describing
              the structure and contracts of your system in a way that LLMs can consume directly.
            </p>
          </section>
        </AnimatedSection>

        {/* Core idea */}
        <AnimatedSection direction="up" delay={150}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Core idea</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Think of LogicStamp as an <span className="font-semibold">architectural blueprint</span> generator for
              your codebase. Instead of giving an AI every brick and nail (every line of source), you hand it a compact
              blueprint that shows:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Which components, modules, and files exist.</li>
              <li>How they import and depend on one another.</li>
              <li>Public contracts: props, function signatures, types, and interfaces.</li>
              <li>Where key behaviors live, without dumping entire implementations.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              This blueprint is optimized for AI: high-signal, low-noise, easy to stream into a chat, an agent, or a
              RAG pipeline.
            </p>
          </section>
        </AnimatedSection>

        {/* What LogicStamp actually is */}
        <AnimatedSection direction="up" delay={200}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              What LogicStamp Context provides
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The <span className="font-semibold">LogicStamp Context CLI</span> is a lightweight, zero-config tool
              that provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-semibold">Context generation</span> – scan a React/TypeScript codebase
                and emit a structured{' '}
                <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">context.json</code> file
                containing component contracts, logic signatures, and dependency graphs.
              </li>
              <li>
                <span className="font-semibold">Token optimization</span> – built-in token cost analysis for GPT-4o-mini
                and Claude. Save ~65% tokens by including headers and contracts instead of full source code.
              </li>
              <li>
                <span className="font-semibold">Dependency graph extraction</span> – show which components import which
                others, so AI can reason about data flows and relationships across files.
              </li>
              <li>
                <span className="font-semibold">Context drift detection</span> – compare two context files to track changes
                between commits, PRs, or deployments. CI-friendly exit codes included.
              </li>
              <li>
                <span className="font-semibold">Validation</span> – ensure a context file is well-formed and schema-compliant
                before sharing it with teammates or committing to CI.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              All features are exposed through simple CLI commands:{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">stamp context</code>,{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">stamp context compare</code>,
              and{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">stamp context validate</code>.
              Install globally with npm and start generating context in seconds.
            </p>
          </section>
        </AnimatedSection>

        {/* How it fits into your workflow */}
        <AnimatedSection direction="up" delay={250}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How it fits into your workflow
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-5 space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-blue-purple text-white text-sm font-semibold">1</span>
                <p className="text-gray-700 dark:text-gray-300 pt-0.5">
                  Install globally: <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm">npm install -g logicstamp-context</code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-blue-purple text-white text-sm font-semibold">2</span>
                <p className="text-gray-700 dark:text-gray-300 pt-0.5">
                  Generate context: <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm">stamp context</code>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-blue-purple text-white text-sm font-semibold">3</span>
                <p className="text-gray-700 dark:text-gray-300 pt-0.5">
                  Share the generated <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm">context.json</code> with
                  your AI tool (Claude, ChatGPT, or custom agents) instead of pasting full source files.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-sm font-semibold">4</span>
                <p className="text-gray-600 dark:text-gray-400 pt-0.5 italic">
                  Optional: Use <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm">stamp context compare</code> in
                  CI to track context drift between branches.
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Result: a <span className="font-semibold">repeatable, automatable</span> way to give AI an accurate,
              up-to-date understanding of your codebase that scales with your team.
            </p>
          </section>
        </AnimatedSection>

        {/* When to use / not use */}
        <AnimatedSection direction="up" delay={300}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              When LogicStamp is a great fit
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>You regularly ask AI to work on the same codebase (feature work, refactors, debugging).</li>
              <li>Your project is large enough that pasting full files hits token or context limits.</li>
              <li>
                You want teammates and CI pipelines to share the <span className="font-semibold">same</span> view of the
                system when using AI.
              </li>
              <li>You care about reproducibility: you want to know exactly what context the AI saw.</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
              What LogicStamp is not
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>It is not an LLM or chat UI itself; it powers the context you feed into those tools.</li>
              <li>It is not a replacement for good code comments or high-level design docs.</li>
              <li>
                It does not auto-fix your code – instead, it makes AI significantly better at reading and modifying your
                existing codebase.
              </li>
            </ul>
          </section>
        </AnimatedSection>

        {/* Call to action for complete reference */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Need More Details?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
                For complete documentation including all commands, options, troubleshooting guides, and advanced features, check out the comprehensive reference.
              </p>
              <Link
                href="/docs/complete-reference"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                View Complete Reference
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}


