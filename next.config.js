/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  // swcMinify is deprecated in Next.js 16+ (enabled by default)
  // Enable compression (handled by Next.js automatically in production)
  compress: true,
  // Enable source maps for production builds to help with debugging and Lighthouse audits
  productionBrowserSourceMaps: false, // Disable to reduce bundle size
  // Optimize bundle splitting
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Reduce JavaScript bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  async redirects() {
    return [
      {
        source: '/docs/complete-reference',
        destination: '/docs/reference',
        permanent: true,
      },
      {
        source: '/docs/reference/complete',
        destination: '/docs/reference',
        permanent: true,
      },
      {
        source: '/docs/complete-reference/known-limitations',
        destination: '/docs/reference/limitations',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/monorepo',
        destination: '/docs/guides/monorepo',
        permanent: true,
      },
      {
        source: '/docs/guides/hashes',
        destination: '/docs/reference/hashes',
        permanent: true,
      },
      {
        source: '/docs/guides/uifb',
        destination: '/docs/reference/hashes',
        permanent: true,
      },
      {
        source: '/docs/guides/uif-contracts',
        destination: '/docs/reference/uif-contracts',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/schema',
        destination: '/docs/reference/schema',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/frameworks',
        destination: '/docs/frameworks',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/frameworks/:path*',
        destination: '/docs/frameworks/:path*',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/ui-frameworks',
        destination: '/docs/ui-frameworks',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/ui-frameworks/:path*',
        destination: '/docs/ui-frameworks/:path*',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/cli/getting-started',
        destination: '/docs/cli/getting-started',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/cli',
        destination: '/docs/cli',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context/:path*',
        destination: '/docs/cli/:path*',
        permanent: true,
      },
      {
        source: '/docs/logicstamp-context',
        destination: '/docs/cli',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
