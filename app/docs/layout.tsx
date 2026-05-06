import { DocsHeader } from "@/components/docs-header"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <DocsHeader />
      <div className="flex flex-1">
        <DocsSidebar />
        {children}
      </div>
    </div>
  )
}
