interface GetStartedButtonProps {
  href?: string
  /** `frosted` matches ReadTheDocsButton secondary (frosted panel + ring, no gradient). */
  variant?: 'primary' | 'secondary' | 'frosted'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

export default function GetStartedButton({
  href = '/docs/getting-started',
  variant = 'primary',
  size = 'lg',
  className = '',
  children = 'Get Started',
}: GetStartedButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
    secondary:
      'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 hover:ring-purple-500 dark:hover:ring-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
    frosted:
      'bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 backdrop-blur-xl backdrop-saturate-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
  }

  const fontWeight = variant === 'frosted' ? 'font-semibold' : 'font-bold'

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-lg ${fontWeight} transition-all duration-200 whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </a>
  )
}















