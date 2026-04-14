"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { colors, radius, shadows, sizes, spacing } from "@/config/design-system"

gsap.registerPlugin(ScrollTrigger)

const aboutTexts = [
  "Azizam Market — bu shunchaki kosmetika do‘koni emas.",
  "Bu — mehr, e’tibor va qadrlash maskani.",
  "“Azizam” so‘zi biz uchun oddiy murojaat emas.",
  "Bu yaqinlikni, samimiyatni va muhabbatni anglatadi.",
  "Biz har bir inson o‘zini aziz his qilishi uchun ishlaymiz.",
  "Har bir sovg‘a — bu munosabat.",
  "Har bir mahsulot — e’tibor belgisi.",
]

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const bigTitleRef = useRef<HTMLHeadingElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bigTitleRef.current, {
        scale: 1.3,
        opacity: 0,
      })

      gsap.set(imageRef.current, {
        scale: 0.6,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      })

      gsap.set([titleRef.current, ...textsRef.current], {
        opacity: 0,
        y: 40,
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          scrub: true,
          pin: true,
        },
      })

      tl.to(bigTitleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
      })

      tl.to(bigTitleRef.current, {
        y: -200,
        opacity: 0,
        duration: 1.2,
      })

      tl.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5,
      })

      tl.to(imageRef.current, {
        x: sizes.about.imageTravelX,
        duration: 1.5,
      })

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      })

      tl.to(titleRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
      })

      textsRef.current.forEach((el) => {
        tl.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
        })

        tl.to(el, {
          opacity: 0,
          y: -40,
          duration: 1,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.background.about }}
    >
      <h2
        ref={bigTitleRef}
        className="absolute text-center font-bold"
        style={{
          color: colors.brand.primaryStrong,
          fontSize: sizes.about.titleSize,
          letterSpacing: "-0.03em",
          width: "100%",
          paddingInline: spacing[6],
        }}
      >
        BIZ HAQIMIZDA
      </h2>

      <div
        className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{
          maxWidth: sizes.about.rowMaxWidth,
          paddingInline: spacing[8],
          gap: sizes.about.rowGap,
        }}
      >
        <div
          ref={imageRef}
          className="overflow-hidden"
          style={{
            borderRadius: radius.xl,
            border: `2px solid ${colors.brand.primary}`,
            boxShadow: shadows.card,
            width: sizes.about.imageWidth,
            minWidth: sizes.about.imageWidth,
            height: sizes.about.imageHeight,
            flexShrink: 0,
          }}
        >
          <Image
            src="/grid-img.png"
            alt="Azizam"
            width={560}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="relative flex items-center"
          style={{
            width: sizes.about.textWidth,
            minWidth: "420px",
            minHeight: sizes.about.textMinHeight,
          }}
        >
          <h3
            ref={titleRef}
            className="absolute font-semibold"
            style={{
              color: colors.brand.primaryStrong,
              fontSize: "clamp(2.1rem, 3.2vw, 3.2rem)",
            }}
          >
            Azizam Market
          </h3>

          {aboutTexts.map((text, index) => (
            <p
              key={index}
              ref={(el) => {
                textsRef.current[index] = el
              }}
              className="absolute"
              style={{
                color: colors.brand.secondary,
                fontSize: sizes.about.textSize,
                lineHeight: 1.45,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
