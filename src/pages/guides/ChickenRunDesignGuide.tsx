import { useState } from 'react';
import BlogLayout from '@/components/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Fence, Shield, Calculator, Leaf, CheckCircle, XCircle, AlertTriangle, DollarSign, Ruler, Bug } from 'lucide-react';
import heroImage from '@/assets/guide-chicken-run.jpg';

// Tool 1: Run Size Calculator
const RunSizeCalculator = () => {
  const [birdCount, setBirdCount] = useState('6');
  const [managementStyle, setManagementStyle] = useState('mixed');
  const [enrichmentLevel, setEnrichmentLevel] = useState('medium');
  const [result, setResult] = useState<{
    minArea: number;
    maxArea: number;
    recommendedArea: number;
    dimensions: { width: number; length: number }[];
    notes: string[];
  } | null>(null);

  const calculateSize = () => {
    const birds = parseInt(birdCount) || 6;
    
    let minSqFt = 8;
    let maxSqFt = 15;
    
    if (managementStyle === 'run-only') {
      minSqFt = 12;
      maxSqFt = 20;
    } else if (managementStyle === 'mixed') {
      minSqFt = 8;
      maxSqFt = 12;
    } else {
      minSqFt = 6;
      maxSqFt = 10;
    }

    // Enrichment adjusts minimum
    if (enrichmentLevel === 'high') {
      minSqFt -= 2;
    } else if (enrichmentLevel === 'low') {
      minSqFt += 2;
    }

    const minArea = birds * minSqFt;
    const maxArea = birds * maxSqFt;
    const recommendedArea = Math.round((minArea + maxArea) / 2);

    // Generate dimension options
    const dimensions = [];
    const sqrtArea = Math.sqrt(recommendedArea);
    
    // Square-ish option
    const side = Math.ceil(sqrtArea);
    dimensions.push({ width: side, length: side });
    
    // Runway option (long and narrow)
    dimensions.push({ width: 6, length: Math.ceil(recommendedArea / 6) });
    dimensions.push({ width: 8, length: Math.ceil(recommendedArea / 8) });

    const notes: string[] = [];
    if (managementStyle === 'run-only') {
      notes.push('Run-only birds need maximum space and enrichment to stay healthy.');
    }
    if (enrichmentLevel === 'high') {
      notes.push('High enrichment (vertical space, multiple zones) allows slightly less floor area.');
    }
    if (enrichmentLevel === 'low') {
      notes.push('Consider adding shade, dust bath, and perches to improve quality of life.');
    }
    if (birds > 10) {
      notes.push('For larger flocks, consider a split run design for rotation and ground management.');
    }

    setResult({ minArea, maxArea, recommendedArea, dimensions, notes });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Run Size Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Calculate recommended run area based on your flock and management style.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bird-count">Number of birds</Label>
          <Input
            id="bird-count"
            type="number"
            min="1"
            max="100"
            value={birdCount}
            onChange={(e) => setBirdCount(e.target.value)}
            placeholder="e.g., 6"
          />
        </div>

        <div className="space-y-2">
          <Label>Management style</Label>
          <RadioGroup value={managementStyle} onValueChange={setManagementStyle} className="flex flex-wrap gap-4">
            {[
              { value: 'run-only', label: 'Run-only (no free-range)' },
              { value: 'mixed', label: 'Mixed (some free-range)' },
              { value: 'free-range', label: 'Mostly free-range' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`style-${opt.value}`} />
                <Label htmlFor={`style-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Enrichment level</Label>
          <RadioGroup value={enrichmentLevel} onValueChange={setEnrichmentLevel} className="flex flex-wrap gap-4">
            {[
              { value: 'low', label: 'Low (basic)' },
              { value: 'medium', label: 'Medium (shade + dust bath + perches)' },
              { value: 'high', label: 'High (multiple zones + vertical space)' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`enrich-${opt.value}`} />
                <Label htmlFor={`enrich-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={calculateSize} className="w-full">
          <Ruler className="mr-2 h-4 w-4" />
          Calculate Run Size
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-primary">{result.minArea}</div>
                <div className="text-xs text-muted-foreground">Min sq ft</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 text-center border-2 border-primary/30">
                <div className="text-2xl font-bold text-primary">{result.recommendedArea}</div>
                <div className="text-xs text-muted-foreground">Recommended sq ft</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-primary">{result.maxArea}</div>
                <div className="text-xs text-muted-foreground">Ideal sq ft</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Suggested Dimensions</h4>
              <div className="flex flex-wrap gap-2">
                {result.dimensions.map((dim, i) => (
                  <Badge key={i} variant="outline" className="text-sm">
                    {dim.width}' × {dim.length}' = {dim.width * dim.length} sq ft
                  </Badge>
                ))}
              </div>
            </div>

            {result.notes.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Notes</h4>
                <ul className="space-y-1">
                  {result.notes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {note}
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

// Tool 2: Fencing & Cost Estimator
const FencingCostEstimator = () => {
  const [width, setWidth] = useState('8');
  const [length, setLength] = useState('12');
  const [height, setHeight] = useState('6');
  const [material, setMaterial] = useState('welded');
  const [overhead, setOverhead] = useState('netting');
  const [apronWidth, setApronWidth] = useState('2');
  const [result, setResult] = useState<{
    perimeter: number;
    wallArea: number;
    roofArea: number;
    apronArea: number;
    meshNeeded: number;
    costLow: number;
    costHigh: number;
    warnings: string[];
  } | null>(null);

  const calculateFencing = () => {
    const w = parseFloat(width) || 8;
    const l = parseFloat(length) || 12;
    const h = parseFloat(height) || 6;
    const apron = parseFloat(apronWidth) || 0;

    const perimeter = 2 * (w + l);
    const wallArea = perimeter * h;
    const roofArea = w * l;
    const apronArea = perimeter * apron;

    let meshNeeded = wallArea + apronArea;
    if (overhead !== 'none') {
      meshNeeded += roofArea;
    }

    // Cost per sq ft ranges
    const costs: Record<string, { low: number; high: number }> = {
      'hardware': { low: 1.50, high: 3.00 },
      'welded': { low: 0.80, high: 1.50 },
      'chainlink': { low: 0.50, high: 1.00 },
      'chicken': { low: 0.20, high: 0.50 },
    };

    const materialCost = costs[material];
    let costLow = meshNeeded * materialCost.low;
    let costHigh = meshNeeded * materialCost.high;

    // Overhead adds cost
    if (overhead === 'solid') {
      costLow += roofArea * 2;
      costHigh += roofArea * 4;
    } else if (overhead === 'netting') {
      costLow += roofArea * 0.30;
      costHigh += roofArea * 0.60;
    }

    // Add framing estimate (20-40% of mesh cost)
    costLow *= 1.2;
    costHigh *= 1.4;

    const warnings: string[] = [];
    if (material === 'chicken') {
      warnings.push('Chicken wire is not predator-proof. Consider welded wire or hardware cloth for security.');
    }
    if (overhead === 'none') {
      warnings.push('No overhead protection leaves birds vulnerable to hawks and climbing predators.');
    }
    if (apron < 1.5) {
      warnings.push('Consider at least 18-24 inches of apron for effective dig protection.');
    }
    if (h < 5) {
      warnings.push('Fence height under 5 feet may allow some breeds to fly over.');
    }

    setResult({
      perimeter,
      wallArea,
      roofArea,
      apronArea,
      meshNeeded,
      costLow: Math.round(costLow),
      costHigh: Math.round(costHigh),
      warnings,
    });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-500" />
          Fencing & Cost Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Estimate perimeter, mesh area, and rough cost based on fencing choice.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="run-width">Run width (ft)</Label>
            <Input id="run-width" type="number" min="4" max="100" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="run-length">Run length (ft)</Label>
            <Input id="run-length" type="number" min="4" max="100" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fence-height">Fence height (ft)</Label>
            <Input id="fence-height" type="number" min="3" max="8" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Fencing material</Label>
            <RadioGroup value={material} onValueChange={setMaterial} className="space-y-1">
              {[
                { value: 'hardware', label: 'Hardware cloth (highest security)' },
                { value: 'welded', label: 'Welded wire (balanced)' },
                { value: 'chainlink', label: 'Chain link (needs reinforcement)' },
                { value: 'chicken', label: 'Chicken wire (containment only)' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`mat-${opt.value}`} />
                  <Label htmlFor={`mat-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Overhead protection</Label>
            <RadioGroup value={overhead} onValueChange={setOverhead} className="space-y-1">
              {[
                { value: 'none', label: 'None' },
                { value: 'netting', label: 'Netting / wire top' },
                { value: 'solid', label: 'Solid roof' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`over-${opt.value}`} />
                  <Label htmlFor={`over-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="apron-width">Dig apron width (ft)</Label>
          <Input id="apron-width" type="number" min="0" max="4" step="0.5" value={apronWidth} onChange={(e) => setApronWidth(e.target.value)} />
        </div>

        <Button onClick={calculateFencing} className="w-full">
          <Fence className="mr-2 h-4 w-4" />
          Estimate Fencing
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{result.perimeter} ft</div>
                <div className="text-xs text-muted-foreground">Perimeter</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{result.wallArea} sq ft</div>
                <div className="text-xs text-muted-foreground">Wall area</div>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-center">
                <div className="text-xl font-bold text-primary">{result.meshNeeded} sq ft</div>
                <div className="text-xs text-muted-foreground">Total mesh needed</div>
              </div>
              <div className="bg-primary/10 rounded-lg p-3 text-center border-2 border-primary/30">
                <div className="text-xl font-bold text-primary">${result.costLow}–${result.costHigh}</div>
                <div className="text-xs text-muted-foreground">Est. cost range</div>
              </div>
            </div>

            {result.warnings.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Warnings</h4>
                <ul className="space-y-1">
                  {result.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {warning}
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

// Tool 3: Enrichment Planner
const EnrichmentPlanner = () => {
  const [spacePerBird, setSpacePerBird] = useState('10');
  const [flockIssue, setFlockIssue] = useState('none');
  const [budget, setBudget] = useState('medium');
  const [result, setResult] = useState<{
    priority: { item: string; reason: string; cost: string }[];
    optional: { item: string; reason: string; cost: string }[];
    tip: string;
  } | null>(null);

  const buildPlan = () => {
    const space = parseFloat(spacePerBird) || 10;
    
    const priority: { item: string; reason: string; cost: string }[] = [];
    const optional: { item: string; reason: string; cost: string }[] = [];

    // Everyone needs shade and dust bath
    priority.push({ item: 'Shade zone (roof section or shade cloth)', reason: 'Prevents heat stress and creates comfortable resting area', cost: '$20-$100' });
    priority.push({ item: 'Dust bath area (covered bin or corner)', reason: 'Essential for parasite control and natural behavior', cost: '$0-$30' });

    // Issue-specific recommendations
    if (flockIssue === 'boredom') {
      priority.push({ item: 'Hanging greens/cabbage', reason: 'Reduces boredom and feather picking', cost: '$5-$15' });
      priority.push({ item: 'Foraging bedding (wood chips + scattered grains)', reason: 'Encourages natural scratching behavior', cost: '$20-$50' });
      optional.push({ item: 'Treat dispenser / pecking block', reason: 'Additional mental stimulation', cost: '$10-$25' });
    } else if (flockIssue === 'bullying') {
      priority.push({ item: 'Visual breaks (panels, pallets, or shrubs)', reason: 'Breaks line of sight to reduce conflict', cost: '$0-$50' });
      priority.push({ item: 'Multiple feeder/waterer locations', reason: 'Prevents resource guarding by dominant birds', cost: '$20-$60' });
      priority.push({ item: 'Platforms / escape perches', reason: 'Lets timid birds escape upward', cost: '$10-$40' });
    } else if (flockIssue === 'mud') {
      priority.push({ item: 'Roofed dry corner', reason: 'Provides dry standing area during wet weather', cost: '$50-$200' });
      priority.push({ item: 'Deep bedding layer (wood chips)', reason: 'Absorbs moisture and stays cleaner', cost: '$30-$80' });
      optional.push({ item: 'Drainage improvements', reason: 'Long-term solution for chronic mud', cost: '$50-$200' });
    } else if (flockIssue === 'heat') {
      priority.push({ item: 'Additional shade cloth / extended roof', reason: 'More shaded area for hot days', cost: '$30-$100' });
      priority.push({ item: 'Frozen treat station', reason: 'Helps birds cool down in extreme heat', cost: '$0-$10' });
      optional.push({ item: 'Misting system', reason: 'Active cooling for very hot climates', cost: '$20-$80' });
    }

    // Space-based recommendations
    if (space < 10) {
      priority.push({ item: 'Perches / platforms (multiple heights)', reason: 'Vertical space makes small runs feel bigger', cost: '$10-$50' });
    }

    // Budget-based optional additions
    if (budget === 'high') {
      optional.push({ item: 'Rotating toy set', reason: 'Variety keeps birds engaged long-term', cost: '$30-$60' });
      optional.push({ item: 'Stumps / logs / branches', reason: 'Natural perching and hopping stations', cost: '$0-$30' });
    } else if (budget === 'medium') {
      optional.push({ item: 'Simple perches (branches or 2x4s)', reason: 'Low-cost vertical space addition', cost: '$0-$20' });
    }

    let tip = 'Start with shade and dust bath—those two features change run behavior instantly.';
    if (flockIssue === 'bullying') {
      tip = 'Multiple stations and visual breaks are more effective than removing the bully.';
    } else if (flockIssue === 'mud') {
      tip = 'A roofed dry corner is often the single best upgrade for wet-climate runs.';
    }

    setResult({ priority, optional, tip });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-500" />
          Enrichment Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">Generate a prioritized enrichment checklist based on your flock's needs.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="space-bird">Run space per bird (sq ft approx)</Label>
          <Input id="space-bird" type="number" min="4" max="50" value={spacePerBird} onChange={(e) => setSpacePerBird(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label>Current flock issues</Label>
          <RadioGroup value={flockIssue} onValueChange={setFlockIssue} className="space-y-1">
            {[
              { value: 'none', label: 'No major issues' },
              { value: 'boredom', label: 'Boredom / feather picking' },
              { value: 'bullying', label: 'Bullying / pecking problems' },
              { value: 'mud', label: 'Mud / dirty run' },
              { value: 'heat', label: 'Heat stress / too much sun' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`issue-${opt.value}`} />
                <Label htmlFor={`issue-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Budget level</Label>
          <RadioGroup value={budget} onValueChange={setBudget} className="flex gap-4">
            {[
              { value: 'low', label: 'Low ($0–$50)' },
              { value: 'medium', label: 'Medium ($50–$200)' },
              { value: 'high', label: 'High ($200+)' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`budget-${opt.value}`} />
                <Label htmlFor={`budget-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={buildPlan} className="w-full">
          <Bug className="mr-2 h-4 w-4" />
          Build My Enrichment Plan
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Priority Items
              </h4>
              <div className="space-y-2">
                {result.priority.map((item, i) => (
                  <div key={i} className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-sm">{item.item}</span>
                      <Badge variant="outline" className="text-xs">{item.cost}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {result.optional.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Optional Upgrades</h4>
                <div className="space-y-2">
                  {result.optional.map((item, i) => (
                    <div key={i} className="bg-muted/50 rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <span className="font-medium text-sm">{item.item}</span>
                        <Badge variant="outline" className="text-xs">{item.cost}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Alert>
              <Leaf className="h-4 w-4" />
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>{result.tip}</AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ChickenRunDesignGuide = () => {
  const article = {
    id: 'chicken-run-design-guide',
    slug: 'chicken-run-design-guide',
    title: 'Chicken Run Design: Maximizing Outdoor Space & Safety (2025)',
    excerpt: 'Complete chicken run design guide covering size calculations, fencing options, predator-proofing, and enrichment features. Includes 3 interactive tools: Run Size Calculator, Fencing Estimator, and Enrichment Planner.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Run Design Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building' as const,
    tags: ['Chicken Run', 'Fencing', 'Predator-Proofing', 'Enrichment', 'Outdoor Space'],
    difficulty: 'Intermediate' as const,
    costRange: '$200-$1,500',
    featured: true,
    image: heroImage,
  };

  return (
    <BlogLayout article={article}>
      <p className="lead text-lg text-muted-foreground mb-6">
        A chicken coop keeps birds safe at night. A chicken run is where they live most of their daylight hours—scratching, sunbathing, dust bathing, and working out the social pecking order. That makes chicken run design one of the biggest quality-of-life upgrades you can build: more space, better airflow, fewer behavior problems, and dramatically less "mystery loss" risk from predators.
      </p>

      <Alert className="mb-6 border-primary/30">
        <Shield className="h-4 w-4" />
        <AlertTitle>Big Picture</AlertTitle>
        <AlertDescription>
          A great run is roomy, dry, secure, and interesting. If you nail those four, almost everything else becomes easier.
        </AlertDescription>
      </Alert>

      {/* What a Good Run Does */}
      <section id="good-run" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">What a "Good" Chicken Run Does</h2>
        <p className="mb-4">
          A run isn't just a fenced rectangle. It's an outdoor habitat. The best runs solve for three competing problems: <strong>predator pressure</strong>, <strong>space constraints</strong>, and <strong>bird behavior</strong>. If your run design ignores any one of those, you end up "fixing" it forever with patches.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-500" />
                Safety Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Resist prying, chewing, climbing, and digging predators</li>
                <li>• Prevent hawk strikes with overhead protection</li>
                <li>• Keep the run dry enough to avoid disease and foot issues</li>
                <li>• Make it easy for humans to lock/unlock reliably every day</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                Quality-of-Life Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Enough room to move without constant confrontation</li>
                <li>• Shade and a dust bath area (non-negotiable)</li>
                <li>• Visual breaks to reduce bullying and stress</li>
                <li>• Enrichment that keeps birds busy (less feather picking)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Short on space?</p>
          <p className="text-sm text-muted-foreground">Use a long "runway" layout + shade + enrichment. It feels bigger to chickens than a square box.</p>
        </div>
      </section>

      {/* Run Size Calculations */}
      <section id="run-size" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Run Size Calculations (Real-World Planning)</h2>
        <p className="mb-4">
          When people ask "how big should my run be," the honest answer is: as big as you can make it while still keeping it secure and manageable.
        </p>

        <h3 className="text-xl font-semibold mb-3">A Practical Sizing Range</h3>
        <p className="mb-4">
          If birds spend most days in the run (no free-ranging), plan more square footage per bird. If they free-range often and the run is mainly a safe base, you can be on the lower end—especially if you build enrichment and vertical space.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Management Style</th>
                <th className="text-left p-3 font-semibold">Suggested Range</th>
                <th className="text-left p-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Run-only (no free-range)</td>
                <td className="p-3">12–20 sq ft per bird</td>
                <td className="p-3">More space + more enrichment = fewer conflicts and less mess</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Mixed (some free-range)</td>
                <td className="p-3">8–12 sq ft per bird</td>
                <td className="p-3">Works well if you provide shade + dust bath + perches</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Mostly free-range</td>
                <td className="p-3">6–10 sq ft per bird</td>
                <td className="p-3">Run becomes "safe zone" and weather shelter</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert className="mb-6">
          <Calculator className="h-4 w-4" />
          <AlertTitle>Hidden Truth</AlertTitle>
          <AlertDescription>
            "Square footage" isn't the whole story. Chickens care about usable space—dry zones, shade zones, and visual breaks reduce conflict more than just adding area.
          </AlertDescription>
        </Alert>

        <h3 className="text-xl font-semibold mb-3">Vertical Space Counts (If You Build It Right)</h3>
        <p className="mb-4">
          Chickens don't fly like parrots, but they absolutely use height: low platforms, perches, stumps, and ramps. Adding vertical features can make a run feel bigger while improving pecking-order dynamics—lower birds can escape higher birds.
        </p>
      </section>

      {/* Layout Patterns */}
      <section id="layout-patterns" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Layout Patterns That Feel Bigger Than They Are</h2>
        <p className="mb-4">
          If you have limited yard space, layout is your cheat code. The goal is to avoid a single "dead center" where dominant birds can control the whole run. You want flow, corners that break sight lines, and multiple "stations."
        </p>

        <h3 className="text-lg font-semibold mb-3">Three Layout Patterns That Work</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1) The Runway</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Long and narrow (e.g., 6×20, 8×24)</li>
                <li>• Creates movement, not clumping</li>
                <li>• Easy to divide into zones</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2) The L-Shape</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Wraps around a coop or shed</li>
                <li>• Creates a "turn" = natural sight break</li>
                <li>• Good for small yards and side yards</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3) The Split Run</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Two connected runs or a divider gate</li>
                <li>• Lets you rotate ground and reduce mud</li>
                <li>• Separate birds temporarily if needed</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-lg font-semibold mb-3">Zones to Include (Even in a Small Run)</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Dry zone:</strong> roofed area or deep bedding area that stays usable after storms</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Shade zone:</strong> natural shade, shade cloth, or a solid roof section</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Dust bath zone:</strong> covered bin or corner with sand/soil/ash mix</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Activity zone:</strong> perches, stumps, hanging greens, treat toys</span>
          </li>
        </ul>
      </section>

      {/* Fencing Options */}
      <section id="fencing" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Fencing Options and Predator-Proofing</h2>
        <p className="mb-4">
          Fencing choice is where most runs either become "set-it-and-forget-it" or "constant repairs." The right choice depends on your predators, your budget, and how permanent the run is.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Material</th>
                <th className="text-left p-3 font-semibold">Strength</th>
                <th className="text-left p-3 font-semibold">Best Use</th>
                <th className="text-left p-3 font-semibold">Weakness</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Hardware cloth</td>
                <td className="p-3"><Badge className="bg-green-500">High</Badge></td>
                <td className="p-3">Lower walls, vents, predator-heavy areas</td>
                <td className="p-3">Costs more; needs lots of fasteners</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Welded wire</td>
                <td className="p-3"><Badge className="bg-blue-500">Medium–High</Badge></td>
                <td className="p-3">Main wall panels where predators are moderate</td>
                <td className="p-3">Larger openings may allow small predators</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Chain link</td>
                <td className="p-3"><Badge variant="outline">Medium</Badge></td>
                <td className="p-3">Large perimeter fencing with added skirt + roof</td>
                <td className="p-3">Needs reinforcement at the bottom</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Chicken wire</td>
                <td className="p-3"><Badge variant="destructive">Low</Badge></td>
                <td className="p-3">Keeping chickens in (temporary)</td>
                <td className="p-3">Can be torn, chewed, or pried by predators</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Alert className="mb-6">
          <Fence className="h-4 w-4" />
          <AlertTitle>The "Frame Matters" Rule</AlertTitle>
          <AlertDescription>
            A strong mesh on a weak frame still fails. The mesh has to be supported by framing that doesn't warp, rack, or create gaps. Tight corners and doors are the weak points.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Common Mistake</AlertTitle>
          <AlertDescription>
            Stapling mesh to thin wood and calling it done. Use screws + washers (or fencing staples designed for the job) and give predators nothing loose to pull.
          </AlertDescription>
        </Alert>
      </section>

      {/* Roofing and Overhead */}
      <section id="roofing" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Roofing and Overhead Protection</h2>
        <p className="mb-4">
          If hawks exist where you live, overhead protection is not optional. Even if hawks don't, a roof makes runs cleaner and drier. <strong>"Dry run = lower smell, fewer flies, fewer foot problems, easier winter."</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Solid Roof (Metal/Polycarbonate)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Best for mud control and weather shelter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Makes run usable in rain/snow</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Costs more; needs stronger framing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Netting / Wire Top</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Lower cost, easier retrofit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Stops hawks and climbing predators</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Doesn't keep the run dry</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Shade Matters as Much as Security</p>
          <p className="text-sm text-muted-foreground">A fully exposed run becomes a heat trap, and chickens will huddle in the only shadow—creating a poop hotspot and bullying hotspot. Even a small shaded zone can change flock behavior for the better.</p>
        </div>
      </section>

      {/* Dig Protection */}
      <section id="dig-protection" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Dig Protection (Aprons, Skirts, Buried Barriers)</h2>
        <p className="mb-4">
          Many predators don't "dig a tunnel" like in cartoons. They scratch at the fence line until something gives. The goal is to make the ground line a dead end. You have two main strategies:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Apron (Predator Skirt)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Mesh extends outward on the ground from the fence base</li>
                <li>• Predators dig at the fence line and hit wire immediately</li>
                <li>• Easier than digging trenches; great retrofit option</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Buried Barrier</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Mesh is buried down a set depth along the perimeter</li>
                <li>• Works well for permanent runs</li>
                <li>• More labor; tricky in rocky soil</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            Put extra attention on corners and door thresholds. Predators probe corners first. Door gaps are "free wins" for them.
          </AlertDescription>
        </Alert>
      </section>

      {/* Doors and Access */}
      <section id="doors" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Doors, Latches, and Human Access</h2>
        <p className="mb-4">
          The best predator-proof run still fails if you hate using it. Human access is not a luxury—it's what determines whether you maintain the run. Plan for two types of access: a <strong>daily door</strong> and a <strong>"get in there with a rake" door</strong>.
        </p>

        <h3 className="text-lg font-semibold mb-3">Door Design Rules</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Daily door:</strong> easy, quick, consistent to latch (you'll do it every day)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Service door:</strong> wide enough for a wheelbarrow, rake, or bedding tote</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Door frame:</strong> build it stout so it doesn't warp and create gaps</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Latches:</strong> use a primary latch + secondary clip/carabiner in predator-heavy areas</span>
          </li>
        </ul>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Human Comfort Matters</p>
          <p className="text-sm text-muted-foreground">If you can walk into the run without crawling, you will clean it more. If you have to crouch and squeeze, the run will slowly degrade.</p>
        </div>
      </section>

      {/* Ground Management */}
      <section id="ground" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Ground Management (Mud Control, Drainage, Bedding)</h2>
        <p className="mb-4">
          The ground is what makes runs "pleasant" or "gross." Mud and wet litter create odor, flies, and foot issues. You don't need a fancy system—just decide your approach intentionally.
        </p>

        <h3 className="text-lg font-semibold mb-3">Three Ground Strategies</h3>
        <div className="space-y-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">1) Dry Bedding Run</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Deep-ish layer of wood chips/leaves/straw</li>
                <li>• Scatter scratch grains in it for natural foraging</li>
                <li>• Best with partial roofing to keep it from soaking</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">2) Bare Earth + Rotation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1">
                <li>• Works if you can rotate pens or open/close sections</li>
                <li>• Needs good drainage and time to rest</li>
                <li>• Enrichment must be moved to avoid dead spots</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert variant="destructive" className="mb-6">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>"Always Mud" Warning</AlertTitle>
          <AlertDescription>
            If your run is low, shaded, and unroofed, it will become mud in wet seasons. Fix is typically: raise it, slope it, add drainage, roof part of it, and add bedding.
          </AlertDescription>
        </Alert>

        <h3 className="text-lg font-semibold mb-3">Drainage Shortcuts That Work</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Build the run on the highest spot you can</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Give the run a slight slope away from the coop</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Add a roofed dry corner where birds can stand when the rest is damp</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Use a sacrificial "wet zone" near the waterer and keep it easy to refresh</span>
          </li>
        </ul>
      </section>

      {/* Enrichment */}
      <section id="enrichment" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Enrichment Features That Reduce Boredom and Conflict</h2>
        <p className="mb-4">
          The fastest way to create bullying, feather picking, and stress is to trap birds in a run that has nothing to do. The goal of enrichment is not "cute accessories." It's to increase choices: different places to stand, hide, peck, scratch, and rest.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Best ROI Features</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Shade:</strong> solid roof section or shade cloth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Dust bath:</strong> covered bin or corner (stays dry)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Perches/platforms:</strong> low, stable, multiple heights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Hanging greens:</strong> cabbage head or leafy bundle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span><strong>Foraging bedding:</strong> scatter scratch grains in chips</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">"Better Than Nothing" Add-ons</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Stumps/logs/branches for hopping</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Visual breaks (panel, shrub-in-a-pot, pallet wall)</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Rotating toys (pecking block, treat dispenser)</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Multiple feeder/waterer locations</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-3">Quick Bullying Fixes Inside a Run</h3>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>Add a second feeder and waterer far apart</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>Add a privacy panel so birds can break line of sight</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>Add a second shade zone</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <span>Add a platform so timid birds can "escape upward"</span>
          </li>
        </ul>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Design for Pecking Order</p>
          <p className="text-sm text-muted-foreground">Enrichment is also social engineering. Dominant birds control chokepoints: single perches, single shade, single feeder. Give the flock multiple stations and multiple paths. That's how you reduce conflict without micromanaging birds.</p>
        </div>
      </section>

      {/* Interactive Tools */}
      <section id="tools" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Tools: Design Your Chicken Run</h2>
        <p className="mb-6">
          Use these to size your run, choose fencing intelligently, and build an enrichment checklist matched to your flock.
        </p>

        <RunSizeCalculator />
        <FencingCostEstimator />
        <EnrichmentPlanner />
      </section>

      {/* Build Checklist */}
      <section id="checklist" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Build Checklist</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Must-Haves
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Secure fencing (avoid weak mesh in predator-heavy areas)</li>
                <li>• Overhead protection (hawks + climbing predators)</li>
                <li>• Dig protection (apron or buried barrier)</li>
                <li>• Stout doors + reliable latches</li>
                <li>• Shade + dust bath zone</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                High-Value Upgrades
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Roofed dry corner</li>
                <li>• Split run or gate to rotate ground</li>
                <li>• Multiple feeding/watering stations</li>
                <li>• Platforms/perches for vertical space</li>
                <li>• Visual breaks for bullying control</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Maintenance Plan (Simple)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li><strong>Weekly:</strong> rake high-traffic areas, refresh dust bath, check latches and mesh tension</li>
              <li><strong>Monthly:</strong> add/refresh bedding or chips, inspect perimeter corners and door thresholds</li>
              <li><strong>Seasonal:</strong> adjust shade/roofing for weather, rotate zones, deep clean and reset</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How big should a chicken run be?</AccordionTrigger>
            <AccordionContent>
              Bigger is always better. A practical planning range is about 8–15 sq ft per bird in an enclosed run depending on how often birds free-range and how much enrichment you provide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Is chicken wire enough for a run?</AccordionTrigger>
            <AccordionContent>
              Chicken wire helps contain chickens, but it's weak against many predators. For predator resistance, use welded wire or hardware cloth, secure latches, and consider a dig-proof apron.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>Do I need a roof on a chicken run?</AccordionTrigger>
            <AccordionContent>
              A roof or overhead netting improves safety from hawks and helps keep runs dry. Solid roofing also reduces mud and makes winter management easier.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Should I put the run on grass?</AccordionTrigger>
            <AccordionContent>
              Grass disappears fast. If you want a greener run long-term, use rotation (split run) or a mobile system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Do chickens need a covered run?</AccordionTrigger>
            <AccordionContent>
              They don't "need" a full roof in every climate, but a roofed dry zone is a huge quality upgrade. It prevents mud, keeps feed drier, and gives birds shelter in bad weather.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>What's the best way to stop digging predators?</AccordionTrigger>
            <AccordionContent>
              An apron (mesh skirt) is the easiest retrofit. For permanent runs, a buried barrier can be strong but is more labor. Either way, reinforce corners and door thresholds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>How do I reduce bullying in a run?</AccordionTrigger>
            <AccordionContent>
              Add visual breaks, multiple stations (feed/water/shade), and vertical features. Bullying is often a "resource guarding" problem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
        <p className="mb-4">
          Great chicken run design is simple: build the largest secure space you can, keep part of it dry, protect the perimeter and overhead, and add enrichment that creates multiple "stations." If your run stays safe and interesting, your chickens behave better and your maintenance drops.
        </p>

        <Alert>
          <Shield className="h-4 w-4" />
          <AlertTitle>Next Step</AlertTitle>
          <AlertDescription>
            Use the Run Size Calculator above, then price fencing with the estimator, then generate your enrichment checklist.
          </AlertDescription>
        </Alert>
      </section>
    </BlogLayout>
  );
};

export default ChickenRunDesignGuide;
