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
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, Calendar, AlertTriangle, CheckCircle, Clock, Wind, Droplets, Bug, Printer } from 'lucide-react';
import heroImage from '@/assets/guide-cleaning.jpg';

// Tool 1: Cleaning Schedule Builder
const CleaningScheduleBuilder = () => {
  const [birdCount, setBirdCount] = useState('6');
  const [coopFeel, setCoopFeel] = useState('okay');
  const [ventilation, setVentilation] = useState('medium');
  const [beddingMethod, setBeddingMethod] = useState('spot');
  const [result, setResult] = useState<{
    daily: string[];
    weekly: string[];
    monthly: string[];
    seasonal: string[];
    notes: string[];
    intensity: string;
  } | null>(null);

  const buildSchedule = () => {
    const birds = parseInt(birdCount) || 6;
    
    // Calculate intensity score
    let score = 0;
    if (birds > 10) score += 2;
    else if (birds > 6) score += 1;
    
    if (coopFeel === 'tight') score += 2;
    else if (coopFeel === 'okay') score += 1;
    
    if (ventilation === 'low') score += 2;
    else if (ventilation === 'medium') score += 1;

    const daily = [
      'Remove obvious wet spots (especially near water)',
      'Quick nest box reset (remove clumps, fluff bedding)',
      'Check water for leaks/spills; refill cleanly',
      'Sweep up spilled feed (rodent control)',
    ];

    const weekly = [
      'Scrape under-roost manure and corner buildup',
      beddingMethod === 'deep' ? 'Stir litter and add dry carbon material' : 'Top off bedding in thinning areas',
      'Clean waterers (scrub biofilm)',
      'Quick mite check at roost ends/cracks',
    ];

    const monthly = [
      'Replace the dirtiest bedding sections completely',
      'Wipe perches/ledges and inspect roost mounts',
      'Inspect vents/airflow and clear dust buildup',
      'Check latches/door thresholds for gaps and rodents',
    ];

    const seasonal = [
      'Major bedding removal/reset + dry scrape + wipe/wash surfaces',
      'Dry thoroughly, then re-bed with fresh dry material',
      'Repair cracks/leaks and tighten hardware',
      'Reset dust bath and inspect for parasites',
    ];

    const notes: string[] = [];
    let intensity = 'Balanced';

    if (score >= 5) {
      intensity = 'High Maintenance';
      notes.push('Your conditions require more frequent attention. Consider increasing weekly tasks to 2x/week.');
      notes.push('Prioritize ventilation improvements if possible.');
      weekly.push('Consider twice-weekly roost scraping');
    } else if (score >= 3) {
      intensity = 'Balanced';
      notes.push('Standard schedule should work well. Stay consistent!');
    } else {
      intensity = 'Low Maintenance';
      notes.push('Great conditions! You may be able to extend weekly tasks slightly.');
    }

    if (beddingMethod === 'deep') {
      notes.push('Deep litter requires weekly stirring. If it smells or stays wet, reset sooner.');
    }

    if (ventilation === 'low') {
      notes.push('Low ventilation increases ammonia risk. Open vents when safe and check wetness more often.');
    }

    setResult({ daily, weekly, monthly, seasonal, notes, intensity });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Cleaning Schedule Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">Build a routine matched to your flock size, coop conditions, and bedding method.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bird-count">Number of birds</Label>
          <Input id="bird-count" type="number" min="1" max="50" value={birdCount} onChange={(e) => setBirdCount(e.target.value)} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label>Coop feels</Label>
            <RadioGroup value={coopFeel} onValueChange={setCoopFeel} className="space-y-1">
              {[
                { value: 'tight', label: 'Tight (crowded)' },
                { value: 'okay', label: 'Okay' },
                { value: 'roomy', label: 'Roomy' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`feel-${opt.value}`} />
                  <Label htmlFor={`feel-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Ventilation</Label>
            <RadioGroup value={ventilation} onValueChange={setVentilation} className="space-y-1">
              {[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`vent-${opt.value}`} />
                  <Label htmlFor={`vent-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Bedding method</Label>
            <RadioGroup value={beddingMethod} onValueChange={setBeddingMethod} className="space-y-1">
              {[
                { value: 'spot', label: 'Spot-clean + refresh' },
                { value: 'deep', label: 'Deep litter' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`bed-${opt.value}`} />
                  <Label htmlFor={`bed-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <Button onClick={buildSchedule} className="w-full">
          <Calendar className="mr-2 h-4 w-4" />
          Build Schedule
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant={result.intensity === 'High Maintenance' ? 'destructive' : result.intensity === 'Balanced' ? 'default' : 'secondary'}>
                {result.intensity}
              </Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Daily Tasks (5 min)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-1">
                    {result.daily.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Weekly Tasks (15-30 min)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-1">
                    {result.weekly.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-blue-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Monthly Tasks (30-60 min)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-1">
                    {result.monthly.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-amber-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Seasonal Tasks (Spring/Fall)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs space-y-1">
                    {result.seasonal.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-purple-500 mt-0.5 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {result.notes.length > 0 && (
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Notes for Your Setup</AlertTitle>
                <AlertDescription>
                  <ul className="mt-2 space-y-1">
                    {result.notes.map((note, i) => (
                      <li key={i} className="text-sm">• {note}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Tool 2: Bedding & Ammonia Risk Checker
const AmmoniaRiskChecker = () => {
  const [beddingCondition, setBeddingCondition] = useState('dry');
  const [ammoniaSmell, setAmmoniaSmell] = useState('no');
  const [weather, setWeather] = useState('dry');
  const [result, setResult] = useState<{
    riskLevel: 'low' | 'medium' | 'high';
    actions: string[];
    explanation: string;
  } | null>(null);

  const checkRisk = () => {
    let score = 0;
    
    if (beddingCondition === 'wet') score += 3;
    else if (beddingCondition === 'damp') score += 1;
    
    if (ammoniaSmell === 'yes') score += 3;
    else if (ammoniaSmell === 'little') score += 1;
    
    if (weather === 'rainy') score += 2;
    else if (weather === 'cold') score += 1;

    let riskLevel: 'low' | 'medium' | 'high' = 'low';
    let explanation = '';
    const actions: string[] = [];

    if (score >= 5) {
      riskLevel = 'high';
      explanation = 'High risk. Your birds are breathing harmful ammonia. Take action today.';
      actions.push('Remove wet bedding immediately—do not just add on top');
      actions.push('Increase ventilation (open vents, check for blocked airflow)');
      actions.push('Replace with dry carbon bedding (wood shavings, straw)');
      actions.push('Fix water leaks or drainage issues');
      actions.push('Consider a partial or full clean-out if problem persists');
    } else if (score >= 2) {
      riskLevel = 'medium';
      explanation = 'Moderate risk. Conditions could worsen quickly. Stay proactive.';
      actions.push('Remove damp spots and replace with dry bedding');
      actions.push('Check ventilation—ensure air can flow without drafts on roosts');
      actions.push('Monitor daily for worsening smell');
      actions.push('Stir bedding if using deep litter method');
    } else {
      riskLevel = 'low';
      explanation = 'Low risk. Conditions are healthy. Maintain your current routine.';
      actions.push('Continue regular spot-cleaning');
      actions.push('Keep waterers stable to prevent spills');
      actions.push('Weekly bedding top-off as needed');
    }

    setResult({ riskLevel, actions, explanation });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wind className="h-5 w-5 text-amber-500" />
          Bedding & Ammonia Risk Checker
        </CardTitle>
        <p className="text-sm text-muted-foreground">Assess your current conditions and get next actions.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label>Bedding condition</Label>
            <RadioGroup value={beddingCondition} onValueChange={setBeddingCondition} className="space-y-1">
              {[
                { value: 'dry', label: 'Dry' },
                { value: 'damp', label: 'Some damp spots' },
                { value: 'wet', label: 'Wet / soggy' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`bed-cond-${opt.value}`} />
                  <Label htmlFor={`bed-cond-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Ammonia smell?</Label>
            <RadioGroup value={ammoniaSmell} onValueChange={setAmmoniaSmell} className="space-y-1">
              {[
                { value: 'no', label: 'No' },
                { value: 'little', label: 'A little' },
                { value: 'yes', label: 'Yes' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`amm-${opt.value}`} />
                  <Label htmlFor={`amm-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label>Weather conditions</Label>
            <RadioGroup value={weather} onValueChange={setWeather} className="space-y-1">
              {[
                { value: 'dry', label: 'Dry season' },
                { value: 'cold', label: 'Cold/wet winter' },
                { value: 'rainy', label: 'Rainy/humid season' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`weather-${opt.value}`} />
                  <Label htmlFor={`weather-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <Button onClick={checkRisk} className="w-full">
          <Droplets className="mr-2 h-4 w-4" />
          Check Risk
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <Alert className={
              result.riskLevel === 'high' ? 'border-red-500 bg-red-500/10' :
              result.riskLevel === 'medium' ? 'border-amber-500 bg-amber-500/10' :
              'border-green-500 bg-green-500/10'
            }>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle className="flex items-center gap-2">
                <Badge variant={result.riskLevel === 'high' ? 'destructive' : result.riskLevel === 'medium' ? 'outline' : 'secondary'}>
                  {result.riskLevel.toUpperCase()} RISK
                </Badge>
              </AlertTitle>
              <AlertDescription>{result.explanation}</AlertDescription>
            </Alert>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Recommended Actions</h4>
              <ul className="space-y-1">
                {result.actions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {action}
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

// Tool 3: Deep-Clean Checklist Generator
const DeepCleanChecklist = () => {
  const [features, setFeatures] = useState<string[]>([]);
  const [mainIssue, setMainIssue] = useState('routine');
  const [result, setResult] = useState<{
    prep: string[];
    clean: string[];
    finish: string[];
    extras: string[];
  } | null>(null);

  const featureOptions = [
    { id: 'droppings', label: 'Droppings board' },
    { id: 'external', label: 'External nest boxes' },
    { id: 'removable', label: 'Removable roosts' },
    { id: 'run', label: 'Attached run' },
    { id: 'sand', label: 'Sand in run/coop' },
    { id: 'wood', label: 'Wood interior (cracks possible)' },
  ];

  const toggleFeature = (id: string) => {
    setFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const generateChecklist = () => {
    const prep = [
      'Move birds to temporary pen/run',
      'Remove feeders and waterers',
      'Remove all bedding (bag for disposal or compost)',
    ];

    const clean = [
      'Dry scrape caked manure first (easier than wet)',
      'Scrape roost bars and perches thoroughly',
      'Wipe/scrub nest boxes and remove old bedding',
      'Sweep or scrape floor surface',
      'Wipe walls and corners with damp cloth',
    ];

    const finish = [
      'Let everything dry completely before re-bedding',
      'Add fresh dry bedding (wood shavings, straw, etc.)',
      'Replace clean feeders and waterers',
      'Return birds once fully dry',
    ];

    const extras: string[] = [];

    // Add based on features
    if (features.includes('droppings')) {
      clean.push('Remove and scrape droppings board thoroughly');
    }
    if (features.includes('external')) {
      clean.push('Clean external nest box access doors and ledges');
    }
    if (features.includes('removable')) {
      clean.push('Remove roosts completely and clean attachment points');
    }
    if (features.includes('run')) {
      extras.push('Rake and refresh run bedding');
      extras.push('Check run fencing for damage');
    }
    if (features.includes('sand')) {
      extras.push('Rake and sift sand to remove waste');
      extras.push('Top off with fresh sand if level is low');
    }
    if (features.includes('wood')) {
      extras.push('Inspect all wood seams and cracks for mites');
      extras.push('Consider treating cracks with food-safe sealant');
    }

    // Add based on main issue
    if (mainIssue === 'odor') {
      extras.push('Focus on wet spots—find and fix the moisture source');
      extras.push('Check ventilation openings for blockages');
      extras.push('Consider lime or PDZ in problem areas after drying');
    } else if (mainIssue === 'mites') {
      extras.push('Inspect roost ends and cracks with flashlight');
      extras.push('Treat cracks and roost joints after cleaning');
      extras.push('Consider diatomaceous earth in crevices');
      extras.push('Check birds for mites/lice during deep clean');
    } else if (mainIssue === 'flies') {
      extras.push('Remove ALL wet organic material');
      extras.push('Fix water leaks and drainage issues');
      extras.push('Consider fly traps and fresh herbs');
    } else if (mainIssue === 'rodents') {
      extras.push('Seal all gaps larger than 1/4 inch');
      extras.push('Check door thresholds and corners');
      extras.push('Remove feed overnight; use rodent-proof containers');
      extras.push('Inspect for burrow holes in floor/walls');
    }

    setResult({ prep, clean, finish, extras });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          Deep-Clean Checklist Generator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Create a customized deep-clean checklist based on your coop features.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Select coop features</Label>
          <div className="grid grid-cols-2 gap-2">
            {featureOptions.map((opt) => (
              <div key={opt.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`feat-${opt.id}`} 
                  checked={features.includes(opt.id)}
                  onCheckedChange={() => toggleFeature(opt.id)}
                />
                <Label htmlFor={`feat-${opt.id}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Main issue</Label>
          <RadioGroup value={mainIssue} onValueChange={setMainIssue} className="flex flex-wrap gap-4">
            {[
              { value: 'routine', label: 'Routine reset' },
              { value: 'odor', label: 'Odor / ammonia' },
              { value: 'mites', label: 'Mites/lice concern' },
              { value: 'flies', label: 'Flies / wet litter' },
              { value: 'rodents', label: 'Rodent pressure' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`issue-${opt.value}`} />
                <Label htmlFor={`issue-${opt.value}`} className="cursor-pointer text-sm">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={generateChecklist} className="w-full">
          <Printer className="mr-2 h-4 w-4" />
          Generate Checklist
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">1. Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {result.prep.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">2. Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {result.clean.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">3. Finishing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  {result.finish.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {result.extras.length > 0 && (
              <Card className="border-primary/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Issue-Specific Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    {result.extras.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Bug className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Order Matters</AlertTitle>
              <AlertDescription>
                Dry scrape first, then wipe/wash. It's faster and less messy.
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ChickenCoopCleaningGuide = () => {
  const article = {
    id: 'chicken-coop-cleaning-guide',
    slug: 'chicken-coop-cleaning-guide',
    title: 'Chicken Coop Cleaning Schedule: Maintenance Made Simple (2025)',
    excerpt: 'Complete chicken coop cleaning schedule with daily, weekly, monthly, and seasonal tasks. Includes 3 interactive tools: Schedule Builder, Ammonia Risk Checker, and Deep-Clean Checklist Generator.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Coop Maintenance Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 25,
    category: 'Care' as const,
    tags: ['Cleaning', 'Maintenance', 'Health', 'Ammonia', 'Bedding'],
    difficulty: 'Beginner' as const,
    costRange: '$20-$100/year',
    featured: true,
    image: heroImage,
  };

  return (
    <BlogLayout article={article}>
      <p className="lead text-lg text-muted-foreground mb-6">
        The easiest way to stay on top of chicken coop cleaning is to stop thinking in "big clean-outs" and start thinking in tiny routines. Five minutes daily prevents wet litter and ammonia. A short weekly reset prevents buildup under roosts. A seasonal deep-clean fixes the stuff you can't see: cracks, mites, and hidden moisture.
      </p>

      <Alert className="mb-6 border-primary/30">
        <Droplets className="h-4 w-4" />
        <AlertTitle>Non-Negotiable</AlertTitle>
        <AlertDescription>
          Odor comes from moisture + waste. Keep it dry, and you've solved 80% of coop problems.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive" className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Trigger Rule</AlertTitle>
        <AlertDescription>
          If you smell ammonia when you open the coop, clean today. Your birds are breathing that all night.
        </AlertDescription>
      </Alert>

      {/* Cleaning Principles */}
      <section id="principles" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Cleaning Principles (What Matters Most)</h2>
        <p className="mb-4">
          A "clean coop" is not a spotless coop. It's a coop that stays dry, doesn't trap ammonia, and doesn't let parasites build up. Before you copy any schedule, lock in these principles:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-red-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                What Causes Most Coop Problems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Wet litter:</strong> water spills, roof leaks, poor drainage, condensation</li>
                <li>• <strong>Manure hotspots:</strong> under roosts and in corners</li>
                <li>• <strong>Poor airflow:</strong> moisture and ammonia don't leave</li>
                <li>• <strong>Hidden cracks:</strong> mites and lice live there, not in "open space"</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                What "Good Maintenance" Looks Like
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Wet spots removed quickly and replaced with dry carbon bedding</li>
                <li>• Under-roost area stays manageable (scraped weekly)</li>
                <li>• Nest boxes stay fresh so eggs stay clean</li>
                <li>• Seasonal resets catch parasites before they explode</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Daily Tasks */}
      <section id="daily" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Daily Chicken Coop Cleaning Tasks (5 Minutes)</h2>
        <p className="mb-4">
          Daily tasks are "preventive maintenance." You're not cleaning the entire coop—you're removing the conditions that turn into smell and sickness.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Task</th>
                <th className="text-left p-3 font-semibold">How to Do It Fast</th>
                <th className="text-left p-3 font-semibold">Health Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Wet spot removal</td>
                <td className="p-3">Scoop out damp bedding near waterers/corners; replace with dry</td>
                <td className="p-3">Wet waste drives ammonia and bacterial growth</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Nest box reset</td>
                <td className="p-3">Remove manure clumps; fluff bedding; remove broken eggs</td>
                <td className="p-3">Cleaner eggs; less bacteria load in nests</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Quick roost zone glance</td>
                <td className="p-3">Spot scrape if buildup is obvious; don't let it cake</td>
                <td className="p-3">Roost area is the #1 manure hotspot</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Water sanity check</td>
                <td className="p-3">Fix leaks/spills immediately; keep water clean</td>
                <td className="p-3">Spills create the worst wet litter zones</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Feed spill sweep</td>
                <td className="p-3">Remove spilled feed and close feed bins</td>
                <td className="p-3">Reduces rodents and flies</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Fastest Win</p>
          <p className="text-sm text-muted-foreground">Put water on a stable base and keep it from spilling. It cuts cleaning in half.</p>
        </div>
      </section>

      {/* Weekly Tasks */}
      <section id="weekly" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Weekly Tasks (15–30 Minutes)</h2>
        <p className="mb-4">
          Weekly cleaning prevents manure from hardening into "cement," keeps bedding dry, and keeps parasite pressure low. This is the routine that keeps your coop from ever becoming a disaster.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Weekly Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Scrape under-roost manure and corner buildup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Refresh bedding where it's thinning or damp-prone</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Clean waterers (biofilm scrub) and refill fresh</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Wipe roost bars/ledges if manure is caking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Quick mite check at roost ends and cracks</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Weekly Red Flags</AlertTitle>
          <AlertDescription>
            <ul className="mt-2 space-y-1 text-sm">
              <li>• <strong>Ammonia smell</strong> = increase airflow and remove wet litter immediately</li>
              <li>• <strong>Constant wet bedding</strong> = water station problem or roof/drainage problem</li>
              <li>• <strong>Dirty eggs</strong> = nest boxes need more frequent bedding refresh</li>
            </ul>
          </AlertDescription>
        </Alert>
      </section>

      {/* Monthly Tasks */}
      <section id="monthly" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Monthly Tasks (30–60 Minutes)</h2>
        <p className="mb-4">
          Monthly tasks are where you prevent slow creep problems: hidden damp pockets, parasite hideouts, and hardware that loosens. Many "mystery illnesses" start with a coop that gradually stopped staying dry.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Partial bedding replacement:</strong> remove the dirtiest areas fully and reset with fresh dry bedding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Nest box refresh:</strong> replace nest bedding completely and wipe surfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Vent/airflow check:</strong> clear dust buildup and confirm air can move without drafts on roosts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Door/latch inspection:</strong> tighten hardware, check gaps, prevent rodent entry</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Crack inspection:</strong> look for parasite hideouts; tighten/repair loose trim and roost mounts</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Pro Move</p>
          <p className="text-sm text-muted-foreground">Choose one "monthly maintenance day" and keep it consistent. Consistency beats intensity.</p>
        </div>
      </section>

      {/* Seasonal Deep-Clean */}
      <section id="seasonal" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Seasonal Deep-Clean (Spring/Fall)</h2>
        <p className="mb-4">
          Seasonal deep-cleaning is a reset: remove accumulated waste, clean surfaces, fix hidden issues, and restart with clean bedding. Many keepers do this in spring and fall, but humidity, rainfall, and bedding method can change your timing.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Deep-Clean Steps (Simple Order)</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">1</Badge>
                <span>Move birds to a safe temporary pen/run</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">2</Badge>
                <span>Remove bedding (or remove most of it if deep litter is still healthy)</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">3</Badge>
                <span>Dry scrape first (caked manure comes off easier dry)</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">4</Badge>
                <span>Wash/wipe surfaces (roosts, nest boxes, floor, walls)</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">5</Badge>
                <span>Dry thoroughly before re-bedding</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">6</Badge>
                <span>Inspect and repair cracks, leaks, and latches</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">7</Badge>
                <span>Reset bedding with fresh dry carbon material</span>
              </li>
              <li className="flex items-start gap-2">
                <Badge variant="outline" className="mt-0.5">8</Badge>
                <span>Inspect for mites/lice and reset dust bath areas</span>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Alert>
          <Wind className="h-4 w-4" />
          <AlertTitle>Don't Skip Drying Time</AlertTitle>
          <AlertDescription>
            Trapping moisture after a deep-clean can create worse ammonia and mold pressure than before.
          </AlertDescription>
        </Alert>
      </section>

      {/* Health Considerations */}
      <section id="health" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Health Considerations (Ammonia, Dust, Parasites)</h2>
        <p className="mb-4">
          The health risks tied to poor coop cleaning are mostly environmental: ammonia, dampness, dust overload, and parasites. The cleaning schedule is about reducing those exposures.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Wind className="h-5 w-5 text-amber-500" />
                Ammonia
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Ammonia forms when waste breaks down in wet conditions. Even if a coop "looks fine," ammonia can build in cold, closed conditions. If you smell it, take action immediately: remove wet litter and improve airflow.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                Dust
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Dry bedding reduces ammonia but can increase dust. The fix is not "make it wet." The fix is balanced bedding choice, good ventilation, and avoiding super-powdery materials.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bug className="h-5 w-5 text-red-500" />
                Parasites
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p>Mites and lice hide in cracks and roost joints. Cleaning removes habitat, but you also want smooth surfaces, tight seams, and regular inspections of roost ends and corners.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bedding Methods */}
      <section id="bedding" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Bedding Methods and How They Change Schedules</h2>
        <p className="mb-4">
          Your bedding plan determines your workload. Two common approaches:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Spot-Clean + Refresh (Beginner-Friendly)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Daily:</strong> remove wet spots and obvious messes</li>
                <li><strong>Weekly:</strong> scrape roost zone and top off bedding</li>
                <li><strong>Seasonal:</strong> full clean-out/reset</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Deep Litter Method (Works When Managed)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li><strong>Weekly:</strong> stir litter and add dry "carbon" material</li>
                <li><strong>Monthly:</strong> remove compacted wet zones</li>
                <li><strong>Reset when needed:</strong> don't force it if it gets wet or smelly</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Deep Litter Warning</AlertTitle>
          <AlertDescription>
            If it's damp and smells, it's not "deep litter"—it's just wet waste. Reset sooner and fix the moisture source.
          </AlertDescription>
        </Alert>
      </section>

      {/* Design Upgrades */}
      <section id="upgrades" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Design Upgrades That Cut Cleaning Time</h2>
        <p className="mb-4">
          If you're designing or upgrading your coop, these features reduce cleaning effort more than any product:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Droppings board under roosts:</strong> scrape a flat board instead of digging through bedding</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Removable roosts:</strong> pull, scrape, return. Easy inspections for mites</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Easy-access doors:</strong> if you can step in, you'll actually clean</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>External nest boxes:</strong> faster bedding swaps and egg collection</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span><strong>Stable water station:</strong> fewer spills = less ammonia</span>
          </li>
        </ul>

        <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
          <p className="font-medium">If You Only Build One Upgrade</p>
          <p className="text-sm text-muted-foreground">Droppings board. It turns cleaning from a chore into a 2-minute scrape.</p>
        </div>
      </section>

      {/* Interactive Tools */}
      <section id="tools" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Tools: Build Your Cleaning Schedule</h2>
        <p className="mb-6">
          Use these to customize your cleaning routine, check your current risk level, and generate a deep-clean checklist.
        </p>

        <CleaningScheduleBuilder />
        <AmmoniaRiskChecker />
        <DeepCleanChecklist />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How often should I do a full clean-out?</AccordionTrigger>
            <AccordionContent>
              Many coops do best with seasonal full clean-outs (spring/fall), but "when needed" is more accurate. If wetness or ammonia won't stabilize with spot cleaning, do a reset sooner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Can I disinfect the coop every week?</AccordionTrigger>
            <AccordionContent>
              Weekly disinfecting is usually overkill and can disrupt beneficial microbes. Save disinfectants for deep-cleans or after illness. Regular dry cleaning and good ventilation are usually enough.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>How do I keep eggs cleaner?</AccordionTrigger>
            <AccordionContent>
              Keep nest boxes fresh, prevent sleeping in nest boxes (roosts should be higher), and remove clumps daily. Clean eggs start with clean nests.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>What's the best bedding for easy cleaning?</AccordionTrigger>
            <AccordionContent>
              Large flake pine shavings are popular because they absorb well and are easy to spot-clean. Sand works well in runs and some coops but requires different maintenance. Avoid cedar (aromatic oils) and dusty materials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>How do I reduce coop smell?</AccordionTrigger>
            <AccordionContent>
              Remove wet spots daily, improve ventilation, and don't let manure cake under roosts. Smell is almost always a moisture + waste problem, not a "need more products" problem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
        <p className="mb-4">
          A simple chicken coop cleaning schedule is: <strong>daily wet-spot removal and nest resets</strong>, <strong>weekly roost-zone scraping and waterer cleaning</strong>, <strong>monthly inspection resets</strong>, and a <strong>seasonal deep-clean</strong>. If you keep the coop dry and ventilated, you'll prevent most health issues before they start.
        </p>

        <Alert className="mb-4">
          <Calendar className="h-4 w-4" />
          <AlertTitle>Next Step</AlertTitle>
          <AlertDescription>
            Use the Schedule Builder above and print it. Then cleaning becomes automatic.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Safety Note</AlertTitle>
          <AlertDescription>
            Dust and ammonia can irritate lungs. Consider a dust mask during deep-cleaning and always let the coop dry before re-bedding.
          </AlertDescription>
        </Alert>
      </section>
    </BlogLayout>
  );
};

export default ChickenCoopCleaningGuide;
