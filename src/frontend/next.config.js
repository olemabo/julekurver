/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Configure remote image patterns for Next.js Image component
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: '*.cdninstagram.com', // Match all Instagram CDN hostnames
        pathname: '/**', // Allow all paths under Instagram's CDN
      },
    ],
  },
  async headers() {
    return [
      {
        // Caching static assets in the /images directory under public
        source: "/images/(.*)", // This matches all files in the /public/images folder
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Handling CORS for API routes
        source: "/api/(.*)", // Matches all API routes
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allowing all origins
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT", // Allowed HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },  
};
  
export default nextConfig;
