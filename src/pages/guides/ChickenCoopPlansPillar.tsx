import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const ChickenCoopPlansPillar = () => {
  const article = getArticleBySlug('chicken-coop-plans');

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      {/* Intro */}
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Building a chicken coop doesn't require you to be a master carpenter or drop thousands of dollars on a prefab structure.</strong> The right plan—one that matches your space, climate, and flock size—is the difference between a coop that works hard for five years and one that feels like a mistake by month two.
        </p>

        <p className="text-muted-foreground mb-6">
          We've vetted dozens of free plans and designed our own, testing them against real backyard constraints: insufficient space, predators, poor ventilation, and the creep of scope that happens when you're halfway through framing. Every plan we recommend here includes a materials list with quantities, accounts for proper ventilation (1 square foot per 10 square feet of floor space), includes enough nesting boxes (1 per 3–4 hens), and builds in genuine predator-proofing using hardware cloth rather than the chicken wire that coyotes laugh through.
        </p>

        <p className="text-muted-foreground mb-8">
          Whether you're housing a pair of backyard Silkies or planning a 20-bird homestead flock, there's a plan here that'll work. Below you'll find designs organized by flock size, coop style, budget, and climate. Pick one that matches your situation, grab the materials list, and build something your hens—and your future self—will thank you for.
        </p>
      </section>

      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#how-to-pick" className="text-primary hover:underline">How to Pick the Right Chicken Coop Plan</a></li>
          <li><a href="#plans-by-flock-size" className="text-primary hover:underline">Plans by Flock Size</a></li>
          <li><a href="#plans-by-style" className="text-primary hover:underline">Plans by Coop Style</a></li>
          <li><a href="#plans-by-budget" className="text-primary hover:underline">Plans by Budget</a></li>
          <li><a href="#plans-by-climate" className="text-primary hover:underline">Plans by Climate</a></li>
          <li><a href="#what-every-plan-must-include" className="text-primary hover:underline">What Every Good Chicken Coop Plan Must Include</a></li>
          <li><a href="#how-to-read" className="text-primary hover:underline">How to Read a Chicken Coop Plan</a></li>
          <li><a href="#free-vs-premium" className="text-primary hover:underline">Free vs Premium Plans: When to Pay</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* How to Pick */}
      <section id="how-to-pick" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">How to Pick the Right Chicken Coop Plan</h2>
        <p className="text-muted-foreground mb-6">
          Picking a chicken coop plan is like picking a home—it has to fit your life, not someone else's idea of what your life should be. The wrong choice means you'll be retrofitting or rebuilding within a year. Here's how we think through it.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Flock Size</h3>
        <p className="text-muted-foreground mb-6">
          Flock size is your anchor decision. Two backyard hens require a very different structure than eight. A standard rule: each bird needs 3–4 square feet inside the coop (roosting and nesting space) and 8–10 square feet in the outdoor run. A flock of four hens needs at least a 16 square foot coop and a 32–40 square foot run. Jump to eight hens and you're looking at 24–32 square feet inside and 64–80 square feet outside. If you're planning to expand later, build larger now—an undersized coop leads to aggression, illness, and egg-eating, and you can't easily expand the footprint without starting over. Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link> to dial in exact dimensions for your flock.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Climate</h3>
        <p className="text-muted-foreground mb-6">
          Climate matters more than beginners realize. A plan that works in northern Vermont will cook your hens in Phoenix. Cold climates need insulation, smaller windows, and roosting bars positioned for heat capture. Hot climates need massive ventilation, shade, and often a completely different footprint—think long and low rather than tall and enclosed. Rainy regions need gutters, drainage, and materials that won't rot. Check our <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">climate chicken coop guide</Link> for your region, and if you're in an extreme climate, our <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">winter chicken coop guide</Link> and <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">Arizona chicken coop guide</Link> have design-specific recommendations.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Space Available</h3>
        <p className="text-muted-foreground mb-6">
          Space available in your yard is inflexible; you can't fake it. Measure twice. A 4x8 tractor won't fit along your property line if you only have 6 feet. Walk the perimeter and identify where the coop can actually go—sun exposure, predator access, proximity to the house (for water lines and security), and whether neighbors will tolerate it. Some municipalities require setbacks of 10 feet or more from property lines. Check local regs before you buy lumber.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Budget</h3>
        <p className="text-muted-foreground mb-6">
          Budget shapes materials and complexity. You can build a functional 4x4 coop for under $100 using pallets and scrap lumber, or you can spend $800 on a walk-in structure with metal roofing and quality ventilation fans. Neither is wrong—the difference is durability and convenience. Pallet builds are great for learning; if your first coop doesn't work out, you haven't lost much.
        </p>
        <p className="text-muted-foreground mb-6">
          Premium builds save time and often last longer, which matters if you're planning to keep hens for five years. Our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">cost breakdown guide</Link> breaks down where money goes in each tier.
        </p>

        <p className="text-muted-foreground mb-6">
          Skill level is honest self-assessment. If you've never used a circular saw, a plan that requires rip-cutting 2x8s at an angle and drilling pocket holes will frustrate you fast. Start with simple: A-frames, basic rectangles, and pallet builds. Once you've completed one, you'll have the confidence and knowledge for something more complex. Many of the best <Link to="/guides/chicken-coop-plans" className="text-primary hover:underline">chicken coop plans</Link> are "simple enough for a first build, interesting enough to stay engaged."
        </p>

        <p className="text-muted-foreground mb-6">
          Here's the framework we use: Start with flock size, narrow by available space and climate, then pick a style and budget tier that match your skill level. If two plans fit that description, pick the one that's closer to your exact needs—a plan that's nearly right is better than one you'll customize halfway through.
        </p>
      </section>

      {/* Plans by Flock Size */}
      <section id="plans-by-flock-size" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Plans by Flock Size</h2>
        <p className="text-muted-foreground mb-8">The size of your flock determines the footprint, cost, and complexity of your build. Here's how the math breaks down.</p>

        <h3 className="font-display text-2xl text-foreground mb-4">Coops for 2–4 Chickens (Small Backyard)</h3>
        <p className="text-sm text-primary font-semibold mb-2">Space requirements: Minimum 12–16 square feet inside, 24–40 square feet for the run.</p>
        <p className="text-muted-foreground mb-6">
          Two to four hens fit in a compact space, making this the easiest entry point for suburban backyards. You're looking at something roughly 4x4 feet inside with an attached 8x4 run, or a 4x3 footprint with a larger run. Cost-wise, you'll spend $80–$300 depending on materials. This is the tier where pallet builds shine and where A-frames become practical. Check out our <Link to="/guides/chicken-coop-plans-4-chickens" className="text-primary hover:underline">chicken coop plans for 4 chickens</Link> for designs that fit this profile. A simple timber-frame coop with hardware cloth and a sloped roof is your sweet spot—easy to build, easy to clean, and totally adequate for a tiny flock.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Coops for 5–8 Chickens (Standard Family Flock)</h3>
        <p className="text-sm text-primary font-semibold mb-2">Space requirements: Minimum 20–32 square feet inside, 50–80 square feet for the run.</p>
        <p className="text-muted-foreground mb-6">
          Five to eight hens is where most backyard operations live. You're building something in the 4x6 to 6x6 footprint, with a real roof, substantial run, and enough nesting boxes (2 boxes minimum, 3 if you're at eight birds) that egg collection doesn't become a game of musical chairs. This is the tier where cost jumps to $200–$500, and where build quality starts affecting daily experience—a poorly ventilated 5x6 coop gets hot and humid. Look for plans with proper cross-ventilation and roofing that sheds rain. Our standard <Link to="/guides/small-chicken-coop-plans" className="text-primary hover:underline">chicken coop plans</Link> are sized for this range, and most of them are very buildable over a weekend or two.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Coops for 9–15 Chickens (Serious Producer)</h3>
        <p className="text-sm text-primary font-semibold mb-2">Space requirements: Minimum 36–60 square feet inside, 90–150 square feet for the run.</p>
        <p className="text-muted-foreground mb-6">
          At this scale, you're thinking production-oriented: regular egg collection, distinct roles (maybe a separate broody-box or isolation area), and enough space that overcrowding doesn't become a health hazard. Designs here often move away from the cute cottage aesthetic toward functional: maybe a 6x10 coop with a 100+ square foot run, or a walk-in design that lets you move through without crouching. Budget rises to $400–$800. This is where our <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">large chicken coop plans</Link> and <Link to="/guides/walk-in-chicken-coop-plans" className="text-primary hover:underline">walk-in coop designs</Link> are sized.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Coops for 16+ Chickens (Homestead Scale)</h3>
        <p className="text-sm text-primary font-semibold mb-2">Space requirements: 60+ square feet inside, 200+ square feet for the run, or multiple separate structures.</p>
        <p className="text-muted-foreground mb-6">
          Sixteen or more birds shifts the calculus. You're likely managing production (meat, eggs, or both), which means you might want separate brooding or breeding areas, more robust predator-proofing, and infrastructure for multiple waterers and feeders. Some homesteaders build multiple smaller coops instead of one monster structure—that way, a predator breach or disease outbreak affects one flock, not all of them. Costs here are $800–$2,000+, and construction often involves decisions about permanence (concrete footers, metal roofing, electrical for heated waterers).
        </p>
      </section>

      {/* Plans by Coop Style */}
      <section id="plans-by-style" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Plans by Coop Style</h2>
        <p className="text-muted-foreground mb-8">Style isn't just aesthetic—it determines how you interact with your coop daily, how predators attack it, how well it sheds heat and rain, and how long it'll actually last.</p>

        <h3 className="font-display text-2xl text-foreground mb-4">Traditional Stand-Alone Coop</h3>
        <p className="text-muted-foreground mb-6">
          The classic coop is a rectangular box on stilts (12–24 inches high) with a pitched roof, a door that locks, and an attached or separate run. Pros: familiar, well-documented online, modular (easy to add a run later or move pieces around). Cons: requires more lumber, harder to clean under (though that height keeps predators at bay), and it's stationary (you're not rotating pasture). Good for: suburban backyards where you have a permanent spot and want a tidy, finished look. This is the most common design, and there's a reason for it—it works. Budget ranges from $150–$600 depending on size and materials.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">A-Frame Chicken Coop</h3>
        <p className="text-muted-foreground mb-6">
          An A-frame is exactly what it sounds like: a triangular profile, usually without a run (the frame is mobile), or with a low run integral to the structure. Pros: quick to build, iconic look, moderate predator protection when done right. Cons: interior headroom is limited, so you're working in a crouch while cleaning, and the triangular shape means wasted corner space. Good for: small flocks (2–4 birds) and builders who want something fast and charming. Materials cost: $100–$250. Check our <Link to="/guides/a-frame-chicken-coop-plans" className="text-primary hover:underline">A-frame coop guide</Link> for specific plans.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Walk-In Chicken Coop</h3>
        <p className="text-muted-foreground mb-6">
          A walk-in is large enough to stand in and move around freely—typically 6+ feet tall and at least 6x8 feet inside. Pros: cleaning is pleasant (you're not contorted), egg collection is effortless, and you can move feeders and waterers without squirming. Cons: costs more ($600–$1,500+) and requires a larger footprint. Good for: serious backyard producers (8+ birds) and anyone who values convenience. These are worth the extra cost if you're managing a flock for the long term. See our <Link to="/guides/walk-in-chicken-coop-plans" className="text-primary hover:underline">walk-in coop plans</Link>.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Chicken Tractor / Mobile Coop</h3>
        <p className="text-muted-foreground mb-6">
          A tractor is a lightweight, wheeled coop designed to be moved regularly (ideally daily or every few days), rotating through your yard to give hens fresh grass and distribute manure. Pros: you get compost benefit, hens eat less commercial feed, and a small footprint lets you keep birds in a suburban lot that wouldn't fit a stationary setup. Cons: you're moving it constantly (this isn't passive), and predator-proofing a mobile structure is trickier. Good for: people willing to invest daily effort in rotation. See our <Link to="/guides/mobile-chicken-coop-plans" className="text-primary hover:underline">mobile chicken coop plans</Link>.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Urban / Small-Space Coop</h3>
        <p className="text-muted-foreground mb-6">
          Designed for tight quarters—urban backyards, apartments with small yards, people under restrictive HOAs. These are 2x4 feet or even smaller, extremely tidy, and often engineered for maximum function in minimum space. Pros: fits impossible spaces, looks deliberately designed rather than ramshackle. Cons: only suitable for 1–2 birds, and you'll run out of space quickly if your flock grows. Good for: urban backyard chickens and people with genuine spatial constraints. See our <Link to="/guides/urban-chicken-coop-plans" className="text-primary hover:underline">urban chicken coop plans</Link>.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Hoop Coop</h3>
        <p className="text-muted-foreground mb-6">
          A hoop coop is a half-tunnel structure, usually with PVC hoops and heavy fabric or clear plastic, sometimes with rigid framing on the ends. Pros: excellent ventilation, light and airy, quick to build, relatively cheap. Cons: fabric deteriorates (needing replacement every 2–3 years), less predator-proof than solid structures (though you can reinforce), and harder to weatherproof than a traditional roof. Good for: warm to temperate climates where you're not fighting heavy snow, and builders who value simplicity.
        </p>
      </section>

      {/* Plans by Budget */}
      <section id="plans-by-budget" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Plans by Budget</h2>
        <p className="text-muted-foreground mb-8">Sometimes the budget determines the plan, not the other way around.</p>

        <h3 className="font-display text-2xl text-foreground mb-4">Under $100: Pallet & Reclaimed Builds</h3>
        <p className="text-muted-foreground mb-6">
          $80–$100 is achievable with salvaged materials: pallets, reclaimed fence boards, old windows, scrap lumber. Plans here are simple, often 4x4 or smaller. Pros: you're learning without a big financial risk, and it's sustainable. Cons: hunting down pallets takes time, quality is inconsistent, and you might end up building twice. Good for: first-time coops, learning the basics, and people in areas with abundant free material.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">$100–$300: Basic Lumber Builds</h3>
        <p className="text-muted-foreground mb-6">
          This range gets you dimensional lumber from the big box store and a straightforward plan. A 4x6 coop with a run, built from 2x4s and plywood, lands here. Pros: materials are consistent, plans are well-documented, and you're building something durable. Cons: you're buying everything new, which adds up. These builds work fine for 2–6 birds.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">$300–$700: Standard Quality Builds</h3>
        <p className="text-muted-foreground mb-6">
          Expect a 6x8 or larger coop with a real roof, hardware cloth throughout, quality hinges, roofing felt or shingles, and a solid run. You might be adding insulation, larger windows, or metal roofing. This is where durability jumps noticeably—you're building something that'll last 8–10 years instead of 3–4.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">$700+: Premium & Walk-In Builds</h3>
        <p className="text-muted-foreground mb-6">
          Walk-ins, metal roofing, advanced ventilation systems, concrete footers, and finishes that look like you bought them. These are structures you're genuinely proud of, and they'll outlast a cheaper build by years.
        </p>
        <p className="text-muted-foreground mb-6">
          For a full cost breakdown by material category, check our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">cost breakdown guide</Link>.
        </p>
      </section>

      {/* Plans by Climate */}
      <section id="plans-by-climate" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Plans by Climate</h2>
        <p className="text-muted-foreground mb-8">Your climate determines how much ventilation, insulation, and weatherproofing your plan needs.</p>

        <h3 className="font-display text-2xl text-foreground mb-4">Cold Climates (Minnesota, Vermont, Canada)</h3>
        <p className="text-muted-foreground mb-6">
          Winter flocks need insulation, smaller windows, but robust ventilation to prevent moisture buildup (which leads to frostbite). Plans should have roosting bars positioned high (heat rises), deep bedding for insulation, and a door that can be closed at night. You're not trying to heat the coop—hens generate enough warmth—you're preventing drafts while venting moisture. See our <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">winter coop guide</Link> and <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulation guide</Link> for specifics.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Hot/Desert Climates (Arizona, New Mexico, Southern California)</h3>
        <p className="text-muted-foreground mb-6">
          Heat is your enemy. Plans need maximum shade, excellent cross-ventilation, and often a separate summer configuration (removing panels, opening vents). Some builders add evaporative coolers or misters. Roofing should reflect heat (white or metal), and the coop should be positioned in shade during afternoon. See our <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">Arizona coop guide</Link> for desert-specific strategies.
        </p>

        <h3 className="font-display text-2xl text-foreground mb-4">Rainy/Humid Climates (Pacific Northwest, Southeast)</h3>
        <p className="text-muted-foreground mb-6">
          Rain means gutters, proper drainage, ventilation to prevent mold and respiratory disease, and materials that won't rot (or plans that account for material rot-out and replacement). Roofing should be pitched for drainage, and the coop should sit on a slight slope. Check your local <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">climate guide</Link> for region-specific details.
        </p>
      </section>

      {/* What Every Good Plan Must Include */}
      <section id="what-every-plan-must-include" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">What Every Good Chicken Coop Plan Must Include</h2>
        <p className="text-muted-foreground mb-6">Not all free plans are created equal. Here's what separates a solid plan from one you'll regret building.</p>

        <ul className="space-y-4 text-muted-foreground mb-6">
          <li><strong className="text-foreground">A detailed materials list with quantities.</strong> You should know exactly how many 2x4x8 boards you need, how many linear feet of hardware cloth (and what gauge), how many hinges, latches, and fasteners. Vague lists ("some wood," "roofing") are a red flag.</li>
          <li><strong className="text-foreground">A cut list that shows dimensions.</strong> You need to know how long each piece is before you touch a saw. A good plan specifies every cut: "two 4x4 posts cut to 18 inches," not "cut the legs to size."</li>
          <li><strong className="text-foreground">Ventilation specifications that match your climate.</strong> At minimum, 1 square foot of ventilation per 10 square feet of floor space. A plan should explicitly state ventilation area and placement.</li>
          <li><strong className="text-foreground">Nesting box count and dimensions.</strong> One nesting box per 3–4 hens. Dimensions should be roughly 12x12x12 inches.</li>
          <li><strong className="text-foreground">Predator-proofing details.</strong> The plan should specify hardware cloth (not chicken wire) on the run, buried apron (12 inches deep and out, or an L-shaped footer), locking latches that require two actions to open. A plan that says "secure the run" without detail isn't good enough.</li>
          <li><strong className="text-foreground">Roosting bar dimensions and height.</strong> 8–10 inches of roosting space per bird, bars that are 2–3 inches in diameter, positioned 18–24 inches above the floor.</li>
          <li><strong className="text-foreground">Roof design and slope.</strong> A 4:12 pitch is standard and adequate in most climates.</li>
          <li><strong className="text-foreground">Run access, door size, and lock mechanism.</strong> The plan should show how hens get in and out, the size of doors (8x8 inches minimum for large birds), and how those doors lock securely.</li>
          <li><strong className="text-foreground">Cleaning access.</strong> Plans should show access doors or removable panels. Any interior space should be reachable without contortion.</li>
          <li><strong className="text-foreground">Assembly notes and skill level.</strong> A good plan tells you upfront what skills and tools you'll need. We have a <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">materials guide</Link> that goes deeper into each category.</li>
        </ul>
      </section>

      {/* How to Read a Plan */}
      <section id="how-to-read" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">How to Read a Chicken Coop Plan</h2>
        <p className="text-muted-foreground mb-6">If you've never built from a plan before, the drawings and technical language can look intimidating. Here's how to decode them.</p>

        <div className="space-y-6 text-muted-foreground">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Elevation View</h3>
            <p>Shows the coop from the front, back, or side—what you see when you look at it. This tells you proportions, door placement, window location, and roof style.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Plan View (Floor Plan)</h3>
            <p>Shows the layout from above. This tells you where nesting boxes sit, where roosting bars go, door placement, and internal layout. This is crucial for understanding traffic flow.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Cut List</h3>
            <p>A table or list showing every piece that needs to be cut, with dimensions. "2x4x96" means a 2-by-4 board cut to 96 inches long.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Materials List</h3>
            <p>Shows everything you need to buy: quantity, description, and sometimes part number. This is where you make your shopping trip. See our <Link to="/guides/chicken-coop-plans-materials-list" className="text-primary hover:underline">chicken coop plans with materials list</Link> guide for detailed examples.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Nominal vs. Actual Dimensions</h3>
            <p>A "2x4" board is actually 1.5 inches by 3.5 inches. A "1x6" is actually 0.75 inches by 5.5 inches. Plans usually show nominal dimensions; you buy actual dimensions.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How to Spot a Bad Plan</h3>
            <p>Vague materials lists, missing dimensions, no ventilation specs, no predator-proofing details, unlocked doors, or nesting boxes that are obviously wrong. Also watch for plans that are overly complicated for the size. See our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline">free plan quality checklist</Link> for a complete evaluation framework.</p>
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section id="free-vs-premium" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Free vs Premium Plans: When to Pay</h2>
        <p className="text-muted-foreground mb-6">
          Free plans are fantastic. We make ours free because we believe people should be able to build a coop without a paywall. But there are honest reasons to consider paid plans, too.
        </p>
        <p className="text-muted-foreground mb-6">
          Free plans (like ours) typically include dimensions, materials lists, and assembly notes. You're getting the design and enough detail to build successfully. What you're typically not getting: exact Home Depot SKUs for every fastener, CAD files for CNC cutting, video walkthroughs, or regional permit information.
        </p>
        <p className="text-muted-foreground mb-6">
          Premium plans often include those extras, plus refined details: structural calculations if you're building large, local building code compatibility, video build guides that show common mistakes in real time, and 1-on-1 support. For a first build, premium isn't necessary. For a walk-in structure or if you're in a permit-heavy region, the premium plan might save you time and mistakes.
        </p>
        <p className="text-muted-foreground mb-6">
          See our <Link to="/guides/free-vs-premium-plans" className="text-primary hover:underline">free vs premium guide</Link> for a detailed comparison.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Are these chicken coop plans really free?</h3>
            <p className="text-muted-foreground">Yes. Every plan we publish is completely free—no email signup required, no hidden paywalls, no surprise upsells. We make money differently, and we believe coop plans should be accessible. Download, build, share. The only thing we ask is that you credit CoopCraft if you mention the plan online.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How long does it take to build a chicken coop?</h3>
            <p className="text-muted-foreground">A simple 4x4 coop can be built in a weekend (8–12 hours of work, spread over two days). A 6x8 with a run might take 16–24 hours spread over three weekends. A walk-in structure: 30–40 hours. Most builds are faster if you have a helper and have gathered materials beforehand.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Can a beginner build a chicken coop?</h3>
            <p className="text-muted-foreground">Absolutely. Pick a simple design (A-frame or basic rectangle), avoid complex joinery, and take your time. You need basic tools: a circular saw, a drill, a level, a tape measure, and a saw for detail cuts. Start with a plan labeled "beginner-friendly"—they exist for a reason. See our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner chicken coop plans</Link>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">What's the most important thing in a coop plan?</h3>
            <p className="text-muted-foreground">Predator-proofing. A coop that's beautiful but not predator-proof will lose hens to a raccoon or hawk, and that's devastating. Hardware cloth, buried aprons, and locking latches aren't optional. After that: ventilation. Size comes third. See our <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proofing guide</Link>.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">Do I need a permit to build a chicken coop?</h3>
            <p className="text-muted-foreground">It depends on your municipality. Some places have no restrictions; others require permits and limit flock size. Before you buy lumber, check with your local zoning office or read your city ordinances online. See our <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">coop permit guide</Link> for pointers.</p>
          </div>
          <div>
            <h3 className="font-display text-xl text-foreground mb-2">How big should my chicken coop be?</h3>
            <p className="text-muted-foreground">Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link> for exact numbers, but the rule is: 3–4 square feet per bird inside, 8–10 square feet per bird in the run (outdoor area). Don't cheap out on size. If you're unsure, build larger.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
        <h2 className="font-display text-2xl text-foreground mb-4">Ready to Start Building?</h2>
        <p className="text-muted-foreground mb-4">
          You have a plan that matches your flock size, space, and budget. Next: download the materials list, count every fastener and board, make your shopping trip, and build something that works.
        </p>
        <p className="text-muted-foreground mb-4">
          Start by calculating your exact space needs with our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">chicken coop size calculator</Link>. Then browse the free plans in our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner section</Link>, <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4x4 plans</Link>, or <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">large coop designs</Link>—pick the one that fits. Before you build, grab our free <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">materials</Link> and <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proofing checklist</Link>.
        </p>
        <p className="text-foreground font-semibold">Build well. Your hens will reward you with eggs and companionship for years.</p>
      </section>
    </BlogLayout>
  );
};

export default ChickenCoopPlansPillar;
