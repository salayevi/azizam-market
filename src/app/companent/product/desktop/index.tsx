"use client"

import { productsData } from "../shared/products-data"
import ProductsScene from "./products-scene"

export default function ProductsSection() {
  return (
    <section id="products" className="relative w-full">
      <ProductsScene products={productsData} />
    </section>
  )
}