import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.svg": {
        as: "*.js",
        loaders: ["@svgr/webpack"],
      },
    },
  },
};

export default nextConfig;
