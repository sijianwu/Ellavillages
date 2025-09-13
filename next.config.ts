import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n.ts');
 
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Optimize caching for better navigation performance
  experimental: {
    staleTimes: {
      dynamic: 30, // 30 seconds for dynamic pages
      static: 180, // 3 minutes for static pages
    },
  },
  // Enable SWC minification for better performance
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
 
export default withNextIntl(nextConfig);
