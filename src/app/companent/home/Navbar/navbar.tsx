"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Navbar() {

  const navRef = useRef(null)

  useEffect(() => {

    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

  }, [])

  return (

    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-6 text-white z-50 bg-black/30 backdrop-blur-md"
    >

      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Azizam Market" width={40} height={40} />
      </div>

      <div className="flex gap-8 text-sm font-medium">
        <a href="#about">Biz haqimizda</a>
        <a href="#product">Mahsulot</a>
        <a href="/auth">Kirish yoki Ro&apos;yxatdan o&apos;tish</a>
      </div>

    </nav>

  )
}