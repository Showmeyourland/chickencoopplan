import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  AlertTriangle, 
  Check, 
  X,
  Brush,
  Calendar,
  ThermometerSun,
  Droplets,
  Heart,
  ShieldCheck
} from 'lucide-react';


// ===== FLOORING COST ESTIMATOR TOOL =====
const FlooringCostEstimator = () => {
  const [coopSize, setCoopSize] = useState(32);
  const [floorType, setFloorType] = useState('plywood');
  const [beddingType, setBeddingType] = useState('shavings');
  const [result, setResult] = useState<{
    initialCost: number;
    yearlyBedding: number;
    fiveYearTotal: number;
    laborHours: number;
    recommendation: string;
  } | null>(null);

  const calculateCosts = () => {
    const floorCosts: Record<string, { perSqFt: number; labor: number; lifespan: number }> = {
      'dirt': { perSqFt: 0, labor: 0.5, lifespan: 999 },
      'plywood': { perSqFt: 1.50, labor: 1, lifespan: 5 },
      'linoleum': { perSqFt: 2.50, labor: 1.5, lifespan: 10 },
      'concrete': { perSqFt: 6, labor: 3, lifespan: 50 },
      'hardware-cloth': { perSqFt: 3, labor: 2, lifespan: 15 },
      'rubber-mats': { perSqFt: 4, labor: 0.5, lifespan: 10 },
    };

    const beddingCosts: Record<string, { perCuFt: number; depthInches: number; changesPerYear: number }> = {
      'shavings': { perCuFt: 0.15, depthInches: 4, changesPerYear: 12 },
      'straw': { perCuFt: 0.10, depthInches: 6, changesPerYear: 24 },
      'sand': { perCuFt: 0.50, depthInches: 4, changesPerYear: 2 },
      'deep-litter': { perCuFt: 0.15, depthInches: 8, changesPerYear: 2 },
    };

    const floor = floorCosts[floorType];
    const bedding = beddingCosts[beddingType];
    
    const initialCost = coopSize * floor.perSqFt;
    const cuFtNeeded = (coopSize * bedding.depthInches) / 12;
    const yearlyBedding = cuFtNeeded * bedding.perCuFt * bedding.changesPerYear;
    const replacementCosts = (5 / floor.lifespan) * initialCost;
    const fiveYearTotal = initialCost + (yearlyBedding * 5) + replacementCosts;
    const laborHours = coopSize * floor.labor / 10;

    let recommendation = '';
    if (fiveYearTotal < 200) {
      recommendation = 'Budget-friendly choice! Great for starters.';
    } else if (fiveYearTotal < 500) {
      recommendation = 'Balanced cost and durability. Good middle ground.';
    } else {
      recommendation = 'Premium investment. Best for long-term or large operations.';
    }

    setResult({
      initialCost: Math.round(initialCost),
      yearlyBedding: Math.round(yearlyBedding),
      fiveYearTotal: Math.round(fiveYearTotal),
      laborHours: Math.round(laborHours * 10) / 10,
      recommendation,
    });
  };

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-5 w-5 text-primary" />
          Flooring Cost Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Calculate total flooring costs including installation, bedding, and 5-year maintenance.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Coop Floor Size: {coopSize} sq ft</Label>
          <Slider
            value={[coopSize]}
            onValueChange={(v) => setCoopSize(v[0])}
            min={16}
            max={200}
            step={4}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Floor Material</Label>
          <RadioGroup value={floorType} onValueChange={setFloorType} className="grid grid-cols-2 gap-2">
            {[
              { value: 'dirt', label: 'Dirt/Earth' },
              { value: 'plywood', label: 'Plywood' },
              { value: 'linoleum', label: 'Linoleum over Wood' },
              { value: 'concrete', label: 'Concrete Slab' },
              { value: 'hardware-cloth', label: 'Hardware Cloth' },
              { value: 'rubber-mats', label: 'Rubber Mats' },
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent/50 cursor-pointer">
                <RadioGroupItem value={option.value} id={`floor-${option.value}`} />
                <Label htmlFor={`floor-${option.value}`} className="cursor-pointer">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Bedding Type</Label>
          <RadioGroup value={beddingType} onValueChange={setBeddingType} className="grid grid-cols-2 gap-2">
            {[
              { value: 'shavings', label: 'Pine Shavings' },
              { value: 'straw', label: 'Straw' },
              { value: 'sand', label: 'Sand' },
              { value: 'deep-litter', label: 'Deep Litter Method' },
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent/50 cursor-pointer">
                <RadioGroupItem value={option.value} id={`bedding-${option.value}`} />
                <Label htmlFor={`bedding-${option.value}`} className="cursor-pointer">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={calculateCosts} className="w-full">
          <DollarSign className="h-4 w-4 mr-2" />
          Calculate Costs
        </Button>

        {result && (
          <div className="bg-accent/30 rounded-lg p-4 space-y-3">
            <h4 className="font-semibold text-lg">Cost Breakdown</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Initial Floor Cost</p>
                <p className="text-xl font-bold text-primary">${result.initialCost}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Yearly Bedding</p>
                <p className="text-xl font-bold">${result.yearlyBedding}/yr</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">5-Year Total</p>
                <p className="text-2xl font-bold text-primary">${result.fiveYearTotal}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Install Labor</p>
                <p className="text-xl font-bold">{result.laborHours} hrs</p>
              </div>
            </div>
            <p className="text-sm bg-background/50 p-2 rounded">{result.recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ===== CLEANING SCHEDULE PLANNER =====
const CleaningSchedulePlanner = () => {
  const [flockSize, setFlockSize] = useState('6');
  const [floorType, setFloorType] = useState('plywood');
  const [climate, setClimate] = useState('temperate');
  const [schedule, setSchedule] = useState<{
    daily: string[];
    weekly: string[];
    monthly: string[];
    seasonal: string[];
    timePerWeek: number;
  } | null>(null);

  const generateSchedule = () => {
    const birds = parseInt(flockSize) || 6;
    const baseTime = Math.ceil(birds / 3) * 5; // 5 min per 3 birds base
    
    const daily: string[] = ['Check waterers and feeders', 'Quick poop board scrape (if used)'];
    const weekly: string[] = ['Spot clean wet areas', 'Add fresh bedding to thin spots'];
    const monthly: string[] = ['Deep clean nest boxes', 'Check for mites in crevices'];
    const seasonal: string[] = ['Full bedding change', 'Disinfect floors and walls'];

    // Adjust based on floor type
    if (floorType === 'sand') {
      daily.push('Scoop droppings (like cat litter)');
      weekly.splice(0, 1); // Remove spot clean - daily scooping handles it
    } else if (floorType === 'deep-litter') {
      daily.splice(1, 1); // No poop board scrape needed
      weekly.push('Turn bedding to aerate');
      seasonal.push('Harvest compost layer');
    } else if (floorType === 'concrete' || floorType === 'linoleum') {
      weekly.push('Hose down and scrub floor');
    }

    // Climate adjustments
    if (climate === 'humid') {
      weekly.push('Check for moisture buildup');
      monthly.push('Apply diatomaceous earth to corners');
    } else if (climate === 'cold') {
      seasonal.push('Extra bedding depth for insulation');
    }

    let timeMultiplier = 1;
    if (climate === 'humid') timeMultiplier = 1.3;
    if (floorType === 'sand') timeMultiplier *= 0.8;
    if (floorType === 'deep-litter') timeMultiplier *= 0.6;

    setSchedule({
      daily,
      weekly,
      monthly,
      seasonal,
      timePerWeek: Math.round(baseTime * timeMultiplier * 7 / 60 * 10) / 10, // hours per week
    });
  };

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calendar className="h-5 w-5 text-primary" />
          Cleaning Schedule Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Get a customized cleaning schedule based on your setup.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Flock Size</Label>
            <Input
              type="number"
              value={flockSize}
              onChange={(e) => setFlockSize(e.target.value)}
              min={2}
              max={50}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Floor Type</Label>
            <select
              value={floorType}
              onChange={(e) => setFloorType(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
            >
              <option value="plywood">Plywood/Wood</option>
              <option value="linoleum">Linoleum</option>
              <option value="concrete">Concrete</option>
              <option value="sand">Sand</option>
              <option value="deep-litter">Deep Litter</option>
            </select>
          </div>
          <div>
            <Label>Climate</Label>
            <select
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md bg-background"
            >
              <option value="temperate">Temperate</option>
              <option value="humid">Hot & Humid</option>
              <option value="cold">Cold Winter</option>
              <option value="dry">Hot & Dry</option>
            </select>
          </div>
        </div>

        <Button onClick={generateSchedule} className="w-full">
          <Brush className="h-4 w-4 mr-2" />
          Generate Schedule
        </Button>

        {schedule && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Estimated time: {schedule.timePerWeek} hours/week</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Daily Tasks</h4>
                <ul className="space-y-1">
                  {schedule.daily.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Weekly Tasks</h4>
                <ul className="space-y-1">
                  {schedule.weekly.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Monthly Tasks</h4>
                <ul className="space-y-1">
                  {schedule.monthly.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-orange-600 mt-0.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent/20 p-4 rounded-lg">
                <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-2">Seasonal Tasks</h4>
                <ul className="space-y-1">
                  {schedule.seasonal.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ===== HEALTH RISK CHECKER =====
const HealthRiskChecker = () => {
  const [answers, setAnswers] = useState({
    moisture: '',
    ammonia: '',
    mites: '',
    bumblefoot: '',
    respiratory: '',
  });
  const [results, setResults] = useState<{
    riskLevel: 'low' | 'medium' | 'high';
    issues: string[];
    recommendations: string[];
  } | null>(null);

  const checkRisks = () => {
    const issues: string[] = [];
    const recommendations: string[] = [];
    let riskScore = 0;

    if (answers.moisture === 'yes') {
      riskScore += 2;
      issues.push('Moisture retention increases bacterial growth');
      recommendations.push('Add more ventilation or switch to sand/concrete flooring');
    }
    if (answers.ammonia === 'yes') {
      riskScore += 3;
      issues.push('High ammonia damages respiratory systems');
      recommendations.push('Increase bedding depth, improve ventilation, or try deep litter method');
    }
    if (answers.mites === 'yes') {
      riskScore += 2;
      issues.push('Mites thrive in cracks and organic bedding');
      recommendations.push('Consider linoleum or sealed concrete; apply diatomaceous earth');
    }
    if (answers.bumblefoot === 'yes') {
      riskScore += 2;
      issues.push('Hard or rough floors cause foot injuries');
      recommendations.push('Add rubber mats or increase bedding depth; sand rough concrete');
    }
    if (answers.respiratory === 'yes') {
      riskScore += 3;
      issues.push('Dusty bedding or poor ventilation affects breathing');
      recommendations.push('Switch to low-dust bedding (hemp, sand); check ventilation');
    }

    let riskLevel: 'low' | 'medium' | 'high' = 'low';
    if (riskScore >= 6) riskLevel = 'high';
    else if (riskScore >= 3) riskLevel = 'medium';

    if (issues.length === 0) {
      issues.push('No immediate flooring-related health risks detected');
      recommendations.push('Continue current maintenance routine');
    }

    setResults({ riskLevel, issues, recommendations });
  };

  const questions = [
    { key: 'moisture', label: 'Does bedding stay damp for more than a day after rain?' },
    { key: 'ammonia', label: 'Can you smell ammonia when you enter the coop?' },
    { key: 'mites', label: 'Have you noticed mites or lice in the bedding?' },
    { key: 'bumblefoot', label: 'Do any birds have swollen or injured feet?' },
    { key: 'respiratory', label: 'Are birds sneezing or showing respiratory issues?' },
  ];

  return (
    <Card className="my-8 border-primary/20 bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Heart className="h-5 w-5 text-primary" />
          Flooring Health Risk Checker
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Identify flooring-related health risks and get targeted solutions.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.key} className="flex items-center justify-between p-3 border rounded-lg">
              <span className="text-sm">{q.label}</span>
              <div className="flex gap-2">
                <Button
                  variant={answers[q.key as keyof typeof answers] === 'yes' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setAnswers({ ...answers, [q.key]: 'yes' })}
                >
                  Yes
                </Button>
                <Button
                  variant={answers[q.key as keyof typeof answers] === 'no' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setAnswers({ ...answers, [q.key]: 'no' })}
                >
                  No
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button onClick={checkRisks} className="w-full">
          <ShieldCheck className="h-4 w-4 mr-2" />
          Check Health Risks
        </Button>

        {results && (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg flex items-center gap-3 ${
              results.riskLevel === 'high' ? 'bg-red-100 dark:bg-red-950' :
              results.riskLevel === 'medium' ? 'bg-yellow-100 dark:bg-yellow-950' :
              'bg-green-100 dark:bg-green-950'
            }`}>
              {results.riskLevel === 'high' ? (
                <AlertTriangle className="h-6 w-6 text-red-600" />
              ) : results.riskLevel === 'medium' ? (
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
              ) : (
                <Check className="h-6 w-6 text-green-600" />
              )}
              <div>
                <p className="font-semibold capitalize">{results.riskLevel} Risk Level</p>
                <p className="text-sm text-muted-foreground">
                  {results.riskLevel === 'high' ? 'Immediate action recommended' :
                   results.riskLevel === 'medium' ? 'Monitor and address soon' :
                   'Your flooring setup looks good'}
                </p>
              </div>
            </div>

            {results.issues.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Issues Identified:</h4>
                <ul className="space-y-1">
                  {results.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.recommendations.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Recommendations:</h4>
                <ul className="space-y-1">
                  {results.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                      {rec}
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
const ChickenCoopFlooringGuide = () => {
  const article = getArticleBySlug('chicken-coop-flooring-guide');

  const flooringOptions = [
    {
      name: 'Dirt/Earth Floor',
      pros: ['Free', 'Natural drainage', 'Chickens can dust bathe', 'Easy deep litter'],
      cons: ['Predator risk (digging)', 'Muddy when wet', 'Hard to sanitize', 'Parasites can persist'],
      bestFor: 'Large rural coops with good drainage',
      cost: '$0',
      durability: '∞',
    },
    {
      name: 'Plywood Floor',
      pros: ['Affordable', 'Easy to install', 'Good insulation', 'Smooth surface'],
      cons: ['Rots if wet', 'Absorbs moisture/odors', 'Needs sealing', 'Replace every 5-10 years'],
      bestFor: 'Elevated coops, dry climates',
      cost: '$1-2/sq ft',
      durability: '5-10 years',
    },
    {
      name: 'Linoleum over Wood',
      pros: ['Waterproof', 'Easy to clean', 'Seals wood beneath', 'Inexpensive upgrade'],
      cons: ['Can tear', 'Slippery if wet', 'Needs secure edges', 'Not as durable'],
      bestFor: 'Any coop wanting easy cleanup',
      cost: '$2-3/sq ft',
      durability: '10-15 years',
    },
    {
      name: 'Concrete Slab',
      pros: ['Predator-proof', 'Lasts forever', 'Easy to sanitize', 'No rot or pests'],
      cons: ['Expensive upfront', 'Cold in winter', 'Hard on feet', 'Permanent'],
      bestFor: 'Permanent coops, predator-heavy areas',
      cost: '$5-8/sq ft',
      durability: '50+ years',
    },
    {
      name: 'Hardware Cloth Floor',
      pros: ['Excellent drainage', 'Droppings fall through', 'Good ventilation', 'Elevated design'],
      cons: ['Hard on feet', 'Cold drafts', 'Needs bedding', 'Can cause bumblefoot'],
      bestFor: 'Hot climates, tractors, temporary setups',
      cost: '$2-4/sq ft',
      durability: '15-20 years',
    },
    {
      name: 'Rubber Stall Mats',
      pros: ['Cushioned', 'Waterproof', 'Durable', 'Easy to clean'],
      cons: ['Heavy', 'Expensive', 'Can slide', 'May retain heat'],
      bestFor: 'Over concrete, high-traffic areas',
      cost: '$3-5/sq ft',
      durability: '10-20 years',
    },
  ];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      {/* Introduction */}
      <p className="lead text-lg text-muted-foreground mb-6">
        Your coop's flooring impacts everything from daily cleaning time to your flock's long-term health. 
        This guide breaks down every flooring option with real costs, maintenance requirements, and the health 
        implications most guides ignore. Use our three interactive tools to find the perfect flooring for your situation.
      </p>

      {/* Quick Comparison Table */}
      <section id="comparison" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Flooring Options at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-accent">
                <th className="p-3 text-left font-semibold">Material</th>
                <th className="p-3 text-left font-semibold">Cost</th>
                <th className="p-3 text-left font-semibold">Durability</th>
                <th className="p-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {flooringOptions.map((option, i) => (
                <tr key={i} className="border-b hover:bg-accent/50">
                  <td className="p-3 font-medium">{option.name}</td>
                  <td className="p-3">{option.cost}</td>
                  <td className="p-3">{option.durability}</td>
                  <td className="p-3">{option.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Estimator Tool */}
      <section id="cost-tool">
        <h2 className="text-2xl font-bold mb-4">Calculate Your Flooring Costs</h2>
        <p className="text-muted-foreground mb-4">
          Don't just look at upfront costs—factor in bedding, maintenance, and replacement over 5 years.
        </p>
        <FlooringCostEstimator />
      </section>

      {/* Detailed Breakdown */}
      <section id="detailed-options" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Detailed Flooring Breakdown</h2>
        <div className="grid gap-6">
          {flooringOptions.map((option, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="bg-accent/30 pb-3">
                <CardTitle className="text-lg">{option.name}</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">{option.cost}</Badge>
                  <Badge variant="secondary">{option.durability}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {option.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm bg-primary/5 p-2 rounded">
                  <strong>Best for:</strong> {option.bestFor}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cleaning Planner Tool */}
      <section id="cleaning-tool">
        <h2 className="text-2xl font-bold mb-4">Plan Your Cleaning Schedule</h2>
        <p className="text-muted-foreground mb-4">
          Different flooring requires different maintenance. Get a customized schedule based on your setup.
        </p>
        <CleaningSchedulePlanner />
      </section>

      {/* Bedding Pairings */}
      <section id="bedding" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Best Bedding for Each Floor Type</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">Pine Shavings</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Best on: Plywood, Linoleum, Concrete</p>
            <p className="text-sm">Absorbent, affordable, composting-friendly. Avoid cedar (toxic oils).</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <ThermometerSun className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Sand</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Best on: Concrete, Dirt (covered areas)</p>
            <p className="text-sm">Scoopable, low odor, cool in summer. Use construction-grade, not play sand.</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold">Deep Litter</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Best on: Dirt, Concrete (with bedding base)</p>
            <p className="text-sm">Low maintenance, generates heat, builds compost. Requires good ventilation.</p>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <h3 className="font-semibold">Straw</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Best on: Dirt, Plywood</p>
            <p className="text-sm">Insulating, cheap, but mats easily and can harbor mites. Change frequently.</p>
          </Card>
        </div>
      </section>

      {/* Health Risk Checker Tool */}
      <section id="health-tool">
        <h2 className="text-2xl font-bold mb-4">Check for Flooring Health Risks</h2>
        <p className="text-muted-foreground mb-4">
          Answer a few questions to identify potential health issues related to your current flooring setup.
        </p>
        <HealthRiskChecker />
      </section>

      {/* Climate Considerations */}
      <section id="climate" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Climate-Specific Recommendations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3">Hot & Humid Climates</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5" />
                <span><strong>Best:</strong> Concrete or hardware cloth with sand</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5" />
                <span><strong>Avoid:</strong> Unsealed wood (rots fast), deep litter (mold risk)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <span><strong>Key:</strong> Prioritize drainage and airflow over insulation</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold text-lg mb-3">Cold Winter Climates</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-600 mt-0.5" />
                <span><strong>Best:</strong> Insulated wood or concrete with rubber mats</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-500 mt-0.5" />
                <span><strong>Avoid:</strong> Bare concrete (too cold), wire floors (drafts)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <span><strong>Key:</strong> Deep litter generates warmth; add extra bedding in winter</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Can I use carpet or rugs as coop flooring?',
              a: 'No. Carpet absorbs moisture, harbors bacteria, is impossible to clean properly, and will quickly become a health hazard. It\'s one of the worst choices for coop flooring.',
            },
            {
              q: 'How often should I completely replace bedding?',
              a: 'It depends on your method. Traditional bedding: monthly. Deep litter: 1-2x per year. Sand: top-up as needed, replace annually. Watch for ammonia smell as your guide.',
            },
            {
              q: 'Is pressure-treated wood safe for coop floors?',
              a: 'Modern ACQ-treated wood is considered safe for indirect contact. Cover with linoleum or paint as extra protection. Avoid old CCA-treated lumber.',
            },
            {
              q: 'What\'s the minimum bedding depth?',
              a: 'At least 3-4 inches for wood shavings or straw. For deep litter, start with 6 inches and build to 12+ inches. Sand floors need 3-4 inches.',
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
          <Link to="/guides/coop-materials-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Materials Guide</h3>
            <p className="text-sm text-muted-foreground">Best materials for walls, roofing, and more</p>
          </Link>
          <Link to="/guides/predator-proof-coop-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Predator-Proofing</h3>
            <p className="text-sm text-muted-foreground">Protect against digging predators</p>
          </Link>
          <Link to="/guides/coop-ventilation-guide" className="block p-4 border rounded-lg hover:bg-accent/50 transition-colors">
            <h3 className="font-semibold">Ventilation Guide</h3>
            <p className="text-sm text-muted-foreground">Control moisture and ammonia</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="my-12 bg-primary/10 rounded-xl p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Ready to Build Your Coop?</h2>
        <p className="text-muted-foreground mb-4">
          Get proven coop plans with detailed flooring specifications and material lists.
        </p>
        <Link to="/recommended-plans">
          <Button size="lg">View Recommended Plans</Button>
        </Link>
      </section>
    </BlogLayout>
  );
};

export default ChickenCoopFlooringGuide;
