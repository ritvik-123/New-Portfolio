## Portfolio Site

Next.js (App Router, TypeScript, Tailwind) portfolio, statically exported for GitHub Pages.

### Editing content

All real content lives in `src/data/content.ts` — profile info, socials, projects, and papers.
Replace the placeholder values there; the components in `src/components` render straight from it.

Put your resume PDF at `public/resume.pdf` (or update `profile.resumeUrl`).

### Local development

```
npm install
npm run dev
```

### Building

```
npm run build
```

Outputs a static site to `out/`.

### Deploying to GitHub Pages

Repo: https://github.com/ritvik-123/New-Portfolio — site will be served at
`https://ritvik-123.github.io/New-Portfolio/`.

1. Push this project to that repo (`main` branch).
2. In the repo settings, under **Pages**, set Source to **GitHub Actions**.
3. Push to `main` — the workflow builds and deploys automatically.

`NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml` is already set to `/New-Portfolio`
to match this repo name.
