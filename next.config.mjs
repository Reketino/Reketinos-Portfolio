/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'badges.steamprofile.com',
        port: '',
        pathname: '/profile/**', 
      },
    ],
  },
};

export default nextConfig;
