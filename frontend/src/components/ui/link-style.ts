import type { CSSProperties } from "react";
import type { LinkStyleConfig } from "@/lib/config/design-system";

type LinkCssVariables = CSSProperties & Record<`--link-${string}`, number | string>;

/**
 * Converts link style presets into CSS custom properties consumed by the global `.ui-link` class.
 */
export function buildLinkStyleVariables(styleConfig: LinkStyleConfig): LinkCssVariables {
  return {
    "--link-color": styleConfig.color,
    "--link-font-family": styleConfig.typography.fontFamily,
    "--link-font-size": styleConfig.typography.fontSize,
    "--link-font-style": styleConfig.typography.fontStyle,
    "--link-font-weight": styleConfig.typography.fontWeight,
    "--link-hover-color": styleConfig.hoverColor,
    "--link-letter-spacing": styleConfig.typography.letterSpacing,
    "--link-line-height": styleConfig.typography.lineHeight,
    "--link-text-decoration": styleConfig.textDecoration,
    "--link-text-transform": styleConfig.typography.textTransform,
    "--link-underline-offset": styleConfig.textUnderlineOffset
  };
}
