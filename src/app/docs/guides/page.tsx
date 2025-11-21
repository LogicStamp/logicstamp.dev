import { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'

export const metadata: Metadata = {
  title: 'Guides | LogicStamp Documentation',
  description: 'Step-by-step guides for using LogicStamp Context effectively with your codebase and LLM workflows.',
}

const guidePages = [
  {
    title: 'Usage Guides',
    href: '/docs/logicstamp-context/usage',
    description: 'End-to-end walkthroughs for generating context, curating bundles, and using them with LLMs.',
  },
  {
    title: 'LLM Context Format',
    href: '/docs/logicstamp-context/llm-context',
    description: 'Deep dive into the structure of generated context, how to consume it, and how to customize prompts around it.',
  },
  {
    title: 'Best Practices',
    href: '/docs/best-practices',
    description: 'Recommended patterns for organizing projects, pruning noise, and getting the most out of LogicStamp with AI tools.',
  },
  {
    title: 'Hashes',
    href: '/docs/hashes',
    description: 'Understand fileHash, semanticHash, and bundleHash and how LogicStamp tracks changes across layers.',
  },
]

export default function GuidesHomePage() {
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
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Guides Hub
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Guides & Playbooks
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Practical, scenario-based guides for installing LogicStamp, generating AI-ready context, and integrating it
                into your day-to-day workflow with LLMs.
              </p>

              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-3xl">
                Start here if you want opinionated walkthroughs rather than raw reference docs. Each guide is designed to be
                copy-paste friendly and easy to adapt to your own repo.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Guides grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {guidePages.map((page, index) => (
            <AnimatedSection
              key={page.href}
              direction="up"
              delay={100 + index * 100}
            >
              <Link
                href={page.href}
                className="block h-full bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50/60 dark:hover:bg-blue-900/20 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {page.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                      {page.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}


