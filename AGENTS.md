# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands
Prereqs: Node.js + npm (repo uses `package-lock.json`).

Install deps:
- `npm install`

Run dev server (Vite + React Fast Refresh):
- `npm run dev`

Production build:
- `npm run build` (outputs `dist/`)

Preview the production build locally:
- `npm run preview`

Lint:
- `npm run lint`
- Lint a single file: `npx eslint src/App.jsx` (or any path)

Tests:
- No test runner is currently configured (no `test` script in `package.json`).

## High-level architecture
This is a small Vite + React app with a WebGL starfield background and Tailwind CSS styling.

Entry points / rendering flow:
- `index.html` mounts the app at `#root` and loads `src/main.jsx`.
- `src/main.jsx` creates the React root and renders `<App />` (wrapped in `StrictMode`).
- `src/App.jsx` is the top-level UI composition.

WebGL background (core “engine”):
- `src/components/Galaxy.jsx` renders a full-screen starfield using OGL (a lightweight WebGL helper library).
- The component:
  - Creates an `ogl.Renderer` and appends its `gl.canvas` to a container div.
  - Uses a full-screen triangle (`ogl.Triangle`) with custom `vertexShader`/`fragmentShader` strings.
  - Drives animation via `requestAnimationFrame`, updating shader uniforms like `uTime`, `uMouse`, and `uResolution`.
  - Handles resize and (optionally) mouse interaction/repulsion; cleans up listeners/canvas on unmount.
- The background is mounted in `App.jsx` as a fixed, full-viewport layer (`fixed inset-0 -z-10`).

Animation libraries (GSAP):
- `src/App.jsx` imports `gsap` and registers `ScrollTrigger` and `SplitText` globally via `gsap.registerPlugin(...)`.
- Actual timeline/trigger usage appears intended but is currently minimal; look here first when adding scroll-based animations.

Styling (Tailwind v4):
- Tailwind is wired through Vite via `@tailwindcss/vite` in `vite.config.js`.
- Global styles live in `src/index.css` and start with `@import 'tailwindcss';`.
- This codebase uses Tailwind v4’s `@utility` blocks for custom utility classes (e.g. `galaxy-container`, `btn-neon-amber`).

Static assets:
- Vite serves `public/` at the site root (e.g. `public/logo.png` is referenced as `/logo.png` in `App.jsx`).

## Where to make common changes
- Global layout / page sections / navigation: `src/App.jsx`
- Starfield look/feel + performance knobs (density, glow, interaction): `src/components/Galaxy.jsx` (uniforms + shader code)
- Design tokens / custom utilities: `src/index.css`
- Tooling config: `vite.config.js`, `eslint.config.js`, `package.json`
