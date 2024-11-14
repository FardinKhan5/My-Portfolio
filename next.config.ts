import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {hostname:"media.licdn.com"},
      {hostname:"geca.ac.in"},
      {hostname:"maca.ac.in"}
    ]
  }
};

export default nextConfig;
