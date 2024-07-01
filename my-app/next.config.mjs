// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   experimental: {
//     fallbackNodePolyfills: false,
// },
// };

// export default nextConfig;
/** // next.config.js
*/
// next.config.js

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: {
    fallbackNodePolyfills: false,
  },
  // Other Next.js configurations can go here
};

export default bundleAnalyzer(nextConfig);





