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
  // Only apply GitHub Pages settings in production builds
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/kaixiangkh7.github.io',
    assetPrefix: '/kaixiangkh7.github.io/',
    trailingSlash: true,
  } : {
    // For local development
    basePath: '',
    assetPrefix: '',
    trailingSlash: true,
  })
}

export default nextConfig
