/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.0.15', // Adding the specific IP mentioned in the warning
  ],
}

module.exports = nextConfig
