// ESLint 9 flat config for Next.js 16
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'dist/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.ts',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        // React globals (for JSX and React types)
        React: 'readonly',
        JSX: 'readonly',
        // TypeScript/Node.js globals
        NodeJS: 'readonly',
        // IntersectionObserver types
        IntersectionObserverCallback: 'readonly',
        IntersectionObserverInit: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'off', // Allow require() in test setup files
      'react/no-unescaped-entities': 'off',
      'react/jsx-no-comment-textnodes': 'off',
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/no-unknown-property': ['error', { ignore: ['jsx'] }], // Allow jsx prop (used in some components)
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/set-state-in-effect': 'warn', // Allow setState in effects for initialization
      'react-hooks/purity': 'off', // Allow Math.random() and other impure functions where needed
      '@next/next/no-img-element': 'warn', // Warn about using <img> instead of Next.js Image
      'jsx-a11y/alt-text': 'warn', // Warn about missing alt text on images
      'no-undef': 'error', // Keep enabled to catch undefined variables
      'no-unused-vars': 'off', // TypeScript handles this
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-useless-escape': 'warn',
      'no-misleading-character-class': 'warn',
    },
  },
  // Test files configuration
  {
    files: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/setup.ts'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'no-undef': 'off', // Vitest and test utilities provide globals
    },
  },
]
