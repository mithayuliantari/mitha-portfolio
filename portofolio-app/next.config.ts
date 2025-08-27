import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, 
  images: {
    domains: ["localhost", "127.0.0.1", "blog-admin-panel.up.railway.app"], // tambahkan domain yang diizinkan
  },
};

export default nextConfig;
