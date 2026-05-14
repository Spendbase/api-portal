# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static documentation portal for the Spendbase API. Next.js 16 App Router + React 19 + Tailwind v4 + shadcn/ui (New York style, neutral base). Deployed as a static export to GitHub Pages under `/api-portal`.

## Commands

Package manager is `pnpm` (lockfile present; CI uses pnpm). `npm`/`yarn` will work locally but break CI cache.

```
pnpm install
pnpm dev          # next dev (no basePath)
pnpm build        # next build → static export to ./out, basePath /api-portal in production
pnpm start        # next start (rarely used; export is the deploy target)
pnpm lint         # eslint .
```

No test setup. No typecheck script — `next.config.mjs` has `typescript.ignoreBuildErrors: true`, so build will NOT catch type errors. Run `pnpm exec tsc --noEmit` manually when changing types.

## Architecture

Three-pane docs layout: `DocsHeader` (sticky, with client-side search) + `DocsSidebar` (left nav) + page content + `CodePanel` (right-side curl examples). Sidebar/header live in `app/docs/layout.tsx`; each section page renders `<{Section}Content />` and `<CodePanel section="..." />` side by side.

Routes are static segments under `app/docs/{getting-started,accounts,cards,transactions}/page.tsx`. Root `/` and `/docs` redirect to `/docs/getting-started`. All content is hard-coded JSX — no MDX, no CMS, no fetching.

**Single source of truth duplication** (important when adding/removing endpoints): the endpoint list is repeated in THREE places and must stay in sync:
1. `components/docs-sidebar.tsx` — `sections[]` (nav links + anchor IDs)
2. `components/docs-header.tsx` — `ALL_SECTIONS[]` (search index)
3. `components/docs-content.tsx` — the `<section id="...">` anchors inside `GettingStartedContent` / `AccountsContent` / `CardsContent` / `TransactionsContent`

Anchor IDs (`#get-card`, `#transfer-money`, etc.) are the contract between all three. `components/code-panel.tsx` has its own `EXAMPLES` array of curl snippets keyed by `section`.

`components/docs-content.tsx` is ~1000 lines holding all four content sections plus local helpers (`GetBadge`/`PostBadge`/..., `Param`, `ResponseBlock` usage). Edit in place — do not split unless asked.

## Path aliases & UI

`@/*` → repo root (see `tsconfig.json`). shadcn config in `components.json`: components in `@/components/ui`, utils in `@/lib/utils`, hooks in `@/hooks`. Icons: `lucide-react`. Use `cn()` from `@/lib/utils` for class merging.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`: pnpm install → `pnpm build` (with `PAGES_BASE_PATH` env from `actions/configure-pages`) → upload `./out` → deploy to Pages. `next.config.mjs` hard-codes `basePath: '/api-portal'` in production and sets `output: 'export'` + `images.unoptimized: true`. If repo name changes, update `basePath`.
