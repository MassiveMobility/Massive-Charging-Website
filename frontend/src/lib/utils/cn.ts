/**
 * Small class-name composer used by primitive components.
 * It keeps variant assembly readable without bringing a larger dependency.
 */
type ClassNameValue = string | false | null | undefined;

export function cn(...values: ClassNameValue[]) {
  return values.filter(Boolean).join(" ");
}
