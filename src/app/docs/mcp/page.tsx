import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'MCP Server | LogicStamp Context Documentation',
  description: 'Model Context Protocol (MCP) server for LogicStamp Context - enabling AI assistants to safely analyze and understand React/TypeScript codebases.',
}

export default function MCPPage() {
  return (
    <>
      <DocsLayout>
      {/* Hero Section */}
          <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative text-center">
              {/* Fox Mascot */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce relative bg-transparent">
                  <Image
                    src="/mascot/logicstamp-fox.svg"
                    alt="LogicStamp Fox Mascot"
                    width={80}
                    height={80}
                    className="w-full h-full drop-shadow-2xl bg-transparent"
                  />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-bold rounded-full mb-6 sm:mb-8 backdrop-blur-sm border-2 border-indigo-300/50 dark:border-indigo-600/50 shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Model Context Protocol
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                LogicStamp{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    MCP Server
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl -z-10 opacity-20 animate-pulse"></span>
                </span>
              </h1>

              {/* Beta Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-base font-bold rounded-full mb-6 sm:mb-8 backdrop-blur-sm border-2 border-blue-300/50 dark:border-blue-600/50 shadow-xl">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Beta v0.1.1
              </div>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
                Model Context Protocol (MCP) server for LogicStamp Context - enabling AI assistants to safely analyze and understand React/TypeScript codebases.
              </p>

              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Native MCP integration with Claude Desktop, Claude Code, and other AI tools. Install and start using LogicStamp Context via MCP today!
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  This MCP server provides AI assistants with structured access to your codebase through LogicStamp Context's analysis engine. It acts as a thin wrapper around the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs sm:text-sm">stamp</code> CLI, offering:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Snapshot-based analysis</strong> - Capture codebase state before making edits</li>
                  <li><strong>Component contracts</strong> - Extract props, state, hooks, and dependencies</li>
                  <li><strong>Style metadata</strong> - Extract Tailwind classes, SCSS modules, framer-motion animations, color palettes, layout patterns</li>
                  <li><strong>Dependency graphs</strong> - Understand component relationships</li>
                  <li><strong>Drift detection</strong> - Verify changes after modifications</li>
                  <li><strong>Token optimization</strong> - Control context size with configurable code inclusion modes</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Features Section */}
          <AnimatedSection direction="up" delay={200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Features
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6 Core Tools
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { name: 'logicstamp_refresh_snapshot', desc: 'Analyze project and create snapshot' },
                    { name: 'logicstamp_list_bundles', desc: 'List available component bundles' },
                    { name: 'logicstamp_read_bundle', desc: 'Read full component contract + graph' },
                    { name: 'logicstamp_compare_snapshot', desc: 'Detect changes after edits' },
                    { name: 'logicstamp_compare_modes', desc: 'Generate token cost comparison across all modes' },
                    { name: 'logicstamp_read_logicstamp_docs', desc: 'Read LogicStamp documentation (use when confused)' }
                  ].map((tool) => (
                    <div key={tool.name} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded-md font-mono text-xs font-semibold mb-2">
                        {tool.name}
                      </code>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Benefits
                </h3>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Context-Aware Edits</strong> - AI reads actual component contracts before modifying</li>
                  <li><strong>Self-Verification</strong> - AI verifies its own changes via drift detection</li>
                  <li><strong>Token-Efficient</strong> - Only load bundles relevant to the task</li>
                  <li><strong>Safe by Default</strong> - Changes must pass drift check before approval</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Prerequisites Section */}
          <AnimatedSection direction="up" delay={300}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Prerequisites
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4 mb-4">
                <li><strong>Node.js</strong> 18.18.0 or higher</li>
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
          <AnimatedSection direction="up" delay={400}>
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
                          code: `# Install the package (when published)
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
          <AnimatedSection direction="up" delay={500}>
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
          <AnimatedSection direction="up" delay={600}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Quick Start with Claude Code
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                Once installed, start Claude Code in any React/TypeScript project:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Start Claude Code',
                    code: `cd /path/to/your/react-project
claude`,
                    copyText: 'cd /path/to/your/react-project\nclaude'
                  }
                ]}
              />
              <p className="text-base text-gray-600 dark:text-gray-400 mt-4 mb-2">
                Ask Claude to analyze your codebase:
              </p>
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">You:</p>
                <p className="text-sm text-gray-900 dark:text-gray-100">"Use LogicStamp to analyze the components in src/components"</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 mb-2">Claude:</p>
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

          {/* Usage Examples Section */}
          <AnimatedSection direction="up" delay={700}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Usage Examples
              </h2>

              {/* Example 1 */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Example: Analyzing with Style Metadata
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  To analyze components with style information (Tailwind classes, animations, color palettes):
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">1. USER:</p>
                    <p className="text-sm text-gray-900 dark:text-gray-100">"Analyze my components with style information"</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">2. AI → MCP:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Call',
                          code: 'logicstamp_refresh_snapshot({ includeStyle: true })',
                          copyText: 'logicstamp_refresh_snapshot({ includeStyle: true })'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Response: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">{`{ snapshotId: "snap_123", includeStyle: true, ... }`}</code></p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">3. AI → MCP:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Call',
                          code: 'logicstamp_list_bundles(snapshotId)',
                          copyText: 'logicstamp_list_bundles(snapshotId)'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Response: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">{`[{ bundlePath: "src/components/context.json", ... }]`}</code></p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">4. AI → MCP:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Call',
                          code: 'logicstamp_read_bundle(snapshotId, bundlePath)',
                          copyText: 'logicstamp_read_bundle(snapshotId, bundlePath)'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Response includes style metadata: Tailwind classes, SCSS modules, framer-motion usage, layout patterns, visual metadata (colors, spacing), and animation information.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">5. AI:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Provides analysis including component structure (props, state, hooks), visual design (colors, spacing, typography), layout patterns (flex vs grid, responsive breakpoints), and animation usage.</p>
                  </div>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  Example Workflow: Safe Code Modification
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                  Complete workflow for safely modifying code with verification:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">1. USER:</p>
                    <p className="text-sm text-gray-900 dark:text-gray-100">"Add a --force flag to the clean command"</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">2-4. AI → MCP:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">AI calls <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_list_bundles()</code>, and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_read_bundle()</code> to understand current implementation.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">5. AI:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Understands current implementation: cleanCommand signature, existing flags and options, file structure.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">6. AI → IDE:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Edits <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">src/cli/commands/clean.ts</code> - Adds --force flag handling.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">7. AI → MCP:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Call',
                          code: 'logicstamp_compare_snapshot()',
                          copyText: 'logicstamp_compare_snapshot()'
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Response shows: Modified files, added functions, semantic hash changes, token delta.</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">8. AI → USER:</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Presents summary of changes and asks for approval: "Here's what changed: Modified: src/cli/commands/clean.ts, Added function: handleForceFlag, Semantic hash changed (expected), Token delta: +45. This matches the expected changes. Apply? (yes/no)"</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Tool Reference Section */}
          <AnimatedSection direction="up" delay={800}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Tool Reference
              </h2>

              {/* Tool 1 */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  1. logicstamp_refresh_snapshot
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  Create a snapshot of the current codebase state.
                </p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Input',
                        code: `{
  "profile": "llm-chat",      // optional: llm-chat | llm-safe | ci-strict
  "mode": "header",            // optional: none | header | full
  "includeStyle": false,       // optional: include style metadata
  "projectPath": "/abs/path"   // REQUIRED: absolute path to project root
}`,
                        copyText: JSON.stringify({ profile: "llm-chat", mode: "header", includeStyle: false, projectPath: "/abs/path" }, null, 2)
                      }
                    ]}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `{
  "snapshotId": "snap_1764033034172",
  "projectPath": "/path/to/project",
  "profile": "llm-chat",
  "mode": "header",
  "includeStyle": false,
  "summary": {
    "totalComponents": 32,
    "totalBundles": 30,
    "totalFolders": 14,
    "totalTokenEstimate": 19127,
    "tokenEstimates": {
      "gpt4oMini": 13895,
      "gpt4oMiniFullCode": 39141,
      "claude": 12351,
      "claudeFullCode": 34792
    },
    "missingDependencies": []
  },
  "folders": [...]
}`,
                        copyText: JSON.stringify({ snapshotId: "snap_1764033034172", projectPath: "/path/to/project", profile: "llm-chat", mode: "header", includeStyle: false, summary: { totalComponents: 32, totalBundles: 30, totalFolders: 14, totalTokenEstimate: 19127, tokenEstimates: { gpt4oMini: 13895, gpt4oMiniFullCode: 39141, claude: 12351, claudeFullCode: 34792 }, missingDependencies: [] }, folders: [] }, null, 2)
                      }
                    ]}
                  />
                </div>
              </div>

              {/* Tool 2 */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  2. logicstamp_list_bundles
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  List available bundles for selective loading.
                </p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Input',
                        code: `{
  "snapshotId": "snap_1764033034172",
  "folderPrefix": "src/components"  // optional
}`,
                        copyText: JSON.stringify({ snapshotId: "snap_1764033034172", folderPrefix: "src/components" }, null, 2)
                      }
                    ]}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `{
  "snapshotId": "snap_1764033034172",
  "totalBundles": 5,
  "bundles": [
    {
      "id": "bundle_Button",
      "rootComponent": "Button",
      "filePath": "src/components/Button.tsx",
      "folder": "src/components",
      "bundlePath": "src/components/context.json",
      "position": "1/5",
      "bundleHash": "uifb:6e122a4e538c640f09501037",
      "approxTokens": 549
    }
  ]
}`,
                        copyText: JSON.stringify({ snapshotId: "snap_1764033034172", totalBundles: 5, bundles: [{ id: "bundle_Button", rootComponent: "Button", filePath: "src/components/Button.tsx", folder: "src/components", bundlePath: "src/components/context.json", position: "1/5", bundleHash: "uifb:6e122a4e538c640f09501037", approxTokens: 549 }] }, null, 2)
                      }
                    ]}
                  />
                </div>
        </div>

              {/* Tool 3 */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  3. logicstamp_read_bundle
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  Read full component contract and dependency graph.
                </p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Input',
                        code: `{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button"  // optional
}`,
                        copyText: JSON.stringify({ snapshotId: "snap_1764033034172", bundlePath: "src/components/context.json", rootComponent: "Button" }, null, 2)
                      }
                    ]}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <strong>Note:</strong> If <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">includeStyle: true</code> was used in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">refresh_snapshot</code>, the bundle contracts will include a <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">style</code> field with Tailwind classes, SCSS modules, framer-motion usage, layout patterns, visual metadata, and animation information.
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `{
  "snapshotId": "snap_1764033034172",
  "bundlePath": "src/components/context.json",
  "rootComponent": "Button",
  "bundle": {
    "type": "LogicStampBundle",
    "entryId": "...",
    "graph": {
      "nodes": [
        {
          "entryId": "...",
          "contract": {
            "type": "UIFContract",
            "kind": "react:component",
            "description": "Interactive button component",
            "logicSignature": {
              "props": {
                "onClick": { "type": "() => void" },
                "variant": { "type": "primary | secondary" }
              },
              "emits": {},
              "state": {}
            },
            "version": {
              "hooks": ["useState"],
              "components": [],
              "functions": ["handleClick"]
            }
          }
        }
      ],
      "edges": []
    }
  }
}`,
                        copyText: JSON.stringify({ snapshotId: "snap_1764033034172", bundlePath: "src/components/context.json", rootComponent: "Button", bundle: { type: "LogicStampBundle", entryId: "...", graph: { nodes: [{ entryId: "...", contract: { type: "UIFContract", kind: "react:component", description: "Interactive button component", logicSignature: { props: { onClick: { type: "() => void" }, variant: { type: "primary | secondary" } }, emits: {}, state: {} }, version: { hooks: ["useState"], components: [], functions: ["handleClick"] } } }], edges: [] } } }, null, 2)
                      }
                    ]}
                  />
                </div>
              </div>

              {/* Tool 4 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  4. logicstamp_compare_snapshot
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-3">
                  Detect changes after edits.
                </p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Input:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Input',
                        code: `{
  "profile": "llm-chat",      // optional
  "mode": "header",            // optional
  "includeStyle": false,       // optional: include style metadata in comparison
  "projectPath": "/abs/path",  // REQUIRED: absolute path to project root
  "baseline": "disk"           // optional: disk | snapshot | git:<ref>
}`,
                        copyText: JSON.stringify({ profile: "llm-chat", mode: "header", includeStyle: false, projectPath: "/abs/path", baseline: "disk" }, null, 2)
                      }
                    ]}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Output:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Output',
                        code: `{
  "baseline": "disk",
  "status": "diff",
  "summary": {
    "totalFolders": 14,
    "unchangedFolders": 12,
    "changedFolders": 2,
    "addedFolders": 0,
    "removedFolders": 0,
    "tokenDelta": {
      "gpt4oMini": 320,
      "claude": 270
    }
  },
  "folderDiffs": [
    {
      "path": "src/components",
      "status": "changed",
      "changes": [
        {
          "rootComponent": "Button",
          "type": "uif_contract_changed",
          "semanticHashBefore": "uif:637c3858",
          "semanticHashAfter": "uif:7f8d9e0a",
          "tokenDelta": 40,
          "details": {
            "modifiedFields": ["version.functions"],
            "addedFunctions": ["handleKeyDown"]
          }
        }
      ]
    }
  ]
}`,
                        copyText: JSON.stringify({ baseline: "disk", status: "diff", summary: { totalFolders: 14, unchangedFolders: 12, changedFolders: 2, addedFolders: 0, removedFolders: 0, tokenDelta: { gpt4oMini: 320, claude: 270 } }, folderDiffs: [{ path: "src/components", status: "changed", changes: [{ rootComponent: "Button", type: "uif_contract_changed", semanticHashBefore: "uif:637c3858", semanticHashAfter: "uif:7f8d9e0a", tokenDelta: 40, details: { modifiedFields: ["version.functions"], addedFunctions: ["handleKeyDown"] } }] }] }, null, 2)
                      }
                    ]}
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Change Types:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">changes</code> array can contain objects with different <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">type</code> values:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">uif_contract_changed</code> - Component contract changed (props, functions, imports, etc.)</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">hash_changed</code> - Bundle hash changed but semantic hash unchanged</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">bundle_added</code> - New component bundle added</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">bundle_removed</code> - Component bundle removed</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">props_signature_changed</code> - Props signature changed (reserved for future use)</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">Status Values:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">pass</code> - No changes detected</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">diff</code> - Changes detected</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">error</code> - Comparison failed (check <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">error</code> field for details)</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Troubleshooting Section */}
          <AnimatedSection direction="up" delay={900}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Troubleshooting
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    MCP Server Not Found
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Claude Code says "LogicStamp tools not available"</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Fix',
                        code: `# Check if server is configured
claude mcp list

# If not listed, add it
claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp

# Restart Claude Code or start a new conversation`,
                        copyText: 'claude mcp list\nclaude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp'
                      }
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Server Connection Failed
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3"><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">claude mcp list</code> shows <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp: ✗ Failed to connect</code></p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Solutions:</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4">
                    <li>Check if the package is installed: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">npm list -g logicstamp-mcp</code></li>
                    <li>For local development, verify the path is correct</li>
                    <li>Check build output: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">npm run build</code></li>
                    <li>Try manual test: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">node dist/index.js</code></li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    "Snapshot not found" Error
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Tools return "Snapshot ID not found"</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always call <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> first before using other tools.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    "stamp: command not found"
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Problem:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">MCP server can't find the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp</code> CLI</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Solution:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Install LogicStamp Context CLI globally:</p>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Install CLI',
                        code: `npm install -g logicstamp-context
# Verify installation
stamp --version`,
                        copyText: 'npm install -g logicstamp-context\nstamp --version'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Development Section */}
          <AnimatedSection direction="up" delay={1000}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Development
              </h2>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Build</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Build',
                        code: `npm install
npm run build`,
                        copyText: 'npm install\nnpm run build'
                      }
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Run Locally</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Run',
                        code: 'npm start',
                        copyText: 'npm start'
                      }
                    ]}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Watch Mode</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Watch',
                        code: 'npm run dev',
                        copyText: 'npm run dev'
                      }
                    ]}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Structure</h3>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 font-mono text-sm overflow-x-auto">
                  <code className="text-gray-900 dark:text-gray-100 whitespace-pre">
{`logicstamp-mcp/
├── src/
│   ├── index.ts              # Entry point
│   ├── types/
│   │   └── schemas.ts        # TypeScript schemas
│   └── mcp/
│       ├── server.ts         # MCP server implementation
│       ├── state.ts          # Snapshot state management
│       └── tools/
│           ├── refresh-snapshot.ts
│           ├── list-bundles.ts
│           ├── read-bundle.ts
│           └── compare-snapshot.ts
├── dist/                     # Compiled output
├── package.json
├── tsconfig.json
└── README.md`}
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Requirements for LogicStamp CLI</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                  This MCP server requires:
                </p>
                <ul className="list-disc list-inside space-y-1 text-base text-gray-600 dark:text-gray-400 ml-4 mb-3">
                  <li><strong><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp context</code> command</strong> - Must be installed and available in PATH</li>
                  <li>The CLI generates <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">context_main.json</code> files (already JSON format)</li>
                  <li>The MCP reads these JSON files directly - no special JSON output flags needed</li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <strong>Note:</strong> The MCP does not require <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">--json</code> or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">--json-summary</code> flags. It reads the JSON files that <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp context</code> generates directly from disk.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Architecture Section */}
          <AnimatedSection direction="up" delay={1100}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Architecture
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Design Principles</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li><strong>Thin Wrapper</strong> - Shells out to existing <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">stamp</code> CLI</li>
                  <li><strong>Stateful Snapshots</strong> - Tracks context before/after edits</li>
                  <li><strong>Read-Only</strong> - Server never writes to project files</li>
                  <li><strong>Token-Efficient</strong> - Selective bundle loading</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Security</h3>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                  <li>Path validation ensures <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded font-mono text-xs">projectPath</code> is within allowed directories</li>
                  <li>Bundle size limits prevent OOM</li>
                  <li>Token budgets cap total tokens per request</li>
                  <li>Snapshot TTL auto-expires old snapshots</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Links Section */}
          <AnimatedSection direction="up" delay={1200}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Links
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-600 dark:text-gray-400 ml-4">
                <li><a href="https://github.com/LogicStamp/logicstamp-context" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">LogicStamp Context (CLI)</a></li>
                <li><a href="https://github.com/LogicStamp/logicstamp-mcp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">LogicStamp Context MCP</a></li>
                <li><a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">Model Context Protocol</a></li>
                <li><a href="https://github.com/modelcontextprotocol/sdk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">MCP SDK</a></li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}














