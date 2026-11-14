import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPolicy, policies } from "../policies";

export function generateStaticParams() {
  return policies.map((p) => ({ policy: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/policies/[policy]">): Promise<Metadata> {
  const { policy } = await params;
  const p = getPolicy(policy);
  if (!p) return { title: "Policy not found" };
  return { title: p.title, description: p.summary, alternates: { canonical: `/policies/${p.slug}` } };
}

export default async function PolicyPage({ params }: PageProps<"/policies/[policy]">) {
  const { policy } = await params;
  const p = getPolicy(policy);
  if (!p) notFound();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <p className="inline-block rounded-full bg-sand px-3 py-1 text-xs font-semibold tracking-wide text-ink uppercase">
        Draft: not yet reviewed, not in effect
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">{p.title}</h1>
      <p className="mt-2 text-sm text-muted">
        This draft is a starting point and should be reviewed (ideally by a legal professional) before the store
        opens. Items in [brackets] need a decision.
      </p>
      <div className="prose-policy mt-8">{p.body}</div>
    </article>
  );
}
