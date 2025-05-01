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
    // Set basePath to the repository name for GitHub Pages
    basePath: '/portfolio_frontend',
    // Set assetPrefix to match basePath for GitHub Pages
    assetPrefix: '/portfolio_frontend/',
    trailingSlash: true,
  } : {})
}

export default nextConfig
