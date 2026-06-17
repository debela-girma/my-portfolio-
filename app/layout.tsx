import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/data";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Software Engineer & Builder`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Premium founder-style portfolio for a product-minded software engineer building scalable web applications, Node.js APIs, and MVPs.",
  keywords: [
    "software engineer portfolio",
    "startup founder portfolio",
    "Next.js developer",
    "JavaScript developer",
    "Node.js developer",
    "full-stack developer",
    "MVP development",
    "API development",
    "Node.js backend development"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} — Building software that solves real problems`,
    description:
      "Founder-style personal brand site for a software engineer focused on thoughtful engineering, modern web technologies, and useful products.",
    images: [
      {
        url: "/profile-placeholder.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software Engineer & Builder`,
    description: "Scalable digital products, Node.js APIs, and MVP development for founders and businesses.",
    images: ["/profile-placeholder.svg"]
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
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
