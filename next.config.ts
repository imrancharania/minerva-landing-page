import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/minerva-landing-page",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
