import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'bundleHash (uifb) | LogicStamp Context Documentation',
  description:
    'Detailed guide to bundleHash (uifb) in LogicStamp — how it is computed, what it detects, and how it relates to semantic hashes.',
}

export default function UifbPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <span role="img" aria-label="bundle">
                  🗂
                </span>
                bundleHash
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                bundleHash: LLM Bundle Hash
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">bundleHash</code> (prefixed with{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">uifb:</code>) tracks changes to an entire{' '}
                <span className="font-semibold text-gray-900 dark:text-white">LLM context bundle</span>, enabling efficient caching of embeddings
                and prepared contexts.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Purpose Section */}
        <AnimatedSection direction="up" delay={100}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Purpose</h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Answers: <span className="font-semibold text-gray-900 dark:text-white">"Has the entire context bundle changed?"</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">bundleHash</code> is used for{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">caching embeddings</span> and{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">prepared LLM contexts</span>. It provides a stable identifier
                  that changes only when the semantic footprint of a bundle changes, making it ideal for cache invalidation and version
                  tracking.
                </p>

                <div className="bg-emerald-50 dark:bg-emerald-950/50 border-l-4 border-emerald-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">
                    <span className="font-semibold text-emerald-900 dark:text-emerald-100">Use when:</span> you need to determine if an LLM
                    context bundle has changed semantically, allowing you to skip expensive embedding regeneration or context preparation when
                    the bundle is unchanged.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Based On Section */}
        <AnimatedSection direction="up" delay={200}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Based On</h2>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                A bundle's hash includes the following components:
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                  <h3 className="font-semibold text-teal-900 dark:text-teal-100 mb-3 text-sm sm:text-base">Bundle Payload Structure</h3>
                  <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-teal-900/90 dark:text-teal-100 mb-4">
                    <li>
                      <span className="font-semibold">Sorted list of nodes</span> (by <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code>):
                      <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                        <li>Each node contains: <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code> and <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code></li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-semibold">Bundle depth</span> — the dependency traversal depth
                    </li>
                    <li>
                      <span className="font-semibold">Bundle schemaVersion</span> (default <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">"0.1"</code>)
                    </li>
                  </ul>

                  <p className="text-xs sm:text-sm text-teal-900/90 dark:text-teal-100 mb-2 font-semibold">Example payload:</p>
                  <pre className="overflow-x-auto rounded-md bg-gray-950/90 text-[0.7rem] sm:text-xs text-gray-100 p-3 font-mono whitespace-pre-wrap break-words max-w-full">
{`{
  "schemaVersion": "0.1",
  "depth": 1,
  "nodes": [
    { "entryId": "src/Button.tsx", "semanticHash": "uif:..." },
    { "entryId": "src/Card.tsx",   "semanticHash": "uif:..." }
  ]
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* How It Is Computed Section */}
        <AnimatedSection direction="up" delay={250}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">How It Is Computed</h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
                  <h3 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2 text-sm sm:text-base">Computation Steps</h3>
                  <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-cyan-900/90 dark:text-cyan-100">
                    <li>Build the bundle payload with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">schemaVersion</code>, <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">depth</code>, and sorted nodes (by <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code>).</li>
                    <li>Stable-stringify the payload to ensure deterministic ordering.</li>
                    <li>Compute SHA-256 hash of the stringified payload.</li>
                    <li>Truncate to 24 hex characters.</li>
                    <li>Prefix with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">uifb:</code>.</li>
                  </ol>
                  <p className="mt-3 text-xs sm:text-sm text-cyan-900/90 dark:text-cyan-100">
                    Example:{' '}
                    <code className="px-1.5 py-0.5 bg-cyan-100 dark:bg-cyan-900/50 rounded text-[0.75rem] font-mono break-all">
                      uifb:abc123e4f99aa01deef02bb1
                    </code>
                  </p>
                </div>

                <div className="bg-cyan-50 dark:bg-cyan-950/50 border-l-4 border-cyan-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-200">
                    <span className="font-semibold text-cyan-900 dark:text-cyan-100">Important:</span> Nodes are sorted by{' '}
                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code> to ensure the hash
                    is stable regardless of the order components are processed in memory.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* What Changes / Does Not Change Section */}
        <AnimatedSection direction="up" delay={300}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 text-sm sm:text-base">
                    What changes <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">bundleHash</code>
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    <li>
                      Any component's <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> changed
                    </li>
                    <li>Adding/removing a component from the bundle</li>
                    <li>Different bundle depth</li>
                    <li>Different bundle schema version</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">
                    What does <span className="italic">not</span> change it
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <li>
                      Cosmetic file edits that keep all <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> values identical
                    </li>
                    <li>
                      Reordering components in memory (sorting by <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code> ensures stability)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Relationship to Other Hashes Section */}
        <AnimatedSection direction="up" delay={350}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  Relationship to Other Hashes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">bundleHash</code> builds on top of{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">semanticHash</code> values from individual
                components:
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm sm:text-base">Layer Hierarchy</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-purple-900/90 dark:text-purple-100">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[100px]">File-level:</span>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono">fileHash</code>
                      <span className="text-gray-600 dark:text-gray-400">→ detects any file content modification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[100px]">Component-level:</span>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono">semanticHash</code>
                      <span className="text-gray-600 dark:text-gray-400">→ detects logic & API changes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-[100px]">Bundle-level:</span>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono">bundleHash</code>
                      <span className="text-gray-600 dark:text-gray-400">→ detects changes in bundle semantic footprint</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/50 border-l-4 border-purple-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-200">
                    <span className="font-semibold text-purple-900 dark:text-purple-100">Key insight:</span> Since{' '}
                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">bundleHash</code> depends on{' '}
                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> values, any
                    semantic change to a component will cascade up and change the bundle hash for all bundles containing that component.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Practical Scenarios Section */}
        <AnimatedSection direction="up" delay={400}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l4 2m4 0a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Practical Scenarios</h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                    1. Only comments / formatting change in a component
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">fileHash</code>:{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">changes</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">semanticHash</code>:{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">stays the same</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">bundleHash</code>:{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">stays the same</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    → Bundle cache remains valid, no need to regenerate embeddings.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">
                    2. A prop or state field is added to a component
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-blue-900/90 dark:text-blue-100">
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">fileHash</code>:{' '}
                      <span className="font-semibold text-blue-900 dark:text-blue-100">changes</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">semanticHash</code>:{' '}
                      <span className="font-semibold text-blue-900 dark:text-blue-100">changes</span>
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">bundleHash</code>:{' '}
                      <span className="font-semibold text-blue-900 dark:text-blue-100">
                        changes for all bundles involving that component
                      </span>
                    </li>
                  </ul>
                  <p className="mt-2 text-xs sm:text-sm text-blue-900/90 dark:text-blue-100">
                    → Bundle cache is invalidated, embeddings must be regenerated.
                  </p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm sm:text-base">
                    3. Dependency graph changes (component import added/removed)
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-purple-900/90 dark:text-purple-100">
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">semanticHash</code>:{' '}
                      <span className="font-semibold text-purple-900 dark:text-purple-100">may stay the same</span> (if contracts are
                      unchanged)
                    </li>
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">bundleHash</code>:{' '}
                      <span className="font-semibold text-purple-900 dark:text-purple-100">changes</span>, because the node set changed
                    </li>
                  </ul>
                  <p className="mt-2 text-xs sm:text-sm text-purple-900/90 dark:text-purple-100">
                    → Bundle must be regenerated or recached for LLM use.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Format Section */}
        <AnimatedSection direction="up" delay={450}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">Hash Format</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                    Bundle Hash (<code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">bundleHash</code>)
                  </h3>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li>
                      <strong>Format:</strong> <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">uifb:</code> + 24 hex characters
                    </li>
                    <li>
                      <strong>Example:</strong>{' '}
                      <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono break-all">
                        uifb:abc123e4f99aa01deef02bb1
                      </code>
                    </li>
                    <li>
                      <strong>Based on:</strong> Bundle structure (nodes sorted by entryId, depth, schema version)
                    </li>
                    <li>
                      <strong>Changes when:</strong> Any component's semantic hash changes, or bundle structure changes
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  See <a href="/docs/hashes" className="text-green-600 dark:text-green-400 hover:underline">Hashes documentation</a> for
                  detailed information about all hash types and their relationships.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}















