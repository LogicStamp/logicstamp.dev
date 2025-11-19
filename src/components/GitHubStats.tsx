'use client'

import { useEffect, useState } from 'react'

interface GitHubStatsData {
  stars: number
  forks: number
  watchers: number
  contributors: number
  openIssues: number
  lastCommit: string
}

// Placeholder data for pre-launch
const PLACEHOLDER_DATA: GitHubStatsData = {
  stars: 0,
  forks: 0,
  watchers: 0,
  contributors: 0,
  openIssues: 0,
  lastCommit: 'Recently',
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStatsData>(PLACEHOLDER_DATA)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // TODO: Replace with your actual GitHub repo
        const repo = 'LogicStamp/logicstamp-context'

        // Fetch repo stats
        const repoResponse = await fetch(`https://api.github.com/repos/${repo}`)

        if (!repoResponse.ok) {
          throw new Error('Failed to fetch GitHub stats')
        }

        const repoData = await repoResponse.json()

        // Fetch contributors count
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repo}/contributors?per_page=1`
        )
        const contributorsLink = contributorsResponse.headers.get('Link')
        const contributorsCount = contributorsLink
          ? parseInt(contributorsLink.match(/page=(\d+)>; rel="last"/)?.[1] || '1')
          : 1

        setStats({
          stars: repoData.stargazers_count || 0,
          forks: repoData.forks_count || 0,
          watchers: repoData.subscribers_count || 0,
          contributors: contributorsCount,
          openIssues: repoData.open_issues_count || 0,
          lastCommit: repoData.updated_at
            ? new Date(repoData.updated_at).toLocaleDateString()
            : 'Recently',
        })
        setLoading(false)
      } catch (err) {
        console.error('Error fetching GitHub stats:', err)
        setError(true)
        setLoading(false)
        // Use placeholder data on error
        setStats(PLACEHOLDER_DATA)
      }
    }

    fetchGitHubStats()
  }, [])

  const statItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      label: 'Stars',
      value: loading ? '...' : stats.stars.toLocaleString(),
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      label: 'Contributors',
      value: loading ? '...' : stats.contributors.toLocaleString(),
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      label: 'Forks',
      value: loading ? '...' : stats.forks.toLocaleString(),
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-900/30',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: 'Last Updated',
      value: loading ? '...' : stats.lastCommit,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/30',
    },
  ]

  return (
    <div className="mt-20 sm:mt-32 lg:mt-48">
        <div className="flex items-center justify-center gap-2 mb-6">
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Open Source & Active Development
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm"
            >
              <div className={`p-2.5 rounded-lg ${item.bgColor} ${item.color} mb-3`}>
                {item.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/LogicStamp/logicstamp-context"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Star on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
  )
}
