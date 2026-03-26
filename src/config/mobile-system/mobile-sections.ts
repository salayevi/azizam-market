export const mobileSections = {
  about: {
    minHeight: "220svh",
    stickyTop: "0px",
    frameMaxWidth: "380px",
    imageRadius: "28px",
    imageBorderWidth: "2px",
    imageHeight: "420px",
    imageShiftY: "-88px",
    titleTopOffset: "16vh",
    contentBottomOffset: "14vh",
    contentMaxWidth: "320px",
  },

  product: {
    minHeight: "320svh",
    stickyHeight: "100svh",
    frameMaxWidth: "380px",
    titleTopOffset: "14vh",
    cardMaxWidth: "360px",
    cardRadius: "28px",
    cardMinHeight: "560px",
    contentBottomOffset: "110px",
  },

  achievements: {
    minHeight: "280svh",
    frameMaxWidth: "380px",
    titleTopOffset: "12vh",
    cardMaxWidth: "360px",
    cardRadius: "28px",
    cardMinHeight: "560px",
  },

  footer: {
    minHeight: "100svh",
    contentMaxWidth: "380px",
    bottomPadding: "120px",
  },
} as const;

export type MobileSections = typeof mobileSections;