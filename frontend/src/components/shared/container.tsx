import type { ContainerWidth } from "@/lib/config/design-system";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

const widthClassMap: Record<ContainerWidth, string> = {
  content: "layout-container--content",
  full: "layout-container--full",
  narrow: "layout-container--narrow",
  wide: "layout-container--wide"
};

type ContainerElement = "article" | "div" | "footer" | "header" | "main" | "section";

export type ContainerProps = HTMLAttributes<HTMLElement> & {
  as?: ContainerElement;
  width?: ContainerWidth;
};

/**
 * Shared width wrapper to keep consistent gutters and max-width behavior.
 */
export function Container({
  as = "div",
  className,
  width = "content",
  ...props
}: ContainerProps) {
  const Component = as;

  return <Component className={cn("layout-container", widthClassMap[width], className)} {...props} />;
}
