import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"
import { DocsHeader } from "@/components/docs-header"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="flex flex-1">
        <DocsSidebar />
        <DocsContent />
        <CodePanel />
      </div>
    </div>
  )
}
