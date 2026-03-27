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
  price: product.price,
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
        />
      </div>
    </section>
  );
}
