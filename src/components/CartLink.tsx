"use client";

import Link from "next/link";
import { useCartCount } from "@/lib/cart";

export function CartLink() {
  const count = useCartCount();
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink hover:border-ink"
      aria-label={count ? `Cart, ${count} item${count === 1 ? "" : "s"}` : "Cart, empty"}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M5 8h14l-1.2 11.1a2 2 0 0 1-2 1.9H8.2a2 2 0 0 1-2-1.9z" strokeLinejoin="round" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
      <span>Cart</span>
      <span
        className={`min-w-5 rounded-full px-1.5 text-center text-xs leading-5 ${count ? "bg-accent text-white" : "bg-sand text-muted"}`}
        aria-hidden="true"
      >
        {count}
      </span>
    </Link>
  );
}
