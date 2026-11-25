"use client";

import Link from "next/link";
import { useState } from "react";
import { getProduct, isListed, type ListedProduct } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { MAX_QTY, removeFromCart, setQty, useCart } from "@/lib/cart";
import { ProductArt } from "./ProductArt";

const checkoutConfigured = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export function CartView() {
  const lines = useCart();
  const [status, setStatus] = useState<"idle" | "loading" | "disabled" | "error">("idle");

  const items = lines
    .map((l) => ({ line: l, product: getProduct(l.slug) }))
    .filter((x): x is { line: typeof x.line; product: ListedProduct } => x.product != null && isListed(x.product));
  const subtotal = items.reduce((s, { line, product }) => s + line.qty * product.price, 0);

  async function checkout() {
    if (!checkoutConfigured) {
      setStatus("disabled");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: items.map(({ line }) => line) }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (res.ok && data.url) {
        window.location.assign(data.url);
        return;
      }
      setStatus(data.error === "checkout_not_enabled" ? "disabled" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10 text-center">
        <p className="font-display text-xl font-semibold">Your cart is empty.</p>
        <p className="mt-2 text-muted">Find something to make one corner of home a little calmer.</p>
        <Link href="/shop" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {items.map(({ line, product }) => (
          <li key={product.slug} className="flex gap-4 p-4 sm:p-5">
            <div className="w-20 shrink-0 overflow-hidden rounded-xl sm:w-24">
              <ProductArt kind={product.art} collection={product.collection} label={product.name} />
            </div>
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Link href={`/products/${product.slug}`} className="font-display font-semibold hover:underline">
                  {product.name}
                </Link>
                <p className="text-sm text-muted">{formatPrice(product.price)} each</p>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor={`qty-${product.slug}`} className="sr-only">Quantity for {product.name}</label>
                <select
                  id={`qty-${product.slug}`}
                  value={line.qty}
                  onChange={(e) => setQty(product.slug, Number(e.target.value))}
                  className="rounded-full border border-line bg-surface px-3 py-2 text-sm"
                >
                  {Array.from({ length: MAX_QTY }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <p className="w-20 text-right font-semibold">{formatPrice(product.price * line.qty)}</p>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.slug)}
                  className="text-sm text-muted underline hover:text-ink"
                >
                  Remove<span className="sr-only"> {product.name}</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <aside className="h-fit rounded-2xl border border-line bg-surface p-6" aria-label="Order summary">
        <h2 className="font-display text-lg font-semibold">Order summary</h2>
        <dl className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between"><dt className="text-muted">Subtotal</dt><dd className="font-semibold">{formatPrice(subtotal)}</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Shipping</dt><dd>Calculated at checkout</dd></div>
          <div className="flex justify-between"><dt className="text-muted">Tax</dt><dd>Calculated at checkout</dd></div>
        </dl>
        <button
          type="button"
          onClick={checkout}
          disabled={status === "loading"}
          className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "loading" ? "Opening secure checkout…" : "Check out securely"}
        </button>
        <div role="status" aria-live="polite" className="mt-4 text-sm">
          {status === "disabled" && (
            <p className="rounded-xl bg-sand p-3 text-ink">
              <strong className="font-semibold">Checkout is not enabled yet.</strong> We are putting the finishing
              touches on the store. Your cart is saved on this device, so you can come back any time. Questions?{" "}
              <a href="mailto:ceo@simplensorted.com" className="text-accent underline">Email us</a>.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-xl bg-sand p-3 text-ink">
              Something went wrong opening checkout. Please try again in a moment.
            </p>
          )}
        </div>
        <p className="mt-4 text-xs text-muted">Payments are processed securely by Stripe.</p>
      </aside>
    </div>
  );
}
