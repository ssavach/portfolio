# ssavach-portfolio

```
~/ssavach
> student. curious. building to understand.
```

Next.js 15 (App Router) + TypeScript + Tailwind + shadcn/ui.

## Dev

```bash
bun install
bun dev
```

→ http://localhost:3000

## Stack

- Next.js 15 (App Router, RSC)
- TypeScript
- Tailwind CSS v3
- shadcn/ui (new-york)
- lucide-react
- CSS animations puras (sin framer-motion)

## Estructura

```
app/
  layout.tsx      → orbes glow + grid background
  page.tsx        → hero + whoami + stack + proyectos + contacto
  globals.css     → tokens shadcn + keyframes + utilities
components/ui/    → button, card, badge (shadcn)
lib/utils.ts      → cn() helper
```

## Build

```bash
bun run build
bun start
```
