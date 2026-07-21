import { Link } from "@tanstack/react-router";

export function HeroBanner() {
  return (
    <section className="relative flex min-h-[85dvh] items-center justify-center overflow-hidden bg-sand/20">
      {/* Lifestyle hero image */}
      <img
        src="/lifestyle-lineup.png"
        alt="OFR collection lineup — premium crochet resort wear"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Warm gradient overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-linen/70 via-sand/30 to-linen/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-6 font-[family-name:var(--font-accent)] text-lg italic text-terracotta">
          Resort wear, reimagined
        </p>
        <h1 className="mb-6 font-[family-name:var(--font-heading)] text-5xl leading-tight font-bold text-charcoal sm:text-6xl lg:text-7xl">
          Crafted for the
          <br />
          <span className="text-terracotta"> conscious traveler</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-charcoal/60">
          Crochet camp shirts and shorts in 100% natural fibers. Every stitch
          inspired by the animals and landscapes of the world's shores.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/shop"
            className="inline-block rounded-sm bg-amber px-8 py-4 text-sm font-medium tracking-wider text-white uppercase transition-colors hover:bg-amber/90"
          >
            Explore the Collection
          </Link>
          <Link
            to="/about"
            className="inline-block rounded-sm border border-charcoal/20 px-8 py-4 text-sm font-medium tracking-wider text-charcoal uppercase transition-colors hover:border-terracotta hover:text-terracotta"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
