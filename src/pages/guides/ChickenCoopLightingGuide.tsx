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
import { Sun, Lightbulb, Clock, Zap, AlertTriangle, CheckCircle, XCircle, DollarSign, Timer } from 'lucide-react';
import heroImage from '@/assets/guide-lighting.jpg';

// Tool 1: Daylight & Lay Planner
const DaylightLayPlanner = () => {
  const [naturalDaylight, setNaturalDaylight] = useState('10');
  const [targetLight, setTargetLight] = useState('14');
  const [molting, setMolting] = useState('no');
  const [result, setResult] = useState<{
    supplementNeeded: number;
    recommendation: string;
    actions: string[];
    cautions: string[];
  } | null>(null);

  const planLight = () => {
    const natural = parseFloat(naturalDaylight) || 10;
    const target = parseFloat(targetLight) || 14;
    const supplementNeeded = Math.max(0, target - natural);

    let recommendation = '';
    const actions: string[] = [];
    const cautions: string[] = [];

    if (molting === 'yes') {
      recommendation = 'Hold off on supplemental lighting. Many birds are molting, and adding light during a heavy molt can stress birds without reliably boosting production.';
      actions.push('Wait until molt finishes before adding light.');
      actions.push('Focus on nutrition (extra protein) during molt.');
      cautions.push('Light won\'t override a heavy molt reliably.');
    } else if (supplementNeeded === 0) {
      recommendation = 'No supplemental light needed. Your natural daylight already meets or exceeds your target.';
      actions.push('Maintain good coop ventilation and comfort.');
      actions.push('Monitor production naturally through the season.');
    } else if (supplementNeeded <= 2) {
      recommendation = `Add ${supplementNeeded.toFixed(1)} hours of supplemental light. This is a modest extension that should support laying without major stress.`;
      actions.push('Add light in the morning (preferred) so dusk remains natural.');
      actions.push('Use a timer for consistency and keep a dark period at night.');
      actions.push('Use an LED bulb in a guarded, outdoor-rated fixture.');
    } else if (supplementNeeded <= 4) {
      recommendation = `Add ${supplementNeeded.toFixed(1)} hours of supplemental light. This is a moderate extension—use a consistent schedule.`;
      actions.push('Add light in the morning (preferred) so dusk remains natural.');
      actions.push('Use a timer for consistency and keep a dark period at night.');
      actions.push('Use an LED bulb in a guarded, outdoor-rated fixture.');
      cautions.push('Keep windows/vents bright during the day and maintain a consistent routine.');
    } else {
      recommendation = `Add ${supplementNeeded.toFixed(1)} hours of supplemental light. Consider gradually stepping up over 7–10 days to avoid abrupt routine changes.`;
      actions.push('Add light in the morning (preferred) so dusk remains natural.');
      actions.push('Use a timer for consistency and keep a dark period at night.');
      actions.push('Use an LED bulb in a guarded, outdoor-rated fixture.');
      cautions.push('You\'re adding a lot of light. Gradually increase over 7–10 days.');
      cautions.push('Keep windows/vents bright during the day and maintain a consistent routine.');
    }

    if (molting === 'some') {
      cautions.push('Some birds are molting—they may not respond to supplemental light until molt finishes.');
    }

    setResult({ supplementNeeded, recommendation, actions, cautions });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-5 w-5 text-amber-500" />
          Daylight & Lay Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">Helps decide whether you need supplemental light and how much to add.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="natural-daylight">Current natural daylight (hours)</Label>
            <Input
              id="natural-daylight"
              type="number"
              min="6"
              max="18"
              step="0.5"
              value={naturalDaylight}
              onChange={(e) => setNaturalDaylight(e.target.value)}
              placeholder="e.g., 10"
            />
          </div>
          <div className="space-y-2">
            <Label>Target total light (hours)</Label>
            <RadioGroup value={targetLight} onValueChange={setTargetLight} className="flex flex-wrap gap-2">
              {[
                { value: '13', label: '13h (gentle)' },
                { value: '14', label: '14h (common)' },
                { value: '15', label: '15h (strong)' },
                { value: '16', label: '16h (upper end)' },
              ].map((opt) => (
                <div key={opt.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={opt.value} id={`target-${opt.value}`} />
                  <Label htmlFor={`target-${opt.value}`} className="text-sm cursor-pointer">{opt.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Are many birds molting right now?</Label>
          <RadioGroup value={molting} onValueChange={setMolting} className="flex gap-4">
            {[
              { value: 'no', label: 'No' },
              { value: 'some', label: 'Some' },
              { value: 'yes', label: 'Yes' },
            ].map((opt) => (
              <div key={opt.value} className="flex items-center space-x-2">
                <RadioGroupItem value={opt.value} id={`molt-${opt.value}`} />
                <Label htmlFor={`molt-${opt.value}`} className="cursor-pointer">{opt.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Button onClick={planLight} className="w-full">
          <Sun className="mr-2 h-4 w-4" />
          Plan Supplemental Light
        </Button>

        {result && (
          <div className="mt-4 space-y-4">
            <Alert className={result.supplementNeeded === 0 ? 'border-green-500' : 'border-amber-500'}>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>
                {result.supplementNeeded === 0 ? 'No Light Needed' : `Add ${result.supplementNeeded.toFixed(1)} Hours`}
              </AlertTitle>
              <AlertDescription>{result.recommendation}</AlertDescription>
            </Alert>

            {result.actions.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Suggested Actions</h4>
                <ul className="space-y-1">
                  {result.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.cautions.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Cautions</h4>
                <ul className="space-y-1">
                  {result.cautions.map((caution, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {caution}
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

// Tool 2: LED Cost Calculator
const LEDCostCalculator = () => {
  const [wattage, setWattage] = useState('9');
  const [hoursPerDay, setHoursPerDay] = useState('3');
  const [electricRate, setElectricRate] = useState('0.12');
  const [result, setResult] = useState<{
    kwhPerDay: number;
    costPerDay: number;
    costPerMonth: number;
    costPerSeason: number;
  } | null>(null);

  const calculateCost = () => {
    const watts = parseFloat(wattage) || 9;
    const hours = parseFloat(hoursPerDay) || 3;
    const rate = parseFloat(electricRate) || 0.12;

    const kwhPerDay = (watts * hours) / 1000;
    const costPerDay = kwhPerDay * rate;
    const costPerMonth = costPerDay * 30;
    const costPerSeason = costPerDay * 120;

    setResult({ kwhPerDay, costPerDay, costPerMonth, costPerSeason });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-500" />
          LED Cost Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Estimate energy cost for your coop light setup.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="wattage">Bulb wattage (W)</Label>
            <Input
              id="wattage"
              type="number"
              min="1"
              max="100"
              value={wattage}
              onChange={(e) => setWattage(e.target.value)}
              placeholder="e.g., 9"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hours">Hours ON per day</Label>
            <Input
              id="hours"
              type="number"
              min="0.5"
              max="16"
              step="0.5"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              placeholder="e.g., 3"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate">Electric rate ($/kWh)</Label>
            <Input
              id="rate"
              type="number"
              min="0.01"
              max="1"
              step="0.01"
              value={electricRate}
              onChange={(e) => setElectricRate(e.target.value)}
              placeholder="e.g., 0.12"
            />
          </div>
        </div>

        <Button onClick={calculateCost} className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          Calculate Cost
        </Button>

        {result && (
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">{result.kwhPerDay.toFixed(3)}</div>
              <div className="text-xs text-muted-foreground">kWh/day</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">${result.costPerDay.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Cost/day</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">${result.costPerMonth.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Cost/month (30d)</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">${result.costPerSeason.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Cost/season (~120d)</div>
            </div>
          </div>
        )}

        {result && (
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Tip:</strong> If costs feel high, reduce hours added or switch to a lower-watt LED—schedule consistency matters more than brightness.
          </p>
        )}
      </CardContent>
    </Card>
  );
};

// Tool 3: Timer Schedule Builder
const TimerScheduleBuilder = () => {
  const [sunrise, setSunrise] = useState('07:00');
  const [extraMinutes, setExtraMinutes] = useState('120');
  const [mode, setMode] = useState('morning');
  const [schedule, setSchedule] = useState<{
    morningOn: string;
    morningOff: string;
    morningMinutes: number;
    eveningMinutes: number;
    splitMode: boolean;
  } | null>(null);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const generateSchedule = () => {
    const [sh, sm] = sunrise.split(':').map(x => parseInt(x, 10));
    const sunriseM = sh * 60 + sm;
    const extra = Math.max(0, parseInt(extraMinutes, 10) || 0);

    let morningMins = extra;
    let eveningMins = 0;
    if (mode === 'split') {
      morningMins = Math.ceil(extra * 0.7);
      eveningMins = extra - morningMins;
    }

    const onMorning = sunriseM - morningMins;
    const onH = pad(Math.floor(((onMorning % 1440) + 1440) % 1440 / 60));
    const onMin = pad(((onMorning % 1440) + 1440) % 1440 % 60);
    const offH = pad(Math.floor(sunriseM / 60));
    const offMin = pad(sunriseM % 60);

    setSchedule({
      morningOn: `${onH}:${onMin}`,
      morningOff: `${offH}:${offMin}`,
      morningMinutes: morningMins,
      eveningMinutes: eveningMins,
      splitMode: mode === 'split',
    });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Timer className="h-5 w-5 text-blue-500" />
          Timer Schedule Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">Build a simple morning-extension schedule you can set on a timer.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="sunrise">Local sunrise time</Label>
            <Input
              id="sunrise"
              type="time"
              value={sunrise}
              onChange={(e) => setSunrise(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="extra">Extra light needed (minutes)</Label>
            <Input
              id="extra"
              type="number"
              min="0"
              max="360"
              step="15"
              value={extraMinutes}
              onChange={(e) => setExtraMinutes(e.target.value)}
              placeholder="e.g., 120"
            />
          </div>
          <div className="space-y-2">
            <Label>Add light in</Label>
            <RadioGroup value={mode} onValueChange={setMode} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="morning" id="mode-morning" />
                <Label htmlFor="mode-morning" className="cursor-pointer text-sm">Morning only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="split" id="mode-split" />
                <Label htmlFor="mode-split" className="cursor-pointer text-sm">Split</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <Button onClick={generateSchedule} className="w-full">
          <Clock className="mr-2 h-4 w-4" />
          Generate Timer Schedule
        </Button>

        {schedule && (
          <div className="mt-4 space-y-4">
            <Alert className="border-blue-500">
              <Clock className="h-4 w-4" />
              <AlertTitle>Timer Schedule (Morning Extension)</AlertTitle>
              <AlertDescription className="mt-2">
                <div className="space-y-1">
                  <div><strong>ON:</strong> {schedule.morningOn}</div>
                  <div><strong>OFF:</strong> {schedule.morningOff} (at sunrise)</div>
                  <div><strong>Total added light:</strong> {schedule.morningMinutes} min in the morning</div>
                </div>
              </AlertDescription>
            </Alert>

            {schedule.splitMode && (
              <Alert className="border-amber-500">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Split Mode Note</AlertTitle>
                <AlertDescription>
                  You chose split lighting. Keep evening lighting gentle and avoid sudden darkness. If you do evening extension, consider a dim "step-down" or ensure birds can reach roosts safely. Added evening light: {schedule.eveningMinutes} min.
                </AlertDescription>
              </Alert>
            )}

            <p className="text-sm text-muted-foreground">
              <strong>Tip:</strong> Adjust every few weeks as sunrise shifts. Consistency beats perfection.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ChickenCoopLightingGuide = () => {
  const article = {
    id: 'chicken-coop-lighting-guide',
    slug: 'chicken-coop-lighting-guide',
    title: 'Chicken Coop Lighting Requirements: Natural vs Artificial (2025)',
    excerpt: 'Complete coop lighting guide with egg production impacts, energy efficiency tips, and safe timer systems. Includes 3 interactive tools: Daylight & Lay Planner, LED Cost Calculator, and Timer Schedule Builder.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Lighting Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Care' as const,
    tags: ['Lighting', 'Egg Production', 'Energy Efficiency', 'Timer Systems', 'LED'],
    difficulty: 'Beginner' as const,
    costRange: '$20-$80',
    featured: true,
    image: heroImage,
  };

  return (
    <BlogLayout article={article}>
      <p className="lead text-lg text-muted-foreground mb-6">
        When people talk about chicken coop lighting, they're usually chasing one goal: consistent eggs in the darker months. Lighting can help—because chickens respond to day length—but it also comes with real tradeoffs: stress from inconsistent schedules, safety hazards from bad wiring, and wasted money from inefficient bulbs or always-on setups.
      </p>

      <Alert className="mb-6 border-primary/30">
        <Lightbulb className="h-4 w-4" />
        <AlertTitle>Core Idea</AlertTitle>
        <AlertDescription>
          Light management is about day length and consistency. Brightness matters, but schedule matters more.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive" className="mb-8">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Don't Do This</AlertTitle>
        <AlertDescription>
          24/7 lighting or random on/off switching. Birds need a dark period for rest and a stable routine.
        </AlertDescription>
      </Alert>

      {/* Lighting Basics */}
      <section id="lighting-basics" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Lighting Basics: What Chickens Actually Respond To</h2>
        <p className="mb-4">
          Chickens are seasonal layers. Their reproductive cycle is strongly influenced by <strong>photoperiod</strong> (day length). As days shorten in fall and winter, many hens naturally slow or stop laying. When days lengthen again, production rises. Supplemental light works by extending the "day" to a more summer-like length.
        </p>

        <h3 className="text-xl font-semibold mb-3">Two Things Lighting Does in a Coop</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Sun className="h-5 w-5 text-amber-500" />
                1) Extends Day Length
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Signals "productive season" to many breeds</li>
                <li>• Helps maintain laying in winter for some flocks</li>
                <li>• Works best when consistent daily</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                2) Improves Visibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Helps you do chores early/late</li>
                <li>• Can reduce accidents in tight coops</li>
                <li>• Can help timid birds find roosts—if kept gentle</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="mb-4">
          <Clock className="h-4 w-4" />
          <AlertTitle>What Matters Most: Schedule &gt; Brightness</AlertTitle>
          <AlertDescription>
            Many people overthink the bulb and underthink the timer. Your birds don't need stadium lights. They need a consistent routine, a predictable dawn, and a predictable dark period.
          </AlertDescription>
        </Alert>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Fast setup?</p>
          <p className="text-sm text-muted-foreground">Use an LED bulb + protected fixture + timer. Add light in the morning, not at night.</p>
        </div>
      </section>

      {/* Natural Light */}
      <section id="natural-light" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Natural Light: What It Does Well (and Where It Falls Short)</h2>
        <p className="mb-4">
          Natural light is the default—and for many backyard keepers, it's the best option because it's aligned with the birds' biology. If you're okay with fewer eggs in winter, natural light reduces complexity and risk.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Pros of Natural Light
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Zero energy cost and no wiring/fire risk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Natural rest cycle (dark nights support recovery)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Lower management overhead (no timers to fail)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Less pressure on birds that are molting or older</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Cons of Natural Light
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                <span>Seasonal egg drop is normal and often significant</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                <span>More variability week-to-week with storms and short days</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                <span>Early winter mornings can make chores harder</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Natural-light strategy:</p>
          <p className="text-sm text-muted-foreground">Accept the winter slowdown, focus on nutrition and low stress, and plan your egg needs seasonally.</p>
        </div>
      </section>

      {/* Artificial Light */}
      <section id="artificial-light" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Artificial Light: What It Changes</h2>
        <p className="mb-4">
          Artificial lighting can extend your flock's perceived day length, which can support more consistent laying during short-day months. But it also changes how "hard" the birds run their laying cycle. Some people love the reliability; others prefer to let hens rest.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Pros of Artificial Coop Lighting
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>More consistent day length through winter</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Better predictability for egg availability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Convenience for morning chores and checks</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Cons / Tradeoffs
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Safety risk if wiring is sloppy or fixtures are exposed</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Stress risk if schedules are inconsistent (power outages, manual switching)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Can push production when birds might otherwise rest</span>
              </li>
            </ul>
          </div>
        </div>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            If you use artificial light, use a timer and keep a consistent dark period every night.
          </AlertDescription>
        </Alert>
      </section>

      {/* Egg Production */}
      <section id="egg-production" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Egg Production Impacts (and Realistic Expectations)</h2>
        <p className="mb-4">
          Lighting affects laying because it affects day length. But lighting is not a magic egg switch. Egg output also depends on breed, age, molt status, nutrition, health, temperature stress, and overall coop comfort.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Likely Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Many laying breeds maintain better winter production with longer day length</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Production becomes more predictable when day length is stable</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>You may see fewer "random gaps" in laying</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Still Normal Even With Light</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Molting pauses (light won't override a heavy molt reliably)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Older hens producing fewer eggs</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Stress events (predator scares, overcrowding, illness) reducing lay</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <p className="font-medium">Night Lighting vs Morning Lighting</p>
          <p className="text-sm text-muted-foreground">If you add light, the easiest low-stress method is extending the day in the early morning. That way birds still go to roost naturally at dusk, instead of getting "surprised" by darkness when a timer shuts off at night.</p>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section id="energy-efficiency" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Energy Efficiency: LEDs, Watts, and Real Costs</h2>
        <p className="mb-4">
          For chicken coop lighting, LEDs are usually the best balance of low power and long lifespan. Energy cost matters less than safety—but efficiency is an easy win.
        </p>

        <h3 className="text-lg font-semibold mb-3">Efficiency Checklist</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Use LED bulbs (low watts for enough light)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Use a protected fixture so birds can't hit the bulb</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Use a timer to avoid "oops, I left it on"</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
            <span>Keep lighting moderate; you don't need floodlights</span>
          </li>
        </ul>

        <Alert>
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Rule of Thumb</AlertTitle>
          <AlertDescription>
            Most coops need "see your feet and birds" light, not "shop lighting." If birds act restless at night, it's probably too bright or timed wrong.
          </AlertDescription>
        </Alert>
      </section>

      {/* Timer Systems */}
      <section id="timer-systems" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Timer Systems: Simple, Safe Setups</h2>
        <p className="mb-4">
          A timer system is what turns lighting from "random" into "routine." You want repeatability, not daily manual switching. There are three practical timer approaches:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3 font-semibold">Timer Type</th>
                <th className="text-left p-3 font-semibold">Pros</th>
                <th className="text-left p-3 font-semibold">Cons</th>
                <th className="text-left p-3 font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Mechanical outlet timer</td>
                <td className="p-3">Cheap, simple, reliable</td>
                <td className="p-3">Less flexible; can drift slightly</td>
                <td className="p-3">Basic morning light schedule</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Digital outlet timer</td>
                <td className="p-3">Precise schedule; multiple programs</td>
                <td className="p-3">More complex; needs correct setup after outages</td>
                <td className="p-3">More advanced routines</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Smart plug</td>
                <td className="p-3">Easy schedule changes; remote control</td>
                <td className="p-3">Needs stable Wi-Fi; more failure points</td>
                <td className="p-3">People who already run smart home gear</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg">
          <p className="font-medium">Best Timer Approach for Most People</p>
          <p className="text-sm text-muted-foreground">Morning-only extension: turn on before sunrise and turn off after natural sunrise. This keeps dusk natural and reduces roosting confusion.</p>
        </div>
      </section>

      {/* Electrical Safety */}
      <section id="electrical-safety" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Electrical Safety Checklist (Non-Negotiable)</h2>
        <p className="mb-4">
          Coops are dusty, sometimes damp, and full of curious birds. Lighting has to be installed like it's in a workshop—protected and durable.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Use outdoor-rated cords and fixtures</li>
                <li>• Protect bulbs with a cage-style guard</li>
                <li>• Route cords through conduit or protective channel where possible</li>
                <li>• Use GFCI protection on the outlet circuit</li>
                <li>• Keep fixtures away from bedding and dust piles</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-500/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-500" />
                Don't
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Use flimsy indoor extension cords across wet ground</li>
                <li>• Hang bare bulbs where birds can peck or jump into them</li>
                <li>• Run cords where rodents can chew them</li>
                <li>• Install high-heat bulbs near flammables</li>
                <li>• Assume "low watt" means "no fire risk"</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Alert className="mt-6" variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Safety First</AlertTitle>
          <AlertDescription>
            If you aren't comfortable with wiring, keep it simple: a protected plug-in fixture + outdoor cord + outlet timer + GFCI outlet.
          </AlertDescription>
        </Alert>
      </section>

      {/* 3 Recommended Setups */}
      <section id="recommended-setups" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">3 Recommended Lighting Setups</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Setup A</Badge>
                Natural-Only (No Artificial Light)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Best if you're okay with seasonal egg decline</li>
                <li>• Focus on comfort: ventilation, dryness, wind control</li>
                <li>• Use good windows/vents for daytime visibility</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Setup B</Badge>
                Basic Egg-Support Lighting (Morning Extension)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• One LED bulb in a guarded fixture</li>
                <li>• Mechanical or digital outlet timer</li>
                <li>• Program: on before sunrise, off after sunrise</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline">Setup C</Badge>
                Efficient "Set and Forget" (Digital Timer + LED)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• LED bulb + guarded fixture + digital timer</li>
                <li>• Seasonal adjustments every few weeks to match changing daylight</li>
                <li>• Best if you want stable output and predictable routine</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 p-4 rounded-lg mt-6">
          <p className="font-medium">Don't chase perfection:</p>
          <p className="text-sm text-muted-foreground">A simple, consistent timer beats a complicated smart setup that fails twice a month.</p>
        </div>
      </section>

      {/* Interactive Tools */}
      <section id="tools" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Interactive Tools for Chicken Coop Lighting</h2>
        <p className="mb-6">
          Use these to plan your lighting schedule, estimate energy costs, and generate a timer routine you can copy into your setup.
        </p>

        <DaylightLayPlanner />
        <LEDCostCalculator />
        <TimerScheduleBuilder />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="faq-1">
            <AccordionTrigger>How many hours of light do chickens need to lay eggs?</AccordionTrigger>
            <AccordionContent>
              Most laying hens perform best with a long day length. Many keepers target around 14–16 hours of total light during winter using supplemental lighting, while still providing a dark period for rest.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2">
            <AccordionTrigger>Is artificial light bad for chickens?</AccordionTrigger>
            <AccordionContent>
              Artificial light can be used safely if it is consistent, not overly bright, and maintains a daily dark period. Poor setups—like sudden lights-off, too much brightness, or 24/7 lighting—can stress birds.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3">
            <AccordionTrigger>What type of light is best for a chicken coop?</AccordionTrigger>
            <AccordionContent>
              Energy-efficient LEDs are common because they use little power and last a long time. The key is safe wiring, protected fixtures, and a reliable timer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4">
            <AccordionTrigger>Should coop lights turn on in the morning or evening?</AccordionTrigger>
            <AccordionContent>
              Many setups add light in the early morning so birds go to roost naturally at dusk. Timers make this predictable and reduce stress compared to manual switching.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-5">
            <AccordionTrigger>Is it okay to leave a coop light on all night?</AccordionTrigger>
            <AccordionContent>
              It's not recommended. Chickens need a dark period to rest. Constant light can cause stress and messy sleep behavior. If you need nighttime visibility, consider a very dim, indirect "check light" used briefly—separate from your day-length lighting.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-6">
            <AccordionTrigger>Should I use heat lamps for light?</AccordionTrigger>
            <AccordionContent>
              Heat lamps add fire risk and aren't necessary for lighting purposes. If your goal is egg production, use a low-watt LED for light. If your goal is winter warmth, solve drafts and moisture first, then consider safe heating approaches separately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-7">
            <AccordionTrigger>How bright should coop lighting be?</AccordionTrigger>
            <AccordionContent>
              Bright enough for birds to see and behave normally—without creating nighttime activity. If birds stay active when they should be resting, reduce brightness or adjust timing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-8">
            <AccordionTrigger>Do timers help even if I don't care about egg production?</AccordionTrigger>
            <AccordionContent>
              Yes—timers reduce human error. Even if you only want a light for chores, a timer can ensure you don't accidentally leave it on overnight.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
        <p className="mb-4">
          The best chicken coop lighting strategy is simple: decide whether you want to accept natural seasonal production changes, or support winter laying by extending day length with a safe, efficient artificial setup. If you add light, prioritize consistency, protect the fixture, and use a timer—morning extension is usually the lowest-stress approach.
        </p>

        <Alert className="mb-4">
          <Lightbulb className="h-4 w-4" />
          <AlertTitle>Next Step</AlertTitle>
          <AlertDescription>
            Use the Daylight & Lay Planner above to decide how much supplemental light to add, then generate a timer schedule.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Safety Warning</AlertTitle>
          <AlertDescription>
            DIY electrical work has real risks. Use outdoor-rated components and GFCI protection, and consult a qualified electrician if unsure.
          </AlertDescription>
        </Alert>
      </section>
    </BlogLayout>
  );
};

export default ChickenCoopLightingGuide;
