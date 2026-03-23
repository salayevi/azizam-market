"use client"
import ProductActions from "./product-actions"
import ProductColors from "./product-colors"
import ProductInfo from "./product-info"
import ProductMedia from "./product-media"
import { Product } from "./product.types"

type Props = {
  product: Product
  index: number
}

function getMediaPanelBackground(product: Product) {
  const mode = product.mediaPanel.mode

  if (mode === "forceBlack") return "#111111"
  if (mode === "forceWhite") return "#f5f1eb"
  if (mode === "imageTone") return product.mediaPanel.color || "#d8d2cc"

  return "#111111"
}

export default function ProductSlide({ product, index }: Props) {
  const mediaPanelBg = getMediaPanelBackground(product)
  return (
    <article
      data-product-slide
      data-index={index}
      className="absolute inset-0 grid h-full w-full grid-cols-1 lg:grid-cols-[1.05fr_1fr] will-change-[opacity,transform]"
      style={{
        background: product.theme.bg,
        color: product.theme.text,
      }}
    >
      <div
        className="relative flex items-center justify-center overflow-hidden p-8 lg:p-12"
        style={{ backgroundColor: mediaPanelBg }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_58%)]" />
        <ProductMedia product={product} />
      </div>

      <div className="flex items-center p-8 lg:p-14">
        <div className="mx-auto w-full max-w-xl">
          <ProductInfo product={product} />

          <div className="mt-8">
            <ProductColors
              colors={product.colors}
              accent={product.theme.accent}
            />
          </div>

          <div className="mt-8">
            <ProductActions
              actions={product.actions}
              accent={product.theme.accent}
            />
          </div>
        </div>
      </div>
    </article>
  )
}