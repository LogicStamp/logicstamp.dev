import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp init` Command | LogicStamp Context Documentation',
  description: 'Initialize LogicStamp in your project by setting up .gitignore patterns and other project configuration.',
}

export default function InitCommandPage() {
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
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Initialization Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">stamp init</code> Command
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Initialize LogicStamp in your project by setting up <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">.gitignore</code> patterns and other project configuration.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Syntax Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Syntax
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Syntax',
                    code: 'stamp init [path] [options]',
                    copyText: 'stamp init [path] [options]'
                  }
                ]}
              />
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">[path]</strong> – Target directory to initialize (default: current directory)
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Options Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Options
                  </h2>
                </div>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Option</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/30 dark:bg-red-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">--secure</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Run <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp init</code> with auto-yes (no prompts), then automatically run <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp security scan --apply</code> to scan for secrets in your JS/TS/JSON files. <strong className="text-red-900 dark:text-red-200">Warning:</strong> If <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.stampignore</code> is created, it means secrets were detected - this is a bad sign. You should remove secrets from your codebase rather than ignoring them.</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--skip-gitignore</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Skip <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code> setup</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-h, --help</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show help</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What It Does Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What It Does
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp init</code> command sets up LogicStamp in your project by:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm">1</div>
                  <div className="flex-1">
                    <p className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-base sm:text-lg">
                      Creating or updating <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.gitignore</code> with LogicStamp-specific patterns:
                    </p>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4">
                      <li>• <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context.json</code> – Context files generated per folder</li>
                      <li>• <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context_*.json</code> – Main index and other context variants</li>
                      <li>• <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">*.uif.json</code> – UIF contract files</li>
                      <li>• <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">logicstamp.manifest.json</code> – Dependency manifest files</li>
                      <li>• <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.logicstamp/</code> – Configuration directory</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-sm">2</div>
                  <div className="flex-1">
                    <p className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                      Generating <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">LLM_CONTEXT.md</code> in the project root
                    </p>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      A guide that helps AI assistants understand your project structure and how to work with LogicStamp context files (if it doesn't already exist)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm">3</div>
                  <div className="flex-1">
                    <p className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-base sm:text-lg">
                      Creating <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">.logicstamp/config.json</code>
                    </p>
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      Saves your preferences so <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">stamp context</code> respects them (CI-friendly, never prompts)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Examples Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Examples
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Basic initialization',
                    code: `# Initialize LogicStamp in the current directory
stamp init

# Initialize with security scan (recommended)
# Combines stamp init with stamp security scan --apply
stamp init --secure

# Initialize a specific directory
stamp init ./my-project

# Initialize with security scan for a specific directory
stamp init ./my-project --secure

# Skip .gitignore setup
stamp init --skip-gitignore`,
                    copyText: `# Initialize LogicStamp in the current directory
stamp init

# Initialize with security scan (recommended)
# Combines stamp init with stamp security scan --apply
stamp init --secure

# Initialize a specific directory
stamp init ./my-project

# Initialize with security scan for a specific directory
stamp init ./my-project --secure

# Skip .gitignore setup
stamp init --skip-gitignore`
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Smart Detection Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Smart Detection in <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> command includes smart setup management for both <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">.gitignore</code> and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">LLM_CONTEXT.md</code> with the following behavior:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">CI-Friendly Behavior</h3>
                    <p className="text-sm text-green-800 dark:text-green-300 mb-2">
                      <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp context</code> is <strong>CI-friendly</strong> and <strong>never prompts</strong>. It respects preferences saved in <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.logicstamp/config.json</code> from <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp init</code>.
                    </p>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li>Never prompts (works in CI/CD environments)</li>
                      <li>Respects preferences from <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp init</code></li>
                      <li>On first run (no config), defaults to skipping both <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.gitignore</code> and <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">LLM_CONTEXT.md</code> setup</li>
                      <li>Use <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">--skip-gitignore</code> flag to skip <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.gitignore</code> setup on a per-run basis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Secure Initialization Section */}
          <AnimatedSection direction="up" delay={550}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Secure Initialization with <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">--secure</code>
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">stamp init --secure</code> to combine initialization with security scanning. This command:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-red-800 dark:text-red-300">Runs <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp init</code> with auto-yes (no prompts, CI-friendly)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-orange-800 dark:text-orange-300">Automatically runs <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">stamp security scan --apply</code> to scan for secrets in your JS/TS/JSON files (API keys, passwords, tokens)</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm text-amber-800 dark:text-amber-300">If secrets are detected, adds affected files to <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.stampignore</code> to prevent them from reaching <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">context.json</code></p>
                  </div>
                </div>
                <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">⚠️ Important:</strong> If <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.stampignore</code> is generated, it means secrets were detected in your codebase. This is a <strong className="text-red-900 dark:text-red-200">bad sign</strong>—committing secrets to a codebase is unsafe and strongly discouraged.
                  </p>
                </div>
                <div className="p-4 bg-orange-50/50 dark:bg-orange-950/20 border-l-4 border-orange-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-gray-900 dark:text-white">Proper Solution:</strong> <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">.stampignore</code> is only a temporary safety layer. You should:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc space-y-1">
                    <li>Move all secrets to environment variables</li>
                    <li>Use a secrets manager (e.g., Vault, Doppler, AWS Secrets Manager)</li>
                    <li>Remove the secrets from your code before running context generation</li>
                  </ul>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    The best long-term solution is to ensure that no secrets ever exist in tracked source files.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* When to Use Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                When to Use <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp init</code>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-3 text-base sm:text-lg">Use <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp init</code> when:</h3>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li>Setting up LogicStamp in a new project</li>
                    <li>You want explicit control over initialization</li>
                    <li>You want to set up <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.gitignore</code> before generating context files</li>
                    <li><strong>Use <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp init --secure</code></strong> to combine initialization with security scanning</li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/10 rounded-xl border border-gray-200 dark:border-gray-800">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-200 mb-3 text-base sm:text-lg">You don't need <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp init</code> if:</h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400 ml-4 list-disc">
                    <li>You want <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code> to respect your preferences (CI-friendly, never prompts)</li>
                    <li>Your <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code> already has the necessary patterns</li>
                    <li>You prefer to manually manage <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Safety Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Safety
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp init</code> command is:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Idempotent</strong> – Safe to run multiple times without duplicating patterns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Non-destructive</strong> – Preserves existing <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code> content</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300"><strong className="text-gray-900 dark:text-white">Safe by default</strong> – Only adds patterns, never removes anything</p>
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















