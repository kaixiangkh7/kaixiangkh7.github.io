/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio',
  trailingSlash: true,
}

export default nextConfig
