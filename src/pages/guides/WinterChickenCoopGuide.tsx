import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, XCircle, AlertTriangle, Thermometer, Shield, Droplets, Wind, Zap, Snowflake, Home, Printer, RotateCcw } from 'lucide-react';
import heroImage from '@/assets/guide-winter-coop.jpg';

const article = getArticleBySlug('winter-chicken-coop-guide');

// Heater Decision Tool Component
const HeaterDecisionTool = () => {
  const [minTemp, setMinTemp] = useState('20');
  const [windExposure, setWindExposure] = useState('medium');
  const [moistureRisk, setMoistureRisk] = useState('medium');
  const [vulnerableBirds, setVulnerableBirds] = useState('no');
  const [showResult, setShowResult] = useState(false);

  const getRecommendation = () => {
    let score = 0;
    const temp = parseInt(minTemp) || 20;
    
    // Temperature scoring
    if (temp <= 0) score += 3;
    else if (temp <= 10) score += 2;
    else if (temp <= 20) score += 1;
    
    // Wind exposure scoring
    if (windExposure === 'high') score += 2;
    else if (windExposure === 'medium') score += 1;
    
    // Moisture risk scoring
    if (moistureRisk === 'high') score += 2;
    else if (moistureRisk === 'medium') score += 1;
    
    // Vulnerable birds scoring
    if (vulnerableBirds === 'yes') score += 3;
    else if (vulnerableBirds === 'some') score += 1;

    if (score >= 7) {
      return {
        type: 'coop-heat',
        title: 'Consider Localized Coop Heat',
        description: 'Your conditions suggest some form of coop heating may be beneficial. Focus on low-watt radiant panels rather than heat lamps. Prioritize water heating and ensure proper ventilation is maintained.',
        tips: [
          'Use low-watt radiant panels mounted securely',
          'Keep distance from bedding and combustibles',
          'Maintain high ventilation—don\'t seal the coop',
          'Have a power outage backup plan'
        ],
        color: 'text-amber-600',
        bgColor: 'bg-amber-50'
      };
    } else if (score >= 4) {
      return {
        type: 'water-heat',
        title: 'Heat Water, Not Air',
        description: 'Focus on preventing water from freezing. Your coop conditions are manageable for healthy birds if you maintain proper ventilation and draft control at roost level.',
        tips: [
          'Use heated water bases or heated waterers',
          'Protect cords from pecking and moisture',
          'Use GFCI protection where possible',
          'Have backup water containers for outages'
        ],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      };
    } else {
      return {
        type: 'no-heat',
        title: 'No Coop Heat Needed',
        description: 'Your conditions suggest healthy adult chickens will do fine without supplemental heat. Focus on keeping the coop dry, draft-free at roost level, and well-ventilated high.',
        tips: [
          'Block drafts at roost height only',
          'Keep high ventilation open',
          'Ensure bedding stays dry',
          'Monitor for condensation on walls/ceiling'
        ],
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      };
    }
  };

  const result = getRecommendation();

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Thermometer className="h-5 w-5 text-primary" />
          Heater Decision Tool
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Should you prioritize "no heat," "water heat," or "localized coop heat"?
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="minTemp">Typical Coldest Night (°F)</Label>
            <Input
              id="minTemp"
              type="number"
              value={minTemp}
              onChange={(e) => setMinTemp(e.target.value)}
              className="mt-1"
              placeholder="e.g., 15"
            />
          </div>
          <div>
            <Label>Wind Exposure at Coop</Label>
            <Select value={windExposure} onValueChange={setWindExposure}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (sheltered yard / windbreak)</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High (open area / frequent strong wind)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Moisture Risk</Label>
            <Select value={moistureRisk} onValueChange={setMoistureRisk}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (dry climate, coop stays dry)</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High (wet winters / condensation issues)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Any Vulnerable Birds?</Label>
            <Select value={vulnerableBirds} onValueChange={setVulnerableBirds}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No (healthy adult flock)</SelectItem>
                <SelectItem value="some">Some (small/older/recovering birds)</SelectItem>
                <SelectItem value="yes">Yes (ill/recovering/very young)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={() => setShowResult(true)} className="w-full md:w-auto">
          Get Recommendation
        </Button>

        {showResult && (
          <div className={`mt-6 rounded-lg border p-4 ${result.bgColor}`}>
            <h4 className={`font-bold text-lg ${result.color}`}>
              {result.title}
            </h4>
            <p className="text-muted-foreground mt-2">{result.description}</p>
            <ul className="mt-4 space-y-2">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Insulation Planner Component
const InsulationPlanner = () => {
  const [wallType, setWallType] = useState('standard');
  const [hasHighVents, setHasHighVents] = useState('yes');
  const [canCoverInsulation, setCanCoverInsulation] = useState('yes');
  const [showResult, setShowResult] = useState(false);

  const getPlan = () => {
    let score = 0;
    
    // Wall type scoring
    if (wallType === 'thin') score += 2;
    else if (wallType === 'standard') score += 1;
    
    // High vents scoring (good vents = good)
    if (hasHighVents === 'yes') score += 2;
    else if (hasHighVents === 'some') score += 1;
    
    // Can cover insulation scoring
    if (canCoverInsulation === 'yes') score += 2;
    else if (canCoverInsulation === 'maybe') score += 1;

    const canInsulate = canCoverInsulation !== 'no';
    const hasVentilation = hasHighVents !== 'no';

    if (canInsulate && hasVentilation && wallType !== 'solid') {
      return {
        type: 'good',
        title: 'Good Candidate for Insulation',
        description: 'Insulation can stabilize temps and reduce swings. Keep high ventilation open.',
        steps: [
          'Use rigid foam in wall/ceiling cavities and fully cover with solid interior panel',
          'Keep high vents open and predator-protected',
          'Prioritize draft control at roost height rather than sealing everything',
          'Monitor for condensation during first cold snap and adjust airflow if needed'
        ],
        warnings: [],
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      };
    } else if (!canInsulate) {
      return {
        type: 'skip',
        title: 'Skip Interior Insulation',
        description: 'Since you can\'t fully cover insulation, consider exterior solutions instead.',
        steps: [
          'Fix drafts at roost height and water leaks first',
          'Use exterior windbreaks (straw bales, panels) as simpler improvement',
          'Focus on bedding depth and moisture control',
          'Ensure high ventilation remains open'
        ],
        warnings: ['Exposed insulation will be pecked and can harm birds if ingested'],
        color: 'text-amber-600',
        bgColor: 'bg-amber-50'
      };
    } else if (!hasVentilation) {
      return {
        type: 'fix-first',
        title: 'Fix Ventilation First',
        description: 'Insulating without proper ventilation will trap moisture and make problems worse.',
        steps: [
          'Add or restore high ventilation near the roofline before insulating',
          'Plan a solid interior barrier so insulation is not exposed',
          'Do a leak and condensation audit after changes',
          'If you can\'t add vents, consider exterior windbreaks instead'
        ],
        warnings: ['Insulating a poorly-ventilated coop increases condensation and frostbite risk'],
        color: 'text-red-600',
        bgColor: 'bg-red-50'
      };
    } else {
      return {
        type: 'moderate',
        title: 'Moderate Candidate',
        description: 'Insulation may help, but focus on drafts and moisture first.',
        steps: [
          'Fix drafts at roost height and water leaks first (biggest payoff)',
          'If insulating, do it only where you can fully cover and keep vents open',
          'Consider exterior windbreaks as simpler improvement',
          'Reassess after bedding stays dry and condensation is under control'
        ],
        warnings: [],
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      };
    }
  };

  const result = getPlan();

  return (
    <Card className="border-secondary/30 bg-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Home className="h-5 w-5 text-secondary-foreground" />
          Insulation Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Assess insulation impact and whether you're likely to trap moisture.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label>Wall Type</Label>
            <Select value={wallType} onValueChange={setWallType}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thin">Thin walls (simple panels)</SelectItem>
                <SelectItem value="standard">Standard framed walls</SelectItem>
                <SelectItem value="solid">Solid/heavy build (thick wood)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Do You Have High Vents?</Label>
            <Select value={hasHighVents} onValueChange={setHasHighVents}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes (vents near roofline)</SelectItem>
                <SelectItem value="some">Some (small vents)</SelectItem>
                <SelectItem value="no">Not really / mostly sealed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Can You Cover Insulation?</Label>
            <Select value={canCoverInsulation} onValueChange={setCanCoverInsulation}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes (solid interior barrier)</SelectItem>
                <SelectItem value="maybe">Maybe (partial coverage)</SelectItem>
                <SelectItem value="no">No (insulation would be exposed)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={() => setShowResult(true)} variant="secondary" className="w-full md:w-auto">
          Plan Insulation
        </Button>

        {showResult && (
          <div className={`mt-6 rounded-lg border p-4 ${result.bgColor}`}>
            <h4 className={`font-bold text-lg ${result.color}`}>
              {result.title}
            </h4>
            <p className="text-muted-foreground mt-2">{result.description}</p>
            
            <div className="mt-4">
              <p className="font-medium text-sm mb-2">Recommended Steps:</p>
              <ul className="space-y-2">
                {result.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {result.warnings.length > 0 && (
              <div className="mt-4">
                <p className="font-medium text-sm mb-2 text-red-600">Warnings:</p>
                <ul className="space-y-2">
                  {result.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-red-700">
                      <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{warning}</span>
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

// Emergency Checklist Builder Component
const EmergencyChecklistBuilder = () => {
  const [area, setArea] = useState('');
  const [birdCount, setBirdCount] = useState('6');
  const [usesPowerForWater, setUsesPowerForWater] = useState('no');
  const [topRisk, setTopRisk] = useState('snow');
  const [notes, setNotes] = useState('');
  const [showChecklist, setShowChecklist] = useState(false);

  const generateChecklist = () => {
    const baseItems = [
      { id: 1, text: 'Confirm coop is dry (no roof leaks, no dripping seams)' },
      { id: 2, text: 'Replace wet bedding; add extra dry bedding stored in a sealed bin' },
      { id: 3, text: 'Verify doors close tight; block drafts at roost height (do not seal high vents)' },
      { id: 4, text: 'Check all latches and hardware cloth edges (storm shifts can create gaps)' },
    ];

    const waterItem = usesPowerForWater === 'yes'
      ? { id: 5, text: 'Water plan (24-48h): Power-dependent—prepare for no-power water swaps (spare waterers, warm water, frequent checks)' }
      : { id: 5, text: 'Water plan (24-48h): Have backup containers ready and check water twice daily' };

    const feedItem = { id: 6, text: `Feed plan (24-48h): Ensure enough dry feed for ${birdCount} birds; bin sealed against moisture and pests` };
    
    const standardItems = [
      { id: 7, text: 'Lighting plan for you: headlamp/flashlight + batteries for night checks' },
      { id: 8, text: 'Quick repair kit: screws, zip ties, duct tape, small tools for storm damage' },
      { id: 9, text: 'Backup containers: at least two water containers and one spare feeder' },
      { id: 10, text: 'Access plan: shovel path / traction (sand/salt) to reach coop safely' },
    ];

    const riskSpecificItem = {
      'ice': { id: 11, text: 'Ice storm prep: Check roof load capacity, clear ice from vents, verify door can open' },
      'snow': { id: 11, text: 'Snow prep: Mark coop location, plan snow removal from run, check roof drainage' },
      'wind': { id: 11, text: 'Wind prep: Secure loose panels, add windbreak materials, check all fasteners' },
      'wet': { id: 11, text: 'Wet winter prep: Extra drainage, elevate feeders, increase bedding depth' },
    };

    return [
      ...baseItems,
      waterItem,
      feedItem,
      ...standardItems,
      riskSpecificItem[topRisk as keyof typeof riskSpecificItem] || riskSpecificItem['snow']
    ];
  };

  const checklist = generateChecklist();

  const handlePrint = () => {
    const printContent = `
      WINTER EMERGENCY CHECKLIST
      ${area ? `Area: ${area}` : ''} | Flock: ${birdCount} birds | Top Risk: ${topRisk}
      
      ${checklist.map(item => `☐ ${item.text}`).join('\n')}
      
      ${notes ? `Notes: ${notes}` : ''}
      
      Tip: Keep this with your feed bin or tool kit. Re-run after changing your winter setup.
    `;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Winter Emergency Checklist</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
              h1 { font-size: 24px; margin-bottom: 10px; }
              .meta { color: #666; margin-bottom: 20px; }
              ul { list-style: none; padding: 0; }
              li { margin: 12px 0; padding-left: 30px; position: relative; }
              li::before { content: "☐"; position: absolute; left: 0; font-size: 18px; }
              .notes { margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px; }
              .tip { margin-top: 20px; font-style: italic; color: #666; }
            </style>
          </head>
          <body>
            <h1>Winter Emergency Checklist</h1>
            <p class="meta">${area ? `Area: ${area} | ` : ''}Flock: ${birdCount} birds | Top Risk: ${topRisk}</p>
            <ul>
              ${checklist.map(item => `<li>${item.text}</li>`).join('')}
            </ul>
            ${notes ? `<div class="notes"><strong>Notes:</strong> ${notes}</div>` : ''}
            <p class="tip">Tip: Keep this with your feed bin or tool kit. Re-run after changing your winter setup.</p>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <Card className="border-accent/30 bg-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Shield className="h-5 w-5 text-accent-foreground" />
          Emergency Checklist Builder
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Generate a printable 24-48 hour winter emergency checklist for your coop.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="area">Your Area (optional)</Label>
            <Input
              id="area"
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="mt-1"
              placeholder="e.g., Northern Michigan"
            />
          </div>
          <div>
            <Label htmlFor="birdCount">Number of Birds</Label>
            <Input
              id="birdCount"
              type="number"
              min={1}
              value={birdCount}
              onChange={(e) => setBirdCount(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Rely on Power for Water Heat?</Label>
            <Select value={usesPowerForWater} onValueChange={setUsesPowerForWater}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no">No</SelectItem>
                <SelectItem value="yes">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Top Winter Risk</Label>
            <Select value={topRisk} onValueChange={setTopRisk}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ice">Ice storm</SelectItem>
                <SelectItem value="snow">Snow / freeze</SelectItem>
                <SelectItem value="wind">High winds</SelectItem>
                <SelectItem value="wet">Cold rain / wet winter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label htmlFor="notes">Special Notes (optional)</Label>
          <Input
            id="notes"
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1"
            placeholder="e.g., Neighbor can check if I'm away"
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={() => setShowChecklist(true)} className="flex-1 md:flex-none">
            Generate Checklist
          </Button>
          {showChecklist && (
            <Button onClick={handlePrint} variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
          )}
        </div>

        {showChecklist && (
          <div className="mt-6 rounded-lg border bg-background p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg">Printable Winter Emergency Checklist</h4>
                <p className="text-sm text-muted-foreground">
                  {area && `${area} • `}{birdCount} birds • Risk: {topRisk}
                </p>
              </div>
            </div>
            
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <Checkbox id={`check-${item.id}`} />
                  <label htmlFor={`check-${item.id}`} className="text-sm cursor-pointer">
                    {item.text}
                  </label>
                </li>
              ))}
            </ul>

            {notes && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm"><strong>Notes:</strong> {notes}</p>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-4 italic">
              Tip: Print this and keep it with your feed bin or tool kit. Re-run after you change your winter setup.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const WinterChickenCoopGuide = () => {
  if (!article) return null;

  return (
    <BlogLayout article={article}>
      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={heroImage} 
          alt="Winter chicken coop with warm lighting and snow" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-muted-foreground">
          A solid winter chicken coop setup is less about "making it warm" and more about making it dry, draft-protected, 
          well-ventilated, easy to maintain, and ready for emergencies. If your coop stays dry inside, blocks wind at roost 
          level, and still vents moisture out high, your flock will handle cold far better than most people expect.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-primary mt-0 flex items-center gap-2">
            <Snowflake className="h-5 w-5" />
            The Winter Rule
          </h3>
          <p className="mb-0 font-medium">
            Dry + Draft-Free + High Ventilation beats "hot" almost every time.
          </p>
          <p className="mb-0 text-sm text-muted-foreground mt-2">
            Heating can be helpful in specific cases, but it's never the first step.
          </p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <span><strong>Most common winter failure:</strong> Sealing the coop "tight" and accidentally trapping humidity.</span>
          </p>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Winter Chicken Coop Checklist</h2>
        <p className="text-muted-foreground mb-6">
          The fastest path to a winter-ready coop. This sequence prevents the classic mistake: adding heat before fixing moisture and drafts.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Badge variant="outline">Week 1</Badge>
                Make the Coop "Weather-Smart"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Fix roof leaks and dripping seams
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Block drafts at roost height (cracks, doors, warped panels)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Keep high ventilation open and predator-protected
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Add windbreak outside the run if needed
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Replace wet bedding and dry out the floor
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Badge variant="outline">Week 2</Badge>
                Make Winter Care Easy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Set up water-freeze strategy (heated base or swap plan)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Prep dry-feed storage bin and backup feeders
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Verify latches and predator security
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Build an emergency kit (power outage + storm kit)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  Decide on heating only if conditions justify it
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <span><strong>Don't do this:</strong> Seal every crack "to keep heat in" and remove ventilation. That traps moisture, which increases frostbite risk and makes the coop feel colder.</span>
          </p>
        </div>
      </section>

      {/* Tool 1: Heater Decision */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 1: Heater Decision Tool</h2>
        <p className="text-muted-foreground mb-6">
          Determine whether you should prioritize "no heat," "water heat," or "localized coop heat" based on your conditions.
        </p>
        <HeaterDecisionTool />
      </section>

      {/* Tool 2: Insulation Planner */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 2: Insulation Planner</h2>
        <p className="text-muted-foreground mb-6">
          Estimate whether insulation will help your coop and flag potential moisture-trapping issues.
        </p>
        <InsulationPlanner />
      </section>

      {/* Tool 3: Emergency Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 3: Emergency Checklist Builder</h2>
        <p className="text-muted-foreground mb-6">
          Generate a printable 24-48 hour winter emergency checklist customized for your coop.
        </p>
        <EmergencyChecklistBuilder />
      </section>

      {/* Ventilation vs Drafts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Ventilation vs Drafts: The Most Misunderstood Topic</h2>
        <p className="text-muted-foreground mb-6">
          People often "winterize" by sealing everything, then wonder why the coop smells, walls sweat, or comb tips frostbite. 
          That happens because humid air is trapped. Chickens exhale moisture all night; droppings add more humidity.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Good Winter Airflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• High vents remain open and protected with hardware cloth</li>
                <li>• Air enters gently and exits near roofline</li>
                <li>• Roosts are away from direct airflow paths</li>
                <li>• No condensation on ceiling or walls in the morning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                Bad Winter Airflow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• Low vents or gaps aim wind across birds on the roost</li>
                <li>• Everything sealed so tight moisture can't escape</li>
                <li>• Ammonia smell even after cleaning</li>
                <li>• Condensation/frost on walls and ceiling</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          <strong>Mental model:</strong> You want a "chimney effect" (moist air leaves high) without a "wind tunnel" (draft at roost height).
        </p>
      </section>

      {/* Water Freezing Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Water Freezing Solutions</h2>
        <p className="text-muted-foreground mb-6">
          In many places, winter flock stress is less about cold and more about keeping water available. 
          Dehydration reduces feed intake, which can reduce body warmth.
        </p>
        
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Method</TableHead>
                <TableHead>What It Is</TableHead>
                <TableHead>Pros</TableHead>
                <TableHead>Cons/Risks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Swap warm water</TableCell>
                <TableCell>Bring fresh water 2-3x daily</TableCell>
                <TableCell className="text-green-600">No electricity, cheap</TableCell>
                <TableCell className="text-amber-600">Labor heavy; tough during storms</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Two-waterer rotation</TableCell>
                <TableCell>Keep spare indoors, swap when frozen</TableCell>
                <TableCell className="text-green-600">Reliable and cheap</TableCell>
                <TableCell className="text-amber-600">Requires routine and timing</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Heated base</TableCell>
                <TableCell>Heated plate under waterer</TableCell>
                <TableCell className="text-green-600">Simple, widely used</TableCell>
                <TableCell className="text-amber-600">Requires power + cord protection</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Heated waterer</TableCell>
                <TableCell>Built-in heated unit</TableCell>
                <TableCell className="text-green-600">Hands-off in cold snaps</TableCell>
                <TableCell className="text-amber-600">Power + cord safety; higher cost</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span><strong>Tip:</strong> Always have a no-power backup plan for water (extra containers + swap routine) even if you use heated equipment.</span>
          </p>
        </div>
      </section>

      {/* Heating Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Heating Options (Safe-First Approach)</h2>
        <p className="text-muted-foreground mb-6">
          The safest approach is to treat heat as a targeted tool, not a default. Many flocks do fine without added heat 
          when moisture and drafts are controlled.
        </p>
        
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Option</TableHead>
                <TableHead>What It Helps</TableHead>
                <TableHead>Pros</TableHead>
                <TableHead>Cautions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">No coop heat</TableCell>
                <TableCell>Relies on dry, draft-free design</TableCell>
                <TableCell className="text-green-600">Lowest risk, simplest</TableCell>
                <TableCell>Requires solving moisture/drafts correctly</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Heat for water only</TableCell>
                <TableCell>Prevents freezing</TableCell>
                <TableCell className="text-green-600">Targets the real daily problem</TableCell>
                <TableCell>Still requires cord safety + outage backup</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Low-watt radiant panel</TableCell>
                <TableCell>Gives birds a warm "zone"</TableCell>
                <TableCell className="text-green-600">Safer than exposed elements</TableCell>
                <TableCell>Must be mounted correctly; electrical risk</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Heat lamp</TableCell>
                <TableCell>Raises ambient temp fast</TableCell>
                <TableCell className="text-amber-600">Powerful and common</TableCell>
                <TableCell className="text-red-600">Highest fire risk if misused</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <Thermometer className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <span><strong>Best "first" heat:</strong> For many owners, heating water (not air) solves 80% of winter stress with less risk than trying to warm the entire coop.</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need a heater in a winter chicken coop?</AccordionTrigger>
            <AccordionContent>
              Often no. Most healthy adult chickens tolerate cold well if they are dry, draft-protected, and the coop is 
              ventilated properly. Heating is usually reserved for extreme cold, wet conditions, or vulnerable birds and 
              should be done with safer, low-risk options like radiant panels rather than heat lamps.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Should I seal all gaps to keep the coop warm?</AccordionTrigger>
            <AccordionContent>
              Seal drafts at roost height, yes—but don't remove high ventilation. Trapped humidity is a bigger winter 
              problem than cold air. You want a "chimney effect" where moist air can escape near the roofline while 
              blocking wind at bird level.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What's the best winter water setup?</AccordionTrigger>
            <AccordionContent>
              The "best" setup is the one that stays reliable during cold snaps and outages. Many people heat water (not air) 
              using heated bases or heated waterers, plus a backup swap plan for outages. Always have extra containers ready.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Can I insulate without causing condensation?</AccordionTrigger>
            <AccordionContent>
              Yes—if you keep high ventilation open and protect insulation from pecking with a solid interior barrier. 
              Insulation that traps moisture (paired with poor ventilation) can worsen condensation and actually make 
              conditions worse for your birds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What's the #1 winter chicken coop priority?</AccordionTrigger>
            <AccordionContent>
              Moisture control. Fix leaks, maintain high ventilation, keep bedding dry, and stop drafts at roost height. 
              Moisture is more dangerous than cold for chickens—wet feathers and damp conditions lead to frostbite and 
              respiratory issues.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What is the biggest winter risk for chickens?</AccordionTrigger>
            <AccordionContent>
              Moisture. Damp bedding, condensation, and drafts on roosting birds create far more problems than cold air alone. 
              Keep the coop dry, ventilated high, and draft-free at roost level.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Bottom Line */}
      <section className="mb-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Bottom Line</h3>
            <p className="text-muted-foreground mb-4">
              A great winter chicken coop plan is mostly about engineering airflow and moisture: keep birds out of drafts, 
              keep vents high and open, keep bedding dry, and have a water-freeze and emergency plan that still works when 
              power fails. Do those fundamentals first, then consider insulation and heating as optional upgrades—not defaults.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/guides/coop-ventilation-guide">
                  Read Ventilation Guide
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/predator-proof-coop-guide">
                  Predator-Proofing Guide
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/guides/coop-ventilation-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Ventilation Guide</h3>
            <p className="text-sm text-muted-foreground">Climate-specific ventilation requirements</p>
          </Link>
          <Link to="/guides/predator-proof-coop-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Predator-Proof Guide</h3>
            <p className="text-sm text-muted-foreground">Winter predators get bold—stay protected</p>
          </Link>
          <Link to="/guides/coop-materials-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Materials Guide</h3>
            <p className="text-sm text-muted-foreground">Best materials for insulation and durability</p>
          </Link>
          <Link to="/guides/how-to-build-chicken-coop" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">How to Build a Chicken Coop</h3>
            <p className="text-sm text-muted-foreground">Complete step-by-step building guide</p>
          </Link>
        </div>
      </section>
    </BlogLayout>
  );
};

export default WinterChickenCoopGuide;
