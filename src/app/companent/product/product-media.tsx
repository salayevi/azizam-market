"use client";

import Image from "next/image"
import { Product } from "./product.types";

type Props = {
  product: Product;
};

export default function ProductMedia({ product }: Props) {
  const { media, name } = product;

  return (
    <div
      data-product-media
      className="relative z-10 flex h-full w-full items-center justify-center will-change-transform"
    >
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt || name}
          width={600}
          height={600}
          draggable={false}
          className="relative z-10 max-h-[84%] max-w-[84%] object-contain drop-shadow-[0_26px_40px_rgba(0,0,0,0.18)]"
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
  );
}
