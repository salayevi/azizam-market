"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { colors, motion, sizes, spacing, zIndex } from "@/config/design-system"
import AuthTriggerButton from "@/app/companent/shared/auth/AuthTriggerButton"

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: motion.duration.slower,
      ease: motion.ease.smooth,
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 w-full text-white backdrop-blur-md"
      style={{
        paddingInline: spacing[6],
        paddingBlock: spacing[5],
        zIndex: zIndex.navbar,
        backgroundColor: colors.overlay.navbar,
      }}
    >
      <div
        className="mx-auto flex w-full items-center justify-between"
        style={{
          maxWidth: sizes.navbar.contentMax,
          gap: sizes.navbar.linksGap,
        }}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Azizam Market"
            width={42}
            height={42}
            style={{
              width: sizes.navbar.logoSize,
              height: sizes.navbar.logoSize,
            }}
          />
        </div>

        <div
          className="flex items-center"
          style={{
            gap: sizes.navbar.linksGap,
            fontSize: sizes.navbar.linkFontSize,
            fontWeight: 500,
          }}
        >
          <a href="#about">Biz haqimizda</a>
          <a href="#products">Mahsulot</a>
          <AuthTriggerButton mode="login" className="transition hover:opacity-80">
            Kirish yoki Ro&apos;yxatdan o&apos;tish
          </AuthTriggerButton>
        </div>
      </div>
    </nav>
  )
}
