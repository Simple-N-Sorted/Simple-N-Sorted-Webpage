export const site = {
  name: "Simple and Sorted",
  legalName: "Simple and Sorted LLC",
  domain: "simplensorted.com",
  email: "ceo@simplensorted.com",
  description:
    "Small-space home organization, sorted room by room. Drawer trays, stackable cabinet drawers, closet helpers, and pantry sets shipped direct to your door.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://simplensorted.com").replace(/\/$/, ""),
};
