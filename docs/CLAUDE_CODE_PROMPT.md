# Prompt for Claude Code

Paste this into Claude Code from inside your project folder.

---

Build and deploy a small web app called **Event Planner**. It already exists as a clickable prototype; your job is to turn it into a real, deployable static app. Keep it simple — simple for users, simple to maintain.

## Concept
Users plan an event (wedding, birthday, anniversary, graduation) by booking vendors **by the hour** instead of full-day packages, so they can stay inside a budget. Five categories: Venue, Photographer, Music DJ, Makeup Artist, Food Chef.

## Stack
- Vite + React + TypeScript, plain CSS (or CSS modules). No UI framework, no backend, no database.
- Vendor data in a single local `src/data/vendors.ts`.
- State in React only (`useState` / one small context). No Redux.
- Mobile-first, max content width ~430px, works fine on desktop.

## Screens (5, client-side routing or a single state switch)
1. **Plan** — event type chips; inputs for date, city, guest count, budget; list of the 5 categories each showing "from $X/hr" or "Added".
2. **Browse** — vendors in the chosen category: name, meta line, hourly rate, 3-hour reference price.
3. **Vendor detail** — image placeholder, name, bio, hours stepper (− / +, min 1), live estimate = rate × hours, start-time slots, two reviews, sticky "Add to event" bar showing budget remaining.
4. **My event** — one row per selection (category, name, hours × rate, subtotal, Remove), "Still missing" list of categories not yet chosen, total, progress bar vs budget, "Send booking requests".
5. **Sent** — confirmation with vendor count, total, event type, date; button back to Plan.

Bottom tab bar on Plan / Browse / My event: "Plan" and "My event (n)".

## Rules
- One vendor per category; adding a second replaces the first.
- Estimate = hourly rate × hours, everywhere.
- Over budget is allowed: show the overage in red, do not block.
- Date, city, guests and budget are global and shown as a filter line on Browse and My event.
- Persist the plan to `localStorage` under one key so a refresh does not lose it.

## Design
- Font: Outfit (Google Fonts), weights 300–600.
- Neutral palette: background `#fff`, text `#141416`, secondary `#8a8a90`, borders `#ececee` / `#e7e7ea`.
- One accent color, used only for primary buttons, the budget bar and "Added" tags. Default `oklch(0.55 0.13 260)`; put it in one CSS variable so it can be changed in one place.
- Over-budget red: `oklch(0.55 0.15 30)`.
- Radii: cards 14–16px, pills 999px. Generous whitespace, no shadows except the outer phone frame.
- Portfolio and thumbnail images: diagonal-stripe CSS placeholders with a small monospace caption. Do not generate or hand-draw illustrations.

## Deliverables
- Working app, `npm run build` clean, no TypeScript or console errors.
- Keep `docs/USER_MANUAL.md` in the repo (already written).
- `README.md`: what it is, how to run, how to deploy.
- Deploy the static build to Netlify or Vercel and give me the live URL.
- Accessible basics: real `<button>` elements, labeled inputs, visible focus states.

Do not add features I did not ask for: no accounts, no payment, no vendor portal, no chat, no maps.
