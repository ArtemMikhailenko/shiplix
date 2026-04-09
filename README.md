# Shiplix — Dev Studio Website

Production-ready landing page for Shiplix, a product-focused dev team from Ukraine.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom design system)
- **CSS animations** (Intersection Observer for scroll effects)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel --prod
```

## Project Structure

```
app/
├── layout.tsx          # Root layout with fonts & metadata
├── page.tsx            # Main page composing all sections
├── globals.css         # Global styles, animations, CSS variables
├── components/         # All section components
│   └── ui/             # Reusable UI components
└── lib/
    ├── constants.ts    # All data
    └── useFadeUp.ts    # Scroll animation hook
```
