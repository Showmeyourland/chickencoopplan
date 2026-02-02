import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Ruler, Shield, Scale, Wrench, MapPin, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import AuthorBio from '@/components/AuthorBio';
import RelatedArticles from '@/components/RelatedArticles';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getRelatedArticles } from '@/lib/articles';
import guideSmallBackyardCoopImage from '@/assets/guide-small-backyard-coop.jpg';

const tocItems = [
  { id: 'space-requirements', text: 'Essential Space Requirements', level: 2 },
  { id: 'vertical-designs', text: 'Vertical Coop Designs', level: 2 },
  { id: 'footprint-optimization', text: 'Footprint Optimization', level: 2 },
  { id: 'urban-placement', text: 'Strategic Placement', level: 2 },
  { id: 'multi-functional', text: 'Multi-Functional Design', level: 2 },
  { id: 'compact-runs', text: 'Compact Run Solutions', level: 2 },
  { id: 'legal-considerations', text: 'Urban Legal Considerations', level: 2 },
  { id: 'recommended-plans', text: 'Recommended Plans', level: 2 },
  { id: 'common-mistakes', text: 'Common Mistakes', level: 2 },
  { id: 'maintenance-access', text: 'Maintenance in Tight Spaces', level: 2 },
];

// Interactive Space Calculator Tool
const SpaceCalculatorTool = () => {
  const [chickens, setChickens] = useState(4);
  const [hasOutdoorAccess, setHasOutdoorAccess] = useState(true);
  
  const coopSpacePerBird = hasOutdoorAccess ? 4 : 10;
  const runSpacePerBird = hasOutdoorAccess ? 10 : 0;
  
  const coopSpace = chickens * coopSpacePerBird;
  const runSpace = chickens * runSpacePerBird;
  const totalSpace = coopSpace + runSpace;
  
  // Suggest footprint options
  const getFootprintSuggestion = () => {
    if (totalSpace <= 60) return '4×6 coop + 4×10 run (4×16 total)';
    if (totalSpace <= 96) return '4×8 coop + 8×8 run (8×12 total)';
    if (totalSpace <= 120) return '6×8 coop + 6×12 run (6×20 total)';
    return '8×8 coop + 8×12 run (8×20 total)';
  };

  return (
    <Card className="my-8 border-primary/20 bg-primary/5">
      <CardContent className="p-6">
        <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
          <Ruler className="h-5 w-5 text-primary" />
          Small Backyard Space Calculator
        </h3>
        
        <div className="space-y-6">
          <div>
            <Label className="text-foreground mb-2 block">Number of Chickens: {chickens}</Label>
            <Slider
              value={[chickens]}
              onValueChange={(value) => setChickens(value[0])}
              min={2}
              max={12}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>2 birds</span>
              <span>12 birds</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="outdoor-access"
              checked={hasOutdoorAccess}
              onCheckedChange={(checked) => setHasOutdoorAccess(checked as boolean)}
            />
            <Label htmlFor="outdoor-access" className="text-foreground cursor-pointer">
              Birds have daily outdoor run access
            </Label>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
            <div className="text-center p-3 bg-background rounded-lg">
              <div className="text-2xl font-bold text-primary">{coopSpace}</div>
              <div className="text-xs text-muted-foreground">Coop sq ft</div>
            </div>
            <div className="text-center p-3 bg-background rounded-lg">
              <div className="text-2xl font-bold text-primary">{runSpace}</div>
              <div className="text-xs text-muted-foreground">Run sq ft</div>
            </div>
            <div className="text-center p-3 bg-background rounded-lg">
              <div className="text-2xl font-bold text-foreground">{totalSpace}</div>
              <div className="text-xs text-muted-foreground">Total sq ft</div>
            </div>
            <div className="text-center p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-sm font-medium text-foreground">{getFootprintSuggestion()}</div>
              <div className="text-xs text-muted-foreground">Suggested layout</div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            {hasOutdoorAccess 
              ? `Based on 4 sq ft/bird coop + 10 sq ft/bird run (recommended minimum)`
              : `Based on 10 sq ft/bird for confined birds (no outdoor access)`
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const SmallBackyardCoopPlans = () => {
  const relatedArticles = getRelatedArticles('small-backyard-coop-plans', 'Planning', 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Small Backyard Coop Plans' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Small Backyard Chicken Coop Plans: Space-Smart Designs for Urban Lots (2025)"
        description="Expert-designed chicken coop plans optimized for small backyards. Space-efficient designs for 4-8 hens that maximize your urban lot without compromising bird welfare."
        canonical="/guides/small-backyard-coop-plans"
      />

      <Header />

      <main className="py-12">
        <article className="container max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Hero Section */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Home className="w-3 h-3 mr-1" />
                Small Space
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <MapPin className="w-3 h-3 mr-1" />
                Urban Lots
              </Badge>
              <Badge variant="outline">30 min read</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Chicken Coop Plans for Small Backyards: Space-Smart Solutions for Urban Lots
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              <strong>Small backyard chicken keeping requires intelligent design, not cramped conditions.</strong> After building coops on dozens of compact Phoenix lots ranging from 0.15 to 0.25 acres, I've learned that successful urban chicken keeping depends on vertical space utilization, multi-functional design elements, and strategic placement—not stuffing more birds into inadequate square footage.
            </p>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <img 
                src={guideSmallBackyardCoopImage} 
                alt="Space-efficient chicken coop design for small urban backyard"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-muted-foreground">
              The key to small-space success lies in understanding that chickens need the same amount of personal space regardless of your lot size. What changes is how efficiently you design that space and how cleverly you integrate the coop into your existing landscape.
            </p>
          </header>

          {/* Table of Contents */}
          <TableOfContents items={tocItems} className="mb-12" />

          {/* Interactive Space Calculator */}
          <SpaceCalculatorTool />

          {/* Section: Space Requirements */}
          <section id="space-requirements" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Essential Space Requirements (Non-Negotiable)</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Small backyards don't change chicken biology.</strong> Regardless of your lot size, each standard chicken requires 3-4 square feet inside the coop plus 8-10 square feet in the outdoor run. These minimums prevent behavioral problems, disease transmission, and pecking order conflicts that escalate rapidly in cramped conditions.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Small-Backyard Reality Check</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Flock Size</TableHead>
                      <TableHead>Coop Space</TableHead>
                      <TableHead>Run Space</TableHead>
                      <TableHead>Total Minimum</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">4 chickens</TableCell>
                      <TableCell>12-16 sq ft</TableCell>
                      <TableCell>32-40 sq ft</TableCell>
                      <TableCell className="font-bold text-primary">44-56 sq ft</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">6 chickens</TableCell>
                      <TableCell>18-24 sq ft</TableCell>
                      <TableCell>48-60 sq ft</TableCell>
                      <TableCell className="font-bold text-primary">66-84 sq ft</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">8 chickens</TableCell>
                      <TableCell>24-32 sq ft</TableCell>
                      <TableCell>64-80 sq ft</TableCell>
                      <TableCell className="font-bold text-primary">88-112 sq ft</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <p className="text-muted-foreground mb-4">
              The difference between small-space success and failure isn't reducing these requirements—it's designing more efficiently within them. Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">interactive chicken coop size calculator</Link> to determine exact dimensions for your flock.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Red Flag Warning</p>
                  <p className="text-sm text-muted-foreground">Any plan claiming more than one bird per 3-4 square feet of coop space should be immediately suspect. Overcrowding leads to feather pecking, disease, and aggression.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Vertical Designs */}
          <section id="vertical-designs" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Vertical Coop Designs That Maximize Space</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Think up, not out.</strong> Vertical coop designs reduce ground footprint while providing the same interior space. A 6×8 single-story coop occupies 48 square feet of yard space, while a 6×4 two-story design provides similar interior volume using only 24 square feet.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Elevated Coop Advantages for Small Spaces</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Dual-Purpose Footprint</p>
                      <p className="text-sm text-muted-foreground">Chickens use space beneath for dust baths and shade</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Storage Integration</p>
                      <p className="text-sm text-muted-foreground">Feed, tools, and supplies fit underneath the coop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Predator Deterrent</p>
                      <p className="text-sm text-muted-foreground">Elevated coops are harder for ground predators to access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Drainage Improvement</p>
                      <p className="text-sm text-muted-foreground">Better airflow prevents moisture buildup</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6 bg-muted/50">
              <CardContent className="p-6">
                <h3 className="font-display text-lg text-foreground mb-4">Optimal Elevation Specifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Minimum 18 inches clearance</strong> underneath for equipment access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">24-36 inches ideal</strong> for comfortable cleaning and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Ramp grades no steeper than 30 degrees</strong> (chickens struggle with steep angles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Anti-slip ramp surfaces</strong> using horizontal cleats spaced every 6 inches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section: Footprint Optimization */}
          <section id="footprint-optimization" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Footprint Optimization Strategies</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Rectangular designs beat square designs for small spaces.</strong> A 4×8 rectangle provides 32 square feet of floor space using an 8-foot fence line, while an equivalent square (5.6×5.6) creates awkward dimensions that don't align with standard lumber or fence panels.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Space-Efficient Dimensioning Principles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Use Standard Lumber Lengths</h4>
                    <p className="text-sm text-muted-foreground">8-foot, 12-foot, 16-foot dimensions minimize waste and save money. See our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">materials guide</Link> for lumber selection tips.</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Align with Property Features</h4>
                    <p className="text-sm text-muted-foreground">Run long sides parallel to existing fences or structures</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Corner Utilization</h4>
                    <p className="text-sm text-muted-foreground">L-shaped runs maximize area while utilizing corner spaces</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Shared Walls</h4>
                    <p className="text-sm text-muted-foreground">Attach to existing structures (with proper ventilation gaps)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Popular Small-Space Footprint Options</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Configuration</TableHead>
                      <TableHead>Total Footprint</TableHead>
                      <TableHead>Birds Housed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">4×6 coop + 4×12 run</TableCell>
                      <TableCell>6×12 (72 sq ft)</TableCell>
                      <TableCell>4-5 birds</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">4×8 coop + 8×8 run</TableCell>
                      <TableCell>8×12 (96 sq ft)</TableCell>
                      <TableCell>6-7 birds</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">6×8 coop + 6×8 run</TableCell>
                      <TableCell>6×16 (96 sq ft)</TableCell>
                      <TableCell>8-10 birds</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Section: Urban Placement */}
          <section id="urban-placement" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Placement for Small Lots</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Placement determines success on compact lots.</strong> Wrong placement creates maintenance nightmares, neighbor conflicts, and legal violations that can force expensive relocations.
            </p>

            <div className="space-y-4 mb-6">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Scale className="h-4 w-4 text-primary" />
                    1. Setback Compliance
                  </h4>
                  <p className="text-muted-foreground text-sm">Phoenix requires 80-foot setbacks unless neighbors provide written consent. On small lots, this often forces back-corner placement or requires neighbor agreements. Check our <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">permit guide</Link> for your area's requirements.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    2. Access Pathways
                  </h4>
                  <p className="text-muted-foreground text-sm">Maintain 3-foot minimum width for wheelbarrow access to the coop. Daily egg collection and weekly cleaning require practical routes from house to coop.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-primary" />
                    3. Utility Avoidance
                  </h4>
                  <p className="text-muted-foreground text-sm">Keep coops 10+ feet from air conditioning units (noise bothers chickens), septic systems, and underground utilities. Call 811 before any digging.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-2">4. Drainage Considerations</h4>
                  <p className="text-muted-foreground text-sm">Position coops on higher ground or provide drainage solutions. Pooling water creates mud, odors, and mosquito breeding grounds.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-2">5. Sun/Shade Balance</h4>
                  <p className="text-muted-foreground text-sm">In Arizona's desert climate, morning sun with afternoon shade is ideal. East-facing placement with shade structures prevents heat stress. See our <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">Arizona-specific coop guide</Link> for desert climate strategies.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: Multi-Functional Design */}
          <section id="multi-functional" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Multi-Functional Design Elements</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Every element should serve multiple purposes on small lots.</strong> Single-function designs waste precious space that urban chicken keepers can't afford.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-3">Integrated Storage</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Feed storage in coop base (sealed containers prevent pests)</li>
                    <li>• Tool storage in coop walls</li>
                    <li>• Nest box access doubles as storage compartment</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-3">Modular Run Systems</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Removable panels for lawn access</li>
                    <li>• Foldable sections for temporary free-ranging</li>
                    <li>• Expandable designs for flock growth</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-semibold text-foreground mb-3">Garden Integration</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mobile sections for garden bed prep</li>
                    <li>• Compost bin attachment for manure</li>
                    <li>• Trellis for climbing plants</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground">
              Learn more about run design in our comprehensive <Link to="/guides/chicken-run-design-guide" className="text-primary hover:underline">chicken run design guide</Link>, which covers enrichment features and space optimization for any sized lot.
            </p>
          </section>

          {/* Section: Compact Runs */}
          <section id="compact-runs" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Compact Run Solutions</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Run design determines daily quality of life for confined birds.</strong> Small runs require extra attention to enrichment, drainage, and predator protection to maintain bird welfare.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-4">Enrichment Elements</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Dust bath areas:</strong> 2×2 foot minimum, sand/dirt mixture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Roosting options:</strong> Multiple perches at different heights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Foraging opportunities:</strong> Hanging treats, puzzle feeders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Shade structures:</strong> 50% shade minimum in hot climates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-4">Ground Management</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Deep litter method:</strong> Add fresh bedding regularly without removing old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Drainage systems:</strong> French drains or gravel bases prevent mud</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span><strong className="text-foreground">Rotation possibilities:</strong> Moveable sections allow ground recovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground">
              For predator protection in compact runs, see our <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proofing guide</Link> with hardware cloth specifications and burial barrier requirements.
            </p>
          </section>

          {/* Section: Legal Considerations */}
          <section id="legal-considerations" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Urban Legal Considerations</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Legal violations on small lots are costly and often require complete relocations.</strong> Urban regulations typically include setback requirements, flock size limits, and HOA restrictions that are more restrictive than municipal codes.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Arizona Urban Regulations Summary</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>City</TableHead>
                      <TableHead>Setback</TableHead>
                      <TableHead>Max Birds</TableHead>
                      <TableHead>Notes</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Phoenix</TableCell>
                      <TableCell>80 feet</TableCell>
                      <TableCell>No limit</TableCell>
                      <TableCell className="text-sm">Neighbor consent can reduce</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Chandler</TableCell>
                      <TableCell>5 feet</TableCell>
                      <TableCell>5 birds</TableCell>
                      <TableCell className="text-sm">Hens only</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Tucson</TableCell>
                      <TableCell>50 feet</TableCell>
                      <TableCell>24 birds</TableCell>
                      <TableCell className="text-sm">—</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Scottsdale</TableCell>
                      <TableCell>Varies</TableCell>
                      <TableCell>3-6 birds</TableCell>
                      <TableCell className="text-sm">Depends on zoning</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-foreground mb-2">HOA Warning</h4>
              <p className="text-sm text-muted-foreground">Many HOAs prohibit chickens entirely or require architectural approval. Review CC&Rs before purchasing birds or building. <em>Schroeder v. Oak Grove Farm HOA (2024)</em> upheld $31,500 in fines for unauthorized chickens.</p>
            </div>

            <p className="text-muted-foreground">
              Most municipalities require permits for permanent structures over 120-200 square feet. Portable coops are often exempt—confirm with your local building department. See our complete <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">chicken coop permit guide</Link> for detailed requirements.
            </p>
          </section>

          {/* Section: Recommended Plans */}
          <section id="recommended-plans" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Recommended Small-Space Plans</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Different small-space situations require different design approaches.</strong> Corner lots, side yards, and long narrow spaces each demand specific solutions.
            </p>

            <div className="space-y-4 mb-6">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-3">For Lots Under 0.15 Acres (4-6 Birds Max)</h3>
                  <p className="text-muted-foreground mb-4">Elevated 4×6 coops with 4×8 attached runs provide adequate space while maintaining neighbor-friendly profiles. These designs fit most side-yard spaces and comply with standard setback requirements.</p>
                  <Link to="/guides/small-chicken-coop-plans">
                    <Button variant="outline" size="sm">View Small Coop Designs →</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-3">For Lots 0.15-0.25 Acres (6-8 Birds)</h3>
                  <p className="text-muted-foreground mb-4">Modular designs allow expansion as neighborhoods change. Start with a 4×8 coop and 8×8 run, with plans for run expansion if needed.</p>
                  <Link to="/guides/4x4-chicken-coop-plans">
                    <Button variant="outline" size="sm">Explore 4×4 Coop Plans →</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl text-foreground mb-3">For Long, Narrow Lots</h3>
                  <p className="text-muted-foreground mb-4">Linear designs work well along back property lines. 6×12 or 8×16 footprints provide excellent bird space while utilizing otherwise unusable narrow areas.</p>
                  <Link to="/guides/urban-chicken-coop-plans">
                    <Button variant="outline" size="sm">View Urban Coop Solutions →</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: Common Mistakes */}
          <section id="common-mistakes" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Common Small-Backyard Mistakes</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Small-space chicken keeping amplifies design mistakes.</strong> Errors that might be manageable on large properties become major problems in compact settings.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="mistake-1">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">1. Overcrowding Delusions</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  "My chickens are happy in less space" is a dangerous assumption. Stressed birds don't show obvious symptoms until problems are severe. Feather pecking, aggression, and disease transmission indicate inadequate space.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mistake-2">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">2. Inadequate Access Planning</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Coops that require crawling for cleaning don't get cleaned properly. Plan maintenance access from day one, not as an afterthought. See our <Link to="/guides/chicken-coop-cleaning-guide" className="text-primary hover:underline">cleaning guide</Link> for proper maintenance schedules.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mistake-3">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">3. Neighbor Relationship Neglect</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Small lots mean close neighbors. Proactive communication, odor management, and aesthetic consideration prevent complaints that can force expensive changes or eliminate chicken keeping entirely.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mistake-4">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">4. Weather Exposure Underestimation</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Small runs provide limited natural windbreaks and shade. Plan additional weather protection for both summer heat and winter winds. Our <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">ventilation guide</Link> covers climate-appropriate designs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="mistake-5">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">5. Expansion Impossibility</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Build with growth in mind. Many small-space chicken keepers want to add birds after initial success, but discover no room for expansion. Choose modular designs when possible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p className="mt-6 text-muted-foreground">
              Avoid these and other costly errors by reviewing our complete <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">expensive coop mistakes guide</Link> before starting your build.
            </p>
          </section>

          {/* Section: Maintenance Access */}
          <section id="maintenance-access" className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Maintenance in Tight Spaces</h2>
            
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">Compact designs require superior maintenance access planning.</strong> Skipping daily tasks quickly leads to health problems in confined spaces.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-4">Essential Access Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span><strong className="text-foreground">External nest box access:</strong> Collect eggs without entering coop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span><strong className="text-foreground">Removable roost bars:</strong> Weekly cleaning underneath</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span><strong className="text-foreground">Wide coop doors:</strong> 24-inch minimum for equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span><strong className="text-foreground">Dropping board systems:</strong> Daily removal prevents ammonia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-display text-lg text-foreground mb-4">Tool Storage Solutions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Wrench className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span>Wall-mounted tool holders inside coops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span>Weatherproof storage bins integrated into coop design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Wrench className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                      <span>Mobile cleaning supply carts for multi-level coops</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Small-Space Success: Quality Over Quantity</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Successful urban chicken keeping prioritizes bird welfare over flock size.</strong> Four healthy, productive hens in a well-designed small-space setup provide more satisfaction than eight stressed birds in cramped conditions.
              </p>

              <p className="text-muted-foreground mb-4">
                The mathematics are straightforward: proper space requirements don't change based on lot size. What changes is your ability to design efficiently within those constraints. Focus on vertical space utilization, multi-functional elements, and intelligent placement rather than compromising animal welfare.
              </p>

              <p className="text-muted-foreground">
                <strong className="text-foreground">Small-space chicken keeping can be incredibly rewarding when approached with realistic expectations and quality design.</strong> The key lies in understanding that successful urban poultry requires the same space and care standards as rural flocks—just packaged more efficiently.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>How many chickens can I keep on a small urban lot?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  This depends on your exact lot size and local regulations, but plan for 100+ square feet total (coop + run) per 3-4 chickens. Most small urban lots under 0.2 acres can realistically accommodate 4-6 chickens while maintaining proper space requirements and setbacks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Do small coops need the same ventilation as large coops?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes—ventilation requirements are based on birds per square foot, not total coop size. Small coops actually need proportionally more attention to ventilation since ammonia buildup occurs faster in compact spaces. See our <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">ventilation guide</Link> for specific requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Can I put a chicken coop against my house or garage?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Generally yes, but maintain a 6-12 inch gap for ventilation and pest prevention. Attached coops can share walls structurally but shouldn't share air space. Check local building codes for specific requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>What's the smallest possible coop footprint for 4 chickens?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Minimum 4×4 coop (16 sq ft) plus 4×8 run (32 sq ft) for a total 4×12 footprint. However, 4×6 coop plus 4×8 run provides more comfortable conditions in the same total footprint.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger>How do I handle manure management in small spaces?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Use the deep litter method in coops (add bedding without removing old) and compost systems for run waste. A 3×3 foot compost bin handles waste from 6 birds easily. Turn regularly and use finished compost in gardens after 3+ months aging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Newsletter */}
          <NewsletterSignup 
            variant="inline"
            title="Get More Small-Space Solutions"
            description="Join 10,000+ urban chicken keepers receiving space-saving tips, design ideas, and exclusive plans."
          />

          {/* Author Bio */}
          <AuthorBio
            name="Sarah Martinez"
            credentials="Backyard Chicken Expert | Urban Lot Specialist"
            bio="With over 12 years helping homeowners design coops for challenging spaces, Sarah specializes in maximizing chicken welfare on compact Phoenix-area lots. Her designs prioritize practical maintenance and neighbor-friendly aesthetics."
          />

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SmallBackyardCoopPlans;
