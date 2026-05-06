import type { Metadata } from "next"
import { CardsContent } from "@/components/docs-content"
import { CodePanel } from "@/components/code-panel"

export const metadata: Metadata = {
  title: "Cards — Spendbase API",
}

export default function CardsPage() {
  return (
    <>
      <CardsContent />
      <CodePanel section="cards" />
    </>
  )
}
