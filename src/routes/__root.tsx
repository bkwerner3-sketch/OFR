import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { CartProvider } from "~/components/CartContext";
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { CartDrawer } from "~/components/CartDrawer";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "OFR — Only Food Runs | Premium Crochet Resort Wear",
      },
      {
        name: "description",
        content:
          "Elevated resort wear crafted from 100% natural fibers. Crochet camp shirts and shorts inspired by animals and nature. Sustainable, artisanal, distinctive.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/logo-mark.png" },
    ],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-[family-name:var(--font-heading)] text-4xl text-charcoal">
        Page Not Found
      </h1>
      <p className="text-charcoal/50">
        The tide carried this page away. Let's get you back to shore.
      </p>
      <a
        href="/"
        className="mt-4 text-sm text-terracotta underline underline-offset-4"
      >
        Return Home
      </a>
    </div>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <CartProvider>
        <NavBar />
        <Outlet />
        <Footer />
        <CartDrawer />
      </CartProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh bg-linen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
