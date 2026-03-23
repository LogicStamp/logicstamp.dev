import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback, stripMarkdownLeadingH1 } from '@/lib/docs'
import { UI_FRAMEWORK_DOCS } from '@/lib/docs/ui-framework-pages'

const config = UI_FRAMEWORK_DOCS.antd
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/ui-frameworks/antd.md'

export const metadata: Metadata = {
  title: `${config.title} | LogicStamp Context Documentation`,
  description: config.description,
}

async function getContent() {
  try {
    const result = await getDocWithFallback('context', `ui-frameworks/${config.mdFile}`)
    return stripMarkdownLeadingH1(result.content)
  } catch (error) {
    console.error('Error fetching antd doc:', error)
    return stripMarkdownLeadingH1(
      `# ${config.title}\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
    )
  }
}

export default async function AntdPage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                Style Metadata Extraction
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 tracking-tight">
                {config.title}
              </h1>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown source="context" currentDocPath={`ui-frameworks/${config.mdFile}`}>
            {content}
          </DocsMarkdown>
        </AnimatedSection>

        <ReadyToGetStartedCard
          description="Explore other UI frameworks or learn about style metadata extraction."
          primaryAction={{
            href: '/docs/logicstamp-context/ui-frameworks',
            label: 'All UI Frameworks',
          }}
          secondaryAction={{
            href: '/docs/logicstamp-context/style',
            label: 'Style Metadata',
          }}
        />
      </DocsLayout>
      <Footer />
    </>
  )
}
