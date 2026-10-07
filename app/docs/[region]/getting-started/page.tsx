import type { Metadata } from "next"
import { GettingStartedContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Getting Started — Spendbase API",
}

export default function GettingStartedPage() {
  return (
    <>
      <GettingStartedContent />
      <CodePanel section="getting-started" />
    </>
  )
}
