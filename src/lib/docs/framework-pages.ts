/**
 * Config for framework doc pages.
 * Content is fetched from https://github.com/LogicStamp/logicstamp-context/tree/main/docs/frameworks
 */

export const FRAMEWORK_DOCS = {
  express: {
    mdFile: 'express.md',
    title: 'Express.js Support',
    description: 'LogicStamp Context support for Express.js routes, API handlers, and API signatures.',
  },
  nestjs: {
    mdFile: 'nestjs.md',
    title: 'NestJS Support',
    description: 'LogicStamp Context support for NestJS controllers, modules, and decorators.',
  },
  nextjs: {
    mdFile: 'nextjs.md',
    title: 'Next.js Support',
    description: 'LogicStamp Context support for Next.js App Router, pages, and API routes.',
  },
  react: {
    mdFile: 'react.md',
    title: 'React Support',
    description: 'LogicStamp Context support for React components, hooks, props, and state.',
  },
  typescript: {
    mdFile: 'typescript.md',
    title: 'TypeScript Support',
    description: 'LogicStamp Context support for TypeScript types, interfaces, and modules.',
  },
  vue: {
    mdFile: 'vue.md',
    title: 'Vue Support',
    description: 'LogicStamp Context support for Vue components and SFC.',
  },
} as const

export type FrameworkSlug = keyof typeof FRAMEWORK_DOCS
