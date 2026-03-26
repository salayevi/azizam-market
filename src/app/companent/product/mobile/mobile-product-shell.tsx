import MobileProductCard, { type MobileProductItem } from "./mobile-product-card";

type MobileProductShellProps = {
  products: MobileProductItem[];
  activeIndex: number;
  isAuthenticated?: boolean;
};

export default function MobileProductShell({
  products,
  activeIndex,
  isAuthenticated = false,
}: MobileProductShellProps) {
  return (
    <div className="relative mx-auto h-[100svh] w-full max-w-[380px]">
      {products.map((product, index) => (
        <MobileProductCard
          key={product.id}
          product={product}
          isActive={index === activeIndex}
          isAuthenticated={isAuthenticated}
        />
      ))}
    </div>
  );
}