import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Checkout canceled", robots: { index: false } };

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Checkout canceled</h1>
      <p className="mt-4 text-muted">No worries, you have not been charged. Your cart is saved whenever you are ready.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/cart" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">Back to cart</Link>
        <Link href="/shop" className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-linen">Keep shopping</Link>
      </div>
    </div>
  );
}
