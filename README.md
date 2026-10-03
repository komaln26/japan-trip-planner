# Japan Trip Planner 🗾

A React app for planning trips to Japan: explore destinations and build your itinerary.

**Live demo:** https://japan-trip-planner-beta.vercel.app/

## Features

- Browse 24 attractions across Shizuoka, Hiroshima and Nagoya
- Destination cards with category, cost, duration and description
- Save and unsave places, kept after a page refresh (custom `useLocalStorage` hook)
- Responsive layout for mobile, tablet and desktop
- Accessible, keyboard-friendly controls

## In progress

- Navbar with active-page highlighting
- Saved places page

## Roadmap

- [ ] Filter by city and category, and search by name
- [ ] Day-by-day itinerary builder
- [ ] Trip cost total
- [ ] Unit tests for the formatting and cost helpers (Vitest)
- [ ] Map view and drag-and-drop itinerary editing (v2)
- [ ] Deployment

## Tech stack
- **React 19** with **TypeScript**
- **React Router 7** for client-side routing
- **Vite** for dev server and builds
- **Tailwind CSS 4** for styling
- **ESLint** (typescript-eslint, react-hooks) for linting
- Deployed on **Vercel**

## Getting started

```bash
git clone https://github.com/komaln26/japan-trip-planner.git
cd japan-trip-planner
npm install
npm run dev
```

The app runs at the local URL Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Notes
Prices and opening details are approximate and may be out of date. Check official sources before travelling.
