import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp context validate` Command | LogicStamp Context Documentation',
  description: 'Verify that a generated LogicStamp context file matches the expected schema and structure.',
}

export default function ValidateCommandPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
                <code>stamp context validate</code> Command
              </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Verify that a generated LogicStamp context file matches the expected schema and structure.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Syntax</h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: 'stamp context validate [file]',
                    copyText: 'stamp context validate [file]'
                  }
                ]}
              />
              <p>
                <strong>[file]</strong> – Optional path to the bundle file created by the <code>stamp context</code>{' '}
                command. Defaults to <code>context.json</code> in the current working directory.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>What it checks</h2>
              <ul>
                <li>File exists and parses as valid JSON.</li>
                <li>Top-level value is an array of <code>LogicStampBundle</code> objects.</li>
                <li>Each bundle has required fields like <code>type</code>, <code>schemaVersion</code>, <code>entryId</code>, <code>graph</code>, and <code>meta</code>.</li>
                <li>Contracts stored within nodes are <code>UIFContract</code> with schema version <code>0.3</code>.</li>
                <li>Warnings are emitted when bundle hashes or schema versions diverge from expected values.</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Exit Codes</h2>
              <table>
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>0</code>
                    </td>
                    <td>File is structurally valid (warnings may still be present).</td>
                  </tr>
                  <tr>
                    <td>
                      <code>1</code>
                    </td>
                    <td>Validation failed (schema errors, unreadable file, or invalid JSON).</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>Examples</h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Examples',
                    code: `# Validate the default output file in the current directory
stamp context validate

# Validate a custom bundle file
stamp context validate artifacts/review-context.json`,
                    copyText: `# Validate the default output file in the current directory
stamp context validate

# Validate a custom bundle file
stamp context validate artifacts/review-context.json`
                  }
                ]}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <h2>CI/CD Usage</h2>
              <ul>
                <li>Pair with the <code>context</code> command to block merges when bundles become invalid.</li>
                <li>Combine with <code>npm run</code> scripts or Git hooks for automated checks.</li>
                <li>Use the exit code to fail pipelines and prompt regeneration of context files.</li>
              </ul>
            </AnimatedSection>
          </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


