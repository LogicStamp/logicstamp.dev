/**
 * Config for UI framework doc pages.
 * Content is fetched from https://github.com/LogicStamp/logicstamp-context/tree/main/docs/ui-frameworks
 */

export const UI_FRAMEWORK_DOCS = {
  antd: { mdFile: 'antd.md', title: 'Ant Design', description: 'LogicStamp Context support for Ant Design components and theming.' },
  chakra: { mdFile: 'chakra.md', title: 'Chakra UI', description: 'LogicStamp Context support for Chakra UI components and theme tokens.' },
  'css-scss': { mdFile: 'css-scss.md', title: 'CSS & SCSS', description: 'LogicStamp Context support for CSS Modules and SCSS.' },
  'framer-motion': { mdFile: 'framer-motion.md', title: 'Framer Motion', description: 'LogicStamp Context support for Framer Motion animations.' },
  'material-ui': { mdFile: 'material-ui.md', title: 'Material UI', description: 'LogicStamp Context support for Material UI (MUI) components and sx prop.' },
  radix: { mdFile: 'radix.md', title: 'Radix UI', description: 'LogicStamp Context support for Radix UI primitives and components.' },
  shadcn: { mdFile: 'shadcn.md', title: 'ShadCN/UI', description: 'LogicStamp Context support for ShadCN/UI components.' },
  'styled-components': { mdFile: 'styled-components.md', title: 'Styled Components', description: 'LogicStamp Context support for styled-components and Emotion.' },
  tailwind: { mdFile: 'tailwind.md', title: 'Tailwind CSS', description: 'LogicStamp Context support for Tailwind CSS utility classes.' },
} as const

export type UIFrameworkSlug = keyof typeof UI_FRAMEWORK_DOCS
