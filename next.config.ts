import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname: "images.pexels.com"},
      {hostname: "randomuser.me"},
    ],
  }
};

export default nextConfig;
