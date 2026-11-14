# Simple and Sorted — store site (first draft)

Storefront for **Simple and Sorted LLC** (simplensorted.com): small-space home organization, sold as room-by-room
collections (Kitchen & Pantry, Closet, Bath). Drop-shipped from supply partners; no inventory.

Next.js (App Router, Next 16 with Cache Components) + TypeScript + Tailwind CSS v4. No Shopify.
Checkout uses Stripe Checkout through a server route.

> **Draft status:** every product is a SAMPLE placeholder, policy pages are drafts, and checkout is disabled
> until Stripe keys are set. Nothing here is deployed.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional; checkout stays disabled without keys
npm run dev                  # http://localhost:3000
npm run lint
npm run build && npm start   # production build
```

Requires Node 20+.

## Environment variables

| Name | Where | Purpose |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | server only | Creates Stripe Checkout sessions in `src/app/api/checkout/route.ts`. |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | client + server | Enables the checkout button. Inlined at build time, so rebuild after changing it. |
| `NEXT_PUBLIC_SITE_URL` | both | Canonical URL for metadata, sitemap, robots, and Stripe success/cancel redirects. Defaults to `https://simplensorted.com`. |

If either Stripe key is missing, the cart shows a friendly "Checkout is not enabled yet" message and
`POST /api/checkout` returns `503 { error: "checkout_not_enabled" }`. Use `sk_test_` / `pk_test_` keys while testing.
Prices are always taken from the server-side catalog, never from the browser.

## Adding or editing products

All products live in `src/data/products.ts` (typed `Product`):

1. Copy an entry, give it a unique `slug`, set `collection` (`kitchen-pantry`, `closet`, or `bath`).
2. Set `price` in **cents** (e.g. `2900` = $29.00). Optional `compareAtPrice` shows a struck-through price.
3. Fill `summary`, `description`, `features`, `dimensions`, `material`, `shipsIn`. Set `featured: true` to show on Home.
4. Images: products currently use neutral SVG placeholder illustrations (`art`). When real supplier photos are
   available (and you have rights to use them), add them under `public/products/` and render `image` in
   `ProductArt`/`ProductCard`.
5. Remove the `sample: true` field (and the draft banner in `src/components/Header.tsx`) before launch.

New pages are statically generated from this file (`generateStaticParams`), and the sitemap updates automatically.

## Structure

- `src/app/` — routes: `/`, `/shop` (`?collection=` filter), `/products/[slug]`, `/cart`, `/checkout/success`,
  `/checkout/cancel`, `/about`, `/contact`, `/policies/[policy]` (shipping, returns, privacy, terms),
  `sitemap.xml`, `robots.txt`, `opengraph-image`, `icon.svg`, `favicon.ico`, `apple-icon.png`.
- `src/lib/cart.ts` — client cart in `localStorage` (`useSyncExternalStore`).
- `src/components/` — header, footer, logo, product art, cards, cart view.
- `src/app/fonts/` — self-hosted variable fonts (Inter, Manrope; SIL Open Font License, licenses included).
- `public/brand/` — logo mark and wordmark SVGs.

## Brand

- Colors: linen `#F7F5F1` (background), white `#FFFFFF` (surface), sand `#EDE8DF`, line `#E2DDD4`,
  ink `#1E2A2B` (text), muted `#59666A`, accent sage-teal `#2F6B5E` (hover `#24564B`, tint `#E4EEEA`).
- Type: Manrope (headings, wordmark), Inter (body).

## Before launch checklist

- Replace sample products with real supplier products, photos, and prices.
- Finalize policy drafts (items in [brackets]) and have them reviewed.
- Set up the `ceo@simplensorted.com` mailbox/forward.
- Add Stripe keys in the hosting environment and run a test-mode purchase.

## Deploy

The site is intended to deploy on [Vercel](https://vercel.com) (Hobby) by importing this GitHub repository. Vercel detects Next.js; leave the install command as `npm install` and the build command as `npm run build`.

In the Vercel project settings, add these environment variables for Production (and Preview, if checkout should work there):

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_SITE_URL` — the public URL of that deployment, such as `https://simplensorted.com`

`NEXT_PUBLIC_*` values are inlined at build time, so change them and redeploy to pick up a new value. Checkout stays disabled, with the same friendly message as local development, until both Stripe keys are set. Use `sk_test_` / `pk_test_` keys until you are ready to accept live payments.
