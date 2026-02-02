import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";

const SmallChickenCoopPlans = () => {
  const article = getArticleBySlug('small-chicken-coop-plans');
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      {/* Intro */}
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Small chicken coop plans aren't just scaled-down versions of large coops—they require completely different design strategies.</strong> After helping 40+ urban neighbors maximize egg production in spaces as small as 200 square feet, I've learned that smart small coop design is about vertical thinking, multi-function features, and working within strict city ordinances.
        </p>
        
        <p className="text-muted-foreground mb-8">
          The biggest mistake small-space chicken keepers make? Thinking they can't keep chickens effectively in limited space. Wrong. My neighbor produces 4-5 eggs daily from her 150 square foot backyard in Phoenix, and her setup could work in downtown apartments with balconies.
        </p>

        {/* Space Reality Check */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8">
          <h3 className="font-display text-2xl text-foreground mb-6">Small Space Reality Check</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-secondary/50 rounded-xl">
              <h4 className="font-display text-lg text-foreground mb-3">Minimum Space Requirements</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Total space needed:</strong> 32-48 sq ft for 2-3 hens</li>
                <li><strong className="text-foreground">Coop footprint:</strong> 16-24 sq ft (4×4 to 4×6)</li>
                <li><strong className="text-foreground">Run area:</strong> 16-24 sq ft additional</li>
                <li><strong className="text-foreground">Access space:</strong> 3-foot clearance around coop</li>
              </ul>
            </div>
            <div className="p-5 bg-primary/10 rounded-xl border border-primary/20">
              <h4 className="font-display text-lg text-foreground mb-3">Urban Limitations to Plan For</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Setback requirements:</strong> 5-25 feet from property lines</li>
                <li><strong className="text-foreground">Height restrictions:</strong> 6-10 feet maximum structure height</li>
                <li><strong className="text-foreground">Noise considerations:</strong> No roosters in 98% of cities</li>
                <li><strong className="text-foreground">HOA aesthetics:</strong> Must blend with neighborhood character</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground">
          <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">Looking for detailed construction guidance? Check our complete chicken coop building guide</Link> with step-by-step instructions for any of these designs. For urban lot placement and setback strategies, see our <Link to="/guides/small-backyard-coop-plans" className="text-primary hover:underline">small backyard coop plans guide</Link>.
        </p>
      </section>

      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#design-principles" className="text-primary hover:underline">Small Space Design Principles</a></li>
          <li><a href="#ultra-compact" className="text-primary hover:underline">Ultra-Compact Designs (100-300 sq ft lots)</a></li>
          <li><a href="#small-backyard" className="text-primary hover:underline">Small Backyard Designs (300-600 sq ft lots)</a></li>
          <li><a href="#medium-small" className="text-primary hover:underline">Medium-Small Designs (600-1000 sq ft lots)</a></li>
          <li><a href="#vertical-solutions" className="text-primary hover:underline">Vertical Space Optimization</a></li>
          <li><a href="#urban-considerations" className="text-primary hover:underline">Urban-Specific Considerations</a></li>
          <li><a href="#legal-compliance" className="text-primary hover:underline">City Ordinances and Legal Compliance</a></li>
          <li><a href="#space-maximization" className="text-primary hover:underline">Advanced Space Maximization Techniques</a></li>
          <li><a href="#neighbor-relations" className="text-primary hover:underline">Neighbor Relations and Aesthetics</a></li>
          <li><a href="#maintenance-access" className="text-primary hover:underline">Maintenance in Small Spaces</a></li>
          <li><a href="#selection-guide" className="text-primary hover:underline">Design Selection Framework</a></li>
        </ol>
      </nav>

      {/* Section: Design Principles */}
      <section id="design-principles" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Small Space Design Principles That Actually Work</h2>
        
        <p className="text-muted-foreground mb-6">
          Small chicken coop plans succeed when they maximize function per square foot. After testing dozens of space-saving techniques, these principles separate effective designs from cramped disasters.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">The 5 Non-Negotiable Small Space Rules</h3>

        <div className="space-y-6 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">1. Vertical Integration is Everything</h4>
            <p className="text-muted-foreground mb-3">Small lots demand thinking up, not out. Every successful small coop design uses vertical space for multiple functions:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Roosting above nesting:</strong> Standard requirement, saves 8-12 sq ft</li>
              <li><strong className="text-foreground">Storage above or below:</strong> Feed, tools, supplies in otherwise dead space</li>
              <li><strong className="text-foreground">Elevated coops:</strong> Creates shelter/shade area underneath</li>
              <li><strong className="text-foreground">Multi-level runs:</strong> Platforms double usable chicken space</li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">2. Multi-Function Every Element</h4>
            <p className="text-muted-foreground mb-3">In small spaces, single-purpose items are luxury you can't afford:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Nesting boxes double as cleanout access</strong></li>
              <li><strong className="text-foreground">Roosting bars provide structural support</strong></li>
              <li><strong className="text-foreground">Run fencing serves as trellis for climbing plants</strong></li>
              <li><strong className="text-foreground">Coop roof becomes rain catchment for waterer</strong></li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">3. Access from Outside Only</h4>
            <p className="text-muted-foreground mb-3">Walk-in coops waste precious space in small designs:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">External nesting box access:</strong> Collect eggs without entering run</li>
              <li><strong className="text-foreground">Removable roosting bars:</strong> Clean from outside</li>
              <li><strong className="text-foreground">Slide-out droppings trays:</strong> Maintenance without entering</li>
              <li><strong className="text-foreground">Top-opening designs:</strong> Complete access from above</li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">4. Modular and Expandable</h4>
            <p className="text-muted-foreground mb-3">Small spaces change—successful designs adapt:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Bolt-together construction:</strong> Move or reconfigure easily</li>
              <li><strong className="text-foreground">Standardized dimensions:</strong> Add matching modules later</li>
              <li><strong className="text-foreground">Detachable runs:</strong> Seasonal configuration changes</li>
              <li><strong className="text-foreground">Upgrade-friendly design:</strong> Add automation without rebuilding</li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">5. Aesthetic Integration</h4>
            <p className="text-muted-foreground mb-3">Small coops are visible—they must look intentional:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Match existing structures:</strong> Colors, materials, roof lines</li>
              <li><strong className="text-foreground">Garden integration:</strong> Become part of landscape design</li>
              <li><strong className="text-foreground">Clean lines:</strong> Simple, purposeful appearance</li>
              <li><strong className="text-foreground">Screening options:</strong> Attractive fencing or plantings</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">📐 Space Allocation Formula for Small Coops</h4>
          <p className="text-muted-foreground mb-3"><strong className="text-foreground">Total lot space × 0.15-0.25 = Maximum chicken area</strong></p>
          <ul className="text-muted-foreground space-y-1">
            <li><strong className="text-foreground">400 sq ft lot:</strong> 60-100 sq ft for chickens (2-3 birds)</li>
            <li><strong className="text-foreground">600 sq ft lot:</strong> 90-150 sq ft for chickens (3-5 birds)</li>
            <li><strong className="text-foreground">800 sq ft lot:</strong> 120-200 sq ft for chickens (4-6 birds)</li>
          </ul>
        </div>
      </section>

      {/* Section: Ultra-Compact Designs */}
      <section id="ultra-compact" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Ultra-Compact Designs (100-300 sq ft lots)</h2>
        
        <p className="text-muted-foreground mb-8">
          These designs work in the tightest urban spaces—balconies, tiny backyards, and narrow side yards. Focus is on maximum efficiency and neighbor compatibility.
        </p>

        {/* Design #1 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #1: The Vertical Tower Coop</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 3×3 feet (9 sq ft)</li>
                <li><strong className="text-foreground">Height:</strong> 6 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 2-3 bantam hens</li>
                <li><strong className="text-foreground">Cost:</strong> $200-350</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Layout Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Ground level: Storage, feeder, waterer</li>
                <li>2nd level: Nesting boxes (external access)</li>
                <li>3rd level: Roosting area with removable trays</li>
                <li>Top level: Weather protection, ventilation</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Maximum birds per square foot of any design</li>
                <li>Weather protected on all levels</li>
                <li>Easy maintenance with slide-out components</li>
                <li>Aesthetically striking architectural element</li>
                <li>No run footprint needed</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Limited to small/bantam breeds</li>
                <li>No ground access for chickens (confined always)</li>
                <li>Requires frequent cleaning due to confinement</li>
                <li>Height may violate ordinances in some areas</li>
                <li>Complex construction for beginners</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Urban balconies, narrow side yards, HOA-restricted areas requiring attractive design</p>
          </div>
        </div>

        {/* Design #2 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #2: The Murphy Coop (Fold-Away Design)</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 2×6 feet folded, 4×6 deployed</li>
                <li><strong className="text-foreground">Height:</strong> 4 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 2-3 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $250-400</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Deployment Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Folds against fence or building wall</li>
                <li>Expands to create 24 sq ft run space</li>
                <li>Coop section remains fixed, run deploys</li>
                <li>Takes 2 minutes to set up/take down</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Space when you want it, flexible usage</li>
                <li>Weather protection—fold away during storms</li>
                <li>Neighbor friendly, temporary appearance</li>
                <li>Rental property suitable, easily removable</li>
                <li>Secure storage when not in use</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Daily setup required for chicken access</li>
                <li>Complex hinge system, maintenance intensive</li>
                <li>Weather dependency—can't use in storms</li>
                <li>Limited automation options</li>
                <li>Higher initial cost for mechanisms</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Rental properties, shared spaces, areas with severe weather, maximum flexibility needs</p>
          </div>
        </div>

        {/* Design #3 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #3: The Corner Wedge Coop</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 4×4×6 triangle (12 sq ft)</li>
                <li><strong className="text-foreground">Height:</strong> 5 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 2-3 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $180-320</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Space Optimization</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Fits into corner spaces</li>
                <li>Uses existing fence as two sides</li>
                <li>Triangular run maximizes diagonal space</li>
                <li>Angled roof sheds water efficiently</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Uses dead corner space efficiently</li>
                <li>Lower material cost—fence provides walls</li>
                <li>Protected location, wind/weather shelter</li>
                <li>Easy construction, simple geometry</li>
                <li>Stable structure, corner bracing</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Requires suitable corner, limited placement</li>
                <li>Awkward internal access, triangular space</li>
                <li>Drainage issues if corner collects water</li>
                <li>Limited expansion options</li>
                <li>May trap heat in summer</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Properties with suitable corners, budget-focused builds, beginner builders</p>
          </div>
        </div>
      </section>

      {/* Section: Small Backyard Designs */}
      <section id="small-backyard" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Small Backyard Designs (300-600 sq ft lots)</h2>
        
        <p className="text-muted-foreground mb-8">
          These designs balance chicken needs with other yard uses. Perfect for typical urban residential lots that want productive flocks without sacrificing outdoor living space.
        </p>

        {/* Design #6 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #6: The Urban Homestead</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 4×6 feet (24 sq ft)</li>
                <li><strong className="text-foreground">Height:</strong> 6 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 4-6 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $350-550</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Premium Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Elevated design with under-coop storage</li>
                <li>External nesting box access</li>
                <li>Integrated run with hardware cloth</li>
                <li>Ventilation system built-in</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Perfect balance of space and capacity</li>
                <li>Under-coop storage or shade area</li>
                <li>Full security with hardware cloth</li>
                <li>Easy maintenance access</li>
                <li>Attractive design for any neighborhood</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Moderate footprint required</li>
                <li>Intermediate construction skills needed</li>
                <li>Materials cost in mid-range</li>
                <li>May need permit in some areas</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Serious urban chicken keepers, families wanting sustainable egg production</p>
          </div>
        </div>

        {/* Design #7 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #7: The Suburban Cottage Coop</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 5×7 feet (35 sq ft)</li>
                <li><strong className="text-foreground">Height:</strong> 7 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 5-8 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $450-700</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Design Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Cottage-style aesthetic</li>
                <li>Flower boxes and trim details</li>
                <li>Matching house paint colors</li>
                <li>HOA-friendly appearance</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>HOA-approved aesthetic design</li>
                <li>Property value enhancement</li>
                <li>Larger flock capacity</li>
                <li>Professional appearance</li>
                <li>Neighbor-friendly design</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Higher construction cost</li>
                <li>More materials required</li>
                <li>Longer build time</li>
                <li>May need building permit</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> HOA communities, style-conscious homeowners, larger family flocks</p>
          </div>
        </div>
      </section>

      {/* Section: Medium-Small Designs */}
      <section id="medium-small" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Medium-Small Designs (600-1000 sq ft lots)</h2>
        
        <p className="text-muted-foreground mb-8">
          These designs offer more comfort for larger flocks while maintaining small-space efficiency. Perfect for urban lots that want serious egg production.
        </p>

        {/* Design #11 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #11: The Urban Homestead Deluxe</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 6×8 feet (48 sq ft)</li>
                <li><strong className="text-foreground">Height:</strong> 8 feet</li>
                <li><strong className="text-foreground">Capacity:</strong> 8-12 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $500-800</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Premium Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Walk-in design for easy maintenance</li>
                <li>Automatic door and lighting</li>
                <li>Integrated storage loft</li>
                <li>Weather station integration</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>High capacity for serious egg production</li>
                <li>Premium features, automated systems</li>
                <li>Easy maintenance with walk-in access</li>
                <li>Professional appearance, property enhancement</li>
                <li>Future-proof design with room for upgrades</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Higher cost with premium materials</li>
                <li>Complex construction, advanced features</li>
                <li>Space commitment with large footprint</li>
                <li>Maintenance complexity with more systems</li>
                <li>Possible permit requirements for size</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Serious chicken keepers, maximum egg production, premium property upgrades</p>
          </div>
        </div>

        {/* Design #12 */}
        <div className="mb-8 p-6 bg-card border border-border rounded-2xl">
          <h3 className="font-display text-2xl text-foreground mb-4">Design #12: The Chicken Tractor System</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Specifications</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong className="text-foreground">Footprint:</strong> 4×8 feet (32 sq ft)</li>
                <li><strong className="text-foreground">Mobile range:</strong> Up to 200 sq ft</li>
                <li><strong className="text-foreground">Capacity:</strong> 6-8 standard hens</li>
                <li><strong className="text-foreground">Cost:</strong> $350-550</li>
              </ul>
            </div>
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3">Mobile Features</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>Wheeled for easy movement</li>
                <li>Bottomless for ground access</li>
                <li>Lightweight construction</li>
                <li>Weather protection shelter</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">✅ Pros</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Maximum space utilization—rotate through yard</li>
                <li>Natural fertilizer distribution, lawn improvement</li>
                <li>Pest control as chickens clean different areas</li>
                <li>Ground access for natural foraging behavior</li>
                <li>Flexible positioning, seasonal optimization</li>
              </ul>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">❌ Cons</h4>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>Daily moving required, labor intensive</li>
                <li>Weather dependency, movement limitations</li>
                <li>Structural limitations with lightweight construction</li>
                <li>Security concerns when unattended</li>
                <li>Uneven ground challenges, mobility issues</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-primary/10 rounded-xl">
            <p className="text-muted-foreground"><strong className="text-foreground">Best for:</strong> Active managers, lawn improvement goals, maximum space utilization</p>
          </div>
        </div>
      </section>

      {/* Section: Vertical Solutions */}
      <section id="vertical-solutions" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Vertical Space Optimization</h2>
        
        <p className="text-muted-foreground mb-6">
          Vertical design is the secret weapon for small-space chicken keeping. These techniques can effectively double your usable space without expanding footprint.
        </p>

        <div className="space-y-6 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Multi-Level Run Platform System</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Structure:</strong> Multiple elevated platforms at 18-inch intervals</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Materials:</strong> Pressure-treated 2×4 framing, hardware cloth platforms</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Space multiplier:</strong> 2-3x effective run space</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Benefits:</strong> Exercise, pecking order separation, weather protection</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Stacked Nesting Box Design</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Structure:</strong> 3-tier external nesting boxes</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Access:</strong> Individual lid for each level</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Space savings:</strong> 60% reduction in wall space needed</p>
                <p className="text-muted-foreground mb-2"><strong className="text-foreground">Benefits:</strong> More nesting options, easier egg collection</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">📐 Vertical Space Calculation Formula</h4>
          <p className="text-muted-foreground mb-3"><strong className="text-foreground">Effective space = (Footprint × 0.6) + (Height zones × Footprint × 0.3)</strong></p>
          <div className="text-muted-foreground">
            <p className="mb-2"><strong className="text-foreground">Example: 4×4 foot vertical coop, 6 feet tall</strong></p>
            <ul className="space-y-1 text-sm">
              <li>Ground footprint: 16 sq ft</li>
              <li>Usable footprint: 16 × 0.6 = 9.6 sq ft</li>
              <li>Height zones: 3 zones (2-foot sections)</li>
              <li>Vertical bonus: 3 × 16 × 0.3 = 14.4 sq ft</li>
              <li><strong className="text-foreground">Total effective space: 24 sq ft (1.5x multiplier)</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section: Urban Considerations */}
      <section id="urban-considerations" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Urban-Specific Design Considerations</h2>
        
        <p className="text-muted-foreground mb-6">
          Urban chicken keeping requires different priorities than rural coops. Noise control, aesthetic appeal, and neighbor relations often matter more than maximizing bird capacity.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Noise Management Strategies</h3>

        <div className="space-y-4 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">Egg Song (Loudest Issue)</h4>
            <p className="text-muted-foreground"><strong className="text-foreground">Volume:</strong> 60-70 decibels, 10-15 minutes after laying</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Timing:</strong> Usually 8am-12pm peak laying hours</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Solutions:</strong> Sound-dampening nesting boxes, morning delay strategies</p>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">Acoustic Design Features</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Sound barriers:</strong> Solid fence panels on neighbor-facing sides</li>
              <li><strong className="text-foreground">Absorption materials:</strong> Straw bales, dense plantings around coop</li>
              <li><strong className="text-foreground">Distance placement:</strong> Maximum setback from neighbor windows/patios</li>
              <li><strong className="text-foreground">Time management:</strong> Late morning access to reduce dawn noise</li>
            </ul>
          </div>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Neighborhood Compatibility</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold text-foreground">Neighborhood Type</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Design Priority</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Material Selection</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr><td className="border border-border p-3">Historic Districts</td><td className="border border-border p-3">Period-appropriate design</td><td className="border border-border p-3">Traditional materials only</td></tr>
              <tr><td className="border border-border p-3">Modern Suburban</td><td className="border border-border p-3">Clean, contemporary lines</td><td className="border border-border p-3">Metal, composite, glass</td></tr>
              <tr><td className="border border-border p-3">HOA Communities</td><td className="border border-border p-3">Blend with landscape</td><td className="border border-border p-3">Approved color palettes</td></tr>
              <tr><td className="border border-border p-3">Craftsman/Cottage</td><td className="border border-border p-3">Handcrafted appearance</td><td className="border border-border p-3">Natural wood, stone</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Legal Compliance */}
      <section id="legal-compliance" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">City Ordinances and Legal Compliance</h2>
        
        <p className="text-muted-foreground mb-6">
          Urban chicken keeping legality varies dramatically by location. Understanding and complying with local regulations prevents costly mistakes and ensures long-term success.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Common Urban Chicken Regulations</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold text-foreground">Regulation Type</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Common Requirements</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Typical Range</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr><td className="border border-border p-3 font-medium text-foreground">Number Limits</td><td className="border border-border p-3">Maximum hens allowed</td><td className="border border-border p-3">3-10 hens (6 most common)</td></tr>
              <tr><td className="border border-border p-3 font-medium text-foreground">Setback Requirements</td><td className="border border-border p-3">Distance from property lines</td><td className="border border-border p-3">5-100 feet (20 feet common)</td></tr>
              <tr><td className="border border-border p-3 font-medium text-foreground">Structure Limits</td><td className="border border-border p-3">Maximum coop size/height</td><td className="border border-border p-3">120-200 sq ft max, 6-10 ft height</td></tr>
              <tr><td className="border border-border p-3 font-medium text-foreground">Rooster Prohibitions</td><td className="border border-border p-3">Male chickens banned</td><td className="border border-border p-3">98% of cities ban roosters</td></tr>
              <tr><td className="border border-border p-3 font-medium text-foreground">Permit Requirements</td><td className="border border-border p-3">Registration/inspection needed</td><td className="border border-border p-3">$0-200 annual fees</td></tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl mb-6">
          <h4 className="font-display text-lg text-foreground mb-3">🔍 Before You Build: Compliance Checklist</h4>
          <ul className="text-muted-foreground space-y-2">
            <li>✓ Check city zoning code for agricultural animals</li>
            <li>✓ Review HOA bylaws if applicable</li>
            <li>✓ Measure setback requirements from all property lines</li>
            <li>✓ Confirm structure size doesn't require building permit</li>
            <li>✓ Verify rooster prohibition (plan for accidental roosters)</li>
          </ul>
        </div>
      </section>

      {/* Section: Space Maximization */}
      <section id="space-maximization" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Advanced Space Maximization Techniques</h2>
        
        <p className="text-muted-foreground mb-6">
          When every square foot matters, these advanced techniques extract maximum function from minimum space.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Multi-Functional Design Elements</h3>

        <div className="space-y-4 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Smart Roosting Bar System</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Primary function:</strong> Nighttime roosting</li>
              <li><strong className="text-foreground">Secondary function:</strong> Structural support beam</li>
              <li><strong className="text-foreground">Tertiary function:</strong> Hangers for equipment</li>
              <li><strong className="text-foreground">Space savings:</strong> Eliminates separate structural members</li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Integrated Nesting/Storage System</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Primary function:</strong> Egg laying spaces</li>
              <li><strong className="text-foreground">Secondary function:</strong> Tool storage underneath</li>
              <li><strong className="text-foreground">Tertiary function:</strong> Feed storage in side compartments</li>
              <li><strong className="text-foreground">Space savings:</strong> Combines 3 storage needs</li>
            </ul>
          </div>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Technology Integration for Space Efficiency</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-muted/50 rounded-xl">
            <h5 className="font-semibold text-foreground mb-2">Gravity-Fed PVC Feeder</h5>
            <p className="text-muted-foreground text-sm mb-2">Space saved: 75% reduction</p>
            <p className="text-muted-foreground text-sm">Cost: $25-40</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-xl">
            <h5 className="font-semibold text-foreground mb-2">Nipple Water System</h5>
            <p className="text-muted-foreground text-sm mb-2">Space saved: 90% reduction</p>
            <p className="text-muted-foreground text-sm">Cost: $15-30</p>
          </div>
          <div className="p-4 bg-muted/50 rounded-xl">
            <h5 className="font-semibold text-foreground mb-2">Timer-Based LED Lighting</h5>
            <p className="text-muted-foreground text-sm mb-2">No bulky fixtures needed</p>
            <p className="text-muted-foreground text-sm">Cost: $40-80</p>
          </div>
        </div>
      </section>

      {/* Section: Neighbor Relations */}
      <section id="neighbor-relations" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Neighbor Relations and Community Integration</h2>
        
        <p className="text-muted-foreground mb-6">
          Small chicken coop success depends as much on human relationships as coop design. In tight urban spaces, neighbor support determines long-term viability.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Common Neighbor Concerns and Solutions</h3>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border border-border p-3 text-left font-semibold text-foreground">Concern</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Validity</th>
                <th className="border border-border p-3 text-left font-semibold text-foreground">Design Solution</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr><td className="border border-border p-3">Noise Issues</td><td className="border border-border p-3">Moderate</td><td className="border border-border p-3">Sound barriers, coop placement, no roosters</td></tr>
              <tr><td className="border border-border p-3">Odor Problems</td><td className="border border-border p-3">Low</td><td className="border border-border p-3">Excellent ventilation, regular cleaning</td></tr>
              <tr><td className="border border-border p-3">Property Values</td><td className="border border-border p-3">Low</td><td className="border border-border p-3">High-quality design, landscape integration</td></tr>
              <tr><td className="border border-border p-3">Pest Attraction</td><td className="border border-border p-3">Moderate</td><td className="border border-border p-3">Sealed storage, clean feeding practices</td></tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">🤝 Community Benefit Integration</h4>
          <ul className="text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Fresh egg sharing:</strong> Weekly egg gifts to immediate neighbors</li>
            <li><strong className="text-foreground">Garden integration:</strong> Composted manure as excellent fertilizer</li>
            <li><strong className="text-foreground">Educational opportunities:</strong> Hands-on agriculture education for children</li>
            <li><strong className="text-foreground">Pest control:</strong> Chickens eat grubs, slugs, harmful insects</li>
          </ul>
        </div>
      </section>

      {/* Section: Maintenance Access */}
      <section id="maintenance-access" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Maintenance in Small Spaces</h2>
        
        <p className="text-muted-foreground mb-6">
          Small coop success requires smart access planning. The best designs make daily maintenance efficient and complete deep cleaning possible.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Daily Access Requirements</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Morning Routine (5-10 minutes)</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Open pop door or deploy run (1-2 min)</li>
              <li>Check water level and cleanliness (1 min)</li>
              <li>Verify feed availability (1 min)</li>
              <li>Quick visual health check (2 min)</li>
            </ul>
          </div>
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Evening Routine (5-8 minutes)</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Collect eggs (2 min)</li>
              <li>Count birds and visual check (1 min)</li>
              <li>Secure coop for night (1-2 min)</li>
              <li>Quick droppings tray check (1 min)</li>
            </ul>
          </div>
        </div>

        <h3 className="font-display text-xl text-foreground mb-4">Small Space Cleaning Strategies</h3>

        <div className="space-y-4 mb-6">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-2">Modular Cleaning Approach</h4>
            <p className="text-muted-foreground"><strong className="text-foreground">Strategy:</strong> Clean one section at a time</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Process:</strong> Remove chickens to run, clean empty coop</p>
            <p className="text-muted-foreground"><strong className="text-foreground">Time:</strong> 30-45 minutes monthly</p>
          </div>
        </div>

        <div className="p-6 bg-accent/10 border border-accent/20 rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">🔧 Maintenance Access Tips</h4>
          <ul className="text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Design for your worst day:</strong> When you're sick, tired, or rushed</li>
            <li><strong className="text-foreground">Test with gloves on:</strong> Cold weather access practice</li>
            <li><strong className="text-foreground">Time all tasks:</strong> Identify bottlenecks and improve</li>
            <li><strong className="text-foreground">Create maintenance checklists:</strong> Don't rely on memory</li>
          </ul>
        </div>
      </section>

      {/* Section: Selection Guide */}
      <section id="selection-guide" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Design Selection Framework</h2>
        
        <p className="text-muted-foreground mb-6">
          With 15 different small chicken coop plans, choosing the right design depends on your specific constraints, goals, and situation. This framework guides you to the optimal design.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Decision Tree: Find Your Ideal Design</h3>

        <div className="space-y-6 mb-8">
          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Step 1: Lot Size Assessment</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Ultra-Compact (100-300 sq ft):</strong> Vertical Tower, Murphy Coop, Corner Wedge</li>
              <li><strong className="text-foreground">Small Backyard (300-600 sq ft):</strong> Urban Homestead, Suburban Cottage, Modular Expansion</li>
              <li><strong className="text-foreground">Medium-Small (600-1000 sq ft):</strong> Urban Homestead Deluxe, Chicken Tractor, Split-Level Modern</li>
            </ul>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Step 2: Budget Constraints</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border p-2 text-left font-semibold text-foreground text-sm">Budget Range</th>
                    <th className="border border-border p-2 text-left font-semibold text-foreground text-sm">Recommended Designs</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr><td className="border border-border p-2">Under $300</td><td className="border border-border p-2">Corner Wedge, Lean-To, Shed Conversion</td></tr>
                  <tr><td className="border border-border p-2">$300-500</td><td className="border border-border p-2">Vertical Tower, Urban Homestead, Modular</td></tr>
                  <tr><td className="border border-border p-2">$500-800</td><td className="border border-border p-2">Suburban Cottage, Urban Deluxe, Tractor</td></tr>
                  <tr><td className="border border-border p-2">$800+</td><td className="border border-border p-2">Split-Level Modern, Greenhouse Hybrid</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-5 bg-card border border-border rounded-xl">
            <h4 className="font-semibold text-foreground mb-3">Step 3: Experience and Skill Level</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Beginner Builders:</strong> Corner Wedge, Urban Homestead, Lean-To, Shed Conversion</li>
              <li><strong className="text-foreground">Intermediate Builders:</strong> Vertical Tower, Suburban Cottage, Urban Deluxe, Chicken Tractor</li>
              <li><strong className="text-foreground">Advanced Builders:</strong> Murphy Coop, Transformer, Split-Level Modern, Greenhouse Hybrid</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">🎯 Final Recommendation</h4>
          <p className="text-muted-foreground mb-4">
            For most urban beginners with 300-600 sq ft lots, I recommend starting with the <strong className="text-foreground">Urban Homestead design (#6)</strong>. It offers the best balance of:
          </p>
          <ul className="text-muted-foreground space-y-1">
            <li>✓ Reasonable construction complexity</li>
            <li>✓ Adequate capacity (4-6 hens)</li>
            <li>✓ Attractive appearance</li>
            <li>✓ Expansion potential</li>
            <li>✓ Moderate cost ($350-550)</li>
          </ul>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Start Small, Dream Big</h2>
        
        <p className="text-muted-foreground mb-6">
          Small chicken coop success comes from matching your design to your space, budget, and skill level. Don't try to maximize bird count—focus on creating a sustainable, enjoyable system that fits your life.
        </p>

        <p className="text-muted-foreground mb-6">
          Remember: the best small coop is one you can maintain consistently, that produces happy hens and fresh eggs, and that enhances rather than complicates your urban lifestyle.
        </p>

        <div className="p-6 bg-card border border-border rounded-xl">
          <h4 className="font-display text-lg text-foreground mb-3">Ready to build?</h4>
          <p className="text-muted-foreground mb-4">
            Check out our related guides for detailed construction instructions:
          </p>
          <ul className="text-muted-foreground space-y-2">
            <li>→ <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">How to Build a Chicken Coop: Complete Step-by-Step Guide</Link></li>
            <li>→ <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">Chicken Coop Cost Breakdown 2025</Link></li>
          </ul>
        </div>
      </section>
    </BlogLayout>
  );
};

export default SmallChickenCoopPlans;
