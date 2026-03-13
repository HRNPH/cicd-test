import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/cicd-test",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
