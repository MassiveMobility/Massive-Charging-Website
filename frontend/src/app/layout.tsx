import { Inter, Montserrat, Public_Sans, Sora, Urbanist } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildRootMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const bodyFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans"
});

const headingFont = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display"
});

const publicSans = Public_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-public-sans"
});

const urbanistFont = Urbanist({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-urbanist"
});

const soraFont = Sora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = buildRootMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${bodyFont.variable} ${headingFont.variable} ${publicSans.variable} ${urbanistFont.variable} ${soraFont.variable}`}
      lang="en"
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
