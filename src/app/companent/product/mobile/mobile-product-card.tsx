import MobileProductActions from "./mobile-product-actions";
import MobileProductGuestCallout from "./mobile-product-guest-callout";
import MobileProductInfo from "./mobile-product-info";
import MobileProductMedia from "./mobile-product-media";

export type MobileProductItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type MobileProductCardProps = {
  product: MobileProductItem;
  isActive?: boolean;
  isAuthenticated?: boolean;
};

export default function MobileProductCard({
  product,
  isActive = false,
  isAuthenticated = false,
}: MobileProductCardProps) {
  return (
    <article
      className={`absolute left-1/2 top-1/2 w-full max-w-[360px] -translate-x-1/2 rounded-[28px] border border-[#efbfd8] bg-white p-4 shadow-lg transition-all duration-500 ${
        isActive ? "z-20 opacity-100" : "z-10 opacity-0"
      }`}
      style={{
        transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.92})`,
      }}
    >
      <MobileProductMedia image={product.image} title={product.title} />

      <div className="pt-5">
        <MobileProductInfo
          title={product.title}
          description={product.description}
        />

        {isAuthenticated ? (
          <MobileProductActions />
        ) : (
          <MobileProductGuestCallout />
        )}
      </div>
    </article>
  );
}