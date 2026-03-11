import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mracalf',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
