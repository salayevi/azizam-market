"use client";

import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AchievementItem = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const achievements: AchievementItem[] = [
  {
    id: 1,
    image: "/gallery/team-1.jpg",
    title: "Premium tajriba",
    description:
      "Har bir mahsulot va xizmat estetik tanlov, sifat va hissiy taassurot mezonlari asosida shakllantiriladi.",
  },
  {
    id: 2,
    image: "/gallery/team-2.jpg",
    title: "Ishonchli jamoa",
    description:
      "Bizning jamoa buyurtmadan tortib taqdimotgacha bo‘lgan har bir bosqichni did va e’tibor bilan boshqaradi.",
  },
  {
    id: 3,
    image: "/gallery/team-3.jpg",
    title: "Yutuq va rivojlanish",
    description:
      "Azizam o‘sib borayotgan brend sifatida tajriba, ishonch va premium yondashuvni bir joyga jamlaydi.",
  },
  {
    id: 4,
    image: "/gallery/team-4.jpg",
    title: "Brend qadriyati",
    description:
      "Har bir detal orqali nafaqat mahsulot, balki unutilmas vizual va emotsional tajriba yaratiladi.",
  },
];

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const introTitleRef = useRef<HTMLHeadingElement | null>(null);
  const introSubtitleRef = useRef<HTMLParagraphElement | null>(null);
  const finalIntroRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const validSlides = slidesRef.current.filter(
          Boolean,
        ) as HTMLDivElement[];

        const intro = introRef.current;
        const introTitle = introTitleRef.current;
        const introSubtitle = introSubtitleRef.current;
        const finalIntro = finalIntroRef.current;

        if (!intro || !introTitle || !introSubtitle || !finalIntro) return;

        gsap.set(introTitle, {
          opacity: 0,
          y: 60,
        });

        gsap.set(introSubtitle, {
          opacity: 0,
          y: 40,
        });

        gsap.set(intro, {
          transformPerspective: 2000,
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
        });

        gsap.set(finalIntro, {
          opacity: 0,
          scale: 0.92,
        });

        validSlides.forEach((slide, index) => {
          const imageWrap = slide.querySelector(".achievement-image-wrap");
          const image = slide.querySelector(".achievement-image");
          const content = slide.querySelector(".achievement-content");

          gsap.set(slide, {
            opacity: index === 0 ? 1 : 0,
            zIndex: achievements.length - index,
            transformPerspective: 2000,
            transformOrigin: "left center",
            transformStyle: "preserve-3d",
            rotateY: 0,
            xPercent: 0,
          });

          gsap.set(imageWrap, {
            opacity: 0,
            scale: 0.86,
            y: 50,
          });

          gsap.set(image, {
            y: 0,
            scale: 1,
          });

          gsap.set(content, {
            opacity: 0,
            y: 50,
          });
        });

        const totalScroll = achievements.length * 2200 + 2600;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalScroll}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(introTitle, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        tl.to(introSubtitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        });

        tl.to(intro, {
          rotateY: -82,
          xPercent: -18,
          opacity: 0.15,
          duration: 1.35,
          ease: "power2.inOut",
        });

        validSlides.forEach((slide, index) => {
          const imageWrap = slide.querySelector(".achievement-image-wrap");
          const image = slide.querySelector(".achievement-image");
          const content = slide.querySelector(".achievement-content");

          if (!imageWrap || !image || !content) return;

          tl.set(
            slide,
            {
              opacity: 1,
            },
            ">-0.1",
          );

          tl.to(
            imageWrap,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            },
            ">",
          );

          tl.to(image, {
            y: -110,
            scale: 0.94,
            duration: 1.05,
            ease: "power2.inOut",
          });

          tl.to(
            content,
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
            },
            "<+0.15",
          );

          if (index !== validSlides.length - 1) {
            const nextSlide = validSlides[index + 1];
            const nextImageWrap = nextSlide.querySelector(
              ".achievement-image-wrap",
            );

            tl.to(slide, {
              rotateY: -84,
              xPercent: -20,
              opacity: 0.14,
              duration: 1.1,
              ease: "power2.inOut",
            });

            tl.set(
              nextSlide,
              {
                opacity: 1,
              },
              "<+0.12",
            );

            if (nextImageWrap) {
              tl.fromTo(
                nextImageWrap,
                {
                  opacity: 0,
                  scale: 0.88,
                  y: 55,
                },
                {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
                },
                "<+0.1",
              );
            }
          }
        });

        const closedSlides = [...validSlides].reverse();

        tl.to(
          closedSlides,
          {
            rotateY: 84,
            xPercent: 16,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power2.inOut",
          },
          ">",
        );

        tl.to(
          finalIntro,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<+0.25",
        );

        tl.to(finalIntro, {
          opacity: 0,
          y: -40,
          duration: 1,
          ease: "power2.out",
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray<HTMLElement>(
          ".achievement-mobile-card",
        );

        gsap.from(".achievement-mobile-intro", {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        items.forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 60,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative w-full bg-[#f6f1ea] overflow-hidden"
    >
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative h-screen w-full [perspective:2000px]">
          <div
            ref={introRef}
            className="absolute inset-0 z-[60] flex flex-col items-center justify-center px-6 text-center"
          >
            <h2
              ref={introTitleRef}
              className="max-w-5xl text-5xl lg:text-7xl font-semibold tracking-tight text-[#3f2d25]"
            >
              Kompaniya Yutuqlari
            </h2>

            <p
              ref={introSubtitleRef}
              className="mt-6 max-w-2xl text-lg lg:text-2xl leading-relaxed text-[#6f5b51]"
            >
              Ishonch, tajriba va estetik yondashuv birlashgan yo‘limizdan
              lavhalar.
            </p>
          </div>

          <div className="absolute inset-0">
            {achievements.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  slidesRef.current[index] = el;
                }}
                className="absolute inset-0 flex items-center justify-center px-8 lg:px-16"
              >
                <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
                  <div className="achievement-image-wrap absolute left-1/2 top-1/2 w-[38vw] max-w-[620px] min-w-[360px] -translate-x-1/2 -translate-y-1/2">
                    <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(63,45,37,0.12)]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="achievement-image h-[66vh] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="achievement-content absolute left-1/2 top-[68%] w-full max-w-3xl -translate-x-1/2 text-center">
                    <div className="mx-auto max-w-2xl rounded-[2rem] bg-white/75 px-8 py-7 backdrop-blur-md shadow-[0_10px_40px_rgba(63,45,37,0.08)]">
                      <div className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-[#9c8576]">
                        {String(item.id).padStart(2, "0")}
                      </div>

                      <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight text-[#3f2d25]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base lg:text-lg leading-8 text-[#6f5b51]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={finalIntroRef}
            className="absolute inset-0 z-[80] flex flex-col items-center justify-center px-6 text-center"
          >
            <h2 className="max-w-5xl text-5xl lg:text-7xl font-semibold tracking-tight text-[#3f2d25]">
              Kompaniya Yutuqlari
            </h2>

            <p className="mt-6 max-w-2xl text-lg lg:text-2xl leading-relaxed text-[#6f5b51]">
              Har bir bosqich ortida tajriba, did va ishonch turadi.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-5 py-20">
        <div className="achievement-mobile-intro mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#3f2d25]">
            Kompaniya Yutuqlari
          </h2>

          <p className="mt-4 text-base leading-7 text-[#6f5b51]">
            Ishonch, tajriba va estetik yondashuv birlashgan yo‘limizdan
            lavhalar.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="achievement-mobile-card overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_50px_rgba(63,45,37,0.08)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
              />

              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-[0.28em] text-[#9c8576]">
                  {String(item.id).padStart(2, "0")}
                </div>

                <h3 className="mt-3 text-2xl font-semibold text-[#3f2d25]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6f5b51]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
