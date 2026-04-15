import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/project",
        destination: "/use-cases",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
