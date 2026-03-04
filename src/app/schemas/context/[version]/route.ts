import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

// In-memory cache for schema files
const schemaCache: Map<string, { data: unknown; timestamp: number }> = new Map()
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours (schemas change infrequently)
const isFetching: Set<string> = new Set()

// Local schema file path
const LOCAL_SCHEMA_PATH = join(process.cwd(), 'docs', 'context', 'logicstamp.context.schema.json')

// GitHub repository and path (fallback)
const GITHUB_REPO = 'LogicStamp/logicstamp-context'
const SCHEMA_PATH = 'schema/logicstamp.context.schema.json'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ version: string }> }
) {
  try {
    const { version } = await params
    const cacheKey = `${version}`

    // Check for force refresh query parameter
    const { searchParams } = new URL(request.url)
    const forceRefresh = searchParams.get('refresh') === 'true'

    const cached = schemaCache.get(cacheKey)
    const now = Date.now()
    const cacheAge = cached ? now - cached.timestamp : Infinity

    // Return cached data if still valid (unless force refresh requested)
    if (cached && cacheAge < CACHE_DURATION && !forceRefresh) {
      return NextResponse.json(cached.data, {
        headers: {
          'Content-Type': 'application/schema+json',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    // If cache is expired but we're already fetching, return stale cache
    if (isFetching.has(cacheKey) && cached) {
      return NextResponse.json(cached.data, {
        headers: {
          'Content-Type': 'application/schema+json',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    // Cache expired or doesn't exist - fetch fresh data
    isFetching.add(cacheKey)

    try {
      let schemaData: unknown

      // Try reading from local file first (faster, more reliable)
      try {
        const fileContent = await readFile(LOCAL_SCHEMA_PATH, 'utf-8')
        schemaData = JSON.parse(fileContent)
        console.log('[Schema API] Loaded schema from local file')
      } catch (localError) {
        // Local file not found or error reading - fallback to GitHub
        console.log('[Schema API] Local file not found, fetching from GitHub...')
        
        const githubToken = process.env.GITHUB_TOKEN
        const headers: Record<string, string> = {
          'Accept': 'application/vnd.github.v3+json',
        }

        if (githubToken) {
          headers['Authorization'] = `token ${githubToken}`
        }

        // Fetch schema from GitHub raw content
        const schemaUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/main/${SCHEMA_PATH}`
        const response = await fetch(schemaUrl, {
          headers,
          next: { revalidate: 86400 }, // Revalidate every 24 hours
        })

        if (!response.ok) {
          // If rate limited but we have cached data, return it
          if ((response.status === 403 || response.status === 429) && cached) {
            isFetching.delete(cacheKey)
            return NextResponse.json(cached.data, {
              headers: {
                'Content-Type': 'application/schema+json',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
                'Access-Control-Allow-Origin': '*',
              },
            })
          }

          isFetching.delete(cacheKey)
          return NextResponse.json(
            { error: 'Failed to fetch schema', status: response.status },
            {
              status: response.status,
              headers: {
                'Cache-Control': 'no-store',
              },
            }
          )
        }

        schemaData = await response.json()
        console.log('[Schema API] Loaded schema from GitHub')
      }

      // Update cache
      schemaCache.set(cacheKey, {
        data: schemaData,
        timestamp: Date.now(),
      })

      isFetching.delete(cacheKey)

      return NextResponse.json(schemaData, {
        headers: {
          'Content-Type': 'application/schema+json',
          'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          'Access-Control-Allow-Origin': '*',
        },
      })
    } catch (err) {
      isFetching.delete(cacheKey)
      console.error('[Schema API] Fetch error:', err)

      // If we have cached data, return it even on error
      if (cached) {
        return NextResponse.json(cached.data, {
          headers: {
            'Content-Type': 'application/schema+json',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
            'Access-Control-Allow-Origin': '*',
          },
        })
      }

      throw err
    }
  } catch (err) {
    console.error('[Schema API] Error:', err)
    return NextResponse.json(
      { error: 'Failed to fetch schema' },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}
