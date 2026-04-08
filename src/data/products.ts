export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  priceDisplay: string;
  bullets: string[];
  heroImage: string;
  lemonSqueezyCheckoutUrl: string;
};

export const products: Product[] = [
  {
    id: "4x4-starter",
    slug: "4x4-starter-coop-plans",
    name: "4×4 Starter Chicken Coop Plans",
    tagline: "Beginner-friendly weekend build for 2–4 chickens",
    description: "Complete printable PDF with step-by-step instructions, full 2026 materials list with Home Depot prices, cut list, tool list, and illustrated diagrams. Built this one yourself and housed our first flock.",
    price: 19,
    priceDisplay: "$19",
    bullets: [
      "28-page illustrated PDF",
      "Full 2026 materials list ($180–250 total cost)",
      "Cut list with exact dimensions",
      "Builds in a single weekend",
      "Houses 2–4 chickens comfortably",
      "Instant download after purchase",
    ],
    heroImage: "/shop/4x4-starter-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
  {
    id: "4x8-medium",
    slug: "4x8-medium-coop-plans",
    name: "4×8 Medium Chicken Coop Plans",
    tagline: "The goldilocks coop for 4–6 chickens",
    description: "Our most popular build. Walk-around access, integrated nesting boxes, proper ventilation, and real predator-proofing specs. 2–3 day build for anyone with basic tools.",
    price: 24,
    priceDisplay: "$24",
    bullets: [
      "42-page illustrated PDF",
      "Full 2026 materials list ($380–480 total cost)",
      "Includes nesting box plans",
      "Builds in 2–3 days",
      "Houses 4–6 chickens",
      "Instant download after purchase",
    ],
    heroImage: "/shop/4x8-medium-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
  {
    id: "8x8-walkin",
    slug: "8x8-walk-in-coop-plans",
    name: "8×8 Walk-In Chicken Coop Plans",
    tagline: "Stand-up comfort for serious flocks of 8–12 birds",
    description: "The coop we wish we'd built first. Full walk-in headroom, dedicated nesting wall, roost area, and integrated run attachment points. For folks who want to actually enjoy their chicken keeping.",
    price: 29,
    priceDisplay: "$29",
    bullets: [
      "56-page illustrated PDF",
      "Full 2026 materials list ($750–950 total cost)",
      "Walk-in headroom (6.5 ft)",
      "4–5 day build",
      "Houses 8–12 chickens",
      "Instant download after purchase",
    ],
    heroImage: "/shop/8x8-walkin-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
  {
    id: "a-frame",
    slug: "a-frame-coop-plans",
    name: "A-Frame Chicken Coop Plans",
    tagline: "Simple, cheap, weekend-buildable",
    description: "The easiest chicken coop plan we sell. Minimal cuts, no complex joinery, and movable (chicken tractor style). Perfect for first-time builders or small flocks.",
    price: 15,
    priceDisplay: "$15",
    bullets: [
      "22-page illustrated PDF",
      "Full 2026 materials list ($120–180 total cost)",
      "Builds in 8–12 hours",
      "Movable / chicken tractor design",
      "Houses 3–4 chickens",
      "Instant download after purchase",
    ],
    heroImage: "/shop/a-frame-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
  {
    id: "10x12-large",
    slug: "10x12-large-coop-plans",
    name: "10×12 Large Chicken Coop Plans",
    tagline: "Serious space for 18–20 hens",
    description: "When you're past the 'just a few chickens' phase. Full walk-in with dedicated zones for nesting, roosting, brooding, and storage. Built to last 15+ years.",
    price: 34,
    priceDisplay: "$34",
    bullets: [
      "68-page illustrated PDF",
      "Full 2026 materials list ($1,700–2,100 total)",
      "Walk-in with 7 ft peak",
      "Houses 18–20 chickens",
      "Includes brooder area plans",
      "Instant download after purchase",
    ],
    heroImage: "/shop/10x12-large-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
  {
    id: "bundle-all-five",
    slug: "all-plans-bundle",
    name: "All 5 Plans Bundle",
    tagline: "Every CoopCraft plan — save $36",
    description: "All 5 coop plans in one download. Start with the A-frame, grow into the walk-in. Best value for serious chicken keepers planning a multi-year build.",
    price: 79,
    priceDisplay: "$79",
    bullets: [
      "All 5 PDF guides (216 pages total)",
      "Save $36 vs buying individually",
      "Every size from 4×4 to 10×12",
      "Lifetime free updates",
      "Instant download after purchase",
    ],
    heroImage: "/shop/bundle-hero.jpg",
    lemonSqueezyCheckoutUrl: "REPLACE_ME",
  },
];
