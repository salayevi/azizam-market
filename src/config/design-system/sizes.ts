export const sizes = {
  layout: {
    contentMax: "min(94vw, 1600px)",
    sectionPadX: "clamp(20px, 2.8vw, 56px)",
  },

  hero: {
    titleMobile: "140px",
    containerMax: "min(94vw, 1840px)",
    titleTrackMax: "min(90vw, 1500px)",
    titleDesktop: "clamp(110px, 9.7vw, 282px)",
    titleInsetX: "clamp(8px, 1.4vw, 28px)",
    titleRowGap: "clamp(8px, 1vw, 14px)",
    sectionHeight: "100svh",
  },

  about: {
    titleSize: "clamp(68px, 7.2vw, 132px)",
    rowMaxWidth: "min(94vw, 1480px)",
    rowGap: "clamp(25px, 2.6vw, 48px)",
    rowPadX: "clamp(18px, 2.2vw, 40px)",
    imageWidth: "clamp(340px, 29vw, 520px)",
    imageHeight: "clamp(430px, 38vw, 660px)",
    textWidth: "clamp(420px, 33vw, 620px)",
    textMinWidth: "420px",
    textMinHeight: "clamp(128px, 14vh, 190px)",
    textSize: "clamp(1.2rem, 1.5vw, 1.68rem)",
    headingSize: "clamp(2rem, 3vw, 3.05rem)",
    imageTravelX: "calc(-1 * clamp(220px, 18vw, 360px))",
  },

  achievements: {
    desktopImageHeight: "clamp(400px, 48vh, 650px)",
    slideContainerMax: "min(92vw, 1440px)",
    imageWidth: "clamp(330px, 30vw, 560px)",
    contentTop: "69%",
    introTitleSize: "clamp(2.55rem, 4vw, 4.35rem)",
    introSubtitleSize: "clamp(1rem, 1.2vw, 1.4rem)",
    introTitleMax: "min(88vw, 64rem)",
    introSubtitleMax: "min(80vw, 40rem)",
    contentWrapMax: "min(88vw, 52rem)",
    contentCardMax: "min(88vw, 42rem)",
    cardTitleSize: "clamp(1.85rem, 2.4vw, 2.9rem)",
    cardTextSize: "clamp(0.98rem, 1.05vw, 1.15rem)",
  },

  product: {
    sceneExtraSlides: 1.45,
    introTitleDesktop: "clamp(3.8rem, 5.8vw, 8rem)",
    introKickerSize: "clamp(11px, 0.72vw, 14px)",
    introSubtitleSize: "clamp(14px, 1vw, 19px)",
    introSubtitleWidth: "min(86vw, 760px)",
    cardMaxWidth: "min(94vw, 1520px)",
    cardHeight: "clamp(600px, 72vh, 860px)",
    cardMinHeight: "clamp(540px, 60vh, 680px)",
    cardShadowWidth: "min(70%, 900px)",
    panelGap: "clamp(0px, 0.8vw, 14px)",
    mediaMax: "clamp(66%, 72%, 79%)",
    infoMaxWidth: "clamp(27rem, 32vw, 39rem)",
    mediaPanelPaddingX: "clamp(1.2rem, 1.9vw, 2.35rem)",
    mediaPanelPaddingY: "clamp(1.1rem, 1.55vw, 1.9rem)",
    contentPanelPaddingX: "clamp(1.3rem, 2.4vw, 2.9rem)",
    contentPanelPaddingY: "clamp(1.2rem, 1.8vw, 2.05rem)",
    actionMinHeight: "clamp(52px, 4vw, 56px)",
    guestCalloutMaxWidth: "min(100%, 34rem)",
  },

  navbar: {
    contentMax: "min(96vw, 1680px)",
    logoSize: "clamp(34px, 2.2vw, 42px)",
    linksGap: "clamp(14px, 1.7vw, 34px)",
    linkFontSize: "clamp(12px, 0.8vw, 15px)",
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
