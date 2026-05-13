const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/skorochtenie-leto-matrius' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: isProd ? '/skorochtenie-leto-matrius/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
