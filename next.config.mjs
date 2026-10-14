/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hybrid output so /api/contact and dynamic routing work on a Node runtime
  // (deployed via Azure Static Web Apps / Azure Functions, like the main site).
  output: "standalone",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig