"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mobileSections } from "@/config/mobile-system/mobile-sections";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileMotion } from "@/config/mobile-system/mobile-motion";
import { colors } from "@/config/design-system";

gsap.registerPlugin(ScrollTrigger);

const aboutTexts = [
  "Azizam Market — bu shunchaki kosmetika do‘koni emas.",
  "Bu — mehr, e’tibor va qadrlash maskani.",
  "“Azizam” so‘zi biz uchun oddiy murojaat emas.",
  "Bu yaqinlikni, samimiyatni va muhabbatni anglatadi.",
  "Biz har bir inson o‘zini aziz his qilishi uchun ishlaymiz.",
];

export default function MobileAboutStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const infoTitleRef = useRef<HTMLHeadingElement | null>(null);
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const imageWrap = imageWrapRef.current;
    const infoTitle = infoTitleRef.current;

    if (!section || !title || !imageWrap || !infoTitle) return;

    const ctx = gsap.context(() => {
      gsap.set(title, {
        opacity: 0,
        y: mobileMotion.about.titleY,
        scale: 1.04,
      });

      gsap.set(imageWrap, {
        opacity: 0,
        y: mobileMotion.about.imageY,
        scale: mobileMotion.about.imageScaleFrom,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(infoTitle, {
        opacity: 0,
        y: mobileMotion.about.textY,
      });

      gsap.set(textsRef.current, {
        opacity: 0,
        y: mobileMotion.about.textY,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1800",
          scrub: mobileMotion.about.scrub,
          pin: ".mobile-about-sticky",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(title, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      });

      tl.to(title, {
        opacity: 0,
        y: -44,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.to(
        imageWrap,
        {
          opacity: 1,
          y: 0,
          scale: mobileMotion.about.imageScaleTo,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out",
        },
        ">-0.1",
      );

      tl.to(imageWrap, {
        y: mobileSections.about.imageShiftY,
        duration: 1,
        ease: "power2.inOut",
      });

      tl.to(
        infoTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "<+0.1",
      );

      textsRef.current.forEach((textEl) => {
        if (!textEl) return;

        tl.to(textEl, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        });

        tl.to(textEl, {
          opacity: 0,
          y: -24,
          duration: 0.45,
          ease: "power2.out",
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: mobileSections.about.minHeight,
        backgroundColor: colors.background.about,
      }}
    >
      <div className="mobile-about-sticky relative h-[100svh] w-full overflow-hidden">
        <div
          className="mx-auto relative h-full w-full"
          style={{
            maxWidth: mobileSections.about.frameMaxWidth,
            paddingInline: mobileSpacing.pageX,
          }}
        >
          <h2
            ref={titleRef}
            className="absolute left-1/2 z-20 w-full -translate-x-1/2 text-center font-bold"
            style={{
              top: mobileSections.about.titleTopOffset,
              color: colors.brand.primaryStrong,
              fontSize: "clamp(36px, 9vw, 52px)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            BIZ HAQIMIZDA
          </h2>

          <div
            ref={imageWrapRef}
            className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white"
            style={{
              maxWidth: mobileSections.about.frameMaxWidth,
              borderRadius: mobileSections.about.imageRadius,
              border: `${mobileSections.about.imageBorderWidth} solid ${colors.brand.primary}`,
              
            }}
          >
            <Image
              src="/grid-img.png"
              alt="Azizam Market"
              width={420}
              height={620}
              className="h-auto w-full object-cover"
              style={{
                minHeight: mobileSections.about.imageHeight,
              }}
            />
          </div>

          <div
            className="absolute left-1/2 z-20 w-full -translate-x-1/2 text-center"
            style={{
              bottom: mobileSections.about.contentBottomOffset,
              maxWidth: mobileSections.about.contentMaxWidth,
            }}
          >
            <h3
              ref={infoTitleRef}
              className="font-semibold"
              style={{
                color: colors.brand.primaryStrong,
                fontSize: "30px",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
              }}
            >
              Azizam Market
            </h3>

            <div className="relative mt-5 min-h-[92px]">
              {aboutTexts.map((text, index) => (
                <p
                  key={index}
                  ref={(el) => {
                    textsRef.current[index] = el;
                  }}
                  className="absolute left-0 top-0 w-full text-base leading-7"
                  style={{
                    color: colors.brand.secondary,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}