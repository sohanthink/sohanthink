/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sohanthink.com",
        pathname: "/portfolioimages/*", // Allow all images in the portfolioimages directory
      },
    ],
  },
};

export default nextConfig;
