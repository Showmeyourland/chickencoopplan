import { useState } from 'react';
import BlogLayout from '@/components/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, CheckCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/lib/articles';
import heroImage from '@/assets/guide-breeds.jpg';

interface BreedResult {
  name: string;
  eggs: string;
  temperament: string;
  heatTolerance: string;
  coldTolerance: string;
  whyGood: string;
}

// Breed Finder Tool
const BreedFinderTool = () => {
  const [climate, setClimate] = useState('temperate');
  const [priority, setPriority] = useState('eggs');
  const [kidFriendly, setKidFriendly] = useState(false);
  const [results, setResults] = useState<BreedResult[] | null>(null);

  const allBreeds: (BreedResult & { climates: string[]; priorities: string[]; gentle: boolean })[] = [
    { name: 'Rhode Island Red', eggs: '250–300/year (brown)', temperament: 'Hardy, independent', heatTolerance: 'Good', coldTolerance: 'Excellent', whyGood: 'The #1 backyard breed. Reliable layers, cold-hardy, and low-maintenance.', climates: ['temperate', 'cold'], priorities: ['eggs', 'easy'], gentle: false },
    { name: 'Buff Orpington', eggs: '200–280/year (brown)', temperament: 'Gentle, docile, friendly', heatTolerance: 'Fair', coldTolerance: 'Excellent', whyGood: 'The best kid-friendly breed. Calm, fluffy, and great layers. Goes broody often.', climates: ['temperate', 'cold'], priorities: ['eggs', 'pets'], gentle: true },
    { name: 'Plymouth Rock (Barred)', eggs: '200–280/year (brown)', temperament: 'Friendly, curious', heatTolerance: 'Good', coldTolerance: 'Excellent', whyGood: 'Beautiful black-and-white barring. Hardy, friendly, and consistent layers.', climates: ['temperate', 'cold'], priorities: ['eggs', 'easy'], gentle: true },
    { name: 'Australorp', eggs: '250–300/year (brown)', temperament: 'Calm, docile', heatTolerance: 'Good', coldTolerance: 'Good', whyGood: 'Holds the world record for egg laying (364 eggs in 365 days). Quiet and gentle.', climates: ['temperate', 'hot', 'cold'], priorities: ['eggs'], gentle: true },
    { name: 'Leghorn (White)', eggs: '280–320/year (white)', temperament: 'Active, flighty', heatTolerance: 'Excellent', coldTolerance: 'Fair', whyGood: 'Maximum egg production. Heat-tolerant and feed-efficient. Not cuddly.', climates: ['hot', 'temperate'], priorities: ['eggs'], gentle: false },
    { name: 'Easter Egger', eggs: '200–280/year (blue/green)', temperament: 'Friendly, curious', heatTolerance: 'Good', coldTolerance: 'Good', whyGood: 'Colorful eggs! Each hen lays a unique shade of blue, green, or pink. Great for kids.', climates: ['temperate', 'cold', 'hot'], priorities: ['eggs', 'pets'], gentle: true },
    { name: 'Silkie', eggs: '100–120/year (cream)', temperament: 'Extremely gentle', heatTolerance: 'Fair', coldTolerance: 'Fair', whyGood: 'The ultimate pet chicken. Fluffy, docile, and loves being held. Poor layers but incredible mothers.', climates: ['temperate'], priorities: ['pets'], gentle: true },
    { name: 'Sussex (Speckled)', eggs: '200–250/year (brown)', temperament: 'Friendly, active', heatTolerance: 'Good', coldTolerance: 'Good', whyGood: 'Beautiful plumage, good layers, and excellent foragers. Great free-range breed.', climates: ['temperate', 'cold'], priorities: ['eggs', 'easy'], gentle: true },
    { name: 'Egyptian Fayoumi', eggs: '150–200/year (white)', temperament: 'Active, alert', heatTolerance: 'Excellent', coldTolerance: 'Poor', whyGood: 'The ultimate hot-climate breed. Thrives in 110°F+ heat. Excellent forager and predator-aware.', climates: ['hot'], priorities: ['easy'], gentle: false },
    { name: 'Wyandotte', eggs: '200–240/year (brown)', temperament: 'Calm, assertive', heatTolerance: 'Fair', coldTolerance: 'Excellent', whyGood: 'Rose comb resists frostbite. Beautiful laced plumage in many color varieties. Good in confinement.', climates: ['cold', 'temperate'], priorities: ['eggs', 'easy'], gentle: false },
  ];

  const findBreeds = () => {
    let filtered = allBreeds.filter(b => b.climates.includes(climate));
    if (priority !== 'any') {
      filtered = filtered.filter(b => b.priorities.includes(priority));
    }
    if (kidFriendly) {
      filtered = filtered.filter(b => b.gentle);
    }
    if (filtered.length === 0) {
      filtered = allBreeds.filter(b => b.climates.includes(climate)).slice(0, 3);
    }
    setResults(filtered.slice(0, 4));
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Breed Finder Tool
        </CardTitle>
        <p className="text-sm text-muted-foreground">Answer 3 questions to find the best breeds for your situation.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Your climate</Label>
          <RadioGroup value={climate} onValueChange={setClimate} className="flex flex-wrap gap-4">
            {[
              { value: 'hot', label: '🌵 Hot / Desert' },
              { value: 'temperate', label: '🌤 Temperate' },
              { value: 'cold', label: '❄️ Cold / Northern' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`clim-${opt.value}`} />
                <Label htmlFor={`clim-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Top priority</Label>
          <RadioGroup value={priority} onValueChange={setPriority} className="flex flex-wrap gap-4">
            {[
              { value: 'eggs', label: '🥚 Max Eggs' },
              { value: 'pets', label: '🐔 Friendly Pets' },
              { value: 'easy', label: '✅ Low Maintenance' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`pri-${opt.value}`} />
                <Label htmlFor={`pri-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="kid-friendly" checked={kidFriendly} onCheckedChange={(c) => setKidFriendly(c === true)} />
          <Label htmlFor="kid-friendly" className="cursor-pointer text-sm">Must be kid-friendly</Label>
        </div>
        <Button onClick={findBreeds} className="w-full">Find My Breeds</Button>

        {results && (
          <div className="mt-4 space-y-4">
            {results.map((breed, i) => (
              <div key={breed.name} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={i === 0 ? 'default' : 'secondary'}>{i === 0 ? '⭐ Top Pick' : `#${i + 1}`}</Badge>
                  <h4 className="font-semibold">{breed.name}</h4>
                </div>
                <p className="text-sm mb-2">{breed.whyGood}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                  <span>🥚 {breed.eggs}</span>
                  <span>🌡️ Heat: {breed.heatTolerance}</span>
                  <span>🐔 {breed.temperament}</span>
                  <span>❄️ Cold: {breed.coldTolerance}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const BestChickenBreedsGuide = () => {
  const article = articles.find(a => a.slug === 'best-chicken-breeds-beginners')!;

  return (
    <BlogLayout article={article}>
      <img src={heroImage} alt="Diverse flock of backyard chickens free ranging near a chicken coop" className="w-full rounded-xl mb-8 aspect-video object-cover" loading="eager" />

      <p className="lead text-lg text-muted-foreground mb-6">
        <strong>Choosing the wrong breed is the most common beginner mistake — and the hardest to fix.</strong> You can rebuild a coop in a weekend, but you're committed to your chickens for 5–8 years. After helping 100+ first-time chicken keepers across Arizona select their flocks, I've narrowed down the breeds that thrive in backyard settings and the ones that cause regret.
      </p>

      <p>Before you pick breeds, make sure your coop is sized correctly — use our free <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> to match your coop to your flock size. Breed selection and coop design go hand-in-hand: large breeds need more space, heat-tolerant breeds need different ventilation, and flighty breeds need taller fencing.</p>

      <BreedFinderTool />

      <h2 id="top-breeds" className="text-2xl font-display mt-12 mb-4">Top 5 Breeds for First-Time Chicken Keepers</h2>

      <h3 className="text-xl font-display mt-8 mb-3">1. Rhode Island Red</h3>
      <p>The Toyota Camry of chickens — reliable, low-maintenance, and does everything well.</p>
      <ul className="space-y-1 my-4">
        <li>• <strong>Eggs:</strong> 250–300 large brown eggs per year</li>
        <li>• <strong>Temperament:</strong> Independent, hardy, occasionally bossy</li>
        <li>• <strong>Climate:</strong> Excellent cold tolerance, good in heat</li>
        <li>• <strong>Space:</strong> 4 sq ft inside, 10 sq ft run (standard) — <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">calculate your coop size</Link></li>
        <li>• <strong>Best for:</strong> Egg production, low-maintenance keeping</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">2. Buff Orpington</h3>
      <p>The golden retriever of chickens — gentle, fluffy, and perfect for families with kids.</p>
      <ul className="space-y-1 my-4">
        <li>• <strong>Eggs:</strong> 200–280 large brown eggs per year</li>
        <li>• <strong>Temperament:</strong> Extremely docile, loves being held, great with children</li>
        <li>• <strong>Climate:</strong> Excellent in cold, fair in extreme heat (heavy feathering)</li>
        <li>• <strong>Heads up:</strong> Goes broody frequently — great if you want chicks, annoying if you don't</li>
        <li>• <strong>Best for:</strong> Families, pet chickens, cold climates</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">3. Plymouth Rock (Barred)</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Eggs:</strong> 200–280 large brown eggs per year</li>
        <li>• <strong>Temperament:</strong> Friendly, curious, good with other breeds</li>
        <li>• <strong>Climate:</strong> Hardy in all conditions except extreme heat</li>
        <li>• <strong>Best for:</strong> Mixed flocks, beginners who want beautiful and productive birds</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">4. Australorp</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Eggs:</strong> 250–300 large brown eggs per year (world record holder!)</li>
        <li>• <strong>Temperament:</strong> Calm, quiet, excellent in confinement</li>
        <li>• <strong>Climate:</strong> Good all-around, handles heat better than most large breeds</li>
        <li>• <strong>Best for:</strong> Maximum egg production with a calm personality</li>
      </ul>

      <h3 className="text-xl font-display mt-8 mb-3">5. Easter Egger</h3>
      <ul className="space-y-1 my-4">
        <li>• <strong>Eggs:</strong> 200–280 per year in blue, green, pink, or olive shades</li>
        <li>• <strong>Temperament:</strong> Friendly, curious, each bird is unique in appearance</li>
        <li>• <strong>Climate:</strong> Good all-around</li>
        <li>• <strong>Best for:</strong> Families who want colorful egg baskets and unique-looking birds</li>
      </ul>

      <h2 id="hot-climate" className="text-2xl font-display mt-12 mb-4">Best Breeds for Hot Climates</h2>

      <p>If you're in Arizona, Texas, or the Deep South, heat tolerance is non-negotiable. Chickens can't sweat — they rely on panting and blood flow through their combs. Our <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">Arizona chicken coop guide</Link> covers the coop modifications needed for extreme heat, but breed selection is equally important.</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Breed</th>
              <th className="text-left py-2 px-3 font-semibold">Heat Rating</th>
              <th className="text-left py-2 px-3 font-semibold">Eggs/Year</th>
              <th className="text-left py-2 px-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Leghorn</td><td className="py-2 px-3">⭐⭐⭐⭐⭐</td><td className="py-2 px-3">280–320</td><td className="py-2 px-3">Best layers, flighty</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Egyptian Fayoumi</td><td className="py-2 px-3">⭐⭐⭐⭐⭐</td><td className="py-2 px-3">150–200</td><td className="py-2 px-3">Desert-evolved, alert</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Minorca</td><td className="py-2 px-3">⭐⭐⭐⭐</td><td className="py-2 px-3">200–240</td><td className="py-2 px-3">Large white eggs</td></tr>
            <tr><td className="py-2 px-3">Andalusian</td><td className="py-2 px-3">⭐⭐⭐⭐</td><td className="py-2 px-3">180–220</td><td className="py-2 px-3">Beautiful blue plumage</td></tr>
          </tbody>
        </table>
      </div>

      <Alert className="my-6">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Avoid in Hot Climates</AlertTitle>
        <AlertDescription>Brahmas, Cochins, and Silkies have heavy feathering that acts like a down jacket in summer. These breeds suffer severely above 90°F and are not recommended for desert or subtropical climates.</AlertDescription>
      </Alert>

      <h2 id="cold-climate" className="text-2xl font-display mt-12 mb-4">Best Breeds for Cold Climates</h2>

      <p>Cold-hardy breeds need small combs (less frostbite risk) and dense feathering. Pair them with a properly <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulated coop</Link> and you'll get eggs through the coldest winters.</p>

      <ul className="space-y-2 my-4">
        <li><strong>Wyandotte:</strong> Rose comb resists frostbite. Beautiful laced plumage. 200–240 eggs/year.</li>
        <li><strong>Brahma:</strong> The "King of Chickens" — massive, feathered feet, extremely cold-hardy. 150–200 eggs/year.</li>
        <li><strong>Orpington:</strong> Dense down undercoat handles sub-zero temps. 200–280 eggs/year.</li>
        <li><strong>Plymouth Rock:</strong> All-weather breed that keeps laying in winter. 200–280 eggs/year.</li>
      </ul>

      <p>For winterization tips, see our <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">winter chicken coop guide</Link>.</p>

      <h2 id="how-many" className="text-2xl font-display mt-12 mb-4">How Many Chickens Should You Start With?</h2>

      <p><strong>Start with 3–6 hens.</strong> Chickens are social and need at least 3 companions, but more than 6 as a beginner creates unnecessary complexity.</p>

      <ul className="space-y-2 my-4">
        <li><strong>3 hens:</strong> Minimum flock size. ~12–18 eggs/week. Perfect for a couple.</li>
        <li><strong>4–6 hens:</strong> Sweet spot for families. ~20–36 eggs/week. Fits a <Link to="/guides/4x4-chicken-coop-plans" className="text-primary hover:underline">4×4 to 4×8 coop</Link>.</li>
        <li><strong>6–12 hens:</strong> For egg-sharing with neighbors. Requires a larger coop — see our <Link to="/guides/large-chicken-coop-plans" className="text-primary hover:underline">large coop plans</Link>.</li>
      </ul>

      <Alert className="my-6 border-primary/30 bg-primary/5">
        <Heart className="h-4 w-4 text-primary" />
        <AlertTitle>Warning: "Chicken Math" Is Real</AlertTitle>
        <AlertDescription>Nearly every chicken keeper starts with 4 hens and ends up with 12+ within a year. Build your coop bigger than you think you need — or use <Link to="/guides/mobile-chicken-coop-plans" className="text-primary hover:underline">modular/mobile designs</Link> that expand.</AlertDescription>
      </Alert>

      <h2 id="coop-matching" className="text-2xl font-display mt-12 mb-4">Matching Breeds to Your Coop Design</h2>

      <p>Your breed choice directly impacts coop requirements. Our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> specify space per bird, but here's the breed-specific breakdown:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-semibold">Breed Size</th>
              <th className="text-left py-2 px-3 font-semibold">Coop Space</th>
              <th className="text-left py-2 px-3 font-semibold">Run Space</th>
              <th className="text-left py-2 px-3 font-semibold">Roost Length</th>
              <th className="text-left py-2 px-3 font-semibold">Example Breeds</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Bantam</td><td className="py-2 px-3">2 sq ft</td><td className="py-2 px-3">5 sq ft</td><td className="py-2 px-3">6"</td><td className="py-2 px-3">Silkies, d'Uccles</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 px-3">Standard</td><td className="py-2 px-3">4 sq ft</td><td className="py-2 px-3">10 sq ft</td><td className="py-2 px-3">8–10"</td><td className="py-2 px-3">RIR, Orpington, Plymouth Rock</td></tr>
            <tr><td className="py-2 px-3">Large / Giant</td><td className="py-2 px-3">5–6 sq ft</td><td className="py-2 px-3">12–15 sq ft</td><td className="py-2 px-3">12"</td><td className="py-2 px-3">Brahma, Jersey Giant</td></tr>
          </tbody>
        </table>
      </div>

      <p>Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline">coop size calculator</Link> to get exact dimensions for your chosen breeds and flock size.</p>

      <h2 id="where-to-buy" className="text-2xl font-display mt-12 mb-4">Where to Buy Chicks</h2>

      <ul className="space-y-2 my-4">
        <li><strong>Local farm stores:</strong> Tractor Supply, Rural King, and local feed stores carry chicks in spring. Limited breed selection but you can see birds in person.</li>
        <li><strong>Hatcheries (mail order):</strong> Murray McMurray, Cackle Hatchery, Meyer Hatchery. Widest breed selection, shipped as day-old chicks. Order early — popular breeds sell out by February.</li>
        <li><strong>Local breeders:</strong> Best for rare breeds and quality stock. Check Craigslist, Facebook groups, and poultry swap meets.</li>
        <li><strong>Started pullets:</strong> 16–20 week old hens ready to lay. More expensive ($15–30 each) but skip the brooding phase entirely.</li>
      </ul>

      <h2 id="faq" className="text-2xl font-display mt-12 mb-4">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="my-6">
        <AccordionItem value="faq-1">
          <AccordionTrigger>Can I mix different breeds in one coop?</AccordionTrigger>
          <AccordionContent>
            Yes — most backyard flocks are mixed breeds and they get along fine. Avoid mixing very large breeds (Brahma) with bantams, as size differences can lead to bullying. Introduce new birds gradually, ideally at night.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>Do I need a rooster for hens to lay eggs?</AccordionTrigger>
          <AccordionContent>
            No. Hens lay eggs with or without a rooster. You only need a rooster if you want fertilized eggs for hatching chicks. In fact, most urban areas prohibit roosters due to noise — check your <Link to="/guides/coop-permit-guide" className="text-primary hover:underline">local regulations</Link> before getting one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>When do chickens start laying eggs?</AccordionTrigger>
          <AccordionContent>
            Most breeds begin laying at 18–24 weeks (4.5–6 months). Production breeds like Leghorns start earlier (16–18 weeks). Heavy breeds like Brahmas may not lay until 28+ weeks. First eggs are often small and irregular — production normalizes within a few weeks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>How long do chickens live?</AccordionTrigger>
          <AccordionContent>
            Backyard chickens typically live 5–8 years with proper care. Production breeds lay most eggs in years 1–3, then taper off. Heritage breeds lay fewer eggs per year but maintain production longer. Either way, build your coop to last — our <Link to="/" className="text-primary hover:underline">chicken coop plans</Link> use materials rated for 15+ years.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </BlogLayout>
  );
};

export default BestChickenBreedsGuide;
