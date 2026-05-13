# Freelance Developer Portfolio

A modern, animated, production-ready personal portfolio website for a freelance full-stack developer. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Folder Structure

```text
app/
  globals.css        Global styles, Tailwind layers, smooth scrolling, theme utilities
  layout.tsx         SEO metadata, fonts, root layout, viewport settings
  page.tsx           Main page sections and layout composition
components/
  contact-form.tsx   Accessible animated contact form
  hero.tsx           Animated hero with rotating role text and CTA micro-interactions
  section.tsx        Reusable reveal-on-scroll section wrapper
lib/
  data.ts            Navigation, skills, project, and service content
public/projects/     Lightweight SVG project previews
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Production Build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Create a new project in Vercel and import the repository.
3. Keep the default Next.js build settings.
4. Deploy, then update `metadataBase` and social URLs in `app/layout.tsx` to match your live domain.

## Customization Checklist

- Replace `Your Name` with your real name.
- Update GitHub, LinkedIn, email, project links, and demo URLs.
- Replace project previews in `public/projects` if you have real screenshots.
- Connect the contact form to an email service, CRM, or API route before launch.
