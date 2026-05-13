import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://debela-girma-portfolio.vercel.app"),
  title: {
    default: "Debela Girma — Full-Stack Freelance Developer",
    template: "%s | Debela Girma"
  },
  description:
    "A modern portfolio for a freelance full-stack developer building scalable APIs, resilient databases, and polished web applications with TypeScript and modern web technologies.",
  keywords: [
    "freelance developer",
    "full-stack developer",
    "Next.js developer",
    "TypeScript developer",
    "backend developer",
    "API development",
    "database architecture",
    "Debela Girma"
  ],
  authors: [{ name: "Debela Girma" }],
  creator: "Debela Girma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://debela-girma-portfolio.vercel.app",
    siteName: "Debela Girma Portfolio",
    title: "Debela Girma — Full-Stack Freelance Developer",
    description:
      "Scalable systems, clean interfaces, and production-ready delivery for ambitious freelance projects."
  },
  twitter: {
    card: "summary_large_image",
    title: "Debela Girma — Full-Stack Freelance Developer",
    description: "Full-stack development for scalable systems, APIs, and polished web products."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
