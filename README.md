# R.S. Thomas Hauling, Inc. — Website

Business website for R.S. Thomas Hauling, Inc., a family-owned commercial hauling and heavy truck repair company based in Powhatan, Virginia. In business since 1985.

**Live site:** [rsthomashauling.com](https://www.rsthomashauling.com)

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Vue 3 (Composition API) |
| Build | Vite |
| Styling | SCSS (custom, no framework) |
| Routing | Vue Router 4 |
| Hosting | Netlify (free tier) |
| Forms | Netlify Forms |
| Maps | Google Maps Embed API |
| Domain/DNS | GoDaddy |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── assets/scss/           # SCSS variables, mixins, reset, global styles
├── components/
│   ├── AppHeader.vue      # Sticky nav with logo, links, mobile hamburger menu
│   ├── AppFooter.vue      # Footer with contact info, badges, map, links
│   └── employment/        # 11-step driver application wizard
│       ├── DriverApplication.vue    # Main wizard container
│       ├── FormProgressBar.vue      # Step progress indicator
│       ├── StepPersonalInfo.vue     # Step 1
│       ├── StepResidency.vue        # Step 2
│       ├── StepLicense.vue          # Step 3
│       ├── StepDrivingExperience.vue # Step 4
│       ├── StepAccidentRecord.vue   # Step 5
│       ├── StepTrafficConvictions.vue # Step 6
│       ├── StepLicenseHistory.vue   # Step 7
│       ├── StepEmploymentRecord.vue # Step 8
│       ├── StepCertification.vue    # Step 9
│       ├── StepDisclosure.vue       # Step 10
│       ├── StepMVRAuth.vue          # Step 11
│       └── ApplicationSuccess.vue   # Submission confirmation
├── composables/
│   └── useSeoMeta.js      # Per-page title, meta description, canonical URL
├── router/
│   └── index.js           # Vue Router config
├── views/
│   ├── HomeView.vue       # Home page
│   ├── AboutView.vue      # About page
│   ├── HaulingView.vue    # Hauling services page
│   ├── TruckRepairView.vue # Heavy truck repair page
│   ├── EmploymentView.vue # Employment page with application form
│   ├── HiringView.vue     # SEO-optimized hiring landing page
│   ├── PrintApplicationView.vue # Printable driver application
│   └── ContactView.vue    # Contact page with form and map
├── App.vue                # Root component with hiring banner, skip link
└── main.js                # App entry point
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, services overview, company stats, photo strip, CTA |
| `/about` | About | Company story, stats, awards & certifications |
| `/hauling` | Hauling Services | Aggregate types, fleet info, project types |
| `/truck-repair` | Truck Repair | Repair services list, facility info |
| `/employment` | Employment | Job requirements, culture, 11-step online application |
| `/employment/print-application` | Print Application | Printer-friendly application (includes SSN fields) |
| `/hiring` | Hiring | SEO landing page for driver recruitment |
| `/contact` | Contact | Contact info, Netlify form, Google Maps embed |

## Features

- **Mobile-first responsive design** with hamburger menu
- **WCAG 2.1 AA accessible** — color contrast, focus indicators, skip navigation, aria labels, prefers-reduced-motion
- **11-step employment application** with validation, Netlify Forms submission, and printable version
- **SEO optimized** — per-page titles/meta, canonical URLs, sitemap.xml, robots.txt, job posting schema (JSON-LD)
- **"Now Hiring" banner** — persistent, dismissible banner across all pages
- **Netlify Forms** — contact form and driver application submissions emailed to info@rsthomashauling.com

## Deployment

Hosted on Netlify. Deploys automatically from the `main` branch.

**Netlify config** is in `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules for client-side routing

### DNS (GoDaddy)

When ready to go live, update these records in GoDaddy (Netlify provides exact values):

| Type | Name | Point to |
|------|------|----------|
| A | @ | Netlify load balancer IP |
| CNAME | www | your-site.netlify.app |

**Do NOT** change MX, TXT (SPF/DMARC/DKIM), or NS records — those are for email.

## Images

Placeholder SVGs are in `public/images/`. Replace with real photos:

| File | Description |
|------|-------------|
| `hero-trucks.svg` → `.jpg` | Fleet/trucks (Home hero) |
| `hero-about.svg` → `.jpg` | Shop or owner (About hero) |
| `hero-hauling.svg` → `.jpg` | Dump trucks loading (Hauling hero) |
| `hero-repair.svg` → `.jpg` | Repair shop (Truck Repair hero) |
| `hero-employment.svg` → `.jpg` | Drivers/team (Employment hero) |
| `photo-trucks-1.svg` → `.jpg` | Action photo 1 (Home photo strip) |
| `photo-trucks-2.svg` → `.jpg` | Action photo 2 (Home photo strip) |
| `photo-trucks-3.svg` → `.jpg` | Action photo 3 (Home photo strip) |
| `photo-trucks-4.svg` → `.jpg` | Action photo 4 (Home photo strip) |

After adding real images, update the file extensions in the corresponding Vue components.

## Contact

- **Phone:** (804) 598-6292
- **Fax:** (804) 598-6290
- **Email:** info@rsthomashauling.com
- **Address:** 2285 Batterson Rd, Powhatan, VA 23139
