# Styles

Centralized design-system style layers:

- `tokens.css`: raw, non-semantic design tokens (palette, spacing, radius, shadows, breakpoints).
- `theme.css`: semantic token mapping plus reusable layout/UI class contracts driven by CSS variables.
- `typography.css`: heading/body/prose typography hierarchy with variable-driven primitives.

`src/app/globals.css` imports these files in order so primitives and routes stay consistent.
