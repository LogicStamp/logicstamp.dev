import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'LogicStamp - AI-Ready Context From Your Codebase',
  description: 'A tiny CLI that compiles your React/TypeScript codebase into machine-readable context bundles for AI and CI. Fast, deterministic, zero-config.',
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
  const cookieStore = await cookies()
  const themeCookie = cookieStore.get('theme')?.value as 'light' | 'dark' | 'system' | undefined
  const htmlThemeClass = themeCookie === 'dark' ? 'dark' : ''

  return (
    <html
      lang="en"
      className={`${htmlThemeClass} bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg?v=4" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Load Google Fonts asynchronously to prevent render blocking
                  var link = document.createElement('link');
                  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
                  link.rel = 'stylesheet';
                  link.media = 'print';
                  link.onload = function() { this.media = 'all'; this.onload = null; };
                  link.onerror = function() { this.onerror = null; };
                  document.head.appendChild(link);
                  
                  // Theme initialization
                  var cookieMatch = document.cookie.match(/(?:^|; )theme=([^;]+)/);
                  var cookieTheme = cookieMatch ? decodeURIComponent(cookieMatch[1]) : null;
                  var storageTheme = localStorage.getItem('theme');
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
                } catch (e) {}
              })();
            `,
          }}
        />
        <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" /></noscript>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen`}>
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
