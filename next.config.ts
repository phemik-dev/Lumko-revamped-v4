import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    webpackBuildWorker: false,
    workerThreads: true
  }
};

export default nextConfig;
