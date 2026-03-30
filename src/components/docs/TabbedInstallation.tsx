'use client'

import { useState } from 'react'
import CopyButton from '../ui/CopyButton'

export default function TabbedInstallation() {
  const [activeTab, setActiveTab] = useState<'cli' | 'mcp'>('cli')

  const cliCommand = 'npm install -g logicstamp-context'
  const mcpCommand = 'npm install -g logicstamp-mcp'

  return (
    <div className="flex flex-col items-start">
      {/* Tabs */}
      <div className="mb-4 flex items-center gap-2 bg-theme-primary-opacity-50 rounded-lg p-1 ring-1 ring-gray-300/50 dark:ring-gray-700/50">
        <button
          onClick={() => setActiveTab('cli')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'cli'
              ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Install the CLI
        </button>
        <button
          onClick={() => setActiveTab('mcp')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === 'mcp'
              ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          Install the MCP
        </button>
      </div>
      
      {/* Install command */}
      <div className="relative group w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative inline-flex items-center gap-3 rounded-xl bg-theme-primary px-6 sm:px-8 py-4 shadow-xl ring-1 ring-gray-300/50 dark:ring-gray-700/50 w-full">
          <span className="text-base font-bold text-purple-600 dark:text-purple-400" aria-label="Command prompt">
            $
          </span>
          <code className="text-base font-mono font-semibold text-gray-900 dark:text-gray-100 flex-1" aria-label="Installation command">
            {activeTab === 'cli' ? cliCommand : mcpCommand}
          </code>
          <CopyButton 
            text={activeTab === 'cli' ? cliCommand : mcpCommand} 
            className="ml-2 flex-shrink-0" 
          />
        </div>
      </div>
    </div>
  )
}
