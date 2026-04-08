import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const CoopPlansMaterialsList = () => {
  const article = getArticleBySlug('chicken-coop-plans-materials-list');
  if (!article) return <div>Article not found</div>;

  return (
    <BlogLayout article={article}>
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Most chicken keepers start with free coop plans they find online. They print them out, feel confident, and set Saturday aside to build.</strong> Then they get to the hardware store and realize the plans have no materials list—or worse, they're missing half the stuff they actually need.
        </p>
        <p className="text-muted-foreground mb-6">
          You end up making four trips to Home Depot, spending way more than you budgeted, and your weekend stretches into Sunday night. We've been there. That's why we built this guide: not just the plans, but the exact materials list you'll actually need, with current 2026 prices so there are no surprises. For the full range of designs, see our <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">complete chicken coop plans guide</Link>.
        </p>
        <p className="text-muted-foreground mb-8">
          A real materials list isn't just a nice-to-have. It's the difference between a smooth weekend build and a frustrating scramble.
        </p>
      </section>

      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#why-fail" className="text-primary hover:underline">Why Most Free Coop Plans Fail You</a></li>
          <li><a href="#what-includes" className="text-primary hover:underline">What a Complete Materials List Includes</a></li>
          <li><a href="#4x4-list" className="text-primary hover:underline">Complete Materials List: 4x4 Small Coop</a></li>
          <li><a href="#4x8-list" className="text-primary hover:underline">Complete Materials List: 4x8 Medium Coop</a></li>
          <li><a href="#8x8-list" className="text-primary hover:underline">Complete Materials List: 8x8 Walk-In Coop</a></li>
          <li><a href="#where-to-buy" className="text-primary hover:underline">Where to Buy Each Item</a></li>
          <li><a href="#mistakes" className="text-primary hover:underline">Mistakes to Avoid When Buying Materials</a></li>
          <li><a href="#save-money" className="text-primary hover:underline">How to Save Money Without Sacrificing Quality</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      <section id="why-fail" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Why Most Free Coop Plans Fail You</h2>
        <p className="text-muted-foreground mb-6">
          Here's what typically happens with free plans online: the PDF shows you a nice drawing, maybe some dimensions, and a vague "materials needed" section that says "lumber, screws, and wire." That's it. No quantities, no specs, no hardware options. So you make your best guess, buy what seems reasonable, and then you're halfway through cutting and realize you need hinges—but not just any hinges. You need heavy-duty ones that won't sag.
        </p>
        <p className="text-muted-foreground mb-6">
          The worst part is the ripple effect. You skimp on the roofing material, it leaks after the first heavy rain, and now your coop reeks and your birds are stressed. Or you buy interior-grade plywood for the nesting boxes, and it starts rotting after one season. A complete materials list prevents all of this. Use our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline">free plan quality checklist</Link> to evaluate any plan before building.
        </p>
      </section>

      <section id="what-includes" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">What a Complete Materials List Actually Includes</h2>
        <p className="text-muted-foreground mb-6">A real materials list breaks down into categories:</p>
        <ul className="space-y-4 text-muted-foreground mb-6">
          <li><strong className="text-foreground">Lumber:</strong> Posts, beams, framing studs, joists, and trim. Not just "some 2x4s" but "(4) 2x4x8 pressure-treated."</li>
          <li><strong className="text-foreground">Plywood:</strong> Walls, floors, roofs, and nesting boxes. Exterior-rated (CDX or better) holds up to weather.</li>
          <li><strong className="text-foreground">Hardware cloth:</strong> 1/4-inch or 1/2-inch gauge, with specific square footage.</li>
          <li><strong className="text-foreground">Fasteners:</strong> Exterior screws, not interior drywall screws that rust in months.</li>
          <li><strong className="text-foreground">Hinges & latches:</strong> Heavy-duty stainless steel, predator-proof.</li>
          <li><strong className="text-foreground">Roofing:</strong> Corrugated metal, polycarbonate, or shingles with specific quantities.</li>
        </ul>
        <p className="text-muted-foreground">
          For a deeper dive into materials quality, see our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">coop materials guide</Link>.
        </p>
      </section>

      <section id="4x4-list" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Complete Materials List for a 4x4 Small Coop</h2>
        <p className="text-muted-foreground mb-4">Perfect for 2–4 birds. Builds in a weekend. Total: approximately $185–250.</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead><tr className="border-b border-border"><th className="p-3 text-foreground">Item</th><th className="p-3 text-foreground">Qty & Specs</th><th className="p-3 text-foreground">Cost</th></tr></thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><td className="p-3">2x4x8 pressure-treated</td><td className="p-3">4 boards</td><td className="p-3">$33.88</td></tr>
              <tr className="border-b border-border"><td className="p-3">2x4x10 pressure-treated</td><td className="p-3">2 boards</td><td className="p-3">$20.40</td></tr>
              <tr className="border-b border-border"><td className="p-3">2x6x8 pressure-treated</td><td className="p-3">1 board</td><td className="p-3">$14.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">1x8x8 cedar trim</td><td className="p-3">1 board</td><td className="p-3">$18.50</td></tr>
              <tr className="border-b border-border"><td className="p-3">3/4" exterior plywood 4x8</td><td className="p-3">1 sheet</td><td className="p-3">$54.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">1/2" exterior plywood 4x8</td><td className="p-3">1 sheet</td><td className="p-3">$48.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">1/4" hardware cloth (16-gauge)</td><td className="p-3">50 sq ft</td><td className="p-3">$21.00</td></tr>
              <tr className="border-b border-border"><td className="p-3">2.5" exterior wood screws</td><td className="p-3">5-lb box</td><td className="p-3">$24.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">1.25" exterior wood screws</td><td className="p-3">1-lb box</td><td className="p-3">$8.49</td></tr>
              <tr className="border-b border-border"><td className="p-3">3" stainless strap hinges</td><td className="p-3">2 pcs</td><td className="p-3">$15.00</td></tr>
              <tr className="border-b border-border"><td className="p-3">Heavy-duty latch bolt</td><td className="p-3">1 pc</td><td className="p-3">$9.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">Corrugated polycarbonate roofing</td><td className="p-3">1 roll (26"×8')</td><td className="p-3">$34.99</td></tr>
              <tr className="border-b border-border"><td className="p-3">Exterior wood stain (non-toxic)</td><td className="p-3">1 quart</td><td className="p-3">$18.50</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          For design options, check our <Link to="/guides/small-chicken-coop-plans" className="text-primary hover:underline">small chicken coop plans</Link> and <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4x4 chicken coop plans</Link>.
        </p>
      </section>

      <section id="4x8-list" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Complete Materials List for a 4x8 Medium Coop</h2>
        <p className="text-muted-foreground mb-4">Room for 4–6 chickens. Builds in 2–3 days. Total: approximately $380–480.</p>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-lg text-foreground mb-3">Lumber</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>(6) 2x4x8 pressure-treated — $50.82</li>
                <li>(2) 2x4x10 pressure-treated — $20.40</li>
                <li>(2) 2x6x8 pressure-treated — $29.98</li>
                <li>(1) 2x2x8 pressure-treated — $6.99</li>
                <li>(2) 1x8x8 cedar trim — $37.00</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-3">Plywood & Roofing</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>(2) 3/4" exterior plywood — $109.98</li>
                <li>(1) 1/2" exterior plywood — $48.99</li>
                <li>100 sq ft 1/4" hardware cloth — $42.00</li>
                <li>(2) corrugated roofing panels — $69.98</li>
                <li>(1) gallon exterior wood stain — $32.99</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="8x8-list" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Complete Materials List for an 8x8 Walk-In Coop</h2>
        <p className="text-muted-foreground mb-4">Walk-in headroom, space for 8–12 birds. Builds in 4–5 days. Total: approximately $750–950.</p>
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-lg text-foreground mb-3">Lumber & Structure</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>(8) 2x4x8 pressure-treated — $67.76</li>
                <li>(4) 2x4x10 — $40.80</li>
                <li>(4) 2x6x8 — $59.96</li>
                <li>(2) 4x4x8 posts — $55.98</li>
                <li>(4) 3/4" exterior plywood — $219.96</li>
                <li>(2) 1/2" exterior plywood — $97.98</li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-lg text-foreground mb-3">Hardware & Finish</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>200 sq ft hardware cloth — $84.00</li>
                <li>(3) 5-lb boxes screws — $74.97</li>
                <li>(4) 4" strap hinges — $51.96</li>
                <li>(3) heavy-duty latch bolts — $29.97</li>
                <li>(4) corrugated roofing panels — $139.96</li>
                <li>(2) gallons exterior stain — $65.98</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mt-4">
          For more large-coop design options, see our <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">large chicken coop plans</Link> and <Link to="/guides/walk-in-chicken-coop-plans" className="text-primary hover:underline">walk-in coop plans</Link>.
        </p>
      </section>

      <section id="where-to-buy" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Where to Buy Each Item</h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="text-foreground">Home Depot:</strong> Solid for lumber, plywood, and most fasteners. Good selection of hinges and hardware cloth.</p>
          <p><strong className="text-foreground">Lowe's:</strong> Similar pricing to Home Depot. Wider selection of roofing options.</p>
          <p><strong className="text-foreground">Tractor Supply:</strong> Excellent hardware cloth selection and competitive tool prices.</p>
          <p><strong className="text-foreground">Amazon:</strong> Best for hardware, fasteners, and hinges in bulk.</p>
          <p><strong className="text-foreground">Local lumber yards:</strong> Often beat big-box pricing on quality lumber. They'll cut to length for free.</p>
        </div>
        <p className="text-muted-foreground mt-6">
          Our recommendation: buy lumber at Home Depot or local lumber yard, hardware cloth at Tractor Supply, fasteners at Home Depot or Amazon, and roofing at Lowe's.
        </p>
      </section>

      <section id="mistakes" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Mistakes to Avoid When Buying Materials</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li><strong className="text-foreground">Using interior plywood for floors or nesting boxes.</strong> Interior plywood starts delaminating after 6–12 months. Exterior plywood (CDX rated) costs $5–10 more per sheet and lasts 5+ years.</li>
          <li><strong className="text-foreground">Buying thin or large-mesh hardware cloth.</strong> 1-inch mesh lets snakes and raccoons through. Use 1/4-inch, 16-gauge minimum.</li>
          <li><strong className="text-foreground">Skipping pressure-treated lumber for ground contact.</strong> Regular lumber rots in 2–3 years. Pressure-treated lasts 15–20 years.</li>
          <li><strong className="text-foreground">Buying cheap hinges.</strong> A $3 hinge sags within a season. Spend $7–12 on stainless steel strap hinges.</li>
          <li><strong className="text-foreground">Using regular screws instead of exterior screws.</strong> Regular drywall screws rust in 6 months.</li>
          <li><strong className="text-foreground">Pressure-treating the roost bars.</strong> Don't use treated wood on surfaces where birds sit. Use regular cedar or pine for roosts.</li>
        </ul>
      </section>

      <section id="save-money" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">How to Save Money Without Sacrificing Quality</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>Buy dimensional lumber in bulk—price per board drops about 10%</li>
          <li>Shop end-of-season sales (late August/early September)—15–25% off</li>
          <li>Paint or stain yourself instead of hiring out</li>
          <li>Use standard lumber sizes instead of custom cuts</li>
          <li>Buy hardware cloth in bulk—50-foot roll is cheaper per sq ft</li>
          <li>Make nesting boxes from scrap plywood</li>
          <li>Rent a circular saw and jigsaw instead of buying ($10–15/day)</li>
        </ul>
        <p className="text-muted-foreground mt-6">
          For more cost-saving strategies, check our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">2026 cost breakdown</Link> and <Link to="/guides/free-chicken-coop-plans" className="text-primary hover:underline">free chicken coop plans guide</Link>.
        </p>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Do I really need pressure-treated lumber?</h3>
            <p className="text-muted-foreground">For anything that touches the ground or stays damp, yes. It lasts 15–20 years vs. 2–3 for regular wood. For parts that stay dry (roof frame, upper walls), regular lumber works fine.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">What's the difference between 1/4-inch and 1/2-inch hardware cloth?</h3>
            <p className="text-muted-foreground">1/4-inch mesh keeps out snakes, mice, and small predators. 1/2-inch keeps out raccoons and larger pests but snakes can still get through.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can I use regular screws instead of exterior screws?</h3>
            <p className="text-muted-foreground">You can, but they'll rust within 6 months to a year. Exterior screws (zinc-plated or stainless) cost $5–10 more per box and last the life of the coop.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Should I stain or paint the coop?</h3>
            <p className="text-muted-foreground">Stain looks better and lasts longer outdoors. Paint can chip and peel. Choose one rated for exterior use and poultry-safe (non-toxic when dry).</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How much should I budget for a complete coop build including tools?</h3>
            <p className="text-muted-foreground">If you already own a drill, saw, and jigsaw: $185–250 for a 4x4, $380–480 for a 4x8, and $750–950 for an 8x8. If you need tools, add $150–200. Renting tools adds $30–50 for a weekend.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h2 className="font-display text-2xl text-foreground mb-4">Ready to Build?</h2>
        <p className="text-muted-foreground mb-4">
          Now that you have the exact materials and prices, you can shop confidently. For next steps on design and construction, check out our <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">complete guide to building a chicken coop</Link>, or if you're brand new, our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner chicken coop plans</Link> walk through the whole process step by step. Browse all of our <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">chicken coop plans</Link> for the full collection of designs.
        </p>
        <p className="text-foreground font-semibold">Good luck with your build.</p>
      </section>
    </BlogLayout>
  );
};

export default CoopPlansMaterialsList;
