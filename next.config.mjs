/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/chefs-kitchen-nextjs-free" : "",
  assetPrefix: isProd ? "/chefs-kitchen-nextjs-free/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
