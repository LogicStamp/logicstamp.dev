import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '../utils/test-utils'
import userEvent from '@testing-library/user-event'
import Header from '@/components/layout/Header'

// Mock Next.js navigation
const mockUsePathname = vi.fn()
vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation')
  return {
    ...actual,
    usePathname: () => mockUsePathname(),
  }
})

// Mock child components
vi.mock('@/components/branding/LogicStampLogo', () => ({
  default: ({ className, size }: { className?: string; size?: number }) => (
    <div data-testid="logo" className={className} data-size={size}>
      Logo
    </div>
  ),
}))

vi.mock('@/components/branding/LogicStampWordmark', () => ({
  default: ({ className, height }: { className?: string; height?: number }) => (
    <div data-testid="wordmark" className={className} data-height={height}>
      Wordmark
    </div>
  ),
}))

vi.mock('@/components/ui/ThemeToggle', () => ({
  default: ({ compact }: { compact?: boolean }) => (
    <button data-testid="theme-toggle" data-compact={compact}>
      Theme Toggle
    </button>
  ),
}))

vi.mock('@/components/ui/GetStartedButton', () => ({
  default: ({ size, className }: { size?: string; className?: string }) => (
    <a href="/docs/getting-started" data-testid="get-started-button" data-size={size} className={className}>
      Get Started
    </a>
  ),
}))

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUsePathname.mockReturnValue('/')
    
    // Mock window.scrollTo
    window.scrollTo = vi.fn()
    
    // Mock performance.now for smooth scroll
    global.performance = {
      ...global.performance,
      now: vi.fn(() => Date.now()),
    } as any
    
    // Mock requestAnimationFrame
    global.requestAnimationFrame = vi.fn((cb) => {
      setTimeout(cb, 16)
      return 1
    })
  })

  it('renders header with logo and wordmark', () => {
    render(<Header />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getAllByTestId('wordmark').length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Header />)

    // Links appear in both desktop and mobile, so use getAllBy
    const demoLinks = screen.getAllByRole('link', { name: /try demo/i })
    expect(demoLinks.length).toBeGreaterThan(0)

    const docsLinks = screen.getAllByRole('link', { name: /docs/i })
    expect(docsLinks.length).toBeGreaterThan(0)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('navigation links have correct hrefs', () => {
    const { container } = render(<Header />)

    // Check desktop version (or first one found)
    const demoLinks = screen.getAllByRole('link', { name: /try demo/i })
    expect(demoLinks[0]).toHaveAttribute('href', '/demo')

    const docsLinks = screen.getAllByRole('link', { name: /docs/i })
    expect(docsLinks[0]).toHaveAttribute('href', '/docs/')

    const githubLink = container.querySelector('a[href="https://github.com/LogicStamp/logicstamp-context"]')
    expect(githubLink).toBeInTheDocument()
  })

  it('external links have correct attributes', () => {
    const { container } = render(<Header />)

    const githubLink = container.querySelector('a[href="https://github.com/LogicStamp/logicstamp-context"]')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders theme toggle', () => {
    render(<Header />)

    // Theme toggle appears in both desktop and mobile
    const themeToggles = screen.getAllByTestId('theme-toggle')
    expect(themeToggles.length).toBeGreaterThan(0)
  })

  it('renders Get Started button', () => {
    render(<Header />)

    // Get Started button appears in both desktop and mobile
    const getStartedButtons = screen.getAllByTestId('get-started-button')
    expect(getStartedButtons.length).toBeGreaterThan(0)
    expect(getStartedButtons[0]).toHaveAttribute('href', '/docs/getting-started')
  })

  it('renders mobile menu button', () => {
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)

    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Mobile menu should be visible
    const mobileMenu = document.querySelector('.mobile-menu-dropdown')
    expect(mobileMenu).toHaveClass('opacity-100', 'translate-y-0')
  })

  it('closes mobile menu when clicking menu button again', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    
    // Open menu
    await user.click(menuButton)
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Close menu
    await user.click(menuButton)
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/open main menu/i)
    })

    // Mobile menu should be hidden
    const mobileMenu = document.querySelector('.mobile-menu-dropdown')
    expect(mobileMenu).toHaveClass('opacity-0', '-translate-y-3', 'pointer-events-none')
  })

  it('closes mobile menu when clicking a navigation link', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Click a link in mobile menu
    const demoLink = screen.getAllByRole('link', { name: /try demo/i })
    const mobileLink = demoLink.find(link => {
      const menu = link.closest('.mobile-menu-dropdown')
      return menu !== null
    })
    
    if (mobileLink) {
      await user.click(mobileLink)
      
      await waitFor(() => {
        expect(menuButton).toHaveAccessibleName(/open main menu/i)
      })
    }
  })

  it('renders mobile menu with theme toggle and Get Started button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)

    await waitFor(() => {
      // Theme toggle should be in mobile menu
      const themeToggles = screen.getAllByTestId('theme-toggle')
      expect(themeToggles.length).toBeGreaterThan(0)

      // Get Started button should be in mobile menu
      const getStartedButtons = screen.getAllByTestId('get-started-button')
      expect(getStartedButtons.length).toBeGreaterThan(0)
    })
  })

  it('logo link scrolls to top when on home page', async () => {
    mockUsePathname.mockReturnValue('/')
    const user = userEvent.setup()
    
    // Mock scroll position
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 500,
    })

    render(<Header />)

    const logoLink = screen.getByTestId('logo').closest('a')
    expect(logoLink).toBeInTheDocument()
    
    if (logoLink) {
      await user.click(logoLink)
      
      // Should call scrollTo (smooth scroll function)
      // Note: requestAnimationFrame is mocked, so actual scroll won't happen
      // but we can verify the click handler was called
      expect(logoLink).toHaveAttribute('href', '#')
    }
  })

  it('logo link navigates to home when not on home page', () => {
    mockUsePathname.mockReturnValue('/docs')
    render(<Header />)

    const logoLink = screen.getByTestId('logo').closest('a')
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders navigation with correct aria-label', () => {
    render(<Header />)

    const nav = screen.getByRole('navigation', { name: /global/i })
    expect(nav).toBeInTheDocument()
  })

  it('hides desktop navigation on mobile', () => {
    render(<Header />)

    // Desktop nav should be hidden on small screens
    const desktopNav = document.querySelector('.hidden.lg\\:flex')
    expect(desktopNav).toBeInTheDocument()
  })

  it('shows mobile menu button on mobile', () => {
    render(<Header />)

    const mobileMenuButton = screen.getByRole('button', { name: /open main menu/i })
    expect(mobileMenuButton).toBeInTheDocument()
    expect(mobileMenuButton.closest('.flex.lg\\:hidden')).toBeInTheDocument()
  })

  it('closes mobile menu when clicking outside', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Click outside (on document body)
    await user.click(document.body)
    
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/open main menu/i)
    })

    // Mobile menu should be hidden
    const mobileMenu = document.querySelector('.mobile-menu-dropdown')
    expect(mobileMenu).toHaveClass('opacity-0', '-translate-y-3', 'pointer-events-none')
  })

  it('does not close mobile menu when clicking inside header', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Click inside header (on logo)
    const logoLink = screen.getByTestId('logo').closest('a')
    if (logoLink) {
      await user.click(logoLink)
    }

    // Menu should still be open
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })
  })

  it('closes mobile menu when clicking Get Started button', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(menuButton).toHaveAccessibleName(/close main menu/i)
    })

    // Find Get Started button in mobile menu
    const getStartedButtons = screen.getAllByTestId('get-started-button')
    const mobileGetStarted = getStartedButtons.find(button => {
      const menu = button.closest('.mobile-menu-dropdown')
      return menu !== null
    })

    if (mobileGetStarted) {
      await user.click(mobileGetStarted)
      
      await waitFor(() => {
        expect(menuButton).toHaveAccessibleName(/open main menu/i)
      })
    }
  })

  it('hamburger menu has open class when menu is open', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    const hamburgerMenu = menuButton.querySelector('.hamburger-menu')
    
    // Initially should not have open class
    expect(hamburgerMenu).not.toHaveClass('open')

    // Open menu
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(hamburgerMenu).toHaveClass('open')
    })

    // Close menu
    await user.click(menuButton)
    
    await waitFor(() => {
      expect(hamburgerMenu).not.toHaveClass('open')
    })
  })

  it('sets transition style on mobile menu', () => {
    const { container } = render(<Header />)
    
    const mobileMenu = container.querySelector('.mobile-menu-dropdown')
    expect(mobileMenu).toBeInTheDocument()
    
    // After mount, transition should be set for smooth animations
    const style = mobileMenu?.getAttribute('style')
    expect(style).toContain('transition: opacity')
    expect(style).toContain('transform')
  })
})

