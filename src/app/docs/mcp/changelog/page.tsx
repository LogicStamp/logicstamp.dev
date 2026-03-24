import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import DocsMarkdown from '@/components/docs/DocsMarkdown'
import { stripMarkdownBeforeFirstH2, stripMarkdownLeadingH1 } from '@/lib/docs'
import { fetchChangelog } from '@/lib/docs/fetch-github-docs'
import { docsBodyTypographyClass } from '@/lib/docs/markdown-styles'

export const metadata: Metadata = {
  title: 'MCP Changelog | LogicStamp MCP Documentation',
  description: 'Notable changes and release notes for the LogicStamp MCP Server.',
}

const CHANGELOG_GITHUB_URL = 'https://github.com/LogicStamp/logicstamp-mcp/blob/main/CHANGELOG.md'

function normalizeChangelogMarkdown(markdown: string): string {
  return stripMarkdownBeforeFirstH2(stripMarkdownLeadingH1(markdown))
}

async function getChangelogContent(): Promise<string> {
  try {
    const { content } = await fetchChangelog('mcp')
    return normalizeChangelogMarkdown(content)
  } catch (error) {
    console.error('Error fetching changelog from GitHub:', error)
    return normalizeChangelogMarkdown(
      `# MCP Changelog\n\nUnable to load changelog from GitHub. Please visit the [MCP GitHub repository](${CHANGELOG_GITHUB_URL}) to view the latest changes.\n\nError: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }
}

export default async function MCPChangelogPage() {
  const changelogContent = await getChangelogContent()

  return (
    <>
      <DocsLayout>
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-3">
              MCP Changelog
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This changelog is automatically fetched from the{' '}
              <a
                href={CHANGELOG_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                MCP GitHub repository
              </a>
              .
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <DocsMarkdown
            source="mcp"
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

