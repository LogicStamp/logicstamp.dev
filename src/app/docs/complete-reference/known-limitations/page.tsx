import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Known Limitations | LogicStamp Context Documentation',
  description: 'Learn about current limitations in LogicStamp Context extraction, including hook parameter detection, emit detection, dynamic class parsing, and hook classification.',
}

export default function KnownLimitationsPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-red-50/20 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-red-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Known Limitations
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Known Limitations
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                Current limitations in LogicStamp Context extraction accuracy. These areas are actively being improved in future releases.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Overview Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overview
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  LogicStamp Context achieves approximately <strong className="text-gray-900 dark:text-white">92% accuracy</strong> in contract extraction. While component structure, props, state, hooks, and imports are detected with high accuracy, there are specific areas where extraction may be incomplete or imprecise.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                  {[
                    { title: 'Component Contracts', accuracy: '95%', desc: 'Props, state, hooks detection' },
                    { title: 'Imports Detection', accuracy: '100%', desc: 'All imports tracked accurately' },
                    { title: 'Style Metadata', accuracy: '90%', desc: 'Static classes extracted well' },
                    { title: 'Hook Signatures', accuracy: '0%', desc: 'Parameters not captured yet' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                          {item.accuracy}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Hook Parameter Detection */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Hook Parameter Detection
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Issue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      Custom React hooks are detected and listed in the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">version.hooks</code> array, but their function parameters are not extracted. The contract shows <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">props: {}</code> even when the hook accepts parameters.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `function useTypewriter(text: string, speed = 30, pause = 800) {
  const [displayedText, setDisplayedText] = useState('')
  // ... implementation
  return displayedText
}`,
                          copyText: `function useTypewriter(text: string, speed = 30, pause = 800) {
  const [displayedText, setDisplayedText] = useState('')
  // ... implementation
  return displayedText
}`
                        },
                        {
                          label: 'Context Output',
                          code: `{
  "kind": "react:component",
  "logicSignature": {
    "props": {}
  },
  "version": {
    "hooks": ["useState"]
  }
}`,
                          copyText: `{
  "kind": "react:component",
  "logicSignature": {
    "props": {}
  },
  "version": {
    "hooks": ["useState"]
  }
}`
                        }
                      ]}
                    />
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Impact:</strong> Hook parameters are not captured, making it difficult to understand the hook's API without reading the source code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Emit Detection */}
          <AnimatedSection direction="up" delay={300}>
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
                    Emit Detection Accuracy
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Issue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      LogicStamp may misclassify internal event handlers as component emits. Internal handlers (like <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">onClick</code> that only update internal state) are sometimes listed in the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">emits</code> object, even though they are not part of the component's public API.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <button onClick={() => setMenuOpen(!menuOpen)}>
      Toggle Menu
    </button>
  )
}`,
                          copyText: `function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <button onClick={() => setMenuOpen(!menuOpen)}>
      Toggle Menu
    </button>
  )
}`
                        },
                        {
                          label: 'Context Output (Incorrect)',
                          code: `{
  "logicSignature": {
    "emits": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      }
    }
  }
}`,
                          copyText: `{
  "logicSignature": {
    "emits": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      }
    }
  }
}`
                        }
                      ]}
                    />
                  </div>

                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-sm text-red-800 dark:text-red-300">
                      <strong>Impact:</strong> Internal handlers are misclassified as component emits, creating confusion about what events the component actually exposes to parent components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Dynamic Class Parsing */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Dynamic Class Parsing
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Issue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      Style metadata extraction works well for static Tailwind classes, but does not parse template literals or variable concatenation. Classes stored in variables or constructed dynamically are not extracted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `function Button({ variant }: { variant: 'primary' | 'secondary' }) {
  const base = 'px-4 py-2 rounded-lg font-semibold'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button className={\`\${base} \${variants[variant]}\`}>
      Click me
    </button>
  )
}`,
                          copyText: `function Button({ variant }: { variant: 'primary' | 'secondary' }) {
  const base = 'px-4 py-2 rounded-lg font-semibold'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button className={\`\${base} \${variants[variant]}\`}>
      Click me
    </button>
  )
}`
                        },
                        {
                          label: 'Context Output',
                          code: `{
  "style": {
    "styleSources": {
      "tailwind": {
        "classCount": 0
      }
    }
  }
}`,
                          copyText: `{
  "style": {
    "styleSources": {
      "tailwind": {
        "classCount": 0
      }
    }
  }
}`
                        }
                      ]}
                    />
                  </div>

                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <p className="text-sm text-indigo-800 dark:text-indigo-300">
                      <strong>Impact:</strong> Expected limitation. Dynamic class strings stored in variables are not parsed, so style metadata may be incomplete for components using this pattern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Hook Classification */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Hook Classification
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Issue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      Custom React hooks are sometimes classified as <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">react:component</code> instead of <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">react:hook</code>. This makes it harder to distinguish hooks from components in the context output.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `function useTypewriter(text: string, speed = 30) {
  const [displayedText, setDisplayedText] = useState('')
  // ... hook implementation
  return displayedText
}`,
                          copyText: `function useTypewriter(text: string, speed = 30) {
  const [displayedText, setDisplayedText] = useState('')
  // ... hook implementation
  return displayedText
}`
                        },
                        {
                          label: 'Context Output (Incorrect)',
                          code: `{
  "kind": "react:component",
  "description": "useTypewriter - Presentational component"
}`,
                          copyText: `{
  "kind": "react:component",
  "description": "useTypewriter - Presentational component"
}`
                        },
                        {
                          label: 'Expected Output',
                          code: `{
  "kind": "react:hook",
  "description": "useTypewriter - Custom hook"
}`,
                          copyText: `{
  "kind": "react:hook",
  "description": "useTypewriter - Custom hook"
}`
                        }
                      ]}
                    />
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-800 dark:text-green-300">
                      <strong>Impact:</strong> Hooks are misclassified as components, making it harder to distinguish between hooks and components when reviewing context files.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Summary Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Summary
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    LogicStamp Context provides <strong className="text-gray-900 dark:text-white">highly accurate</strong> extraction for:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Component structure and props',
                      'State variables and hooks',
                      'Import tracking',
                      'Static style metadata',
                      'Dependency graphs'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-300 mb-2">
                      <strong>Areas for improvement:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-400 ml-4 list-disc">
                      <li>Hook function signatures (parameters not captured)</li>
                      <li>Emit detection accuracy (internal handlers vs. actual emits)</li>
                      <li>Dynamic style extraction (template literals and variable concatenation)</li>
                      <li>Hook classification (react:hook vs. react:component)</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Overall accuracy: 92%</strong> — Strong foundation with room for refinement. These limitations are actively being addressed in future releases.
                    </p>
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

