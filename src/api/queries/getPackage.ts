import { PackageDetails } from "../types/packageDetails";

export async function getPackage(name: string): Promise<PackageDetails> {
  const result = await fetch(`https://registry.npmjs.org/${name}`)
  const data: PackageDetails = await result.json()

  return data 
}
