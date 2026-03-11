import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'

export const metadata: Metadata = {
  title: 'Known Limitations | LogicStamp Context Documentation',
  description: 'Learn about current limitations in LogicStamp Context extraction, including dynamic class parsing, CSS-in-JS support, and TypeScript type extraction.',
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
          {/* Breaking Changes Section */}
          <AnimatedSection direction="up" delay={50}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.53 20h15a2 2 0 001.74-3.14l-7.5-13a2 2 0 00-3.48 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    ⚠️ Breaking Changes
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      v0.7.0 - Style Mode Default Changed
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                      <strong className="text-gray-900 dark:text-white">Breaking Change:</strong> The default output mode for <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context style</code> is now <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--style-mode lean</code> instead of <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">full</code>. This provides smaller, faster bundles by default. Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--style-mode full</code> to restore the previous behavior.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      See <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CHANGELOG.md#070---2026-03-03" className="text-red-600 dark:text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">CHANGELOG.md</a> for details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

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
                    { title: 'Style Metadata', accuracy: '~90-95%', desc: 'Static classes ~100%, dynamic classes Phase 1 complete ~70-80% of patterns, CSS-in-JS 9/9 major libraries supported ✅ v0.5.1' }
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
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0 -mt-0.5">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Hook Parameter Detection
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                      ✅ Fixed in v0.3.6
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Hook parameter detection now correctly extracts function signatures from custom React hooks, including parameter types, default values, and optional parameters. Works even when Props interfaces exist in the same file.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Works
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li>Extracts function signatures with parameter types</li>
                      <li>Captures default parameter values</li>
                      <li>Handles optional parameters</li>
                      <li>Works with Props interfaces in the same file</li>
                    </ul>
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
                          label: 'Context Output (Correct)',
                          code: `{
    "composition": {
      "hooks": ["useTypewriter"]
    },
    "interface": {
      "props": {
        "text": { "type": "string" },
        "speed": { "type": "number", "optional": true },
        "pause": { "type": "number", "optional": true }
      }
    }
  }`,
                          copyText: `{
    "composition": {
      "hooks": ["useTypewriter"]
    },
    "interface": {
      "props": {
        "text": { "type": "string" },
        "speed": { "type": "number", "optional": true },
        "pause": { "type": "number", "optional": true }
      }
    }
  }`
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Emit Detection */}
          <AnimatedSection direction="up" delay={300}>
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
                    Emit Detection Accuracy
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                      ✅ Fixed in v0.3.7
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400">
                      Emit detection now correctly distinguishes between internal handlers and component public API emits. Only handlers that are part of the component's Props interface/type are included in the <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">emits</code> object.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Works
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li>Only extracts event handlers that exist in Props interfaces/types</li>
                      <li>
                        Filters out internal handlers (e.g.,{' '}
                        <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">
                          {`onClick={() => setMenuOpen(!menuOpen)}`}
                        </code>
                        )
                      </li>
                      <li>Filters out inline handlers that are not props</li>
                      <li>Uses prop type signatures when available for accurate event signatures</li>
                      <li>Falls back to AST-based arrow function parsing only when prop signature is unavailable</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code (No Props)',
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
                          label: 'Context Output (Correct)',
                          code: `{
    "logic": {
      "emits": {}
    }
  }`,
                          copyText: `{
    "logic": {
      "emits": {}
    }
  }`
                        },
                        {
                          label: 'Source Code (With Props)',
                          code: `interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click</button>;
}`,
                          copyText: `interface ButtonProps {
  onClick?: () => void;
}

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>Click</button>;
}`
                        },
                        {
                          label: 'Context Output (Correct)',
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
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border-l-4 border-indigo-500 mb-4">
                    <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2">
                      ✅ Phase 1 Complete (v0.3.9), 🟡 Phase 2 Planned
                    </p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-400">
                      Resolve variable-based classes within template literals. Phase 1 is complete, handling same-file variable resolution.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Issue
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      Style extraction works great for static Tailwind classes and template literals. Static segments within template literals are extracted (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">className={`base static-class`}</code> will extract <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"base"</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"static-class"</code>). However, dynamic expressions within <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">{`\${expression}`}</code> are partially resolved (Phase 1) or not resolved (Phase 2).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Works (Phase 1)
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-4">
                      <li>✅ Const/let declarations: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">const base = 'px-4 py-2'</code> → extracts <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">px-4</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">py-2</code></li>
                      <li>✅ Object property access: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants.primary</code> → extracts classes from property value</li>
                      <li>✅ Conditional expressions: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">isActive ? 'bg-blue-500' : 'bg-gray-500'</code> (within template literals) → extracts both branches</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Doesn't Work (Phase 2 - Future)
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-4">
                      <li>❌ Object lookups with variables: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants[variant]</code> → index variable not resolved</li>
                      <li>❌ Cross-file references: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">import {'{'} baseClasses {'}'} from './styles'</code> → imports not analyzed</li>
                      <li>❌ Function calls: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getClasses('primary')</code> → function bodies not analyzed</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example (Phase 1 - Works)
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
  const isActive = true;
  
  return (
    <button className={\`\${base} \${variants.primary} \${isActive ? 'ring-2' : ''}\`}>
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
  const isActive = true;
  
  return (
    <button className={\`\${base} \${variants.primary} \${isActive ? 'ring-2' : ''}\`}>
      Click me
    </button>
  )
}`
                        },
                        {
                          label: 'Context Output (After Phase 1)',
                          code: `{
    "style": {
      "styleSources": {
        "tailwind": {
          "categories": {
            "spacing": ["px-4", "py-2"],
            "borders": ["rounded-lg"],
            "typography": ["font-semibold"],
            "colors": ["bg-blue-600", "hover:bg-blue-700", "text-white"],
            "effects": ["ring-2"]
          }
        }
      }
    }
  }`,
                          copyText: `{
    "style": {
      "styleSources": {
        "tailwind": {
          "categories": {
            "spacing": ["px-4", "py-2"],
            "borders": ["rounded-lg"],
            "typography": ["font-semibold"],
            "colors": ["bg-blue-600", "hover:bg-blue-700", "text-white"],
            "effects": ["ring-2"]
          }
        }
      }
    }
  }`
                        }
                      ]}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example (Phase 2 - Still Doesn't Work)
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `function Button({ variant }: { variant: 'primary' | 'secondary' }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button className={\`\${variants[variant]}\`}>
      Click me
    </button>
  )
}`,
                          copyText: `function Button({ variant }: { variant: 'primary' | 'secondary' }) {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  }
  
  return (
    <button className={\`\${variants[variant]}\`}>
      Click me
    </button>
  )
}`
                        },
                        {
                          label: 'Context Output (After Phase 1)',
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
                    <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                      <strong>Impact:</strong> Phase 1 addresses ~70-80% of common dynamic class patterns. Phase 2 will handle advanced edge cases like object lookups with variables and cross-file references. If you build classes from variables using object lookups or imports, the style metadata will still be incomplete until Phase 2.
                    </p>
                    <p className="text-sm text-indigo-800 dark:text-indigo-300">
                      <strong>Coverage:</strong> Phase 1 handles ~70-80% of common dynamic class patterns. Phase 2 will add ~15-20% coverage for edge cases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Next.js Framework Limitations */}
          <AnimatedSection direction="up" delay={450}>
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
                    Next.js Framework Limitations
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-l-4 border-purple-500 mb-4">
                    <p className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-2">
                      🟡 Partially Complete
                    </p>
                    <p className="text-sm text-purple-700 dark:text-purple-400">
                      Next.js support includes basic detection of App Router patterns, directives, and directory structure, but many Next.js-specific features are not yet extracted.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Works
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li>✅ <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">'use client'</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">'use server'</code> directive detection</li>
                      <li>✅ App Router directory detection (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">isInAppDir: true</code> for files in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">/app/</code> directory)</li>
                      <li>✅ Next.js import tracking (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/link</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/image</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/navigation</code>, etc.)</li>
                      <li>✅ Basic component detection (pages, layouts, API routes as React components)</li>
                      <li>✅ <strong>Route role detection</strong> - Automatically detects route roles (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">page</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">layout</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">loading</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">error</code>, etc.) ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                      <li>✅ <strong>Segment path extraction</strong> - Extracts route paths from file structure (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">/blog/[slug]</code>) ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                      <li>✅ <strong>Metadata export extraction</strong> - Extracts static metadata (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">export const metadata = {'{...}'}</code>) and detects dynamic metadata (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">export function generateMetadata()</code>) ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      What Doesn't Work
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li>❌ Layout hierarchy: Parent-child layout relationships not extracted</li>
                      <li>❌ Data fetching patterns: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getServerSideProps</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getStaticProps</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getStaticPaths</code> return types not fully extracted</li>
                      <li>❌ Route handlers: API route handlers (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">GET</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">POST</code>, etc.) detected but request/response types not extracted</li>
                      <li>❌ Loading/error boundaries: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">loading.tsx</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">error.tsx</code> files detected but boundary relationships not extracted</li>
                      <li>❌ Middleware: Middleware files detected but not fully analyzed</li>
                      <li>❌ Dynamic imports: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/dynamic</code> imports tracked but component resolution not analyzed</li>
                      <li>❌ Route groups: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">(group)</code> route groups not distinguished from regular routes</li>
                      <li>❌ Parallel routes: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@slot</code> parallel routes not detected</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">
                      Example
                    </h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Source Code',
                          code: `// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: 'post-1' }, { slug: 'post-2' }];
}

export const metadata = {
  title: 'Blog Post',
  description: 'A blog post'
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}`,
                          copyText: `// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  return [{ slug: 'post-1' }, { slug: 'post-2' }];
}

export const metadata = {
  title: 'Blog Post',
  description: 'A blog post'
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}`
                        },
                        {
                          label: 'Context Output (v0.3.10)',
                          code: `{
    "kind": "react:component",
    "nextjs": {
      "isInAppDir": true,
      "directive": undefined,
      "routeRole": "page",
      "segmentPath": "/blog/[slug]",
      "metadata": {
        "static": {
          "title": "Blog Post",
          "description": "A blog post"
        }
      }
    }
  }`,
                          copyText: `{
    "kind": "react:component",
    "nextjs": {
      "isInAppDir": true,
      "directive": undefined,
      "routeRole": "page",
      "segmentPath": "/blog/[slug]",
      "metadata": {
        "static": {
          "title": "Blog Post",
          "description": "A blog post"
        }
      }
    }
  }`
                        }
                      ]}
                    />
                    <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="text-sm text-purple-800 dark:text-purple-300 mb-2">
                        <strong>Missing:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-400 ml-4 list-disc">
                        <li><code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">generateStaticParams</code> function not extracted</li>
                        <li>Dynamic route parameter (<code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">params.slug</code>) type not extracted from route structure</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-purple-800 dark:text-purple-300 mb-2">
                      <strong>Impact:</strong> Next.js projects are detected and route roles, segment paths, and metadata exports are now extracted (v0.3.10). However, data fetching patterns, layout hierarchy, and some advanced routing features are not yet extracted. This limits understanding of some Next.js-specific architecture patterns.
                    </p>
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      <strong>Priority:</strong> Medium
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

          {/* Summary of Active Limitations */}
          <AnimatedSection direction="up" delay={550}>
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
                    Summary of Active Limitations
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      What works really well:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        'Component structure and props',
                        'State variables and hooks (including hook parameters)',
                        'Import tracking',
                        'Static style metadata',
                        'Dependency graphs',
                        'Inline style extraction (property names and values)',
                        'Styled JSX CSS extraction'
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

                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Active areas for improvement:
                    </h3>
                    <div className="space-y-3">
                      {[
                        { status: '🟡', text: 'Dynamic class expressions partially resolved (Phase 1 complete in v0.3.9, Phase 2 planned for advanced patterns)' },
                        { status: '❌', text: 'TypeScript types incomplete (generics, complex unions/intersections)' },
                        { status: '⚠️', text: 'Third-party component prop types missing (package names and versions included in v0.3.8)' },
                        { status: '❌', text: 'Project-level insights missing (cross-folder relationships, project-wide statistics)' },
                        { status: '⚠️', text: 'Comments only in header mode (JSDoc only)' },
                        { status: '⚠️', text: 'Test files excluded (by design)' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                          <span className="text-lg flex-shrink-0">{item.status}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                      <strong>Overall Assessment:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-400 ml-4 list-disc">
                      <li><strong>~95%</strong> - Component Contracts (Props, state, hooks detection) ✅ Hook parameters now included</li>
                      <li><strong>~100%</strong> - Imports Detection (Imports tracked correctly)</li>
                      <li><strong>~90-95%</strong> - Style Metadata (Static classes ~100%, dynamic classes Phase 1 complete ~70-80% of patterns, CSS-in-JS 9/9 major libraries supported ✅ v0.5.1)</li>
                    </ul>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
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
                          <li><strong>Component kind</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react:component</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react:hook</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">vue:component</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">vue:composable</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ts:module</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">node:cli</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">node:api</code> ✅ <strong className="text-green-600 dark:text-green-400">v0.4.0</strong></li>
                          <li><strong>Props</strong>: Types and signatures</li>
                          <li><strong>State variables</strong>: With types</li>
                          <li><strong>Hooks used</strong>: Listed in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">composition.hooks</code></li>
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
                          <li><strong>Inline styles</strong>: Property names and literal values extracted ✅ <strong className="text-green-600 dark:text-green-400">v0.3.5</strong></li>
                          <li><strong>Styled JSX</strong>: CSS content, selectors, properties, global attribute ✅ <strong className="text-green-600 dark:text-green-400">v0.3.5</strong></li>
                          <li><strong>Layout patterns</strong>: Flex vs grid, column configs</li>
                          <li><strong>Visual metadata</strong>: Color palettes, spacing patterns, typography scales</li>
                          <li><strong>Animation metadata</strong>: Library type, animation types</li>
                          <li><strong>Style mode variants</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">lean</code> (default in v0.7.0) and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">full</code> modes for token optimization ✅ <strong className="text-green-600 dark:text-green-400">v0.7.0</strong></li>
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
                          <li><strong>Source tool version</strong>: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">logicstamp-context@0.7.0</code></li>
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
                            1. Dynamic Class Parsing
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            ✅ Phase 1 Complete, 🟡 Phase 2 Planned
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Status:</strong> ✅ <strong className="text-green-600 dark:text-green-400">Phase 1 Complete</strong> (v0.3.9), 🟡 Phase 2 Planned
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">extractClassesFromExpression()</code> function in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/extractors/styling/tailwind.ts</code> now resolves Phase 1 dynamic expressions (variables, object properties, conditionals) within template literals. Phase 2 (object lookups with variables, cross-file references, function calls) is planned for a future release.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/extractors/styling/tailwind.ts</code> (lines 135-210)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Impact:</strong> Phase 1 handles ~70-80% of common dynamic class patterns. Phase 2 will handle advanced edge cases like object lookups with variables (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants[variant]</code>), cross-file references, and function calls.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Priority:</strong> High (Phase 1 complete), Medium (Phase 2)
                        </p>
                        <div className="mt-3">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Phase 1 (v0.3.9 - ✅ Complete):</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                            <li>✅ Resolve const/let declarations with string literals: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">const base = 'px-4 py-2'</code> → extracts <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">px-4</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">py-2</code></li>
                            <li>✅ Resolve object property access: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants.primary</code> → extracts classes from object property value</li>
                            <li>✅ Handle conditional expressions in template literals: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">isActive ? 'bg-blue-500' : 'bg-gray-500'</code> (within template literals) → extracts both branches</li>
                            <li><strong>Coverage</strong>: ~70-80% of common dynamic class patterns</li>
                          </ul>
                        </div>
                        <div className="mt-3">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Phase 2 (Future Release):</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                            <li>❌ Object lookups with variables: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants[variant]</code> → requires resolving index variable first</li>
                            <li>❌ Cross-file references: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">import {'{'} baseClasses {'}'} from './styles'</code> → requires import resolution</li>
                            <li>❌ Function calls returning class strings: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getClasses('primary')</code> → requires function body analysis</li>
                            <li><strong>Coverage</strong>: Additional ~15-20% of edge cases</li>
                          </ul>
                        </div>
                        <div className="mt-3">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Current Limitations After Phase 1:</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                            <li>Object lookups with dynamic keys (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">variants[variant]</code>) are not resolved</li>
                            <li>Classes imported from other files are not resolved</li>
                            <li>Function calls that return class strings are not analyzed</li>
                            <li>Complex nested expressions may not be fully resolved</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            1. Inline Style Objects Extraction
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Fixed in v0.3.5
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Status:</strong> ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.5</strong> (Verified)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/core/styleExtractor/styleExtractor.ts</code> (lines 88-191)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Verified Implementation:</strong> The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">extractInlineStyles()</code> function extracts both properties AND values:
                        </p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Extracts property names from object literals</li>
                          <li>✅ Extracts literal values for strings, numbers, booleans, null, and template literals</li>
                          <li>✅ Returns <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">{'{'} properties: string[], values?: Record&lt;string, string&gt; {'}'}</code></li>
                        </ul>
                        <div className="mt-3 mb-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example:</p>
                          <TabbedCodeBlock
                            tabs={[
                              {
                                label: 'Source code has',
                                code: `style={{ animationDelay: '2s', color: 'blue', padding: '1rem' }}`,
                                copyText: `style={{ animationDelay: '2s', color: 'blue', padding: '1rem' }}`
                              },
                              {
                                label: 'Context.json now shows',
                                code: `"inlineStyles": {
  "properties": ["animationDelay", "color", "padding"],
  "values": {
    "animationDelay": "2s",
    "color": "blue",
    "padding": "1rem"
  }
}`,
                                copyText: `"inlineStyles": {
  "properties": ["animationDelay", "color", "padding"],
  "values": {
    "animationDelay": "2s",
    "color": "blue",
    "padding": "1rem"
  }
}`
                              }
                            ]}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Note:</strong> Dynamic values (variables, function calls) are detected as properties but their values are not extracted (static analysis limitation).
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            2. CSS-in-JS Support
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Complete in v0.5.1
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Supported:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ styled-components (component names, theme usage, css prop)</li>
                          <li>✅ Emotion (@emotion/styled)</li>
                          <li>✅ Material UI (@mui/material) - components, packages, features</li>
                          <li>✅ Ant Design (antd) - components, packages, features (theme, ConfigProvider, form, locale, icons) ✅ <strong className="text-green-600 dark:text-green-400">v0.5.1</strong></li>
                          <li>✅ Chakra UI (@chakra-ui/*) - components, packages, features (theme, color mode, responsive props, system props) ✅ <strong className="text-green-600 dark:text-green-400">v0.5.1</strong></li>
                          <li>✅ ShadCN/UI - components, variants, sizes</li>
                          <li>✅ Radix UI - primitives, patterns, accessibility</li>
                          <li>✅ Framer Motion - components, variants, animation features</li>
                          <li>✅ Styled JSX - CSS content extraction, selectors, properties, global attribute ✅ <strong className="text-green-600 dark:text-green-400">v0.3.5</strong></li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> All major CSS-in-JS libraries are now supported. Complete coverage for popular component libraries.
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            2. Third-Party Components Minimal Info
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            ⚠️ Phase 1 Complete, Phase 2 Pending
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Issue:</strong> Third-party components now include package names and versions (Phase 1 - ✅ Fixed in v0.3.8), but prop types are still missing (Phase 2 - ❌ Still unresolved).
                        </p>
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">What Works (Phase 1 - v0.3.8):</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-3">
                            <li>✅ Package name extraction from import specifiers (handles scoped packages, subpath imports)</li>
                            <li>✅ Version lookup from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">package.json</code> (checks dependencies, devDependencies, peerDependencies)</li>
                            <li>✅ Package name and version fields added to missing dependency objects</li>
                          </ul>
                          <div className="mt-3 mb-2">
                            <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example (After v0.3.8):</p>
                            <TabbedCodeBlock
                              tabs={[
                                {
                                  label: 'Context Output',
                                  code: `"missing": [
  {
    "name": "@mui/material",
    "reason": "external package",
    "referencedBy": "src/components/Dashboard.tsx",
    "packageName": "@mui/material",
    "version": "^5.15.0"
  }
]`,
                                  copyText: `"missing": [
  {
    "name": "@mui/material",
    "reason": "external package",
    "referencedBy": "src/components/Dashboard.tsx",
    "packageName": "@mui/material",
    "version": "^5.15.0"
  }
]`
                                }
                              ]}
                            />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Still Missing (Phase 2):</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc">
                            <li>❌ Prop types for third-party components</li>
                            <li>❌ Component API signatures from third-party packages</li>
                          </ul>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                          <strong>Impact:</strong> Better understanding of external dependencies (package names and versions), but still limited API information for third-party components.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> Medium (Phase 1 complete, Phase 2 pending)
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            3. TypeScript Types Incomplete
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/core/astParser/extractors/propTypeNormalizer.ts</code> (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">normalizePropType()</code> function)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Verified Implementation:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Captures prop types as strings (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"string"</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"number"</code>)</li>
                          <li>✅ Captures literal unions via regex: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">"primary" | "secondary"</code> → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">{'{'} type: 'literal-union', literals: ['primary', 'secondary'] {'}'}</code></li>
                          <li>✅ Captures function types: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">() ={'>'} void</code> → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">{'{'} type: 'function', signature: '() ={'>'} void' {'}'}</code></li>
                          <li>❌ Does NOT handle generics (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ListProps&lt;T&gt;</code>)</li>
                          <li>❌ Does NOT handle complex unions/intersections (e.g., <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">A & B</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">A | B | C</code> where not string literals)</li>
                          <li>❌ Does NOT extract generic type parameters</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Limited type information for complex types
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> Medium
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            5. Context main.json Limitations
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            Medium
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/cli/commands/context/fileWriter.ts</code> (lines 206-285)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Missing:</strong> Cross-folder relationships, project-wide statistics
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Only:</strong> Folder index with token estimates<br/>
                          <strong>Impact:</strong> Limited project-level insights
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> Medium
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            6. Code Content Not Captured
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
                            5. Comments/JSDoc Only in Header Mode
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
                            8. Next.js Framework Features
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200">
                            🟡 Partially Complete
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Current Behavior:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Basic Next.js detection (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">'use client'</code>/<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">'use server'</code> directives, App Router directory detection)</li>
                          <li>✅ Next.js import tracking</li>
                          <li>✅ <strong>Metadata exports</strong> (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">export const metadata = {'{...}'}</code>) extracted ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                          <li>✅ <strong>Route paths, dynamic routes, route segments</strong> extracted ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                          <li>✅ <strong>Route role detection</strong> (page, layout, loading, error, not-found, template, default, route) ✅ <strong className="text-green-600 dark:text-green-400">v0.3.10</strong></li>
                          <li>❌ Layout hierarchy and relationships not extracted</li>
                          <li>❌ Data fetching patterns (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getServerSideProps</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getStaticProps</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getStaticPaths</code>) not fully extracted</li>
                          <li>❌ Route handlers (API routes) detected but request/response types not extracted</li>
                          <li>❌ Loading/error boundaries detected but relationships not extracted</li>
                          <li>❌ Middleware files detected but not fully analyzed</li>
                          <li>❌ Dynamic imports tracked but component resolution not analyzed</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Next.js projects are detected and route roles, segment paths, and metadata exports are now extracted (v0.3.10). However, layout hierarchy, data fetching patterns, and some advanced App Router features are still not extracted. This limits understanding of some Next.js-specific architecture patterns.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/core/astParser/detectors.ts</code> (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">extractNextJsMetadata()</code> function)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> Medium
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            9. Backend Framework Features
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Complete (v0.4.0)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Backend framework support has been fully implemented for Express.js and NestJS.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Works (v0.4.0):</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Express.js route extraction (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app.get()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">router.post()</code>, etc.)</li>
                          <li>✅ NestJS controller extraction (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Controller</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Get</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Post</code>, etc.)</li>
                          <li>✅ HTTP method detection (GET, POST, PUT, DELETE, PATCH, ALL)</li>
                          <li>✅ Route path extraction with parameter detection (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">/users/:id</code> → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">params: ['id']</code>)</li>
                          <li>✅ API signature extraction (request/response types, parameters)</li>
                          <li>✅ Framework-specific metadata (decorators, annotations, class names)</li>
                          <li>✅ Automatic framework detection (skips frontend extraction for backend files)</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Doesn't Work:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>❌ Middleware/guard/interceptor detection (not yet extracted)</li>
                          <li>❌ Request validation schemas (not extracted from decorators like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Body()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Query()</code>)</li>
                          <li>❌ Response transformation logic (not analyzed)</li>
                          <li>❌ Other Node.js frameworks (Fastify, Koa, Hapi) not yet supported</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Backend API routes and controllers are now fully extracted, enabling AI assistants to understand backend API structure and endpoints. Middleware and advanced framework features are not yet extracted.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> Low (core features complete, advanced features pending)
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            10. Watch Mode
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Complete (v0.4.1, enhanced in v0.5.4 and v0.5.5)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Watch mode has been fully implemented for automatic context regeneration.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Works:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context --watch</code> command</li>
                          <li>✅ File system watcher for <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> files</li>
                          <li>✅ Style file watching (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.css</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.scss</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.module.css</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.module.scss</code>) with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--include-style</code></li>
                          <li>✅ Incremental rebuilds (only regenerates affected bundles)</li>
                          <li>✅ Debouncing (500ms) to batch rapid file changes</li>
                          <li>✅ Change detection showing what changed (props, hooks, state, events, components, functions)</li>
                          <li>✅ Debug mode (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--debug</code>) showing semantic/file/bundle hash changes</li>
                          <li>✅ Status files for tooling integration (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.logicstamp/context_watch-status.json</code>)</li>
                          <li>✅ Watch logs with <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--log-file</code> (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.logicstamp/context_watch-mode-logs.json</code>) - append-based event history</li>
                          <li>✅ Graceful shutdown on Ctrl+C, SIGTERM, SIGHUP (v0.5.4)</li>
                          <li>✅ Centralized cleanup registry ensures no orphaned resources (v0.5.4)</li>
                          <li>✅ <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">watch-fast</code> profile for lighter style extraction</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Recent Improvements (v0.7.0):</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Style cache optimization - Incremental rebuilds reuse cached style metadata when available</li>
                          <li>✅ Style error resilience - Style extraction failures don't block watch mode rebuilds</li>
                          <li>✅ Style mode variants - Cache supports both <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">lean</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">full</code> style modes</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Doesn't Work:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>❌ JavaScript files (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.js</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.jsx</code>) are not watched</li>
                          <li>❌ Configurable watch patterns/exclusions (uses fixed defaults)</li>
                          <li>❌ Hot reload integration (manual browser refresh still needed)</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Improves developer experience by automatically keeping context files in sync with code changes during development.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> ~~Medium~~ Complete
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            11. Strict Watch Mode
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Complete (v0.5.5)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Strict watch mode (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--strict-watch</code>) tracks breaking changes during development with state-based diffing.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Works:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Detects breaking changes: removed props, events, functions, contracts</li>
                          <li>✅ Detects warnings: changed prop types, removed state/variables</li>
                          <li>✅ State-based diffing like <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">git diff</code> (v0.5.5) - violations show current state vs baseline</li>
                          <li>✅ Revert detection - when breaking changes are reverted, violations file is deleted</li>
                          <li>✅ Violations report file (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.logicstamp/strict_watch_violations.json</code>)</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Doesn't Work:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>❌ Missing dependencies are not tracked as violations (they're expected for third-party packages)</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>State-Based Diffing Limitations (v0.5.5):</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>⚠️ <strong>Baseline is session-scoped</strong> - The baseline is set when watch mode starts and never updates. In long-running sessions with many file additions/deletions, comparing to a stale baseline could be misleading.</li>
                          <li>⚠️ <strong>Empty baseline edge case</strong> - If watch mode starts with no bundles (new project), all changes show as "added" relative to the empty baseline.</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Recent Improvements (v0.5.5):</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Missing dependencies excluded - Third-party packages no longer reported as violations (expected behavior)</li>
                          <li>✅ Revert detection - When breaking changes are reverted to baseline, violations file is automatically deleted</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Helps catch breaking API changes during development before they affect consumers.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> ~~Medium~~ Complete
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            12. Git Baseline Comparison
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Complete (v0.7.2)
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Git-based baseline support for context comparison, enabling meaningful drift detection against known reference points.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>What Works:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--baseline git:&lt;ref&gt;</code> option to compare against any local git ref (branch, tag, commit)</li>
                          <li>✅ Uses git worktrees for clean isolation during comparison</li>
                          <li>✅ Generates context for both baseline and current code, then compares</li>
                          <li>✅ Automatic cleanup of worktrees and temp directories</li>
                          <li>✅ Works with branches, tags, and commit hashes</li>
                          <li>✅ Hash-only filtering prevents false positives from TypeScript resolution differences</li>
                          <li>✅ Git-ignored files automatically filtered from comparison results</li>
                          <li>✅ Symmetric file exclusion using working directory's <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code></li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Known Limitations:</strong>
                        </p>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>⚠️ <strong>Type changes skipped in git baseline mode:</strong> Prop and emit type changes (e.g., <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">string</code> → <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">number</code>) are only detected in direct file comparison mode, not in git baseline mode. Only added/removed props and emits are reported in git baseline mode.</li>
                          <li>⚠️ <strong>Local refs only:</strong> Git baseline only works with local refs that exist in your local repository. Remote branches must be fetched first (e.g., <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">git fetch origin main</code> before using <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--baseline git:origin/main</code>).</li>
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Determinism:</strong>
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          ✅ <strong>The workflow is deterministic for detecting meaningful changes.</strong> Even when semantic hashes differ between worktree and working directory (due to TypeScript resolution differences), the comparison will always produce the same result (PASS or DRIFT) for identical code. Hash-only differences are filtered out to ensure deterministic results, while hash changes that occur alongside other structural changes are still reported.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Impact:</strong> Enables meaningful drift detection against stable reference points, making CI integration straightforward. Hash-only filtering prevents false positives while preserving hash information for real structural changes.
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          <strong>Priority:</strong> ~~Medium~~ Complete
                        </p>
                      </div>

                      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            13. Test Files Excluded
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
                            14. Runtime Behavior
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

                      <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                            15. Styled JSX CSS Extraction
                          </h4>
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200">
                            ✅ Fixed in v0.3.5
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Status:</strong> ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.5</strong> (Verified)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Location:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/core/styleExtractor/styledJsx.ts</code> (lines 59-230)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <strong>Verified Implementation:</strong> The <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">extractStyledJsx()</code> function fully extracts CSS content:
                        </p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 ml-4 list-disc mb-2">
                          <li>✅ Extracts CSS from <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> template literals</li>
                          <li>✅ Parses CSS using css-tree AST for selectors and properties</li>
                          <li>✅ Detects <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">global</code> attribute</li>
                          <li>✅ Returns <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">{'{'} css: string, global?: boolean, selectors?: string[], properties?: string[] {'}'}</code></li>
                        </ul>
                        <div className="mt-3 mb-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Example:</p>
                          <TabbedCodeBlock
                            tabs={[
                              {
                                label: 'Source has',
                                code: `<style jsx global>{\`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  .container {
    padding: 1rem;
    color: blue;
  }
\`}</style>`,
                                copyText: `<style jsx global>{\`
  body {
    margin: 0;
    font-family: sans-serif;
  }
  .container {
    padding: 1rem;
    color: blue;
  }
\`}</style>`
                              },
                              {
                                label: 'Context.json now shows',
                                code: `"styledJsx": {
  "css": "body {\\n  margin: 0;\\n  font-family: sans-serif;\\n}\\n.container {\\n  padding: 1rem;\\n  color: blue;\\n}",
  "global": true,
  "selectors": ["body", ".container"],
  "properties": ["color", "font-family", "margin", "padding"]
}`,
                                copyText: `"styledJsx": {
  "css": "body {\\n  margin: 0;\\n  font-family: sans-serif;\\n}\\n.container {\\n  padding: 1rem;\\n  color: blue;\\n}",
  "global": true,
  "selectors": ["body", ".container"],
  "properties": ["color", "font-family", "margin", "padding"]
}`
                              }
                            ]}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          <strong>Features:</strong> Extracts full CSS content from template literals, parses CSS using AST (css-tree) for accurate selector/property extraction, detects <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">global</code> attribute, handles complex selectors, per-block parsing for resilience
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Fixed/Resolved Features Section */}
          <AnimatedSection direction="up" delay={700}>
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
                    Fixed/Resolved Features
                  </h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  These items were previously limitations but have been fixed. For detailed release notes, see the <a href="https://github.com/LogicStamp/logicstamp-context/blob/main/CHANGELOG.md" className="text-green-600 dark:text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">CHANGELOG</a>.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Recent Fixes (v0.7.x)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Version</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fix</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Style mode default</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Default <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context style</code> output is now <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--style-mode lean</code> (breaking change)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Security awareness</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400"><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">stamp context</code> warns when no security report is found</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Watch style cache</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Incremental watch mode reuses cached style metadata, reducing redundant extraction</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Style error logging</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Style extraction failures in watch mode now log errors when <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">LOGICSTAMP_DEBUG=1</code></td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">File lock consistency</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Added delay after stale lock removal for improved filesystem consistency on Windows</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.2</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Git baseline comparison</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400"><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--baseline git:&lt;ref&gt;</code> option enables comparing current working tree against any local git ref (branch, tag, commit)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.2</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Hash-only filtering</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Git baseline mode filters out hash-only differences to prevent false positives from TypeScript resolution differences</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.2</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Git-ignored file filtering</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Git-ignored files automatically filtered from comparison results in git baseline mode</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.7.2</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Symmetric file exclusion</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Both baseline and current context generation use working directory's <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.stampignore</code> for consistent file scanning</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Recent Fixes (v0.6.x)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Version</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fix</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.6.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Schema validation</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">UIFContract files validated via AJV during load; invalid contracts rejected with detailed errors</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.6.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Path traversal protection</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Enforced strict project-root boundaries across internal file utilities</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.6.0</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Node.js requirement</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Bumped to &gt;=20 (required by dependency and security updates)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Recent Fixes (v0.5.x)
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Version</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Fix</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.5</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Strict watch diffing</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">State-based diffing shows current state vs baseline (not cumulative history)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.5</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Config race condition</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">File locking prevents TOCTOU race conditions in config updates</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.5</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Atomic file writes</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Config and status files use temp file + rename pattern to prevent corruption</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.5</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Watch cleanup</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Watch status file properly deleted on exit (Windows/Cursor compatibility)</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.4</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Graceful shutdown</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Centralized cleanup registry ensures watch mode resources are cleaned up on any exit</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.4</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Empty bundle handling</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400"><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">--compare-modes</code> now reports errors when all bundle generations fail</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.3</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Race condition fix</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Sanitization stats no longer corrupted during concurrent file processing</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.3</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Memory leak fix</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Security report cache has 5-minute TTL; tokenizer cache can be cleared</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.3</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Windows paths</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Dependency resolution works correctly with Windows backslash paths</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.3</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">O(n²) → O(n)</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Dependency collection uses index-based iteration for large codebases</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.3</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Type safety</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Replaced unsafe <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">as any</code> casts with proper ts-morph type guards</td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">v0.5.1</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">CSS-in-JS</td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">Complete support for all major libraries (Chakra UI, Ant Design added)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Earlier Fixes (v0.3.x - v0.4.x)
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>v0.4.1:</strong> Watch mode - Full watch mode with incremental rebuilds and change detection</p>
                      <p><strong>v0.4.0:</strong> Backend support - Express.js and NestJS route/controller extraction</p>
                      <p><strong>v0.3.10:</strong> Next.js routes - Route roles, segment paths, and metadata exports</p>
                      <p><strong>v0.3.9:</strong> Dynamic Tailwind - Phase 1: Variables, object properties, conditionals in template literals</p>
                      <p><strong>v0.3.8:</strong> Third-party info - Package names and versions in missing dependencies</p>
                      <p><strong>v0.3.7:</strong> Emit accuracy - Only extracts handlers from Props interface (filters internal handlers)</p>
                      <p><strong>v0.3.6:</strong> Hook parameters - Full parameter extraction for custom React hooks</p>
                      <p><strong>v0.3.5:</strong> Styled JSX - CSS extraction from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks</p>
                      <p><strong>v0.3.5:</strong> Inline styles - Extracts both property names and literal values</p>
                      <p><strong>v0.3.2:</strong> CSS/SCSS parsing - AST-based parsing using css-tree</p>
                      <p><strong>v0.3.1:</strong> Hook classification - Custom hooks correctly classified as <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react:hook</code></p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Dependency Graph Edges
                    </h3>
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-2">
                        ✅ Implemented
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400 mb-2">
                        Dependency graph edges ARE built and populated. The <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">buildEdges()</code> function in <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">src/core/pack/builder.ts</code> creates edges between components based on their dependencies. Edges are included in bundle output.
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        <strong>Note:</strong> If edges appear empty in your output, this may be due to: components having no dependencies, dependencies not being resolved (missing from manifest), or dependencies being filtered as internal components.
                      </p>
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
                      <li>~~<strong>Hook parameter detection</strong>: Extract function signatures for custom hooks~~ ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.6</strong></li>
                      <li>~~<strong>Emit detection accuracy</strong>: Distinguish internal handlers from public API emits~~ ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.7</strong></li>
                      <li><strong>Dynamic class parsing (Phase 2)</strong>: Advanced patterns (object lookups with variables, cross-file references, function calls). Phase 1 complete in v0.3.9.</li>
                      <li>~~<strong>Extract inline style values</strong>: Parse <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">style={'{'} ... {'}'}</code> objects and include properties~~ ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.5</strong></li>
                      <li>~~<strong>Parse styled-jsx</strong>: Extract CSS from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">&lt;style jsx&gt;</code> blocks~~ ✅ <strong className="text-green-600 dark:text-green-400">Fixed in v0.3.5</strong></li>
                      <li>~~<strong>Populate edges</strong>: Build actual dependency graph edges~~ ✅ <strong className="text-green-600 dark:text-green-400">Implemented</strong></li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-base sm:text-lg">
                      Medium Priority
                    </h3>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li>~~<strong>CSS-in-JS support</strong>: Complete support for remaining libraries (Chakra UI, Ant Design)~~ ✅ <strong className="text-green-600 dark:text-green-400">Complete in v0.5.1</strong></li>
                      <li><strong>Enhanced third-party info (Phase 2)</strong>: Include prop types for third-party components (package names and versions completed in v0.3.8)</li>
                      <li><strong>TypeScript type extraction</strong>: Capture full type definitions (generics, complex unions/intersections)</li>
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
                        'Component contracts are comprehensive (including hook parameters)',
                        'Style metadata (when enabled) is detailed and well-structured',
                        'Project structure indexing is solid',
                        'Versioning/hashing system is robust',
                        'Inline styles and Styled JSX fully supported',
                        'Third-party package names and versions included in missing dependencies (v0.3.8)'
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
                        '🟡 Dynamic class resolution Phase 2 (Phase 1 complete in v0.3.9 - handles variables, object properties, conditionals)',
                        '⚠️ Third-party component prop types (package names and versions now included in v0.3.8)',
                        '❌ TypeScript type extraction (generics, complex unions/intersections)',
                        '❌ Context main.json enhancements (cross-folder relationships, project-wide statistics)',
                        '✅ CSS-in-JS support completeness - All major libraries supported including Chakra UI and Ant Design (v0.5.1)'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                          <span className="text-lg flex-shrink-0">{item.split(' ')[0]}</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item.substring(item.indexOf(' ') + 1)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Next Steps */}
        <ReadyToGetStartedCard
          description="Explore the complete CLI documentation or review additional guides."
        />
      </DocsLayout>
      <Footer />
    </>
  )
}

