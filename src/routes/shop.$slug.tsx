import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getProductBySlug } from "~/data/products";
import { ProductGallery } from "~/components/ProductGallery";
import { useCart } from "~/components/CartContext";

export const Route = createFileRoute("/shop/$slug")({
  component: ProductDetail,
  notFoundComponent: () => (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-[family-name:var(--font-heading)] text-4xl text-charcoal">
        Piece Not Found
      </h1>
      <p className="text-charcoal/50">
        We haven't made this piece yet. Explore what's available.
      </p>
      <a
        href="/shop"
        className="mt-4 text-sm text-terracotta underline underline-offset-4"
      >
        Browse the Collection
      </a>
    </div>
  ),
});

function SingleProduct({
  product,
  addItem,
}: {
  product: NonNullable<ReturnType<typeof getProductBySlug>>;
  addItem: ReturnType<typeof useCart>["addItem"];
}) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium tracking-wide text-charcoal/50 uppercase">
              {product.category}
            </span>
            <span className="ml-2 rounded-full bg-sand px-3 py-1 text-xs font-medium tracking-wide text-charcoal/50 uppercase">
              {product.gender}
            </span>
          </div>

          <h1 className="mb-2 font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal sm:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 font-[family-name:var(--font-heading)] text-2xl text-terracotta">
            {product.price > 0 ? "$" + product.price : "Price TBD"}
          </p>

          <p className="mb-8 leading-relaxed text-charcoal/70">
            {product.description}
          </p>

          {/* Design Inspiration */}
          <div className="mb-8 rounded-sm border border-sand/50 bg-sand/10 p-4">
            <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Design Inspiration
            </p>
            <p className="font-[family-name:var(--font-accent)] text-base italic text-charcoal/70">
              {product.designInspiration}
            </p>
          </div>

          {/* Size Selector */}
          <div className="mb-6">
            <p className="mb-3 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex h-11 w-14 items-center justify-center rounded-sm border text-sm font-medium transition-colors ${
                    selectedSize === size
                      ? "border-charcoal bg-charcoal text-linen"
                      : "border-sand/50 text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`mb-6 w-full rounded-sm py-4 text-sm font-medium tracking-wider text-white uppercase transition-colors ${
              selectedSize
                ? "bg-amber hover:bg-amber/90"
                : "cursor-not-allowed bg-sand text-charcoal/30"
            }`}
          >
            {added ? "Added to Bag ✓" : "Add to Bag"}
          </button>

          {/* Materials & Care */}
          <div className="space-y-4 border-t border-sand/50 pt-6">
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
                Materials
              </p>
              <p className="text-sm leading-relaxed text-charcoal/70">
                {product.materials}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
                Care
              </p>
              <p className="text-sm leading-relaxed text-charcoal/70">
                {product.careInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SetLayout({
  set,
  shirt,
  shorts,
  addItem,
}: {
  set: NonNullable<ReturnType<typeof getProductBySlug>>;
  shirt: NonNullable<ReturnType<typeof getProductBySlug>>;
  shorts: NonNullable<ReturnType<typeof getProductBySlug>>;
  addItem: ReturnType<typeof useCart>["addItem"];
}) {
  const [shirtSize, setShirtSize] = useState<string>("");
  const [shortsSize, setShortsSize] = useState<string>("");
  const [shirtAdded, setShirtAdded] = useState(false);
  const [shortsAdded, setShortsAdded] = useState(false);

  const combinedPrice = shirt.price + shorts.price;
  const savings = combinedPrice - set.price;
  const lineName = set.name.replace(/ Set$/, "");

  const handleAddShirt = () => {
    if (!shirtSize) return;
    addItem({
      slug: shirt.slug,
      name: shirt.name,
      price: shirt.price,
      size: shirtSize,
      image: shirt.images[0],
    });
    setShirtAdded(true);
    setTimeout(() => setShirtAdded(false), 2000);
  };

  const handleAddShorts = () => {
    if (!shortsSize) return;
    addItem({
      slug: shorts.slug,
      name: shorts.name,
      price: shorts.price,
      size: shortsSize,
      image: shorts.images[0],
    });
    setShortsAdded(true);
    setTimeout(() => setShortsAdded(false), 2000);
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-2 text-center">
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-medium tracking-wide text-charcoal/50 uppercase">
          {set.gender}
        </span>
      </div>

      <h1 className="mb-2 text-center font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal sm:text-4xl">
        {lineName} — Shop the Look
      </h1>

      <p className="mb-12 text-center font-[family-name:var(--font-accent)] text-base italic text-charcoal/50">
        Choose your pieces individually or add both to complete the set — save $
        {savings} when you buy both.
      </p>

      {/* Two product cards side by side */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {/* Shirt Card */}
        <div className="flex flex-col rounded-sm border border-sand/30 bg-white p-6">
          <div className="mb-4 overflow-hidden rounded-sm bg-sand/20">
            <img
              src={shirt.images[0]}
              alt={shirt.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
            Shirt
          </p>
          <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-charcoal">
            {shirt.name}
          </h3>
          <p className="mb-4 font-[family-name:var(--font-heading)] text-xl text-terracotta">
            ${shirt.price}
          </p>

          {/* Size Selector for Shirt */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {shirt.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setShirtSize(size)}
                  className={`flex h-10 w-12 items-center justify-center rounded-sm border text-sm font-medium transition-colors ${
                    shirtSize === size
                      ? "border-charcoal bg-charcoal text-linen"
                      : "border-sand/50 text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddShirt}
            disabled={!shirtSize}
            className={`mt-auto w-full rounded-sm py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors ${
              shirtSize
                ? "bg-amber hover:bg-amber/90"
                : "cursor-not-allowed bg-sand text-charcoal/30"
            }`}
          >
            {shirtAdded ? "Added to Bag ✓" : "Add to Bag"}
          </button>
        </div>

        {/* Shorts Card */}
        <div className="flex flex-col rounded-sm border border-sand/30 bg-white p-6">
          <div className="mb-4 overflow-hidden rounded-sm bg-sand/20">
            <img
              src={shorts.images[0]}
              alt={shorts.name}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
            Shorts
          </p>
          <h3 className="mb-2 font-[family-name:var(--font-heading)] text-xl text-charcoal">
            {shorts.name}
          </h3>
          <p className="mb-4 font-[family-name:var(--font-heading)] text-xl text-terracotta">
            ${shorts.price}
          </p>

          {/* Size Selector for Shorts */}
          <div className="mb-4">
            <p className="mb-2 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Size
            </p>
            <div className="flex flex-wrap gap-2">
              {shorts.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setShortsSize(size)}
                  className={`flex h-10 w-12 items-center justify-center rounded-sm border text-sm font-medium transition-colors ${
                    shortsSize === size
                      ? "border-charcoal bg-charcoal text-linen"
                      : "border-sand/50 text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddShorts}
            disabled={!shortsSize}
            className={`mt-auto w-full rounded-sm py-3 text-sm font-medium tracking-wider text-white uppercase transition-colors ${
              shortsSize
                ? "bg-amber hover:bg-amber/90"
                : "cursor-not-allowed bg-sand text-charcoal/30"
            }`}
          >
            {shortsAdded ? "Added to Bag ✓" : "Add to Bag"}
          </button>
        </div>
      </div>

      {/* Savings note */}
      <div className="mb-12 text-center">
        <div className="inline-block rounded-sm border border-sand/50 bg-sand/10 px-8 py-4">
          <p className="text-sm text-charcoal/60">
            <span className="mr-2 text-charcoal/40 line-through">${combinedPrice}</span>
            <span className="font-[family-name:var(--font-heading)] text-lg text-terracotta">
              ${set.price}
            </span>
            <span className="ml-2 text-charcoal/60">when you buy both</span>
          </p>
          <p className="mt-1 font-[family-name:var(--font-accent)] text-sm italic text-charcoal/50">
            Save ${savings} versus buying each piece separately
          </p>
        </div>
      </div>

      {/* Design Inspiration & Materials */}
      <div className="mx-auto max-w-2xl space-y-8 border-t border-sand/50 pt-10">
        <div>
          <p className="mb-2 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
            Design Inspiration
          </p>
          <p className="font-[family-name:var(--font-accent)] text-base italic leading-relaxed text-charcoal/70">
            {set.designInspiration}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Materials
            </p>
            <p className="text-sm leading-relaxed text-charcoal/70">
              {set.materials}
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium tracking-wider text-charcoal/40 uppercase">
              Care
            </p>
            <p className="text-sm leading-relaxed text-charcoal/70">
              {set.careInstructions}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();

  if (!product) {
    return null; // notFoundComponent will handle this
  }

  // Set layout: "Shop the Look"
  if (product.category === "set" && product.setShirtSlug && product.setShortsSlug) {
    const shirt = getProductBySlug(product.setShirtSlug);
    const shorts = getProductBySlug(product.setShortsSlug);

    if (!shirt || !shorts) {
      return null; // data integrity issue — shirt/shorts referenced but not found
    }

    return <SetLayout set={product} shirt={shirt} shorts={shorts} addItem={addItem} />;
  }

  // Regular product layout (shirt or shorts)
  return <SingleProduct product={product} addItem={addItem} />;
}
