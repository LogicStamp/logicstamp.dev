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
  logicStampContextCliNavExcept,
  type LogicStampContextCliNavItem,
} from './logicstamp-context-cli-nav'

/** Remove first ATX `#` heading when the page hero already shows the title. */
export function stripMarkdownLeadingH1(markdown: string): string {
  return markdown.replace(/^#\s[^\n]*\n+/, '')
}
