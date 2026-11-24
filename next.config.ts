import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75],
  },
  // Keep links to the old Squarespace pages working.
  async redirects() {
    return [
      { source: "/covid-safety", destination: "/health-and-safety", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/gallery", destination: "/#work", permanent: true },
      { source: "/contact", destination: "/#visit", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
