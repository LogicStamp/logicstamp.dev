import type { Metadata } from 'next'
import { GeistSans, GeistMono } from 'geist/font'
import './globals.css'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const metadata: Metadata = {
  title: 'LogicStamp - AI-Ready Context From Your Codebase',
  description: 'A tiny CLI that compiles your React/TypeScript codebase into machine-readable context bundles for AI and CI. Fast, deterministic, zero-config.',
  keywords: ['logicstamp', 'AI context', 'codebase analysis', 'React', 'TypeScript', 'Claude', 'ChatGPT', 'context bundles', 'token optimization'],
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen`}>
        <ThemeProvider>
          <ScrollToTop />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
