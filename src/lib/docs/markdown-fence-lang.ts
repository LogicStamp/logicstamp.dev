import type { BundledLanguage } from 'shiki/bundle/web'
import { guessTabCodeLang } from '@/lib/docs/guess-tab-code-lang'
import { TABBED_CODE_LANGS } from '@/lib/docs/tabbed-code-shiki'

const LANG_SET = new Set<string>(TABBED_CODE_LANGS)

/**
 * Common ```fence``` info strings from GitHub / CommonMark → a Shiki lang we actually bundle.
 */
const FENCE_MAP: Record<string, BundledLanguage> = {
  dockerfile: 'bash',
  docker: 'bash',
  toml: 'yaml',
  ini: 'yaml',
  conf: 'yaml',
  env: 'bash',
  text: 'markdown',
  txt: 'markdown',
  plaintext: 'markdown',
  diff: 'markdown',
  patch: 'markdown',
  vb: 'typescript',
  ps1: 'bash',
  pwsh: 'bash',
  powershell: 'bash',
}

/**
 * Resolve markdown fenced block language from `className` (e.g. `language-typescript`) and code body.
 */
export function resolveMarkdownFenceLang(
  className: string | undefined,
  code: string,
): BundledLanguage {
  const m = className?.match(/language-([\w-+]+)/)
  const raw = m?.[1]?.toLowerCase()
  if (!raw) return guessTabCodeLang(code, '', undefined)
  if (raw in FENCE_MAP) return FENCE_MAP[raw]
  if (LANG_SET.has(raw)) return raw as BundledLanguage
  return guessTabCodeLang(code, '', raw)
}
