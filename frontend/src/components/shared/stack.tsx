import type { HTMLAttributes } from "react";
import type { StackGap } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

const gapClassMap: Record<StackGap, string> = {
  lg: "layout-stack--gap-lg",
  md: "layout-stack--gap-md",
  sm: "layout-stack--gap-sm",
  xl: "layout-stack--gap-xl",
  xs: "layout-stack--gap-xs"
};

type StackElement = "article" | "div" | "ol" | "section" | "ul";

export type StackProps = HTMLAttributes<HTMLElement> & {
  as?: StackElement;
  gap?: StackGap;
};

/**
 * Vertical rhythm helper for predictable spacing between sibling content blocks.
 */
export function Stack({ as = "div", className, gap = "md", ...props }: StackProps) {
  const Component = as;

  return <Component className={cn("layout-stack", gapClassMap[gap], className)} {...props} />;
}
