import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'LogicStamp Context README | Documentation',
  description: 'Overview of LogicStamp Context, what it generates, and core concepts.',
}

export default function LogicStampReadmePage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              LogicStamp Context Overview
            </h1>
            <p className="text-lg text-gray-900 dark:text-white">
              LogicStamp Context is a lightweight CLI that scans your React/TypeScript codebase and generates
              AI-ready context bundles optimized for tools like Claude, ChatGPT, and other LLMs.
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold">TypeScript-first:</span> the analyzer currently targets{' '}
              <code>.ts</code> and <code>.tsx</code> files only. JavaScript <code>.js</code> and <code>.jsx</code>{' '}
              files are not analyzed yet, so mixed or JS-only projects will only see TypeScript components in{' '}
              <code>context.json</code>.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white text-gray-900 dark:text-white">
            <AnimatedSection direction="up" delay={100}>
              <h2>What does it generate?</h2>
              <p>
                The CLI analyzes your components and emits a <code>context.json</code> file containing one or more
                bundles. Each bundle includes contracts, dependency graphs, and optional code headers so AI tools
                can understand the structure and behavior of your UI without seeing the entire codebase.
              </p>
              <ul>
                <li><strong>Component structure</strong> – variables, hooks, components, and functions</li>
                <li><strong>Logic signatures</strong> – props, events, and state types</li>
                <li><strong>Dependency graph</strong> – how components depend on each other</li>
                <li><strong>Token-aware modes</strong> – control how much code is included per bundle</li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Installation</h2>
              <pre>
                <code>npm install -g logicstamp-context</code>
              </pre>
              <p>
                After installation, the <code>stamp</code> command is available globally and can be run from any
                React/TypeScript project.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                <strong>Note:</strong> &quot;Global CLI&quot; means installing globally via <code>npm install -g</code> makes the <code>stamp</code> command available from any directory, not just within a specific project folder.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Core Commands</h2>
              <p>The CLI exposes three primary commands:</p>
              <ul>
                <li><code>stamp context [path]</code> – generate AI-ready context from your project</li>
                <li><code>stamp context compare &lt;old.json&gt; &lt;new.json&gt;</code> – detect context drift between versions</li>
                <li><code>stamp context validate [file]</code> – validate a generated context file against the schema</li>
              </ul>
              <p>
                Each of these commands is documented in more detail in the dedicated pages inside the{' '}
                <code>LogicStamp Context CLI</code> docs section.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <h2>Token Optimization</h2>
              <p>
                LogicStamp Context helps you understand and control token usage by estimating token counts for
                different inclusion modes (<code>none</code>, <code>header</code>, <code>full</code>) and
                providing comparison tables. This makes it easier to choose the right balance between context
                richness and cost.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <h2>Learn More</h2>
              <p>
                For full details including schema reference, advanced options, and examples, see the{' '}
                <a
                  href="https://github.com/LogicStamp/logicstamp-context"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LogicStamp Context GitHub repository
                </a>.
              </p>
            </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}


