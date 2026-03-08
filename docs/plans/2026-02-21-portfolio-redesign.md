# Portfolio Visual Redesign — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create 4 design branches (A–D) each applying a distinct visual identity to the portfolio while keeping content/data unchanged.

**Architecture:** Each branch modifies only the visual layer — fonts, colors, spacing, component markup for layout. Data in `src/data/data.tsx` stays identical. Each branch must pass `npm run build`.

**Tech Stack:** Next.js 14, Tailwind CSS 3, SCSS, Google Fonts (via next/font), TypeScript

---

## Shared Context — Files Per Branch

Every branch modifies these files:

| File | Purpose |
|------|---------|
| `src/pages/_app.tsx` | Font import and application |
| `src/globalStyles.scss` | Colors, tags, timeline, links, typewriter animation |
| `tailwind.config.js` | Theme colors, keyframes |
| `src/components/Sections/Header.tsx` | Nav bar styling |
| `src/components/Sections/Hero.tsx` | Hero section visual |
| `src/components/Sections/About.tsx` | About section styling |
| `src/components/Sections/Resume/index.tsx` | Resume section background |
| `src/components/Sections/Resume/ResumeSection.tsx` | Section heading style |
| `src/components/Sections/Resume/TimelineItem.tsx` | Timeline entries |
| `src/components/Sections/Resume/Skills.tsx` | Skill progress bars |
| `src/components/Sections/TechStack.tsx` | Tech stack icons |
| `src/components/Sections/Portfolio.tsx` | Portfolio cards |
| `src/components/Sections/Contact/index.tsx` | Contact section |
| `src/components/Sections/Contact/ContactForm.tsx` | Form input styling |
| `src/components/Sections/Footer.tsx` | Footer |

---

## Task 1: Branch A — Terminal Elegance

**Branch:** `design/terminal-elegance`

### Design Tokens

```
Font (heading): Inter (weights: 400, 700)
Font (body/code): JetBrains Mono (weights: 400, 700)
Base BG: #0d1117 (GitHub dark)
Surface: #161b22
Border: #30363d
Text primary: #c9d1d9
Text secondary: #8b949e
Accent 1 (teal): #58a6b0
Accent 2 (amber): #d4a574
Link hover: #7cc4cc
Tag border/text: #58a6b0
Active timeline: #58a6b0
Skill bar: #58a6b0
```

### Key Visual Changes

**`_app.tsx`**: Import `JetBrains_Mono` and `Inter` from `next/font/google`. Apply JetBrains Mono as default, Inter for headings via CSS.

**`globalStyles.scss`**:
- Body: `bg: #0d1117`, `color: #c9d1d9`, `font-family: var(--font-mono)`
- Tags: teal border/text `#58a6b0`, no border-radius (square-ish, 4px)
- Links: `#58a6b0`, hover `#7cc4cc`
- Timeline dot: teal on active, `#30363d` border
- Timeline line: `#30363d`, active `#58a6b0`
- Add subtle scanline overlay: `background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)`
- Typewriter cursor: teal-tinted

**`Header.tsx`**:
- Nav bg: `bg-[#0d1117]/80 backdrop-blur`
- Active: `text-[#58a6b0]`
- Hover: `hover:text-[#58a6b0]`
- Monospace nav items

**`Hero.tsx`**:
- Remove background image, use solid `#0d1117`
- Name styled as shell prompt: render as `$ whoami` above name
- Blinking block cursor after name
- Card: `bg-[#161b22]` border `border-[#30363d]`, no blur
- Buttons: teal border, square-ish corners (rounded-md not rounded-full)

**`About.tsx`**: `bg-[#161b22]`, text `#c9d1d9`, heading white

**`Resume/index.tsx`**: `bg-[#0d1117]` (dark, not light!)

**`ResumeSection.tsx`**: Heading `text-[#c9d1d9]`, underline `border-[#58a6b0]`

**`TimelineItem.tsx`**: Text light, git-log style — date in muted `#8b949e`

**`Skills.tsx`**: Bar bg `#30363d`, fill `#58a6b0`, text `#c9d1d9`

**`TechStack.tsx`**: Title white, category headings `#c9d1d9`, hr color `#30363d`

**`Portfolio.tsx`**: Caption dark bg `#161b22`, text `#c9d1d9`

**`Contact`**: `bg-[#161b22]`, form inputs `bg-[#0d1117] border-[#30363d]`

**`Footer.tsx`**: `bg-[#0d1117]`, text `#8b949e`

### Steps

1. Create branch `design/terminal-elegance` from `main`
2. Update `_app.tsx` with JetBrains Mono + Inter fonts
3. Rewrite `globalStyles.scss` with terminal color scheme
4. Update `tailwind.config.js` with terminal theme colors
5. Update all section components with terminal styling
6. Run `npm run build` — verify success
7. Commit: `feat(design): terminal elegance theme`

---

## Task 2: Branch B — Architect's Blueprint

**Branch:** `design/architects-blueprint`

### Design Tokens

```
Font: Space Grotesk (weights: 400, 500, 700)
Base BG: #0a0a0f
Surface: #12121a
Border: #1e1e2a
Text primary: #d4d4dc
Text secondary: #8888a0
Accent 1 (slate blue): #6b7fa3
Accent 2 (copper): #c4956a
Link hover: #8da3c7
Tag border/text: #6b7fa3
Active timeline: #c4956a
Skill bar: #6b7fa3
```

### Key Visual Changes

**`_app.tsx`**: Import `Space_Grotesk` from `next/font/google`, weights 400, 500, 700.

**`globalStyles.scss`**:
- Body: `bg: #0a0a0f`, `color: #d4d4dc`
- Tags: slate blue `#6b7fa3`, rounded-full
- Links: `#6b7fa3`, hover `#c4956a`
- Timeline: copper accent on active
- Add subtle dot-grid background on certain sections: `radial-gradient(circle, #1e1e2a 1px, transparent 1px)` with `background-size: 24px 24px`

**`Header.tsx`**:
- Nav bg: `bg-[#0a0a0f]/70 backdrop-blur-lg`
- Active: `text-[#c4956a]`
- Letter-spacing on nav items: `tracking-widest uppercase text-xs`

**`Hero.tsx`**:
- Solid bg `#0a0a0f` (no background image)
- Name: large, generous `tracking-[0.2em]`, `uppercase`
- Role: smaller, `tracking-widest`, muted color `#8888a0`
- Card: clean border `border-[#1e1e2a]`, `bg-[#12121a]`
- Buttons: copper border for primary, rounded-lg

**`About.tsx`**: `bg-[#12121a]` with dot-grid pattern

**`Resume/index.tsx`**: `bg-[#0a0a0f]`

**`ResumeSection.tsx`**: Heading uppercase, `tracking-widest`, underline `border-[#c4956a]`

**`Skills.tsx`**: Bar bg `#1e1e2a`, fill `#6b7fa3`

**`TechStack.tsx`**: Clean grid, understated hover (underline, not glow)

**`Contact`**: `bg-[#12121a]`, form glassmorphism: `bg-[#0a0a0f]/50 backdrop-blur border-[#1e1e2a]`

**`Footer.tsx`**: `bg-[#0a0a0f]`

### Steps

1. Create branch `design/architects-blueprint` from `main`
2. Update `_app.tsx` with Space Grotesk font
3. Rewrite `globalStyles.scss` with blueprint color scheme
4. Update `tailwind.config.js` with blueprint theme
5. Update all section components
6. Run `npm run build` — verify success
7. Commit: `feat(design): architect's blueprint theme`

---

## Task 3: Branch C — IDE Dark Mode

**Branch:** `design/ide-dark-mode`

### Design Tokens

```
Font (heading): Inter (weights: 400, 700)
Font (code): Fira Code (weights: 400, 500)
Base BG: #1e1e2e (Catppuccin-inspired)
Surface: #282840
Border: #363652
Text primary: #cdd6f4
Text secondary: #a6adc8
Accent purple: #b4a0d4
Accent green: #a6d4a0
Accent yellow: #d4c4a0
Accent blue: #7aa2d4
Tag border/text: #b4a0d4
Active timeline: #a6d4a0
Skill bar: #7aa2d4
Link: #7aa2d4, hover: #b4a0d4
```

### Key Visual Changes

**`_app.tsx`**: Import `Inter` and `Fira_Code` from `next/font/google`.

**`globalStyles.scss`**:
- Body: `bg: #1e1e2e`, `color: #cdd6f4`
- Tags: purple `#b4a0d4`
- Links: blue `#7aa2d4`, hover purple `#b4a0d4`
- Line numbers: add `.line-number::before` counter for certain sections
- Syntax-color keywords in headings (e.g., `const`, `function` in green, strings in yellow)

**`Header.tsx`**:
- Styled as editor tabs: each nav item gets `bg-[#282840]` when active, inactive lighter
- Border-bottom on active tab
- Active color: `#a6d4a0`
- Format: nav items displayed as file tabs (`about.md`, `resume.tsx`, etc.)

**`Hero.tsx`**:
- Solid bg `#1e1e2e`
- Card styled as code editor panel: `bg-[#282840]` with line numbers on left gutter
- Name rendered with syntax coloring: keyword color for prefix, string color for name
- Role as a comment: `// Tech Lead | ...` in muted green

**`About.tsx`**: `bg-[#282840]`

**`Resume/index.tsx`**: `bg-[#1e1e2e]`

**`ResumeSection.tsx`**: Heading with syntax coloring — `const` keyword in purple, title in green, `= {` in white

**`TimelineItem.tsx`**: Date styled as comment `// 04/2025 - Present`

**`Skills.tsx`**: Bar bg `#363652`, fill uses gradient of accent colors

**`TechStack.tsx`**: Icons styled like import statements or package.json deps

**`Portfolio.tsx`**: Caption with code-block styling

**`Contact`**: `bg-[#282840]`, form inputs `bg-[#1e1e2e] border-[#363652]`

**`Footer.tsx`**: `bg-[#1e1e2e]`, styled as status bar

### Steps

1. Create branch `design/ide-dark-mode` from `main`
2. Update `_app.tsx` with Inter + Fira Code fonts
3. Rewrite `globalStyles.scss` with IDE color scheme
4. Update `tailwind.config.js` with IDE theme
5. Update all section components with IDE-specific markup changes
6. Run `npm run build` — verify success
7. Commit: `feat(design): IDE dark mode theme`

---

## Task 4: Branch D — Retro Terminal

**Branch:** `design/retro-terminal`

### Design Tokens

```
Font (heading): Press Start 2P (weight: 400) — pixel font
Font (body): VT323 (weight: 400) — retro monospace
Base BG: #0a0a0a
Surface: #111111
Border: #2a2a2a
Text primary: #d0d0d0
Text secondary: #777777
Accent green (phosphor): #3a9a60
Accent amber: #d4a04a
Accent cyan: #5ab8b8
Tag border/text: #3a9a60
Active timeline: #d4a04a
Skill bar: #3a9a60
Link: #5ab8b8, hover: #3a9a60
```

### Key Visual Changes

**`_app.tsx`**: Import `Press_Start_2P` and `VT323` from `next/font/google`.

**`globalStyles.scss`**:
- Body: `bg: #0a0a0a`, `color: #d0d0d0`, VT323 default
- Tags: green `#3a9a60`, square corners (no border-radius), 1px solid border
- Links: cyan `#5ab8b8`, hover green `#3a9a60`
- Timeline: amber on active
- Scanline overlay: `repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)` on body
- CRT vignette: radial gradient overlay `radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)`
- Subtle text-shadow glow on accent text: `text-shadow: 0 0 8px currentColor`

**`Header.tsx`**:
- No backdrop blur — solid `bg-[#0a0a0a]` with bottom border `border-b border-[#2a2a2a]`
- Nav items in VT323, uppercase
- Active: `text-[#3a9a60]` with glow
- Styled as menu bar: `[ ABOUT ] [ RESUME ] [ CONTACT ]`

**`Hero.tsx`**:
- Solid bg `#0a0a0a`
- Name in Press Start 2P (pixel font), smaller size to compensate
- Blocky blinking cursor (█ character, CSS animated)
- Card: `bg-[#111111]` with `border border-[#2a2a2a]`, square corners
- CRT vignette overlay on the section
- Buttons: square corners, 1px border, green/amber

**`About.tsx`**: `bg-[#111111]`, bordered like terminal window with ASCII-inspired top bar

**`Resume/index.tsx`**: `bg-[#0a0a0a]`

**`ResumeSection.tsx`**: Heading in Press Start 2P (small), framed: `┌─ WORK ─┐` style using CSS borders or actual characters

**`TimelineItem.tsx`**: Dates in amber, content in default body color

**`Skills.tsx`**: Bar bg `#2a2a2a`, fill `#3a9a60`, pixelated feel (square corners)

**`TechStack.tsx`**: Title in pixel font. Icons in bordered grid cells with square corners.

**`Portfolio.tsx`**: Square corners on everything. Caption bg `#111111`.

**`Contact`**: `bg-[#111111]`, form inputs `bg-[#0a0a0a] border-[#2a2a2a]`, square corners

**`Footer.tsx`**: `bg-[#0a0a0a]`, green text, no shadows

### Steps

1. Create branch `design/retro-terminal` from `main`
2. Update `_app.tsx` with Press Start 2P + VT323 fonts
3. Rewrite `globalStyles.scss` with retro color scheme + CRT effects
4. Update `tailwind.config.js` with retro theme
5. Update all section components with retro styling
6. Run `npm run build` — verify success
7. Commit: `feat(design): retro terminal theme`

---

## Execution Strategy

Each task (branch) is **fully independent** — they all branch from `main` and modify the same files differently. This means all 4 can be executed in parallel using subagent-driven development.

For each branch:
1. `git checkout main && git checkout -b design/<name>`
2. Apply all visual changes per the design tokens above
3. `npm run build` to verify
4. Commit

The user then previews each branch locally (`npm run dev -- -p 300X`) and picks their favorite or mixes elements.
