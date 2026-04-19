export const sizes = {
  layout: {
    contentMax: "min(94vw, 1600px)",
    sectionPadX: "clamp(20px, 2.8vw, 56px)",
  },

  hero: {
    titleMobile: "140px",
    containerMax: "min(94vw, 1840px)",
    titleDesktop: "clamp(92px, 10.8vw, 280px)",
    titleInsetX: "clamp(8px, 1.4vw, 28px)",
    titleRowGap: "clamp(8px, 1vw, 14px)",
    sectionHeight: "100svh",
  },

  about: {
    titleSize: "clamp(68px, 7.2vw, 132px)",
    rowMaxWidth: "min(92vw, 1520px)",
    rowGap: "clamp(25px, 2.6vw, 48px)",
    imageWidth: "clamp(340px, 31vw, 560px)",
    imageHeight: "clamp(440px, 42vw, 700px)",
    textWidth: "clamp(420px, 34vw, 620px)",
    textMinHeight: "clamp(120px, 14vh, 180px)",
    textSize: "clamp(1.28rem, 1.7vw, 1.85rem)",
    imageTravelX: "-15vw",
    // imageTravelX: "clamp(0.28rem, -17vw, 85rem)",
  },

  achievements: {
    desktopImageHeight: "clamp(430px, 53vh, 700px)",
    slideContainerMax: "min(92vw, 1560px)",
    imageWidth: "clamp(360px, 34vw, 640px)",
    contentTop: "68%",
  },

  product: {
    sceneExtraSlides: 1.45,
    introTitleDesktop: "clamp(3.8rem, 5.8vw, 8rem)",
    introSubtitleWidth: "min(86vw, 760px)",
    cardMaxWidth: "min(94vw, 1520px)",
    cardHeight: "clamp(600px, 72vh, 860px)",
    cardMinHeight: "clamp(540px, 60vh, 680px)",
    mediaMax: "clamp(68%, 72%, 78%)",
    infoMaxWidth: "clamp(30rem, 33vw, 40rem)",
    mediaPanelPaddingX: "clamp(1.5rem, 2.2vw, 2.8rem)",
    mediaPanelPaddingY: "clamp(1.25rem, 1.8vw, 2.1rem)",
    contentPanelPaddingX: "clamp(1.6rem, 3vw, 3.25rem)",
    contentPanelPaddingY: "clamp(1.5rem, 2.1vw, 2.3rem)",
    actionMinHeight: "clamp(52px, 4vw, 56px)",
    guestCalloutMaxWidth: "min(100%, 34rem)",
  },

  navbar: {
    contentMax: "min(96vw, 1680px)",
    logoSize: "clamp(34px, 2.2vw, 42px)",
    linksGap: "clamp(20px, 2.2vw, 44px)",
    linkFontSize: "clamp(13px, 0.92vw, 16px)",
  },

  footer: {
    containerMax: "min(94vw, 1460px)",
    sectionPadY: "clamp(72px, 9vh, 112px)",
    sectionPadX: "clamp(22px, 2.3vw, 42px)",
    columnsGap: "clamp(30px, 4.4vw, 78px)",
    linksGap: "clamp(28px, 2.8vw, 44px)",
    brandMax: "min(100%, 35rem)",
  },

  auth: {
    modalMaxWidth: "28rem",
  },
} as const;

export type Sizes = typeof sizes;
