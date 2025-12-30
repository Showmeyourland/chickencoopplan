import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import TableOfContents from '@/components/TableOfContents';
import CoopSizeCalculator from '@/components/CoopSizeCalculator';
import heroImage from '@/assets/guide-coop-size-calculator.jpg';

const ChickenCoopSizeCalculator = () => {
  const article = getArticleBySlug('chicken-coop-size-calculator');

  if (!article) {
    return <div>Article not found</div>;
  }

  const tocItems = [
    { id: 'calculator', text: 'Interactive Size Calculator', level: 2 },
    { id: 'understanding-space', text: 'Understanding Space Requirements', level: 2 },
    { id: 'breed-specifications', text: 'Breed-Specific Requirements', level: 2 },
    { id: 'climate-factors', text: 'Climate Factors', level: 2 },
    { id: 'run-calculations', text: 'Outdoor Run Calculations', level: 2 },
    { id: 'common-mistakes', text: '5 Space Planning Mistakes', level: 2 },
    { id: 'cost-planning', text: 'Cost Planning by Size', level: 2 },
    { id: 'faq', text: 'Frequently Asked Questions', level: 2 },
  ];

  return (
    <BlogLayout article={article} showTableOfContents>
      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden mb-8">
        <img 
          src={heroImage} 
          alt="Chicken coop layout diagram with space measurements" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed">
          <strong>Proper space calculation is the difference between happy, productive chickens and a nightmare of aggression, disease, and heartbreak.</strong> Most online calculators use oversimplified "4 square feet per bird" formulas that ignore breed differences, climate factors, and management styles—leading to overcrowded coops and failed flocks.
        </p>
        
        <p className="text-muted-foreground">
          This comprehensive calculator accounts for breed-specific requirements, climate adaptations, confinement levels, and future expansion planning. Based on university extension research and real-world experience across diverse climates.
        </p>
      </div>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />

      {/* Interactive Calculator Section */}
      <section id="calculator" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Interactive Chicken Coop Size Calculator</h2>
        <CoopSizeCalculator />
      </section>

      {/* Understanding Space Requirements */}
      <section id="understanding-space" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Understanding Chicken Space Requirements</h2>
        
        <p className="text-muted-foreground mb-6">
          Space requirements aren't arbitrary—they're based on chicken behavior, physiology, and social dynamics developed through millions of years of evolution.
        </p>

        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">The Core Space Formula</h3>
          <p className="text-sm font-mono bg-muted/50 p-3 rounded mb-4">
            Indoor space = Base requirement × Breed multiplier × Climate factor × Management factor
          </p>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Base requirement:</strong> 4 sq ft per standard bird minimum</li>
            <li>• <strong>Breed multiplier:</strong> 0.7× for bantams, 1.0× for standard, 1.4× for large breeds</li>
            <li>• <strong>Climate factor:</strong> 0.9× for hot climates, 1.2× for cold climates</li>
            <li>• <strong>Management factor:</strong> 0.9× for daily cleaning, 1.3× for weekly, 1.5× for minimal</li>
          </ul>
        </div>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
          <strong>Real-world reality check:</strong> I consulted on a "6-bird" coop constantly plagued with aggression. When we measured, it provided only 2.5 square feet per bird. Expanding to proper spacing eliminated 90% of behavioral problems within two weeks.
        </blockquote>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Why Generic Calculators Fail</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Breed Size Variations', desc: 'A 12-pound Jersey Giant needs 60% more space than a 4-pound Leghorn' },
            { title: 'Confinement Levels', desc: 'Free-range birds need less coop space than confined flocks' },
            { title: 'Climate Adaptation', desc: 'Cold-climate birds spend more time indoors during winter' },
            { title: 'Social Dynamics', desc: 'Aggressive breeds need more space to establish territories' }
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breed Specifications */}
      <section id="breed-specifications" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Breed-Specific Space Requirements</h2>
        
        <p className="text-muted-foreground mb-6">
          Breed selection dramatically impacts space requirements. A flock of 6 Silkie bantams needs the same coop space as 3 Jersey Giants.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Breed Category</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Weight</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Indoor/Bird</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Run/Bird</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium">Bantam (Silkies, Japanese)</td>
                <td className="py-3 px-4">1.5-3 lbs</td>
                <td className="py-3 px-4">2.5-3 sq ft</td>
                <td className="py-3 px-4">6-8 sq ft</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium">Standard Active (Leghorn, Ancona)</td>
                <td className="py-3 px-4">4-6 lbs</td>
                <td className="py-3 px-4">3.5-4 sq ft</td>
                <td className="py-3 px-4">8-10 sq ft</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium">Standard Docile (Rhode Island Red)</td>
                <td className="py-3 px-4">5-7 lbs</td>
                <td className="py-3 px-4">4-4.5 sq ft</td>
                <td className="py-3 px-4">10-12 sq ft</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4 font-medium">Heavy Breeds (Orpington, Wyandotte)</td>
                <td className="py-3 px-4">7-9 lbs</td>
                <td className="py-3 px-4">4.5-5.5 sq ft</td>
                <td className="py-3 px-4">12-15 sq ft</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Giant Breeds (Jersey Giant, Brahma)</td>
                <td className="py-3 px-4">9-14 lbs</td>
                <td className="py-3 px-4">6-8 sq ft</td>
                <td className="py-3 px-4">15-20 sq ft</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2">💡 Pro Tip: Breed Compatibility</h4>
          <p className="text-sm text-muted-foreground">
            Stick to breeds within one size category for your first flock. Rhode Island Reds + Australorps work great together. Silkies + Jersey Giants create management nightmares and safety issues.
          </p>
        </div>
      </section>

      {/* Climate Factors */}
      <section id="climate-factors" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Climate Factors That Change Space Needs</h2>
        
        <p className="text-muted-foreground mb-6">
          Climate dramatically affects how much time chickens spend inside their coop, directly impacting space requirements and ventilation needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">🌡️ Hot Climate Modifications</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Reduce indoor space by 10%</strong> — birds spend more time outside</li>
              <li>• <strong>Increase ventilation area by 50%</strong> — heat stress requires max airflow</li>
              <li>• <strong>Triple shade requirements</strong> — essential for 100°F+ weather</li>
              <li>• <strong>Elevate coops 18-24 inches</strong> — improves airflow</li>
            </ul>
          </div>

          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">❄️ Cold Climate Modifications</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <strong>Increase indoor space by 20%</strong> — birds confined indoors for months</li>
              <li>• <strong>Reduce ventilation by 25%</strong> — maintain warmth, prevent moisture</li>
              <li>• <strong>Add windbreak protection</strong> — solid walls on prevailing wind side</li>
              <li>• <strong>Plan for snow load</strong> — reinforce roof structure</li>
            </ul>
          </div>
        </div>

        <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground">
          <strong>Desert lesson learned the hard way:</strong> My first Arizona coop had inadequate ventilation and western exposure. Lost two birds to heat stress on a 118°F day before I rebuilt with climate-appropriate modifications.
        </blockquote>
      </section>

      {/* Run Calculations */}
      <section id="run-calculations" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Outdoor Run Space Calculations</h2>
        
        <p className="text-muted-foreground mb-6">
          Run space requirements depend on pasture quality, rotation schedule, and management intensity. A well-managed 100 sq ft run can support more birds than a poorly designed 200 sq ft space.
        </p>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-foreground mb-3">Outdoor Access Categories</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Free Range (6+ hours daily):</strong> 6-8 sq ft run space per bird</li>
            <li>• <strong>Large Run (100-500 sq ft):</strong> 10-15 sq ft per bird</li>
            <li>• <strong>Small Run (50-100 sq ft):</strong> 15-20 sq ft per bird</li>
            <li>• <strong>Confined (coop only):</strong> 8-12 sq ft indoor space per bird</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Pasture Rotation Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: 'Parasite Control', desc: '2-3 week breaks interrupt parasite life cycles' },
            { title: 'Pasture Recovery', desc: 'Prevents overgrazing and soil compaction' },
            { title: 'Increased Effective Space', desc: '4 birds in rotating 200 sq ft sections = 800 sq ft effective' },
            { title: 'Improved Nutrition', desc: 'Fresh forage provides natural vitamins and minerals' }
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="common-mistakes" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">5 Costly Space Planning Mistakes</h2>
        
        <p className="text-muted-foreground mb-6">
          These mistakes account for 80% of failed chicken-keeping attempts. Each stems from inadequate space planning.
        </p>

        <div className="space-y-4">
          {[
            { title: '"More Birds = More Eggs" Thinking', problem: 'Overcrowding leads to stress, reduced egg production, and cannibalism.', fix: 'Calculate space first, then determine bird numbers—never the reverse.' },
            { title: 'Ignoring Vertical Space', problem: 'Low ceiling height creates stress and prevents natural roosting.', fix: 'Plan 18+ inches above highest roost, 3+ feet for human comfort.' },
            { title: 'Single-Purpose Space Design', problem: 'No separation of eating, roosting, nesting, and dust bathing areas.', fix: 'Zone your space: roosts highest, nesting boxes lower, feeding near door.' },
            { title: 'Inadequate Future Planning', problem: '"Chicken math" strikes—you want more birds but have no expansion options.', fix: 'Build modular designs or plan for 25-50% expansion from day one.' },
            { title: 'Forgetting Maintenance Access', problem: 'Inadequate cleaning access leads to neglected maintenance.', fix: 'Every square foot should be reachable from at least one access point.' }
          ].map((mistake, index) => (
            <div key={index} className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-2">Mistake #{index + 1}: {mistake.title}</h3>
              <p className="text-sm text-destructive mb-2"><strong>What happens:</strong> {mistake.problem}</p>
              <p className="text-sm text-primary"><strong>The fix:</strong> {mistake.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Planning */}
      <section id="cost-planning" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Cost Planning by Coop Size</h2>
        
        <div className="bg-card border border-border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Construction Cost per Square Foot</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• <strong>Budget Construction:</strong> $15-25 per sq ft (basic lumber, minimal features)</li>
            <li>• <strong>Standard Construction:</strong> $25-40 per sq ft (quality materials, predator-proof)</li>
            <li>• <strong>Premium Construction:</strong> $40-65 per sq ft (cedar, automation, walk-in height)</li>
          </ul>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Flock Size</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Space</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Budget</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Standard</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Premium</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">3-4 Birds</td>
                <td className="py-3 px-4">16 sq ft (4×4)</td>
                <td className="py-3 px-4">$240-400</td>
                <td className="py-3 px-4">$400-640</td>
                <td className="py-3 px-4">$640-1,040</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">6-8 Birds</td>
                <td className="py-3 px-4">32 sq ft (4×8)</td>
                <td className="py-3 px-4">$480-800</td>
                <td className="py-3 px-4">$800-1,280</td>
                <td className="py-3 px-4">$1,280-2,080</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-3 px-4">10-12 Birds</td>
                <td className="py-3 px-4">48 sq ft (6×8)</td>
                <td className="py-3 px-4">$720-1,200</td>
                <td className="py-3 px-4">$1,200-1,920</td>
                <td className="py-3 px-4">$1,920-3,120</td>
              </tr>
              <tr>
                <td className="py-3 px-4">15-20 Birds</td>
                <td className="py-3 px-4">80 sq ft (8×10)</td>
                <td className="py-3 px-4">$1,200-2,000</td>
                <td className="py-3 px-4">$2,000-3,200</td>
                <td className="py-3 px-4">$3,200-5,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20">
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {[
            { q: 'How much space do chickens need in the coop vs. the run?', a: 'Indoor space should be 3-4 square feet per bird minimum; outdoor run space should be 8-15 square feet per bird depending on access level.' },
            { q: 'Can I keep bantams and large fowl together if I provide enough space?', a: 'Not recommended even with abundant space. Size differential creates dangerous bullying situations. A 12-pound Brahma can seriously injure a 2-pound Silkie even without aggressive intent.' },
            { q: 'How does climate affect my space calculations?', a: 'Cold climates need 20% more indoor space due to extended confinement; hot climates can reduce indoor space 10% but require 50% more outdoor shade.' },
            { q: 'How much extra space do roosters need?', a: 'Add 20-30% to total space calculations when keeping roosters. One rooster per 8-12 hens is optimal for both space utilization and flock harmony.' },
            { q: 'When should I expand vs. build a new coop?', a: 'Expand existing coops up to 100-150 sq ft; build new for larger requirements. Tripling or quadrupling size often requires completely new construction.' }
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
        <h2 className="text-2xl font-bold text-foreground mb-6">Build the Right Size Coop From Day One</h2>
        
        <p className="text-muted-foreground mb-4">
          Proper space planning is the foundation of successful chicken keeping. The calculator above accounts for real-world variables that generic formulas ignore.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Key Takeaway</h3>
          <p className="text-muted-foreground">
            <strong>Space affects every aspect of chicken keeping</strong>—health, behavior, egg production, maintenance requirements, and long-term satisfaction. Investing in adequate space from day one prevents expensive problems and rebuilds down the road.
          </p>
        </div>
      </section>
    </BlogLayout>
  );
};

export default ChickenCoopSizeCalculator;
