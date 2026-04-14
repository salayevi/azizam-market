// src/config/design-system/sizes.ts
export const sizes = {
  hero: {
    titleMobile: "140px",
    containerMax: "min(92vw, 1680px)",
    titleDesktop: "clamp(140px, 8.6vw, 220px)",
    sectionHeight: "100svh",
  },

  about: {
    imageWidth: "clamp(360px, 28vw, 520px)",
    imageHeight: "clamp(460px, 38vw, 640px)",
    textWidth: "clamp(420px, 28vw, 560px)",
  },

  achievements: {
    desktopImageHeight: "clamp(440px, 56vh, 720px)",
  },

  product: {
    sceneExtraSlides: 1.45,
    cardMaxWidth: "min(92vw, 1360px)",
    cardHeight: "clamp(620px, 74vh, 820px)",
    cardMinHeight: "clamp(560px, 62vh, 640px)",
    introTitleDesktop: "clamp(4.5rem, 5vw, 7rem)",
    mediaMax: "clamp(70%, 74%, 78%)",
    infoMaxWidth: "clamp(28rem, 30vw, 36rem)",
    mediaPanelPaddingX: "clamp(1.5rem, 2.4vw, 2.5rem)",
    mediaPanelPaddingY: "clamp(1.25rem, 2vw, 2rem)",
    contentPanelPaddingX: "clamp(1.5rem, 2.8vw, 3rem)",
    contentPanelPaddingY: "clamp(1.5rem, 2.2vw, 2.25rem)",
    actionMinHeight: "clamp(52px, 4vw, 56px)",
  },

  auth: {
    modalMaxWidth: "28rem",
  },
} as const;

export type Sizes = typeof sizes;
