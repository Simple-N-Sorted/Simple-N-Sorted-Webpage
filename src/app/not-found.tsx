import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-4xl font-semibold tracking-tight">This page is out of place.</h1>
      <p className="mt-4 text-muted">We could not find what you were looking for.</p>
      <Link href="/shop" className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-dark">
        Go to the shop
      </Link>
    </div>
  );
}
