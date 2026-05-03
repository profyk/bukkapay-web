# BukkaPay Web App

## Overview
BukkaPay is a React-based waitlist/marketing landing page for an African payments platform. It features a complete "Old Money Tech" elegant light theme design system, built with React CRA + CRACO, Tailwind CSS, and Framer Motion.

## Architecture

### Frontend (`frontend/`)
- **Framework**: React 19 + CRACO (Create React App with custom webpack config)
- **Styling**: Tailwind CSS + custom CSS design system in `App.css`
- **Animations**: Framer Motion (scroll progress, fade-up, stagger, morph blobs)
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **UI Components**: Radix UI / shadcn (accordion for FAQ)
- **Marquee**: react-fast-marquee
- **Counters**: react-countup with react-intersection-observer
- **Build**: CRACO with `@` alias pointing to `src/`

### Backend (`backend/`)
- **Framework**: FastAPI + Motor (async MongoDB)
- **Purpose**: Waitlist email collection (secondary, not required for frontend)

## Design System — "Old Money Tech"
Following `design_guidelines.json`:

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#F7F5F0` | Page background (bone white) |
| Surface | `#FFFFFF` | Cards |
| Surface 2 | `#EAE5D9` | Secondary backgrounds, section alternates |
| Primary | `#1A362D` | Deep forest green — buttons, icons, accents |
| Accent | `#D1603D` | Terracotta — CTAs, overlines, highlights |
| Text | `#1A2421` | Primary body text |
| Text 2 | `#586C62` | Secondary/muted text |
| Border | `#E2DCD0` | Card borders, dividers |

**Fonts**: Outfit (headings, `font-outfit`), Manrope (body, `font-manrope`), Cormorant Garamond (decorative quotes)

**Key CSS classes** (defined in `frontend/src/App.css`):
- `.bp-card` — white tactile card with hover lift shadow
- `.bp-card-featured` — dark green featured card (pricing)
- `.btn-primary` — forest green rounded-full button with shimmer on hover
- `.btn-accent` — terracotta rounded-full button
- `.btn-outline` — light border rounded-full button
- `.overline` — terracotta uppercase tracking-[0.2em] label
- `.header-glass` — glassmorphism light header (backdrop-blur)
- `.grain-overlay` — subtle film grain texture overlay
- `.dot-pattern` — forest green radial dot background pattern
- `.blob` — CSS morphing organic shape animation
- `.scroll-progress` — top progress bar (green→terracotta gradient)

## Page Sections (Home)
1. `<Header />` — Glassmorphism nav, mobile menu, smooth scroll CTAs
2. `<Hero />` — Two-column: headline + phone mockup with floating notification cards
3. `<TrustMarquee />` — Scrolling trust indicators via react-fast-marquee
4. `<Waitlist />` — Dark green email capture section
5. `<EarlyAccessBenefits />` — 4-card founding member perks grid
6. `<Features />` — 8-card features bento grid
7. `<TrustStrip />` — Interstitial dark green CTA band
8. `<PaymentLinks />` — 4-step process + live invoice demo card
9. `<HowItWorks />` — 3-step visual timeline
10. `<Security />` — Split layout with animated security ring
11. `<WhyBukkaPay />` — 4-card advantages grid
12. `<ForBusiness />` — 3-card business benefits
13. `<UseCases />` — 6-card use case grid
14. `<Pricing />` — 3-tier pricing (featured = forest green)
15. `<Availability />` — Stats counters + 12 country chips on dark green bg
16. `<FAQ />` — Accordion-based FAQ (Radix UI)
17. `<CTA />` — Final dark green CTA section
18. `<Footer />` — 6-column footer with social links

## Routes
- `/` — Home (main landing page)
- `/privacy` — Privacy Policy
- `/terms` — Terms & Conditions
- `/cookies` — Cookie Policy

## Running the App
```bash
cd frontend && PORT=5000 BROWSER=none yarn start
```
Workflow: **"Start application"** — configured to run on port 5000, webview output.

## Key Files
- `frontend/src/App.js` — All components (single-file architecture)
- `frontend/src/App.css` — Complete design system CSS
- `frontend/src/index.css` — Tailwind base + CSS variables
- `frontend/public/index.html` — HTML shell with Outfit + Manrope fonts
- `frontend/tailwind.config.js` — Tailwind config (extends with animations)
- `frontend/craco.config.js` — CRACO config with `@` alias
- `design_guidelines.json` — Brand design spec (source of truth)

## Notes
- No dark mode. App is exclusively light theme.
- No neon colors. Palette is earthy — bone white, forest green, terracotta.
- Framer Motion `useScroll` powers the top progress bar.
- Marquee pauses on hover (`pauseOnHover`).
- Phone mockup uses external image URL from `customer-assets.emergentagent.com`.
- All sections use `whileInView` with `viewport={{ once: true }}` for scroll animations.
