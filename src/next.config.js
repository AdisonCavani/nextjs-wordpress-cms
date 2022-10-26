const shouldAnalyzeBundles = process.env.ANALYZE === 'true'

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  experimental: {
    legacyBrowsers: false,
  },

  images: {
    formats: ['image/avif', 'image/webp']
  }
}

if (shouldAnalyzeBundles) {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    openAnalyzer: true,
    enabled: true
  })
  nextConfig = withBundleAnalyzer(nextConfig)
}

module.exports = nextConfig
