# Spendbase API Portal

Static documentation site for the Spendbase API. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui. Deployed as a static export to GitHub Pages at `/api-portal`.

## Stack

- **Next.js 16** — App Router, `output: 'export'` static build
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **shadcn/ui** — New York style, neutral base, `lucide-react` icons
- **TypeScript 5**
- **pnpm** (CI uses pnpm 10, Node 22)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Visiting `/` redirects to `/docs/getting-started`.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Run dev server (no basePath) |
| `pnpm build` | Static export to `./out` (uses `/api-portal` basePath in production) |
| `pnpm start` | Run production server (rarely needed; deploy target is static export) |
| `pnpm lint` | ESLint |

TypeScript build errors are ignored at build time (`next.config.mjs` → `typescript.ignoreBuildErrors: true`). Run `pnpm exec tsc --noEmit` for a real type check.

## Project layout

```
app/
  layout.tsx              # Root layout, fonts, favicons
  page.tsx                # → redirect to /docs/getting-started
  docs/
    layout.tsx            # Header + sidebar shell
    page.tsx              # → redirect to /docs/getting-started
    getting-started/page.tsx
    accounts/page.tsx
    cards/page.tsx
    transactions/page.tsx
components/
  docs-header.tsx         # Sticky header + client-side search
  docs-sidebar.tsx        # Left nav
  docs-content.tsx        # All four section bodies (GettingStarted / Accounts / Cards / Transactions)
  code-panel.tsx          # Right-side curl examples per section
  response-block.tsx
  ui/                     # shadcn components
hooks/                    # use-mobile, use-toast
lib/utils.ts              # cn() class merge
public/                   # icons, placeholder assets
```

Path alias: `@/*` → repo root.

## Adding or renaming an endpoint

Endpoint metadata is duplicated across three files and must be kept in sync. Anchor IDs (e.g. `#get-card`, `#transfer-money`) are the contract:

1. `components/docs-sidebar.tsx` — `sections[]` (nav link + anchor)
2. `components/docs-header.tsx` — `ALL_SECTIONS[]` (search index)
3. `components/docs-content.tsx` — the `<section id="...">` block inside the matching `*Content` component

For a curl snippet on the right-hand panel, also edit `EXAMPLES[]` in `components/code-panel.tsx`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`:

1. `pnpm install`
2. `pnpm build` with `PAGES_BASE_PATH` from `actions/configure-pages`
3. Upload `./out` and deploy to GitHub Pages

Production `basePath` is hard-coded to `/api-portal` in `next.config.mjs`. If the repo is renamed, update it there.
