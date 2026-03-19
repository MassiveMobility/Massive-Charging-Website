/**
 * Accessibility standards and test targets for public and platform routes.
 * This module acts as the source of truth for baseline a11y expectations.
 */
export const accessibilityStandards = {
  headings: [
    "Each route must expose exactly one logical h1 that communicates page intent.",
    "Section-level headings should descend in order (h2 for major groups, h3 for nested groups).",
    "Avoid visual heading styling that breaks semantic heading hierarchy."
  ],
  landmarks: [
    "Each route shell must expose semantic landmarks: header, main, and footer when applicable.",
    "Primary navigation must be wrapped in a nav landmark with a clear aria-label.",
    "Skip links should target the route-level main element (`#main-content`)."
  ],
  semanticControls: [
    "Use links for navigation, buttons for actions, and labels for all user-editable form controls.",
    "Icon-only controls must provide an accessible name via aria-label or aria-labelledby.",
    "Do not replace semantic controls with generic div/span click handlers."
  ]
} as const;

export const accessibilityTestingTargets = {
  contrastPairs: [
    {
      backgroundToken: "--raw-color-slate-0",
      foregroundToken: "--raw-color-slate-900",
      minRatio: 7,
      name: "Primary body text on surface"
    },
    {
      backgroundToken: "--raw-color-slate-0",
      foregroundToken: "--raw-color-slate-600",
      minRatio: 4.5,
      name: "Muted body text on surface"
    },
    {
      backgroundToken: "--raw-color-slate-0",
      foregroundToken: "--raw-color-brand-700",
      minRatio: 4.5,
      name: "Primary links on surface"
    },
    {
      backgroundToken: "--raw-color-brand-700",
      foregroundToken: "--raw-color-slate-0",
      minRatio: 4.5,
      name: "Inverse text on branded surfaces"
    }
  ],
  keyRoutes: [
    "/",
    "/about",
    "/articles",
    "/contact"
  ],
  interactiveStateTargets: [
    "Focus-visible indicators on links, buttons, and form controls",
    "Disabled-state styling and keyboard behavior for controls",
    "Error messaging and invalid state semantics for form controls"
  ]
} as const;

export const manualAccessibilityQaChecklist = [
  "Keyboard-only users can reach all primary navigation items and CTA controls.",
  "Skip link is visible on focus and lands on #main-content.",
  "Mobile navigation drawer traps focus while open and closes with Escape.",
  "Screen readers announce form labels, hints, and errors through aria-describedby.",
  "Meaningful images include alt text, decorative images use empty alt and aria-hidden."
] as const;
