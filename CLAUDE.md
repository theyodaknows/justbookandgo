# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JustBookandGo is a static marketing website for a home services booking platform (plumbing, HVAC, electrical). Built with the Shuffle Editor visual web builder, using Tailwind CSS and Alpine.js.

## Commands

```bash
npm install              # Install dependencies
npm run watch            # Dev server with live reload (BrowserSync on localhost:3000)
npm run build            # Production build (cleans public/, compiles CSS, copies assets)
npm run css-compile      # Compile Tailwind CSS only
npm run css-minified     # Compile + minify Tailwind CSS
npm run clean            # Remove public/ directory contents
```

**Important:** `npm run build` and `npm run watch` overwrite the `./public` directory entirely.

## Architecture

**Source files** live in `src/`:
- `src/html/index.html` — Single-page HTML template (the primary file to edit)
- `src/tailwind/tailwind.config.js` — Tailwind theme config (custom colors, spacing, fonts)
- `src/assets/` — Static assets copied to public/ on build

**Build output** goes to `public/` (gitignored, generated — don't edit directly).

**Root `index.html`** — Appears to be a copy outside the build pipeline; the canonical source is `src/html/index.html`.

**Asset library** in `metis-assets/` — Shuffle Editor's bundled illustrations, icons, logos, backgrounds, and device mockups.

## Tech Stack

- **Tailwind CSS 3.0.7** — Utility-first CSS, compiled via Tailwind CLI
- **Alpine.js 3.13.3** — Lightweight JS framework, loaded from CDN
- **Inter font** — Loaded from rsms.me CDN
- **Cloudinary** — Hosts header video and some images via CDN URLs
- **BrowserSync** — Dev server with live reload

## Tailwind Configuration

The config at `src/tailwind/tailwind.config.js` has extensive theme extensions:
- Custom color palette (pink, purple, indigo, blue, teal, green, yellow, orange, red, gray, blueGray)
- Custom spacing scale (0–192rem)
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1140px
- Font: Inter for both body and headings

## Brand Details

- **Phone:** 833-413-3478
- **Primary colors:** Orange (#FF6B00), Blue (#0A84FF), Dark grays (#1f2937, #111827)
- **Services:** Plumbing, HVAC, Electrical
