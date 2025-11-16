import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: '/nexio-Dashboard/',
  basePath: '/nexio-Dashboard',
};

export default nextConfig;
