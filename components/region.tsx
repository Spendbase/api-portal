"use client"

import { createContext, useContext, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

import { DEFAULT_REGION, REGIONS, regionPath, type Region } from "@/lib/region"

export { DEFAULT_REGION, REGIONS, isRegion, regionPath, type Region } from "@/lib/region"

const RegionContext = createContext<Region>(DEFAULT_REGION)

export function RegionProvider({ region, children }: { region: Region; children: React.ReactNode }) {
  return <RegionContext.Provider value={region}>{children}</RegionContext.Provider>
}

export function useRegion() {
  return useContext(RegionContext)
}

export function RegionOnly({ region, children }: { region: Region; children: React.ReactNode }) {
  return useRegion() === region ? <>{children}</> : null
}

export function RegionSwitcher() {
  const region = useRegion()
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = (next: Region) => {
    if (next === region) return
    const path = pathname.replace(/^\/docs\/(us|eu)(?=\/|$)/, `/docs/${next}`)
    router.push(path + window.location.hash)
  }

  return (
    <div role="radiogroup" aria-label="API region" className="inline-flex shrink-0 rounded-md border border-border p-0.5">
      {REGIONS.map((r) => (
        <button
          key={r.value}
          type="button"
          role="radio"
          aria-checked={region === r.value}
          className={cn(
            "px-2.5 py-1 text-xs font-medium rounded-sm transition-colors",
            region === r.value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
          onClick={() => switchTo(r.value)}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}

// Old region-less URLs (/docs/cards#get-card) -> default region, keeping the anchor.
export function LegacyRedirect({ to }: { to: string }) {
  const router = useRouter()
  useEffect(() => {
    router.replace(regionPath(DEFAULT_REGION, to) + window.location.hash)
  }, [router, to])
  return null
}
