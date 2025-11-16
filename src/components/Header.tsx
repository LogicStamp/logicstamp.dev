'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import LogicStampLogo from './LogicStampLogo'
import ThemeToggle from './ThemeToggle'

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

  // Check if we're on the home page
  const isHomePage = pathname === '/'

  const navigation = [
    { name: 'How it Works', href: isHomePage ? '#how-it-works' : '/#how-it-works' },
    { name: 'Integrations', href: isHomePage ? '#integrations' : '/#integrations' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Docs', href: '/docs/what-is-logicstamp' },
    { name: 'GitHub', href: 'https://github.com/logicstamp/logicstamp-context', external: true },
  ]

  return (
    <>
    {/* Pill-shaped header container */}
    <header className="fixed top-2 left-4 right-4 z-50 mx-auto max-w-8xl">
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-full border border-white/10 dark:border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.15)] backdrop-blur-md h-16 min-h-16">
        <nav className="flex items-center justify-between px-8 lg:px-10 h-full min-h-full" aria-label="Global">
          <div className="flex lg:flex-1">
            <a
              href={isHomePage ? "#" : "/"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  smoothScrollToTop();
                }
              }}
              className="flex items-center gap-2 pr-4 cursor-pointer group"
            >
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
                <div className="logicstamp-logo-container">
                  <LogicStampLogo className="logicstamp-logo" size={40} />
                </div>
                LogicStamp
              </span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
          <div className="hidden lg:flex lg:items-center lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-sm lg:text-base font-semibold leading-[1.4] text-gray-900 dark:text-white hover:text-shadow-lg hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] dark:hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.4)] transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Desktop theme toggle + CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
            <ThemeToggle compact />
            <a
              href="/docs/getting-started"
              className="ml-3 inline-flex items-center justify-center rounded-full bg-gradient-blue-purple px-5 py-2.5 text-base lg:text-lg font-semibold text-white shadow-sm hover:bg-gradient-blue-purple-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600 transition-all"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>

    {/* Mobile menu dropdown */}
    <div className={`lg:hidden fixed top-[5.5rem] left-4 right-4 z-50 mx-auto max-w-8xl pt-4 transition-all duration-300 ease-in-out mobile-menu-dropdown ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="bg-white dark:bg-gray-900 rounded-t-none rounded-b-2xl shadow-lg border border-gray-200/80 dark:border-gray-700/80 border-t-0">
        <div className="px-6 py-4">
          <div className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block rounded-lg px-3 py-2 text-base lg:text-lg font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Theme toggle + Get Started button */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div className="flex justify-center">
              <ThemeToggle compact />
            </div>
            <a
              href="/docs/getting-started"
              className="block w-full px-3 py-2.5 text-center text-base lg:text-lg font-semibold leading-7 text-white bg-gradient-blue-purple hover:bg-gradient-blue-purple-deep transition-colors duration-200 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}