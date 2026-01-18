import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Monorepo Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context works seamlessly with monorepos containing both backend and frontend code.',
}

export default function MonorepoPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50/30 to-blue-50/20 dark:from-purple-950/20 dark:via-indigo-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                Monorepo Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Monorepo Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context works seamlessly with monorepos containing both backend and frontend code. Each file is analyzed independently, so you can mix Express.js, NestJS, React, Vue, and TypeScript files in the same codebase.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* How It Works Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    How It Works
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp analyzes <strong>each file independently</strong>:
                </p>
                <ol className="space-y-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                  <li><strong>Scans</strong> all <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> files recursively</li>
                  <li><strong>Detects</strong> framework per file (Express, NestJS, React, Vue, or TypeScript)</li>
                  <li><strong>Extracts</strong> appropriate metadata based on detected framework</li>
                  <li><strong>Generates</strong> contracts for all files, preserving your directory structure</li>
                </ol>
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Key point:</strong> Files don't interfere with each other. A backend file in one folder doesn't affect frontend extraction in another folder.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Framework Detection Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Framework Detection Per File
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Each file is analyzed independently with framework detection:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Priority Order</h3>
                    <ol className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                      <li><strong>Vue</strong> (if Vue imports detected) → Vue extraction</li>
                      <li><strong>Backend</strong> (if Express/NestJS detected) → Backend extraction</li>
                      <li><strong>React</strong> (default) → React extraction</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Detection Logic</h3>
                    <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                      <li><strong>Express.js:</strong> Requires <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">express</code> import AND route patterns (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app.get()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">router.post()</code>, etc.)</li>
                      <li><strong>NestJS:</strong> Requires <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@nestjs</code> import AND controller decorators (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Controller()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">@Get()</code>, etc.)</li>
                      <li><strong>Vue:</strong> Requires <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">vue</code> import</li>
                      <li><strong>React:</strong> Default fallback (or explicit <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react</code> import)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Monorepo Structure Examples Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Monorepo Structure Examples
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Example 1: Packages-Based Monorepo</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Packages Structure',
                          code: `my-monorepo/
├── packages/
│   ├── backend/
│   │   └── src/
│   │       ├── routes/
│   │       │   └── users.ts          → ✅ node:api (Express routes)
│   │       └── controllers/
│   │           └── posts.ts         → ✅ node:api (NestJS controller)
│   │
│   ├── frontend/
│   │   └── src/
│   │       ├── components/
│   │       │   └── Button.tsx        → ✅ react:component
│   │       └── hooks/
│   │           └── useAuth.ts        → ✅ react:hook
│   │
│   └── shared/
│       └── types.ts                  → ✅ ts:module`,
                          copyText: `my-monorepo/
├── packages/
│   ├── backend/
│   │   └── src/
│   │       ├── routes/
│   │       │   └── users.ts          → ✅ node:api (Express routes)
│   │       └── controllers/
│   │           └── posts.ts         → ✅ node:api (NestJS controller)
│   │
│   ├── frontend/
│   │   └── src/
│   │       ├── components/
│   │       │   └── Button.tsx        → ✅ react:component
│   │       └── hooks/
│   │           └── useAuth.ts        → ✅ react:hook
│   │
│   └── shared/
│       └── types.ts                  → ✅ ts:module`
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Result:</strong> All files are extracted correctly: Backend files → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">backend.routes</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">backend.controller</code>. Frontend files → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">hooks</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">components</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">props</code>. Shared files → <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">functions</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">imports</code>.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Example 2: Apps-Based Monorepo</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Apps Structure',
                          code: `my-monorepo/
├── apps/
│   ├── api/
│   │   └── src/
│   │       ├── routes.ts             → ✅ node:api (Express)
│   │       └── middleware.ts         → ✅ ts:module
│   │
│   └── web/
│       └── src/
│           ├── pages/
│           │   └── Home.tsx          → ✅ react:component
│           └── components/
│               └── Header.tsx        → ✅ react:component
│
└── packages/
    └── ui/
        └── Button.tsx                 → ✅ react:component`,
                          copyText: `my-monorepo/
├── apps/
│   ├── api/
│   │   └── src/
│   │       ├── routes.ts             → ✅ node:api (Express)
│   │       └── middleware.ts         → ✅ ts:module
│   │
│   └── web/
│       └── src/
│           ├── pages/
│           │   └── Home.tsx          → ✅ react:component
│           └── components/
│               └── Header.tsx        → ✅ react:component
│
└── packages/
    └── ui/
        └── Button.tsx                 → ✅ react:component`
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Result:</strong> Each app and package is analyzed independently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Usage
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Scan Entire Monorepo</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Scan Entire Monorepo',
                          code: `# From monorepo root
stamp context

# Or specify a path
stamp context ./packages`,
                          copyText: `# From monorepo root
stamp context

# Or specify a path
stamp context ./packages`
                        }
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Scan Specific Packages</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Scan Specific Packages',
                          code: `# Backend only
stamp context ./packages/backend

# Frontend only
stamp context ./packages/frontend

# Both (from root)
stamp context`,
                          copyText: `# Backend only
stamp context ./packages/backend

# Frontend only
stamp context ./packages/frontend

# Both (from root)
stamp context`
                        }
                      ]}
                    />
                  </div>
                </div>
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                  <p className="text-sm text-teal-800 dark:text-teal-300">
                    <strong>Output Structure:</strong> LogicStamp preserves your directory structure. Each folder gets its own <code className="px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">context.json</code> file, plus a <code className="px-1.5 py-0.5 bg-teal-100 dark:bg-teal-900/40 rounded text-xs font-mono">context_main.json</code> index at the root.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Best Practices
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-base font-semibold text-indigo-900 dark:text-indigo-200 mb-2">1. Separate Backend and Frontend Files</h3>
                    <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                      <strong>Recommended:</strong> Keep backend and frontend code in separate files. LogicStamp uses priority-based detection. If a file has both backend routes and React components, only one will be extracted (backend takes priority over React).
                    </p>
                    <div className="mt-2 space-y-1 text-xs text-indigo-800 dark:text-indigo-300">
                      <p>✅ <strong>Good:</strong></p>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/backend/src/routes/users.ts → Backend routes</code>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/frontend/src/components/App.tsx → Frontend component</code>
                    </div>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-base font-semibold text-indigo-900 dark:text-indigo-200 mb-2">2. Use Clear File Organization</h3>
                    <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                      Organize by concern: Keep related files together and use clear directory structures.
                    </p>
                    <div className="mt-2 space-y-1 text-xs text-indigo-800 dark:text-indigo-300">
                      <p>✅ <strong>Good:</strong></p>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/backend/routes/</code>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/frontend/components/</code>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/shared/types/</code>
                    </div>
                  </div>
                  <div className="p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <h3 className="text-base font-semibold text-indigo-900 dark:text-indigo-200 mb-2">3. Framework-Specific Folders</h3>
                    <p className="text-sm text-indigo-800 dark:text-indigo-300 mb-2">
                      Group files by framework for better organization and clearer extraction results.
                    </p>
                    <div className="mt-2 space-y-1 text-xs text-indigo-800 dark:text-indigo-300">
                      <p>✅ <strong>Good:</strong></p>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/express-api/</code>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/nestjs-api/</code>
                      <code className="block px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">packages/react-app/</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Common Patterns Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Common Patterns
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Next.js Monorepo</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Next.js Monorepo',
                          code: `my-monorepo/
├── apps/
│   ├── web/                    → Next.js app
│   │   └── app/
│   │       └── page.tsx        → ✅ react:component (with Next.js metadata)
│   │
│   └── api/                     → Express API
│       └── routes.ts           → ✅ node:api`,
                          copyText: `my-monorepo/
├── apps/
│   ├── web/                    → Next.js app
│   │   └── app/
│   │       └── page.tsx        → ✅ react:component (with Next.js metadata)
│   │
│   └── api/                     → Express API
│       └── routes.ts           → ✅ node:api`
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Note:</strong> Next.js API routes (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app/api/route.ts</code>) are detected as React components with Next.js metadata, not as backend routes. Express/NestJS patterns are required for backend extraction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Full-Stack Monorepo</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Full-Stack Monorepo',
                          code: `my-monorepo/
├── server/
│   └── src/
│       ├── routes.ts           → ✅ node:api (Express)
│       └── services.ts        → ✅ ts:module
│
├── client/
│   └── src/
│       ├── App.tsx             → ✅ react:component
│       └── hooks/
│           └── useAuth.ts      → ✅ react:hook
│
└── shared/
    └── types.ts                → ✅ ts:module`,
                          copyText: `my-monorepo/
├── server/
│   └── src/
│       ├── routes.ts           → ✅ node:api (Express)
│       └── services.ts        → ✅ ts:module
│
├── client/
│   └── src/
│       ├── App.tsx             → ✅ react:component
│       └── hooks/
│           └── useAuth.ts      → ✅ react:hook
│
└── shared/
    └── types.ts                → ✅ ts:module`
                        }
                      ]}
                    />
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
