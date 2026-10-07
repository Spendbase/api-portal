export type Region = "us" | "eu"

export const REGIONS: { value: Region; label: string }[] = [
  { value: "us", label: "US" },
  { value: "eu", label: "EU" },
]

export const DEFAULT_REGION: Region = "us"

export function isRegion(value: string): value is Region {
  return value === "us" || value === "eu"
}

// "/docs/cards" -> "/docs/eu/cards"
export function regionPath(region: Region, path: string) {
  return path.replace(/^\/docs/, `/docs/${region}`)
}
