"use client"

import { useState } from "react"
import { DocsHeader } from "@/components/docs-header"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen">
      <DocsHeader onMenuClick={() => setMobileOpen(true)} />
      <div className="flex flex-1">
        <DocsSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        {children}
      </div>
    </div>
  )
}
