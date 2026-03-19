import type { CSSProperties, HTMLAttributes } from "react";
import type { BadgeStyleConfig } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

type BadgeCssVariables = CSSProperties & Record<`--badge-${string}`, number | string>;

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  styleConfig: BadgeStyleConfig;
};

/**
 * Compact semantic status label with fully prop-driven typography and color styling.
 */
export function Badge({ className, style, styleConfig, ...props }: BadgeProps) {
  const badgeVariables: BadgeCssVariables = {
    "--badge-bg": styleConfig.background,
    "--badge-color": styleConfig.color,
    "--badge-font-family": styleConfig.typography.fontFamily,
    "--badge-font-size": styleConfig.typography.fontSize,
    "--badge-font-style": styleConfig.typography.fontStyle,
    "--badge-font-weight": styleConfig.typography.fontWeight,
    "--badge-letter-spacing": styleConfig.typography.letterSpacing,
    "--badge-line-height": styleConfig.typography.lineHeight,
    "--badge-min-height": styleConfig.minHeight,
    "--badge-padding-block": styleConfig.paddingBlock,
    "--badge-padding-inline": styleConfig.paddingInline,
    "--badge-radius": styleConfig.borderRadius,
    "--badge-text-transform": styleConfig.typography.textTransform,
    ...style
  };

  return <span className={cn("ui-badge", className)} style={badgeVariables} {...props} />;
}
