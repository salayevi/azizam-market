export const mobileSpacing = {
  pageX: "clamp(14px, 5vw, 20px)",

  topbarTop: "clamp(18px, 5.5vw, 26px)",
  topbarLeft: "clamp(14px, 5vw, 20px)",
  topbarGap: "clamp(14px, 4vw, 18px)",

  heroBottomSafeSpace: "clamp(128px, 18vh, 148px)",
  heroTitleGap: "clamp(3px, 1.1vw, 7px)",

  bottomNavX: "clamp(12px, 4vw, 16px)",
  bottomNavY: "clamp(14px, 4.5vw, 20px)",
  bottomNavInnerX: "clamp(14px, 4.5vw, 18px)",

  heroTitleOffsetY: "0svh",

  productCardOuterPad: "clamp(14px, 4vw, 18px)",
  productCardMediaPad: "clamp(14px, 4vw, 18px)",
  productCardContentPadX: "clamp(18px, 4.8vw, 22px)",
  productCardContentPadTop: "clamp(18px, 4.8vw, 24px)",
  productCardContentPadBottom: "clamp(18px, 4.8vw, 22px)",
} as const;

export type MobileSpacing = typeof mobileSpacing;
