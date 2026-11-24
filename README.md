# Del Mar Barber Shop — website

Next.js 16 (App Router) + React 19 + Tailwind CSS 4. One page, fully static.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where to edit

- **All business info** (phone, address, booking link, hours, prices, gallery, reviews): `lib/shop.ts`
- **Photos**: `public/images/` (gallery photos in `public/images/work/`)
- **Colors and fonts**: `app/globals.css` (`@theme` block). Brand colors are `#232122` and white.

## Sections

1. Hero: the shop window, rebuilt (barber-pole frame, sign bands, live open/closed status)
2. Services and prices (price board)
3. Fresh from the chair: gallery from Instagram, with a photo viewer
4. The shop
5. Reviews from Google
6. Hours and location, with map
7. Footer, plus a Call / Book bar on phones

Other pages: `/about` (`app/about/page.tsx`) and `/health-and-safety` (`app/health-and-safety/page.tsx`).
Old Squarespace URLs (`/covid-safety`, `/services`, `/gallery`, `/contact`) redirect to the new pages in `next.config.ts`.

Booking stays on Square: every "Book" button opens the shop's Square booking page.
