import { useState } from 'react';
import BlogLayout from '@/components/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, AlertTriangle, CheckCircle, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/lib/articles';
import heroImage from '@/assets/guide-roofing.jpg';

// Roofing Material Calculator
const RoofingCalculator = () => {
  const [length, setLength] = useState('8');
  const [width, setWidth] = useState('6');
  const [material, setMaterial] = useState('metal');
  const [result, setResult] = useState<{
    area: number;
    materialNeeded: string;
    costRange: string;
    weight: string;
    lifespan: string;
    notes: string[];
  } | null>(null);

  const calculate = () => {
    const l = parseFloat(length) || 8;
    const w = parseFloat(width) || 6;
    // Add 15% for overhang and waste
    const area = Math.ceil(l * w * 1.15);

    let materialNeeded = '';
    let costRange = '';
    let weight = '';
    let lifespan = '';
    const notes: string[] = [];

    if (material === 'metal') {
      const panels = Math.ceil(area / 8.75); // 3.5' wide panels
      materialNeeded = `${panels} corrugated metal panels (26" × ${Math.ceil(l + 1)}')`;
      costRange = `$${Math.round(area * 1.5)}–$${Math.round(area * 3)}`;
      weight = `${Math.round(area * 0.7)} lbs`;
      lifespan = '40–60 years';
      notes.push('Best all-around choice. Reflects heat, sheds snow, and lasts decades.');
      notes.push('Use rubber-gasketed screws — never nails. Drill on the ridges, not valleys.');
    } else if (material === 'shingles') {
      const bundles = Math.ceil(area / 33.3);
      materialNeeded = `${bundles} bundles of architectural shingles + underlayment`;
      costRange = `$${Math.round(area * 2)}–$${Math.round(area * 4)}`;
      weight = `${Math.round(area * 2.5)} lbs`;
      lifespan = '20–30 years';
      notes.push('Better sound insulation than metal. Good for cold climates with ice dam concerns.');
      notes.push('Requires plywood sheathing underneath — factor in that cost.');
    } else if (material === 'polycarbonate') {
      const panels = Math.ceil(area / 17.5);
      materialNeeded = `${panels} polycarbonate panels (26" × ${Math.ceil(l + 1)}')`;
      costRange = `$${Math.round(area * 2.5)}–$${Math.round(area * 5)}`;
      weight = `${Math.round(area * 0.3)} lbs`;
      lifespan = '10–15 years';
      notes.push('Lets in natural light — reduces need for artificial lighting.');
      notes.push('Can overheat in summer. Best as partial roof panels (30-50% coverage) combined with solid roofing.');
    } else {
      materialNeeded = `${Math.ceil(area * 0.5)} linear feet of rolled roofing`;
      costRange = `$${Math.round(area * 0.5)}–$${Math.round(area * 1.5)}`;
      weight = `${Math.round(area * 1)} lbs`;
      lifespan = '5–10 years';
      notes.push('Cheapest option but shortest lifespan. Fine for temporary or budget coops.');
      notes.push('Must be applied over plywood sheathing with roofing cement.');
    }

    setResult({ area, materialNeeded, costRange, weight, lifespan, notes });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Roofing Material Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Enter your coop dimensions to estimate roofing materials and costs.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="roof-length">Coop length (feet)</Label>
            <Input id="roof-length" type="number" min="2" max="30" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="roof-width">Coop width (feet)</Label>
            <Input id="roof-width" type="number" min="2" max="20" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Roofing material</Label>
          <RadioGroup value={material} onValueChange={setMaterial} className="grid grid-cols-2 gap-2">
            {[
              { value: 'metal', label: 'Corrugated Metal' },
              { value: 'shingles', label: 'Asphalt Shingles' },
              { value: 'polycarbonate', label: 'Polycarbonate' },
              { value: 'rolled', label: 'Rolled Roofing' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`mat-${opt.value}`} />
                <Label htmlFor={`mat-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>

        {result && (
          <div className="mt-4 space-y-3 p-4 bg-muted/50 rounded-lg">
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-xl font-bold text-primary">{result.area} sq ft</div>
                <div className="text-xs text-muted-foreground">Roof Area (w/ overhang)</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-lg font-bold text-primary">{result.costRange}</div>
                <div className="text-xs text-muted-foreground">Material Cost</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-lg font-bold text-primary">{result.lifespan}</div>
                <div className="text-xs text-muted-foreground">Expected Life</div>
              </div>
            </div>
            <p className="text-sm"><strong>Materials:</strong> {result.materialNeeded}</p>
            <p className="text-sm"><strong>Weight:</strong> {result.weight}</p>
            {result.notes.map((note, i) => (
              <p key={i} className="text-sm text-muted-foreground">💡 {note}</p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ChickenCoopRoofingGuide = () => {
  const article = articles.find(a => a.slug === 'chicken-coop-roofing-guide')!;

  return (
    <BlogLayout article={article}>
      <img src={heroImage} alt="Chicken coop roof being constructed with metal panels" className="w-full rounded-xl mb-8 aspect-video object-cover" loading="eager" />

      <p className="lead text-lg text-muted-foreground mb-6">
        <strong>Your roof is the single most important element protecting your flock from weather, predators, and moisture damage.</strong> A poorly designed roof leads to leaks, rotting framing, condensation dripping on roosting birds, and heat buildup that can kill chickens in summer. After roofing 40+ coops in climates from Arizona desert heat to Midwest snowstorms, here's exactly what works — and what fails within two years.
      </p>

      <p>Whether you're following our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> or designing from scratch, the roof is where you should never cut corners. This guide covers material selection, pitch calculations, installation techniques, and the climate-specific adaptations that separate 5-year roofs from 40-year roofs.</p>

      <RoofingCalculator />

      <h2 id="roof-types" className="text-2xl font-display mt-12 mb-4">Chicken Coop Roof Styles</h2>

      <h3 className="text-xl font-display mt-8 mb-3">Shed Roof (Single Slope)</h3>
      <p><strong>Best for beginners.</strong> One flat plane sloping in a single direction. Simplest to build, requires no ridge framing, and naturally directs water runoff to one side.</p>
      <ul className="space-y-1 my-4">
        <li>• <strong>Pros:</strong> Easiest to build, cheapest, good for small coops</li>
        <li>• <strong>Cons:</strong> Less headroom on the low side, limited ventilation at peak</li>
        <li>• <strong>Best for:</strong> <Link to="/guides/small-chicken-coop-plans" className="text-primary hover:underline">Small coops</Link> under 4×8'</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Gable Roof (A-Frame)</h3>
      <p><strong>Most popular for coops 4×6' and larger.</strong> Two sloping planes meeting at a ridge. Provides maximum headroom, excellent ventilation at the peak, and sheds water/snow in both directions.</p>
      <ul className="space-y-1 my-4">
        <li>• <strong>Pros:</strong> Great ventilation, good headroom, classic look</li>
        <li>• <strong>Cons:</strong> More complex to frame, requires ridge board</li>
        <li>• <strong>Best for:</strong> <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">Walk-in coops</Link> and any design with peak ventilation</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Saltbox Roof</h3>
      <p><strong>An asymmetric gable</strong> — one long slope on the back and a shorter, steeper slope on the front. Provides a tall front wall (better for doors and egg collection) and a low back wall (less material, better wind resistance).</p>

      <h2 id="pitch" className="text-2xl font-display mt-12 mb-4">Roof Pitch: How Steep Should It Be?</h2>

      <p>Roof pitch is expressed as rise-over-run (e.g., 4:12 means 4 inches of rise for every 12 inches of horizontal run).</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Climate</th>
              <th className="text-left py-2 px-3 font-semibold">Minimum Pitch</th>
              <th className="text-left py-2 px-3 font-semibold">Recommended</th>
              <th className="text-left py-2 px-3 font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Hot / Arid</td><td className="py-2 px-3">2:12</td><td className="py-2 px-3">3:12–4:12</td><td className="py-2 px-3">Low pitch = less sun exposure</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Temperate</td><td className="py-2 px-3">3:12</td><td className="py-2 px-3">4:12–6:12</td><td className="py-2 px-3">Good water runoff</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Heavy Rain</td><td className="py-2 px-3">4:12</td><td className="py-2 px-3">6:12–8:12</td><td className="py-2 px-3">Prevents pooling and leaks</td></tr>
            <tr><td className="py-2 px-3">Snow Country</td><td className="py-2 px-3">6:12</td><td className="py-2 px-3">8:12–12:12</td><td className="py-2 px-3">Snow shedding, prevents collapse</td></tr>
          </tbody>
        </table>
      </div>

      <p>For climate-specific roof designs including snow load calculations and heat reflection strategies, see our <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">climate-specific coop design guide</Link>.</p>

      <h2 id="materials" className="text-2xl font-display mt-12 mb-4">Roofing Material Comparison</h2>

      <h3 className="text-xl font-display mt-8 mb-3">Corrugated Metal (Best Overall)</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Cost:</strong> $1.50–$3/sq ft</li>
        <li>• <strong>Lifespan:</strong> 40–60 years</li>
        <li>• <strong>Pros:</strong> Lightweight, fireproof, reflects heat, sheds snow, virtually maintenance-free</li>
        <li>• <strong>Cons:</strong> Noisy in rain (chickens don't mind), can be loud to work under</li>
        <li>• <strong>Installation:</strong> Rubber-gasketed screws on ridges, 6" overlaps between panels</li>
      </ul>

      <Alert className="my-6 border-primary/30 bg-primary/5">
        <CheckCircle className="h-4 w-4 text-primary" />
        <AlertTitle>Recommendation</AlertTitle>
        <AlertDescription>Corrugated metal is what we specify in most of our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link>. It's the best value when you factor in zero maintenance and 40+ year lifespan.</AlertDescription>
      </Alert>

      <h3 className="text-xl font-display mt-8 mb-3">Asphalt Shingles</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Cost:</strong> $2–$4/sq ft (including sheathing)</li>
        <li>• <strong>Lifespan:</strong> 20–30 years</li>
        <li>• <strong>Pros:</strong> Quieter than metal, familiar installation, good for cold climates</li>
        <li>• <strong>Cons:</strong> Heavier (needs stronger framing), requires plywood underneath</li>
        <li>• <strong>Best for:</strong> <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">Cold-climate coops</Link> where ice dam prevention matters</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Polycarbonate Panels</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Cost:</strong> $2.50–$5/sq ft</li>
        <li>• <strong>Lifespan:</strong> 10–15 years</li>
        <li>• <strong>Pros:</strong> Natural light reduces <Link to="/guides/chicken-coop-lighting-guide" className="text-primary hover:underline">artificial lighting needs</Link></li>
        <li>• <strong>Cons:</strong> Can overheat in summer, UV degradation over time</li>
        <li>• <strong>Tip:</strong> Use for 30–50% of roof area only, combined with solid metal panels</li>
      </ul>

      <h2 id="overhang" className="text-2xl font-display mt-12 mb-4">Roof Overhangs: How Much Do You Need?</h2>

      <p><strong>Overhangs protect walls, windows, and ventilation openings from rain.</strong> Skipping overhangs is one of the <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">most expensive coop building mistakes</Link>.</p>

      <ul className="space-y-2 my-4">
        <li><strong>Minimum:</strong> 6 inches on all sides</li>
        <li><strong>Recommended:</strong> 12 inches for temperate climates</li>
        <li><strong>Hot climates:</strong> 24–36 inches to shade walls (critical in <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">desert environments</Link>)</li>
        <li><strong>Rain-heavy areas:</strong> 18–24 inches to prevent splash-back on siding</li>
      </ul>

      <h2 id="ventilation" className="text-2xl font-display mt-12 mb-4">Integrating Ventilation With Your Roof</h2>

      <p>The roof is your best location for passive ventilation. Hot, moist air rises naturally — placing vents at the highest point maximizes air exchange without mechanical fans.</p>

      <ul className="space-y-2 my-4">
        <li><strong>Ridge vents:</strong> Continuous gap along the roof peak covered with hardware cloth</li>
        <li><strong>Soffit vents:</strong> Openings under the overhang that draw fresh air in as hot air exits the ridge</li>
        <li><strong>Gable vents:</strong> Openings in the triangular wall section under a gable roof</li>
      </ul>

      <p>For complete ventilation sizing and placement, see our detailed <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">ventilation guide</Link>.</p>

      <h2 id="installation" className="text-2xl font-display mt-12 mb-4">Installation Tips for Beginners</h2>

      <p>If you're new to building, roof installation can feel intimidating — but with the right <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner-friendly plans</Link>, it's manageable in a few hours.</p>

      <ol className="space-y-2 my-4 list-decimal list-inside">
        <li>Frame the rafters first — check for level and square before adding any roofing</li>
        <li>Add sheathing (plywood) if using shingles; skip for metal panels on purlins</li>
        <li>Install drip edge on all edges before laying roofing material</li>
        <li>Start at the bottom edge and work upward — water should always flow over overlaps, not under</li>
        <li>Use proper fasteners — rubber-gasketed screws for metal, roofing nails for shingles</li>
        <li>Seal all penetrations (vents, screws) with appropriate sealant</li>
      </ol>

      <Alert className="my-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Safety Warning</AlertTitle>
        <AlertDescription>Even on small coops, work safely at height. Use a stable ladder, never lean over edges, and have a helper steady materials. Metal roofing edges are razor-sharp — wear gloves.</AlertDescription>
      </Alert>

      <h2 id="cost" className="text-2xl font-display mt-12 mb-4">Roofing Cost Breakdown</h2>

      <p>Roofing typically accounts for 15–25% of total <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline">coop building costs</Link>. Here's what to budget for a standard 4×8' coop:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Material</th>
              <th className="text-left py-2 px-3 font-semibold">Materials Cost</th>
              <th className="text-left py-2 px-3 font-semibold">Includes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Corrugated Metal</td><td className="py-2 px-3">$60–$120</td><td className="py-2 px-3">Panels + screws + ridge cap</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Asphalt Shingles</td><td className="py-2 px-3">$80–$160</td><td className="py-2 px-3">Shingles + plywood + underlayment + nails</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Polycarbonate</td><td className="py-2 px-3">$100–$200</td><td className="py-2 px-3">Panels + closure strips + screws</td></tr>
            <tr><td className="py-2 px-3">Rolled Roofing</td><td className="py-2 px-3">$20–$60</td><td className="py-2 px-3">Roll + plywood + cement + nails</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="faq" className="text-2xl font-display mt-12 mb-4">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="my-6">
        <AccordionItem value="faq-1">
          <AccordionTrigger>Can I use a tarp as a coop roof?</AccordionTrigger>
          <AccordionContent>
            Only as a very temporary solution (weeks, not months). Tarps degrade in UV light, tear in wind, collect water pockets, and don't provide insulation or predator protection. Budget $20–60 for rolled roofing instead — it lasts 10x longer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Do I need plywood under metal roofing?</AccordionTrigger>
          <AccordionContent>
            No — metal panels can be screwed directly to purlins (horizontal 2×4s or 1×4s spaced 24" apart). This saves money on sheathing and actually improves ventilation. Shingles, however, always require plywood sheathing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>How do I prevent condensation dripping on chickens?</AccordionTrigger>
          <AccordionContent>
            Metal roofs can form condensation in cold weather. Solutions: add rigid foam insulation under the metal, use a vapor barrier, or ensure adequate ventilation so moist air exits before condensing. Never seal a coop completely — that's the #1 cause.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </BlogLayout>
  );
};

export default ChickenCoopRoofingGuide;
