import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { GeistSans, GeistMono } from 'geist/font'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import ScrollToTop from '@/components/layout/ScrollToTop'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LogicStamp - AI-Ready Context From Your Codebase',
  description: 'A tiny CLI that compiles your React/TypeScript codebase into machine-readable context bundles for AI and CI. Fast, deterministic, one-time setup.',
  keywords: ['logicstamp', 'AI context', 'codebase analysis', 'React', 'TypeScript', 'Claude', 'ChatGPT', 'context bundles', 'token optimization'],
  icons: {
    icon: [
      { url: '/icon.svg?v=4', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg?v=4',
    apple: '/icon.svg?v=4',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Read theme cookie on server to match client-side rendering
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')?.value as 'light' | 'dark' | 'system' | undefined
  
  // Determine if dark mode should be applied on initial render
  // This matches what the blocking script will do on the client
  const initialDarkClass = themeCookie === 'dark' ? 'dark' : ''
  
  return (
    <html
      lang="en"
      className={`${initialDarkClass} bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Block rendering until theme is applied
                  var cookieMatch = document.cookie.match(/(?:^|; )theme=([^;]+)/);
                  var cookieTheme = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
                  
                  var storageTheme = null;
                  try {
                    storageTheme = localStorage.getItem('theme');
                  } catch (e) {
                    // localStorage may not be available
                  }
                  
                  var theme = cookieTheme || storageTheme || 'system';
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var effectiveDark = theme === 'dark' || (theme === 'system' && prefersDark);

                  if (effectiveDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {
                  // Fallback to light mode on error
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} font-sans bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen`} suppressHydrationWarning>
        <ThemeProvider>
          <ScrollToTop />
          <ScrollToTopButton />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}














