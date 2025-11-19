import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

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
            <p className="text-lg text-gray-900 dark:text-white">
              Powerful context drift detector that works like Jest snapshots – compare current context against a baseline,
              approve updates, and track token cost changes.
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white text-gray-900 dark:text-white">
          <AnimatedSection direction="up" delay={100}>
            <h2>Quick Start</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Quick Start',
                  code: `# Auto-mode: Compare all context files (multi-file mode)
stamp context compare

# Auto-approve updates (like jest -u)
stamp context compare --approve

# Single-file: Compare two specific files
stamp context compare old.json new.json

# Multi-file: Compare two indices
stamp context compare old/context_main.json new/context_main.json

# Show per-folder token statistics
stamp context compare --stats

# Clean up orphaned files automatically
stamp context compare --approve --clean-orphaned`,
                  copyText: `# Auto-mode: Compare all context files (multi-file mode)
stamp context compare

# Auto-approve updates (like jest -u)
stamp context compare --approve

# Single-file: Compare two specific files
stamp context compare old.json new.json

# Multi-file: Compare two indices
stamp context compare old/context_main.json new/context_main.json

# Show per-folder token statistics
stamp context compare --stats

# Clean up orphaned files automatically
stamp context compare --approve --clean-orphaned`
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <h2>Two Comparison Modes</h2>
            <p>
              The compare command supports <strong>two comparison modes</strong>:
            </p>
            <h3>1. Multi-File Mode (Auto or Manual with context_main.json)</h3>
            <ul>
              <li>Compares <strong>all context files</strong> across your project</li>
              <li>Uses <code>context_main.json</code> as the root index</li>
              <li>Detects: <strong>ADDED FILE</strong> (new folders), <strong>ORPHANED FILE</strong> (removed folders), <strong>DRIFT</strong> (changed files), and <strong>PASS</strong> (unchanged files)</li>
              <li>Shows three-tier output: folder-level summary → component-level summary → detailed per-folder changes</li>
            </ul>
            <h3>2. Single-File Mode</h3>
            <ul>
              <li>Compares two specific <code>context.json</code> files</li>
              <li>Detects added/removed/changed components</li>
              <li>Shows detailed component-level diffs</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={250}>
            <h2>What It Detects</h2>
            <p>
              In multi-file mode, the command detects:
            </p>
            <ul>
              <li><strong>ADDED FILE</strong> – New folders with context files</li>
              <li><strong>ORPHANED FILE</strong> – Folders removed from project (but context files still exist on disk)</li>
              <li><strong>DRIFT</strong> – Changed files with component-level details</li>
              <li><strong>PASS</strong> – Unchanged files</li>
            </ul>
            <p>
              In single-file mode, it detects:
            </p>
            <ul>
              <li>Added components – new components in the new context</li>
              <li>Removed components – components that existed in the old but not the new context</li>
              <li>
                Changed components – components that exist in both but have differences in semantic hash, imports, hooks,
                exports, or other signature fields
              </li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <h2>Approval Workflow</h2>
            <p>The compare workflow mirrors Jest snapshots:</p>
            <ul>
              <li>
                <strong>Interactive mode (local dev)</strong> – <code>stamp context compare</code> prompts to update
                all affected context files when drift is detected.
              </li>
              <li>
                <strong>Auto-approve mode</strong> – <code>stamp context compare --approve</code> updates all files without
                prompting (CI-safe, like <code>jest -u</code>).
              </li>
              <li>
                <strong>CI mode</strong> – non-TTY environments never prompt and exit with code <code>1</code> when drift
                is detected.
              </li>
            </ul>
            <p>
              Use <code>--clean-orphaned</code> with <code>--approve</code> to automatically delete stale context files from removed folders.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <h2>Token Statistics</h2>
            <p>
              With the <code>--stats</code> flag, the command shows per-folder token count statistics and deltas, allowing you to monitor how changes impact LLM context size across your project:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'With Stats',
                  code: 'stamp context compare --stats',
                  copyText: 'stamp context compare --stats'
                }
              ]}
            />
            <p>
              Token stats show the delta for each folder with changes, helping you understand the cost impact of modifications.
            </p>

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


