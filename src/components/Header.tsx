'use client'
import { useState, useEffect, Fragment } from 'react'
import { usePathname } from 'next/navigation'
import LogicStampLogo from './LogicStampLogo'
import LogicStampWordmark from './LogicStampWordmark'
import ThemeToggle from './ThemeToggle'
import GetStartedButton from './GetStartedButton'

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
    { name: 'How it Works', href: isHomePage ? '#how-it-works' : '/#how-it-works' },
    { name: 'Integrations', href: isHomePage ? '#integrations' : '/#integrations' },
    { name: 'FAQ', href: isHomePage ? '#faq' : '/#faq' },
    { name: 'Docs', href: '/docs/' },
    { name: 'GitHub', href: 'https://github.com/logicstamp/logicstamp-context', external: true },
  ]

  return (
    <>
    {/* Rounded header container */}
    <header className="fixed top-2 left-4 right-4 z-50 mx-auto max-w-[1320px]">
      <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl border border-gray-200/20 dark:border-white/10 shadow-lg shadow-black/15 backdrop-blur-md h-12 min-h-12">
        <nav className="flex items-center justify-between pl-2 pr-6 lg:pl-4 lg:pr-8 h-full min-h-full" aria-label="Global">
          <div className="flex lg:flex-1">
            <a
              href={isHomePage ? "#" : "/"}
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  smoothScrollToTop();
                }
              }}
              className="flex items-center gap-0 pr-4 cursor-pointer group"
            >
              <div className="logicstamp-logo-container">
                <LogicStampLogo className="logicstamp-logo" size={32} />
              </div>
              <LogicStampWordmark height={21} className="hidden sm:block" />
              <LogicStampWordmark height={17} className="block sm:hidden" />
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
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigation.map((item, index) => (
              <Fragment key={item.name}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-medium leading-[1.4] text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </a>
                {index < navigation.length - 1 && (
                  <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
                )}
              </Fragment>
            ))}
          </div>
          
          {/* Desktop theme toggle + CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-4">
            <ThemeToggle compact />
            <div className="ml-2">
              <GetStartedButton size="sm" />
            </div>
          </div>
        </nav>
      </div>
    </header>

    {/* Mobile menu dropdown */}
    <div className={`lg:hidden fixed top-[3.5rem] left-4 right-4 z-50 mx-auto max-w-[1320px] pt-1 transition-all duration-300 ease-in-out mobile-menu-dropdown ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
      <div className="bg-gray-50/90 dark:bg-gray-900/95 rounded-xl shadow-lg border border-gray-200/20 dark:border-white/10 backdrop-blur-md">
        <div className="px-6 py-4">
          <div className="space-y-0">
            {navigation.map((item, index) => (
              <Fragment key={item.name}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block rounded-lg px-3 py-2 text-sm font-medium leading-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {index < navigation.length - 1 && (
                  <div className="h-px bg-gray-200 dark:bg-gray-700 mx-3" />
                )}
              </Fragment>
            ))}
          </div>

          {/* Theme toggle + Get Started button */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div className="flex justify-center">
              <ThemeToggle compact />
            </div>
            <div onClick={() => setMobileMenuOpen(false)}>
              <GetStartedButton size="sm" className="w-full justify-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}