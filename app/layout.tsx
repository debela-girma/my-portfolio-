import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio.vercel.app"),
  title: {
    default: "Your Name — Full-Stack Freelance Developer",
    template: "%s | Your Name"
  },
  description:
    "A modern portfolio for a freelance full-stack developer building scalable APIs, resilient databases, and polished web applications.",
  keywords: [
    "freelance developer",
    "full-stack developer",
    "Next.js developer",
    "TypeScript developer",
    "backend developer",
    "API development",
    "database architecture"
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio.vercel.app",
    siteName: "Your Name Portfolio",
    title: "Your Name — Full-Stack Freelance Developer",
    description:
      "Scalable systems, clean interfaces, and production-ready delivery for ambitious freelance projects."
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Freelance Developer",
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
