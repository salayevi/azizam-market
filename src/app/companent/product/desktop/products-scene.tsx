"use client"

import { useRef } from "react"
import { Product } from "../shared/product.types"
import { useProductsScroll } from "./useProductsScroll"
import ProductSlide from "./product-slide"
import { colors, radius, shadows, sizes } from "@/config/design-system"

type Props = {
  products: Product[]
}

export default function ProductsScene({ products }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const pinRef = useRef<HTMLDivElement | null>(null)

  useProductsScroll({
    sectionRef,
    pinRef,
    totalSlides: products.length,
  })

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${(products.length + sizes.product.sceneExtraSlides) * 100}vh` }}
    >
      <div
        ref={pinRef}
        className="sticky top-0 h-screen overflow-hidden"
        style={{
          backgroundColor: colors.background.soft,
          paddingInline: sizes.layout.sectionPadX,
        }}
      >
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <p
              data-products-kicker
              className="mb-4 uppercase tracking-[0.45em]"
              style={{
                color: colors.text.secondary,
                fontSize: sizes.product.introKickerSize,
              }}
            >
              Azizam Market
            </p>

            <h2
              data-products-title
              className="font-semibold tracking-tight"
              style={{
                color: colors.brand.primaryStrong,
                fontSize: sizes.product.introTitleDesktop,
              }}
            >
              Mahsulotlar
            </h2>

            <p
              data-products-subtitle
              className="mx-auto mt-5"
              style={{
                color: colors.text.secondary,
                maxWidth: sizes.product.introSubtitleWidth,
                fontSize: sizes.product.introSubtitleSize,
              }}
            >
              Har bir mahsulotni batafsil ko‘rib chiqing
            </p>
          </div>
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div
            data-products-card-shell
            className="relative w-full will-change-transform pointer-events-auto"
            style={{ maxWidth: sizes.product.cardMaxWidth }}
          >
            <div
              data-products-card-shadow
              className="pointer-events-none absolute left-1/2 top-[58%] h-24 -translate-x-1/2 rounded-full blur-3xl"
              style={{
                width: sizes.product.cardShadowWidth,
                backgroundColor: "rgba(0,0,0,0.08)",
              }}
            />

            <div
              data-products-card
              className="relative mx-auto overflow-hidden border backdrop-blur-sm"
              style={{
                borderRadius: radius["2xl"],
                borderColor: "rgba(255,255,255,0.6)",
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: shadows.floating,
              }}
            >
              <div
                className="relative w-full"
                style={{
                  height: sizes.product.cardHeight,
                  minHeight: sizes.product.cardMinHeight,
                }}
              >
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
  )
}