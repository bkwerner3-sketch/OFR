import { getFeaturedProducts } from "~/data/products";
import { ProductCard } from "./ProductCard";
import { Link } from "@tanstack/react-router";

export function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="mb-2 font-[family-name:var(--font-accent)] text-base italic text-terracotta">
          The Collection
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal sm:text-4xl">
          Featured Pieces
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/shop"
          className="inline-block border-b-2 border-terracotta/30 pb-1 font-[family-name:var(--font-accent)] text-base italic text-charcoal transition-colors hover:border-terracotta hover:text-terracotta"
        >
          View all pieces &rarr;
        </Link>
      </div>
    </section>
  );
}
