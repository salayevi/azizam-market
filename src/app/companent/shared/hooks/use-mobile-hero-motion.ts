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
  titleWrapRef: RefObject<HTMLDivElement | null>;
  azizamRef: RefObject<HTMLHeadingElement | null>;
  marketRef: RefObject<HTMLHeadingElement | null>;
};

export default function useMobileHeroMotion({
  sectionRef,
  stageRef,
  bgRef,
  overlayRef,
  titleWrapRef,
  azizamRef,
  marketRef,
}: UseMobileHeroMotionParams) {
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const titleWrap = titleWrapRef.current;
    const azizam = azizamRef.current;
    const market = marketRef.current;

    if (!section || !stage || !bg || !overlay || !titleWrap || !azizam || !market) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bg, {
        scale: 1.01,
        transformOrigin: "center center",
      });

      gsap.set(titleWrap, {
        autoAlpha: 0,
        y: mobileMotion.hero.titleIntroY,
        scale: 0.99,
      });

      gsap.to(titleWrap, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: mobileMotion.hero.introDuration,
        ease: mobileMotion.hero.introEase,
      });

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
  }, [sectionRef, stageRef, bgRef, overlayRef, titleWrapRef, azizamRef, marketRef]);
}