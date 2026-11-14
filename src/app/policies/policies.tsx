import type { ReactNode } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export type Policy = { slug: string; title: string; summary: string; body: ReactNode };

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

export const policies: Policy[] = [
  {
    slug: "shipping",
    title: "Shipping Policy",
    summary: "How and when Simple and Sorted orders ship.",
    body: (
      <>
        <p>We currently ship to addresses in the United States.</p>
        <h2>How orders ship</h2>
        <p>
          Our products ship directly from our supply partners. If you order more than one item, your order may arrive in
          separate packages on different days. You will receive tracking for each package.
        </p>
        <h2>Processing and delivery times</h2>
        <ul>
          <li>Processing: 1 to 3 business days after your order is placed.</li>
          <li>Delivery: typically 3 to 8 business days after shipping.</li>
        </ul>
        <p>These are estimates. Carrier delays, weather, and holidays can add time.</p>
        <h2>Shipping costs</h2>
        <p>Shipping costs are shown at checkout before you pay. [Decide: flat rate, free-shipping threshold, or both.]</p>
        <h2>Lost or damaged packages</h2>
        <p>
          If a package arrives damaged or does not arrive within 15 business days of shipping, email {mail} with your order
          number and we will make it right with a replacement or refund.
        </p>
      </>
    ),
  },
  {
    slug: "returns",
    title: "Returns & Refunds Policy",
    summary: "Our 30-day returns policy.",
    body: (
      <>
        <p>We want you to love how your space feels. If something is not right, you can return it.</p>
        <h2>30-day returns</h2>
        <ul>
          <li>Request a return within 30 days of delivery by emailing {mail} with your order number.</li>
          <li>Items should be unused and in their original packaging.</li>
          <li>We will send return instructions. Returns may go to a partner address rather than ours.</li>
        </ul>
        <h2>Refunds</h2>
        <p>
          Once your return is received and checked, we refund the original payment method within 5 to 10 business days.
          [Decide: who pays return shipping for change-of-mind returns.]
        </p>
        <h2>Damaged or wrong items</h2>
        <p>
          If an item arrives damaged, defective, or is not what you ordered, email us within 14 days of delivery with a
          photo. We will send a replacement or a full refund, and you will not pay for return shipping.
        </p>
      </>
    ),
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    summary: "How Simple and Sorted collects and uses your information.",
    body: (
      <>
        <p>This policy explains what information {site.legalName} collects when you use {site.domain} and how we use it.</p>
        <h2>Information we collect</h2>
        <ul>
          <li>Order details you give us at checkout: name, email, shipping address, and the items you buy.</li>
          <li>Messages you send us by email.</li>
          <li>Your cart contents, saved only in your own browser&apos;s local storage.</li>
        </ul>
        <h2>Payments</h2>
        <p>
          Payments are processed by Stripe. Your card details go directly to Stripe and are never stored on our servers.
          See Stripe&apos;s privacy policy for how they handle payment data.
        </p>
        <h2>How we use information</h2>
        <p>
          We use your information to process and ship orders, which includes sharing your name and shipping address with
          the supply partner that fulfills your order, and to answer your questions. We do not sell your personal
          information.
        </p>
        <h2>Contact</h2>
        <p>For privacy questions or to request deletion of your data, email {mail}.</p>
      </>
    ),
  },
  {
    slug: "terms",
    title: "Terms of Service",
    summary: "The terms for using simplensorted.com and buying from Simple and Sorted.",
    body: (
      <>
        <p>
          These terms apply to your use of {site.domain} and purchases from {site.legalName}. By placing an order, you
          agree to them.
        </p>
        <h2>Products and pricing</h2>
        <p>
          We work to show accurate descriptions, images, and prices. If we find an error after you order, we will
          contact you before shipping and you may cancel for a full refund.
        </p>
        <h2>Orders</h2>
        <p>
          We may decline or cancel an order, for example if an item is out of stock with our supplier. If that happens,
          you will receive a full refund.
        </p>
        <h2>Shipping and returns</h2>
        <p>
          See our <Link href="/policies/shipping">Shipping Policy</Link> and <Link href="/policies/returns">Returns Policy</Link>.
        </p>
        <h2>Limitation of liability</h2>
        <p>To the extent allowed by law, our liability for any order is limited to the amount you paid for it.</p>
        <h2>Governing law</h2>
        <p>[Decide: state whose law governs these terms.]</p>
        <h2>Contact</h2>
        <p>Questions about these terms? Email {mail}.</p>
      </>
    ),
  },
];

export function getPolicy(slug: string) {
  return policies.find((p) => p.slug === slug);
}
