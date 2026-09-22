import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add 130px so the logo is served at exactly the rendered width (not rounded up to 256)
    imageSizes: [130, 256, 384],
    // avif first: smaller than webp on supporting browsers; webp is the fallback
    // for the rest. Next picks whichever the requesting browser advertises.
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
