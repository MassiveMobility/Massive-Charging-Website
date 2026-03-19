import { Manrope, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildRootMetadata } from "@/lib/seo/metadata";

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

export const metadata: Metadata = buildRootMetadata();

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
