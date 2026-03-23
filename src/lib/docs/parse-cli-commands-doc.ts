/**
 * Parses logicstamp-context docs/cli/commands.md into structured data for the
 * commands docs page (table rows, bullets, quick reference, see-also links).
 */

export interface CommandsTableRow {
  command: string
  summary: string
  whenToUse: string
  keyOptions: string
}

export interface SeeAlsoLink {
  href: string
  linkText: string
  description: string
}

export interface ParsedCliCommandsDoc {
  introMarkdown: string
  tableRows: CommandsTableRow[]
  interactionBullets: string[]
  quickReferenceBash: string
  seeAlso: SeeAlsoLink[]
}

function parseTableRow(line: string): string[] {
  let s = line.trim()
  if (s.startsWith('|')) s = s.slice(1).trim()
  if (s.endsWith('|')) s = s.slice(0, -1).trim()
  return s.split(/\s\|\s/).map((c) => c.trim())
}

function isSeparatorRow(line: string): boolean {
  return /^\|[\s|:-]+\|$/.test(line.trim())
}

/**
 * Extract intro: content after `# Commands` until the first table row.
 */
function extractIntroMarkdown(md: string): string {
  const withoutH1 = md.replace(/^#\s+Commands\s*\n+/m, '')
  const lines = withoutH1.split('\n')
  const out: string[] = []
  for (const line of lines) {
    if (line.trim().startsWith('|')) break
    out.push(line)
  }
  return out.join('\n').trim()
}

function extractTableRows(md: string): CommandsTableRow[] {
  const lines = md.split('\n')
  const rows: CommandsTableRow[] = []
  let inTable = false

  for (const line of lines) {
    const t = line.trim()
    if (!t.startsWith('|')) {
      if (inTable && rows.length > 0) break
      continue
    }
    if (!inTable) {
      inTable = true
      if (isSeparatorRow(t)) continue
      // header — skip storing, validate 4 cols
      const h = parseTableRow(t)
      if (h.length >= 4 && h[0].toLowerCase().includes('command')) continue
    } else if (isSeparatorRow(t)) {
      continue
    } else {
      const cells = parseTableRow(t)
      if (cells.length >= 4) {
        rows.push({
          command: cells[0] ?? '',
          summary: cells[1] ?? '',
          whenToUse: cells[2] ?? '',
          keyOptions: cells[3] ?? '',
        })
      }
    }
  }

  return rows
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function extractSectionBody(md: string, heading: string, untilHeading: string): string {
  const re = new RegExp(
    `##\\s+${escapeRegExp(heading)}\\s*\\n+([\\s\\S]*?)(?=\\n##\\s+${escapeRegExp(untilHeading)}\\b)`,
    'm'
  )
  const m = md.match(re)
  return m?.[1]?.trim() ?? ''
}

function extractToEnd(md: string, heading: string): string {
  const re = new RegExp(`##\\s+${escapeRegExp(heading)}\\s*\\n+([\\s\\S]*)$`, 'm')
  const m = md.match(re)
  return m?.[1]?.trim() ?? ''
}

function extractInteractionBullets(md: string): string[] {
  const body = extractSectionBody(md, 'Command interactions', 'Quick reference')
  if (!body) return []
  return body
    .split('\n')
    .filter((line) => line.trim().startsWith('- '))
    .map((line) => line.replace(/^\s*-\s+/, '').trim())
}

function extractQuickReferenceBash(md: string): string {
  const body = extractSectionBody(md, 'Quick reference', 'See also')
  const fence = body.match(/```(?:bash|sh)?\s*\n([\s\S]*?)```/)
  return fence?.[1]?.trim() ?? ''
}

const SEE_ALSO_LINE = /^\s*-\s+\[([^\]]+)\]\(([^)]+\.md)\)\s*-\s*(.+)\s*$/

function extractSeeAlso(md: string): SeeAlsoLink[] {
  const rest = extractToEnd(md, 'See also')
  if (!rest) return []

  const lines = rest.split('\n')
  const links: SeeAlsoLink[] = []

  for (const line of lines) {
    const m = line.match(SEE_ALSO_LINE)
    if (m) {
      links.push({
        linkText: m[1].trim(),
        href: m[2].trim(),
        description: m[3].trim(),
      })
    }
  }

  return links
}

export function parseCliCommandsDoc(markdown: string): ParsedCliCommandsDoc {
  return {
    introMarkdown: extractIntroMarkdown(markdown),
    tableRows: extractTableRows(markdown),
    interactionBullets: extractInteractionBullets(markdown),
    quickReferenceBash: extractQuickReferenceBash(markdown),
    seeAlso: extractSeeAlso(markdown),
  }
}
