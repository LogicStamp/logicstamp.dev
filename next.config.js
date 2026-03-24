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
        destination: '/docs/reference/complete',
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
    ]
  },
}

module.exports = nextConfig
