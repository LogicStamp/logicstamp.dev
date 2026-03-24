import type { BundledLanguage } from 'shiki/bundle/web'
import { TABBED_CODE_LANGS } from '@/lib/docs/tabbed-code-shiki'

const LANG_SET = new Set<string>(TABBED_CODE_LANGS)

/** Tab labels that are always shell-style commands */
const SHELL_LABELS = new Set(
  ['npm', 'yarn', 'pnpm', 'bun', 'cli', 'shell', 'bash', 'terminal'].map((s) => s.toLowerCase()),
)

/** Longer keys first so "json" wins over substrings we avoid adding */
const LABEL_SUBSTRING_LANG: { needle: string; lang: BundledLanguage }[] = [
  { needle: 'typescript', lang: 'typescript' },
  { needle: 'javascript', lang: 'javascript' },
  { needle: 'graphql', lang: 'graphql' },
  { needle: 'markdown', lang: 'markdown' },
  { needle: 'jsonc', lang: 'jsonc' },
  { needle: 'json', lang: 'json' },
  { needle: 'yaml', lang: 'yaml' },
  { needle: 'html', lang: 'html' },
  { needle: 'css', lang: 'css' },
  { needle: 'xml', lang: 'xml' },
  { needle: 'tsx', lang: 'tsx' },
  { needle: 'jsx', lang: 'jsx' },
]

const EXPLICIT_ALIASES: Record<string, BundledLanguage> = {
  ts: 'typescript',
  js: 'javascript',
  sh: 'bash',
  shell: 'bash',
  yml: 'yaml',
  md: 'markdown',
  gql: 'graphql',
}

export function guessTabCodeLang(
  code: string,
  label: string,
  explicit?: string,
): BundledLanguage {
  if (explicit) {
    const key = explicit.toLowerCase().trim()
    if (key in EXPLICIT_ALIASES) return EXPLICIT_ALIASES[key]
    if (LANG_SET.has(key)) return key as BundledLanguage
    return 'bash'
  }

  const lower = label.toLowerCase().trim()
  if (SHELL_LABELS.has(lower)) return 'bash'

  for (const { needle, lang } of LABEL_SUBSTRING_LANG) {
    if (lower.includes(needle)) return lang
  }

  const t = code.trim()
  if (
    (t.startsWith('{') && t.endsWith('}')) ||
    (t.startsWith('[') && t.endsWith(']')) ||
    (t.startsWith('{') && t.includes('\n'))
  ) {
    try {
      JSON.parse(t)
      return 'json'
    } catch {
      /* fall through */
    }
  }
  if (t.startsWith('<?xml')) return 'xml'
  if (/^\s*</.test(t) && />\s*$/.test(t.split('\n').pop() ?? '')) return 'html'
  if (/^(import|export)\s/m.test(t) || /^\s*(interface|type)\s+\w+/m.test(t)) return 'typescript'

  return 'bash'
}
