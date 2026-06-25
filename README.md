# Buildsasa — Next.js site

A faithful Next.js (App Router) port of the Buildsasa marketing site. The design, content, and data are identical to the original static site — the win is that the **Header and Footer are now single shared components**, so they're guaranteed identical on every page and can never drift again.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To build for production:

```bash
npm run build
npm start
```

## How it's structured

- `app/layout.jsx` — the one layout every page shares. Loads all CSS, the preloader/offcanvas/search chrome, the `<Header />` and `<Footer />` components, and the JavaScript plugins (jQuery, GSAP, Swiper, etc.).
- `components/Header.jsx` / `components/Footer.jsx` — **single source of truth** for the header and footer. Edit once, changes everywhere.
- `content/` — each page's HTML body, kept exactly as the original design. `_header.html`, `_footer.html`, `_pre.html`, `_search.html` are the shared chrome.
- `app/<route>/page.jsx` — one tiny file per page that injects its body from `content/`.
- `public/assets/` — all CSS, JS, fonts, and images.

## Routes

`/` (home), `/about`, `/service` (features), `/service-details` + `/feature-*` (module pages), `/pricing`, `/contact`, `/faq`, `/news` (blog), `/news-details`, `/team`, `/team-details`, plus a 404.

## Notes

- Navigation uses normal `<a>` links (full page loads) so the template's jQuery/GSAP plugins (hero slider, sticky header, mobile menu, scroll animations) initialise on every page exactly as designed.
- Forms post to Formspree (contact → `mqevavod`, pricing → `xykqzqqd`) and clear on submit, same as before.
- Deploy anywhere that runs Node (Vercel, Railway, etc.). `npm run build` then `npm start`, or use the platform's Next.js preset.

## To edit the header or footer everywhere at once

Edit `content/_header.html` or `content/_footer.html` — every page updates automatically.
