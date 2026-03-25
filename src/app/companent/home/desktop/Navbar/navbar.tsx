"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { colors, motion, spacing, zIndex } from "@/config/design-system"
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
      className="fixed left-0 top-0 flex w-full items-center justify-between text-white backdrop-blur-md"
      style={{
        paddingInline: spacing[10],
        paddingBlock: spacing[6],
        zIndex: zIndex.navbar,
        backgroundColor: colors.overlay.navbar,
      }}
    >
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Azizam Market" width={40} height={40} />
      </div>

      <div className="flex gap-8 text-sm font-medium">
        <a href="#about">Biz haqimizda</a>
        <a href="#products">Mahsulot</a>
        <AuthTriggerButton mode="login" className="transition hover:opacity-80">
          Kirish yoki Ro&apos;yxatdan o&apos;tish
        </AuthTriggerButton>
      </div>
    </nav>
  )
}