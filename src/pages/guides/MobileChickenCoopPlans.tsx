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
import { CheckCircle, XCircle, AlertTriangle, Calendar, Scale, Leaf, Move, Shield, Hammer, CircleDot } from 'lucide-react';
import heroImage from '@/assets/guide-mobile-coop.jpg';

const article = getArticleBySlug('mobile-chicken-coop-plans');

// Rotation Planner Tool Component
const RotationPlannerTool = () => {
  const [grazingArea, setGrazingArea] = useState('5000');
  const [tractorFootprint, setTractorFootprint] = useState('64');
  const [daysPerMove, setDaysPerMove] = useState('1');
  const [restPeriod, setRestPeriod] = useState('21');
  const [showResult, setShowResult] = useState(false);

  const calculateRotation = () => {
    const area = parseInt(grazingArea) || 5000;
    const footprint = parseInt(tractorFootprint) || 64;
    const stay = parseInt(daysPerMove) || 1;
    const desiredRest = parseInt(restPeriod) || 21;

    const stops = Math.floor(area / footprint);
    const loopDays = stops * stay;
    const actualRest = loopDays - stay;

    let status: 'good' | 'warning' | 'problem';
    let message: string;
    let tips: string[];

    if (actualRest >= desiredRest) {
      status = 'good';
      message = 'Solid loop: you have enough stops to rotate without hammering the same patch repeatedly.';
      tips = [
        'Your loop can meet your rest target if you keep the move routine consistent.',
        'Use pasture feedback: if ground gets bare or muddy, shorten stays or reduce bird density.',
        'If regrowth is slow (drought/cold), increase rest time before returning.'
      ];
    } else if (actualRest >= desiredRest * 0.7) {
      status = 'warning';
      message = 'Close to target, but you may return slightly too soon during slow-growth seasons.';
      tips = [
        'Consider setting a rest target and avoiding shortcuts back to convenient spots.',
        'In lush growth seasons, this schedule can work fine.',
        'Monitor pasture recovery—if it looks stressed, expand your loop area.'
      ];
    } else {
      status = 'problem';
      message = 'Your desired rest period is longer than your loop. Pasture won\'t fully recover between visits.';
      tips = [
        'Expand grazing area or reduce tractor footprint overlap.',
        'Consider adding a second tractor zone to extend rest periods.',
        'Reduce bird density or move more frequently.'
      ];
    }

    return { stops, loopDays, actualRest, status, message, tips };
  };

  const result = calculateRotation();

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calendar className="h-5 w-5 text-primary" />
          Rotation Planner
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Create a rotation schedule: number of paddock "stops" and days before returning to the same spot.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="grazingArea">Available Grazing Area (sq ft)</Label>
            <Input
              id="grazingArea"
              type="number"
              value={grazingArea}
              onChange={(e) => setGrazingArea(e.target.value)}
              className="mt-1"
              placeholder="e.g., 5000"
            />
          </div>
          <div>
            <Label htmlFor="tractorFootprint">Tractor Footprint (sq ft)</Label>
            <Input
              id="tractorFootprint"
              type="number"
              value={tractorFootprint}
              onChange={(e) => setTractorFootprint(e.target.value)}
              className="mt-1"
              placeholder="e.g., 64"
            />
          </div>
          <div>
            <Label>Days Per Move</Label>
            <Select value={daysPerMove} onValueChange={setDaysPerMove}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 (daily moves)</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="restPeriod">Desired Rest Period (days)</Label>
            <Input
              id="restPeriod"
              type="number"
              value={restPeriod}
              onChange={(e) => setRestPeriod(e.target.value)}
              className="mt-1"
              placeholder="e.g., 21"
            />
          </div>
        </div>

        <Button onClick={() => setShowResult(true)} className="w-full md:w-auto">
          Plan Rotation
        </Button>

        {showResult && (
          <div className={`mt-6 rounded-lg border p-4 ${
            result.status === 'good' ? 'bg-green-50' : 
            result.status === 'warning' ? 'bg-amber-50' : 'bg-red-50'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{result.stops}</p>
                <p className="text-xs text-muted-foreground">Stops</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{result.loopDays}</p>
                <p className="text-xs text-muted-foreground">Loop Days</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{result.actualRest}</p>
                <p className="text-xs text-muted-foreground">Actual Rest</p>
              </div>
            </div>
            
            <h4 className={`font-bold ${
              result.status === 'good' ? 'text-green-700' : 
              result.status === 'warning' ? 'text-amber-700' : 'text-red-700'
            }`}>
              {result.message}
            </h4>
            
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

// Weight/Moveability Estimator Component
const WeightEstimatorTool = () => {
  const [frameMaterial, setFrameMaterial] = useState('standard');
  const [length, setLength] = useState('8');
  const [width, setWidth] = useState('4');
  const [wheelType, setWheelType] = useState('medium');
  const [showResult, setShowResult] = useState(false);

  const calculateMoveability = () => {
    const len = parseFloat(length) || 8;
    const wid = parseFloat(width) || 4;
    const area = len * wid;

    // Base weight estimation (lbs per sq ft based on material)
    const materialWeight = {
      light: 3,
      standard: 5,
      heavy: 8
    };

    const baseWeight = area * materialWeight[frameMaterial as keyof typeof materialWeight];
    
    // Add weight for typical components
    const estimatedWeight = baseWeight + 30; // +30 for hardware, roost, etc.

    // Calculate effort score based on wheels
    const wheelFactor = {
      small: 1.5,
      medium: 1.0,
      large: 0.7,
      skids: 0.5 // Easier when towed
    };

    const effort = estimatedWeight * wheelFactor[wheelType as keyof typeof wheelFactor];

    let moveType: 'hand' | 'assisted' | 'tow';
    let message: string;
    let tips: string[];

    if (wheelType === 'skids') {
      moveType = 'tow';
      message = 'Skid-based design: Great for ATV/tractor moves. Expect turf scuffing in wet ground.';
      tips = [
        'Use a V-tow bar to reduce frame twist',
        'Shape skids like skis (rounded leading edge) to prevent catching',
        'Avoid towing when ground is saturated to reduce damage'
      ];
    } else if (effort < 80) {
      moveType = 'hand';
      message = 'Likely hand-movable! This design should be comfortable for daily moves by one person.';
      tips = [
        'Add comfortable grab handles at the right height',
        'Place heavy items near the wheel axis for better balance',
        'Consider pneumatic tires for easier rolling on grass'
      ];
    } else if (effort < 150) {
      moveType = 'assisted';
      message = 'Hand-movable with effort. May need two people or a dolly for wet/muddy conditions.';
      tips = [
        'Upgrade to larger pneumatic wheels for easier moves',
        'Keep bedding cleaned out to reduce weight buildup',
        'Plan for a "helper day" option or add a tow point for backup'
      ];
    } else {
      moveType = 'tow';
      message = 'Likely too heavy for comfortable hand moves. Plan for ATV/tractor towing.';
      tips = [
        'Add a proper tow bar with triangulated attachment',
        'Consider a hybrid design: skids + wheels for lifting',
        'Reduce frame weight or split into smaller sections'
      ];
    }

    return { estimatedWeight, effort: Math.round(effort), moveType, message, tips, area };
  };

  const result = calculateMoveability();

  return (
    <Card className="border-secondary/30 bg-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Scale className="h-5 w-5 text-secondary-foreground" />
          Weight / Moveability Estimator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Estimate if your design will be hand-movable or better suited for towing.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Frame Material</Label>
            <Select value={frameMaterial} onValueChange={setFrameMaterial}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light (thin lumber / minimal sheathing)</SelectItem>
                <SelectItem value="standard">Standard framing</SelectItem>
                <SelectItem value="heavy">Heavy (lots of sheathing / thick lumber)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Wheel Type</Label>
            <Select value={wheelType} onValueChange={setWheelType}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (casters / small wheels)</SelectItem>
                <SelectItem value="medium">Medium (wheelbarrow / lawn wheels)</SelectItem>
                <SelectItem value="large">Large (pneumatic 14-20")</SelectItem>
                <SelectItem value="skids">Skids (towed)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="length">Tractor Length (ft)</Label>
            <Input
              id="length"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="width">Tractor Width (ft)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="mt-1"
            />
          </div>
        </div>

        <Button onClick={() => setShowResult(true)} variant="secondary" className="w-full md:w-auto">
          Estimate Moveability
        </Button>

        {showResult && (
          <div className={`mt-6 rounded-lg border p-4 ${
            result.moveType === 'hand' ? 'bg-green-50' : 
            result.moveType === 'assisted' ? 'bg-amber-50' : 'bg-blue-50'
          }`}>
            <div className="flex items-center gap-6 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{result.area}</p>
                <p className="text-xs text-muted-foreground">sq ft</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">~{result.estimatedWeight}</p>
                <p className="text-xs text-muted-foreground">est. lbs</p>
              </div>
              <div className="text-center">
                <Badge variant={result.moveType === 'hand' ? 'default' : 'secondary'}>
                  {result.moveType === 'hand' ? 'Hand-movable' : 
                   result.moveType === 'assisted' ? 'Needs Help' : 'Tow Only'}
                </Badge>
              </div>
            </div>
            
            <h4 className={`font-bold ${
              result.moveType === 'hand' ? 'text-green-700' : 
              result.moveType === 'assisted' ? 'text-amber-700' : 'text-blue-700'
            }`}>
              {result.message}
            </h4>
            
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

// Stocking & Pasture Impact Calculator Component
const PastureImpactTool = () => {
  const [birdCount, setBirdCount] = useState('8');
  const [birdType, setBirdType] = useState('layers');
  const [footprint, setFootprint] = useState('64');
  const [moveFrequency, setMoveFrequency] = useState('daily');
  const [season, setSeason] = useState('normal');
  const [showResult, setShowResult] = useState(false);

  const calculateImpact = () => {
    const birds = parseInt(birdCount) || 8;
    const foot = parseInt(footprint) || 64;
    
    const days = moveFrequency === 'daily' ? 1 : 
                 moveFrequency === '2d' ? 2 : 
                 moveFrequency === '3d' ? 3 : 4;

    const birdFactor = birdType === 'meat' ? 0.85 : birdType === 'layers' ? 1.0 : 0.95;
    
    const seasonMult = season === 'lush' ? 0.85 : 
                       season === 'wet' ? 1.35 : 
                       season === 'drought' ? 1.25 : 1.0;

    const density = birds / foot;
    const score = density * days * birdFactor * seasonMult;

    let level: 'low' | 'moderate' | 'high';
    let message: string;
    let tips: string[];

    if (score < 0.14) {
      level = 'low';
      message = 'Your setup is likely gentle on pasture. Watch for escapes and keep the move routine consistent.';
      tips = [
        'If grass is lush, you can maintain this schedule comfortably',
        'If you want more soil impact, you can slow slightly—but monitor for bare patches',
        'Keep water and shade consistent so birds use the whole footprint'
      ];
    } else if (score < 0.26) {
      level = 'moderate';
      message = 'Moderate pasture impact. This can be ideal for soil improvement if rest periods are long enough.';
      tips = [
        'If you see bare soil, move more often or increase footprint',
        'In wet season, treat this as "high" and speed up moves',
        'Make sure you\'re not returning to the same strip too soon'
      ];
    } else {
      level = 'high';
      message = 'High risk of overgrazing/mud, especially in wet conditions. Adjust before pasture damage starts.';
      tips = [
        'Move daily (or even twice daily in wet/muddy periods)',
        'Increase footprint or reduce bird count per tractor',
        'Add rest days by expanding your loop area',
        'Consider splitting flock into two tractors'
      ];
    }

    return { density: density.toFixed(2), score: score.toFixed(3), level, message, tips };
  };

  const result = calculateImpact();

  return (
    <Card className="border-accent/30 bg-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Leaf className="h-5 w-5 text-accent-foreground" />
          Stocking & Pasture Impact Calculator
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Avoid overgrazing and mud by comparing bird count to footprint and move frequency.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="birdCount">Number of Birds</Label>
            <Input
              id="birdCount"
              type="number"
              value={birdCount}
              onChange={(e) => setBirdCount(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Bird Type</Label>
            <Select value={birdType} onValueChange={setBirdType}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="layers">Layers</SelectItem>
                <SelectItem value="meat">Meat birds</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="footprint">Tractor Footprint (sq ft)</Label>
            <Input
              id="footprint"
              type="number"
              value={footprint}
              onChange={(e) => setFootprint(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Move Frequency</Label>
            <Select value={moveFrequency} onValueChange={setMoveFrequency}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="2d">Every 2 days</SelectItem>
                <SelectItem value="3d">Every 3 days</SelectItem>
                <SelectItem value="4d">Every 4 days</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2">
            <Label>Season / Ground Condition</Label>
            <Select value={season} onValueChange={setSeason}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Dry / normal growth</SelectItem>
                <SelectItem value="lush">Lush growth</SelectItem>
                <SelectItem value="wet">Wet / mud-prone</SelectItem>
                <SelectItem value="drought">Drought / slow recovery</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={() => setShowResult(true)} className="w-full md:w-auto">
          Calculate Impact
        </Button>

        {showResult && (
          <div className={`mt-6 rounded-lg border p-4 ${
            result.level === 'low' ? 'bg-green-50' : 
            result.level === 'moderate' ? 'bg-amber-50' : 'bg-red-50'
          }`}>
            <div className="flex items-center gap-4 mb-4">
              <Badge variant={
                result.level === 'low' ? 'default' : 
                result.level === 'moderate' ? 'secondary' : 'destructive'
              } className="text-sm px-3 py-1">
                {result.level.charAt(0).toUpperCase() + result.level.slice(1)} Impact
              </Badge>
              <span className="text-sm text-muted-foreground">
                Density: {result.density} birds/sq ft
              </span>
            </div>
            
            <h4 className={`font-bold ${
              result.level === 'low' ? 'text-green-700' : 
              result.level === 'moderate' ? 'text-amber-700' : 'text-red-700'
            }`}>
              {result.message}
            </h4>
            
            <ul className="mt-4 space-y-2">
              {result.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground mt-4 italic">
              Interpretation: Impact level is a planning hint. If you see bare soil or mud, shorten stays or reduce density—even if the calculator says "moderate."
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const MobileChickenCoopPlans = () => {
  if (!article) return null;

  return (
    <BlogLayout article={article}>
      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={heroImage} 
          alt="Mobile chicken coop tractor on green pasture" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-muted-foreground">
          If you're searching for mobile chicken coop plans, you're probably not just trying to "house chickens"—you're trying 
          to move the flock. A chicken tractor lets birds harvest fresh forage, spread manure evenly, disrupt pests, and reduce 
          mud issues—while you control where the impact happens.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-primary mt-0 flex items-center gap-2">
            <Move className="h-5 w-5" />
            The Chicken Tractor Formula
          </h3>
          <p className="mb-0 font-medium">
            Light enough to move + Strong enough to survive + Ventilated + Dry + Predator-resistant
          </p>
          <p className="mb-0 text-sm text-muted-foreground mt-2">
            When those five are in balance, rotational grazing becomes ridiculously easy.
          </p>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <span><strong>Most common failure:</strong> A tractor that's "moveable" on day one, then becomes a back-breaking drag once it gets heavier, warped, or muddy.</span>
          </p>
        </div>
      </section>

      {/* Design Types */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Best Tractor Design Types</h2>
        <p className="text-muted-foreground mb-6">
          "Chicken tractor" means different things to different people. The best mobile chicken coop plans are the ones that match your movement style, not just your flock size.
        </p>
        
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Design Type</TableHead>
                <TableHead>What It Is</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Tradeoffs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Low Dome/Hoop</TableCell>
                <TableCell>Light, low profile, arched top</TableCell>
                <TableCell className="text-green-600">Meat birds, daily moves, low cost</TableCell>
                <TableCell className="text-muted-foreground">Less headroom, harder access</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">A-Frame</TableCell>
                <TableCell>Triangular frame, simple build</TableCell>
                <TableCell className="text-green-600">Small flocks, basic grazing</TableCell>
                <TableCell className="text-muted-foreground">Awkward access; door placement matters</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Box with Wheels</TableCell>
                <TableCell>Rectangular "mini shed" on wheels</TableCell>
                <TableCell className="text-green-600">Layers with roosts/nesting</TableCell>
                <TableCell className="text-muted-foreground">Can become heavy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Split (Coop + Run)</TableCell>
                <TableCell>Mobile coop plus separate run</TableCell>
                <TableCell className="text-green-600">High predator areas; flexible</TableCell>
                <TableCell className="text-muted-foreground">More parts to manage</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Skid-Based Tow</TableCell>
                <TableCell>Heavier structure dragged by ATV</TableCell>
                <TableCell className="text-green-600">Larger flocks; less hand labor</TableCell>
                <TableCell className="text-muted-foreground">Can tear turf; needs good tow geometry</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
          <p className="text-sm mb-0">
            <strong>Rule of thumb:</strong> If you can't move it in under 3-5 minutes, you won't do it every day in bad weather.
          </p>
        </div>
      </section>

      {/* Tool 1: Rotation Planner */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 1: Rotation Planner</h2>
        <p className="text-muted-foreground mb-6">
          Create a simple rotation plan: number of paddock "stops" and estimated days before returning to the same spot.
        </p>
        <RotationPlannerTool />
      </section>

      {/* Tool 2: Weight Estimator */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 2: Weight / Moveability Estimator</h2>
        <p className="text-muted-foreground mb-6">
          Estimate whether your design is likely hand-movable or better to tow, based on size, materials, and wheel choice.
        </p>
        <WeightEstimatorTool />
      </section>

      {/* Tool 3: Pasture Impact */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 3: Stocking & Pasture Impact Calculator</h2>
        <p className="text-muted-foreground mb-6">
          Avoid overgrazing and mud by comparing bird count to footprint and move frequency.
        </p>
        <PastureImpactTool />
      </section>

      {/* Mobility Mechanisms */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Mobility Mechanisms: The Most Important Section</h2>
        <p className="text-muted-foreground mb-6">
          A tractor can be beautiful, roomy, and perfectly ventilated—but if moving it is miserable, rotational grazing dies. 
          Mobility is a design system: wheels, balance, handholds, tow geometry, and ground contact edge.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CircleDot className="h-5 w-5 text-primary" />
                Wheel Placement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Goal:</strong> When you lift the handle, you should feel like you're lifting a small percentage of total weight.</p>
              <ul className="space-y-1 mt-2">
                <li>• Place heavy items near the wheel axis</li>
                <li>• Bigger diameter wheels roll over ruts better</li>
                <li>• Leverage beats brute force</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Move className="h-5 w-5 text-primary" />
                Wheels vs Skids
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Wheels:</strong> Best for frequent hand moves, less friction on grass.</p>
              <p><strong>Skids:</strong> Great for tow moves, but can tear turf if too heavy.</p>
              <p><strong>Hybrid:</strong> Skids support frame, wheels lift/roll during movement.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Hammer className="h-5 w-5 text-primary" />
                Tow Bars
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>If the tow point is too high or low, it can twist the frame during movement.</p>
              <ul className="space-y-1 mt-2">
                <li>• Keep tow forces centered on structural members</li>
                <li>• V-shaped tow bar reduces twisting</li>
                <li>• Mind the angle—steep pulls dig the front edge</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-primary" />
                Anti-Gap Edges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>Uneven ground creates gaps where birds escape and predators enter.</p>
              <ul className="space-y-1 mt-2">
                <li>• Flexible skirt closes small gaps</li>
                <li>• Smooth lower edge conforms better</li>
                <li>• Stakes/clips for nights or predator areas</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Predator Safety */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Predator Safety Without Extra Weight</h2>
        <p className="text-muted-foreground mb-6">
          Predator pressure is the design constraint that fights mobility. The trick is layering protection without building a tank you can't move.
        </p>
        
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="text-green-700 text-base">Low Pressure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-green-800">
              <p>Urban yards, minimal wildlife. Main risks are dogs. Lightweight tractors work well if edges fit the ground.</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="text-amber-700 text-base">Medium Pressure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800">
              <p>Raccoons, foxes, stray dogs sometimes. Plan for secure nighttime lock-up and stronger mesh in key areas.</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700 text-base">High Pressure</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-800">
              <p>Coyotes, frequent predator visits. Combine tractor with electric net or mobile coop with protected run.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mt-6">
          <p className="text-sm mb-0 flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <span><strong>Reality check:</strong> A mobile chicken coop plan that claims "predator-proof" without describing edge gaps, latches, and nighttime security is marketing, not engineering.</span>
          </p>
        </div>
      </section>

      {/* Soil Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Soil Benefits & How to Avoid Damage</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Key Soil Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Even manure distribution improves fertility</li>
                <li>• Insect disruption reduces pests</li>
                <li>• Scratching breaks down thatch</li>
                <li>• Moving impact zones encourages plant diversity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                How Tractors Damage Soil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-red-800 text-sm">
                <li>• <strong>Bare soil + mud:</strong> Staying too long in wet seasons</li>
                <li>• <strong>Nutrient overload:</strong> Too many birds or returning too quickly</li>
                <li>• <strong>Fix:</strong> Shorten stays, reduce density, longer rest periods</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm mb-0">
            <strong>Soil-friendly principle:</strong> Move before the ground looks stressed, not after.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How often should I move a chicken tractor for rotational grazing?</AccordionTrigger>
            <AccordionContent>
              Daily moves are most common because they prevent mud and overgrazing. If your tractor footprint is large relative 
              to your flock, moving every 2-4 days can work. In wet conditions, move more often. If the ground looks stressed, 
              shorten the stay.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What's the biggest mistake in mobile chicken coop plans?</AccordionTrigger>
            <AccordionContent>
              Underestimating weight and overestimating how often you'll move it. A tractor that's hard to move becomes 
              stationary, and then pasture damage and odor problems start. Design for the worst day—if it's only easy 
              when dry and clean, it's not truly "mobile."
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can a mobile coop be predator-proof?</AccordionTrigger>
            <AccordionContent>
              It can be predator-resistant, but "proof" depends on predator pressure and edge gaps. Many setups combine 
              a tractor with secure nighttime lock-up and a portable perimeter (like electric net) to keep the tractor light.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do chicken tractors really improve soil?</AccordionTrigger>
            <AccordionContent>
              Yes, when managed well. The key is controlled impact: short stays, adequate rest periods, and avoiding 
              the same spots too frequently. Done right, you get even manure distribution, pest reduction, and improved 
              pasture diversity.
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
              The best mobile chicken coop plans are the ones that you will actually move in real life. Prioritize mobility 
              mechanisms (wheel size, balance, tow geometry), then build your rotation schedule around pasture recovery. Done 
              right, a chicken tractor turns "chicken chores" into a simple habit and converts your flock into a soil-improvement tool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/guides/predator-proof-coop-guide">
                  Predator-Proofing Guide
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/guides/how-to-build-chicken-coop">
                  Building Guide
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
          <Link to="/guides/predator-proof-coop-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Predator-Proof Guide</h3>
            <p className="text-sm text-muted-foreground">Security without making your tractor too heavy</p>
          </Link>
          <Link to="/guides/coop-materials-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Materials Guide</h3>
            <p className="text-sm text-muted-foreground">Lightweight materials for mobile builds</p>
          </Link>
          <Link to="/guides/small-chicken-coop-plans" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Small Coop Plans</h3>
            <p className="text-sm text-muted-foreground">Compact designs perfect for tractors</p>
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

export default MobileChickenCoopPlans;
