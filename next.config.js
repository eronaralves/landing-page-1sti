/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  compiler: {
    styledComponents: true,
  },
  i18n: {
    locales: ['pt_BR', 'en'],
    defaultLocale: 'pt_BR',
    localeDetection: false,
  },
};

module.exports = nextConfig;
