import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ironfs.com",
      },
      {
        protocol: "https",
        hostname: "ironfs.com",
      },
    ],
  },
};

export default nextConfig;
