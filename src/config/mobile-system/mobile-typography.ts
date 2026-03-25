export const mobileTypography = {
  hero: {
    title: "clamp(56px, 18vw, 88px)",
    lineHeight: 0.92,
    letterSpacing: "-0.05em",
    weight: 700,
  },

  topbar: {
    label: "14px",
    button: "13px",
  },

  nav: {
    label: "11px",
  },
} as const;

export type MobileTypography = typeof mobileTypography;