import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Questions about an order or a product? Email Simple and Sorted.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-4 text-muted">
        Questions about an order, a product, or a return? Send us an email and we will get back to you within one to
        two business days.
      </p>
      <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
        <p className="text-sm text-muted">Email</p>
        <a href={`mailto:${site.email}`} className="mt-1 inline-block font-display text-2xl font-semibold text-accent underline">
          {site.email}
        </a>
        <p className="mt-4 text-sm text-muted">
          For order questions, please include your order number and the email used at checkout.
        </p>
      </div>
      <p className="mt-6 text-sm text-muted">{site.legalName}</p>
    </div>
  );
}
