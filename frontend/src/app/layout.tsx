import { Manrope, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/config/site";

import "./globals.css";

const bodyFont = Manrope({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans"
});

const headingFont = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url
  },
  robots: {
    follow: true,
    index: true
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`${bodyFont.variable} ${headingFont.variable}`} lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
