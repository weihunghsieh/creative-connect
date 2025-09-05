/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 13.4+
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
