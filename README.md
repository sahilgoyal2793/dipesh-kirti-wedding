# Dipesh & Kirti — Wedding Website

Wedding invitation site for Dipesh & Kirti, 3–4 January 2027, Krishna Hotel & Resort, Pushkar.

Built with Next.js (App Router), TypeScript, Tailwind CSS and the shadcn/ui project structure. It exports as a fully static site.

## Where things live

- `lib/wedding.ts` — **edit wedding details here**: function names and times, WhatsApp RSVP number, countdown time.
- `app/page.tsx` — the page, section by section.
- `app/site.css` — the haveli look (colours, fonts, layout). `app/globals.css` holds Tailwind and the shadcn theme tokens.
- `components/ui/` — shadcn-style UI components, including `glass-folder-cards.tsx` (the glass folders section).
- `components/site/` — pieces specific to this site (entry gate, countdown, RSVP form, folders).
- `public/img/` — couple photos.

`components.json` tells the shadcn CLI where things go, so `npx shadcn@latest add <component>` drops new components into `components/ui/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to out/
```

## Deploy

- **Vercel:** import the repository; it detects Next.js, no settings needed.
- **GitHub Pages:** build with `NEXT_PUBLIC_BASE_PATH=/dipesh-kirti-wedding npm run build` and publish the `out/` folder (for example with the `actions/deploy-pages` workflow).
