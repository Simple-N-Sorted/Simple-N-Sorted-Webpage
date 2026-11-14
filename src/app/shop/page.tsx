import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid, ShopGridFallback } from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop small-space organizers for the kitchen and pantry, closet, and bath.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Shop</h1>
      <p className="mt-2 max-w-xl text-muted">Organizers for small spaces, grouped by room. Filter to the room you are working on.</p>
      <div className="mt-8">
        <Suspense fallback={<ShopGridFallback />}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
