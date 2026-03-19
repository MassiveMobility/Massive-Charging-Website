import type { ReactNode } from "react";

import { marketingShellStylePresets } from "@/lib/config/design-system";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="marketing-shell">
      <SiteHeader styleConfig={marketingShellStylePresets.header} />
      <main id="main-content">{children}</main>
      <SiteFooter styleConfig={marketingShellStylePresets.footer} />
    </div>
  );
}
