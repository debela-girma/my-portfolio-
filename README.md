# Freelance Developer Portfolio

A modern, animated, production-ready personal portfolio website for a freelance full-stack developer. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Folder Structure

```text
app/
  globals.css        Global styles, Tailwind layers, smooth scrolling, dark/light theme surfaces
  layout.tsx         SEO metadata, fonts, theme boot script, root layout, viewport settings
  page.tsx           Main page sections, navigation, portfolio layout composition
components/
  animated-card.tsx  Reusable staggered card reveal animation
  contact-form.tsx   Accessible animated contact form
  hero.tsx           Animated hero with rotating role text, CTA micro-interactions, profile image slot
  section.tsx        Reusable reveal-on-scroll section wrapper
  theme-provider.tsx Dark/light theme state and localStorage persistence
  theme-toggle.tsx   Animated dark/light theme switcher
lib/
  data.ts            Navigation, skills, project, and service content
public/
  profile-placeholder.svg  Replace this with your own portrait or profile image
  projects/               Lightweight SVG project previews
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site locally.

## Add Your Photo

1. Add your image to the `public` folder, for example `public/my-photo.jpg`.
2. Open `components/hero.tsx`.
3. Change `const profileImage = "/profile-placeholder.svg";` to `const profileImage = "/my-photo.jpg";`.
4. Keep the image optimized and ideally use a vertical portrait crop for the best result.

## Theme

The site defaults to dark mode, includes a polished light mode, and stores the visitor's preference in `localStorage`. The toggle lives in the sticky navigation.

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
- Replace `public/profile-placeholder.svg` with your portrait.
- Update GitHub, LinkedIn, email, project links, and demo URLs.
- Replace project previews in `public/projects` if you have real screenshots.
- Connect the contact form to an email service, CRM, or API route before launch.
