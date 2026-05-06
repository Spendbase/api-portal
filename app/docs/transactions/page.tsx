import type { Metadata } from "next"
import { TransactionsContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Transactions — Spendbase API",
}

export default function TransactionsPage() {
  return (
    <>
      <TransactionsContent />
      <CodePanel section="transactions" />
    </>
  )
}
