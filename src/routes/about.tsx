import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero image */}
      <div className="mb-16 overflow-hidden rounded-sm">
        <img
          src="/lifestyle-additional.png"
          alt="OFR lifestyle — premium resort wear in natural settings"
          className="w-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="mb-16 text-center">
        <p className="mb-2 font-[family-name:var(--font-accent)] text-lg italic text-terracotta">
          Our Story
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-charcoal sm:text-5xl">
          Only Food Runs
        </h1>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
          If You're Not Food, You Don't Run
        </h2>
        <div className="space-y-4 leading-relaxed text-charcoal/70">
          <p>
            There's an old saying in the bush:{" "}
            <span className="font-[family-name:var(--font-accent)] text-lg italic text-terracotta">
              "Only food runs."
            </span>{" "}
            If you're not food, you don't run. The lion doesn't sprint from the
            watering hole. The shark doesn't flee the reef. They move when they
            want, at their own pace, because nothing is coming for them. That's
            the energy OFR is built on.
          </p>
          <p>
            OFR makes leisure wear for the top of the food chain. Crochet camp
            shirts and chambray shorts that move from the marina to the pool,
            from the resort to the bar, without needing a change. Pieces that
            project ease — not because they're trying, but because you're not
            running from anything.
          </p>
          <p>
            Every garment is cut from 100% natural fibers — organic cotton
            chambray and hand-crocheted cotton — in original patterns inspired
            by the animals that share our coastlines. Whale sharks. Wobbegongs.
            Leopards. Jaguars. Creatures that have earned the right to take
            their time.
          </p>
        </div>
      </section>

      {/* Materials & Craftsmanship */}
      <section className="mb-16 border-t border-sand/50 pt-16">
        <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
          Materials & Craftsmanship
        </h2>
        <div className="space-y-4 leading-relaxed text-charcoal/70">
          <p>
            We work exclusively with 100% natural fibers. Our organic cotton is
            grown without synthetic pesticides and our merino wool is fully
            traceable to the farms where the sheep graze. Every button is
            natural — mother-of-pearl, corozo nut, or horn. Every dye is
            plant-based or mineral. Nothing in our supply chain is hidden.
          </p>
          <p>
            Each OFR garment is hand-crocheted by skilled artisans using
            techniques passed down through generations — but applied to original
            OFR patterns that you won't find anywhere else. The result is a
            piece of clothing that carries the mark of the hands that made it:
            slightly irregular, deeply human, irreplaceable.
          </p>
        </div>
      </section>

      {/* Sustainability */}
      <section className="mb-16 border-t border-sand/50 pt-16">
        <h2 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal">
          Sustainability Is Not a Feature — It's the Foundation
        </h2>
        <div className="space-y-4 leading-relaxed text-charcoal/70">
          <p>
            For us, sustainability isn't a marketing angle. It's the natural
            consequence of making things slowly, carefully, and from materials
            that the earth can renew. Crochet is inherently low-waste: we
            produce almost no offcuts because each piece is made to exact
            dimensions from the first stitch.
          </p>
          <p>
            We produce in small batches — typically 30 to 50 pieces per design.
            When a batch sells out, we make more. We never overproduce, we never
            discount to clear inventory, and we never send unsold garments to
            landfill.
          </p>
        </div>
      </section>

      {/* Founder Note */}
      <section className="border-t border-sand/50 pt-16">
        <div className="rounded-sm border border-sand/50 bg-sand/20 p-8">
          <p className="mb-4 font-[family-name:var(--font-accent)] text-xl italic text-terracotta">
            A note from the founder
          </p>
          <div className="space-y-4 leading-relaxed text-charcoal/70">
            <p>
              OFR started with a simple truth from the bush: if you're not
              food, you don't run. The best moments in life — the golden hour at
              the marina, the last round at the bar, the long lunch that turns
              into dinner — happen when you stop moving and start being. Our
              clothes are built for those moments. Whether you're dockside, poolside,
              or pulling up a stool, you're dressed for it.
            </p>
            <p>
              Every piece we make carries that same unhurried confidence. 100%
              natural fibers. Original shark and big-cat patterns. Craftsmanship
              that doesn't shout because it doesn't need to. Thank you for
              being part of the top of the food chain.
            </p>
          </div>
        </div>
      </section>

      {/* Women's Lookbook */}
      <section className="mt-16 border-t border-sand/50 pt-16">
        <div className="mb-12 text-center">
          <p className="mb-2 font-[family-name:var(--font-accent)] text-lg italic text-terracotta">
            Coming Soon: Women's Collection
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-charcoal sm:text-4xl">
            The Same Patterns, A New Silhouette
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-charcoal/70">
            The same shark and jaguar patterns, translated to women's silhouettes.
            Same 100% natural fibers, same elevated craftsmanship.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group overflow-hidden rounded-sm bg-sand/30">
            <img
              src="/womens-whale-shark-chambray.png"
              alt="Women's Whale Shark Chambray — coming soon"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <p className="mt-3 text-center font-[family-name:var(--font-heading)] text-sm text-charcoal">
              Whale Shark Chambray
            </p>
          </div>
          <div className="group overflow-hidden rounded-sm bg-sand/30">
            <img
              src="/womens-wobbegong-shark-chambray.png"
              alt="Women's Wobbegong Shark Chambray — coming soon"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <p className="mt-3 text-center font-[family-name:var(--font-heading)] text-sm text-charcoal">
              Wobbegong Shark Chambray
            </p>
          </div>
          <div className="group overflow-hidden rounded-sm bg-sand/30">
            <img
              src="/womens-leopard-shark-chambray.png"
              alt="Women's Leopard Shark Chambray — coming soon"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <p className="mt-3 text-center font-[family-name:var(--font-heading)] text-sm text-charcoal">
              Leopard Shark Chambray
            </p>
          </div>
          <div className="group overflow-hidden rounded-sm bg-sand/30">
            <img
              src="/womens-jaguar-crochet.png"
              alt="Women's Jaguar Crochet — coming soon"
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <p className="mt-3 text-center font-[family-name:var(--font-heading)] text-sm text-charcoal">
              Jaguar Crochet
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
