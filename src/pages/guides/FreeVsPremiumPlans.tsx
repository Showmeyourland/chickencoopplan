import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, XCircle, AlertTriangle, Calculator, ClipboardCheck, Wind, DollarSign, Shield, Hammer, BookOpen, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/guide-free-vs-premium-plans.jpg';

const article = getArticleBySlug('free-vs-premium-plans');

// Cost Estimator Component
const CostEstimator = () => {
  const [chickens, setChickens] = useState(6);
  const [predatorPressure, setPredatorPressure] = useState('medium');
  const [climate, setClimate] = useState('mild');
  const [extras, setExtras] = useState('none');

  const calculateCosts = () => {
    // Base costs
    let freeMin = 150 + (chickens * 15);
    let freeMax = 250 + (chickens * 25);
    let premiumMin = 400 + (chickens * 30);
    let premiumMax = 700 + (chickens * 50);

    // Predator adjustments
    const predatorMultiplier = { low: 1, medium: 1.15, high: 1.35 };
    freeMin *= predatorMultiplier[predatorPressure as keyof typeof predatorMultiplier];
    freeMax *= predatorMultiplier[predatorPressure as keyof typeof predatorMultiplier];
    premiumMin *= predatorMultiplier[predatorPressure as keyof typeof predatorMultiplier];
    premiumMax *= predatorMultiplier[predatorPressure as keyof typeof predatorMultiplier];

    // Climate adjustments
    const climateMultiplier = { mild: 1, hot: 1.1, cold: 1.2, wet: 1.15, windy: 1.1 };
    freeMin *= climateMultiplier[climate as keyof typeof climateMultiplier];
    freeMax *= climateMultiplier[climate as keyof typeof climateMultiplier];
    premiumMin *= climateMultiplier[climate as keyof typeof climateMultiplier];
    premiumMax *= climateMultiplier[climate as keyof typeof climateMultiplier];

    // Extras adjustments
    const extrasAddition = { none: 0, auto_door: 150, full_upgrades: 400 };
    premiumMin += extrasAddition[extras as keyof typeof extrasAddition];
    premiumMax += extrasAddition[extras as keyof typeof extrasAddition];

    // Rework risk
    const reworkRisk = predatorPressure === 'high' ? 35 : predatorPressure === 'medium' ? 20 : 10;

    return {
      freeRange: `$${Math.round(freeMin)}-$${Math.round(freeMax)}`,
      premiumRange: `$${Math.round(premiumMin)}-$${Math.round(premiumMax)}`,
      reworkRisk: `${reworkRisk}%`,
      potentialReworkCost: `$${Math.round(freeMax * (reworkRisk / 100) * 1.5)}`
    };
  };

  const costs = calculateCosts();

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-5 w-5 text-primary" />
          Interactive Cost Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="chickens">Number of Chickens</Label>
            <Input
              id="chickens"
              type="number"
              min={2}
              max={50}
              value={chickens}
              onChange={(e) => setChickens(parseInt(e.target.value) || 6)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Predator Pressure</Label>
            <Select value={predatorPressure} onValueChange={setPredatorPressure}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (suburban, few threats)</SelectItem>
                <SelectItem value="medium">Medium (some wildlife)</SelectItem>
                <SelectItem value="high">High (rural, many predators)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Climate</Label>
            <Select value={climate} onValueChange={setClimate}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mild">Mild (temperate)</SelectItem>
                <SelectItem value="hot">Hot (desert/southern)</SelectItem>
                <SelectItem value="cold">Cold (northern winters)</SelectItem>
                <SelectItem value="wet">Wet (coastal/rainy)</SelectItem>
                <SelectItem value="windy">Windy (plains/exposed)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Extras</Label>
            <Select value={extras} onValueChange={setExtras}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None (basic build)</SelectItem>
                <SelectItem value="auto_door">Auto Door ($150+)</SelectItem>
                <SelectItem value="full_upgrades">Full Upgrades ($400+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-4">
            <h4 className="font-semibold text-muted-foreground">Free Plan Estimate</h4>
            <p className="text-2xl font-bold text-primary">{costs.freeRange}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Rework risk: <span className="text-destructive font-medium">{costs.reworkRisk}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Potential rework cost: {costs.potentialReworkCost}
            </p>
          </div>
          <div className="rounded-lg border border-primary bg-background p-4">
            <h4 className="font-semibold text-muted-foreground">Premium Plan Estimate</h4>
            <p className="text-2xl font-bold text-primary">{costs.premiumRange}</p>
            <p className="text-sm text-green-600 mt-1">
              Includes detailed materials list
            </p>
            <p className="text-xs text-muted-foreground">
              Lower rework risk with tested designs
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Plan Suitability Quiz Component
const PlanSuitabilityQuiz = () => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'experience',
      question: 'What\'s your DIY experience level?',
      options: [
        { value: 'none', label: 'Never built anything', score: 0 },
        { value: 'basic', label: 'Basic home projects', score: 1 },
        { value: 'moderate', label: 'Built furniture/sheds', score: 2 },
        { value: 'advanced', label: 'Professional/experienced', score: 3 },
      ]
    },
    {
      id: 'time',
      question: 'How much time can you dedicate to planning?',
      options: [
        { value: 'minimal', label: 'Want to start immediately', score: 0 },
        { value: 'some', label: '1-2 days of research', score: 1 },
        { value: 'moderate', label: 'A week of planning', score: 2 },
        { value: 'extensive', label: 'Whatever it takes', score: 3 },
      ]
    },
    {
      id: 'budget',
      question: 'What\'s your budget flexibility?',
      options: [
        { value: 'tight', label: 'Very tight, every dollar counts', score: 0 },
        { value: 'moderate', label: 'Some flexibility', score: 1 },
        { value: 'comfortable', label: 'Comfortable budget', score: 2 },
        { value: 'premium', label: 'Quality over cost', score: 3 },
      ]
    },
    {
      id: 'predators',
      question: 'What\'s your predator situation?',
      options: [
        { value: 'none', label: 'Urban area, minimal threats', score: 3 },
        { value: 'some', label: 'Suburban, occasional wildlife', score: 2 },
        { value: 'moderate', label: 'Rural with various predators', score: 1 },
        { value: 'severe', label: 'High predator pressure', score: 0 },
      ]
    },
    {
      id: 'climate',
      question: 'How challenging is your climate?',
      options: [
        { value: 'mild', label: 'Mild year-round', score: 3 },
        { value: 'moderate', label: 'Seasonal variations', score: 2 },
        { value: 'challenging', label: 'Extreme heat or cold', score: 1 },
        { value: 'severe', label: 'Multiple climate challenges', score: 0 },
      ]
    },
  ];

  const calculateScore = () => {
    let total = 0;
    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        const option = q.options.find(o => o.value === answer);
        if (option) total += option.score;
      }
    });
    return total;
  };

  const getRecommendation = () => {
    const score = calculateScore();
    if (score >= 12) {
      return {
        type: 'free',
        title: 'Free Plans Could Work',
        description: 'Your experience, mild conditions, and flexibility suggest you can successfully navigate free plans. Just budget extra time for research and potential adjustments.',
        color: 'text-green-600'
      };
    } else if (score >= 8) {
      return {
        type: 'either',
        title: 'Consider Your Priorities',
        description: 'You\'re in the middle ground. If time is valuable or you want peace of mind, premium plans may be worth it. If you enjoy problem-solving, free plans can work.',
        color: 'text-amber-600'
      };
    } else {
      return {
        type: 'premium',
        title: 'Premium Plans Recommended',
        description: 'Given your situation (limited experience, challenging conditions, or tight timeline), premium plans will likely save you time, money, and frustration in the long run.',
        color: 'text-primary'
      };
    }
  };

  const allAnswered = Object.keys(answers).length === questions.length;
  const recommendation = getRecommendation();

  return (
    <Card className="border-secondary/30 bg-secondary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <ClipboardCheck className="h-5 w-5 text-secondary-foreground" />
          Plan Suitability Quiz
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((q, index) => (
          <div key={q.id} className="space-y-2">
            <Label className="text-base font-medium">
              {index + 1}. {q.question}
            </Label>
            <RadioGroup
              value={answers[q.id] || ''}
              onValueChange={(value) => setAnswers({ ...answers, [q.id]: value })}
              className="grid gap-2 md:grid-cols-2"
            >
              {q.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`${q.id}-${option.value}`} />
                  <Label htmlFor={`${q.id}-${option.value}`} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}

        {allAnswered && (
          <div className="mt-6 rounded-lg border bg-background p-4">
            <h4 className={`font-bold text-lg ${recommendation.color}`}>
              {recommendation.title}
            </h4>
            <p className="text-muted-foreground mt-2">{recommendation.description}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Score: {calculateScore()}/15
            </p>
          </div>
        )}

        {!allAnswered && (
          <p className="text-sm text-muted-foreground">
            Answer all questions to see your recommendation
          </p>
        )}
      </CardContent>
    </Card>
  );
};

// Ventilation Calculator Component
const VentilationCalculator = () => {
  const [length, setLength] = useState(8);
  const [width, setWidth] = useState(4);
  const [birdCount, setBirdCount] = useState(6);
  const [climate, setClimate] = useState('temperate');

  const calculateVentilation = () => {
    const floorArea = length * width;
    const baseVentPerBird = 1; // sq ft per bird minimum
    const birdBasedVent = birdCount * baseVentPerBird;
    
    // Climate multipliers
    const climateMultiplier = {
      cold: 0.8,
      temperate: 1,
      hot: 1.5,
      humid: 1.3,
    };

    const multiplier = climateMultiplier[climate as keyof typeof climateMultiplier];
    const targetVentArea = Math.max(birdBasedVent * multiplier, floorArea * 0.1);
    
    // Recommendations
    const minVentArea = Math.round(targetVentArea * 10) / 10;
    const idealVentArea = Math.round(targetVentArea * 1.25 * 10) / 10;

    return {
      floorArea,
      minVentArea,
      idealVentArea,
      recommendation: climate === 'hot' || climate === 'humid' 
        ? 'Consider additional cross-ventilation and roof vents'
        : 'Standard ventilation with adjustable vents for winter'
    };
  };

  const results = calculateVentilation();

  return (
    <Card className="border-accent/30 bg-accent/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wind className="h-5 w-5 text-accent-foreground" />
          Ventilation Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="length">Coop Length (feet)</Label>
            <Input
              id="length"
              type="number"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value) || 8)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="width">Coop Width (feet)</Label>
            <Input
              id="width"
              type="number"
              min={4}
              max={20}
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value) || 4)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="birds">Number of Birds</Label>
            <Input
              id="birds"
              type="number"
              min={2}
              max={50}
              value={birdCount}
              onChange={(e) => setBirdCount(parseInt(e.target.value) || 6)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Climate Type</Label>
            <Select value={climate} onValueChange={setClimate}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cold">Cold (northern winters)</SelectItem>
                <SelectItem value="temperate">Temperate (moderate)</SelectItem>
                <SelectItem value="hot">Hot (desert/southern)</SelectItem>
                <SelectItem value="humid">Humid (coastal/tropical)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-background p-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Floor Area</p>
              <p className="text-xl font-bold">{results.floorArea} sq ft</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Minimum Vent Area</p>
              <p className="text-xl font-bold text-amber-600">{results.minVentArea} sq ft</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ideal Vent Area</p>
              <p className="text-xl font-bold text-green-600">{results.idealVentArea} sq ft</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Tip:</strong> {results.recommendation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const FreeVsPremiumPlans = () => {
  if (!article) return null;

  return (
    <BlogLayout article={article}>
      {/* Hero Image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={heroImage} 
          alt="Free vs Premium chicken coop plans comparison" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-muted-foreground">
          Choosing between free and premium chicken coop plans is one of the first decisions every backyard chicken keeper faces. 
          The right choice depends on your experience, budget, climate, and predator situation. This comprehensive guide includes 
          three interactive tools to help you make an informed decision.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-primary mt-0 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Bottom Line Up Front
          </h3>
          <p className="mb-0">
            <strong>Free plans work best for:</strong> Experienced DIYers in mild climates with low predator pressure and time to troubleshoot.<br/>
            <strong>Premium plans are worth it for:</strong> Beginners, challenging climates, high predator areas, or anyone who values their time.
          </p>
        </div>
      </section>

      {/* Quick Decision Framework */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Decision Framework</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              When to Consider Premium Plans
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Check any that apply. If you check 2 or more, premium plans will likely save you money and frustration:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5">1</Badge>
                <span>You have limited DIY experience (never built a structure before)</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5">2</Badge>
                <span>Your area has serious predator pressure (coyotes, foxes, raccoons)</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5">3</Badge>
                <span>You live in an extreme climate (very hot, very cold, or very wet)</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5">4</Badge>
                <span>Your time is worth more than $15-20/hour to you</span>
              </li>
              <li className="flex items-start gap-3">
                <Badge variant="outline" className="mt-0.5">5</Badge>
                <span>You want to avoid multiple trips to the hardware store</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Tool 1: Cost Estimator */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 1: Coop Cost Estimator</h2>
        <p className="text-muted-foreground mb-6">
          Enter your specific situation to get a personalized cost comparison between free and premium plan builds.
        </p>
        <CostEstimator />
      </section>

      {/* Interactive Tool 2: Quiz */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 2: Plan Suitability Quiz</h2>
        <p className="text-muted-foreground mb-6">
          Answer these 5 questions to get a personalized recommendation based on your situation.
        </p>
        <PlanSuitabilityQuiz />
      </section>

      {/* Interactive Tool 3: Ventilation Calculator */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tool 3: Ventilation Calculator</h2>
        <p className="text-muted-foreground mb-6">
          Proper ventilation is often missing or undersized in free plans. Calculate your coop's ventilation needs.
        </p>
        <VentilationCalculator />
        <p className="text-sm text-muted-foreground mt-4">
          Learn more in our <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">Complete Ventilation Guide</Link>.
        </p>
      </section>

      {/* Free Plans Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Free Plans: What You Get</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-800">
                <li>• Zero upfront cost</li>
                <li>• Abundant variety online</li>
                <li>• Great for experienced builders</li>
                <li>• Flexibility to modify freely</li>
                <li>• Community support on forums</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-red-800">
                <li>• Often incomplete material lists</li>
                <li>• May lack critical details</li>
                <li>• Ventilation often undersized</li>
                <li>• Predator protection gaps</li>
                <li>• No support or updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Premium Plans Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Premium Plans: What You Get</h2>
        
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <DollarSign className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Complete Material Lists</h3>
              <p className="text-sm text-muted-foreground">
                Exact quantities, dimensions, and hardware specifications. No guesswork, fewer hardware store trips.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Predator-Tested Designs</h3>
              <p className="text-sm text-muted-foreground">
                Hardware cloth specs, apron depths, and locking mechanisms proven to work against common predators.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Hammer className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Step-by-Step Instructions</h3>
              <p className="text-sm text-muted-foreground">
                Detailed guides with photos/diagrams at each stage. Perfect for beginners and visual learners.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Side-by-Side Comparison</h2>
        
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="w-1/3">Free Plans</TableHead>
                <TableHead className="w-1/3">Premium Plans</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Upfront Cost</TableCell>
                <TableCell className="text-green-600">$0</TableCell>
                <TableCell>$20-$50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Material Lists</TableCell>
                <TableCell className="text-amber-600">Often incomplete</TableCell>
                <TableCell className="text-green-600">Complete with quantities</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Ventilation Design</TableCell>
                <TableCell className="text-red-600">Often undersized</TableCell>
                <TableCell className="text-green-600">Climate-appropriate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Predator Protection</TableCell>
                <TableCell className="text-amber-600">Basic or missing</TableCell>
                <TableCell className="text-green-600">Tested specifications</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Support</TableCell>
                <TableCell className="text-amber-600">Community forums</TableCell>
                <TableCell className="text-green-600">Direct support often included</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Time Investment</TableCell>
                <TableCell className="text-amber-600">High (research needed)</TableCell>
                <TableCell className="text-green-600">Lower (ready to build)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Rework Risk</TableCell>
                <TableCell className="text-red-600">20-35%</TableCell>
                <TableCell className="text-green-600">5-10%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Real Build Scenarios */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Real Build Scenarios</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Scenario 1: The Weekend Warrior</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Situation:</strong> Experienced DIYer, suburban location, mild climate, 4-6 chickens
              </p>
              <p className="mb-2">
                <Badge variant="outline" className="bg-green-50">Recommendation: Free Plans</Badge>
              </p>
              <p className="text-sm text-muted-foreground">
                With your experience and favorable conditions, you can successfully troubleshoot any gaps in free plans. 
                Budget an extra weekend for research and potential modifications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scenario 2: The First-Timer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Situation:</strong> Limited DIY experience, rural location with predators, hot climate, 8-10 chickens
              </p>
              <p className="mb-2">
                <Badge variant="outline" className="bg-primary/10">Recommendation: Premium Plans</Badge>
              </p>
              <p className="text-sm text-muted-foreground">
                The combination of inexperience, predator pressure, and climate challenges makes premium plans worth the investment. 
                The $50-80 plan cost could save $300+ in rework and prevent chicken losses.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Scenario 3: The Budget Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                <strong>Situation:</strong> Tight budget, some DIY experience, moderate climate, 6 chickens
              </p>
              <p className="mb-2">
                <Badge variant="outline" className="bg-amber-50">Recommendation: Hybrid Approach</Badge>
              </p>
              <p className="text-sm text-muted-foreground">
                Start with free plans but invest in a premium predator-proofing guide or use our calculators above. 
                Focus your premium spending on the areas where mistakes are costliest.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comprehensive Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Any Good Plan Must Include</h2>
        <p className="text-muted-foreground mb-6">
          Whether free or premium, your coop plans should address all of these areas:
        </p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Structure & Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Level foundation specifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Frame dimensions and lumber sizes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Roof pitch and material options
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Predator Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Hardware cloth gauge and placement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Apron or buried barrier specs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Door locking mechanisms
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ventilation & Climate</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Vent sizing and placement
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Winter closure options
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cross-ventilation design
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Interior Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Roost bar dimensions and spacing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Nesting box size and count
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Cleaning access points
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Are free plans really free, or are there hidden costs?</AccordionTrigger>
            <AccordionContent>
              Free plans are genuinely free to download, but hidden costs emerge in incomplete material lists (extra trips to the store), 
              undersized ventilation (health issues), and weak predator protection (potential chicken losses). Budget 20-30% more for 
              materials than listed and factor in your time for research.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How much do premium plans typically cost?</AccordionTrigger>
            <AccordionContent>
              Premium chicken coop plans typically range from $20-$50. This includes complete material lists, step-by-step 
              instructions, and customer support. Compare this to potential rework costs of $100-$500+ with incomplete free plans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can I modify premium plans?</AccordionTrigger>
            <AccordionContent>
              Yes! Premium plans provide a solid foundation that you can modify to suit your needs. Having accurate base dimensions 
              and material specs makes modifications safer than starting from incomplete free plans. Just maintain key ratios for 
              ventilation and space per bird.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What's the biggest mistake people make with free plans?</AccordionTrigger>
            <AccordionContent>
              Underestimating ventilation needs. Most free plans show minimal venting, leading to ammonia buildup, respiratory 
              issues, and frostbite in winter (from trapped moisture). Use our Ventilation Calculator above to check any plan's 
              specifications.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do I know if a free plan is any good?</AccordionTrigger>
            <AccordionContent>
              Look for: complete material lists with quantities, ventilation specifications (sq ft of venting), predator protection 
              details (hardware cloth gauge, apron depth), and build photos from multiple people who've used the plans. Avoid plans 
              with only renderings and no real photos.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Should I pay more for a plan with customer support?</AccordionTrigger>
            <AccordionContent>
              For beginners, yes. Having someone to email when you're stuck at step 7 is invaluable. For experienced builders, 
              support is less critical. Consider it insurance against frustration and costly mistakes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="mb-12">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Choose Your Plans?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our curated collection of proven chicken coop plans, from budget-friendly options to premium 
                designs with complete material lists and step-by-step instructions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/recommended-plans">
                    View Recommended Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/guides/how-to-build-chicken-coop">
                    Read Building Guide
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/guides/predator-proof-coop-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Predator-Proof Coop Guide</h3>
            <p className="text-sm text-muted-foreground">Complete security specifications for any build</p>
          </Link>
          <Link to="/guides/coop-ventilation-guide" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">Ventilation Guide</h3>
            <p className="text-sm text-muted-foreground">Climate-specific ventilation requirements</p>
          </Link>
          <Link to="/guides/cost-breakdown-2025" className="block p-4 rounded-lg border hover:border-primary transition-colors">
            <h3 className="font-semibold mb-1">2025 Cost Breakdown</h3>
            <p className="text-sm text-muted-foreground">Current material prices and budget tiers</p>
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

export default FreeVsPremiumPlans;
