import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { docsBodyTextClass, docsMutedTextClass } from '@/lib/docs/text-styles'

/** Matches docs/mcp/getting-started.md (Claude Desktop / Cursor examples). */
const MCP_DESKTOP_OR_CURSOR_JSON = JSON.stringify(
  {
    mcpServers: {
      logicstamp: {
        command: 'npx',
        args: ['-y', 'logicstamp-mcp'],
        env: {
          PROJECT_PATH: '/absolute/path/to/your/project',
        },
      },
    },
  },
  null,
  2
)

export const metadata: Metadata = {
  title: 'MCP Getting Started | LogicStamp Context',
  description: 'Install and configure LogicStamp Context MCP server for Claude Desktop, Claude Code, and other AI assistants.',
}

export default function MCPInstallationPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero */}
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
              MCP Getting Started
            </h1>
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl ${docsBodyTextClass} mb-8 max-w-3xl leading-relaxed`}>
              Install LogicStamp Context MCP server to give Claude Desktop, Claude Code, or Cursor direct access to your codebase.
            </p>
          </div>
        </AnimatedSection>

        {/* Prerequisites */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-12">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-theme-primary">
              <div className="flex items-baseline gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Prerequisites
                </h2>
              </div>
              
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Node.js</strong> {'>='} 20</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    <strong>LogicStamp CLI</strong> — <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code> on your{' '}
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">PATH</code> (the MCP server shells out to it)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>MCP-capable assistant</strong> — Claude Desktop, Cursor, Claude Code, or another MCP client</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>
                    <strong>TypeScript project</strong> — LogicStamp analyzes <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">.ts</code> /{' '}
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">.tsx</code> only
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Install CLI',
                      code: 'npm install -g logicstamp-context',
                      copyText: 'npm install -g logicstamp-context'
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Installation */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
              Install the MCP server globally:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Install',
                  code: 'npm install -g logicstamp-mcp',
                  copyText: 'npm install -g logicstamp-mcp'
                }
              ]}
            />
          </div>
        </AnimatedSection>

        {/* Prepare project (docs/mcp/getting-started.md steps 2–3) */}
        <AnimatedSection direction="up" delay={250}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Prepare your project</h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Before tools return useful data, initialize LogicStamp and generate context (same as the MCP guide):
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Init + context',
                  code: 'cd /path/to/your/project\nstamp init\nstamp context',
                  copyText: 'cd /path/to/your/project\nstamp init\nstamp context'
                },
                {
                  label: 'Watch (recommended)',
                  code: 'stamp context --watch',
                  copyText: 'stamp context --watch'
                }
              ]}
            />
            <p className={`text-sm ${docsMutedTextClass} mt-3`}>
              Details:{' '}
              <Link href="/docs/cli/getting-started" className="text-blue-600 dark:text-blue-400 hover:underline">
                CLI getting started
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* Configuration — order matches docs/mcp/getting-started.md */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration</h2>
            
            <div className="space-y-8">
              {/* Claude Desktop */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Claude Desktop
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Edit <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">claude_desktop_config.json</code>: macOS{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code>, Windows{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">%APPDATA%\Claude\claude_desktop_config.json</code>. Merge the block below into{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">mcpServers</code>, then restart Claude Desktop.
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Config',
                      code: MCP_DESKTOP_OR_CURSOR_JSON,
                      copyText: MCP_DESKTOP_OR_CURSOR_JSON
                    }
                  ]}
                />
                <p className={`text-sm ${docsMutedTextClass} mt-3`}>
                  Replace <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">PROJECT_PATH</code> with your project root. Most tool calls pass{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">projectPath</code> explicitly, so this env var is optional fallback (e.g. compare tools).
                </p>
              </div>

              {/* Cursor */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Cursor
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Add to your Cursor MCP config (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">~/.cursor/mcp.json</code> on macOS/Linux or{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">%USERPROFILE%\.cursor\mcp.json</code> on Windows). Use the same shape as Claude Desktop:{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">npx</code> with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">args: [&quot;-y&quot;, &quot;logicstamp-mcp&quot;]</code>.
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Config',
                      code: MCP_DESKTOP_OR_CURSOR_JSON,
                      copyText: MCP_DESKTOP_OR_CURSOR_JSON
                    }
                  ]}
                />
                <p className={`text-sm ${docsMutedTextClass} mt-3`}>
                  Fully quit and restart Cursor (not just close the window) after saving.
                </p>
              </div>

              {/* Claude Code */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Claude Code
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                  Optional: register the server with Claude Code MCP CLI or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">~/.claude.json</code> (same <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">-y</code> + package args as above).
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Using CLI',
                      code: 'claude mcp add --scope user --transport stdio logicstamp -- npx -y logicstamp-mcp',
                      copyText: 'claude mcp add --scope user --transport stdio logicstamp -- npx -y logicstamp-mcp'
                    },
                    {
                      label: 'Manual Config',
                      code: `# Edit ~/.claude.json (macOS/Linux) or %USERPROFILE%\\.claude.json (Windows)
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "logicstamp-mcp"]
    }
  }
}`,
                      copyText: JSON.stringify(
                        { mcpServers: { logicstamp: { type: 'stdio', command: 'npx', args: ['-y', 'logicstamp-mcp'] } } },
                        null,
                        2
                      )
                    }
                  ]}
                />
                <p className={`text-sm ${docsMutedTextClass} mt-3`}>
                  <strong>Per-project:</strong>{' '}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">claude mcp add --scope project</code> writes <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">.mcp.json</code> in the repo.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 p-4">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Environment (from the MCP guide)</p>
              <p className={`text-sm ${docsMutedTextClass}`}>
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">PROJECT_PATH</code> is optional fallback when a tool omits{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">projectPath</code> (especially{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_compare_snapshot</code> and{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_compare_modes</code>). The server expects{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code> on <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">PATH</code>.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Verify */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Verify installation</h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'which (Unix)',
                  code: 'which logicstamp-mcp',
                  copyText: 'which logicstamp-mcp'
                },
                {
                  label: 'Claude Code',
                  code: 'claude mcp list',
                  copyText: 'claude mcp list'
                }
              ]}
            />
            <p className={`text-sm ${docsMutedTextClass} mt-3`}>
              In Claude Code you should see LogicStamp listed as connected (exact wording varies by client version).
            </p>
          </div>
        </AnimatedSection>

        {/* Quick Start — tool order per docs/mcp/getting-started.md */}
        <AnimatedSection direction="up" delay={500}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Using the tools</h2>
            <div className="mb-4 rounded-lg border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 p-4">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                <span className="font-semibold">Call <code className="px-1 py-0.5 bg-white/80 dark:bg-gray-900 rounded text-xs">logicstamp_watch_status</code> first.</span> If watch mode is already active, skip refresh and go straight to list/read bundles; otherwise refresh snapshot before reading context.
              </p>
            </div>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Seven tools (names match the MCP getting started doc):
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">1.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_watch_status</code> — Is <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp context --watch</code> running?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">2.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_list_bundles</code> — Catalog available bundles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">3.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_read_bundle</code> — Read a bundle / contract</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">4.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_refresh_snapshot</code> — Regenerate context on demand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">5.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_compare_snapshot</code> — Diff architectural snapshots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">6.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_compare_modes</code> — Compare include-code / token modes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">7.</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_read_logicstamp_docs</code> — Fetch LogicStamp documentation snippets</span>
              </li>
            </ul>
            <p className={`text-sm ${docsMutedTextClass}`}>
              Full behavior and schemas:{' '}
              <Link href="/docs/mcp/reference" className="text-blue-600 dark:text-blue-400 hover:underline">
                MCP reference
              </Link>
              .
            </p>
          </div>
        </AnimatedSection>

        {/* Learn More */}
        <AnimatedSection direction="up" delay={600}>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Learn More</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/docs/mcp/reference"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-purple-500 dark:md:hover:border-purple-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">MCP Reference →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Complete tool documentation</p>
              </Link>
              <Link
                href="/docs/mcp"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-purple-500 dark:md:hover:border-purple-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">MCP Overview →</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">How MCP works</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <ReadyToGetStartedCard
          variant="purple"
          description="Explore the complete MCP reference or learn about usage examples and workflows."
          primaryAction={{
            href: '/docs/mcp/reference',
            label: 'MCP Reference',
          }}
          secondaryAction={{
            href: '/docs/mcp/usage',
            label: 'Usage Examples',
          }}
          showGitHubLink={false}
          delay={600}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
