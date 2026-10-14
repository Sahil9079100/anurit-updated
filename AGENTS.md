# anurit-innovation

Next.js (App Router) + TypeScript + Tailwind CSS v4 marketing site for Anurit Innovation.

## Development Server

The Next.js development server runs on `$PORT` (default 8443). You don't need to start it
manually.

- Dev command: `npm run dev` (alias: `next dev -p ${PORT:-8443}`)
- Hot reload: Changes to source files are reflected immediately.

## Project Structure

This is the canonical project structure. Start with task-relevant files below.

- `src/app/layout.tsx` - Root layout. Imports `globals.css` and wraps the app in a client
  `SmoothScroll` provider (Lenis). Also the shared home of site-wide metadata.
- `src/app/page.tsx` - Home page.
- `src/app/<route>/page.tsx` - Each public route: `/about`, `/contact`, `/privacy`, `/terms`,
  `/products`, `/service`. Server components that export per-page `metadata` and render a view.
- `src/app/globals.css` - Global CSS entrypoint with the Tailwind CSS v4 import and font faces.
- `src/views/` - Client (`"use client"`) view components for interactive pages (About, Products).
- `src/components/` - Shared components (Navbar, Footer-aware, forms, services, legal shell).
- `src/sections/` - Home page sections.
- `src/data/` - Content data (services, products, about, company).
- `src/hooks/` - `useReveal` (scroll reveal) and `useSmoothScroll` (Lenis).
- `src/assets.ts` - Path constants for images under `public/assets/`.
- `public/assets/` - Static images, fonts and graphics.

## Conventions

- Client interactive components (Navbar, forms, service orbit, reveal-on-scroll views) are marked
  `"use client"`. Pages and static sections remain server components for SEO.
- Navigation uses `next/link`; internal hash anchors (service section links) use plain `<a>`.
- Per-page SEO lives in `export const metadata` on each route's `page.tsx`.

## Dependencies

- Runtime: Next.js 15, React 19, React DOM 19
- Styling: Tailwind CSS v4 via the `@tailwindcss/postcss` plugin (see `postcss.config.mjs`)
- Smooth scrolling: Lenis
- Build tooling: Next.js (static export via `output: "export"` to `out/`), TypeScript 5.7
- Formatting: oxfmt (`npm run format`)

## Styling

Tailwind CSS v4 through `@tailwindcss/postcss` configured in `postcss.config.mjs`.
`src/app/globals.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes
directly in JSX and put global CSS / theme customization in `globals.css`.