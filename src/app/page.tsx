import Link from "next/link";
import { collections, comingSoonCollections, featuredProducts, productsIn } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductArt } from "@/components/ProductArt";

const trust = [
  {
    title: "Ships direct from our partners",
    body: "Orders ship straight from our vetted supply partners to your door, which keeps prices fair and packaging simple.",
    icon: "M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 0 0-.01M18 19a2 2 0 1 0 0-.01",
  },
  {
    title: "Secure checkout",
    body: "Payments are handled by Stripe. We never see or store your full card number.",
    icon: "M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5z",
  },
  {
    title: "Easy returns",
    body: "Changed your mind? Send back unused items within 30 days of delivery.",
    icon: "M4 12a8 8 0 1 0 2.3-5.7M4 4v4h4",
  },
  {
    title: "Made for small spaces",
    body: "Every piece is chosen for apartments, dorms, and compact homes. No bulky furniture.",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:px-6 md:grid-cols-2 md:pt-16 md:pb-24">
        <div>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">Small-space home organization</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl">
            A place for everything, even in small spaces.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted">
            Drawer trays, stackable cabinet drawers, closet helpers, and pantry sets, picked room by room so
            getting organized feels simple.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
              Shop all
            </Link>
            <Link href="#rooms" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-linen">
              Shop by room
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4" aria-hidden="true">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-3xl"><ProductArt kind="drawers" collection="kitchen-pantry" label="Stackable cabinet drawers" /></div>
            <div className="overflow-hidden rounded-3xl"><ProductArt kind="hangers" collection="closet" label="Slim hangers" /></div>
          </div>
          <div className="mt-10 space-y-4">
            <div className="overflow-hidden rounded-3xl"><ProductArt kind="tray" collection="bath" label="Vanity drawer trays" /></div>
            <div className="overflow-hidden rounded-3xl"><ProductArt kind="canisters" collection="kitchen-pantry" label="Pantry canisters" /></div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="rooms" className="scroll-mt-6 border-y border-line bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Shop by room</h2>
          <p className="mt-2 max-w-xl text-muted">Start with the space that bugs you most. Each collection is sized for small homes.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {collections.map((c) => {
              const first = productsIn(c.id)[0];
              return (
                <Link
                  key={c.id}
                  href={`/shop?collection=${c.id}`}
                  className="group overflow-hidden rounded-2xl border border-line bg-linen hover:border-ink"
                >
                  <ProductArt kind={first.art} collection={c.id} label={c.name} />
                  <div className="p-5">
                    <p className="text-xs font-medium tracking-wide text-accent uppercase">{c.tagline}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted">{c.description}</p>
                    <p className="mt-4 text-sm font-semibold text-ink group-hover:underline">
                      Shop {c.name} <span aria-hidden="true">→</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {comingSoonCollections.map((c) => (
              <div key={c.name} className="flex-1 rounded-2xl border border-dashed border-line px-5 py-4">
                <p className="text-sm">
                  <span className="font-semibold text-ink">{c.name}</span>{" "}
                  <span className="ml-1 rounded bg-sand px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase">Coming soon</span>
                </p>
                <p className="mt-1 text-sm text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Featured picks</h2>
            <p className="mt-2 text-muted">Everyday organizers that make the biggest difference in the smallest spaces.</p>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-accent hover:underline sm:block">
            View all products
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {featuredProducts.slice(0, 6).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="bg-accent-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight">Shopping made simple</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <li key={t.title} className="rounded-2xl bg-surface p-6">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
                  <path d={t.icon} />
                </svg>
                <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Read our <Link href="/policies/shipping" className="font-medium text-accent underline">shipping</Link> and{" "}
            <Link href="/policies/returns" className="font-medium text-accent underline">returns</Link> policies.
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-3xl px-4 pt-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Start with one drawer.</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Small changes add up. Pick a room, pick a set, and enjoy knowing exactly where things go.
        </p>
        <Link href="/shop" className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
          Start shopping
        </Link>
      </section>
    </>
  );
}
