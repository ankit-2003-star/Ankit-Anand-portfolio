# Ankit Anand — Portfolio

A dark, terminal-inspired portfolio built with Vite + React (JavaScript), featuring an
interactive, draggable 3D scene in the hero (react-three-fiber / three.js) and tilting
3D project cards.

## Stack

- Vite + React (JS)
- three.js + @react-three/fiber + @react-three/drei — the draggable 3D hero scene
- framer-motion — installed and ready if you want to add extra motion
- Plain CSS with a small design-token system (see `src/index.css`)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

```
src/
  data/portfolio.js     ← all your content lives here: name, bio, skills, projects
  components/
    HeroScene.jsx        ← the draggable 3D core (drag to rotate, auto-spins when idle)
    TiltCard.jsx          ← reusable 3D-tilt card used by Focus & Projects
    Nav.jsx, Hero.jsx, About.jsx, Focus.jsx, Skills.jsx, Projects.jsx, Contact.jsx, Footer.jsx
  App.jsx / App.css       ← page composition + component styles
  index.css               ← design tokens (colors, fonts), global + section styles
```

## Personalizing

- **Content**: edit `src/data/portfolio.js` — profile info, skill groups, focus areas,
  and the project list (pulled from your pinned GitHub repos + ML projects).
- **Colors/fonts**: edit the CSS variables at the top of `src/index.css`.
- **Resume link**: add a `resumeUrl` to `profile` in `portfolio.js` and wire it into
  `Hero.jsx`'s CTA buttons if you want a "Download résumé" button.
- **Deploying**: this is a static site after `npm run build` (output in `dist/`) —
  works out of the box on Vercel, Netlify, GitHub Pages, or Cloudflare Pages.
