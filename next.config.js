/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'static01.nyt.com',
    'lh3.googleusercontent.com'
  ],
  }
}

module.exports = nextConfig
