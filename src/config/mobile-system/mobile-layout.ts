export const mobileLayout = {
  pageMaxWidth: "480px",
  heroMinHeight: "100svh",
  contentWidth: "100%",
  sidePadding: "20px",
  topSafeOffset: "20px",
  bottomSafeOffset: "20px",
} as const;

export type MobileLayout = typeof mobileLayout;