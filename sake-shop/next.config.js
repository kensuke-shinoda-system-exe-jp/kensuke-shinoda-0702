/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sake-shop' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sake-shop/' : '',
}

module.exports = nextConfig