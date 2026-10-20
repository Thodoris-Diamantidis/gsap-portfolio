# Thodoris Diamantidis — Portfolio

Personal portfolio of Thodoris Diamantidis, Junior Full-Stack Web Developer. A single-page site with a WebGL starfield, an interactive 3D Rubik's cube and a scroll-driven project showcase built with GSAP.

## Tech stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **GSAP 3** with **ScrollTrigger**: hero intro timeline and the pinned horizontal project showcase
- **React Three Fiber** / **drei** / **three.js**: 3D Rubik's cube in the hero (lazy-loaded in its own chunk)
- **OGL**: full-screen WebGL starfield background

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Sections

| Section    | What it shows                                                                         |
|------------|---------------------------------------------------------------------------------------|
| Hero       | Name, title, intro, CTAs and the 3D cube; social links on wide screens                |
| About      | Background and what I care about when building software                               |
| Stack      | Technologies I currently work with                                                    |
| Experience | Roles, split into **Software** and **Business** tabs                                  |
| Projects   | Case-study cards in a horizontal showcase: vertical scroll moves the cards sideways  |

## Editing content

Most content lives in plain data files, so updating the site rarely means touching layout code.

| What                          | File                                |
|-------------------------------|-------------------------------------|
| Nav links, socials, CV, blog  | `src/constants/navigation.js`       |
| Tech stack tiles              | `src/constants/stack.js`            |
| Experience entries (per tab)  | `src/constants/experience.js`       |
| Projects                      | `src/constants/projects.js`         |
| CV download                   | `public/Thodoris_Diamantidis_CV.pdf` |

Notes:
- A nav link's `href` must match a section `id` (e.g. `#projects`).
- Social links with an empty `href`, and the Blog link while `blogUrl` is empty, should be filled in before launch.
- Projects take an optional `note` (shown instead of links, e.g. for a private codebase).

## Project showcase

`src/components/ProjectShowcase.jsx` pins the Projects section and maps vertical scroll to horizontal movement with GSAP ScrollTrigger. It snaps to the nearest card, and each card lands centred.

- **Feel:** two constants control how much scrolling moves one card (lower = lighter, higher = stickier):
  - `SCROLL_PER_PX`: scroll per pixel of horizontal travel; sets the feel on wide screens.
  - `SCREENS_PER_CARD`: minimum scroll per card as a fraction of screen height; sets the feel on phones.
- **When it pins:** controlled by `PINNED_QUERY` in the component and the matching `pinned` Tailwind variant in `src/index.css`. Keep the two in sync.
- **Fallback:** users with reduced motion enabled, and screens under 560px tall, get a native swipe carousel instead.
- **Phones:** pinned cards hide the "What I built" bullets so each card fits on one screen.

## Accessibility & performance

- Respects `prefers-reduced-motion`: the hero intro, the starfield animation and smooth scrolling are disabled, and the showcase becomes a swipe carousel.
- Semantic headings (one `h1`), labelled icon-only controls, visible keyboard focus. Tabbing into an off-screen project card scrolls it into view.
- three.js is code-split, so the initial JS is ~140 KB gzipped (vs ~405 KB with it bundled in) and the hero text paints before the 3D model loads.
- The 3D cube only enables drag-to-rotate for mouse/trackpad users, and wheel zoom is off, so it never traps page scrolling.
