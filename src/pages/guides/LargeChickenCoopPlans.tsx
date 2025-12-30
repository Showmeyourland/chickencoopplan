import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { 
  Calculator, 
  Wind, 
  Clock, 
  AlertTriangle, 
  Check, 
  X,
  Zap,
  Users,
  Droplets,
  ThermometerSun,
  Building,
  Settings
} from 'lucide-react';

// ===== SPACE CALCULATOR TOOL =====
const SpaceCalculatorTool = () => {
  const [birds, setBirds] = useState('25');
  const [flockType, setFlockType] = useState('layers');
  const [runStyle, setRunStyle] = useState('large');
  const [result, setResult] = useState<{
    coopArea: number;
    runArea: number;
    roostLength: number;
    nestBoxes: number;
    notes: string[];
  } | null>(null);

  const calculate = () => {
    const numBirds = Math.max(1, parseInt(birds) || 25);
    
    // Base space per bird (sq ft)
    let coopSqFtPerBird = 4; // standard for layers
    let runSqFtPerBird = 10;
    
    if (flockType === 'meat') {
      coopSqFtPerBird = 2; // meat birds need less roost time
      runSqFtPerBird = 8;
    } else if (flockType === 'mixed') {
      coopSqFtPerBird = 4;
      runSqFtPerBird = 12;
    }
    
    // Adjust for run style
    if (runStyle === 'small') {
      coopSqFtPerBird += 1; // need more indoor space if limited outdoor
      runSqFtPerBird = 6;
    } else if (runStyle === 'noRun') {
      coopSqFtPerBird += 2;
      runSqFtPerBird = 0;
    }
    
    const coopArea = Math.ceil(numBirds * coopSqFtPerBird);
    const runArea = Math.ceil(numBirds * runSqFtPerBird);
    const roostLength = Math.ceil(numBirds * 10); // 10 inches per bird
    const nestBoxes = Math.ceil(numBirds / 4); // 1 box per 4 hens
    
    const notes: string[] = [];
    if (numBirds >= 30) {
      notes.push('Consider multiple pop doors to reduce traffic jams.');
    }
    if (runStyle === 'small') {
      notes.push('Limited run = more litter stress inside. Increase ventilation.');
    }
    if (flockType === 'layers') {
      notes.push('External egg collection access saves significant daily time.');
    }
    notes.push('Design for walk-in access at this scale—space is wasted if you can\'t service it efficiently.');
    
    setResult({ coopArea, runArea, roostLength, nestBoxes, notes });
  };

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-5 w-5 text-primary" />
          Space Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Estimate coop floor space, run area, and infrastructure needs for 20+ birds.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Number of Birds</Label>
            <Input
              type="number"
              value={birds}
              onChange={(e) => setBirds(e.target.value)}
              min={10}
              max={100}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Flock Type</Label>
            <select
              value={flockType}
              onChange={(e) => setFlockType(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
            >
              <option value="layers">Mostly Layers</option>
              <option value="meat">Mostly Meat Birds</option>
              <option value="mixed">Mixed Flock</option>
            </select>
          </div>
          <div>
            <Label>Run Access</Label>
            <select
              value={runStyle}
              onChange={(e) => setRunStyle(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
            >
              <option value="large">Large Run / Pasture</option>
              <option value="small">Small / Limited Run</option>
              <option value="noRun">No Run (Pasture Rotation)</option>
            </select>
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          <Calculator className="h-4 w-4 mr-2" />
          Calculate Space
        </Button>

        {result && (
          <div className="bg-accent/30 rounded-lg p-4 space-y-4">
            <h4 className="font-semibold text-lg">Space Targets</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Coop Floor</p>
                <p className="text-2xl font-bold text-primary">{result.coopArea}</p>
                <p className="text-xs text-muted-foreground">sq ft</p>
              </div>
              {result.runArea > 0 && (
                <div className="text-center p-3 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground">Run Area</p>
                  <p className="text-2xl font-bold">{result.runArea}</p>
                  <p className="text-xs text-muted-foreground">sq ft</p>
                </div>
              )}
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Roost Length</p>
                <p className="text-2xl font-bold">{result.roostLength}</p>
                <p className="text-xs text-muted-foreground">inches</p>
              </div>
              <div className="text-center p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Nest Boxes</p>
                <p className="text-2xl font-bold">{result.nestBoxes}</p>
                <p className="text-xs text-muted-foreground">minimum</p>
              </div>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-sm">Planning Notes:</h5>
              <ul className="space-y-1">
                {result.notes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ===== VENTILATION ESTIMATOR TOOL =====
const VentilationEstimatorTool = () => {
  const [coopLength, setCoopLength] = useState('12');
  const [coopWidth, setCoopWidth] = useState('10');
  const [challenge, setChallenge] = useState('humid');
  const [existingVent, setExistingVent] = useState('');
  const [result, setResult] = useState<{
    coopArea: number;
    targetVent: number;
    existing: number;
    status: 'good' | 'warn' | 'under';
    message: string;
    tips: string[];
  } | null>(null);

  const estimate = () => {
    const L = Math.max(4, parseFloat(coopLength) || 12);
    const W = Math.max(4, parseFloat(coopWidth) || 10);
    const existing = Math.max(0, parseFloat(existingVent) || 0);
    const area = L * W;
    
    // Baseline: 12 sq in per sq ft of floor
    let perSqFt = 12;
    if (challenge === 'humid') perSqFt = 14;
    if (challenge === 'heat') perSqFt = 16;
    if (challenge === 'cold') perSqFt = 10;
    
    const targetVent = Math.ceil(area * perSqFt);
    const ratio = existing / targetVent;
    
    let status: 'good' | 'warn' | 'under' = 'good';
    let message = 'Vent area looks in the right ballpark. Ensure vents are high to avoid drafts on roosting birds.';
    
    if (existing === 0) {
      status = 'warn';
      message = 'Enter your existing vent area to compare against the target.';
    } else if (ratio < 0.6) {
      status = 'under';
      message = 'Likely under-vented for this floor area. Under-ventilation is a common cause of damp bedding and ammonia at 20+ birds.';
    } else if (ratio < 0.85) {
      status = 'warn';
      message = 'Borderline ventilation. Consider adding more high vents, especially for humid climates.';
    }
    
    const tips = [
      'Use high vents that exhaust moist air; avoid low drafts at roost height.',
      'Add adjustability (covers/baffles) rather than sealing the coop tight.',
      'If you see morning condensation, increase high venting and check for leaks.',
    ];
    
    setResult({ coopArea: area, targetVent, existing, status, message, tips });
  };

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wind className="h-5 w-5 text-primary" />
          Ventilation Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Calculate target high-vent area and check if your plan is under-vented.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <Label>Coop Length (ft)</Label>
            <Input
              type="number"
              value={coopLength}
              onChange={(e) => setCoopLength(e.target.value)}
              min={4}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Coop Width (ft)</Label>
            <Input
              type="number"
              value={coopWidth}
              onChange={(e) => setCoopWidth(e.target.value)}
              min={4}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Primary Challenge</Label>
            <select
              value={challenge}
              onChange={(e) => setChallenge(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
            >
              <option value="humid">Humidity / Condensation</option>
              <option value="heat">Heat / Summer Stress</option>
              <option value="cold">Cold Drafts Concern</option>
            </select>
          </div>
          <div>
            <Label>Existing Vent Area (sq in)</Label>
            <Input
              type="number"
              value={existingVent}
              onChange={(e) => setExistingVent(e.target.value)}
              placeholder="Optional"
              min={0}
              className="mt-1"
            />
          </div>
        </div>

        <Button onClick={estimate} className="w-full">
          <Wind className="h-4 w-4 mr-2" />
          Estimate Ventilation
        </Button>

        {result && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg flex items-start gap-3 ${
              result.status === 'under' ? 'bg-red-100 dark:bg-red-950' :
              result.status === 'warn' ? 'bg-yellow-100 dark:bg-yellow-950' :
              'bg-green-100 dark:bg-green-950'
            }`}>
              {result.status === 'under' ? (
                <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
              ) : result.status === 'warn' ? (
                <AlertTriangle className="h-6 w-6 text-yellow-600 shrink-0" />
              ) : (
                <Check className="h-6 w-6 text-green-600 shrink-0" />
              )}
              <div>
                <p className="font-medium">{result.message}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Coop area: {result.coopArea} sq ft • Target: {result.targetVent} sq in
                  {result.existing > 0 && ` • Your estimate: ${result.existing} sq in`}
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium text-sm mb-2">Ventilation Tips:</h5>
              <ul className="space-y-1">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ===== AUTOMATION PLANNER TOOL =====
const AutomationPlannerTool = () => {
  const [autoDoor, setAutoDoor] = useState('5');
  const [highCapWater, setHighCapWater] = useState('3');
  const [highCapFeeder, setHighCapFeeder] = useState('2');
  const [externalEgg, setExternalEgg] = useState('3');
  const [droppingsBoard, setDroppingsBoard] = useState('15');
  const [result, setResult] = useState<{
    dailySaved: number;
    weeklySaved: number;
    hoursPerWeek: number;
    recommendation: string;
    picks: string[];
  } | null>(null);

  const calculate = () => {
    const door = Math.max(0, parseFloat(autoDoor) || 0);
    const water = Math.max(0, parseFloat(highCapWater) || 0);
    const feeder = Math.max(0, parseFloat(highCapFeeder) || 0);
    const egg = Math.max(0, parseFloat(externalEgg) || 0);
    const clean = Math.max(0, parseFloat(droppingsBoard) || 0);
    
    const dailySaved = door + water + feeder + egg;
    const weeklySaved = dailySaved * 7 + clean;
    const hoursPerWeek = Math.round(weeklySaved / 60 * 10) / 10;
    
    let recommendation = 'Good automation stack: focus on reliability and ease of troubleshooting.';
    if (hoursPerWeek < 1) {
      recommendation = 'Time savings are modest. Prioritize the single upgrade that removes your most annoying daily step.';
    } else if (hoursPerWeek >= 3) {
      recommendation = 'Strong weekly time savings. This is where automation really changes the experience of a 20+ flock.';
    }
    
    const picks: string[] = [];
    if (door >= 2) picks.push('Auto door is usually the best safety + routine upgrade.');
    if (water >= 3) picks.push('High-capacity watering reduces wet litter and labor.');
    if (egg >= 2) picks.push('External egg access is high-ROI for daily convenience.');
    if (clean >= 10) picks.push('Droppings boards/trays concentrate waste management.');
    
    setResult({ dailySaved, weeklySaved, hoursPerWeek, recommendation, picks });
  };

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Zap className="h-5 w-5 text-primary" />
          Automation Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Estimate weekly time saved from automation upgrades.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Minutes/day saved with auto door</Label>
            <Input
              type="number"
              value={autoDoor}
              onChange={(e) => setAutoDoor(e.target.value)}
              min={0}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Minutes/day saved with high-capacity water</Label>
            <Input
              type="number"
              value={highCapWater}
              onChange={(e) => setHighCapWater(e.target.value)}
              min={0}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Minutes/day saved with high-capacity feeder</Label>
            <Input
              type="number"
              value={highCapFeeder}
              onChange={(e) => setHighCapFeeder(e.target.value)}
              min={0}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Minutes/day saved with external egg access</Label>
            <Input
              type="number"
              value={externalEgg}
              onChange={(e) => setExternalEgg(e.target.value)}
              min={0}
              className="mt-1"
            />
          </div>
          <div className="md:col-span-2">
            <Label>Minutes/week saved with droppings board/tray</Label>
            <Input
              type="number"
              value={droppingsBoard}
              onChange={(e) => setDroppingsBoard(e.target.value)}
              min={0}
              className="mt-1"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          <Clock className="h-4 w-4 mr-2" />
          Estimate Weekly Savings
        </Button>

        {result && (
          <div className="bg-accent/30 rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Daily Saved</p>
                <p className="text-2xl font-bold">{result.dailySaved}</p>
                <p className="text-xs text-muted-foreground">min</p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Weekly Saved</p>
                <p className="text-2xl font-bold">{result.weeklySaved}</p>
                <p className="text-xs text-muted-foreground">min</p>
              </div>
              <div className="p-3 bg-background rounded-lg">
                <p className="text-sm text-muted-foreground">Hours/Week</p>
                <p className="text-2xl font-bold text-primary">{result.hoursPerWeek}</p>
                <p className="text-xs text-muted-foreground">hrs</p>
              </div>
            </div>
            
            <p className="text-sm bg-background/50 p-3 rounded">{result.recommendation}</p>
            
            {result.picks.length > 0 && (
              <div>
                <h5 className="font-medium text-sm mb-2">Top Picks:</h5>
                <ul className="space-y-1">
                  {result.picks.map((pick, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      {pick}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ===== MAIN COMPONENT =====
const LargeChickenCoopPlans = () => {
  const article = getArticleBySlug('large-chicken-coop-plans');

  if (!article) {
    return <div>Article not found</div>;
  }

  const layoutPatterns = [
    {
      name: 'Central Service Aisle',
      best: '20-50 birds',
      description: 'Roosts on one side, nest boxes on the other. Feed/water in center aisle. Predictable bird flow.',
      pros: ['Easy daily access', 'Clear traffic patterns', 'Efficient egg collection'],
    },
    {
      name: 'Roost Wall + Droppings Zone',
      best: '25+ birds',
      description: 'All roosts along one long wall with droppings management below (board, tray, or deep-litter trough).',
      pros: ['Concentrates manure', 'Easier clean-out', 'Less scattered mess'],
    },
    {
      name: 'External Egg Collection',
      best: '20+ layers',
      description: 'Nest boxes accessible from outside the coop. Daily collection without entering.',
      pros: ['Huge time saver', 'Less bird stress', 'Works in bad weather'],
    },
  ];

  const automationOptions = [
    { name: 'Auto Pop Door', roi: 'High', description: 'Saves daily time, reduces "forgot to close" risk, improves predator safety.' },
    { name: 'High-Capacity Feeders', roi: 'High', description: 'Reduces refill frequency. Choose spill-minimizing designs.' },
    { name: 'Nipple Waterers', roi: 'Medium', description: 'Keeps litter drier than open pans. Needs freeze plan in cold climates.' },
    { name: 'Lighting Timers', roi: 'Low-Medium', description: 'Supports winter production but can stress birds if misused.' },
  ];

  return (
    <BlogLayout article={article}>
      {/* Introduction */}
      <p className="lead text-lg text-muted-foreground mb-6">
        A "small coop" can get away with imperfect systems. A large chicken coop can't. Once you hit 20+ birds, 
        your design is no longer about building a cute shed—it's about controlling moisture, airflow, manure load, 
        labor time, and flock behavior at scale. The right plan makes daily care easier as you add birds. 
        The wrong plan turns simple tasks into a grind.
      </p>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-6">
        <p className="font-medium">
          <strong>Big-coop truth:</strong> With 20+ birds, you're designing a workflow as much as a structure—feed & water flow, 
          clean-out flow, egg collection flow, and ventilation flow.
        </p>
      </div>

      {/* Space Calculator Tool */}
      <section id="space-tool">
        <h2 className="text-2xl font-bold mb-4">Calculate Your Space Requirements</h2>
        <p className="text-muted-foreground mb-4">
          Start here. The hardest part of scaling isn't space—it's keeping the coop dry and daily labor low.
        </p>
        <SpaceCalculatorTool />
      </section>

      {/* Scaling Considerations */}
      <section id="scaling" className="my-12">
        <h2 className="text-2xl font-bold mb-6">What Changes at 20+ Birds</h2>
        <p className="text-muted-foreground mb-6">
          In a small coop, your moisture output is manageable. In a large flock, daily manure and moisture 
          become constant. If the building doesn't shed humidity and support fast cleaning, you'll see issues.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              What Increases Dramatically
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Droplets className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                <span><strong>Moisture load:</strong> Respiration and droppings add humidity</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                <span><strong>Manure volume:</strong> Under-roost zones become intense</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                <span><strong>Traffic conflicts:</strong> Bottlenecks cause stress and bullying</span>
              </li>
              <li className="flex items-start gap-2">
                <Settings className="h-4 w-4 text-gray-500 mt-0.5 shrink-0" />
                <span><strong>Maintenance cost:</strong> Small problems affect more birds faster</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Check className="h-5 w-5 text-green-500" />
              What You Must Design Differently
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Building className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span><strong>Walk-in access:</strong> Human-height door, interior aisle</span>
              </li>
              <li className="flex items-start gap-2">
                <Wind className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span><strong>Scaled ventilation:</strong> High vents must grow with flock</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span><strong>Clean-out access:</strong> Doors sized for shovel/wheelbarrow</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span><strong>Egg collection:</strong> External access is high-ROI</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <p className="text-sm">
            <strong>Commercial mindset:</strong> A large coop is a small livestock building. Design it like one: 
            durable, cleanable, and easy to service.
          </p>
        </div>
      </section>

      {/* Layout Patterns */}
      <section id="layouts" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Efficient Layout Patterns</h2>
        <p className="text-muted-foreground mb-6">
          Layout is about reducing steps and reducing conflicts. Birds should move without pile-ups, 
          and you should service everything without gymnastics.
        </p>
        
        <div className="grid gap-4">
          {layoutPatterns.map((layout, i) => (
            <Card key={i} className="p-4">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="font-semibold text-lg">{layout.name}</h3>
                <Badge variant="secondary">Best for {layout.best}</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{layout.description}</p>
              <div className="flex flex-wrap gap-2">
                {layout.pros.map((pro, j) => (
                  <Badge key={j} variant="outline" className="text-xs">
                    <Check className="h-3 w-3 mr-1" />
                    {pro}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Importance Table */}
      <section id="features" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Critical Features for 20+ Birds</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-accent">
                <th className="p-3 text-left font-semibold">Feature</th>
                <th className="p-3 text-left font-semibold">Why It Matters</th>
                <th className="p-3 text-left font-semibold">Design Tip</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-accent/50">
                <td className="p-3 font-medium">Walk-in Height</td>
                <td className="p-3">Fast cleaning, fewer injuries, easier upgrades</td>
                <td className="p-3">Build for full adult standing height</td>
              </tr>
              <tr className="border-b hover:bg-accent/50">
                <td className="p-3 font-medium">Wide Pop Door</td>
                <td className="p-3">Reduces traffic jams and bullying</td>
                <td className="p-3">Consider multiple exits</td>
              </tr>
              <tr className="border-b hover:bg-accent/50">
                <td className="p-3 font-medium">Dedicated Feed Zone</td>
                <td className="p-3">Reduces wasted feed and rodents</td>
                <td className="p-3">Use spill-minimizing feeders</td>
              </tr>
              <tr className="border-b hover:bg-accent/50">
                <td className="p-3 font-medium">Roost Zoning</td>
                <td className="p-3">Controls manure and nighttime crowding</td>
                <td className="p-3">Droppings management below roosts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Ventilation Estimator Tool */}
      <section id="ventilation-tool">
        <h2 className="text-2xl font-bold mb-4">Check Your Ventilation</h2>
        <p className="text-muted-foreground mb-4">
          Ventilation is the #1 hidden lever in large coop success. Many plans scale square footage but 
          forget to scale high vent area.
        </p>
        <VentilationEstimatorTool />
      </section>

      {/* Ventilation Tips */}
      <section id="ventilation-tips" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Ventilation Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3 text-green-700 dark:text-green-400">What Good Ventilation Does</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5" />
                Moves moist air out before it condenses
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5" />
                Reduces ammonia by keeping litter drier
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5" />
                Regulates heat in summer (critical at high density)
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3 text-red-700 dark:text-red-400">What to Avoid</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5" />
                Low vents at roost height creating drafts
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5" />
                Sealing "tight" to keep warm (traps moisture)
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5" />
                Single small vent that can't exchange air at scale
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-yellow-100 dark:bg-yellow-950 p-4 rounded-lg mt-6">
          <p className="text-sm">
            <strong>Practical test:</strong> If you see condensation on windows/walls in the morning, 
            your ventilation is not keeping up with moisture load.
          </p>
        </div>
      </section>

      {/* Automation Planner Tool */}
      <section id="automation-tool">
        <h2 className="text-2xl font-bold mb-4">Plan Your Automation</h2>
        <p className="text-muted-foreground mb-4">
          Automation isn't about gadgets—it's about reducing high-frequency chores. For 20+ birds, 
          small upgrades can save huge time over months.
        </p>
        <AutomationPlannerTool />
      </section>

      {/* Automation Options */}
      <section id="automation-options" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Automation That Actually Pays Off</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {automationOptions.map((option, i) => (
            <Card key={i} className="p-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold">{option.name}</h3>
                <Badge variant={option.roi === 'High' ? 'default' : 'secondary'}>{option.roi} ROI</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <p className="text-sm">
            <strong>Automation rule:</strong> Automate the tasks you do daily (door, water, feeding), 
            not the tasks you do twice a year.
          </p>
        </div>
      </section>

      {/* Power & Wiring */}
      <section id="power" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Power & Wiring Basics</h2>
        <p className="text-muted-foreground mb-4">
          Once you add automation, you're adding power needs. Keep it simple and safe.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Safety Requirements</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                GFCI protection for outlets in damp environments
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                Conduit where wiring is exposed or rodent-prone
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                Dust-proof enclosures for timers/controllers
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                Service switch for quick maintenance shutoff
              </li>
            </ul>
          </div>
          <div className="bg-red-100 dark:bg-red-950 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Safety Note
            </h3>
            <p className="text-sm">
              If you're not comfortable with electrical work, hire help. Coops are dusty and can be 
              damp—bad combo for DIY shortcuts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What size coop do I need for 20 chickens?',
              a: 'It depends on run access and management style. Use the Space Calculator above—typical range is 80-120 sq ft for layers with good outdoor access.',
            },
            {
              q: 'What\'s the biggest difference between small and large coop plans?',
              a: 'Ventilation and workflow. At 20+ birds, moisture and manure output require intentional air exchange, easy clean-out, and low daily labor—otherwise problems compound quickly.',
            },
            {
              q: 'Is automation worth it for a backyard flock?',
              a: 'It can be. Best ROI is on daily tasks: automatic doors, spill-minimizing feeders/waterers, and easy egg access. Avoid complex systems you won\'t maintain.',
            },
            {
              q: 'Do I need electricity in a large coop?',
              a: 'Not always, but it helps for automation, lighting, or powered water solutions. If you add power, prioritize safe, protected wiring.',
            },
          ].map((faq, i) => (
            <Card key={i} className="p-4">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Links */}
      <section id="related" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/guides/coop-ventilation-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Ventilation Guide</h3>
            <p className="text-sm text-muted-foreground">Deep dive into airflow design</p>
          </Link>
          <Link to="/guides/chicken-coop-flooring-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Flooring Options</h3>
            <p className="text-sm text-muted-foreground">Best floors for easy cleanup</p>
          </Link>
          <Link to="/guides/predator-proof-coop-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Predator-Proofing</h3>
            <p className="text-sm text-muted-foreground">Security at scale</p>
          </Link>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="my-12 bg-primary/10 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-3">Bottom Line</h2>
        <p className="text-muted-foreground mb-4">
          The best large chicken coop plans treat 20+ birds like a system: airflow, manure management, 
          bird traffic, and human workflow. Build for walk-in access, scale your ventilation, control 
          under-roost waste, and automate the daily chores that wear you down.
        </p>
        <Link to="/recommended-plans">
          <Button size="lg">View Large Coop Plans</Button>
        </Link>
      </section>
    </BlogLayout>
  );
};

export default LargeChickenCoopPlans;
