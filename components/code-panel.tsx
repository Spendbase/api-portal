"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type Section = "getting-started" | "accounts" | "cards" | "transactions" | "webhooks"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleCopy}>
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  )
}

function CurlBlock({ title, code }: { title: string; code: string }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
        <CopyButton text={code} />
      </div>
      <div className="rounded-lg bg-muted p-4 font-mono text-xs overflow-x-auto">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  )
}

function EnvRow({ label, value, copyable }: { label: string; value: string; copyable?: boolean }) {
  return (
    <div className="rounded-lg border border-border p-3 bg-background">
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-medium">{label}</div>
        {copyable && <CopyButton text={value} />}
      </div>
      <code className="text-xs text-muted-foreground font-mono break-all">{value}</code>
    </div>
  )
}

const EXAMPLES: { title: string; section: Section; code: string }[] = [
  {
    title: "Get Accounts by Currency",
    section: "accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/accounts/EUR`,
  },
  {
    title: "Get Bank Accounts",
    section: "accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/bank-accounts`,
  },
  {
    title: "Create Account",
    section: "accounts",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountName": "ExampleName",
       "LedgerBankAccountID": "$BANK_ID"}' \\
  $BASE_URL/accounts/account`,
  },
  {
    title: "Get Ledger Accounts",
    section: "accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/ledger-account`,
  },
  {
    title: "Get Account by ID",
    section: "accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/ledger-account/$LEDGER_ID/$ID`,
  },
  {
    title: "Transfer Money",
    section: "accounts",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$ACCOUNT_ID",
       "amount": 100,
       "currencyISONum": "978",
       "sourceAccountId": "$SOURCE_ID"}' \\
  $BASE_URL/accounts/accounts-transfer`,
  },
  {
    title: "Transfer with Note",
    section: "accounts",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$ACCOUNT_ID",
       "amount": 100,
       "currencyISONum": "978",
       "sourceAccountId": "$SOURCE_ID",
       "note": "Payment for services"}' \\
  $BASE_URL/accounts/accounts-transfer-note`,
  },
  {
    title: "Rename Account",
    section: "accounts",
    code: `curl --cert client.crt --key client.key -X PATCH \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Account Name"}' \\
  $BASE_URL/accounts/rename-account/$ACCOUNT_ID`,
  },
  {
    title: "Create Card",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$id",
       "cardName": "AdapterTestCardEUR2",
       "email": "example@spendbase.co"}' \\
  $BASE_URL/cards/card`,
  },
  {
    title: "Get Card",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card/$CARD_ID`,
  },
  {
    title: "Get All Cards",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/cards`,
  },
  {
    title: "Get Account Cards",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/account-cards/$LEDGER_ACCOUNT_ID`,
  },
  {
    title: "Get Card Details",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card-details/$CARD_ID`,
  },
  {
    title: "Get Card Frame",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card-frame/$CARD_ID`,
  },
  {
    title: "Lock Card",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/lock-card/$CARD_ID`,
  },
  {
    title: "Unlock Card",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/unlock-card/$CARD_ID`,
  },
  {
    title: "Terminate Card",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/terminate-card/$CARD_ID`,
  },
  {
    title: "Set Card Limit",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"amount": 1000, "type": "DAILY"}' \\
  $BASE_URL/cards/set-virtual-card-limit/$CARD_ID`,
  },
  {
    title: "Add Cardholder",
    section: "cards",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"firstName": "John",
       "lastName": "Doe",
       "middleName": "A",
       "email": "john.doe@example.com",
       "phoneNumber": "+1234567890",
       "dob": "1990-01-15",
       "address": "123 Main St, City, Country"}' \\
  $BASE_URL/cards/add-cardholder`,
  },
  {
    title: "Get Cardholder",
    section: "cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/get-cardholder/$CARD_ID`,
  },
  {
    title: "Get Card Transactions",
    section: "transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -G \\
  -d "from=1753864397" \\
  -d "to=1754042551" \\
  $BASE_URL/transactions/card-transactions/$LEDGER_ID`,
  },
  {
    title: "Get Transactions",
    section: "transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -G \\
  -d "from=1753864397" \\
  -d "to=1754042551" \\
  $BASE_URL/transactions/transactions/$LEDGER_ID`,
  },
  {
    title: "Get Master Transactions",
    section: "transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -G \\
  -d "from=1753864397" \\
  -d "to=1754042551" \\
  $BASE_URL/transactions/master-transactions/$LEDGER_ID`,
  },
  {
    title: "Add Note to Transaction",
    section: "transactions",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"note": "test"}' \\
  $BASE_URL/transactions/note/$TRANSACTION_ID`,
  },
]

export function CodePanel({ section }: { section: Section }) {
  const examples = EXAMPLES.filter((e) => e.section === section)

  return (
    <aside className="hidden xl:block w-[min(480px,38%)] shrink-0 border-l border-border bg-card sticky top-14 h-[calc(100vh-3.5rem)] self-start">
      <ScrollArea className="h-full">
        <div className="p-6 space-y-6">
          {examples.map((ex) => (
            <CurlBlock key={ex.title} title={ex.title} code={ex.code} />
          ))}

          <div className="space-y-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Environment</span>
            <div className="space-y-2">
              <EnvRow label="Development" value="https://cards-integration-api.dev.spendbase.co" copyable />
              <EnvRow label="Production" value="https://cards-integration-api.prod.spendbase.co" copyable />
              <EnvRow label="Authentication" value="External-Token + TLS Certificates" />
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
