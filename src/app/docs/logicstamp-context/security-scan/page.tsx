import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: '`stamp security scan` Command | LogicStamp Context Documentation',
  description: 'Find secrets and sensitive data in your project before they get committed using stamp security scan.',
}

export default function SecurityScanPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50/30 to-amber-50/20 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/40 dark:to-orange-900/40 text-red-700 dark:text-red-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-red-200/50 dark:border-red-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Security Command
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                <code className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">stamp security scan</code> Command
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Find secrets (API keys, passwords, tokens) and other sensitive data in your project before they get committed. <strong className="text-gray-900 dark:text-white">Runs 100% locally — nothing is uploaded or sent anywhere.</strong>
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
                    code: 'stamp security scan [path] [options]',
                    copyText: 'stamp security scan [path] [options]'
                  }
                ]}
              />
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong className="text-gray-900 dark:text-white">[path]</strong> (optional) – Directory to scan. Defaults to the current working directory. Paths can be relative (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">./src</code>) or absolute.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Overview Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Overview
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The security scan helps prevent accidentally exposing sensitive credentials by:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm text-red-800 dark:text-red-300">Scanning TypeScript, JavaScript, and JSON files for common secret patterns</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm text-orange-800 dark:text-orange-300">Generating detailed reports of detected secrets</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-sm text-amber-800 dark:text-amber-300">Optionally adding files with secrets to <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.stampignore</code> to exclude them from context generation</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-sm text-yellow-800 dark:text-yellow-300">Integrating with the <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">stamp init</code> command for automated security checks</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Options Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Short</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--out &lt;file&gt;</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-o</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Output file path for the security report (default: <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp_security_report.json</code>)</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-red-50/30 dark:bg-red-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-red-100 dark:bg-red-900/40 text-red-900 dark:text-red-100 rounded text-xs sm:text-sm font-mono">--apply</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <span className="text-gray-400">—</span>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Automatically add files with secrets to <code className="px-1 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.stampignore</code></td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--quiet</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-q</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Output only JSON statistics, suppress other messages</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">--help</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">-h</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Show help information</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What It Does Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What It Does
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">stamp security scan</code> command:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10 rounded-xl border border-red-200 dark:border-red-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-sm">1</div>
                  <div className="flex-1">
                    <p className="font-semibold text-red-900 dark:text-red-200 mb-2 text-base sm:text-lg">
                      Scans TypeScript, JavaScript, and JSON files for common secret patterns
                    </p>
                    <p className="text-sm text-red-800 dark:text-red-300">
                      Detects API keys, passwords, tokens, AWS keys, GitHub tokens, private keys, database URLs, JWT secrets, and more
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10 rounded-xl border border-orange-200 dark:border-orange-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 text-white font-bold flex items-center justify-center text-sm">2</div>
                  <div className="flex-1">
                    <p className="font-semibold text-orange-900 dark:text-orange-200 mb-2 text-base sm:text-lg">
                      Generates a detailed JSON security report
                    </p>
                    <p className="text-sm text-orange-800 dark:text-orange-300">
                      Includes file paths, line numbers, secret types, code snippets, and severity levels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm">3</div>
                  <div className="flex-1">
                    <p className="font-semibold text-amber-900 dark:text-amber-200 mb-2 text-base sm:text-lg">
                      Automatically protects the security report file
                    </p>
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      Adds the report file to <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">.gitignore</code> to prevent accidental commits of sensitive findings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-yellow-50 to-red-50 dark:from-yellow-950/20 dark:to-red-950/10 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 text-white font-bold flex items-center justify-center text-sm">4</div>
                  <div className="flex-1">
                    <p className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2 text-base sm:text-lg">
                      Optionally adds files with secrets to <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">.stampignore</code>
                    </p>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      Prevents these files from being included in context generation (use <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">--apply</code> flag)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Detected Secret Types Section */}
          <AnimatedSection direction="up" delay={500}>
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
                    Detected Secret Types
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 mb-3">High Severity</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc">
                      <li><strong>API Keys</strong>: Patterns like <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">apiKey</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">api_key</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">apikey</code> with values ≥20 characters</li>
                      <li><strong>AWS Access Keys</strong>: AWS access key IDs (format: starts with specific prefix followed by 16 alphanumeric characters)</li>
                      <li><strong>GitHub Tokens</strong>: GitHub personal access tokens and fine-grained tokens</li>
                      <li><strong>Private Keys</strong>: RSA or other private key blocks (<code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">BEGIN PRIVATE KEY</code>)</li>
                      <li><strong>Passwords</strong>: Patterns like <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">password</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">passwd</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">pwd</code> with values ≥8 characters</li>
                      <li><strong>Tokens</strong>: Authentication tokens and bearer tokens ≥20 characters</li>
                      <li><strong>OAuth Secrets</strong>: OAuth client secrets and similar patterns ≥16 characters</li>
                      <li><strong>Database URLs</strong>: Connection strings with embedded credentials (PostgreSQL, MySQL, MongoDB)</li>
                      <li><strong>JWT Secrets</strong>: JWT signing keys and secrets ≥16 characters</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-200 mb-3">Medium Severity</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc">
                      <li><strong>Generic Secrets</strong>: Patterns like <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">secret</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">secret_key</code> with values ≥16 characters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Security Report Format Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Security Report Format
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The security scan generates a JSON report with the following structure:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Report Format',
                    code: `{
  "type": "LogicStampSecurityReport",
  "schemaVersion": "0.1",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "projectRoot": "/path/to/project",
  "filesScanned": 42,
  "secretsFound": 3,
  "matches": [
    {
      "file": "src/config.ts",
      "line": 15,
      "column": 12,
      "type": "API Key",
      "snippet": "const apiKey = 'FAKE_SECRET_KEY'",
      "severity": "high"
    }
  ],
  "filesWithSecrets": [
    "src/config.ts",
    "src/secrets.js"
  ]
}`,
                    copyText: `{
  "type": "LogicStampSecurityReport",
  "schemaVersion": "0.1",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "projectRoot": "/path/to/project",
  "filesScanned": 42,
  "secretsFound": 3,
  "matches": [
    {
      "file": "src/config.ts",
      "line": 15,
      "column": 12,
      "type": "API Key",
      "snippet": "const apiKey = 'FAKE_SECRET_KEY'",
      "severity": "high"
    }
  ],
  "filesWithSecrets": [
    "src/config.ts",
    "src/secrets.js"
  ]
}`
                  }
                ]}
              />
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong className="text-gray-900 dark:text-white">Report Fields:</strong>
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc space-y-1">
                  <li><strong>type</strong>: <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"LogicStampSecurityReport"</code> (report format identifier)</li>
                  <li><strong>schemaVersion</strong>: <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"0.1"</code> (schema version)</li>
                  <li><strong>createdAt</strong>: ISO 8601 timestamp</li>
                  <li><strong>projectRoot</strong>: Absolute path to project root</li>
                  <li><strong>filesScanned</strong>: Total files scanned</li>
                  <li><strong>secretsFound</strong>: Total secret matches detected</li>
                  <li><strong>matches</strong>: Array of individual secret matches</li>
                  <li><strong>filesWithSecrets</strong>: Array of file paths containing secrets (sorted)</li>
                </ul>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Each match shows the file path, line and column numbers, secret type, a code snippet (about 40 characters), and severity level (high, medium, or low).
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Automatic .gitignore Protection Section */}
          <AnimatedSection direction="up" delay={700}>
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
                    🔒 Automatic <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">.gitignore</code> Protection
                  </h2>
                </div>
                <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border-l-4 border-red-500 rounded-r-lg mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-red-900 dark:text-red-200">SECURITY CRITICAL:</strong> Security reports contain sensitive information (locations of detected secrets, line numbers, code snippets), so <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">stamp security scan</code> automatically ensures the report file is added to <code className="px-1.5 py-0.5 bg-red-100 dark:bg-red-900/40 rounded text-xs font-mono">.gitignore</code> to prevent accidental commits. <strong className="text-red-900 dark:text-red-200">This happens automatically and cannot be disabled</strong> — the security report must never be committed to version control.
                  </p>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The security report contains:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc mb-4">
                  <li>File paths where secrets were detected</li>
                  <li>Line and column numbers pointing to secret locations</li>
                  <li>Code snippets showing the context around secrets</li>
                  <li>Severity levels and secret types</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Even if no secrets are found, the report structure itself reveals which files were scanned, which could be sensitive information in some contexts.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* .stampignore Integration Section */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">.stampignore</code> Integration
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  When secrets are detected, you can automatically add affected files to <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">.stampignore</code> to prevent them from being included in context generation.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  The <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">--apply</code> flag will:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc mb-4">
                  <li>Add files containing secrets to the ignore list (only new ones)</li>
                  <li>Create <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code> if it doesn't exist (only if secrets are found and there are new files to add)</li>
                  <li>Preserve existing entries and avoid duplicates</li>
                </ul>
                <div className="p-4 bg-orange-50/50 dark:bg-orange-950/20 border-l-4 border-orange-500 rounded-r-lg mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-orange-900 dark:text-orange-200">🔐 Important Security Note</strong>
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">.stampignore</code> is only created when secrets are actually detected in your project. However, committing secrets to a codebase is unsafe and strongly discouraged.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    LogicStamp's <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">.stampignore</code> mechanism is a temporary safety layer to prevent secrets from being included in your context bundles — it is not a substitute for proper secret hygiene.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-gray-900 dark:text-white">We strongly recommend:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc space-y-1">
                    <li>Moving all secrets to environment variables</li>
                    <li>Using a secrets manager (e.g., Vault, Doppler, AWS Secrets Manager)</li>
                    <li>Removing the secrets from your code before running context generation</li>
                  </ul>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    The best long-term solution is to ensure that no secrets ever exist in tracked source files.
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code> uses JSON format with paths relative to project root (forward slashes):
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: '.stampignore Format',
                      code: `{
  "ignore": [
    "src/config.ts",
    "src/secrets.js",
    "lib/api-keys.ts"
  ]
}`,
                      copyText: `{
  "ignore": [
    "src/config.ts",
    "src/secrets.js",
    "lib/api-keys.ts"
  ]
}`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Examples Section */}
          <AnimatedSection direction="up" delay={900}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Examples
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Basic Usage',
                    code: `# Scan the current directory for secrets
stamp security scan

# Scan specific directory
stamp security scan ./src

# Scan and automatically add detected secret files to .stampignore
# Prevents these files from ever reaching context.json
stamp security scan --apply`,
                    copyText: `# Scan the current directory for secrets
stamp security scan

# Scan specific directory
stamp security scan ./src

# Scan and automatically add detected secret files to .stampignore
# Prevents these files from ever reaching context.json
stamp security scan --apply`
                  },
                  {
                    label: 'CI/CD Integration',
                    code: `# In your CI pipeline
stamp security scan --quiet --out ./reports/security.json

# Check exit code
if [ $? -eq 1 ]; then
  echo "Secrets detected! Check security report."
  exit 1
fi`,
                    copyText: `# In your CI pipeline
stamp security scan --quiet --out ./reports/security.json

# Check exit code
if [ $? -eq 1 ]; then
  echo "Secrets detected! Check security report."
  exit 1
fi`
                  },
                  {
                    label: 'Custom Report Location',
                    code: `# Save report to custom location
stamp security scan --out ./reports/security-scan.json

# Save to directory (creates stamp_security_report.json inside)
stamp security scan --out ./reports/`,
                    copyText: `# Save report to custom location
stamp security scan --out ./reports/security-scan.json

# Save to directory (creates stamp_security_report.json inside)
stamp security scan --out ./reports/`
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Exit Codes Section */}
          <AnimatedSection direction="up" delay={1000}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Exit Codes
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">0</span>
                      <h3 className="font-semibold text-green-900 dark:text-green-200">No secrets found</h3>
                    </div>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">1</span>
                      <h3 className="font-semibold text-red-900 dark:text-red-200">Secrets detected</h3>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Use in CI/CD pipelines to fail builds when secrets are detected.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Integration with Init Section */}
          <AnimatedSection direction="up" delay={1100}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Integration with <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md font-mono text-xs sm:text-sm">stamp init</code>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The security scan can be automatically run during project initialization using the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 rounded-md font-mono text-xs sm:text-sm">--secure</code> flag:
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Secure Initialization',
                    code: `stamp init --secure`,
                    copyText: 'stamp init --secure'
                  }
                ]}
              />
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed mt-4">
                This command:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-blue-800 dark:text-blue-300">Runs <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp init</code> with auto-yes (no prompts)</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-green-800 dark:text-green-300">Automatically runs <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">stamp security scan --apply</code> to scan for secrets</p>
                </div>
                <div className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm text-purple-800 dark:text-purple-300">Adds any detected secret files to <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">.stampignore</code>, preventing these files from ever reaching <code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">context.json</code></p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed mt-4">
                Useful for:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc">
                <li>Setting up new projects with security checks from the start</li>
                <li>CI/CD pipelines that need automated security validation</li>
                <li>Ensuring security best practices are followed from project initialization</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* File Types Scanned Section */}
          <AnimatedSection direction="up" delay={1200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                File Types Scanned
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                The security scan examines the following file types:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">TypeScript</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300"><code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.ts</code>, <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.tsx</code></p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2">JavaScript</h3>
                  <p className="text-sm text-green-800 dark:text-green-300"><code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.js</code>, <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">.jsx</code></p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">JSON</h3>
                  <p className="text-sm text-purple-800 dark:text-purple-300"><code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">.json</code></p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <strong className="text-amber-900 dark:text-amber-200">Note:</strong> Files larger than 10MB are automatically skipped to prevent performance issues. You'll see a warning message if any files are skipped due to size.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={1300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-slate-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Limitations
                  </h2>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 ml-4 list-disc">
                  <li>Pattern-based detection (may have false positives or miss some formats)</li>
                  <li>Only scans TypeScript, JavaScript, and JSON files</li>
                  <li>Files larger than 10MB are skipped (you'll see a warning)</li>
                  <li>Doesn't detect encrypted secrets or secrets in environment-specific files</li>
                  <li>Static analysis only (can't detect secrets passed at runtime)</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* See Also Section */}
          <AnimatedSection direction="up" delay={1400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                See Also
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                For related documentation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/docs/logicstamp-context/init"
                  className="group p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-200 group-hover:text-blue-700 dark:group-hover:text-blue-100 transition-colors">
                        `init` command
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Initialize LogicStamp with optional security scan
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/docs/logicstamp-context/context"
                  className="group p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-green-900 dark:text-green-200 group-hover:text-green-700 dark:group-hover:text-green-100 transition-colors">
                        `context` command
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Generate context (respects `.stampignore`)
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
