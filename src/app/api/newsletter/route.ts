import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Newsletter API env error: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set')
      return NextResponse.json(
        { success: false, error: 'Newsletter service not configured' },
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

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email: trimmed })

    if (error) {
      // 23505 = unique_violation in Postgres
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any).code === '23505') {
        return NextResponse.json(
          { success: true, message: 'Already subscribed' },
          { status: 200 }
        )
      }

      console.error('Newsletter insert error:', error)
      return NextResponse.json(
        { success: false, error: 'Failed to subscribe' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Subscribed' },
      { status: 201 }
    )
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}


