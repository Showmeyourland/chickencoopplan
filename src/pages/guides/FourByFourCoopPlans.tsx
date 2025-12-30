import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import TableOfContents from '@/components/TableOfContents';
import coopHeroImage from '@/assets/guide-4x4-coop-plans.jpg';
import framingDiagram from '@/assets/coop-framing-diagram.jpg';
import tiersComparison from '@/assets/coop-tiers-comparison.jpg';

const FourByFourCoopPlans = () => {
  const article = getArticleBySlug('4x4-chicken-coop-plans');

  if (!article) {
    return <div>Article not found</div>;
  }

  const tocItems = [
    { id: 'why-4x4', text: 'Why 4x4 is Perfect for Beginners', level: 2 },
    { id: 'basic-plan', text: 'Basic 4x4 Coop Plan ($250-300)', level: 2 },
    { id: 'standard-plan', text: 'Standard 4x4 Coop Plan ($350-450)', level: 2 },
    { id: 'premium-plan', text: 'Premium 4x4 Coop Plan ($500-650)', level: 2 },
    { id: 'materials-tools', text: 'Materials & Tools List', level: 2 },
    { id: 'construction-steps', text: 'Step-by-Step Construction', level: 2 },
    { id: 'beginner-mistakes', text: '7 Costly Mistakes to Avoid', level: 2 },
    { id: 'upgrade-paths', text: 'Future Expansion Options', level: 2 },
    { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
  ];

  return (
    <BlogLayout article={article} showTableOfContents>
      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img 
          src={coopHeroImage} 
          alt="A charming 4x4 wooden chicken coop in a sunny backyard" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          <strong>A 4x4 chicken coop is the perfect starter size for 3-4 chickens, providing exactly 16 square feet of indoor space—meeting the critical 4 square feet per bird minimum for healthy, happy hens.</strong> This size balances manageable construction costs ($250-400 for quality materials) with practical functionality, making it ideal for beginners who want to start small and learn the fundamentals of chicken keeping.
        </p>
        
        <p className="text-muted-foreground">
          After building my first coop in 2017 (and making every rookie mistake possible), I've refined this design through years of desert heat, monsoon storms, and persistent coyotes. This guide provides three complete 4x4 chicken coop plans—budget, standard, and premium—each tested in real-world conditions.
        </p>
      </div>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />

      {/* Section: Why 4x4 */}
      <section id="why-4x4" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Why 4x4 Chicken Coop Plans Are Perfect for Beginners</h2>
        
        <p className="text-muted-foreground mb-6">
          The 4x4 footprint hits the sweet spot for first-time coop builders. Here's why this size consistently outperforms other starter dimensions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Space Efficiency Meets Chicken Biology</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Exactly 16 square feet provides 4 square feet per bird for 4 chickens</strong>—the minimum space requirement established by university extension research. This prevents behavioral problems (feather pecking, aggression) that plague overcrowded flocks.
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Manageable Construction Scope</h3>
            <p className="text-sm text-muted-foreground">
              A 4x4 structure requires only 8 pieces of lumber for the base frame, keeping material costs reasonable. You can realistically complete the basic version in a weekend, even as a beginner.
            </p>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Size Comparison - Material Costs Only:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-primary/10 rounded-lg p-3">
              <div className="text-lg font-bold text-primary">$250-400</div>
              <div className="text-xs text-muted-foreground">4x4 coop</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-lg font-bold text-foreground">$350-550</div>
              <div className="text-xs text-muted-foreground">4x6 coop</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-lg font-bold text-foreground">$450-700</div>
              <div className="text-xs text-muted-foreground">4x8 coop</div>
            </div>
            <div className="bg-muted rounded-lg p-3">
              <div className="text-lg font-bold text-foreground">$800-1,200</div>
              <div className="text-xs text-muted-foreground">8x8 coop</div>
            </div>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          <strong>Real-world reality check:</strong> I initially planned for 6 chickens in my 4x4 coop. Bad idea. The overcrowding led to constant squabbling and damaged feathers. Stick to 3-4 birds maximum.
        </blockquote>
      </section>

      {/* Three Tiers Comparison Image */}
      <div className="rounded-xl overflow-hidden my-8">
        <img 
          src={tiersComparison} 
          alt="Comparison of budget, standard, and premium chicken coop designs" 
          className="w-full h-auto object-cover"
        />
        <p className="text-xs text-muted-foreground text-center mt-2">Left to right: Budget, Standard, and Premium 4x4 coop designs</p>
      </div>

      {/* Section: Basic Plan */}
      <section id="basic-plan" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Basic 4x4 Chicken Coop Plan: Budget Version ($250-300)</h2>
        
        <p className="text-muted-foreground mb-6">
          This stripped-down design prioritizes functionality over aesthetics, perfect for beginners who want to test chicken keeping without major investment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Design Overview</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Dimensions:</strong> 4' x 4' x 4' high (sloped roof)</li>
              <li>• <strong>Capacity:</strong> 3-4 standard chickens</li>
              <li>• <strong>Construction time:</strong> 6-8 hours over 1-2 days</li>
              <li>• <strong>Skill level:</strong> Beginner (basic carpentry)</li>
              <li>• <strong>Foundation:</strong> Pressure-treated skids on blocks</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Elevated 12 inches for predator deterrence</li>
              <li>• Single roosting bar at 18 inches high</li>
              <li>• Two nesting boxes (for 3-4 hens)</li>
              <li>• Front access door for easy cleaning</li>
              <li>• Hardware cloth on all openings</li>
            </ul>
          </div>
        </div>

        {/* Cost Breakdown Table */}
        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-4">Cost Breakdown - Budget Version</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Material</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Qty</th>
                  <th className="text-right py-2 px-3 font-semibold text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2 px-3">Pressure-treated 2x4x8' (skids)</td><td className="py-2 px-3">2</td><td className="py-2 px-3 text-right">$14</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">2x4x8' pine framing</td><td className="py-2 px-3">8</td><td className="py-2 px-3 text-right">$32</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">2x2x8' pine (roost, trim)</td><td className="py-2 px-3">3</td><td className="py-2 px-3 text-right">$12</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">1/2" plywood sheathing</td><td className="py-2 px-3">3 sheets</td><td className="py-2 px-3 text-right">$75</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Metal roofing or shingles</td><td className="py-2 px-3">20 sq ft</td><td className="py-2 px-3 text-right">$35</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">1/2" hardware cloth 19-gauge</td><td className="py-2 px-3">25 sq ft</td><td className="py-2 px-3 text-right">$40</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Hinges, latches, screws</td><td className="py-2 px-3">Various</td><td className="py-2 px-3 text-right">$25</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Concrete blocks</td><td className="py-2 px-3">8</td><td className="py-2 px-3 text-right">$20</td></tr>
                <tr className="font-semibold"><td className="py-2 px-3">Total Materials</td><td className="py-2 px-3"></td><td className="py-2 px-3 text-right text-primary">$253</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
          <h4 className="font-semibold text-destructive mb-2">⚠️ Budget Version Limitations</h4>
          <p className="text-sm text-muted-foreground">This design sacrifices long-term durability for upfront savings. Expect to upgrade or replace components within 2-3 years in harsh climates.</p>
        </div>
      </section>

      {/* Section: Standard Plan */}
      <section id="standard-plan" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Standard 4x4 Chicken Coop Plan: Best Value ($350-450)</h2>
        
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
          <p className="text-sm text-foreground font-medium">
            <strong>This is my recommended starting point for most beginners.</strong> It balances cost with essential features that prevent common problems and reduce long-term maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Design Improvements Over Budget</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Two access points (front door + removable back panel)</li>
              <li>✓ Dedicated ventilation with adjustable shutters</li>
              <li>✓ Sloped roof for better water runoff</li>
              <li>✓ Reinforced frame for enhanced durability</li>
              <li>✓ Predator-proof latching system</li>
              <li>✓ Integrated droppings board under roosts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technical Specifications</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Dimensions:</strong> 4' x 4' x 5' high at peak</li>
              <li>• <strong>Roof slope:</strong> 4:12 pitch for weather protection</li>
              <li>• <strong>Ventilation:</strong> 2 square feet near roofline</li>
              <li>• <strong>Roosting space:</strong> 32 inches (8" per bird)</li>
              <li>• <strong>Nesting boxes:</strong> 12" x 12" x 12" (two boxes)</li>
              <li>• <strong>Foundation height:</strong> 16 inches off ground</li>
            </ul>
          </div>
        </div>

        {/* Standard Cost Breakdown */}
        <div className="bg-muted/50 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-4">Cost Breakdown - Standard Version</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Material</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Qty</th>
                  <th className="text-right py-2 px-3 font-semibold text-foreground">Cost</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50"><td className="py-2 px-3">Pressure-treated 2x4x8' lumber</td><td className="py-2 px-3">12</td><td className="py-2 px-3 text-right">$84</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">2x2x8' pine (roost, interior)</td><td className="py-2 px-3">4</td><td className="py-2 px-3 text-right">$16</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">1/2" plywood exterior grade</td><td className="py-2 px-3">4 sheets</td><td className="py-2 px-3 text-right">$120</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Metal roofing panels</td><td className="py-2 px-3">20 sq ft</td><td className="py-2 px-3 text-right">$45</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">1/2" hardware cloth 19-gauge</td><td className="py-2 px-3">30 sq ft</td><td className="py-2 px-3 text-right">$50</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Two-step latches (raccoon-proof)</td><td className="py-2 px-3">2</td><td className="py-2 px-3 text-right">$18</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Hinges, screws, miscellaneous</td><td className="py-2 px-3">Various</td><td className="py-2 px-3 text-right">$35</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-3">Concrete blocks/gravel</td><td className="py-2 px-3">Foundation</td><td className="py-2 px-3 text-right">$25</td></tr>
                <tr className="font-semibold"><td className="py-2 px-3">Total Materials</td><td className="py-2 px-3"></td><td className="py-2 px-3 text-right text-primary">$393</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          <strong>Why this is my go-to recommendation:</strong> The standard version has survived 5 years in Arizona heat, monsoon winds, and persistent coyotes. The dual access points make maintenance manageable.
        </blockquote>
      </section>

      {/* Section: Premium Plan */}
      <section id="premium-plan" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Premium 4x4 Chicken Coop Plan: Maximum Features ($500-650)</h2>
        
        <p className="text-muted-foreground mb-6">
          For beginners who want to build once and enjoy for years, the premium version includes convenience features and superior materials that transform daily chicken care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Premium Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>⭐ Automatic door with timer/light sensor</li>
              <li>⭐ Cedar construction for pest resistance</li>
              <li>⭐ Integrated nest box with external egg collection</li>
              <li>⭐ Ventilation system with seasonal adjustments</li>
              <li>⭐ Full-height walk-in design (6' peak)</li>
              <li>⭐ Removable droppings tray</li>
              <li>⭐ Predator-proof feed storage compartment</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Long-term Value Proposition</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Automatic door:</strong> Eliminates #1 cause of predator losses</li>
              <li>• <strong>External egg access:</strong> No entering coop daily</li>
              <li>• <strong>Walk-in height:</strong> Comfortable maintenance</li>
              <li>• <strong>Cedar construction:</strong> 15-20 year lifespan vs. 5-8 for pine</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">💡 Premium Version Reality Check</h4>
          <p className="text-sm text-muted-foreground">The automatic door alone prevents more predator losses than any other single upgrade. It pays for itself within the first year by eliminating the 6 PM panic of "Did I remember to lock up the chickens?"</p>
        </div>
      </section>

      {/* Framing Diagram */}
      <div className="rounded-xl overflow-hidden my-8">
        <img 
          src={framingDiagram} 
          alt="Technical diagram showing chicken coop framing structure with labeled components" 
          className="w-full h-auto object-cover"
        />
        <p className="text-xs text-muted-foreground text-center mt-2">Basic coop framing structure with 2x4 lumber, showing floor joists, wall studs, and roof rafters</p>
      </div>

      {/* Section: Materials & Tools */}
      <section id="materials-tools" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Complete Materials List & Tool Requirements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Essential Tools</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>🔧 <strong>Circular saw or miter saw</strong> — Critical for accurate cuts</li>
              <li>🔧 <strong>Drill/driver</strong> — 18V cordless minimum</li>
              <li>🔧 <strong>Level (4-foot)</strong> — Essential for square construction</li>
              <li>🔧 <strong>Speed square</strong> — For marking cuts and angles</li>
              <li>🔧 <strong>Tape measure (25-foot)</strong> — Standard construction length</li>
              <li>🔧 <strong>Safety glasses & work gloves</strong> — Non-negotiable</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Money-Saving Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>💰 Buy lumber in standard 8-foot lengths</li>
              <li>💰 Hardware cloth from farm supply (30-40% cheaper)</li>
              <li>💰 Shop construction salvage for materials</li>
              <li>💰 Buy hinges and latches online</li>
            </ul>
            <h4 className="font-medium text-foreground mt-4 mb-2">Quality Splurges That Pay Off:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 19-gauge hardware cloth (23-gauge tears easily)</li>
              <li>• Galvanized screws (regular rust in 2-3 years)</li>
              <li>• Two-step latches (cheap latches = dead chickens)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Construction Steps */}
      <section id="construction-steps" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Step-by-Step Construction Guide</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong>Build order matters.</strong> Following this sequence prevents the "I wish I'd done that first" moments that plague DIY projects.
        </p>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Phase 1: Foundation and Frame (Day 1 Morning)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Step 1: Prepare the Foundation</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Level the ground using a 4-foot level</li>
                  <li>• Position concrete blocks 4 feet apart (parallel lines)</li>
                  <li>• Place pressure-treated 2x4 skids on blocks</li>
                  <li>• Check diagonal measurements for square</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Step 2: Build the Base Frame</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Cut four 2x4s to 48 inches (exact measurement)</li>
                  <li>• Assemble rectangle using 3-inch deck screws</li>
                  <li>• Pre-drill holes to prevent splitting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Phase 2: Wall Construction (Day 1 Afternoon)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Step 4: Frame the Walls</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Front and back walls need 3 studs each</li>
                  <li>• Side walls need 2 studs each</li>
                  <li>• Pre-cut door opening (24" wide minimum)</li>
                  <li>• Frame walls flat on ground, then raise and attach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Step 5: Install Ventilation Openings</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Cut openings 2 inches below roof line</li>
                  <li>• Minimum 6" x 12" on each end wall</li>
                  <li>• Frame openings with 2x2 lumber</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Phase 3: Interior Features (Day 2 Morning)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Step 6: Install Roosting System</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Mount roost bar 18-20 inches off floor</li>
                  <li>• Use 2x4 laid flat (wide side up)</li>
                  <li>• Sand edges smooth to prevent foot injuries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Step 7: Build Nesting Boxes</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Construct 12" x 12" x 12" boxes</li>
                  <li>• Mount 12-16 inches off floor (below roost)</li>
                  <li>• Add 4-inch front lip to contain bedding</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Phase 4: Roofing and Finishing (Day 2 Afternoon)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">Step 8: Install Roof Structure</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Cut rafters for 4:12 slope</li>
                  <li>• Install 1/2" plywood sheathing minimum</li>
                  <li>• Add metal roofing with proper overlap</li>
                  <li>• Include 6-inch overhang for weather protection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground">Step 9: Secure with Hardware Cloth</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Cover ALL openings with 1/2" hardware cloth</li>
                  <li>• Staple every 2 inches with heavy-duty staples</li>
                  <li>• Overlap seams by 1 inch minimum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
          <h4 className="font-semibold text-foreground mb-2">⏱️ Realistic Time Estimates</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Experienced DIYer:</strong> 8-10 hours</li>
            <li>• <strong>Intermediate builder:</strong> 12-15 hours</li>
            <li>• <strong>Complete beginner:</strong> 16-20 hours</li>
            <li>• <strong>Add 25%</strong> if building alone vs. with helper</li>
          </ul>
        </div>
      </section>

      {/* Section: Beginner Mistakes */}
      <section id="beginner-mistakes" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">7 Costly Mistakes Every Beginner Makes</h2>
        
        <p className="text-muted-foreground mb-6">
          I've made every one of these mistakes, some multiple times. Learn from my expensive education.
        </p>

        <div className="space-y-4">
          {[
            { title: "Using Chicken Wire Instead of Hardware Cloth", problem: "Raccoons tear through chicken wire like tissue paper. You'll lose birds.", fix: "Only use 1/2\" hardware cloth, 19-gauge minimum. Yes, it costs 3-5x more. Dead chickens cost more." },
            { title: "Inadequate Ventilation", problem: "Ammonia buildup causes respiratory issues, eye damage, and frostbite from humidity.", fix: "Minimum 1 square foot of ventilation per bird, positioned near roofline." },
            { title: "Roosting Bars Positioned Wrong", problem: "Round bars cause foot problems; bars above nesting boxes create dirty eggs.", fix: "Use 2x4 lumber flat (wide side up), position 18-20 inches high, ensure nesting boxes are lower." },
            { title: "Overcrowding the Coop", problem: "Feather pecking, aggression, cannibalism, and increased disease transmission.", fix: "Stick to 4 square feet per bird minimum. Your 4x4 houses 3-4 chickens maximum." },
            { title: "Weak or Inadequate Latches", problem: "Raccoons have dexterous paws and can open simple latches, slide bolts, and hooks.", fix: "Use two-step latches requiring simultaneous motions, or add carabiners." },
            { title: "Building on Ground Level", problem: "Predators dig under walls, moisture rots wood, drainage creates mud.", fix: "Elevate the coop 12-18 inches minimum." },
            { title: "Skipping the Foundation Prep", problem: "Coop settles unevenly, doors don't close properly, structural stress creates gaps.", fix: "Level the ground, use proper footings, and check for square throughout construction." }
          ].map((mistake, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Mistake #{index + 1}: {mistake.title}</h3>
              <p className="text-sm text-destructive mb-2"><strong>What happens:</strong> {mistake.problem}</p>
              <p className="text-sm text-primary"><strong>The fix:</strong> {mistake.fix}</p>
            </div>
          ))}
        </div>

        <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground mt-6">
          <strong>My most expensive mistake:</strong> I lost 3 chickens to a raccoon because I used cheap latches and chicken wire. That $30 savings cost me $60 in replacement birds plus the heartbreak. Don't repeat my mistake.
        </blockquote>
      </section>

      {/* Section: Upgrade Paths */}
      <section id="upgrade-paths" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Future Expansion Options</h2>
        
        <p className="text-muted-foreground mb-6">
          The beauty of starting with a well-designed 4x4 coop is the ability to expand as your flock grows or your ambitions increase.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Add Attached Run</h3>
            <p className="text-xs text-muted-foreground mb-3">Timeline: Immediately or Year 1</p>
            <p className="text-sm text-primary font-medium mb-2">Cost: $150-300 for 8x4 run</p>
            <p className="text-sm text-muted-foreground">Provides secure outdoor space without major construction. Attach 8x4 run to one side, doubling total space.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Build Modular Second Coop</h3>
            <p className="text-xs text-muted-foreground mb-3">Timeline: Year 2-3</p>
            <p className="text-sm text-primary font-medium mb-2">Cost: $300-500 for matching 4x4</p>
            <p className="text-sm text-muted-foreground">Separate flocks, breeding programs, or quarantine space. Share infrastructure (water, feed storage).</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Convert to Permanent Structure</h3>
            <p className="text-xs text-muted-foreground mb-3">Timeline: Long-term (5+ years)</p>
            <p className="text-sm text-primary font-medium mb-2">Cost: $1,000-2,000 for 8x12 coop</p>
            <p className="text-sm text-muted-foreground">Maximum convenience and capacity. Use 4x4 as brooder/quarantine, build large walk-in coop.</p>
          </div>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {[
            { q: "How many chickens can fit in a 4x4 coop?", a: "3-4 standard chickens maximum. Some sources claim 6-8 birds, but this leads to behavioral problems, aggression, and health issues. The 4 square feet per bird minimum is based on research, not marketing." },
            { q: "What's the minimum height for a chicken coop?", a: "4 feet minimum for a basic coop, 6+ feet for walk-in convenience. Chickens need 18 inches clearance above roosts, plus space for roosting bars." },
            { q: "Do I need a building permit for a 4x4 chicken coop?", a: "Usually not, but check local codes. Most areas don't require permits for structures under 120 square feet without electrical or plumbing. However, setback requirements and HOA restrictions may apply." },
            { q: "How much does it cost to maintain a chicken coop annually?", a: "$50-100 per year for a 4x4 coop. This includes bedding ($20-30), replacement parts ($10-20), and occasional repairs ($20-50)." },
            { q: "How long does a 4x4 chicken coop last?", a: "5-8 years for pine construction, 15-20 years for cedar. Climate affects longevity significantly. Regular maintenance extends lifespan considerably." },
            { q: "Should I insulate my chicken coop?", a: "Generally not necessary and potentially problematic. Insulation can trap moisture and create condensation problems. Chickens generate significant body heat—proper ventilation and draft protection work better than insulation in most climates." }
          ].map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="scroll-mt-20 mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Start Building Your Dream Coop Today</h2>
        
        <p className="text-muted-foreground mb-4">
          A 4x4 chicken coop represents the perfect entry point into backyard chicken keeping. The manageable size keeps costs reasonable while providing everything your small flock needs to thrive.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">My Recommendation</h3>
          <p className="text-muted-foreground mb-4">
            <strong>Start with the standard version.</strong> It balances cost with essential features that prevent the most common problems. Once you've mastered chicken keeping basics, the upgrade path is always there.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Remember: the best chicken coop is the one that gets built. Don't get paralyzed by perfect plans—these designs work, and your chickens will appreciate any shelter that meets their basic needs for space, security, and comfort.
          </p>
        </div>
      </section>
    </BlogLayout>
  );
};

export default FourByFourCoopPlans;
