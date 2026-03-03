import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimisation — allow external domains for clinic images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.clinic4u.ie",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Compress output
  compress: true,

  // Power-header identification
  poweredByHeader: false,

  // Experimental features for performance
  experimental: {
    // optimise package imports to reduce bundle size
    optimizePackageImports: ["lucide-react", "framer-motion", "@headlessui/react"],
  },
};

export default nextConfig;
