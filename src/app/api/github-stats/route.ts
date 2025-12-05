import { NextResponse } from 'next/server'

// In-memory cache to prevent multiple simultaneous requests
let cache: { data: unknown; timestamp: number } | null = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
let isFetching = false

export async function GET() {
  try {
    const repo = 'LogicStamp/logicstamp-context'
    const githubToken = process.env.GITHUB_TOKEN

    const now = Date.now()
    const cacheAge = cache ? now - cache.timestamp : Infinity

    // Return cached data if still valid
    if (cache && cacheAge < CACHE_DURATION) {
      console.log(`[GitHub Stats] Returning cached data (age: ${Math.round(cacheAge / 1000)}s)`)
      return NextResponse.json(cache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      })
    }

    // If cache is expired but we're already fetching, return stale cache
    if (isFetching && cache) {
      console.log(`[GitHub Stats] Fetch in progress, returning stale cache (age: ${Math.round(cacheAge / 1000)}s)`)
      return NextResponse.json(cache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      })
    }

    // Cache expired or doesn't exist - fetch fresh data
    console.log(`[GitHub Stats] Cache expired or missing, fetching fresh data...`)
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
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      })

      if (!repoResponse.ok) {
        console.error(`[GitHub Stats] GitHub API error: ${repoResponse.status} ${repoResponse.statusText}`)
        
        // If rate limited but we have cached data, return it
        if ((repoResponse.status === 403 || repoResponse.status === 429) && cache) {
          isFetching = false
          console.log(`[GitHub Stats] Rate limited, returning stale cache`)
          return NextResponse.json(cache.data, {
            headers: {
              'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
          })
        }

        // Otherwise return error
        isFetching = false
        return NextResponse.json(
          { error: 'Rate limit exceeded' },
          { 
            status: 429,
            headers: {
              'Cache-Control': 'no-store',
            },
          }
        )
      }

      const repoData = await repoResponse.json()
      console.log(`[GitHub Stats] Fetched repo data: ${repoData.stargazers_count} stars`)

      // Fetch contributors count
      let contributorsCount = 1
      try {
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repo}/contributors?per_page=1`,
          { 
            headers,
            next: { revalidate: 300 },
          }
        )
        if (contributorsResponse.ok) {
          const link = contributorsResponse.headers.get('Link')
          contributorsCount = link
            ? parseInt(link.match(/page=(\d+)>; rel="last"/)?.[1] || '1')
            : 1
        }
      } catch (err) {
        console.warn('[GitHub Stats] Failed to fetch contributors:', err)
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

      console.log(`[GitHub Stats] Cache updated with fresh data: ${statsData.stars} stars`)
      isFetching = false
      
      return NextResponse.json(statsData, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      })
    } catch (err) {
      isFetching = false
      console.error('[GitHub Stats] Fetch error:', err)
      
      // If we have cached data, return it even on error
      if (cache) {
        console.log(`[GitHub Stats] Error occurred, returning stale cache`)
        return NextResponse.json(cache.data, {
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
          },
        })
      }

      throw err
    }
  } catch (err) {
    console.error('[GitHub Stats] API error:', err)
    
    // Return cached data if available, even if stale
    if (cache) {
      console.log(`[GitHub Stats] Outer error handler, returning stale cache`)
      return NextResponse.json(cache.data, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      })
    }

    return NextResponse.json(
      { error: 'Failed to fetch GitHub stats' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}

