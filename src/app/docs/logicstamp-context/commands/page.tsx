import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

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
                      <code>stamp init [path]</code>
                    </td>
                    <td>Initialize LogicStamp in a project by setting up .gitignore patterns.</td>
                    <td>First-time project setup or explicit .gitignore configuration.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context [path] [options]</code>
                    </td>
                    <td>Generates AI-ready context files organized by folder (one context.json per folder plus context_main.json index).</td>
                    <td>Produce fresh context for AI workflows, documentation, or review.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context compare [options]</code>
                    </td>
                    <td>Compares all context files (multi-file mode) or two specific files to detect drift, ADDED/ORPHANED folders, and token cost changes.</td>
                    <td>CI drift detection, Jest-style approval workflows, manual inspections, or detecting folder reorganizations.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context validate [file]</code>
                    </td>
                    <td>Validates a previously generated context file (defaults to ./context.json when no file is supplied).</td>
                    <td>Gate CI pipelines, pre-commit checks, or manual QA before sharing context files.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>stamp context clean [path] [options]</code>
                    </td>
                    <td>Removes all generated context artifacts (context_main.json, all folder context.json files, and .logicstamp/ directory).</td>
                    <td>Reset context files, clean before switching branches, or remove context artifacts from a project.</td>
                  </tr>
                </tbody>
              </table>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h2>Command Interactions</h2>
              <ul>
                <li>
                  Run <code>stamp init</code> (optional) to set up .gitignore patterns before generating context files. Alternatively, <code>stamp context</code> will auto-add patterns on first run.
                </li>
                <li>
                  Run <code>stamp context</code> to generate multiple <code>context.json</code> files (one per folder) plus <code>context_main.json</code> index, or use <code>--out</code> for a custom output directory.
                </li>
                <li>
                  Use <code>stamp context validate</code> on any context file (folder contexts or main index) to confirm it matches the expected schema; the exit code is CI-friendly.
                </li>
                <li>
                  Use <code>stamp context compare</code> to detect drift across <strong>all context files</strong> (multi-file mode using <code>context_main.json</code>) or between two specific files. Automatically detects ADDED folders, ORPHANED folders, per-folder DRIFT, and unchanged files (PASS). Use <code>--clean-orphaned</code> to automatically remove stale context files.
                </li>
                <li>
                  Use <code>stamp context clean</code> to remove all context artifacts. Safe by default (shows what would be removed), requires <code>--all --yes</code> to actually delete files. Useful for resetting context files or cleaning before switching branches.
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <h2>Quick Reference</h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Quick Reference',
                    code: `# Initialize LogicStamp in your project (optional - context command does this automatically)
stamp init

# Generate context for your repository
stamp context

# Scan a subdirectory and use the llm-safe profile
stamp context ./src --profile llm-safe

# Validate the generated bundle before committing
stamp context validate       # defaults to ./context.json

# Or validate the main index
stamp context validate context_main.json

# Compare all context files for drift (multi-file mode)
stamp context compare        # uses context_main.json as index

# Auto-approve and update all drifted files (like jest -u)
stamp context compare --approve

# Compare with stats and clean up orphaned files
stamp context compare --approve --clean-orphaned --stats

# Compare two specific context files
stamp context compare old.json new.json

# Clean all context artifacts (dry run - shows what would be removed)
stamp context clean

# Actually delete all context files
stamp context clean --all --yes`,
                    copyText: `# Initialize LogicStamp in your project (optional - context command does this automatically)
stamp init

# Generate context for your repository
stamp context

# Scan a subdirectory and use the llm-safe profile
stamp context ./src --profile llm-safe

# Validate the generated bundle before committing
stamp context validate       # defaults to ./context.json

# Or validate the main index
stamp context validate context_main.json

# Compare all context files for drift (multi-file mode)
stamp context compare        # uses context_main.json as index

# Auto-approve and update all drifted files (like jest -u)
stamp context compare --approve

# Compare with stats and clean up orphaned files
stamp context compare --approve --clean-orphaned --stats

# Compare two specific context files
stamp context compare old.json new.json

# Clean all context artifacts (dry run - shows what would be removed)
stamp context clean

# Actually delete all context files
stamp context clean --all --yes`
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


