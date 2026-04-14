export const mobileTypography = {
  hero: {
    title: "clamp(42px, 14vw, 76px)",
    lineHeight: 0.9,
    letterSpacing: "-0.06em",
    weight: 700,
    lineGap: "clamp(2px, 1vw, 4px)",
  },

  nav: {
    label: "clamp(10px, 2.8vw, 11px)",
    weight: 600,
    lineHeight: 1.1,
  },
} as const;

export type MobileTypography = typeof mobileTypography;
