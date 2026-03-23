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
