import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "~/components/CartContext";

export const Route = createFileRoute("/cart")({
  component: Cart,
});

function Cart() {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="mb-2 font-[family-name:var(--font-accent)] text-base italic text-terracotta">
          Review Your Selection
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal">
          Your Bag
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center">
          <p className="mb-4 font-[family-name:var(--font-accent)] text-xl italic text-charcoal/40">
            Your bag is empty
          </p>
          <Link
            to="/shop"
            className="text-sm text-sage underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            Explore the Collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Line items */}
          <div>
            <ul className="divide-y divide-sand/50">
              {items.map((item) => (
                <li key={`${item.slug}-${item.size}`} className="flex gap-4 py-6">
                  <Link
                    to="/shop/$slug"
                    params={{ slug: item.slug }}
                    className="shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-22 rounded-sm object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to="/shop/$slug"
                        params={{ slug: item.slug }}
                        className="font-[family-name:var(--font-heading)] text-base text-charcoal transition-colors hover:text-terracotta"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-charcoal/50">
                        Size: {item.size}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.size, item.quantity - 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-sand text-sm text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.size, item.quantity + 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-sand text-sm text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-charcoal">
                          ${item.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.slug, item.size)}
                          className="text-charcoal/30 transition-colors hover:text-terracotta"
                          aria-label={`Remove ${item.name}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-sm border border-sand/50 bg-sand/10 p-6">
              <h2 className="mb-4 font-[family-name:var(--font-heading)] text-lg text-charcoal">
                Order Summary
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Items ({itemCount})</span>
                  <span className="text-charcoal">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/60">Shipping</span>
                  <span className="text-charcoal/40 italic">
                    Calculated at checkout
                  </span>
                </div>
                <div className="border-t border-sand/50 pt-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-charcoal">Subtotal</span>
                    <span className="font-[family-name:var(--font-heading)] text-lg text-charcoal">
                      ${subtotal}
                    </span>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="mt-6 w-full rounded-sm bg-amber px-4 py-3 text-sm font-medium tracking-wider text-white uppercase opacity-60 cursor-not-allowed"
              >
                Checkout Coming Soon
              </button>

              <p className="mt-3 text-center text-xs text-charcoal/30">
                Payment processing will be available soon. Your items are saved.
              </p>
            </div>

            <Link
              to="/shop"
              className="mt-4 block text-center text-xs text-charcoal/40 underline underline-offset-4 transition-colors hover:text-terracotta"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
