import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle } from "lucide-react"
import { ResponseBlock } from "@/components/response-block"
import { RegionOnly } from "@/components/region"

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

function ScopeBadge({ scope }: { scope: string }) {
  return (
    <RegionOnly region="us">
      <span className="inline-flex items-center gap-1 rounded border border-violet-500/30 bg-violet-500/10 px-2 py-0.5 text-xs font-mono text-violet-700 dark:text-violet-300">
        <span className="opacity-70">scope:</span> {scope}
      </span>
    </RegionOnly>
  )
}

function EnumValues({ name, values }: { name?: string; values: [string, string][] }) {
  return (
    <div className="space-y-1.5 text-sm">
      {name && <p className="font-medium">{name}</p>}
      {values.map(([value, desc]) => (
        <div key={value}>
          <code className="bg-muted px-2 py-0.5 rounded text-xs font-mono">{value}</code>
          <span className="ml-2 text-muted-foreground">— {desc}</span>
        </div>
      ))}
    </div>
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
    <div className="rounded-lg border border-border p-3 bg-background">
      <div className="flex items-center gap-2 flex-wrap">
        <code className="text-sm font-mono text-primary">{name}</code>
        <span className="text-xs text-muted-foreground font-mono">{type}</span>
        <Badge variant={required ? "secondary" : "outline"} className="text-xs ml-auto">
          {required ? "required" : "optional"}
        </Badge>
      </div>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

const CARD_OBJECT = `{
  "accountFreeBalance": 12500.5,
  "accountName": "Marketing",
  "availableToSpend": 750,
  "cardHolder": {
    "email": "john.doe@example.com",
    "fullName": "John Doe",
    "id": "string",
    "logoUrl": "string"
  },
  "cardLast4": "4242",
  "cardName": "Marketing Card",
  "cardType": "VIRTUAL",
  "currencyISOCode": "EUR",
  "deliveryStatus": "string",
  "id": "string",
  "issuedAt": "string",
  "ledgerAccountId": "string",
  "limit": {
    "activatedAt": "string",
    "affectedFrom": "string",
    "amount": 1000,
    "currencyISOCode": "EUR",
    "deleteRequested": false,
    "externalId": 0,
    "id": "string",
    "periodEnd": "string",
    "periodStart": "string",
    "spentAmount": 250,
    "type": "MONTHLY"
  },
  "onboardingStatus": "string",
  "pendingLimit": {
    "activatedAt": "string",
    "affectedFrom": "string",
    "amount": 2000,
    "currencyISOCode": "EUR",
    "deleteRequested": false,
    "externalId": 0,
    "id": "string",
    "periodEnd": "string",
    "periodStart": "string",
    "spentAmount": 0,
    "type": "MONTHLY"
  },
  "status": "DEFAULT",
  "userPinSet": true
}`

const CARD_TRANSACTION_OBJECT = `{
  "account_id": "6f1c2a9e-3b4d-4e8f-9a1b-2c3d4e5f6a7b",
  "amount": 42.5,
  "attachment": {
    "fileName": "c1d2e3f4-receipt.pdf",
    "fileURL": "https://files.spendbase.co/attachments/c1d2e3f4-receipt.pdf",
    "note": "Q3 ads campaign",
    "originalFileName": "receipt.pdf"
  },
  "cardRef": "8d3e5a7c-1f2b-4c6d-9e0a-b1c2d3e4f5a6",
  "category": 5,
  "createdAt": 1754041210,
  "currencyISOCode": "USD",
  "details": {
    "accountName": "Marketing",
    "cardName": "Ads card",
    "cardholderName": "Jane Doe",
    "externalTransactionId": "f0e1d2c3-b4a5-4968-8776-a5b4c3d2e1f0",
    "hasAttachment": true,
    "mcc": "7311",
    "merchantAmount": 42.5,
    "merchantCategory": "Advertising Services",
    "merchantCurrencyISOCode": "USD",
    "merchantLogoUrl": "https://logo.clearbit.com/google.com",
    "merchantName": "Google Ads",
    "merchantOriginalName": "GOOGLE *ADS4471",
    "panLastFour": "4242"
  },
  "entry_id": "0b9c8d7e-6f5a-4b3c-2d1e-0f9a8b7c6d5e",
  "eventType": "Undefined",
  "id": "3a4b5c6d-7e8f-4091-a2b3-c4d5e6f7a8b9",
  "paymentType": "POS",
  "ref": "TX-20250801-000123",
  "sourceType": "Card",
  "state": "Confirmed",
  "type": "debit",
  "updatedAt": 1754041275,
  "cardId": "8d3e5a7c-1f2b-4c6d-9e0a-b1c2d3e4f5a6"
}`

const BANK_TRANSACTION_OBJECT = `{
  "account_id": "6f1c2a9e-3b4d-4e8f-9a1b-2c3d4e5f6a7b",
  "amount": 1500,
  "createdAt": 1753950000,
  "currencyISOCode": "USD",
  "details": {
    "accountName": "Marketing",
    "receiverName": "Marketing",
    "reference": "Monthly budget top-up",
    "senderName": "Master Account"
  },
  "entry_id": "1c2d3e4f-5a6b-4c7d-8e9f-0a1b2c3d4e5f",
  "eventType": "Undefined",
  "id": "9f8e7d6c-5b4a-4392-8170-6f5e4d3c2b1a",
  "ref": "TX-20250731-000087",
  "sourceType": "Internal",
  "state": "Confirmed",
  "type": "credit",
  "updatedAt": 1753950004
}`

const indentJson = (json: string, pad: string) =>
  json.split("\n").map(l => pad + l).join("\n").trimStart()

const LEDGER_ACCOUNT_OBJECT = `{
  "cardCount": 3,
  "createdAt": 1717430400,
  "credit": true,
  "currencyISOCode": "EUR",
  "freeBalance": 1250.5,
  "id": "string",
  "multicurrency": false,
  "name": "Marketing",
  "pendingBalance": 49.5,
  "ref": "string",
  "state": "active",
  "step": "string",
  "totalBalance": 1300,
  "type": "sub",
  "updatedAt": 1717430400
}`

const BANK_ACCOUNT_OBJECT = `{
  "createdAt": 1717430400,
  "credit": true,
  "currencyISOCode": "EUR",
  "freeBalance": 15000,
  "id": "string",
  "multicurrency": false,
  "name": "EUR bank account",
  "pendingBalance": 0,
  "ref": "string",
  "state": "active",
  "step": "string",
  "totalBalance": 15000,
  "type": "bank",
  "updatedAt": 1717430400
}`

export function GettingStartedContent() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Hero */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-balance">Spendbase Integration API</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Connect your applications to Spendbase for managing accounts, virtual cards, and transactions
            programmatically with{" "}
            <RegionOnly region="us">API key + Ed25519 signature authentication and TLS certificate authentication.</RegionOnly>
            <RegionOnly region="eu">secure TLS certificate authentication.</RegionOnly>
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
                <p className="mt-2 text-sm text-muted-foreground">You&apos;ll be prompted for some fields:</p>
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
                  We&apos;ll sign your CSR with our CA and return a certificate (
                  <code className="bg-muted px-1 py-0.5 rounded">client.crt</code>), which you&apos;ll use along with{" "}
                  <code className="bg-muted px-1 py-0.5 rounded">client.key</code> to connect securely.
                </p>
              </div>
            </div>
          </div>

          <RegionOnly region="us">
            <div>
              <h3 className="text-xl font-semibold mb-3">3. Create an API Key</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                API keys are used to authenticate all requests. To create one:
              </p>
              <ol className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground shrink-0">1.</span>
                  Log in to{" "}
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">app.spendbase.co</code>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground shrink-0">2.</span>
                  Navigate to <strong>Money</strong> → <strong>Settings</strong> → <strong>API Keys</strong>
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground shrink-0">3.</span>
                  Click <strong>Create API Key</strong>, choose scopes, and save your key
                </li>
                <li className="flex gap-2">
                  <span className="font-semibold text-foreground shrink-0">4.</span>
                  Generate an Ed25519 key pair and register the public key with the API key
                </li>
              </ol>
              <div className="mt-4 p-3 rounded-lg border border-amber-500/20 bg-amber-500/10">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  The API key secret is shown only once at creation. Store it securely — it cannot be retrieved again.
                </p>
              </div>
            </div>
          </RegionOnly>
          <RegionOnly region="eu">
            <div>
              <h3 className="text-xl font-semibold mb-3">3. External Token</h3>
              <p className="text-muted-foreground leading-relaxed">
                An external token is required for API authentication. We will provide the external token in reply to
                the email.
              </p>
            </div>
          </RegionOnly>
        </div>

        <Separator />

        {/* Auth & TLS */}
        <div id="authentication-tls" className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Integration</h2>

          <RegionOnly region="us">
            <div>
              <h3 className="text-xl font-semibold mb-3">Authentication</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every request must be signed with your Ed25519 private key. Include these headers:
              </p>
              <div className="p-4 bg-muted rounded-lg border border-border space-y-1.5">
                <div><code className="text-sm font-mono text-primary">X-Api-Key</code><span className="text-sm text-muted-foreground ml-2">— your issued API key, e.g. <code className="bg-background px-1 rounded">api_&lt;hex&gt;</code></span></div>
                <div><code className="text-sm font-mono text-primary">X-Signature</code><span className="text-sm text-muted-foreground ml-2">— base64-encoded Ed25519 signature over the canonical string</span></div>
                <div><code className="text-sm font-mono text-primary">X-Timestamp</code><span className="text-sm text-muted-foreground ml-2">— Unix timestamp in milliseconds</span></div>
                <div><code className="text-sm font-mono text-primary">X-Nonce</code><span className="text-sm text-muted-foreground ml-2">— unique value per request (e.g. UUID v4). Reusing returns <code className="bg-background px-1 rounded text-xs">401</code></span></div>
                <div><code className="text-sm font-mono text-primary">Content-Type: application/json</code><span className="text-sm text-muted-foreground ml-2">— required when request has a body</span></div>
              </div>

              <h4 className="text-base font-semibold mt-5 mb-2">String to Sign</h4>
              <p className="text-sm text-muted-foreground mb-2">Build the exact string then sign it with Ed25519:</p>
              <div className="p-4 bg-muted rounded-lg border border-border font-mono text-xs leading-relaxed">
                HTTP_METHOD + &quot;\n&quot; +<br/>
                REQUEST_PATH + &quot;\n&quot; +<br/>
                CANONICAL_QUERY_STRING + &quot;\n&quot; +<br/>
                SHA256_HEX(BODY) + &quot;\n&quot; +<br/>
                X_TIMESTAMP + &quot;\n&quot; +<br/>
                X_NONCE
              </div>
              <ul className="mt-3 text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">HTTP_METHOD</code>: uppercase, e.g. <code className="bg-muted px-1 py-0.5 rounded">GET</code>, <code className="bg-muted px-1 py-0.5 rounded">POST</code></li>
                <li><code className="bg-muted px-1 py-0.5 rounded">REQUEST_PATH</code>: full path including base, e.g. <code className="bg-muted px-1 py-0.5 rounded">/cards-adapter/v1/public/accounts/bank-accounts</code></li>
                <li><code className="bg-muted px-1 py-0.5 rounded">CANONICAL_QUERY_STRING</code>: keys sorted lexicographically, values URL-escaped, joined as <code className="bg-muted px-1 py-0.5 rounded">key=value&amp;key=value</code>. Empty when no query.</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">SHA256_HEX(BODY)</code>: hex-encoded SHA-256 of raw body bytes. Empty body: <code className="bg-muted px-1 py-0.5 rounded text-xs">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</code></li>
              </ul>
            </div>
          </RegionOnly>
          <RegionOnly region="eu">
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
          </RegionOnly>

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
                <RegionOnly region="us">Keep your credentials secure</RegionOnly>
                <RegionOnly region="eu">Keep your certificates and tokens secure</RegionOnly>
              </p>
              <p className="mt-1 text-sm text-orange-800 dark:text-orange-200">
                <RegionOnly region="us">
                  Do not share your private key (<code className="bg-orange-100 dark:bg-orange-900/50 px-1 rounded">client.key</code>), Ed25519 private key, or API key in publicly accessible areas such as
                  GitHub, client-side code, or any other public spaces.
                </RegionOnly>
                <RegionOnly region="eu">
                  Do not share your private key (client.key) or external token in publicly accessible areas such as
                  GitHub, client-side code, or any other public spaces.
                </RegionOnly>
              </p>
            </div>
          </div>
        </div>

        <RegionOnly region="us">
          <Separator />

          {/* Go signing example */}
          <div id="go-signing-example" className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Go Signing Example</h2>
            <p className="text-muted-foreground leading-relaxed">
              Full working example that builds the canonical string, signs it with Ed25519, and sends a signed request.
              This mirrors{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">integration/apikeys/helpers_test.go</code>.
            </p>
            <ResponseBlock status="Go">{`package main

import (
    "bytes"
    "crypto/ed25519"
    "crypto/rand"
    "crypto/sha256"
    "encoding/base64"
    "encoding/hex"
    "fmt"
    "io"
    "net/http"
    "net/url"
    "sort"
    "strconv"
    "strings"
    "time"

    "github.com/google/uuid"
)

func buildStringToSign(method, path, rawQuery string, body []byte, timestamp, nonce string) string {
    values, _ := url.ParseQuery(rawQuery)
    keys := make([]string, 0, len(values))
    for k := range values {
        keys = append(keys, k)
    }
    sort.Strings(keys)

    parts := make([]string, 0, len(values))
    for _, k := range keys {
        vals := values[k]
        sort.Strings(vals)
        for _, v := range vals {
            parts = append(parts, url.QueryEscape(k)+"="+url.QueryEscape(v))
        }
    }

    h := sha256.Sum256(body)
    return fmt.Sprintf("%s\\n%s\\n%s\\n%s\\n%s\\n%s",
        method,
        path,
        strings.Join(parts, "&"),
        hex.EncodeToString(h[:]),
        timestamp,
        nonce,
    )
}

func signedRequest(baseURL, apiKey string, privateKey ed25519.PrivateKey, method, routePath string, body []byte) (*http.Request, error) {
    base, err := url.Parse(baseURL)
    if err != nil {
        return nil, err
    }

    pathOnly, rawQuery, _ := strings.Cut(routePath, "?")
    signPath := strings.TrimRight(base.Path, "/") + pathOnly
    timestamp := strconv.FormatInt(time.Now().UnixMilli(), 10)
    nonce := uuid.NewString()

    sts := buildStringToSign(method, signPath, rawQuery, body, timestamp, nonce)
    signature := base64.StdEncoding.EncodeToString(ed25519.Sign(privateKey, []byte(sts)))

    var r io.Reader
    if body != nil {
        r = bytes.NewReader(body)
    }
    req, err := http.NewRequest(method, strings.TrimRight(baseURL, "/")+routePath, r)
    if err != nil {
        return nil, err
    }
    if body != nil {
        req.Header.Set("Content-Type", "application/json")
    }
    req.Header.Set("X-Api-Key", apiKey)
    req.Header.Set("X-Signature", signature)
    req.Header.Set("X-Timestamp", timestamp)
    req.Header.Set("X-Nonce", nonce)
    return req, nil
}

func example() error {
    publicKey, privateKey, err := ed25519.GenerateKey(rand.Reader)
    if err != nil {
        return err
    }
    _ = publicKey // register this public key when creating your API key

    req, err := signedRequest(
        "https://gw.dev.spendbase.co/cards-adapter/v1",
        "api_<hex>",
        privateKey,
        "GET",
        "/public/accounts/bank-accounts",
        nil,
    )
    if err != nil {
        return err
    }

    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()
    return nil
}`}</ResponseBlock>
          </div>
        </RegionOnly>
      </div>
    </main>
  )
}

export function AccountsContent() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Accounts</h1>

          <RegionOnly region="eu">
            {/* Get accounts by currency */}
            <div id="get-accounts-by-currency" className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <GetBadge />
                <code className="text-sm font-mono">/accounts/accounts/:currency</code>
              </div>
              <ScopeBadge scope="accountsRead" />
              <h2 className="text-2xl font-semibold">Get a list of all accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                Currency (EUR, USD…) as path param. The response includes sub-accounts and the master-account in
                the requested currency. Account data contains ID, name, balance info, etc.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Path Parameters</h3>
                <div className="space-y-2">
                  <Param name="currency" type="string" required>ISO 4217 alphabetic currency code, e.g. EUR</Param>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 space-y-4">
                <EnumValues
                  name="tribeAccountStatus — account status at the card provider"
                  values={[
                    ["A", "Active. The account is open and can be used."],
                    ["B", "Blocked. Operations on the account are blocked."],
                    ["P", "Pending. The account is being opened at the provider."],
                    ["R", "Rejected. The provider declined to open the account."],
                    ["S", "Suspended. The account is temporarily suspended by the provider."],
                  ]}
                />
                <EnumValues
                  name="tribeCreationStatus — result of creating the account at the provider"
                  values={[
                    ["SUCCESS", "The account was created at the provider."],
                    ["PENDING", "Creation was requested and is waiting for the provider to confirm."],
                    ["ERROR", "The provider failed to create the account."],
                    ["UNKNOWN", "The creation result could not be determined."],
                  ]}
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <code className="bg-muted px-1 py-0.5 rounded text-xs">availableBalance</code> is omitted when unknown.
              </p>
              <ResponseBlock>{`{
  "masterAccounts": [
    {
      "availableBalance": 15000,
      "createRequestBody": {
        "accountName": "string",
        "holderId": 0,
        "requestReferenceId": "string",
        "spendbaseTeamId": "string",
        "spendbaseUserId": "string"
      },
      "createResponseBody": {
        "holder_id": 0,
        "id": 0
      },
      "id": "string",
      "spendbaseTeamId": "string",
      "spendbaseUserId": "string",
      "tribeAccountCurrencyISONum": "978",
      "tribeAccountId": 0,
      "tribeAccountRequestReferenceId": "string",
      "tribeAccountStatus": "A",
      "tribeCreationStatus": "SUCCESS",
      "tribeHolderId": 0
    }
  ],
  "subAccounts": [
    {
      "accountName": "Marketing",
      "availableBalance": 1250.5,
      "createRequestBody": {
        "accountName": "Marketing",
        "holderId": 0,
        "requestReferenceId": "string",
        "spendbaseTeamId": "string",
        "spendbaseUserId": "string"
      },
      "createResponseBody": {
        "holder_id": 0,
        "id": 0
      },
      "id": "string",
      "spendbaseTeamId": "string",
      "spendbaseUserId": "string",
      "tribeAccountCurrencyISONum": "978",
      "tribeAccountId": 0,
      "tribeAccountRequestReferenceId": "string",
      "tribeAccountStatus": "A",
      "tribeCreationStatus": "SUCCESS",
      "tribeHolderId": 0
    }
  ]
}`}</ResponseBlock>
            </div>

            <Separator />
          </RegionOnly>

          {/* Get bank accounts */}
          <div id="get-bank-accounts" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/accounts/bank-accounts</code>
            </div>
            <ScopeBadge scope="accountsRead" />
            <h2 className="text-2xl font-semibold">Get a list of bank accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              The response is a JSON array of bank accounts (one per currency) with ledger IDs and balances.
              The <code className="bg-muted px-1 py-0.5 rounded text-xs">id</code> of each entry is the{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">ledgerId</code> /{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">ledgerBankAccountId</code> used by the other
              account routes. Fields with zero/empty values may be omitted.
            </p>
            <ResponseBlock>{`[${BANK_ACCOUNT_OBJECT.split("\n").map(l => "  " + l).join("\n").trimStart()}
]`}</ResponseBlock>
          </div>

          <Separator />

          {/* Create account */}
          <div id="create-account" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PostBadge />
              <code className="text-sm font-mono">/accounts/account</code>
            </div>
            <ScopeBadge scope="accountsWrite" />
            <h2 className="text-2xl font-semibold">Create account</h2>
            <p className="text-muted-foreground leading-relaxed">
              Responds with the new account name, ID and ledger ID if creation succeeded.{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">accountLedgerId</code> is the ledger ID of the
              created account (use it for transfers and the get-account-by-ID route); it is an empty string if the
              account could not be found in the ledger right after creation.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="accountName" type="string" required>Name of the new account</Param>
                <Param name="ledgerBankAccountId" type="string" required>
                  Ledger bank account ID — the <code className="bg-muted px-1 py-0.5 rounded text-xs">id</code> from
                  the bank accounts list. Must be non-empty.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "accountLedgerId": "string",
  "accountName": "Marketing",
  "id": "string",
  "ledgerAccountId": "string"
}`}</ResponseBlock>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="text-sm font-medium">400 Bad Request</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">ledgerBankAccountId is required</code> — field missing or empty</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">accountName in body is required</code> — field missing</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">invalid request body</code> — body is not valid JSON</li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Get ledger accounts */}
          <div id="get-ledger-accounts" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/accounts/ledger-accounts/:ledgerId</code>
            </div>
            <ScopeBadge scope="accountsRead" />
            <h2 className="text-2xl font-semibold">Get a list of ledger accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ledger bank account ID from list of bank accounts as{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">ledgerId</code> path param.
              Responds with the bank account and its master and sub accounts with ledger IDs and card counts.
              The{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">ref</code> of a sub account is the account{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">id</code> returned by create account.
            </p>
            <div className="rounded-lg border border-border bg-card p-4 space-y-4">
              <EnumValues
                name="type"
                values={[
                  ["bank", "Top-level bank account for one currency. Holds the master and sub accounts."],
                  ["master", "Main account under the bank account. The default source of funds for sub accounts."],
                  ["sub", "Sub account created with Create account. Cards are issued on sub accounts."],
                  ["undefined", "The account type could not be determined."],
                ]}
              />
              <EnumValues
                name="state"
                values={[
                  ["active", "The account is open and can be used."],
                  ["inactive", "The account is not active yet or has been deactivated."],
                  ["locked", "The account is temporarily locked. Operations are blocked."],
                  ["suspended", "The account is suspended by the provider."],
                  ["closed", "The account is permanently closed."],
                  ["pending", "The account is being created."],
                ]}
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerId" type="string" required>Ledger bank account ID</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "bankAccount": ${BANK_ACCOUNT_OBJECT.split("\n").map(l => "  " + l).join("\n").trimStart()},
  "master_accounts": [${LEDGER_ACCOUNT_OBJECT.replace(`"name": "Marketing"`, `"name": "Main"`).replace(`"type": "sub"`, `"type": "master"`).split("\n").map(l => "    " + l).join("\n").trimStart()}],
  "sub_accounts": [${LEDGER_ACCOUNT_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}]
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Get account by ID */}
          <div id="get-account-by-id" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/accounts/ledger-account/:ledgerId/:id</code>
            </div>
            <ScopeBadge scope="accountsRead" />
            <h2 className="text-2xl font-semibold">Get account by ID</h2>
            <p className="text-muted-foreground leading-relaxed">Request specific account details by ID.</p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerId" type="string" required>Ledger bank account ID</Param>
                <Param name="id" type="string" required>
                  Ledger ID of the account — a master or sub account under <code className="bg-muted px-1 py-0.5 rounded text-xs">ledgerId</code>
                </Param>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fields with zero/empty values (e.g. <code className="bg-muted px-1 py-0.5 rounded text-xs">cardCount: 0</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">freeBalance: 0</code>,{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">credit: false</code>) are omitted from the response.
            </p>
            <ResponseBlock>{LEDGER_ACCOUNT_OBJECT}</ResponseBlock>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="text-sm font-medium">400 Bad Request</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">Account not found</code> — no master or sub account with this <code className="bg-muted px-1 py-0.5 rounded">id</code> under <code className="bg-muted px-1 py-0.5 rounded">ledgerId</code></li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Transfer money */}
          <div id="transfer-money" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PostBadge />
              <code className="text-sm font-mono">/accounts/accounts-transfer</code>
            </div>
            <ScopeBadge scope="internalTransfersWrite" />
            <h2 className="text-2xl font-semibold">Transfer money between accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ledger IDs can be received from the ledger accounts route. The request is validated before processing:
              currency and available balance on the source account are checked. Responds with a success message if the
              money was transferred.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="amount" type="float" required>Transfer amount</Param>
                <Param name="accountId" type="string" required>Transfer to ledger ID</Param>
                <Param name="sourceAccountId" type="string" required>Transfer from ledger ID</Param>
                <Param name="currencyISONum" type="string" required>ISO 4217 numeric currency code (e.g. 978 for EUR)</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "message": "string",
  "status": "string"
}`}</ResponseBlock>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="text-sm font-medium">400 Bad Request — pre-flight validation errors</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">invalid request params</code> — one of <code className="bg-muted px-1 py-0.5 rounded">amount</code>, <code className="bg-muted px-1 py-0.5 rounded">accountId</code>, <code className="bg-muted px-1 py-0.5 rounded">sourceAccountId</code>, <code className="bg-muted px-1 py-0.5 rounded">currencyISONum</code> is missing</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">unknown currency</code> — <code className="bg-muted px-1 py-0.5 rounded">currencyISONum</code> is not a recognized ISO 4217 currency</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">account with requested currency not found</code> — no bank account matches the requested currency</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">account not found</code> — <code className="bg-muted px-1 py-0.5 rounded">sourceAccountId</code> is not a master or sub account of the bank account in that currency</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">insufficient funds</code> — <code className="bg-muted px-1 py-0.5 rounded">amount</code> exceeds the source account&apos;s <code className="bg-muted px-1 py-0.5 rounded">freeBalance</code></li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Transfer with note */}
          <div id="transfer-with-note" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PostBadge />
              <code className="text-sm font-mono">/accounts/accounts-transfer-note</code>
            </div>
            <ScopeBadge scope="internalTransfersWrite" />
            <h2 className="text-2xl font-semibold">Transfer with note</h2>
            <p className="text-muted-foreground leading-relaxed">
              Same as transfer money (same pre-flight validation and 400 errors) but attaches the note to both the
              debit and the credit transaction of the transfer. The HTTP status mirrors the{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">code</code> field of the response.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="amount" type="float" required>Transfer amount</Param>
                <Param name="accountId" type="string" required>Transfer to ledger ID</Param>
                <Param name="sourceAccountId" type="string" required>Transfer from ledger ID</Param>
                <Param name="currencyISONum" type="string" required>ISO 4217 numeric currency code (e.g. 978 for EUR)</Param>
                <Param name="note" type="string">Note to attach to the debit and credit transactions</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "message": "Success",
  "status": "Transfer with note successful",
  "code": 200
}`}</ResponseBlock>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="text-sm font-medium">Failure responses (same body shape)</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">Transfer funds failed</code> — the transfer itself was rejected; <code className="bg-muted px-1 py-0.5 rounded">code</code>/<code className="bg-muted px-1 py-0.5 rounded">message</code> carry the upstream status and message, no money was moved</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">Transfer successful, but could not attach note to debit transaction</code> (or <code className="bg-muted px-1 py-0.5 rounded">credit</code>) — money was transferred but the note could not be attached; <code className="bg-muted px-1 py-0.5 rounded">code</code> is the upstream error status (500 if unknown)</li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Rename account */}
          <div id="rename-account" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PatchBadge />
              <code className="text-sm font-mono">/accounts/rename-account/:id</code>
            </div>
            <ScopeBadge scope="accountsWrite" />
            <h2 className="text-2xl font-semibold">Rename account</h2>
            <p className="text-muted-foreground leading-relaxed">
              Responds with the account ID, new name and ledger account ID.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="id" type="string" required>Account ID</Param>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="name" type="string" required>New account name</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "accountName": "New Account Name",
  "id": "string",
  "ledgerAccountId": "string"
}`}</ResponseBlock>
          </div>
        </div>
      </div>
    </main>
  )
}

export function CardsContent() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Cards</h1>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Most card routes require a card ID as a path parameter. ID can be received from the list of cards or
              the card info routes.
            </p>
          </div>

          {/* Card status overview */}
          <div id="card-status-overview" className="p-4 bg-muted/50 rounded-lg border border-border">
            <h3 className="text-base font-semibold mb-3">Card Status</h3>
            <EnumValues
              values={[
                ["NEW", "The card was created but not activated (not attached to a verified cardholder). Most operations are not available in this status."],
                ["PENDING", "Internal transitive status when we could not get a response from the provider on the card creation request."],
                ["DEFAULT", "Common status for an activated card that is ready to be used. Card limit can be set; card can be locked, unlocked, or terminated."],
                ["CANCELED_BY_ADMIN", "The card creation was manually cancelled. Most commonly occurs when the card was not activated for 24 hours."],
                ["EXPIRED", "The card reached its expiry date."],
                ["TERMINATED", "The card was deleted."],
                ["LOCKED", "Transitive status between DEFAULT and SUSPENDED when card lock is requested."],
                ["SUSPENDED", "The card was locked (frozen) by the provider."],
                ["LIMIT_EXCEED", "Unused."],
              ]}
            />
          </div>

          <Separator />

          {/* Create card */}
          <div id="create-card" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PostBadge />
              <code className="text-sm font-mono">/cards/card</code>
            </div>
            <ScopeBadge scope="cardsWrite" />
            <h2 className="text-2xl font-semibold">Create card</h2>
            <p className="text-muted-foreground leading-relaxed">
              Responds with the ID of the created card. <code className="bg-muted px-1 py-0.5 rounded text-xs">code</code>{" "}
              mirrors the HTTP status of the response and <code className="bg-muted px-1 py-0.5 rounded text-xs">message</code>{" "}
              holds the HTTP status line. On failure the same shape is returned with the error status in{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">code</code>, the error text in{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">message</code> and an empty{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">id</code>.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="accountId" type="string" required>Card will be created on the account with the given ID</Param>
                <Param name="cardName" type="string" required>Custom name for card</Param>
                <Param name="spendbaseUserId" type="string">Preferred cardholder identifier. Use this for all new requests.</Param>
                <Param name="email" type="string">Cardholder email — deprecated. Still accepted as a legacy fallback, but new integrations should send <code className="bg-muted px-1 py-0.5 rounded">spendbaseUserId</code> instead.</Param>
                <Param name="cardType" type="string">
                  <EnumValues
                    values={[
                      ["VIRTUAL", "Default. A virtual card for online payments and mobile wallets."],
                      ["PHYSICAL", "A plastic card shipped to the delivery address."],
                    ]}
                  />
                </Param>
                <Param name="expirationDate" type="string">Custom expiration date for the card</Param>
                <Param name="limit" type="object">
                  Initial card limit, same shape as the{" "}
                  <a href="#set-limit" className="underline">Set limit</a> body:{" "}
                  <code className="bg-muted px-1 rounded text-xs">type</code> (required),{" "}
                  <code className="bg-muted px-1 rounded text-xs">amount</code>
                </Param>
                <Param name="delivery" type="object">
                  Delivery address for physical cards:{" "}
                  <code className="bg-muted px-1 rounded text-xs">addressLine1</code>{" "}
                  <code className="bg-muted px-1 rounded text-xs">addressLine2</code> (optional){" "}
                  <code className="bg-muted px-1 rounded text-xs">city</code>{" "}
                  <code className="bg-muted px-1 rounded text-xs">countryIsoCode</code>{" "}
                  <code className="bg-muted px-1 rounded text-xs">state</code> (optional){" "}
                  <code className="bg-muted px-1 rounded text-xs">zipcode</code>
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "code": 200,
  "message": "200 OK",
  "id": "string"
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Get card */}
          <div id="get-card" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/card/:id</code>
            </div>
            <ScopeBadge scope="cardsRead" />
            <h2 className="text-2xl font-semibold">Get card</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns the card object (not wrapped) with name, ID, currency, account info, etc. Fields without a
              value are omitted from the response.
            </p>
            <ResponseBlock>{CARD_OBJECT}</ResponseBlock>
          </div>

          <Separator />

          {/* Get all cards */}
          <div id="get-all-cards" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/cards</code>
            </div>
            <ScopeBadge scope="cardsRead" />
            <h2 className="text-2xl font-semibold">Get all cards</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns a page of card objects with IDs, names, accounts, currencies info, etc.{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">cards</code> is always an array (empty when
              there are no results). Pass <code className="bg-muted px-1 py-0.5 rounded text-xs">nextCursor</code> as{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">cursor</code> to fetch the next page while{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs">hasMore</code> is true.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="space-y-2">
                <Param name="cursor" type="string">Cursor returned by the previous page (<code className="bg-muted px-1 rounded text-xs">nextCursor</code>). Max 512 characters, no control characters.</Param>
                <Param name="limit" type="integer">Maximum number of items to return, 0–1000. Defaults to 50 when omitted or 0. A non-integer or out-of-range value returns 400.</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "cards": [${CARD_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}],
  "hasMore": true,
  "nextCursor": "string",
  "totalCount": 120
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Get account cards */}
          <div id="get-account-cards" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/account-cards/:ledgerAccountId</code>
            </div>
            <ScopeBadge scope="cardsRead" />
            <h2 className="text-2xl font-semibold">Get account cards</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns a list of cards related to the account with the given ledger ID.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
              </div>
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="space-y-2">
                <Param name="cursor" type="string">Cursor returned by the previous page (<code className="bg-muted px-1 rounded text-xs">nextCursor</code>). Max 512 characters, no control characters.</Param>
                <Param name="limit" type="integer">Maximum number of items to return, 0–1000. Defaults to 50 when omitted or 0. A non-integer or out-of-range value returns 400.</Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "cards": [${CARD_OBJECT.split("\n").map(l => "    " + l).join("\n").trimStart()}],
  "hasMore": false,
  "nextCursor": "string",
  "totalCount": 3
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Get card details */}
          <div id="get-card-details" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/card-details/:id</code>
            </div>
            <ScopeBadge scope="cardDetailsRead" />
            <h2 className="text-2xl font-semibold">Get card details</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns card financial details including full card number, CVV and billing address.{" "}
              <span className="font-medium">Available for PCI DSS compliant providers only.</span>
            </p>
            <div className="flex items-start gap-2 rounded-lg border border-border bg-muted/50 p-3 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <p>
                PCI DSS compliance is checked before the card is fetched:{" "}
                <RegionOnly region="us">the team that owns the API key</RegionOnly>
                <RegionOnly region="eu">
                  the PCI DSS flag of the <code className="bg-muted px-1 py-0.5 rounded text-xs">External-Token</code>
                </RegionOnly>{" "}
                must be marked PCI DSS compliant, otherwise the endpoint returns{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">403</code> with{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">{`{"error": "Provider is not PCI DSS compliant and cannot access card details"}`}</code>.
                Non-compliant integrations should use <a href="#get-card-frame" className="underline">Get card frame</a> instead.
              </p>
            </div>
            <ResponseBlock>{`{
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
  "issuedAt": "string",
  "pin": "string",
  "userPinSet": true
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Get card frame */}
          <div id="get-card-frame" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/card-frame/:id</code>
            </div>
            <ScopeBadge scope="cardDetailsRead" />
            <h2 className="text-2xl font-semibold">Get card frame</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns a short-lived signed URL with card details and its expiration timestamp (RFC 3339). The URL
              expires 1 minute after it is issued. Use it to display card details in an iframe without handling
              sensitive data directly. Does not require PCI DSS compliance.
            </p>
            <ResponseBlock>{`{
  "url": "string",
  "expiresAt": "2025-01-15T10:31:00Z"
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Lock card */}
          <div id="lock-card" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PutBadge />
              <code className="text-sm font-mono">/cards/lock-virtual-card/:id</code>
            </div>
            <ScopeBadge scope="cardsWrite" />
            <h2 className="text-2xl font-semibold">Lock card</h2>
            <p className="text-muted-foreground leading-relaxed">
              No required body. Responds with a success message if the card status was changed.
            </p>
            <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Unlock card */}
          <div id="unlock-card" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PutBadge />
              <code className="text-sm font-mono">/cards/unlock-virtual-card/:id</code>
            </div>
            <ScopeBadge scope="cardsWrite" />
            <h2 className="text-2xl font-semibold">Unlock card</h2>
            <p className="text-muted-foreground leading-relaxed">
              No required body. Responds with a success message if the card status was changed.
            </p>
            <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Terminate card */}
          <div id="terminate-card" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PutBadge />
              <code className="text-sm font-mono">/cards/terminate-virtual-card/:id</code>
            </div>
            <ScopeBadge scope="cardsWrite" />
            <h2 className="text-2xl font-semibold">Terminate card</h2>
            <p className="text-muted-foreground leading-relaxed">
              No required body. Permanently closes the card — this action cannot be undone.
            </p>
            <ResponseBlock>{`{
  "message": "Card status was successfully changed.",
  "status": "Success"
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Set limit */}
          <div id="set-limit" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PutBadge />
              <code className="text-sm font-mono">/cards/set-virtual-card-limit/:id</code>
            </div>
            <ScopeBadge scope="cardsWrite" />
            <h2 className="text-2xl font-semibold">Set limit</h2>
            <p className="text-muted-foreground leading-relaxed">
              Responds with a success message if the card limit update was requested successfully.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="type" type="string" required>
                  <EnumValues
                    values={[
                      ["DAILY", "Spending cap that resets every day."],
                      ["WEEKLY", "Spending cap that resets every week."],
                      ["MONTHLY", "Spending cap that resets every month."],
                      ["FIXED", "Total spending cap for the card. It does not reset."],
                      ["UNLIMITED", "No spending cap. amount is not needed."],
                    ]}
                  />
                </Param>
                <Param name="amount" type="number">
                  Limit value to set (decimals allowed). Not needed for{" "}
                  <code className="bg-muted px-1 rounded text-xs">UNLIMITED</code>.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "message": "Limit was requested successfully.",
  "status": "Success"
}`}</ResponseBlock>
          </div>

          <Separator />

          <RegionOnly region="eu">
            {/* Add cardholder */}
            <div id="add-cardholder" className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <PostBadge />
                <code className="text-sm font-mono">/cards/add-cardholder</code>
              </div>
              <ScopeBadge scope="cardholdersWrite" />
              <h2 className="text-2xl font-semibold">Add cardholder</h2>
              <p className="text-muted-foreground leading-relaxed">
                Creates and validates a new cardholder. The cardholder must be verified before a card can be
                activated. If a user with this email already exists in your team it is reused; if the email belongs
                to a user outside your team the request fails with{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">409</code>{" "}
                (<code className="bg-muted px-1 py-0.5 rounded text-xs">user with this email already exists</code>).
                Invalid bodies return <code className="bg-muted px-1 py-0.5 rounded text-xs">400</code> with{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">{`{"error": "validation failed: ..."}`}</code>;
                errors from the card provider are returned with their original status and body.
              </p>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Body Parameters</h3>
                <div className="space-y-2">
                  <Param name="firstName" type="string" required>First name, max 50 characters</Param>
                  <Param name="lastName" type="string" required>Last name, max 50 characters</Param>
                  <Param name="middleName" type="string">Middle name, max 50 characters</Param>
                  <Param name="email" type="string" required>Valid email address, 6–256 characters. Lower-cased before validation.</Param>
                  <Param name="phoneNumber" type="string" required>
                    Phone number in E.164 format, e.g. <code className="bg-muted px-1 rounded text-xs">+15551234567</code>
                  </Param>
                  <Param name="dob" type="string" required>
                    Date of birth, <code className="bg-muted px-1 rounded text-xs">YYYY-MM-DD</code> (e.g. 1990-03-15).
                    Cardholder must be at least 18 years old.
                  </Param>
                  <Param name="address" type="object" required>
                    Physical address. Required:{" "}
                    <code className="bg-muted px-1 rounded text-xs">countryISOCode</code> (ISO 3166-1 alpha-2, exactly 2
                    chars),{" "}
                    <code className="bg-muted px-1 rounded text-xs">region</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">city</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">postalCode</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">addressLine1</code>. Optional:{" "}
                    <code className="bg-muted px-1 rounded text-xs">addressLine2</code>{" "}
                    <code className="bg-muted px-1 rounded text-xs">fullAddress</code>. Every text field is max 50
                    characters.
                  </Param>
                </div>
              </div>
              <ResponseBlock>{`{
  "id": "string",
  "message": "The cardholder data has been successfully submitted.",
  "status": "Success"
}`}</ResponseBlock>
            </div>

            <Separator />

            {/* Get cardholder */}
            <div id="get-cardholder" className="space-y-4">
              <div className="flex items-center gap-3 flex-wrap">
                <GetBadge />
                <code className="text-sm font-mono">/cards/get-cardholder/:id</code>
              </div>
              <ScopeBadge scope="cardholdersRead" />
              <h2 className="text-2xl font-semibold">Get cardholder</h2>
              <p className="text-muted-foreground leading-relaxed">
                Responds with cardholder information. Fields without a value are omitted;{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">status</code> is always present.
              </p>
              <div className="rounded-lg border border-border bg-card p-4">
                <EnumValues
                  name="status"
                  values={[
                    ["NotVerified", "The cardholder was created, but verification has not started."],
                    ["PendingVerification", "Verification is in progress."],
                    ["DocumentsNeeded", "More documents are needed to finish verification."],
                    ["VerificationFailed", "Verification could not be completed."],
                    ["Approved", "The cardholder is verified. Cards can be issued to them."],
                    ["Rejected", "Verification was rejected. Cards cannot be issued to them."],
                  ]}
                />
              </div>
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

            <Separator />
          </RegionOnly>

          {/* Get team cardholders */}
          <div id="get-team-cardholders" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/cards/cardholders</code>
            </div>
            <ScopeBadge scope="cardholdersRead" />
            <h2 className="text-2xl font-semibold">Get team cardholders</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns all cardholders belonging to the team. Team is resolved from the{" "}
              <RegionOnly region="us">authenticated API key</RegionOnly>
              <RegionOnly region="eu">
                <code className="bg-muted px-1 py-0.5 rounded text-xs">External-Token</code>
              </RegionOnly>
              . No path or query parameters.
            </p>
            <ResponseBlock>{`[
  {
    "id": "string",
    "user_id": "string",
    "team_id": "string",
    "first_name": "string",
    "middle_name": "string",
    "last_name": "string",
    "title": "string",
    "email": "string",
    "mobile": "string",
    "date_of_birth": "string",
    "address_line_1": "string",
    "address_line_2": "string",
    "city": "string",
    "region": "string",
    "state": "string",
    "country": "string",
    "post_code": "string",
    "provider_registered": true,
    "status": "approved"
  }
]`}</ResponseBlock>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <EnumValues
                name="status"
                values={[
                  ["unspecified", "The status is not set."],
                  ["not_verified", "The cardholder was created, but verification has not started."],
                  ["pending_verification", "Verification is in progress."],
                  ["documents_needed", "More documents are needed to finish verification."],
                  ["verification_failed", "Verification could not be completed."],
                  ["approved", "The cardholder is verified. Cards can be issued to them."],
                  ["rejected", "Verification was rejected. Cards cannot be issued to them."],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function TransactionFieldValues() {
  return (
    <div id="transaction-field-values" className="rounded-lg border border-border bg-card p-4 space-y-4">
      <h3 className="text-base font-semibold">Transaction field values</h3>
      <p className="text-sm text-muted-foreground">These values apply to the transaction objects returned by every Transactions endpoint.</p>
      <EnumValues
        name="type"
        values={[
          ["debit", "Money left the account."],
          ["credit", "Money came into the account."],
        ]}
      />
      <EnumValues
        name="sourceType"
        values={[
          ["Card", "Card transaction, such as a purchase, refund or ATM withdrawal."],
          ["Bank", "Transfer to or from an external bank account."],
          ["Internal", "Transfer between accounts within Spendbase."],
          ["Undefined", "The source could not be classified."],
        ]}
      />
      <EnumValues
        name="eventType"
        values={[
          ["Undefined", "Regular transaction with no special event."],
          ["Returned", "Funds were returned, such as a card refund or a returned transfer."],
          ["BalanceAdjustment", "Manual correction of the account balance."],
          ["Chargeback", "Funds moved because a card transaction was disputed."],
          ["Exchange", "Currency exchange."],
          ["Revenue", "Revenue credited to the account, such as cashback."],
          ["InternalFx", "Currency conversion leg of an internal transfer between currencies."],
          ["Autopay", "Automatic top-up or payment."],
        ]}
      />
      <EnumValues
        name="state"
        values={[
          ["Pending", "Authorized but not settled yet. The amount may still change."],
          ["Confirmed", "Settled and final."],
          ["Rejected", "Declined or failed. No money moved."],
          ["Unset", "The state has not been set yet."],
          ["Unknown", "The state could not be determined."],
        ]}
      />
      <EnumValues
        name="paymentType"
        values={[
          ["POS", "Card payment at a merchant, in store or online."],
          ["ATM", "Cash withdrawal at an ATM."],
          ["P2P", "Transfer between accounts or people."],
          ["Undefined", "Not applicable, such as for non-card transactions."],
        ]}
      />
    </div>
  )
}

export function TransactionsContent() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Transactions</h1>

          {/* Get card transactions */}
          <div id="get-card-transactions" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/transactions/card-transactions/:ledgerAccountId</code>
            </div>
            <ScopeBadge scope="transactionsRead" />
            <h2 className="text-2xl font-semibold">Get card transactions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns card transactions (<code className="font-mono">type=card</code>) for the specified account, with
              tx IDs, card IDs, merchant details, amounts, etc. Each transaction carries a <code className="font-mono">cardId</code>{" "}
              field, which mirrors <code className="font-mono">cardRef</code>. Fields with zero/empty values are omitted from
              the response.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
              </div>
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="space-y-2">
                <Param name="from" type="integer (unix seconds)">
                  Start of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no lower bound.
                </Param>
                <Param name="to" type="integer (unix seconds)">
                  End of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no upper bound.
                </Param>
                <Param name="accountName" type="string">
                  Keep only transactions whose <code className="font-mono">details.accountName</code> matches exactly
                  (case-sensitive). Applied to the returned page after pagination, so a page may contain fewer than{" "}
                  <code className="font-mono">limit</code> items while <code className="font-mono">hasMore</code> is still true.
                </Param>
                <Param name="cursor" type="string">
                  <code className="font-mono">nextCursor</code> from the previous page. Max 512 characters, no control characters.
                </Param>
                <Param name="limit" type="integer">
                  Page size, 0–1000. Defaults to 1000 when omitted or 0. Non-integer, negative or &gt;1000 values return 400.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "transactions": [${indentJson(CARD_TRANSACTION_OBJECT, "    ")}],
  "hasMore": true,
  "nextCursor": "eyJpZCI6IjNhNGI1YzZkIn0"
}`}</ResponseBlock>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <code className="font-mono">hasMore</code> and <code className="font-mono">nextCursor</code> are omitted on the
              last page. Invalid pagination params return <code className="font-mono">400</code> with{" "}
              <code className="font-mono">{`{"error": "limit must not exceed 1000"}`}</code> (or similar); upstream errors
              are passed through with their status code as <code className="font-mono">{`{"error": "..."}`}</code>.
            </p>
            <TransactionFieldValues />
          </div>

          <Separator />

          {/* Get transactions */}
          <div id="get-transactions" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/transactions/transactions/:ledgerAccountId</code>
            </div>
            <ScopeBadge scope="transactionsRead" />
            <h2 className="text-2xl font-semibold">Get transactions by account</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns all transactions (card, bank and internal) for the specified account. Card transactions get an
              extra string flag: <code className="font-mono">{`"refund": "true"`}</code> when{" "}
              <code className="font-mono">sourceType</code> is <code className="font-mono">Card</code> and{" "}
              <code className="font-mono">eventType</code> is <code className="font-mono">Returned</code>, or{" "}
              <code className="font-mono">{`"reversal": "true"`}</code> when <code className="font-mono">sourceType</code> is{" "}
              <code className="font-mono">Card</code>, <code className="font-mono">eventType</code> is{" "}
              <code className="font-mono">Undefined</code> and <code className="font-mono">type</code> is{" "}
              <code className="font-mono">debit</code>. Both are omitted otherwise. Fields with zero/empty values are
              omitted from the response.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerAccountId" type="string" required>Ledger ID of the account</Param>
              </div>
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="space-y-2">
                <Param name="from" type="integer (unix seconds)">
                  Start of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no lower bound.
                </Param>
                <Param name="to" type="integer (unix seconds)">
                  End of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no upper bound.
                </Param>
                <Param name="bank" type="boolean">
                  When <code className="font-mono">true</code>, only bank transactions are returned (types{" "}
                  <code className="font-mono">convert</code>, <code className="font-mono">load</code>,{" "}
                  <code className="font-mono">sendOut</code>). Defaults to <code className="font-mono">false</code>.
                </Param>
                <Param name="cursor" type="string">
                  <code className="font-mono">nextCursor</code> from the previous page. Max 512 characters, no control characters.
                </Param>
                <Param name="limit" type="integer">
                  Page size, 0–1000. Defaults to 1000 when omitted or 0. Non-integer, negative or &gt;1000 values return 400.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "transactions": [
    ${indentJson(BANK_TRANSACTION_OBJECT, "    ")},
    {
      "account_id": "6f1c2a9e-3b4d-4e8f-9a1b-2c3d4e5f6a7b",
      "amount": 42.5,
      "cardRef": "8d3e5a7c-1f2b-4c6d-9e0a-b1c2d3e4f5a6",
      "createdAt": 1754127600,
      "currencyISOCode": "USD",
      "details": {
        "accountName": "Marketing",
        "cardName": "Ads card",
        "merchantName": "Google Ads",
        "originalTransactionId": "3a4b5c6d-7e8f-4091-a2b3-c4d5e6f7a8b9",
        "panLastFour": "4242"
      },
      "eventType": "Returned",
      "id": "5e6f7a8b-9c0d-4e1f-a2b3-c4d5e6f7a8b9",
      "paymentType": "POS",
      "sourceType": "Card",
      "state": "Confirmed",
      "type": "credit",
      "updatedAt": 1754127660,
      "refund": "true"
    }
  ],
  "hasMore": true,
  "nextCursor": "eyJpZCI6IjVlNmY3YThiIn0"
}`}</ResponseBlock>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <code className="font-mono">hasMore</code> and <code className="font-mono">nextCursor</code> are omitted on the
              last page. Invalid pagination params return <code className="font-mono">400</code> with{" "}
              <code className="font-mono">{`{"error": "..."}`}</code>; upstream errors are passed through with their status
              code.
            </p>
          </div>

          <Separator />

          {/* Get master transactions */}
          <div id="get-master-transactions" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <GetBadge />
              <code className="text-sm font-mono">/transactions/master-transactions/:ledgerAccountId</code>
            </div>
            <ScopeBadge scope="transactionsRead" />
            <h2 className="text-2xl font-semibold">Get master account transactions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Returns transactions of the given account where the Master Account is the sender or receiver
              (<code className="font-mono">details.senderName</code> or <code className="font-mono">details.receiverName</code>{" "}
              equals <code className="font-mono">Master Account</code>). For internal transfers
              (<code className="font-mono">sourceType: Internal</code>) only one leg is kept: a{" "}
              <code className="font-mono">debit</code> whose receiver is the Master Account, or a{" "}
              <code className="font-mono">credit</code> whose sender is the Master Account. This endpoint is not paginated by the caller — it returns
              the first upstream page; <code className="font-mono">hasMore</code>, <code className="font-mono">nextCursor</code>{" "}
              and account <code className="font-mono">balances</code> are passed through from upstream when present.
              Fields with zero/empty values are omitted from the response.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="ledgerAccountId" type="string" required>Ledger ID of the master account</Param>
              </div>
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="space-y-2">
                <Param name="from" type="integer (unix seconds)">
                  Start of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no lower bound.
                </Param>
                <Param name="to" type="integer (unix seconds)">
                  End of the period. Converted to a UTC calendar date (YYYY-MM-DD), so the time-of-day part is ignored.
                  Omitted, <code className="font-mono">0</code> or non-numeric values mean no upper bound.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "balances": {
    "freeBalance": 48250.75,
    "pendingBalance": 120,
    "totalBalance": 48370.75
  },
  "transactions": [${indentJson(BANK_TRANSACTION_OBJECT, "    ")}]
}`}</ResponseBlock>
          </div>

          <Separator />

          {/* Add note */}
          <div id="add-note-to-tx" className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <PostBadge />
              <code className="text-sm font-mono">/transactions/note/:id</code>
            </div>
            <ScopeBadge scope="transactionsWrite" />
            <h2 className="text-2xl font-semibold">Add note to transaction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Attach a note message to a transaction. Returns the transaction&apos;s attachment object; fields with
              empty values (e.g. <code className="font-mono">fileName</code> when no file is attached) are omitted.
            </p>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Path Parameters</h3>
              <div className="space-y-2">
                <Param name="id" type="string" required>Transaction ID (<code className="font-mono">id</code> from the transactions list)</Param>
              </div>
              <h3 className="text-lg font-semibold">Body Parameters</h3>
              <div className="space-y-2">
                <Param name="note" type="string">
                  Note text to attach to the transaction. Not validated by the API — a missing or empty value is forwarded
                  upstream as-is. A malformed JSON body returns <code className="font-mono">400</code>{" "}
                  <code className="font-mono">{`{"error": "invalid request body"}`}</code>.
                </Param>
              </div>
            </div>
            <ResponseBlock>{`{
  "fileName": "c1d2e3f4-receipt.pdf",
  "fileURL": "https://files.spendbase.co/attachments/c1d2e3f4-receipt.pdf",
  "note": "Q3 ads campaign",
  "originalFileName": "receipt.pdf"
}`}</ResponseBlock>
          </div>
        </div>
      </div>
    </main>
  )
}

// EU webhooks are produced by cards-tribe and delivered by the webhooks service:
// X-Event-Group / X-Event-Type are passed through verbatim, so the values are PascalCase.
function EuWebhookEvents() {
  const code = "px-1.5 py-0.5 rounded bg-muted font-mono text-sm"
  return (
    <>
      <Separator />

      {/* Delivery */}
      <div id="webhook-delivery" className="space-y-4">
        <h2 className="text-2xl font-semibold">Delivery</h2>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
          <li>
            All events belong to the <code className={code}>Card</code> group. The event is identified by the{" "}
            <code className={code}>X-Event-Type</code> header.
          </li>
          <li>
            Respond with any status below <code className={code}>400</code> within 5 seconds. Timeouts, network errors
            and <code className={code}>4xx</code>/<code className={code}>5xx</code> responses are retried up to 5 times
            with exponential backoff (1s up to 30s).
          </li>
          <li>
            Delivery is at-least-once and payloads carry no event ID, so the same event can arrive more than once.
            Deduplicate on the payload contents (for example <code className={code}>transactionId</code> +{" "}
            <code className={code}>X-Event-Type</code> + <code className={code}>lifecyclePhase</code>).
          </li>
          <li>Events are not guaranteed to arrive in order. JSON field order is not guaranteed either.</li>
          <li>
            Amounts are decimal strings in major units without trailing zeros, e.g.{" "}
            <code className={code}>&quot;12.5&quot;</code>. Fields ending in <code className={code}>Ison</code> are ISO
            4217 numeric currency codes, e.g. <code className={code}>&quot;978&quot;</code> for EUR.
          </li>
          <li>
            <code className={code}>timestamp</code> is when the webhook was created (UTC, RFC 3339, e.g.{" "}
            <code className={code}>2026-10-07T12:34:56Z</code>), not when the transaction happened.
          </li>
          <li>
            <code className={code}>cardId</code> / <code className={code}>card_id</code> is the Spendbase card ID returned
            by the Cards API. <code className={code}>transactionId</code> on transaction events is the Spendbase
            transaction ID. It is the same for every event of one purchase (authorization, reversal, settlement).
          </li>
        </ul>
      </div>

      <Separator />

      {/* Card Created */}
      <div id="card-created" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Created</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired once when a card is issued. If the cardholder is not verified yet, the card is saved as pending and{" "}
          <code className={code}>pan_last_four</code> is empty. No second event is sent when the card is activated later.
        </p>
        <WebhookHeaders group="Card" type="CardIssue" />
        <ResponseBlock status="Payload">{`{
  card_id: string;        // Spendbase card ID
  card_name: string;
  pan_last_four: string;  // "" while the card is pending
  status: 'DEFAULT';      // always "DEFAULT", even for a pending card
  timestamp: string;      // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Blocked */}
      <div id="card-blocked" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Blocked</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card is locked through the API or the Spendbase app. Unlocking a card does not send a webhook.
        </p>
        <WebhookHeaders group="Card" type="CardBlock" />
        <ResponseBlock status="Payload">{`{
  card_id: string;    // Spendbase card ID
  card_name: string;
  timestamp: string;  // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Terminated */}
      <div id="card-terminated" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Terminated</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card is permanently terminated, including pending cards that were never activated.
        </p>
        <WebhookHeaders group="Card" type="CardTerminate" />
        <ResponseBlock status="Payload">{`{
  card_id: string;    // Spendbase card ID
  card_name: string;
  timestamp: string;  // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Authorization */}
      <div id="card-authorization" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Authorization</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card purchase or ATM withdrawal is authorized. The transaction is pending settlement. An
          incremental authorization fires this event again for the same <code className={code}>transactionId</code>,
          with <code className={code}>billingAmount</code> set to the increment only.
        </p>
        <WebhookHeaders group="Card" type="Authorization" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'PURCHASE';
  lifecyclePhase: 'AUTHORIZATION';
  transactionId: string;            // Spendbase transaction ID
  cardId: string;                   // Spendbase card ID
  panLastFour: string;
  accountName: string;              // sub-account name; "" for master account cards
  merchantName: string;             // "" if unknown
  merchantAmount: string;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string;  // alpha-3 (e.g. "EUR"); ISO 4217 numeric on incremental authorizations
  billingAmount: string;            // decimal string, billing currency, incl. fees, always positive
  billingCurrencyIson: string;      // ISO 4217 numeric
  exchangeRate: string;             // decimal string, billingAmount / merchantAmount
  cardName: string;
  merchantCategory: null;           // reserved, currently always null
  mccCode: string;                  // "" if unknown
  authorisationType: string;        // see values below
  timestamp: string;                // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="authorisationType"
            values={[
              ["Normal authorization", "Standard purchase authorization."],
              ["Pre-authorization", "Estimated amount held in advance, e.g. hotels or car rental."],
              ["Final authorization", "Authorization for the final amount."],
              ["Incremental", "Increase of a previously authorized amount."],
              ["Instalment", "One payment of an instalment plan."],
              ["Preferred customer", "Authorization for a preferred-customer transaction."],
              ["Recurring", "Recurring payment, e.g. a subscription."],
              ["Delayed charges", "Extra charge added after the original transaction, e.g. a minibar charge."],
              ["No show", "Charge for a reservation the cardholder did not show up for."],
              ["Authorize advice", "Authorization approved on the card's behalf and reported afterwards."],
              ["Refund", "Refund authorization."],
              ["Account funding", "Transfer that funds another account."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Card Settlement */}
      <div id="card-settlement" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Settlement</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when an authorized purchase is settled. Refund settlements are delivered as a Refund event instead. If a
          settlement is reversed, this event fires again with the same <code className={code}>transactionId</code> and
          a positive <code className={code}>transactionAmount</code>.
        </p>
        <WebhookHeaders group="Card" type="Settlement" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'PURCHASE';
  lifecyclePhase: 'SETTLEMENT';
  merchantAmount: string;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string;  // ISO 4217 numeric
  billingAmount: string;            // decimal string, billing currency, incl. fees, always positive
  billingCurrencyIson: string;      // ISO 4217 numeric
  exchangeRate: string;             // decimal string, billingAmount / merchantAmount
  settlementCurrencyIson: string;   // ISO 4217 numeric
  transactionAmount: string;        // decimal string, signed: negative for a purchase, positive for a settlement reversal
  merchantName: string;
  mccCode: string;
  cardId: string;
  cardName: string;
  panLastFour: string;
  transactionId: string;
  timestamp: string;                // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card OTP */}
      <div id="card-otp" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card OTP</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a 3DS challenge needs the cardholder to confirm an online payment. Show{" "}
          <code className={code}>validation_value</code> to the cardholder. When your team receives this webhook, the
          SMS to the cardholder is not sent. No event is sent if the challenge is approved automatically.
        </p>
        <WebhookHeaders group="Card" type="OTP" />
        <ResponseBlock status="Payload">{`{
  auth_request_id: number;
  auth_method: number;          // see values below
  validation_value: string;     // one-time code for the cardholder — sensitive
  card_id: string;              // Spendbase card ID
  card_name: string;
  request_expires_at: number;   // Unix timestamp (seconds)
  amount: string;               // decimal string, merchant currency; "0" if unknown
  currencyIson?: string;        // ISO 4217 numeric; omitted if unknown
  merchant_name?: string;       // omitted if unknown
  user_id: string;              // Spendbase user ID of the cardholder
  transaction_id: string;       // 3DS directory server transaction ID (not a Spendbase transaction ID); "" if unknown
  timestamp: string;            // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="auth_method"
            values={[
              ["1", "One-time password sent by SMS."],
              ["2", "One-time password sent by SMS, combined with a static password."],
              ["3", "Background (push) confirmation in an app."],
              ["4", "One-time password delivered through the API."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Card OTP Failed */}
      <div id="card-otp-failed" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card OTP Failed</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a 3DS challenge ends without success. It can arrive for a challenge that had no Card OTP event.
        </p>
        <WebhookHeaders group="Card" type="OTPFailed" />
        <ResponseBlock status="Payload">{`{
  auth_request_id: number;
  auth_method: number;          // as in Card OTP; 0 if unknown
  card_id: string;              // Spendbase card ID
  card_name: string;
  amount: string;               // decimal string, merchant currency; "0" if unknown
  currencyIson?: string;        // ISO 4217 numeric; omitted if unknown
  merchant_name?: string;       // omitted if unknown
  user_id: string;              // Spendbase user ID of the cardholder
  transaction_id: string;       // 3DS directory server transaction ID; "" if unknown
  reason: string;               // see values below
  confirmation_status: string;  // see values below
  timestamp: string;            // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4 space-y-4">
          <EnumValues
            name="reason"
            values={[
              ["FAILED", "The cardholder entered a wrong code."],
              ["EXPIRED", "The challenge timed out or was abandoned."],
              ["LIMIT_REACHED", "The maximum number of attempts was reached."],
              ["REJECTED", "The cardholder cancelled the challenge."],
            ]}
          />
          <EnumValues
            name="confirmation_status"
            values={[
              ["N", "Not authenticated. Matches reason FAILED."],
              ["E", "Expired. Matches reason EXPIRED."],
              ["L", "Attempt limit reached. Matches reason LIMIT_REACHED."],
              ["C", "Cancelled by the cardholder. Matches reason REJECTED."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Card Decline */}
      <div id="card-decline" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Decline</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired once when a card transaction (including a refund) is declined.
        </p>
        <WebhookHeaders group="Card" type="Decline" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'DECLINE';
  lifecyclePhase: 'DECLINE';
  rejectReason: string;            // see values below; "" if unknown
  merchantName: string;            // "" if unknown
  mccCode: string;                 // "" if unknown
  amount: string;                  // decimal string, billing currency, incl. fees
  merchantAmount: string;          // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string; // ISO 4217 numeric
  cardId: string;
  cardName: string;
  panLastFour: string;
  transactionId: string;
  timestamp: string;               // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="rejectReason"
            values={[
              ["INSUFFICIENT_FUNDS", "Not enough available balance on the account."],
              ["LIMIT_EXCEEDED", "A card limit was exceeded."],
              ["CARD_BLOCKED", "The card is locked."],
              ["CARD_SUSPENDED", "The card is suspended."],
              ["CARD_ACCOUNT_BLOCKED", "The account behind the card is blocked."],
              ["STOLEN_CARD", "The card is reported stolen."],
              ["EXPIRATION_DATE", "Wrong or expired card expiration date."],
              ["CVC_CVV", "Wrong CVC/CVV."],
              ["CVV_REQUIRED", "The CVC/CVV was not provided."],
              ["POSTAL_CODE", "The postal code check failed."],
              ["MISSING_3DS", "3DS authentication was required but not performed."],
              ["SCA_REQUIRED", "Strong customer authentication is required."],
              ["AAV_VALIDATED_UNKNOWN_ERROR", "Address verification failed with an unknown error."],
              ["MANUAL_KEY_ENTRY_FAILED", "Manually entered card details were rejected."],
              ["MOTO_NOT_ENABLED", "Mail or telephone order payments are not enabled for the card."],
              ["MAGNETIC_STRIPE_INVALID", "The magnetic stripe data is invalid."],
              ["RISK_TRANSACTION_NOT_PERMITTED", "The transaction type is not permitted by risk rules."],
              ["RISK_TRANSACTION_REJECTED", "The transaction was rejected by risk rules."],
              ["CARD_RISK_GROUP", "Declined by the card's risk group settings."],
              ["DO_NOT_HONOR", "Declined by the issuer without a specific reason."],
              ["UNKNOWN_ERROR", "Declined for an unknown reason."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Card Reversal */}
      <div id="card-reversal" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Reversal</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when an authorized card transaction is reversed (fully or partially) before settlement. Partial
          reversals fire this event once per reversal. The payload does not say whether the reversal was full or
          partial.
        </p>
        <WebhookHeaders group="Card" type="Reversal" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'REVERSAL';
  lifecyclePhase: 'AUTHORIZATION';
  billingCurrencyIson: string;      // ISO 4217 numeric
  merchantName: string;
  mccCode: string;
  billingAmount: string;            // decimal string, reversed amount in billing currency, always positive
  merchantAmount: string;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string;  // ISO 4217 numeric
  cardId: string;
  cardName: string;
  panLastFour: string;
  transactionId: string;            // same as the original authorization
  timestamp: string;                // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Refund */}
      <div id="card-refund" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Refund</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card transaction is refunded. It can fire twice for the same refund: once at authorization and
          once at settlement. Use <code className={code}>lifecyclePhase</code> to tell them apart.
        </p>
        <WebhookHeaders group="Card" type="Refund" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'REFUND';
  lifecyclePhase: 'AUTHORIZATION' | 'SETTLEMENT';
  billingCurrencyIson: string;      // ISO 4217 numeric
  merchantName: string;
  mccCode: string;
  billingAmount: string;            // decimal string, billing currency, always positive
  merchantAmount: string;           // decimal string, merchant currency; positive at AUTHORIZATION, as signed by the provider at SETTLEMENT
  merchantCurrencyISOCode: string;  // ISO 4217 numeric
  cardId: string;
  cardName: string;
  panLastFour: string;
  transactionId: string;
  timestamp: string;                // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="lifecyclePhase"
            values={[
              ["AUTHORIZATION", "The refund was authorized. Funds are not credited yet."],
              ["SETTLEMENT", "The refund was settled. Funds are credited to the account."],
            ]}
          />
        </div>
      </div>
    </>
  )
}

// US webhooks are produced by cards-highnote and delivered by the webhooks service.
// Source of truth: cards-highnote internal/services/webhook + docs/client-webhook-extensions.md.
const US_CARD_LIFECYCLE_PAYLOAD = `{
  cardId: string;                        // card ID, as returned by Get Card
  cardName: string | null;
  panLastFour: string | null;
  expYear: number | null;
  expMonth: number | null;
  accountId: string | null;              // ledger account ID of the card's account
  holderId: string | null;               // cardholder record ID (not the user ID in Get Card's cardHolder.id); null if none
  currencyISONum: string | null;         // ISO 4217 numeric, e.g. "840"
  cardStatus: SpendbaseCardStatus;       // status after the change
  previousStatus: SpendbaseCardStatus | null;  // status before the change; null on Card Created
  initiatedBy: 'product' | 'bank' | null;      // who made the change; null on Card Created
  timestamp: string;                     // UTC RFC 3339
}`

function UsCardLifecycleValues() {
  return (
    <div className="rounded-lg border border-border bg-card p-4 space-y-4">
      <EnumValues
        name="cardStatus / previousStatus"
        values={[
          ["NEW", "Issued but not activated yet."],
          ["DEFAULT", "Active and ready to use."],
          ["LOCKED", "Locked through Spendbase (API, app or an operator)."],
          ["SUSPENDED", "Put on hold by the issuing bank."],
          ["TERMINATED", "Permanently closed."],
        ]}
      />
      <EnumValues
        name="initiatedBy"
        values={[
          ["product", "The change was requested through Spendbase: the API, the app or an operator."],
          ["bank", "The issuing bank changed the card itself, e.g. a fraud hold or a closure you did not request."],
        ]}
      />
    </div>
  )
}

function UsWebhookEvents() {
  const code = "px-1.5 py-0.5 rounded bg-muted font-mono text-sm"
  return (
    <>
      <Separator />

      {/* Delivery */}
      <div id="webhook-delivery" className="space-y-4">
        <h2 className="text-2xl font-semibold">Delivery</h2>
        <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
          <li>
            Card events use the <code className={code}>Card</code> group and money-movement events use the{" "}
            <code className={code}>Account</code> group. The event is identified by the{" "}
            <code className={code}>X-Event-Type</code> header.
          </li>
          <li>
            Respond with any status below <code className={code}>400</code> within 5 seconds. Timeouts, network errors
            and <code className={code}>4xx</code>/<code className={code}>5xx</code> responses are retried up to 5 times
            with exponential backoff (1s up to 30s).
          </li>
          <li>
            Each occurrence produces one event, but a retried delivery can reach you more than once. Payloads carry no
            event ID, so make your handler idempotent.
          </li>
          <li>Events are not guaranteed to arrive in order. JSON field order is not guaranteed either.</li>
          <li>
            Every documented field is always present. A value the bank did not provide is{" "}
            <code className={code}>null</code>. It is never omitted and never an empty string.
          </li>
          <li>
            Amounts are decimal strings with two decimal places, e.g. <code className={code}>&quot;12.00&quot;</code>.
            Fields ending in <code className={code}>Ison</code> or <code className={code}>ISONum</code> are ISO 4217
            numeric currency codes, e.g. <code className={code}>&quot;840&quot;</code> for USD.{" "}
            <code className={code}>exchangeRate</code> has up to 6 decimal places.
          </li>
          <li>
            <code className={code}>timestamp</code> is when the webhook was created (UTC, RFC 3339, e.g.{" "}
            <code className={code}>2026-10-07T12:34:56Z</code>), not when the transaction happened.
          </li>
        </ul>
        <div className="rounded-lg border border-border bg-card p-4 space-y-2">
          <p className="text-sm font-medium">Fields that can be null</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>
              <code className={code}>mccCode</code>, <code className={code}>merchantCategory</code>: the card network did
              not report the merchant&apos;s category.
            </li>
            <li>
              <code className={code}>merchantAmount</code>, <code className={code}>exchangeRate</code>: a cross-currency
              purchase where the bank did not report the amount in the merchant&apos;s currency. For a same-currency
              purchase, <code className={code}>merchantAmount</code> equals the billing amount and{" "}
              <code className={code}>exchangeRate</code> is <code className={code}>&quot;1&quot;</code>.
            </li>
            <li>
              <code className={code}>rejectReason</code>: the bank declined without a reason that maps to a documented
              value.
            </li>
            <li>
              <code className={code}>holderId</code>: the card has no cardholder record.
            </li>
            <li>
              <code className={code}>accountId</code>, <code className={code}>expYear</code>,{" "}
              <code className={code}>expMonth</code>, <code className={code}>cardName</code>,{" "}
              <code className={code}>panLastFour</code>: rare, when the card record is missing that value.
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Card Created */}
      <div id="card-created" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Created</h2>
        <p className="text-muted-foreground leading-relaxed">Fired when a new card is issued.</p>
        <WebhookHeaders group="Card" type="CardIssue" />
        <ResponseBlock status="Payload">{US_CARD_LIFECYCLE_PAYLOAD}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Blocked */}
      <div id="card-blocked" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Blocked</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card is locked through Spendbase or put on hold by the issuing bank.
        </p>
        <WebhookHeaders group="Card" type="CardBlock" />
        <ResponseBlock status="Payload">{US_CARD_LIFECYCLE_PAYLOAD}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Unblocked */}
      <div id="card-unblocked" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Unblocked</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a blocked card becomes usable again: it was unlocked through Spendbase, or the bank lifted its
          hold. <code className={code}>cardStatus</code> is normally <code className={code}>DEFAULT</code> and{" "}
          <code className={code}>previousStatus</code> is normally <code className={code}>LOCKED</code>.
        </p>
        <WebhookHeaders group="Card" type="CardUnblock" />
        <ResponseBlock status="Payload">{US_CARD_LIFECYCLE_PAYLOAD}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Terminated */}
      <div id="card-terminated" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Terminated</h2>
        <p className="text-muted-foreground leading-relaxed">Fired when a card is permanently closed.</p>
        <WebhookHeaders group="Card" type="CardTerminate" />
        <ResponseBlock status="Payload">{US_CARD_LIFECYCLE_PAYLOAD}</ResponseBlock>
        <UsCardLifecycleValues />
      </div>

      <Separator />

      {/* Card Authorization */}
      <div id="card-authorization" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Authorization</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card transaction is authorized. The transaction is pending settlement.
        </p>
        <WebhookHeaders group="Card" type="Authorization" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'PURCHASE';
  lifecyclePhase: 'AUTHORIZATION';
  transactionId: string;                   // transaction ID, same for every event of one purchase
  cardId: string;                          // card ID, as returned by Get Card
  panLastFour: string | null;
  accountName: string | null;
  merchantName: string | null;
  merchantAmount: string | null;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string | null;  // alpha-3, e.g. "USD"
  billingAmount: string;                   // decimal string, billing currency, always positive
  billingCurrencyIson: string | null;      // ISO 4217 numeric
  exchangeRate: string | null;             // decimal string, billingAmount / merchantAmount
  cardName: string | null;
  merchantCategory: string | null;
  mccCode: string | null;
  timestamp: string;                       // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Settlement */}
      <div id="card-settlement" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Settlement</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a purchase is settled. Refund settlements are delivered as a Refund event instead.
        </p>
        <WebhookHeaders group="Card" type="Settlement" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'PURCHASE';
  lifecyclePhase: 'SETTLEMENT';
  merchantAmount: string | null;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string | null;  // ISO 4217 numeric
  billingAmount: string;                   // decimal string, billing currency, always positive
  billingCurrencyIson: string | null;      // ISO 4217 numeric
  exchangeRate: string | null;             // decimal string
  settlementCurrencyIson: string | null;   // ISO 4217 numeric, same as billingCurrencyIson
  transactionAmount: string | null;        // decimal string, merchant currency, negative for a purchase (e.g. "-12.00")
  merchantName: string | null;
  mccCode: string | null;
  cardId: string;
  cardName: string | null;
  panLastFour: string | null;
  transactionId: string;
  timestamp: string;                       // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Decline */}
      <div id="card-decline" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Decline</h2>
        <p className="text-muted-foreground leading-relaxed">Fired when a card transaction is declined.</p>
        <WebhookHeaders group="Card" type="Decline" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'DECLINE';
  lifecyclePhase: 'DECLINE';
  rejectReason: string | null;             // see values below
  merchantName: string | null;
  mccCode: string | null;
  amount: string | null;                   // decimal string, attempted amount in billing currency
  merchantAmount: string | null;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string | null;  // ISO 4217 numeric
  cardId: string;
  cardName: string | null;
  panLastFour: string | null;
  transactionId: string;
  timestamp: string;                       // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="rejectReason"
            values={[
              ["INSUFFICIENT_FUNDS", "Not enough available balance on the account."],
              ["LIMIT_EXCEEDED", "A card limit was exceeded."],
              ["CARD_BLOCKED", "The card is locked."],
              ["CARD_SUSPENDED", "The card is suspended."],
              ["CARD_ACCOUNT_BLOCKED", "The account behind the card is blocked."],
              ["EXPIRATION_DATE", "Wrong or expired card expiration date."],
              ["CVC_CVV", "Wrong CVC/CVV."],
              ["MAGNETIC_STRIPE_INVALID", "The magnetic stripe data is invalid."],
              ["RISK_TRANSACTION_NOT_PERMITTED", "The transaction type is not permitted by risk rules."],
              ["RISK_TRANSACTION_REJECTED", "The transaction was rejected by risk rules."],
              ["DO_NOT_HONOR", "Declined by the issuer without a specific reason."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Card Reversal */}
      <div id="card-reversal" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Reversal</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when an authorized card transaction is reversed before settlement.
        </p>
        <WebhookHeaders group="Card" type="Reversal" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'REVERSAL';
  lifecyclePhase: 'AUTHORIZATION';
  billingCurrencyIson: string | null;      // ISO 4217 numeric
  merchantName: string | null;
  mccCode: string | null;
  billingAmount: string;                   // decimal string, billing currency, always positive
  merchantAmount: string | null;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string | null;  // ISO 4217 numeric
  cardId: string;
  cardName: string | null;
  panLastFour: string | null;
  transactionId: string;
  timestamp: string;                       // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Card Refund */}
      <div id="card-refund" className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Refund</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a card transaction is refunded. It can fire twice for the same refund: once at authorization and
          once at settlement. Use <code className={code}>lifecyclePhase</code> to tell them apart.
        </p>
        <WebhookHeaders group="Card" type="Refund" />
        <ResponseBlock status="Payload">{`{
  tx_type: 'REFUND';
  lifecyclePhase: 'AUTHORIZATION' | 'SETTLEMENT';
  billingCurrencyIson: string | null;      // ISO 4217 numeric
  merchantName: string | null;
  mccCode: string | null;
  billingAmount: string;                   // decimal string, billing currency, always positive
  merchantAmount: string | null;           // decimal string, merchant currency, always positive
  merchantCurrencyISOCode: string | null;  // ISO 4217 numeric
  cardId: string;
  cardName: string | null;
  panLastFour: string | null;
  transactionId: string;
  timestamp: string;                       // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="lifecyclePhase"
            values={[
              ["AUTHORIZATION", "The refund was authorized. Funds are not credited yet."],
              ["SETTLEMENT", "The refund was settled. Funds are credited to the account."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Account Funded */}
      <div id="account-funded" className="space-y-4">
        <h2 className="text-2xl font-semibold">Account Funded</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when money from an external transfer is credited to one of your accounts.
        </p>
        <WebhookHeaders group="Account" type="AccountFunded" />
        <ResponseBlock status="Payload">{`{
  accountId: string;           // ledger account ID, as used by the Accounts API
  accountName: string | null;
  amount: string;              // decimal string, always positive
  currencyISOCode: 'USD';
  direction: 'in';
  timestamp: string;           // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Account Withdrawn */}
      <div id="account-withdrawn" className="space-y-4">
        <h2 className="text-2xl font-semibold">Account Withdrawn</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when money leaves one of your accounts through an external transfer.
        </p>
        <WebhookHeaders group="Account" type="AccountWithdrawn" />
        <ResponseBlock status="Payload">{`{
  accountId: string;           // ledger account ID
  accountName: string | null;
  amount: string;              // decimal string, always positive
  currencyISOCode: 'USD';
  direction: 'out';
  timestamp: string;           // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Balance Adjusted */}
      <div id="balance-adjusted" className="space-y-4">
        <h2 className="text-2xl font-semibold">Balance Adjusted</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when an account balance changes for a reason other than a card transaction or an external transfer:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          <li>a balance adjustment made by Spendbase, or</li>
          <li>
            money moved between two of your accounts. You receive <strong>two</strong> events:{" "}
            <code className={code}>direction: &apos;out&apos;</code> for the source account and{" "}
            <code className={code}>direction: &apos;in&apos;</code> for the destination, both with{" "}
            <code className={code}>reason: &apos;Transfer between budgets&apos;</code>.
          </li>
        </ul>
        <WebhookHeaders group="Account" type="BalanceAdjusted" />
        <ResponseBlock status="Payload">{`{
  accountId: string;           // ledger account ID
  accountName: string | null;
  amount: string;              // decimal string, always positive; read direction
  currencyISOCode: 'USD';
  direction: 'in' | 'out';     // from this account's point of view
  reason: string | null;       // human-readable reason
  timestamp: string;           // UTC RFC 3339
}`}</ResponseBlock>
        <div className="rounded-lg border border-border bg-card p-4">
          <EnumValues
            name="direction"
            values={[
              ["in", "Money came into this account."],
              ["out", "Money left this account."],
            ]}
          />
        </div>
      </div>

      <Separator />

      {/* Account Provisioned */}
      <div id="account-provisioned" className="space-y-4">
        <h2 className="text-2xl font-semibold">Account Provisioned</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired once per company, when its US card programme is ready. From this moment, cards can be issued.
        </p>
        <WebhookHeaders group="Account" type="AccountProvisioned" />
        <ResponseBlock status="Payload">{`{
  accountId: string;           // the company's main ledger account ID
  accountName: string | null;
  currencyISOCode: 'USD';
  timestamp: string;           // UTC RFC 3339
}`}</ResponseBlock>
      </div>

      <Separator />

      {/* Account Created */}
      <div id="account-created" className="space-y-4">
        <h2 className="text-2xl font-semibold">Account Created</h2>
        <p className="text-muted-foreground leading-relaxed">
          Fired when a new account (budget) is opened for your company.
        </p>
        <WebhookHeaders group="Account" type="AccountCreated" />
        <ResponseBlock status="Payload">{`{
  accountId: string;           // ledger account ID
  accountName: string | null;
  currencyISOCode: 'USD';
  timestamp: string;           // UTC RFC 3339
}`}</ResponseBlock>
      </div>

    </>
  )
}

function WebhookHeaders({ group, type }: { group: string; type: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">Headers</h3>
      <div className="rounded-lg bg-muted px-4 py-3 font-mono text-xs space-y-1">
        <div>X-Event-Group: <span className="text-primary">{group}</span></div>
        <div>X-Event-Type: <span className="text-primary">{type}</span></div>
      </div>
    </div>
  )
}

export function WebhooksContent() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">Webhooks</h1>
          <p className="text-muted-foreground leading-relaxed">
            To begin receiving webhook events, provide your publicly accessible HTTPS endpoint URL to the Spendbase
            API team at <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">spendbase.api@spendbase.co</code>.
            Each event is delivered as an HTTP POST and identified by the{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">X-Event-Group</code> and{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">X-Event-Type</code> headers.
          </p>

          {/* Verifying Signatures */}
          <div id="verify-signature" className="space-y-4">
            <h2 className="text-2xl font-semibold">Verifying Signatures</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every webhook POST carries an{" "}
              <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-sm">X-Webhook-Signature</code>{" "}
              header — a <strong>base64-encoded RS256 signature</strong> (RSA PKCS#1 v1.5 + SHA-256) over the raw JSON body.
              Verify it to confirm the request is authentic and was not tampered with in transit.
            </p>

            <h3 className="text-lg font-semibold">How it works</h3>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm leading-relaxed">
              <li>We build the JSON payload and compute its SHA-256 hash.</li>
              <li>We sign that hash with our private RSA key (PKCS#1 v1.5).</li>
              <li>We base64-encode the signature and attach it as <code className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">X-Webhook-Signature</code>.</li>
              <li>You receive the request, hash the <strong>raw body bytes</strong>, and verify the signature against our public key.</li>
            </ol>

            <div className="rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
              <strong>Important:</strong> Never unmarshal and re-marshal the JSON before verifying. JSON serialization is
              non-deterministic — field order and whitespace may change, producing a different hash and a failed
              verification. Always verify against the <strong>exact raw bytes</strong> received on the wire.
            </div>

            <h3 className="text-lg font-semibold">Step-by-step</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">1 — Read the raw body before any parsing</p>
                <ResponseBlock status="Go">{`body, err := io.ReadAll(r.Body)
// keep body as []byte — do not unmarshal`}</ResponseBlock>
                <ResponseBlock status="Python">{`body = request.get_data()          # Flask
body = await request.body()        # FastAPI / Starlette`}</ResponseBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">2 — Read the signature header</p>
                <ResponseBlock status="Go">{`sigB64 := r.Header.Get("X-Webhook-Signature")`}</ResponseBlock>
                <ResponseBlock status="Python">{`sig_b64 = request.headers.get("X-Webhook-Signature")`}</ResponseBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">3 — Base64-decode the signature (standard RFC 4648, not URL-safe)</p>
                <ResponseBlock status="Go">{`sigBytes, err := base64.StdEncoding.DecodeString(sigB64)
// 256 bytes for a 2048-bit RSA key`}</ResponseBlock>
                <ResponseBlock status="Python">{`sig_bytes = base64.b64decode(sig_b64)  # 256 bytes`}</ResponseBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">4 — SHA-256 hash the body</p>
                <ResponseBlock status="Go">{`hash := sha256.Sum256(body)  // [32]byte`}</ResponseBlock>
                <ResponseBlock status="Python">{`body_hash = hashlib.sha256(body).digest()  # 32 bytes`}</ResponseBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">5 — Verify RSA PKCS#1 v1.5</p>
                <ResponseBlock status="Go">{`err := rsa.VerifyPKCS1v15(pubKey, crypto.SHA256, hash[:], sigBytes)
// nil → valid; non-nil → invalid`}</ResponseBlock>
                <ResponseBlock status="Python">{`public_key.verify(
    sig_bytes,
    body,               # raw bytes, not the hash
    padding.PKCS1v15(),
    hashes.SHA256(),
)
# no exception → valid; InvalidSignature → invalid`}</ResponseBlock>
              </div>
            </div>

            <h3 className="text-lg font-semibold">Complete example (Go)</h3>
            <ResponseBlock status="Go">{`import (
    "crypto"
    "crypto/rsa"
    "crypto/sha256"
    "crypto/x509"
    "encoding/base64"
    "encoding/pem"
    "fmt"
    "io"
    "net/http"
)

func VerifyWebhookSignature(r *http.Request, publicKeyPEM []byte) error {
    body, err := io.ReadAll(r.Body)
    if err != nil {
        return err
    }
    sigB64 := r.Header.Get("X-Webhook-Signature")
    if sigB64 == "" {
        return fmt.Errorf("missing X-Webhook-Signature header")
    }
    sigBytes, err := base64.StdEncoding.DecodeString(sigB64)
    if err != nil {
        return fmt.Errorf("decode signature: %w", err)
    }
    hash := sha256.Sum256(body)
    block, _ := pem.Decode(publicKeyPEM)
    if block == nil {
        return fmt.Errorf("no PEM block found")
    }
    pub, err := x509.ParsePKIXPublicKey(block.Bytes)
    if err != nil {
        return fmt.Errorf("parse public key: %w", err)
    }
    rsaPub, ok := pub.(*rsa.PublicKey)
    if !ok {
        return fmt.Errorf("not an RSA public key")
    }
    return rsa.VerifyPKCS1v15(rsaPub, crypto.SHA256, hash[:], sigBytes)
}`}</ResponseBlock>

            <h3 className="text-lg font-semibold">Complete example (Python)</h3>
            <ResponseBlock status="Python">{`import base64
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.serialization import load_pem_public_key
from cryptography.exceptions import InvalidSignature

# Load once at startup — parsing RSA keys is expensive
PUBLIC_KEY = load_pem_public_key(open("webhook_public_key.pem", "rb").read())

def verify_webhook_signature(request) -> bool:
    body = request.get_data()                              # Flask; use await request.body() for FastAPI
    sig_b64 = request.headers.get("X-Webhook-Signature")
    if not sig_b64:
        return False
    try:
        sig_bytes = base64.b64decode(sig_b64)
    except Exception:
        return False
    try:
        PUBLIC_KEY.verify(sig_bytes, body, padding.PKCS1v15(), hashes.SHA256())
        return True
    except InvalidSignature:
        return False

# In your endpoint:
@app.route("/webhook", methods=["POST"])
def webhook():
    if not verify_webhook_signature(request):
        return "invalid signature", 401
    data = request.get_json()
    # process...
    return "ok", 200`}</ResponseBlock>

          </div>

          <RegionOnly region="us">
            <UsWebhookEvents />
          </RegionOnly>

          <RegionOnly region="eu">
            <EuWebhookEvents />
          </RegionOnly>

        </div>
      </div>
    </main>
  )
}
