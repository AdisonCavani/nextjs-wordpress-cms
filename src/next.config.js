const shouldAnalyzeBundles = process.env.ANALYZE === 'true'
const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,

  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
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
  nextConfig = withBundleAnalyzer(withPreact(nextConfig))
}

module.exports = withPreact(nextConfig)
