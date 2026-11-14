import Link from "next/link";
import type { Product } from "@/data/products";
import { getCollection } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  const col = getCollection(product.collection);
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="overflow-hidden">
        <ProductArt
          kind={product.art}
          collection={product.collection}
          label={product.name}
          className="transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">{col?.name}</p>
        <h3 className="font-display text-base font-semibold text-ink">
          <Link href={`/products/${product.slug}`} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-muted">{product.summary}</p>
        <p className="mt-auto pt-3 text-sm font-semibold text-ink">
          {formatPrice(product.price)}
          {product.compareAtPrice && (
            <span className="ml-2 font-normal text-muted line-through">
              <span className="sr-only">was </span>
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className="ml-2 rounded bg-sand px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-muted uppercase">
            Sample
          </span>
        </p>
      </div>
    </article>
  );
}
