import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add 130px so the logo is served at exactly the rendered width (not rounded up to 256)
    imageSizes: [130, 256, 384],
    formats: ['image/webp'],
  },
};

export default nextConfig;
