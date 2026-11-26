import type { MetadataRoute } from "next";
import { listedProducts } from "@/data/products";
import { policies } from "./policies/policies";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/shop", "/about", "/contact", ...policies.map((p) => `/policies/${p.slug}`)];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...listedProducts.map((p) => ({ url: `${site.url}/products/${p.slug}` })),
  ];
}
