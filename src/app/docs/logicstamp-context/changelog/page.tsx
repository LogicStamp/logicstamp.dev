import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import ReactMarkdown from 'react-markdown'

export const metadata: Metadata = {
  title: 'Changelog | LogicStamp Context Documentation',
  description: 'Notable changes and release notes for the LogicStamp Context CLI.',
}

// GitHub raw content URL for the changelog
const CHANGELOG_URL = 'https://raw.githubusercontent.com/LogicStamp/logicstamp-context/main/CHANGELOG.md'

async function fetchChangelog(): Promise<string> {
  try {
    // Fetch with caching - revalidate every hour
    const response = await fetch(CHANGELOG_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Accept': 'text/markdown',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch changelog: ${response.statusText}`)
    }

    return await response.text()
  } catch (error) {
    console.error('Error fetching changelog from GitHub:', error)
    // Return a fallback message
    return `# Changelog\n\nUnable to load changelog from GitHub. Please visit the [GitHub repository](https://github.com/LogicStamp/logicstamp-context/blob/main/logicstamp-docs/CHANGELOG.md) to view the latest changes.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`
  }
}

export default async function ChangelogPage() {
  const changelogContent = await fetchChangelog()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              Changelog
            </h1>
            <p className="text-lg text-gray-900 dark:text-white">
              All notable user-facing changes to LogicStamp Context are tracked here. The project follows Semantic
              Versioning and a Keep a Changelog-style format.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              This changelog is automatically fetched from the{' '}
              <a
                href="https://github.com/LogicStamp/logicstamp-context/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                GitHub repository
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-900 dark:prose-p:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-strong:text-gray-900 dark:prose-strong:text-white prose-ul:text-gray-900 dark:prose-ul:text-white prose-li:text-gray-900 dark:prose-li:text-white text-gray-900 dark:text-white">
          <AnimatedSection direction="up" delay={100}>
            <ReactMarkdown
              components={{
                h2: (props) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2" {...props} />
                ),
                h3: (props) => (
                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
                ),
                h4: (props) => (
                  <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />
                ),
                code: (props: any) => {
                  const { inline, ...rest } = props
                  if (inline) {
                    return (
                      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-sm font-mono" {...rest} />
                    )
                  }
                  return (
                    <code className="block p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg text-sm font-mono overflow-x-auto" {...rest} />
                  )
                },
                a: (props: any) => (
                  <a className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                ul: (props) => (
                  <ul className="list-disc list-inside space-y-2 my-4 ml-4" {...props} />
                ),
                li: (props) => (
                  <li className="text-gray-900 dark:text-white" {...props} />
                ),
                hr: (props) => (
                  <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
                ),
              }}
            >
              {changelogContent}
            </ReactMarkdown>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
