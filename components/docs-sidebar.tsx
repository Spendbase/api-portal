/* eslint-disable jsx-a11y/aria-proptypes */
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const sections = [
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    items: [
      { label: "Basic Requirements", id: "basic-requirements" },
      { label: "Authentication & TLS", id: "authentication-tls" },
    ],
  },
  {
    title: "Accounts",
    path: "/docs/accounts",
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
    path: "/docs/cards",
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
    path: "/docs/transactions",
    items: [
      { label: "Get Card Transactions", id: "get-card-transactions" },
      { label: "Get Transactions", id: "get-transactions" },
      { label: "Get Master Transactions", id: "get-master-transactions" },
      { label: "Add Note to Transaction", id: "add-note-to-tx" },
    ],
  },
  {
    title: "Webhooks",
    path: "/docs/webhooks",
    items: [
      { label: "Internal Transfer", id: "internal-transfer" },
      { label: "Card Created", id: "card-created" },
      { label: "Card Blocked", id: "card-blocked" },
      { label: "Card Terminated", id: "card-terminated" },
      { label: "Card Authorization", id: "card-authorization" },
      { label: "Card Settlement", id: "card-settlement" },
      { label: "Card OTP", id: "card-otp" },
      { label: "Card Decline", id: "card-decline" },
      { label: "Card Reversal", id: "card-reversal" },
      { label: "Card Refund", id: "card-refund" },
    ],
  },
]

function SidebarNav({
  pathname,
  hash,
  expanded,
  toggle,
  onLinkClick,
}: {
  pathname: string
  hash: string
  expanded: Record<string, boolean>
  toggle: (title: string) => void
  onLinkClick?: () => void
}) {
  const isActive = (sectionPath: string) =>
    pathname === sectionPath || pathname.startsWith(sectionPath + "/")

  return (
    <>
      <div className="px-4 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground tracking-wide">API Reference</span>
          <span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-0.5 text-xs font-mono text-muted-foreground">
            v1
          </span>
        </div>
      </div>

      <nav className="px-3 py-4 space-y-1">
        {sections.map((section) => {
          const active = isActive(section.path)
          const open = expanded[section.title]
          return (
            <div key={section.title}>
              <button
                type="button"
                className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-expanded={open}
                onClick={() => toggle(section.title)}
              >
                {section.title}
                {open ? (
                  <ChevronDown className="h-3.5 w-3.5" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5" />
                )}
              </button>
              {open && (
                <ul className="mt-1 mb-2">
                  {section.items.map((item) => {
                    const itemActive = active && hash === `#${item.id}`
                    return (
                      <li key={item.id}>
                        <Link
                          href={`${section.path}#${item.id}`}
                          onClick={onLinkClick}
                          className={`flex items-center rounded-md px-2 py-1.5 text-sm transition-colors ${
                            active
                              ? "text-foreground hover:bg-muted"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                        >
                          {itemActive && (
                            <span className="mr-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                          )}
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}

export function DocsSidebar({ mobileOpen, onClose }: { mobileOpen?: boolean; onClose?: () => void }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(sections.map((s) => [s.title, true]))
  )
  const [hash, setHash] = useState("")

  useEffect(() => {
    setHash(window.location.hash)
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const toggle = (title: string) =>
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }))

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-border lg:block sticky top-14 h-[calc(100vh-3.5rem)] self-start">
        <ScrollArea className="h-full">
          <SidebarNav
            pathname={pathname}
            hash={hash}
            expanded={expanded}
            toggle={toggle}
          />
        </ScrollArea>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Panel */}
          <aside className="absolute left-0 top-0 h-full w-72 bg-background border-r border-border shadow-lg flex flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b border-border shrink-0">
              <span className="text-sm font-semibold">Navigation</span>
              <button
                type="button"
                aria-label="Close navigation"
                className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ScrollArea className="flex-1">
              <SidebarNav
                pathname={pathname}
                hash={hash}
                expanded={expanded}
                toggle={toggle}
                onLinkClick={onClose}
              />
            </ScrollArea>
          </aside>
        </div>
      )}
    </>
  )
}
