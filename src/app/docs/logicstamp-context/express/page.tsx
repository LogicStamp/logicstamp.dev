import { Metadata } from 'next'
import Footer from '@/components/layout/Footer'
import AnimatedSection from '@/components/common/AnimatedSection'
import DocsLayout from '@/components/docs/DocsLayout'
import TabbedCodeBlock from '@/components/docs/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Express.js Framework Support | LogicStamp Context Documentation',
  description: 'Learn how LogicStamp Context detects and extracts Express.js routes, API handlers, and API signatures from your backend code.',
}

export default function ExpressPage() {
  return (
    <>
      <DocsLayout>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0}>
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/5 rounded-3xl -m-4 sm:-m-6 lg:-m-8 blur-3xl opacity-70" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 text-green-700 dark:text-green-300 text-sm font-semibold rounded-full mb-4 sm:mb-6 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Backend Framework Support
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Express.js Framework Support
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-4 sm:mb-6">
                LogicStamp Context provides comprehensive support for Express.js applications, automatically detecting routes, API handlers, and extracting API signatures from your backend code.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Express Detection Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Express.js Detection
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  LogicStamp automatically identifies Express.js code by:
                </p>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 ml-4 list-disc mb-4">
                  <li><strong>Express imports:</strong> Detects imports from <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">express</code> and <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">express/*</code> packages</li>
                  <li><strong>Route patterns:</strong> Recognizes <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app.get()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">app.post()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">router.get()</code>, <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs font-mono">router.post()</code>, etc.</li>
                  <li><strong>HTTP methods:</strong> Detects GET, POST, PUT, DELETE, PATCH, and ALL methods</li>
                  <li><strong>Route handlers:</strong> Identifies named functions and anonymous handlers</li>
                </ul>
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-300">
                    <strong>Detection requires both:</strong> (1) Express import (<code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">import express from 'express'</code>) and (2) Route method calls (<code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">app.get()</code>, <code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">router.post()</code>, etc.). This two-factor detection prevents false positives - files that import Express but don't define routes won't be detected as backend files.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Routes Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Routes
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Express routes are automatically detected and analyzed:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Example Routes',
                      code: `// Example: routes/users.ts
import express from 'express';
const router = express.Router();

function getUsers(req: express.Request, res: express.Response) {
  res.json({ users: [] });
}

router.get('/users', getUsers);
router.post('/users', (req, res) => {
  res.json({ created: true });
});`,
                      copyText: `// Example: routes/users.ts
import express from 'express';
const router = express.Router();

function getUsers(req: express.Request, res: express.Response) {
  res.json({ users: [] });
}

router.get('/users', getUsers);
router.post('/users', (req, res) => {
  res.json({ created: true });
});`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-300 font-semibold mb-2">
                    Extracted information:
                  </p>
                  <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300 ml-4 list-disc">
                    <li>Route paths: <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">/users</code>, <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">/users/:id</code></li>
                    <li>HTTP methods: GET, POST, PUT, DELETE, PATCH, ALL</li>
                    <li>Handler function names: <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">getUsers</code> or <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">anonymous</code> for inline handlers</li>
                    <li>Route parameters: <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">['id']</code> from paths like <code className="px-1 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-xs font-mono">/users/:id</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* API Signatures Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    API Signatures
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  For named handler functions, LogicStamp extracts API signatures:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'API Signature Example',
                      code: `import express, { Request, Response } from 'express';

function createUser(
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse>
): void {
  const user = req.body;
  // ... create user logic
  res.status(201).json({ id: '123', ...user });
}

app.post('/users', createUser);`,
                      copyText: `import express, { Request, Response } from 'express';

function createUser(
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse>
): void {
  const user = req.body;
  // ... create user logic
  res.status(201).json({ id: '123', ...user });
}

app.post('/users', createUser);`
                    }
                  ]}
                />
                <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-300 font-semibold mb-2">
                    Extracted API signature:
                  </p>
                  <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                    <li>Parameters: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">{'{ req: Request<{}, UserResponse, CreateUserRequest>, res: Response<UserResponse> }'}</code></li>
                    <li>Return type: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">void</code></li>
                    <li>Request type: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">CreateUserRequest</code> (for POST/PUT/PATCH)</li>
                    <li>Response type: <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">UserResponse</code></li>
                  </ul>
                  <p className="text-sm text-purple-800 dark:text-purple-300 mt-2">
                    <strong>Note:</strong> API signatures are only extracted for named handler functions. Anonymous handlers don't have API signatures extracted.
                  </p>
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
                  LogicStamp categorizes Express files into different kinds:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">node:api</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Express route files with route definitions</p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-900 dark:text-indigo-100 rounded text-sm font-mono mb-2 block">ts:module</code>
                    <p className="text-sm text-gray-600 dark:text-gray-400">TypeScript modules/utilities (non-route files)</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Usage Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-baseline gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Usage
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                  Generate context for an Express.js project:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Usage',
                      code: `# Analyze Express.js project
stamp context

# The tool will automatically:
# 1. Detect Express imports and route patterns
# 2. Extract route definitions (paths, methods, handlers)
# 3. Extract API signatures from named handlers
# 4. Identify route parameters
# 5. Generate structured contracts for each route file`,
                      copyText: `# Analyze Express.js project
stamp context

# The tool will automatically:
# 1. Detect Express imports and route patterns
# 2. Extract route definitions (paths, methods, handlers)
# 3. Extract API signatures from named handlers
# 4. Identify route parameters
# 5. Generate structured contracts for each route file`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Best Practices Section */}
          <AnimatedSection direction="up" delay={600}>
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
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Use Named Handler Functions</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">Named functions enable API signature extraction:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Good vs Less Ideal',
                          code: `// ✅ Good: Named function with types
function getUserById(
  req: Request<{ id: string }>,
  res: Response<User>
): void {
  // ...
}
app.get('/users/:id', getUserById);

// ❌ Less ideal: Anonymous handler (no API signature extraction)
app.get('/users/:id', (req, res) => {
  // ...
});`,
                          copyText: `// ✅ Good: Named function with types
function getUserById(
  req: Request<{ id: string }>,
  res: Response<User>
): void {
  // ...
}
app.get('/users/:id', getUserById);

// ❌ Less ideal: Anonymous handler (no API signature extraction)
app.get('/users/:id', (req, res) => {
  // ...
});`
                        }
                      ]}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Type Your Request/Response</h3>
                    <p className="text-base text-gray-600 dark:text-gray-400 mb-3">TypeScript types improve extraction quality:</p>
                    <TabbedCodeBlock
                      tabs={[
                        {
                          label: 'Typed Example',
                          code: `// ✅ Good: Typed request and response
interface CreateUserRequest {
  name: string;
  email: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
}

function createUser(
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse>
): void {
  // ...
}`,
                          copyText: `// ✅ Good: Typed request and response
interface CreateUserRequest {
  name: string;
  email: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
}

function createUser(
  req: Request<{}, UserResponse, CreateUserRequest>,
  res: Response<UserResponse>
): void {
  // ...
}`
                        }
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Limitations Section */}
          <AnimatedSection direction="up" delay={700}>
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
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-base font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Middleware Extraction</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                      Express middleware is not currently extracted. LogicStamp focuses on extracting API routes and their signatures. The extractor only looks for HTTP method calls (<code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">get</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">post</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">put</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">delete</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">patch</code>, <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">all</code>) and doesn't process <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">app.use()</code> calls for middleware.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-base font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Route Composition</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                      Nested route composition may not be fully tracked. LogicStamp analyzes each file independently. When you mount a router with <code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">app.use('/api', router)</code>, the extractor sees this as a middleware call (not a route), so it's not extracted. The routes are extracted from the router file itself, but the full path (<code className="px-1.5 py-0.5 bg-yellow-100 dark:bg-yellow-900/40 rounded text-xs font-mono">/api/users</code>) isn't computed.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-base font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Dynamic Route Paths</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                      Only string literal paths are extracted. LogicStamp uses static analysis and can only extract values that are known at compile time. Dynamic paths require runtime evaluation, which static analysis cannot perform.
                    </p>
                  </div>
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-base font-semibold text-yellow-900 dark:text-yellow-200 mb-2">Anonymous Handlers</h3>
                    <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                      Anonymous handlers don't have API signatures extracted. The API signature extractor requires a function name to locate and analyze the function definition. Anonymous handlers are inline and don't have separate definitions that can be analyzed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}
