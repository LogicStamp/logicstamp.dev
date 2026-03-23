/**
 * CLI subsection nav (matches DocsSidebar "CLI" items after CLI Commands).
 * Used for consistent Related Commands grids on logicstamp-context doc pages.
 */
export type LogicStampContextCliNavItem = {
  href: string
  /** Sidebar label; backticks become inline code via markdown */
  titleMd: string
  description: string
}

export const LOGICSTAMP_CONTEXT_CLI_NAV: readonly LogicStampContextCliNavItem[] = [
  {
    href: '/docs/logicstamp-context/security-scan',
    titleMd: '`security scan` command',
    description: 'Local secrets scan for TypeScript, JavaScript, and JSON',
  },
  {
    href: '/docs/logicstamp-context/init',
    titleMd: '`init` command',
    description: 'Configure .gitignore, project config, and onboarding files',
  },
  {
    href: '/docs/logicstamp-context/context',
    titleMd: '`context` command',
    description: 'Generate AI-ready context bundles',
  },
  {
    href: '/docs/logicstamp-context/style',
    titleMd: '`style` command',
    description: 'Compile bundles with Tailwind and style metadata',
  },
  {
    href: '/docs/logicstamp-context/watch-mode',
    titleMd: 'Watch Mode',
    description: 'Incremental rebuilds while you work',
  },
  {
    href: '/docs/logicstamp-context/toon',
    titleMd: 'TOON Format',
    description: 'Compact TOON output for smaller artifacts',
  },
  {
    href: '/docs/logicstamp-context/compare-modes',
    titleMd: 'Compare Modes',
    description: 'Token estimates across compilation modes',
  },
  {
    href: '/docs/logicstamp-context/strict-modes',
    titleMd: 'Strict Modes',
    description: 'Strict compare and strict watch for CI and local dev',
  },
  {
    href: '/docs/logicstamp-context/compare',
    titleMd: '`compare` command',
    description: 'Detect drift between snapshots or git baselines',
  },
  {
    href: '/docs/logicstamp-context/validate',
    titleMd: '`validate` command',
    description: 'Validate bundles, contracts, and missing dependencies',
  },
  {
    href: '/docs/logicstamp-context/clean',
    titleMd: '`clean` command',
    description: 'Remove generated context files and caches',
  },
] as const

export function logicStampContextCliNavExcept(currentHref: string): LogicStampContextCliNavItem[] {
  return LOGICSTAMP_CONTEXT_CLI_NAV.filter((item) => item.href !== currentHref)
}
