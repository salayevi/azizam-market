import { ProductColor } from "./product.types";

type Props = {
  colors: ProductColor[];
  isAuthenticated: boolean;
};

export default function ProductColors({ colors, isAuthenticated }: Props) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div data-product-colors>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
        Color Variants
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={color.name}
            className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/50 px-3 py-2 backdrop-blur-sm transition hover:scale-[1.02]"
          >
            <span
              className="h-5 w-5 rounded-full border border-black/10"
              style={{ backgroundColor: color.hex }}
            />
            <span className="text-sm text-neutral-700">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}