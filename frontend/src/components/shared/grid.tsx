import type { GridColumn, StackGap } from "@/lib/config/design-system";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

const columnClassMap: Record<GridColumn, string> = {
  "2": "layout-grid--2",
  "3": "layout-grid--3",
  "4": "layout-grid--4",
  auto: "layout-grid--auto"
};

const gapClassMap: Record<StackGap, string> = {
  lg: "layout-stack--gap-lg",
  md: "layout-stack--gap-md",
  sm: "layout-stack--gap-sm",
  xl: "layout-stack--gap-xl",
  xs: "layout-stack--gap-xs"
};

type GridElement = "div" | "ol" | "section" | "ul";

export type GridProps = HTMLAttributes<HTMLElement> & {
  as?: GridElement;
  columns?: GridColumn;
  gap?: StackGap;
};

/**
 * Responsive grid helper for card lists and repeatable content groups.
 */
export function Grid({ as = "div", className, columns = "auto", gap = "md", ...props }: GridProps) {
  const Component = as;

  return (
    <Component
      className={cn("layout-grid", columnClassMap[columns], gapClassMap[gap], className)}
      {...props}
    />
  );
}
