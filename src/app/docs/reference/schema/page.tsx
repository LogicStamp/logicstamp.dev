import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'Schema Reference | LogicStamp Context Documentation',
  description: 'Reference documentation for LogicStamp context schema and structure.',
}

const MD_PATH = 'reference/schema.md'
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/reference/schema.md'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return stripMarkdownLeadingH1(result.content)
  } catch (error) {
    console.error('Error fetching schema doc:', error)
    return stripMarkdownLeadingH1(
      `# Schema\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
    )
  }
}

export default async function SchemaReferencePage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50/30 to-blue-50/20 dark:from-cyan-950/20 dark:via-sky-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900/40 dark:to-sky-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                Schema Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 tracking-tight">
                Schema
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
