/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sohanthink.com",
        pathname: "/**", // Allow all folders and images
      },
    ],
  },
};

export default nextConfig;
