import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Static file redirect (public/index.html was removed)
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      // Legacy URL patterns → new sub-pages
      {
        source: "/garage-door-repair",
        destination: "/repair/",
        permanent: true,
      },
      {
        source: "/garage-door-springs",
        destination: "/repair/",
        permanent: true,
      },
      {
        source: "/garage-door-openers",
        destination: "/garage-door-opener/",
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
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
