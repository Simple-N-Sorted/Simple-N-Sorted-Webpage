"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { collections, products, type CollectionId } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ShopFilters({ active }: { active?: CollectionId }) {
  const tabs = [{ id: undefined, name: "All" }, ...collections.map((c) => ({ id: c.id, name: c.name }))];
  return (
    <nav aria-label="Filter by collection">
      <ul className="flex flex-wrap gap-2">
        {tabs.map((t) => {
          const isActive = t.id === active;
          return (
            <li key={t.name}>
              <Link
                href={t.id ? `/shop?collection=${t.id}` : "/shop"}
                aria-current={isActive ? "page" : undefined}
                scroll={false}
                className={`inline-block rounded-full border px-4 py-2 text-sm font-medium ${
                  isActive ? "border-ink bg-ink text-linen" : "border-line bg-surface text-ink hover:border-ink"
                }`}
              >
                {t.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function ShopGrid() {
  const params = useSearchParams();
  const raw = params.get("collection");
  const active = collections.find((c) => c.id === raw);
  const list = active ? products.filter((p) => p.collection === active.id) : products;

  return (
    <>
      <ShopFilters active={active?.id} />
      <div className="mt-6">
        <h2 className="font-display text-xl font-semibold">{active ? active.name : "All products"}</h2>
        <p className="mt-1 text-sm text-muted">
          {active ? active.description : "Every organizer in the shop, across all rooms."}{" "}
          <span aria-live="polite">({list.length} {list.length === 1 ? "item" : "items"})</span>
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}

export function ShopGridFallback() {
  return (
    <>
      <ShopFilters />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
}
