/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        // The resume page is retired: Resume now downloads the CV. Kept as a
        // redirect so older links and search results don't 404. Temporary
        // (307) rather than permanent, because browsers cache 308 hard.
        source: "/resume",
        destination: "/CV_Ege%20Celikgogus.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
