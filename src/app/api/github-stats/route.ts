import { NextResponse } from 'next/server'

// In-memory cache to prevent multiple simultaneous requests
let cache: { data: unknown; timestamp: number } | null = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
let isFetching = false

export async function GET() {
  try {
    const repo = 'LogicStamp/logicstamp-context'
    const githubToken = process.env.GITHUB_TOKEN

    // Return cached data if still valid
    if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
      return NextResponse.json(cache.data)
    }

    // If already fetching, return cached data (even if stale) to prevent duplicate requests
    if (isFetching && cache) {
      return NextResponse.json(cache.data)
    }

    isFetching = true

    try {
      const headers: Record<string, string> = {
        'Accept': 'application/vnd.github.v3+json',
      }

      if (githubToken) {
        headers['Authorization'] = `token ${githubToken}`
      }

      // Fetch repo stats
      const repoResponse = await fetch(`https://api.github.com/repos/${repo}`, {
        headers,
      })

      if (!repoResponse.ok) {
        // If rate limited but we have cached data, return it
        if ((repoResponse.status === 403 || repoResponse.status === 429) && cache) {
          isFetching = false
          return NextResponse.json(cache.data)
        }

        // Otherwise return error
        isFetching = false
        return NextResponse.json(
          { error: 'Rate limit exceeded' },
          { status: 429 }
        )
      }

      const repoData = await repoResponse.json()

      // Fetch contributors count
      let contributorsCount = 1
      try {
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repo}/contributors?per_page=1`,
          { headers }
        )
        if (contributorsResponse.ok) {
          const link = contributorsResponse.headers.get('Link')
          contributorsCount = link
            ? parseInt(link.match(/page=(\d+)>; rel="last"/)?.[1] || '1')
            : 1
        }
      } catch {
        // Ignore contributors error
      }

      const statsData = {
        stars: repoData.stargazers_count || 0,
        forks: repoData.forks_count || 0,
        watchers: repoData.subscribers_count || 0,
        contributors: contributorsCount,
        openIssues: repoData.open_issues_count || 0,
        lastCommit: repoData.updated_at
          ? new Date(repoData.updated_at).toLocaleDateString()
          : 'Recently',
      }

      // Update cache
      cache = {
        data: statsData,
        timestamp: Date.now(),
      }

      isFetching = false
      return NextResponse.json(statsData)
    } catch (err) {
      isFetching = false
      
      // If we have cached data, return it even on error
      if (cache) {
        return NextResponse.json(cache.data)
      }

      throw err
    }
  } catch (err) {
    console.error('GitHub stats API error:', err)
    
    // Return cached data if available, even if stale
    if (cache) {
      return NextResponse.json(cache.data)
    }

    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { status: 500 }
    )
  }
}

