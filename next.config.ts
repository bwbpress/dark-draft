import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // next/image's default loader needs a running server; static export can't
  // provide one, so images are served as-is instead of being optimized.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
