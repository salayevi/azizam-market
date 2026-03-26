export const mobileLayout = {
  pageMaxWidth: "480px",

  heroViewportHeight: "100dvh",
  heroMinHeight: "100svh",

  heroContentMaxWidth: "420px",
  heroTitleMaxWidth: "min(88vw, 360px)",

  heroScrollRunway: "760px",
} as const;

export type MobileLayout = typeof mobileLayout;