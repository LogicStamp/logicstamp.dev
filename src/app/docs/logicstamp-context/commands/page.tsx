import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'LogicStamp Context Commands | Documentation',
  description: 'Overview of the LogicStamp Context CLI entry points and how they interact.',
}

export default function LogicStampCommandsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                CLI Commands
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                LogicStamp Context ships with two primary CLI entry points installed as separate executables.
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
                      <code>logicstamp-context [path] [options]</code>
                    </td>
                    <td>Generates AI-ready context bundles for your project.</td>
                    <td>Produce fresh context for AI workflows, documentation, or review.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>logicstamp-validate [file]</code>
                    </td>
                    <td>Validates a previously generated bundle file.</td>
                    <td>Gate CI pipelines or manual QA before sharing context files.</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Command Interactions</h2>
              <ul>
                <li>Run <code>logicstamp-context</code> first to generate <code>context.json</code> or a custom output.</li>
                <li>Use <code>logicstamp-validate</code> on that output to confirm it matches the expected schema.</li>
                <li>Both binaries can be aliased independently (for example, <code>alias lsc=&quot;logicstamp-context&quot;</code>).</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Quick Reference</h2>
              <pre>
                <code>{`# Generate context for your repository
logicstamp-context

# Scan a subdirectory and use the llm-safe profile
logicstamp-context ./src --profile llm-safe

# Validate the generated bundle before committing
logicstamp-validate          # defaults to ./context.json`}</code>
              </pre>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


