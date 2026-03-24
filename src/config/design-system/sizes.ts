export const sizes = {
  hero: {
    titleMobile: "140px",
    titleDesktop: "280px",
    containerMax: "1536px",
    sectionHeight: "100vh",
  },

  about: {
    titleDesktop: "120px",
    imageWidth: "520px",
    imageHeight: "650px",
    textWidth: "500px",
  },

  product: {
    sceneExtraSlides: 1.45,
    cardMaxWidth: "72rem",
    cardHeight: "70vh",
    cardMinHeight: "560px",
    introTitleDesktop: "8rem",
    mediaMax: "84%",
    infoMaxWidth: "36rem",
    mediaPanelPaddingX: "3rem",
    mediaPanelPaddingY: "2rem",
    contentPanelPaddingX: "3.5rem",
    contentPanelPaddingY: "2rem",
    actionMinHeight: "56px",
  },

  achievements: {
    desktopImageHeight: "66vh",
  },

  auth: {
    modalMaxWidth: "28rem",
  },
} as const

export type Sizes = typeof sizes