"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type Region = "us" | "eu"

const REGIONS: { value: Region; label: string }[] = [
  { value: "us", label: "US" },
  { value: "eu", label: "EU" },
]

const STORAGE_KEY = "spendbase-docs-region"

const RegionContext = createContext<{ region: Region; setRegion: (r: Region) => void }>({
  region: "us",
  setRegion: () => {},
})

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>("us")

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === "us" || stored === "eu") setRegionState(stored)
    } catch {}
  }, [])

  const setRegion = (r: Region) => {
    setRegionState(r)
    try {
      localStorage.setItem(STORAGE_KEY, r)
    } catch {}
  }

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
}

export function useRegion() {
  return useContext(RegionContext)
}

export function RegionOnly({ region, children }: { region: Region; children: React.ReactNode }) {
  const { region: current } = useRegion()
  return current === region ? <>{children}</> : null
}

export function RegionSwitcher() {
  const { region, setRegion } = useRegion()
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
          onClick={() => setRegion(r.value)}
        >
          {r.label}
        </button>
      ))}
    </div>
  )
}
