import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        hostname: "big-steppers.manufacs.com",
      },
    ],
  },
};

export default nextConfig;
