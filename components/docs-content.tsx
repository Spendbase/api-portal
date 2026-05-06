import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle } from "lucide-react"

function GetBadge() {
  return (
    <Badge variant="outline" className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20">
      GET
    </Badge>
  )
}
function PostBadge() {
  return (
    <Badge variant="outline" className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
      POST
    </Badge>
  )
}
function PutBadge() {
  return (
    <Badge variant="outline" className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20">
      PUT
    </Badge>
  )
}
function PatchBadge() {
  return (
    <Badge variant="outline" className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20">
      PATCH
    </Badge>
  )
}

function Param({
  name,
  type,
  required,
  children,
}: {
  name: string
  type: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <code className="text-sm font-mono text-primary">{name}</code>
        <Badge variant={required ? "secondary" : "outline"} className="text-xs">
          {required ? "required" : "optional"}
        </Badge>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{type}</p>
      <p className="mt-2 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function ResponseBlock({ status, children }: { status?: string; children: string }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium mb-2">{status ?? "200 OK"} Response</p>
      <div className="p-4 bg-muted rounded-lg border border-border overflow-x-auto">
        <pre className="text-xs font-mono">{children}</pre>
      </div>
    </div>
  )
}

const CARD_OBJECT = `{
  "accountFreeBalance": 0,
  "accountName": "string",
  "cardHolder": {
    "email": "string",
    "fullName": "string",
    "id": "string",
    "logoUrl": "string"
  },
  "cardLast4": "string",
  "cardName": "string",
  "currencyISOCode": "string",
  "id": "string",
  "issuedAt": "string",
  "ledgerAccountId": "string",
  "limit": {
    "activatedAt": "string",
    "amount": 0,
    "currencyISOCode": "string",
    "deleteRequested": true,
    "externalId": 0,
    "id": "string",
    "periodEnd": "string",
    "periodStart": "string",
    "spentAmount": 0,
    "type": "string"
  },
  "onboardingStatus": "string",
  "pendingLimit": {
    "activatedAt": "string",
    "amount": 0,
    "currencyISOCode": "string",
    "deleteRequested": true,
    "externalId": 0,
    "id": "string",
    "periodEnd": "string",
    "periodStart": "string",
    "spentAmount": 0,
    "type": "string"
  },
  "status": "string"
}`

const TRANSACTION_OBJECT = `{
  "amount": 0,
  "attachment": {
    "fileName": "string",
    "fileURL": "string",
    "note": "string",
    "originalFileName": "string"
  },
  "cardId": "string",
  "cardRef": "string",
  "category": 0,
  "createdAt": 0,
  "currencyISOCode": "string",
  "details": {
    "accountName": "string",
    "cardName": "string",
    "cardholderName": "string",
    "exchangeRate": 0,
    "externalTransactionId": "string",
    "feeFixed": 0,
    "feePercent": 0,
    "hasAttachment": true,
    "mcc": "string",
    "merchantAddress": "string",
    "merchantAmount": 0,
    "merchantCategory": "string",
    "merchantCurrencyISOCode": "string",
    "merchantLogoUrl": "string",
    "merchantName": "string",
    "merchantOriginalName": "string",
    "merchantProviderName": "string",
    "panLastFour": "string",
    "purpose": "string",
    "receiverAddress": "string",
    "receiverIban": "string",
    "receiverName": "string",
    "recipientEmail": "string",
    "recipientId": "string",
    "reference": "string",
    "rejectReason": "string",
    "senderAddress": "string",
    "senderIban": "string",
    "senderName": "string",
    "sourceCurrencyISOCode": "string",
    "sourceGrossAmount": 0,
    "transferSchema": "string"
  },
  "entry_id": "string",
  "eventType": "Undefined",
  "id": "string",
  "is_locked": true,
  "message": "string",
  "receipt": "string",
  "ref": "string",
  "sourceType": "Undefined",
  "state": "Pending",
  "type": "string",
  "updatedAt": 0
}`

const LEDGER_ACCOUNT_OBJECT = `{
  "createdAt": 0,
  "credit": true,
  "currencyISOCode": "string",
  "freeBalance": 0,
  "id": "string",
  "multicurrency": true,
  "name": "string",
  "pendingBalance": 0,
  "ref": "string",
  "state": "active",
  "step": "string",
  "totalBalance": 0,
  "type": "bank",
  "updatedAt": 0
}`

export function DocsContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">
        <div className="space-y-8">
          {/* Hero */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-balance">Spendbase Integration API</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Connect your applications to Spendbase for managing accounts, virtual cards, and transactions
              programmatically with secure TLS certificate authentication.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">API Status: Operational</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
                <span className="text-sm text-muted-foreground">Base URL:</span>
                <code className="text-sm font-mono">cards-integration-api.dev.spendbase.co</code>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-lg border border-border bg-card">
              <p className="text-sm text-muted-foreground">
                Swagger:{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">
                  api.dev.spendbase.co/cards-adapter/v1/public/swagger/index.html
                </code>
              </p>
            </div>
          </div>

          <Separator />

          {/* Basic Requirements */}
          <div id="basic-requirements" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Basic Requirements</h2>

            <div>
              <h3 className="text-xl font-semibold mb-3">1. Spendbase Account Onboarding</h3>
              <p className="text-muted-foreground leading-relaxed">
                You should have an active account. You can create an account via the link{" "}
                <code className="text-xs bg-muted px-1 py-0.5 rounded">app.spendbase.co</code> → Money → Get
                started. Then, you will pass onboarding, and we will review your data and onboard your company.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Certificate Sign Request Guide</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TLS certificate authentication is required for all API requests. Follow these steps to generate and
                submit your certificate.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-semibold mb-2">Generate a Private Key</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Run this in a secure location on your machine (do not share the private key):
                  </p>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <code className="text-sm font-mono">openssl genrsa -out client.key 2048</code>
                  </div>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>This creates a 2048-bit RSA key called client.key</li>
                    <li>Keep this file secret — it stays with you</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-2">Create a CSR</h4>
                  <p className="text-sm text-muted-foreground mb-2">Now use the private key to generate the CSR:</p>
                  <div className="p-4 bg-muted rounded-lg border border-border">
                    <code className="text-sm font-mono">openssl req -new -key client.key -out client.csr</code>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">You'll be prompted for some fields:</p>
                  <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>Country Name (C): two-letter code (e.g., US, DE)</li>
                    <li>State or Province (ST): full name (e.g., California)</li>
                    <li>Locality Name (L): city (e.g., San Francisco)</li>
                    <li>Organization Name (O): your company/organization</li>
                    <li>Organizational Unit (OU): optional (e.g. IT Department)</li>
                    <li>
                      Common Name (CN): unique identifier for the client — usually your company name or a system
                      name. It will be used to identify your certificate during authentication.
                    </li>
                    <li>Email Address: optional</li>
                    <li>Challenge password: leave it empty</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-2">Send Us the CSR</h4>
                  <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                    <li>
                      Provide us with the file <code className="bg-muted px-1 py-0.5 rounded">client.csr</code> to{" "}
                      <strong>spendbase.api@spendbase.co</strong>
                    </li>
                    <li>
                      Do not send <code className="bg-muted px-1 py-0.5 rounded">client.key</code> — keep it private
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll sign your CSR with our CA and return a certificate (
                    <code className="bg-muted px-1 py-0.5 rounded">client.crt</code>), which you'll use along with{" "}
                    <code className="bg-muted px-1 py-0.5 rounded">client.key</code> to connect securely.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. External Token</h3>
              <p className="text-muted-foreground leading-relaxed">
                An external token is required for API authentication. We will provide the external token in reply to
                the email.
              </p>
            </div>
          </div>

          <Separator />

          {/* Auth & TLS */}
          <div id="authentication-tls" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Integration</h2>

            <div>
              <h3 className="text-xl font-semibold mb-3">Authentication</h3>
              <p className="text-muted-foreground leading-relaxed">
                All requests should include the{" "}
                <code className="bg-muted px-1 py-0.5 rounded">External-Token</code> header for authentication and{" "}
                <code className="bg-muted px-1 py-0.5 rounded">Content-Type: application/json</code> if a body is
                provided.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg border border-border">
                <p className="text-sm font-medium mb-2">Authentication Header</p>
                <code className="text-sm font-mono text-primary">External-Token: your_token_here</code>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">TLS</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certificates <code className="bg-muted px-1 py-0.5 rounded">client.crt</code> and{" "}
                <code className="bg-muted px-1 py-0.5 rounded">client.key</code> are required for TLS. The browser
                certificate manager could be used for certificate import.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Another way is using curl with params for API requests:
              </p>
              <div className="p-4 bg-muted rounded-lg border border-border">
                <code className="text-sm font-mono">curl --cert client.crt --key client.key</code>
              </div>
            </div>

            <div className="flex gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
              <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                  Keep your certificates and tokens secure
                </p>
                <p className="mt-1 text-sm text-orange-800 dark:text-orange-200">
                  Do not share your private key (client.key) or external token in publicly accessible areas such as
                  GitHub, client-side code, or any other public spaces.
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Accounts */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Accounts</h2>

            {/* Get accounts by currency */}
            <div id="get-accounts-by-currency" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/accounts/accounts/:currency</code>
              </div>
              <h3 className="text-2xl font-semibold">Get a list of all accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currency (EUR, USD…) as path param. The response includes sub-accounts and the master-account in
                the requested currency. Account data contains ID, name, balance info, etc.
              </p>
              <ResponseBlock>{`{
  "masterAccounts": [
    {
      "availableBalance": 0,
      "id": "string",
      "tribeAccountCurrencyISONum": "string",
      "tribeAccountId": 0,
      "tribeAccountStatus": "A",
      "tribeCreationStatus": "ERROR",
      "tribeHolderId": 0
    }
  ],
  "subAccounts": [
    {
      "accountName": "string",
      "availableBalance": 0,
      "id": "string",
      "tribeAccountCurrencyISONum": "string",
      "tribeAccountId": 0,
      "tribeAccountStatus": "A",
      "tribeCreationStatus": "ERROR",
      "tribeHolderId": 0
    }
  ]
}`}</ResponseBlock>
            </div>

            {/* Get bank accounts */}
            <div id="get-bank-accounts" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/accounts/bank-accounts</code>
              </div>
              <h3 className="text-2xl font-semibold">Get a list of bank accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                The response includes bank accounts list for specific currencies with ledger IDs and balances.
              </p>
              <ResponseBlock>{`{
  "payload": [
    {
      "createdAt": 0,
      "credit": true,
      "currencyISOCode": "string",
      "freeBalance": 0,
      "id": "string",
      "multicurrency": true,
      "name": "string",
      "pendingBalance": 0,
      "ref": "string",
      "state": "active",
      "step": "string",
      "totalBalance": 0,
      "type": "bank",
      "updatedAt": 0
    }
  ]
}`}</ResponseBlock>
            </div>

            {/* Create account */}
            <div id="create-account" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/accounts/account</code>
              </div>
              <h3 className="text-2xl font-semibold">Create account</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responds with the new account name, ID and ledger ID if creation succeeded.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="accountName" type="string" required>Name of the new account</Param>
                  <Param name="LedgerBankAccountID" type="string" required>
                    Account bank ID — pull from the bank accounts list
                  </Param>
                </div>
              </div>
              <ResponseBlock status="201 Created">{`{
  "accountLedgerId": "string",
  "accountName": "string",
  "id": "string"
}`}</ResponseBlock>
            </div>

            {/* Get ledger accounts */}
            <div id="get-ledger-accounts" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/accounts/ledger-accounts/:ledgerId</code>
              </div>
              <h3 className="text-2xl font-semibold">Get a list of ledger accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ledger bank account ID from list of bank accounts as <code className="bg-muted px-1 py-0.5 rounded text-xs">ledgerId</code> path param.
                Responds with the list of master and sub accounts with ledger IDs.
              </p>
              <ResponseBlock>{`{
  "payload": {
    "master_accounts": [${LEDGER_ACCOUNT_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}],
    "sub_accounts": [${LEDGER_ACCOUNT_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}]
  }
}`}</ResponseBlock>
            </div>

            {/* Get account by ID */}
            <div id="get-account-by-id" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/accounts/ledger-account/:ledgerId/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Get account by ID</h3>
              <p className="text-muted-foreground leading-relaxed">Request specific account details by ID.</p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Path Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="ledgerId" type="string" required>Ledger bank account ID</Param>
                  <Param name="id" type="string" required>Ledger ID of the account</Param>
                </div>
              </div>
              <ResponseBlock>{LEDGER_ACCOUNT_OBJECT}</ResponseBlock>
            </div>

            {/* Transfer money */}
            <div id="transfer-money" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/accounts/accounts-transfer</code>
              </div>
              <h3 className="text-2xl font-semibold">Transfer money between accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ledger IDs can be received from the ledger accounts route. Responds with a success message if the
                money was transferred.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="amount" type="float" required>Transfer amount</Param>
                  <Param name="accountId" type="string" required>Transfer to ledger ID</Param>
                  <Param name="sourceAccountId" type="string" required>Transfer from ledger ID</Param>
                  <Param name="currencyISONum" type="string" required>Currency special numeric code (e.g. 978 for EUR)</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "payload": {
    "message": "string",
    "status": "string"
  }
}`}</ResponseBlock>
            </div>

            {/* Transfer with note */}
            <div id="transfer-with-note" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/accounts/accounts-transfer-note</code>
              </div>
              <h3 className="text-2xl font-semibold">Transfer with note</h3>
              <p className="text-muted-foreground leading-relaxed">
                Same as transfer money but attaches a note to the transaction.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="amount" type="float" required>Transfer amount</Param>
                  <Param name="accountId" type="string" required>Transfer to ledger ID</Param>
                  <Param name="sourceAccountId" type="string" required>Transfer from ledger ID</Param>
                  <Param name="currencyISONum" type="string" required>Currency special numeric code</Param>
                  <Param name="note" type="string" required>Attachment message for the transaction</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "code": 0,
  "message": "string",
  "status": "string"
}`}</ResponseBlock>
            </div>

            {/* Rename account */}
            <div id="rename-account" className="space-y-4">
              <div className="flex items-center gap-3">
                <PatchBadge />
                <code className="text-sm font-mono">/accounts/rename-account/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Rename account</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responds with the account ID and new name.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="name" type="string" required>New account name</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "accountName": "string",
  "id": "string"
}`}</ResponseBlock>
            </div>
          </div>

          <Separator />

          {/* Cards */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Cards</h2>
            <p className="text-muted-foreground leading-relaxed -mt-4">
              Most card routes require a card ID as a path parameter. ID can be received from the list of cards or
              the card info routes.
            </p>

            {/* Card status */}
            <div id="card-status-overview" className="p-4 bg-muted/50 rounded-lg border border-border">
              <h4 className="text-base font-semibold mb-3">Card Status</h4>
              <div className="space-y-2 text-sm">
                {[
                  ["NEW", "The card was created but not activated (not attached to a verified cardholder). Most operations are not available in this status."],
                  ["PENDING", "Internal transitive status when we could not get a response from the provider on the card creation request."],
                  ["DEFAULT", "Common status for an activated card that is ready to be used. Card limit can be set; card can be locked, unlocked, or terminated."],
                  ["CANCELLED_BY_ADMIN", "The card creation was manually cancelled. Most commonly occurs when the card was not activated for 24 hours."],
                  ["EXPIRED", "The card reached its expiry date."],
                  ["TERMINATED", "The card was deleted."],
                  ["LOCKED", "Transitive status between DEFAULT and SUSPENDED when card lock is requested."],
                  ["SUSPENDED", "The card was locked (frozen) by the provider."],
                  ["LIMIT_EXCEED", "Unused."],
                ].map(([status, desc]) => (
                  <div key={status}>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">{status}</code>
                    <span className="ml-2 text-muted-foreground">— {desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Create card */}
            <div id="create-card" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/cards/card</code>
              </div>
              <h3 className="text-2xl font-semibold">Create card</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responds with a success message if the card was created.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="accountId" type="string" required>Card will be created on the account with the given ID</Param>
                  <Param name="email" type="string" required>Cardholder email</Param>
                  <Param name="cardName" type="string" required>Custom name for card</Param>
                  <Param name="expirationDate" type="string">Custom expiration date for the card</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "message": "string",
  "status": "string"
}`}</ResponseBlock>
            </div>

            {/* Get card */}
            <div id="get-card" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/card/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Get card</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns card object with name, ID, currency, account info, etc.
              </p>
              <ResponseBlock>{`{
  "payload": ${CARD_OBJECT.split("\n").map(l => "  " + l).join("\n").trimStart()}
}`}</ResponseBlock>
            </div>

            {/* Get all cards */}
            <div id="get-all-cards" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/cards</code>
              </div>
              <h3 className="text-2xl font-semibold">Get all cards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns a list of card objects with IDs, names, accounts, currencies info, etc.
              </p>
              <ResponseBlock>{`{
  "payload": {
    "cards": [${CARD_OBJECT.split("\n").map(l => "      " + l).join("\n").trimStart()}]
  }
}`}</ResponseBlock>
            </div>

            {/* Get account cards */}
            <div id="get-account-cards" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/account-cards/:ledgerAccountId</code>
              </div>
              <h3 className="text-2xl font-semibold">Get account cards</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns a list of cards related to the account with the given ledger ID.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Path Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "payload": {
    "cards": [${CARD_OBJECT.split("\n").map(l => "      " + l).join("\n").trimStart()}]
  }
}`}</ResponseBlock>
            </div>

            {/* Get card details */}
            <div id="get-card-details" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/card-details/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Get card details</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns card financial details including full card number, CVV and billing address.{" "}
                <span className="font-medium">Available for PCI DSS compliant providers only.</span>
              </p>
              <ResponseBlock>{`{
  "payload": {
    "billingAddress": {
      "city": "string",
      "line1": "string",
      "state": "string",
      "zip": "string"
    },
    "cardNumber": "string",
    "cardOwner": "string",
    "cvv": "string",
    "expirationMonth": "string",
    "expirationYear": "string",
    "id": "string",
    "issuedAt": "string"
  }
}`}</ResponseBlock>
            </div>

            {/* Get card frame */}
            <div id="get-card-frame" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/card-frame/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Get card frame</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns a one-time URL with card details and its expiration timestamp. Use the URL to display card
                details in an iframe without handling sensitive data directly.
              </p>
              <ResponseBlock>{`{
  "expiresAt": "string",
  "url": "string"
}`}</ResponseBlock>
            </div>

            {/* Lock card */}
            <div id="lock-card" className="space-y-4">
              <div className="flex items-center gap-3">
                <PutBadge />
                <code className="text-sm font-mono">/cards/lock-virtual-card/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Lock card</h3>
              <p className="text-muted-foreground leading-relaxed">
                No required body. Responds with a success message if the card status was changed.
              </p>
              <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            {/* Unlock card */}
            <div id="unlock-card" className="space-y-4">
              <div className="flex items-center gap-3">
                <PutBadge />
                <code className="text-sm font-mono">/cards/unlock-virtual-card/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Unlock card</h3>
              <p className="text-muted-foreground leading-relaxed">
                No required body. Responds with a success message if the card status was changed.
              </p>
              <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            {/* Terminate card */}
            <div id="terminate-card" className="space-y-4">
              <div className="flex items-center gap-3">
                <PutBadge />
                <code className="text-sm font-mono">/cards/terminate-virtual-card/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Terminate card</h3>
              <p className="text-muted-foreground leading-relaxed">
                No required body. Permanently closes the card — this action cannot be undone.
              </p>
              <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            {/* Set limit */}
            <div id="set-limit" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/cards/set-virtual-card-limit/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Set limit</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responds with a success message if the card limit update was requested successfully.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="type" type="string" required>
                    Limit type: <code className="bg-muted px-1 rounded text-xs">DAILY</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">MONTHLY</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">WEEKLY</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">UNLIMITED</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">FIXED</code>
                  </Param>
                  <Param name="amount" type="integer" required>Limit value to set</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "message": "Limit was requested successfully.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            {/* Add cardholder */}
            <div id="add-cardholder" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/cards/add-cardholder</code>
              </div>
              <h3 className="text-2xl font-semibold">Add cardholder</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creates and validates a new cardholder. The cardholder must be verified before a card can be
                activated.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="firstName" type="string" required>First name</Param>
                  <Param name="lastName" type="string" required>Last name</Param>
                  <Param name="middleName" type="string" required>Middle name</Param>
                  <Param name="email" type="string" required>Email address</Param>
                  <Param name="phoneNumber" type="string" required>Phone number</Param>
                  <Param name="dob" type="string" required>Date of birth (e.g. 1990-03-15)</Param>
                  <Param name="address" type="object" required>
                    Physical address:{" "}
                    <code className="bg-muted px-1 rounded text-xs">addressLine1</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">addressLine2</code> (optional){" "}
                    <code className="bg-muted px-1 rounded text-xs">city</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">countryISOCode</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">fullAddress</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">postalCode</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">region</code>
                  </Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "id": "string",
  "message": "The cardholder data has been successfully submitted.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            {/* Get cardholder */}
            <div id="get-cardholder" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/cards/get-cardholder/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Get cardholder</h3>
              <p className="text-muted-foreground leading-relaxed">
                Responds with cardholder information.
              </p>
              <ResponseBlock>{`{
  "city": "string",
  "email": "string",
  "firstName": "string",
  "fullAddress": "string",
  "lastName": "string",
  "middleName": "string",
  "phoneNumber": "string",
  "status": "Approved"
}`}</ResponseBlock>
            </div>
          </div>

          <Separator />

          {/* Transactions */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Transactions</h2>

            {/* Get card transactions */}
            <div id="get-card-transactions" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/transactions/card-transactions/:ledgerAccountId</code>
              </div>
              <h3 className="text-2xl font-semibold">Get card transactions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns card transactions list with tx IDs, card IDs, names, amounts, etc.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Path Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
                </div>
                <h4 className="text-lg font-semibold">Query Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="from" type="integer (unix timestamp)">Start timestamp</Param>
                  <Param name="to" type="integer (unix timestamp)">End timestamp</Param>
                  <Param name="accountName" type="string">Filter by account name</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "transactions": [${TRANSACTION_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}]
}`}</ResponseBlock>
            </div>

            {/* Get transactions */}
            <div id="get-transactions" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/transactions/transactions/:ledgerAccountId</code>
              </div>
              <h3 className="text-2xl font-semibold">Get transactions by account</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns transactions list for the specified account.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Path Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
                </div>
                <h4 className="text-lg font-semibold">Query Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="from" type="integer (unix timestamp)">Start timestamp</Param>
                  <Param name="to" type="integer (unix timestamp)">End timestamp</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "payload": {
    "transactions": [${TRANSACTION_OBJECT.split("\n").map(l => "      " + l).join("\n").trimStart()}]
  }
}`}</ResponseBlock>
            </div>

            {/* Get master transactions */}
            <div id="get-master-transactions" className="space-y-4">
              <div className="flex items-center gap-3">
                <GetBadge />
                <code className="text-sm font-mono">/transactions/master-transactions/:ledgerAccountId</code>
              </div>
              <h3 className="text-2xl font-semibold">Get master account transactions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Returns transactions list for the specified master account.
              </p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Path Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="ledgerAccountId" type="string" required>Ledger ID of the master account</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "payload": {
    "transactions": [${TRANSACTION_OBJECT.split("\n").map(l => "      " + l).join("\n").trimStart()}]
  }
}`}</ResponseBlock>
            </div>

            {/* Add note */}
            <div id="add-note-to-tx" className="space-y-4">
              <div className="flex items-center gap-3">
                <PostBadge />
                <code className="text-sm font-mono">/transactions/note/:id</code>
              </div>
              <h3 className="text-2xl font-semibold">Add note to transaction</h3>
              <p className="text-muted-foreground leading-relaxed">Attach a note message to a transaction.</p>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Body Parameters</h4>
                <div className="space-y-4 border-l-2 border-border pl-4">
                  <Param name="note" type="string" required>Attachment message for the transaction</Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "payload": {
    "fileName": "string",
    "fileURL": "string",
    "note": "string",
    "originalFileName": "string"
  }
}`}</ResponseBlock>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
