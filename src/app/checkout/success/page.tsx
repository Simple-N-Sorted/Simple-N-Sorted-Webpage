import type { Metadata } from "next";
import Link from "next/link";
import { ClearCartOnMount } from "@/components/ClearCartOnMount";

export const metadata: Metadata = { title: "Order received", robots: { index: false } };

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center sm:px-6">
      <ClearCartOnMount />
      <p className="text-sm font-medium tracking-wide text-accent uppercase">Thank you</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Your order is in.</h1>
      <p className="mt-4 text-muted">
        A receipt is on its way to your email. Our partner warehouse will prepare your items, and you will get
        tracking details as soon as your order ships.
      </p>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
        Keep shopping
      </Link>
    </div>
  );
}
