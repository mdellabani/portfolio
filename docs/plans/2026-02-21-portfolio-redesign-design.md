# Portfolio Visual Redesign — Design Document

**Date**: 2026-02-21
**Goal**: Redesign portfolio look and feel to be "geeky but simple, classy, mature"

## Constraints

- Dark base + muted, desaturated accents
- Spacious and breathable layout
- Content/data unchanged — visual layer only
- Must build and deploy to GitHub Pages

## Approach A: Terminal Elegance

**Fonts**: JetBrains Mono (body), Inter (headings)
**Palette**: Charcoal `#0d1117`, teal `#58a6b0`, amber `#d4a574`, gray-400 text
**Hero**: Shell prompt style (`$ whoami`), blinking cursor
**Sections**: Faint horizontal rules, terminal output feel
**Experience**: Git log style entries
**Tech stack**: Monospace labels, soft glow hover, bordered panels
**Accents**: Faint scanline overlay (2-3%), thin 1px borders, rounded corners

## Approach B: Architect's Blueprint

**Fonts**: Space Grotesk (everywhere)
**Palette**: Near-black `#0a0a0f`, slate blue `#6b7fa3`, warm gray `#a8a29e`, copper `#c4956a`
**Hero**: Large name, generous letter-spacing, small caps role
**Sections**: Subtle grid lines/dividers, faint dot-grid background
**Experience**: Clean cards, left-aligned dates, fine line separators
**Tech stack**: Clean grid, subtle hover underline
**Accents**: Faint geometric grid pattern, fade-in on scroll, glassmorphism-lite panels

## Approach C: IDE Dark Mode

**Fonts**: Monospace for code elements, Inter for body
**Palette**: VS Code dark `#1e1e2e`, muted purple `#b4a0d4`, soft green `#a6d4a0`, warm yellow `#d4c4a0`, blue `#7aa2d4`
**Hero**: Code block aesthetic with line numbers, syntax-colored keywords
**Sections**: Tab-like navigation (about.md, experience.tsx, skills.json)
**Experience**: Collapsible code-folding style, dates as comments
**Tech stack**: Styled like package.json / import statements
**Accents**: Line numbers in gutter, syntax highlighting on key terms

## Approach D: Retro Terminal

**Fonts**: Press Start 2P (headings), VT323 (body)
**Palette**: CRT black `#0a0a0a`, phosphor green `#3a9a60`, amber `#d4a04a`, cyan `#5ab8b8`
**Hero**: Pixel font name, blocky cursor, CRT vignette
**Sections**: Terminal window borders with title bars (`┌─ ABOUT ─┐`)
**Experience**: BBS post style with box-drawing characters
**Tech stack**: Desktop icon / program launcher grid
**Accents**: Faint scanlines (2-3%), CRT glow on accent text, square corners (no border-radius)

## Implementation Strategy

- 4 git branches: `design/terminal-elegance`, `design/architects-blueprint`, `design/ide-dark-mode`, `design/retro-terminal`
- Each modifies visual layer only (styles, colors, fonts, component markup for layout)
- Data in `src/data/data.tsx` unchanged
- Each branch must pass `npm run build`
