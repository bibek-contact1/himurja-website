# HIMURJA

Premium static storefront for HIMURJA No. 01, a transparent botanical recovery oil brand.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- GitHub Pages static export

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit --audit-level=moderate
```

## Deployment

The site exports to static files with `next build`. GitHub Actions publishes the `out` directory to GitHub Pages whenever `main` is pushed.
