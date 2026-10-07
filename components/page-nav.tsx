"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DOCS_SECTIONS } from "@/components/docs-sidebar"
import { regionPath, useRegion } from "@/components/region"

// Previous / next page links at the bottom of a docs page, in sidebar order.
export function PageNav() {
  const region = useRegion()
  const pathname = usePathname()
  const pages = DOCS_SECTIONS.map((s) => ({ title: s.title, href: regionPath(region, s.path) }))
  const index = pages.findIndex((p) => pathname === p.href || pathname.startsWith(p.href + "/"))
  if (index === -1) return null
  const prev = pages[index - 1]
  const next = pages[index + 1]

  return (
    <nav aria-label="Pagination" className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 rounded-lg border border-border p-4 transition-colors hover:border-foreground/30 hover:bg-muted/50"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <ChevronLeft className="h-3.5 w-3.5" /> Previous
          </span>
          <span className="font-medium group-hover:text-foreground">{prev.title}</span>
        </Link>
      ) : (
        <span className="hidden sm:block" />
      )}
      {next && (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:border-foreground/30 hover:bg-muted/50"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Next <ChevronRight className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium group-hover:text-foreground">{next.title}</span>
        </Link>
      )}
    </nav>
  )
}
