"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";
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
  price: product.price ?? "Narx mavjud emas",
}));

export default function MobileProductSection() {
  const scrollState = useMobileProductsScroll({
    sectionId: "products",
    totalItems: mobileProducts.length,
  });

  const titleIntroProgress = Math.min(scrollState.sectionProgress / 0.12, 1);

  const titleOpacity = titleIntroProgress * (1 - scrollState.titleFadeProgress);

  const titleTranslateY =
    (1 - titleIntroProgress) * 42 + scrollState.titleFadeProgress * -26;

  const titleScale =
    0.92 + titleIntroProgress * 0.08 - scrollState.titleFadeProgress * 0.04;

  return (
    <section
      id="products"
      className="relative w-full overflow-clip bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.product.minHeight,
      }}
    >
      <div
        className="sticky top-0 flex w-full items-center justify-center overflow-hidden"
        style={{
          height: mobileSections.product.stickyHeight,
          paddingInline: mobileSections.product.stagePadX,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center text-center"
          style={{
            opacity: titleOpacity,
            transition: "opacity 120ms linear, transform 120ms linear",
            paddingInline: mobileSections.product.titlePadX,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: mobileSections.product.titleFrameMaxWidth,
              transform: `translateY(${titleTranslateY}px) scale(${titleScale})`,
              transformOrigin: "center center",
            }}
          >
            <h2
              className="font-bold leading-none tracking-[-0.05em] text-[#cf2f8f]"
              style={{ fontSize: mobileTypography.product.title }}
            >
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
        />
      </div>
    </section>
  );
}
