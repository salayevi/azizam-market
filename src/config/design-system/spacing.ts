// src/config/design-system/spacing.ts
export const spacing = {
  0: "0px",
  1: "clamp(4px, 0.22vw, 4px)",
  2: "clamp(8px, 0.38vw, 8px)",
  3: "clamp(10px, 0.55vw, 12px)",
  4: "clamp(12px, 0.72vw, 16px)",
  5: "clamp(16px, 0.95vw, 20px)",
  6: "clamp(20px, 1.15vw, 24px)",
  8: "clamp(24px, 1.5vw, 32px)",
  10: "clamp(28px, 1.9vw, 40px)",
  12: "clamp(36px, 2.25vw, 48px)",
  14: "clamp(44px, 2.7vw, 56px)",
  16: "clamp(48px, 3vw, 64px)",
  18: "clamp(56px, 3.35vw, 72px)",
  20: "clamp(64px, 3.8vw, 80px)",
  24: "clamp(72px, 4.5vw, 96px)",
  28: "clamp(88px, 5.2vw, 112px)",
  32: "clamp(96px, 6vw, 128px)",
  36: "clamp(112px, 6.8vw, 144px)",
  40: "clamp(128px, 7.5vw, 160px)",
} as const

export type Spacing = typeof spacing
