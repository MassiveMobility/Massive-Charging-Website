/**
 * Design-system contracts used by primitive components and marketing shell surfaces.
 * Visual values live in central style preset objects so component logic stays style-free.
 */
export const containerWidths = ["narrow", "content", "wide", "full"] as const;

export const sectionTones = ["surface", "muted", "brand", "transparent"] as const;
export const sectionPaddings = ["sm", "md", "lg"] as const;

export const stackGaps = ["xs", "sm", "md", "lg", "xl"] as const;
export const gridColumns = ["auto", "2", "3", "4"] as const;

export type TypographyStyleConfig = {
  color: string;
  fontFamily: string;
  fontSize: string;
  fontStyle: "italic" | "normal" | "oblique";
  fontWeight: number | string;
  letterSpacing: string;
  lineHeight: string;
  textTransform: "capitalize" | "lowercase" | "none" | "uppercase";
};

export type ButtonStyleConfig = {
  colors: {
    background: string;
    border: string;
    foreground: string;
    hoverBackground: string;
    hoverBorder: string;
    hoverForeground: string;
  };
  layout: {
    borderRadius: string;
    contentGap: string;
    minHeight: string;
    paddingBlock: string;
    paddingInline: string;
  };
  typography: TypographyStyleConfig;
};

export type LinkStyleConfig = {
  color: string;
  hoverColor: string;
  textDecoration: "none" | "underline";
  textUnderlineOffset: string;
  typography: TypographyStyleConfig;
};

export type BadgeStyleConfig = {
  background: string;
  borderRadius: string;
  color: string;
  minHeight: string;
  paddingBlock: string;
  paddingInline: string;
  typography: TypographyStyleConfig;
};

export type CardStyleConfig = {
  background: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
  contentGap: string;
  hoverBorderColor: string;
  hoverBoxShadow: string;
  hoverTransform: string;
  padding: string;
};

export type HeadingStyleConfig = TypographyStyleConfig;
export type TextStyleConfig = TypographyStyleConfig;

export type FieldStyleConfig = {
  fieldGap: string;
  hintStyle: TypographyStyleConfig;
  input: {
    background: string;
    borderColor: string;
    borderRadius: string;
    color: string;
    disabledBackground: string;
    disabledColor: string;
    focusBorderColor: string;
    focusRingColor: string;
    invalidBackground: string;
    invalidBorderColor: string;
    minHeight: string;
    paddingBlock: string;
    paddingInline: string;
    placeholderColor: string;
    resize: "both" | "horizontal" | "none" | "vertical";
    typography: TypographyStyleConfig;
  };
  labelStyle: TypographyStyleConfig;
  messageStyle: TypographyStyleConfig;
};

export type SiteHeaderStyleConfig = {
  brandHeadingStyle: HeadingStyleConfig;
  brandHoverColor: string;
  brandLinkStyle: LinkStyleConfig;
  brandLinkColor: string;
  navGap: string;
  navigationLinkStyle: LinkStyleConfig;
  rowGap: string;
  rowPaddingBlock: string;
  shellBackground: string;
  shellBackdropFilter: string;
  shellBorderColor: string;
};

export type SiteFooterStyleConfig = {
  legalTextStyle: TextStyleConfig;
  navGap: string;
  navigationLinkStyle: LinkStyleConfig;
  rowGap: string;
  rowPaddingBlock: string;
  shellBackground: string;
  shellBackdropFilter: string;
  shellBorderColor: string;
};

export const buttonStylePresets = {
  brandSolid: {
    colors: {
      background: "var(--raw-color-brand-700)",
      border: "transparent",
      foreground: "var(--raw-color-slate-0)",
      hoverBackground: "var(--raw-color-brand-800)",
      hoverBorder: "transparent",
      hoverForeground: "var(--raw-color-slate-0)"
    },
    layout: {
      borderRadius: "var(--radius-pill)",
      contentGap: "var(--space-2)",
      minHeight: "2.7rem",
      paddingBlock: "0.72rem",
      paddingInline: "var(--space-5)"
    },
    typography: {
      color: "var(--raw-color-slate-0)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--raw-font-size-sm)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "1",
      textTransform: "none"
    }
  },
  dangerGhost: {
    colors: {
      background: "transparent",
      border: "transparent",
      foreground: "var(--raw-color-danger-700)",
      hoverBackground: "rgb(143 31 45 / 0.1)",
      hoverBorder: "transparent",
      hoverForeground: "var(--raw-color-danger-700)"
    },
    layout: {
      borderRadius: "var(--radius-pill)",
      contentGap: "var(--space-2)",
      minHeight: "2.7rem",
      paddingBlock: "0.72rem",
      paddingInline: "var(--space-5)"
    },
    typography: {
      color: "var(--raw-color-danger-700)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--raw-font-size-sm)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "1",
      textTransform: "none"
    }
  },
  neutralOutline: {
    colors: {
      background: "transparent",
      border: "var(--raw-color-slate-300)",
      foreground: "var(--raw-color-slate-800)",
      hoverBackground: "rgb(20 32 47 / 0.05)",
      hoverBorder: "var(--raw-color-slate-300)",
      hoverForeground: "var(--raw-color-slate-800)"
    },
    layout: {
      borderRadius: "var(--radius-pill)",
      contentGap: "var(--space-2)",
      minHeight: "2.7rem",
      paddingBlock: "0.72rem",
      paddingInline: "var(--space-5)"
    },
    typography: {
      color: "var(--raw-color-slate-800)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--raw-font-size-sm)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "1",
      textTransform: "none"
    }
  }
} as const satisfies Record<string, ButtonStyleConfig>;

export const componentStylePresets = {
  badge: {
    brand: {
      background: "var(--raw-color-brand-100)",
      borderRadius: "var(--radius-pill)",
      color: "var(--raw-color-brand-800)",
      minHeight: "1.7rem",
      paddingBlock: "0.14rem",
      paddingInline: "0.72rem",
      typography: {
        color: "var(--raw-color-brand-800)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: "var(--raw-letter-spacing-wide)",
        lineHeight: "1",
        textTransform: "uppercase"
      }
    },
    danger: {
      background: "var(--raw-color-danger-100)",
      borderRadius: "var(--radius-pill)",
      color: "var(--raw-color-danger-700)",
      minHeight: "1.7rem",
      paddingBlock: "0.14rem",
      paddingInline: "0.72rem",
      typography: {
        color: "var(--raw-color-danger-700)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: "var(--raw-letter-spacing-wide)",
        lineHeight: "1",
        textTransform: "uppercase"
      }
    },
    neutral: {
      background: "var(--raw-color-slate-100)",
      borderRadius: "var(--radius-pill)",
      color: "var(--raw-color-slate-700)",
      minHeight: "1.7rem",
      paddingBlock: "0.14rem",
      paddingInline: "0.72rem",
      typography: {
        color: "var(--raw-color-slate-700)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: "var(--raw-letter-spacing-wide)",
        lineHeight: "1",
        textTransform: "uppercase"
      }
    },
    success: {
      background: "var(--raw-color-success-100)",
      borderRadius: "var(--radius-pill)",
      color: "var(--raw-color-success-700)",
      minHeight: "1.7rem",
      paddingBlock: "0.14rem",
      paddingInline: "0.72rem",
      typography: {
        color: "var(--raw-color-success-700)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: "var(--raw-letter-spacing-wide)",
        lineHeight: "1",
        textTransform: "uppercase"
      }
    },
    warning: {
      background: "var(--raw-color-warning-100)",
      borderRadius: "var(--radius-pill)",
      color: "var(--raw-color-warning-700)",
      minHeight: "1.45rem",
      paddingBlock: "0.1rem",
      paddingInline: "0.52rem",
      typography: {
        color: "var(--raw-color-warning-700)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-2xs)",
        fontStyle: "normal",
        fontWeight: 700,
        letterSpacing: "var(--raw-letter-spacing-wide)",
        lineHeight: "1",
        textTransform: "uppercase"
      }
    }
  },
  card: {
    default: {
      background: "var(--color-surface)",
      borderColor: "var(--color-border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      contentGap: "var(--space-3)",
      hoverBorderColor: "var(--raw-color-brand-300)",
      hoverBoxShadow: "var(--shadow-md)",
      hoverTransform: "translateY(-2px)",
      padding: "var(--space-6)"
    },
    muted: {
      background: "var(--color-surface-muted)",
      borderColor: "var(--color-border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      contentGap: "var(--space-3)",
      hoverBorderColor: "var(--raw-color-brand-300)",
      hoverBoxShadow: "var(--shadow-md)",
      hoverTransform: "translateY(-2px)",
      padding: "var(--space-6)"
    }
  },
  field: {
    inputDefault: {
      fieldGap: "var(--space-2)",
      hintStyle: {
        color: "var(--color-text-subtle)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 400,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      },
      input: {
        background: "var(--color-surface)",
        borderColor: "var(--color-border-strong)",
        borderRadius: "var(--radius-md)",
        color: "var(--color-text)",
        disabledBackground: "var(--color-canvas-soft)",
        disabledColor: "var(--color-text-subtle)",
        focusBorderColor: "var(--raw-color-brand-400)",
        focusRingColor: "rgb(143 184 255 / 0.45)",
        invalidBackground: "var(--color-danger-bg)",
        invalidBorderColor: "var(--color-danger-accent)",
        minHeight: "2.7rem",
        paddingBlock: "0.6rem",
        paddingInline: "0.82rem",
        placeholderColor: "var(--color-text-subtle)",
        resize: "vertical",
        typography: {
          color: "var(--color-text)",
          fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
          fontSize: "var(--raw-font-size-sm)",
          fontStyle: "normal",
          fontWeight: 400,
          letterSpacing: "var(--raw-letter-spacing-normal)",
          lineHeight: "var(--raw-line-height-normal)",
          textTransform: "none"
        }
      },
      labelStyle: {
        color: "var(--color-text)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 600,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      },
      messageStyle: {
        color: "var(--color-danger-foreground)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-xs)",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      }
    }
  },
  heading: {
    brandName: {
      color: "var(--color-text)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h5)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    },
    cardTitle: {
      color: "var(--color-text)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h5)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    },
    heroInverse: {
      color: "var(--color-text-on-emphasis)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h1)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    },
    pageTitle: {
      color: "var(--color-text)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h1)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    },
    sectionTitle: {
      color: "var(--color-text)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h3)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    },
    stateTitle: {
      color: "var(--color-text)",
      fontFamily: "var(--font-display), \"Times New Roman\", serif",
      fontSize: "var(--font-size-h2)",
      fontStyle: "normal",
      fontWeight: 600,
      letterSpacing: "var(--raw-letter-spacing-tight)",
      lineHeight: "var(--raw-line-height-tight)",
      textTransform: "none"
    }
  },
  link: {
    default: {
      color: "var(--color-link)",
      hoverColor: "var(--color-link-hover)",
      textDecoration: "none",
      textUnderlineOffset: "0.18em",
      typography: {
        color: "var(--color-link)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-sm)",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      }
    },
    inverse: {
      color: "var(--color-text-on-emphasis)",
      hoverColor: "var(--raw-color-brand-100)",
      textDecoration: "none",
      textUnderlineOffset: "0.18em",
      typography: {
        color: "var(--color-text-on-emphasis)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-sm)",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      }
    },
    muted: {
      color: "var(--color-text-muted)",
      hoverColor: "var(--color-link)",
      textDecoration: "none",
      textUnderlineOffset: "0.18em",
      typography: {
        color: "var(--color-text-muted)",
        fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
        fontSize: "var(--raw-font-size-sm)",
        fontStyle: "normal",
        fontWeight: 500,
        letterSpacing: "var(--raw-letter-spacing-normal)",
        lineHeight: "var(--raw-line-height-normal)",
        textTransform: "none"
      }
    }
  },
  text: {
    body: {
      color: "var(--color-text)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--font-size-body)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-normal)",
      textTransform: "none"
    },
    bodyMuted: {
      color: "var(--color-text-muted)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--font-size-body)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-normal)",
      textTransform: "none"
    },
    inverseLead: {
      color: "var(--color-text-on-emphasis)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--font-size-body-lg)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-relaxed)",
      textTransform: "none"
    },
    legal: {
      color: "var(--color-text-muted)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--raw-font-size-xs)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-normal)",
      textTransform: "none"
    },
    leadMuted: {
      color: "var(--color-text-muted)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--font-size-body-lg)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-relaxed)",
      textTransform: "none"
    },
    smallMuted: {
      color: "var(--color-text-muted)",
      fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
      fontSize: "var(--raw-font-size-xs)",
      fontStyle: "normal",
      fontWeight: 400,
      letterSpacing: "var(--raw-letter-spacing-normal)",
      lineHeight: "var(--raw-line-height-normal)",
      textTransform: "none"
    }
  }
} as const;

export const marketingShellStylePresets = {
  footer: {
    legalTextStyle: componentStylePresets.text.legal,
    navGap: "var(--space-4)",
    navigationLinkStyle: componentStylePresets.link.default,
    rowGap: "var(--space-4)",
    rowPaddingBlock: "var(--space-4)",
    shellBackground: "rgb(255 255 255 / 0.93)",
    shellBackdropFilter: "blur(10px)",
    shellBorderColor: "var(--color-border)"
  },
  header: {
    brandHeadingStyle: componentStylePresets.heading.brandName,
    brandHoverColor: "var(--color-link)",
    brandLinkStyle: componentStylePresets.link.muted,
    brandLinkColor: "var(--color-text)",
    navGap: "var(--space-4)",
    navigationLinkStyle: componentStylePresets.link.default,
    rowGap: "var(--space-4)",
    rowPaddingBlock: "var(--space-4)",
    shellBackground: "rgb(255 255 255 / 0.93)",
    shellBackdropFilter: "blur(10px)",
    shellBorderColor: "var(--color-border)"
  }
} as const satisfies {
  footer: SiteFooterStyleConfig;
  header: SiteHeaderStyleConfig;
};

export const designSystemConfig = {
  breakpoints: {
    lg: "80rem",
    md: "64rem",
    sm: "48rem",
    xs: "30rem"
  },
  containerWidths,
  primitives: {
    badge: componentStylePresets.badge,
    button: buttonStylePresets,
    card: componentStylePresets.card,
    field: componentStylePresets.field,
    heading: componentStylePresets.heading,
    link: componentStylePresets.link,
    text: componentStylePresets.text
  },
  sectionPaddings,
  sectionTones,
  shell: marketingShellStylePresets
} as const;

export type ContainerWidth = (typeof containerWidths)[number];
export type SectionTone = (typeof sectionTones)[number];
export type SectionPadding = (typeof sectionPaddings)[number];
export type StackGap = (typeof stackGaps)[number];
export type GridColumn = (typeof gridColumns)[number];

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
