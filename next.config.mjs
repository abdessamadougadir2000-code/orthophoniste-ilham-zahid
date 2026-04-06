/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/article/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' brkysa43.api.sanity.io; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: cdn.sanity.io;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;