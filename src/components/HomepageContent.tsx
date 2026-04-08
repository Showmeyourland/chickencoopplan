import { Link } from "react-router-dom";
import { FileText, Home, CloudSun } from "lucide-react";

const WhyCoopCraft = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <h2 className="text-3xl font-display text-foreground text-center mb-10">Why CoopCraft?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-3">Free, Detailed Plans</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every plan includes exact materials lists, cut diagrams, and step-by-step instructions. No fluff, no upsells on the free plans. Our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> are designed by builders who've actually constructed each design — not generated from generic templates. You get real measurements, real costs, and real build times tested in actual backyards.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
            <Home className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-3">Built for Real Backyards</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Our plans are designed for common yard sizes, real lumber dimensions from Home Depot and Lowe's, and tools you probably already own. We don't use exotic materials or require expensive specialty tools. Whether you have a <Link to="/guides/small-backyard-coop-plans" className="text-primary hover:underline">small backyard</Link> or a full homestead, there's a plan sized for your space.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-4">
            <CloudSun className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-lg text-foreground mb-3">Climate-Aware</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Guides for <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">cold winters</Link>, <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">desert heat</Link>, and everything in between — because a coop that works in Vermont won't work in Phoenix. Our <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">climate-specific designs</Link> account for ventilation, insulation, and roofing differences across every weather zone.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HowToChoose = () => (
  <section className="py-16 bg-muted/30">
    <div className="container max-w-4xl">
      <h2 className="text-3xl font-display text-foreground text-center mb-8">How to Choose the Right Coop Plan</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>
          Choosing the right chicken coop plan starts with one question: <strong className="text-foreground">how many chickens do you want to keep?</strong> Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link> to get exact square footage — the standard rule is 4 square feet per bird inside the coop and 10 square feet per bird in the outdoor run. Undersizing your coop is the single most common mistake beginners make, and it leads to pecking, disease, and reduced egg production.
        </p>
        <p>
          Next, consider your <strong className="text-foreground">run space and outdoor setup</strong>. If your birds will free-range during the day, you can use a smaller run. If they'll be confined, you need a larger <Link to="/guides/chicken-run-design-guide" className="text-primary hover:underline">chicken run design</Link> with proper enrichment to keep your flock healthy and active.
        </p>
        <p>
          Your <strong className="text-foreground">local climate</strong> determines which design features matter most. Cold-climate keepers need <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulation</Link> and wind protection, while hot-climate builders should prioritize <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">ventilation</Link> and shade. Our <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">climate-specific coop guide</Link> walks you through these decisions zone by zone.
        </p>
        <p>
          <strong className="text-foreground">Budget</strong> is the final deciding factor. A basic <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4×4 coop</Link> can be built for under $300, while a walk-in design for 20+ birds might cost $1,500–$3,000 in materials. Check our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">2026 cost breakdown</Link> for exact pricing by coop size and material quality. First-time builders should also review our <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">expensive coop mistakes guide</Link> — avoiding just two or three common errors can save you $500 or more.
        </p>
        <p>
          Not sure where to start? Our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner chicken coop plans</Link> use basic tools and simple joinery that anyone can follow, even with zero woodworking experience. Browse our full collection of <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> to find the right fit for your flock, yard, and skill level.
        </p>
      </div>
    </div>
  </section>
);

const WhatYoullNeed = () => (
  <section className="py-16 bg-background">
    <div className="container max-w-4xl">
      <h2 className="text-3xl font-display text-foreground text-center mb-8">What You'll Need to Build</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>
          Most of our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> require tools you probably already have in your garage. Here's the basic toolkit for a standard coop build:
        </p>
        <ul className="space-y-2">
          <li><strong className="text-foreground">Circular saw or miter saw</strong> — for cutting lumber and plywood to size</li>
          <li><strong className="text-foreground">Drill/driver with bits</strong> — for drilling pilot holes and driving screws</li>
          <li><strong className="text-foreground">Measuring tape and speed square</strong> — for accurate cuts and 90-degree angles</li>
          <li><strong className="text-foreground">Level (4-foot)</strong> — essential for a plumb, square coop that won't sag</li>
          <li><strong className="text-foreground">Tin snips or aviation snips</strong> — for cutting hardware cloth to size</li>
          <li><strong className="text-foreground">Staple gun (heavy-duty)</strong> — for securing hardware cloth and roofing felt</li>
          <li><strong className="text-foreground">Hammer and pry bar</strong> — for nailing trim and correcting mistakes</li>
        </ul>
        <p>
          For a complete breakdown of lumber, hardware cloth, roofing, fasteners, and finishing materials, see our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">chicken coop materials guide</Link>. It includes current 2026 prices, supplier recommendations, and which materials to skip to save money without sacrificing durability.
        </p>
      </div>
    </div>
  </section>
);

const BuiltToLastVsBudget = () => (
  <section className="py-16 bg-muted/30">
    <div className="container max-w-4xl">
      <h2 className="text-3xl font-display text-foreground text-center mb-8">Built-to-Last vs Budget Builds</h2>
      <div className="prose prose-lg max-w-none text-muted-foreground">
        <p>
          A budget coop ($250–$400 in materials) gets your flock housed quickly and works fine for 5–8 years with regular maintenance. A premium build ($700–$1,200+) uses pressure-treated lumber, metal roofing, and heavy-gauge hardware cloth that lasts 20–25 years with minimal upkeep. The right choice depends on your timeline and how long you plan to keep chickens.
        </p>
        <p>
          The biggest cost difference isn't materials — it's <strong className="text-foreground">mistakes</strong>. Buying the wrong wire, undersizing ventilation, or skipping a predator apron can cost more than the entire coop build to fix later. Read our <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">7 expensive chicken coop mistakes</Link> guide before you start, and compare <Link to="/guides/free-vs-premium-plans" className="text-primary hover:underline">free vs premium plans</Link> to decide which level of detail you need. Either way, start with solid <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> — they're the cheapest way to avoid the costliest errors.
        </p>
      </div>
    </div>
  </section>
);

const HomepageContent = () => (
  <>
    <WhyCoopCraft />
    <HowToChoose />
    <WhatYoullNeed />
    <BuiltToLastVsBudget />
  </>
);

export default HomepageContent;
