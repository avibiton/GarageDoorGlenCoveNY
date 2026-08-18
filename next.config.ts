import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy URL patterns from the old site
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/garage-door-repair",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/garage-door-springs",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/garage-door-openers",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
