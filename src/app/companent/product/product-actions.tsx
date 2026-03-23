import Link from "next/link";
import { ProductAction } from "./product.types";

type Props = {
  actions: ProductAction[];
  accent: string;
  isAuthenticated: boolean;
};

export default function ProductActions({
  actions,
  accent,
  isAuthenticated,
}: Props) {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div data-product-actions className="flex flex-wrap gap-4">
      {actions.map((action) => {
        const isPrimary = action.type === "primary";

        return (
          <Link
            key={action.label}
            href={action.href || "#"}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.03]"
            style={{
              backgroundColor: isPrimary ? accent : "transparent",
              color: isPrimary ? "#fff" : "currentColor",
              border: isPrimary ? "none" : "1px solid rgba(0,0,0,0.12)",
            }}
          >
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}