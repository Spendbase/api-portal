import type { Metadata } from "next"
import { QuickStartContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Quick Start — Spendbase API",
}

export default function QuickStartPage() {
  return (
    <>
      <QuickStartContent />
      <CodePanel section="quick-start" />
    </>
  )
}
