/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'wcgbocrrotdkovdsqoma.supabase.co',
        port: '',
      },
    ],
  },
  // output: "export",
  // distDir: "dist",
};

export default nextConfig;
