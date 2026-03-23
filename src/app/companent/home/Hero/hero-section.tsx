"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ScrollButton from "../../Buttons-funksia/button-scroll"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  const azizamRef = useRef(null)
  const marketRef = useRef(null)
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Boshlang'ich holatni o'rnatish - lekin bu yerda 0 da turishi kerak
      gsap.set(azizamRef.current, { x: 0, opacity: 1 })
      gsap.set(marketRef.current, { x: 0, opacity: 1 })

      // ScrollTrigger animatsiyasi
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: 1, // scrub qiymatini oshirish animatsiyani yanada silliq qiladi
          pin: true,
          toggleActions: "play reverse play reverse", // Bu muhim! Scroll tepaga qaytganda animatsiyani teskarisiga o'ynatadi
          anticipatePin: 1,
          invalidateOnRefresh: true // Refreshda animatsiyani yangilaydi
        }
      })

      // background zoom
      tl.to(bgRef.current, {
        scale: 1.15,
        ease: "none"
      }, 0)

      // title tarqalishi - bir vaqtda harakatlanishi uchun
      tl.to(azizamRef.current, {
        x: "-70vw",
        opacity: 0,
        ease: "none"
      }, 0)

      tl.to(marketRef.current, {
        x: "70vw",
        opacity: 0,
        ease: "none"
      }, 0)

      // ScrollTrigger ni qayta yuklash (refresh) - bu muhim!
      ScrollTrigger.refresh()

    }, sectionRef)

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(st => st.kill())
      ctx.revert()
    }

  }, [])


  return (

    <section
      ref={sectionRef}
      className="h-screen flex items-center text-white relative overflow-hidden"
    >

      {/* BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/rose-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-[#d13ea2]/60"></div>

      <div className="relative z-10 w-full max-w-375 mx-auto">

        <h1
          ref={azizamRef}
          className="text-[140px] md:text-[280px] font-bold leading-none pl-6 md:pl-20"
        >
          Azizam
        </h1>

        <h1
          ref={marketRef}
          className="text-[140px] md:text-[280px] font-bold leading-none pr-6 md:pr-20 text-right mt-6"
        >
          Market
        </h1>

        <div className="flex justify-center mt-10">
          <ScrollButton />
        </div>

      </div>

    </section>

  )
}