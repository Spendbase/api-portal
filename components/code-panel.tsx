"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function CodePanel() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside className="hidden w-[480px] shrink-0 border-l border-border bg-card xl:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Get All Accounts (EUR)
              </span>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards-adapter/v1/public/accounts/accounts/EUR`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Create Account</span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountName": "ExampleName",
       "LedgerBankAccountID": "ExampleLedgerBankAccountID"}' \\
  $BASE_URL/cards-adapter/v1/public/accounts/account`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Transfer Money</span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$ledgerID",
       "amount": 0.1,
       "currencyISONum": "978",
       "sourceAccountId": "$sourceLedgerID"}' \\
  $BASE_URL/cards-adapter/v1/public/accounts/accounts-transfer`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Create Card</span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key -X POST \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"accountId": "$id",
       "cardName": "AdapterTestCardEUR2",
       "email": "example@spendbase.co"}' \\
  $BASE_URL/cards-adapter/v1/public/cards/card`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Get All Cards</span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards-adapter/v1/public/cards/cards`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Set Card Limit</span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key -X PUT \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"amount": 1000, "type": "DAILY"}' \\
  $BASE_URL/cards-adapter/v1/public/cards/set-virtual-card-limit/$id`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Get Card Transactions
              </span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  $BASE_URL/cards-adapter/v1/public/transactions/card-transactions?to=1754042551&from=1753864397&accountName=TEST%20account`}</code>
              </pre>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Add Note to Transaction
              </span>
            </div>
            <div className="rounded-lg bg-muted p-4 font-mono text-xs">
              <pre className="overflow-x-auto">
                <code>{`curl --cert client.crt --key client.key -X POST \\
  -H "Content-Type: application/json" \\
  -H "External-Token: $EXTERNAL_TOKEN" \\
  -d '{"note": "test"}' \\
  $BASE_URL/cards-adapter/v1/public/transactions/note/$id`}</code>
              </pre>
            </div>
          </div>

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
