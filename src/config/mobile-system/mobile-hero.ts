export const mobileHero = {
  backgroundImage: "/rose-bg.png",

  overlayColor: "rgba(113, 10, 74, 0.38)",

  topIconOuterBackground: "#9D1A12",
  topIconInnerBackground: "#FFFFFF",

  bottomNavBackground: "rgba(255,255,255,0.92)",
  bottomNavTextColor: "#4A3337",

  titleColor: "#FFFFFF",

  softShadow: "0 10px 30px rgba(0, 0, 0, 0.16)",
  navShadow: "0 12px 36px rgba(0, 0, 0, 0.14)",
} as const;

export type MobileHero = typeof mobileHero;