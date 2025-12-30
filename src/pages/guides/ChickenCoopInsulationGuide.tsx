import React, { useState } from 'react';
import BlogLayout from '@/components/BlogLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { AlertTriangle, CheckCircle, Info, Thermometer, Wind, Droplets, Shield } from 'lucide-react';
import heroImage from '@/assets/guide-insulation.jpg';

const InsulationDecisionWizard = () => {
  const [winterLow, setWinterLow] = useState([20]);
  const [windExposure, setWindExposure] = useState('');
  const [condensation, setCondensation] = useState('');
  const [drafts, setDrafts] = useState('');
  const [result, setResult] = useState<{
    recommendation: string;
    priority: 'high' | 'medium' | 'low' | 'caution';
    actions: string[];
    cautions: string[];
  } | null>(null);

  const getRecommendation = () => {
    if (!windExposure || !condensation || !drafts) return;

    let needScore = 0;
    let moistureRisk = false;
    const actions: string[] = [];
    const cautions: string[] = [];

    // Temperature scoring
    if (winterLow[0] <= 0) needScore += 3;
    else if (winterLow[0] <= 15) needScore += 2;
    else if (winterLow[0] <= 25) needScore += 1;

    // Wind scoring
    if (windExposure === 'high') needScore += 2;
    else if (windExposure === 'medium') needScore += 1;

    // Condensation (this is a warning flag)
    if (condensation === 'yes') {
      moistureRisk = true;
      cautions.push('You reported regular condensation. Fix moisture first: increase high ventilation and stop leaks before adding insulation.');
    } else if (condensation === 'sometimes') {
      cautions.push('Occasional condensation suggests you should improve ventilation before insulating.');
    }

    // Drafts
    if (drafts === 'yes') {
      actions.push('Seal drafts at roost height (weatherstrip, patch gaps) without blocking high vents.');
      needScore += 1;
    } else if (drafts === 'sometimes') {
      actions.push('Check for subtle drafts at roost level on windy nights.');
    }

    // Build recommendation
    let recommendation = '';
    let priority: 'high' | 'medium' | 'low' | 'caution' = 'low';

    if (moistureRisk && condensation === 'yes') {
      priority = 'caution';
      recommendation = 'Pause insulation until moisture is controlled. If condensation is regular, insulation can hide or worsen the problem unless ventilation and dryness improve first.';
      actions.unshift('Increase high ventilation to exhaust moist air.');
      actions.push('Stop water entry: fix leaks, reduce splash, prevent wind-driven rain.');
    } else if (needScore >= 4) {
      priority = 'high';
      recommendation = 'Insulation is likely helpful. Given your cold/wind profile, insulation can improve comfort and reduce sharp temperature swings—especially roof insulation.';
      actions.unshift('Insulate the roof first if it\'s thin or sun-exposed; then consider walls if wind penetrates.');
      actions.push('Use insulation that can be fully enclosed behind plywood/OSB.');
      actions.push('Keep high vents open year-round; use baffles to prevent wind-driven drafts.');
    } else if (needScore >= 2) {
      priority = 'medium';
      recommendation = 'Insulation could help but may not be required. It can be a nice upgrade for more stability. Prioritize draft control and roof insulation, and keep ventilation strong.';
      actions.unshift('If you insulate, start with the roof and draft control upgrades.');
      actions.push('Stop leaks and water intrusion first (roof, windows, splash).');
    } else {
      priority = 'low';
      recommendation = 'Insulation may be optional. If your coop stays dry with no condensation and birds are draft-protected, insulation is often unnecessary. Focus on ventilation, dry bedding, and wind control.';
      actions.unshift('Keep high ventilation functioning year-round.');
      actions.push('Use baffles to block wind while exhausting moisture.');
    }

    setResult({ recommendation, priority, actions, cautions });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Thermometer className="h-5 w-5 text-primary" />
          Insulation Decision Wizard
        </CardTitle>
        <p className="text-sm text-muted-foreground">Answer these questions to get a personalized recommendation</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Typical winter overnight low (°F): {winterLow[0]}°F</Label>
          <Slider
            value={winterLow}
            onValueChange={setWinterLow}
            min={-20}
            max={50}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>-20°F (Extreme)</span>
            <span>50°F (Mild)</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Wind exposure</Label>
          <Select value={windExposure} onValueChange={setWindExposure}>
            <SelectTrigger>
              <SelectValue placeholder="Select wind exposure..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (protected yard)</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High (open area / gusty)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Do you see condensation inside?</Label>
          <Select value={condensation} onValueChange={setCondensation}>
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="sometimes">Sometimes</SelectItem>
              <SelectItem value="yes">Yes, regularly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Do birds get drafts at roost height?</Label>
          <Select value={drafts} onValueChange={setDrafts}>
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="sometimes">Not sure / sometimes</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={getRecommendation} className="w-full" size="lg">
          Get Recommendation
        </Button>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.priority === 'high' ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' :
            result.priority === 'medium' ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' :
            result.priority === 'caution' ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' :
            'bg-muted border-border'
          }`}>
            <div className="flex items-start gap-3 mb-3">
              {result.priority === 'caution' ? (
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
              ) : result.priority === 'high' ? (
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              ) : (
                <Info className="h-5 w-5 text-blue-600 mt-0.5" />
              )}
              <div>
                <h4 className="font-semibold mb-1">
                  {result.priority === 'high' ? 'Insulation Likely Helpful' :
                   result.priority === 'medium' ? 'Insulation Could Help' :
                   result.priority === 'caution' ? 'Fix Moisture First' :
                   'Insulation May Be Optional'}
                </h4>
                <p className="text-sm">{result.recommendation}</p>
              </div>
            </div>
            
            {result.cautions.length > 0 && (
              <div className="mt-4">
                <h5 className="font-medium text-amber-700 dark:text-amber-400 mb-2 text-sm">⚠️ Cautions</h5>
                <ul className="text-sm space-y-1">
                  {result.cautions.map((caution, i) => (
                    <li key={i} className="text-amber-800 dark:text-amber-300">• {caution}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4">
              <h5 className="font-medium text-sm mb-2">Best Next Actions</h5>
              <ul className="text-sm space-y-1">
                {result.actions.map((action, i) => (
                  <li key={i}>• {action}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const RValuePlannerTool = () => {
  const [insulationType, setInsulationType] = useState('');
  const [thickness, setThickness] = useState([2]);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<{
    rValue: number;
    typeName: string;
    quality: 'modest' | 'good' | 'excellent';
    notes: string[];
  } | null>(null);

  const rValuePerInch: Record<string, number> = {
    polyiso: 6.0,
    xps: 5.0,
    eps: 3.8,
    fiberglass: 3.2,
    rockwool: 4.0
  };

  const typeNames: Record<string, string> = {
    polyiso: 'Rigid Foam (Polyiso)',
    xps: 'Rigid Foam (XPS)',
    eps: 'Rigid Foam (EPS)',
    fiberglass: 'Fiberglass Batt',
    rockwool: 'Mineral Wool (Rockwool)'
  };

  const calculate = () => {
    if (!insulationType || !location) return;

    const rValue = rValuePerInch[insulationType] * thickness[0];
    const notes: string[] = [];
    
    notes.push('Cover insulation with a solid interior wall so birds cannot peck it.');
    notes.push('Seal drafts at roost height, but keep high ventilation for moisture exhaust.');

    if (location === 'roof') {
      notes.push('Roof insulation often gives the biggest comfort/condensation improvement first.');
    } else if (location === 'both') {
      notes.push('If insulating both roof and walls, double-check you still have plenty of high vent area.');
    }

    let quality: 'modest' | 'good' | 'excellent' = 'good';
    if (rValue < 8) {
      quality = 'modest';
      notes.unshift('This is a modest R-value. It can help stabilize swings but won\'t make the coop "warm".');
    } else if (rValue >= 12) {
      quality = 'excellent';
      notes.unshift('This is a solid insulation level for small livestock structures—ventilation still matters most.');
    }

    setResult({
      rValue,
      typeName: typeNames[insulationType],
      quality,
      notes
    });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Shield className="h-5 w-5 text-primary" />
          R-Value Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">Estimate R-value based on material and thickness</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Label>Insulation type</Label>
          <Select value={insulationType} onValueChange={setInsulationType}>
            <SelectTrigger>
              <SelectValue placeholder="Select insulation type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="polyiso">Rigid foam (Polyiso) - ~R-6/inch</SelectItem>
              <SelectItem value="xps">Rigid foam (XPS) - ~R-5/inch</SelectItem>
              <SelectItem value="eps">Rigid foam (EPS) - ~R-3.8/inch</SelectItem>
              <SelectItem value="fiberglass">Fiberglass batt - ~R-3.2/inch</SelectItem>
              <SelectItem value="rockwool">Mineral wool - ~R-4/inch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-medium">Thickness: {thickness[0]}" inches</Label>
          <Slider
            value={thickness}
            onValueChange={setThickness}
            min={0.5}
            max={6}
            step={0.5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.5"</span>
            <span>6"</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Where are you insulating?</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="roof">Roof</SelectItem>
              <SelectItem value="walls">Walls</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculate} className="w-full" size="lg">
          Calculate R-Value
        </Button>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.quality === 'excellent' ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' :
            result.quality === 'modest' ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' :
            'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
          }`}>
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">Estimated R-Value</p>
              <p className="text-4xl font-bold text-primary">R-{result.rValue.toFixed(1)}</p>
              <p className="text-sm mt-1">{result.typeName} • {thickness[0]}" thick</p>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium text-sm mb-2">Notes</h5>
              <ul className="text-sm space-y-1">
                {result.notes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const CondensationRiskChecker = () => {
  const [climate, setClimate] = useState('');
  const [ventilation, setVentilation] = useState('');
  const [litter, setLitter] = useState('');
  const [sealing, setSealing] = useState('');
  const [result, setResult] = useState<{
    riskLevel: 'low' | 'moderate' | 'high' | 'critical';
    score: number;
    flags: string[];
    fixes: string[];
  } | null>(null);

  const checkRisk = () => {
    if (!climate || !ventilation || !litter || !sealing) return;

    let risk = 0;
    const flags: string[] = [];
    const fixes: string[] = [];

    // Climate scoring
    if (climate === 'mixed') risk += 1;
    if (climate === 'humid') risk += 2;
    if (climate === 'coldHumid') risk += 3;

    // Ventilation scoring
    if (ventilation === 'ok') risk += 2;
    if (ventilation === 'poor') risk += 4;

    // Litter scoring
    if (litter === 'mixed') risk += 1;
    if (litter === 'wet') risk += 3;

    // Sealing scoring
    if (sealing === 'maybe') risk += 2;
    if (sealing === 'yes') risk += 4;

    // Build flags
    if (ventilation !== 'good') {
      flags.push('Ventilation may not be exhausting moisture fast enough.');
    }
    if (litter !== 'dry') {
      flags.push('Wet litter increases humidity and ammonia; it also makes birds feel colder.');
    }
    if (sealing !== 'no') {
      flags.push('Sealing the coop tight after insulating can trap moisture and increase condensation.');
    }
    if (climate === 'coldHumid') {
      flags.push('Cold + humid conditions are the highest-risk combo for condensation and frostbite.');
    }

    // Build fixes
    fixes.push('Keep high vents open year-round; add baffles to block wind while exhausting moisture.');
    fixes.push('Stop bulk water: fix leaks, reduce splash, prevent wind-driven rain entering vents.');
    fixes.push('Remove wet bedding immediately; increase bedding depth and carbon content as needed.');
    
    if (sealing !== 'no') {
      fixes.push('Do not seal the coop airtight. Prioritize controlled airflow over heat retention.');
    }
    if (ventilation === 'poor') {
      fixes.push('Add more high vent area and ensure it\'s above roost height to avoid drafts on birds.');
    }

    let riskLevel: 'low' | 'moderate' | 'high' | 'critical' = 'low';
    if (risk >= 10) riskLevel = 'critical';
    else if (risk >= 6) riskLevel = 'high';
    else if (risk >= 3) riskLevel = 'moderate';

    setResult({ riskLevel, score: risk, flags, fixes });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Droplets className="h-5 w-5 text-primary" />
          Condensation Risk Checker
        </CardTitle>
        <p className="text-sm text-muted-foreground">Identify moisture risks before they become problems</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="space-y-2">
          <Label>Climate profile</Label>
          <Select value={climate} onValueChange={setClimate}>
            <SelectTrigger>
              <SelectValue placeholder="Select climate..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dry">Dry / desert</SelectItem>
              <SelectItem value="mixed">Mixed / seasonal</SelectItem>
              <SelectItem value="humid">Humid</SelectItem>
              <SelectItem value="coldHumid">Cold + humid winters</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Ventilation quality</Label>
          <Select value={ventilation} onValueChange={setVentilation}>
            <SelectTrigger>
              <SelectValue placeholder="Select ventilation quality..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="good">Good (high vents, no morning damp)</SelectItem>
              <SelectItem value="ok">Okay (sometimes damp)</SelectItem>
              <SelectItem value="poor">Poor (condensation/ammonia)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Litter stays…</Label>
          <Select value={litter} onValueChange={setLitter}>
            <SelectTrigger>
              <SelectValue placeholder="Select litter condition..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dry">Dry most of the time</SelectItem>
              <SelectItem value="mixed">Mixed (wet patches happen)</SelectItem>
              <SelectItem value="wet">Often damp/wet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Are you planning to "seal the coop tight" after insulating?</Label>
          <Select value={sealing} onValueChange={setSealing}>
            <SelectTrigger>
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no">No</SelectItem>
              <SelectItem value="maybe">Maybe / unsure</SelectItem>
              <SelectItem value="yes">Yes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={checkRisk} className="w-full" size="lg">
          Check Risk
        </Button>

        {result && (
          <div className={`p-4 rounded-lg border-2 ${
            result.riskLevel === 'critical' ? 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800' :
            result.riskLevel === 'high' ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800' :
            result.riskLevel === 'moderate' ? 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' :
            'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
          }`}>
            <div className="text-center mb-4">
              <p className="text-sm text-muted-foreground">Condensation Risk Level</p>
              <p className={`text-2xl font-bold ${
                result.riskLevel === 'critical' ? 'text-red-600' :
                result.riskLevel === 'high' ? 'text-orange-600' :
                result.riskLevel === 'moderate' ? 'text-amber-600' :
                'text-green-600'
              }`}>
                {result.riskLevel === 'critical' ? '⚠️ Critical Risk' :
                 result.riskLevel === 'high' ? '⚠️ High Risk' :
                 result.riskLevel === 'moderate' ? 'Moderate Risk' :
                 '✓ Low Risk'}
              </p>
              <p className="text-xs text-muted-foreground mt-1">Risk score: {result.score} (higher = more caution needed)</p>
            </div>
            
            {result.flags.length > 0 && (
              <div className="mt-4">
                <h5 className="font-medium text-sm mb-2 flex items-center gap-1">
                  <AlertTriangle className="h-4 w-4" /> Flags
                </h5>
                <ul className="text-sm space-y-1">
                  {result.flags.map((flag, i) => (
                    <li key={i}>• {flag}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4">
              <h5 className="font-medium text-sm mb-2">Recommended Fixes</h5>
              <ul className="text-sm space-y-1">
                {result.fixes.map((fix, i) => (
                  <li key={i}>• {fix}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ChickenCoopInsulationGuide = () => {
  const article = {
    id: 'chicken-coop-insulation-guide',
    slug: 'chicken-coop-insulation-guide',
    title: 'Chicken Coop Insulation Guide: When and How to Insulate (2025)',
    excerpt: 'Complete insulation guide with 3 interactive tools: Insulation Decision Wizard, R-Value Planner, and Condensation Risk Checker. Climate-based decisions and safe installation.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Cold Climate Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building' as const,
    tags: ['Insulation', 'Winter', 'Moisture Control', 'Ventilation', 'Climate'],
    difficulty: 'Intermediate' as const,
    costRange: '$100-$600',
    featured: true,
  };

  const tableOfContents = [
    { id: 'when-to-insulate', title: 'When to Insulate (and When Not To)' },
    { id: 'climate-requirements', title: 'Climate Requirements' },
    { id: 'what-insulation-does', title: 'What Insulation Does (and Doesn\'t)' },
    { id: 'materials', title: 'Insulation Materials' },
    { id: 'how-to-insulate', title: 'How to Insulate Safely' },
    { id: 'ventilation-combo', title: 'Ventilation + Insulation' },
    { id: 'condensation', title: 'Condensation: The Real Enemy' },
    { id: 'retrofitting', title: 'Retrofitting an Existing Coop' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
    { id: 'tools', title: 'Interactive Planning Tools' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <BlogLayout
      article={article}
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introduction */}
        <p className="lead text-xl text-muted-foreground mb-6">
          People ask about chicken coop insulation for a good reason: winter hits, egg production dips, and you start worrying about comfort and frostbite. But insulation is one of the most misunderstood upgrades in chicken keeping. Done right, it can improve comfort and help stabilize temperature swings. Done wrong, it can trap moisture and turn your coop into a damp box that smells like ammonia—and that's when health issues show up.
        </p>

        <div className="bg-primary/5 p-6 rounded-lg my-8 border-l-4 border-primary">
          <p className="font-semibold text-lg mb-2">Best Mindset</p>
          <p className="mb-0">Insulation is a "stabilizer," not a heater. The #1 priority is a coop that stays dry with high ventilation and no drafts at roost height.</p>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg my-8 border border-amber-200 dark:border-amber-800">
          <p className="font-semibold flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Most Common Insulation Failure
          </p>
          <p className="mb-2">Exposed foam or fiberglass + trapped moisture. Chickens peck insulation, and damp coops create ammonia, mold, and frostbite risk.</p>
          <p className="font-medium mb-0">If you only do one upgrade: improve ventilation and stop leaks. Insulation comes after.</p>
        </div>

        {/* When to Insulate */}
        <h2 id="when-to-insulate" className="scroll-mt-20">When You Should Insulate (and When You Shouldn't)</h2>
        
        <p>
          Not every coop needs insulation. Many backyard flocks do great through winter with good ventilation, dry bedding, and a draft-controlled roosting area. Insulation becomes more valuable as your climate becomes more extreme—either prolonged cold, strong wind exposure, or high heat—and as your coop design becomes less forgiving (thin walls, metal surfaces, lots of temperature swing).
        </p>

        <h3>Good Reasons to Insulate</h3>
        <p>Insulation helps if you have:</p>
        <ul>
          <li>Long periods below freezing (especially nights that stay cold)</li>
          <li>High winds that cut through thin walls (draft stress)</li>
          <li>Large temperature swings (warm days, freezing nights)</li>
          <li>Very hot summers where the coop heats up like an oven</li>
          <li>A coop with hard-to-control drafts (you want a more stable interior zone)</li>
        </ul>

        <h3>Insulation Is Optional If You Have:</h3>
        <ul>
          <li>Mild winters where temps rarely stay below freezing</li>
          <li>A well-built coop with good airflow and thick bedding management</li>
          <li>Birds that are cold-hardy breeds and have wind protection</li>
          <li>A small flock that produces enough body heat without humidity buildup</li>
        </ul>

        <h3>When Insulation Is the Wrong First Move</h3>
        <p>
          If your coop is wet, drafty, or poorly ventilated, insulation won't fix the root problem. It can actually make things worse by hiding condensation and allowing dampness to persist. In those cases, your first moves should be:
        </p>
        <ul>
          <li>Stop leaks (roof edges, windows, door frames, run-in water)</li>
          <li>Increase high ventilation (moisture out, without drafts on roosts)</li>
          <li>Improve bedding strategy (keep litter dry and deep enough)</li>
          <li>Block wind at roost height (without sealing the coop airtight)</li>
        </ul>

        {/* Climate Requirements */}
        <h2 id="climate-requirements" className="scroll-mt-20">Climate Requirements: Cold, Wind, Heat, and Humidity</h2>
        
        <p>
          Insulation decisions aren't only about how cold it gets. The "need" depends on a mix of factors: minimum temperature, wind exposure, humidity patterns, and how quickly your coop loses or gains heat.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Thermometer className="h-5 w-5 text-blue-500" />
                Cold Climates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                In prolonged cold, insulation can reduce how quickly the coop drops to outside temperature at night. That helps birds avoid rapid chilling. However, if humidity rises, the coop can feel colder and frostbite risk rises. Insulation only helps if ventilation and dryness are handled.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Wind className="h-5 w-5 text-gray-500" />
                Windy Climates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Wind is a bigger problem than many realize. Wind-driven drafts at roost height can cause stress even when temps aren't extreme. Insulation can reduce wind penetration, but a better first step is draft control: seal gaps at bird level while keeping high vents open.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Thermometer className="h-5 w-5 text-orange-500" />
                Hot Climates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                In very hot summers, insulation can be a major benefit—especially for coops that heat up in direct sun. Insulating the roof and adding radiant barriers can slow heat transfer. But ventilation is critical: birds cool primarily through airflow and shade.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Droplets className="h-5 w-5 text-cyan-500" />
                Humid Climates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                In humid regions, the biggest enemy is condensation. Warm moist air inside hits cold surfaces and drops water. If insulation reduces cold surface exposure, it can help. If installed poorly, it creates hidden damp pockets that never dry. Your "win condition" is still: moisture exits reliably.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-4 rounded-lg my-6">
          <p className="font-medium mb-0">
            <strong>Climate Takeaway:</strong> If you get cold nights + humid air, prioritize ventilation and dry litter before chasing warmth.
          </p>
        </div>

        {/* What Insulation Does */}
        <h2 id="what-insulation-does" className="scroll-mt-20">What Insulation Does (and What It Doesn't)</h2>
        
        <p>
          Insulation slows heat transfer. That's it. It doesn't "make heat," and it doesn't replace ventilation. In a chicken coop, insulation can stabilize temperature swings, reduce drafts through thin materials, and improve comfort. But it can't solve moisture problems by itself—and if you insulate without understanding moisture, you can accidentally build a condensation machine.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">✓ What Insulation Helps With</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li><strong>Temperature stability:</strong> fewer rapid swings between day and night</li>
              <li><strong>Roof heat gain reduction:</strong> especially under sun exposure in summer</li>
              <li><strong>Draft reduction:</strong> when combined with good sealing and interior sheathing</li>
              <li><strong>Comfort buffer:</strong> birds feel less "sharp cold" when temps drop fast</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">✗ What Insulation Does NOT Fix</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li><strong>Poor ventilation:</strong> moist air still builds up without exit</li>
              <li><strong>Wet litter:</strong> wet bedding creates ammonia regardless of wall R-value</li>
              <li><strong>Bad roof leaks:</strong> insulation gets wet and becomes worse than useless</li>
              <li><strong>Too small a coop:</strong> crowding creates humidity and stress at any temperature</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-lg my-6 text-center">
          <p className="font-semibold text-lg mb-0">
            Simple Rule: A dry, draft-controlled coop at 20°F often beats a damp "warm" coop at 35°F.
          </p>
        </div>

        {/* Materials */}
        <h2 id="materials" className="scroll-mt-20">Chicken Coop Insulation Materials: Pros, Cons, and Safety</h2>
        
        <p>
          The best insulation for chicken coops balances three things: R-value per inch, moisture tolerance, and safety. Chickens peck. Rodents chew. Dust and ammonia exist. Whatever you install must be protected behind an interior wall.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3 text-left font-semibold">Material</th>
                <th className="p-3 text-left font-semibold">Pros</th>
                <th className="p-3 text-left font-semibold">Cons</th>
                <th className="p-3 text-left font-semibold">Must Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-medium">Rigid Foam Board<br /><span className="text-xs text-muted-foreground">(polyiso, XPS, EPS)</span></td>
                <td className="p-3">High R-value per inch; easy DIY cutting; good for retrofits</td>
                <td className="p-3">Peck/chew risk; seams can leak air; some types absorb water</td>
                <td className="p-3">Cover with plywood/OSB; seal seams; keep away from pecking</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Fiberglass Batts</td>
                <td className="p-3">Affordable; common sizes; good R-value</td>
                <td className="p-3">Must stay dry; messy if exposed; not peck-safe</td>
                <td className="p-3">Fully enclose behind solid interior sheathing</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Mineral Wool<br /><span className="text-xs text-muted-foreground">(Rockwool)</span></td>
                <td className="p-3">Handles moisture better than fiberglass; fire resistant; dense</td>
                <td className="p-3">More expensive; still must be enclosed</td>
                <td className="p-3">Enclose; seal air leaks; protect edges</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-medium">Spray Foam<br /><span className="text-xs text-muted-foreground">(professional)</span></td>
                <td className="p-3">Air sealing + insulation in one; great for odd gaps</td>
                <td className="p-3">Cost; fumes during install; must be protected; hard to modify</td>
                <td className="p-3">Use safely; cover; ensure ventilation is still adequate</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Reflective Radiant Barrier</td>
                <td className="p-3">Reduces radiant heat gain; good for hot climates</td>
                <td className="p-3">Needs air gap to work; not a replacement for insulation in cold</td>
                <td className="p-3">Install with air gap; pair with airflow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-6 border border-amber-200 dark:border-amber-800">
          <h4 className="font-semibold mb-2">Materials to Be Cautious About</h4>
          <ul className="text-sm mb-0">
            <li><strong>"Soft" or exposed insulation:</strong> Loose fill, exposed batts, or anything fluffy invites pecking and nesting behavior. It catches dust and holds moisture/odors.</li>
            <li><strong>Plastic-wrapped interior walls:</strong> Plastic can trap moisture and create hidden condensation pockets. In coops, you want controlled airflow, not a sealed vapor-tight box.</li>
          </ul>
        </div>

        <div className="bg-muted p-4 rounded-lg my-6">
          <p className="font-medium mb-0">
            <strong>Safe Baseline:</strong> Insulation in the cavity + sealed air leaks + solid interior wall (plywood/OSB) + strong high ventilation.
          </p>
        </div>

        {/* How to Insulate */}
        <h2 id="how-to-insulate" className="scroll-mt-20">How to Insulate a Chicken Coop Safely (Step-by-Step)</h2>
        
        <p>
          The exact steps depend on whether you're insulating a new build or retrofitting an existing coop, but the principles are the same: stop water, seal air leaks, add insulation, then protect it from chickens and moisture.
        </p>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Step 1: Stop Bulk Water (Leaks and Splash)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 mb-0">
                <li>Fix roof leaks and flashing</li>
                <li>Make sure rain cannot blow into vents or gaps</li>
                <li>Check around doors/windows for water intrusion</li>
                <li>Confirm the coop is elevated or has drainage so water doesn't wick up from below</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Step 2: Identify and Seal Air Leaks (Drafts at Roost Height)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Draft control matters more than "cozy walls." A small gap that blows directly on birds at night creates stress. Seal cracks at bird level, but don't block high vents that exhaust moist air.</p>
              <ul className="text-sm space-y-1 mb-0">
                <li>Seal gaps around framing and panel seams</li>
                <li>Weatherstrip doors where wind whistles through</li>
                <li>Use baffles/covers for vents to prevent wind-driven drafts</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Step 3: Install Insulation in Cavities (No Exposed Edges)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                Cut rigid foam board to friction-fit between studs/rafters, or place batts snugly without compressing them. The goal is no big voids and no exposed insulation in the interior.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Step 4: Cover Insulation with a Durable Interior Wall</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                This step is non-negotiable. Chickens peck anything interesting. Rodents chew. The interior covering should be: smooth-ish, sturdy, and easy to clean. Common choices: plywood or OSB.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Step 5: Keep Ventilation High and Adjustable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                After insulation, you may notice the coop "holds" more moisture because surfaces are less cold—but the moisture still exists. Ensure you have high vents that remain open in winter (while preventing drafts at roost height).
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg my-6 border border-red-200 dark:border-red-800">
          <p className="font-semibold flex items-center gap-2 mb-0">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Install Safety Note: Avoid leaving sharp fasteners, exposed foam edges, or gaps where birds can peck and pull insulation loose.
          </p>
        </div>

        {/* Ventilation Combo */}
        <h2 id="ventilation-combo" className="scroll-mt-20">Ventilation + Insulation (The Non-Negotiable Combo)</h2>
        
        <p>
          In winter, many people reduce ventilation because they fear cold. That's where problems begin. Chickens produce moisture through breathing and droppings. Without ventilation, that moisture accumulates. Moist air feels colder and can lead to frostbite and respiratory irritation. Insulation doesn't remove moisture—ventilation does.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-3">✓ Do</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>Keep high vents open to exhaust moist air</li>
              <li>Use baffles so wind doesn't blast directly on roosts</li>
              <li>Ventilate more in damp weather and less in calm, dry cold</li>
              <li>Watch for morning condensation and adjust</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-3">✗ Don't</h4>
            <ul className="text-sm space-y-2 mb-0">
              <li>Seal the coop airtight "to keep it warm"</li>
              <li>Rely on a small low vent that creates drafts</li>
              <li>Block vents because bedding feels cold</li>
              <li>Assume "no smell" means "no moisture"</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg my-6 text-center">
          <p className="font-medium mb-0">
            A good insulated coop often feels less drafty, not necessarily "warm." The win is stable comfort and dryness.
          </p>
        </div>

        {/* Condensation */}
        <h2 id="condensation" className="scroll-mt-20">Condensation: The Real Enemy of Winter Coops</h2>
        
        <p>
          Condensation happens when warm moist air touches a cold surface and drops water. In a coop, that means wet walls, wet litter, and higher ammonia. If you're thinking about chicken coop insulation, you should also be thinking about condensation control.
        </p>

        <h3>How Condensation Shows Up</h3>
        <ul>
          <li>Water droplets on windows or underside of roof panels</li>
          <li>Damp smell even after cleaning</li>
          <li>Litter that stays wet on top or cakes quickly</li>
          <li>Frost on interior surfaces (then melts during the day)</li>
        </ul>

        <h3>Condensation Control Checklist</h3>
        <ul>
          <li>Increase high ventilation (exhaust moist air)</li>
          <li>Stop water entry (leaks, splash, wind-driven rain)</li>
          <li>Use adequate bedding depth and replace wet patches immediately</li>
          <li>Insulate the roof first if it's the coldest surface (often is)</li>
          <li>Ensure the coop floor stays dry (drainage, elevation, flooring system)</li>
        </ul>

        <div className="bg-primary/10 p-4 rounded-lg my-6 text-center">
          <p className="font-semibold mb-0">
            Reality Check: Condensation is a moisture problem, not a temperature problem. The fix is airflow + dryness.
          </p>
        </div>

        {/* Retrofitting */}
        <h2 id="retrofitting" className="scroll-mt-20">Retrofitting an Existing Coop (Practical Approaches)</h2>
        
        <p>
          Retrofitting is common because most coops start as basic sheds. The key is choosing upgrades that don't create hidden moisture pockets and don't reduce service access.
        </p>

        <div className="space-y-6 my-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Retrofit Path A: Roof Insulation First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                Roofs are where most heat escapes in winter and where most heat enters in summer. A thin roof surface also becomes a condensation magnet. Insulating the roof can reduce condensation and improve temperature stability more than insulating walls first.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Retrofit Path B: Draft Control + Wind Baffles + Keep High Vents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                Many coops don't need full insulation—they need better draft control at roost height. Weatherstrip, patch gaps, and add baffles that reduce wind without blocking high ventilation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Retrofit Path C: Add Rigid Foam + Interior Sheathing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-0">
                If the coop is framed, rigid foam between studs plus an interior plywood layer is one of the cleanest retrofits. It adds insulation and makes interior walls more durable and easier to clean.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-4 rounded-lg my-6">
          <p className="font-medium mb-0">
            <strong>Retrofit Pro Tip:</strong> If your coop is hard to clean now, don't add layers that make it harder. Keep access simple.
          </p>
        </div>

        {/* Common Mistakes */}
        <h2 id="common-mistakes" className="scroll-mt-20">Common Chicken Coop Insulation Mistakes (and What to Do Instead)</h2>

        <div className="space-y-6 my-8">
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="pb-3 bg-red-50 dark:bg-red-900/20">
              <CardTitle className="text-lg text-red-800 dark:text-red-300">Mistake #1: Exposed Foam Board</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-2">Chickens peck foam. They'll shred it, eat bits, and create a mess. Exposed foam also gets damaged and becomes a rodent target.</p>
              <p className="text-sm font-medium mb-0">✓ Fix: Cover foam completely with a solid interior wall (plywood/OSB).</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="pb-3 bg-red-50 dark:bg-red-900/20">
              <CardTitle className="text-lg text-red-800 dark:text-red-300">Mistake #2: Adding Insulation but Reducing Ventilation</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-2">People insulate, then "seal up" the coop to keep it warm. Humidity rises, condensation forms, and the coop becomes damper.</p>
              <p className="text-sm font-medium mb-0">✓ Fix: Keep high ventilation working year-round. Insulate ≠ seal.</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="pb-3 bg-red-50 dark:bg-red-900/20">
              <CardTitle className="text-lg text-red-800 dark:text-red-300">Mistake #3: Ignoring the Floor and Litter System</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-2">Wet litter defeats insulation. If your floor stays damp or litter is thin, you'll fight ammonia and cold stress.</p>
              <p className="text-sm font-medium mb-0">✓ Fix: Upgrade bedding strategy and stop water intrusion at the floor level.</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardHeader className="pb-3 bg-red-50 dark:bg-red-900/20">
              <CardTitle className="text-lg text-red-800 dark:text-red-300">Mistake #4: Using Plastic Vapor Barriers Without a Plan</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm mb-2">Plastic can trap moisture if the coop is not built like a fully engineered building envelope. Backyard coops typically benefit more from airflow and dry materials than from vapor-tight layers.</p>
              <p className="text-sm font-medium mb-0">✓ Fix: Focus on air leaks, ventilation, and materials that can dry.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg my-6 text-center border border-red-300 dark:border-red-700">
          <p className="font-semibold text-red-800 dark:text-red-300 mb-0">
            Worst Combo: Insulated + sealed tight + damp litter. That's how you get ammonia and frostbite risk at the same time.
          </p>
        </div>

        {/* Interactive Tools */}
        <h2 id="tools" className="scroll-mt-20">Interactive Planning Tools</h2>
        
        <p>
          Use these tools to decide whether to insulate and how to do it safely. Run the Decision Wizard first, then use the Condensation Risk Checker before you buy materials.
        </p>

        <InsulationDecisionWizard />
        <RValuePlannerTool />
        <CondensationRiskChecker />

        {/* FAQ */}
        <h2 id="faq" className="scroll-mt-20">Frequently Asked Questions</h2>

        <div className="space-y-6 my-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Do chicken coops need insulation?</h3>
            <p>
              Not always. Insulation can help in climates with prolonged cold, strong winds, or extreme heat, but ventilation and dryness matter more than warmth. Many coops succeed without insulation if they are dry, draft-controlled, and well-ventilated.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What is the best insulation for a chicken coop?</h3>
            <p>
              Foam board (rigid) is popular because it offers good R-value and can be cut to fit, but it must be fully covered so chickens can't peck it. Fiberglass works too when enclosed behind a solid interior wall. Avoid exposed insulation of any kind.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Should I add a vapor barrier in a chicken coop?</h3>
            <p>
              Usually you should focus on ventilation and preventing leaks rather than sealing the coop with plastic. Vapor barrier decisions depend on climate and construction. Trapping moisture inside can cause condensation, mold, and ammonia problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Will insulation stop frostbite?</h3>
            <p>
              Frostbite prevention is mostly about controlling humidity and drafts at roost level. Insulation can help stabilize temperatures, but if humidity is high, frostbite risk can remain. Dry bedding and high ventilation are key.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Do chickens need a heated coop if it's insulated?</h3>
            <p>
              Insulation does not automatically mean you need heat. Many flocks do fine without heat if the coop is dry, draft-controlled, and well-ventilated. Heating can add fire risk and can increase humidity if not ventilated well.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Should I insulate the roof or walls first?</h3>
            <p>
              Roof first is often the highest impact because it reduces heat gain in summer and heat loss/condensation in winter. Walls can come next if your climate is extreme or if wind penetrates thin walls.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">How do I know if I insulated "wrong"?</h3>
            <p>
              Warning signs include new condensation, wet litter that stays wet, stronger ammonia smell, hidden damp spots behind coverings, or birds avoiding certain roost areas due to drafts. The fix is usually more high ventilation and addressing leaks.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-primary/10 p-6 rounded-lg my-8 border border-primary/20">
          <h3 className="text-xl font-semibold mb-3">Bottom Line</h3>
          <p className="mb-4">
            A smart chicken coop insulation upgrade is climate-driven and moisture-aware. Insulate when you need temperature stability (prolonged cold, strong wind, or intense heat), but only after you can keep the coop dry and ventilated. Choose materials you can fully enclose, seal air leaks at bird level, and keep high ventilation working year-round. That combination delivers comfort without creating condensation problems.
          </p>
          <p className="font-medium mb-0">
            Fast next step: Run the Decision Wizard, then use the Condensation Risk Checker before you buy materials.
          </p>
        </div>

        <p className="text-sm text-muted-foreground italic">
          This guide is practical planning advice. Follow manufacturer safety instructions for insulation, adhesives, and coatings, and maintain adequate ventilation at all times.
        </p>
      </div>
    </BlogLayout>
  );
};

export default ChickenCoopInsulationGuide;
