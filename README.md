# Glossira Organic — Shopify theme

Custom Online Store 2.0 theme for [glossiraorganic.com](https://glossiraorganic.com).

## What is in here

| Folder | Purpose |
| --- | --- |
| `layout/` | Page shell (`theme.liquid`), password page shell |
| `templates/` | JSON templates for home, product, collection, pages, search, 404, blog |
| `sections/` | All sections, plus the header and footer groups |
| `snippets/` | Product card, price, icons, cart drawer, fonts, meta tags |
| `assets/` | `glossira.css`, `glossira.js`, self-hosted fonts |
| `config/` | Theme settings and their saved values |

## How the custom checkout is kept

The store's own cash-on-delivery checkout (`/pages/checkout`) and thank-you page
(`/pages/thank-you`) live as page content in the Shopify admin, not in this theme.
The theme only:

- prints those two pages exactly as written, with no theme styling
  (Theme settings → Checkout → "Pages shown without theme styling");
- sends cart and checkout buttons to `/pages/checkout`
  (Theme settings → Checkout → "Custom checkout page").

Product titles, prices, photos and descriptions also come straight from the
Shopify admin and are shown unchanged.

## Installing

1. Zip the theme folders (`assets config layout locales sections snippets templates`).
2. Shopify admin → Online Store → Themes → Add theme → Upload zip file.
3. Preview the uploaded theme, then Publish when happy. The old theme stays in
   the library and can be re-published at any time.

Or connect this repository branch under Add theme → Connect from GitHub.

## Fonts

Fraunces and Plus Jakarta Sans are bundled in `assets/` under the SIL Open Font
License 1.1.
