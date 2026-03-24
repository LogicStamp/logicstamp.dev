import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'UIF Contracts Reference | LogicStamp Context Documentation',
  description: 'Reference documentation for UIF contract shape and field semantics.',
}

const MD_PATH = 'reference/uif-contracts.md'
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/reference/uif-contracts.md'

async function getContent() {
  try {
    const result = await getDocWithFallback('context', MD_PATH)
    return stripMarkdownLeadingH1(result.content)
  } catch (error) {
    console.error('Error fetching uif-contracts doc:', error)
    return stripMarkdownLeadingH1(
      `# UIF Contracts\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
    )
  }
}

export default async function UifContractsReferencePage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50/30 to-fuchsia-50/20 dark:from-violet-950/20 dark:via-purple-950/10 dark:to-fuchsia-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40 text-violet-700 dark:text-violet-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-violet-200/50 dark:border-violet-700/50">
                UIF Contracts Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 tracking-tight">
                UIF Contracts
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
