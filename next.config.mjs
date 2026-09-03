/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
  async redirects() {
    // The crypto processor and mobile wallet cases were removed from the
    // portfolio; send their indexed URLs to the portfolio instead of 404.
    return ["crypto-processor", "mobile-wallet"].flatMap((slug) =>
      ["en", "uk", "ru"].map((locale) => ({
        source: `/${locale}/projects/${slug}`,
        destination: `/${locale}/projects`,
        permanent: true,
      }))
    );
  },
};

export default nextConfig;
