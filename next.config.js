/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "" : "";
const titleSuffix = "– ecBase Documentatie"

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  titleSuffix: titleSuffix,
  assetPrefix,
  basePath: assetPrefix,
  output: "export",
};

module.exports = withNextra(nextConfig);