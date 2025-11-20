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
  // Optimize production builds - swcMinify is default in Next.js 13+, but explicit is fine
  swcMinify: true,
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
}

module.exports = nextConfig
