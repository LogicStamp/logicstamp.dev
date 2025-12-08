import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'LogicStamp Context Commands | Documentation',
  description: 'Overview of the LogicStamp Context stamp context subcommands and how they interact.',
}

export default function LogicStampCommandsPage() {
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
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                CLI Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Commands
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                LogicStamp Context ships as a single CLI entry point, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp</code>, with <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">context</code> subcommands.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Global Options Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Global Options
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
                These options are available at the top level (before any subcommand):
              </p>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Option</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Alias</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--version</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-v</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show version number and exit</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--quiet</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-q</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Suppress non-error output</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--help</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-h</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show help message and exit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 sm:mt-6 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-sm sm:text-base font-semibold text-indigo-900 dark:text-indigo-200 mb-2 sm:mb-3">Examples:</h4>
                <div className="space-y-2 font-mono text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp --version</code>
                    <span className="text-gray-600 dark:text-gray-400"># Shows: fox mascot + "Version: 0.3.0"</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp -v</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --version</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp context --quiet</code>
                    <span className="text-gray-600 dark:text-gray-400"># Suppress non-error output</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp context -q</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --quiet</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp --help</code>
                    <span className="text-gray-600 dark:text-gray-400"># Shows main help</span>
                  </div>
                  <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded">stamp -h</code>
                    <span className="text-gray-600 dark:text-gray-400"># Same as --help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Available Commands Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Available Commands
                </h2>
              </div>

              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Command</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Summary</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">When to use</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp --version</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show version number and exit.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Check installed version.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp init [path]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Initialize LogicStamp in a project by setting up .gitignore patterns. Security scan runs by default.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">First-time project setup or explicit .gitignore configuration.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-blue-50/30 dark:bg-blue-950/20">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs sm:text-sm font-mono">stamp ignore &lt;path&gt; [path2] ...</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Add files or folders to <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.stampignore</code> to exclude them from context generation.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Exclude files with secrets, large generated files, or other files that shouldn't be in context bundles.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/30 dark:bg-red-950/20">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">stamp security scan [path] [options]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Scan your project for secrets (API keys, passwords, tokens). Runs 100% locally — nothing is uploaded or sent anywhere.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Prevent accidental exposure of sensitive credentials, CI/CD security checks, project initialization.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp security --hard-reset</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Delete security report file.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Reset security configuration, start fresh after remediation.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-blue-50/30 dark:bg-blue-950/20">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs sm:text-sm font-mono">stamp context [path] [options]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Generates AI-ready context files organized by folder (one context.json per folder plus context_main.json index). CI-friendly: never prompts, respects preferences from stamp init. Automatically excludes files listed in <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code>.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Produce fresh context for AI workflows, documentation, or review.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-pink-50/30 dark:bg-pink-950/20">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 text-pink-900 dark:text-pink-100 rounded text-xs sm:text-sm font-mono">stamp context style [path] [options]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Generates context with style metadata included. Extracts visual and layout information (Tailwind, SCSS, animations, layout patterns). Equivalent to <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context --include-style</code>. Automatically excludes files listed in <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code>.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Design system analysis, AI-assisted design suggestions, layout understanding, animation detection.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp context compare [options]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Compares all context files (multi-file mode) or two specific files to detect drift, ADDED/ORPHANED folders, and token cost changes.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">CI drift detection, Jest-style approval workflows, manual inspections, or detecting folder reorganizations.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp context validate [file]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Validates context files. With no arguments, auto-detects and validates all context files using <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> (multi-file mode). With a file argument, validates that specific file (single-file mode). Falls back to <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.json</code> if <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code> doesn't exist.</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Gate CI pipelines, pre-commit checks, or manual QA before sharing context files. Ensures all folder context files are valid.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">stamp context clean [path] [options]</code>
                      </td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Removes all generated context artifacts (context_main.json, all folder context.json files, and .logicstamp/ directory).</td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Reset context files, clean before switching branches, or remove context artifacts from a project.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Command Interactions Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Command Interactions
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 rounded-xl border border-indigo-200 dark:border-indigo-800">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Run <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp init</code> to set up .gitignore patterns and <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">LLM_CONTEXT.md</code> non-interactively (by default) before generating context files. <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp context</code> respects these preferences and never prompts (CI-friendly). By default, <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">stamp init</code> automatically runs a security scan, which makes it non-interactive. Use <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">--no-secure</code> to skip the security scan and enable interactive prompts (in TTY mode).
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Run <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp ignore &lt;file&gt;</code> to add files or folders to <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">.stampignore</code> to exclude them from context generation. Useful for excluding files with secrets or other sensitive information. After running <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp security scan</code>, review the report and use <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp ignore &lt;file&gt;</code> to exclude files with detected secrets.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 rounded-xl border border-red-200 dark:border-red-800">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Run <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp security scan</code> to find secrets (API keys, passwords, tokens) in your project. Runs 100% locally—nothing is uploaded or sent anywhere. The scan runs automatically during <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp init</code> by default. Review the security report and use <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp ignore &lt;file&gt;</code> to exclude files with secrets from context generation.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Run <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp context</code> to generate multiple <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context.json</code> files (one per folder) plus <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">context_main.json</code> index, or use <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">--out</code> for a custom output directory.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10 rounded-xl border border-pink-200 dark:border-pink-800">
                <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Run <code className="px-1.5 py-0.5 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">stamp context style</code> or use <code className="px-1.5 py-0.5 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">stamp context --include-style</code> to generate context with style metadata (Tailwind, SCSS, animations, layout patterns). This makes context bundles design-aware, enabling AI assistants to understand both the logic and visual presentation of your components.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Use <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp context validate</code> to validate <strong>all context files</strong> (multi-file mode using <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">context_main.json</code>) or a specific file. With no arguments, automatically validates all folder context files. The exit code is CI-friendly.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Use <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">stamp context compare</code> to detect drift across <strong>all context files</strong> (multi-file mode using <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">context_main.json</code>) or between two specific files. Automatically detects ADDED folders, ORPHANED folders, per-folder DRIFT, and unchanged files (PASS). Use <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">--clean-orphaned</code> to automatically remove stale context files.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10 rounded-xl border border-rose-200 dark:border-rose-800">
                <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Use <code className="px-1.5 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">stamp context clean</code> to remove all context artifacts. Safe by default (shows what would be removed), requires <code className="px-1.5 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">--all --yes</code> to actually delete files. Useful for resetting context files or cleaning before switching branches.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Reference Section */}
        <AnimatedSection direction="up" delay={300}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Quick Reference
            </h2>
            <TabbedCodeBlock
              tabs={[
                {
                  label: 'Quick Reference',
                  code: `# Show version number
stamp --version

# Initialize LogicStamp in your project (sets up .gitignore and LLM_CONTEXT.md preferences)
# Non-interactive by default, security scan runs automatically
stamp init

# Explicitly skip prompts (redundant - already non-interactive by default)
stamp init --yes

# Initialize without security scan (enables interactive prompts in TTY mode)
stamp init --no-secure

# Add files to .stampignore to exclude from context generation
stamp ignore src/secrets.ts

# Add multiple files or use glob patterns
stamp ignore src/config/credentials.ts "**/*.key"

# Scan for secrets and sensitive data
stamp security scan

# Generate context for your repository
stamp context

# Generate context with style metadata
stamp context style

# Or use the flag (equivalent)
stamp context --include-style

# Scan a subdirectory and use the llm-safe profile
stamp context ./src --profile llm-safe

# Compare token costs across all modes
stamp context --compare-modes

# Validate all context files (multi-file mode)
stamp context validate       # uses context_main.json to validate all folders

# Or validate a specific file
stamp context validate src/context.json

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
                    copyText: `# Show version number
stamp --version

# Initialize LogicStamp in your project (sets up .gitignore and LLM_CONTEXT.md preferences)
# Non-interactive by default, security scan runs automatically
stamp init

# Explicitly skip prompts (redundant - already non-interactive by default)
stamp init --yes

# Initialize without security scan (enables interactive prompts in TTY mode)
stamp init --no-secure

# Add files to .stampignore to exclude from context generation
stamp ignore src/secrets.ts

# Add multiple files or use glob patterns
stamp ignore src/config/credentials.ts "**/*.key"

# Scan for secrets and sensitive data
stamp security scan

# Generate context for your repository
stamp context

# Generate context with style metadata
stamp context style

# Or use the flag (equivalent)
stamp context --include-style

# Scan a subdirectory and use the llm-safe profile
stamp context ./src --profile llm-safe

# Compare token costs across all modes
stamp context --compare-modes

# Validate all context files (multi-file mode)
stamp context validate       # uses context_main.json to validate all folders

# Or validate a specific file
stamp context validate src/context.json

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
          </div>
        </AnimatedSection>

        {/* See Also Section */}
        <AnimatedSection direction="up" delay={400}>
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              See Also
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
              For detailed documentation on specific features and commands:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/docs/logicstamp-context/context"
                className="group p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors">
                      `context` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Complete <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context</code> command reference
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/style"
                className="group p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/10 rounded-xl border border-pink-200 dark:border-pink-800 hover:border-pink-300 dark:hover:border-pink-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-pink-900 dark:text-pink-200 group-hover:text-pink-700 dark:group-hover:text-pink-100 transition-colors">
                      `style` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Style metadata extraction guide
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/init"
                className="group p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-green-900 dark:text-green-200 group-hover:text-green-700 dark:group-hover:text-green-100 transition-colors">
                      `init` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Project initialization guide
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/validate"
                className="group p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-200 group-hover:text-purple-700 dark:group-hover:text-purple-100 transition-colors">
                      `validate` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Schema validation reference
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/compare-command"
                className="group p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-amber-900 dark:text-amber-200 group-hover:text-amber-700 dark:group-hover:text-amber-100 transition-colors">
                      `compare` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Context drift detection and comparison
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/clean"
                className="group p-4 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10 rounded-xl border border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rose-600 dark:text-rose-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-rose-900 dark:text-rose-200 group-hover:text-rose-700 dark:group-hover:text-rose-100 transition-colors">
                      `clean` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Remove context artifacts
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                href="/docs/logicstamp-context/security-scan"
                className="group p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 rounded-xl border border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 transition-all"
              >
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-red-900 dark:text-red-200 group-hover:text-red-700 dark:group-hover:text-red-100 transition-colors">
                      `security scan` command
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Find secrets and sensitive data before committing
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
















