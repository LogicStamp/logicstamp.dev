import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Next.js Framework Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context detects and extracts Next.js App Router patterns, route roles, segment paths, and metadata.',
}

export default function NextJSPage() {
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
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Framework Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Next.js Framework Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context provides enhanced support for Next.js applications, automatically detecting Next.js-specific patterns, routing, and conventions.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Next.js Detection Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Next.js Detection
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp automatically identifies Next.js projects by:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong>File structure:</strong> Detects <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app/</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">pages/</code>, and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">src/app/</code> directories</li>
                  <li><strong>Next.js imports:</strong> Detects imports from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/link</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">next/router</code>, etc.</li>
                  <li><strong>Route files:</strong> Identifies page and layout files based on Next.js conventions</li>
                  <li><strong>API routes:</strong> Detects API route handlers in <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">pages/api/</code> or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app/api/</code></li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* App Router Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    App Router (Next.js 13+)
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects and extracts App Router patterns:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'App Router Structure',
                      code: `app/
  layout.tsx          → Layout component
  page.tsx            → Page component
  loading.tsx         → Loading component
  error.tsx           → Error component
  route.ts            → Route handler
  api/
    users/
      route.ts        → API route`,
                      copyText: `app/
  layout.tsx          → Layout component
  page.tsx            → Page component
  loading.tsx         → Loading component
  error.tsx           → Error component
  route.ts            → Route handler
  api/
    users/
      route.ts        → API route`
                    }
                  ]}
                />
                <div className="mt-4 sm:mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm sm:text-base text-green-800 dark:text-green-300 font-semibold mb-2">
                    Detected metadata:
                  </p>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">isInAppDir: true</code> - File is in <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">/app/</code> directory</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">directive: 'client' | 'server'</code> - 'use client' or 'use server' directive</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">routeRole</code> - Route role based on filename (page, layout, loading, error, not-found, template, default, route)</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">segmentPath</code> - Route path derived from file structure</li>
                    <li><code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">metadata</code> - Metadata exports (static and/or dynamic)</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Route Roles Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Route Roles
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp detects route roles based on special Next.js filenames:
                </p>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 mb-4 sm:mb-6">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Filename</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Route Role</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      {[
                        { filename: 'page.tsx', role: 'page', desc: 'Page component' },
                        { filename: 'layout.tsx', role: 'layout', desc: 'Layout component' },
                        { filename: 'loading.tsx', role: 'loading', desc: 'Loading UI component' },
                        { filename: 'error.tsx', role: 'error', desc: 'Error boundary component' },
                        { filename: 'not-found.tsx', role: 'not-found', desc: 'Not found page' },
                        { filename: 'template.tsx', role: 'template', desc: 'Template component' },
                        { filename: 'default.tsx', role: 'default', desc: 'Default parallel route' },
                        { filename: 'route.ts', role: 'route', desc: 'API route handler' },
                      ].map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">{item.filename}</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                            <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 rounded text-xs sm:text-sm font-mono">{item.role}</code>
                          </td>
                          <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{item.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Segment Paths Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Segment Paths
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp extracts route paths from file structure:
                </p>
                <div className="space-y-4">
                  {[
                    { file: 'app/page.tsx', path: "segmentPath: '/'", desc: 'Root route path' },
                    { file: 'app/blog/page.tsx', path: "segmentPath: '/blog'", desc: 'Nested route path' },
                    { file: 'app/blog/[slug]/page.tsx', path: "segmentPath: '/blog/[slug]'", desc: 'Dynamic route with parameter' },
                    { file: 'app/(auth)/login/page.tsx', path: "segmentPath: '/login'", desc: 'Route groups are removed' },
                    { file: 'app/api/users/route.ts', path: "segmentPath: '/api/users'", desc: 'API route path' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="mb-2">
                        <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">{item.file}</code>
                      </div>
                      <div className="mb-1">
                        <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-xs sm:text-sm font-mono">{item.path}</code>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-300">
                    <strong>Note:</strong> Route groups (parentheses) are automatically removed from segment paths. Both <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">app/</code> and <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">src/app/</code> directory structures are supported.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Metadata Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Metadata Extraction
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp extracts Next.js metadata exports:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Static Metadata</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Static Metadata',
                          code: `// app/page.tsx
export const metadata = {
  title: 'My Page',
  description: 'Page description',
  keywords: ['nextjs', 'react']
};

export default function Page() {
  return <div>Page</div>;
}`,
                          copyText: `// app/page.tsx
export const metadata = {
  title: 'My Page',
  description: 'Page description',
  keywords: ['nextjs', 'react']
};

export default function Page() {
  return <div>Page</div>;
}`
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Detected:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">metadata.static</code> - Object containing extracted metadata properties. Supports string, number, boolean, and null values.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Dynamic Metadata</h3>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Dynamic Metadata',
                          code: `// app/blog/[slug]/page.tsx
export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: \`Post: \${params.slug}\`,
    description: 'Dynamic description'
  };
}

export default function BlogPost() {
  return <div>Post</div>;
}`,
                          copyText: `// app/blog/[slug]/page.tsx
export function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: \`Post: \${params.slug}\`,
    description: 'Dynamic description'
  };
}

export default function BlogPost() {
  return <div>Post</div>;
}`
                        }
                      ]}
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      <strong>Detected:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">metadata.dynamic: true</code> - Indicates <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">generateMetadata</code> function exists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={600}>
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
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  No special configuration needed for Next.js projects:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Usage',
                      code: `# Scan Next.js project
stamp context

# With style extraction
stamp context --include-style

# Specific directory
stamp context ./app`,
                      copyText: `# Scan Next.js project
stamp context

# With style extraction
stamp context --include-style

# Specific directory
stamp context ./app`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Limitations
                  </h2>
                </div>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li>Middleware files are detected but not fully analyzed</li>
                  <li><code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getServerSideProps</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">getStaticProps</code> are identified but their return types may not be fully extracted</li>
                  <li>Dynamic imports in routes are tracked but not resolved</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
