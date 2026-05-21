"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ALL_SECTIONS = [
  { label: "Basic Requirements", id: "basic-requirements", group: "Getting Started", page: "/docs/getting-started" },
  { label: "Authentication & TLS", id: "authentication-tls", group: "Getting Started", page: "/docs/getting-started" },
  { label: "Get Accounts by Currency", id: "get-accounts-by-currency", group: "Accounts", page: "/docs/accounts" },
  { label: "Get Bank Accounts", id: "get-bank-accounts", group: "Accounts", page: "/docs/accounts" },
  { label: "Create Account", id: "create-account", group: "Accounts", page: "/docs/accounts" },
  { label: "Get Ledger Accounts", id: "get-ledger-accounts", group: "Accounts", page: "/docs/accounts" },
  { label: "Get Account by ID", id: "get-account-by-id", group: "Accounts", page: "/docs/accounts" },
  { label: "Transfer Money", id: "transfer-money", group: "Accounts", page: "/docs/accounts" },
  { label: "Transfer with Note", id: "transfer-with-note", group: "Accounts", page: "/docs/accounts" },
  { label: "Rename Account", id: "rename-account", group: "Accounts", page: "/docs/accounts" },
  { label: "Card Status Overview", id: "card-status-overview", group: "Cards", page: "/docs/cards" },
  { label: "Create Card", id: "create-card", group: "Cards", page: "/docs/cards" },
  { label: "Get Card", id: "get-card", group: "Cards", page: "/docs/cards" },
  { label: "Get All Cards", id: "get-all-cards", group: "Cards", page: "/docs/cards" },
  { label: "Get Account Cards", id: "get-account-cards", group: "Cards", page: "/docs/cards" },
  { label: "Get Card Details", id: "get-card-details", group: "Cards", page: "/docs/cards" },
  { label: "Get Card Frame", id: "get-card-frame", group: "Cards", page: "/docs/cards" },
  { label: "Lock Card", id: "lock-card", group: "Cards", page: "/docs/cards" },
  { label: "Unlock Card", id: "unlock-card", group: "Cards", page: "/docs/cards" },
  { label: "Terminate Card", id: "terminate-card", group: "Cards", page: "/docs/cards" },
  { label: "Set Limit", id: "set-limit", group: "Cards", page: "/docs/cards" },
  { label: "Add Cardholder", id: "add-cardholder", group: "Cards", page: "/docs/cards" },
  { label: "Get Cardholder", id: "get-cardholder", group: "Cards", page: "/docs/cards" },
  { label: "Get Card Transactions", id: "get-card-transactions", group: "Transactions", page: "/docs/transactions" },
  { label: "Get Transactions", id: "get-transactions", group: "Transactions", page: "/docs/transactions" },
  { label: "Get Master Transactions", id: "get-master-transactions", group: "Transactions", page: "/docs/transactions" },
  { label: "Add Note to Transaction", id: "add-note-to-tx", group: "Transactions", page: "/docs/transactions" },
  { label: "Internal Transfer", id: "internal-transfer", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Created", id: "card-created", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Blocked", id: "card-blocked", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Terminated", id: "card-terminated", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Authorization", id: "card-authorization", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Settlement", id: "card-settlement", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card OTP", id: "card-otp", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Decline", id: "card-decline", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Reversal", id: "card-reversal", group: "Webhooks", page: "/docs/webhooks" },
  { label: "Card Refund", id: "card-refund", group: "Webhooks", page: "/docs/webhooks" },
]

export function DocsHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const results = query.trim()
    ? ALL_SECTIONS.filter(
        (s) =>
          s.label.toLowerCase().includes(query.toLowerCase()) ||
          s.group.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !inputRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const handleNavigate = (page: string, id: string) => {
    if (pathname === page) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      router.push(`${page}#${id}`)
    }
    setQuery("")
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 lg:px-6">
        <Button variant="ghost" size="icon" className="mr-2 lg:hidden" aria-label="Open navigation" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor" opacity="0.3" />
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
          </svg>
          <span className="font-semibold">Spendbase</span>
          <span className="text-sm text-muted-foreground hidden sm:inline">/</span>
          <span className="font-mono text-sm text-muted-foreground hidden sm:inline">API Reference</span>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search docs..."
              aria-label="Search documentation"
              className="w-full pl-8 pr-8"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setOpen(true)
              }}
              onFocus={() => {
                if (query) setOpen(true)
              }}
            />
            {query && (
              <button
                type="button"
                title="Clear search"
                className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground"
                onClick={() => {
                  setQuery("")
                  setOpen(false)
                }}
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {open && results.length > 0 && (
              <div
                ref={dropdownRef}
                className="absolute top-full mt-1 w-full rounded-md border border-border bg-popover shadow-md z-50 max-h-72 overflow-y-auto"
              >
                {results.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className="w-full text-left px-3 py-2 hover:bg-muted flex flex-col gap-0.5"
                    onClick={() => handleNavigate(r.page, r.id)}
                  >
                    <span className="text-sm">{r.label}</span>
                    <span className="text-xs text-muted-foreground">{r.group}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open search"
            onClick={() => {
              setOpen(true)
              inputRef.current?.focus({ preventScroll: true })
            }}
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
