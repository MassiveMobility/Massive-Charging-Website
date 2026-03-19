import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { InputHTMLAttributes } from "react";

import { buildFieldA11yState } from "@/lib/a11y/ids";
import { cn } from "@/lib/utils/cn";
import { FormField } from "@/components/ui/form-field";

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
  const { "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ...inputProps } = props;
  const { controlId, describedBy, errorId, hintId, isInvalid } = buildFieldA11yState({
    ariaDescribedBy,
    ariaInvalid,
    controlId: inputId,
    error,
    hint
  });

  return (
    <FormField
      controlId={controlId}
      describedBy={describedBy}
      error={error}
      errorId={errorId}
      hint={hint}
      hintId={hintId}
      isInvalid={isInvalid}
      label={label}
      styleConfig={styleConfig}
    >
      {({ controlId: fieldId, describedBy: fieldDescribedBy, isInvalid: fieldIsInvalid }) => (
        <input
          {...inputProps}
          aria-describedby={fieldDescribedBy}
          aria-invalid={fieldIsInvalid}
          className={cn("ui-input", fieldIsInvalid && "ui-control--invalid", className)}
          id={fieldId}
        />
      )}
    </FormField>
  );
}
