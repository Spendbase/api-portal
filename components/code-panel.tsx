"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

function CurlBlock({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      <div className="rounded-lg bg-muted p-4 font-mono text-xs">
        <pre className="overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

const EXAMPLES: { title: string; code: string }[] = [
  {
    title: "Get Accounts by Currency",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/accounts/EUR`,
  },
  {
    title: "Get Bank Accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/bank-accounts`,
  },
  {
    title: "Create Account",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountName": "ExampleName",
       "LedgerBankAccountID": "ExampleLedgerBankAccountID"}' \\
  $BASE_URL/accounts/account`,
  },
  {
    title: "Get Ledger Accounts",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/ledger-account`,
  },
  {
    title: "Get Account by ID",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/accounts/ledger-account/$LEDGER_ID/$ACCOUNT_ID`,
  },
  {
    title: "Transfer Money",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$ledgerID",
       "amount": 0.1,
       "currencyISONum": "978",
       "sourceAccountId": "$sourceLedgerID"}' \\
  $BASE_URL/accounts/accounts-transfer`,
  },
  {
    title: "Transfer with Note",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$ledgerID",
       "amount": 0.1,
       "currencyISONum": "978",
       "sourceAccountId": "$sourceLedgerID",
       "note": "Payment for services"}' \\
  $BASE_URL/accounts/accounts-transfer-note`,
  },
  {
    title: "Rename Account",
    code: `curl --cert client.crt --key client.key -X PATCH \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Account Name"}' \\
  $BASE_URL/accounts/rename-account/$ACCOUNT_ID`,
  },
  {
    title: "Create Card",
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
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card/$CARD_ID`,
  },
  {
    title: "Get All Cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/cards`,
  },
  {
    title: "Get Account Cards",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/account-cards/$LEDGER_ACCOUNT_ID`,
  },
  {
    title: "Get Card Details",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card-details/$CARD_ID`,
  },
  {
    title: "Get Card Frame",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/card-frame/$CARD_ID`,
  },
  {
    title: "Lock Card",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/lock-card/$CARD_ID`,
  },
  {
    title: "Unlock Card",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/unlock-card/$CARD_ID`,
  },
  {
    title: "Terminate Card",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/terminate-card/$CARD_ID`,
  },
  {
    title: "Set Card Limit",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"amount": 1000, "type": "DAILY"}' \\
  $BASE_URL/cards/set-virtual-card-limit/$CARD_ID`,
  },
  {
    title: "Add Cardholder",
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
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards/get-cardholder/$CARD_ID`,
  },
  {
    title: "Get Card Transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  "$BASE_URL/transactions/card-transactions/$LEDGER_ACCOUNT_ID?from=1753864397&to=1754042551"`,
  },
  {
    title: "Get Transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  "$BASE_URL/transactions/transactions/$LEDGER_ACCOUNT_ID?from=1753864397&to=1754042551"`,
  },
  {
    title: "Get Master Transactions",
    code: `curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  "$BASE_URL/transactions/master-transactions/$LEDGER_ACCOUNT_ID?from=1753864397&to=1754042551"`,
  },
  {
    title: "Add Note to Transaction",
    code: `curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"note": "test"}' \\
  $BASE_URL/transactions/note/$TRANSACTION_ID`,
  },
]

export function CodePanel() {
  return (
    <aside className="hidden w-[480px] shrink-0 border-l border-border bg-card xl:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="p-6 space-y-6">
          {EXAMPLES.map((ex) => (
            <CurlBlock key={ex.title} title={ex.title} code={ex.code} />
          ))}

          <div className="space-y-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Environment</span>
            <div className="space-y-2">
              <div className="rounded-lg border border-border p-3 bg-background">
                <div className="text-sm font-medium">Development</div>
                <code className="text-xs text-muted-foreground font-mono">
                  https://cards-integration-api.dev.spendbase.co
                </code>
              </div>
              <div className="rounded-lg border border-border p-3 bg-background">
                <div className="text-sm font-medium">Production</div>
                <code className="text-xs text-muted-foreground font-mono">
                  https://cards-integration-api.prod.spendbase.co
                </code>
              </div>
              <div className="rounded-lg border border-border p-3 bg-background">
                <div className="text-sm font-medium">Authentication</div>
                <code className="text-xs text-muted-foreground font-mono">External-Token + TLS Certificates</code>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  )
}
