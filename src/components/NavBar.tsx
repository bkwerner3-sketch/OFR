import { Link } from "@tanstack/react-router";
import { useCart } from "./CartContext";

export function NavBar() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-sand/50 bg-linen/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="OFR Home">
          <img
            src="/logo-owner.png"
            alt="OFR — Only Food Runs"
            className="h-10 w-auto"
          />
        </Link>

        {/* Center links */}
        <div className="flex items-center gap-8 text-sm tracking-widest uppercase">
          <Link
            to="/shop"
            className="text-charcoal/70 transition-colors hover:text-terracotta [&.active]:text-terracotta"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-charcoal/70 transition-colors hover:text-terracotta [&.active]:text-terracotta"
          >
            About
          </Link>
        </div>

        {/* Cart button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-1 text-charcoal/70 transition-colors hover:text-terracotta"
          aria-label={`Cart (${itemCount} items)`}
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-medium text-white">
              {itemCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
