# Premium Unisex Salon — Next.js Website

A static-first, editorial salon website built with the Next.js App Router, React, TypeScript and Tailwind CSS. The project provides service listings, product enquiries, an editorial journal, before/after comparisons, testimonials, booking enquiries, contact forms, SEO metadata and legal information pages.

> **Release status:** Source delivered in 12 chunks. Do not treat the site as production-ready until the complete project has been assembled, configured, built, tested and reviewed. The sample catalogue, brand copy, images and legal pages are not verified business facts.

## 1. Assemble all 12 chunks

1. Start with the configuration files from Chunk 1 and `styles/globals.css` plus core `lib` files from Chunk 2.
2. Add layout and SEO components from Chunk 3 and reusable UI components from Chunk 4.
3. Add the data modules from Chunk 5, including `data/posts.ts`.
4. Merge the `app/`, `components/` and `lib/` directories from Chunks 6–11, preserving their exact subdirectories.
5. Add this README and the `scripts/check-project.mjs` checker to the project root.
6. Ensure `server-only` is installed because `lib/env.ts` and `lib/form-processing.ts` import it: `npm install server-only`.
7. Add `public/images/` photographs only where you have usage rights; do not claim editorial placeholder photographs depict your salon.

**Important:** The combined ZIP in this conversation contains the files actually available in the execution environment from Chunks 5–11 and Chunk 12. Chunks 1–4 were delivered as inline source and must be added separately. The combined ZIP is not a runnable complete project by itself.

## 2. Local prerequisites

- Node.js 22 LTS recommended (or another runtime supported by the installed Next.js version)
- npm 10+
- An appropriate Vercel account for deployment
- Verified business name, full address, contact details, domain and operating hours

At the project root:

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run build
npm run start
```

On Windows PowerShell, replace `cp` with `Copy-Item .env.example .env.local`.

Run `node scripts/check-project.mjs` before `npm run build`. Check all CLI output, and do not ignore errors.

## 3. Configure brand and business information

Search for `EDIT:` and placeholder values surrounded by square brackets across the project. Replace each placeholder using verified information.

| Placeholder / variable | Meaning |
| --- | --- |
| `NEXT_PUBLIC_BRAND_NAME`, `[BRAND_NAME]` | Verified brand name |
| `NEXT_PUBLIC_TAGLINE`, `[TAGLINE]` | Approved tagline |
| `NEXT_PUBLIC_CITY`, `[CITY]` | Business locality |
| `NEXT_PUBLIC_ADDRESS`, `[FULL_ADDRESS]` | Verified full address |
| `NEXT_PUBLIC_PHONE`, `[PHONE]` | Public telephone number |
| `NEXT_PUBLIC_WHATSAPP`, `[WHATSAPP_NUMBER]` | International-format WhatsApp number |
| `NEXT_PUBLIC_EMAIL`, `[EMAIL]` | Public email address |
| `NEXT_PUBLIC_HOURS`, `[HOURS]` | Verified operating schedule |
| `NEXT_PUBLIC_INSTAGRAM_URL`, `[INSTAGRAM_URL]` | Real business Instagram URL |
| `NEXT_PUBLIC_MAPS_EMBED_URL`, `[MAPS_EMBED_URL]` | Public Google Maps embed URL |
| `NEXT_PUBLIC_SITE_URL`, `[YOUR-DOMAIN]` | Canonical production URL |
| `NEXT_PUBLIC_CAL_LINK`, `[CAL_USERNAME]/[EVENT_SLUG]` | Cal.com event link |
| `FORMSPREE_ID`, `[FORMSPREE_ID]` | Server-side Formspree destination |
| `RESEND_API_KEY`, `[RESEND_API_KEY]` | Secret Resend credential |
| `RESEND_FROM_EMAIL`, `[VERIFIED_SENDER_EMAIL]` | Resend verified sender |
| `CONTACT_RECIPIENT_EMAIL`, `[OWNER_EMAIL]` | Contact destination |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `[PLAUSIBLE_DOMAIN]` | Plausible configured domain |
| `FORM_SECRET`, `[RANDOM_SECRET_MIN_32_CHARS]` | Random server-only secret, if used |
| `ALLOWED_ORIGIN` | Allowed production origin |

Do not put secrets in `NEXT_PUBLIC_` variables, source files, screenshots or the Git repository. Configure actual secrets in Vercel Project Settings → Environment Variables.

## 4. Edit content and imagery

- `data/services.ts`: Only offer services the salon actually performs. Supply current prices/durations or leave them as enquiry-only.
- `data/products.ts`: Replace illustrative catalogue entries with real product names, photos, current price and availability.
- `data/reviews.ts`: Publish only genuine, permitted reviews. Do not add invented reviews, ratings or review counts.
- `data/beforeAfter.ts`: Supply genuine, consented pairs at the specified paths and set `approved: true` only after verification.
- `data/posts.ts`: Check editorial claims, set real publication/modified dates and replace unlicensed imagery.
- `data/faqs.ts`: Ensure the answers accurately reflect the salon's booking and service policies.
- `public/images/`: Use licensed, appropriately sized photographs, optimised for mobile and desktop.

Editorial Unsplash URLs are *placeholders*, not evidence of the salon's location, staff, products or completed work.

## 5. Add a new service

Create a new entry in `data/services.ts` with a unique, URL-safe `slug`, descriptive copy, suitable picture, and verified details. `app/services/[slug]/page.tsx` uses `generateStaticParams()` to generate corresponding routes. Verify the new URL, breadcrumbs, metadata, booking prefill and structured data. Do not output an `Offer` with an unknown price.

## 6. Add a blog post

Add an article to `data/posts.ts` with a unique `slug`, intro-level description, sections with unique IDs, FAQ items, image/alt text, author attribution and actual publication date. Verify the table of contents, related posts, sitemap and BlogPosting JSON-LD. The three initial articles are editorial content, not verified service claims.

## 7. Booking and contact delivery

The booking enquiry is **not** a confirmed reservation. It requests a preferred service, date and time. Actual availability and salon staff confirmation are required.

1. Configure a public Cal.com link for the primary scheduling experience if using Cal.com.
2. Configure a verified Resend sender and destination, or a valid Formspree form ID, for enquiries.
3. Check server-side Zod validation and spam honeypots.
4. Test successful submission, provider failure, missing provider credentials, invalid form, expired/earlier date, and repeated submissions.
5. Confirm the form provides an honest error message when delivery fails.
6. Ensure a verified contact method is visible so customers can recover from an unavailable form.

The in-memory rate limiter is **not sufficient** as a production rate limit across multiple Vercel instances. Replace it with a shared, atomic limiter (e.g. Redis) before treating the public forms as hardened. Verify how the deployment platform supplies client IP addresses, configure allowed origin checks, limit payload size and monitor abuse.

## 8. Technical SEO

- Confirm unique titles (~60 characters or less as an editorial guideline), descriptions (~160 characters or less), and canonical URLs.
- Check `/sitemap.xml`, `/robots.txt` and `/opengraph-image` on the deployed domain.
- Ensure `/thank-you` is `noindex`.
- Inspect `BeautySalon`, `Service`, `Product` (only if genuine product information is present), `FAQPage` and `BlogPosting` markup.
- Test structured data using Google's Rich Results Test and Schema Markup Validator. Valid markup does not guarantee a search feature.
- Verify one H1 per route and correct section heading hierarchy.
- Local SEO depends on real NAP consistency across the site and verified business profiles; code alone cannot ensure rankings.

## 9. Accessibility checklist — WCAG 2.1 AA

Test **manually**, including at 320px width, with keyboard-only navigation and at least one screen reader:

- Skip link goes to main content; landmarks are semantically correct.
- Drawer opens, traps focus, closes with Escape, and returns focus to the trigger.
- Forms expose labels, validation errors, and submission status to assistive technology.
- Comparison sliders support arrow keys, Home and End.
- Images have meaningful alt text; purely decorative images are hidden from assistive technology.
- Focus-visible outlines are consistently visible.
- All information and controls work without hover; respect reduced-motion settings.
- Text/controls meet contrast requirements against actual backgrounds.
- There is no horizontal overflow at 320px or mobile zoom settings.

## 10. Performance budget

Targets—not verified measurements—are mobile Lighthouse Performance, Accessibility, Best Practices and SEO scores of 95+; LCP <2.5s; CLS <0.1; INP <200ms. Test a production deployment using PageSpeed Insights/Lighthouse with representative mobile conditions. Verify hero LCP, responsive `next/image` sizes, limited client islands, and no layout shifts from embedded calendars or maps. Third-party integrations, fonts and obfuscation may lower scores.

## 11. What 'hidden code' actually means

**Browser JavaScript is always inspectable.** Minification and obfuscation complicate reading but do not make the browser code secret, prevent copying, or provide meaningful confidentiality. Do not attempt to disable DevTools or right-click; it harms accessibility and does not work reliably.

The supplied configuration disables production browser source maps and includes a best-effort post-build obfuscation script. That script may not match the current Next.js hashed chunk naming scheme: a warning about zero matched chunks must **not** be reported as successful obfuscation. Obfuscation must be tested against hydration, navigation, forms and performance, and disabled if it causes regressions. All real secrets and privileged server logic must remain server-side.

## 12. Security and CSP

The CSP from Chunk 1 is a starter, not a completed audited production policy. Its `unsafe-inline` directive requires security review; adjust domains and nonces as needed based on actual integrations. Configure HTTPS and HSTS deliberately. Verify all analytics, embeds, forms and static assets still work. Check that confidential information does not appear in client bundles or HTML.

## 13. Deploy on Vercel

1. Commit the fully assembled site to a private or public Git repository, excluding `.env.local` and all secrets.
2. Import the repository in Vercel; Vercel should recognise Next.js automatically.
3. Set environment variables for Production and Preview as appropriate.
4. Run the deployment build and inspect logs for type, module resolution, image or environment errors.
5. Connect the actual domain and verify the site is served over HTTPS.
6. Test the homepage, service pages, journal, enquiry forms and legal pages on the deployment.
7. After testing, allow indexing by replacing all placeholder content and confirming robots/canonical settings.

A one-click deployment succeeds only **after** credentials, dependencies and all source files are complete.

## 14. Optional Cloudflare Pages/static export

A full static export cannot run these Next.js Server Actions and route handlers as shipped. If choosing a static export, replace the forms with a direct, accessible Formspree front-end flow and remove/replace server-dependent features. Verify the static adapter, image handling and route behavior before deployment. This is a documented migration path, not an existing tested build variant.

## 15. Final release gate

Do **not** mark any item passed without test evidence:

- [ ] All 12 chunks assembled with no unresolved imports.
- [ ] `npm install` and `npm run typecheck` succeed.
- [ ] `npm run build` succeeds on a clean environment.
- [ ] Browser console is free of production errors and hydration warnings.
- [ ] All navigation links and routes load correctly.
- [ ] Email enquiries are delivered to the verified owner address.
- [ ] Booking enquiry wording does not claim appointment confirmation.
- [ ] Cal.com works only when configured and lazy-loads correctly.
- [ ] Mobile keyboard and screen-reader testing complete.
- [ ] Lighthouse mobile >=95 in all four categories on the deployed site.
- [ ] Structured data validated without invented factual claims.
- [ ] Image licenses and before/after permissions checked.
- [ ] Legal content reviewed for actual business policies and regulatory obligations.
- [ ] Obfuscation coverage verified or disabled; no client-side secrets.
- [ ] All `EDIT:` markers and bracketed placeholders resolved.

## 16. Known integration gaps from the delivery format

The supplied artifacts in the execution environment contained the programmatic source for Chunks 5–11. Earlier Chunks 1–4 were shown inline in chat rather than as downloadable files; they must be created in the actual project before a full build can run. Source compatibility across all twelve chunks was not demonstrated by a successful `next build` in this session. This README intentionally does not certify readiness or promise Lighthouse results.
