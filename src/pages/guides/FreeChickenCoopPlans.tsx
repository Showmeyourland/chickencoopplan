import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { AlertTriangle, CheckCircle, Info, ClipboardCheck, DollarSign, Ruler, ExternalLink, Star } from 'lucide-react';

const PlanQualityScorecard = () => {
  const [clarity, setClarity] = useState('');
  const [materials, setMaterials] = useState('');
  const [predator, setPredator] = useState('');
  const [ventilation, setVentilation] = useState('');
  const [cleanout, setCleanout] = useState('');
  const [capacity, setCapacity] = useState('');
  const [result, setResult] = useState<{
    score: number;
    rating: string;
    strengths: string[];
    fixes: string[];
  } | null>(null);

  const scorePlan = () => {
    if (!clarity || !materials || !predator || !ventilation || !cleanout || !capacity) return;

    const scores = {
      clarity: parseInt(clarity),
      materials: parseInt(materials),
      predator: parseInt(predator),
      ventilation: parseInt(ventilation),
      cleanout: parseInt(cleanout),
      capacity: parseInt(capacity)
    };

    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    const maxScore = 18;
    const percentage = Math.round((total / maxScore) * 100);

    const strengths: string[] = [];
    const fixes: string[] = [];

    // Analyze each category
    if (scores.clarity >= 2) {
      strengths.push('Plan clarity is decent—still dry-fit major assemblies and square doors carefully.');
    } else {
      fixes.push('Create your own measured sketch/cut list before cutting wood (avoid mid-build guesswork).');
    }

    if (scores.materials >= 2) {
      strengths.push('Materials list is acceptable—still price hardware cloth and roofing early.');
    } else {
      fixes.push('Rebuild the materials list: include hardware cloth, roofing, fasteners, hinges, latches, sealants/paint.');
    }

    if (scores.predator >= 2) {
      strengths.push('Predator-proofing looks reasonable—verify hardware cloth gauge and latch quality.');
    } else {
      fixes.push('Replace chicken wire with hardware cloth; add two-step latches or carabiner locks on all doors.');
    }

    if (scores.ventilation >= 2) {
      strengths.push('Ventilation strategy looks reasonable—confirm vents are high, not at roost level.');
    } else {
      fixes.push('Add more high ventilation with baffles to prevent drafts at roost height.');
    }

    if (scores.cleanout >= 2) {
      strengths.push('Maintenance access looks workable—keep interior surfaces durable.');
    } else {
      fixes.push('Improve clean-out access: larger door, removable tray, or clean-out panel.');
    }

    if (scores.capacity >= 2) {
      strengths.push('Capacity estimate seems plausible—still plan for future expansion.');
    } else {
      fixes.push('Re-check capacity: ensure adequate floor space and roost space; don\'t trust marketing claims.');
    }

    let rating = 'Poor';
    if (percentage >= 85) rating = 'Excellent';
    else if (percentage >= 70) rating = 'Good';
    else if (percentage >= 50) rating = 'Fair';
    else if (percentage >= 35) rating = 'Needs Work';

    setResult({ score: percentage, rating, strengths, fixes });
  };

  const reset = () => {
    setClarity('');
    setMaterials('');
    setPredator('');
    setVentilation('');
    setCleanout('');
    setCapacity('');
    setResult(null);
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          Plan Quality Scorecard
        </CardTitle>
        <p className="text-sm text-muted-foreground">Score any free plan (0–100) and get prioritized upgrades</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Clarity (dimensions + steps)</Label>
            <Select value={clarity} onValueChange={setClarity}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — unclear / missing measurements</SelectItem>
                <SelectItem value="1">1 — basic measurements</SelectItem>
                <SelectItem value="2">2 — clear diagrams and steps</SelectItem>
                <SelectItem value="3">3 — excellent drawings + sequence</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Materials & cut list</Label>
            <Select value={materials} onValueChange={setMaterials}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — missing / vague</SelectItem>
                <SelectItem value="1">1 — partial list</SelectItem>
                <SelectItem value="2">2 — complete materials list</SelectItem>
                <SelectItem value="3">3 — includes cut list + alternates</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Predator-proofing</Label>
            <Select value={predator} onValueChange={setPredator}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — chicken wire / weak security</SelectItem>
                <SelectItem value="1">1 — basic mesh, weak latches</SelectItem>
                <SelectItem value="2">2 — hardware cloth + decent framing</SelectItem>
                <SelectItem value="3">3 — strong security + dig protection details</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Ventilation plan</Label>
            <Select value={ventilation} onValueChange={setVentilation}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — tiny vents / no guidance</SelectItem>
                <SelectItem value="1">1 — vents exist but unclear</SelectItem>
                <SelectItem value="2">2 — good high vent strategy</SelectItem>
                <SelectItem value="3">3 — excellent airflow + baffle approach</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Clean-out access</Label>
            <Select value={cleanout} onValueChange={setCleanout}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — hard to clean</SelectItem>
                <SelectItem value="1">1 — some access</SelectItem>
                <SelectItem value="2">2 — good doors/panels</SelectItem>
                <SelectItem value="3">3 — designed for easy maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Capacity realism</Label>
            <Select value={capacity} onValueChange={setCapacity}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0 — marketing claims</SelectItem>
                <SelectItem value="1">1 — likely optimistic</SelectItem>
                <SelectItem value="2">2 — plausible</SelectItem>
                <SelectItem value="3">3 — capacity tied to area/roost space</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={scorePlan} className="flex-1" size="lg">
            Score This Plan
          </Button>
          <Button onClick={reset} variant="outline" size="lg">
            Reset
          </Button>
        </div>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.score >= 70 ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' :
            result.score >= 50 ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' :
            result.score >= 35 ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' :
            'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
          }`}>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                {result.score >= 70 ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : result.score >= 50 ? (
                  <Info className="h-6 w-6 text-blue-600" />
                ) : (
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                )}
                <span className="text-4xl font-bold">{result.score}</span>
                <span className="text-muted-foreground">/100</span>
              </div>
              <p className="font-semibold text-lg">{result.rating}</p>
            </div>
            
            {result.strengths.length > 0 && (
              <div className="mb-4">
                <h5 className="font-medium text-green-700 dark:text-green-400 mb-2 text-sm">✓ Strengths</h5>
                <ul className="text-sm space-y-1">
                  {result.strengths.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {result.fixes.length > 0 && (
              <div>
                <h5 className="font-medium text-amber-700 dark:text-amber-400 mb-2 text-sm">⚠️ Priority Fixes (do these first)</h5>
                <ul className="text-sm space-y-1">
                  {result.fixes.map((f, i) => (
                    <li key={i}>• {f}</li>
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

const HiddenCostEstimator = () => {
  const [flockSize, setFlockSize] = useState([6]);
  const [predatorPressure, setPredatorPressure] = useState('');
  const [climate, setClimate] = useState('');
  const [planType, setPlanType] = useState('');
  const [baseline, setBaseline] = useState('');
  const [result, setResult] = useState<{
    hiddenMin: number;
    hiddenMax: number;
    totalMin: number;
    totalMax: number;
    riskLevel: string;
    items: string[];
  } | null>(null);

  const estimate = () => {
    if (!predatorPressure || !climate || !planType) return;

    const base = Math.max(0, parseFloat(baseline || '0'));

    // Predator adder
    let predAdderMin = 0, predAdderMax = 0;
    if (predatorPressure === 'low') { predAdderMin = 60; predAdderMax = 180; }
    if (predatorPressure === 'med') { predAdderMin = 140; predAdderMax = 420; }
    if (predatorPressure === 'high') { predAdderMin = 260; predAdderMax = 800; }

    // Climate adder
    let climateAdderMin = 0, climateAdderMax = 0;
    if (climate === 'mild') { climateAdderMin = 40; climateAdderMax = 120; }
    if (climate === 'hot') { climateAdderMin = 70; climateAdderMax = 240; }
    if (climate === 'cold') { climateAdderMin = 90; climateAdderMax = 320; }
    if (climate === 'wet') { climateAdderMin = 110; climateAdderMax = 420; }

    // Type adder
    let typeAdderMin = 0, typeAdderMax = 0;
    if (planType === 'fixed') { typeAdderMin = 80; typeAdderMax = 260; }
    if (planType === 'tractor') { typeAdderMin = 120; typeAdderMax = 420; }
    if (planType === 'shed') { typeAdderMin = 100; typeAdderMax = 360; }

    // Scale by flock size
    const scale = 1 + Math.min(0.6, (flockSize[0] - 4) * 0.06);
    const hiddenMin = Math.round((predAdderMin + climateAdderMin + typeAdderMin) * scale);
    const hiddenMax = Math.round((predAdderMax + climateAdderMax + typeAdderMax) * scale);

    const totalMin = base + hiddenMin;
    const totalMax = base + hiddenMax;

    const items: string[] = [
      'Hardware cloth + staples/screws/washers',
      'Upgraded latches/hinges + secondary locks',
      'Roofing extras (drip edge, underlayment, better fasteners)',
      'Sealant/paint + weatherstripping',
      'Extra framing for doors/openings (warp control)'
    ];

    if (planType === 'tractor') items.push('Mobility hardware (wheels/handles/skids) + reinforcement');
    if (planType === 'shed') items.push('Ventilation additions + interior protection panels');
    if (climate === 'hot') items.push('Shade additions (overhangs, reflective roofing) + extra ventilation');
    if (climate === 'wet') items.push('Drainage/elevation improvements + splash control');
    if (climate === 'cold') items.push('Wind baffles + draft control at roost level');

    let riskLevel = 'Low';
    if (hiddenMax >= 800) riskLevel = 'High';
    else if (hiddenMax >= 400) riskLevel = 'Medium';

    setResult({ hiddenMin, hiddenMax, totalMin, totalMax, riskLevel, items });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <DollarSign className="h-5 w-5 text-primary" />
          Hidden Cost Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">Estimate upgrade spend based on predators, climate, and plan type</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Flock size: {flockSize[0]} birds</Label>
          <Slider
            value={flockSize}
            onValueChange={setFlockSize}
            min={2}
            max={20}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>2 birds</span>
            <span>20 birds</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Predator pressure</Label>
            <Select value={predatorPressure} onValueChange={setPredatorPressure}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (mostly pets, few night predators)</SelectItem>
                <SelectItem value="med">Medium (raccoons/coyotes possible)</SelectItem>
                <SelectItem value="high">High (known raccoons/coyotes/hawks/rodents)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Climate stress</Label>
            <Select value={climate} onValueChange={setClimate}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mild">Mild</SelectItem>
                <SelectItem value="hot">Hot sun / heat waves</SelectItem>
                <SelectItem value="cold">Cold winters</SelectItem>
                <SelectItem value="wet">Wet / humid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Plan style</Label>
            <Select value={planType} onValueChange={setPlanType}>
              <SelectTrigger>
                <SelectValue placeholder="Select..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fixed">Fixed coop + run</SelectItem>
                <SelectItem value="tractor">Tractor / portable</SelectItem>
                <SelectItem value="shed">Shed conversion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Baseline build budget (materials only, $)</Label>
            <Input
              type="number"
              placeholder="e.g., 400"
              value={baseline}
              onChange={(e) => setBaseline(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={estimate} className="w-full" size="lg">
          Estimate Hidden Costs
        </Button>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.riskLevel === 'High' ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' :
            result.riskLevel === 'Medium' ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' :
            'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
          }`}>
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">Hidden Cost Risk: {result.riskLevel}</p>
              <p className="text-lg mt-2">Estimated hidden costs:</p>
              <p className="text-3xl font-bold text-primary">${result.hiddenMin}–${result.hiddenMax}</p>
              <p className="text-sm text-muted-foreground">(predators + climate + plan type)</p>
              
              {baseline && (
                <>
                  <p className="text-lg mt-4">Estimated all-in materials:</p>
                  <p className="text-2xl font-bold">${result.totalMin}–${result.totalMax}</p>
                  <p className="text-sm text-muted-foreground">(baseline + hidden)</p>
                </>
              )}
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium text-sm mb-2">Likely upgrade purchases</h5>
              <ul className="text-sm space-y-1">
                {result.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4 italic">
              Tip: If the plan doesn't explicitly spec hardware cloth and latches, assume you're adding them.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const QuickMaterialsCalculator = () => {
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [studSpacing, setStudSpacing] = useState('16');
  const [result, setResult] = useState<{
    total2x4Lf: number;
    total2x4_8ft: number;
    wallSheets: number;
    floorSheets: number;
    roofSheets: number;
    notes: string[];
  } | null>(null);

  const calculate = () => {
    const w = parseFloat(width) || 4;
    const l = parseFloat(length) || 6;
    const h = parseFloat(height) || 6;
    const spacing = parseInt(studSpacing) || 16;

    // Calculate wall studs
    const perimeter = 2 * (w + l);
    const studCount = Math.ceil(perimeter / (spacing / 12)) + 4; // +4 for corners
    const studLf = studCount * h;

    // Top and bottom plates
    const plateLf = perimeter * 2 * 2; // double top, single bottom = ~4 runs

    // Simple roof frame estimate
    const roofLf = (w + 2) * 3; // rough rafter estimate

    const total2x4Lf = Math.round(studLf + plateLf + roofLf);
    const total2x4_8ft = Math.ceil(total2x4Lf / 8);

    // Sheathing (4x8 sheets)
    const wallArea = perimeter * h;
    const wallSheets = Math.ceil(wallArea / 32);

    const floorArea = w * l;
    const floorSheets = Math.ceil(floorArea / 32);

    // Roof with overhang factor
    const roofArea = (w + 2) * (l + 2) * 1.1; // 10% slope factor
    const roofSheets = Math.ceil(roofArea / 32);

    const notes = [
      'Run framing and run mesh (often a major cost)',
      'Hardware cloth, latches/hinges, roofing materials, trim, paint/sealant',
      'Interior roosts, nest boxes, droppings board/tray, ventilation baffles'
    ];

    setResult({ total2x4Lf, total2x4_8ft, wallSheets, floorSheets, roofSheets, notes });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Ruler className="h-5 w-5 text-primary" />
          Quick Materials Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">A fast sanity check for lumber and sheathing—not a replacement for a true cut list</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Coop width (ft)</Label>
            <Input
              type="number"
              placeholder="e.g., 4"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Coop length (ft)</Label>
            <Input
              type="number"
              placeholder="e.g., 6"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Wall height (ft)</Label>
            <Input
              type="number"
              placeholder="e.g., 6"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Stud spacing</Label>
            <Select value={studSpacing} onValueChange={setStudSpacing}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="16">16" on center</SelectItem>
                <SelectItem value="24">24" on center</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={calculate} className="w-full" size="lg">
          Calculate
        </Button>

        {result && (
          <div className="p-4 rounded-lg border-2 bg-muted/50 border-border">
            <h5 className="font-semibold mb-3">Ballpark Materials (coop body only)</h5>
            
            <div className="space-y-2 text-sm">
              <p>• <strong>Estimated 2x4 total:</strong> {result.total2x4Lf} linear ft ≈ {result.total2x4_8ft} pcs (8-foot)</p>
              <p>• <strong>Wall sheathing (4x8):</strong> {result.wallSheets} sheets (exterior only)</p>
              <p>• <strong>Floor sheathing (4x8):</strong> {result.floorSheets} sheets</p>
              <p>• <strong>Roof sheathing (4x8):</strong> {result.roofSheets} sheets (rough slope/overhang factor)</p>
            </div>
            
            <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800">
              <h6 className="font-medium text-sm mb-2 text-amber-800 dark:text-amber-300">What this does NOT include:</h6>
              <ul className="text-sm space-y-1 text-amber-700 dark:text-amber-400">
                {result.notes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
              </ul>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3 italic">
              Use this to sanity-check a plan's lumber list. If your plan is way under this for a similar size, double-check missing framing.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const planSources = [
  {
    name: 'Virginia Tech Extension',
    bestFor: 'Correct housing principles (dry, draft-free, ventilated)',
    quality: 'Not just plans—design criteria you should follow even with DIY plans.',
    risk: 'Low',
    upgrades: 'Pair with a DIY plan for dimensions; use VT guidance for ventilation and placement.',
    category: 'extension'
  },
  {
    name: 'Penn State Extension',
    bestFor: 'Housing fundamentals + adapting existing buildings',
    quality: 'Excellent for shed conversions and practical housing choices.',
    risk: 'Low',
    upgrades: 'Use to guide ventilation and layout even if you build from a DIY blog plan.',
    category: 'extension'
  },
  {
    name: 'Oregon State Extension',
    bestFor: 'Backyard coop design requirements and predator protection',
    quality: 'Strong functional guidance—especially security and run considerations.',
    risk: 'Low',
    upgrades: 'Use as your "spec sheet" for predator-proofing and layout decisions.',
    category: 'extension'
  },
  {
    name: 'Kansas State Extension',
    bestFor: 'Design decisions that reduce hazards and improve cleanability',
    quality: 'Practical housing guidance; less "pretty," more functional.',
    risk: 'Low',
    upgrades: 'Use as a checklist to fix common plan omissions (clean-out, hazards, access).',
    category: 'extension'
  },
  {
    name: 'NDSU Poultry Building Plans',
    bestFor: 'Engineering-style drawings, proven layouts',
    quality: 'Dense but powerful: lots of structural info and legacy plan sets.',
    risk: 'Medium',
    upgrades: 'Use for structure; modernize with better materials, hardware cloth, and easy-clean access.',
    category: 'engineering'
  },
  {
    name: 'Ana White',
    bestFor: 'DIY builders who want clear visuals and approachable builds',
    quality: 'Often strong step-by-step + community builds; verify security details per predator level.',
    risk: 'Medium',
    upgrades: 'Add hardware cloth, better latches, and confirm ventilation is high and generous.',
    category: 'diy'
  },
  {
    name: 'Family Handyman',
    bestFor: 'Weekend build style with mainstream DIY instructions',
    quality: 'Clear tutorial format; still verify your predator and climate needs.',
    risk: 'Medium',
    upgrades: 'Increase ventilation if needed; reinforce openings; choose durable roofing.',
    category: 'diy'
  },
  {
    name: 'BuildEazy',
    bestFor: 'Builders who want a more "complete" project with drawings',
    quality: 'Good framing visuals and project-style documentation.',
    risk: 'Medium',
    upgrades: 'Confirm run security and upgrade latches; consider a droppings board for easier cleaning.',
    category: 'diy'
  },
  {
    name: 'MyOutdoorPlans',
    bestFor: 'Measured drawings + basic walkthroughs',
    quality: 'Lots of free plans and variations; treat as a structural starting point.',
    risk: 'Medium',
    upgrades: 'Budget extra for predator-proofing, quality roofing, and clean-out access improvements.',
    category: 'diy'
  },
  {
    name: 'The Spruce',
    bestFor: 'Browsing multiple plan styles quickly',
    quality: 'Helpful curated list; varies by plan quality because it aggregates.',
    risk: 'Medium',
    upgrades: 'Use the Scorecard tool on the plan you select; upgrade predator-proofing if the plan uses chicken wire.',
    category: 'aggregator'
  },
  {
    name: 'Old Farmer\'s Almanac',
    bestFor: 'Understanding coop fundamentals before picking a plan',
    quality: 'Great "what to include" guidance even if you use another plan.',
    risk: 'Low',
    upgrades: 'Use alongside any plan to verify vents, space, and access.',
    category: 'guide'
  },
  {
    name: 'Instructables',
    bestFor: 'Photo-heavy step-by-step builds',
    quality: 'Great visuals; quality varies by author; sometimes under-specs security.',
    risk: 'Medium–High',
    upgrades: 'Upgrade latches, replace weak mesh with hardware cloth, and add easier clean-out.',
    category: 'diy'
  },
  {
    name: 'Backyard Chickens Forum',
    bestFor: 'Discovering many plan links in one place',
    quality: 'Huge variety; you must filter quality yourself.',
    risk: 'High (variable)',
    upgrades: 'Use the Scorecard on any plan you find; prioritize extension/engineering links in the thread.',
    category: 'forum'
  }
];

const FreeChickenCoopPlans = () => {
  const article = {
    id: 'free-chicken-coop-plans',
    slug: 'free-chicken-coop-plans',
    title: 'Free Chicken Coop Plans: 25 Best Sources Reviewed (2025)',
    excerpt: 'Quality-first review of 25 best sources for free chicken coop plans, including hidden costs, plan scoring, and practical upgrade recommendations with 3 interactive tools.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Plan Review Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Planning' as const,
    tags: ['Free Plans', 'Plan Review', 'DIY', 'Budget', 'Resources'],
    difficulty: 'Beginner' as const,
    costRange: '$200-$1,500+',
    featured: true,
  };

  return (
    <BlogLayout article={article}>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introduction */}
        <p className="lead text-xl text-muted-foreground mb-6">
          If you search free chicken coop plans, you'll find thousands of sketches, blog posts, and PDFs. Some are genuinely buildable. Many look good in photos but skip the boring details that determine whether your coop is safe, dry, and easy to clean. This guide reviews 25 of the best places to start—then shows you the hidden costs you should expect and the upgrades that keep "free" plans from becoming expensive mistakes.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg my-8 border-l-4 border-primary">
          <p className="font-semibold text-lg mb-2">How This Review Is Different</p>
          <p className="mb-0">I'm not ranking "prettiest coops." I'm scoring sources on the things that matter in real life: predator-proofing, ventilation strategy, cut lists/material clarity, clean-out access, and whether the plan's "capacity" is realistic.</p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg my-8 border border-amber-200 dark:border-amber-800">
          <p className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Reality Check
          </p>
          <p className="mb-0">The plan file is free; hardware cloth, roofing, and weatherproofing are not. If you're in raccoon territory, predator-proofing is the budget.</p>
        </div>

        {/* How to Pick */}
        <h2 id="how-to-pick" className="scroll-mt-20">How to Pick Free Chicken Coop Plans Without Regret</h2>
        
        <p>
          Most "bad" coop builds don't fail because the builder can't cut a 2x4. They fail because the plan's priorities are wrong: tiny vents, exposed wire that predators can tear, roofs that leak at the first monsoon, and layouts that make cleaning miserable. Before choosing any plan, use our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline font-medium">12-point quality checklist</Link> to evaluate what you're getting.
        </p>

        <h3>Before You Choose Any Free Plan, Decide Three Things:</h3>
        
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">1. Your Real Constraints</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1 mb-0">
                <li>• Flock size now vs. later (people expand)</li>
                <li>• Predator pressure (raccoons, coyotes, hawks)</li>
                <li>• Climate (heat, wind, snow, humidity)</li>
                <li>• Time tolerance for cleaning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">2. Your Build Style</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="space-y-1 mb-0">
                <li>• <strong>Fixed coop + run:</strong> easiest to weatherproof; best for 6+ birds</li>
                <li>• <strong>Tractor/portable:</strong> great for rotation; capacity often overstated</li>
                <li>• <strong>Shed conversion:</strong> fastest path; mainly adding vents/security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">3. Plan vs. System</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-0">A coop isn't just walls and a roof. It's ventilation, secure openings, dry floors, roost layout, and access that makes cleaning possible.</p>
            </CardContent>
          </Card>
        </div>

        {/* Quality Rubric */}
        <h2 id="quality-rubric" className="scroll-mt-20">The Quality Rubric Used in This Review</h2>
        
        <p>
          Different sources publish different "kinds" of plans. Some are full construction drawings with dimensions and framing details. Others are photo-heavy tutorials. To review them fairly, I graded each source using the same rubric:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Criterion</th>
                <th className="p-3 text-left font-semibold">Good Sign</th>
                <th className="p-3 text-left font-semibold">Red Flag</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Plan clarity</td>
                <td className="p-3">Measured drawings, cut lists, logical build sequence</td>
                <td className="p-3">Vague sketches, no dimensions, missing steps</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Predator-proofing</td>
                <td className="p-3">Hardware cloth, strong latches, dig protection</td>
                <td className="p-3">Chicken wire, simple hooks, no dig barrier</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Ventilation</td>
                <td className="p-3">High vents with baffles, moisture exhaust strategy</td>
                <td className="p-3">Tiny vents or no ventilation guidance</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Clean-out access</td>
                <td className="p-3">Large doors, removable trays, layout built for cleaning</td>
                <td className="p-3">Mini doors and tight corners you can't reach</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Realistic capacity</td>
                <td className="p-3">Capacity tied to floor area and roost space</td>
                <td className="p-3">"Fits 8" coops that realistically hold 3–4</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hidden Costs */}
        <h2 id="hidden-costs" className="scroll-mt-20">Hidden Costs: Why "Free" Coop Plans Can Get Pricey</h2>
        
        <p>
          Here's the truth: the plan is the cheapest part. The hidden costs are usually in (1) predator-proofing upgrades, (2) weatherproofing, and (3) the "I didn't realize I needed that" hardware—especially if the plan doesn't list it.
        </p>

        <div className="space-y-6 my-8">
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="pb-3 bg-red-50 dark:bg-red-900/20">
              <CardTitle className="text-lg">Hidden Cost Bucket #1: Predator-Proofing</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-3">Many free plans are designed around basic fencing or chicken wire. That's fine for separating birds, but it's not reliable for stopping determined predators.</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>• Hardware cloth (not chicken wire) for openings and runs</li>
                <li>• Strong latches (raccoons can open simple hooks)</li>
                <li>• Dig protection (apron or buried mesh) if you have digging predators</li>
                <li>• Reinforced doors and framed openings that don't rack over time</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800">
            <CardHeader className="pb-3 bg-amber-50 dark:bg-amber-900/20">
              <CardTitle className="text-lg">Hidden Cost Bucket #2: Roofing + Water Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-0">A lot of "Pinterest coops" look great until water gets under the roofing edge or inside at a seam. The fix is usually: better drip edges, better overhangs, better roofing underlayment, and sealing.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardHeader className="pb-3 bg-blue-50 dark:bg-blue-900/20">
              <CardTitle className="text-lg">Hidden Cost Bucket #3: The "Maintenance Tax"</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-0">Even if your build is cheap, a hard-to-clean coop costs you time forever. Plans that prioritize big doors, removable panels, or straightforward access often feel "boring"—but they're the difference between enjoying chickens and resenting chores.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg my-6 text-center border border-red-300 dark:border-red-700">
          <p className="font-semibold text-red-800 dark:text-red-300 mb-0">
            Most common free-plan trap: A plan with weak predator-proofing + poor ventilation. You pay later through repairs, hardware upgrades, and stress.
          </p>
        </div>

        {/* Upgrade Blueprint */}
        <h2 id="upgrade-blueprint" className="scroll-mt-20">Upgrade Blueprint: Make Almost Any Free Plan Safer</h2>
        
        <p>
          You can turn a mediocre free plan into a strong build if you upgrade the right things. Here's the "always upgrade" list:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">Safety Upgrades</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>• Hardware cloth on all openings (vents, windows, run sides)</li>
              <li>• Two-step latches (or carabiner-style secondary lock) on doors</li>
              <li>• Predator skirt (apron) or buried barrier where digging is common</li>
              <li>• Solid framing around doors to prevent warping and gaps</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">Comfort + Maintenance Upgrades</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>• High ventilation with baffles so air exits without drafts on roosts</li>
              <li>• Roof overhang + drip edge to keep walls and vents drier</li>
              <li>• Clean-out: a big door, removable tray, or access panel</li>
              <li>• Roost layout that keeps droppings manageable</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-lg my-6 text-center">
          <p className="font-semibold mb-0">
            If you want one single "do-this-even-if-you-do-nothing-else" upgrade: take the ventilation guidance seriously.
          </p>
        </div>

        {/* 25 Sources */}
        <h2 id="sources" className="scroll-mt-20">25 Best Sources for Free Chicken Coop Plans (Reviewed)</h2>
        
        <p>
          Below are sources that consistently help people build workable coops. Some are full plan libraries, some are high-quality tutorials, and some are extension/engineering resources that keep your build functional and safe.
        </p>

        <div className="bg-muted p-4 rounded-lg my-6">
          <p className="font-medium mb-0">
            <strong>How to use this list:</strong> Pick 2–3 sources: one for structure (dimensions/framing), one for husbandry/ventilation guidance, and one for visual step-by-step if you need it.
          </p>
        </div>

        <div className="space-y-4 my-8">
          {planSources.map((source, index) => (
            <Card key={index} className={`${
              source.risk === 'Low' ? 'border-green-200 dark:border-green-800' :
              source.risk.includes('High') ? 'border-red-200 dark:border-red-800' :
              'border-amber-200 dark:border-amber-800'
            }`}>
              <CardContent className="pt-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-base">{source.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    source.risk === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                    source.risk.includes('High') ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                    'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                  }`}>
                    {source.risk} risk
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2"><strong>Best for:</strong> {source.bestFor}</p>
                <p className="text-sm mb-2">{source.quality}</p>
                <p className="text-sm text-primary"><strong>Upgrades:</strong> {source.upgrades}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Best by Situation */}
        <h2 id="best-by-situation" className="scroll-mt-20">Best Source by Your Situation</h2>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                If You Want Function-First Guidance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 mb-0">
                <li>• <strong>Virginia Tech:</strong> small-scale housing fundamentals</li>
                <li>• <strong>Penn State:</strong> small-scale housing + adapting buildings</li>
                <li>• <strong>Oregon State:</strong> backyard coop design + predator focus</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                If You Want a Build Tutorial with Pictures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 mb-0">
                <li>• <strong>Family Handyman:</strong> approachable DIY guide</li>
                <li>• <strong>Ana White:</strong> lots of coop projects</li>
                <li>• <strong>BuildEazy:</strong> detailed project format</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                If You Want Engineering-Style Drawings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 mb-0">
                <li>• <strong>NDSU poultry building plan library:</strong> dense but powerful structural info</li>
                <li>• <strong>NDSU example plan PDFs:</strong> for scaling concepts</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Tools */}
        <h2 id="tools" className="scroll-mt-20">Interactive Planning Tools</h2>
        
        <p>
          These tools help you evaluate any plan you find online—especially aggregate lists and forum links where quality varies. Score plans, estimate hidden costs, and sanity-check materials.
        </p>

        <PlanQualityScorecard />
        <HiddenCostEstimator />
        <QuickMaterialsCalculator />

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-20">Frequently Asked Questions</h2>

        <div className="space-y-6 my-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Are free chicken coop plans actually free?</h3>
            <p>
              The plan file is often free, but you still pay for materials, hardware cloth, roofing, fasteners, and upgrades. Some free plans also omit cutting lists and predator-proofing, which increases hidden costs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What is the biggest mistake people make using free chicken coop plans?</h3>
            <p>
              They build to the plan exactly as shown without upgrading ventilation, predator-proofing, and clean-out access. Those omissions usually create maintenance problems and extra spend later.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Which sources tend to have the most reliable coop guidance?</h3>
            <p>
              Land-grant university extension publications and engineering plan libraries are generally strongest on ventilation, space, and durability. DIY sites can be excellent for step-by-step visuals but often need predator-proofing upgrades.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Should I choose a tractor-style plan or a fixed coop plan?</h3>
            <p>
              Choose tractor plans if you want mobility and can move the coop frequently; choose fixed coops if you want larger capacity, easier weatherproofing, and automation options. Predator pressure and your yard layout matter most.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Is it better to build a coop or convert a shed?</h3>
            <p>
              Shed conversions can be the fastest route because your "structure" already exists. You still must add proper ventilation, roosts, nest boxes, and security upgrades.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Why do so many free plans under-budget the project?</h3>
            <p>
              They list lumber but omit the expensive parts: roofing details, fasteners, weatherproofing, latches/hinges, and especially hardware cloth. Also, "capacity" inflation leads people to build too small, then expand later.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-primary/10 p-6 rounded-lg my-8 border border-primary/20">
          <h3 className="text-xl font-semibold mb-3">Bottom Line</h3>
          <p className="mb-4">
            The best free chicken coop plans are rarely perfect out of the box. The winning approach is picking a strong source (or combining sources), then budgeting for upgrades where free plans commonly cut corners: predator-proofing, ventilation, roofing, and clean-out access.
          </p>
          <p className="font-medium mb-0">
            Do this next: Pick one plan, run the Scorecard, then let the upgrade list drive your shopping list.
          </p>
        </div>

        <p className="text-sm text-muted-foreground italic">
          This page provides general DIY planning guidance. Follow local building codes and manufacturer specs for fasteners, roofing, and treated lumber use.
        </p>
      </div>
    </BlogLayout>
  );
};

export default FreeChickenCoopPlans;
