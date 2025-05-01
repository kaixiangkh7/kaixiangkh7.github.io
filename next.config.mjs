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
  // Keep assetPrefix for GitHub Pages subpath
  assetPrefix: '/portfolio_frontend/',
  // Remove basePath, let GitHub Pages handle subpath serving
  basePath: '',
  trailingSlash: true,
}

export default nextConfig
