import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Optimize for bfcache (back/forward cache) in production
  // 
  // This middleware addresses bfcache issues by ensuring pages have cacheable headers.
  // 
  // Note: In development, Next.js uses WebSockets for HMR (Hot Module Reloading),
  // which will always block bfcache. This is expected and cannot be avoided without
  // disabling HMR. Therefore, we only apply bfcache-friendly headers in production
  // where they actually matter and can work properly.
  // 
  // The header 'public, max-age=0, must-revalidate' provides:
  // ✅ bfcache-friendly – page is cacheable (no no-store), so back/forward cache can work
  // ✅ Always fresh – max-age=0 + must-revalidate means browser revalidates on navigation
  // ✅ Lighthouse-friendly – fixes "main resource not cacheable / bfcache" warnings
  const pathname = request.nextUrl.pathname
  
  // Only process HTML pages (routes without file extensions)
  const isHtmlPage = !pathname.includes('.') || pathname.endsWith('/')
  
  // Only apply in production where bfcache actually works
  // (dev mode has WebSocket/HMR which blocks bfcache anyway)
  if (isHtmlPage && process.env.NODE_ENV === 'production') {
    // Proactively set a bfcache-friendly cache-control header
    // This will override any no-store headers that Next.js might set
    // bfcache requires pages to be cacheable (not no-store or no-cache)
    response.headers.set(
      'cache-control',
      'public, max-age=0, must-revalidate'
    )
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}

