"use client";

import { colors, shadows } from "@/config/design-system";
import { mobileLayout } from "@/config/mobile-system/mobile-layout";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";
import MobileTopbar from "./mobile-topbar";
import MobileBottomNav from "./mobile-bottom-nav";

export default function MobileHero() {
  return (
    <section
      id="home-mobile"
      className="relative overflow-hidden"
      style={{
        minHeight: mobileLayout.heroMinHeight,
        color: colors.text.white,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/rose-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: colors.overlay.hero,
        }}
      />

      <MobileTopbar />

      <div
        className="relative z-20 mx-auto flex flex-col"
        style={{
          minHeight: mobileLayout.heroMinHeight,
          maxWidth: mobileLayout.pageMaxWidth,
          paddingInline: mobileSpacing.pageX,
          paddingTop: mobileSpacing.heroTop,
          paddingBottom: mobileSpacing.heroBottom,
        }}
      >
        <div className="flex flex-1 flex-col justify-center">
          <div
            className="mx-auto w-full"
            style={{
              maxWidth: "320px",
            }}
          >
            <h1
              className="font-bold"
              style={{
                fontSize: mobileTypography.hero.title,
                lineHeight: mobileTypography.hero.lineHeight,
                letterSpacing: mobileTypography.hero.letterSpacing,
                fontWeight: mobileTypography.hero.weight,
                textShadow: shadows.card,
              }}
            >
              Azizam
            </h1>

            <h1
              className="text-right font-bold"
              style={{
                fontSize: mobileTypography.hero.title,
                lineHeight: mobileTypography.hero.lineHeight,
                letterSpacing: mobileTypography.hero.letterSpacing,
                fontWeight: mobileTypography.hero.weight,
                marginTop: "8px",
                textShadow: shadows.card,
              }}
            >
              Market
            </h1>
          </div>
        </div>
      </div>

      <MobileBottomNav />
    </section>
  );
}