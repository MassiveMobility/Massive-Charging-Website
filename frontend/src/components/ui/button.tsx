import type { ButtonHTMLAttributes, CSSProperties } from "react";
import type { ButtonStyleConfig } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

type ButtonCssVariables = CSSProperties & Record<`--button-${string}`, number | string>;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  iconOnly?: boolean;
  styleConfig: ButtonStyleConfig;
};

/**
 * Reusable button driven entirely by prop-passed color, typography, and layout contracts.
 */
export function Button({
  children,
  className,
  fullWidth = false,
  iconOnly = false,
  style,
  styleConfig,
  type = "button",
  ...props
}: ButtonProps) {
  if (process.env.NODE_ENV !== "production" && iconOnly) {
    const hasAccessibleName = Boolean(props["aria-label"] || props["aria-labelledby"] || props.title);

    if (!hasAccessibleName) {
      console.warn("Button with iconOnly=true must include aria-label, aria-labelledby, or title.");
    }
  }

  const buttonVariables: ButtonCssVariables = {
    "--button-bg": styleConfig.colors.background,
    "--button-border": styleConfig.colors.border,
    "--button-fg": styleConfig.colors.foreground,
    "--button-font-family": styleConfig.typography.fontFamily,
    "--button-font-size": styleConfig.typography.fontSize,
    "--button-font-style": styleConfig.typography.fontStyle,
    "--button-font-weight": styleConfig.typography.fontWeight,
    "--button-gap": styleConfig.layout.contentGap,
    "--button-hover-bg": styleConfig.colors.hoverBackground,
    "--button-hover-border": styleConfig.colors.hoverBorder,
    "--button-hover-fg": styleConfig.colors.hoverForeground,
    "--button-letter-spacing": styleConfig.typography.letterSpacing,
    "--button-line-height": styleConfig.typography.lineHeight,
    "--button-min-height": styleConfig.layout.minHeight,
    "--button-padding-block": styleConfig.layout.paddingBlock,
    "--button-padding-inline": styleConfig.layout.paddingInline,
    "--button-radius": styleConfig.layout.borderRadius,
    "--button-text-transform": styleConfig.typography.textTransform,
    ...style
  };

  return (
    <button
      className={cn("ui-button", fullWidth && "ui-button--full", iconOnly && "ui-button--icon-only", className)}
      style={buttonVariables}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
