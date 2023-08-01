/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "img.sndimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
