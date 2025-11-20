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
}

module.exports = nextConfig
