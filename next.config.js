//sachin version
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
})



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
