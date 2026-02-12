import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
              Install LogicStamp Context MCP server to give Claude Desktop, Claude Code, or Cursor direct access to your codebase.
            </p>
          </div>
        </AnimatedSection>

        {/* Prerequisites */}
        <AnimatedSection direction="up" delay={100}>
          <div className="mb-12">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900">
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
              
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Node.js</strong> 18.18.0 or higher</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>LogicStamp Context CLI</strong> - The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">stamp</code> command must be installed</span>
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
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
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

        {/* Configuration */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration</h2>
            
            <div className="space-y-8">
              {/* Claude Code */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  For Claude Code
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Add to your global configuration (available in all projects):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Using CLI',
                      code: 'claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp',
                      copyText: 'claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp'
                    },
                    {
                      label: 'Manual Config',
                      code: `# Edit ~/.claude.json (macOS/Linux) or %USERPROFILE%\\.claude.json (Windows)
{
  "mcpServers": {
    "logicstamp": {
      "type": "stdio",
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}`,
                      copyText: JSON.stringify({ mcpServers: { logicstamp: { type: "stdio", command: "npx", args: ["logicstamp-mcp"] } } }, null, 2)
                    }
                  ]}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  <strong>Per-project setup:</strong> Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">claude mcp add --scope project</code> to create <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">.mcp.json</code> in your project root (can be committed to git for team collaboration).
                </p>
              </div>

              {/* Claude Desktop */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  For Claude Desktop
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Add to your Claude Desktop config (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code> on macOS):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Config',
                      code: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2),
                      copyText: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2)
                    }
                  ]}
                />
              </div>

              {/* Cursor */}
              <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  For Cursor
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  Add to your Cursor MCP config (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">~/.cursor/mcp.json</code> on macOS/Linux or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">%USERPROFILE%\.cursor\mcp.json</code> on Windows):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Config',
                      code: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2),
                      copyText: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2)
                    }
                  ]}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  After adding the config, fully quit and restart Cursor (not just close the window) for changes to take effect.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Verify */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Verify Installation</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              For Claude Code, verify the server is configured:
            </p>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Verify',
                  code: 'claude mcp list',
                  copyText: 'claude mcp list'
                }
              ]}
            />
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
              You should see <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp: npx logicstamp-mcp - ✓ Connected</code>
            </p>
          </div>
        </AnimatedSection>

        {/* Quick Start */}
        <AnimatedSection direction="up" delay={500}>
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
              Once installed, start using LogicStamp in your TypeScript project. The 7 LogicStamp tools will be available:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_refresh_snapshot</code> - Analyze project structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_list_bundles</code> - List available components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_read_bundle</code> - Read component contracts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_compare_snapshot</code> - Detect changes after edits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                <span><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">logicstamp_watch_status</code> - Check watch mode status</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Ask your AI assistant: "Use LogicStamp to analyze the components in src/components"
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
                <p className="text-sm text-gray-600 dark:text-gray-400">Complete tool documentation</p>
              </Link>
              <Link
                href="/docs/mcp"
                className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg md:hover:border-purple-500 dark:md:hover:border-purple-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">MCP Overview →</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">How MCP works</p>
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
