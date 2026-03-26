export const mobileMotion = {
  about: {
    titleY: 40,
    imageY: 80,
    textY: 28,
    imageScaleFrom: 0.86,
    imageScaleTo: 1,
    scrub: 0.8,
  },

  hero: {
    introDuration: 0.75,
    introEase: "power2.out",

    titleIntroY: 14,
    topbarIntroY: 14,
    navIntroY: 14,

    scrollDistance: 620,
    backgroundScaleTo: 1.04,
    titleSplitX: 36,
    titleFadeTo: 0.58,
    titleLiftTo: -6,

    scrub: 0.16,
  },
} as const;

export type MobileMotion = typeof mobileMotion;