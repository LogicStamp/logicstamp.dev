import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Installation & Quick Start | LogicStamp Context Documentation',
  description: 'Install and configure LogicStamp Context MCP server for Claude Desktop, Claude Code, and other AI assistants.',
}

export default function MCPInstallationPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Installation & Quick Start
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                MCP Installation & Quick Start
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Get LogicStamp Context MCP server up and running in minutes. Works with Claude Desktop, Claude Code, and any MCP-compatible client.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Prerequisites Section */}
          <AnimatedSection direction="up" delay={100}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Prerequisites
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4 mb-4">
                <li><strong>Node.js</strong> 18.0.0 or higher</li>
                <li><strong>LogicStamp Context CLI</strong> - The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs">stamp</code> command must be installed and available in PATH</li>
              </ul>
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
          </AnimatedSection>

          {/* Installation Section */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Installation
              </h2>

              {/* For Claude Code Users */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Claude Code Users
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  LogicStamp MCP server works with <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">Claude Code</a> - Anthropic's official CLI for Claude.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Option 1: Global Installation (Recommended)
                    </h4>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                      Install globally to use LogicStamp in <strong>all your projects</strong>:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Install & Configure',
                          code: `# Install the package
npm install -g logicstamp-mcp

# Add to Claude Code - available everywhere
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp`,
                          copyText: 'npm install -g logicstamp-mcp\nclaude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                      <strong>What this does:</strong> Adds LogicStamp to your global Claude Code configuration (~/.claude.json), makes the 6 LogicStamp tools available in every project, and server auto-starts when Claude Code needs it (no manual startup required).
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Option 2: Per-Project Installation (For Teams)
                    </h4>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                      Install per-project to share configuration with your team via git:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Per-Project Setup',
                          code: `# Install the package
npm install -g logicstamp-mcp

# In your project directory
cd /path/to/your/project
claude mcp add --scope project --transport stdio logicstamp -- npx logicstamp-mcp`,
                          copyText: 'npm install -g logicstamp-mcp\ncd /path/to/your/project\nclaude mcp add --scope project --transport stdio logicstamp -- npx logicstamp-mcp'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                      <strong>What this does:</strong> Creates <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">.mcp.json</code> in your project root, can be committed to git for team collaboration, and team members get the same MCP configuration.
                    </p>
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Example <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">.mcp.json</code>:</p>
                      <TabbedCodeBlock
                        tabs={[
                          {
                            label: '.mcp.json',
                            code: `{
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
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Option 3: Local Development
                    </h4>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                      For contributors or if you're developing the MCP server locally:
                    </p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Local Dev',
                          code: `# Clone and build
git clone https://github.com/LogicStamp/logicstamp-mcp.git
cd logicstamp-mcp
npm install
npm run build

# Add via CLI (replace with your actual path)
claude mcp add --scope user --transport stdio logicstamp -- node /absolute/path/to/logicstamp-mcp/dist/index.js

# On Windows:
claude mcp add --scope user --transport stdio logicstamp -- node C:\\Users\\YourName\\path\\to\\logicstamp-mcp\\dist\\index.js`,
                          copyText: 'git clone https://github.com/LogicStamp/logicstamp-mcp.git\ncd logicstamp-mcp\nnpm install\nnpm run build\nclaude mcp add --scope user --transport stdio logicstamp -- node /absolute/path/to/logicstamp-mcp/dist/index.js'
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* For Claude Desktop Users */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Claude Desktop Users
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  Add to your Claude Desktop config (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code> on macOS):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Claude Desktop Config',
                      code: `{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}`,
                      copyText: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2)
                    }
                  ]}
                />
              </div>

              {/* For Cursor Users */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Cursor Users
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  Add to your Cursor MCP config (<code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs">~/.cursor/mcp.json</code> on macOS/Linux or <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs">%USERPROFILE%\.cursor\mcp.json</code> on Windows):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Cursor Config',
                      code: `{
  "mcpServers": {
    "logicstamp": {
      "command": "npx",
      "args": ["logicstamp-mcp"]
    }
  }
}`,
                      copyText: JSON.stringify({ mcpServers: { logicstamp: { command: "npx", args: ["logicstamp-mcp"] } } }, null, 2)
                    }
                  ]}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  After adding the config, fully quit and restart Cursor (not just close the window) for changes to take effect. Verify in Settings → Features → Model Context Protocol.
                </p>
              </div>

              {/* For Other MCP Clients */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  For Other MCP Clients
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  For any MCP-compatible client:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Run Server',
                      code: 'npx logicstamp-mcp',
                      copyText: 'npx logicstamp-mcp'
                    }
                  ]}
                />
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                  The server communicates via stdio and will automatically connect to the client.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 italic text-center">
                  All product names, framework names, and trademarks are the property of their respective owners. LogicStamp is an independent open-source project and is not affiliated with or endorsed by the listed AI assistants, tools, or frameworks.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Verifying Installation Section */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Verifying Installation
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                After installation, verify the server is configured:
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
              <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
                You should see:
              </p>
              <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm">
                <code className="text-gray-900 dark:text-gray-100">
                  Checking MCP server health...<br />
                  <br />
                  logicstamp: npx logicstamp-mcp - ✓ Connected
                </code>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Start Section */}
          <AnimatedSection direction="up" delay={400}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Quick Start
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Once installed, start using LogicStamp in your React/TypeScript project:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'With Claude Code',
                    code: `cd /path/to/your/react-project
claude`,
                    copyText: 'cd /path/to/your/react-project\nclaude'
                  },
                  {
                    label: 'With Cursor',
                    code: `# Open your project in Cursor
# Press Cmd/Ctrl + L to open AI chat
# Then ask: "Use LogicStamp to analyze my project"`,
                    copyText: 'Open Cursor → Cmd/Ctrl + L → Ask to analyze project'
                  },
                  {
                    label: 'With Claude Desktop',
                    code: `# Open Claude Desktop
# Start a new conversation
# Ask: "Use LogicStamp to analyze my project"`,
                    copyText: 'Open Claude Desktop → New conversation → Ask to analyze project'
                  }
                ]}
              />
              <p className="text-base text-gray-600 dark:text-gray-400 mt-4 mb-2">
                Ask your AI assistant to analyze your codebase:
              </p>
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">You:</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">"Use LogicStamp to analyze the components in src/components"</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 mb-2">AI Assistant:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">[Automatically uses logicstamp_refresh_snapshot and logicstamp_list_bundles]</p>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-400">
                The 6 LogicStamp tools will be available:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 mt-2">
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_refresh_snapshot</code> - Analyze project structure</li>
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_list_bundles</code> - List available components</li>
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_read_bundle</code> - Read component contracts</li>
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_compare_snapshot</code> - Detect changes after edits</li>
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_compare_modes</code> - Generate token cost comparison</li>
                <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono">logicstamp_read_logicstamp_docs</code> - Read LogicStamp documentation</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* Next Steps */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative bg-white dark:bg-gray-900 border-2 border-indigo-200 dark:border-indigo-800 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-xl">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Ready to Use LogicStamp MCP?
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      Check out the MCP Reference for detailed tool documentation, or explore the overview page to learn more about how it works.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                      <Link
                        href="/docs/mcp/reference"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        MCP Reference
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        href="/docs/mcp"
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                      >
                        MCP Overview
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

