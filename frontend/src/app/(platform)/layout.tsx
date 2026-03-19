import { routePaths } from "@/lib/constants/routes";

import type { ReactNode } from "react";

import Link from "next/link";

type PlatformLayoutProps = {
  children: ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <div className="platform-shell">
      <header className="platform-header">
        <div className="shell">
          <p className="eyebrow">Platform Area</p>
          <p className="lead">
            Protected authentication and role-based access control will be added in upcoming migration
            steps.
          </p>
          <p>
            <Link href={routePaths.home}>Back to public website</Link>
          </p>
        </div>
      </header>
      <main id="main-content">{children}</main>
    </div>
  );
}
