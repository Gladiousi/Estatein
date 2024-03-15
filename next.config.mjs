/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fabulous-ostrich-820.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
