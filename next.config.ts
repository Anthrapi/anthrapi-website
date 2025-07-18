import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://localhost:3000',
    'https://dev.shivanshkaran.tech',
  ],
};

export default nextConfig;
