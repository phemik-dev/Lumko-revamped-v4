import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
    workerThreads: true
  }
};

export default nextConfig;
