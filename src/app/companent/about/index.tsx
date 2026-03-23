"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {

  const sectionRef = useRef<HTMLElement | null>(null)

  const bigTitleRef = useRef<HTMLHeadingElement | null>(null)
  const imageRef = useRef<HTMLDivElement | null>(null)

  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {

    const ctx = gsap.context(() => {

      // BIG TITLE boshlanish
      gsap.set(bigTitleRef.current, {
        scale: 1.3,
        opacity: 0
      })

      // IMAGE boshlanish
      gsap.set(imageRef.current, {
        scale: 0.6,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)"
      })

      // TEXT boshlanish
      gsap.set([titleRef.current, ...textsRef.current], {
        opacity: 0,
        y: 40
      })


      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          scrub: true,
          pin: true
        }
      })


      // 1️⃣ BIZ HAQIMIZDA chiqadi
      tl.to(bigTitleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2
      })


      // 2️⃣ tepaga ketadi
      tl.to(bigTitleRef.current, {
        y: -200,
        opacity: 0,
        duration: 1.2
      })


      // 3️⃣ IMAGE suv effekti bilan chiqadi
      tl.to(imageRef.current, {
        scale: 1,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.5
      })


      // 4️⃣ IMAGE chapga siljiydi
      tl.to(imageRef.current, {
        x: "-35vw",
        duration: 1.5
      })


      // 5️⃣ TITLE chiqadi
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      })


      tl.to(titleRef.current, {
        opacity: 0,
        y: -40,
        duration: 1
      })


      // TEXT storytelling
      textsRef.current.forEach((el) => {

        tl.to(el, {
          opacity: 1,
          y: 0,
          duration: 1
        })

        tl.to(el, {
          opacity: 0,
          y: -40,
          duration: 1
        })

      })


    }, sectionRef)

    return () => ctx.revert()

  }, [])


  return (

    <section
      ref={sectionRef}
      className="h-screen w-full bg-[#f2f2f2] flex items-center justify-center overflow-hidden"
    >

      {/* BIG TITLE */}
      <h2
        ref={bigTitleRef}
        className="absolute text-7xl md:text-[120px] font-bold text-[#d1296f]"
      >
        BIZ HAQIMIZDA
      </h2>



      {/* IMAGE */}
      <div
        ref={imageRef}
        className="absolute rounded-2xl border-2 border-[#d13ea2] overflow-hidden"
      >

        <Image
          src="/grid-img.png"
          alt="Azizam"
          width={520}
          height={650}
          className="object-cover"
        />

      </div>



      {/* TEXT AREA */}
      <div className="absolute right-[10vw] w-[500px]">

        <h3
          ref={titleRef}
          className="absolute text-5xl font-semibold text-[#d1296f]"
        >
          Azizam Market
        </h3>


        <p
          ref={(el) => { textsRef.current[0] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Azizam Market — bu shunchaki kosmetika do‘koni emas.
        </p>

        <p
          ref={(el) => { textsRef.current[1] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Bu — mehr, e’tibor va qadrlash maskani.
        </p>

        <p
          ref={(el) => { textsRef.current[2] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          “Azizam” so‘zi biz uchun oddiy murojaat emas.
        </p>

        <p
          ref={(el) => { textsRef.current[3] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Bu yaqinlikni, samimiyatni va muhabbatni anglatadi.
        </p>

        <p
          ref={(el) => { textsRef.current[4] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Biz har bir inson o‘zini aziz his qilishi uchun ishlaymiz.
        </p>

        <p
          ref={(el) => { textsRef.current[5] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Har bir sovg‘a — bu munosabat.
        </p>

        <p
          ref={(el) => { textsRef.current[6] = el }}
          className="absolute text-2xl text-[#8b2749]"
        >
          Har bir mahsulot — e’tibor belgisi.
        </p>

      </div>

    </section>
  )
}