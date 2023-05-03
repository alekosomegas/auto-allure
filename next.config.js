/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rentsyst.com',
        port: '',
        pathname: '/static/cache/vehicle/**',
      },
    ],
  },
}


module.exports = nextConfig
