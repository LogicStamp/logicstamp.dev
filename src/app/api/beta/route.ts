import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Beta API env error: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set')
      return NextResponse.json(
        { success: false, error: 'Beta service not configured' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: { persistSession: false },
    })

    const { email } = await request.json().catch(() => ({} as { email?: unknown }))

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid email' },
        { status: 400 }
      )
    }

    const trimmed = email.trim().toLowerCase()

    // Try inserting with source column first
    let result = await supabase
      .from('newsletter_subscribers')
      .insert({ email: trimmed, source: 'beta' })

    // If source column doesn't exist, fall back to without source
    // Check for both PostgreSQL error code (42703) and Supabase schema cache error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorCode = (result.error as any)?.code
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errorMessage = (result.error as any)?.message || ''
    
    if (result.error && (
      errorCode === '42703' || 
      errorMessage.includes("Could not find the 'source' column") ||
      errorMessage.includes("column") && errorMessage.includes("does not exist")
    )) {
      console.warn('Source column not found, inserting without source column')
      result = await supabase
        .from('newsletter_subscribers')
        .insert({ email: trimmed })
    }

    if (result.error) {
      // 23505 = unique_violation in Postgres
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((result.error as any).code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Already signed up' },
          { status: 200 }
        )
      }

      console.error('Beta insert error:', result.error)
      // Include error details in development
      const errorMessage = process.env.NODE_ENV === 'development'
        ? `Failed to sign up: ${result.error.message || 'Unknown error'}`
        : 'Failed to sign up'
      
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Signed up successfully' },
      { status: 201 }
    )
  } catch (err) {
    console.error('Beta API error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

