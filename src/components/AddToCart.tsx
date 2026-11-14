"use client";

import { useState } from "react";
import Link from "next/link";
import { addToCart, MAX_QTY } from "@/lib/cart";

export function AddToCart({ slug }: { slug: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex items-stretch gap-3">
        <label className="sr-only" htmlFor="qty">Quantity</label>
        <select
          id="qty"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="rounded-full border border-line bg-surface px-4 py-3 text-sm text-ink"
        >
          {Array.from({ length: MAX_QTY }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>Qty {n}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => {
            addToCart(slug, qty);
            setAdded(true);
          }}
          className="flex-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Add to cart
        </button>
      </div>
      <p role="status" className="min-h-5 text-sm text-accent">
        {added && (
          <>
            Added to your cart. <Link href="/cart" className="font-semibold underline">View cart</Link>
          </>
        )}
      </p>
    </div>
  );
}
