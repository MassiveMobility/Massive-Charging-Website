import type { CSSProperties, HTMLAttributes } from "react";
import type { TextStyleConfig } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

type TextCssVariables = CSSProperties & Record<`--text-${string}`, number | string>;

type TextElement = "div" | "li" | "p" | "span";

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextElement;
  styleConfig: TextStyleConfig;
};

/**
 * Shared body-text primitive with prop-driven typography contract.
 */
export function Text({ as = "p", className, style, styleConfig, ...props }: TextProps) {
  const Component = as;
  const textVariables: TextCssVariables = {
    "--text-color": styleConfig.color,
    "--text-font-family": styleConfig.fontFamily,
    "--text-font-size": styleConfig.fontSize,
    "--text-font-style": styleConfig.fontStyle,
    "--text-font-weight": styleConfig.fontWeight,
    "--text-letter-spacing": styleConfig.letterSpacing,
    "--text-line-height": styleConfig.lineHeight,
    "--text-text-transform": styleConfig.textTransform,
    ...style
  };

  return <Component className={cn("ui-text", className)} style={textVariables} {...props} />;
}
