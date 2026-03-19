import type { ContainerWidth, SectionPadding, SectionTone } from "@/lib/config/design-system";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";
import { Container } from "@/components/shared/container";

const toneClassMap: Record<SectionTone, string> = {
  brand: "layout-section--brand",
  muted: "layout-section--muted",
  surface: "layout-section--surface",
  transparent: "layout-section--transparent"
};

const paddingClassMap: Record<SectionPadding, string> = {
  lg: "layout-section--padding-lg",
  md: "layout-section--padding-md",
  sm: "layout-section--padding-sm"
};

type SectionElement = "article" | "div" | "footer" | "header" | "section";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  as?: SectionElement;
  padding?: SectionPadding;
  tone?: SectionTone;
  width?: ContainerWidth | "none";
};

/**
 * Shared semantic section wrapper with tone and spacing contracts.
 */
export function Section({
  as = "section",
  children,
  className,
  padding = "md",
  tone = "transparent",
  width = "content",
  ...props
}: SectionProps) {
  const Component = as;

  if (width === "none") {
    return (
      <Component
        className={cn("layout-section", toneClassMap[tone], paddingClassMap[padding], className)}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={cn("layout-section", toneClassMap[tone], paddingClassMap[padding], className)}
      {...props}
    >
      <Container width={width}>{children}</Container>
    </Component>
  );
}
