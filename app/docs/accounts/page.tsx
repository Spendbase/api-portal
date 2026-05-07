import type { Metadata } from "next"
import { AccountsContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Accounts — Spendbase API",
}

export default function AccountsPage() {
  return (
    <>
      <AccountsContent />
      <CodePanel section="accounts" />
    </>
  )
}
