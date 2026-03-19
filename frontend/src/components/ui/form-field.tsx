import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { ReactNode } from "react";

import { buildFieldCssVariables } from "@/components/ui/field-style";
import { cn } from "@/lib/utils/cn";

type FormFieldRenderProps = {
  controlId: string;
  describedBy?: string | undefined;
  isInvalid: boolean;
};

export type FormFieldProps = {
  children: (props: FormFieldRenderProps) => ReactNode;
  className?: string | undefined;
  controlId: string;
  describedBy?: string | undefined;
  error?: string | undefined;
  errorId?: string | undefined;
  hint?: string | undefined;
  hintId?: string | undefined;
  isInvalid: boolean;
  label?: string | undefined;
  styleConfig: FieldStyleConfig;
};

/**
 * Shared wrapper that wires label/hint/error semantics for input-like controls.
 */
export function FormField({
  children,
  className,
  controlId,
  describedBy,
  error,
  errorId,
  hint,
  hintId,
  isInvalid,
  label,
  styleConfig
}: FormFieldProps) {
  return (
    <div className={cn("ui-field", className)} style={buildFieldCssVariables(styleConfig)}>
      {label ? (
        <label className="ui-field__label" htmlFor={controlId}>
          {label}
        </label>
      ) : null}
      {children({
        controlId,
        describedBy,
        isInvalid
      })}
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
