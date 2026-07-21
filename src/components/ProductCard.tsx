import { Link } from "@tanstack/react-router";
import type { Product } from "~/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="relative mb-4 overflow-hidden rounded-sm bg-sand/30">
        <img
          src={product.images[0]}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.isFeatured && (
          <span className="absolute left-3 top-3 rounded-full bg-linen/90 px-3 py-1 font-[family-name:var(--font-accent)] text-xs italic text-terracotta backdrop-blur-sm">
            Featured
          </span>
        )}
      </div>
      <p className="font-[family-name:var(--font-heading)] text-base text-charcoal group-hover:text-terracotta transition-colors">
        {product.name}
      </p>
      {product.category === "set" ? (
        <p className="mt-1 text-sm text-charcoal/60">
          Shirt + Shorts — ${product.price}
        </p>
      ) : (
        <p className="mt-1 text-sm text-charcoal/60">
          {product.price > 0 ? "$" + product.price : "Price TBD"}
        </p>
      )}
    </Link>
  );
}
