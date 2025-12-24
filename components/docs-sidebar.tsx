import { ChevronDown } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function DocsSidebar() {
  const sections = [
    {
      title: "Getting Started",
      items: ["Basic Requirements", "Authentication & TLS", "Certificate Setup"],
    },
    {
      title: "Accounts",
      items: [
        "Get Accounts by Currency",
        "Get Bank Accounts",
        "Create Account",
        "Get Ledger Accounts",
        "Transfer Money",
      ],
    },
    {
      title: "Cards",
      items: [
        "Card Status Overview",
        "Create Card",
        "Get Card",
        "Get All Cards",
        "Get Card Details",
        "Lock Card",
        "Unlock Card",
        "Terminate Card",
        "Set Limit",
      ],
    },
    {
      title: "Transactions",
      items: [
        "Get All Card Transactions",
        "Get Transactions by Account",
        "Get Transaction Details",
        "Get Transaction Status",
        "Add Note to Transaction",
      ],
    },
  ]

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border lg:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="px-4 py-6">
          <nav className="space-y-6">
            {sections.map((section) => (
              <div key={section.title}>
                <button className="flex w-full items-center justify-between text-sm font-medium">
                  {section.title}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <ul className="mt-3 space-y-2">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}
