import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import { FRAMEWORK_DOCS } from '@/lib/docs/framework-pages'

export const metadata: Metadata = {
  title: 'Frameworks | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context works with TypeScript, React, Next.js, Vue, Express.js, NestJS, and monorepos.',
}

const FRAMEWORKS = [
  { slug: 'typescript' as const, name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
  { slug: 'react' as const, name: 'React', color: 'from-cyan-500 to-blue-600' },
  { slug: 'nextjs' as const, name: 'Next.js', color: 'from-gray-600 to-slate-700' },
  { slug: 'vue' as const, name: 'Vue', color: 'from-emerald-500 to-green-600' },
  { slug: 'express' as const, name: 'Express.js', color: 'from-green-500 to-emerald-600' },
  { slug: 'nestjs' as const, name: 'NestJS', color: 'from-red-500 to-pink-600' },
] as const

export default function FrameworksIndexPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Framework Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Frameworks
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                LogicStamp Context supports TypeScript, React, Next.js, Vue, Express.js, and NestJS. Documentation is synced from the{' '}
                <a
                  href="https://github.com/LogicStamp/logicstamp-context/tree/main/docs/frameworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  logicstamp-context/docs/frameworks
                </a>{' '}
                repository.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FRAMEWORKS.map(({ slug, name, color }) => (
              <Link
                key={slug}
                href={`/docs/logicstamp-context/frameworks/${slug}`}
                className="group relative block p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} mb-3`} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {FRAMEWORK_DOCS[slug].description}
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={200}>
          <div className="mt-8 p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Monorepo Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              LogicStamp Context works seamlessly with monorepos containing both backend and frontend code.
            </p>
            <Link
              href="/docs/logicstamp-context/frameworks/monorepo"
              className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
            >
              Learn about monorepo support →
            </Link>
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
