import type { Metadata } from "next"
import { WebhooksContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Webhooks — Spendbase API",
}

export default function WebhooksPage() {
  return (
    <>
      <WebhooksContent />
      <CodePanel section="webhooks" />
    </>
  )
}
