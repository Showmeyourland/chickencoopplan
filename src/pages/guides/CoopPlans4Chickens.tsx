import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const CoopPlans4Chickens = () => {
  const article = getArticleBySlug('chicken-coop-plans-4-chickens');

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Four hens is the goldilocks number for backyard chicken keeping.</strong> It's enough to give your family roughly a dozen fresh eggs per week during peak season—enough to feel like you're actually getting something from the project. It's small enough to fit comfortably in a 10x10 corner of most suburban yards without looking like you're running a farm operation.
        </p>
        <p className="text-muted-foreground mb-6">
          And here's the thing most city ordinances don't explicitly prohibit four chickens, whereas they do get nervous about twenty. You'll spend about $200 to $500 building a proper home for four hens, and you'll do it over a weekend with basic tools.
        </p>
        <p className="text-muted-foreground mb-8">
          We've built coops for four hens, we've seen what works and what fails by mid-summer, and we've watched plenty of first-timers avoid the expensive mistakes. In this guide, we're sharing five specific plans that we'd actually recommend to someone building their first coop. Each one includes footprints, material requirements, cost estimates, and what makes it work specifically for a flock of four. For the full collection of designs across all flock sizes, see our <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">complete chicken coop plans guide</Link>.
        </p>
      </section>

      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#space" className="text-primary hover:underline">How Much Space Do 4 Chickens Actually Need?</a></li>
          <li><a href="#5-plans" className="text-primary hover:underline">The 5 Best Chicken Coop Plans for 4 Chickens</a></li>
          <li><a href="#materials" className="text-primary hover:underline">Materials and Costs</a></li>
          <li><a href="#predator-proofing" className="text-primary hover:underline">Predator-Proofing for a Small Coop</a></li>
          <li><a href="#mistakes" className="text-primary hover:underline">Common Mistakes When Building for 4 Hens</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      <section id="space" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">How Much Space Do 4 Chickens Actually Need?</h2>
        <p className="text-muted-foreground mb-6">
          This is the question we get wrong most often, and the question that matters most. If you want chickens that lay consistently, don't peck each other bald, and don't turn your coop into a disease incubator by July, you need to give them room.
        </p>

        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="font-display text-2xl text-foreground mb-6">Space Requirements for 4 Hens</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-secondary/50 rounded-xl">
              <h4 className="font-display text-lg text-foreground mb-3">Coop Interior</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Minimum:</strong> 16 sq ft (4x4)</li>
                <li><strong className="text-foreground">Sweet spot:</strong> 24 sq ft (4x6)</li>
                <li><strong className="text-foreground">Nesting boxes:</strong> 1–2 boxes (12x12")</li>
                <li><strong className="text-foreground">Roosting bar:</strong> 32" minimum (8"/bird)</li>
              </ul>
            </div>
            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <h4 className="font-display text-lg text-foreground mb-3">Outdoor Run</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Minimum:</strong> 40 sq ft (4x10)</li>
                <li><strong className="text-foreground">Comfortable:</strong> 80+ sq ft</li>
                <li><strong className="text-foreground">Ventilation:</strong> 2+ sq ft of vent area</li>
                <li><strong className="text-foreground">Access hatch:</strong> 2'x18" minimum</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">
          What happens if you undersize? Pecking. Feather loss. Stressed birds that are more susceptible to disease. A nasty spiral where the coop becomes a problem instead of an asset. For a detailed breakdown of your specific situation, check our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link>.
        </p>
      </section>

      <section id="5-plans" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">The 5 Best Chicken Coop Plans for 4 Chickens</h2>

        <div className="space-y-10">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">1. The Classic 4x4 Walk-By Coop ($200–350)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Footprint: 4x4 coop + 4x8 run | Difficulty: Beginner | Build time: 6–8 hours</p>
            <p className="text-muted-foreground mb-4">
              This is the design you see in every backyard chicken guide, and it's popular because it actually works. A pitched-roof coop sitting on stilts, with an attached run. Four walls, two roof panels, and a floor. Stilts keep predators from digging under.
            </p>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Materials:</strong> pressure-treated 4x4s for legs, 2x4 framing, T1-11 plywood siding or cedar, metal roofing, 1/2-inch hardware cloth, exterior wood screws, hinges, and a predator-proof latch.
            </p>
            <p className="text-muted-foreground">
              Why it's good for 4 hens: gives you the minimum space without being cramped, easily expandable, and simple enough that you won't hate the building process. Learn more at <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4x4 Chicken Coop Plans</Link>.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">2. The A-Frame Starter Coop ($150–250)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Footprint: 4x8 | Difficulty: Absolute beginner | Build time: 4–5 hours</p>
            <p className="text-muted-foreground mb-4">
              If you're on a tight budget or you just want the simplest possible build, the A-frame wins. Only six major cuts needed. Takes up a 4x8 footprint, giving you 32 square feet. The A-frame is forgiving—if your angles aren't perfect, it doesn't matter much because gravity and the peaked shape hold everything together.
            </p>
            <p className="text-muted-foreground">
              See our <Link to="/guides/a-frame-chicken-coop-plans" className="text-primary hover:underline">A-frame chicken coop plans</Link> for detailed build instructions.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">3. The Tractor Coop for 4 Hens ($250–400)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Footprint: 4x6 | Difficulty: Intermediate | Build time: 8–10 hours</p>
            <p className="text-muted-foreground mb-4">
              A "tractor" is a mobile coop with wheels or skids—you move it around your yard to give your hens fresh grass every day. Hens get bug hunting, grass, and whatever insects are in the soil. Your lawn gets a light scratch and some fertilizer. Everyone wins, except maybe the grubs.
            </p>
            <p className="text-muted-foreground">
              See <Link to="/guides/mobile-chicken-coop-plans" className="text-primary hover:underline">Mobile Chicken Coop Plans</Link> for the full guide.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">4. The Urban Corner Coop ($300–500)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Footprint: 3x6 | Difficulty: Intermediate | Build time: 8–9 hours</p>
            <p className="text-muted-foreground mb-4">
              City lot? HOA? Small backyard? This design prioritizes vertical space and a small footprint. It's tall and narrow so it fits in the corner of a yard or against a fence without looking like you've built a barn. Roost area on top, nesting box area in the middle, and access/storage on the bottom.
            </p>
            <p className="text-muted-foreground">
              See <Link to="/guides/urban-chicken-coop-plans" className="text-primary hover:underline">Urban Chicken Coop Plans</Link> for more.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-display text-2xl text-foreground mb-2">5. The Converted Shed ($400–700)</h3>
            <p className="text-sm text-primary font-semibold mb-4">Footprint: 4x6 to 6x8 | Difficulty: Intermediate | Build time: 4–6 hours of modification</p>
            <p className="text-muted-foreground mb-4">
              This isn't building from scratch—it's taking a pre-built storage shed (usually $300–400) and converting it into a coop. You're trading the romantic notion of "I built my coop" for speed, structural integrity, and the ability to upgrade to five or six hens later.
            </p>
          </div>
        </div>
      </section>

      <section id="materials" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Materials and Costs</h2>
        <p className="text-muted-foreground mb-6">Here's a general materials breakdown for a basic 4x4 coop for 4 hens:</p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-left border-collapse">
            <thead><tr className="border-b border-border"><th className="p-3 text-foreground">Item</th><th className="p-3 text-foreground">Cost</th></tr></thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><td className="p-3">Pressure-treated 4x4s (4)</td><td className="p-3">$35–50</td></tr>
              <tr className="border-b border-border"><td className="p-3">2x4 framing lumber (8–10)</td><td className="p-3">$40–60</td></tr>
              <tr className="border-b border-border"><td className="p-3">T1-11 plywood siding (2 sheets)</td><td className="p-3">$50–80</td></tr>
              <tr className="border-b border-border"><td className="p-3">1/2" hardware cloth (50 sq ft)</td><td className="p-3">$30–50</td></tr>
              <tr className="border-b border-border"><td className="p-3">Metal roofing or shingles</td><td className="p-3">$30–50</td></tr>
              <tr className="border-b border-border"><td className="p-3">Exterior screws (5-lb box)</td><td className="p-3">$20–30</td></tr>
              <tr className="border-b border-border"><td className="p-3">Door hinges and predator-proof latches</td><td className="p-3">$30–45</td></tr>
              <tr className="border-b border-border"><td className="p-3">Stain/paint (optional)</td><td className="p-3">$20–30</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-foreground">
          Total: $250–350, depending on material quality. For a detailed breakdown, see our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">Coop Materials Guide</Link> and <Link to="/guides/chicken-coop-plans-materials-list" className="text-primary hover:underline">chicken coop plans with materials list</Link>.
        </p>
      </section>

      <section id="predator-proofing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Predator-Proofing for a Small Coop</h2>
        <p className="text-muted-foreground mb-6">Four hens are precious enough to warrant real predator protection. Here's what actually works.</p>
        <ul className="space-y-4 text-muted-foreground">
          <li><strong className="text-foreground">Hardware cloth, not chicken wire.</strong> Chicken wire keeps chickens in. It does not keep predators out. Raccoons tear through it like paper. Use 1/2-inch hardware cloth.</li>
          <li><strong className="text-foreground">Buried apron.</strong> Dig a trench 12 inches wide around the base. Bury the bottom 6 inches of hardware cloth and extend 6 inches out at ground level.</li>
          <li><strong className="text-foreground">Two-step door latch.</strong> Raccoons literally have hands. Use a sliding bolt with a pin through it, or a drop-down wooden latch that requires two steps to open.</li>
          <li><strong className="text-foreground">Close the coop at dusk.</strong> Every single day, no exceptions. Use an automatic pop-door if you can afford it ($100–200).</li>
        </ul>
        <p className="text-muted-foreground mt-6">
          More details at <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">Predator-Proof Coop Guide</Link>.
        </p>
      </section>

      <section id="mistakes" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Common Mistakes When Building for 4 Hens</h2>
        <ul className="space-y-4 text-muted-foreground">
          <li><strong className="text-foreground">Undersizing because "we'll never get more than 4 hens."</strong> You will. Build for six. Use four today, upgrade later.</li>
          <li><strong className="text-foreground">Using chicken wire instead of hardware cloth.</strong> This is the #1 regret we hear. Do it right the first time.</li>
          <li><strong className="text-foreground">Skipping ventilation.</strong> Chickens are tougher than you think, and ammonia is worse than cold. Ventilation wins.</li>
          <li><strong className="text-foreground">Placing the coop in direct afternoon sun.</strong> Summer heat kills hens faster than almost anything else. Pick shade.</li>
          <li><strong className="text-foreground">Cheap latches and door hinges.</strong> Hardware is cheap. Replacing dead hens because a latch failed is expensive and heartbreaking.</li>
          <li><strong className="text-foreground">No cleanout access.</strong> Build an access hatch or door you can actually crawl through or reach into.</li>
          <li><strong className="text-foreground">Forgetting about the run.</strong> The coop is where they sleep. The run is where they live. Run size matters as much as coop size.</li>
        </ul>
        <p className="text-muted-foreground mt-6">
          See our <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">expensive coop mistakes guide</Link> for more costly pitfalls to avoid.
        </p>
      </section>

      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can I keep 4 chickens in a 4x4 coop?</h3>
            <p className="text-muted-foreground">Yes, but barely. A 4x4 coop gives you exactly the 16-square-foot minimum. It works if you also give them access to a decent run or free-range time during the day. If they're confined all day, every day, you'll see behavioral problems by mid-summer.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How much does it cost to build a coop for 4 chickens?</h3>
            <p className="text-muted-foreground">Expect $200–350 for a basic design. $250–400 for a tractor. $300–500 for an urban coop. And $400–700 if you're converting a shed. See our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">full cost breakdown</Link>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How many eggs will 4 chickens lay?</h3>
            <p className="text-muted-foreground">A healthy, well-fed hen lays about five to six eggs per week during her productive years (years 1–3). So four hens give you roughly 20–24 eggs per week. In winter, production drops by 50% or more.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Do I need a permit for 4 chickens in my backyard?</h3>
            <p className="text-muted-foreground">Most cities allow four hens without a permit. Check your local ordinances. See our <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">coop permit guide</Link> for state-by-state details.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can 4 chickens stay in the coop all day?</h3>
            <p className="text-muted-foreground">They can, but they shouldn't if you can help it. Chickens are outdoor animals. If they're confined, give them an attached run (at least 40 square feet).</p>
          </div>
        </div>
      </section>

      <section className="mb-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h2 className="font-display text-2xl text-foreground mb-4">Pick Your Plan and Get Building</h2>
        <p className="text-muted-foreground mb-4">
          If you're building your first coop, start with the Classic 4x4. The A-frame is perfect on a budget. The tractor works if you have the space. The urban coop is your answer in a tight spot. Whatever you pick, give your four hens the space they deserve, predator-proof it properly, and close the door at night.
        </p>
        <p className="text-muted-foreground">
          Start with our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link>, or browse our full collection of <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">chicken coop plans</Link>.
        </p>
      </section>
    </BlogLayout>
  );
};

export default CoopPlans4Chickens;
