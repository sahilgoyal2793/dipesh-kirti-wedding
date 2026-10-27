import type { NextConfig } from "next"

// Static export: `npm run build` writes the whole site to out/.
// For GitHub Pages under /dipesh-kirti-wedding, build with NEXT_PUBLIC_BASE_PATH=/dipesh-kirti-wedding.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
}

export default nextConfig
