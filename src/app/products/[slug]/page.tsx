import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollection, getProduct, products } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";
import { AddToCart } from "@/components/AddToCart";

// Finish the page before responding so notFound() is an HTTP 404.
// Partial prefetch would otherwise send the shell as 200.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.name, description: p.summary, url: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const col = getCollection(product.collection)!;
  const related = products.filter((p) => p.collection === product.collection && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/shop" className="hover:text-ink">Shop</Link> /</li>
          <li><Link href={`/shop?collection=${col.id}`} className="hover:text-ink">{col.name}</Link> /</li>
          <li aria-current="page" className="text-ink">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="self-start overflow-hidden rounded-3xl border border-line">
          <ProductArt kind={product.art} collection={product.collection} label={product.name} />
        </div>
        <div>
          <p className="text-sm font-medium tracking-wide text-accent uppercase">{col.name}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
          <p className="mt-4 text-2xl font-semibold">
            {formatPrice(product.price)}
            {product.compareAtPrice && (
              <span className="ml-3 text-lg font-normal text-muted line-through">
                <span className="sr-only">was </span>{formatPrice(product.compareAtPrice)}
              </span>
            )}
          </p>
          <p className="mt-3 rounded-lg bg-sand px-3 py-2 text-xs text-muted">
            Sample product for the draft site. Details and price are placeholders.
          </p>
          <p className="mt-5 text-muted">{product.description}</p>

          <div className="mt-6"><AddToCart slug={product.slug} /></div>

          <ul className="mt-6 space-y-1 text-sm text-ink">
            {product.features.map((f) => (
              <li key={f} className="flex gap-2"><span aria-hidden="true" className="text-accent">✓</span>{f}</li>
            ))}
          </ul>

          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Size</dt><dd className="text-right">{product.dimensions}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Material</dt><dd className="text-right">{product.material}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Shipping</dt><dd className="text-right">{product.shipsIn} from our partner warehouse</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Returns</dt><dd className="text-right">30 days, unused items. <Link href="/policies/returns" className="text-accent underline">Details</Link></dd></div>
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold">More from {col.name}</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
