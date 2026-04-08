import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const AFrameCoopPlans = () => {
  const article = getArticleBySlug('a-frame-chicken-coop-plans');
  if (!article) return <div>Article not found</div>;

  return (
    <BlogLayout article={article}>
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>If you're looking to raise a handful of backyard chickens without spending a fortune or burning a week on construction, an A-frame coop is honestly your best move.</strong> We've built a few of these over the years, and the simplicity is part of the appeal: two triangular walls, a peaked roof that pulls double duty as your structure, and enough space for 3–5 hens.
        </p>
        <p className="text-muted-foreground mb-6">
          You're looking at roughly $100–200 in lumber, a weekend of work, and a coop that'll last years if you build it right. In this guide, we're sharing three free plans—from the bare-bones starter to a mobile version on wheels—plus the honest truth about where A-frames shine and where they fall short. For more designs at every scale, see our <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">complete chicken coop plans guide</Link>.
        </p>
      </section>

      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#what-is" className="text-primary hover:underline">What Is an A-Frame Chicken Coop?</a></li>
          <li><a href="#pros-cons" className="text-primary hover:underline">A-Frame Pros and Cons (Honest Version)</a></li>
          <li><a href="#space" className="text-primary hover:underline">Space Requirements</a></li>
          <li><a href="#3-plans" className="text-primary hover:underline">3 Free A-Frame Chicken Coop Plans</a></li>
          <li><a href="#materials" className="text-primary hover:underline">Materials List</a></li>
          <li><a href="#predator-proofing" className="text-primary hover:underline">Predator-Proofing</a></li>
          <li><a href="#is-right" className="text-primary hover:underline">Is an A-Frame Right for You?</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      <section id="what-is" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">What Is an A-Frame Chicken Coop?</h2>
        <p className="text-muted-foreground mb-6">
          An A-frame coop is about as simple as chicken housing gets. Picture two triangular end walls connected by a ridge beam running the length of the structure—and that peaked roof IS your walls. There's no separate wall-and-roof assembly. The geometry is what makes it clever: both sides of the peaked roof form the coop walls, so you're doing less carpentry, using less lumber, and ending up with a structure that's surprisingly rigid.
        </p>
        <p className="text-muted-foreground mb-6">
          A typical A-frame runs about 8 feet long with a 4-foot base and a 4-foot peak height. That gives you roughly 32 square feet of footprint, though the usable floor space is closer to 20 square feet because the walls slope inward. The peaked design sheds rain and snow naturally without pooling.
        </p>
        <p className="text-muted-foreground mb-6">
          What we like most is the material efficiency. You're cutting only 6–8 major pieces. Compare that to a rectangular coop with separate walls and a pitched roof, and you're looking at far fewer cuts and significantly less waste.
        </p>
      </section>

      <section id="pros-cons" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">A-Frame Pros and Cons (Honest Version)</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-xl text-foreground mb-4 text-green-600">✅ Why We Recommend A-Frames</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Cheapest coop you can build ($100–200)</li>
              <li>Fewest cuts of any coop style</li>
              <li>Inherently stable — weight distributes naturally</li>
              <li>Peaked roof sheds water and snow without gutters</li>
              <li>Movable if built on skids</li>
              <li>Comfortably houses 3–5 laying hens</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-xl text-foreground mb-4 text-red-600">❌ Where A-Frames Fall Short</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Low headroom — you cannot stand inside</li>
              <li>Nesting box placement is less flexible</li>
              <li>Insulation for cold climates is harder to add</li>
              <li>Predator-proofing the end walls requires attention</li>
              <li>Maxes out at around 4–5 hens comfortably</li>
              <li>Larger breeds find sloped walls annoying</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="space" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Space Requirements for an A-Frame Coop</h2>
        <p className="text-muted-foreground mb-6">
          A standard 4x8 A-frame gives you about 32 square feet of footprint, but usable floor space is roughly 20 square feet. Hens need a minimum of 3–4 square feet per bird. That means a standard A-frame can safely house 5 hens if they have outdoor space to roam.
        </p>
        <p className="text-muted-foreground mb-6">
          Ventilation is critical in an A-frame. Build hardware-cloth-backed vents into both triangular end walls. These should total at least 1 square foot of vent space per bird. For sizing details, check our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link>.
        </p>
      </section>

      <section id="3-plans" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">3 Free A-Frame Chicken Coop Plans</h2>

        <div className="space-y-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">Plan 1: The Simple 4x8 A-Frame ($100–150)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Houses: 3–4 hens | Skill: Beginner | Build time: 6–8 hours</p>
            <p className="text-muted-foreground mb-4">
              This is the starter—the coop we recommend for anyone building their first shelter. 4 feet wide at the base, 8 feet long, with a 4-foot peak. Materials: Four 2x4x8 boards for base and ridge, eight 2x4x10 boards for the roof walls, one 4x8 sheet of siding, 50 linear feet of 1/2-inch hardware cloth, roofing material, two heavy-duty latches, and exterior screws.
            </p>
            <p className="text-muted-foreground">Why we like it: Cheapest option, fewest cuts, straightforward angles, no special tools needed.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">Plan 2: The Raised A-Frame with Enclosed Run ($200–300)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Houses: 4–5 hens | Skill: Intermediate | Build time: 12–16 hours</p>
            <p className="text-muted-foreground mb-4">
              Same A-frame but elevated 24 inches on 4x4 posts, then enclosing a 4x8 run underneath. Chickens live in the elevated coop at night and can access the enclosed run below during the day.
            </p>
            <p className="text-muted-foreground">Why we like it: The enclosed run keeps hens out of rain and sun, reduces predator access, and the elevated coop stays cleaner and drier.</p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">Plan 3: The Mobile A-Frame Tractor ($250–400)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Houses: 3–4 hens | Skill: Intermediate | Build time: 8–10 hours</p>
            <p className="text-muted-foreground mb-4">
              A chicken tractor built on a frame with wheels or skids so you can move it across your yard. We build ours 4 feet wide and 6 feet long to keep the weight manageable for one person.
            </p>
            <p className="text-muted-foreground">
              For detailed mobile coop plans, visit our <Link to="/guides/mobile-chicken-coop-plans" className="text-primary hover:underline">mobile chicken coop plans</Link> guide.
            </p>
          </div>
        </div>
      </section>

      <section id="materials" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Materials List for a Basic A-Frame Coop</h2>
        <p className="text-muted-foreground mb-4">Here's what you'll buy for Plan 1 (the simple 4x8 A-frame):</p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Lumber</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>4 × 2x4x8 boards (base and ridge)</li>
              <li>8 × 2x4x10 boards (angled roof walls)</li>
              <li>2 × 2x6 boards (optional, for door frame)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Siding & Roofing</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>1 × 4x8 sheet T1-11 or OSB siding</li>
              <li>Corrugated roofing panels or shingles</li>
              <li>Roofing nails/screws</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Hardware</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>50 linear ft of 1/2" hardware cloth</li>
              <li>3" exterior wood screws (5-lb box)</li>
              <li>Heavy-duty staples or screws for mesh</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-display text-lg text-foreground mb-3">Hinges & Latches</h4>
            <ul className="space-y-1 text-muted-foreground text-sm">
              <li>2 × heavy-duty strap hinges</li>
              <li>2 × predator-proof latches (slide bolt)</li>
              <li>Hook-and-eye backup latches</li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground">
          <strong>Estimated cost: $100–180.</strong> For detailed pricing, see our <Link to="/guides/chicken-coop-plans-materials-list" className="text-primary hover:underline">chicken coop plans with materials list</Link> guide and <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">coop materials guide</Link>.
        </p>
      </section>

      <section id="predator-proofing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Predator-Proofing an A-Frame</h2>
        <p className="text-muted-foreground mb-6">
          The triangular end walls are the vulnerability. Cover every opening with 1/2-inch hardware cloth—not chicken wire. Bury a 12-inch apron around the perimeter. Use two-step latches on every door. Back all ventilation openings with hardware cloth. And close the coop every night at dusk. Full details in our <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proof coop guide</Link>.
        </p>
      </section>

      <section id="is-right" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Is an A-Frame Right for You?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-xl text-foreground mb-4">Yes, build an A-frame if:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>You're keeping 3–5 hens</li>
              <li>This is your first coop build</li>
              <li>Your budget is under $300</li>
              <li>You're willing to bend to access nesting boxes</li>
              <li>You live in a mild-winter climate</li>
              <li>You like the idea of a mobile coop</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-xl text-foreground mb-4">No, skip the A-frame if:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>You're planning for 6+ hens</li>
              <li>You live somewhere with harsh, freezing winters</li>
              <li>You have mobility issues and need walk-in access</li>
              <li>You prefer a larger coop with headroom</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Try our <Link to="/guides/walk-in-chicken-coop-plans" className="text-primary hover:underline">walk-in coop plans</Link> or <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4x4 coop plans</Link> instead.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How long does it take to build an A-frame chicken coop?</h3>
            <p className="text-muted-foreground">A basic 4x8 A-frame takes 6–8 hours for one person, 4–5 hours with two people. Raised or mobile versions add 4–8 hours.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How many chickens can fit in a 4x8 A-frame?</h3>
            <p className="text-muted-foreground">Comfortably, 4–5 hens. The 32 square feet of footprint translates to roughly 20 square feet of usable floor space due to sloped walls.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Is an A-frame coop predator-proof?</h3>
            <p className="text-muted-foreground">Yes, if you build it right. Hardware cloth on both end walls, a buried apron, a two-step door latch, and backed roof vents.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can an A-frame coop handle winter?</h3>
            <p className="text-muted-foreground">In mild winters, yes. In cold climates with extended freezing, it needs modifications. Consider a rectangular coop if you're in a harsh-winter zone. See our <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulation guide</Link>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">What's the cheapest chicken coop to build?</h3>
            <p className="text-muted-foreground">An A-frame. You can build a functional 4x8 A-frame for $100–150, which is roughly half the cost of a comparable rectangular coop.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h2 className="font-display text-2xl text-foreground mb-4">Get Started on Your A-Frame Build</h2>
        <p className="text-muted-foreground mb-4">
          If this is your first coop, start with Plan 1. It's forgiving, fast, and you'll learn the basics without overcomplicating things. Want to verify your coop size matches your flock? Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link>. And when you're ready to explore more options, browse our full collection of <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">chicken coop plans</Link>.
        </p>
      </section>
    </BlogLayout>
  );
};

export default AFrameCoopPlans;
