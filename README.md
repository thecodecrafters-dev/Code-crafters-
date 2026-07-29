<p align="center">
  <img src="./docs/readme-banner.png" alt="CodeCrafters" width="100%" />
</p>

<p align="center">
  <a href="https://thecodecrafters.live/">Live website</a>
</p>

# CodeCrafters Landing Page

The production landing page for CodeCrafters—a digital product studio building high-performance websites, scalable platforms, and AI-powered products.

## Local development

**Prerequisite:** Node.js 20 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Serve the landing page locally on port 3000 |
| `npm run lint` | Run the TypeScript validation |
| `npm run build` | Create the deployable static site in `dist/` |
| `npm run preview` | Preview the static site on port 4173 |

## Project structure

```text
site/                     Exported Framer site and local assets
scripts/build-static.mjs  Production build script
docs/                     Repository documentation assets
src/                      Preserved previous React implementation
dist/                     Generated deployment output
```

## Deployment

The production build is static and Vercel-ready:

- Build command: `npm run build`
- Output directory: `dist`

The canonical production URL is [thecodecrafters.live](https://thecodecrafters.live/).

## Brand

Primary color: `#91f108`
