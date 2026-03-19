import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { TextareaHTMLAttributes } from "react";

import { buildFieldA11yState } from "@/lib/a11y/ids";
import { cn } from "@/lib/utils/cn";
import { FormField } from "@/components/ui/form-field";

import { useId } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  hint?: string;
  label?: string;
  styleConfig: FieldStyleConfig;
};

/**
 * Accessible textarea primitive with fully prop-driven field styles.
 */
export function Textarea({ className, error, hint, id, label, styleConfig, ...props }: TextareaProps) {
  const generatedId = useId();
  const textareaId = id ?? `textarea-${generatedId}`;
  const { "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ...textareaProps } = props;
  const { controlId, describedBy, errorId, hintId, isInvalid } = buildFieldA11yState({
    ariaDescribedBy,
    ariaInvalid,
    controlId: textareaId,
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
        <textarea
          {...textareaProps}
          aria-describedby={fieldDescribedBy}
          aria-invalid={fieldIsInvalid}
          className={cn("ui-textarea", fieldIsInvalid && "ui-control--invalid", className)}
          id={fieldId}
        />
      )}
    </FormField>
  );
}
