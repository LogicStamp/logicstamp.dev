import type { ReactNode } from 'react'

export type WhyBenefit = {
  icon: ReactNode
  title: string
  description: string
  stat: string
  statLabel: string
  statBreakdown?: string
  iconBg: string
}

export const whyLogicStampBenefits: WhyBenefit[] = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Smaller bundles vs raw source',
    description:
      'Header-oriented modes drop imports and implementation noise and keep contracts and signatures—often a large token reduction compared to pasting whole files.',
    stat: '~70%',
    statLabel: 'Header mode (typ.)',
    statBreakdown: 'Header mode: ~70% • Header+style: ~30%',
    iconBg: 'from-blue-500/10 to-indigo-600/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Dependency graphs in the output',
    description:
      'Bundles include how components and modules connect—imports and relationships—so context reflects structure, not a single isolated file.',
    stat: 'Graph',
    statLabel: 'In bundle',
    iconBg: 'from-purple-500/10 to-pink-600/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: 'Watch mode for fresh bundles',
    description:
      'Regenerate context when files change, with incremental rebuilds. Optional strict watch can flag breaking contract changes while you refactor.',
    stat: 'Auto',
    statLabel: 'On save',
    iconBg: 'from-emerald-500/10 to-teal-600/10',
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'MCP server for compatible clients',
    description:
      'Expose bundles and project context to Cursor, Claude Desktop, Claude CLI, and other MCP-capable tools instead of manually assembling prompts.',
    stat: '7',
    statLabel: 'MCP tools',
    iconBg: 'from-cyan-500/10 to-green-600/10',
  },
]
