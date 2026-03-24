export const colors = {
  brand: {
    primary: "#d13ea2",
    primaryStrong: "#d1296f",
    secondary: "#8b2749",
    soft: "#f3bfdc",
  },

  background: {
    page: "#ffffff",
    soft: "#f5f4f2",
    about: "#f2f2f2",
    achievements: "#f6f1ea",
    dark: "#111111",
    lightPanel: "#f5f1eb",
  },

  text: {
    primary: "#3f2d25",
    secondary: "#6f5b51",
    muted: "#9c8576",
    white: "#ffffff",
    whiteSoft: "rgba(255,255,255,0.7)",
  },

  border: {
    soft: "rgba(0,0,0,0.12)",
    whiteSoft: "rgba(255,255,255,0.10)",
    brand: "#d13ea2",
  },

  overlay: {
    hero: "rgba(209,62,162,0.60)",
    navbar: "rgba(0,0,0,0.30)",
    modal: "rgba(0,0,0,0.60)",
  },

  surface: {
    white: "#ffffff",
    glass: "rgba(255,255,255,0.75)",
    modal: "#111111",
  },
} as const

export type Colors = typeof colors