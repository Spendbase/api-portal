import { notFound } from "next/navigation"
import { DocsShell } from "@/components/docs-shell"
import { REGIONS, isRegion } from "@/lib/region"

export const dynamicParams = false

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.value }))
}

export default async function RegionLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ region: string }>
}) {
  const { region } = await params
  if (!isRegion(region)) notFound()
  return <DocsShell region={region}>{children}</DocsShell>
}
