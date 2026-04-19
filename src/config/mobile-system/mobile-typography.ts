export const mobileTypography = {
  hero: {
    title: "clamp(42px, 14vw, 76px)",
    lineHeight: 0.9,
    letterSpacing: "-0.06em",
    weight: 700,
    lineGap: "clamp(2px, 1vw, 4px)",
  },

  nav: {
    label: "clamp(8px, 2.8vw, 11px,)",
    weight: 700,
    lineHeight: 1.1,
  },

  footer: {
    brandLabel: "clamp(11px, 3vw, 10px)",
    title: "clamp(34px, 10vw, 42px)",
    body: "clamp(14px, 3.9vw, 15px)",
    link: "clamp(10px, 3.4vw, 13px)",
    note: "clamp(10px, 3vw, 10px)",
  },
} as const;

export type MobileTypography = typeof mobileTypography;
