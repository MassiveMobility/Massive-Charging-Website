/**
 * Reusable keyboard-focus helpers for menus, drawers, and dialogs.
 * These helpers keep keyboard behavior predictable across interactive surfaces.
 */
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "details summary",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[contenteditable='true']",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

/**
 * Returns focusable descendants in document order while excluding hidden nodes.
 */
export function getFocusableElements(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true"
  );
}

/**
 * Moves focus to the first focusable descendant and reports whether it succeeded.
 */
export function focusFirstElement(container: HTMLElement) {
  const [firstElement] = getFocusableElements(container);

  if (!firstElement) {
    return false;
  }

  firstElement.focus();

  return true;
}

/**
 * Keeps keyboard Tab navigation inside the provided container.
 */
export function trapFocusInContainer(event: KeyboardEvent, container: HTMLElement) {
  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getFocusableElements(container);

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!firstElement || !lastElement) {
    return;
  }

  const activeElement = document.activeElement;

  if (event.shiftKey && activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
    return;
  }

  if (!event.shiftKey && activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}
