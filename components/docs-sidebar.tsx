"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const sections = [
  {
    title: "Getting Started",
    items: [
      { label: "Basic Requirements", id: "basic-requirements" },
      { label: "Authentication & TLS", id: "authentication-tls" },
    ],
  },
  {
    title: "Accounts",
    items: [
      { label: "Get Accounts by Currency", id: "get-accounts-by-currency" },
      { label: "Get Bank Accounts", id: "get-bank-accounts" },
      { label: "Create Account", id: "create-account" },
      { label: "Get Ledger Accounts", id: "get-ledger-accounts" },
      { label: "Get Account by ID", id: "get-account-by-id" },
      { label: "Transfer Money", id: "transfer-money" },
      { label: "Transfer with Note", id: "transfer-with-note" },
      { label: "Rename Account", id: "rename-account" },
    ],
  },
  {
    title: "Cards",
    items: [
      { label: "Card Status Overview", id: "card-status-overview" },
      { label: "Create Card", id: "create-card" },
      { label: "Get Card", id: "get-card" },
      { label: "Get All Cards", id: "get-all-cards" },
      { label: "Get Account Cards", id: "get-account-cards" },
      { label: "Get Card Details", id: "get-card-details" },
      { label: "Get Card Frame", id: "get-card-frame" },
      { label: "Lock Card", id: "lock-card" },
      { label: "Unlock Card", id: "unlock-card" },
      { label: "Terminate Card", id: "terminate-card" },
      { label: "Set Limit", id: "set-limit" },
      { label: "Add Cardholder", id: "add-cardholder" },
      { label: "Get Cardholder", id: "get-cardholder" },
    ],
  },
  {
    title: "Transactions",
    items: [
      { label: "Get Card Transactions", id: "get-card-transactions" },
      { label: "Get Transactions", id: "get-transactions" },
      { label: "Get Master Transactions", id: "get-master-transactions" },
      { label: "Add Note to Transaction", id: "add-note-to-tx" },
    ],
  },
]

export function DocsSidebar() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.title, true]))
  )

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="px-4 py-6">
          <nav className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between text-sm font-medium"
                  onClick={() => toggle(section.title)}
                >
                  {section.title}
                  {expanded[section.title] ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {expanded[section.title] && (
                  <ul className="mt-3 space-y-2">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}
