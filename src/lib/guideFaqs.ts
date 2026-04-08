export interface FaqItem {
  question: string;
  answer: string;
}

export const guideFaqData: Record<string, FaqItem[]> = {
  "how-to-build-chicken-coop": [
    { question: "How long does it take to build a chicken coop?", answer: "A simple 4x4 coop takes a weekend. A 6x8 walk-in coop runs 16–20 hours solo. Larger 10x12 coops take 40+ hours spread across 3–5 weekends." },
    { question: "How much does it cost to build a chicken coop?", answer: "Expect $180–250 for a small 4x4, $380–480 for a 4x8 medium, and $750–950 for an 8x8 walk-in. Prices assume 2026 Home Depot pricing." },
    { question: "What's the easiest chicken coop design for beginners?", answer: "A 4x4 A-frame or elevated floor design is the simplest to build — fewer cuts, no complex joinery, builds in 8–12 hours." },
    { question: "Do I need a permit to build a chicken coop?", answer: "It depends on your city. Structures under 120 sq ft usually don't need a building permit, but HOA and zoning setbacks still apply. Check locally first." },
    { question: "What's the best wood for a chicken coop?", answer: "Cedar for durability on outdoor-exposed parts, pressure-treated pine for the frame, and regular pine for interior roosts and nesting boxes where chickens make contact." },
  ],
  "small-chicken-coop-plans": [
    { question: "How many chickens can a small coop hold?", answer: "A standard small coop (4x4) comfortably houses 3–4 hens. Allow 4 sq ft of floor space per bird inside the coop, plus 8–10 sq ft per bird in the run." },
    { question: "What size coop do I need for 4 chickens?", answer: "A 4x4 (16 sq ft) coop is the minimum for 4 chickens. A 4x6 gives more breathing room and is recommended if you plan to add birds later." },
    { question: "Can I build a small coop without power tools?", answer: "Yes. A basic 4x4 coop can be built with a hand saw, drill, hammer, and measuring tape. Pre-cut lumber from the hardware store speeds things up." },
    { question: "How tall should a small chicken coop be?", answer: "At least 3 feet tall for bantams, 4 feet for standard breeds. Roost bars should sit 18–24 inches off the floor with 8–10 inches of roost space per bird." },
    { question: "What's the cheapest small coop design?", answer: "An A-frame or lean-to design uses the least lumber. Budget around $150–200 for a basic 4x4 using standard pine and hardware cloth." },
  ],
  "predator-proof-coop-guide": [
    { question: "What predators attack chicken coops?", answer: "Raccoons, foxes, hawks, owls, weasels, rats, snakes, and neighborhood dogs are the most common threats. Raccoons are the #1 coop predator in North America." },
    { question: "Does hardware cloth really stop raccoons?", answer: "Yes. Use 1/2-inch hardware cloth — not chicken wire. Raccoons can reach through chicken wire and pull birds through. Hardware cloth is raccoon-proof." },
    { question: "How deep should I bury wire around a coop?", answer: "Bury hardware cloth or welded wire 12 inches deep in an L-shape (12 inches down, 12 inches outward). This stops digging predators like foxes and dogs." },
    { question: "Do automatic coop doors stop predators?", answer: "Yes. A timer-based or light-sensor automatic door ensures the coop is sealed at dusk when most predators hunt. It's one of the best investments for flock safety." },
    { question: "Will a motion-sensor light deter predators?", answer: "Motion lights deter foxes, coyotes, and some raccoons short-term. Persistent raccoons habituate quickly, so combine lights with physical barriers." },
  ],
  "coop-ventilation-guide": [
    { question: "How much ventilation does a chicken coop need?", answer: "1 sq ft of ventilation per bird minimum. In hot climates, aim for 2 sq ft per bird. Place vents high on opposite walls for cross-flow." },
    { question: "Should a chicken coop have windows?", answer: "Yes. Windows provide light and ventilation. Use hardware cloth over openings and add hinged shutters so you can close them during storms or extreme cold." },
    { question: "Can too much ventilation make a coop too cold?", answer: "Ventilation is not the same as drafts. High vents remove moisture and ammonia without creating cold drafts at roost level. Chickens tolerate cold but not dampness." },
    { question: "What's the best ventilation setup for a small coop?", answer: "Soffit vents under the roofline on two opposite walls, plus a ridge vent if possible. This creates a natural convection loop that works year-round." },
    { question: "How do I ventilate a coop in winter?", answer: "Keep high vents open year-round. Close low vents and windows. The goal is to remove moisture without creating drafts at roost height. Frostbite comes from humidity, not cold air." },
  ],
  "chicken-coop-size-calculator": [
    { question: "How many square feet per chicken inside the coop?", answer: "4 sq ft per standard-sized hen. Bantams need 2–3 sq ft. Heavy breeds like Orpingtons and Brahmas benefit from 5 sq ft each." },
    { question: "How much run space do chickens need?", answer: "8–10 sq ft per bird in an attached run. Free-range flocks still need a secure run for days you can't let them out." },
    { question: "Is a 4x8 coop big enough for 8 chickens?", answer: "A 4x8 gives 32 sq ft — technically enough for 8 birds at 4 sq ft each, but 6 hens would be more comfortable with less stress and fewer pecking issues." },
    { question: "What happens if a coop is too small?", answer: "Overcrowding causes feather pecking, egg eating, increased disease, ammonia buildup, and lower egg production. Always err on the side of more space." },
    { question: "Do roosters need more space than hens?", answer: "Roosters need about 6–8 sq ft each due to their larger size and territorial behavior. Keep no more than 1 rooster per 8–10 hens." },
  ],
  "coop-materials-guide": [
    { question: "What's the best lumber for a chicken coop?", answer: "Cedar is the gold standard for exterior walls — naturally rot-resistant and insect-repellent. Use pressure-treated pine for ground-contact framing and regular pine for interior parts." },
    { question: "Is pressure-treated wood safe for chickens?", answer: "Modern ACQ-treated lumber is safe for coop framing. Avoid older CCA-treated wood (pre-2004) which contains arsenic. Don't use treated wood for roosts or nesting boxes." },
    { question: "What type of roofing is best for a chicken coop?", answer: "Corrugated metal roofing is the most durable and cost-effective. It sheds rain and snow easily, lasts 25+ years, and costs $1–2 per sq ft." },
    { question: "Should I use plywood or OSB for coop walls?", answer: "Exterior-grade plywood (CDX or better) is preferred. OSB swells when wet and deteriorates faster. Plywood costs more but lasts significantly longer in outdoor applications." },
    { question: "How much hardware cloth do I need?", answer: "Measure all openings (windows, vents, run walls) plus 12 inches of buried apron around the perimeter. A typical 4x8 coop with attached run needs 50–75 sq ft of 1/2-inch hardware cloth." },
  ],
  "cost-breakdown-2025": [
    { question: "How much does it cost to build a chicken coop in 2026?", answer: "A basic 4x4 costs $180–250, a mid-size 4x8 runs $380–480, and a full 8x8 walk-in coop costs $750–950. Prices reflect 2026 lumber and hardware costs." },
    { question: "Is it cheaper to build or buy a chicken coop?", answer: "Building is almost always cheaper. A $200 DIY coop would cost $500–800 pre-built. You also get a sturdier, customized result. The only trade-off is your time." },
    { question: "What's the most expensive part of building a coop?", answer: "Lumber is typically 40–50% of total cost. Hardware cloth is the second biggest expense at 15–20%. Roofing and hardware (hinges, latches, screws) make up the rest." },
    { question: "Can I build a chicken coop for under $100?", answer: "Yes, using reclaimed pallets, salvaged wood, and recycled materials. Expect to spend $50–80 on hardware cloth, screws, and hinges even with free lumber." },
    { question: "How much does a premade chicken coop cost?", answer: "Retail coops range from $200 for flimsy imported kits to $2,000+ for quality walk-in coops. Most $300–500 retail coops are thin wood that won't last past 2–3 seasons." },
  ],
  "coop-permit-guide": [
    { question: "Do I need a permit to build a chicken coop?", answer: "Most cities don't require a building permit for structures under 120 sq ft. However, you may still need a zoning permit or variance to keep chickens. Always check local ordinances." },
    { question: "Are chickens legal in my city?", answer: "Most US cities allow backyard hens (typically 3–6 birds). Roosters are banned in most urban areas. Check your city's municipal code or call the zoning department." },
    { question: "How far does a coop need to be from property lines?", answer: "Setback requirements vary: typically 10–25 feet from property lines and 25–50 feet from neighboring dwellings. Some cities measure from the coop, others from the run." },
    { question: "Can my HOA ban chickens?", answer: "Yes. HOA CC&Rs can restrict or ban chickens even if your city allows them. Review your HOA documents first — some HOAs require architectural approval for any outbuilding." },
    { question: "What happens if I build a coop without a permit?", answer: "You risk fines ($100–500+), forced removal, and issues when selling your home. Unpermitted structures can also void homeowner's insurance coverage." },
  ],
  "nesting-box-guide": [
    { question: "How many nesting boxes do I need?", answer: "1 nesting box per 3–4 hens. A flock of 6 hens needs 2 boxes. Adding a third gives hens options and reduces competition, but more than that wastes space." },
    { question: "What size should nesting boxes be?", answer: "12x12x12 inches for standard breeds. Bantams can use 10x10x10. Heavy breeds like Brahmas and Jersey Giants need 14x14x14 inch boxes." },
    { question: "How high should nesting boxes be off the ground?", answer: "18–24 inches off the floor. Roost bars must be higher than nesting boxes, or hens will sleep in the boxes and soil them." },
    { question: "What's the best nesting box bedding?", answer: "Pine shavings are the most popular — absorbent, affordable, and easy to clean. Straw works but mats down faster. Avoid cedar shavings (toxic fumes) and hay (molds quickly)." },
    { question: "Why are my chickens not using the nesting boxes?", answer: "Common causes: boxes are too high or too low, not enough darkness/privacy, dirty bedding, mites in the box, or roost bars are lower than the boxes. Fix these and add a fake egg to encourage use." },
  ],
  "chicken-coop-flooring-guide": [
    { question: "What's the best flooring for a chicken coop?", answer: "Plywood with a vinyl or linoleum overlay is the best all-around option — easy to clean, moisture-resistant, and affordable. Sand or concrete are also excellent for easy maintenance." },
    { question: "Should a chicken coop have a dirt floor?", answer: "Dirt floors work in dry climates but are impossible to sanitize and invite predators to dig in. An elevated or concrete floor is safer and easier to maintain." },
    { question: "Is concrete good for a chicken coop floor?", answer: "Concrete is predator-proof, easy to hose down, and lasts forever. The downsides are cost, cold in winter (add deep bedding), and it's permanent — you can't move the coop." },
    { question: "How do I keep a coop floor dry?", answer: "Use the deep litter method (6+ inches of pine shavings), ensure good ventilation, slope the floor slightly toward the door, and use a vinyl or linoleum overlay on plywood." },
    { question: "What is the deep litter method?", answer: "Start with 4–6 inches of pine shavings. Add fresh shavings on top every few weeks instead of cleaning. The bottom layers compost in place, generating warmth in winter. Clean out completely every 6–12 months." },
  ],
};
