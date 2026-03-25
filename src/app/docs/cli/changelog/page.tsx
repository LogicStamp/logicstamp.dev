import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import { stripMarkdownBeforeFirstH2, stripMarkdownLeadingH1 } from '@/lib/docs'
import { fetchChangelog } from '@/lib/docs/fetch-github-docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'CLI Changelog | LogicStamp Context Documentation',
  description: 'Notable changes and release notes for the LogicStamp Context CLI.',
}

const CHANGELOG_GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-context/blob/main/CHANGELOG.md'

function normalizeChangelogMarkdown(markdown: string): string {
  return stripMarkdownBeforeFirstH2(stripMarkdownLeadingH1(markdown))
}

async function getChangelogContent(): Promise<string> {
  try {
    const { content } = await fetchChangelog('context')
    return normalizeChangelogMarkdown(content)
  } catch (error) {
    console.error('Error fetching changelog from GitHub:', error)
    return normalizeChangelogMarkdown(
      `# CLI Changelog\n\nUnable to load changelog from GitHub. Please visit the [CLI GitHub repository](${CHANGELOG_GITHUB_URL}) to view the latest changes.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }
}

export default async function ChangelogPage() {
  const changelogContent = await getChangelogContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              CLI Changelog
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This changelog is automatically fetched from the{' '}
              <a
                href={CHANGELOG_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                CLI GitHub repository
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown
            source="context"
            currentDocPath="CHANGELOG.md"
            className={docsBodyTypographyClass}
          >
            {changelogContent}
          </DocsMarkdown>
        </AnimatedSection>
      </DocsLayout>
      <Footer />
    </>
  )
}














