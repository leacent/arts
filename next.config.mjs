/** @type {import('next').NextConfig} */

const API_URL = process.env.API_URL;

const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
