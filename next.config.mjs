/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // These settings are only applied in production builds
  ...(process.env.NODE_ENV === 'production' ? {
    // The basePath should be empty for GitHub Pages root deployment
    basePath: '',
    // The assetPrefix needs a leading slash for Next.js fonts to work
    assetPrefix: '/',
    trailingSlash: true,
  } : {})
}

export default nextConfig
