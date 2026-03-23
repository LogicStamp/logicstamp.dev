import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import ReadyToGetStartedCard from '@/components/docs/ReadyToGetStartedCard'
import { getDocWithFallback } from '@/lib/docs'
import { UI_FRAMEWORK_DOCS } from '@/lib/docs/ui-framework-pages'

const config = UI_FRAMEWORK_DOCS['material-ui']
const GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/docs/ui-frameworks/material-ui.md'

export const metadata: Metadata = {
  title: `${config.title} | LogicStamp Context Documentation`,
  description: config.description,
}

async function getContent() {
  try {
    const result = await getDocWithFallback('context', `ui-frameworks/${config.mdFile}`)
    return result.content
  } catch (error) {
    console.error('Error fetching material-ui doc:', error)
    return `# ${config.title}\n\nUnable to load documentation. Please check the [source on GitHub](${GITHUB_URL}).\n\nError: ${error instanceof Error ? error.message : 'Unknown'}`
  }
}

export default async function MaterialUIPage() {
  const content = await getContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-blue-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-blue-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            <div className="relative">
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
