# Personal Website

Personal portfolio site for **Nuno Eufrasio — Product Designer**.

Built with [Vite](https://vite.dev/) + [React](https://react.dev/) +
[TypeScript](https://www.typescriptlang.org/), styled with
[Tailwind CSS v4](https://tailwindcss.com/), and using
[shadcn/ui](https://ui.shadcn.com/) components.

## Tech stack

- **Vite** — build tool & dev server
- **React 19 + TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **shadcn/ui** — accessible component primitives (Button, Card, …)

## Getting started

Requires **Node.js ≥ 22**.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Type-check + production build (outputs to dist/)
npm run build

# Preview the production build locally
npm run preview
```

## Project structure

```text
src/
├── components/
│   └── ui/          # shadcn/ui components (button, card, …)
├── sections/        # Page sections (header, hero, work, about, footer)
├── lib/             # Utilities + site content config
│   ├── site-config.ts   # Name, role, nav, social links, work placeholders
│   └── utils.ts         # cn() class-merge helper
├── App.tsx          # Composes the sections into the single-page layout
└── main.tsx         # App entry point
```

Most editable content (name, role, intro, nav links, social URLs, and the
placeholder work items) lives in [`src/lib/site-config.ts`](src/lib/site-config.ts).

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component>
```

Components are installed into `src/components/ui/`.

## Deployment

The site deploys to **GitHub Pages** automatically on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Vite's `base` is set to `/personal-website/` in
[`vite.config.ts`](vite.config.ts) so asset paths resolve correctly under the
`github.io/personal-website/` subpath.

**One-time setup:** in the repository, go to
**Settings → Pages → Build and deployment → Source** and select
**GitHub Actions**.
