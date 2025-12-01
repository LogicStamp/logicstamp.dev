import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'Hashes | LogicStamp Context Documentation',
  description:
    'Detailed guide to fileHash, semanticHash, and bundleHash in LogicStamp — how they are computed, what they detect, and how they relate.',
}

export default function HashesPage() {
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
                <span role="img" aria-label="lock">
                  🔐
                </span>
                Hashes
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Hashes in LogicStamp
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                LogicStamp uses three complementary hash types to track{' '}
                <span className="font-semibold text-gray-900 dark:text-white">file changes</span>,{' '}
                <span className="font-semibold text-gray-900 dark:text-white">semantic changes</span>, and{' '}
                <span className="font-semibold text-gray-900 dark:text-white">bundle-level changes</span>:
                <code className="ml-1 px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">fileHash</code>,{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">semanticHash</code>, and{' '}
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">bundleHash</code>.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* fileHash Section */}
        <AnimatedSection direction="up" delay={100}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-700 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-slate-100 dark:bg-slate-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-slate-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.105.672-2 1.5-2S15 9.895 15 11s-.672 2-1.5 2S12 12.105 12 11z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 21h14a2 2 0 0 0 2-2v-5.5A6.5 6.5 0 0 0 12.5 7h-1A6.5 6.5 0 0 0 5 13.5V19a2 2 0 0 0 2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    📄 fileHash: Raw File Content Hash
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Answers: <span className="font-semibold text-gray-900 dark:text-white">“Did the raw source file change?”</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">fileHash</code> is a hash of the
                  normalized file contents and is used as a lock to ensure that a stored contract still reflects the actual file on disk.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">How it is computed</h3>
                    <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      <li>Take the raw file contents.</li>
                      <li>Strip the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">@uif</code> metadata header block.</li>
                      <li>Normalize line endings (<code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">\r\n → \n</code>).</li>
                      <li>SHA-256 hash the text.</li>
                      <li>Truncate to 24 hex characters.</li>
                      <li>Prefix with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">uif:</code>.</li>
                    </ol>
                    <p className="mt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      Example: <code className="px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[0.75rem] font-mono">uif:1f0fa0e2c8958d7fc1696036</code>
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">What changes / does not change it</h3>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Changes fileHash</p>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-800 dark:text-slate-200">
                          <li>Any code change</li>
                          <li>Comment changes</li>
                          <li>Formatting or whitespace changes</li>
                          <li>Structural edits</li>
                          <li>Line ending differences (after normalization)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100 mt-3 mb-1">Does not change fileHash</p>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-800 dark:text-slate-200">
                          <li>Editing only the <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">@uif</code> header</li>
                          <li>Purely changing metadata outside the hashed body</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 border-l-4 border-slate-500 p-3 sm:p-4 rounded-r-lg">
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                    <span className="font-semibold text-slate-900 dark:text-slate-100">Use when:</span> you want strict detection of{' '}
                    <span className="font-semibold">any</span> file content modification, even if it is purely cosmetic.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* semanticHash Section */}
        <AnimatedSection direction="up" delay={200}>
          <section className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
            <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
              <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5v15m0-15C10.5 5.5 9 6 7.5 6S4.5 5.5 3 4.5v15c1.5 1 3 1.5 4.5 1.5s3-.5 4.5-1.5m0-15C13.5 5.5 15 6 16.5 6S19.5 5.5 21 4.5v15c-1.5 1-3 1.5-4.5 1.5s-3-.5-4.5-1.5"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    🧠 semanticHash: Logical / Contract Hash
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Answers: <span className="font-semibold text-gray-900 dark:text-white">“Did the component’s semantics or public API change?”</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">semanticHash</code> tracks{' '}
                <span className="font-semibold text-gray-900 dark:text-white">meaningful</span> changes only—ignoring superficial edits like comments or formatting.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm sm:text-base">
                    Based on AST structure and logic signature
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-900/90 dark:text-indigo-100 mb-2">
                    LogicStamp derives{' '}
                    <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> from:
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-indigo-900/90 dark:text-indigo-100">
                    <li>
                      <span className="font-semibold">Structural footprint</span>:
                      <ul className="list-disc list-inside ml-5 mt-1 space-y-0.5">
                        <li>variables</li>
                        <li>hooks</li>
                        <li>components</li>
                        <li>functions</li>
                      </ul>
                    </li>
                    <li className="mt-2">
                      <span className="font-semibold">Logic signature</span>:
                      <ul className="list-disc list-inside ml-5 mt-1 space-y-0.5">
                        <li>props</li>
                        <li>emits/events</li>
                        <li>state</li>
                      </ul>
                    </li>
                    <li className="mt-2">A stable <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">schemaVersion</code> (e.g., <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">"0.3"</code>).</li>
                  </ul>
                  <p className="mt-2 text-xs sm:text-sm text-indigo-900/90 dark:text-indigo-100">
                    All arrays/objects are sorted deterministically via{' '}
                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">stableStringify</code> and{' '}
                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">sortObject</code> to make the hash order-independent.
                  </p>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-2 text-sm sm:text-base">How it is computed</h3>
                  <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-indigo-900/90 dark:text-indigo-100">
                    <li>Extract AST structure and logic signature.</li>
                    <li>Build payload:</li>
                  </ol>
                  <pre className="mt-2 mb-2 overflow-x-auto rounded-md bg-gray-950/90 text-[0.7rem] sm:text-xs text-gray-100 p-3 font-mono whitespace-pre-wrap break-words max-w-full">
{`{
  "schemaVersion": "0.3",
  "structure": { "...": "..." },
  "signature": { "...": "..." }
}`}
                  </pre>
                  <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-indigo-900/90 dark:text-indigo-100" start={3}>
                    <li>Stable-stringify the payload and compute SHA-256.</li>
                    <li>Truncate to 24 hex characters.</li>
                    <li>Prefix with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">uif:</code>.</li>
                  </ol>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm sm:text-base">
                    What changes <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code>
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-green-900/90 dark:text-green-100">
                    <li>Adding/removing/renaming props</li>
                    <li>Changing events (emits)</li>
                    <li>Changing state structure</li>
                    <li>Adding/removing named functions, hooks, or child components</li>
                    <li>Any structural AST shift that affects the contract shape</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm sm:text-base">
                    What does <span className="italic">not</span> change it
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    <li>Comments</li>
                    <li>Whitespace or formatting</li>
                    <li>Most implementation details inside functions</li>
                    <li>
                      Internal refactors that do <span className="font-semibold">not</span> affect:
                      <ul className="list-disc list-inside ml-5 mt-1 space-y-0.5">
                        <li>props</li>
                        <li>events</li>
                        <li>state</li>
                        <li>component/hook/function footprint</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* bundleHash Section */}
        <AnimatedSection direction="up" delay={250}>
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
                      d="M3 7h4l2-3h6l2 3h4v11H3z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    🗂 bundleHash: LLM Bundle Hash
                  </h2>
                  <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Answers: <span className="font-semibold text-gray-900 dark:text-white">“Has the entire context bundle changed?”</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">bundleHash</code> is used for caching
                embeddings and prepared LLM contexts. It summarizes the{' '}
                <span className="font-semibold text-gray-900 dark:text-white">semantic footprint of an entire bundle</span>.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 text-sm sm:text-base">Based on</h3>
                  <p className="text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100 mb-2">
                    A bundle’s hash includes:
                  </p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    <li>
                      Sorted list of nodes (by <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code>):
                    </li>
                  </ul>
                  <pre className="mt-2 mb-3 overflow-x-auto rounded-md bg-gray-950/90 text-[0.7rem] sm:text-xs text-gray-100 p-3 font-mono whitespace-pre-wrap break-words max-w-full">
{`{
  "schemaVersion": "0.1",
  "depth": 1,
  "nodes": [
    { "entryId": "src/Button.tsx", "semanticHash": "uif:..." },
    { "entryId": "src/Card.tsx",   "semanticHash": "uif:..." }
  ]
}`}
                  </pre>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    <li>Bundle depth</li>
                    <li>Bundle <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">schemaVersion</code> (default <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">"0.1"</code>)</li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 text-sm sm:text-base">How it is computed</h3>
                  <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    <li>Build the bundle payload (schemaVersion, depth, sorted nodes).</li>
                    <li>Stable-stringify the payload.</li>
                    <li>Compute SHA-256.</li>
                    <li>Truncate to 24 hex characters.</li>
                    <li>Prefix with <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">uifb:</code>.</li>
                  </ol>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    Example:{' '}
                    <code className="px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-900/50 rounded text-[0.75rem] font-mono break-all">
                      uifb:abc123e4f99aa01deef02bb1
                    </code>
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 text-sm sm:text-base">
                    What changes <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">bundleHash</code>
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-emerald-900/90 dark:text-emerald-100">
                    <li>Any component’s <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> changed</li>
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
                    <li>Cosmetic file edits that keep all <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">semanticHash</code> values identical</li>
                    <li>Reordering components in memory (sorting by <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.7rem] font-mono">entryId</code> ensures stability)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Relationship Section */}
        <AnimatedSection direction="up" delay={300}>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 18h16M5 6l2 12M17 6l2 12"
                    />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                  🧬 Relationship Between All Three Hashes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Think of the three hashes as layers of change detection:
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Layer</th>
                      <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Hash</th>
                      <th className="py-2 pr-4 font-semibold text-gray-900 dark:text-white">Detects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">File-level</td>
                      <td className="py-2 pr-4">
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono text-gray-900 dark:text-gray-100">
                          fileHash
                        </code>
                      </td>
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">Any file content modification</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">Component-level</td>
                      <td className="py-2 pr-4">
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono text-gray-900 dark:text-gray-100">
                          semanticHash
                        </code>
                      </td>
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">Logic &amp; public API changes only</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">Bundle-level</td>
                      <td className="py-2 pr-4">
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-[0.75rem] font-mono text-gray-900 dark:text-gray-100">
                          bundleHash
                        </code>
                      </td>
                      <td className="py-2 pr-4 text-gray-800 dark:text-gray-200">
                        Changes in the semantic footprint of a context bundle
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Practical Scenarios Section */}
        <AnimatedSection direction="up" delay={350}>
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
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">🔎 Practical Scenarios</h2>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="p-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                    1. Only comments / formatting change
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
                  <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">→ Cosmetic edit.</p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">
                    2. A prop or state field is added
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
                  <p className="mt-2 text-xs sm:text-sm text-blue-900/90 dark:text-blue-100">→ Meaningful contract change.</p>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm sm:text-base">
                    3. Dependency graph changes (component import added/removed)
                  </h3>
                  <ul className="list-disc list-inside space-y-0.5 text-xs sm:text-sm text-purple-900/90 dark:text-purple-100">
                    <li>
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-900 rounded text-[0.75rem] font-mono">semanticHash</code>:{' '}
                      <span className="font-semibold text-purple-900 dark:text-purple-100">may stay the same</span> (if contracts are unchanged)
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
      </DocsLayout>
      <Footer />
    </>
  )
}
















