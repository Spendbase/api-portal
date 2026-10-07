"use client"

import { useState } from "react"
import { DocsHeader } from "@/components/docs-header"
import { DocsSidebar } from "@/components/docs-sidebar"
import { RegionProvider, type Region } from "@/components/region"

export function DocsShell({ region, children }: { region: Region; children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <RegionProvider region={region}>
      <div className="flex flex-col min-h-screen">
        <DocsHeader onMenuClick={() => setMobileOpen(true)} />
        <div className="flex flex-1">
          <DocsSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
          {children}
        </div>
      </div>
    </RegionProvider>
  )
}
