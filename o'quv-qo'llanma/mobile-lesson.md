# To'liq yangilangan Arxitektura (Papka va Filelar joylashuvi) 
```
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    shared/
      auth/
        AuthModal.tsx
        AuthModalProvider.tsx
        AuthTriggerButton.tsx

      responsive/
        ResponsivePage.tsx
        breakpoints.ts
        device-config.ts
        use-device-mode.ts

      ui/
      hooks/
      utils/

    home/
      desktop/
        Hero/
          hero-section.tsx
        Navbar/
          navbar.tsx
        Footer/
          footer.tsx

      mobile/
        index.tsx
        mobile-hero.tsx
        mobile-topbar.tsx
        mobile-bottom-nav.tsx

    about/
      desktop/
        index.tsx
      mobile/
        index.tsx
        mobile-about-story.tsx

    product/
      shared/
        product.types.ts
        products-data.ts

      desktop/
        index.tsx
        product-actions.tsx
        product-colors.tsx
        product-guest-callout.tsx
        product-info.tsx
        product-media.tsx
        product-slide.tsx
        products-scene.tsx
        useProductsScroll.ts

      mobile/
        index.tsx
        mobile-product-shell.tsx
        mobile-product-card.tsx
        mobile-product-media.tsx
        mobile-product-info.tsx
        mobile-product-actions.tsx
        mobile-product-guest-callout.tsx
        useMobileProductsScroll.ts

    achievements/
      desktop/
        AchievementsSection.tsx
      mobile/
        index.tsx
        mobile-achievement-card.tsx
        mobile-achievements-shell.tsx

    sections/
      desktop-page.tsx
      mobile-page.tsx

config/
  design-system/
    colors.ts
    spacing.ts
    typography.ts
    motion.ts

  mobile-system/
    breakpoints.ts
    mobile-layout.ts
    mobile-spacing.ts
    mobile-typography.ts
    mobile-navbar.ts
    mobile-sections.ts
    mobile-motion.ts
```

"Bu mobile lesson.md ichida faqat mobile versia code structuralar yoziladi"

# home/mobile/index.tsx

```
import MobileHero from "./mobile-hero";

export default function MobileHomeSection() {
  return <MobileHero />;
}
```

# home/mobile/mobile-bottom-nav.tsx

```
"use client";

import { mobileHero } from "@/config/mobile-system/mobile-hero";
import { mobileNavbar } from "@/config/mobile-system/mobile-navbar";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";

const navItems = [
  { label: "Bosh sahifa", href: "#home-mobile" },
  { label: "About", href: "#about" },
  { label: "Mahsulot", href: "#products" },
  { label: "Yutuqlar", href: "#achievements" },
];

type MobileBottomNavProps = {
  bottomNavRef?: React.RefObject<HTMLDivElement | null>;
};

export default function MobileBottomNav({ bottomNavRef }: MobileBottomNavProps) {
  return (
    <div
      ref={bottomNavRef}
      className="fixed left-1/2 z-40 w-full -translate-x-1/2"
      style={{
        maxWidth: "480px",
        bottom: mobileSpacing.bottomNavY,
        paddingInline: mobileSpacing.bottomNavX,
      }}
    >
      <nav
        className="grid grid-cols-4 items-center"
        style={{
          minHeight: mobileNavbar.bottomHeight,
          borderRadius: mobileNavbar.bottomRadius,
          backgroundColor: mobileHero.bottomNavBackground,
          backdropFilter: `blur(${mobileNavbar.bottomBlur})`,
          boxShadow: mobileHero.navShadow,
          paddingInline: mobileSpacing.bottomNavInnerX,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex h-full items-center justify-center text-center"
            style={{
              color: mobileHero.bottomNavTextColor,
              fontSize: mobileTypography.nav.label,
              fontWeight: mobileTypography.nav.weight,
              lineHeight: mobileTypography.nav.lineHeight,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
```

# home/mobile/mobile-footer.tsx

```
"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";

export default function MobileFooter() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-end justify-center bg-[#f5f1f3] px-5"
      style={{
        paddingBottom: "120px",
        paddingTop: "80px",
      }}
    >
      <div className="w-full max-w-[380px] rounded-[32px] border border-[#efbfd8] bg-white px-6 py-10 text-center shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8c6772]">
          Azizam Market
        </p>

        <h2 className="mt-4 text-[42px] font-bold leading-none tracking-[-0.04em] text-[#cf2f8f]">
          Siz Azizsiz
        </h2>

        <p className="mx-auto mt-5 max-w-[280px] text-[15px] leading-6 text-[#6f4d57]">
          Go‘zallik, e’tibor va mehr uyg‘unlashgan joyga xush kelibsiz.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <AuthTriggerButton
            mode="login"
            className="rounded-full bg-[#cf2f8f] px-6 py-3 text-sm font-semibold text-white"
          >
            Kirish
          </AuthTriggerButton>

          <a
            href="#home-mobile"
            className="rounded-full border border-[#cf2f8f] px-6 py-3 text-sm font-semibold text-[#cf2f8f]"
          >
            Boshiga qaytish
          </a>
        </div>
      </div>
    </section>
  );
}
```

# home/mobile/mobile-hero.tsx

```
"use client";

import { useRef } from "react";
import { mobileHero } from "@/config/mobile-system/mobile-hero";
import { mobileLayout } from "@/config/mobile-system/mobile-layout";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";
import MobileBottomNav from "./mobile-bottom-nav";
import MobileTopbar from "./mobile-topbar";
import useMobileHeroMotion from "../../shared/hooks/use-mobile-hero-motion";

export default function MobileHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const bgRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const topbarRef = useRef<HTMLDivElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);
  const azizamRef = useRef<HTMLHeadingElement | null>(null);
  const marketRef = useRef<HTMLHeadingElement | null>(null);
  const bottomNavRef = useRef<HTMLDivElement | null>(null);

 useMobileHeroMotion({
  sectionRef,
  stageRef,
  bgRef,
  overlayRef,
  titleWrapRef,
  azizamRef,
  marketRef,
});

  return (
    <section
      id="home-mobile"
      ref={sectionRef}
      className="relative w-full"
      style={{
        minHeight: `calc(${mobileLayout.heroMinHeight} + ${mobileLayout.heroScrollRunway})`,
        backgroundColor: "#000",
      }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 overflow-hidden"
        style={{
          height: mobileLayout.heroViewportHeight,
          minHeight: mobileLayout.heroMinHeight,
          backgroundColor: "#000",
        }}
      >
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${mobileHero.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        />

        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            backgroundColor: mobileHero.overlayColor,
            opacity: 1,
          }}
        />

        <MobileTopbar topbarRef={topbarRef} />

        <div
          className="relative z-20 mx-auto h-full w-full"
          style={{
            maxWidth: mobileLayout.heroContentMaxWidth,
            paddingInline: mobileSpacing.pageX,
            paddingBottom: mobileSpacing.heroBottomSafeSpace,
          }}
        >
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
            <div
              ref={titleWrapRef}
              className="mx-auto w-full"
              style={{
                width: mobileLayout.heroTitleMaxWidth,
                maxWidth: mobileLayout.heroTitleMaxWidth,
                transform: `translateY(${mobileSpacing.heroTitleOffsetY})`,
                willChange: "transform, opacity",
              }}
            >
              <h1
                ref={azizamRef}
                className="text-left"
                style={{
                  color: mobileHero.titleColor,
                  fontSize: mobileTypography.hero.title,
                  lineHeight: mobileTypography.hero.lineHeight,
                  letterSpacing: mobileTypography.hero.letterSpacing,
                  fontWeight: mobileTypography.hero.weight,
                  whiteSpace: "nowrap",
                  margin: 0,
                }}
              >
                Azizam
              </h1>

              <h1
                ref={marketRef}
                className="text-right"
                style={{
                  color: mobileHero.titleColor,
                  fontSize: mobileTypography.hero.title,
                  lineHeight: mobileTypography.hero.lineHeight,
                  letterSpacing: mobileTypography.hero.letterSpacing,
                  fontWeight: mobileTypography.hero.weight,
                  whiteSpace: "nowrap",
                  margin: 0,
                  marginTop: "6px",
                }}
              >
                Market
              </h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
```

# home/mobile/mobile-topbar.tsx

```
"use client";

import type { ReactNode, RefObject } from "react";
import Image from "next/image";
import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";
import useMobileCollapsedNav from "../../shared/hooks/use-mobile-collapsed-nav";
import { mobileNavbar } from "@/config/mobile-system/mobile-navbar";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileHero } from "@/config/mobile-system/mobile-hero";

type MobileTopbarProps = {
  topbarRef?: RefObject<HTMLDivElement | null>;
};

function CircleShell({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: mobileNavbar.topIconSize,
        height: mobileNavbar.topIconSize,
        borderRadius: "9999px",
        backgroundColor: mobileHero.topIconOuterBackground,
        boxShadow: mobileHero.softShadow,
        flexShrink: 0,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: mobileNavbar.topIconInnerSize,
          height: mobileNavbar.topIconInnerSize,
          borderRadius: "9999px",
          backgroundColor: mobileHero.topIconInnerBackground,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function MobileTopbar({ topbarRef }: MobileTopbarProps) {
  const isCollapsed = useMobileCollapsedNav(110);

  return (
    <div
      ref={topbarRef}
      className="fixed z-40 flex flex-col transition-all duration-300"
      style={{
        top: mobileSpacing.topbarTop,
        left: mobileSpacing.topbarLeft,
        gap: mobileNavbar.topIconGap,
        opacity: isCollapsed ? 0 : 1,
        pointerEvents: isCollapsed ? "none" : "auto",
        transform: isCollapsed ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <CircleShell>
        <Image
          src="/logo.png"
          alt="Azizam Market"
          width={34}
          height={34}
          priority
        />
      </CircleShell>

      <AuthTriggerButton
        mode="login"
        className="block"
        style={{
          padding: 0,
          border: "none",
          background: "transparent",
        }}
      >
        <CircleShell>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
              fill="#D74BAA"
            />
            <path
              d="M4 20C4.92575 16.5539 8.07838 14 12 14C15.9216 14 19.0742 16.5539 20 20"
              fill="#D74BAA"
            />
          </svg>
        </CircleShell>
      </AuthTriggerButton>
    </div>
  );
}
```

# about/mobile/index.tsx

```
import MobileAboutStory from "./mobile-about-story";

export default function MobileAboutSection() {
  return <MobileAboutStory />;
}
```

# about/mobile/mobile-about-story.tsx

```
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
  const stickyRef = useRef<HTMLDivElement | null>(null);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const infoTitleRef = useRef<HTMLHeadingElement | null>(null);
  const textsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const title = titleRef.current;
    const imageWrap = imageWrapRef.current;
    const infoTitle = infoTitleRef.current;

    if (!section || !sticky || !title || !imageWrap || !infoTitle) return;

    const ctx = gsap.context(() => {
      gsap.set(title, {
        autoAlpha: 0,
        y: mobileMotion.about.titleY,
        scale: 1.02,
      });

      gsap.set(imageWrap, {
        autoAlpha: 0,
        y: mobileMotion.about.imageY,
        scale: mobileMotion.about.imageScaleFrom,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.set(infoTitle, {
        autoAlpha: 0,
        y: mobileMotion.about.textY,
      });

      gsap.set(textsRef.current, {
        autoAlpha: 0,
        y: mobileMotion.about.textY,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1600",
          scrub: mobileMotion.about.scrub,
          pin: sticky,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(title, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        ease: "power2.out",
      });

      tl.to(title, {
        autoAlpha: 0,
        y: -20,
        duration: 0.35,
        ease: "power2.out",
      });

      tl.to(
        imageWrap,
        {
          autoAlpha: 1,
          y: 0,
          scale: mobileMotion.about.imageScaleTo,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.55,
          ease: "power2.out",
        },
        ">-0.05",
      );

      tl.to(imageWrap, {
        y: mobileSections.about.imageShiftY,
        duration: 0.55,
        ease: "power2.inOut",
      });

      tl.to(
        infoTitle,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "<+0.05",
      );

      textsRef.current.forEach((textEl) => {
        if (!textEl) return;

        tl.to(textEl, {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(textEl, {
          autoAlpha: 0,
          y: -14,
          duration: 0.24,
          ease: "power1.out",
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
      <div
        ref={stickyRef}
        className="relative h-[100svh] w-full overflow-hidden"
      >
        <div
          className="relative mx-auto h-full w-full"
          style={{
            maxWidth: "420px",
            paddingInline: mobileSpacing.pageX,
          }}
        >
          <h2
            ref={titleRef}
            className="absolute top-1/2 z-20 w-full text-center font-bold"
            style={{
              left: 0,
              transform: `translateY(calc(-50% - ${mobileSections.about.titleTopOffset}))`,
              color: colors.brand.primaryStrong,
              fontSize: "clamp(32px, 8vw, 48px)",
              lineHeight: 0.96,
              letterSpacing: "-0.04em",
            }}
          >
            Biz Haqimizda
          </h2>

          <div
            className="absolute left-1/2 top-1/2 z-10 w-full"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="mx-auto flex w-full flex-col items-center"
              style={{
                maxWidth: "420px",
              }}
            >
              <div
                ref={imageWrapRef}
                className="overflow-hidden bg-white"
                style={{
                  width: "100%",
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
                  className="block w-full object-cover"
                  sizes="(max-width: 480px) 84vw, 350px"
                  style={{
                    height: mobileSections.about.imageHeight,
                  }}
                />
              </div>

              <div
                className="w-full text-center"
                style={{
                  maxWidth: mobileSections.about.contentMaxWidth,
                  marginTop: mobileSections.about.infoGap,
                }}
              >
                <h3
                  ref={infoTitleRef}
                  className="font-semibold"
                  style={{
                    color: colors.brand.primaryStrong,
                    fontSize: "clamp(26px, 6.8vw, 34px)",
                    lineHeight: 1.03,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Azizam Market
                </h3>

                <div className="relative mt-4 min-h-[84px]">
                  {aboutTexts.map((text, index) => (
                    <p
                      key={index}
                      ref={(el) => {
                        textsRef.current[index] = el;
                      }}
                      className="absolute left-0 top-0 w-full text-[15px] leading-7"
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
        </div>
      </div>
    </section>
  );
}
```



# product/mobile/index.tsx

```
"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import { productsData } from "../shared/products-data";
import MobileProductShell from "./mobile-product-shell";
import useMobileProductsScroll from "../../shared/hooks/useMobileProductsScroll";

const mobileProducts = productsData.map((product) => ({
  id: Number(product.id),
  title: product.name,
  eyebrow: product.subtitle ?? "",
  promo: product.badge,
  description: product.description,
  image: product.media.src,
  imageAlt: product.media.alt ?? product.name,
  theme: product.theme,
}));

export default function MobileProductSection() {
  const scrollState = useMobileProductsScroll({
    sectionId: "products",
    totalItems: mobileProducts.length,
  });

  const titleOpacity = 1 - scrollState.titleFadeProgress;
  const titleTranslateY = scrollState.titleFadeProgress * -26;
  const titleScale = 1 - scrollState.titleFadeProgress * 0.04;

  return (
    <section
      id="products"
      className="relative w-full overflow-clip bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.product.minHeight,
      }}
    >
      <div
        className="sticky top-0 flex w-full items-center justify-center overflow-hidden px-3"
        style={{
          height: mobileSections.product.stickyHeight,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center"
          style={{
            opacity: titleOpacity,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: mobileSections.product.frameMaxWidth,
              transform: `translateY(${titleTranslateY}px) scale(${titleScale})`,
              transformOrigin: "center center",
            }}
          >
            <h2 className="text-[clamp(34px,10vw,50px)] font-bold leading-none tracking-[-0.05em] text-[#cf2f8f]">
              Maxsulotlar
            </h2>
          </div>
        </div>

        <MobileProductShell
          products={mobileProducts}
          floatingIndex={scrollState.floatingIndex}
          activeIndex={scrollState.activeIndex}
          cardsProgress={scrollState.cardsProgress}
          cardsRevealProgress={scrollState.cardsRevealProgress}
          isAuthenticated={false}
        />
      </div>
    </section>
  );
}

```

# product/mobile/mobile-product-actions.tsx

```
"use client";

type MobileProductActionsProps = {
  price?: string;
  accentColor: string;
  textColor: string;
  mutedColor: string;
  borderColor: string;
  backgroundColor: string;
  dark?: boolean;
};

export default function MobileProductActions({
  price,
  accentColor,
  textColor,
  mutedColor,
  borderColor,
  backgroundColor,
  dark = false,
}: MobileProductActionsProps) {
  return (
    <div
      className="mt-5 rounded-[24px] border shadow-[0_10px_26px_rgba(0,0,0,0.08)]"
      style={{
        paddingInline: "16px",
        paddingBlock: "16px",
        background: backgroundColor,
        borderColor,
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="text-[13px] font-medium"
            style={{ color: mutedColor }}
          >
            Narx
          </p>

          <p
            className="mt-1 text-[clamp(24px,6vw,30px)] font-bold leading-none"
            style={{ color: textColor }}
          >
            {price ?? "Narx mavjud emas"}
          </p>
        </div>

        <button
          type="button"
          className="rounded-full px-5 py-3 text-[15px] font-semibold"
          style={{
            background: accentColor,
            color: dark ? "#111" : "#fff",
          }}
        >
          Sotib olish
        </button>
      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-full border px-5 py-3 text-[15px] font-semibold transition-opacity hover:opacity-90"
        style={{
          borderColor,
          color: textColor,
          background: "transparent",
        }}
      >
        Savatga qo'shish
      </button>
    </div>
  );
}
```

# product/mobile/mobile-product-card.tsx

```
import { mobileMotion } from "@/config/mobile-system/mobile-motion";
import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileProductGuestCallout from "./mobile-product-guest-callout";
import MobileProductInfo from "./mobile-product-info";
import MobileProductMedia from "./mobile-product-media";
import MobileProductActions from "./mobile-product-actions";

type ProductTheme = {
  bg: string;
  text: string;
  accent: string;
  muted?: string;
  card?: string;
  tone?: "light" | "dark";
};

export type MobileProductItem = {
  id: number;
  title: string;
  eyebrow: string;
  promo?: string;
  description: string;
  image: string;
  imageAlt?: string;
  theme: ProductTheme;
  price?: string;
};

type MobileProductCardProps = {
  product: MobileProductItem;
  index: number;
  floatingIndex: number;
  activeIndex: number;
  cardsProgress: number;
  cardsRevealProgress: number;
  isAuthenticated?: boolean;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function MobileProductCard({
  product,
  index,
  floatingIndex,
  activeIndex,
  cardsProgress,
  cardsRevealProgress,
  isAuthenticated = false,
}: MobileProductCardProps) {
  const distance = index - floatingIndex;
  const limitedDistance = clamp(distance, -1.2, 2.4);

  const isFront = Math.abs(distance) < 0.55 || index === activeIndex;
  const passedCard = distance < -0.55;

  const revealLift = (1 - cardsRevealProgress) * mobileMotion.product.introOffsetY;
  const revealScale =
    mobileMotion.product.introScaleFrom +
    (1 - mobileMotion.product.introScaleFrom) * cardsRevealProgress;

  const translateY = passedCard
    ? -mobileMotion.product.exitLift * clamp(Math.abs(distance), 0, 1)
    : limitedDistance * mobileMotion.product.stackOffsetY +
      Math.max(limitedDistance, 0) * 16 +
      revealLift;

  const scale = passedCard
    ? 0.91
    : (1 - Math.max(limitedDistance, 0) * mobileMotion.product.stackScaleStep) *
      revealScale;

  const opacityBase = passedCard
    ? Math.max(0, 1 - Math.abs(distance) * 1.8)
    : clamp(
        1 - Math.max(limitedDistance, 0) * 0.22,
        mobileMotion.product.inactiveOpacity,
        1,
      );

  const opacity = opacityBase * cardsRevealProgress;
  const blur = passedCard ? 5 : Math.max(0, limitedDistance) * 1.15;
  const zIndex = 100 - Math.round(Math.max(limitedDistance, 0) * 10);

  const isDark = product.theme.tone === "dark";

  const outerColor = isDark ? "#1f1f1f" : "#7b001d";
  const topColor = isDark ? "#2b2b2b" : "#b61d52";
  const bottomColor = product.theme.card ?? (isDark ? "#191919" : "#f3dbe5");
  const borderColor = product.theme.accent;
  const textColor = product.theme.text;
  const subtextColor = product.theme.muted ?? product.theme.text;

  return (
    <article
      className="absolute left-1/2 top-1/2 w-full overflow-hidden transition-transform duration-200 ease-out"
      style={{
        width: mobileSections.product.cardMaxWidth,
        minHeight: mobileSections.product.cardMinHeight,
        borderRadius: mobileSections.product.cardRadius,
        transform: `translate(-50%, calc(-50% + ${translateY}px)) scale(${scale})`,
        opacity,
        filter: `blur(${blur}px)`,
        zIndex,
        pointerEvents: isFront ? "auto" : "none",
        background: outerColor,
        border: `1px solid ${borderColor}`,
        boxShadow: isFront
          ? "0 22px 54px rgba(71, 10, 30, 0.22)"
          : "0 12px 28px rgba(71, 10, 30, 0.12)",
      }}
    >
      <div className="p-[clamp(14px,4vw,18px)]">
        <div
          className="overflow-hidden"
          style={{
            borderRadius: mobileSections.product.cardRadius,
            background: bottomColor,
          }}
        >
          <div
            className="px-[clamp(14px,4vw,18px)] pt-[clamp(14px,4vw,18px)]"
            style={{ background: topColor }}
          >
            <MobileProductMedia
              image={product.image}
              title={product.imageAlt ?? product.title}
            />
          </div>

          <div
            className="px-[clamp(18px,4.8vw,22px)] pb-[clamp(18px,4.8vw,22px)] pt-[clamp(18px,4.8vw,24px)]"
            style={{
              marginTop: "-2px",
              background: bottomColor,
            }}
          >
            <MobileProductInfo
              title={product.title}
              eyebrow={product.eyebrow}
              promo={product.promo}
              description={product.description}
              textColor={textColor}
              subtextColor={subtextColor}
              accentColor={product.theme.accent}
            />

            {isAuthenticated ? (
              <MobileProductActions
                price={product.price}
                accentColor={product.theme.accent}
                textColor={textColor}
                mutedColor={subtextColor}
                borderColor={borderColor}
                backgroundColor={isDark ? "#222222" : "#f8edf2"}
                dark={isDark}
              />
            ) : (
              <MobileProductGuestCallout
                compact={!isFront && cardsProgress < 0.98}
                accentColor={product.theme.accent}
                textColor={textColor}
                borderColor={borderColor}
                backgroundColor={isDark ? "#222222" : "#f8edf2"}
                mutedColor={subtextColor}
                dark={isDark}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
```

# product/mobile/mobile-product-guest-callout.tsx

```
"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";

type MobileProductGuestCalloutProps = {
  compact?: boolean;
  accentColor: string;
  textColor: string;
  mutedColor: string;
  borderColor: string;
  backgroundColor: string;
  dark?: boolean;
};

export default function MobileProductGuestCallout({
  compact = false,
  accentColor,
  textColor,
  mutedColor,
  borderColor,
  backgroundColor,
  dark = false,
}: MobileProductGuestCalloutProps) {
  return (
    <div
      className="mt-5 rounded-[24px] border shadow-[0_10px_26px_rgba(0,0,0,0.08)]"
      style={{
        paddingInline: compact ? "14px" : "16px",
        paddingBlock: compact ? "14px" : "16px",
        background: backgroundColor,
        borderColor,
      }}
    >
      <p
        className="text-[clamp(14px,3.8vw,16px)] font-semibold leading-[1.35]"
        style={{ color: textColor }}
      >
        To‘liq imkoniyatlar uchun tizimga kiring
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(13px,3.7vw,15px)]">
        <AuthTriggerButton
          mode="register"
          className="font-semibold underline underline-offset-4"
          style={{ color: accentColor }}
        >
          Ro‘yxatdan o‘ting
        </AuthTriggerButton>

        <span style={{ color: mutedColor }}>yoki</span>

        <AuthTriggerButton
          mode="login"
          className="rounded-full px-4 py-2 font-semibold"
          style={{
            background: accentColor,
            color: dark ? "#111" : "#fff",
          }}
        >
          Kirish
        </AuthTriggerButton>
      </div>
    </div>
  );
}
```

# product/mobile/mobile-product-info.tsx

```
type MobileProductInfoProps = {
  title: string;
  eyebrow: string;
  promo?: string;
  description: string;
  textColor: string;
  subtextColor: string;
  accentColor: string;
};

export default function MobileProductInfo({
  title,
  eyebrow,
  promo,
  description,
  textColor,
  subtextColor,
  accentColor,
}: MobileProductInfoProps) {
  return (
    <div className="space-y-3 text-left">
      <h3
        className="text-[clamp(28px,8vw,40px)] font-semibold leading-[0.96] tracking-[-0.045em]"
        style={{ color: textColor }}
      >
        {title}
      </h3>

      {eyebrow ? (
        <p
          className="text-[clamp(14px,4vw,18px)] font-medium leading-[1.25]"
          style={{ color: subtextColor }}
        >
          {eyebrow}
        </p>
      ) : null}

      {promo ? (
        <p
          className="text-[clamp(12px,3.6vw,14px)] font-semibold tracking-[0.01em]"
          style={{ color: accentColor }}
        >
          {promo}
        </p>
      ) : null}

      <p
        className="max-w-[30ch] text-[clamp(15px,4.2vw,18px)] leading-[1.45]"
        style={{ color: textColor }}
      >
        {description}
      </p>
    </div>
  );
}
```

# product/mobile/mobile-product-media.tsx

```
import Image from "next/image";

type MobileProductMediaProps = {
  image: string;
  title: string;
};

export default function MobileProductMedia({
  image,
  title,
}: MobileProductMediaProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[#f8f1f4]">
      <Image
        src={image}
        alt={title}
        width={640}
        height={520}
        className="h-[clamp(236px,33svh,310px)] w-full object-cover object-center"
        priority={false}
      />
    </div>
  );
}
```

# product/mobile/mobile-product-shell.tsx

```
import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileProductCard, { type MobileProductItem } from "./mobile-product-card";

type MobileProductShellProps = {
  products: MobileProductItem[];
  floatingIndex: number;
  activeIndex: number;
  cardsProgress: number;
  cardsRevealProgress: number;
  isAuthenticated?: boolean;
};

export default function MobileProductShell({
  products,
  floatingIndex,
  activeIndex,
  cardsProgress,
  cardsRevealProgress,
  isAuthenticated = false,
}: MobileProductShellProps) {
  return (
    <div
      className="relative mx-auto w-full"
      style={{
        maxWidth: mobileSections.product.frameMaxWidth,
        height: "100svh",
      }}
    >
      {products.map((product, index) => (
        <MobileProductCard
          key={product.id}
          product={product}
          index={index}
          floatingIndex={floatingIndex}
          activeIndex={activeIndex}
          cardsProgress={cardsProgress}
          cardsRevealProgress={cardsRevealProgress}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  );
}
```

# commponent/shared/hooks/useMobileProductsScroll.ts

```
"use client";

import { useEffect, useMemo, useState } from "react";
import { mobileMotion } from "@/config/mobile-system/mobile-motion";

type UseMobileProductsScrollOptions = {
  sectionId: string;
  totalItems: number;
};

type MobileProductsScrollState = {
  sectionProgress: number;
  titleHoldProgress: number;
  titleFadeProgress: number;
  cardsRevealProgress: number;
  cardsProgress: number;
  floatingIndex: number;
  activeIndex: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function rangeProgress(value: number, start: number, end: number) {
  if (end <= start) return value >= end ? 1 : 0;
  return clamp((value - start) / (end - start), 0, 1);
}

export default function useMobileProductsScroll({
  sectionId,
  totalItems,
}: UseMobileProductsScrollOptions): MobileProductsScrollState {
  const [sectionProgress, setSectionProgress] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const totalScrollable = Math.max(rect.height - window.innerHeight, 1);
      const passed = clamp(-rect.top, 0, totalScrollable);
      setSectionProgress(passed / totalScrollable);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionId]);

  return useMemo(() => {
    const titleHoldProgress = rangeProgress(
      sectionProgress,
      mobileMotion.product.titleOnlyStart,
      mobileMotion.product.titleOnlyEnd,
    );

    const titleFadeProgress = rangeProgress(
      sectionProgress,
      mobileMotion.product.titleFadeStart,
      mobileMotion.product.titleFadeEnd,
    );

    const cardsRevealProgress = rangeProgress(
      sectionProgress,
      mobileMotion.product.cardsRevealStart,
      mobileMotion.product.cardsRevealEnd,
    );

    const cardsProgress = rangeProgress(
      sectionProgress,
      mobileMotion.product.cardsStart,
      mobileMotion.product.cardsEnd,
    );

    const maxIndex = Math.max(totalItems - 1, 0);
    const floatingIndex = cardsProgress * maxIndex;
    const activeIndex = clamp(Math.round(floatingIndex), 0, maxIndex);

    return {
      sectionProgress,
      titleHoldProgress,
      titleFadeProgress,
      cardsRevealProgress,
      cardsProgress,
      floatingIndex,
      activeIndex,
    };
  }, [sectionProgress, totalItems]);
}
```

# product/shared/product.types.ts

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

# product/shared/products-data.ts

```
import { Product } from "./product.types"
import { colors } from "@/config/design-system"

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
      bg: colors.background.dark,
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

# AchievementsSection/mobile/index.tsx

```
"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileAchievementsShell from "./mobile-achievements-shell";
import useMobileAchievementsScroll from "./useMobileAchievementsScroll";

const mobileAchievements = [
  {
    id: 1,
    name: "Azizam Team",
    role: "Ishonch",
    description:
      "Bizning kuchimiz mahsulotning o‘zida emas, unga qo‘shilgan samimiyat va e’tiborda.",
    image: "/achievement-1.png",
  },
  {
    id: 2,
    name: "Go‘zallik",
    role: "Nafosat",
    description:
      "Har bir tanlovda nozik did, yengillik va qadrlash hissi sezilib turadi.",
    image: "/achievement-2.png",
  },
  {
    id: 3,
    name: "Mehr",
    role: "Qadriyat",
    description:
      "Azizam Market inson o‘zini aziz his qiladigan tajribani yaratishga intiladi.",
    image: "/achievement-3.png",
  },
];

export default function MobileAchievementsSection() {
  const activeIndex = useMobileAchievementsScroll({
    sectionId: "achievements",
    totalItems: mobileAchievements.length,
  });

  return (
    <section
      id="achievements"
      className="relative w-full bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.achievements.minHeight,
      }}
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden px-4">
        <div className="absolute left-1/2 top-[12vh] z-30 w-full max-w-[360px] -translate-x-1/2 text-center">
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[#cf2f8f]">
            Yutuqlar
          </h2>
        </div>

        <MobileAchievementsShell
          items={mobileAchievements}
          activeIndex={activeIndex}
        />
      </div>
    </section>
  );
}
```

# AchievementsSection/mobile/mobile-achievement-card.tsx

```
import Image from "next/image";

export type MobileAchievementItem = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

type MobileAchievementCardProps = {
  item: MobileAchievementItem;
  isActive?: boolean;
};

export default function MobileAchievementCard({
  item,
  isActive = false,
}: MobileAchievementCardProps) {
  return (
    <article
      className={`absolute left-1/2 top-1/2 w-full max-w-[360px] -translate-x-1/2 rounded-[28px] border border-[#efbfd8] bg-white p-4 shadow-lg transition-all duration-500 ${
        isActive ? "z-20 opacity-100" : "z-10 opacity-0"
      }`}
      style={{
        transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.92})`,
      }}
    >
      <div className="overflow-hidden rounded-[24px] bg-[#f8f1f4]">
        <Image
          src={item.image}
          alt={item.name}
          width={500}
          height={650}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="pt-5 text-center">
        <h3 className="text-[34px] font-bold leading-none tracking-[-0.03em] text-[#cf2f8f]">
          {item.name}
        </h3>

        <p className="mt-2 text-sm font-medium uppercase tracking-[0.08em] text-[#8c6772]">
          {item.role}
        </p>

        <p className="mx-auto mt-4 max-w-[280px] text-[15px] leading-6 text-[#6f4d57]">
          {item.description}
        </p>
      </div>
    </article>
  );
}
```

# AchievementsSection/mobile/mobile-achievements-shell.tsx

```
import MobileAchievementCard, {
  type MobileAchievementItem,
} from "./mobile-achievement-card";

type MobileAchievementsShellProps = {
  items: MobileAchievementItem[];
  activeIndex: number;
};

export default function MobileAchievementsShell({
  items,
  activeIndex,
}: MobileAchievementsShellProps) {
  return (
    <div className="relative mx-auto h-[100svh] w-full max-w-[380px]">
      {items.map((item, index) => (
        <MobileAchievementCard
          key={item.id}
          item={item}
          isActive={index === activeIndex}
        />
      ))}
    </div>
  );
}
```

# AchievementsSection/mobile/useMobileAchievementsScroll.ts

```
"use client";

import { useEffect, useState } from "react";

type UseMobileAchievementsScrollOptions = {
  sectionId: string;
  totalItems: number;
};

export default function useMobileAchievementsScroll({
  sectionId,
  totalItems,
}: UseMobileAchievementsScrollOptions) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = total > 0 ? passed / total : 0;

      const index = Math.min(
        totalItems - 1,
        Math.floor(progress * totalItems),
      );

      setActiveIndex(index);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionId, totalItems]);

  return activeIndex;
}
```

# sections/mobile-page.tsx

```
import MobileAboutSection from "../about/mobile";
import MobileAchievementsSection from "../AchievementsSection/mobile";
import MobileHomeSection from "../home/mobile";
import MobileFooter from "../home/mobile/mobile-footer";
import MobileBottomNav from "../home/mobile/mobile-bottom-nav";
import MobileProductSection from "../product/mobile";
import MobileTopbar from "../home/mobile/mobile-topbar";

export default function MobilePage() {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <MobileTopbar />
      <MobileBottomNav />
      <div>
        <MobileHomeSection />
        <MobileAboutSection />
        <MobileProductSection />
        <MobileAchievementsSection />
        <MobileFooter />
      </div>
    </main>
  );
}
```

# shared/hooks/use-mobile-hero-motion.ts

```
"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mobileMotion } from "@/config/mobile-system/mobile-motion";

gsap.registerPlugin(ScrollTrigger);

type UseMobileHeroMotionParams = {
  sectionRef: RefObject<HTMLElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  bgRef: RefObject<HTMLDivElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  titleWrapRef: RefObject<HTMLDivElement | null>;
  azizamRef: RefObject<HTMLHeadingElement | null>;
  marketRef: RefObject<HTMLHeadingElement | null>;
};

export default function useMobileHeroMotion({
  sectionRef,
  stageRef,
  bgRef,
  overlayRef,
  titleWrapRef,
  azizamRef,
  marketRef,
}: UseMobileHeroMotionParams) {
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const bg = bgRef.current;
    const overlay = overlayRef.current;
    const titleWrap = titleWrapRef.current;
    const azizam = azizamRef.current;
    const market = marketRef.current;

    if (!section || !stage || !bg || !overlay || !titleWrap || !azizam || !market) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bg, {
        scale: 1.01,
        transformOrigin: "center center",
      });

      gsap.set(titleWrap, {
        autoAlpha: 0,
        y: mobileMotion.hero.titleIntroY,
        scale: 0.99,
      });

      gsap.to(titleWrap, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: mobileMotion.hero.introDuration,
        ease: mobileMotion.hero.introEase,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${mobileMotion.hero.scrollDistance}`,
          scrub: mobileMotion.hero.scrub,
          pin: stage,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        bg,
        {
          scale: mobileMotion.hero.backgroundScaleTo,
          ease: "none",
        },
        0,
      )
        .to(
          overlay,
          {
            opacity: 0.72,
            ease: "none",
          },
          0,
        )
        .to(
          azizam,
          {
            x: -mobileMotion.hero.titleSplitX,
            autoAlpha: mobileMotion.hero.titleFadeTo,
            ease: "none",
          },
          0,
        )
        .to(
          market,
          {
            x: mobileMotion.hero.titleSplitX,
            autoAlpha: mobileMotion.hero.titleFadeTo,
            ease: "none",
          },
          0,
        )
        .to(
          titleWrap,
          {
            y: mobileMotion.hero.titleLiftTo,
            ease: "none",
          },
          0,
        );
    }, section);

    const refresh = () => ScrollTrigger.refresh();

    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      ctx.revert();
    };
  }, [sectionRef, stageRef, bgRef, overlayRef, titleWrapRef, azizamRef, marketRef]);
}
```

# shared/hooks/use-mobile-collapsed-nav.ts

```
"use client";

import { useEffect, useState } from "react";

export default function useMobileCollapsedNav(threshold = 110) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCollapsed(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return isCollapsed;
}
```

# shared/responsive/breakpoints.ts

```
(Xali code yozilmagan buyerga)
```

# shared/responsive/device-config.ts

```
export const deviceConfig = {
  mobileMaxWidth: 1023,
  desktopMinWidth: 1024,
} as const;

export type DeviceMode = "mobile" | "desktop";
```

# shared/responsive/ResponsivePage.tsx

```
"use client";

import DesktopPage from "../../sections/desktop-page";
import MobilePage from "../../sections/mobile-page";
import useDeviceMode from "./use-device-mode";

export default function ResponsivePage() {
  const deviceMode = useDeviceMode();

  if (deviceMode === "mobile") {
    return <MobilePage />;
  }

  return <DesktopPage />;
}
```

# shared/responsive/use-device-mode.ts

```
"use client";

import { useEffect, useState } from "react";
import { deviceConfig, type DeviceMode } from "./device-config";

function getDeviceMode(width: number): DeviceMode {
  return width <= deviceConfig.mobileMaxWidth ? "mobile" : "desktop";
}

export default function useDeviceMode(): DeviceMode {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");

  useEffect(() => {
    const updateDeviceMode = () => {
      setDeviceMode(getDeviceMode(window.innerWidth));
    };

    updateDeviceMode();
    window.addEventListener("resize", updateDeviceMode);

    return () => {
      window.removeEventListener("resize", updateDeviceMode);
    };
  }, []);

  return deviceMode;
}
```

# config/mobile-system/breakpoints.ts

```
(xali code yozilmagan)
```

# config/mobile-system/mobile-hero.ts

```
export const mobileLayout = {
  pageMaxWidth: "480px",

  heroViewportHeight: "100dvh",
  heroMinHeight: "100svh",

  heroContentMaxWidth: "420px",
  heroTitleMaxWidth: "min(88vw, 360px)",

  heroScrollRunway: "560px",
} as const;

export type MobileLayout = typeof mobileLayout;
```

# config/mobile-system/mobile-layout.ts

```
export const mobileLayout = {
  pageMaxWidth: "480px",

  heroViewportHeight: "100dvh",
  heroMinHeight: "100svh",

  heroContentMaxWidth: "420px",
  heroTitleMaxWidth: "min(88vw, 360px)",

  heroScrollRunway: "560px",
} as const;

export type MobileLayout = typeof mobileLayout;
```

# config/mobile-system/mobile-motion.ts

```
export const mobileMotion = {
  about: {
    titleY: 26,
    imageY: 54,
    textY: 18,
    imageScaleFrom: 0.94,
    imageScaleTo: 1,
    scrub: 0.32,
  },

  hero: {
    introDuration: 0.68,
    introEase: "power2.out",

    titleIntroY: 12,
    topbarIntroY: 10,
    navIntroY: 10,

    scrollDistance: 560,
    backgroundScaleTo: 1.08,

    titleSplitX: 120,
    titleFadeTo: 0,
    titleLiftTo: -8,

    scrub: 0.12,
  },

 product: {
    titleOnlyStart: 0,
    titleOnlyEnd: 0.2,

    titleFadeStart: 0.16,
    titleFadeEnd: 0.3,

    cardsRevealStart: 0.24,
    cardsRevealEnd: 0.4,

    cardsStart: 0.34,
    cardsEnd: 0.96,

    stackOffsetY: 28,
    stackScaleStep: 0.055,
    inactiveOpacity: 0.38,
    exitLift: 156,

    introOffsetY: 72,
    introScaleFrom: 0.94,
  },
  
} as const;

export type MobileMotion = typeof mobileMotion;
```

# config/mobile-system/mobile-navbar.ts

```
export const mobileNavbar = {
  topIconSize: "78px",
  topIconInnerSize: "62px",
  topIconGap: "16px",

  bottomHeight: "78px",
  bottomRadius: "9999px",
  bottomBlur: "14px",

  collapsedHeight: "68px",
  collapsedRadius: "9999px",
  collapsedBlur: "12px",
  collapsedIconOuter: "54px",
  collapsedIconInner: "42px",
} as const;

export type MobileNavbar = typeof mobileNavbar;
```

# config/mobile-system/mobile-sections.ts

```
export const mobileSections = {
  about: {
    minHeight: "235svh",
    stickyTop: "0px",

    frameMaxWidth: "min(84vw, 350px)",
    imageRadius: "28px",
    imageBorderWidth: "2px",
    imageHeight: "clamp(360px, 50svh, 440px)",

    imageShiftY: "-56px",

    titleTopOffset: "22svh",
    contentMaxWidth: "min(78vw, 300px)",
    infoGap: "20px",
  },

  product: {
    minHeight: "380svh",
    stickyHeight: "100svh",
    frameMaxWidth: "min(calc(100vw - 24px), 390px)",
    titleTopOffset: "0svh",
    cardMaxWidth: "min(calc(100vw - 34px), 392px)",
    cardRadius: "30px",
    cardMinHeight: "clamp(560px, 76svh, 710px)",
    contentBottomOffset: "110px",
  },

  achievements: {
    minHeight: "280svh",
    frameMaxWidth: "380px",
    titleTopOffset: "12vh",
    cardMaxWidth: "360px",
    cardRadius: "28px",
    cardMinHeight: "560px",
  },

  footer: {
    minHeight: "100svh",
    contentMaxWidth: "380px",
    bottomPadding: "120px",
  },
} as const;

export type MobileSections = typeof mobileSections;
```

# config/mobile-system/mobile-spacing.ts

```
export const mobileSpacing = {
  pageX: "20px",

  topbarTop: "26px",
  topbarLeft: "20px",
  topbarGap: "18px",

  heroBottomSafeSpace: "148px",

  bottomNavX: "16px",
  bottomNavY: "20px",
  bottomNavInnerX: "18px",

  heroTitleOffsetY: "0svh",
} as const;

export type MobileSpacing = typeof mobileSpacing;
```

# config/mobile-system/mobile-typography.ts

```
export const mobileTypography = {
  hero: {
    title: "clamp(50px, 14vw, 76px)",
    lineHeight: 0.9,
    letterSpacing: "-0.06em",
    weight: 700,
    lineGap: "4px",
  },

  nav: {
    label: "11px",
    weight: 600,
    lineHeight: 1.1,
  },
} as const;

export type MobileTypography = typeof mobileTypography;
```

<!-- ushbu mobile-lesson.md fileda mobile versiayaga oid barcha xozirgacha yozilgan codelar tushirilib chiqildi -->