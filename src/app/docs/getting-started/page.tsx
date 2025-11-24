import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import CopyButton from '@/components/ui/CopyButton'
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
                Quick Start Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Installation & Quick Start
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Install LogicStamp Context CLI and generate AI-ready context for your React/TypeScript projects in under 2 minutes
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Zero configuration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">up to 65% token reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">AI-optimized output</span>
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
                  { icon: "🟢", title: "Node.js 18+", desc: "Latest LTS recommended" },
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
          {/* Step 1: Install */}
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
                    Install LogicStamp Context
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Install the CLI globally to use the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp</code> command from anywhere on your system.
                  </p>
                  
                  <div className="bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-3 sm:p-4 mb-4 sm:mb-6 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-blue-900 dark:text-blue-200">💡 Pro tip:</span> Global installation provides system-wide access to the CLI, perfect for working across multiple projects.
                    </p>
                  </div>

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
                        code: 'stamp context --version',
                        copyText: 'stamp context --version'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 2: Initialize */}
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
                    Set up <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">.gitignore</code> patterns and generate initial documentation. The CLI will prompt you on first run if you skip this step.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">What it does:</h4>
                      <ul className="text-sm text-purple-800 dark:text-purple-300 space-y-1">
                        <li>• Adds context files to .gitignore</li>
                        <li>• Creates LLM_CONTEXT.md guide</li>
                        <li>• Sets up project structure</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20 rounded-xl border border-gray-200 dark:border-gray-800">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-2">When to skip:</h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-400 space-y-1">
                        <li>• Testing the tool first</li>
                        <li>• Temporary analysis</li>
                        <li>• CI/CD environments</li>
                      </ul>
                    </div>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Initialize',
                        code: 'cd your-react-project\nstamp init',
                        copyText: 'cd your-react-project\nstamp init'
                      },
                      {
                        label: 'Skip & Auto-prompt',
                        code: 'cd your-react-project\nstamp context  # Will prompt on first run',
                        copyText: 'cd your-react-project\nstamp context'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 3: Generate Context */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.3s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    3
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Generate AI Context
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Run the context generator to analyze your codebase and create structured bundles optimized for AI assistants.
                  </p>

                  {/* Visual representation of output */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2 sm:mb-3 flex items-baseline gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Output Structure
                    </h4>
                    <div className="space-y-2 font-mono text-xs sm:text-sm">
                      <div className="flex items-center gap-3 text-green-800 dark:text-green-300">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        <span>context_main.json</span>
                        <span className="text-xs bg-green-100 dark:bg-green-900/40 px-2 py-0.5 rounded-full">project index</span>
                      </div>
                      <div className="flex items-center gap-3 text-green-800 dark:text-green-300 ml-4">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        <span>src/app/docs/getting-started/context.json</span>
                      </div>
                      <div className="flex items-center gap-3 text-green-800 dark:text-green-300 ml-4">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        <span>src/components/context.json</span>
                      </div>
                      <div className="flex items-center gap-3 text-green-800 dark:text-green-300 ml-4">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                        <span>src/hooks/context.json</span>
                      </div>
                    </div>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Generate',
                        code: 'stamp context',
                        copyText: 'stamp context'
                      },
                      {
                        label: 'Preview First',
                        code: 'stamp context --dry-run --stats',
                        copyText: 'stamp context --dry-run --stats'
                      },
                      {
                        label: 'Watch Mode',
                        code: 'stamp context --watch',
                        copyText: 'stamp context --watch'
                      },
                      {
                        label: 'Custom Output',
                        code: 'stamp context --output ./ai-context',
                        copyText: 'stamp context --output ./ai-context'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 4: Use in IDE */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.4s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    4
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    Integrate with AI Assistants
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Your generated <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs sm:text-sm">context.json</code> bundles and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded font-mono text-xs sm:text-sm">context_main.json</code> index plug straight into your favorite AI coding tools.
                  </p>

                  {/* Compatible tools grid */}
                  <div className="w-full mb-6 sm:mb-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      {[
                        { 
                          name: "Cursor", 
                          description: "Uses context.json bundles automatically when you run AI commands.",
                          features: [
                            "Detects context.json when you trigger AI",
                            "No extra configuration",
                            "Keeps suggestions aligned with your project"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.25 8.718l-3.126-.975a1.125 1.125 0 00-1.147-.85L4.5 9.75l3.126.975a1.125 1.125 0 001.186-.883l.777-2.897m-5.243 0a.75.75 0 01.278-.995 3.75 3.75 0 013.57-.005a.75.75 0 01.278.995m-4.125 0a2.25 2.25 0 00-.75 2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.75-2.25H6.75z" />
                            </svg>
                          ),
                          iconBg: "from-gray-500/10 to-gray-700/10",
                        },
                        { 
                          name: "Windsurf", 
                          description: "Understands your context.json bundles alongside the workspace.",
                          features: [
                            "Picks up context.json in open projects",
                            "Boosts inline completions with component context",
                            "Works seamlessly with existing AI workflows"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12c0 2 2 3 4 3s4-1 4-3M10 12c0 2 2 3 4 3s4-1 4-3M18 12c0 2 2 3 4 3s4-1 4-3" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20M2 8h20M2 16h20" />
                            </svg>
                          ),
                          iconBg: "from-blue-500/10 to-blue-600/10",
                        },
                        { 
                          name: "GitHub Copilot", 
                          description: "Guide Copilot by opening or referencing context.json files.",
                          features: [
                            "Chat integration via Copilot Chat",
                            "File reference support (@file context.json)",
                            "More relevant, context-aware suggestions"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          ),
                          iconBg: "from-gray-500/10 to-gray-700/10",
                        },
                        { 
                          name: "Claude", 
                          description: "Paste or upload context.json bundles for deep analysis.",
                          features: [
                            "Manual file upload or copy-paste",
                            "Detailed reasoning over your contracts",
                            "Stronger understanding of component behavior"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          ),
                          iconBg: "from-orange-500/10 to-orange-600/10",
                        },
                        { 
                          name: "ChatGPT", 
                          description: "Upload or paste context.json to drive the conversation.",
                          features: [
                            "File upload support (Code / Advanced Data)",
                            "Multi-file context via zipped bundles or multiple uploads",
                            "Conversation history that stays aligned with your code"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          ),
                          iconBg: "from-green-500/10 to-green-600/10",
                        },
                        { 
                          name: "Other IDEs", 
                          description: "Use context.json with any editor that has an AI sidebar or chat.",
                          features: [
                            "Manual integration via file open / copy-paste",
                            "Works with any file system / repo",
                            "Universal, assistant-agnostic format"
                          ],
                          icon: () => (
                            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          ),
                          iconBg: "from-purple-500/10 to-purple-600/10",
                        }
                      ].map((tool) => {
                        const IconComponent = tool.icon
                        return (
                          <div
                            key={tool.name}
                            className="group relative transition-all duration-700"
                          >
                            <div className="relative h-full rounded-2xl p-8 shadow-sm transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                              <div className="relative z-10">
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${tool.iconBg} text-gray-700 dark:text-gray-300`}>
                                  <IconComponent />
                                </div>
                                
                                <h4 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                  {tool.name}
                                </h4>
                                
                                <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                                  {tool.description}
                                </p>
                                
                                <ul className="mt-6 space-y-2.5">
                                  {tool.features.map((feature) => (
                                    <li 
                                      key={feature} 
                                      className="flex items-start gap-x-3 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                      <svg className="h-5 w-5 flex-shrink-0 text-emerald-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="bg-amber-50/50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-3 sm:p-4 mb-4 sm:mb-6 rounded-r-lg">
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <span className="font-semibold text-amber-900 dark:text-amber-200">💡 Best Practice:</span>{' '}
                      When prompting an AI assistant, explicitly tell it to use the per-folder{' '}
                      <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem] sm:text-xs">
                        context.json
                      </code>{' '}
                      files and the root{' '}
                      <code className="px-1 bg-gray-100 dark:bg-gray-800 rounded font-mono text-[0.7rem] sm:text-xs">
                        context_main.json
                      </code>{' '}
                      to understand your project structure. This produces the most consistent and grounded results across all assistants.
                    </p>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Component Query',
                        code: 'Using context.json files, explain the authentication flow',
                        copyText: 'Using context.json files, explain the authentication flow'
                      },
                      {
                        label: 'Architecture Review',
                        code: 'Based on context_main.json, suggest performance improvements',
                        copyText: 'Based on context_main.json, suggest performance improvements'
                      },
                      {
                        label: 'Dependency Check',
                        code: 'Reference context.json to identify circular dependencies',
                        copyText: 'Reference context.json to identify circular dependencies'
                      },
                      {
                        label: 'Bug Hunt',
                        code: 'Use the context files to find potential TypeScript errors',
                        copyText: 'Use the context files to find potential TypeScript errors'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 5: Optimize */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.5s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    5
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Optimize Token Usage
                    <span className="ml-2 sm:ml-3 text-xs sm:text-base font-normal px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">Advanced</span>
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Compare different code inclusion modes to find the perfect balance between context richness and token efficiency.
                  </p>

                  {/* Token comparison table */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-4 sm:mb-6 w-full">
                    <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                      <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Mode</th>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Savings</th>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Content</th>
                            <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">Use Case</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          <tr>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                              <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">none</code>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">~79%</span>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">Contracts only</td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400">API docs</td>
                          </tr>
                          <tr className="bg-blue-50/30 dark:bg-blue-950/20">
                            <td className="px-2 sm:px-6 py-2 sm:py-4">
                              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono whitespace-nowrap">header</code>
                                <span className="px-1.5 sm:px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 whitespace-nowrap">default</span>
                              </div>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200">~65%</span>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">JSDoc + contracts</td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400">AI chat</td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                              <code className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs font-mono">full</code>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">0%</span>
                            </td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">Complete source</td>
                            <td className="px-2 sm:px-6 py-2 sm:py-4 text-xs text-gray-600 dark:text-gray-400">Deep analysis</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Compare Modes',
                        code: 'stamp context --compare-modes',
                        copyText: 'stamp context --compare-modes'
                      },
                      {
                        label: 'Minimal Context',
                        code: 'stamp context --include-code none',
                        copyText: 'stamp context --include-code none'
                      },
                      {
                        label: 'Balanced (Default)',
                        code: 'stamp context --include-code header',
                        copyText: 'stamp context --include-code header'
                      },
                      {
                        label: 'Full Analysis',
                        code: 'stamp context --include-code full --max-nodes 50',
                        copyText: 'stamp context --include-code full --max-nodes 50'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Step 6: Validate */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative sm:sticky sm:top-24 z-20 opacity-0 translate-x-[-1rem] animate-[fadeInSlide_0.5s_ease-out_0.6s_forwards]">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-bold text-base sm:text-xl flex items-center justify-center shadow-lg">
                    6
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Validate Output
                    <span className="ml-2 sm:ml-3 text-xs sm:text-base font-normal px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">CI/CD Ready</span>
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    Ensure your context files are valid and schema-compliant before sharing or committing.
                  </p>

                  <div className="bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <p><strong className="text-rose-900 dark:text-rose-200">Validation includes:</strong></p>
                        <ul className="space-y-0.5 sm:space-y-1 ml-3 sm:ml-4">
                          <li>• JSON structure integrity</li>
                          <li>• Required field verification</li>
                          <li>• Schema compliance check</li>
                          <li>• Exit code: 0 (success) or 1 (failure)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Validate Default',
                        code: 'stamp context validate',
                        copyText: 'stamp context validate'
                      },
                      {
                        label: 'Custom File',
                        code: 'stamp context validate ./my-context.json',
                        copyText: 'stamp context validate ./my-context.json'
                      },
                      {
                        label: 'CI Pipeline',
                        code: '# In your CI/CD workflow\nstamp context\nstamp context validate',
                        copyText: 'stamp context\nstamp context validate'
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Success Section */}
        <AnimatedSection direction="up" delay={700}>
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
                    🎉 Congratulations! You're All Set
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    You've successfully installed LogicStamp Context and generated AI-ready documentation for your React/TypeScript project. Your context files are now ready to supercharge your AI-assisted development workflow.
                  </p>
                  
                  <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="text-center p-3 sm:p-4 bg-green-50 dark:bg-green-950/20 rounded-xl">
                      <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">65%</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Average token reduction</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl">
                      <p className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">2x</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Faster AI comprehension</p>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl">
                      <p className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400">100%</p>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Zero configuration</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                    <a
                      href="https://github.com/LogicStamp/logicstamp-context"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Star on GitHub
                    </a>
                    <Link
                      href="/docs/logicstamp-context/commands"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      Explore CLI Commands
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/docs/best-practices"
                      className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-gray-600 dark:text-gray-400 font-semibold hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
                    >
                      Best Practices
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

        {/* Quick Tips Section */}
        <AnimatedSection direction="up" delay={800}>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 rounded-2xl p-4 sm:p-6 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-indigo-900 dark:text-indigo-200 mb-1 sm:mb-2">Pro Tip: Keep Context Fresh</h4>
                  <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300 leading-relaxed">
                    Regenerate context after major refactors. Use <code className="px-1 sm:px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp context compare</code> to detect changes since last generation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-2xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-1.5 sm:p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-purple-900 dark:text-purple-200 mb-1 sm:mb-2">Workflow Integration</h4>
                  <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300 leading-relaxed">
                    Add context generation to your build process or git hooks to ensure AI assistants always have the latest project structure.
                  </p>
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