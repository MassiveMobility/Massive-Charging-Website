import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { InputHTMLAttributes } from "react";

import { buildFieldCssVariables } from "@/components/ui/field-style";
import { cn } from "@/lib/utils/cn";

import { useId } from "react";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  error?: string;
  hint?: string;
  label?: string;
  styleConfig: FieldStyleConfig;
};

/**
 * Accessible text input primitive with fully prop-driven field styles.
 */
export function Input({ className, error, hint, id, label, styleConfig, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? `input-${generatedId}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") || undefined;
  const isInvalid =
    error !== undefined || props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <div className="ui-field" style={buildFieldCssVariables(styleConfig)}>
      {label ? (
        <label className="ui-field__label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        {...props}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={cn("ui-input", isInvalid && "ui-control--invalid", className)}
        id={inputId}
      />
      {hint ? (
        <p className="ui-field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="ui-field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
