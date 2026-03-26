"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mobileMotion } from "@/config/mobile-system/mobile-motion";

gsap.registerPlugin(ScrollTrigger);

type UseMobileHeroMotionParams = {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  bgRef: RefObject<HTMLDivElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  topbarRef: RefObject<HTMLDivElement | null>;
  titleWrapRef: RefObject<HTMLDivElement | null>;
  azizamRef: RefObject<HTMLHeadingElement | null>;
  marketRef: RefObject<HTMLHeadingElement | null>;
  bottomNavRef: RefObject<HTMLDivElement | null>;
};

export default function useMobileHeroMotion({
  sectionRef,
  stageRef,
  bgRef,
  overlayRef,
  topbarRef,
  titleWrapRef,
  azizamRef,
  marketRef,
  bottomNavRef,
}: UseMobileHeroMotionParams) {
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const topbar = topbarRef.current;
    const titleWrap = titleWrapRef.current;
    const azizam = azizamRef.current;
    const market = marketRef.current;
    const bottomNav = bottomNavRef.current;

    if (
      !section ||
      !stage ||
      !bg ||
      !overlay ||
      !topbar ||
      !titleWrap ||
      !azizam ||
      !market ||
      !bottomNav
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bg, {
        scale: 1.01,
        transformOrigin: "center center",
      });

      gsap.set(topbar, {
        autoAlpha: 0,
        y: mobileMotion.hero.topbarIntroY,
      });

      gsap.set(titleWrap, {
        autoAlpha: 0,
        y: mobileMotion.hero.titleIntroY,
        scale: 0.99,
      });

      gsap.set(bottomNav, {
        autoAlpha: 0,
        y: mobileMotion.hero.navIntroY,
      });

      const intro = gsap.timeline({
        defaults: {
          duration: mobileMotion.hero.introDuration,
          ease: mobileMotion.hero.introEase,
        },
      });

      intro
        .to(topbar, { autoAlpha: 1, y: 0 }, 0)
        .to(titleWrap, { autoAlpha: 1, y: 0, scale: 1 }, 0.04)
        .to(bottomNav, { autoAlpha: 1, y: 0 }, 0.08);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${mobileMotion.hero.scrollDistance}`,
          scrub: mobileMotion.hero.scrub,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        bg,
        {
          scale: mobileMotion.hero.backgroundScaleTo,
          ease: "none",
        },
        0,
      )
        .to(
          overlay,
          {
            opacity: 0.72,
            ease: "none",
          },
          0,
        )
        .to(
          azizam,
          {
            x: -mobileMotion.hero.titleSplitX,
            autoAlpha: mobileMotion.hero.titleFadeTo,
            ease: "none",
          },
          0,
        )
        .to(
          market,
          {
            x: mobileMotion.hero.titleSplitX,
            autoAlpha: mobileMotion.hero.titleFadeTo,
            ease: "none",
          },
          0,
        )
        .to(
          titleWrap,
          {
            y: mobileMotion.hero.titleLiftTo,
            ease: "none",
          },
          0,
        );
    }, section);

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      ctx.revert();
    };
  }, [
    sectionRef,
    stageRef,
    bgRef,
    overlayRef,
    topbarRef,
    titleWrapRef,
    azizamRef,
    marketRef,
    bottomNavRef,
  ]);
}