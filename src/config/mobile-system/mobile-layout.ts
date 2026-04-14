export const mobileLayout = {
  pageMaxWidth: "min(100vw, 480px)",

  heroViewportHeight: "100dvh",
  heroMinHeight: "100svh",

  heroContentMaxWidth: "min(100%, 420px)",
  heroTitleMaxWidth: "min(88vw, 360px)",

  heroScrollRunway: "clamp(420px, 54vh, 560px)",
} as const;

export type MobileLayout = typeof mobileLayout;
