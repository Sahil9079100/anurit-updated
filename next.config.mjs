/** @type {import('next').NextConfig} */
const nextConfig = {
  // The marketing site is fully static — export it to plain HTML so it can be
  // hosted anywhere (and deployed through the existing `figma make deploy` flow).
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
