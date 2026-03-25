/**
 * CLI subsection nav (matches DocsSidebar "CLI" items after CLI Commands).
 * Related Commands grids use {@link logicStampContextRelatedCliNavExcept} (subset of six).
 */
export type LogicStampContextCliNavItem = {
  href: string
  /** Sidebar label; backticks become inline code via markdown */
  titleMd: string
  description: string
}

export const LOGICSTAMP_CONTEXT_CLI_NAV: readonly LogicStampContextCliNavItem[] = [
  {
    href: '/docs/cli/security-scan',
    titleMd: '`security scan` command',
    description: 'Local secrets scan for TypeScript, JavaScript, and JSON',
  },
  {
    href: '/docs/cli/init',
    titleMd: '`init` command',
    description: 'Configure .gitignore, project config, and onboarding files',
  },
  {
    href: '/docs/cli/context',
    titleMd: '`context` command',
    description: 'Generate AI-ready context bundles',
  },
  {
    href: '/docs/cli/style',
    titleMd: '`style` command',
    description: 'Compile bundles with Tailwind and style metadata',
  },
  {
    href: '/docs/cli/watch-mode',
    titleMd: 'Watch Mode',
    description: 'Incremental rebuilds while you work',
  },
  {
    href: '/docs/cli/toon',
    titleMd: 'TOON Format',
    description: 'Compact TOON output for smaller artifacts',
  },
  {
    href: '/docs/cli/compare-modes',
    titleMd: 'Compare Modes',
    description: 'Token estimates across compilation modes',
  },
  {
    href: '/docs/cli/strict-modes',
    titleMd: 'Strict Modes',
    description: 'Strict compare and strict watch for CI and local dev',
  },
  {
    href: '/docs/cli/compare',
    titleMd: '`compare` command',
    description: 'Detect drift between snapshots or git baselines',
  },
  {
    href: '/docs/cli/validate',
    titleMd: '`validate` command',
    description: 'Validate bundles, contracts, and missing dependencies',
  },
  {
    href: '/docs/cli/clean',
    titleMd: '`clean` command',
    description: 'Remove generated context files and caches',
  },
] as const

/** Subset shown in Related Commands (init → context → watch → style → validate → compare). */
const RELATED_CLI_NAV_HREFS: readonly string[] = [
  '/docs/cli/init',
  '/docs/cli/context',
  '/docs/cli/watch-mode',
  '/docs/cli/style',
  '/docs/cli/validate',
  '/docs/cli/compare',
]

export function logicStampContextRelatedCliNavExcept(currentHref: string): LogicStampContextCliNavItem[] {
  const byHref = new Map(LOGICSTAMP_CONTEXT_CLI_NAV.map((item) => [item.href, item]))
  return RELATED_CLI_NAV_HREFS.map((href) => byHref.get(href)).filter(
    (item): item is LogicStampContextCliNavItem =>
      item != null && item.href !== currentHref,
  )
}
