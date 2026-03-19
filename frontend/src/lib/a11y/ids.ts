/**
 * Accessibility ID helpers used by form controls and described-by wiring.
 * Keeping this logic centralized prevents subtle aria-describedby inconsistencies.
 */
export type AriaInvalidValue = boolean | "false" | "grammar" | "spelling" | "true" | undefined;

export type FieldA11yOptions = {
  controlId: string;
  ariaDescribedBy?: string | undefined;
  ariaInvalid?: AriaInvalidValue | undefined;
  error?: string | undefined;
  hint?: string | undefined;
};

export type FieldA11yState = {
  controlId: string;
  describedBy?: string | undefined;
  errorId?: string | undefined;
  hintId?: string | undefined;
  isInvalid: boolean;
};

/**
 * Builds stable IDs and aria-describedby contracts for a field control.
 */
export function buildFieldA11yState({
  ariaDescribedBy,
  ariaInvalid,
  controlId,
  error,
  hint
}: FieldA11yOptions): FieldA11yState {
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [ariaDescribedBy, hintId, errorId].filter(Boolean).join(" ") || undefined;
  const isInvalid = error !== undefined || normalizeAriaInvalid(ariaInvalid);

  return {
    controlId,
    describedBy,
    errorId,
    hintId,
    isInvalid
  };
}

/**
 * Converts `aria-invalid` values into a strict boolean.
 */
function normalizeAriaInvalid(value: AriaInvalidValue) {
  return value === true || value === "true" || value === "grammar" || value === "spelling";
}
