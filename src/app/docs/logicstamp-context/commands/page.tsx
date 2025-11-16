import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'LogicStamp Context Commands | Documentation',
  description: 'Overview of the LogicStamp Context stamp context subcommands and how they interact.',
}

export default function LogicStampCommandsPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
                Commands
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                LogicStamp Context ships as a single CLI entry point, <code>stamp</code>, with <code>context</code>{' '}
                subcommands.
              </p>
            </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Available Commands</h2>
              <table>
                <thead>
                  <tr>
                    <th>Command</th>
                    <th>Summary</th>
                    <th>When to use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>stamp context [path] [options]</code>
                    </td>
                    <td>Generates AI-ready context bundles for your project.</td>
                    <td>Produce fresh context for AI workflows, documentation, or review.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context validate [file]</code>
                    </td>
                    <td>Validates a previously generated bundle file.</td>
                    <td>Gate CI pipelines or manual QA before sharing context files.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context compare [options]</code>
                    </td>
                    <td>Compares context files to detect drift and token cost changes.</td>
                    <td>CI drift detection, Jest-style approval workflows, or manual inspections.</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Command Interactions</h2>
              <ul>
                <li>
                  Run <code>stamp context</code> first to generate <code>context.json</code> or a custom-named output.
                </li>
                <li>
                  Use <code>stamp context validate</code> on that output to confirm it matches the expected schema; the
                  exit code is CI-friendly.
                </li>
                <li>
                  Use <code>stamp context compare</code> to detect drift between existing and freshly generated context,
                  or between two explicit files.
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Quick Reference</h2>
              <pre>
                <code>{`# Generate context for your repository
stamp context

# Scan a subdirectory and use the llm-safe profile
stamp context ./src --profile llm-safe

# Validate the generated bundle before committing
stamp context validate       # defaults to ./context.json`}</code>
              </pre>
            </AnimatedSection>
          </div>
        </DocsLayout>
      <Footer />
    </>
  )
}


