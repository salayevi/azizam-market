"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollButton from "../../Buttons-funksia/button-scroll"
import {
  colors,
  motion,
  sizes,
  spacing,
  typography,
  zIndex,
} from "@/config/design-system"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const azizamRef = useRef<HTMLHeadingElement | null>(null)
  const marketRef = useRef<HTMLHeadingElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(azizamRef.current, { x: 0, opacity: 1 })
      gsap.set(marketRef.current, { x: 0, opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${motion.hero.scrollDistance}`,
          scrub: 1,
          pin: true,
          toggleActions: "play reverse play reverse",
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(
        bgRef.current,
        {
          scale: motion.scale.backgroundZoom,
          ease: motion.ease.none,
        },
        0,
      )

      tl.to(
        azizamRef.current,
        {
          x: `-${motion.hero.titleX}`,
          opacity: 0,
          ease: motion.ease.none,
        },
        0,
      )

      tl.to(
        marketRef.current,
        {
          x: motion.hero.titleX,
          opacity: 0,
          ease: motion.ease.none,
        },
        0,
      )

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden"
      style={{
        height: sizes.hero.sectionHeight,
        color: colors.text.white,
      }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/rose-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: colors.overlay.hero }}
      />

      <div
        className="relative mx-auto flex h-full w-full flex-col justify-center"
        style={{
          zIndex: zIndex.content,
          maxWidth: sizes.hero.containerMax,
          paddingInline: spacing[5],
        }}
      >
        <div className="flex flex-1 flex-col justify-center">
          <h1
            ref={azizamRef}
            className="font-bold"
            style={{
              fontSize: `clamp(${typography.fontSize.heroSm}, 12vw, ${typography.fontSize.heroXl})`,
              lineHeight: typography.lineHeight.none,
              letterSpacing: typography.letterSpacing.tighter,
              paddingLeft: spacing[4],
            }}
          >
            Azizam
          </h1>

          <h1
            ref={marketRef}
            className="text-right font-bold"
            style={{
              fontSize: `clamp(${typography.fontSize.heroSm}, 12vw, ${typography.fontSize.heroXl})`,
              lineHeight: typography.lineHeight.none,
              letterSpacing: typography.letterSpacing.tighter,
              marginTop: spacing[4],
              paddingRight: spacing[4],
            }}
          >
            Market
          </h1>
        </div>

        <div
          className="flex justify-center"
          style={{ paddingBottom: spacing[12] }}
        >
          <ScrollButton />
        </div>
      </div>
    </section>
  )
}