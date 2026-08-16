---
name: Mind Academy Pastel Underwater
description: A spacious pastel-underwater learning world guided by the Mind Academy octopus.
colors:
  ocean-navy: "#102a52"
  deep-ocean: "#0b2142"
  coral: "#ff806c"
  coral-deep: "#b94847"
  mint: "#bcefd0"
  peach-air: "#fff7ef"
  pale-aqua: "#e5f8f7"
  ocean-copy: "#536883"
  wave-rule: "#a7dfe3"
  warm-white: "#fffdfb"
  lavender: "#e9d8ff"
  powder-aqua: "#cceff5"
  pale-coral: "#ffe5d2"
  coral-pink: "#ffd5e6"
  island-yellow: "#ffe7aa"
  link-teal: "#176f79"
  current-teal: "#46c4c4"
  action-teal: "#35bdb7"
typography:
  display:
    fontFamily: "Maledpan, sans-serif"
    fontSize: "clamp(4rem, 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Maledpan, sans-serif"
    fontSize: "clamp(2.65rem, 4vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Maledpan, sans-serif"
    fontSize: "clamp(1.125rem, 1.3vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.72
  label:
    fontFamily: "Maledpan, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  field: "10px"
  control: "12px"
  card: "14px"
  island: "16px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "22px"
  lg: "24px"
  xl: "40px"
components:
  button-primary:
    backgroundColor: "{colors.ocean-navy}"
    textColor: "{colors.warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ocean-navy}"
  button-secondary:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.ocean-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "13px 22px"
    height: "54px"
  course-island:
    textColor: "{colors.ocean-navy}"
    rounded: "50%"
    aspectRatio: "1"
    size: "clamp(132px, 11vw, 158px)"
---

# Design System: Mind Academy — Pastel Underwater

## Overview

**Creative North Star: “The Connected Ocean of Learning”**

Mind Academy is a spacious, editorial underwater world in which the turquoise octopus acts as a curriculum guide. Peach air and powder-aqua currents hold a set of mint, lavender, coral, and yellow learning islands. The tone is friendly and imaginative without becoming a literal aquarium or a conventional education template.

Shipped implementation truth lives in `src/styles/global.css`, `src/pages/[...slug].astro`, and `src/layouts/SiteLayout.astro`; `PRODUCT.md` remains the authority for product claims, routes, copy, and content fidelity. The design is settled — treat the rendered pages as the reference and change them only deliberately.

**Key characteristics:**

- Spacious asymmetric compositions with one memorable mascot-led focal point.
- Warm, low-contrast surfaces grounded by fine ocean-navy outlines.
- Organic aqua seams between sections; restrained decoration around reading content.
- Original classroom and article imagery used as evidence, never invented proof.

## Colors

The palette pairs deep ocean navy with warm peach and white reading surfaces, then uses low-saturation pastels to distinguish learning paths and section currents.

### Primary

- **Ocean Navy** (`#102a52`): primary text, outlines, actions, article headers, and the core brand anchor.
- **Deep Ocean** (`#0b2142`): footer and deep media surfaces.

### Secondary

- **Powder Aqua** (`#cceff5`): reef current, section transitions, page banners, and related-content fields.
- **Mint** (`#bcefd0`): Math island, highlights, CTA hover, and soft evidence surfaces.
- **Coral** (`#ff806c`) and **Deep Coral** (`#b94847`): focus indication and restrained accent/link states.

### Tertiary

- **Lavender** (`#e9d8ff`), **Coral Pink** (`#ffd5e6`), **Pale Coral** (`#ffe5d2`), and **Island Yellow** (`#ffe7aa`): semantic curriculum islands and alternating class surfaces.
- **Current Teal** (`#46c4c4`) and **Action Teal** (`#35bdb7`): navigation underline and button hover.

### Neutral

- **Peach Air** (`#fff7ef`): principal canvas and long-form reading background.
- **Warm White** (`#fffdfb`): cards, secondary actions, tables, and fields.
- **Pale Aqua** (`#e5f8f7`): quiet alternate surface.
- **Ocean Copy** (`#536883`): supporting copy and captions.
- **Wave Rule** (`#a7dfe3`): dividers and subtle structural lines.
- **Link Teal** (`#176f79`): inline links; hover shifts to Deep Coral. The privacy policy is the deliberate exception — its links inherit body navy so the legal text reads as one calm block.

**The Pastel Restraint Rule.** Pastels identify paths and shape the current; they do not compete behind dense copy or replace navy as the legibility anchor.

## Typography

**Display Font:** Maledpan (sans-serif fallback)  
**Body Font:** Maledpan (sans-serif fallback)  
**Label Font:** Maledpan (sans-serif fallback)

**Character:** A single bilingual family keeps Thai and English cohesive. Weight and scale create hierarchy; decorative type is not part of the shipped underwater system.

### Hierarchy

- **Hero Display** (400, `clamp(4rem, 6vw, 5.5rem)`, `1.02`): the home promise, capped near `12ch`; mobile becomes `clamp(2.9rem, 14vw, 4.1rem)`.
- **Page Display** (400, `clamp(3rem, 6.8vw, 6rem)`, `1.08`): general page and article titles.
- **Headline** (400, `clamp(2.65rem, 4vw, 3.5rem)`, `1.08`): section hierarchy.
- **Body** (400, `clamp(1.125rem, 1.3vw, 1.22rem)`, `1.62–1.68`): body copy starts at 18px; long-form content stays within `72ch`.
- **Label** (400, `1rem`, `1.2`): navigation, controls, and course names.

**The One-Family Rule.** Use the self-hosted Maledpan Regular across shipped headings, body, navigation, and controls. Create hierarchy through scale and spacing rather than synthetic bold weights.

## Layout

- The shared content width is `min(1180px, calc(100% - 48px))`; the home hero uses a centered 1240px envelope through calculated side padding.
- Desktop hero: minimum height `720px`, two columns at `.92fr / 1.08fr`, `40px` gap, copy left and navigator right.
- The navigator is a `560px`-tall positioning field with a centered mascot and five absolute semantic links.
- Full-width sections retain the imported content structure and use broad aqua seams to transition between surfaces.
- Inner pages use image-led headers, a 12-column grid where present, and a `72ch` reading measure for articles.
- At `920px`, the hero becomes one centered column while retaining the full navigator field. At `820px`, shared grids and footer collapse, and the header becomes a two-row logo/action/navigation layout. At `560px`, hero padding, mascot scale, type, and course islands tighten without horizontal overflow.
- At narrow widths, the shared content gutter becomes `14px` per side via `min(100% - 28px, 680px)`.

## Elevation & Depth

Depth is ambient and restrained. Most separation comes from tonal surfaces and outlines; shadows are reserved for floating islands, cards, mascot imagery, and media.

### Shadow Vocabulary

- **Ambient Card** (`0 14px 34px rgb(16 42 82 / 12%)`): cards, embeds, and supporting media.
- **Curriculum Island** (`0 12px 30px rgb(16 42 82 / 10%)`): five navigator links.
- **Mascot Float** (`drop-shadow(0 24px 22px rgb(16 42 82 / 14%))`): octopus only.
- **Header Rule** (`0 1px 0 rgb(16 42 82 / 10%)`): subtle separation beneath the sticky desktop header.

**The Ambient-Only Rule.** Do not use hard offset shadows, glass panels, grain overlays, or decorative gradients. The only gradients are legibility veils over real header imagery.

## Motion

- The five curriculum links float as circular bubbles around the mascot using staggered 4.6–5.8 second transform-only loops.
- Motion runs only while the navigator intersects the viewport and the browser tab is active.
- Hover and keyboard focus pause the targeted bubble so its hit target remains stable.
- The global reduced-motion override collapses all loops to an effectively static state.

## Shapes

Controls use `12px` corners, imported content cards generally use `14px`, course islands and imagery use `16px`, and fields use `10px`. Borders are fine `1.5–2px` navy or teal strokes. Section transitions use oversized elliptical seams, while the mascot field uses loose reef curves. Images remain softly rectangular; avoid turning the whole interface into pill-shaped UI.

## Components

### Header and Navigation

- Sticky desktop header: `88px` minimum height, translucent Peach Air at 94%, original 200px-wide logo, three verified destinations, and a LINE action in LINE green (`#06c755`) with white text — the one place the palette yields to a platform's own brand colour.
- Navigation links are navy with a 2px Current Teal underline on hover and `aria-current="page"`.
- At `820px` the header becomes a single row of logo plus a bordered “เมนู” toggle. Navigation collapses into a dropdown panel anchored under the toggle, and the LINE action detaches into a fixed pill centred at the bottom of the viewport, clear of the home indicator via `env(safe-area-inset-bottom)`. The logo steps down to 148px, then 126px below `560px`.

### Buttons

- **Shape:** 1.5px navy border, `12px` radius, minimum `54px` for hero actions and `48px` for shared controls.
- **Primary:** Ocean Navy background, white text, `13px 22px` hero padding.
- **Secondary:** Warm White background with navy text and matching border.
- **Hover:** both hero actions become Mint and rise `2px`; shared navy actions become Action Teal.
- **Focus:** a 3px Coral outline with 4px offset applies to links, buttons, and form controls.

### Curriculum Navigator

- The octopus is the visual center, rendered from `/assets/brand/mind-octopus.webp` with multiply blending and a soft drop shadow.
- Five absolute-positioned links map to Math/Mint, English/Lavender, Coding/Coral Pink, Thai/Island Yellow, and Confidence/Pale Coral.
- Bubbles use a 1.5px navy outline, a circular `1:1` shape sized from 132–158px, and restrained inner highlights; mobile reduces them to 112px.
- Each bubble floats on its own timing and travel vector. Hover/focus pauses and enlarges the selected bubble slightly; labels remain centered and split into bold course name plus smaller descriptor.

### Cards, Media, and Reading Surfaces

- Home class cards sit on Warm White over Powder Aqua with the ambient shadow and 12–16px image corners.
- Class rows cycle Mint, Lavender, Pale Coral, and Powder Aqua backgrounds without borders.
- Page and article headers use original cover imagery with a navy legibility veil; article reading continues on Peach Air.
- Inputs use a 2px navy border, `10px` radius, Warm White fill, and a 50px minimum height.
- Success Stories use one horizontal native-swipe track with scroll snap; cards remain large enough to read and retain the original YouTube embeds.
- The Bangna branch video sits in the left half of Mind Mission, paired with the original mission copy and action on the right; the pair stacks media-first below 920px.

### Classroom Reels

- A horizontal scroll-snap track of seven 9:16 Facebook reels, framed in warm white with a 1.5px navy outline and 16px corners.
- Both this track and Success Stories are keyboard-reachable via `tabindex="0"`, since a scroll region that only responds to a pointer excludes keyboard users.
- The hero's secondary action, “ดูความสนุกในห้องเรียน”, scrolls here; the section carries `scroll-margin-top: 96px` so the sticky header never covers the heading.

### Deferred Media

Every embed on the site ships without a `src` and loads only as it approaches the viewport. That is a visible design decision, not just a performance one:

- Each frame reserves its final aspect ratio up front, so nothing reflows when the embed arrives.
- Reel frames show “กำลังโหลดคลิป” on Powder Aqua until the iframe paints, so an empty box never reads as broken.
- Embeds therefore require JavaScript. Text content never does.

### Footer

- Deep Ocean full-width anchor with an organic top seam, inverted original logo, three content/privacy routes, and verified Facebook, LINE, and YouTube links.
- Desktop uses three columns (`1.4fr 1fr 1fr`); it collapses to one column at `820px`.

## Accepted Deviations

- **Privacy policy and thank-you pages skip from `h1` to `h3`.** The imported WordPress markup starts its sections at `h3`, so the outline has a gap. Promoting those headings to `h2` would be semantically tidier, but `.page-id-1242` sizes `h2` at `clamp(2rem, 3.5vw, 2.75rem)` against `h3` at `clamp(1.6rem, 2.5vw, 2.05rem)` — the headings would visibly grow. The typographic result was judged more important than the outline, and the gap is deliberate. Leave it.

## Do's and Don'ts

### Do:

- **Do** preserve every source route, copy block, outbound link, video/PDF embed, metadata item, and meaningful asset as governed by `PRODUCT.md`.
- **Do** use verified original classroom and article images as evidence.
- **Do** use semantic links for each curriculum island and preserve visible focus states.
- **Do** keep underwater geometry and strong color fields away from long-form copy.
- **Do** preserve the 920px hero stack, 820px shared-layout collapse, and 560px navigator tuning.

### Don't:

- **Don't** invent statistics, awards, partners, testimonials, class claims, or routes.
- **Don't** reintroduce the hidden observation-table hero, specimen labels, eyebrow headings, Fjalla One, or Chonburi styling.
- **Don't** use generic SaaS grids, glassmorphism, hard offset shadows, grain, decorative gradients, or literal photorealistic aquarium scenery.
- **Don't** convert controls and cards into indiscriminate pills or place busy reef decoration behind reading content.
- **Don't** give an embed a real `src` in markup, or let a media frame collapse before its content loads.
- **Don't** add a colour by writing a literal into a rule. Every colour above is a token; a value that appears nowhere in this file is a mistake waiting to be inherited.
