import type { BundledLanguage, Highlighter } from 'shiki/bundle/web'

let highlighterPromise: Promise<Highlighter> | null = null

export const TABBED_CODE_LANGS: BundledLanguage[] = [
  'bash',
  'shell',
  'sh',
  'zsh',
  'shellscript',
  'json',
  'json5',
  'jsonc',
  'jsonl',
  'typescript',
  'tsx',
  'javascript',
  'jsx',
  'yaml',
  'yml',
  'markdown',
  'md',
  'mdx',
  'html',
  'xml',
  'css',
  'scss',
  'sass',
  'graphql',
  'http',
  'python',
  'sql',
  'vue',
  'svelte',
  'astro',
  'c',
  'cpp',
  'java',
  'php',
  'wasm',
  'regexp',
]

export function getTabbedCodeHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = import('shiki/bundle/web').then(({ getSingletonHighlighter }) =>
      getSingletonHighlighter({
        themes: ['github-light', 'one-dark-pro'],
        langs: TABBED_CODE_LANGS,
      }),
    )
  }
  return highlighterPromise
}
