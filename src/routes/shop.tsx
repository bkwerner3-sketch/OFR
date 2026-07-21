import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "~/data/products";
import { ProductCard } from "~/components/ProductCard";
import type { Product } from "~/data/products";

export const Route = createFileRoute("/shop")({
  component: Shop,
});

function Shop() {
  const matches = useMatches();
  const isChildRoute = matches.some((m) => m.routeId === "/shop/$slug");

  if (isChildRoute) {
    return <Outlet />;
  }

  const [category, setCategory] = useState<"all" | "shirt" | "shorts" | "set">("all");
  const [gender, setGender] = useState<"all" | "men" | "women" | "unisex">(
    "all",
  );

  let filtered: Product[] = products;

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }
  if (gender !== "all") {
    filtered = filtered.filter((p) => p.gender === gender);
  }

  const categories: { value: typeof category; label: string }[] = [
    { value: "all", label: "All" },
    { value: "shirt", label: "Shirts" },
    { value: "shorts", label: "Shorts" },
    { value: "set", label: "Sets" },
  ];

  const genders: { value: typeof gender; label: string }[] = [
    { value: "all", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "unisex", label: "Unisex" },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 font-[family-name:var(--font-accent)] text-base italic text-terracotta">
          The Collection
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
          Shop All
        </h1>
      </div>

      {/* Filters */}
      <div className="mb-10 flex flex-col items-center gap-6">
        {/* Category filter */}
        <div className="flex gap-1 rounded-sm border border-sand/50 p-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`rounded-sm px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                category === cat.value
                  ? "bg-terracotta text-white"
                  : "text-charcoal/60 hover:text-terracotta"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gender filter */}
        <div className="flex gap-3">
          {genders.map((g) => (
            <button
              key={g.value}
              onClick={() => setGender(g.value)}
              className={`text-xs tracking-wider uppercase transition-colors ${
                gender === g.value
                  ? "text-terracotta underline underline-offset-4"
                  : "text-charcoal/40 hover:text-terracotta"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-[family-name:var(--font-accent)] text-lg italic text-charcoal/40">
            No pieces match these filters. Try a different combination.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
