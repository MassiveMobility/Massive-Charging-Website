import type { ReactNode } from "react";

type PlatformLayoutProps = {
  children: ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return <>{children}</>;
}
