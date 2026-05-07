# Design — Nexo Vending

## Direction
**Editorial Tech** — Linear × Apple. Quiet confidence, oversized typography, asymmetric layouts, restrained color (one accent doing all the work), generous negative space.

## Physical scene (theme decision)
The decision-maker (a 35-45 year old office manager in Medellín) opens the site on her laptop in the late afternoon. She has 6 tabs open from competitors. Most look the same: white SaaS, blue accents, stock photos. Nexo loads in dark, warm, almost cinematic. She pauses. That pause is the design's job.

Therefore: **dark by default**. Warm-tinted neutrals. A single warm accent (amber). No theme toggle.

## Color (OKLCH)

### Tokens
```
/* Surfaces */
--bg:           oklch(0.16 0.008 60);   /* warm near-black */
--bg-elevated:  oklch(0.20 0.010 55);   /* lifted surfaces */
--bg-sunken:    oklch(0.12 0.006 60);   /* deeper than bg, used rarely */

/* Borders */
--border:       oklch(0.28 0.012 55);
--border-soft:  oklch(0.22 0.010 55);

/* Text */
--fg:           oklch(0.97 0.005 70);   /* warm off-white */
--fg-muted:     oklch(0.72 0.012 60);
--fg-subtle:    oklch(0.55 0.010 60);

/* Accent — single warm amber, controlled saturation */
--accent:       oklch(0.78 0.16 70);    /* base */
--accent-dim:   oklch(0.65 0.12 70);
--accent-soft:  oklch(0.78 0.16 70 / 0.12); /* tinted bg use */

/* Semantic */
--danger:       oklch(0.65 0.18 25);
--success:      oklch(0.72 0.15 145);
```

### Strategy
**Restrained.** Tinted neutrals carry 90% of the surface. Amber accent ≤10% — used for: (1) primary CTAs, (2) section labels (eyebrow text), (3) link hovers, (4) selection highlight, (5) FAQ toggle.

**Bans we honor:**
- No `#000` or `#fff`. Every neutral has chroma 0.005-0.012 toward warm hue.
- No gradient text on headlines. Emphasis = weight + size + color shift only.
- No teal, no green-bright. The previous palette had two accents fighting; we picked one.
- No purple/blue glows.

## Typography

### Families
- **Display** — `Outfit` (geometric grotesque, premium, modern). Used for h1/h2/h3.
- **Body** — `Geist` (Vercel's font, technical neutrality, excellent dark mode). Used everywhere else.
- **Mono accent** — `Geist Mono` for: section numbers, product indices, technical data points.

### Scale
- `display-xl`: clamp(3rem, 7vw, 6.5rem) — hero only
- `display-lg`: clamp(2.5rem, 5.5vw, 4.5rem) — section headlines
- `display-md`: clamp(1.75rem, 3.5vw, 2.75rem) — subsection
- `body-lg`: 1.125rem (lead paragraphs)
- `body`: 1rem
- `body-sm`: 0.875rem
- `caption`: 0.75rem (uppercase eyebrow labels)

### Rules
- `tracking-tighter` and `leading-[0.95]` on display text (oversized headlines need tight metrics)
- `leading-relaxed` on body
- Body line length capped at `max-w-[65ch]`
- Hierarchy through scale + weight contrast (≥1.25 ratio between steps)

## Spacing rhythm
Vary spacing for cadence. Same padding everywhere = monotony.
- Section vertical rhythm: alternate between `py-24` (compact) and `py-32 lg:py-40` (breathing).
- Container max widths vary by section: hero `max-w-7xl`, narrative sections `max-w-5xl`, FAQ `max-w-3xl`.
- Side gutters: `px-6 lg:px-8` standard, `px-6 lg:px-12` on hero.

## Layout patterns

### Allowed primary patterns
- **Asymmetric split** (text left, asset right or vice versa, NOT 50/50)
- **Zig-zag full-width sections** (alternating sides for product/feature stories)
- **Divide-y editorial lists** (replaces 3-card grids)
- **Editorial timeline** (horizontal numbered steps, no equal cards)
- **Drenched narrative section** (full background of accent or extreme contrast for emphasis)

### Banned patterns
- 3-column equal card grids
- Centered hero (we use asymmetric)
- Centered section after centered section
- Cards inside cards
- Side-stripe accent borders
- Hero-metric templates ("48h | $0 | 24/7" with big numbers)

## Motion

### Easing tokens
```
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-expo:  cubic-bezier(0.19, 1, 0.22, 1);
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
--ease-drawer:    cubic-bezier(0.32, 0.72, 0, 1);
```

### Duration tokens
- 100-160ms: button press, tactile feedback
- 150-250ms: dropdowns, tooltips
- 250-400ms: section reveals, drawer open
- 400-700ms: hero stagger orchestration

### Rules
- Specify exact properties. `transition: transform 200ms ease-out`, never `transition: all`.
- Animate only `transform` and `opacity`.
- Never `ease-in` on UI animations.
- Buttons: `:active { transform: scale(0.97) }`, transition 160ms.
- Reveal entry: `scale(0.96) opacity(0)` → `scale(1) opacity(1)`. Never `scale(0)`.
- Stagger: 30-80ms between siblings, max 120ms on hero entrance.
- Hover effects gated by `@media (hover: hover) and (pointer: fine)`.
- Respect `prefers-reduced-motion`.

## Elevation
- `elev-0`: surface flat. No shadow. Border `--border-soft`.
- `elev-1`: subtle inset for inputs/select. Border `--border`. No shadow.
- `elev-2`: hovered card or modal. Shadow `0 8px 32px oklch(0 0 0 / 0.4)`, border becomes `--accent-dim/40`.
- No elevation on text containers. Elevation is for interactive surfaces only.

## Density
**4 (gallery side of normal).** Generous whitespace. Cards are rare. Lists, dividers, and rhythm carry the weight.

## Components

### Buttons
- **Primary**: `bg-fg text-bg` — high contrast inverted. Used for hero CTA only.
- **Accent**: `bg-accent text-bg` — used for conversion CTAs. Hover increases brightness +5% (not different color).
- **Ghost**: `text-fg-muted hover:text-fg` with no background. Underline on hover. Used for secondary actions.
- All buttons: `:active scale-[0.97]`, `transition: transform 160ms ease-out-quart`.

### Inputs
- Label above input. Helper text below. Error text below in `--danger`.
- Inset elevation (no shadow, just border).
- Min 44px height (mobile touch target).
- `:focus` ring uses `--accent` at 30% opacity.

### Section label (eyebrow)
- `caption` size, mono font, uppercase, letter-spacing wider, `--accent` color, prefixed with `→` or numbered `(01)`.

### Dividers
- Hairline `1px` borders in `--border-soft`. Sometimes `--border` for emphasis.
- Vertical dividers as `divide-y` between list items. Replaces card containers.

## Accessibility
- WCAG AA contrast minimum on all text.
- Focus rings visible (no `outline: none` without replacement).
- Tap targets 44×44px minimum.
- Keyboard nav verified on all interactive elements.
- `prefers-reduced-motion` swaps animations for instant transitions.
