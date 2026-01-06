import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Usage Guide | LogicStamp Context Documentation',
  description: 'Practical usage patterns and workflows for the LogicStamp Context CLI using stamp context.',
}

export default function UsagePage() {
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
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Usage Guide
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Usage Guide
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Learn how to use LogicStamp Context effectively in local development and CI workflows.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Local development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">CI/CD workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">Automation ready</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Start Section */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Quick Start
                </h2>
              </div>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Quick Start (Recommended)',
                    code: `# Install globally
npm install -g logicstamp-context

# Initialize (non-interactive by default, security scan runs automatically)
stamp init

# Generate context for your project
stamp context

# Output: Multiple context.json files (one per folder) 
# plus context_main.json index`,
                    copyText: `# Install globally
npm install -g logicstamp-context

# Initialize (non-interactive by default, security scan runs automatically)
stamp init

# Generate context for your project
stamp context

# Output: Multiple context.json files (one per folder) 
# plus context_main.json index`
                  },
                  {
                    label: 'Quick Start (Basic)',
                    code: `# Install globally
npm install -g logicstamp-context

# Generate context for your project
stamp context

# Output: Multiple context.json files (one per folder) 
# plus context_main.json index`,
                    copyText: `# Install globally
npm install -g logicstamp-context

# Generate context for your project
stamp context

# Output: Multiple context.json files (one per folder) 
# plus context_main.json index`
                  }
                ]}
              />
              <div className="mt-4 p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg mb-4">
                <p className="text-xs sm:text-sm text-gray-800 dark:text-blue-100">
                  <span className="font-semibold text-blue-900 dark:text-blue-200">Note:</span>{' '}
                  "Global CLI" means the tool is installed globally on your system (via <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">npm install -g</code>), making the <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp</code> command available from any directory in your terminal, not just within a specific project folder.
                </p>
                <ul className="mt-2 space-y-1 text-xs sm:text-sm text-gray-800 dark:text-blue-100 ml-4 list-disc">
                  <li><strong>Local install:</strong> <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">npm install logicstamp-context</code> → only available in that project</li>
                  <li><strong>Global install:</strong> <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">npm install -g logicstamp-context</code> → available everywhere via <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp</code> command</li>
                </ul>
              </div>
              <div className="mt-4 p-4 bg-red-50/50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg">
                <p className="text-xs sm:text-sm text-gray-800 dark:text-red-100">
                  <span className="font-semibold text-red-900 dark:text-red-200">🔒 Security Best Practice:</span>{' '}
                  By default, <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp init</code> is non-interactive because it automatically runs a security scan to detect secrets in your JS/TS/JSON files. This prevents sensitive data from being included in context files. Use <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">--no-secure</code> to skip the security scan and enable interactive prompts (in TTY mode).
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Command Syntax Section */}
        <AnimatedSection direction="up" delay={200}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Command Syntax
                </h2>
              </div>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: `stamp --version                    # Show version number
stamp --help                       # Show help
stamp init [path] [options]        # Initialize LogicStamp in project
stamp ignore <path> [path2] ...     # Add files/folders to .stampignore
stamp context [path] [options]
stamp context style [path] [options]  # Generate context with style metadata
stamp context validate [file]
stamp context compare [oldFile] [newFile] [options]  # Auto-mode (default): omit files to compare all context files
stamp context clean [path] [options]
stamp security scan [path] [options]  # Scan for secrets and generate report
stamp security --hard-reset [options]  # Reset security configuration`,
                    copyText: `stamp --version                    # Show version number
stamp --help                       # Show help
stamp init [path] [options]        # Initialize LogicStamp in project
stamp ignore <path> [path2] ...     # Add files/folders to .stampignore
stamp context [path] [options]
stamp context style [path] [options]  # Generate context with style metadata
stamp context validate [file]
stamp context compare [oldFile] [newFile] [options]  # Auto-mode (default): omit files to compare all context files
stamp context clean [path] [options]
stamp security scan [path] [options]  # Scan for secrets and generate report
stamp security --hard-reset [options]  # Reset security configuration`
                  }
                ]}
              />
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 leading-relaxed">
                Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp init</code> to set up your project (non-interactive by default, security scan runs automatically; optional, <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> is CI-friendly and never prompts),{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">stamp security scan</code> to find secrets in your JS/TS/JSON files before generating context,{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> to generate folder-organized context files,{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context style</code> to generate context with style metadata (Tailwind, SCSS, animations),{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context validate</code> to verify them,{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context compare</code> to detect drift across all folders, and{' '}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">stamp context clean</code> to remove context artifacts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Global Options Section */}
        <AnimatedSection direction="up" delay={250}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Global Options
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                These options are available at the top level (before any subcommand):
              </p>
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-4 sm:mb-6">
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
              <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Examples:</p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Examples',
                      code: `stamp --version    # Shows: fox mascot + "Version: 0.3.5"
stamp -v           # Same as --version
stamp --help       # Shows main help
stamp -h           # Same as --help`,
                      copyText: `stamp --version    # Shows: fox mascot + "Version: 0.3.5"
stamp -v           # Same as --version
stamp --help       # Shows main help
stamp -h           # Same as --help`
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stamp Ignore Command Section */}
        <AnimatedSection direction="up" delay={275}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  <code className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 font-mono text-lg sm:text-xl">stamp ignore</code> Command
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Add files or folders to <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-teal-600 dark:text-teal-400 rounded-md font-mono text-xs sm:text-sm">.stampignore</code> to exclude them from context generation. This is useful for excluding files with secrets, large generated files, or other files that shouldn't be included in context bundles.
              </p>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Arguments</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-teal-600 dark:text-teal-400 rounded-md font-mono text-xs sm:text-sm">&lt;path1&gt; [path2] ...</code> – One or more file or folder paths to ignore (relative to project root). Supports glob patterns.
                </p>
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Key Options</h3>
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
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--quiet</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-q</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Suppress verbose output (show only errors)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">Examples</h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Examples',
                      code: `# Add a single file to .stampignore
stamp ignore src/secrets.ts

# Add multiple files/folders
stamp ignore src/config/credentials.ts src/secrets/

# Add glob patterns
stamp ignore "**/secrets.ts" "**/*.key"

# Quiet mode
stamp ignore src/secrets.ts --quiet`,
                      copyText: `# Add a single file to .stampignore
stamp ignore src/secrets.ts

# Add multiple files/folders
stamp ignore src/config/credentials.ts src/secrets/

# Add glob patterns
stamp ignore "**/secrets.ts" "**/*.key"

# Quiet mode
stamp ignore src/secrets.ts --quiet`
                    }
                  ]}
                />
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h3 className="text-base font-semibold text-teal-900 dark:text-teal-200 mb-2">What It Does</h3>
                  <ul className="space-y-1.5 text-sm text-teal-800 dark:text-teal-300 ml-4 list-disc">
                    <li>Creates <code className="px-1 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">.stampignore</code> if it doesn't exist</li>
                    <li>Adds specified paths to <code className="px-1 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">.stampignore</code></li>
                    <li>Prevents duplicate entries</li>
                    <li>Normalizes paths automatically</li>
                    <li>Shows feedback about what was added (unless <code className="px-1 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">--quiet</code> is used)</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-base font-semibold text-blue-900 dark:text-blue-200 mb-2">Integration with Other Commands</h3>
                  <ul className="space-y-1.5 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li>Files in <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.stampignore</code> are automatically excluded when running <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context</code></li>
                    <li>Use <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp ignore &lt;file&gt;</code> to add files with detected secrets to <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.stampignore</code> after reviewing the security report</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Common Options Section */}
        <AnimatedSection direction="up" delay={300}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Common Options
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  {
                    option: '--depth',
                    desc: 'Control how far dependency traversal should go (0 = entry only, 1 = direct dependencies).'
                  },
                  {
                    option: '--include-code',
                    desc: 'Choose between none, header, or full code snippets.'
                  },
                  {
                    option: '--include-style',
                    desc: 'Extract style metadata (Tailwind, SCSS, animations, layout patterns).'
                  },
                  {
                    option: '--compare-modes',
                    desc: 'Show detailed token comparison across all modes (none/header/header+style/full).'
                  },
                  {
                    option: '--profile',
                    desc: 'Apply preset settings like llm-chat, llm-safe, or ci-strict.'
                  },
                  {
                    option: '--dry-run & --stats',
                    desc: 'Ideal for CI dashboards and automation.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded-md font-mono text-xs sm:text-sm flex-shrink-0">
                      {item.option}
                    </code>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CI and Automation Tips Section */}
        <AnimatedSection direction="up" delay={450}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  CI and Automation Tips
                </h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  'By default, stamp init is non-interactive because it automatically runs a security scan to detect secrets in your JS/TS/JSON files before generating context. Use --no-secure to enable interactive mode.',
                  'After running stamp security scan, review the report and use stamp ignore <file> to exclude files with detected secrets from context generation.',
                  'Use --dry-run to inspect bundle size and counts without producing files.',
                  'Use --stats to emit machine-readable summary lines and append them to logs or dashboards.',
                  'Use --compare-modes to see token costs across all modes (none/header/header+style/full) before generating context.',
                  'Use stamp context style or --include-style to generate design-aware context with visual and layout metadata.',
                  'Use stamp context compare in CI to detect context drift across all folders. Use --approve for auto-updates (like Jest snapshots).',
                  'Combine stamp security scan, stamp context, and stamp context validate in pre-commit hooks or CI jobs to keep context files secure and in sync.',
                  'Use stamp context clean --all --yes to reset context files before regenerating or switching branches.'
                ].map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Style Metadata Section */}
        <AnimatedSection direction="up" delay={550}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Style Metadata Extraction
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Generate design-aware context bundles with visual and layout information using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 rounded-md font-mono text-xs sm:text-sm">stamp context style</code> or the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-pink-600 dark:text-pink-400 rounded-md font-mono text-xs sm:text-sm">--include-style</code> flag.
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Style Command',
                    code: `# Generate context with style metadata
stamp context style

# Equivalent using flag
stamp context --include-style

# With specific options
stamp context style --profile llm-safe
stamp context style --include-code header`,
                    copyText: `# Generate context with style metadata
stamp context style

# Equivalent using flag
stamp context --include-style

# With specific options
stamp context style --profile llm-safe
stamp context style --include-code header`
                  }
                ]}
              />
              <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">What Gets Extracted</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Tailwind CSS classes (layout, spacing, colors)</li>
                    <li>• SCSS/CSS module imports and details</li>
                    <li>• Layout patterns (flex, grid, hero sections)</li>
                    <li>• Animation metadata (framer-motion, CSS)</li>
                    <li>• Visual patterns (colors, spacing, typography)</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Use Cases</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Design system analysis</li>
                    <li>• AI-assisted design suggestions</li>
                    <li>• Layout understanding</li>
                    <li>• Animation detection</li>
                    <li>• Style consistency tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Token Comparison Section */}
        <AnimatedSection direction="up" delay={650}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Token Cost Comparison
                </h2>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">--compare-modes</code> to see detailed token cost analysis across all available modes before generating context.
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Compare Modes',
                    code: `# Compare token costs across all modes
stamp context --compare-modes

# Output shows:
# - none: Contracts only (10-20% of raw source)
# - header: Contracts + JSDoc headers (20-30% of raw source)
# - header+style: Header + style metadata (40-60% of raw source)
# - full: Complete source code (80-100% of raw source)`,
                    copyText: `# Compare token costs across all modes
stamp context --compare-modes

# Output shows:
# - none: Contracts only (10-20% of raw source)
# - header: Contracts + JSDoc headers (20-30% of raw source)
# - header+style: Header + style metadata (40-60% of raw source)
# - full: Complete source code (80-100% of raw source)`
                  }
                ]}
              />
              <div className="mt-6 sm:mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  <strong>Optional Tokenizers:</strong> LogicStamp Context includes <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">@dqbd/tiktoken</code> (GPT-4) and <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">@anthropic-ai/tokenizer</code> (Claude) as optional dependencies. npm automatically attempts to install them when you install <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs">logicstamp-context</code>. If installation succeeds, you get model-accurate token counts. If installation fails or is skipped, the tool gracefully falls back to character-based estimation (typically within 10-15% accuracy).
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Example Workflows Section */}
        <AnimatedSection direction="up" delay={750}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Example Workflows
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Basic Context Generation',
                    code: `# Generate context for entire project
stamp context

# Scan specific directory
stamp context ./src

# Custom output directory
stamp context --out ./output`
                  },
                  {
                    title: 'Style-Aware Context',
                    code: `# Generate context with style metadata
stamp context style

# Or use the flag
stamp context --include-style

# With conservative profile
stamp context style --profile llm-safe`
                  },
                  {
                    title: 'Token Cost Analysis',
                    code: `# Compare all modes before generating
stamp context --compare-modes

# Generate with specific mode
stamp context --include-code header
stamp context --include-code full --max-nodes 20`
                  },
                  {
                    title: 'CI/CD Integration',
                    code: `# Scan for secrets first (fail build if found)
stamp security scan --quiet

# Generate stats for monitoring
stamp context --stats > stats.json

# Validate generated context
stamp context validate

# Check for drift
stamp context compare --stats

# Auto-approve updates
stamp context compare --approve`
                  },
                  {
                    title: 'Security Workflow',
                    code: `# Initialize (non-interactive by default, security scan runs automatically)
stamp init

# Or scan manually before generating context
stamp security scan

# Review the report and exclude files with secrets
stamp ignore src/secrets.ts

# Generate context (secrets are sanitized automatically)
stamp context

# Regular security checks
stamp security scan`
                  }
                ].map((workflow, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
                      {workflow.title}
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: workflow.title,
                          code: workflow.code,
                          copyText: workflow.code
                        }
                      ]}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
















