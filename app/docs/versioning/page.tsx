import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Versioning — Spendbase API",
}

export default function VersioningPage() {
  return (
    <main className="flex-1 min-w-0 py-12 px-6 lg:px-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <div id="release-notes" className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Cards API - Changelog</h1>
          <p className="text-muted-foreground">Version date: 2026-06-25</p>
          <p className="text-muted-foreground leading-relaxed">
            This release adds cursor-based pagination to listing endpoints, reversal linkage on transaction
            details, pre-flight validation on fund transfers, and a new preferred identifier for card issuance.
            All changes are backwards compatible - existing integrations continue to work without modification.
          </p>
        </div>

        <section id="card-issuance-new-spendbaseuserid-field" className="space-y-4">
          <h2 className="text-2xl font-semibold">Card issuance - new spendbaseUserId field</h2>
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
                  <code className="bg-muted px-1 py-0.5 rounded">limit</code> (string): maximum number of items
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
