export const mobileSpacing = {
  pageX: "20px",

  topbarTop: "calc(env(safe-area-inset-top, 0px) + 24px)",
  topbarLeft: "20px",

  heroTitleOffsetY: "0svh",
  heroBottomSafeSpace: "calc(env(safe-area-inset-bottom, 0px) + 150px)",

  bottomNavX: "16px",
  bottomNavY: "calc(env(safe-area-inset-bottom, 0px) + 18px)",
  bottomNavInnerX: "18px",

  collapsedTopNavTop: "calc(env(safe-area-inset-top, 0px) + 12px)",
  collapsedTopNavX: "12px",
  collapsedTopNavInnerX: "12px",
} as const;

export type MobileSpacing = typeof mobileSpacing;