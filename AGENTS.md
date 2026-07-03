# Kost Baitul Utrujjah — agent guide

## Next.js v16 + Tailwind v4

This uses **Next.js 16** (may have breaking changes from your training data). If something looks off, check `node_modules/next/dist/docs/` before writing code.

**Tailwind CSS v4** — uses `@import "tailwindcss"`, `@theme inline`, `@utility`, `@custom-variant`. PostCSS plugin is `@tailwindcss/postcss`. **Do NOT use `@apply` with `theme()`, `@config`, or `tailwind.config` files** — they don't exist in v4.

## Key packages

| Purpose | Package | Import path |
|---|---|---|
| Animation | `motion` (not framer-motion) | `"motion/react"` |
| Headless UI | `@base-ui/react` (not Radix) | `"@base-ui/react/*"` |
| Icon library | `lucide-react` | `"lucide-react"` |
| Class merge | `clsx` + `tailwind-merge` | via `@/lib/utils` `cn()` |
| shadcn style | `base-nova` | components in `@/components/ui/` |

shadcn components use `data-slot` attributes and `@base-ui/react/use-render` + `@base-ui/react/merge-props` (e.g. `Badge`). Not the classic Radix pattern.

## Commands

```sh
npm run dev      # dev server (Turbopack enabled by default in next.config.ts)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint v9 flat config (eslint.config.mjs)
```

No tests exist in this project.

## Project structure

```
lib/data.ts                 # All city data, phone, galleries, maps
app/layout.tsx              # Root layout: Navbar, Footer, WaButton, JsonLd
app/page.tsx                # Main landing: Hero → card links to city pages
app/[city]/page.tsx         # Dynamic route: /bekasi, /jogja, /semarang
components/
  hero.tsx, main-lokasi.tsx          # Main page sections
  city-hero.tsx, city-gallery.tsx,   # Per-city page sections
  city-harga.tsx, city-lokasi.tsx
  city-json-ld.tsx                    # Per-city LocalBusiness schema
  navbar.tsx, footer.tsx, wa-button.tsx, json-ld.tsx  # Shell (server: footer, json-ld)
  ui/                                # shadcn base-nova components
```

Multi-page per city for SEO (`/bekasi`, `/jogja`, `/semarang`). Each city page has `generateStaticParams` + `generateMetadata` for unique title/description/OG per city.

## Conventions

- **Path alias**: `@/*` maps to repo root (not `src/`). Use `@/components/...`, `@/lib/...`.
- **Custom color tokens** (from `app/globals.css` `@theme`): `sage`, `sage-light`, `sage-dark`, `cream`, `warm-white`, `soft-pink`, `soft-pink-light`
- **Fonts**: Geist (sans, via `--font-sans`), Geist Mono (`--font-geist-mono`), Playfair Display (heading, via `--font-heading`)
- **Language**: Indonesian (`lang="id"`, `locale: "id_ID"`)
- **All page sections** are client components with `"use client"` for scroll animations. Layout shell components (Footer, JsonLd) are server components.
- **Images**: remote images allowed only from `placehold.co` (listed in `next.config.ts` `images.remotePatterns`).
- **No `.env` files** are committed (gitignored).
- **Deployment**: Vercel target at `kost-baitul-utrujjah.vercel.app`.
