# Desi Compass — React Website

Vite + React + Tailwind v4 + Framer Motion.

## Run locally
```
npm install
npm run dev
```

## Current state
- ✅ Navbar (transparent → glass on scroll, mobile menu, gold hover underline)
- ✅ Hero (text reveal, gold particles, mouse-follow glow, compass watermark, scroll indicator)
- ⏳ About, Signature Menu, Featured Dishes, Gallery, Why Choose Us, Reviews, Reservation CTA, Contact, Footer — next iterations

## Hero video background
Hero.jsx looks for `/public/videos/hero-bg.mp4`. Drop your footage there with that
exact name and it plays automatically — if the file is missing it falls back
to the gold/black gradient atmosphere (no broken video icon, no console error
shown to the visitor).

## Design tokens
Colors and fonts live in `src/index.css` under `@theme` (Tailwind v4 syntax):
- `--color-ink` #1A0F10, `--color-umber` #603913, `--color-gold` #F2BB3C,
  `--color-gold-soft` #F7D27A, `--color-parchment` #F3E9DC
- Display font: Cormorant (italic accents) · Body/UI font: Jost

## Signature element
The "wayfinding" motif — Dubai's real coordinates in the hero eyebrow, and
the rotating compass-rose watermark (`src/components/CompassMark.jsx`) — ties
every section back to the compass in the logo and the "Navigate Your Taste
Journey" line, instead of generic decoration.
