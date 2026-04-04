import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // إعدادات الصور
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // إعدادات الحماية والستايل (باش تقرا الألوان)
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; image-src 'self' cdn.sanity.io data:; style-src 'self' 'unsafe-inline'; script-src 'self'; frame-src 'self' www.google.com; connect-src 'self' api.sanity.io;",
        },
      ],
    },
  ],
};

export default nextConfig;