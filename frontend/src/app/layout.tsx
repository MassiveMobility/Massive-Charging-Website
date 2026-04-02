import type { Metadata } from "next";
import type { ReactNode } from "react";

import { buildRootMetadata } from "@/lib/seo/metadata";

import "./globals.css";

export const metadata: Metadata = buildRootMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
