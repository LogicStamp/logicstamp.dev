import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'LLM Context Format | LogicStamp Context Documentation',
  description: 'Guide to the structure of folder-organized context files (context.json per folder plus context_main.json index) generated for LLM consumption.',
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
            <p className="text-lg text-gray-900 dark:text-white">
              Understand the structure of the folder-organized context files (multiple <code>context.json</code> files plus <code>context_main.json</code> index) that LogicStamp Context generates for
              LLM consumption and how to interpret them.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white text-gray-900 dark:text-white">
            <AnimatedSection direction="up" delay={100}>
              <h2>Overview</h2>
              <ul>
                <li>Generates AI-friendly context bundles from React/TypeScript projects without build steps.</li>
                <li>
                  Ships as a global CLI (install with <code>npm install -g logicstamp-context</code>, then use <code>stamp context</code> command) that scans{' '}
                  <code>.ts</code>/<code>.tsx</code>, extracts component contracts, and emits structured JSON.
                </li>
                <li>
                  Optimized for assistants such as Claude or ChatGPT to improve code understanding and guidance.
                </li>
                <li>Requires Node.js ≥ 18 with access to your project&apos;s source tree.</li>
              </ul>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                <strong>Note:</strong> &quot;Global CLI&quot; means the tool is installed globally on your system (via <code>npm install -g</code>), making the <code>stamp</code> command available from any directory in your terminal, not just within a specific project folder.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Output Structure</h2>
              <p>
                LogicStamp Context generates <strong>folder-organized, multi-file output</strong>:
              </p>
              <ul>
                <li>
                  <strong>Multiple <code>context.json</code> files</strong> – one per folder containing components. Each file contains an array of LogicStamp bundles (one bundle per entry point/root component).
                </li>
                <li>
                  <strong><code>context_main.json</code> index</strong> – main index file with folder metadata, summary statistics, and references to all folder context files.
                </li>
              </ul>
              <p className="text-gray-900 dark:text-white">
                <strong>Design note:</strong> LogicStamp Context uses per-root bundles (one bundle per entry point) rather than per-component files. This means each bundle contains the root component plus its complete dependency graph—all related components and their relationships in one self-contained unit. This design is optimized for AI consumption: when you need help with a specific page or feature, share that root bundle and the AI has complete context.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={250}>
              <h2>What Each <code>context.json</code> Contains</h2>
              <p>Each folder's <code>context.json</code> is an array of LogicStamp bundles. Each bundle represents one entry point plus its graph.</p>
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
              <h2>The <code>context_main.json</code> Index</h2>
              <p>
                The <code>context_main.json</code> file provides a complete directory index with:
              </p>
              <ul>
                <li>
                  <code>summary</code> – overall statistics (total components, bundles, folders, token estimates)
                </li>
                <li>
                  <code>folders</code> – array of folder entries, each with:
                  <ul>
                    <li><code>path</code> – relative path from project root</li>
                    <li><code>contextFile</code> – path to this folder's context.json</li>
                    <li><code>bundles</code> – number of bundles in this folder</li>
                    <li><code>components</code> – list of component file names</li>
                    <li><code>isRoot</code> – whether this is an application entry point</li>
                    <li><code>tokenEstimate</code> – token count for this folder's context</li>
                  </ul>
                </li>
              </ul>
              <p>
                Use the index to discover which folders have context files and navigate to specific folder contexts.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={350}>
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
                <li>
                  Start with <code>context_main.json</code> to understand the project structure and locate relevant folder contexts.
                </li>
                <li>
                  Load specific folder <code>context.json</code> files based on the area of code you're working with.
                </li>
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


