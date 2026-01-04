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
                Things that don't work perfectly yet. We're working on improving these areas.
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
                  LogicStamp Context is pretty accurate overall—around <strong className="text-gray-900 dark:text-white">90%</strong> of the time it gets things right. Component structure, props, state, hooks, and imports are usually detected correctly, but there are a few areas where things can be incomplete or a bit off.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                  {[
                    { title: 'Component Contracts', accuracy: '~95%', desc: 'Props, state, hooks detection' },
                    { title: 'Imports Detection', accuracy: '~100%', desc: 'Imports tracked correctly' },
                    { title: 'Style Metadata', accuracy: '~90%', desc: 'Static classes work well' },
                    { title: 'Hook Signatures', accuracy: 'Not yet', desc: 'Parameters not captured' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm text-center leading-tight">
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
                      We can detect custom React hooks and list them in the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">version.hooks</code> array, but we don't capture what parameters they take. The contract will show <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">props: {}</code> even if the hook actually accepts parameters.
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
    "version": {
      "hooks": ["useTypewriter"]
    },
    "logic": {
      "props": {}
    }
  }`,
                          copyText: `{
    "version": {
      "hooks": ["useTypewriter"]
    },
    "logic": {
      "props": {}
    }
  }`
                        }
                      ]}
                    />
                  </div>

                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                    <p className="text-sm text-amber-800 dark:text-amber-300">
                      <strong>Impact:</strong> You'll need to check the source code to see what parameters a hook takes—the context file won't tell you.
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
                      Sometimes we get confused about what's an internal handler vs. a real component emit. If you have an <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">onClick</code> that just updates internal state, it might still show up in the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">emits</code> object even though it's not part of the component's public API.
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
    "logic": {
      "emits": {
        "onClick": {
          "type": "function",
          "signature": "() => void"
        }
      }
    }
  }`,
                          copyText: `{
    "logic": {
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
                      <strong>Impact:</strong> You might see internal handlers listed as emits, which can be confusing when trying to figure out what events the component actually exposes.
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
                      Style extraction works great for static Tailwind classes and template literals. Static segments within template literals are extracted (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">className={`base static-class`}</code> will extract <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"base"</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"static-class"</code>). However, dynamic expressions within template literal placeholders are not resolved. If you're storing classes in variables or building them from variables, those dynamic parts won't show up in the style metadata.
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
          "categories": {}
        }
      }
    }
  }`,
                          copyText: `{
    "style": {
      "styleSources": {
        "tailwind": {
          "categories": {}
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
                      <strong>Impact:</strong> Static parts of template literals are extracted, but dynamic expressions (variables, function calls, etc.) within template literal placeholders are not resolved. If you build classes from variables, the style metadata will be incomplete.
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
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                      ✅ Fixed in v0.3.1
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Custom hooks are now correctly classified as <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:hook</code> instead of <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:component</code>. The detection logic checks if the main export (default or named) is a function starting with "use" and has no JSX elements.
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
                          label: 'Context Output (Correct)',
                          code: `{
    "kind": "react:hook"
  }`,
                          copyText: `{
    "kind": "react:hook"
  }`
                        }
                      ]}
                    />
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
                    What works really well:
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
                      <li>Dynamic style extraction (variable-based classes within template literals)</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Bottom line:</strong> We're hitting around 90% accuracy overall. Solid foundation, but there's definitely room to improve. These issues are on our roadmap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature Completeness Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Feature Completeness & Coverage
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  This section documents what's currently captured in context files versus what's missing or incomplete. This is separate from accuracy issues above - here we're tracking feature coverage, not detection correctness.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
                      What's Captured
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          1. Component Contracts (UIFContract)
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          <li><strong>Component kind</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react:component</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ts:module</code></li>
                          <li><strong>Props</strong>: Types and signatures</li>
                          <li><strong>State variables</strong>: With types</li>
                          <li><strong>Hooks used</strong>: Listed in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">version.hooks</code></li>
                          <li><strong>Functions</strong>: Signatures captured</li>
                          <li><strong>Imports and dependencies</strong>: Tracked</li>
                          <li><strong>Exports</strong>: Default/named exports</li>
                          <li><strong>Next.js metadata</strong>: Client directive, app dir detection</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          2. Style Metadata (when <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--style</code> flag is used)
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          <li><strong>Tailwind classes</strong>: Categorized by borders, colors, effects, spacing, sizing, layout (flex/grid), typography, transitions, breakpoints detected (sm, md, lg, xl), class counts per component</li>
                          <li><strong>CSS modules</strong>: File paths and selectors/properties</li>
                          <li><strong>Inline styles</strong>: Detected (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">inlineStyles: true</code>)</li>
                          <li><strong>Layout patterns</strong>: Flex vs grid, column configs</li>
                          <li><strong>Visual metadata</strong>: Color palettes, spacing patterns, typography scales</li>
                          <li><strong>Animation metadata</strong>: Library type, animation types</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          3. Project Structure
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          <li><strong>Folder hierarchy</strong>: With <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">isRoot</code> flags</li>
                          <li><strong>Token estimates</strong>: Per folder/component</li>
                          <li><strong>Bundle counts</strong>: And positions</li>
                          <li><strong>Component lists</strong>: Per folder</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          4. Versioning and Hashing
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          <li><strong>Semantic hashes</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">uif:</code> prefixes</li>
                          <li><strong>File hashes</strong>: For change detection</li>
                          <li><strong>Bundle hashes</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">uifb:</code> prefixes</li>
                          <li><strong>Schema versioning</strong>: Tracked</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">
                          5. Metadata
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                          <li><strong>Created timestamps</strong>: When context was generated</li>
                          <li><strong>OS detection</strong>: Platform info (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">win32</code>)</li>
                          <li><strong>Source tool version</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">logicstamp-context@0.3.4</code></li>
                          <li><strong>Missing dependencies</strong>: Tracked in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">missing</code> array</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
                      What's Missing or Incomplete
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            1. Inline Style Objects Not Fully Extracted
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">
                            High
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Issue:</strong> Inline style objects are detected (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">inlineStyles: true</code>) but actual property values are not captured.
                        </p>
                        <div className="mt-3 mb-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example:</p>
                          <TabbedCodeBlock
                            tabs={[
                              {
                                label: 'Source code has',
                                code: `style={{ animationDelay: '2s' }}
style={{ transformOrigin: 'center' }`,
                                copyText: `style={{ animationDelay: '2s' }}
style={{ transformOrigin: 'center' }`
                              },
                              {
                                label: 'Context.json only shows',
                                code: `"inlineStyles": true  // But not the actual values!`,
                                copyText: `"inlineStyles": true  // But not the actual values!`
                              }
                            ]}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Missing:</strong> Actual inline style values/properties<br/>
                          <strong>Impact:</strong> Can't analyze specific inline styles
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            2. CSS-in-JS Partially Supported
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Supported:</strong> styled-components (component names, theme usage, css prop), Emotion (@emotion/styled), Material UI (@mui/material) - components, packages, features, ShadCN/UI - components, variants, sizes, Radix UI - primitives, patterns, accessibility, Framer Motion - components, variants, animation features
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing/Incomplete:</strong> Chakra UI - not yet detected, Ant Design - not yet detected, Styled JSX - CSS content from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks not extracted (only detected), Inline style object values - detected but property values not extracted
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Most major CSS-in-JS libraries are supported, but some smaller libraries and inline style values are not fully extracted.
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            3. Edge Relationships (Status: Implemented)
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            Resolved
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Status:</strong> Dependency graph edges ARE built and populated.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Implementation:</strong> The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">buildEdges()</code> function in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/core/pack/builder.ts</code> creates edges between components based on their dependencies. Edges are included in bundle output.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Note:</strong> If edges appear empty in your output, this may be due to: components having no dependencies, dependencies not being resolved (missing from manifest), or dependencies being filtered as internal components.
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            4. Third-Party Components Minimal Info
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Issue:</strong> Third-party components only show basic "missing" info without details.
                        </p>
                        <div className="mt-3 mb-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example:</p>
                          <TabbedCodeBlock
                            tabs={[
                              {
                                label: 'Context Output',
                                code: `"missing": [
  {
    "name": "ChevronRight",
    "reason": "No contract found (third-party or not scanned)"
  }
]`,
                                copyText: `"missing": [
  {
    "name": "ChevronRight",
    "reason": "No contract found (third-party or not scanned)"
  }
]`
                              }
                            ]}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Missing:</strong> Package names, versions, prop types for third-party components<br/>
                          <strong>Impact:</strong> Limited understanding of external dependencies
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            5. Code Content Not Captured
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            Low
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Actual source code (by design for token efficiency)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Only:</strong> Contracts, JSDoc headers (in header mode)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Can't see implementation details without reading source<br/>
                          <strong>Note:</strong> This is intentional for token efficiency, but worth documenting.
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            6. TypeScript Types Incomplete
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Captured:</strong> Prop types as strings (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"string"</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"number"</code>)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Missing:</strong> Full TypeScript type definitions, generics, unions, intersections<br/>
                          <strong>Impact:</strong> Limited type information for complex types
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            7. Comments/JSDoc Only in Header Mode
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            Low
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Regular comments, TODO notes
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Only:</strong> JSDoc in header mode<br/>
                          <strong>Impact:</strong> Loses documentation context
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            8. Test Files Excluded
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            Low
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Issue:</strong> Test files are completely excluded from context generation.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Current behavior:</strong> Test files (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.test.ts</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.test.tsx</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.spec.ts</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.spec.tsx</code>) are explicitly filtered out during file scanning and never analyzed.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Test structure, test cases, test coverage information, test utilities, and test helpers are not included in context bundles.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> No test understanding - AI assistants cannot see test files, test patterns, or testing strategies used in the codebase.<br/>
                          <strong>Note:</strong> This is intentional by design - test files are excluded to keep context bundles focused on production code. If test analysis is needed, it would require a separate feature or flag to include test files.
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            9. Runtime Behavior
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                            Low
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Runtime props, state changes, side effects
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Only:</strong> Static analysis<br/>
                          <strong>Impact:</strong> No runtime insights<br/>
                          <strong>Note:</strong> This is expected for static analysis tools.
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            10. Styled JSX Not Fully Parsed
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200">
                            High
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Issue:</strong> Styled JSX blocks are detected but CSS content is not extracted.
                        </p>
                        <div className="mt-3 mb-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example:</p>
                          <TabbedCodeBlock
                            tabs={[
                              {
                                label: 'Source has',
                                code: `<style jsx>{\`
  @keyframes border-spin { ... }
\`}</style>`,
                                copyText: `<style jsx>{\`
  @keyframes border-spin { ... }
\`}</style>`
                              },
                              {
                                label: 'Context shows',
                                code: `"inlineStyles": true  // But not the actual CSS!`,
                                copyText: `"inlineStyles": true  // But not the actual CSS!`
                              }
                            ]}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Missing:</strong> Actual CSS content from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks<br/>
                          <strong>Impact:</strong> Can't analyze styled-jsx styles
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            11. Context main.json Limitations
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Cross-folder relationships, project-wide statistics
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Only:</strong> Folder index with token estimates<br/>
                          <strong>Impact:</strong> Limited project-level insights
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Implementation Plan Section */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Implementation Plan
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      High Priority
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li><strong>Extract inline style values</strong>: Parse <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">style={'{'} ... {'}'}</code> objects and include properties</li>
                      <li><strong>Parse styled-jsx</strong>: Extract CSS from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Medium Priority
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li><strong>CSS-in-JS support</strong>: Complete support for remaining libraries (Chakra UI, Ant Design), extract styled-jsx CSS content</li>
                      <li><strong>Enhanced third-party info</strong>: Include package names, versions, prop types</li>
                      <li><strong>TypeScript type extraction</strong>: Capture full type definitions</li>
                      <li><strong>Project-level insights</strong>: Add cross-folder analysis to <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">context_main.json</code></li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Low Priority
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li><strong>Test file analysis</strong>: Extract test structure and cases</li>
                      <li><strong>Comment extraction</strong>: Include regular comments (not just JSDoc)</li>
                      <li><strong>Runtime hints</strong>: Add static analysis hints about runtime behavior</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Overall Assessment Section */}
          <AnimatedSection direction="up" delay={900}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Overall Assessment
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
                      What's working well:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {[
                        'Component contracts are comprehensive',
                        'Style metadata (when enabled) is detailed and well-structured',
                        'Project structure indexing is solid',
                        'Versioning/hashing system is robust'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-base sm:text-lg">
                      What needs improvement:
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Style metadata extraction completeness (inline style values, styled-jsx CSS content)',
                        'Dynamic class resolution (variable-based classes within template literals)',
                        'CSS-in-JS support completeness (remaining libraries like Chakra UI, Ant Design)'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                          <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
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

