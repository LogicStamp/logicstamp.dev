/**
 * Remark plugin to rewrite internal .md links from GitHub docs to website URLs.
 * Fixes broken relative links when rendering imported CLI/MCP markdown on the site.
 */

import { visit } from 'unist-util-visit'
import type { DocSource } from './fetch-github-docs'

/** Convert a doc filename/path to a URL slug (e.g. MIGRATION_0.3.2.md → migration-0-3-2) */
function pathToSlug(path: string): string {
  return path
    .replace(/\.md$/, '')
    .split('/')
    .map((seg) =>
      seg
        .replace(/_/g, '-')
        .replace(/[A-Z]/g, (c) => c.toLowerCase())
        .replace(/\./g, '-')
    )
    .join('/')
}

/** Resolve a relative link target from currentDocPath. Returns path relative to docs/ or repo root. */
function resolveTarget(currentDocPath: string, href: string): string {
  const currentDir = currentDocPath.includes('/')
    ? currentDocPath.replace(/\/[^/]+$/, '')
    : ''
  const dirParts = currentDir ? currentDir.split('/').filter(Boolean) : []
  const hrefClean = href.replace(/^\.\//, '').replace(/\/$/, '')

  if (hrefClean.startsWith('../')) {
    const upCount = (hrefClean.match(/\.\.\//g) ?? []).length
    const targetRel = hrefClean.replace(/^(\.\.\/)+/, '')
    const newDirDepth = Math.max(0, dirParts.length - upCount)
    const newDir = dirParts.slice(0, newDirDepth).join('/')
    return newDir ? `${newDir}/${targetRel}` : targetRel
  }
  if (hrefClean.startsWith('./')) {
    return dirParts.length
      ? `${dirParts.join('/')}/${hrefClean.slice(2)}`
      : hrefClean.slice(2)
  }
  if (!hrefClean.includes('/')) {
    return dirParts.length ? `${dirParts.join('/')}/${hrefClean}` : hrefClean
  }
  return hrefClean
}

/** Explicit path overrides (GitHub docs path, lowercase → website URL) for non-obvious mappings */
const PATH_OVERRIDES: Record<string, string> = {
  'docs/limitations.md': '/docs/reference/limitations',
  'reference/limitations.md': '/docs/reference/limitations',
  'reference/hashes.md': '/docs/reference/hashes',
  'reference/schema.md': '/docs/reference/schema',
  'reference/uif-contracts.md': '/docs/reference/uif-contracts',
  'reference/stampignore.md': '/docs/reference/stampignore',
  /** Canonical schema doc (legacy site path was /docs/logicstamp-context/schema) */
  'schema.md': '/docs/reference/schema',
  'docs/schema.md': '/docs/reference/schema',
  'cli/style.md': '/docs/logicstamp-context/style',
  'cli/init.md': '/docs/logicstamp-context/init',
  'cli/context.md': '/docs/logicstamp-context/context',
  'cli/compare.md': '/docs/logicstamp-context/compare',
  'cli/compare-modes.md': '/docs/logicstamp-context/compare-modes',
  'cli/validate.md': '/docs/logicstamp-context/validate',
  'cli/clean.md': '/docs/logicstamp-context/clean',
  'cli/watch.md': '/docs/logicstamp-context/watch-mode',
  'cli/security-scan.md': '/docs/logicstamp-context/security-scan',
  'cli/ignore.md': '/docs/guides/usage',
  'cli/getting-started.md': '/docs/logicstamp-context/cli/getting-started',
}

/** Map resolved doc path to website URL. Handles special cases (CHANGELOG, ui-frameworks, etc.) */
function docPathToUrl(source: DocSource, resolvedPath: string): string | null {
  const base = source === 'context' ? '/docs/logicstamp-context' : '/docs/mcp'

  // Check explicit overrides first
  const override = PATH_OVERRIDES[resolvedPath.toLowerCase()]
  if (override) return override

  // Repo root CHANGELOG.md (from ../CHANGELOG.md)
  if (resolvedPath.toLowerCase() === 'changelog.md') {
    return `${base}/changelog`
  }

  // ui-frameworks live under logicstamp-context
  if (resolvedPath.startsWith('ui-frameworks/')) {
    const slug = pathToSlug(resolvedPath.replace('ui-frameworks/', ''))
    return `/docs/logicstamp-context/ui-frameworks/${slug}`
  }

  // Regular docs under context/mcp
  const slug = pathToSlug(resolvedPath)
  return `${base}/${slug}`
}

export interface RewriteDocLinksOptions {
  source: DocSource
  currentDocPath: string
}

/**
 * Resolve a relative .md link from a doc page to a site URL, or null if unchanged.
 */
export function resolveMdDocHref(
  source: DocSource,
  currentDocPath: string,
  href: string
): string | null {
  if (!href) return null
  if (/^(https?:|\/\/)/.test(href)) return null
  if (href.startsWith('#')) return null

  const mdMatch = href.match(/^([^#]+\.md)(#.*)?$/)
  if (!mdMatch) return null

  const pathPart = mdMatch[1]
  const hash = mdMatch[2] ?? ''
  const resolved = resolveTarget(currentDocPath, pathPart)
  const url = docPathToUrl(source, resolved)
  return url ? url + hash : null
}

/**
 * Remark plugin that rewrites relative .md links to website URLs.
 * Only transforms links that look like internal doc references (relative, end in .md).
 */
export function remarkRewriteDocLinks(options: RewriteDocLinksOptions) {
  const { source, currentDocPath } = options

  return (tree: import('mdast').Root) => {
    visit(tree, 'link', (node) => {
      const href = node.url
      if (!href) return
      const next = resolveMdDocHref(source, currentDocPath, href)
      if (next) node.url = next
    })
  }
}
