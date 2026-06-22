# Musa Jawad Static Portfolio - Evidence Version

Fast recruiter-facing portfolio built with React, TypeScript, and Vite.

## What changed in this version

- Added real project screenshots, reports, slide decks, and demo media.
- Added Airport Information Kiosk as a visual project with video and screenshot gallery.
- Added Cloud ML Performance Benchmarking as a data/AI project.
- Replaced generic project visuals with real evidence assets where available.
- Added report links for Agar.io, MediScanner, Brain Tumor Segmentation, and Cloud ML Benchmarking.
- Kept the site static so it can be hosted free on Vercel without backend spin-down.

## Run locally

```powershell
npm install
npm run dev
```

Then open the local Vite URL, usually:

```text
http://localhost:5173
```

## Before deploying

Open `src/data.ts` and update:

- `github`
- project `github_url` values
- project `demo_url` values
- any wording you want changed

Replace `public/Musa_Jawad_Resume.pdf` with your newest resume PDF if needed.

## Deploy on Vercel

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none

## Where assets live

```text
public/assets/projects/   screenshots and generated project visuals
public/assets/reports/    downloadable PDF reports and slide decks
public/assets/videos/     demo video files
```
