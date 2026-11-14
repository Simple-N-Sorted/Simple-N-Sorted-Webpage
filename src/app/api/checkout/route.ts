import Stripe from "stripe";
import { getProduct } from "@/data/products";
import { MAX_QTY } from "@/lib/cart-limits";

type Body = { items?: { slug?: unknown; qty?: unknown }[] };

export async function POST(request: Request) {
  const secret = process.env.STRIPE_SECRET_KEY;
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin).replace(/\/$/, "");

  if (!secret || !publishable) {
    return Response.json(
      { error: "checkout_not_enabled", message: "Checkout is not enabled yet." },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Prices always come from the server-side catalog, never from the client.
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  for (const item of body.items ?? []) {
    const product = typeof item.slug === "string" ? getProduct(item.slug) : undefined;
    const qty = Number(item.qty);
    if (!product || !Number.isInteger(qty) || qty < 1 || qty > MAX_QTY) continue;
    lineItems.push({
      quantity: qty,
      price_data: {
        currency: "usd",
        unit_amount: product.price,
        product_data: { name: product.name, description: product.summary },
      },
    });
  }

  if (lineItems.length === 0) {
    return Response.json({ error: "empty_cart" }, { status: 400 });
  }

  try {
    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US"] },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel`,
    });
    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error", err);
    return Response.json({ error: "checkout_failed" }, { status: 502 });
  }
}
