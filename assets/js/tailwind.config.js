// Tailwind Play CDN config — sets `tailwind.config` before the CDN finalises its build.
// Must be loaded AFTER the cdn.tailwindcss.com script tag and BEFORE first paint.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#afc8f0",
        "primary-container": "#001f3f",
        "primary-fixed": "#d4e3ff",
        "primary-fixed-dim": "#afc8f0",
        "on-primary": "#163152",
        "on-primary-container": "#6f88ad",
        "on-primary-fixed": "#001c3a",
        "on-primary-fixed-variant": "#2f486a",
        "inverse-primary": "#476083",
        "secondary": "#5dd5f5",
        "secondary-container": "#00a1bf",
        "secondary-fixed": "#afecff",
        "secondary-fixed-dim": "#5dd5f5",
        "on-secondary": "#003641",
        "on-secondary-container": "#00313c",
        "on-secondary-fixed": "#001f27",
        "on-secondary-fixed-variant": "#004e5d",
        "tertiary": "#00dbe9",
        "tertiary-container": "#002326",
        "tertiary-fixed": "#7df4ff",
        "tertiary-fixed-dim": "#00dbe9",
        "on-tertiary": "#00363a",
        "on-tertiary-container": "#00959e",
        "on-tertiary-fixed": "#002022",
        "on-tertiary-fixed-variant": "#004f54",
        "background": "#0b1326",
        "on-background": "#dae2fd",
        "surface": "#0b1326",
        "surface-dim": "#0b1326",
        "surface-bright": "#31394d",
        "surface-tint": "#afc8f0",
        "surface-variant": "#2d3449",
        "surface-container-lowest": "#060e20",
        "surface-container-low": "#131b2e",
        "surface-container": "#171f33",
        "surface-container-high": "#222a3d",
        "surface-container-highest": "#2d3449",
        "on-surface": "#dae2fd",
        "on-surface-variant": "#c4c6cf",
        "inverse-surface": "#dae2fd",
        "inverse-on-surface": "#283044",
        "outline": "#8e9198",
        "outline-variant": "#43474e",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-error": "#690005",
        "on-error-container": "#ffdad6"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "container-max": "1440px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "unit": "4px",
        "margin-desktop": "48px"
      },
      fontFamily: {
        "display-lg": ["Inter"],
        "display-lg-mobile": ["Inter"],
        "headline-md": ["Inter"],
        "headline-sm": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "label-sm": ["Inter"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }]
      }
    }
  }
};
