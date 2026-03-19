import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { SelectHTMLAttributes } from "react";

import { buildFieldCssVariables } from "@/components/ui/field-style";
import { cn } from "@/lib/utils/cn";

import { useId } from "react";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  hint?: string;
  label?: string;
  styleConfig: FieldStyleConfig;
};

/**
 * Accessible select primitive with fully prop-driven field styles.
 */
export function Select({
  children,
  className,
  error,
  hint,
  id,
  label,
  styleConfig,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? `select-${generatedId}`;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") || undefined;
  const isInvalid =
    error !== undefined || props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <div className="ui-field" style={buildFieldCssVariables(styleConfig)}>
      {label ? (
        <label className="ui-field__label" htmlFor={selectId}>
          {label}
        </label>
      ) : null}
      <select
        {...props}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={cn("ui-select", isInvalid && "ui-control--invalid", className)}
        id={selectId}
      >
        {children}
      </select>
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
