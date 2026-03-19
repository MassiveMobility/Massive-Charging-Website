import type { CSSProperties, HTMLAttributes } from "react";
import type { CardStyleConfig } from "@/lib/config/design-system";

import { cn } from "@/lib/utils/cn";

type CardCssVariables = CSSProperties & Record<`--card-${string}`, number | string>;

type CardElement = "article" | "div" | "li" | "section";

export type CardProps = HTMLAttributes<HTMLElement> & {
  as?: CardElement;
  interactive?: boolean;
  styleConfig: CardStyleConfig;
};

/**
 * Neutral content container primitive with centralized style contract.
 */
export function Card({
  as = "article",
  className,
  interactive = false,
  style,
  styleConfig,
  ...props
}: CardProps) {
  const Component = as;
  const cardVariables: CardCssVariables = {
    "--card-bg": styleConfig.background,
    "--card-border-color": styleConfig.borderColor,
    "--card-content-gap": styleConfig.contentGap,
    "--card-hover-border-color": styleConfig.hoverBorderColor,
    "--card-hover-box-shadow": styleConfig.hoverBoxShadow,
    "--card-hover-transform": styleConfig.hoverTransform,
    "--card-padding": styleConfig.padding,
    "--card-radius": styleConfig.borderRadius,
    "--card-shadow": styleConfig.boxShadow,
    ...style
  };

  return (
    <Component
      className={cn("ui-card", interactive && "ui-card--interactive", className)}
      style={cardVariables}
      {...props}
    />
  );
}
