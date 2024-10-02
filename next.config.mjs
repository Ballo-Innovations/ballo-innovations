/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint warnings during the build
  },
  images: {
    domains: ['img.youtube.com'], // Allows images from img.youtube.com
  },
};

export default nextConfig;
