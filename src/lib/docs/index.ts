export {
  fetchGitHubDoc,
  fetchChangelog,
  fetchRoadmap,
  getDocWithFallback,
  getRawDocUrl,
  type DocSource,
  type FetchDocResult,
} from './fetch-github-docs'
export {
  remarkRewriteDocLinks,
  resolveMdDocHref,
} from './rewrite-doc-links'
export {
  parseCliCommandsDoc,
  type CommandsTableRow,
  type ParsedCliCommandsDoc,
  type SeeAlsoLink,
} from './parse-cli-commands-doc'

export {
  LOGICSTAMP_CONTEXT_CLI_NAV,
  logicStampContextRelatedCliNavExcept,
  type LogicStampContextCliNavItem,
} from './logicstamp-context-cli-nav'

/** Remove first ATX `#` heading when the page hero already shows the title. */
export function stripMarkdownLeadingH1(markdown: string): string {
  return markdown.replace(/^#\s[^\n]*\n+/, '')
}

/**
 * Remove everything before the first `##` heading. Use with stripMarkdownLeadingH1 when the page
 * hero already shows the title and intro (e.g. Keep a Changelog boilerplate before version sections).
 */
export function stripMarkdownBeforeFirstH2(markdown: string): string {
  const lines = markdown.split(/\r?\n/)
  const idx = lines.findIndex((line) => /^##\s/.test(line))
  if (idx === -1) return markdown.trimStart()
  return lines.slice(idx).join('\n').replace(/^\n+/, '')
}
