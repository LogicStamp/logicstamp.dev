interface ReadTheDocsButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

export default function ReadTheDocsButton({
  href = '/docs/',
  variant = 'secondary',
  size = 'lg',
  className = '',
  children = 'Read the Docs',
}: ReadTheDocsButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
    secondary:
      'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </a>
  )
}

