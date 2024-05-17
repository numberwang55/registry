import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = [
  "react",
  "typescript",
  "esbuild",
  "vite"
]

export async function getFeaturedPackages(): Promise<PackageDetails[]> {
  const res = FEATURED_PACKAGES.map(async (packageName) => {
    const result = await fetch(`https://registry.npmjs.org/${packageName}`)
    return result.json()
  }) 
  const data = await Promise.all(res) as PackageDetails[]
  return data 
}