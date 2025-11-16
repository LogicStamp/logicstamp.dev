import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Usage Guide | LogicStamp Context Documentation',
  description: 'Practical usage patterns and workflows for the LogicStamp Context CLI.',
}

export default function UsagePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <AnimatedSection direction="up" delay={0}>
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                Usage Guide
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Learn how to use LogicStamp Context effectively in local development and CI workflows.
              </p>
            </div>
          </AnimatedSection>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
            <AnimatedSection direction="up" delay={100}>
              <h2>Quick Start</h2>
              <pre>
                <code>{`# Install globally
npm install -g logicstamp-context

# Generate context for your project
logicstamp-context

# Output: context.json with component analysis`}</code>
              </pre>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Command Syntax</h2>
              <pre>
                <code>{`logicstamp-context [path] [options]
logicstamp-validate [file]`}</code>
              </pre>
              <p>
                Use <code>logicstamp-context</code> to generate bundles and <code>logicstamp-validate</code> to verify
                them before sharing or committing.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Common Options</h2>
              <ul>
                <li>
                  <code>--depth</code> – Control how far dependency traversal should go (0 = entry only, 1 = direct
                  dependencies).
                </li>
                <li>
                  <code>--include-code</code> – Choose between <code>none</code>, <code>header</code>, or{' '}
                  <code>full</code> code snippets.
                </li>
                <li>
                  <code>--profile</code> – Apply preset settings like <code>llm-chat</code>, <code>llm-safe</code>, or{' '}
                  <code>ci-strict</code>.
                </li>
                <li>
                  <code>--dry-run</code> and <code>--stats</code> – Ideal for CI dashboards and automation.
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>CI and Automation Tips</h2>
              <ul>
                <li>
                  Use <code>--dry-run</code> to inspect bundle size and counts without producing files.
                </li>
                <li>
                  Use <code>--stats</code> to emit machine-readable summary lines and append them to logs or dashboards.
                </li>
                <li>
                  Combine <code>logicstamp-context</code> and <code>logicstamp-validate</code> in pre-commit hooks or
                  CI jobs to keep <code>context.json</code> in sync with your codebase.
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


