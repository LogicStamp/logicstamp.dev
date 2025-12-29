import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TOON Format | LogicStamp Context Documentation',
  description: 'Learn about TOON format - a compact text-based encoding optimized for AI consumption and efficient storage of LogicStamp context bundles.',
}

export default function ToonFormatPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/30 to-yellow-50/20 dark:from-orange-950/20 dark:via-amber-950/10 dark:to-yellow-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40 text-orange-700 dark:text-orange-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-orange-200/50 dark:border-orange-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Output Format
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                TOON Format
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                A compact text-based encoding optimized for AI consumption and efficient storage of LogicStamp context bundles.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TOON format encodes the same LogicStamp bundle structure as JSON, but in a more compact representation. It's designed for:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                    <p className="text-sm text-orange-800 dark:text-orange-300"><strong className="text-orange-900 dark:text-orange-200">Efficient storage</strong> - Smaller file sizes compared to JSON</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-sm text-amber-800 dark:text-amber-300"><strong className="text-amber-900 dark:text-amber-200">AI consumption</strong> - Optimized encoding for LLM processing</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300"><strong className="text-yellow-900 dark:text-yellow-200">Streaming</strong> - Can be decoded incrementally if needed</p>
                  </div>
                </div>
                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">Important:</strong> The main index file (<code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">context_main.json</code>) is always in JSON format, even when using <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">--format toon</code>. Only the folder bundle files use the <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">.toon</code> extension.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Usage
              </h2>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'Basic Usage',
                    code: `# Generate TOON format bundles
stamp context --format toon

# With style metadata (alternative syntax)
stamp context --format toon --include-style
stamp context style --format toon

# Custom output directory
stamp context --format toon --out ./output`,
                    copyText: `# Generate TOON format bundles
stamp context --format toon

# With style metadata (alternative syntax)
stamp context --format toon --include-style
stamp context style --format toon

# Custom output directory
stamp context --format toon --out ./output`
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Output Structure Section */}
          <AnimatedSection direction="up" delay={250}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Output Structure
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  When using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">--format toon</code>, the output structure is:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Output Structure',
                      code: `output/
├── context_main.json          # Main index (always JSON)
├── context.toon              # Root folder bundles (TOON format)
├── src/
│   └── context.toon          # Bundles from src/ folder (TOON format)
└── src/components/
    └── context.toon          # Bundles from src/components/ (TOON format)`,
                      copyText: `output/
├── context_main.json          # Main index (always JSON)
├── context.toon              # Root folder bundles (TOON format)
├── src/
│   └── context.toon          # Bundles from src/ folder (TOON format)
└── src/components/
    └── context.toon          # Bundles from src/components/ (TOON format)`
                    }
                  ]}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  Each folder containing components gets its own <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context.toon</code> file. The directory structure mirrors your project layout, just like JSON format.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Decoding Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Decoding TOON Files
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TOON files can be decoded using the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 rounded-md font-mono text-xs sm:text-sm">@toon-format/toon</code> package:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'JavaScript',
                      code: `import { decode } from '@toon-format/toon';
import { readFile } from 'fs/promises';

// Read and decode a TOON file
const toonContent = await readFile('src/components/context.toon', 'utf-8');
const bundles = decode(toonContent);

// bundles is an array of LogicStampBundle objects
console.log(bundles[0].entryId);
console.log(bundles[0].graph.nodes);`,
                      copyText: `import { decode } from '@toon-format/toon';
import { readFile } from 'fs/promises';

// Read and decode a TOON file
const toonContent = await readFile('src/components/context.toon', 'utf-8');
const bundles = decode(toonContent);

// bundles is an array of LogicStampBundle objects
console.log(bundles[0].entryId);
console.log(bundles[0].graph.nodes);`
                    }
                  ]}
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  The decoded structure is identical to JSON format bundles - same schema, same contracts, same dependency graphs. No data loss occurs during encoding or decoding.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* When to Use Section */}
          <AnimatedSection direction="up" delay={350}>
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
                    When to Use TOON
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">Use TOON format when:</h3>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li>You need smaller file sizes (especially for large codebases)</li>
                      <li>You're building tools that process context files programmatically</li>
                      <li>You want efficient storage for CI/CD artifacts</li>
                      <li>You're working with AI systems that can decode TOON natively</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-base sm:text-lg">Use JSON format when:</h3>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                      <li>You need human-readable output for debugging</li>
                      <li>You're manually inspecting context files</li>
                      <li>You want to use <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context validate</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">compare</code>, or <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">clean</code> commands</li>
                      <li>You're using tools that expect JSON</li>
                      <li>You want to diff context files in git</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Format Comparison Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Format Comparison
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  All formats contain the same bundle data, just encoded differently:
                </p>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Format</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Extension</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Human-readable</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">File Size</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Use Case</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">.json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">✅ Yes</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Medium</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Default, human-readable</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">pretty</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">.json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">✅ Yes</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Large</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Human inspection, debugging</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">ndjson</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs font-mono">.json</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">✅ Yes</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Medium</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Streaming, line-by-line processing</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors bg-orange-50/30 dark:bg-orange-950/20">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-900 dark:text-orange-100 rounded text-xs sm:text-sm font-mono">toon</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/40 text-orange-900 dark:text-orange-100 rounded text-xs font-mono">.toon</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">✅ Yes (less readable)</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Small</td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Compact storage, AI consumption</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Integration Section */}
          <AnimatedSection direction="up" delay={450}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Integration with Other Commands
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TOON format works with all <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs sm:text-sm">stamp context</code> options:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Examples',
                      code: `# TOON with style metadata (both syntaxes work)
stamp context --format toon --include-style
stamp context style --format toon

# TOON with custom depth
stamp context --format toon --depth 2

# TOON with profile
stamp context --format toon --profile llm-safe

# TOON with code inclusion mode
stamp context --format toon --include-code header`,
                      copyText: `# TOON with style metadata (both syntaxes work)
stamp context --format toon --include-style
stamp context style --format toon

# TOON with custom depth
stamp context --format toon --depth 2

# TOON with profile
stamp context --format toon --profile llm-safe

# TOON with code inclusion mode
stamp context --format toon --include-code header`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Limitations
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-sm text-orange-800 dark:text-orange-300"><strong className="text-orange-900 dark:text-orange-200">Human readability</strong> - TOON files are human-readable but less readable than JSON. While you can inspect TOON files directly, JSON format is better for manual inspection and debugging.</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-sm text-orange-800 dark:text-orange-300"><strong className="text-orange-900 dark:text-orange-200">Tool compatibility</strong> - Some tools may not support TOON format. JSON is more universally supported.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300"><strong className="text-yellow-900 dark:text-yellow-200">Index file</strong> - The main index (<code className="px-1 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">context_main.json</code>) is always JSON, even when using TOON format for bundles.</p>
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-300"><strong className="text-amber-900 dark:text-amber-200">Command support</strong> - Currently, only the <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">stamp context</code> command supports TOON format for generation. The <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">validate</code>, <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">compare</code>, and <code className="px-1 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">clean</code> commands do not yet support TOON files and will only work with JSON format.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Examples Section */}
          <AnimatedSection direction="up" delay={550}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Examples
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Generate and inspect TOON bundles
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'Bash',
                        code: `# Generate TOON format
stamp context --format toon --out ./output

# Decode and inspect (Node.js)
node -e "
  const { decode } = require('@toon-format/toon');
  const fs = require('fs');
  const content = fs.readFileSync('./output/src/components/context.toon', 'utf-8');
  const bundles = decode(content);
  console.log('Bundles:', bundles.length);
  console.log('First bundle:', bundles[0].entryId);
"`,
                        copyText: `# Generate TOON format
stamp context --format toon --out ./output

# Decode and inspect (Node.js)
node -e "
  const { decode } = require('@toon-format/toon');
  const fs = require('fs');
  const content = fs.readFileSync('./output/src/components/context.toon', 'utf-8');
  const bundles = decode(content);
  console.log('Bundles:', bundles.length);
  console.log('First bundle:', bundles[0].entryId);
"`
                      }
                    ]}
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Programmatic usage
                  </h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'JavaScript',
                        code: `import { decode } from '@toon-format/toon';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function loadContextBundles(projectRoot) {
  const toonPath = join(projectRoot, 'src/components/context.toon');
  const content = await readFile(toonPath, 'utf-8');
  const bundles = decode(content);
  
  return bundles;
}

// Use the bundles
const bundles = await loadContextBundles('./my-project');
bundles.forEach(bundle => {
  console.log(\`Component: \${bundle.entryId}\`);
  console.log(\`Nodes: \${bundle.graph.nodes.length}\`);
});`,
                        copyText: `import { decode } from '@toon-format/toon';
import { readFile } from 'fs/promises';
import { join } from 'path';

async function loadContextBundles(projectRoot) {
  const toonPath = join(projectRoot, 'src/components/context.toon');
  const content = await readFile(toonPath, 'utf-8');
  const bundles = decode(content);
  
  return bundles;
}

// Use the bundles
const bundles = await loadContextBundles('./my-project');
bundles.forEach(bundle => {
  console.log(\`Component: \${bundle.entryId}\`);
  console.log(\`Nodes: \${bundle.graph.nodes.length}\`);
});`
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Working with TOON Files Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Working with TOON Files
                  </h2>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg mb-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong className="text-gray-900 dark:text-white">Note:</strong> Currently, TOON format is only supported for generation (<code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">stamp context --format toon</code>). The <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">validate</code>, <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">compare</code>, and <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">clean</code> commands do not yet support TOON format files.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    To work with TOON files using these commands, you'll need to decode them to JSON first:
                  </p>
                </div>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'JavaScript',
                      code: `import { decode } from '@toon-format/toon';
import { readFile, writeFile } from 'fs/promises';

// Decode TOON to JSON for validation/comparison
const toonContent = await readFile('src/components/context.toon', 'utf-8');
const bundles = decode(toonContent);
const jsonContent = JSON.stringify(bundles, null, 2);
await writeFile('src/components/context.json', jsonContent);

// Now you can validate or compare the JSON file
// stamp context validate src/components/context.json`,
                      copyText: `import { decode } from '@toon-format/toon';
import { readFile, writeFile } from 'fs/promises';

// Decode TOON to JSON for validation/comparison
const toonContent = await readFile('src/components/context.toon', 'utf-8');
const bundles = decode(toonContent);
const jsonContent = JSON.stringify(bundles, null, 2);
await writeFile('src/components/context.json', jsonContent);

// Now you can validate or compare the JSON file
// stamp context validate src/components/context.json`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Tips Section */}
          <AnimatedSection direction="up" delay={650}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Tips
                  </h2>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li>Use JSON format during development for easier debugging and to use validation/comparison tools</li>
                  <li>Switch to TOON format for production/CI to save storage (when you don't need validation/comparison)</li>
                  <li>The main index is always JSON, so you can always inspect the project structure</li>
                  <li>TOON files decode to the same structure as JSON - no data loss</li>
                  <li>To validate or compare TOON files, decode them to JSON first using the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@toon-format/toon</code> package</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Commands Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Related Commands
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/docs/logicstamp-context/context"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Generate context files (supports all formats including TOON)
                  </p>
                </Link>
                <Link
                  href="/docs/logicstamp-context/validate"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context validate</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Validate context files (JSON format only)
                  </p>
                </Link>
                <Link
                  href="/docs/logicstamp-context/compare-command"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context compare</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compare context files (JSON format only)
                  </p>
                </Link>
                <Link
                  href="/docs/logicstamp-context/clean"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context clean</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean context files (JSON format only)
                  </p>
                </Link>
                <Link
                  href="/docs/logicstamp-context/init"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp init</code>
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set up <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.gitignore</code> patterns for TOON files
                  </p>
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

