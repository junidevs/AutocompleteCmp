/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  typescript: {
    tsconfigPath:
      process.env.NODE_ENV === "production"
        ? "./tsconfig.production.json"
        : "./tsconfig.json"
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com"
      },
      {
        protocol: "https",
        hostname: "icatcare.org"
      }
    ]
  },
  transpilePackages: []
}

export default nextConfig
