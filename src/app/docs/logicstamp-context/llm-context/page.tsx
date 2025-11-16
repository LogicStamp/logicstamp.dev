import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'LLM Context Format | LogicStamp Context Documentation',
  description: 'Guide to the structure of context.json bundles generated for LLM consumption.',
}

export default function LlmContextPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                LLM Context Format
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Understand the structure of the <code>context.json</code> bundles that LogicStamp Context generates
                for LLM consumption.
              </p>
            </div>
          </AnimatedSection>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Overview</h2>
              <p>
                LogicStamp Context produces AI-friendly bundles from React/TypeScript projects without requiring build
                steps. The CLI scans <code>.ts</code> and <code>.tsx</code> files, extracts component contracts, and
                emits structured JSON designed for tools like Claude and ChatGPT.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Bundle Structure</h2>
              <p>
                Output is an array of bundles. Each bundle represents a single entry point plus its immediate dependency
                graph.
              </p>
              <ul>
                <li>
                  Top-level fields include <code>position</code>, <code>type</code>, <code>schemaVersion</code>,{' '}
                  <code>entryId</code>, <code>depth</code>, <code>createdAt</code>, <code>bundleHash</code>,{' '}
                  <code>graph</code>, and <code>meta</code>.
                </li>
                <li>
                  <code>graph.nodes</code> contains UIF contracts describing functions, props, events, imports, and
                  hashes. Optional code headers may be present depending on <code>--include-code</code>.
                </li>
                <li>
                  <code>graph.edges</code> lists dependency relationships between nodes (often empty when depth is 1).
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>The <code>meta</code> Section</h2>
              <p>
                The <code>meta</code> object provides metadata about bundle generation and dependency resolution:
              </p>
              <ul>
                <li>
                  <code>missing</code>: array of unresolved dependencies, each with <code>name</code>,{' '}
                  <code>reason</code>, and <code>referencedBy</code>.
                </li>
                <li>
                  <code>source</code>: generator version string, for example <code>&quot;logicstamp-context@0.1.0&quot;</code>.
                </li>
              </ul>
              <p>
                An empty <code>missing</code> array indicates complete resolution; otherwise, consumers should treat the
                context as partial.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>Best Practices for LLM Consumers</h2>
              <ul>
                <li>Inspect <code>meta.missing</code> before assuming full coverage of a codebase.</li>
                <li>Use <code>entryId</code> and contract metadata to focus on relevant modules.</li>
                <li>
                  Increase <code>--depth</code> or switch profiles when more surrounding context is needed for
                  architectural questions.
                </li>
                <li>
                  Consider rerunning with <code>--include-code full</code> for deep debugging sessions that require full
                  source text.
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


