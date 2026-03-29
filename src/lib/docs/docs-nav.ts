export type DocsNavItem = {
  title: string
  href: string
}

export type DocsNavSection = {
  title: string
  items: DocsNavItem[]
}

/** Single source of truth for docs sidebar + search palette. */
export const docsNavSections: DocsNavSection[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Docs Home', href: '/docs' },
      { title: 'What is LogicStamp?', href: '/docs/what-is-logicstamp' },
    ],
  },
  {
    title: 'Getting Started',
    items: [
      { title: 'Getting Started', href: '/docs/getting-started' },
      { title: 'CLI', href: '/docs/cli/getting-started' },
      { title: 'MCP', href: '/docs/mcp/getting-started' },
    ],
  },
  {
    title: 'CLI',
    items: [
      { title: 'CLI Hub', href: '/docs/cli' },
      { title: 'CLI Commands', href: '/docs/cli/commands' },
      { title: '`security scan` command', href: '/docs/cli/security-scan' },
      { title: '`init` command', href: '/docs/cli/init' },
      { title: '`context` command', href: '/docs/cli/context' },
      { title: '`style` command', href: '/docs/cli/style' },
      { title: 'Watch Mode', href: '/docs/cli/watch-mode' },
      { title: 'TOON Format', href: '/docs/cli/toon' },
      { title: 'Compare Modes', href: '/docs/cli/compare-modes' },
      { title: 'Strict Modes', href: '/docs/cli/strict-modes' },
      { title: '`compare` command', href: '/docs/cli/compare' },
      { title: '`validate` command', href: '/docs/cli/validate' },
      { title: '`clean` command', href: '/docs/cli/clean' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { title: 'Frameworks', href: '/docs/frameworks' },
      { title: 'TypeScript Support', href: '/docs/frameworks/typescript' },
      { title: 'React Support', href: '/docs/frameworks/react' },
      { title: 'Next.js Support', href: '/docs/frameworks/nextjs' },
      { title: 'Vue Support', href: '/docs/frameworks/vue' },
      { title: 'Express.js Support', href: '/docs/frameworks/express' },
      { title: 'NestJS Support', href: '/docs/frameworks/nestjs' },
    ],
  },
  {
    title: 'UI Frameworks',
    items: [
      { title: 'UI Frameworks', href: '/docs/ui-frameworks' },
      { title: 'Tailwind CSS', href: '/docs/ui-frameworks/tailwind' },
      { title: 'Material UI', href: '/docs/ui-frameworks/material-ui' },
      { title: 'ShadCN/UI', href: '/docs/ui-frameworks/shadcn' },
      { title: 'Radix UI', href: '/docs/ui-frameworks/radix' },
      { title: 'Ant Design', href: '/docs/ui-frameworks/antd' },
      { title: 'Chakra UI', href: '/docs/ui-frameworks/chakra' },
      { title: 'Styled Components', href: '/docs/ui-frameworks/styled-components' },
      { title: 'CSS & SCSS', href: '/docs/ui-frameworks/css-scss' },
      { title: 'Framer Motion', href: '/docs/ui-frameworks/framer-motion' },
    ],
  },
  {
    title: 'MCP',
    items: [
      { title: 'MCP Overview (Beta)', href: '/docs/mcp' },
      { title: 'MCP Reference', href: '/docs/mcp/reference' },
      { title: 'Usage Examples', href: '/docs/mcp/usage' },
      { title: 'Best Practices', href: '/docs/mcp/best-practices' },
      { title: 'Profiles Guide', href: '/docs/mcp/profiles' },
      { title: 'Style Metadata', href: '/docs/mcp/style-metadata' },
    ],
  },
  {
    title: 'Guides',
    items: [
      { title: 'Guides', href: '/docs/guides' },
      { title: 'Monorepo Support', href: '/docs/guides/monorepo' },
      { title: 'Usage Guides', href: '/docs/guides/usage' },
      { title: 'LLM Context Format', href: '/docs/guides/llm-context' },
      { title: 'Best Practices', href: '/docs/guides/best-practices' },
    ],
  },
  {
    title: 'Reference',
    items: [
      { title: 'Reference', href: '/docs/reference' },
      { title: 'Hashes', href: '/docs/reference/hashes' },
      { title: 'Schema', href: '/docs/reference/schema' },
      { title: 'UIF Contracts', href: '/docs/reference/uif-contracts' },
      { title: 'Stampignore', href: '/docs/reference/stampignore' },
      { title: 'Known Limitations', href: '/docs/reference/limitations' },
    ],
  },
  {
    title: 'Meta',
    items: [
      { title: 'CLI Changelog', href: '/docs/cli/changelog' },
      { title: 'MCP Changelog', href: '/docs/mcp/changelog' },
      { title: 'Migration to v0.3.2', href: '/docs/cli/migration-0-3-2' },
    ],
  },
]
