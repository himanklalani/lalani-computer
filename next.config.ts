import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // explicitly enable Gzip compression
  allowedDevOrigins: ["192.168.29.161"],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
