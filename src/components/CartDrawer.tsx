import { Link } from "@tanstack/react-router";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal } =
    useCart();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-linen shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand/50 px-6 py-4">
          <h2 className="font-[family-name:var(--font-heading)] text-lg text-charcoal">
            Your Bag
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-charcoal/50 transition-colors hover:text-terracotta"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-[family-name:var(--font-accent)] text-lg italic text-charcoal/50">
              Your bag is empty
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-sage underline underline-offset-4 transition-colors hover:text-terracotta"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={`${item.slug}-${item.size}`}
                    className="flex gap-4 border-b border-sand/30 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-16 flex-shrink-0 rounded-sm object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {item.name}
                        </p>
                        <p className="text-xs text-charcoal/50">
                          Size: {item.size}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.slug,
                                item.size,
                                item.quantity - 1,
                              )
                            }
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-sand text-xs text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.slug,
                                item.size,
                                item.quantity + 1,
                              )
                            }
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-sand text-xs text-charcoal/70 hover:border-terracotta hover:text-terracotta"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-charcoal">
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

            {/* Footer */}
            <div className="border-t border-sand/50 px-6 py-4">
              <div className="mb-3 flex justify-between text-sm">
                <span className="text-charcoal/70">Subtotal</span>
                <span className="font-medium text-charcoal">${subtotal}</span>
              </div>
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="mb-2 block w-full rounded-sm bg-amber px-4 py-3 text-center text-sm font-medium tracking-wider text-white uppercase transition-colors hover:bg-amber/90"
              >
                View Bag
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-xs text-charcoal/40 underline underline-offset-4 transition-colors hover:text-terracotta"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
