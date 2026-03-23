import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'

export const metadata: Metadata = {
  title: 'UI Frameworks | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context extracts style metadata from Tailwind CSS, Material UI, ShadCN/UI, Radix UI, Ant Design, Chakra UI, styled-components, CSS/SCSS, and Framer Motion.',
}

const FRAMEWORKS = [
  { slug: 'antd', name: 'Ant Design', color: 'from-blue-500 to-cyan-600' },
  { slug: 'chakra', name: 'Chakra UI', color: 'from-teal-500 to-cyan-600' },
  { slug: 'css-scss', name: 'CSS & SCSS', color: 'from-indigo-500 to-purple-600' },
  { slug: 'framer-motion', name: 'Framer Motion', color: 'from-purple-500 to-pink-600' },
  { slug: 'material-ui', name: 'Material UI', color: 'from-blue-500 to-indigo-600' },
  { slug: 'radix', name: 'Radix UI', color: 'from-purple-500 to-violet-600' },
  { slug: 'shadcn', name: 'ShadCN/UI', color: 'from-gray-600 to-slate-700' },
  { slug: 'styled-components', name: 'Styled Components', color: 'from-pink-500 to-rose-600' },
  { slug: 'tailwind', name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-600' },
] as const

export default function UIFrameworksIndexPage() {
  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/30 to-indigo-50/20 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Style Metadata Extraction
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                UI Frameworks
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
                LogicStamp Context extracts style metadata from popular UI frameworks and styling solutions. Select a framework below for detailed documentation.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FRAMEWORKS.map(({ slug, name, color }) => (
              <Link
                key={slug}
                href={`/docs/logicstamp-context/ui-frameworks/${slug}`}
                className="group relative block p-4 sm:p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${color} mb-3`} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  View detailed extraction guide →
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}
