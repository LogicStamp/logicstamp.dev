import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp init` Command | LogicStamp Context Documentation',
  description: 'Initialize LogicStamp in your project by setting up .gitignore patterns and other project configuration.',
}

export default function InitCommandPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              <code>stamp init</code> Command
            </h1>
            <p className="text-lg text-gray-900 dark:text-white">
              Initialize LogicStamp in your project by setting up <code>.gitignore</code> patterns and other project configuration.
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
                  code: 'stamp init [path] [options]',
                  copyText: 'stamp init [path] [options]'
                }
              ]}
            />
            <p>
              <strong>[path]</strong> – Target directory to initialize (default: current directory)
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
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
                    <code>--skip-gitignore</code>
                  </td>
                  <td>Skip <code>.gitignore</code> setup</td>
                </tr>
                <tr>
                  <td>
                    <code>-h, --help</code>
                  </td>
                  <td>Show help</td>
                </tr>
              </tbody>
            </table>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <h2>What It Does</h2>
            <p>
              The <code>stamp init</code> command sets up LogicStamp in your project by:
            </p>
            <ol>
              <li>
                <strong>Creating or updating <code>.gitignore</code></strong> with LogicStamp-specific patterns:
                <ul>
                  <li><code>context.json</code> – Context files generated per folder</li>
                  <li><code>context_*.json</code> – Main index and other context variants</li>
                  <li><code>*.uif.json</code> – UIF contract files</li>
                  <li><code>logicstamp.manifest.json</code> – Dependency manifest files</li>
                  <li><code>.logicstamp/</code> – Configuration directory</li>
                </ul>
              </li>
              <li>
                <strong>Generating <code>LLM_CONTEXT.md</code></strong> in the project root (if it doesn't already exist) – A guide that helps AI assistants understand your project structure and how to work with LogicStamp context files
              </li>
              <li>
                <strong>Creating <code>.logicstamp/config.json</code></strong> to save your preferences so <code>stamp context</code> won't prompt again
              </li>
            </ol>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <h2>Examples</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Basic initialization',
                  code: `# Initialize LogicStamp in the current directory
stamp init

# Initialize a specific directory
stamp init ./my-project

# Skip .gitignore setup
stamp init --skip-gitignore`,
                  copyText: `# Initialize LogicStamp in the current directory
stamp init

# Initialize a specific directory
stamp init ./my-project

# Skip .gitignore setup
stamp init --skip-gitignore`
                }
              ]}
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
            <h2>Smart Detection in <code>stamp context</code></h2>
            <p>
              The <code>stamp context</code> command includes smart setup management for both <code>.gitignore</code> and <code>LLM_CONTEXT.md</code> with the following behavior:
            </p>
            <h3>First Time (No Config)</h3>
            <p>
              When you run <code>stamp context</code> for the first time in a project (in interactive mode), you'll be prompted for two things:
            </p>
            <ol>
              <li>
                <strong><code>.gitignore</code> setup:</strong> Add recommended patterns to <code>.gitignore</code>? [Y/n]
              </li>
              <li>
                <strong><code>LLM_CONTEXT.md</code> generation:</strong> Generate <code>LLM_CONTEXT.md</code> in project root? [Y/n]
              </li>
            </ol>
            <p>
              Your choices are saved in <code>.logicstamp/config.json</code> and respected on subsequent runs.
            </p>
            <h3>Subsequent Runs</h3>
            <p>
              Once you've answered the prompt:
            </p>
            <ul>
              <li>Your choice is remembered in <code>.logicstamp/config.json</code></li>
              <li>No more prompts</li>
              <li><code>stamp context</code> respects your preference forever</li>
            </ul>
            <h3>Non-Interactive Mode (CI)</h3>
            <p>
              In CI or non-TTY environments:
            </p>
            <ul>
              <li>Never prompts</li>
              <li>Never auto-adds patterns</li>
              <li>Use <code>stamp init</code> or <code>--skip-gitignore</code> flag to control behavior explicitly</li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={600}>
            <h2>When to Use <code>stamp init</code></h2>
            <h3>Use <code>stamp init</code> when:</h3>
            <ul>
              <li>Setting up LogicStamp in a new project</li>
              <li>You want explicit control over initialization</li>
              <li>You want to set up <code>.gitignore</code> before generating context files</li>
            </ul>
            <h3>You don't need <code>stamp init</code> if:</h3>
            <ul>
              <li>You're fine with automatic <code>.gitignore</code> setup when running <code>stamp context</code></li>
              <li>Your <code>.gitignore</code> already has the necessary patterns</li>
              <li>You prefer to manually manage <code>.gitignore</code></li>
            </ul>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={700}>
            <h2>Safety</h2>
            <p>
              The <code>stamp init</code> command is:
            </p>
            <ul>
              <li><strong>Idempotent</strong> – Safe to run multiple times without duplicating patterns</li>
              <li><strong>Non-destructive</strong> – Preserves existing <code>.gitignore</code> content</li>
              <li><strong>Safe by default</strong> – Only adds patterns, never removes anything</li>
            </ul>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

