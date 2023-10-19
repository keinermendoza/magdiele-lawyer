/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'abogadamagdiele.pythonanywhere.com',
            port: '',
            pathname: '/media/blog-images/**',
          },
        ],
      },
}

module.exports = nextConfig

