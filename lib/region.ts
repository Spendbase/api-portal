export type Region = "us" | "us2" | "eu"

export const REGIONS: { value: Region; label: string }[] = [
  { value: "us", label: "US" },
  { value: "us2", label: "US2" },
  { value: "eu", label: "EU" },
]

export const DEFAULT_REGION: Region = "us"

// Content shared by both US regions. US2 is the US API plus the named-employee flow (Employees, spendbaseUserId on
// Create card, errorCode on a refused card); content specific to that flow is marked region "us2".
export const US_REGIONS: readonly Region[] = ["us", "us2"]

// Which regions a piece of content applies to: one region or a list of them.
export type RegionSpec = Region | readonly Region[]

export function inRegion(region: Region, spec: RegionSpec | undefined) {
  if (spec === undefined) return true
  return typeof spec === "string" ? spec === region : spec.includes(region)
}

export function isRegion(value: string): value is Region {
  return REGIONS.some((r) => r.value === value)
}

// "/docs/cards" -> "/docs/eu/cards"
export function regionPath(region: Region, path: string) {
  return path.replace(/^\/docs/, `/docs/${region}`)
}

// "/docs/us/cards" -> "/docs/us2/cards"
export function switchRegionPath(pathname: string, region: Region) {
  const [, docs, current, ...rest] = pathname.split("/")
  if (docs !== "docs" || !isRegion(current)) return pathname
  return ["", docs, region, ...rest].join("/")
}
