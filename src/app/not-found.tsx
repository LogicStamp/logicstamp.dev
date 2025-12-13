import Link from 'next/link'
import Image from 'next/image'
import GetStartedButton from '@/components/ui/GetStartedButton'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Mascot Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <Image
              src="/mascot/logicstamp-fox.svg"
              alt="LogicStamp Fox Mascot"
              width={256}
              height={256}
              className="w-full h-full object-contain animate-bounce-slow"
              priority
            />
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
            This page could not be found.
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Looks like the LogicStamp Fox couldn&apos;t find what you&apos;re looking for. 
          Don&apos;t worry, let&apos;s get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GetStartedButton href="/" variant="primary" size="md">
            Go Home
          </GetStartedButton>
          <GetStartedButton href="/docs" variant="secondary" size="md">
            Browse Docs
          </GetStartedButton>
        </div>

        {/* Additional Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/docs/getting-started"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            CLI Getting Started
          </Link>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Link
            href="/docs/mcp/getting-started"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            MCP Getting Started
          </Link>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Link
            href="/demo"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            Try Demo
          </Link>
          <span className="text-gray-300 dark:text-gray-600">•</span>
          <Link
            href="https://github.com/LogicStamp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </main>
  )
}















