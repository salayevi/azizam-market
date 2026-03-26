"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileProductShell from "./mobile-product-shell";
import useMobileProductsScroll from "./useMobileProductsScroll";

const mobileProducts = [
  {
    id: 1,
    title: "Atirlar",
    description:
      "Har bir did va kayfiyatga mos, nafis va esda qolarli iforlar to‘plami.",
    image: "/product-1.png",
  },
  {
    id: 2,
    title: "Kosmetika",
    description:
      "Go‘zallikni yanada nozik ko‘rsatadigan kundalik va maxsus mahsulotlar.",
    image: "/product-2.png",
  },
  {
    id: 3,
    title: "Parvarish",
    description:
      "Terini va o‘zingizni qadrlash uchun tanlangan ishonchli parvarish vositalari.",
    image: "/product-3.png",
  },
];

export default function MobileProductSection() {
  const activeIndex = useMobileProductsScroll({
    sectionId: "products",
    totalItems: mobileProducts.length,
  });

  return (
    <section
      id="products"
      className="relative w-full bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.product.minHeight,
      }}
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden px-4">
        <div className="absolute left-1/2 top-[12vh] z-30 w-full max-w-[360px] -translate-x-1/2 text-center">
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[#cf2f8f]">
            Mahsulotlar
          </h2>
        </div>

        <MobileProductShell
          products={mobileProducts}
          activeIndex={activeIndex}
          isAuthenticated={false}
        />
      </div>
    </section>
  );
}