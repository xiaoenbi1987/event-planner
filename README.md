# Event Planner

- **Live:** https://event-planner-by-the-hour.netlify.app
- **Repo:** https://github.com/xiaoenbi1987/event-planner

Plan an event by booking vendors **by the hour** instead of full-day packages, so the total stays
inside a budget you set up front.

Five categories — Venue, Photographer, Music DJ, Makeup Artist, Food Chef. You set the frame (event
type, date, city, guests, budget), pick one vendor per category, choose how many hours you need, and
watch the running total against the budget. Going over is allowed: the app shows the overage in red,
it does not block you.

Five screens: **Plan → Browse → Vendor detail → My event → Sent**.

## Stack

- Vite + React + TypeScript, plain CSS
- No backend, no database, no UI framework, no router — screens are a single state switch in `src/App.tsx`
- Vendor data lives in one file: `src/data/vendors.ts`
- Plan state is React context (`src/state/`), persisted to `localStorage` under `event-planner.plan`
- Mobile-first, content capped at 430px, framed as a phone on wider screens

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Deploy

The build output in `dist/` is a plain static site — any static host works.

**Netlify** (what the live site uses) — `netlify.toml` sets the build command (`npm run build`) and
publish directory (`dist`). The site is linked to this repository's `main` branch through a deploy
key and a push webhook, so every push to `main` triggers a rebuild. To set the same thing up from
scratch, connect the repository at [app.netlify.com](https://app.netlify.com) → *Add new project* →
*Import an existing project*. From the CLI:

```bash
npx netlify-cli deploy --prod
```

**Vercel** — import the repository at [vercel.com/new](https://vercel.com/new). Vercel detects Vite
and uses `npm run build` with `dist` as the output directory. From the CLI:

```bash
npx vercel --prod
```

## Changing things

- **Vendors and prices** — `src/data/vendors.ts`. Each vendor needs a category, name, meta line,
  hourly rate, bio, image caption, start-time slots and two reviews. The "from $X/hr" line on Plan is
  derived from the lowest rate in each category.
- **Accent colour** — the `--accent` variable at the top of `src/styles.css`. It is the only colour
  used for primary buttons, the budget bar and the "Added" tags. Over-budget red is `--over`.
- **Images** — portfolio and thumbnail images are CSS diagonal-stripe placeholders with a monospace
  caption (`src/components/Placeholder.tsx`), not real files.

## Docs

- [`docs/USER_MANUAL.md`](docs/USER_MANUAL.md) — how to use the app (EN / 中文)
- [`docs/DEMO_SCRIPT.md`](docs/DEMO_SCRIPT.md) — three-minute demo walkthrough

## Scope

Deliberately out of scope: accounts, payment, a vendor portal, chat and maps. Sending booking
requests is a confirmation screen — nothing leaves the browser.

