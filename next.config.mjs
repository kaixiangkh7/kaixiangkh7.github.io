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
  // Only apply these settings when building for production
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    trailingSlash: true,
  } : {})
}

export default nextConfig
