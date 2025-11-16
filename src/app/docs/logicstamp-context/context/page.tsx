import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: '`context` Command | LogicStamp Context Documentation',
  description: 'Generate AI-ready bundles that describe your React/TypeScript codebase using stamp context.',
}

export default function ContextCommandPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              <code>stamp context</code> Command
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Generate AI-ready bundles that describe your React/TypeScript codebase.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Syntax</h2>
              <pre>
                <code>stamp context [path] [options]</code>
              </pre>
              <p>
                <strong>[path]</strong> (optional) – Directory to scan. Defaults to the current working directory. Paths
                can be relative (for example, <code>./src</code>) or absolute.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Behavior</h2>
              <p>
                Each run of <code>stamp context</code> performs a full scan, generates one or more bundles, and then{' '}
                <strong>automatically validates</strong> the generated context before writing it to disk. The CLI output
                shows both the generation and validation steps so you can see when schema issues are caught.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={250}>
              <h2>Options</h2>
              <table>
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>--depth &lt;n&gt;</code>
                    </td>
                    <td>
                      <code>1</code>
                    </td>
                    <td>Dependency traversal depth (<code>0</code> = entry only, <code>1</code> = direct deps, etc.).</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--include-code &lt;mode&gt;</code>
                    </td>
                    <td>
                      <code>header</code>
                    </td>
                    <td>Include <code>none</code>, <code>header</code>, or <code>full</code> source snippets.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--format &lt;fmt&gt;</code>
                    </td>
                    <td>
                      <code>json</code>
                    </td>
                    <td>Output format: <code>json</code>, <code>pretty</code>, or <code>ndjson</code>.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--out &lt;file&gt;</code>
                    </td>
                    <td>
                      <code>context.json</code>
                    </td>
                    <td>Output file path.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--max-nodes &lt;n&gt;</code>
                    </td>
                    <td>
                      <code>100</code>
                    </td>
                    <td>Maximum graph nodes per bundle.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--profile &lt;name&gt;</code>
                    </td>
                    <td>
                      <code>llm-chat</code>
                    </td>
                    <td>Preset configuration (<code>llm-chat</code>, <code>llm-safe</code>, <code>ci-strict</code>).</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--strict</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Fail when dependencies are missing.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--predict-behavior</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Experimental behavioral prediction annotations.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--dry-run</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Skip writing the output; display summary only.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>--stats</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                    <td>Emit single-line JSON stats (ideal for CI).</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Example Workflows</h2>
              <pre>
                <code>{`# Scan entire repo and write context.json (defaults)
stamp context

# Generate context for ./src with pretty-printed output
stamp context ./src --format pretty

# Include full source for deep AI reviews (limit nodes for safety)
stamp context --include-code full --max-nodes 20

# Gather metrics without writing a file (e.g., CI dashboards)
stamp context --stats >> .ci/context-stats.jsonl

# Dry run to confirm counts before overwriting an existing file
stamp context ./packages/ui --dry-run`}</code>
              </pre>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>Understanding <code>meta.missing</code></h2>
              <p>
                The generated bundles include a <code>meta.missing</code> array that captures unresolved dependencies.
                An empty array (<code>[]</code>) confirms all dependencies were successfully resolved.
              </p>
              <ul>
                <li>
                  <strong>Expected</strong>: external packages like React or other npm modules (safe to ignore).
                </li>
                <li>
                  <strong>Actionable</strong>: paths with reason <code>file not found</code> or{' '}
                  <code>outside scan path</code> typically require code or configuration changes.
                </li>
              </ul>
              <p>
                In CI you can enable <code>--strict-missing</code> to treat unexpected missing dependencies as errors.
              </p>
            </AnimatedSection>
          </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


