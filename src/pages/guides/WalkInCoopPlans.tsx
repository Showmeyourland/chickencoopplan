import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const WalkInCoopPlans = () => {
  const article = getArticleBySlug('walk-in-chicken-coop-plans');
  if (!article) return <div>Article not found</div>;

  return (
    <BlogLayout article={article}>
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>A walk-in chicken coop changes everything.</strong> If you've been hunched over, squeezing through a tiny door, or wrestling with feeders in a cramped space, you already know why. Working inside your coop—not around it—saves time, reduces stress, and keeps your birds healthier.
        </p>
        <p className="text-muted-foreground mb-6">
          The difference between a traditional coop and a walk-in design is simple: comfort. You can stand fully upright, move equipment without contortion, and actually observe your flock up close. A walk-in coop for 10–20 backyard hens is entirely manageable—it doesn't require advanced carpentry skills, and the materials cost under $1,500 for most designs. For the full range of designs at every scale, see our <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">complete chicken coop plans guide</Link>.
        </p>
      </section>

      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#why-walk-in" className="text-primary hover:underline">Why Choose a Walk-In Coop?</a></li>
          <li><a href="#sizing" className="text-primary hover:underline">How to Size a Walk-In Coop</a></li>
          <li><a href="#5-plans" className="text-primary hover:underline">Five Walk-In Chicken Coop Plans</a></li>
          <li><a href="#framing" className="text-primary hover:underline">Framing & Foundation Basics</a></li>
          <li><a href="#roofing" className="text-primary hover:underline">Roofing Options</a></li>
          <li><a href="#ventilation" className="text-primary hover:underline">Ventilation Strategy</a></li>
          <li><a href="#predator-proofing" className="text-primary hover:underline">Predator-Proofing</a></li>
          <li><a href="#cost-breakdown" className="text-primary hover:underline">Cost Breakdown by Coop Size</a></li>
          <li><a href="#mistakes" className="text-primary hover:underline">Common Mistakes</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      <section id="why-walk-in" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Why Choose a Walk-In Coop Over Traditional Designs?</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-lg text-foreground mb-3">Traditional Coop Problems</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Stooped or crawling access</li>
              <li>Cramming feeders into corners</li>
              <li>Difficult to spot health issues</li>
              <li>Double your cleaning time</li>
              <li>Hard to winterize</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-lg text-foreground mb-3">Walk-In Advantages</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Stand-up access (6+ feet tall)</li>
              <li>Ergonomic equipment placement</li>
              <li>Line-of-sight flock observation</li>
              <li>Easier routine maintenance</li>
              <li>Room to upgrade systems</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground">
          The real calculation isn't about cost per square foot. It's about whether you want to visit your flock or tolerate a quick chore. Most of us choose to visit.
        </p>
      </section>

      <section id="sizing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">How to Size a Walk-In Chicken Coop</h2>
        <p className="text-muted-foreground mb-6">
          Chickens need at least 4 square feet per bird inside the coop. We recommend 5 square feet per bird if you want breathing room. For the run, at least 10 square feet per bird.
        </p>
        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <h3 className="font-display text-xl text-foreground mb-4">Quick Sizing Guide</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-secondary/50 rounded-xl">
              <p className="text-2xl font-bold text-foreground">12 birds</p>
              <p className="text-sm text-muted-foreground">48 sqft coop / 120 sqft run</p>
              <p className="text-sm text-primary">→ 6x8 coop</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <p className="text-2xl font-bold text-foreground">16 birds</p>
              <p className="text-sm text-muted-foreground">64 sqft coop / 160 sqft run</p>
              <p className="text-sm text-primary">→ 8x8 coop</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <p className="text-2xl font-bold text-foreground">20 birds</p>
              <p className="text-sm text-muted-foreground">80 sqft coop / 200 sqft run</p>
              <p className="text-sm text-primary">→ 8x10 coop</p>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground">
          We've built a <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link> that does this math instantly.
        </p>
      </section>

      <section id="5-plans" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Five Walk-In Chicken Coop Plans</h2>

        <div className="space-y-8">
          {[
            { name: "Plan 1: The 6x8 Walk-In Coop", birds: "10–12", sqft: 48, cost: "$850–1,100", height: "6.5 ft" },
            { name: "Plan 2: The 8x8 Walk-In Coop", birds: "12–14", sqft: 64, cost: "$1,150–1,400", height: "6.5 ft" },
            { name: "Plan 3: The 8x10 Walk-In Coop", birds: "14–16", sqft: 80, cost: "$1,350–1,650", height: "6.5 ft" },
            { name: "Plan 4: The 10x12 Walk-In Coop", birds: "18–20", sqft: 120, cost: "$1,700–2,100", height: "7 ft" },
            { name: "Plan 5: The 10x16 Walk-In Coop", birds: "20–24", sqft: 160, cost: "$2,100–2,700", height: "7 ft" },
          ].map((plan, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">{plan.birds} hens</span>
                <span className="text-sm px-3 py-1 bg-secondary text-foreground rounded-full">{plan.sqft} sqft</span>
                <span className="text-sm px-3 py-1 bg-secondary text-foreground rounded-full">{plan.height} peak</span>
                <span className="text-sm px-3 py-1 bg-secondary text-foreground rounded-full">{plan.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="framing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Framing & Foundation Basics</h2>
        <p className="text-muted-foreground mb-6">
          All five plans assume concrete piers or a post-and-beam setup rather than a full concrete slab. Dig 16 inches deep, fill with 4 inches of gravel, then 8 inches of concrete pier. Place pressure-treated 4x4 posts at each corner and every 4 feet along the length. Wall frames use standard 2x4 studs, 16 inches on center.
        </p>
        <p className="text-muted-foreground mb-6">
          Plan for two entry points: one main human door (3 feet wide × 6 feet tall) and one egg collection door (2 feet wide × 3 feet tall, near the nesting boxes). For more detailed framing walkthroughs, see our <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">complete guide to building a chicken coop</Link>.
        </p>
      </section>

      <section id="roofing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Roofing Options</h2>
        <p className="text-muted-foreground mb-6">
          Corrugated metal roofing costs $1.50–2.50 per sqft installed, lasts 20–30 years, and drains excellently. For an 8x10 coop, you're looking at $120–200 in roofing material alone. We use metal almost exclusively on walk-in coops. We recommend a 4:12 pitch minimum; for walk-in coops, aim for 6:12 or higher to gain interior height. For roofing specifics, check our <Link to="/guides/chicken-coop-roofing-guide" className="text-primary hover:underline">chicken coop roofing guide</Link>.
        </p>
      </section>

      <section id="ventilation" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Ventilation Strategy</h2>
        <p className="text-muted-foreground mb-6">
          You need at least 1 square foot of ventilation opening per 10 square feet of coop floor space. For an 8x10 coop: minimum 8 sqft of ventilation. Place high-side vents on the wall opposite the main door. Winter strategy: close lower vents 75%, keep high vents open. Never seal a coop completely. Our <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">ventilation guide</Link> goes deep on air exchange rates.
        </p>
      </section>

      <section id="predator-proofing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Predator-Proofing for Walk-In Coops</h2>
        <p className="text-muted-foreground mb-6">
          Use 1/4-inch hardware cloth, not chicken wire. Cover entire exterior walls from the floor up to 18 inches high. Extend hardware cloth 12 inches out and down from the foundation perimeter. Use slide bolt or carabiner latches. See our <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proof coop guide</Link> for detailed predator-by-predator breakdown.
        </p>
      </section>

      <section id="cost-breakdown" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Cost Breakdown by Coop Size</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead><tr className="border-b border-border"><th className="p-3 text-foreground">Coop Size</th><th className="p-3 text-foreground">DIY Cost</th><th className="p-3 text-foreground">Hired Cost</th></tr></thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><td className="p-3">6x8</td><td className="p-3">$800</td><td className="p-3">$1,400–1,800</td></tr>
              <tr className="border-b border-border"><td className="p-3">8x8</td><td className="p-3">$1,150</td><td className="p-3">$1,950–2,350</td></tr>
              <tr className="border-b border-border"><td className="p-3">8x10</td><td className="p-3">$1,350</td><td className="p-3">$2,350–2,850</td></tr>
              <tr className="border-b border-border"><td className="p-3">10x12</td><td className="p-3">$1,750</td><td className="p-3">$2,950–3,550</td></tr>
              <tr className="border-b border-border"><td className="p-3">10x16</td><td className="p-3">$2,200</td><td className="p-3">$3,800–4,600</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          For detailed 2026 pricing, our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">cost breakdown guide</Link> has line-by-line pricing. For materials sourcing tips, see our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">coop materials guide</Link>.
        </p>
      </section>

      <section id="mistakes" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Common Mistakes We See Backyard Builders Make</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li><strong className="text-foreground">Skimping on ventilation</strong> kills birds faster than cold.</li>
          <li><strong className="text-foreground">Using chicken wire instead of hardware cloth</strong> lets raccoons tear through in minutes.</li>
          <li><strong className="text-foreground">Building on solid concrete</strong> wicks moisture into wood, causing rot in 5–7 years.</li>
          <li><strong className="text-foreground">Making the main door too small</strong> means you'll avoid using the coop. Go for 3x6 minimum.</li>
          <li><strong className="text-foreground">Underestimating nesting box needs</strong> causes pecking stress—plan for 1 box per 3 birds.</li>
          <li><strong className="text-foreground">Poor roof slope (under 4:12)</strong> causes leaks and interior moisture.</li>
        </ul>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can I build a walk-in coop in a subdivision with setback requirements?</h3>
            <p className="text-muted-foreground">Yes, but check local codes first. Many towns allow structures under 200 sqft without a permit. Our <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">coop permit guide</Link> walks you through the research.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How long does it take to build a walk-in coop?</h3>
            <p className="text-muted-foreground">A 6x8 typically takes 16–20 hours. An 8x10 runs 24–32 hours solo. A 10x12 is a 40+ hour project. Most folks spread it across 3–5 weekends.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Should I insulate a walk-in coop for winter?</h3>
            <p className="text-muted-foreground">In climates colder than 0°F regularly, insulation helps. Add 2–3 inches of rigid foam on north-facing walls. See our <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulation guide</Link>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">What's the best flooring for a walk-in coop?</h3>
            <p className="text-muted-foreground">Deep litter method (6–8 inches of pine shavings) is most practical. Our <Link to="/guides/chicken-coop-flooring-guide" className="text-primary hover:underline">flooring guide</Link> covers sand, pea gravel, and rubber options.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can I attach a run directly to a walk-in coop?</h3>
            <p className="text-muted-foreground">Absolutely. A 10x16 coop can have a 10x20 or 10x24 run attached. Our <Link to="/guides/chicken-run-design-guide" className="text-primary hover:underline">run design guide</Link> covers this.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h2 className="font-display text-2xl text-foreground mb-4">Build Once, Enjoy for Years</h2>
        <p className="text-muted-foreground mb-4">
          Start with an 8x10 if you're unsure. It's the Goldilocks size: big enough to feel genuinely walk-in, small enough to build in a weekend or two. Grab our <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">large coop plans guide</Link> for additional design variations, or use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">size calculator</Link> to confirm dimensions for your flock.
        </p>
        <p className="text-foreground font-semibold">The folks who stick with chicken keeping almost always say the same thing: "I should've built the walk-in coop first."</p>
      </section>
    </BlogLayout>
  );
};

export default WalkInCoopPlans;
