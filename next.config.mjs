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
    const locales = ["en", "uk", "ru"];
    const removed = ["crypto-processor", "mobile-wallet"].flatMap((slug) =>
      locales.map((locale) => ({
        source: `/${locale}/projects/${slug}`,
        destination: `/${locale}/projects`,
        permanent: true,
      }))
    );
    // The dental store is ORTHOSTORE, not OrthoDent Pro — keep the old slug working.
    const renamed = locales.map((locale) => ({
      source: `/${locale}/projects/orthodent-pro`,
      destination: `/${locale}/projects/orthostore`,
      permanent: true,
    }));
    return [...removed, ...renamed];
  },
};

export default nextConfig;
