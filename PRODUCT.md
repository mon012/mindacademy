# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static output with typed content collections, committed to Git and deployed on Cloudflare Pages.

## Users

Parents evaluating learning programs and educational guidance for children aged approximately 4–12.

## Product Purpose

Mind Academy presents its children’s learning programs, explains its teaching approaches, publishes educational articles, and gives parents a direct path to contact the academy.

## Positioning

The academy combines play-based learning with future-facing skills and established programs including Singapore Math, language, coding, and Thai learning.

## Operating Context

Visitors compare classes, read long-form Thai educational content, watch embedded lesson and testimonial videos, follow cited research, and contact the academy through its existing channels. Most arrive on a phone over mobile data, so page weight is a product concern rather than a technical detail.

## Shape of the Site

- 26 built pages plus a 404, of which 25 are listed in the sitemap; `/tk/` is deliberately `noindex` because it is the post-form thank-you destination.
- Sections: home, `/classes/` with six class pages, `/articles/` with fourteen articles, `/contact/`, `/privacy-policy/`, `/tk/`.
- Page content lives in `src/content/pages/**/index.json` and is validated by the Zod schema in `src/content.config.ts`; a malformed page fails the build rather than shipping.
- 132 local assets, all WebP, every one of them referenced by generated output.

## Capabilities and Constraints

- Preserve every legacy URL. `public/_redirects` is the single source of truth for them and holds 28 rules, including the Thai path in both raw and percent-encoded form.
- Never ship a page that shadows a redirect rule; a legacy URL must return the 301, not a stub page.
- Preserve original copy, outbound links, and video embeds. Copy edits belong in the content JSON, not in template code.
- Keep every retained asset traceable to generated output — `npm run audit:content` fails on both missing and unused assets.
- Generate a static site suitable for Cloudflare Pages.

## Performance Commitments

- No third-party embed loads before the visitor scrolls to it. All 80 content embeds ship as `data-src` and are hydrated by a single observer.
- Images carry a `srcset` built from the sizes that actually exist on disk, with `sizes` hints matched to the real column widths.
- The stylesheet stays a single render-blocking file, currently about 11 KB gzipped.

## Search Commitments

- Every page carries a canonical, Open Graph and Twitter tags, and JSON-LD.
- Structured data describes the organisation, its four branches with address, telephone and coordinates, the page itself, and a breadcrumb trail.
- Articles declare author, published and modified dates; the sitemap carries `lastmod` wherever a real modified date exists.
- Internal links point at final destinations, never at a URL that only redirects.

## Brand Commitments

Keep the Mind Academy name, logo, friendly learning-focused character, established palette, and the existing Thai/English voice. Refine the incumbent identity rather than replacing it.

## Evidence on Hand

Every claim on the site traces back to the original WordPress content; `reports/migration.json` records the source measurements the migration was checked against. Branch addresses, phone numbers and map coordinates come from the contact page itself. No new claims or testimonials may be fabricated.

## Product Principles

- Content fidelity is more important than cosmetic simplification.
- Parents should understand the academy and reach the relevant class or contact channel quickly.
- Long-form educational content must remain comfortable to read on mobile.
- Every retained asset must have a traceable use in generated output.
- Existing URLs remain stable.
