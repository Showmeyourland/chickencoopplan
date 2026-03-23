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
import { Egg, Calculator, AlertTriangle, CheckCircle, Box } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/lib/articles';
import heroImage from '@/assets/guide-nesting-boxes.jpg';

// Nesting Box Calculator Tool
const NestingBoxCalculator = () => {
  const [hens, setHens] = useState('6');
  const [breedSize, setBreedSize] = useState('standard');
  const [result, setResult] = useState<{
    boxes: number;
    width: string;
    depth: string;
    height: string;
    roostHeight: string;
    notes: string[];
  } | null>(null);

  const calculate = () => {
    const henCount = parseInt(hens) || 6;
    const boxes = Math.max(1, Math.ceil(henCount / 4));

    let width = '12"';
    let depth = '12"';
    let height = '12"';
    let roostHeight = '18–24"';
    const notes: string[] = [];

    if (breedSize === 'bantam') {
      width = '10"';
      depth = '10"';
      height = '10"';
      notes.push('Bantams need smaller boxes — oversized boxes discourage use.');
    } else if (breedSize === 'large') {
      width = '14"';
      depth = '14"';
      height = '14"';
      roostHeight = '12–18"';
      notes.push('Large breeds like Brahmas and Jersey Giants need bigger boxes and lower placement.');
    } else {
      notes.push('Standard 12×12×12" works for most breeds including Rhode Island Reds, Leghorns, and Plymouth Rocks.');
    }

    if (henCount > 12) {
      notes.push('Consider adding a second row of boxes to save wall space.');
    }
    notes.push('Place boxes in the darkest, quietest corner of the coop — hens prefer privacy.');

    setResult({ boxes, width, depth, height, roostHeight, notes });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Nesting Box Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Find out how many boxes you need and the right dimensions for your flock.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hen-count">Number of hens</Label>
          <Input id="hen-count" type="number" min="1" max="100" value={hens} onChange={(e) => setHens(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label>Breed size</Label>
          <RadioGroup value={breedSize} onValueChange={setBreedSize} className="flex gap-4">
            {[
              { value: 'bantam', label: 'Bantam' },
              { value: 'standard', label: 'Standard' },
              { value: 'large', label: 'Large / Giant' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`breed-${opt.value}`} />
                <Label htmlFor={`breed-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button onClick={calculate} className="w-full">Calculate</Button>

        {result && (
          <div className="mt-4 space-y-3 p-4 bg-muted/50 rounded-lg">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary">{result.boxes}</div>
                <div className="text-xs text-muted-foreground">Nesting Boxes</div>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <div className="text-lg font-bold text-primary">{result.width} × {result.depth} × {result.height}</div>
                <div className="text-xs text-muted-foreground">Box Dimensions (W×D×H)</div>
              </div>
            </div>
            <p className="text-sm"><strong>Mount height:</strong> {result.roostHeight} off the floor (below roost bars)</p>
            {result.notes.map((note, i) => (
              <p key={i} className="text-sm text-muted-foreground">💡 {note}</p>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const NestingBoxGuide = () => {
  const article = articles.find(a => a.slug === 'nesting-box-guide')!;

  return (
    <BlogLayout article={article}>
      <img src={heroImage} alt="Chicken coop nesting boxes with fresh straw and eggs" className="w-full rounded-xl mb-8 aspect-video object-cover" loading="eager" />

      <p className="lead text-lg text-muted-foreground mb-6">
        <strong>Nesting boxes are where your egg production happens — get them wrong, and hens lay on the floor, break eggs, or refuse to use the coop entirely.</strong> After installing nesting boxes in 50+ coops across Arizona, I've nailed down the exact sizes, materials, heights, and placement strategies that maximize egg production and minimize broken-egg headaches.
      </p>

      <p>If you're building from scratch, our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> include nesting box dimensions for every design — but this guide covers the details that plans often skip: why hens reject certain boxes, how bedding choice affects egg cleanliness, and the specific mistakes that cause egg-eating behavior.</p>

      <NestingBoxCalculator />

      <h2 id="how-many-boxes" className="text-2xl font-display mt-12 mb-4">How Many Nesting Boxes Do You Need?</h2>

      <p>The golden rule: <strong>one nesting box for every 3–4 hens.</strong> More isn't better — too many boxes means hens spread out, and some boxes never get used while others become overcrowded favorites.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Flock Size</th>
              <th className="text-left py-2 px-3 font-semibold">Nesting Boxes</th>
              <th className="text-left py-2 px-3 font-semibold">Layout</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">2–4 hens</td><td className="py-2 px-3">1–2 boxes</td><td className="py-2 px-3">Single row</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">5–8 hens</td><td className="py-2 px-3">2–3 boxes</td><td className="py-2 px-3">Single row</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">9–12 hens</td><td className="py-2 px-3">3–4 boxes</td><td className="py-2 px-3">Single or double row</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">13–20 hens</td><td className="py-2 px-3">4–5 boxes</td><td className="py-2 px-3">Double row</td></tr>
            <tr><td className="py-2 px-3">20+ hens</td><td className="py-2 px-3">5–7 boxes</td><td className="py-2 px-3">Double or stacked</td></tr>
          </tbody>
        </table>
      </div>

      <Alert className="my-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Mistake</AlertTitle>
        <AlertDescription>Don't add more boxes than needed. Excess boxes become sleeping spots, which means manure in the nest and dirty eggs every morning.</AlertDescription>
      </Alert>

      <h2 id="dimensions" className="text-2xl font-display mt-12 mb-4">Nesting Box Dimensions by Breed Size</h2>

      <p>Standard 12×12×12-inch boxes work for 80% of backyard breeds. But if you're raising bantams or large breeds, incorrect sizing causes real problems:</p>

      <ul className="space-y-2 my-4">
        <li><strong>Too large:</strong> Hens feel exposed and unsafe — they'll find a corner on the floor instead</li>
        <li><strong>Too small:</strong> Large breeds can't turn around, leading to broken eggs and bruised combs</li>
        <li><strong>Too deep:</strong> Hard to collect eggs; hens may refuse to enter dark, tunnel-like boxes</li>
      </ul>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Breed Size</th>
              <th className="text-left py-2 px-3 font-semibold">Width</th>
              <th className="text-left py-2 px-3 font-semibold">Depth</th>
              <th className="text-left py-2 px-3 font-semibold">Height</th>
              <th className="text-left py-2 px-3 font-semibold">Example Breeds</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Bantam</td><td className="py-2 px-3">10"</td><td className="py-2 px-3">10"</td><td className="py-2 px-3">10"</td><td className="py-2 px-3">Silkies, Sebrights, d'Uccles</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Standard</td><td className="py-2 px-3">12"</td><td className="py-2 px-3">12"</td><td className="py-2 px-3">12"</td><td className="py-2 px-3">Leghorns, RIRs, Australorps</td></tr>
            <tr><td className="py-2 px-3">Large / Giant</td><td className="py-2 px-3">14"</td><td className="py-2 px-3">14"</td><td className="py-2 px-3">14"</td><td className="py-2 px-3">Brahmas, Jersey Giants, Cochins</td></tr>
          </tbody>
        </table>
      </div>

      <p>All of our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> specify nesting box dimensions matched to the coop's target flock size — no guessing required.</p>

      <h2 id="placement" className="text-2xl font-display mt-12 mb-4">Where to Place Nesting Boxes</h2>

      <p><strong>Placement matters more than box quality.</strong> A perfectly built box in the wrong spot gets ignored.</p>

      <h3 className="text-xl font-display mt-8 mb-3">Height Rules</h3>
      <ul className="space-y-2 my-4">
        <li><strong>18–24 inches off the floor</strong> for standard breeds</li>
        <li><strong>12–18 inches</strong> for large/giant breeds or older hens</li>
        <li><strong>Always below roost bars</strong> — hens sleep at the highest point, so if boxes are higher than roosts, they'll sleep (and poop) in the nests</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Location Rules</h3>
      <ul className="space-y-2 my-4">
        <li><strong>Darkest corner:</strong> Hens instinctively seek dark, sheltered spots to lay</li>
        <li><strong>Away from traffic:</strong> Don't place near the pop door or high-activity areas</li>
        <li><strong>Draft-free:</strong> Not directly under ventilation openings</li>
        <li><strong>Accessible for collection:</strong> External access doors save time and reduce coop disturbance</li>
      </ul>

      <p>Good <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">coop ventilation design</Link> keeps the nesting area dry without creating drafts directly on the boxes.</p>

      <h2 id="materials" className="text-2xl font-display mt-12 mb-4">Best Nesting Box Materials</h2>

      <h3 className="text-xl font-display mt-8 mb-3">Box Construction</h3>
      <ul className="space-y-2 my-4">
        <li><strong>Plywood (1/2"):</strong> Most common, easy to build, affordable. Seal edges to prevent moisture wicking.</li>
        <li><strong>Solid lumber:</strong> More durable but heavier. Good for permanent installations.</li>
        <li><strong>Metal (galvanized):</strong> Best for <Link to="/guides/chicken-coop-cleaning-guide" className="text-primary hover:underline">easy cleaning</Link> — mites can't hide in smooth surfaces.</li>
        <li><strong>Plastic tubs/buckets:</strong> Budget option. 5-gallon buckets work for standard hens — drill drainage holes.</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Bedding Options</h3>
      <ul className="space-y-2 my-4">
        <li><strong>Pine shavings:</strong> Best all-around choice. Soft, absorbent, easy to replace. Avoid cedar (toxic fumes).</li>
        <li><strong>Straw:</strong> Traditional but holds moisture and harbors mites. Replace frequently.</li>
        <li><strong>Nesting pads:</strong> Rubber or astroturf pads are washable and reusable — great for hot climates where bedding decomposes fast.</li>
        <li><strong>Sand:</strong> Works in <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">hot/arid climates</Link> — stays cool, drains well, easy to sift clean.</li>
      </ul>

      <p>For a full comparison of bedding materials and their impact on egg cleanliness, see our <Link to="/guides/chicken-coop-flooring-guide" className="text-primary hover:underline">flooring and bedding guide</Link>.</p>

      <h2 id="common-problems" className="text-2xl font-display mt-12 mb-4">Common Nesting Box Problems (And Fixes)</h2>

      <Accordion type="single" collapsible className="my-6">
        <AccordionItem value="floor-laying">
          <AccordionTrigger>Hens laying eggs on the floor instead of in boxes</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1 text-sm">
              <li>• Boxes may be too high — lower them or add a ramp</li>
              <li>• Not dark enough — add a curtain or lip to block light</li>
              <li>• Place a fake egg or golf ball in the box to signal "lay here"</li>
              <li>• Young pullets need training — lock them in the coop in the morning until they lay</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="sleeping">
          <AccordionTrigger>Hens sleeping in nesting boxes</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1 text-sm">
              <li>• Roost bars are lower than nest boxes — raise the roosts</li>
              <li>• Not enough roost space — add more perch length (8–10" per bird)</li>
              <li>• Block box access after dark for a few nights to retrain</li>
              <li>• Add a sloped roof over boxes so birds can't perch on top</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="egg-eating">
          <AccordionTrigger>Egg-eating behavior</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1 text-sm">
              <li>• Add more bedding to cushion eggs and prevent cracking</li>
              <li>• Collect eggs more frequently (2x daily minimum)</li>
              <li>• Consider roll-away nest boxes — eggs roll to a protected collection area</li>
              <li>• Ensure adequate calcium (oyster shell free-choice)</li>
              <li>• A ceramic egg decoy discourages pecking</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="broody">
          <AccordionTrigger>Broody hen hogging a box</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-1 text-sm">
              <li>• If you don't want chicks, remove the broody hen to a wire-bottom cage for 3 days</li>
              <li>• Collect eggs frequently to reduce broody triggers</li>
              <li>• Having enough boxes (1 per 3-4 hens) reduces congestion when one goes broody</li>
              <li>• Some breeds (Silkies, Cochins) go broody often — plan for it</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h2 id="diy-plans" className="text-2xl font-display mt-12 mb-4">DIY Nesting Box Plans</h2>

      <p>Building your own nesting boxes is straightforward — it's one of the simplest components in any <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> set.</p>

      <h3 className="text-xl font-display mt-8 mb-3">Simple 3-Box Unit (Materials)</h3>
      <ul className="space-y-1 my-4">
        <li>• 1 sheet 1/2" plywood (4×4' is plenty)</li>
        <li>• 1×4 board for front lip (36" length)</li>
        <li>• 1.5" galvanized screws</li>
        <li>• Wood glue (optional)</li>
        <li>• Total cost: <strong>$15–25</strong></li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">Assembly Steps</h3>
      <ol className="space-y-2 my-4 list-decimal list-inside">
        <li>Cut plywood: 2 side panels (12×12"), 1 top (36×12"), 1 bottom (36×12"), 1 back (36×12"), 2 dividers (12×12")</li>
        <li>Assemble the box frame: bottom, back, two sides</li>
        <li>Insert dividers at 12" intervals to create 3 compartments</li>
        <li>Attach top panel (slope it slightly backward for drainage)</li>
        <li>Add 4" front lip to keep bedding and eggs from rolling out</li>
        <li>Mount at 18–24" height with brackets or a French cleat</li>
      </ol>

      <p>For complete cut lists integrated into full coop builds, browse our <Link to="/guides/beginner-chicken-coop-plans" className="text-primary hover:underline">beginner-friendly chicken coop plans</Link>.</p>

      <h2 id="external-access" className="text-2xl font-display mt-12 mb-4">External Egg Collection Doors</h2>

      <p><strong>The single best upgrade you can make to any nesting box setup.</strong> An external access door lets you collect eggs without entering the coop — it takes 30 seconds instead of 5 minutes.</p>

      <ul className="space-y-2 my-4">
        <li><strong>Cut an opening:</strong> Match the back wall opening to the nest box back panel</li>
        <li><strong>Add a hinged door:</strong> Piano hinge on top, latch on bottom</li>
        <li><strong>Weatherproof:</strong> Add drip edge flashing above the door and seal edges</li>
        <li><strong>Predator-proof:</strong> Use a two-step latch that raccoons can't open — see our <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline">predator-proofing guide</Link></li>
      </ul>

      <Alert className="my-6 border-primary/30 bg-primary/5">
        <CheckCircle className="h-4 w-4 text-primary" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>All premium <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> include external egg door details. It's worth the extra 2 hours of build time — you'll thank yourself every morning.</AlertDescription>
      </Alert>

      <h2 id="faq" className="text-2xl font-display mt-12 mb-4">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="my-6">
        <AccordionItem value="faq-1">
          <AccordionTrigger>Can I use milk crates as nesting boxes?</AccordionTrigger>
          <AccordionContent>
            Yes — plastic milk crates work well as budget nesting boxes. They're roughly 13×13×11", which suits standard breeds. Mount them on their side, add a front lip with a zip-tied board, and fill with shavings. Easy to remove and hose down for cleaning.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Should nesting boxes have a roof?</AccordionTrigger>
          <AccordionContent>
            Yes — a sloped roof prevents hens from roosting on top (which means manure on top of the boxes). Slope the roof at about 45° so birds can't perch. This also makes cleaning the top easier.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>How often should I change nesting box bedding?</AccordionTrigger>
          <AccordionContent>
            Replace soiled bedding weekly and do a full swap every 2–4 weeks. If you notice dirty eggs consistently, you're not changing bedding often enough. In humid climates, change more frequently to prevent mold.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>Do I need nesting box curtains?</AccordionTrigger>
          <AccordionContent>
            Curtains aren't required but can help in bright coops. Hens prefer dark, private spaces for laying. A simple burlap or fabric strip hung over the opening reduces light and can increase box usage. Cut slits so hens can push through easily.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </BlogLayout>
  );
};

export default NestingBoxGuide;
