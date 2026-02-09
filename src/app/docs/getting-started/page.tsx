import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'Complete Installation & Quick Start | LogicStamp Context Documentation',
  description: 'Complete guide to installing LogicStamp Context CLI, MCP server, and setting up watch mode for optimal AI-assisted development.',
}

export default function CompleteInstallationPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Complete Installation Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Installation & Quick Start
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Complete guide to installing LogicStamp Context CLI, MCP server, and setting up watch mode. Get everything configured in minutes.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">CLI + MCP + Watch</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">5-minute setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Production ready</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Prerequisites Card */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Prerequisites
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { icon: "🟢", title: "Node.js >= 18.18.0", desc: "Latest LTS recommended" },
                  { icon: "⚛️", title: "React/TypeScript", desc: "Your project codebase" },
                  { icon: "💻", title: "Terminal", desc: "Basic CLI knowledge" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Installation Steps */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Step 1: Install CLI */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.2s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    1
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Install LogicStamp Context CLI
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Install the CLI globally to use the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp</code> command from anywhere on your system. This is required for both CLI usage and MCP server functionality.
                  </p>
                  
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'npm (recommended)',
                        code: 'npm install -g logicstamp-context',
                        copyText: 'npm install -g logicstamp-context'
                      },
                      {
                        label: 'yarn',
                        code: 'yarn global add logicstamp-context',
                        copyText: 'yarn global add logicstamp-context'
                      },
                      {
                        label: 'pnpm',
                        code: 'pnpm add -g logicstamp-context',
                        copyText: 'pnpm add -g logicstamp-context'
                      },
                      {
                        label: 'Verify',
                        code: 'stamp --version\n# or use the short alias:\nstamp -v',
                        copyText: 'stamp --version'
                      }
                    ]}
                  />

                  <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Note:</span> The CLI is required for MCP server functionality. The MCP server uses the CLI under the hood to generate context files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 2: Initialize Project */}
          <AnimatedSection direction="up" delay={250}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.25s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    2
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Initialize Your Project
                    <span className="ml-2 sm:ml-3 text-xs sm:text-base font-normal px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">Optional</span>
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Set up <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">.gitignore</code> patterns and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">LLM_CONTEXT.md</code>. This step is optional but recommended for a clean setup.
                  </p>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Initialize (Security Scan by Default)',
                        code: '# Initialize LogicStamp in the current directory\n# Security scan runs by default\ncd your-react-project\nstamp init',
                        copyText: 'cd your-react-project\nstamp init'
                      },
                      {
                        label: 'CI-Friendly (No Prompts)',
                        code: '# Initialize without prompts (CI-friendly, security scan still runs)\ncd your-react-project\nstamp init --yes',
                        copyText: 'cd your-react-project\nstamp init --yes'
                      },
                      {
                        label: 'Skip & Use Defaults',
                        code: '# Skip initialization, use stamp context directly\n# CI-friendly: never prompts, uses defaults\ncd your-react-project\nstamp context',
                        copyText: 'cd your-react-project\nstamp context'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 3: Install MCP Server */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.3s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    3
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Install MCP Server
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Install the LogicStamp MCP server to enable AI assistants like Claude Desktop, Claude Code, and Cursor to analyze your codebase directly.
                  </p>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Install MCP Server',
                        code: 'npm install -g logicstamp-mcp',
                        copyText: 'npm install -g logicstamp-mcp'
                      },
                      {
                        label: 'Verify Installation',
                        code: 'npm list -g logicstamp-mcp',
                        copyText: 'npm list -g logicstamp-mcp'
                      }
                    ]}
                  />

                  <div className="mt-6 space-y-6">
                    {/* Claude Code Configuration */}
                    <div className="p-4 sm:p-6 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Configure for Claude Code
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Add to your global Claude Code configuration:
                      </p>
                      <TabbedCodeBlock
                        tabs={[
                          {
                            label: 'Using CLI (Easiest)',
                            code: 'claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp',
                            copyText: 'claude mcp add --scope user --transport stdio logicstamp -- npx logicstamp-mcp'
                          },
                          {
                            label: 'Manual Config (~/.claude.json)',
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

                    {/* Cursor Configuration */}
                    <div className="p-4 sm:p-6 bg-purple-50/50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Configure for Cursor
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Add to your Cursor MCP config (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">~/.cursor/mcp.json</code> on macOS/Linux or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">%USERPROFILE%\.cursor\mcp.json</code> on Windows):
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
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                        After adding the config, fully quit and restart Cursor for changes to take effect.
                      </p>
                    </div>

                    {/* Claude Desktop Configuration */}
                    <div className="p-4 sm:p-6 bg-orange-50/50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Configure for Claude Desktop
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Add to your Claude Desktop config (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code> on macOS):
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
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">
                        Completely quit and restart Claude Desktop for changes to take effect.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-indigo-50/50 dark:bg-indigo-950/20 border-l-4 border-indigo-500 dark:border-indigo-400 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-indigo-900 dark:text-indigo-200">💡 Pro Tip:</span> MCP setup is done once globally. After configuration, the LogicStamp tools will be available in all your projects automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 4: Set Up Watch Mode */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.4s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    4
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Set Up Watch Mode
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Watch mode automatically regenerates context bundles when files change, keeping your context fresh during development. This dramatically improves MCP response times.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/30 dark:via-emerald-950/20 dark:to-teal-950/20 border-l-4 border-green-500 dark:border-green-400 p-4 sm:p-5 mb-4 sm:mb-6 rounded-r-lg shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 p-1.5 bg-green-100 dark:bg-green-900/40 rounded-lg">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-green-900 dark:text-green-200 mb-1.5 sm:mb-2 text-sm sm:text-base">
                          👀 Watch Mode Benefits
                        </h4>
                        <ul className="text-xs sm:text-sm text-green-800 dark:text-green-300 space-y-1">
                          <li>• <strong>Faster MCP responses</strong> - AI can skip expensive regeneration when watch mode is active</li>
                          <li>• <strong>Automatic updates</strong> - Context stays fresh as you code</li>
                          <li>• <strong>Incremental rebuilds</strong> - Only affected bundles are regenerated</li>
                          <li>• <strong>Better workflow</strong> - No need to manually regenerate context files</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Basic Watch Mode',
                        code: '# Start watch mode in your project\ndir\nstamp context --watch',
                        copyText: 'stamp context --watch'
                      },
                      {
                        label: 'Watch with Style Metadata',
                        code: '# Watch for style changes too\nstamp context style --watch\n# or\nstamp context --include-style --watch',
                        copyText: 'stamp context style --watch'
                      },
                      {
                        label: 'Watch Specific Directory',
                        code: '# Only watch and rebuild a specific feature\nstamp context ./src/components --watch',
                        copyText: 'stamp context ./src/components --watch'
                      },
                      {
                        label: 'Watch with Logs',
                        code: '# Enable structured change logs\nstamp context --watch --log-file',
                        copyText: 'stamp context --watch --log-file'
                      },
                      {
                        label: 'Strict Watch Mode',
                        code: '# Track breaking changes and violations\nstamp context --watch --strict-watch',
                        copyText: 'stamp context --watch --strict-watch'
                      }
                    ]}
                  />

                  <div className="mt-6 p-4 bg-green-50/50 dark:bg-green-950/20 border-l-4 border-green-500 dark:border-green-400 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-green-900 dark:text-green-200">💡 Best Practice:</span> Start watch mode when beginning a coding session. The AI will automatically detect it and skip redundant regeneration for faster responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 5: Generate Your First Context */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.5s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    5
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Generate Your First Context
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Generate AI-ready context files for your project. These files can be used with AI assistants or via the MCP server.
                  </p>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Generate Context',
                        code: '# Generate context files\nstamp context',
                        copyText: 'stamp context'
                      },
                      {
                        label: 'With Style Metadata',
                        code: '# Extract Tailwind, SCSS, Material UI, animations, etc.\nstamp context style',
                        copyText: 'stamp context style'
                      },
                      {
                        label: 'Preview First',
                        code: '# See what will be generated without creating files\nstamp context --dry-run --stats',
                        copyText: 'stamp context --dry-run --stats'
                      },
                      {
                        label: 'Custom Output',
                        code: '# Generate to a custom directory\nstamp context --output ./ai-context',
                        copyText: 'stamp context --output ./ai-context'
                      }
                    ]}
                  />

                  <div className="mt-6 p-4 bg-orange-50/50 dark:bg-orange-950/20 border-l-4 border-orange-500 dark:border-orange-400 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-orange-900 dark:text-orange-200">📦 Output:</span> Context files are generated as <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">context.json</code> in each folder and <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem]">context_main.json</code> in the project root.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 6: Use with AI Assistants */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.6s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    6
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Use with AI Assistants
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Your context files are now ready to use with AI assistants. If you've configured MCP, the tools are automatically available.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-800">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        With MCP (Claude Code, Cursor, Claude Desktop)
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Simply ask your AI assistant to analyze your project:
                      </p>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">You:</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">"Use LogicStamp to analyze the components in src/components"</p>
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 mb-1">AI Assistant:</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">[Automatically uses logicstamp_refresh_snapshot and logicstamp_list_bundles]</p>
                      </div>
                    </div>

                    <div className="p-4 bg-purple-50/50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        With CLI-Generated Files
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Upload or reference context files directly:
                      </p>
                      <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-900 dark:text-gray-100">
                          "Using context.json files, explain the authentication flow"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border-l-4 border-rose-500 dark:border-rose-400 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-rose-900 dark:text-rose-200">💡 Pro Tip:</span> With watch mode running, the AI automatically detects it and skips redundant regeneration for faster responses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Quick Reference Section */}
        <AnimatedSection direction="up" delay={700}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Quick Reference
                </h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">CLI Commands</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp init</code> - Initialize project</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp context</code> - Generate context</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp context --watch</code> - Watch mode</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">stamp context style</code> - With style metadata</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">MCP Tools</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">logicstamp_refresh_snapshot</code> - Generate snapshot</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">logicstamp_list_bundles</code> - List bundles</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">logicstamp_read_bundle</code> - Read contracts</li>
                    <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs">logicstamp_watch_status</code> - Check watch mode</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Success Section */}
        <AnimatedSection direction="up" delay={800}>
          <div className="relative mt-12 sm:mt-16 lg:mt-24 mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative bg-white dark:bg-gray-900 border-2 border-green-200 dark:border-green-800 rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    🎉 You're All Set!
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    You've successfully installed LogicStamp Context CLI, configured the MCP server, and set up watch mode. Your development environment is now optimized for AI-assisted coding.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <Link
                      href="/docs/getting-started"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      CLI Quick Start
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/docs/mcp/getting-started"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      MCP Quick Start
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/docs/logicstamp-context/watch-mode"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
                    >
                      Watch Mode Guide
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
      </DocsLayout>
      <Footer />
    </>
  )
}