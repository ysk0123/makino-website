/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  // env: {
  //   SERVICE_DOMAIN: 'artist-makino',
  //   API_KEY: 'yUT893LGiNKfjNsTUlikmGjSvHhLEL09Mlny',
  // },
};

export default nextConfig;
