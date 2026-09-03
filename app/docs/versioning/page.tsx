import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Versioning — Spendbase API",
}

export default function VersioningPage() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div id="release-notes" className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Cards API - Changelog</h1>
        </div>

        <div id="2026-09-03" />
        <section id="api-keys-authentication" className="space-y-4">
          <h2 className="text-2xl font-semibold">API Key Authentication</h2>
          <p className="text-muted-foreground">Version date: 2026-09-03</p>
          <p className="text-muted-foreground leading-relaxed">
            The API now supports API key authentication with Ed25519 request signing. This replaces the previous
            External-Token header approach for new integrations.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Creating an API Key</p>
              <p className="text-sm text-muted-foreground">
                Navigate to <strong>Money</strong> → <strong>Settings</strong> → <strong>API Keys</strong> in the
                Spendbase dashboard to create and manage API keys.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">New Request Headers</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li><code className="bg-muted px-1 py-0.5 rounded">X-Api-Key</code>: issued API key</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">X-Signature</code>: base64-encoded Ed25519 signature over canonical string</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">X-Timestamp</code>: Unix timestamp in milliseconds</li>
                <li><code className="bg-muted px-1 py-0.5 rounded">X-Nonce</code>: unique value per request (e.g. UUID v4)</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Scopes</p>
              <p className="text-sm text-muted-foreground mb-2">
                API keys are restricted by scope. Assign only the scopes required for your integration:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "accountsRead", "accountsWrite", "internalTransfersWrite",
                  "cardsRead", "cardsWrite", "cardDetailsRead",
                  "transactionsRead", "transactionsWrite",
                  "cardholdersRead", "cardholdersWrite",
                ].map((s) => (
                  <code key={s} className="bg-muted px-2 py-0.5 rounded text-xs font-mono">{s}</code>
                ))}
              </div>
            </div>
          </div>
          <section className="space-y-2">
            <h3 className="text-lg font-semibold">Compatibility</h3>
            <p className="text-muted-foreground text-sm">
              Legacy API token authentication remains supported for existing integrations. Ed25519 signing is required when using API key auth.
              Requests missing required signing headers are rejected with <code className="bg-muted px-1 py-0.5 rounded">401</code>.
            </p>
          </section>
        </section>

        <Separator />
        <div id="2026-08-13" />
        <section id="webhook-payload-updates" className="space-y-4">
          <h2 className="text-2xl font-semibold">Webhook payloads - updated fields</h2>
          <p className="text-muted-foreground">Version date: 2026-08-13</p>
          <p className="text-muted-foreground leading-relaxed">
            All card transaction webhook payloads have been updated to reflect the current contract. The changes
            affect Authorization, Settlement, Decline, Reversal, Refund, and OTP events.
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Authorization</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">tx_type</code>, <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code>, <code className="bg-muted px-1 py-0.5 rounded">billingAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">billingCurrencyIson</code>, <code className="bg-muted px-1 py-0.5 rounded">cardName</code>, <code className="bg-muted px-1 py-0.5 rounded">panLastFour</code>, <code className="bg-muted px-1 py-0.5 rounded">mccCode</code></li>
                <li>Removed <code className="bg-muted px-1 py-0.5 rounded">merchantLogoUrl</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantAddress</code></li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Settlement</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">tx_type</code>, <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantCurrencyISOCode</code>, <code className="bg-muted px-1 py-0.5 rounded">billingAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">billingCurrencyIson</code>, <code className="bg-muted px-1 py-0.5 rounded">exchangeRate</code>, <code className="bg-muted px-1 py-0.5 rounded">cardName</code></li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Decline</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">tx_type</code>, <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantCurrencyISOCode</code>, <code className="bg-muted px-1 py-0.5 rounded">cardName</code></li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Reversal</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">tx_type</code>, <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code>, <code className="bg-muted px-1 py-0.5 rounded">billingAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">billingCurrencyIson</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantCurrencyISOCode</code>, <code className="bg-muted px-1 py-0.5 rounded">cardName</code></li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">Refund</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">tx_type</code>, <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code> (<code className="bg-muted px-1 py-0.5 rounded">AUTHORIZATION</code> or <code className="bg-muted px-1 py-0.5 rounded">SETTLEMENT</code>), <code className="bg-muted px-1 py-0.5 rounded">billingAmount</code>, <code className="bg-muted px-1 py-0.5 rounded">billingCurrencyIson</code>, <code className="bg-muted px-1 py-0.5 rounded">merchantCurrencyISOCode</code>, <code className="bg-muted px-1 py-0.5 rounded">cardName</code></li>
                <li>Event may now fire twice per transaction; use <code className="bg-muted px-1 py-0.5 rounded">lifecyclePhase</code> to distinguish authorization from settlement refunds</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-semibold text-sm">OTP</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Added <code className="bg-muted px-1 py-0.5 rounded">auth_method</code>, <code className="bg-muted px-1 py-0.5 rounded">currencyIson</code> (optional), <code className="bg-muted px-1 py-0.5 rounded">merchant_name</code> (optional)</li>
              </ul>
            </div>
          </div>
          <section id="webhook-compatibility" className="space-y-4">
            <h2 className="text-2xl font-semibold">Compatibility</h2>
            <p className="text-muted-foreground">All changes in this release are backwards compatible:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>New fields are additive.</li>
            </ul>
          </section>
        </section>

        <Separator />

        <div id="2026-06-25" />
        <section id="card-issuance-new-spendbaseuserid-field" className="space-y-4">
          <h2 className="text-2xl font-semibold">Card issuance - new spendbaseUserId field</h2>
          <p className="text-muted-foreground">Version date: 2026-06-25</p>
          <p className="text-sm text-muted-foreground">Endpoint: POST /cards-adapter/v1/public/cards/card</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">spendbaseUserId</code> (string) - preferred
              cardholder identifier. Use this for all new requests.
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">email</code> (string) - deprecated. Still accepted
              as a legacy fallback, but new integrations should send spendbaseUserId instead.
            </li>
          </ul>
          <p className="text-muted-foreground">
            Action: migrate to <code className="bg-muted px-1 py-0.5 rounded">spendbaseUserId</code>. Requests
            using email continue to work.
          </p>
        </section>

        <section id="cursor-based-pagination" className="space-y-4">
          <h2 className="text-2xl font-semibold">Cursor-based pagination</h2>
          <p className="text-muted-foreground leading-relaxed">
            The following endpoints now support cursor pagination via query parameters:
          </p>
          <div className="space-y-3">
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-mono text-sm">GET /cards-adapter/v1/public/cards/account-cards/{'{'}ledgerAccountId{'}'}</p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>
                  <code className="bg-muted px-1 py-0.5 rounded">cursor</code> (string): cursor returned by the
                  previous page
                </li>
                <li>
                  <code className="bg-muted px-1 py-0.5 rounded">limit</code> (integer): maximum number of items
                  to return
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 space-y-2">
              <p className="font-mono text-sm">
                GET /cards-adapter/v1/public/transactions/card-transactions/{'{'}ledgerAccountId{'}'}
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>
                  <code className="bg-muted px-1 py-0.5 rounded">cursor</code> (string): cursor returned by the
                  previous page
                </li>
                <li>
                  <code className="bg-muted px-1 py-0.5 rounded">limit</code> (integer): maximum number of items
                  to return
                </li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground">
            Date filtering (<code className="bg-muted px-1 py-0.5 rounded">from</code>,{" "}
            <code className="bg-muted px-1 py-0.5 rounded">to</code>) and accountName filtering on these endpoints
            were also corrected.
          </p>
        </section>

        <section id="transaction-endpoints-optional-filters" className="space-y-4">
          <h2 className="text-2xl font-semibold">Transaction endpoints - optional filters</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">
                GET /cards-adapter/v1/public/transactions/card-transactions/{'{'}ledgerAccountId{'}'}
              </code>
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">
                GET /cards-adapter/v1/public/transactions/master-transactions/{'{'}ledgerAccountId{'}'}
              </code>
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">
                GET /cards-adapter/v1/public/transactions/transactions/{'{'}ledgerAccountId{'}'}
              </code>
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            The <code className="bg-muted px-1 py-0.5 rounded">from</code> and{" "}
            <code className="bg-muted px-1 py-0.5 rounded">to</code> query parameters are now optional
            (previously required). On card-transactions,{" "}
            <code className="bg-muted px-1 py-0.5 rounded">accountName</code> is now optional as well. Calls that
            previously supplied these parameters are unaffected.
          </p>
        </section>

        <section id="transaction-details-reversal-linkage" className="space-y-4">
          <h2 className="text-2xl font-semibold">Transaction details - reversal linkage</h2>
          <p className="text-muted-foreground">Transaction detail responses now include two additional fields:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">isReversed</code> (string): indicates the transaction
              has an associated reversal
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">originalTransactionId</code> (string): for a reversal,
              links back to the original transaction
            </li>
          </ul>
          <p className="text-muted-foreground">Both fields are omitted when not applicable.</p>
        </section>

        <section id="fund-transfers-pre-flight-validation" className="space-y-4">
          <h2 className="text-2xl font-semibold">Fund transfers - pre-flight validation</h2>
          <p className="text-sm text-muted-foreground">
            Endpoint: POST /cards-adapter/v1/public/accounts/transfer-funds
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Transfer requests are now validated before processing. The request is checked for a valid currency and
            sufficient available balance on the source account.
          </p>
          <p className="text-muted-foreground">Invalid transfers are rejected with 400 Bad Request and an error field:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">unknown currency</code>: currencyISONum is not a
              recognized ISO-4217 currency
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">account with requested currency not found</code>: no
              account matches the requested currency
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">insufficient funds</code>: source account balance is
              below the requested amount
            </li>
            <li>
              <code className="bg-muted px-1 py-0.5 rounded">account not found</code>: source account could not be
              located
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Action: handle these 400 responses. Transfers that would previously have failed during processing now
            fail immediately with a clear error message.
          </p>
        </section>

        <section id="compatibility" className="space-y-4">
          <h2 className="text-2xl font-semibold">Compatibility</h2>
          <p className="text-muted-foreground">All changes in this release are backwards compatible:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>New fields are additive.</li>
            <li>Previously required parameters are now optional.</li>
            <li>New error responses apply only to requests that would have failed regardless.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
