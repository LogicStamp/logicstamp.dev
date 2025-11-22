import { Metadata } from 'next'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import DocsLayout from '@/components/DocsLayout'
import TabbedCodeBlock from '@/components/TabbedCodeBlock'

export const metadata: Metadata = {
  title: 'Schema Reference | LogicStamp Context Documentation',
  description: 'Complete schema reference for all LogicStamp data structures including UIFContract, LogicStampBundle, and LogicStampIndex.',
}

export default function SchemaPage() {
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
                Schema Reference
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
                Schema Reference
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mb-6 sm:mb-8">
                Complete schema reference for all LogicStamp data structures. All schemas are versioned and validated to ensure compatibility.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Schema Versions Section */}
          <AnimatedSection direction="up" delay={100}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Schema Versions
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  LogicStamp uses semantic versioning for schemas:
                </p>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Schema</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current Version</th>
                        <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded text-xs sm:text-sm font-mono">UIFContract</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">0.3</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Component contract structure</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-100 rounded text-xs sm:text-sm font-mono">LogicStampBundle</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">0.1</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">LLM context bundle format</td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs sm:text-sm font-mono">LogicStampIndex</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs sm:text-sm font-mono">0.1</code>
                        </td>
                        <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Main index for multi-file context</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* UIFContract Schema Section */}
          <AnimatedSection direction="up" delay={200}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                UIFContract Schema
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Component contract structure embedded in bundles.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Schema Version: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 rounded-md font-mono text-sm">0.3</code></h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'TypeScript Interface',
                      code: `interface UIFContract {
  type: "UIFContract";
  schemaVersion: "0.3";
  kind: "react:component" | "react:hook" | "typescript:module";
  description?: string;
  version: {
    variables: string[];
    hooks: string[];
    components: string[];
    functions: string[];
  };
  logicSignature: {
    props: Record<string, PropSignature>;
    events: Record<string, EventSignature>;
    state: Record<string, StateSignature>;
  };
  semanticHash: string; // Format: "uif:..." (24 hex chars)
  fileHash: string;     // Format: "uif:..." (24 hex chars)
}

interface PropSignature {
  type: string;
  signature?: string;  // For function props
  optional?: boolean;
}

interface EventSignature {
  type: string;
  signature?: string;  // Function signature
}

interface StateSignature {
  type: string;
}`,
                      copyText: `interface UIFContract {
  type: "UIFContract";
  schemaVersion: "0.3";
  kind: "react:component" | "react:hook" | "typescript:module";
  description?: string;
  version: {
    variables: string[];
    hooks: string[];
    components: string[];
    functions: string[];
  };
  logicSignature: {
    props: Record<string, PropSignature>;
    events: Record<string, EventSignature>;
    state: Record<string, StateSignature>;
  };
  semanticHash: string;
  fileHash: string;
}`
                    },
                    {
                      label: 'JSON Example',
                      code: `{
  "type": "UIFContract",
  "schemaVersion": "0.3",
  "kind": "react:component",
  "description": "Button component for user interactions",
  "version": {
    "variables": ["count"],
    "hooks": ["useState"],
    "components": ["Icon"],
    "functions": ["handleClick"]
  },
  "logicSignature": {
    "props": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      },
      "label": {
        "type": "string",
        "optional": false
      }
    },
    "events": {},
    "state": {
      "isLoading": {
        "type": "boolean"
      }
    }
  },
  "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
  "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
}`,
                      copyText: `{
  "type": "UIFContract",
  "schemaVersion": "0.3",
  "kind": "react:component",
  "description": "Button component for user interactions",
  "version": {
    "variables": ["count"],
    "hooks": ["useState"],
    "components": ["Icon"],
    "functions": ["handleClick"]
  },
  "logicSignature": {
    "props": {
      "onClick": {
        "type": "function",
        "signature": "() => void"
      },
      "label": {
        "type": "string",
        "optional": false
      }
    },
    "events": {},
    "state": {
      "isLoading": {
        "type": "boolean"
      }
    }
  },
  "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
  "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
}`
                    }
                  ]}
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Field</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                      <th className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">type</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">"UIFContract"</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Contract type identifier</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">schemaVersion</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">"0.3"</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Schema version for compatibility</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">kind</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">string</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Component type (react:component, react:hook, etc.)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">description</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">string</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded text-xs">❌</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Human-readable description</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">version</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">object</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Structural composition</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">logicSignature</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">object</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Public API contract</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">semanticHash</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">string</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Logic-based hash (uif:...)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap"><code className="text-xs font-mono">fileHash</code></td>
                      <td className="px-2 sm:px-6 py-4"><code className="text-xs font-mono">string</code></td>
                      <td className="px-2 sm:px-6 py-4"><span className="px-2 py-1 bg-green-100 dark:bg-green-900/40 text-green-900 dark:text-green-100 rounded text-xs">✅</span></td>
                      <td className="px-2 sm:px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Content-based hash (uif:...)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>

          {/* LogicStampBundle Schema Section */}
          <AnimatedSection direction="up" delay={300}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                LogicStampBundle Schema
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                LLM context bundle containing a dependency graph and contracts.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Schema Version: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-md font-mono text-sm">0.1</code></h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'TypeScript Interface',
                      code: `interface LogicStampBundle {
  $schema?: string;  // Optional JSON Schema reference
  position?: string; // Human-readable position (e.g., "1/5")
  type: "LogicStampBundle";
  schemaVersion: "0.1";
  entryId: string;   // Path to root component
  depth: number;    // Dependency traversal depth
  createdAt: string; // ISO 8601 timestamp
  bundleHash: string; // Format: "uifb:..." (24 hex chars)
  graph: {
    nodes: BundleNode[];
    edges: BundleEdge[];
  };
  meta: {
    missing: MissingDependency[];
    source: string;  // Tool version (e.g., "logicstamp-context@0.1.0")
  };
}

interface BundleNode {
  entryId: string;
  contract: UIFContract;
  codeHeader?: string; // @uif header block (if --include-code header)
}

interface BundleEdge {
  [0]: string; // Source entryId
  [1]: string; // Target entryId
}

interface MissingDependency {
  name: string;
  reason: "external package" | "file not found" | "outside scan path" | "max depth exceeded" | "circular dependency";
  referencedBy: string; // Component that imports it
}`,
                      copyText: `interface LogicStampBundle {
  type: "LogicStampBundle";
  schemaVersion: "0.1";
  entryId: string;
  depth: number;
  createdAt: string;
  bundleHash: string;
  graph: {
    nodes: BundleNode[];
    edges: BundleEdge[];
  };
  meta: {
    missing: MissingDependency[];
    source: string;
  };
}`
                    },
                    {
                      label: 'JSON Example',
                      code: `{
  "$schema": "https://logicstamp.dev/schemas/context/v0.1.json",
  "position": "1/5",
  "type": "LogicStampBundle",
  "schemaVersion": "0.1",
  "entryId": "src/components/Button.tsx",
  "depth": 1,
  "createdAt": "2025-01-15T10:30:00.000Z",
  "bundleHash": "uifb:abc123e4f99aa01deef02bb1",
  "graph": {
    "nodes": [
      {
        "entryId": "src/components/Button.tsx",
        "contract": {
          "type": "UIFContract",
          "schemaVersion": "0.3",
          "kind": "react:component",
          "description": "Button component",
          "version": {
            "variables": [],
            "hooks": ["useState"],
            "components": [],
            "functions": ["Button"]
          },
          "logicSignature": {
            "props": {
              "onClick": {
                "type": "function",
                "signature": "() => void"
              }
            },
            "events": {},
            "state": {}
          },
          "semanticHash": "uif:1a27d0944bbaaf561ee05a01",
          "fileHash": "uif:1f0fa0e2c8958d7fc1696036"
        },
        "codeHeader": "/** @uif Contract ... */"
      }
    ],
    "edges": []
  },
  "meta": {
    "missing": [
      {
        "name": "@mui/material",
        "reason": "external package",
        "referencedBy": "src/components/Button.tsx"
      }
    ],
    "source": "logicstamp-context@0.1.0"
  }
}`,
                      copyText: `{
  "type": "LogicStampBundle",
  "schemaVersion": "0.1",
  "entryId": "src/components/Button.tsx",
  "depth": 1,
  "createdAt": "2025-01-15T10:30:00.000Z",
  "bundleHash": "uifb:abc123e4f99aa01deef02bb1",
  "graph": {
    "nodes": [...],
    "edges": []
  },
  "meta": {
    "missing": [...],
    "source": "logicstamp-context@0.1.0"
  }
}`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* LogicStampIndex Schema Section */}
          <AnimatedSection direction="up" delay={400}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                LogicStampIndex Schema
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Main index file for multi-file context organization.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">Schema Version: <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-md font-mono text-sm">0.1</code></h3>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'TypeScript Interface',
                      code: `interface LogicStampIndex {
  type: "LogicStampIndex";
  schemaVersion: "0.1";
  projectRoot: string;              // Relative path (usually ".")
  projectRootResolved: string;      // Absolute path
  createdAt: string;                // ISO 8601 timestamp
  summary: {
    totalComponents: number;
    totalBundles: number;
    totalFolders: number;
    totalTokenEstimate: number;
  };
  folders: FolderEntry[];
  meta: {
    source: string;  // Tool version
  };
}

interface FolderEntry {
  path: string;                    // Relative path from project root
  contextFile: string;             // Path to this folder's context.json
  bundles: number;                 // Number of bundles in this folder
  components: string[];           // Component file names
  isRoot: boolean;                // Whether this is an entry point
  rootLabel?: string;             // Label for root folders
  tokenEstimate: number;          // Estimated token count
}`,
                      copyText: `interface LogicStampIndex {
  type: "LogicStampIndex";
  schemaVersion: "0.1";
  projectRoot: string;
  projectRootResolved: string;
  createdAt: string;
  summary: {
    totalComponents: number;
    totalBundles: number;
    totalFolders: number;
    totalTokenEstimate: number;
  };
  folders: FolderEntry[];
  meta: {
    source: string;
  };
}`
                    },
                    {
                      label: 'JSON Example',
                      code: `{
  "type": "LogicStampIndex",
  "schemaVersion": "0.1",
  "projectRoot": ".",
  "projectRootResolved": "/absolute/path/to/project",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "summary": {
    "totalComponents": 42,
    "totalBundles": 15,
    "totalFolders": 5,
    "totalTokenEstimate": 13895
  },
  "folders": [
    {
      "path": "src/components",
      "contextFile": "src/components/context.json",
      "bundles": 3,
      "components": ["Button.tsx", "Card.tsx"],
      "isRoot": false,
      "tokenEstimate": 5234
    },
    {
      "path": ".",
      "contextFile": "context.json",
      "bundles": 2,
      "components": ["App.tsx"],
      "isRoot": true,
      "rootLabel": "Project Root",
      "tokenEstimate": 2134
    }
  ],
  "meta": {
    "source": "logicstamp-context@0.1.0"
  }
}`,
                      copyText: `{
  "type": "LogicStampIndex",
  "schemaVersion": "0.1",
  "projectRoot": ".",
  "projectRootResolved": "/absolute/path/to/project",
  "createdAt": "2025-01-15T10:30:00.000Z",
  "summary": {
    "totalComponents": 42,
    "totalBundles": 15,
    "totalFolders": 5,
    "totalTokenEstimate": 13895
  },
  "folders": [...],
  "meta": {
    "source": "logicstamp-context@0.1.0"
  }
}`
                    }
                  ]}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Hash Formats Section */}
          <AnimatedSection direction="up" delay={500}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Hash Formats
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  All hashes in LogicStamp follow consistent formats:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/10 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <h3 className="font-semibold text-indigo-900 dark:text-indigo-200 mb-2 text-base sm:text-lg">
                      Semantic Hash (<code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">semanticHash</code>)
                    </h3>
                    <ul className="space-y-1 text-sm text-indigo-800 dark:text-indigo-300 ml-4 list-disc">
                      <li><strong>Format:</strong> <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">uif:</code> + 24 hex characters</li>
                      <li><strong>Example:</strong> <code className="px-1 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 rounded text-xs font-mono">uif:1a27d0944bbaaf561ee05a01</code></li>
                      <li><strong>Based on:</strong> Component logic and contract structure</li>
                      <li><strong>Changes when:</strong> Props, events, state, or structural footprint changes</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10 rounded-xl border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 text-base sm:text-lg">
                      File Hash (<code className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">fileHash</code>)
                    </h3>
                    <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-4 list-disc">
                      <li><strong>Format:</strong> <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">uif:</code> + 24 hex characters</li>
                      <li><strong>Example:</strong> <code className="px-1 py-0.5 bg-purple-100 dark:bg-purple-900/40 rounded text-xs font-mono">uif:1f0fa0e2c8958d7fc1696036</code></li>
                      <li><strong>Based on:</strong> Raw file content (excluding @uif headers)</li>
                      <li><strong>Changes when:</strong> Any file content modification</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-base sm:text-lg">
                      Bundle Hash (<code className="px-1.5 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">bundleHash</code>)
                    </h3>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-300 ml-4 list-disc">
                      <li><strong>Format:</strong> <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">uifb:</code> + 24 hex characters</li>
                      <li><strong>Example:</strong> <code className="px-1 py-0.5 bg-green-100 dark:bg-green-900/40 rounded text-xs font-mono">uifb:abc123e4f99aa01deef02bb1</code></li>
                      <li><strong>Based on:</strong> Bundle structure (nodes, depth, schema version)</li>
                      <li><strong>Changes when:</strong> Any component's semantic hash changes, or bundle structure changes</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  See <a href="/docs/logicstamp-context/hashes" className="text-purple-600 dark:text-purple-400 hover:underline">HASHES.md</a> for detailed information about hash computation.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Validation Section */}
          <AnimatedSection direction="up" delay={600}>
            <div className="relative mb-8 sm:mb-12 lg:mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-10" />
              <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white m-0">
                    Validation
                  </h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  All schemas can be validated using <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-green-600 dark:text-green-400 rounded-md font-mono text-xs sm:text-sm">stamp context validate</code>:
                </p>
                <TabbedCodeBlock
                  tabs={[
                    {
                      label: 'Validation Commands',
                      code: `# Validate all context files (multi-file mode)
stamp context validate

# Validate a specific file
stamp context validate src/components/context.json`,
                      copyText: `# Validate all context files (multi-file mode)
stamp context validate

# Validate a specific file
stamp context validate src/components/context.json`
                    }
                  ]}
                />
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                  The validator checks:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 ml-4 list-disc mt-2">
                  <li>Required fields are present</li>
                  <li>Field types match schema</li>
                  <li>Schema versions are correct</li>
                  <li>Hash formats are valid</li>
                  <li>Structure matches expected shape</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Schema Evolution Section */}
          <AnimatedSection direction="up" delay={700}>
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Schema Evolution
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Schemas are versioned to support evolution:
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/10 rounded-xl border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2 text-sm sm:text-base">Major version changes</h3>
                  <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Breaking changes requiring migration</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/10 rounded-xl border border-amber-200 dark:border-amber-800">
                  <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2 text-sm sm:text-base">Minor version changes</h3>
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">New optional fields, backward compatible</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 rounded-xl border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-900 dark:text-green-200 mb-2 text-sm sm:text-base">Patch version changes</h3>
                  <p className="text-xs sm:text-sm text-green-800 dark:text-green-300">Bug fixes, fully backward compatible</p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  When schema versions change: Old versions remain supported for reading, new versions are generated for writing, and validation warns on unexpected versions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </DocsLayout>
      <Footer />
    </>
  )
}

