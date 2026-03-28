# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Mahieddine Dellabani. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS. Deployed as a static export to GitHub Pages at `https://mdellabani.github.io/portfolio`.

## Commands

- **Dev server:** `yarn dev` (compiles TS then starts Next.js dev server)
- **Build:** `yarn build` (compiles TS, builds Next.js static export to `out/`)
- **Lint:** `yarn lint` (runs Prettier + ESLint with zero warnings tolerance)
- **Clean:** `yarn clean` (removes `build-tsc` and `.next`)

## Architecture

This is a single-page portfolio site. All content lives on one route (`src/pages/index.tsx`).

### Data layer

- `src/data/dataDef.ts` — TypeScript interfaces for all section data (Hero, About, SkillGroup, PortfolioItem, TimelineItem, TestimonialSection, ContactSection, Social)
- `src/data/data.tsx` — All site content: personal info, work history, skills, portfolio items, testimonials, contact details. **This is the primary file to edit when updating content.**

### Page sections (render order)

`Header → Hero → About → Resume → Portfolio → Testimonials → Contact → Footer`

Each section is a component in `src/components/Sections/`. Header is dynamically imported (client-only, no SSR).

### Key conventions

- Components use `memo()` and the ESLint plugin `react-memo` enforces this
- Custom theme in `tailwind.config.js` uses a `retro` color palette and `pixel` font family
- Static export: `next.config.js` sets `output: 'export'` with `basePath: '/portfolio'` in production
- Images are in `src/images/` and loaded via `url-loader`/`file-loader` (custom webpack config in `next.config.js`)
- Contact form uses EmailJS (`emailjs-com`) with secrets stored as GitHub Actions environment variables

### Scripts

- `scripts/gen-pdf.js` — Generates PDF resume using Puppeteer
- `scripts/generate-og-image.mjs` — Generates OG image

### Deployment

GitHub Actions workflow (`.github/workflows/main.yml`) builds and deploys to GitHub Pages on push to `main`. Uses `peaceiris/actions-gh-pages` with a deploy key.
