import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'TypeScript Framework Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context detects and extracts TypeScript types, interfaces, generics, and type-safe patterns from your codebase.',
}

export default function TypeScriptPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-purple-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Framework Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                TypeScript Framework Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context is built with TypeScript in mind and provides comprehensive support for TypeScript features, type extraction, and type-safe patterns.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* TypeScript Detection Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    TypeScript Detection
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp automatically works with TypeScript projects:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong>File extensions:</strong> <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.ts</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">.tsx</code> files</li>
                  <li><strong>TypeScript configuration:</strong> Reads <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">tsconfig.json</code> for compiler options</li>
                  <li><strong>Type system:</strong> Uses TypeScript's AST for accurate type extraction</li>
                  <li><strong>Type definitions:</strong> Extracts interfaces, types, and type aliases</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Type Definitions Section */}
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
                    Type Definitions
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  All TypeScript type definitions are extracted:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Type Definitions Example',
                      code: `// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: {
    createdAt: Date;
    lastLogin?: Date;
  };
}

export type UserId = string;
export type UserRole = User['role'];`,
                      copyText: `// types/user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  metadata?: {
    createdAt: Date;
    lastLogin?: Date;
  };
}

export type UserId = string;
export type UserRole = User['role'];`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-300 font-semibold mb-2">
                    Extracted:
                  </p>
                  <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                    <li>Interface definitions with all properties</li>
                    <li>Type aliases</li>
                    <li>Union types</li>
                    <li>Optional properties (<code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">?</code>)</li>
                    <li>Nested types and objects</li>
                    <li>Index signatures</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Component Props Types Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Component Props Types
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TypeScript prop types are fully extracted:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Props Example',
                      code: `// components/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false,
  size = 'md'
}: ButtonProps) {
  // ...
}`,
                      copyText: `// components/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false,
  size = 'md'
}: ButtonProps) {
  // ...
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-semibold mb-2">
                    Extracted props:
                  </p>
                  <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">label</code>: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">string</code> (required)</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">onClick</code>: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">() =&gt; void</code> (required)</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">variant</code>: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">'primary' | 'secondary' | 'danger'</code> (optional, default: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">'primary'</code>)</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">disabled</code>: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">boolean</code> (optional, default: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">false</code>)</li>
                    <li><code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">size</code>: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">'sm' | 'md' | 'lg'</code> (optional, default: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">'md'</code>)</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Generic Types Section */}
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
                    Generic Types
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TypeScript generics are captured:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Generics Example',
                      code: `interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}`,
                      copyText: `interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                  <p className="text-sm text-indigo-800 dark:text-indigo-300 font-semibold mb-2">
                    Extracted:
                  </p>
                  <ul className="space-y-1 text-sm text-indigo-800 dark:text-indigo-300 ml-4 list-disc">
                    <li>Generic type parameters</li>
                    <li>Generic constraints</li>
                    <li>Generic usage in props and functions</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Utility Types Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Utility Types
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TypeScript utility types are recognized:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Utility Types Example',
                      code: `type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserEmail = Pick<User, 'email'>;
type UserWithoutId = Omit<User, 'id'>;
type ReadonlyUser = Readonly<User>;`,
                      copyText: `type PartialUser = Partial<User>;
type RequiredUser = Required<User>;
type UserEmail = Pick<User, 'email'>;
type UserWithoutId = Omit<User, 'id'>;
type ReadonlyUser = Readonly<User>;`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-xl border border-orange-200 dark:border-orange-800">
                  <p className="text-sm text-orange-800 dark:text-orange-300 font-semibold mb-2">
                    Extracted:
                  </p>
                  <ul className="space-y-1 text-sm text-orange-800 dark:text-orange-300 ml-4 list-disc">
                    <li>Utility type usage</li>
                    <li>Transformed types</li>
                    <li>Type composition</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Enums Section */}
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
                    Enums
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  TypeScript enums are extracted:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Enums Example',
                      code: `enum Status {
  Pending = 'pending',
  Active = 'active',
  Inactive = 'inactive',
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}`,
                      copyText: `enum Status {
  Pending = 'pending',
  Active = 'active',
  Inactive = 'inactive',
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-xl border border-teal-200 dark:border-teal-800">
                  <p className="text-sm text-teal-800 dark:text-teal-300 font-semibold mb-2">
                    Extracted:
                  </p>
                  <ul className="space-y-1 text-sm text-teal-800 dark:text-teal-300 ml-4 list-disc">
                    <li>Enum names and values</li>
                    <li>String enums</li>
                    <li>Numeric enums</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* TypeScript-Specific Features Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    TypeScript-Specific Features
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Type Inference</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">LogicStamp extracts inferred types where possible:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Type Inference Example',
                          code: `const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

// Inferred type: { id: string; name: string }[]`,
                          copyText: `const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

// Inferred type: { id: string; name: string }[]`
                        }
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Type Guards</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Type guards are detected:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Type Guard Example',
                          code: `function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}`,
                          copyText: `function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}`
                        }
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Discriminated Unions</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Discriminated union types are extracted:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Discriminated Union Example',
                          code: `type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };`,
                          copyText: `type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };`
                        }
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mapped Types</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Mapped types are recognized:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Mapped Type Example',
                          code: `type Optional<T> = {
  [K in keyof T]?: T[K];
};`,
                          copyText: `type Optional<T> = {
  [K in keyof T]?: T[K];
};`
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Type Extraction Quality Section */}
          <AnimatedSection direction="up" delay={800}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Type Extraction Quality
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp uses TypeScript's compiler API (<code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">ts-morph</code>) for accurate type extraction:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc">
                  <li><strong>Accurate types:</strong> Uses TypeScript's type checker when possible</li>
                  <li><strong>Type resolution:</strong> Resolves type aliases and imports</li>
                  <li><strong>Generic inference:</strong> Understands generic type parameters</li>
                  <li><strong>Union types:</strong> Fully extracts union and intersection types</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={900}>
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
                  TypeScript projects work out of the box:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Usage',
                      code: `# Scan TypeScript project
stamp context

# With type information included
stamp context --include-code full`,
                      copyText: `# Scan TypeScript project
stamp context

# With type information included
stamp context --include-code full`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* TypeScript Configuration Section */}
          <AnimatedSection direction="up" delay={1000}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    TypeScript Configuration
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp respects your <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">tsconfig.json</code>:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'tsconfig.json Example',
                      code: `{
  "compilerOptions": {
    "jsx": "react-jsx",
    "target": "ES2020",
    "module": "ESNext",
    "strict": true
  }
}`,
                      copyText: `{
  "compilerOptions": {
    "jsx": "react-jsx",
    "target": "ES2020",
    "module": "ESNext",
    "strict": true
  }
}`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-950/20 rounded-xl border border-violet-200 dark:border-violet-800">
                  <p className="text-sm text-violet-800 dark:text-violet-300 font-semibold mb-2">
                    Respected settings:
                  </p>
                  <ul className="space-y-1 text-sm text-violet-800 dark:text-violet-300 ml-4 list-disc">
                    <li>JSX mode</li>
                    <li>Target and module settings</li>
                    <li>Path mappings (<code className="px-1 py-0.5 bg-violet-100 dark:bg-violet-900/40 rounded text-xs font-mono">paths</code> in <code className="px-1 py-0.5 bg-violet-100 dark:bg-violet-900/40 rounded text-xs font-mono">tsconfig.json</code>)</li>
                    <li>Base URL</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={1100}>
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
                  <li><strong>Use explicit types:</strong> Explicit prop types improve extraction quality</li>
                  <li><strong>Type your exports:</strong> Export types and interfaces for better context</li>
                  <li><strong>Use TypeScript strict mode:</strong> Enables better type checking and extraction</li>
                  <li><strong>Organize types:</strong> Keep types in dedicated files or colocated with components</li>
                  <li><strong>Avoid <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">any</code>:</strong> Use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">unknown</code> or proper types for better extraction</li>
                </ol>
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={1200}>
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
                  <li>Complex conditional types may not be fully resolved</li>
                  <li>Type-level computations are not executed</li>
                  <li>Some advanced TypeScript features may have limited extraction</li>
                  <li>Circular type references may not be fully resolved</li>
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
