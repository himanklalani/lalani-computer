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
      {
        source: '/solutions/repairs',
        destination: '/repair',
        permanent: true,
      },
      {
        source: '/buyback/bulk-laptops',
        destination: '/buyback/corporate-it-fleets',
        permanent: true,
      },
      {
        source: '/buyback/enterprise-servers',
        destination: '/buyback/enterprise-servers-storage',
        permanent: true,
      },
      {
        source: '/buyback/networking-switches',
        destination: '/buyback/networking-switches-infrastructure',
        permanent: true,
      },
      {
        source: '/repair/laptop-battery',
        destination: '/repair/laptop-desktop-repairs',
        permanent: true,
      },
      {
        source: '/repair/motherboard-chip-level',
        destination: '/repair/motherboard-component-repair',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
