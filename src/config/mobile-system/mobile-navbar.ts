export const mobileNavbar = {
  topIconSize: "clamp(68px, 16vw, 78px)",
  topIconInnerSize: "clamp(54px, 13vw, 62px)",
  topIconGap: "clamp(12px, 3.8vw, 16px)",

  bottomHeight: "clamp(70px, 18vw, 78px)",
  bottomRadius: "9999px",
  bottomBlur: "14px",

  collapsedHeight: "68px",
  collapsedRadius: "9999px",
  collapsedBlur: "12px",
  collapsedIconOuter: "54px",
  collapsedIconInner: "42px",
} as const;

export type MobileNavbar = typeof mobileNavbar;
