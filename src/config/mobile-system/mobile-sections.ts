export const mobileSections = {
  about: {
    minHeight: "235svh",
    stickyTop: "0px",

    frameMaxWidth: "min(84vw, 350px)",
    imageRadius: "28px",
    imageBorderWidth: "2px",
    imageHeight: "clamp(320px, 50svh, 440px)",

    imageShiftY: "-56px",

    titleTopOffset: "clamp(18svh, 22svh, 24svh)",
    contentMaxWidth: "min(78vw, 300px)",
    infoGap: "clamp(16px, 4vw, 20px)",
  },

  product: {
    minHeight: "380svh",
    stickyHeight: "100svh",
    stagePadX: "clamp(12px, 3.5vw, 18px)",
    titlePadX: "clamp(18px, 5vw, 28px)",
    frameMaxWidth: "min(calc(100vw - 24px), 390px)",
    titleFrameMaxWidth: "min(calc(100vw - 32px), 440px)",
    titleTopOffset: "0svh",
    cardMaxWidth: "min(calc(100vw - 34px), 392px)",
    cardRadius: "30px",
    cardMinHeight: "clamp(520px, 76svh, 710px)",
    contentBottomOffset: "clamp(92px, 12svh, 110px)",
    bottomSafeOffset: 60,
  },

  achievements: {
    minHeight: "280svh",
    frameMaxWidth: "min(calc(100vw - 28px), 380px)",
    titleTopOffset: "12vh",
    cardMaxWidth: "min(calc(100vw - 42px), 360px)",
    cardRadius: "28px",
    cardMinHeight: "clamp(520px, 74svh, 560px)",
  },

  footer: {
    minHeight: "100svh",
    contentMaxWidth: "min(calc(100vw - 32px), 380px)",
    topPadding: "clamp(92px, 12svh, 110px)",
    bottomPadding: "clamp(96px, 14svh, 120px)",
    glowTopOffset: "clamp(-140px, -14vh, -100px)",
    glowSize: "clamp(240px, 68vw, 320px)",
    cardRadius: "clamp(30px, 8.8vw, 36px)",
    cardPadX: "clamp(22px, 6vw, 28px)",
    cardPadY: "clamp(42px, 11vw, 48px)",
    bodyMaxWidth: "min(75vw, 280px)",
    ctaMaxWidth: "min(64vw, 240px)",
  },
} as const;

export type MobileSections = typeof mobileSections;
