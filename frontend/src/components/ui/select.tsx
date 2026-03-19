import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { SelectHTMLAttributes } from "react";

import { buildFieldA11yState } from "@/lib/a11y/ids";
import { cn } from "@/lib/utils/cn";
import { FormField } from "@/components/ui/form-field";

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
  const { "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ...selectProps } = props;
  const { controlId, describedBy, errorId, hintId, isInvalid } = buildFieldA11yState({
    ariaDescribedBy,
    ariaInvalid,
    controlId: selectId,
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
        <select
          {...selectProps}
          aria-describedby={fieldDescribedBy}
          aria-invalid={fieldIsInvalid}
          className={cn("ui-select", fieldIsInvalid && "ui-control--invalid", className)}
          id={fieldId}
        >
          {children}
        </select>
      )}
    </FormField>
  );
}
