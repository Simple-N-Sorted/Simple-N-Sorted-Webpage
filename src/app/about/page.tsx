import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Simple and Sorted helps people in small homes get organized, one room at a time.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">About us</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">Organizing, made simple.</h1>
      <div className="prose-policy mt-6">
        <p>
          Simple and Sorted started with a small apartment and a kitchen drawer that would not close. We learned that
          getting organized rarely needs more space. It needs the right pieces, in the right places.
        </p>
        <p>
          So we built a shop around that idea. Instead of endless aisles, we offer short, room-by-room collections for
          the kitchen and pantry, the closet, and the bath. Each piece is chosen because it fits small spaces, is easy
          to set up, and holds up to daily use.
        </p>
        <h2>How we work</h2>
        <p>
          We partner with trusted suppliers who ship orders directly to you. That means no middle warehouse, less
          packaging, and fair prices. We handle the customer care, so if anything is not right, you talk to us.
        </p>
        <h2>What we skip</h2>
        <p>
          No bulky furniture and no glass. Just practical organizers that arrive safely and make a difference the day
          they show up.
        </p>
      </div>
      <Link href="/shop" className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
        Shop by room
      </Link>
    </div>
  );
}
