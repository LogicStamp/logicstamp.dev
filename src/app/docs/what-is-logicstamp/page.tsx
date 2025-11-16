import { Metadata } from 'next'
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
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
              What is LogicStamp?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              LogicStamp is a toolchain for generating{' '}
              <span className="font-semibold">AI-ready context bundles</span> from your real codebase so that LLMs,
              chatbots, and agents can understand your system without you pasting entire files by hand.
            </p>
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
              What LogicStamp consists of
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              In this project, <span className="font-semibold">LogicStamp Context</span> is the CLI that powers this
              workflow. At a high level it provides:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-semibold">Context generation</span> – scan a React/TypeScript (and similar)
                codebase and emit a structured{' '}
                <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">context.json</code> file.
              </li>
              <li>
                <span className="font-semibold">Token optimization</span> – include headers, contracts, and relationships
                instead of full file bodies to save ~65%+ tokens in typical projects.
              </li>
              <li>
                <span className="font-semibold">Dependency graph extraction</span> – show which components import which
                others, so the AI can reason about flows across files.
              </li>
              <li>
                <span className="font-semibold">Drift detection</span> – compare two context files to see what changed
                between commits or deployments.
              </li>
              <li>
                <span className="font-semibold">Validation</span> – ensure a context file is well-formed before sharing
                it with teammates or CI.
              </li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              All of this is exposed through a small set of CLI commands (for example,{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">stamp context</code> and{' '}
              <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm">
                stamp context compare
              </code>
              ), which you can plug into your local workflow or CI pipelines.
            </p>
          </section>
        </AnimatedSection>

        {/* How it fits into your workflow */}
        <AnimatedSection direction="up" delay={250}>
          <section className="mb-10 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              How LogicStamp fits into your workflow
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
              <li>Install the LogicStamp Context CLI in your project.</li>
              <li>Run the appropriate command (for example, <code>stamp context</code>) to generate a fresh context.</li>
              <li>
                Drop that context into your AI tool of choice (chat, agent, or custom RAG stack) instead of copying full
                source files.
              </li>
              <li>
                Optionally, commit the context file and use <code>stamp context compare</code> in CI to detect drift
                between branches or deployments.
              </li>
            </ol>
            <p className="text-gray-600 dark:text-gray-300">
              The result is a repeatable, automatable way to give AI an accurate, up-to-date view of your system that
              scales with your team.
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
      </DocsLayout>
      <Footer />
    </>
  )
}


