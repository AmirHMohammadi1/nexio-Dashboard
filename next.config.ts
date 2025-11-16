import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/nexio-Dashboard',
  assetPrefix: '/nexio-Dashboard',
};

export default nextConfig;
