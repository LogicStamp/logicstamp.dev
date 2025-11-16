import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: '`compare` Command | LogicStamp Context Documentation',
  description: 'Detect drift between context.json files with Jest-style approval workflows and token stats.',
}

export default function CompareCommandPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              <code>stamp context compare</code> Command
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Powerful context drift detector that works like Jest snapshots – compare current context against a baseline,
              approve updates, and track token cost changes.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 text-gray-800 dark:text-gray-100">
          <AnimatedSection direction="up" delay={100}>
            <h2>Quick Start</h2>
            <pre>
              <code>{`# Auto-mode: generate fresh context and compare with existing context.json
stamp context compare

# Auto-approve updates (like jest -u)
stamp context compare --approve

# Manual mode: compare two specific files
stamp context compare old.json new.json

# With token statistics
stamp context compare --stats`}</code>
            </pre>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <h2>Behavior</h2>
            <p>
              In its default mode, <code>stamp context compare</code> acts like Jest snapshots:
            </p>
            <ul>
              <li>
                <strong>Auto-mode</strong> (<code>stamp context compare</code>) first runs{' '}
                <code>stamp context</code> to generate a fresh context, then compares it against your existing{' '}
                <code>context.json</code>.
              </li>
              <li>
                <strong>Manual mode</strong> (<code>stamp context compare old.json new.json</code>) compares the two
                files you pass in.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={250}>
            <h2>What It Does</h2>
            <p>
              The command creates lightweight signatures for each component and detects:
            </p>
            <ul>
              <li>Added components – new components in the new context.</li>
              <li>Removed components – components that existed in the old but not the new context.</li>
              <li>
                Changed components – components that exist in both but have differences in semantic hash, imports, hooks,
                exports, or other signature fields.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <h2>Approval Workflow</h2>
            <p>The compare workflow mirrors Jest snapshots:</p>
            <ul>
              <li>
                <strong>Interactive mode (local dev)</strong> – <code>stamp context compare</code> prompts to update
                <code>context.json</code> when drift is detected.
              </li>
              <li>
                <strong>Auto-approve mode</strong> – <code>stamp context compare --approve</code> updates without
                prompting (CI-safe, like <code>jest -u</code>).
              </li>
              <li>
                <strong>CI mode</strong> – non-TTY environments never prompt and exit with code <code>1</code> when drift
                is detected.
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <h2>Token Statistics</h2>
            <p>
              With the <code>--stats</code> flag, the command prints token counts for both files and the delta between
              them, allowing you to monitor how changes impact LLM context size:
            </p>
            <pre>
              <code>{`stamp context compare old.json new.json --stats`}</code>
            </pre>

            <h2>Exit Codes</h2>
            <ul>
              <li>
                <code>0</code> – PASS – no drift detected, or drift detected and approved/updated.
              </li>
              <li>
                <code>1</code> – DRIFT detected and not approved, or an error occurred (file not found, invalid JSON,
                generation failure, etc.).
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}


