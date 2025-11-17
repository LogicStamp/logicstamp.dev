interface StarGitHubButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  children?: React.ReactNode
}

export default function StarGitHubButton({
  href = 'https://github.com/LogicStamp/logicstamp-context',
  variant = 'primary',
  size = 'lg',
  className = '',
  showArrow = true,
  children = 'Star on GitHub',
}: StarGitHubButtonProps) {
  const sizeClasses = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base lg:text-lg',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
    secondary:
      'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-lg hover:shadow-xl ring-1 ring-gray-300 dark:ring-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600',
  }

  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-lg font-bold transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
      {children}
      {showArrow && (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      )}
    </a>
  )
}

