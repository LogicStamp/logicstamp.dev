import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'LLM Context Format | LogicStamp Context Documentation',
  description: 'Guide to the structure of context.json bundles generated for LLM consumption.',
}

export default function LlmContextPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              LogicStamp Context – LLM Guide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Understand the structure of the <code>context.json</code> bundles that LogicStamp Context generates for
              LLM consumption and how to interpret them.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Overview</h2>
              <ul>
                <li>Generates AI-friendly context bundles from React/TypeScript projects without build steps.</li>
                <li>
                  Ships as a global CLI (<code>stamp</code>) with a <code>context</code> subcommand that scans{' '}
                  <code>.ts</code>/<code>.tsx</code>, extracts component contracts, and emits structured JSON.
                </li>
                <li>
                  Optimized for assistants such as Claude or ChatGPT to improve code understanding and guidance.
                </li>
                <li>Requires Node.js ≥ 18 with access to your project&apos;s source tree.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>What <code>context.json</code> Contains</h2>
              <p>Output is an array of LogicStamp bundles. Each bundle represents one entry point plus its graph.</p>
              <ul>
                <li>
                  Top-level fields include <code>position</code>, <code>type</code>, <code>schemaVersion</code>,{' '}
                  <code>entryId</code>, <code>depth</code>, <code>createdAt</code>, <code>bundleHash</code>,{' '}
                  <code>graph</code>, and <code>meta</code>.
                </li>
                <li>
                  <code>graph.nodes</code> contains UIF contracts describing functions, props, events, imports, and
                  semantic/file hashes. Optional <code>codeHeader</code> blocks store contract headers or snippets when
                  requested.
                </li>
                <li>
                  <code>graph.edges</code> lists dependency relationships between nodes (often empty when depth is 1).
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>The <code>meta</code> Section</h2>
              <p>The <code>meta</code> object provides metadata about bundle generation and dependency resolution:</p>
              <ul>
                <li>
                  <code>missing</code>: array of unresolved dependencies, each with <code>name</code>,{' '}
                  <code>reason</code>, and <code>referencedBy</code>. An empty array means complete resolution.
                </li>
                <li>
                  <code>source</code>: generator version string, for example <code>&quot;logicstamp-context@0.1.0&quot;</code>.
                </li>
              </ul>
              <p>When <code>meta.missing</code> is non-empty, treat analysis as partial and surface that to users.</p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>Best Practices for LLM Consumers</h2>
              <ul>
                <li>Check <code>meta.missing</code> before assuming complete component coverage.</li>
                <li>Suggest increasing <code>--depth</code> if many &quot;max depth exceeded&quot; entries appear.</li>
                <li>Flag <code>file not found</code> entries as potential bugs in the codebase.</li>
                <li>Filter bundles by <code>entryId</code> to focus on relevant modules.</li>
                <li>
                  Use <code>version.functions</code> and <code>logicSignature</code> to reason about APIs without loading
                  full source.
                </li>
                <li>
                  For deeper context, rerun the CLI with <code>--include-code full</code> or higher <code>--depth</code>{' '}
                  before querying the assistant.
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


