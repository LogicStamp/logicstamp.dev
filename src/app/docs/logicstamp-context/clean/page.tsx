import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp context clean` Command | LogicStamp Context Documentation',
  description: 'Remove all generated context artifacts from your project. Safe by default (dry run), requires --all --yes to actually delete files.',
}

export default function CleanCommandPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              <code>stamp context clean</code> Command
            </h1>
            <p className="text-lg text-gray-900 dark:text-white">
              Remove all generated context artifacts from your project. Safe by default (dry run), requires <code>--all --yes</code> to actually delete files.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white text-gray-900 dark:text-white">
          <AnimatedSection direction="up" delay={100}>
            <h2>Syntax</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Syntax',
                  code: 'stamp context clean [path] [options]',
                  copyText: 'stamp context clean [path] [options]'
                }
              ]}
            />
            <p>
              <strong>[path]</strong> (optional) – Directory to clean. Defaults to the current working directory. Paths can be relative (<code>./src</code>) or absolute.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <h2>Behavior</h2>
            <p>
              <strong>Default (dry run):</strong> Shows what would be removed without actually deleting anything. This is safe and allows you to preview the cleanup operation.
            </p>
            <p>
              <strong>With <code>--all --yes</code>:</strong> Actually deletes all context artifacts. Both flags are required to prevent accidental deletions.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <h2>Options</h2>
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>--all</code>
                  </td>
                  <td>Include all context files in the deletion operation</td>
                </tr>
                <tr>
                  <td>
                    <code>--yes</code>
                  </td>
                  <td>Confirm deletion (required with <code>--all</code>)</td>
                </tr>
                <tr>
                  <td>
                    <code>--help</code>, <code>-h</code>
                  </td>
                  <td>Show help message</td>
                </tr>
              </tbody>
            </table>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <h2>Files Removed</h2>
            <p>
              The clean command removes:
            </p>
            <ul>
              <li><strong><code>context_main.json</code></strong> – Main index file</li>
              <li><strong><code>**/context.json</code></strong> – All folder context files (recursively)</li>
              <li><strong><code>.logicstamp/</code></strong> – Cache directory (if present, automatically included)</li>
            </ul>
            <p>
              The command automatically detects and includes the <code>.logicstamp/</code> directory if it exists. You don't need a separate flag for this.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
            <h2>Examples</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Preview (dry run)',
                  code: `# Show what would be removed without deleting
stamp context clean`,
                  copyText: 'stamp context clean'
                },
                {
                  label: 'Actually delete',
                  code: `# Delete all context files
stamp context clean --all --yes

# Clean specific directory
stamp context clean ./src --all --yes`,
                  copyText: `# Delete all context files
stamp context clean --all --yes

# Clean specific directory
stamp context clean ./src --all --yes`
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={600}>
            <h2>Safety Features</h2>
            <ul>
              <li>
                <strong>Dry run by default</strong> – The command shows what would be removed without deleting anything unless both <code>--all</code> and <code>--yes</code> flags are provided
              </li>
              <li>
                <strong>Requires both flags</strong> – Both <code>--all</code> and <code>--yes</code> must be specified to actually delete files, preventing accidental deletions
              </li>
              <li>
                <strong>Ignores build directories</strong> – Automatically ignores <code>node_modules/</code>, <code>dist/</code>, <code>build/</code>, and <code>.next/</code> directories when searching for context files
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={700}>
            <h2>Use Cases</h2>
            <h3>Reset and regenerate</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Reset',
                  code: `# Clean all context files
stamp context clean --all --yes

# Generate fresh context
stamp context`,
                  copyText: `# Clean all context files
stamp context clean --all --yes

# Generate fresh context
stamp context`
                }
              ]}
            />
            <h3>Clean before switching branches</h3>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Branch Switch',
                  code: `# Remove context files that might conflict
stamp context clean --all --yes

# Switch branch and regenerate
git checkout feature-branch
stamp context`,
                  copyText: `# Remove context files that might conflict
stamp context clean --all --yes

# Switch branch and regenerate
git checkout feature-branch
stamp context`
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={800}>
            <h2>Integration with Other Commands</h2>
            <p>
              The clean command works well with other LogicStamp commands:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Workflows',
                  code: `# Clean → Generate → Validate workflow
stamp context clean --all --yes
stamp context
stamp context validate

# Clean → Generate → Compare workflow
stamp context clean --all --yes
stamp context
stamp context compare`,
                  copyText: `# Clean → Generate → Validate workflow
stamp context clean --all --yes
stamp context
stamp context validate

# Clean → Generate → Compare workflow
stamp context clean --all --yes
stamp context
stamp context compare`
                }
              ]}
            />
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

