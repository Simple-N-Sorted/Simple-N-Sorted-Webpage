import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted">
            Small-space home organization, sorted room by room. Shipped direct from our partners to your door.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/shop?collection=kitchen-pantry" className="hover:text-ink">Kitchen &amp; Pantry</Link></li>
            <li><Link href="/shop?collection=closet" className="hover:text-ink">Closet</Link></li>
            <li><Link href="/shop?collection=bath" className="hover:text-ink">Bath</Link></li>
            <li><Link href="/shop" className="hover:text-ink">Shop all</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ink">Help</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
            <li><Link href="/policies/shipping" className="hover:text-ink">Shipping</Link></li>
            <li><Link href="/policies/returns" className="hover:text-ink">Returns</Link></li>
            <li><Link href="/policies/privacy" className="hover:text-ink">Privacy</Link></li>
            <li><Link href="/policies/terms" className="hover:text-ink">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
