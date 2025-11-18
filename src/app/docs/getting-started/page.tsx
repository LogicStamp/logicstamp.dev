import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import CopyButton from '@/components/CopyButton'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'Installation & Quick Start | LogicStamp Context Documentation',
  description: 'Install LogicStamp Context CLI and get up and running in 2 minutes',
}

export default function QuickStartPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              Installation & Quick Start
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Install LogicStamp Context CLI and get up and running in 2 minutes
            </p>
          </div>
        </AnimatedSection>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-code:text-gray-900 dark:prose-code:text-gray-100 text-gray-800 dark:text-gray-100">
          <AnimatedSection direction="up" delay={100}>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              🚀 Prerequisites
            </h3>
            <ul className="text-blue-800 dark:text-blue-200 space-y-2 text-base">
              <li>• Node.js 18+ installed</li>
              <li>• A React/TypeScript project</li>
              <li>• Basic command line knowledge</li>
            </ul>
          </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Step 1: Install LogicStamp Context</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">Install the CLI globally to use <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">stamp</code> command anywhere:</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
            <strong>Note:</strong> Installing globally means the <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1 py-0.5 rounded text-xs">stamp</code> command is available from any directory on your system, not just within a specific project folder.
          </p>
          <TabbedCodeBlock
            tabs={[
              {
                label: 'Global Install',
                code: 'npm install -g logicstamp-context',
                copyText: 'npm install -g logicstamp-context'
              },
              {
                label: 'Verify Install',
                code: 'stamp context --help',
                copyText: 'stamp context --help'
              }
            ]}
          />
          <p className="mt-2 mb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            After installation, the <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">stamp</code> command will be available globally.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Step 2: Generate Context</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">Generate AI-ready context for your project. The default profile (<code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">llm-chat</code>) is optimized for AI chat interfaces:</p>
          <TabbedCodeBlock
            tabs={[
              {
                label: 'Navigate & Run',
                code: 'cd your-react-project\nstamp context',
                copyText: 'cd your-react-project\nstamp context'
              },
              {
                label: 'Run Only',
                code: 'stamp context',
                copyText: 'stamp context'
              },
              {
                label: 'Preview (Dry Run)',
                code: 'stamp context --dry-run --stats',
                copyText: 'stamp context --dry-run --stats'
              }
            ]}
          />

          <p className="mt-6 mb-6 text-gray-700 dark:text-gray-300 text-base leading-relaxed">This creates a <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">context.json</code> file in your project root containing structured bundles (one per root component/entry point) with component contracts, dependency graphs, and code headers. Each bundle contains a root component plus its complete dependency graph—all related components together in one self-contained unit. The context is automatically validated after generation before being written to ensure schema compliance.</p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Step 3: Use in Your IDE</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-base leading-relaxed">The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">context.json</code> file in your project root provides structured context about your codebase to AI coding assistants.</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-8 mt-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
              🛠️ Compatible Tools
            </h3>
            <ul className="text-blue-800 dark:text-blue-200 space-y-3 text-base">
              <li>• <strong>Cursor</strong> - May auto-detect context.json when scanning project files</li>
              <li>• <strong>Windsurf</strong> - Similar project-level file scanning capabilities</li>
              <li>• <strong>Other AI assistants</strong> - You can explicitly reference or paste context.json content</li>
            </ul>
          </div>

          <h3 className="mt-10 mb-4 text-xl font-semibold text-gray-900 dark:text-white">How AI Tools Discover context.json</h3>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <p className="text-base text-yellow-800 dark:text-yellow-200 leading-relaxed">
              <strong>Auto-detection:</strong> Tools like Cursor automatically scan project files and may detect <code className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-900 dark:text-yellow-100 px-1.5 py-0.5 rounded text-sm">context.json</code> when answering questions about your codebase. To ensure consistent results across all AI assistants, we recommend explicitly referencing context.json when interacting with your AI tool.
            </p>
          </div>

          <h4 className="mt-8 mb-3 text-lg font-semibold text-gray-900 dark:text-white">Example Prompts</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">Explicitly reference context.json in your prompts for consistent results:</p>
          <TabbedCodeBlock
            tabs={[
              {
                label: 'Component Analysis',
                code: 'Using the context.json file, explain how the Button component works',
                copyText: 'Using the context.json file, explain how the Button component works'
              },
              {
                label: 'Architecture Review',
                code: 'Based on context.json, suggest improvements to the authentication flow',
                copyText: 'Based on context.json, suggest improvements to the authentication flow'
              },
              {
                label: 'Dependency Mapping',
                code: 'Reference context.json to understand the component dependencies',
                copyText: 'Reference context.json to understand the component dependencies'
              },
              {
                label: 'Manual Reference',
                code: 'Please read context.json from the project root and use it to understand the codebase structure',
                copyText: 'Please read context.json from the project root and use it to understand the codebase structure'
              }
            ]}
          />

          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mt-6 mb-4">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"><strong>Tip:</strong> Regenerate context.json after major refactors to keep your AI assistant up-to-date with your codebase structure.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mt-4 mb-6">
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"><strong>Alternative:</strong> You can also copy context.json to clipboard and paste into chat-based AI assistants (Claude, ChatGPT, etc.) if needed.</p>
          </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Step 4: Optimize Tokens (Optional)</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">Compare token costs across different code inclusion modes to choose the best option for your needs. The <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--compare-modes</code> flag generates <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">context.json</code> and displays a comparison table:</p>
          <TabbedCodeBlock
            tabs={[
              {
                label: 'Compare All Modes',
                code: 'stamp context --compare-modes',
                copyText: 'stamp context --compare-modes'
              },
              {
                label: 'Minimal (none)',
                code: 'stamp context --include-code none',
                copyText: 'stamp context --include-code none'
              },
              {
                label: 'Recommended (header)',
                code: 'stamp context --include-code header',
                copyText: 'stamp context --include-code header'
              },
              {
                label: 'Complete (full)',
                code: 'stamp context --include-code full --max-nodes 20',
                copyText: 'stamp context --include-code full --max-nodes 20'
              }
            ]}
          />

          <div className="mt-6 mb-6 space-y-3">
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <strong>Code inclusion modes:</strong>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 text-base leading-relaxed space-y-2 ml-4">
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">none</code> - Contracts only, ~79% token savings. Use for API docs or CI validation.</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">header</code> - JSDoc headers + contracts, ~65% savings (default). Best for AI chat.</li>
              <li>• <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">full</code> - Complete source code. Use with <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">--max-nodes</code> to limit size.</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              The default <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">header</code> mode provides a good balance of context and token efficiency.
            </p>
          </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={500}>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-4">Step 5: Validate Context (Optional)</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">Verify your generated context file matches the expected schema before sharing or committing:</p>
          <TabbedCodeBlock
            tabs={[
              {
                label: 'Validate Default',
                code: 'stamp context validate',
                copyText: 'stamp context validate'
              },
              {
                label: 'Validate Custom File',
                code: 'stamp context validate my-context.json',
                copyText: 'stamp context validate my-context.json'
              }
            ]}
          />
          <p className="mt-6 mb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Validation checks schema compliance, required fields, and JSON structure. Exits with code <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">0</code> on success, <code className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-1.5 py-0.5 rounded text-sm">1</code> on errors (CI-friendly).
          </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={600}>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
              ✅ You're all set!
            </h3>
            <p className="text-green-800 dark:text-green-200 text-base leading-relaxed">
              You've successfully generated AI-ready context! Your <code className="bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 px-1.5 py-0.5 rounded text-sm">context.json</code> file is ready to share with AI assistants. For advanced features and more details, check out the <a href="https://github.com/logicstamp/logicstamp-context" target="_blank" rel="noopener noreferrer" className="underline text-green-900 dark:text-green-100 hover:text-green-700 dark:hover:text-green-300">GitHub repository</a>.
            </p>
          </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
