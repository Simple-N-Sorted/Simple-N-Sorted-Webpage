/**
 * PRODUCT CATALOG — SAMPLE DATA ONLY
 *
 * Every product below is a SAMPLE placeholder used to preview the store
 * layout. Names, prices, specs, and images are illustrative and must be
 * replaced with real supplier products before launch.
 *
 * To add a product: copy one entry, give it a unique `slug`, set the
 * `collection`, a price in cents, and pick an `art` style for the
 * placeholder illustration (or add a real `image` path later).
 */

export type CollectionId = "kitchen-pantry" | "closet" | "bath";

export type Collection = {
  id: CollectionId;
  name: string;
  tagline: string;
  description: string;
};

export type ArtKind =
  | "tray"
  | "drawers"
  | "canisters"
  | "tiered"
  | "turntable"
  | "hangers"
  | "hanging-shelf"
  | "bins"
  | "hooks"
  | "caddy";

export type Product = {
  slug: string;
  name: string;
  collection: CollectionId;
  /** Price in US cents. */
  price: number;
  /** Optional original price in US cents, shown struck through. */
  compareAtPrice?: number;
  summary: string;
  description: string;
  features: string[];
  dimensions: string;
  material: string;
  /** Typical supplier handling + transit time, shown on the product page. */
  shipsIn: string;
  featured?: boolean;
  /** Placeholder illustration style until real product photos exist. */
  art: ArtKind;
  /** Optional real image path (e.g. "/products/my-product.jpg") for later. */
  image?: string;
  /** True for all placeholder products. Remove when using real products. */
  sample: true;
};

export const collections: Collection[] = [
  {
    id: "kitchen-pantry",
    name: "Kitchen & Pantry",
    tagline: "Easy to find, easy to reach",
    description:
      "Drawer trays, stackable cabinet drawers, and pantry sets that make cooking spaces easy to read at a glance.",
  },
  {
    id: "closet",
    name: "Closet",
    tagline: "A spot for every piece",
    description:
      "Slim hangers, hanging shelves, and drawer dividers that give every item a place to live.",
  },
  {
    id: "bath",
    name: "Bath",
    tagline: "Calm counters, clear cabinets",
    description:
      "Vanity trays, under-sink bins, and shower caddies sized for small bathrooms.",
  },
];

export const comingSoonCollections = [
  { name: "Travel", description: "Packing cubes and pouches that keep a suitcase sorted." },
  { name: "Cables & Desk", description: "Cord organizers and desk trays for tidy workspaces." },
];

export const products: Product[] = [
  // ── Kitchen & Pantry ────────────────────────────────────────────
  {
    slug: "sample-expandable-drawer-tray",
    name: "Expandable Drawer Tray",
    collection: "kitchen-pantry",
    price: 2900,
    summary: "An adjustable utensil tray that widens to fit most kitchen drawers.",
    description:
      "Slide the tray open until it fits your drawer, then sort cutlery, tools, and gadgets into seven compartments. Non-slip feet keep it from shifting when the drawer opens.",
    features: ["Expands from 11 to 19 inches wide", "7 compartments", "Non-slip feet", "Wipe clean"],
    dimensions: "17 in deep × 11–19 in wide × 2 in tall",
    material: "BPA-free polypropylene",
    shipsIn: "Ships in 1–3 business days",
    featured: true,
    art: "tray",
    sample: true,
  },
  {
    slug: "sample-stackable-cabinet-drawers",
    name: "Stackable Cabinet Drawers, Set of 2",
    collection: "kitchen-pantry",
    price: 3400,
    summary: "Pull-out drawers that stack to use the full height of a cabinet.",
    description:
      "Turn one deep shelf into two easy-reach drawers. Each drawer glides out on a smooth track, and the frames stack securely so you can add more later.",
    features: ["Stacks two or more high", "Smooth pull-out drawers", "Front label slot", "No tools needed"],
    dimensions: "Each: 12.5 in deep × 8 in wide × 5 in tall",
    material: "Shatter-resistant PET",
    shipsIn: "Ships in 1–3 business days",
    featured: true,
    art: "drawers",
    sample: true,
  },
  {
    slug: "sample-pantry-canister-set",
    name: "Airtight Pantry Canister Set, 6 Pieces",
    collection: "kitchen-pantry",
    price: 3900,
    compareAtPrice: 4500,
    summary: "Clear, stackable canisters with snap-lock lids for dry goods.",
    description:
      "Keep pasta, rice, snacks, and baking staples fresh and visible. Three sizes stack neatly on a shelf, and the snap-lock lids seal with one press.",
    features: ["Three sizes, two of each", "Snap-lock airtight lids", "Stackable", "Includes reusable labels"],
    dimensions: "Small 0.8 qt, medium 1.7 qt, large 2.8 qt",
    material: "BPA-free shatter-resistant plastic",
    shipsIn: "Ships in 2–4 business days",
    featured: true,
    art: "canisters",
    sample: true,
  },
  {
    slug: "sample-two-tier-sliding-organizer",
    name: "Two-Tier Sliding Organizer",
    collection: "kitchen-pantry",
    price: 3200,
    summary: "A compact two-level rack with sliding baskets for under the sink.",
    description:
      "Fits around plumbing and doubles the usable space under a sink or inside a pantry cabinet. Both baskets slide out so nothing gets lost in the back.",
    features: ["Two sliding baskets", "Fits around pipes", "Easy snap-together assembly", "Rust-resistant finish"],
    dimensions: "16 in deep × 10 in wide × 15 in tall",
    material: "Powder-coated steel with plastic baskets",
    shipsIn: "Ships in 2–4 business days",
    art: "tiered",
    sample: true,
  },
  {
    slug: "sample-cabinet-turntable",
    name: "Cabinet Turntable",
    collection: "kitchen-pantry",
    price: 1900,
    summary: "A spinning tray that brings spices and oils to the front.",
    description:
      "Give corner cabinets and deep shelves a quick spin to reach what you need. A raised rim keeps bottles from sliding off.",
    features: ["Smooth 360° spin", "Raised rim", "Non-slip base", "Wipe clean"],
    dimensions: "10.5 in diameter × 2 in tall",
    material: "BPA-free plastic",
    shipsIn: "Ships in 1–3 business days",
    art: "turntable",
    sample: true,
  },

  // ── Closet ──────────────────────────────────────────────────────
  {
    slug: "sample-slim-hangers-30",
    name: "Slim Non-Slip Hangers, 30 Pack",
    collection: "closet",
    price: 2700,
    summary: "Space-saving hangers with a soft, grippy finish.",
    description:
      "Swap bulky hangers for a slim profile and reclaim rail space. The soft-touch finish keeps blouses and knits from slipping off.",
    features: ["Slim profile saves rail space", "Non-slip finish", "360° swivel hook", "Notched shoulders"],
    dimensions: "17.5 in wide × 0.25 in thick",
    material: "Flocked ABS plastic",
    shipsIn: "Ships in 1–3 business days",
    featured: true,
    art: "hangers",
    sample: true,
  },
  {
    slug: "sample-hanging-closet-shelves",
    name: "Hanging Closet Shelves, 6 Tier",
    collection: "closet",
    price: 2400,
    summary: "Fabric shelves that hook onto any closet rod.",
    description:
      "Add six open shelves for sweaters, shoes, or bags without any installation. Hook-and-loop straps wrap around the rod and hold steady.",
    features: ["6 open shelves", "Hook-and-loop rod straps", "Folds flat when not in use", "Breathable fabric"],
    dimensions: "12 in wide × 12 in deep × 48 in tall",
    material: "Non-woven fabric over cardboard inserts",
    shipsIn: "Ships in 2–4 business days",
    featured: true,
    art: "hanging-shelf",
    sample: true,
  },
  {
    slug: "sample-drawer-divider-bins",
    name: "Drawer Divider Bins, Set of 8",
    collection: "closet",
    price: 2200,
    summary: "Mix-and-match bins for socks, belts, and accessories.",
    description:
      "Four sizes fit together like a puzzle inside dresser drawers. Use them for socks, underwear, scarves, or jewelry.",
    features: ["4 sizes, 2 of each", "Fits together like a grid", "Washable", "Folds flat"],
    dimensions: "Largest: 12 × 6 × 4 in; smallest: 6 × 6 × 4 in",
    material: "Fabric with structured sides",
    shipsIn: "Ships in 1–3 business days",
    art: "bins",
    sample: true,
  },
  {
    slug: "sample-over-door-hooks",
    name: "Over-the-Door Hook Rack",
    collection: "closet",
    price: 1600,
    summary: "Six hooks for robes, bags, and tomorrow's outfit.",
    description:
      "Hangs over a standard door with no drilling. Rubber pads protect the door finish and keep the rack quiet.",
    features: ["6 double hooks", "No-drill install", "Protective pads", "Fits doors up to 1.75 in thick"],
    dimensions: "15 in wide × 11 in tall",
    material: "Powder-coated steel",
    shipsIn: "Ships in 1–3 business days",
    art: "hooks",
    sample: true,
  },

  // ── Bath ────────────────────────────────────────────────────────
  {
    slug: "sample-under-sink-bins",
    name: "Stackable Under-Sink Bins, Set of 3",
    collection: "bath",
    price: 2800,
    summary: "Open-front bins that stack for cleaning supplies and spares.",
    description:
      "Grab what you need without unstacking. The open front and built-in handles make these easy to use in tight cabinets.",
    features: ["Open-front design", "Stacks securely", "Built-in handles", "Easy to rinse"],
    dimensions: "Each: 10 in deep × 7 in wide × 5 in tall",
    material: "BPA-free polypropylene",
    shipsIn: "Ships in 1–3 business days",
    featured: true,
    art: "bins",
    sample: true,
  },
  {
    slug: "sample-vanity-drawer-trays",
    name: "Vanity Drawer Trays, Set of 5",
    collection: "bath",
    price: 2100,
    summary: "Small trays that sort makeup, hair ties, and toiletries.",
    description:
      "Arrange five trays in any layout to fit a bathroom drawer. Raised edges and soft corners make small items easy to pick up.",
    features: ["5 trays in 3 sizes", "Arrange in any layout", "Non-slip pads", "Dishwasher safe (top rack)"],
    dimensions: "Assembled: 12 in × 9 in × 2 in",
    material: "BPA-free polypropylene",
    shipsIn: "Ships in 1–3 business days",
    art: "tray",
    sample: true,
  },
  {
    slug: "sample-adhesive-shower-caddy",
    name: "Adhesive Shower Caddy",
    collection: "bath",
    price: 2600,
    summary: "A rust-resistant shelf that sticks on without drilling.",
    description:
      "Keep bottles off the tub edge. The adhesive mount holds firmly on tile and smooth walls, and comes off cleanly when you move.",
    features: ["No-drill adhesive mount", "Rust-resistant", "Drains quickly", "Includes razor hooks"],
    dimensions: "12 in wide × 5 in deep × 2.5 in tall",
    material: "Stainless steel",
    shipsIn: "Ships in 2–4 business days",
    art: "caddy",
    sample: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCollection(id: string): Collection | undefined {
  return collections.find((c) => c.id === id);
}

export function productsIn(id: CollectionId): Product[] {
  return products.filter((p) => p.collection === id);
}

export const featuredProducts = products.filter((p) => p.featured);
