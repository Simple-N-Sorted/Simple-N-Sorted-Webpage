import Link from "next/link";
import { Logo } from "./Logo";
import { CartLink } from "./CartLink";

const nav = [
  { href: "/shop", label: "Shop all" },
  { href: "/shop?collection=kitchen-pantry", label: "Kitchen & Pantry" },
  { href: "/shop?collection=closet", label: "Closet" },
  { href: "/shop?collection=bath", label: "Bath" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-linen/95">
      <div className="bg-ink px-4 py-2 text-center text-xs text-linen">
        Draft preview: all products shown are samples and are not yet for sale.
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" aria-label="Simple and Sorted, home" className="rounded-md">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CartLink />
      </div>
      <nav aria-label="Main mobile" className="md:hidden">
        <ul className="flex gap-5 overflow-x-auto px-4 pb-3 text-sm whitespace-nowrap text-muted">
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="inline-block py-1 hover:text-ink">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
