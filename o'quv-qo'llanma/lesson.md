<!-- Home -->
\\\\\\\\\\\\\\\\\\\\\\

<!-- Navbar -->

``` 
"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import AuthTriggerButton from "../../auth/AuthTriggerButton"

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
         <AuthTriggerButton
          mode="login"
          className="transition hover:opacity-80"
        >
          Kirish yoki Ro&apos;yxatdan o&apos;tish
        </AuthTriggerButton>
      </div>

    </nav>

  )
}
``` 

# Footer/footer.tsx

```
"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import AuthTriggerButton from "../../auth/AuthTriggerButton"

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
         <AuthTriggerButton
          mode="login"
          className="transition hover:opacity-80"
        >
          Kirish yoki Ro&apos;yxatdan o&apos;tish
        </AuthTriggerButton>
      </div>

    </nav>

  )
}
```

<!-- Hero -->

```
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
``` 

<!-- Funksia Button Scroll -->

``` 
"use client"

export default function ScrollButton() {

  const scrollToFooter = () => {

    const footer = document.getElementById("footer")
    if (!footer) return

    const targetPosition = footer.offsetTop
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition

    const duration = 2000 // scroll davomiyligi (millisecond) — 2000 = 2 sekund
    let startTime: number | null = null

    const animation = (currentTime: number) => {

      if (startTime === null) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      window.scrollTo(0, startPosition + distance * easeInOut(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    const easeInOut = (t: number) => {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2
    }

    requestAnimationFrame(animation)
  }

  return (
    <button
      onClick={scrollToFooter}
      className="flex flex-col items-center gap-2 mt-10 text-white opacity-80 hover:opacity-100 transition"
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-2 bg-white rounded-full mt-1 animate-bounce"></div>
      </div>

      <span className="text-sm tracking-wide">
        Aylantiring
      </span>
    </button>
  )
}
```

<!-- About -->
### index.tsx ###
```
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
      <div className="absolute right-[10vw] w-125">

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
```



<!-- Product -->

### index.tsx ###

```
"use client"

import { productsData } from "./products-data"
import ProductsScene from "./products-scene"

export default function ProductsSection() {
  return (
    <section id="products" className="relative w-full">
      <ProductsScene products={productsData} />
    </section>
  )
}
```
### products-scene.tsx ###

```
"use client";

import { useRef } from "react";
import { Product } from "./product.types";
import { useProductsScroll } from "./useProductsScroll";
import ProductSlide from "./product-slide";

type Props = {
  products: Product[];
};

export default function ProductsScene({ products }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);

  useProductsScroll({
    sectionRef,
    pinRef,
    totalSlides: products.length,
  });

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${(products.length + 1.45) * 100}vh` }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 h-screen overflow-hidden bg-[#f5f4f2]"
      >
        {/* Intro Layer */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="text-center">
            <p
              data-products-kicker
              className="mb-4 text-xs uppercase tracking-[0.45em] text-neutral-500 sm:text-sm"
            >
              Azizam Market
            </p>

            <h2
              data-products-title
              className="text-6xl font-semibold tracking-tight text-[#2f22d4] sm:text-7xl md:text-8xl lg:text-[8rem]"
            >
              Mahsulotlar
            </h2>

            <p
              data-products-subtitle
              className="mx-auto mt-5 max-w-xl text-sm text-neutral-500 sm:text-base"
            >
              Har bir mahsulotni batafsil ko‘rib chiqing
            </p>
          </div>
        </div>
        {/* Floating Card Scene */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-10 pointer-events-none">
          <div
            data-products-card-shell
            className="relative w-full max-w-6xl will-change-transform pointer-events-auto"
          >
            <div
              data-products-card-shadow
              className="pointer-events-none absolute left-1/2 top-[58%] h-24 w-[62%] -translate-x-1/2 rounded-full bg-black/8 blur-3xl"
            />

            <div
              data-products-card
              className="relative mx-auto overflow-hidden rounded-4xl border border-white/60 bg-white/90 shadow-[0_28px_80px_rgba(0,0,0,0.06)] backdrop-blur-sm"
            >
              <div className="relative h-[70vh] min-h-140 w-full">
                {products.map((product, index) => (
                  <ProductSlide
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

### product.types.ts ####

```
export type ProductColor = {
  name: string
  hex: string
  preview?: string
}

export type ProductAction = {
  label: string
  href?: string
  type?: "primary" | "secondary"
}

export type ProductMedia = {
  type: "image" | "video"
  src: string
  poster?: string
  alt?: string
  hasTransparentBg?: boolean
}

export type Product = {
  id: string
  slug: string
  name: string
  subtitle?: string
  description: string
  price?: string
  badge?: string

  theme: {
    bg: string
    text: string
    accent: string
    muted?: string
    card?: string
    tone?: "light" | "dark"
  }

  mediaPanel: {
    mode: "imageTone" | "forceBlack" | "forceWhite"
    color?: string
  }

  media: ProductMedia
  colors: ProductColor[]
  actions: ProductAction[]
}
```

### useProductsScroll.ts ###

```
"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Params = {
  sectionRef: RefObject<HTMLDivElement | null>;
  pinRef: RefObject<HTMLDivElement | null>;
  totalSlides: number;
};

export function useProductsScroll({ sectionRef, pinRef, totalSlides }: Params) {
  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin || totalSlides <= 0) return;

    const kicker = section.querySelector(
      "[data-products-kicker]",
    ) as HTMLElement | null;
    const title = section.querySelector(
      "[data-products-title]",
    ) as HTMLElement | null;
    const subtitle = section.querySelector(
      "[data-products-subtitle]",
    ) as HTMLElement | null;

    const cardShell = section.querySelector(
      "[data-products-card-shell]",
    ) as HTMLElement | null;
    const cardShadow = section.querySelector(
      "[data-products-card-shadow]",
    ) as HTMLElement | null;
    const card = section.querySelector(
      "[data-products-card]",
    ) as HTMLElement | null;

    const slides = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-product-slide]"),
    );
    const medias = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-product-media]"),
    );
    const infos = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-product-info]"),
    );
    const colors = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-product-colors]"),
    );
    const actions = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll("[data-product-actions]"),
    );

    if (
      !kicker ||
      !title ||
      !subtitle ||
      !cardShell ||
      !cardShadow ||
      !card ||
      !slides.length
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // initial states
      gsap.set([kicker, subtitle], {
        autoAlpha: 0,
        y: 14,
      });

      gsap.set(title, {
        autoAlpha: 0,
        y: 22,
        scale: 1.04,
      });

      // card initial = water surface ostidan chiqishga tayyor
      gsap.set(cardShell, {
        autoAlpha: 0,
        y: 90,
        scale: 0.965,
        transformOrigin: "50% 50%",
      });

      gsap.set(cardShadow, {
        autoAlpha: 0,
        scaleX: 0.7,
        scaleY: 0.7,
        transformOrigin: "50% 50%",
      });

      gsap.set(card, {
        autoAlpha: 1,
      });

      gsap.set(slides, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(medias, {
        autoAlpha: 0,
        y: 34,
        scale: 0.985,
      });

      gsap.set(infos, {
        autoAlpha: 0,
        y: 20,
      });

      gsap.set(colors, {
        autoAlpha: 0,
        y: 14,
      });

      gsap.set(actions, {
        autoAlpha: 0,
        y: 14,
      });

      gsap.set(slides[0], {
        autoAlpha: 1,
        pointerEvents: "auto",
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${(totalSlides + 1.45) * window.innerHeight}`,
          scrub: 0.35,
          pin: pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ==================================================
      // 1. TITLE INTRO
      // ==================================================
      tl.to(
        title,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.42,
        },
        0,
      );

      tl.to(
        kicker,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.22,
        },
        0.06,
      );

      tl.to(
        subtitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.22,
        },
        0.12,
      );

      // ==================================================
      // 2. TITLE OUT + CARD RISE IN
      // ==================================================
      tl.to(
        title,
        {
          autoAlpha: 0,
          y: -50,
          scale: 0.97,
          duration: 0.25,
        },
        0.38,
      );

      tl.to(
        kicker,
        {
          autoAlpha: 0,
          x: -30,
          y: -10,
          duration: 0.16,
        },
        0.36,
      );

      tl.to(
        subtitle,
        {
          autoAlpha: 0,
          x: 30,
          y: 12,
          duration: 0.16,
        },
        0.36,
      );

      tl.to(
        cardShell,
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.28,
        },
        0.42,
      );

      tl.to(
        cardShadow,
        {
          autoAlpha: 1,
          scaleX: 1,
          scaleY: 1,
          duration: 0.22,
        },
        0.46,
      );

      tl.to(
        medias[0],
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.18,
        },
        0.5,
      );

      tl.to(
        infos[0],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.14,
        },
        0.53,
      );

      tl.to(
        colors[0],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
        },
        0.56,
      );

      tl.to(
        actions[0],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.1,
        },
        0.58,
      );

      // ==================================================
      // 3. CAROUSEL-LIKE INNER SLIDE TRANSITIONS
      // ==================================================
      for (let i = 1; i < totalSlides; i++) {
        const base = 1.15 + (i - 1) * 0.8;

        const prevSlide = slides[i - 1];
        const nextSlide = slides[i];

        const prevMedia = medias[i - 1];
        const nextMedia = medias[i];

        const prevInfo = infos[i - 1];
        const nextInfo = infos[i];

        const prevColors = colors[i - 1];
        const nextColors = colors[i];

        const prevActions = actions[i - 1];
        const nextActions = actions[i];

        tl.to(
          [prevMedia, prevInfo, prevColors, prevActions],
          {
            autoAlpha: 0,
            y: -18,
            duration: 0.18,
            stagger: 0.02,
          },
          base,
        );

        tl.to(
          prevSlide,
          {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: 0.12,
          },
          base + 0.05,
        );

        tl.to(
          nextSlide,
          {
            autoAlpha: 1,
            pointerEvents: "auto",
            duration: 0.12,
          },
          base + 0.07,
        );

        tl.fromTo(
          nextMedia,
          {
            autoAlpha: 0,
            y: 30,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.24,
          },
          base + 0.11,
        );

        tl.fromTo(
          nextInfo,
          {
            autoAlpha: 0,
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.2,
          },
          base + 0.15,
        );

        tl.fromTo(
          nextColors,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.14,
          },
          base + 0.19,
        );

        tl.fromTo(
          nextActions,
          {
            autoAlpha: 0,
            y: 12,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.14,
          },
          base + 0.22,
        );
      }

      // ==================================================
      // 4. OUTRO — LAST CARD SINKS DOWN
      // first reveal animatsiyasining aksi
      // ==================================================
      const lastIndex = totalSlides - 1;
      const outroBase = 1.15 + (totalSlides - 1) * 0.8 + 0.55;

      tl.to(
        [
          medias[lastIndex],
          infos[lastIndex],
          colors[lastIndex],
          actions[lastIndex],
        ],
        {
          autoAlpha: 0,
          y: -14,
          duration: 0.16,
          stagger: 0.02,
        },
        outroBase,
      );

      tl.to(
        slides[lastIndex],
        {
          autoAlpha: 0,
          pointerEvents: "none",
          duration: 0.12,
        },
        outroBase + 0.05,
      );

      // shadow qisqaradi
      tl.to(
        cardShadow,
        {
          autoAlpha: 0,
          scaleX: 0.72,
          scaleY: 0.72,
          duration: 0.22,
        },
        outroBase + 0.08,
      );

      // card pastga "cho'kadi"
      tl.to(
        cardShell,
        {
          autoAlpha: 0,
          y: 95,
          scale: 0.965,
          duration: 0.3,
          ease: "power2.in",
        },
        outroBase + 0.08,
      );

      // pin tugashidan oldin card butunlay yo'q bo'lsin
      tl.set(
        cardShell,
        {
          autoAlpha: 0,
          pointerEvents: "none",
        },
        outroBase + 0.4,
      );
    }, section);

    const handleRefresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", handleRefresh);
    window.addEventListener("resize", handleRefresh);

    return () => {
      window.removeEventListener("load", handleRefresh);
      window.removeEventListener("resize", handleRefresh);
      ctx.revert();
    };
  }, [sectionRef, pinRef, totalSlides]);
}

```

### product-slide.tsx ###

```
"use client";

import { Product } from "./product.types";
import ProductMedia from "./product-media";
import ProductInfo from "./product-info";
import ProductColors from "./product-colors";
import ProductActions from "./product-actions";
import ProductGuestCallout from "./product-guest-callout";
import { useAuthModal } from "../auth/AuthModalProvider";

type Props = {
  product: Product;
  index: number;
};

function getMediaPanelBackground(product: Product) {
  const mode = product.mediaPanel.mode;

  if (mode === "forceBlack") return "#111111";
  if (mode === "forceWhite") return "#f5f1eb";
  if (mode === "imageTone") return product.mediaPanel.color || "#d8d2cc";

  return "#111111";
}

export default function ProductSlide({ product, index }: Props) {
  const mediaPanelBg = getMediaPanelBackground(product);
  const { isAuthenticated } = useAuthModal();

  return (
    <article
      data-product-slide
      data-index={index}
      className="absolute inset-0 grid h-full w-full grid-cols-1 lg:grid-cols-[1.05fr_1fr]"
      style={{
        background: product.theme.bg,
        color: product.theme.text,
      }}
    >
      {/* LEFT / MEDIA */}
      <div
        className="relative flex items-center justify-center overflow-hidden p-8 lg:p-12 pointer-events-none"
        style={{ backgroundColor: mediaPanelBg }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />

        <div className="relative z-0 pointer-events-none">
          <ProductMedia product={product} />
        </div>
      </div>

      {/* RIGHT / CONTENT */}
      <div className="relative z-20 flex items-center p-8 lg:p-14">
        <div className="mx-auto w-full max-w-xl">
          <ProductInfo product={product} isAuthenticated={isAuthenticated} />

          <div className="mt-8">
            <ProductColors
              colors={product.colors}
              isAuthenticated={isAuthenticated}
            />
          </div>

          {isAuthenticated ? (
            <div className="mt-8 min-h-[56px] relative z-20">
              <ProductActions
                actions={product.actions}
                accent={product.theme.accent}
                isAuthenticated={isAuthenticated}
              />
            </div>
          ) : (
            <div className="relative z-30">
              <ProductGuestCallout accent={product.theme.accent} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
```

### product-media.tsx ###

```
"use client"

import { Product } from "./product.types"

type Props = {
  product: Product
}

export default function ProductMedia({ product }: Props) {
  const { media, name } = product

  return (
    <div
      data-product-media
      className="relative z-10 flex h-full w-full items-center justify-center will-change-transform"
    >
      {media.type === "image" ? (
        <img
          src={media.src}
          alt={media.alt || name}
          className="relative z-10 max-h-[84%] max-w-[84%] object-contain drop-shadow-[0_26px_40px_rgba(0,0,0,0.18)]"
          draggable={false}
        />
      ) : (
        <video
          src={media.src}
          poster={media.poster}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
        />
      )}
    </div>
  )
}
```

### product-info.tsx ### 

```
import { Product } from "./product.types";

type Props = {
  product: Product;
  isAuthenticated: boolean;
};

export default function ProductInfo({ product, isAuthenticated }: Props) {
  return (
    <div data-product-info className="max-w-xl">
      {product.badge && (
        <div
          className="mb-4 inline-flex rounded-full px-4 py-1 text-sm font-medium"
          style={{
            backgroundColor: `${product.theme.accent}20`,
            color: product.theme.accent,
          }}
        >
          {product.badge}
        </div>
      )}

      <h3 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {product.name}
      </h3>

      {product.subtitle && (
        <p
          className="mt-3 text-base sm:text-lg"
          style={{ color: product.theme.muted || product.theme.text }}
        >
          {product.subtitle}
        </p>
      )}

      <p
        className="mt-6 text-sm leading-7 sm:text-base"
        style={{ color: product.theme.muted || product.theme.text }}
      >
        {product.description}
      </p>

      {isAuthenticated && product.price && (
        <div className="mt-8 text-2xl font-semibold">
          {product.price}
        </div>
      )}
    </div>
  );
}
```

### product-colors.tsx ###

```
import { ProductColor } from "./product.types";

type Props = {
  colors: ProductColor[];
  isAuthenticated: boolean;
};

export default function ProductColors({ colors, isAuthenticated }: Props) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div data-product-colors>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
        Color Variants
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={color.name}
            className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-3 py-2 backdrop-blur-sm transition hover:scale-[1.02]"
          >
            <span
              className="h-5 w-5 rounded-full border border-black/10"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-sm text-neutral-700">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
```

### product-actions.tsx ###

```
import Link from "next/link";
import { ProductAction } from "./product.types";

type Props = {
  actions: ProductAction[];
  accent: string;
  isAuthenticated: boolean;
};

export default function ProductActions({
  actions,
  accent,
  isAuthenticated,
}: Props) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div data-product-actions className="flex flex-wrap gap-4">
      {actions.map((action) => {
        const isPrimary = action.type === "primary";

        return (
          <Link
            key={action.label}
            href={action.href || "#"}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: isPrimary ? accent : "transparent",
              color: isPrimary ? "#fff" : "currentColor",
              border: isPrimary ? "none" : "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
```

### products-data.ts ###

```
import { Product } from "./product.types"

export const productsData: Product[] = [
  {
    id: "1",
    slug: "rose-serum",
    name: "Rose Serum",
    subtitle: "Luxury botanical care",
    description:
      "Yengil teksturali premium serum. Teri namligini ushlab turadi, silliqlik va yorqinlik beradi.",
    price: "$48",
    badge: "Best Seller",
    theme: {
      bg: "#f7f2f1",
      text: "#2c2523",
      accent: "#c98f98",
      muted: "#7e7169",
      card: "#fffaf8",
      tone: "light",
    },
    mediaPanel: {
      mode: "forceBlack",
    },
    media: {
      type: "image",
      src: "/products/parfium.jpg",
      alt: "Rose Serum bottle",
      hasTransparentBg: true,
    },
    colors: [
      { name: "Rose Gold", hex: "#c98f98" },
      { name: "Cream", hex: "#ece4dc" },
      { name: "Black", hex: "#2e2927" },
    ],
    actions: [
      { label: "Add to cart", href: "/cart", type: "primary" },
      { label: "Save", href: "/wishlist", type: "secondary" },
    ],
  },
  {
    id: "2",
    slug: "velvet-perfume",
    name: "Velvet Perfume",
    subtitle: "Elegant signature scent",
    description:
      "Nozik va chuqur ifor uyg‘unligi. Premium segment uchun estetik va uzoq saqlanuvchi kompozitsiya.",
    price: "$72",
    badge: "New Drop",
    theme: {
      bg: "#111111",
      text: "#f5f1eb",
      accent: "#d5b16d",
      muted: "#b8ac9d",
      card: "#171717",
      tone: "dark",
    },
    mediaPanel: {
      mode: "forceWhite",
    },
    media: {
      type: "image",
      src: "/products/parfium2.jpg",
      alt: "Velvet Perfume bottle",
      hasTransparentBg: true,
    },
    colors: [
      { name: "Gold", hex: "#d5b16d" },
      { name: "Ivory", hex: "#f2ede6" },
      { name: "Graphite", hex: "#2a2a2a" },
    ],
    actions: [
      { label: "Add to cart", href: "/cart", type: "primary" },
      { label: "Save", href: "/wishlist", type: "secondary" },
    ],
  },
  {
    id: "3",
    slug: "silk-cream",
    name: "Silk Cream",
    subtitle: "Soft texture, premium finish",
    description:
      "Kunlik foydalanish uchun muloyim cream. Teri yuzasini yumshatadi va premium parvarish hissini beradi.",
    price: "$55",
    badge: "Editor’s Pick",
    theme: {
      bg: "#eee4da",
      text: "#251f1b",
      accent: "#8f6b52",
      muted: "#7a6d62",
      card: "#faf5ef",
      tone: "light",
    },
    mediaPanel: {
      mode: "imageTone",
      color: "#cfc5bc",
    },
    media: {
      type: "image",
      src: "/products/parfium3.jpg",
      alt: "Silk Cream jar",
      hasTransparentBg: false,
    },
    colors: [
      { name: "Mocha", hex: "#8f6b52" },
      { name: "Sand", hex: "#d5c1ac" },
      { name: "Ivory", hex: "#f7f1ea" },
    ],
    actions: [
      { label: "Add to cart", href: "/cart", type: "primary" },
      { label: "Save", href: "/wishlist", type: "secondary" },
    ],
  },
] 
```


<!-- Azizam-Market/src/app/ -->

### layout.tsx ###
```
import "./globals.css";
import { AuthModalProvider } from "./companent/auth/AuthModalProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <AuthModalProvider>{children}</AuthModalProvider>
      </body>
    </html>
  );
}
```

### page.tsx ###
```
import About from "./companent/about";
import ProductsSection from "./companent/product";
import AchievementsSection from "./companent/AchievementsSection";
import HomeSection from "./companent/home";
import Footer from "./companent/home/Footer/footer";
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div>
        <HomeSection />
        <About />
        <ProductsSection />
        <div className="h-[20vh] bg-white" />
        <AchievementsSection />
        <Footer />
      </div>
    </main>
  );
}
```

<!-- Auth --> 

# auth/AuthModal.tsx
```
"use client";

import { useEffect } from "react";
import { useAuthModal } from "./AuthModalProvider";

export default function AuthModal() {
  const { isOpen, view, closeModal, setView, loginSuccess } = useAuthModal();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <button
        type="button"
        onClick={closeModal}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        aria-label="Modalni yopish"
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#111111] p-5 text-white shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {view === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
          </h2>

          <button
            type="button"
            onClick={closeModal}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Yopish
          </button>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setView("login")}
            className={`rounded-full px-4 py-3 text-sm font-medium transition ${
              view === "login"
                ? "bg-white text-black"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Kirish
          </button>

          <button
            type="button"
            onClick={() => setView("register")}
            className={`rounded-full px-4 py-3 text-sm font-medium transition ${
              view === "register"
                ? "bg-[#d13ea2] text-white"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
          />
          <input
            type="password"
            placeholder="Parol"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/30"
          />

          <button
            type="button"
            onClick={loginSuccess}
            className="w-full rounded-2xl bg-white px-4 py-3 font-medium text-black transition hover:scale-[1.01]"
          >
            {view === "login" ? "Kirish" : "Ro‘yxatdan o‘tish"}
          </button>
        </div>
      </div>
    </div>
  );
}
```

# auth/AuthModalProvider.tsx
```
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import AuthModal from "./AuthModal";

type AuthView = "login" | "register";

type AuthModalContextType = {
  isOpen: boolean;
  view: AuthView;
  isAuthenticated: boolean;
  openLogin: () => void;
  openRegister: () => void;
  closeModal: () => void;
  setView: (view: AuthView) => void;
  loginSuccess: () => void;
  logout: () => void;
};

const AuthModalContext = createContext<AuthModalContextType | null>(null);

export function AuthModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<AuthView>("login");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openLogin = useCallback(() => {
    setView("login");
    setIsOpen(true);
  }, []);

  const openRegister = useCallback(() => {
    setView("register");
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const loginSuccess = useCallback(() => {
    setIsAuthenticated(true);
    setIsOpen(false);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      view,
      isAuthenticated,
      openLogin,
      openRegister,
      closeModal,
      setView,
      loginSuccess,
      logout,
    }),
    [isOpen, view, isAuthenticated, openLogin, openRegister, closeModal, loginSuccess, logout]
  );

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <AuthModal />
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  const context = useContext(AuthModalContext);

  if (!context) {
    throw new Error("useAuthModal must be used inside AuthModalProvider");
  }

  return context;
}
```

# auth/AuthTriggerButton.tsx 
```
"use client";

import { CSSProperties } from "react";
import { useAuthModal } from "./AuthModalProvider";

type Props = {
  mode?: "login" | "register";
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function AuthTriggerButton({
  mode = "login",
  children,
  className = "",
  style,
}: Props) {
  const { openLogin, openRegister } = useAuthModal();

  const handleClick = () => {
    if (mode === "register") {
      openRegister();
      return;
    }

    openLogin();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
```