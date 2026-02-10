/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],

  theme: {
    /* -------------------------------------------------
       Container
       ------------------------------------------------- */
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        md: "24px",
      },
      screens: {
        "2xl": "1280px", // max container width = 1280
      },
    },

    extend: {
      /* -------------------------------------------------
         Fonts
         ------------------------------------------------- */
      fontFamily: {
        // Body, UI, forms, reading
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],

        // Headings
        heading: ["Public Sans", "Inter", "system-ui", "sans-serif"],

        // Data/specs
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },

      /* -------------------------------------------------
         MCN Color System
         - Light tokens stay as-is
         - Add MORE options: extra surfaces + extra text levels
         - Add "ink" (black surfaces + white text) as OPTIONAL tokens
           (NOT a theme; no darkMode required)
         ------------------------------------------------- */
      colors: {
        mcn: {
          /* Light neutrals */
          bg: "#F6F1E6",
          surface: "#FFFCF5",
          surface2: "#FFFFFF",

          // extra surfaces (options)
          surface3: "rgba(255,255,255,0.70)", // soft panel / glass-lite
          surface4: "rgba(255,255,255,0.55)", // lighter overlay

          text: {
            primary: "#0B0B0C",
            secondary: "#2A2A2C",

            // extra text options
            muted: "rgba(11,11,12,0.72)",
            faint: "rgba(11,11,12,0.56)",
            inverse: "#FFFFFF", // for ink surfaces / red buttons etc
          },

          border: "#1A1A1D",
          stroke: {
            soft: "rgba(0,0,0,0.08)",
            softer: "rgba(0,0,0,0.06)",
            strong: "rgba(0,0,0,0.14)",
          },

          /* Brand / interaction */
          red: {
            DEFAULT: "#E50000",
            hover: "#FF1A1A",
          },

          blue: "#2F6BFF",
          cyan: "#12B8D6",
          green: "#1F7A5A",

          /* Semantic */
          semantic: {
            success: "#1F7A5A",
            warning: "#F59E0B",
            error: "#DC2626",
            info: "#2F6BFF",
          },

          /* ---------------------------------------------
             Ink (Black) surfaces — OPTIONAL “mode”
             Use like: bg-mcn-ink-bg text-mcn-ink-text-primary
             Not a theme, just extra tokens.
             --------------------------------------------- */
          ink: {
            bg: "#0B0B0C", // black base
            surface: "#111114", // elevated black surface
            surface2: "#16161A", // higher elevation
            glass: "rgba(11,11,12,0.72)", // black glass
            stroke: {
              soft: "rgba(255,255,255,0.10)",
              softer: "rgba(255,255,255,0.08)",
              strong: "rgba(255,255,255,0.16)",
            },
            text: {
              primary: "#FFFFFF",
              secondary: "rgba(255,255,255,0.78)",
              muted: "rgba(255,255,255,0.62)",
              faint: "rgba(255,255,255,0.50)",
            },
          },
        },
      },

      /* -------------------------------------------------
         Typography Scales (Octave-style)
         (same as your current file, but kept consistent)
         ------------------------------------------------- */
      fontSize: {
        /* Major Third — 1.25 (Product UI Default) */
        "mt-down-2": ["10px", { lineHeight: "1.2" }],
        "mt-down-1": ["13px", { lineHeight: "1.5" }],
        "mt-base": ["16px", { lineHeight: "1.5" }],
        "mt-up-1": ["20px", { lineHeight: "1.35" }],
        "mt-up-2": ["25px", { lineHeight: "1.2" }],
        "mt-up-3": ["31px", { lineHeight: "1.2" }],
        "mt-up-4": ["39px", { lineHeight: "1.15" }],
        "mt-up-5": ["49px", { lineHeight: "1.05" }],

        /* Perfect Fourth — 4/3 (Editorial / Hero) */
        "pf-down-2": ["9px", { lineHeight: "1.2" }],
        "pf-down-1": ["12px", { lineHeight: "1.5" }],
        "pf-base": ["16px", { lineHeight: "1.5" }],
        "pf-up-1": ["21px", { lineHeight: "1.35" }],
        "pf-up-2": ["28px", { lineHeight: "1.2" }],
        "pf-up-3": ["38px", { lineHeight: "1.15" }],
        "pf-up-4": ["51px", { lineHeight: "1.08" }],
        "pf-up-5": ["67px", { lineHeight: "1.02" }],
      },

      /* -------------------------------------------------
         Radius
         ------------------------------------------------- */
      borderRadius: {
        mcn: "12px",
        "mcn-lg": "16px",
        "mcn-xl": "20px",
      },

      /* -------------------------------------------------
         Shadows
         ------------------------------------------------- */
      boxShadow: {
        "mcn-soft": "0 6px 18px rgba(0,0,0,0.08)",
        "mcn-card": "0 10px 30px rgba(0,0,0,0.10)",
        "mcn-overlay": "0 20px 60px rgba(0,0,0,0.18)",

        // optional ink shadows (slightly stronger)
        "mcn-ink-card": "0 10px 30px rgba(0,0,0,0.45)",
        "mcn-ink-overlay": "0 20px 60px rgba(0,0,0,0.60)",
      },

      /* -------------------------------------------------
         Glass + Focus + Motion
         ------------------------------------------------- */
      backdropBlur: {
        mcn: "12px",
      },

      ringColor: {
        "mcn-blue": "#2F6BFF",
        "mcn-red": "#E50000",
      },

      transitionDuration: {
        fast: "160ms",
        normal: "220ms",
        slow: "320ms",
      },

      transitionTimingFunction: {
        "ease-out-standard": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-standard": "cubic-bezier(0.7, 0, 0.84, 0)",
      },
    },
  },

  plugins: [],
};