import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
