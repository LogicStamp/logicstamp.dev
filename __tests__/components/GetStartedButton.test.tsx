import { describe, it, expect } from 'vitest'
import { render, screen } from '../utils/test-utils'
import GetStartedButton from '@/components/ui/GetStartedButton'

describe('GetStartedButton Component', () => {
  it('renders with default props', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/docs/getting-started')
  })

  it('renders with custom href', () => {
    render(<GetStartedButton href="/custom-path" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveAttribute('href', '/custom-path')
  })

  it('renders with custom children', () => {
    render(<GetStartedButton>Custom Text</GetStartedButton>)

    expect(screen.getByRole('link', { name: /custom text/i })).toBeInTheDocument()
  })

  it('applies primary variant styles by default', () => {
    const { container } = render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('bg-gradient-to-r', 'from-blue-600', 'via-purple-600', 'to-pink-600')
    expect(button).toHaveClass('text-white')
  })

  it('applies secondary variant styles', () => {
    render(<GetStartedButton variant="secondary" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('bg-white', 'dark:bg-gray-800')
    expect(button).toHaveClass('ring-1', 'ring-gray-300')
  })

  it('applies frosted variant (Read the Docs–style panel)', () => {
    render(<GetStartedButton variant="frosted" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('bg-white/80', 'dark:bg-gray-900/80')
    expect(button).toHaveClass('backdrop-blur-xl', 'backdrop-saturate-150')
    expect(button).toHaveClass('font-semibold')
  })

  it('applies inverted variant (StarGitHubButton primary – inverted frosted)', () => {
    render(<GetStartedButton variant="inverted" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('bg-gray-950/95', 'dark:bg-white/95')
    expect(button).toHaveClass('text-white', 'dark:text-gray-950')
    expect(button).toHaveClass('font-semibold')
  })

  it('applies small size classes', () => {
    render(<GetStartedButton size="sm" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('px-5', 'py-2', 'text-sm')
  })

  it('applies medium size classes', () => {
    render(<GetStartedButton size="md" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('px-6', 'py-3', 'text-base')
  })

  it('applies large size classes by default', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('px-6', 'py-3', 'sm:px-8', 'sm:py-4')
    expect(button).toHaveClass('text-sm', 'sm:text-base', 'lg:text-lg')
  })

  it('applies custom className', () => {
    render(<GetStartedButton className="custom-class" />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('custom-class')
  })

  it('has correct focus styles', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('focus-visible:outline', 'focus-visible:outline-2')
    expect(button).toHaveClass('focus-visible:outline-offset-2', 'focus-visible:outline-purple-600')
  })

  it('has transition classes', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('transition-all', 'duration-200')
  })

  it('has whitespace-nowrap class', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('whitespace-nowrap')
  })

  it('has group class for hover effects', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('group')
  })

  it('has inline-flex and items-center classes', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('inline-flex', 'items-center')
  })

  it('has gap-2 class for spacing', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('gap-2')
  })

  it('has rounded-lg class', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('rounded-lg')
  })

  it('has font-bold class', () => {
    render(<GetStartedButton />)

    const button = screen.getByRole('link', { name: /get started/i })
    expect(button).toHaveClass('font-bold')
  })

  it('combines all props correctly', () => {
    render(
      <GetStartedButton 
        href="/test" 
        variant="secondary" 
        size="sm" 
        className="extra-class"
      >
        Custom Button
      </GetStartedButton>
    )

    const button = screen.getByRole('link', { name: /custom button/i })
    expect(button).toHaveAttribute('href', '/test')
    expect(button).toHaveClass('bg-white', 'dark:bg-gray-800') // secondary variant
    expect(button).toHaveClass('px-5', 'py-2', 'text-sm') // sm size
    expect(button).toHaveClass('extra-class')
  })
})
