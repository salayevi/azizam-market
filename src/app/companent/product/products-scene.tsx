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
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
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
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-10">
          <div
            data-products-card-shell
            className="relative w-full max-w-6xl will-change-transform"
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
