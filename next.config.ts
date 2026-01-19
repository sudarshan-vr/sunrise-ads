import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["images.unsplash.com", "cdn.gamma.app"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.gamma.app',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
