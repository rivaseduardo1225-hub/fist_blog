# Mobile layout, spacing & button fixes — all 8 pages

Scope: `css/styles.css` (all changes) + 2 tiny HTML additions in `data.html` (table scroll hints). No desktop regressions (everything lives in `max-width` blocks or is visually neutral).

## Findings (measured via Chrome CDP at 360/390/414px)

1. Masthead wraps ≤414px on every page: brand name + tagline squeeze → header grows 63→94px, tagline breaks into ragged lines.
2. `.emissions__seg` label (`nowrap`, grid-centered, `overflow:hidden`) is clipped mid-word ≤640px — reads as broken on data.html and climate-justice.html.
3. Tap targets under 40px: `.tlink` 23px, footer links 16px, `.nav-toggle` 35px, `.chip` 38px, `.to-top` 38px, `.crumbs a` 16px, `.toc__list a` ~36px, `.backlink` ~22px.
4. Inputs at 15.2px → iOS zoom-on-focus (`.field input/select`, `.head-search input`).
5. Double gap before footer on the 7 interior pages (`.main` padding-bottom + `.site-foot` margin-top ≈ 96px).
6. `.credits-list` sits in 2 cramped columns at 360px (about.html).
7. No horizontal document overflow anywhere — baseline is clean.

User decisions: masthead = tagline off + icon-only Menu ≤480px; CTAs = full-width stacked ≤640px; tables = text scroll hint below 640px.

## Changes — all in `css/styles.css`

### A. Masthead compact — new `@media (max-width: 480px)` block
- `.brand__tag { display: none }`
- `.brand__name { font-size: 1.15rem; white-space: nowrap }` (never wraps)
- `.brand__mark svg { width: 34px; height: 20px }`
- `.head-inner { gap: 0.75rem }`, `.head-tools { gap: 0.3rem }`
- `.nav-toggle { font-size: 0; padding: 0.6rem 0.7rem; min-height: 44px }` → icon-only pill while keeping "Menu" in the accessible name (font-size:0 keeps text in a11y tree; verified in audit)
- Budget check at 360px: brand 175 + tools ~130 + gap 12 = 317 ≤ 323 content width ✓ (verified by re-probe: `brandH ≤ 30`, `innerH ≤ 66`, `docScrollW === vw`)

### B. Buttons & tap targets — new `@media (max-width: 640px)` block
- Full-width stacked CTAs: `.hero__actions .btn { flex-basis: 100%; width: 100%; justify-content: center }` and `.band .btn, .state .btn, .quiz--intro .btn, .quiz__result .btn { display: flex; width: 100%; justify-content: center }`
- `.chip { padding: 0.6rem 1.05rem }` → ~42px
- `a.tlink { padding: 0.55rem 0 }` → ~41px (spans inside cards untouched — whole card is the link)
- `.to-top { padding: 0.75rem 1.15rem }` → ~44px
- `.nav-toggle { min-height: 44px }` (non-icon sizes if B runs above A’s breakpoint)
- Footer links: `.foot-col ul { gap: 0 }`, `.foot-col a { display: block; padding: 0.65rem 0 }` → ~44px
- `.crumbs a { padding: 0.45rem 0 }`, `.toc__list a { padding: 0.55rem 0.7rem }`, `.backlink { padding: 0.5rem 0 }`

### C. Spacing
- `@media (max-width: 640px) { .main { padding-bottom: 0 } }` — footer’s own `margin-top` now provides the single gap (matches index.html, cuts ~48px of dead space)
- `@media (max-width: 480px) { .credits-list { grid-template-columns: 1fr } }`
- Leave section rhythm (`--sp-2xl`), card/quiz/band/chart paddings — already fluid and correct

### D. Form controls (global, visually neutral)
- `.field input, .field select, .head-search input { font-size: 1rem }` (15.2→16px kills iOS zoom; imperceptible on desktop)
- `.head-search input { min-width: 0 }` so the input+Search row can never overflow the drawer at 360px

### E. Charts & tables
- `@media (max-width: 640px)`: `.emissions__seg { white-space: normal; font-size: 0.55rem; line-height: 1.15; letter-spacing: 0.04em; padding: 0 0.3rem }` — full label wraps to ~3 lines inside the 44px bar instead of clipping (no HTML edit; `<0.4%` segment unaffected)
- `@media (max-width: 640px)`: `.datatable th, .datatable td { padding: 0.75rem 0.85rem }`, `.tablewrap { overscroll-behavior-x: contain }`
- New `.table-hint` class (mono, muted, `display: none` above 640px), added as a `<p>` directly after each of the 2 `.tablewrap`s in data.html: "Scroll sideways to see all columns"

### F. Cleanup
- Existing `@media (max-width: 400px) { .bar {…} }` stays; consolidated blocks appended at end of file so later rules win without specificity fights (all selectors ≥ existing specificity: `.band .btn` vs `.btn--solid` targets different properties — no cancellation risk)

## Verification (same CDP probe, extended)
1. Re-run probe at 360/390/414/480 × 8 pages, now also with header search drawer and mobile menu **open**: assert `docScrollW === vw`, `header.innerH ≤ 66` (≤480), no overflow offenders, no target < 40px, no input < 16px.
2. Desktop regression pass at 1280px: `.mainnav` visible, header height unchanged, `.credits-list` 4 cols, no rule outside `max-width` blocks alters desktop (audit by reviewing the diff).
3. Spot-check dark theme (tokens only, no hardcoded colors added).
4. Kill the headless Chrome instance and remove temp audit files.
