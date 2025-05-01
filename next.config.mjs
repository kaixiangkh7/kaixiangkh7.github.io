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
  // Apply these settings for static export
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
}

export default nextConfig
