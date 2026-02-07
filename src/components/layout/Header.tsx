'use client'
import { useState, useEffect, Fragment } from 'react'
import { usePathname } from 'next/navigation'
import LogicStampLogo from '../branding/LogicStampLogo'
import LogicStampWordmark from '../branding/LogicStampWordmark'
import ThemeToggle from '../ui/ThemeToggle'
import GetStartedButton from '../ui/GetStartedButton'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Used only to prevent animations on first render for the mobile dropdown
  useEffect(() => {
    setMounted(true)
  }, [])

  const smoothScrollToTop = () => {
    const startPosition = window.pageYOffset
    const startTime = performance.now()
    const duration = 1000 // 1 second

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      window.scrollTo(0, startPosition * (1 - easeOut))
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }
    
    requestAnimationFrame(animateScroll)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const target = event.target as Element
        const header = target.closest('header')
        const mobileMenu = target.closest('.mobile-menu-dropdown')
        if (!header && !mobileMenu) {
          setMobileMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  // Handle hash navigation when navigating from other pages
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      // Wait a bit for the page to render
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [pathname])

  // Check if we're on the home page
  const isHomePage = pathname === '/'

  const navigation = [
    { name: 'Try Demo', href: '/demo' },
    { name: 'Docs', href: '/docs/' },
    { name: 'Roadmap', href: '/roadmap' },
  ]

  return (
    <>
    {/* Premium header container */}
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 py-4 transition-all duration-300">
        <div className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/50 dark:border-white/5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none" />

          <nav className="relative flex items-center justify-between pl-2 pr-4 lg:pl-2 lg:pr-6 h-14 lg:h-16" aria-label="Global">
          <div className="flex lg:flex-1">
            <a
              href={isHomePage ? "#" : "/"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  smoothScrollToTop();
                }
              }}
              aria-label="LogicStamp"
              className="flex items-center gap-0 cursor-pointer group focus:outline-none focus:ring-0 active:bg-transparent logo-link"
            >
              <div className="logicstamp-logo-container">
                <LogicStampLogo className="logicstamp-logo" size={48} />
              </div>
              <LogicStampWordmark height={22} className="hidden sm:block" />
              <LogicStampWordmark height={18} className="block sm:hidden" />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="https://github.com/LogicStamp/logicstamp-context"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-200 active:scale-95"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <ThemeToggle compact />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-200 active:scale-95"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
              <div className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </div>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            {navigation.map((item, index) => (
              <Fragment key={item.name}>
                {index > 0 && (
                  <div className="h-5 w-px bg-gray-300/50 dark:bg-gray-600/50 mx-2" />
                )}
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-200 rounded-lg group"
                >
                  <span className="relative z-10">{item.name}</span>
                </a>
              </Fragment>
            ))}
          </div>
          
          {/* Desktop theme toggle + CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-3">
            <a
              href="https://github.com/LogicStamp/logicstamp-context"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-200 active:scale-95"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="pr-1">
              <ThemeToggle compact />
            </div>
            <div className="h-5 w-px bg-gray-300/50 dark:bg-gray-600/50" />
            <GetStartedButton size="sm" />
          </div>
        </nav>
        </div>
      </div>
    </header>

    {/* Mobile menu dropdown */}
    <div className={`lg:hidden fixed left-0 right-0 z-[110] px-4 lg:px-6 mobile-menu-dropdown top-[4.75rem] ${
      mounted && mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}
    style={{
      transition: mounted ? 'opacity 50ms ease-out, transform 300ms ease-out' : 'none',
      willChange: mounted ? 'transform' : 'auto'
    }}>
      <div className="mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-gray-200/50 dark:border-white/5 backdrop-blur-xl backdrop-saturate-150">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent pointer-events-none" />
        <div className="relative px-6 py-6">
          <div className="space-y-2">
            {navigation.map((item, index) => (
              <Fragment key={item.name}>
                {index > 0 && (
                  <div className="h-px bg-gray-200/50 dark:bg-gray-700/50 my-2" />
                )}
                <a
                  href={item.href}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-gray-900 dark:text-white transition-all duration-200 active:scale-[0.98] group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </a>
              </Fragment>
            ))}
          </div>

          {/* Get Started button */}
          <div className="mt-5 pt-5 border-t border-gray-200/50 dark:border-gray-700/50">
            <div onClick={() => setMobileMenuOpen(false)}>
              <GetStartedButton size="sm" className="w-full justify-center" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}