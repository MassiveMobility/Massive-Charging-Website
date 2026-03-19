import type { FieldStyleConfig } from "@/lib/config/design-system";
import type { TextareaHTMLAttributes } from "react";

import { buildFieldCssVariables } from "@/components/ui/field-style";
import { cn } from "@/lib/utils/cn";

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
  const hintId = hint ? `${textareaId}-hint` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;
  const describedBy = [props["aria-describedby"], hintId, errorId].filter(Boolean).join(" ") || undefined;
  const isInvalid =
    error !== undefined || props["aria-invalid"] === true || props["aria-invalid"] === "true";

  return (
    <div className="ui-field" style={buildFieldCssVariables(styleConfig)}>
      {label ? (
        <label className="ui-field__label" htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea
        {...props}
        aria-describedby={describedBy}
        aria-invalid={isInvalid}
        className={cn("ui-textarea", isInvalid && "ui-control--invalid", className)}
        id={textareaId}
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
