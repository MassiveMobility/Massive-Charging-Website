import type { CSSProperties } from "react";
import type { FieldStyleConfig } from "@/lib/config/design-system";

type FieldCssVariables = CSSProperties & Record<`--field-${string}`, number | string>;

/**
 * Maps field style presets to CSS custom properties shared by input/textarea/select primitives.
 */
export function buildFieldCssVariables(styleConfig: FieldStyleConfig): FieldCssVariables {
  return {
    "--field-control-bg": styleConfig.input.background,
    "--field-control-border-color": styleConfig.input.borderColor,
    "--field-control-color": styleConfig.input.color,
    "--field-control-disabled-bg": styleConfig.input.disabledBackground,
    "--field-control-disabled-color": styleConfig.input.disabledColor,
    "--field-control-focus-border-color": styleConfig.input.focusBorderColor,
    "--field-control-focus-ring-color": styleConfig.input.focusRingColor,
    "--field-control-font-family": styleConfig.input.typography.fontFamily,
    "--field-control-font-size": styleConfig.input.typography.fontSize,
    "--field-control-font-style": styleConfig.input.typography.fontStyle,
    "--field-control-font-weight": styleConfig.input.typography.fontWeight,
    "--field-control-invalid-bg": styleConfig.input.invalidBackground,
    "--field-control-invalid-border-color": styleConfig.input.invalidBorderColor,
    "--field-control-letter-spacing": styleConfig.input.typography.letterSpacing,
    "--field-control-line-height": styleConfig.input.typography.lineHeight,
    "--field-control-min-height": styleConfig.input.minHeight,
    "--field-control-padding-block": styleConfig.input.paddingBlock,
    "--field-control-padding-inline": styleConfig.input.paddingInline,
    "--field-control-placeholder-color": styleConfig.input.placeholderColor,
    "--field-control-radius": styleConfig.input.borderRadius,
    "--field-control-resize": styleConfig.input.resize,
    "--field-control-text-transform": styleConfig.input.typography.textTransform,
    "--field-gap": styleConfig.fieldGap,
    "--field-hint-color": styleConfig.hintStyle.color,
    "--field-hint-font-family": styleConfig.hintStyle.fontFamily,
    "--field-hint-font-size": styleConfig.hintStyle.fontSize,
    "--field-hint-font-style": styleConfig.hintStyle.fontStyle,
    "--field-hint-font-weight": styleConfig.hintStyle.fontWeight,
    "--field-hint-letter-spacing": styleConfig.hintStyle.letterSpacing,
    "--field-hint-line-height": styleConfig.hintStyle.lineHeight,
    "--field-hint-text-transform": styleConfig.hintStyle.textTransform,
    "--field-label-color": styleConfig.labelStyle.color,
    "--field-label-font-family": styleConfig.labelStyle.fontFamily,
    "--field-label-font-size": styleConfig.labelStyle.fontSize,
    "--field-label-font-style": styleConfig.labelStyle.fontStyle,
    "--field-label-font-weight": styleConfig.labelStyle.fontWeight,
    "--field-label-letter-spacing": styleConfig.labelStyle.letterSpacing,
    "--field-label-line-height": styleConfig.labelStyle.lineHeight,
    "--field-label-text-transform": styleConfig.labelStyle.textTransform,
    "--field-message-color": styleConfig.messageStyle.color,
    "--field-message-font-family": styleConfig.messageStyle.fontFamily,
    "--field-message-font-size": styleConfig.messageStyle.fontSize,
    "--field-message-font-style": styleConfig.messageStyle.fontStyle,
    "--field-message-font-weight": styleConfig.messageStyle.fontWeight,
    "--field-message-letter-spacing": styleConfig.messageStyle.letterSpacing,
    "--field-message-line-height": styleConfig.messageStyle.lineHeight,
    "--field-message-text-transform": styleConfig.messageStyle.textTransform
  };
}
