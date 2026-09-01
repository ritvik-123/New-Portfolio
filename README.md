## Portfolio Site

Next.js (App Router, TypeScript, Tailwind) portfolio, statically exported for GitHub Pages.

### Pages

- `/` home, with Hero, About, Featured Projects (the 4 flagship projects), a chooser linking
  to the two degree pages, Papers, Skills, and Contact.
- `/projects/cs` all Computer Science projects (Master's, CSU Fresno).
- `/projects/mechatronics` all Mechatronics projects (Bachelor's, Manipal University Jaipur).

### Editing content

All real content lives in `src/data/content.ts`: profile info, socials, skills, projects
(tagged by category and optionally marked `featured`), and papers. Replace the values there;
the components in `src/components` render straight from it. A project can have an `image`,
or a `video` (rendered inline with the image as its poster), or neither. `ProjectGrid` sorts
projects with media before those without.

Put your resume PDF at `public/resume.pdf` (or update `profile.resumeUrl`).

### Images and video

Source images live in the gitignored `images/` folder at the project root and are never
committed as is. Compress and resize them into `public/images/` with `sharp` before
referencing them from `content.ts`, for example:

```js
const sharp = require("sharp");
sharp("images/photo.jpg")
  .resize({ width: 1000 })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile("public/images/photo.jpg");
```

For video, `ffmpeg-static` gives you a working `ffmpeg` binary without installing anything
system wide (`npm install --no-save ffmpeg-static`, then call the binary at
`node_modules/ffmpeg-static/ffmpeg.exe` directly, and uninstall it again once done).

### Theme

The site follows the visitor's system light/dark preference by default. A toggle in the nav
lets a visitor pin it to light or dark instead, saved in `localStorage`. A small inline script
in `layout.tsx` applies that saved preference before first paint, so there is no flash of the
wrong theme on load.

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

Repo: https://github.com/ritvik-123/New-Portfolio, site is served at
`https://ritvik-123.github.io/New-Portfolio/`.

1. Push this project to that repo (`main` branch).
2. In the repo settings, under **Pages**, set Source to **GitHub Actions**.
3. Push to `main`, the workflow builds and deploys automatically.

`NEXT_PUBLIC_BASE_PATH` in `.github/workflows/deploy.yml` is already set to `/New-Portfolio`
to match this repo name. Internal links use `next/link`, which picks up that base path
automatically; a plain `<a href="/...">` to a local asset (like the resume) needs it applied
manually through the `withBasePath` helper in `src/lib/basePath.ts`.
