import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'Known Limitations | LogicStamp Context Documentation',
  description: 'Learn about current limitations in LogicStamp Context extraction, including dynamic class parsing, CSS-in-JS support, and TypeScript type extraction.',
}

const MD_PATH = 'reference/limitations.md'
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/reference/limitations.md'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return stripMarkdownLeadingH1(result.content)
  } catch (error) {
    console.error('Error fetching limitations doc:', error)
    return stripMarkdownLeadingH1(
      `# Known Limitations\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
    )
  }
}

export default async function KnownLimitationsPage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-red-50/20 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-red-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-amber-200/50 dark:border-amber-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 tracking-tight">
                Known Limitations
              </h1>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown
            source="context"
            currentDocPath={MD_PATH}
            className={docsBodyTypographyClass}
          >
            {content}
          </DocsMarkdown>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Explore the complete CLI documentation or review additional guides."
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
