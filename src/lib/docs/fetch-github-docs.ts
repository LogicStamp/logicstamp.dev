/**
 * Utility to fetch markdown docs from LogicStamp GitHub repos.
 *
 * Sources:
 * - logicstamp-context: https://github.com/LogicStamp/logicstamp-context/tree/main/docs
 * - logicstamp-mcp: https://github.com/LogicStamp/logicstamp-mcp/tree/main/docs
 *
 * Uses raw.githubusercontent.com for direct file fetches (no API token needed).
 */

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com'

export type DocSource = 'context' | 'mcp'

const REPO_CONFIG: Record<DocSource, { owner: string; repo: string; prefix: string }> = {
  context: { owner: 'LogicStamp', repo: 'logicstamp-context', prefix: 'docs/' },
  mcp: { owner: 'LogicStamp', repo: 'logicstamp-mcp', prefix: 'docs/' },
}

/**
 * Build the raw GitHub URL for a doc file.
 */
export function getRawDocUrl(source: DocSource, path: string, ref = 'main'): string {
  const { owner, repo, prefix } = REPO_CONFIG[source]
  const cleanPath = path.replace(/^\//, '').replace(/^docs\//, '')
  const fullPath = prefix.endsWith('/') ? `${prefix}${cleanPath}` : `${prefix}/${cleanPath}`
  return `${GITHUB_RAW_BASE}/${owner}/${repo}/${ref}/${fullPath}`
}

export interface FetchDocResult {
  content: string
  source: DocSource
  path: string
  url: string
}

/**
 * Fetch markdown content from a LogicStamp GitHub docs repo.
 *
 * @param source - 'context' (logicstamp-context) or 'mcp' (logicstamp-mcp)
 * @param path - Path relative to docs/ (e.g. 'getting-started.md', 'cli/init.md', 'MIGRATION_0.3.2.md')
 * @param ref - Git ref (default: 'main')
 * @returns Fetched content or throws on failure
 */
export async function fetchGitHubDoc(
  source: DocSource,
  path: string,
  ref = 'main'
): Promise<FetchDocResult> {
  const url = getRawDocUrl(source, path, ref)
  const res = await fetch(url, {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
    headers: { Accept: 'text/plain' },
  })

  if (!res.ok) {
    throw new Error(
      `Failed to fetch doc: ${res.status} ${res.statusText} for ${url}`
    )
  }

  const content = await res.text()
  return { content, source, path, url }
}

/**
 * Build the raw GitHub URL for CHANGELOG.md at repo root.
 */
export function getRawChangelogUrl(source: DocSource, ref = 'main'): string {
  const { owner, repo } = REPO_CONFIG[source]
  return `${GITHUB_RAW_BASE}/${owner}/${repo}/${ref}/CHANGELOG.md`
}

/**
 * Fetch CHANGELOG.md from a LogicStamp GitHub repo (root of repo, not docs/).
 *
 * @param source - 'context' (logicstamp-context/CLI) or 'mcp' (logicstamp-mcp)
 * @param ref - Git ref (default: 'main')
 * @returns Fetched content or throws on failure
 */
export async function fetchChangelog(
  source: DocSource,
  ref = 'main'
): Promise<FetchDocResult> {
  const url = getRawChangelogUrl(source, ref)
  const res = await fetch(url, {
    next: { revalidate: 3600 }, // ISR: revalidate every hour
    headers: { Accept: 'text/plain' },
  })

  if (!res.ok) {
    throw new Error(
      `Failed to fetch changelog: ${res.status} ${res.statusText} for ${url}`
    )
  }

  const content = await res.text()
  return { content, source, path: 'CHANGELOG.md', url }
}

/**
 * Fetch doc with local fallback. Tries docs/{context|mcp}/ locally first, then GitHub.
 * Useful when you have a local mirror and want offline / faster builds.
 */
export async function getDocWithFallback(
  source: DocSource,
  path: string,
  options?: { ref?: string; localBase?: string }
): Promise<FetchDocResult> {
  const localBase = options?.localBase ?? process.cwd()
  const fs = await import('fs/promises')
  const pathModule = await import('path')

  const localDir = source === 'context' ? 'context' : 'mcp'
  const localPath = pathModule.join(localBase, 'docs', localDir, path.replace(/^docs\//, ''))

  try {
    const content = await fs.readFile(localPath, 'utf-8')
    return {
      content,
      source,
      path,
      url: getRawDocUrl(source, path, options?.ref ?? 'main'),
    }
  } catch {
    // Local file not found, fetch from GitHub
    return fetchGitHubDoc(source, path, options?.ref)
  }
}
