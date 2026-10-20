import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json','next.config.mjs','tailwind.config.ts','postcss.config.mjs',
  'tsconfig.json','.env.example','vercel.json','scripts/obfuscate.mjs',
  'styles/globals.css','lib/schemas.ts','lib/seo.ts','lib/jsonld.ts','lib/env.ts','lib/rate-limit.ts',
  'components/layout/Navbar.tsx','components/layout/Footer.tsx','components/layout/MobileMenu.tsx','components/layout/SkipLink.tsx',
  'components/seo/JsonLd.tsx',
  ...['Button','Card','Container','Section','Input','Accordion','Badge'].map(x => `components/ui/${x}.tsx`),
  ...['services','products','reviews','posts','beforeAfter','faqs'].map(x => `data/${x}.ts`),
  'app/layout.tsx','app/page.tsx',
  ...['Hero','TrustStrip','ServicePreview','WhyChooseUs','BeforeAfterTeaser','TestimonialTeaser','InteriorTeaser','ProductTeaser','BlogTeaser','FinalCTA'].map(x => `components/sections/${x}.tsx`),
  'app/services/page.tsx','app/services/[slug]/page.tsx','app/shop/page.tsx',
  'components/shop/ProductCard.tsx','components/shop/ProductFilter.tsx',
  'app/before-after/page.tsx','app/testimonials/page.tsx','app/about/page.tsx','components/media/BeforeAfterSlider.tsx',
  'app/booking/page.tsx','app/contact/page.tsx','app/api/booking/route.ts','app/api/contact/route.ts',
  'components/booking/CalEmbed.tsx','components/booking/BookingForm.tsx','components/contact/ContactForm.tsx',
  'lib/form-actions.ts','lib/form-processing.ts','app/thank-you/page.tsx','app/not-found.tsx',
  'app/blog/page.tsx','app/blog/[slug]/page.tsx','components/blog/BlogExplorer.tsx',
  'app/sitemap.ts','app/robots.ts','app/opengraph-image.tsx','app/privacy/page.tsx','app/terms/page.tsx'
];
const missing = required.filter(f => !fs.existsSync(path.join(root,f)));
const unresolved = [];
const sources = required.filter(f => /\.(ts|tsx|mjs)$/.test(f) && fs.existsSync(path.join(root,f)));
for (const file of sources) {
  const text = fs.readFileSync(path.join(root,file),'utf8');
  for (const match of text.matchAll(/from\s*["'](@\/[^"']+)["']/g)) {
    const target = match[1].slice(2);
    if (!['.ts','.tsx','.js','.mjs','/index.ts','/index.tsx'].some(ext=>fs.existsSync(path.join(root,target+ext)))) {
      unresolved.push(`${file}: ${match[1]}`);
    }
  }
}
console.log(`Required files: ${required.length}; present: ${required.length-missing.length}; missing: ${missing.length}`);
if(missing.length) console.log('\nMissing files:\n'+missing.map(x=>' - '+x).join('\n'));
if(unresolved.length) console.log('\nPotential unresolved @/ imports:\n'+unresolved.map(x=>' - '+x).join('\n'));
console.log('\nThis is a static preflight only; it does not replace TypeScript, build, accessibility or browser testing.');
process.exitCode=(missing.length||unresolved.length)?1:0;
