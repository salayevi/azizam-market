export const mobileSpacing = {
  pageX: "20px",
  pageY: "20px",

  topbarX: "20px",
  topbarY: "18px",

  heroTop: "104px",
  heroBottom: "132px",

  sectionGap: "24px",
  contentGap: "16px",

  bottomNavX: "16px",
  bottomNavY: "14px",

  cardX: "18px",
  cardY: "18px",
} as const;

export type MobileSpacing = typeof mobileSpacing;