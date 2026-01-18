import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'React Framework Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context detects and extracts React components, hooks, props, and state from your React/TypeScript codebase.',
}

export default function ReactPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Framework Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                React Framework Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context is designed to work seamlessly with React applications. It automatically detects React components, hooks, and patterns in your codebase.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* React Detection Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    React Detection
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp automatically identifies React code by:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong>File extensions:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code> files</li>
                  <li><strong>JSX syntax:</strong> React component declarations and JSX elements</li>
                  <li><strong>React imports:</strong> Detects imports from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">react-dom</code></li>
                  <li><strong>Component patterns:</strong> Functional components, class components, and hooks</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Components Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Components
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  React components are automatically detected and analyzed:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Example Component',
                      code: `// Example: Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`,
                      copyText: `// Example: Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li>Component name: <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">Button</code></li>
                    <li>Props interface: <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">ButtonProps</code> with <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">label</code> and <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">onClick</code></li>
                    <li>Component kind: <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">react:component</code></li>
                    <li>JSX structure and element types</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* React Hooks Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    React Hooks
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  All React hooks are detected and categorized:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Hooks Example',
                      code: `import { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const memoizedCallback = useCallback(() => {
    // ...
  }, []);
  
  useEffect(() => {
    // ...
  }, []);
}`,
                      copyText: `import { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const memoizedCallback = useCallback(() => {
    // ...
  }, []);
  
  useEffect(() => {
    // ...
  }, []);
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-semibold mb-2">
                    Extracted hooks:
                  </p>
                  <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useState</code> - State management</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useEffect</code> - Side effects</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useCallback</code> - Memoized callbacks</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useMemo</code> - Memoized values</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useRef</code> - Refs</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">useContext</code> - Context consumption</li>
                    <li>Custom hooks</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Component Kinds Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Component Kinds
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp categorizes components into different kinds:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">react:component</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React functional components (with hooks, JSX, or React imports)</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">react:hook</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Custom React hooks (functions starting with "use" and no JSX)</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">ts:module</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">TypeScript modules/utilities (non-React code)</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">node:cli</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Node.js CLI scripts (files in /cli/ directory or using process.argv)</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-300">
                    <strong>Note:</strong> The <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">container</code>, <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">page</code>, and <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">layout</code> kinds mentioned in some documentation are not currently implemented. All React components are classified as <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">react:component</code> regardless of whether they have state, side effects, or are used as pages/layouts.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Props Extraction Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Props Extraction
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TypeScript interfaces and prop types are fully extracted:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Props Example',
                      code: `interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
  variant?: 'default' | 'compact';
}

export function UserCard({ user, onEdit, variant = 'default' }: UserCardProps) {
  // ...
}`,
                      copyText: `interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  onEdit?: (id: string) => void;
  variant?: 'default' | 'compact';
}

export function UserCard({ user, onEdit, variant = 'default' }: UserCardProps) {
  // ...
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-300 font-semibold mb-2">
                    Extracted props:
                  </p>
                  <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-300 ml-4 list-disc">
                    <li><code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">user</code>: Object with <code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">id</code>, <code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">name</code>, <code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">email</code></li>
                    <li><code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">onEdit</code>: Optional function</li>
                    <li><code className="px-1 py-0.5 bg-orange-100 dark:bg-orange-900/40 rounded text-xs font-mono">variant</code>: Optional union type with default value</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* State Management Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    State Management
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Component state is extracted:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'State Example',
                      code: `function Counter() {
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  
  // State extracted: { count: number, isActive: boolean }
}`,
                      copyText: `function Counter() {
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  
  // State extracted: { count: number, isActive: boolean }
}`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Usage
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  No special configuration needed for React projects:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Usage',
                      code: `# Scan React project
stamp context

# With style extraction (Tailwind, CSS Modules, etc.)
stamp context --include-style`,
                      copyText: `# Scan React project
stamp context

# With style extraction (Tailwind, CSS Modules, etc.)
stamp context --include-style`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Best Practices
                  </h2>
                </div>
                <ol className="space-y-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-decimal">
                  <li><strong>Use TypeScript:</strong> LogicStamp works best with TypeScript for accurate type extraction</li>
                  <li><strong>Type your props:</strong> Explicit prop interfaces improve extraction quality</li>
                  <li><strong>Component organization:</strong> LogicStamp respects your folder structure</li>
                  <li><strong>Hook naming:</strong> Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">use</code> prefix for custom hooks (React convention)</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={900}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Limitations
                  </h2>
                </div>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li>Class components are supported but functional components are preferred</li>
                  <li>React Server Components (RSC) are detected but may have limited extraction</li>
                  <li>Dynamic imports are tracked but not fully resolved</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
