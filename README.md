# Founder-Style Software Portfolio

A premium, dark-first personal brand website for a product-minded software engineer. The site is designed to feel closer to a startup founder's personal homepage than a conventional developer portfolio: confident positioning, thoughtful product copy, smooth motion, and clear conversion paths.

## Complete Folder Structure

```text
app/
  globals.css             Global Tailwind layers, dark visual system, glass utilities, grid background
  layout.tsx              Root layout, metadata, Open Graph, Twitter cards, viewport configuration
  page.tsx                Main one-page portfolio composition and section content
  robots.ts               Robots configuration for search crawlers
  sitemap.ts              Sitemap generation for Vercel/Next.js
components/
  animated-card.tsx       Reusable Framer Motion reveal/hover card
  contact-form.tsx        Accessible animated inquiry form placeholder
  counter.tsx             In-view animated metric counter
  experience-effects.tsx  Reading progress indicator and cursor-follow glow
  hero.tsx                Founder-style hero with rotating role text and aurora/grid background
  icons.tsx               Local SVG icon system compatible with Lucide-style line icons
  magnetic-button.tsx     Cursor-reactive CTA button component
  section.tsx             Reusable scroll-reveal section wrapper
  site-header.tsx         Floating glass navbar with active section indicator
  theme-provider.tsx      Legacy theme provider retained for compatibility if light mode is reintroduced
  theme-toggle.tsx        Legacy theme toggle retained for compatibility if light mode is reintroduced
lib/
  data.ts                 Site config, navigation, trust metrics, skills, projects, services, now page content
public/
  profile-placeholder.svg Professional portrait placeholder
  projects/
    booking.svg           Project showcase placeholder
    dashboard.svg         Project showcase placeholder
    saas.svg              Project showcase placeholder
```

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Custom Lucide-style SVG icon components
- Responsive, dark-first design
- Static sitemap and robots routes
- Vercel-ready production build

> Note: `package.json` targets Next.js 15, React 19, and `lucide-react` for the requested production stack. The current container already had Next.js 14 installed and blocked some package downloads from the registry, so validation ran against the installed dependency tree. Run `npm install` in your normal environment to refresh the lockfile and install the requested versions.

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## Vercel Deployment

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in Vercel.
3. Keep the default framework preset as **Next.js**.
4. Use the default build command: `npm run build`.
5. Use the default output directory managed by Next.js.
6. Deploy.
7. After deployment, update `siteConfig.url` in `lib/data.ts` to your production domain.
8. Replace placeholder profile/project links with your real GitHub, LinkedIn, email, live demos, and repository URLs.

## Environment Variables

No environment variables are required for the current static portfolio.

If you connect the contact form to an email service or API route later, add provider-specific variables such as:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
```

Then configure those values in Vercel under **Project Settings → Environment Variables**.

## Customization Checklist

- Replace `Your Name` in `lib/data.ts` with your actual name.
- Update `siteConfig.email`, `siteConfig.github`, `siteConfig.linkedin`, and `siteConfig.url`.
- Replace `public/profile-placeholder.svg` with a high-resolution portrait.
- Replace project placeholders in `public/projects/` with real product screenshots.
- Update `projects`, `services`, and `buildingNow` in `lib/data.ts` with real work and current priorities.
- Connect `components/contact-form.tsx` to your preferred backend, CRM, or email provider before launch.
