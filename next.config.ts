import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // explicitly enable Gzip compression
  allowedDevOrigins: ["192.168.0.112", "192.168.0.112:3001", "192.168.29.161", "localhost:3001"],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/accessories',
        destination: '/products/peripherals-power',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
