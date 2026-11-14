import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Cart", robots: { index: false } };

export default function CartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Your cart</h1>
      <div className="mt-8"><CartView /></div>
    </div>
  );
}
