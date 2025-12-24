import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle } from "lucide-react"

export function DocsContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">
        <div className="space-y-8">
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
          </div>

          <Separator />

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Basic Requirements</h2>

              <div className="space-y-6">
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
                          name
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
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Integration</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Authentication</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All requests should include the <code className="bg-muted px-1 py-0.5 rounded">External-Token</code>{" "}
                    header for authentication and{" "}
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
              </div>

              <div className="mt-6 flex gap-3 rounded-lg border border-orange-500/20 bg-orange-500/10 p-4">
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
          </div>

          <Separator />

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Accounts</h2>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/accounts/accounts/:currency</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get a list of all accounts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currency (EUR, USD...) as path param. The response includes sub-accounts and the master-account in
                    the requested currency. Account's data should contain ID, name, balance info, etc.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/accounts/bank-accounts</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get a list of bank accounts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The response includes bank accounts list for specific currencies with ledger IDs and balances.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      POST
                    </Badge>
                    <code className="text-sm font-mono">/accounts/account</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Create account</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Responds with the new account name and ID if creation succeeded.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">accountName</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Name of the new account</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">LedgerBankAccountID</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">
                          Account bank ID could be pulled from the bank accounts list
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/accounts/ledger-accounts/:ledgerId</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get a list of ledger accounts</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ledger bank account ID from list of bank accounts as ledgerId path param. Responds with the list of
                    master, sub accounts with ledgerIDs as id.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      POST
                    </Badge>
                    <code className="text-sm font-mono">/accounts/accounts-transfer</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Transfer money between accounts</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ledger IDs could be received from ledger accounts route. Responds with a success message if the
                    money was transferred.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">amount</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">float</p>
                        <p className="mt-2 text-sm leading-relaxed">Transfer amount</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">accountId</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Transfer to ledger id</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">sourceAccountId</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Transfer from ledger id</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">currencyISONum</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Currency special numeric code</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cards</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most card routes require a card ID as a path parameter. ID could be received from the list of cards or
                the card info routes.
              </p>

              <div className="p-4 bg-muted/50 rounded-lg border border-border mb-6">
                <h4 className="text-base font-semibold mb-3">Card Status</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">NEW</code>
                    <span className="ml-2 text-muted-foreground">
                      - The card was created, but not activated (was not attached to a verified cardholder), most
                      operations are not available for the card in this status.
                    </span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">PENDING</code>
                    <span className="ml-2 text-muted-foreground">
                      - Internal transitive status when we could not get a response from the provider on the card
                      creation request.
                    </span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">DEFAULT</code>
                    <span className="ml-2 text-muted-foreground">
                      - Common status for an activated card that is ready to be used, card limit can be requested for
                      the card, can be locked, unlocked or terminated.
                    </span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">CANCELLED_BY_ADMIN</code>
                    <span className="ml-2 text-muted-foreground">
                      - The card creation was manually cancelled, the most common case of getting this status by card is
                      when the card was not activated for 24 hours.
                    </span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">EXPIRED</code>
                    <span className="ml-2 text-muted-foreground">- The card reached its expiry date.</span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">TERMINATED</code>
                    <span className="ml-2 text-muted-foreground">- The card was deleted.</span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">LOCKED</code>
                    <span className="ml-2 text-muted-foreground">
                      - Transitive status between DEFAULT and SUSPENDED when card lock is requested.
                    </span>
                  </div>
                  <div>
                    <code className="bg-background px-2 py-1 rounded text-xs font-mono">SUSPENDED</code>
                    <span className="ml-2 text-muted-foreground">- The card was locked (freezed) by the provider.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      POST
                    </Badge>
                    <code className="text-sm font-mono">/cards/card</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Create card</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Responds with a success message if the card was created.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">accountId</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">
                          Card will be created on the account with the given ID
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">email</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Cardholder email</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">cardName</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Custom name for card</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/cards/card/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get card</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Returns card object with name, id, currency, account info, etc.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/cards/cards</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get all cards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Returns a list of card objects with IDs, names, accounts, currencies info, etc.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/cards/card-details/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get card details</h3>
                  <p className="text-muted-foreground leading-relaxed">Returns card financial details.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                    >
                      PUT
                    </Badge>
                    <code className="text-sm font-mono">/cards/lock-virtual-card/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Lock card</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No required body. Responds with a success message if the card's status was changed.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                    >
                      PUT
                    </Badge>
                    <code className="text-sm font-mono">/cards/unlock-virtual-card/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Unlock card</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No required body. Responds with a success message if the card's status was changed.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
                    >
                      PUT
                    </Badge>
                    <code className="text-sm font-mono">/cards/terminate-virtual-card/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Terminate card</h3>
                  <p className="text-muted-foreground leading-relaxed">No required body.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      POST
                    </Badge>
                    <code className="text-sm font-mono">/cards/set-virtual-card-limit/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Set limit</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Responds with a success message if the card limit update was requested successfully.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">type</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">
                          Limit type: "DAILY", "MONTHLY", "WEEKLY", "UNLIMITED", "FIXED"
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">amount</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">integer</p>
                        <p className="mt-2 text-sm leading-relaxed">Limit value to set</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Transactions</h2>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/transactions/card-transactions</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get all cards tx list</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Returns card transactions list with tx IDs, card IDs, names, amounts, etc.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Query Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">from</code>
                          <Badge variant="outline" className="text-xs">
                            optional
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">integer (unix timestamp)</p>
                        <p className="mt-2 text-sm leading-relaxed">Start timestamp</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">to</code>
                          <Badge variant="outline" className="text-xs">
                            optional
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">integer (unix timestamp)</p>
                        <p className="mt-2 text-sm leading-relaxed">End timestamp</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">accountName</code>
                          <Badge variant="outline" className="text-xs">
                            optional
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Get for specific account</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/transactions/transactions/:accountId</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get transactions by account</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">Returns transactions list by account id.</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Path Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">accountId</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Ledger id of account to show transactions list</p>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold mt-4">Query Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">from</code>
                          <Badge variant="outline" className="text-xs">
                            optional
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">integer (unix timestamp)</p>
                        <p className="mt-2 text-sm leading-relaxed">Start timestamp</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">to</code>
                          <Badge variant="outline" className="text-xs">
                            optional
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">integer (unix timestamp)</p>
                        <p className="mt-2 text-sm leading-relaxed">End timestamp</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/transactions/transaction/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get tx details by id</h3>
                  <p className="text-muted-foreground leading-relaxed">Returns detailed transaction information.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    >
                      GET
                    </Badge>
                    <code className="text-sm font-mono">/transactions/transaction-status/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Get tx status</h3>
                  <p className="text-muted-foreground leading-relaxed">Returns the current status of a transaction.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                    >
                      POST
                    </Badge>
                    <code className="text-sm font-mono">/transactions/note/:id</code>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Add note to tx</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">Attach a note message to a transaction.</p>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Parameters</h4>
                    <div className="space-y-4 border-l-2 border-border pl-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <code className="text-sm font-mono text-primary">note</code>
                          <Badge variant="secondary" className="text-xs">
                            required
                          </Badge>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">string</p>
                        <p className="mt-2 text-sm leading-relaxed">Attachment message for transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
