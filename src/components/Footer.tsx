import { Link } from "@tanstack/react-router";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-sand/50 bg-charcoal text-sand">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-[family-name:var(--font-heading)] text-xl text-linen">
              Only Food Runs
            </h3>
            <p className="max-w-xs text-sm leading-relaxed text-sand/70">
              Elevated resort wear crafted from 100% natural fibers. Every piece
              tells a story inspired by the animals and landscapes of the world's
              most beautiful coastlines.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-sand/50">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/shop"
                  className="text-sand/70 transition-colors hover:text-terracotta"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sand/70 transition-colors hover:text-terracotta"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sand/70 transition-colors hover:text-terracotta"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-sand/50">
              Stay Connected
            </h4>
            <p className="mb-4 text-sm text-sand/70">
              Receive notes on new collections, the stories behind our designs,
              and invitations to pop-up events.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 border-t border-sand/10 pt-8 text-center text-xs text-sand/40">
          &copy; {new Date().getFullYear()} Only Food Runs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
