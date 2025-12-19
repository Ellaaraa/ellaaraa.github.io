/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ellaaraa.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ellaaraa.github.io' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;