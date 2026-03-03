# Clinic4U Dublin — Modern Website

A complete Next.js (App Router) website for Clinic4U — Dublin's premier dental and aesthetic clinic.

## Design Philosophy

The site is structurally inspired by the layout pattern of premium European dental clinic sites (hero → trust blocks → services grid → team → reviews → appointment CTA → footer), while using a **completely distinct design language**:

- **Palette**: Dark navy (#080f28) + teal accent (#1ea7b5) + warm off-white (#f8f7f4)
- **Typography**: Sora (sans) + DM Serif Display (headings)
- **Components**: Rounded-3xl cards, teal gradient icons, navy-on-offwhite surfaces, shadow-card system

---

## Tech Stack

| Technology | Usage |
|---|---|
| Next.js 16 (App Router) | SSR, ISR, static generation |
| TypeScript | Full type safety |
| Tailwind CSS | Utility-first styling |
| Edge Runtime | /booking, /contact, /privacy-policy pages |
| Edge Proxy | Security headers on every response |
| ISR (revalidate: 86400) | Marketing pages cached 24h |
| lucide-react | Icon system |

---

## Pages

| Route | Strategy | Description |
|---|---|---|
| `/` | ISR 24h | Home: Hero, Trust, Services, PRSI, Team, Reviews, CTA |
| `/about` | ISR 24h | Team bios: Dr Laura, Dr Sani, Dr Hadil |
| `/services` | ISR 24h | Services hub |
| `/services/dental` | ISR 24h | Dental services listing |
| `/services/dental/[slug]` | ISR 24h | 10 individual dental service pages |
| `/services/beauty` | ISR 24h | Beauty services listing |
| `/services/beauty/[slug]` | ISR 24h | 4 individual beauty service pages |
| `/pricing` | ISR 24h | Full price list (7 categories) |
| `/booking` | Edge Dynamic | Setmore iframe + phone/WhatsApp CTAs |
| `/faqs` | Static | 12 FAQs with accordion + category filter |
| `/contact` | Edge Dynamic | Contact details, hours, Google map |
| `/privacy-policy` | Edge Dynamic | GDPR privacy policy |
| `/sitemap.xml` | Static | Auto-generated sitemap |
| `/robots.txt` | Static | Search engine robots file |

---

## Content Migrated from Clinic4U

**Contact**: 01 476 3949 / 087 397 7779 | clinic4u.ie@gmail.com | Phibsborough, Dublin 7 | Mon-Fri 9-19h, Sat 9-14h

**Team**:
- Dr. Laura Oponowicz — Implants & Oral Surgery (MSc Madrid)
- Dr. Sani Bello Dangaji — General Dentistry & Maxillofacial Surgery
- Dr. Hadil Saidam — Orthodontics (Grigore T. Popa University, appointed 2022)

**Dental Services**: Check-up & Hygiene, Teeth Whitening, Fillings, Root Canal, Dental Implants, Orthodontics, Crowns & Bridges, Extractions, Dentures, Emergency Dentist

**Beauty Services**: Lip Fillers, Anti-Wrinkle (Women), Anti-Wrinkle (Men), Profhilo

**Special features**: Humm finance callout, PRSI dental benefit widget, Setmore booking iframe, WhatsApp CTA

---

## Edge Runtime Notes

- `/booking`, `/contact`, `/privacy-policy`: `export const runtime = "edge"` — CDN-edge delivery, no cold starts
- `src/proxy.ts` (Edge Proxy/Middleware): Adds CSP, HSTS, X-Frame-Options, Referrer-Policy on every request

---

## Running Locally

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm start      # serve production build
```

---

## Deploying to Vercel (Recommended)

1. Push repo to GitHub
2. Import at vercel.com/new — Next.js is auto-detected
3. No extra config needed for base site
4. Edge Runtime pages deploy to Vercel's Edge Network automatically

---

## SEO Features

- metadata + OpenGraph + Twitter Card on every page
- JSON-LD LocalBusiness + Dentist schema in root layout
- Auto-generated sitemap.xml and robots.txt
- WCAG-friendly: semantic HTML, aria-label, focus-visible styles
- Mobile-first responsive design, Core Web Vitals optimised
