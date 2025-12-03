import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    // Read the SVG icon from public directory
    const iconPath = join(process.cwd(), 'public', 'icon.svg')
    const iconContent = await readFile(iconPath, 'utf-8')
    
    // Serve it as favicon.ico with appropriate headers
    // Using max-age=31536000 (1 year) with immutable for optimal favicon caching
    // Favicons rarely change, so long-term caching is appropriate
    return new NextResponse(iconContent, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (_error) {
    // Fallback: return a simple SVG if file not found
    const fallbackSvg = '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="6" fill="#0EA5E9"/><path d="M8 16L14 22L24 10" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    return new NextResponse(fallbackSvg, {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    })
  }
}

