import { createFileRoute } from "@tanstack/react-router";
import { HeroBanner } from "~/components/HeroBanner";
import { FeaturedProducts } from "~/components/FeaturedProducts";
import { NewsletterForm } from "~/components/NewsletterForm";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <HeroBanner />

      {/* Collection 001 Teaser */}
      <section className="border-b border-sand/30 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="font-[family-name:var(--font-accent)] text-lg italic text-terracotta">
            Explore Collection 001 — Coastal, Safari, our debut pairing of Open Ocean and Savanna exhibits.
          </p>
        </div>
      </section>

      <FeaturedProducts />

      {/* Brand Values */}
      <section className="bg-sand/20 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-2 font-[family-name:var(--font-accent)] text-base italic text-terracotta">
              Why OFR
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal sm:text-4xl">
              What We Stand For
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-sage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl text-charcoal">
                Natural Fibers
              </h3>
              <p className="max-w-xs mx-auto text-sm leading-relaxed text-charcoal/60">
                Every garment is made from 100% organic cotton or traceable
                merino wool. No synthetics, no shortcuts — just pure, breathable
                materials that feel as good as they look.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/20 text-terracotta">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl text-charcoal">
                Artisanal Craft
              </h3>
              <p className="max-w-xs mx-auto text-sm leading-relaxed text-charcoal/60">
                Each piece is hand-crocheted by skilled artisans. The stitch
                patterns are original OFR designs — you won't find them anywhere
                else. This is slow fashion at its finest.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-5 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/20 text-amber">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl text-charcoal">
                Nature-Inspired
              </h3>
              <p className="max-w-xs mx-auto text-sm leading-relaxed text-charcoal/60">
                Every design begins with a moment in nature — a heron's wing, a
                turtle's shell, the sway of palm fronds. We translate these
                encounters into wearable art that connects you to the wild.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mx-auto max-w-2xl px-6 py-20 text-center">
        <p className="mb-2 font-[family-name:var(--font-accent)] text-base italic text-terracotta">
          Stay in the loop
        </p>
        <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal">
          From Our Shores to Your Inbox
        </h2>
        <p className="mb-8 text-charcoal/60">
          New collections, design stories, and invitations — delivered
          thoughtfully, never too often.
        </p>
        <div className="mx-auto max-w-md">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
