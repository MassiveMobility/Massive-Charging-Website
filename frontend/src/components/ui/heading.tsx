import type { CSSProperties, HTMLAttributes } from "react";
import type { HeadingLevel, HeadingStyleConfig } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

type HeadingCssVariables = CSSProperties & Record<`--heading-${string}`, number | string>;

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  styleConfig: HeadingStyleConfig;
};

/**
 * Semantic heading primitive with prop-driven font and color styling.
 */
export function Heading({ className, level = 2, style, styleConfig, ...props }: HeadingProps) {
  const Component = `h${level}` as const;
  const headingVariables: HeadingCssVariables = {
    "--heading-color": styleConfig.color,
    "--heading-font-family": styleConfig.fontFamily,
    "--heading-font-size": styleConfig.fontSize,
    "--heading-font-style": styleConfig.fontStyle,
    "--heading-font-weight": styleConfig.fontWeight,
    "--heading-letter-spacing": styleConfig.letterSpacing,
    "--heading-line-height": styleConfig.lineHeight,
    "--heading-text-transform": styleConfig.textTransform,
    ...style
  };

  return <Component className={cn("ui-heading", className)} style={headingVariables} {...props} />;
}
