import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";
import guideImage from "@/assets/guide-how-to-build-coop.jpg";

const HowToBuildChickenCoop = () => {
  const article = getArticleBySlug('how-to-build-chicken-coop');
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      {/* Hero Image */}
      <div className="mb-12 -mx-4 md:-mx-8">
        <img 
          src={guideImage} 
          alt="Beautiful wooden chicken coop in a sunny backyard garden"
          className="w-full h-64 md:h-96 object-cover rounded-xl"
        />
      </div>

      {/* Intro */}
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Building your first chicken coop feels overwhelming—trust me, I know.</strong> When I started researching how to build a chicken coop in 2012, I made every mistake in the book. My first attempt collapsed during the first monsoon season here in Phoenix, and I lost three hens to a raccoon because I thought chicken wire was "good enough."
        </p>
        
        <p className="text-muted-foreground mb-8">
          After rebuilding twice and helping dozens of neighbors with their coops, I've learned that <strong className="text-foreground">successful coop building comes down to understanding why each design choice matters</strong>, not just following generic plans. This guide will save you the $800+ I wasted on my failed first attempt and the heartbreak of losing birds to preventable mistakes.
        </p>

        {/* Quick Cost Reference */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="font-display text-2xl text-foreground mb-6">2025 Cost Reality Check</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-secondary/50 rounded-xl">
              <h4 className="font-display text-lg text-foreground mb-2">Budget Build</h4>
              <p className="text-foreground"><strong>Materials:</strong> $250-400</p>
              <p className="text-foreground"><strong>Total Cost:</strong> $350-650</p>
              <p className="text-sm text-muted-foreground mt-2">Basic functionality, 5-8 year lifespan</p>
            </div>
            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <h4 className="font-display text-lg text-foreground mb-2">Standard Build</h4>
              <p className="text-foreground"><strong>Materials:</strong> $400-700</p>
              <p className="text-foreground"><strong>Total Cost:</strong> $500-900</p>
              <p className="text-sm text-muted-foreground mt-2">Good quality, 15-20 year lifespan</p>
            </div>
            <div className="p-5 bg-accent/10 rounded-xl border border-accent/20">
              <h4 className="font-display text-lg text-foreground mb-2">Premium Build</h4>
              <p className="text-foreground"><strong>Materials:</strong> $700-1,200</p>
              <p className="text-foreground"><strong>Total Cost:</strong> $800-1,400</p>
              <p className="text-sm text-muted-foreground mt-2">High-end features, 25+ year lifespan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">What You'll Learn</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#planning" className="text-primary hover:underline">Planning Your Chicken Coop (Week 1)</a></li>
          <li><a href="#materials" className="text-primary hover:underline">Materials & Tools: What You Actually Need</a></li>
          <li><a href="#foundation" className="text-primary hover:underline">Step 1: Building the Foundation</a></li>
          <li><a href="#framing" className="text-primary hover:underline">Step 2: Framing the Structure</a></li>
          <li><a href="#walls" className="text-primary hover:underline">Step 3: Walls and Siding</a></li>
          <li><a href="#roofing" className="text-primary hover:underline">Step 4: Roofing and Weather Protection</a></li>
          <li><a href="#interior" className="text-primary hover:underline">Step 5: Interior Features (Roosts, Nesting Boxes)</a></li>
          <li><a href="#ventilation" className="text-primary hover:underline">Step 6: Ventilation System</a></li>
          <li><a href="#run" className="text-primary hover:underline">Step 7: Run Construction</a></li>
          <li><a href="#mistakes" className="text-primary hover:underline">Common Mistakes to Avoid</a></li>
        </ol>
      </nav>

      {/* Section 1: Planning */}
      <section id="planning" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Planning Your Chicken Coop (Week 1)</h2>
        
        <p className="text-muted-foreground mb-6">
          Before you buy a single board, you need to nail down three critical decisions. I learned this the hard way when my neighbor called code enforcement on my first coop because I'd placed it 15 feet from the property line instead of the required 20 feet. If you're evaluating free plans, use our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline font-medium">quality checklist</Link> to avoid dangerous designs. New to building? Our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline font-medium">beginner-friendly guide</Link> breaks down exactly what skills you need.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Space Requirements: More Than You Think</h3>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">The golden rule: 4 square feet per bird inside the coop, plus 8-10 square feet per bird in the outdoor run.</strong> This isn't just a guideline—it's the difference between healthy, happy chickens and aggressive, disease-prone birds.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-card rounded-xl overflow-hidden">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left font-semibold text-foreground">Chickens</th>
                <th className="p-4 text-left font-semibold text-foreground">Min Coop</th>
                <th className="p-4 text-left font-semibold text-foreground">Min Run</th>
                <th className="p-4 text-left font-semibold text-foreground">Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-4 text-foreground">4 chickens</td>
                <td className="p-4 text-muted-foreground">16 sq ft</td>
                <td className="p-4 text-muted-foreground">32-40 sq ft</td>
                <td className="p-4 text-muted-foreground">4' × 4'</td>
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 text-foreground">6 chickens</td>
                <td className="p-4 text-muted-foreground">24 sq ft</td>
                <td className="p-4 text-muted-foreground">48-60 sq ft</td>
                <td className="p-4 text-muted-foreground">4' × 6'</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-4 text-foreground">8 chickens</td>
                <td className="p-4 text-muted-foreground">32 sq ft</td>
                <td className="p-4 text-muted-foreground">64-80 sq ft</td>
                <td className="p-4 text-muted-foreground">4' × 8'</td>
              </tr>
              <tr className="border-t border-border bg-muted/30">
                <td className="p-4 text-foreground">10 chickens</td>
                <td className="p-4 text-muted-foreground">40 sq ft</td>
                <td className="p-4 text-muted-foreground">80-100 sq ft</td>
                <td className="p-4 text-muted-foreground">5' × 8'</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Location Selection: Avoid My $300 Mistake</h3>
        <p className="text-muted-foreground mb-4">
          I built my first coop in the perfect spot—or so I thought. It was level, close to the house, and looked great. Then summer hit. The afternoon sun turned it into an oven, and I had to install $300 worth of shade cloth and fans.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Ideal Location Checklist:</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Morning sun, afternoon shade</strong> (eastern exposure is perfect)</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Good drainage</strong> (avoid low spots that collect water)</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Protection from prevailing winds</strong> (but still allows airflow)</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Close enough for daily care</strong> (you'll visit 2-3 times per day)</li>
            <li className="flex items-start gap-2"><span className="text-primary">•</span> <strong className="text-foreground">Legal setback compliance</strong> (5-100 feet depending on location)</li>
          </ul>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">⚠️ Legal Requirements: Check Before You Build</h4>
          <p className="text-muted-foreground mb-3">This step cost me $150 in fines. Here's what to check:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">City/County permits:</strong> Required for structures over 120 sq ft</li>
            <li>• <strong className="text-foreground">HOA restrictions:</strong> Can override city laws and result in fines</li>
            <li>• <strong className="text-foreground">Setback requirements:</strong> Distance from property lines and houses</li>
            <li>• <strong className="text-foreground">Chicken limitations:</strong> Number of birds and rooster restrictions</li>
          </ul>
        </div>
      </section>

      {/* Section 2: Materials */}
      <section id="materials" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Materials & Tools: What You Actually Need</h2>
        
        <p className="text-muted-foreground mb-6">
          The biggest mistake new builders make? Buying everything the big-box store employee suggests. I spent $200 on tools I never used and skimped on materials that actually mattered.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Lumber by Budget Tier</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-3">Budget ($200-400)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Untreated pine 2×4s ($3.50-4.50 each)</li>
              <li>• Pressure-treated 4×4 skids</li>
              <li>• OSB or plywood siding</li>
              <li>• Corrugated steel panels</li>
            </ul>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-3">Standard ($400-700)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Quality pine with cedar accents</li>
              <li>• Pressure-treated 4×6 skids</li>
              <li>• Cedar or quality plywood</li>
              <li>• Metal roofing with flashing</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-3">Premium ($700-1,200)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Cedar or composite lumber</li>
              <li>• Raised platform foundation</li>
              <li>• Cedar boards with trim</li>
              <li>• Architectural shingles</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">💡 Critical: Hardware Cloth vs. Chicken Wire</h4>
          <p className="text-muted-foreground mb-3">
            <strong className="text-foreground">Hardware cloth costs 3-5× more than chicken wire, but it's the only thing that actually protects chickens.</strong>
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Chicken wire:</strong> $20-30/roll, raccoons tear it like tissue paper</li>
            <li>• <strong className="text-foreground">Hardware cloth:</strong> $75-150/roll, actually raccoon-proof</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3 italic">I learned this lesson when I lost three hens in one night.</p>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Essential Tools (Must Have)</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Circular saw</strong> ($25-40 rental/day)</li>
              <li>• <strong className="text-foreground">Drill/driver</strong> ($60-150 cordless)</li>
              <li>• <strong className="text-foreground">Level</strong> ($15-30 for 48-inch)</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Measuring tape</strong> ($10-20)</li>
              <li>• <strong className="text-foreground">Square</strong> ($10-25)</li>
              <li>• <strong className="text-foreground">Safety gear</strong> ($30-50)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Foundation */}
      <section id="foundation" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 1: Building the Foundation (Day 1-2)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 4-8 hours over 2 days.</strong> A solid foundation prevents moisture problems, predator entry, and structural issues. I built my first coop directly on the ground—within six months, the sill plates were rotted.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Foundation Options</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">Option 1: Skid Foundation ($50-100)</h4>
            <p className="text-sm text-muted-foreground mb-3">Best for level ground, moveable coops, budget builds</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Cut pressure-treated 4×6 lumber to length</li>
              <li>Level the ground, remove grass and debris</li>
              <li>Position and level skids, use concrete blocks for shimming</li>
            </ol>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">Option 2: Raised Platform ($100-200) — Recommended</h4>
            <p className="text-sm text-muted-foreground mb-3">Best for predator protection, drainage, hot climates</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li>Set concrete blocks as piers (dig holes 6" deep)</li>
              <li>Install rim joists with 2×8 pressure-treated lumber</li>
              <li>Add floor joists spaced 16" on center</li>
            </ol>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">🔧 Pro Tip: Foundation Height Matters</h4>
          <p className="text-muted-foreground mb-3">Raising your coop 12+ inches off the ground provides:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>• Predator deterrent (harder for ground predators to dig under)</li>
            <li>• Better drainage (water flows away from structure)</li>
            <li>• Shade for chickens (cool spot underneath in hot weather)</li>
            <li>• Storage space (room for feed and supplies)</li>
          </ul>
        </div>
      </section>

      {/* Section 4: Framing */}
      <section id="framing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 2: Framing the Structure (Day 3-4)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 8-12 hours over 2 days.</strong> Proper framing creates a sturdy, square structure that will last decades. Rush this step and you'll regret it.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Wall Framing Steps</h3>
        <ol className="list-decimal list-inside space-y-4 mb-8 text-muted-foreground">
          <li className="pl-2">
            <strong className="text-foreground">Cut all lumber to length before assembly</strong>
            <p className="ml-6 mt-1 text-sm">Batch cutting is faster and more accurate than cutting as you go</p>
          </li>
          <li className="pl-2">
            <strong className="text-foreground">Build wall frames flat on the ground</strong>
            <p className="ml-6 mt-1 text-sm">Easier to ensure square than building in place</p>
          </li>
          <li className="pl-2">
            <strong className="text-foreground">Space studs 16" on center</strong>
            <p className="ml-6 mt-1 text-sm">Standard spacing for strength and easy siding installation</p>
          </li>
          <li className="pl-2">
            <strong className="text-foreground">Raise and attach walls</strong>
            <p className="ml-6 mt-1 text-sm">Helper needed for this step—don't try to do it alone</p>
          </li>
        </ol>
      </section>

      {/* Section 5: Walls */}
      <section id="walls" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 3: Walls and Siding (Day 5-6)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 8-10 hours over 2 days.</strong> Siding protects the structure and defines the coop's appearance.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Key Siding Tips:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Start at the bottom, work up</li>
            <li>• Leave 1/2" gap between siding and foundation (prevents moisture wicking)</li>
            <li>• Check level frequently as you go</li>
            <li>• Pre-drill hardwood siding to prevent splitting</li>
            <li>• Use galvanized or stainless fasteners only</li>
          </ul>
        </div>
      </section>

      {/* Section 6: Roofing */}
      <section id="roofing" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 4: Roofing (Day 7-8)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 6-10 hours over 2 days.</strong> A good roof is your chickens' first line of defense against weather.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">Metal Roofing (Recommended)</h4>
            <p className="text-sm text-muted-foreground mb-2">$1.50-3.00/sq ft | 40-60 year lifespan</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Excellent water runoff</li>
              <li>✓ Reflects heat</li>
              <li>✓ No decking needed</li>
              <li>✓ Predator resistant</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">Asphalt Shingles</h4>
            <p className="text-sm text-muted-foreground mb-2">$0.90-1.50/sq ft | 15-25 year lifespan</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Easy installation</li>
              <li>✓ Familiar to most builders</li>
              <li>✗ Requires plywood decking</li>
              <li>✗ Absorbs more heat</li>
            </ul>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">❌ Mistake: Wrong Screw Placement</h4>
          <p className="text-muted-foreground mb-2">
            I screwed through the low spots (valleys) of corrugated panels. Every screw hole became a leak point.
          </p>
          <p className="text-sm text-foreground">
            <strong>The fix:</strong> Always screw through the high points (ridges) where water runs off.
          </p>
        </div>
      </section>

      {/* Section 7: Interior */}
      <section id="interior" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 5: Interior Features (Day 9-10)</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 6-8 hours over 2 days.</strong> Get the interior wrong, and you'll have behavioral problems, poor egg production, and unhealthy birds.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Roosting System</h3>
        <p className="text-muted-foreground mb-4">
          <strong className="text-foreground">The golden rule: Roosting bars must be higher than nesting boxes.</strong> Chickens naturally seek the highest perch for sleeping.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Roosting Bar Specifications:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Height:</strong> 18-24 inches off floor</li>
            <li>• <strong className="text-foreground">Material:</strong> 2×4 lumber, flat side up</li>
            <li>• <strong className="text-foreground">Spacing:</strong> 8-10 inches per bird</li>
            <li>• <strong className="text-foreground">Distance from wall:</strong> 8 inches minimum</li>
          </ul>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Nesting Boxes</h3>
        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Nesting Box Specifications:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Size:</strong> 12"×12"×12" for standard breeds</li>
            <li>• <strong className="text-foreground">Ratio:</strong> One box per 4-5 hens</li>
            <li>• <strong className="text-foreground">Height:</strong> 12-18" off floor (lower than roosts)</li>
            <li>• <strong className="text-foreground">Entrance:</strong> 4-6" lip to retain bedding</li>
          </ul>
        </div>
      </section>

      {/* Section 8: Ventilation */}
      <section id="ventilation" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 6: Ventilation System</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Ventilation is more important than temperature control.</strong> Poor air quality kills more chickens than cold weather ever will.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Ventilation Requirements:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Minimum 1 square foot of permanent opening per bird</strong></li>
            <li>• Position near roofline (hot air rises)</li>
            <li>• Opposite wall openings for cross-ventilation</li>
            <li>• Hardware cloth protection on all openings</li>
          </ul>
        </div>
      </section>

      {/* Section 9: Run */}
      <section id="run" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Step 7: Run Construction</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Time estimate: 8-12 hours over 2-3 days.</strong> The run is where most predator attacks happen. My neighbor lost her entire flock to a fox that dug under their "secure" run.
        </p>

        <div className="bg-card border border-border rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Run Space Requirements:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• <strong className="text-foreground">Minimum 8-10 square feet per bird</strong></li>
            <li>• 6 chickens need minimum 48-60 sq ft (6×8 or 8×8)</li>
            <li>• Plan for expansion—flocks tend to grow!</li>
          </ul>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Predator-Specific Defenses</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Raccoons</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Two-step latches required</li>
              <li>• 1/2" hardware cloth maximum</li>
              <li>• Secure roof access</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Foxes & Coyotes</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 6+ foot fence height</li>
              <li>• Buried or apron barrier</li>
              <li>• Secure gate latches</li>
            </ul>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">🔧 Pro Tip: The Apron Method</h4>
          <p className="text-muted-foreground mb-3">Instead of digging a trench, use the "apron" method:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
            <li>Lay hardware cloth flat on ground extending 18-24" from fence</li>
            <li>Attach to bottom of fence with heavy staples</li>
            <li>Cover with 2-3 inches of soil or mulch</li>
            <li>Predators dig at fence base and hit the barrier</li>
          </ol>
        </div>
      </section>

      {/* Section 10: Common Mistakes */}
      <section id="mistakes" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Common Mistakes to Avoid</h2>
        
        <p className="text-muted-foreground mb-6">
          After building four coops and helping 50+ neighbors, here are the most expensive mistakes I've seen:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">❌ Using Chicken Wire ($800+ in losses)</h4>
            <p className="text-sm text-muted-foreground">Rebuilding + replacing dead birds. Hardware cloth is the only option.</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">❌ Poor Foundation Work ($350)</h4>
            <p className="text-sm text-muted-foreground">Structural problems require rebuild. Always check level multiple times.</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">❌ Inadequate Ventilation ($400)</h4>
            <p className="text-sm text-muted-foreground">Veterinary bills + lost birds. 1 sq ft opening per bird minimum.</p>
          </div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5">
            <h4 className="font-semibold text-foreground mb-2">❌ Building Too Small ($300)</h4>
            <p className="text-sm text-muted-foreground">Expansion costs when flock outgrows space. Build 25% larger than minimum.</p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Your Next Steps</h2>
        
        <p className="text-muted-foreground mb-6">
          Building a chicken coop is one of the most rewarding projects you can tackle. Yes, there's a learning curve. Yes, you'll make some mistakes. But the satisfaction of watching your chickens thrive in a structure you built with your own hands is incredible.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
          <h3 className="font-display text-xl text-foreground mb-4">Ready to get started?</h3>
          <div className="flex flex-wrap gap-4">
            <Link to="/guides/cost-breakdown-2025" className="inline-flex items-center gap-2 text-primary hover:underline">
              View detailed cost breakdown →
            </Link>
            <Link to="/guides/plans-guide" className="inline-flex items-center gap-2 text-primary hover:underline">
              Compare coop plans →
            </Link>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default HowToBuildChickenCoop;
