/** @type {import('next').NextConfig} */
const nextConfig = {
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
          hostname: 'scontent.cdninstagram.com',
          pathname: '/**', // Allow all paths under Instagram's CDN
        },
        {
          protocol: 'https',
          hostname: 'scontent-iad3-1.cdninstagram.com', // Add Instagram-specific CDN
          pathname: '/**', // Allow all paths under this hostname
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
              value: "public, max-age=100, immutable", // Caches for 100 seconds, immutable
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
    webpack(config) {
      // Add rule to handle SVG files as React components
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              // You can add custom options here for SVGR
              // For example, you can use `icon: true` to convert SVGs to icons
              icon: true,
            },
          },
        ],
      });
  
      return config;
    },
    // Enable React strict mode for highlighting potential problems
    reactStrictMode: true,
  
    // Enable SWC minification for faster builds and smaller bundle size
    swcMinify: true,
  };
  
  export default nextConfig;
