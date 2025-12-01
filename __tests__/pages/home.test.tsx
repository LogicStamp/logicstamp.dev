import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../utils/test-utils'
import Home from '@/app/page'

// Mock the components to focus on page structure
vi.mock('@/components/sections/Hero', () => ({
  default: () => <div data-testid="hero">Hero Section</div>,
}))

vi.mock('@/components/sections/Features', () => ({
  default: () => <div data-testid="features">Features Section</div>,
}))

vi.mock('@/components/sections/WhyLogicStamp', () => ({
  default: () => <div data-testid="why-logicstamp">Why LogicStamp Section</div>,
}))

vi.mock('@/components/sections/Integrations', () => ({
  default: () => <div data-testid="integrations">Integrations Section</div>,
}))

vi.mock('@/components/sections/FAQ', () => ({
  default: () => <div data-testid="faq">FAQ Section</div>,
}))

vi.mock('@/components/sections/GetStarted', () => ({
  default: () => <div data-testid="get-started">Get Started Section</div>,
}))

vi.mock('@/components/layout/Footer', () => ({
  default: () => <div data-testid="footer">Footer Section</div>,
}))

describe('Home Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the main landing page structure', () => {
    render(<Home />)

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen')
  })

  it('renders all main sections', () => {
    render(<Home />)

    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('why-logicstamp')).toBeInTheDocument()
    expect(screen.getByTestId('features')).toBeInTheDocument()
    expect(screen.getByTestId('integrations')).toBeInTheDocument()
    expect(screen.getByTestId('faq')).toBeInTheDocument()
      expect(screen.getByTestId('get-started')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders sections in correct order', () => {
    const { container } = render(<Home />)
    const main = container.querySelector('main')
    const children = Array.from(main?.children || [])

    const sectionIds = children.map(child => child.getAttribute('data-testid'))

    expect(sectionIds).toEqual([
      'hero',
      'why-logicstamp',
      'features',
      'integrations',
      'faq',
      'get-started',
      'footer',
    ])
  })
})

