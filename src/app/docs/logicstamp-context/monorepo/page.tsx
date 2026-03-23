import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'

const MD_PATH = 'monorepo.md'
const GITHUB_URL =
  'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/monorepo.md'

export const metadata: Metadata = {
  title: 'Monorepo Support | LogicStamp Context Documentation',
  description:
    'Learn how LogicStamp Context works seamlessly with monorepos containing both backend and frontend code.',
}

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return stripMarkdownLeadingH1(result.content)
  } catch (error) {
    console.error('Error fetching monorepo doc:', error)
    return stripMarkdownLeadingH1(
      `# Monorepo Support\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
    )
  }
}

export default async function MonorepoPage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50/30 to-blue-50/20 dark:from-purple-950/20 dark:via-indigo-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                Monorepo Support
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 tracking-tight">
                Monorepo Support
              </h1>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown source="context" currentDocPath={MD_PATH}>
            {content}
          </DocsMarkdown>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Explore framework guides or initialize LogicStamp from your monorepo root."
          primaryAction={{
            href: '/docs/logicstamp-context/frameworks',
            label: 'Framework guides',
          }}
          secondaryAction={{
            href: '/docs/logicstamp-context/init',
            label: '`stamp init`',
          }}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
