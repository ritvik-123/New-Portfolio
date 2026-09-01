# Ritvik Mahapatra, Portfolio

My personal portfolio site, built with Next.js and Tailwind CSS.

**Live site:** https://ritvik-123.github.io/New-Portfolio/

## What's here

- A home page with an intro, bio, skills, and the 4 projects I'd point someone to first.
- Two dedicated project pages, one for my Master's in Computer Science work and one for my
  Bachelor's in Mechatronics Engineering work, each with real photos and demo clips from the
  projects themselves.
- Publications, contact links, and a downloadable resume.

## Features

- Glassmorphism styling: a blurred background photo with frosted glass panels for the nav,
  cards, and buttons.
- Light, dark, and system theme modes, with the choice remembered across visits.
- A handful of accessibility and usability touches: skip to content link, visible keyboard
  focus states, respect for reduced motion and high contrast preferences, a scroll progress
  indicator, and a back to top button.
- Fully static, no backend or database. All content is data driven from a single TypeScript
  file, so the whole site can be re-skinned by editing one place.

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), statically exported for GitHub Pages
- TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- GitHub Actions for CI/CD, deploying automatically on every push to `main`

## Running it locally

```
npm install
npm run dev
```

Then open `http://localhost:3000`.

```
npm run build
```

builds the static site into `out/`.

## Using this as a template

Everything shown on the site (bio, projects, papers, skills, social links) lives in
`src/data/content.ts`. Point that file at your own information and swap the photos in
`public/images/` to make this your own. A couple of notes if you do:

- Source images are compressed with [`sharp`](https://sharp.pixelplumbing.com/) before landing
  in `public/images/`; raw originals aren't committed.
- Video (see the LiftFormVision project card) is compressed with `ffmpeg`, pulled in on demand
  via the `ffmpeg-static` package rather than installed system wide.
- Internal links use `next/link`, so GitHub Pages' base path is handled automatically. A plain
  local asset link (like the resume) needs that path applied manually through the
  `withBasePath` helper in `src/lib/basePath.ts`, since GitHub Pages serves this site from a
  `/New-Portfolio` subpath rather than the domain root.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages automatically. `NEXT_PUBLIC_BASE_PATH` in that workflow is set to
`/New-Portfolio` to match this repo's name.
