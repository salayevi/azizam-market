export const mobileMotion = {
  about: {
    titleY: 26,
    imageY: 54,
    textY: 18,
    imageScaleFrom: 0.94,
    imageScaleTo: 1,
    scrub: 0.32,
  },

hero: {
    introDuration: 0.68,
    introEase: "power2.out",

    titleIntroY: 12,
    topbarIntroY: 10,
    navIntroY: 10,

    scrollDistance: 560,
    backgroundScaleTo: 1.08,

    titleSplitX: 120,
    titleFadeTo: 0,
    titleLiftTo: -8,

    scrub: 0.12,
  },
} as const;

export type MobileMotion = typeof mobileMotion;
