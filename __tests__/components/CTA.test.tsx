import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '../utils/test-utils'
import { setupIntersectionObserverMock } from '../utils/test-utils'
import CTA from '@/components/sections/CTA'

// Mock child components
vi.mock('@/components/ui/ReadTheDocsButton', () => ({
  default: ({ href }: { href: string }) => (
    <a href={href} data-testid="read-docs-button">Read the Docs</a>
  ),
}))

describe('CTA Component', () => {
  beforeEach(() => {
    setupIntersectionObserverMock()
    vi.clearAllMocks()
  })

  it('renders the CTA section', () => {
    render(<CTA />)

    expect(
      screen.getByRole('heading', { name: /ready to supercharge/i })
    ).toBeInTheDocument()
  })

  it('renders the main heading with gradient text', () => {
    render(<CTA />)

    const heading = screen.getByRole('heading', { name: /ready to supercharge/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/your AI workflow/i)
  })

  it('renders the description text', () => {
    render(<CTA />)

    expect(
      screen.getByText(/generate AI-ready context from your codebase/i)
    ).toBeInTheDocument()
  })

  it('renders the install button with correct link', () => {
    render(<CTA />)

    const installButton = screen.getByRole('link', { name: /install now/i })
    expect(installButton).toBeInTheDocument()
    expect(installButton).toHaveAttribute(
      'href',
      'https://www.npmjs.com/package/logicstamp-context'
    )
    expect(installButton).toHaveAttribute('target', '_blank')
    expect(installButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the read docs button', () => {
    render(<CTA />)

    const docsButton = screen.getByTestId('read-docs-button')
    expect(docsButton).toBeInTheDocument()
    expect(docsButton).toHaveAttribute('href', 'docs/')
  })

  it('renders the testimonial quote', () => {
    render(<CTA />)

    expect(
      screen.getByText(/stop pasting code. start sharing structured context/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/— LogicStamp Team/i)).toBeInTheDocument()
  })

  it('has correct section ID for navigation', () => {
    render(<CTA />)

    const section = screen.getByRole('heading', { name: /ready to supercharge/i }).closest('section')
    expect(section).toHaveAttribute('id', 'get-started')
  })

  it('renders buttons in a flex container', () => {
    const { container } = render(<CTA />)

    const buttonsContainer = screen.getByRole('link', { name: /install now/i }).parentElement
    expect(buttonsContainer).toHaveClass('flex')
  })
})

