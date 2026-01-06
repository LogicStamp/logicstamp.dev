import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'UIF Contracts | LogicStamp Context Documentation',
  description: 'Learn about UIF (Unified Interface Format) contracts, their structure, and how LogicStamp extracts them from your codebase.',
}

export default function UIFContractsPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-pink-50/20 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Contracts
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                UIF Contracts
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                UIF (Unified Interface Format) contracts are machine-readable descriptions of your React/Vue/TypeScript components that capture their structure, behavior, and API. LogicStamp extracts these contracts from your codebase to enable semantic change detection, AI context generation, and contract verification.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* What is a UIF Contract Section */}
          <AnimatedSection direction="up" delay={100}>
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
                    What is a UIF Contract?
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  A UIF contract is a structured representation of a component that includes:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { title: 'Structural footprint', desc: 'Variables, hooks, components, and functions used' },
                    { title: 'Logic signature', desc: 'Props, events, and state that define the component\'s API' },
                    { title: 'Style metadata', desc: 'Visual and layout information (when --include-style is used)' },
                    { title: 'Semantic hash', desc: 'Unique identifier based on the component\'s logic (not implementation details)' },
                    { title: 'File hash', desc: 'Content-based hash for change detection' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  Contracts are extracted automatically from your TypeScript/React/Vue files and embedded in LogicStamp bundles.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contract Structure Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Contract Structure
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Each UIF contract follows the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs sm:text-sm">UIFContract</code> schema (version <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-xs sm:text-sm">0.3</code>):
              </p>
              <TabbedCodeBlock
                tabs={[
                  {
                    label: 'UIF Contract Example',
                    code: `{
  "type": "UIFContract",
  "schemaVersion": "0.3",
  "kind": "react:component",
  "description": "Component description from JSDoc",
  "version": {
    "variables": ["count", "isOpen"],
    "hooks": ["useState", "useEffect"],
    "components": ["Button", "Card"],
    "functions": ["handleClick", "validate"]
  },
  "logicSignature": {
    "props": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      },
      "label": {
        "type": "string",
        "optional": false
      }
    },
    "events": {
      "onSubmit": {
        "type": "function",
        "signature": "(data: FormData) => void"
      }
    },
    "state": {
      "isLoading": {
        "type": "boolean"
      }
    }
  },
  "exports": { "named": ["Button", "ButtonProps"] },
  "style": {
    "styleSources": {
      "tailwind": {
        "categories": {
          "layout": ["flex", "flex-col", "items-center"],
          "spacing": ["py-4", "px-6", "gap-2"],
          "colors": ["bg-blue-500", "text-white"],
          "typography": ["text-lg", "font-semibold"]
        },
        "breakpoints": ["md", "lg"],
        "classCount": 8
      }
    },
    "layout": {
      "type": "flex",
      "hasHeroPattern": false
    },
    "visual": {
      "colors": ["bg-blue-500", "text-white"],
      "spacing": ["py-4", "px-6"],
      "radius": "md"
    }
  },
  "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
  "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
}`,
                    copyText: `{
  "type": "UIFContract",
  "schemaVersion": "0.3",
  "kind": "react:component",
  "description": "Component description from JSDoc",
  "version": {
    "variables": ["count", "isOpen"],
    "hooks": ["useState", "useEffect"],
    "components": ["Button", "Card"],
    "functions": ["handleClick", "validate"]
  },
  "logicSignature": {
    "props": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      },
      "label": {
        "type": "string",
        "optional": false
      }
    },
    "events": {
      "onSubmit": {
        "type": "function",
        "signature": "(data: FormData) => void"
      }
    },
    "state": {
      "isLoading": {
        "type": "boolean"
      }
    }
  },
  "exports": { "named": ["Button", "ButtonProps"] },
  "style": {
    "styleSources": {
      "tailwind": {
        "categories": {
          "layout": ["flex", "flex-col", "items-center"],
          "spacing": ["py-4", "px-6", "gap-2"],
          "colors": ["bg-blue-500", "text-white"],
          "typography": ["text-lg", "font-semibold"]
        },
        "breakpoints": ["md", "lg"],
        "classCount": 8
      }
    },
    "layout": {
      "type": "flex",
      "hasHeroPattern": false
    },
    "visual": {
      "colors": ["bg-blue-500", "text-white"],
      "spacing": ["py-4", "px-6"],
      "radius": "md"
    }
  },
  "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
  "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
}`
                  }
                ]}
              />
            </div>
          </AnimatedSection>

          {/* Contract Fields Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Contract Fields
              </h2>
              
              <div className="space-y-6">
                {/* Type Field */}
                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">type</code>
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-300">Always <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">"UIFContract"</code> to identify the contract type.</p>
                </div>

                {/* Schema Version Field */}
                <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">schemaVersion</code>
                  </h3>
                  <p className="text-sm text-purple-800 dark:text-purple-300">Schema version string (currently <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">"0.3"</code>). Used for compatibility checking and validation.</p>
                </div>

                {/* Kind Field */}
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">kind</code>
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-300 mb-2">Component type identifier:</p>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"react:component"</code> – React functional component</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"react:hook"</code> – Custom React hook</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"vue:component"</code> – Vue component (Composition API)</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"vue:composable"</code> – Vue composable (reusable composition function)</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"ts:module"</code> – TypeScript module/utility</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">"node:cli"</code> – Node.js CLI script</li>
                  </ul>
                </div>

                {/* Version Field */}
                <div className="p-5 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-3 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">version</code>
                  </h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300 mb-3">Structural composition of the component:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-amber-100 dark:bg-amber-900/40">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-amber-900 dark:text-amber-200">Field</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-amber-900 dark:text-amber-200">Type</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-amber-900 dark:text-amber-200">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-200 dark:divide-amber-800">
                        <tr>
                          <td className="px-3 py-2"><code className="text-xs font-mono">variables</code></td>
                          <td className="px-3 py-2"><code className="text-xs font-mono">string[]</code></td>
                          <td className="px-3 py-2 text-amber-800 dark:text-amber-300">Named variables declared in the component</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2"><code className="text-xs font-mono">hooks</code></td>
                          <td className="px-3 py-2"><code className="text-xs font-mono">string[]</code></td>
                          <td className="px-3 py-2 text-amber-800 dark:text-amber-300">React hooks used (useState, useEffect, etc.)</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2"><code className="text-xs font-mono">components</code></td>
                          <td className="px-3 py-2"><code className="text-xs font-mono">string[]</code></td>
                          <td className="px-3 py-2 text-amber-800 dark:text-amber-300">Child components imported and used</td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2"><code className="text-xs font-mono">functions</code></td>
                          <td className="px-3 py-2"><code className="text-xs font-mono">string[]</code></td>
                          <td className="px-3 py-2 text-amber-800 dark:text-amber-300">Named functions defined in the component</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-amber-700 dark:text-amber-400 mt-3">
                    <strong>Note:</strong> This captures the structural footprint, not implementation details. Adding a new hook or function changes the version.
                  </p>
                </div>

                {/* Logic Signature Field */}
                <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/10 rounded-xl border border-rose-200 dark:border-rose-800">
                  <h3 className="font-semibold text-rose-900 dark:text-rose-200 mb-3 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">logicSignature</code>
                  </h3>
                  <p className="text-sm text-rose-800 dark:text-rose-300 mb-3">The public API contract of the component:</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-rose-900 dark:text-rose-200 mb-1 text-sm"><code className="px-1.5 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">props</code></h4>
                      <p className="text-xs text-rose-700 dark:text-rose-400">Object mapping prop names to their type information. Includes <code className="px-1 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">type</code>, <code className="px-1 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">signature</code> (for function props), and <code className="px-1 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">optional</code> flag.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-rose-900 dark:text-rose-200 mb-1 text-sm"><code className="px-1.5 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">events</code></h4>
                      <p className="text-xs text-rose-700 dark:text-rose-400">Object mapping event names to their signatures. For React components, these are typically callback props that represent events.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-rose-900 dark:text-rose-200 mb-1 text-sm"><code className="px-1.5 py-0.5 bg-rose-100 dark:bg-rose-900/40 rounded text-xs font-mono">state</code></h4>
                      <p className="text-xs text-rose-700 dark:text-rose-400">Object mapping state variable names to their types. Represents the component's internal state structure.</p>
                    </div>
                  </div>
                </div>

                {/* Exports Field */}
                <div className="p-5 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-3 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">exports</code>
                    <span className="ml-2 text-xs font-normal text-indigo-700 dark:text-indigo-400">(Optional)</span>
                  </h3>
                  <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-3">Export metadata indicating how the component/module is exported from the file:</p>
                  <ul className="space-y-2 text-sm text-indigo-800 dark:text-indigo-300 ml-4 list-disc mb-3">
                    <li><code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">"default"</code> – File has a default export</li>
                    <li><code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">"named"</code> – File has a single named export</li>
                    <li><code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">{'{'} named: string[] {'}'}</code> – File has multiple named exports (array contains all exported names)</li>
                  </ul>
                  <p className="text-xs text-indigo-700 dark:text-indigo-400 mt-3">
                    This metadata is used to improve dependency tracking accuracy by distinguishing between internal components (defined in the same file) and external dependencies.
                  </p>
                  <div className="mt-3 p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                    <p className="text-xs text-indigo-900 dark:text-indigo-200 font-medium mb-1">Example:</p>
                    <code className="text-xs font-mono text-indigo-800 dark:text-indigo-300">{'{"exports": { "named": ["Button", "ButtonProps", "useButton"] }}'}</code>
                  </div>
                </div>

                {/* Style Field */}
                <div className="p-5 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/10 rounded-xl border border-pink-200 dark:border-pink-800">
                  <h3 className="font-semibold text-pink-900 dark:text-pink-200 mb-3 text-base sm:text-lg">
                    <code className="px-2 py-1 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">style</code>
                    <span className="ml-2 text-xs font-normal text-pink-700 dark:text-pink-400">(Optional)</span>
                  </h3>
                  <p className="text-sm text-pink-800 dark:text-pink-300 mb-3">Visual and layout metadata extracted when using <code className="px-1.5 py-0.5 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">stamp context style</code> or <code className="px-1.5 py-0.5 bg-pink-100 dark:bg-pink-900/40 rounded text-xs font-mono">--include-style</code>.</p>
                  <div className="space-y-2 text-xs text-pink-700 dark:text-pink-400">
                    <div>
                      <strong className="text-pink-900 dark:text-pink-200">styleSources:</strong> Tailwind classes, SCSS/CSS modules, inline styles (with property/value extraction ✅ v0.3.5), styled-jsx (CSS content extraction ✅ v0.3.5), styled-components, framer-motion, Material UI
                    </div>
                    <div>
                      <strong className="text-pink-900 dark:text-pink-200">layout:</strong> Flex/grid patterns, hero sections, feature cards
                    </div>
                    <div>
                      <strong className="text-pink-900 dark:text-pink-200">visual:</strong> Color palettes, spacing patterns, typography classes
                    </div>
                    <div>
                      <strong className="text-pink-900 dark:text-pink-200">animation:</strong> Animation library, types, and triggers
                    </div>
                  </div>
                  <p className="text-xs text-pink-600 dark:text-pink-500 mt-3">
                    See <a href="/docs/logicstamp-context/style" className="text-pink-700 dark:text-pink-300 hover:underline font-semibold">Style Metadata Guide</a> for comprehensive documentation.
                  </p>
                </div>

                {/* Hashes */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 text-base sm:text-lg">
                      <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">semanticHash</code>
                    </h3>
                    <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">Unique hash based on the component's logic and contract.</p>
                    <p className="text-xs text-indigo-700 dark:text-indigo-400 mb-2"><strong>Changes when:</strong> Props, events, state, or structural footprint changes.</p>
                    <p className="text-xs text-indigo-700 dark:text-indigo-400"><strong>Does not change for:</strong> Comments, whitespace, or implementation details.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-base sm:text-lg">
                      <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">fileHash</code>
                    </h3>
                    <p className="text-sm text-purple-800 dark:text-purple-300 mb-2">Content-based hash of the raw file.</p>
                    <p className="text-xs text-purple-700 dark:text-purple-400"><strong>Changes when:</strong> Any file content modification.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* @uif Header Blocks Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    @uif Header Blocks
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  LogicStamp can extract contracts from JSDoc <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-xs sm:text-sm">@uif</code> header blocks in your source files. This allows you to provide explicit contract information or override automatic extraction.
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">Basic Format</h3>
                  <TabbedCodeBlock
                    tabs={[
                      {
                        label: 'TypeScript',
                        code: `/**
 * @uif Contract
 * @description Button component for user interactions
 * @kind react:component
 */
export function Button({ onClick, label }: ButtonProps) {
  // ...
}`,
                        copyText: `/**
 * @uif Contract
 * @description Button component for user interactions
 * @kind react:component
 */
export function Button({ onClick, label }: ButtonProps) {
  // ...
}`
                      }
                    ]}
                  />
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When generating context with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-code header</code>, LogicStamp includes the <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@uif</code> header block in the bundle.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* What Changes a Contract Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                What Changes a Contract?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-5 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/10 rounded-xl border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Changes semanticHash
                  </h3>
                  <ul className="space-y-2 text-sm text-red-800 dark:text-red-300 ml-4 list-disc">
                    <li>Adding/removing/renaming props</li>
                    <li>Changing prop types</li>
                    <li>Adding/removing events</li>
                    <li>Changing state structure</li>
                    <li>Adding/removing hooks</li>
                    <li>Adding/removing child components</li>
                    <li>Adding/removing named functions</li>
                  </ul>
                </div>
                <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-3 text-base sm:text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Does Not Change semanticHash
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li>Comments</li>
                    <li>Whitespace/formatting</li>
                    <li>Variable names (unless part of public API)</li>
                    <li>Internal logic refactors</li>
                    <li>Implementation details</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <strong>Note:</strong> <code className="px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/40 rounded text-xs font-mono">fileHash</code> always changes for any file content modification, including cosmetic changes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={600}>
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
                    Best Practices
                  </h2>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'Keep contracts stable – Avoid unnecessary changes to props, events, or state structure',
                    'Use semantic hashes – Rely on semanticHash to detect meaningful changes, not fileHash',
                    'Document with @uif – Use @uif header blocks for explicit contract documentation',
                    'Validate regularly – Run stamp context validate to catch schema drift',
                    'Compare before commits – Use stamp context compare to review contract changes'
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                    </div>
                  ))}
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















