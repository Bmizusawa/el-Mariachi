# El Mariachi — Prattville, AL

Custom website for El Mariachi Mexican Restaurant, 1675 Hwy 31 N,
Prattville, AL 36067 · (334) 361-5121. Built with Next.js + TypeScript.
All menu content was transcribed from the restaurant's printed menu
photos — see `MENU_REVIEW.md` for flagged items.

## Install & run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
npm test           # data integrity checks
npm run typecheck  # TypeScript check
```

## Editing the menu

Menu content lives in `data/` as TypeScript data — no database needed.

| File | Contents |
|---|---|
| `data/starters.ts` | Appetizers, Nachos, Quesadillas, Salads, Specials, soft drinks |
| `data/classics.ts` | Fajitas, Enchiladas, Burritos, Desserts |
| `data/grill.ts` | From the Grill (steaks, tacos, birria…) |
| `data/seafood.ts` | Seafood, Flautas, Chimichangas, Combinations |
| `data/lunch.ts` | Lunch menu (Mon–Fri 11–2) |
| `data/kids.ts` | Kids meals |
| `data/a-la-carte.ts` | À la carte |
| `data/drinks.ts` | Margaritas, daiquiris, wine, beer, mixed drinks |
| `data/restaurant.ts` | Address, phone, hours, notices |

Each item looks like:

```ts
b('B4', 'Chris’s Burrito Supreme', 'Description…', '13.95', {
  options: [option('With rice and beans', '14.95')],
  notes: ['Any note to show under the item'],
}),
```

- **Update a price:** change the string (`'13.95'`) or the option price.
- **Add an item:** copy a line and edit — ids are generated automatically.
- **Items with no printed price:** pass `null` and a note so nothing is
  invented.
- **Update hours/phone/address:** edit `data/restaurant.ts` once — it
  updates the header, footer, visit page and SEO schema everywhere.

## Swapping images

Site images live in `public/images/` as WebP crops of the real menu
photography. To regenerate them after dropping new menu photos into the
repo root (`image0.jpeg`…), run `npm run assets` and adjust the crop
coordinates in `scripts/prepare-assets.mjs`.

## Design rationale

The design is derived from the restaurant's actual printed menu, not a
template:

- **Cover illustration** — the mariachi-on-a-cobblestone-street artwork
  from the menu cover is the hero image. No stock photos are used.
- **Palette** — deep navy/ink from the menu covers, parchment/cream from
  the page interiors, terracotta and gold from the printed accents.
- **Typography** — Fraunces (warm editorial serif) for headings,
  Source Serif 4 for readable body text, Courgette script used sparingly
  for the "family owned" voice that echoes the cover's script.
- **Food photography** — framed crops of the menu's own dish photos
  (fajitas, molcajete, enchiladas, birria, margarita) with the same
  cream-frame treatment the printed menu uses.

### Mobile menu UX

The menu is real HTML (not a PDF/image): segmented tabs
(Dinner · Lunch · Kids · À La Carte · Drinks), a sticky category jump
bar, live search, dotted-leader price rows, and two-column print-style
layout on desktop that collapses cleanly on phones.

## Review status

`MENU_REVIEW.md` lists every flagged item: the duplicate A11 code, the
G5 name discrepancy, DoorDash vs. printed price differences, kids-meal
pricing, and verbatim small-print notices. Confirm these with the owner
before treating the menu as final.
