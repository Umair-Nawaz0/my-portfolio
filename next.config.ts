import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      {
        source: "/projects/:slug*",
        destination: "/#projects",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
