import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["replicate.delivery", "isteam.wsimg.com", "images.unsplash.com", "ideogram.ai"], // Allow images from this domain
  },
};

export default nextConfig;
