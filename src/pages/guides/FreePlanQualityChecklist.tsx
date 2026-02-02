import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogLayout from '@/components/BlogLayout';
import { getArticleBySlug } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ClipboardCheck, AlertTriangle, CheckCircle, Shield, Wind, Ruler, DollarSign, Wrench, Scale, MapPin, FileText, Star } from 'lucide-react';
import heroImage from '@/assets/guide-free-coop-quality-checklist.jpg';

// Interactive Plan Evaluation Tool
const PlanEvaluationTool = () => {
  const [essentials, setEssentials] = useState({
    spaceCalculations: false,
    hardwareCloth: false,
    ventilationReqs: false,
    materialsList: false,
    predatorLatches: false,
    foundationReqs: false,
  });

  const [quality, setQuality] = useState({
    multiAngleDrawings: false,
    stepByStep: false,
    costEstimates: false,
    climateAdaptation: false,
    maintenanceAccess: false,
    legalCompliance: false,
  });

  const essentialCount = Object.values(essentials).filter(Boolean).length;
  const qualityCount = Object.values(quality).filter(Boolean).length;
  const allEssentialsMet = essentialCount === 6;

  const getRating = () => {
    if (!allEssentialsMet) return { label: 'Do Not Use', color: 'text-destructive', bg: 'bg-destructive/10 border-destructive/20' };
    if (qualityCount >= 5) return { label: 'Excellent Plan', color: 'text-green-600', bg: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' };
    if (qualityCount >= 3) return { label: 'Good Plan (Minor Gaps)', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' };
    return { label: 'Incomplete Plan', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' };
  };

  const rating = getRating();

  const resetChecklist = () => {
    setEssentials({
      spaceCalculations: false,
      hardwareCloth: false,
      ventilationReqs: false,
      materialsList: false,
      predatorLatches: false,
      foundationReqs: false,
    });
    setQuality({
      multiAngleDrawings: false,
      stepByStep: false,
      costEstimates: false,
      climateAdaptation: false,
      maintenanceAccess: false,
      legalCompliance: false,
    });
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2 text-xl">
          <ClipboardCheck className="h-5 w-5 text-primary" />
          Free Plan Evaluation Checklist
        </CardTitle>
        <p className="text-sm text-muted-foreground">Score any free plan before you start building</p>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        {/* Essential Elements */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Shield className="h-4 w-4 text-destructive" />
            Essential Elements (Must Have All 6)
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="space" 
                checked={essentials.spaceCalculations}
                onCheckedChange={(checked) => setEssentials({...essentials, spaceCalculations: !!checked})}
              />
              <Label htmlFor="space" className="text-sm cursor-pointer">Space calculations (3-4 sq ft/bird)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="hardware" 
                checked={essentials.hardwareCloth}
                onCheckedChange={(checked) => setEssentials({...essentials, hardwareCloth: !!checked})}
              />
              <Label htmlFor="hardware" className="text-sm cursor-pointer">Hardware cloth specs (1/2", 19-gauge)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="ventilation" 
                checked={essentials.ventilationReqs}
                onCheckedChange={(checked) => setEssentials({...essentials, ventilationReqs: !!checked})}
              />
              <Label htmlFor="ventilation" className="text-sm cursor-pointer">Ventilation requirements (1 sq ft/bird)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="materials" 
                checked={essentials.materialsList}
                onCheckedChange={(checked) => setEssentials({...essentials, materialsList: !!checked})}
              />
              <Label htmlFor="materials" className="text-sm cursor-pointer">Complete materials list with quantities</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="latches" 
                checked={essentials.predatorLatches}
                onCheckedChange={(checked) => setEssentials({...essentials, predatorLatches: !!checked})}
              />
              <Label htmlFor="latches" className="text-sm cursor-pointer">Predator-proof latching specs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="foundation" 
                checked={essentials.foundationReqs}
                onCheckedChange={(checked) => setEssentials({...essentials, foundationReqs: !!checked})}
              />
              <Label htmlFor="foundation" className="text-sm cursor-pointer">Foundation/base requirements</Label>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{essentialCount}/6 essential elements</p>
        </div>

        {/* Quality Indicators */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />
            Quality Indicators (Should Have Most)
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="drawings" 
                checked={quality.multiAngleDrawings}
                onCheckedChange={(checked) => setQuality({...quality, multiAngleDrawings: !!checked})}
              />
              <Label htmlFor="drawings" className="text-sm cursor-pointer">Multi-angle dimensional drawings</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="steps" 
                checked={quality.stepByStep}
                onCheckedChange={(checked) => setQuality({...quality, stepByStep: !!checked})}
              />
              <Label htmlFor="steps" className="text-sm cursor-pointer">Step-by-step construction sequence</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="costs" 
                checked={quality.costEstimates}
                onCheckedChange={(checked) => setQuality({...quality, costEstimates: !!checked})}
              />
              <Label htmlFor="costs" className="text-sm cursor-pointer">Realistic cost estimates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="climate" 
                checked={quality.climateAdaptation}
                onCheckedChange={(checked) => setQuality({...quality, climateAdaptation: !!checked})}
              />
              <Label htmlFor="climate" className="text-sm cursor-pointer">Climate adaptation guidance</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="maintenance" 
                checked={quality.maintenanceAccess}
                onCheckedChange={(checked) => setQuality({...quality, maintenanceAccess: !!checked})}
              />
              <Label htmlFor="maintenance" className="text-sm cursor-pointer">Maintenance access provisions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="legal" 
                checked={quality.legalCompliance}
                onCheckedChange={(checked) => setQuality({...quality, legalCompliance: !!checked})}
              />
              <Label htmlFor="legal" className="text-sm cursor-pointer">Legal compliance information</Label>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{qualityCount}/6 quality indicators</p>
        </div>

        {/* Result */}
        <div className={`p-4 rounded-lg border-2 ${rating.bg}`}>
          <div className="flex items-center gap-2 mb-2">
            {allEssentialsMet ? (
              <CheckCircle className={`h-5 w-5 ${rating.color}`} />
            ) : (
              <AlertTriangle className="h-5 w-5 text-destructive" />
            )}
            <span className={`font-bold text-lg ${rating.color}`}>{rating.label}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            {!allEssentialsMet 
              ? 'Missing essential elements. Do not build from this plan—it lacks critical safety features.'
              : qualityCount >= 5 
                ? 'This plan has comprehensive documentation. Excellent choice for building.'
                : qualityCount >= 3
                  ? 'Good plan with minor documentation gaps. Supplement with additional research.'
                  : 'Plan lacks quality documentation. Consider finding alternatives or supplementing heavily.'
            }
          </p>
        </div>

        <Button variant="outline" onClick={resetChecklist} className="w-full">
          Reset Checklist
        </Button>
      </CardContent>
    </Card>
  );
};

const FreePlanQualityChecklist = () => {
  const article = getArticleBySlug('free-coop-plans-quality-checklist');
  
  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      {/* Hero Image */}
      <div className="mb-12 -mx-4 md:-mx-8">
        <img 
          src={heroImage} 
          alt="Quality checklist for evaluating free chicken coop plans with magnifying glass and blueprint"
          className="w-full h-64 md:h-96 object-cover rounded-xl"
        />
      </div>

      {/* Intro */}
      <section className="mb-12">
        <p className="text-xl text-foreground leading-relaxed mb-6">
          <strong>Not all free chicken coop plans are created equal.</strong> After reviewing hundreds of free designs and helping neighbors build coops across Phoenix, I've seen the same critical mistakes repeated in 80% of free plans available online. Some omissions are merely inconvenient—others create safety hazards that put your flock at risk.
        </p>
        
        <p className="text-muted-foreground mb-8">
          This comprehensive checklist reveals the 12 essential elements that separate professional-quality free plans from dangerous time-wasters. Whether you're evaluating plans from university extensions, hobby blogs, or Pinterest, these criteria will save you from costly mistakes and frustrated weekends.
        </p>

        {/* Interactive Tool */}
        <PlanEvaluationTool />
      </section>

      {/* Table of Contents */}
      <nav className="mb-12 p-6 bg-muted/50 rounded-xl">
        <h2 className="font-display text-xl text-foreground mb-4">What You'll Learn</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li><a href="#space-calculations" className="text-primary hover:underline">Accurate Space Calculations</a></li>
          <li><a href="#predator-protection" className="text-primary hover:underline">Comprehensive Predator Protection</a></li>
          <li><a href="#ventilation-specifications" className="text-primary hover:underline">Proper Ventilation Specifications</a></li>
          <li><a href="#materials-list" className="text-primary hover:underline">Complete Materials List</a></li>
          <li><a href="#structural-details" className="text-primary hover:underline">Structural Engineering Details</a></li>
          <li><a href="#climate-considerations" className="text-primary hover:underline">Climate Adaptations</a></li>
          <li><a href="#maintenance-access" className="text-primary hover:underline">Maintenance Access Planning</a></li>
          <li><a href="#legal-compliance" className="text-primary hover:underline">Legal Compliance Information</a></li>
          <li><a href="#cost-estimates" className="text-primary hover:underline">Realistic Cost Estimates</a></li>
          <li><a href="#red-flags" className="text-primary hover:underline">Red Flags to Avoid</a></li>
          <li><a href="#where-to-find" className="text-primary hover:underline">Where to Find Quality Free Plans</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* Section 1: Space Calculations */}
      <section id="space-calculations" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <Ruler className="h-8 w-8 text-primary" />
          1. Accurate Space Calculations
        </h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">The most common failure in free plans: undersized coops.</strong> Quality plans specify 3-4 square feet per standard bird inside the coop with outdoor access, or 8-10 square feet if confined. Many free designs claim a 4×4 coop houses "up to 8 chickens"—but 16 square feet provides only 2 square feet per bird, creating overcrowding that leads to feather pecking, disease transmission, and aggressive behavior.
        </p>

        <p className="text-muted-foreground mb-4">Look for plans that clearly state:</p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Square footage calculations per bird</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Distinction between coop space and run space</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Roost space requirements (8-10 inches per standard bird)</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Nest box ratios (1 box per 4-5 hens)</li>
        </ul>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">⚠️ Red Flag</h4>
          <p className="text-muted-foreground">
            Any plan claiming more than one bird per 3-4 square feet of coop space should be immediately suspect.
          </p>
        </div>

        <p className="text-muted-foreground">
          Use our <Link to="/guides/chicken-coop-size-calculator" className="text-primary hover:underline font-medium">Chicken Coop Size Calculator</Link> to verify space requirements for your specific flock size and breed.
        </p>
      </section>

      {/* Section 2: Predator Protection */}
      <section id="predator-protection" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <Shield className="h-8 w-8 text-primary" />
          2. Comprehensive Predator Protection
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Predation accounts for over 70% of backyard chicken mortality. Quality free plans address this with specific material requirements and installation details.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Essential predator protection elements:</h3>
        
        <div className="space-y-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Hardware cloth specifications</h4>
            <p className="text-sm text-muted-foreground">Plans must specify 1/2-inch aperture, 19-gauge galvanized hardware cloth—not chicken wire</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Burial barriers</h4>
            <p className="text-sm text-muted-foreground">12-18 inches of cloth buried vertically or extended outward as an apron</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Secure latching</h4>
            <p className="text-sm text-muted-foreground">Two-step latches that require simultaneous motions (raccoons can open simple hooks)</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">Overhead protection</h4>
            <p className="text-sm text-muted-foreground">Coverage for aerial predators in areas with hawks or owls</p>
          </div>
        </div>

        <p className="text-muted-foreground">
          Plans that simply say "secure with chicken wire" or "use a simple latch" will result in predator losses. <Link to="/guides/predator-proof-coop-guide" className="text-primary hover:underline font-medium">Our predator-proofing guide</Link> includes detailed strategies specific to different regional threats—critical knowledge often missing from generic free plans.
        </p>
      </section>

      {/* Section 3: Ventilation */}
      <section id="ventilation-specifications" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <Wind className="h-8 w-8 text-primary" />
          3. Proper Ventilation Specifications
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Inadequate ventilation kills more chickens than cold weather. Ammonia buildup from droppings causes respiratory damage at just 5 ppm—below human detection threshold. Quality plans specify ventilation requirements with precise measurements.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Look for these ventilation details:</h3>
        
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> At least 1 square foot of permanent opening per bird near the roofline</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Cross-ventilation through openings on opposite walls</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Distinction between ventilation (air exchange) and drafts (air blowing on birds)</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Hardware cloth coverage for all ventilation openings</li>
        </ul>

        <p className="text-muted-foreground mb-6">
          Plans showing solid walls with minimal ventilation will create health problems. In Arizona's desert climate, <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline font-medium">maximum ventilation becomes even more critical</Link> for temperature management during 110°F+ summer days.
        </p>
      </section>

      {/* Section 4: Materials List */}
      <section id="materials-list" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          4. Complete Materials List
        </h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Incomplete materials lists are the #1 source of project delays and cost overruns.</strong> Professional plans include exact quantities, not vague descriptions like "lumber as needed."
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">A complete materials list specifies:</h3>
        
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Exact lumber dimensions and quantities (e.g., "6 pieces 2×4×8' pressure treated")</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Hardware cloth square footage and gauge specifications</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Fastener types and quantities (galvanized screws vs. nails vs. bolts)</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Roofing materials with coverage area</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Foundation requirements (concrete blocks, gravel, etc.)</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Hardware specifications (hinges, latches, handles)</li>
        </ul>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-foreground mb-2">💡 Current Material Cost Reality Check</h4>
          <p className="text-muted-foreground">
            Quality coop materials for a 6-bird coop range from $400-700. Plans suggesting you can build for under $200 either use inadequate materials or omit critical components. See our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline font-medium">complete materials guide</Link> for current pricing.
          </p>
        </div>
      </section>

      {/* Section 5: Structural Details */}
      <section id="structural-details" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <Wrench className="h-8 w-8 text-primary" />
          5. Structural Engineering Details
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Free plans often lack structural specifications, leading to coops that collapse under snow loads or deteriorate rapidly. Look for plans that address load-bearing requirements and connection methods.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Essential structural elements:</h3>
        
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Foundation specifications appropriate for local soil conditions</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Rafter spacing and load calculations for snow/wind loads</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Connection details showing how components attach</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Moisture management to prevent rot</li>
        </ul>

        <p className="text-muted-foreground">
          Plans showing basic framing without connection details or load considerations often result in wobbly, short-lived structures.
        </p>
      </section>

      {/* Section 6: Climate Considerations */}
      <section id="climate-considerations" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          6. Climate Adaptations
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Generic free plans ignore regional climate requirements. Quality plans either specify climate zones or provide adaptation guidance for different conditions.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">🌡️ Hot Climates</h4>
            <p className="text-sm text-muted-foreground">Maximum ventilation, shade requirements, larger water access</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">❄️ Cold Climates</h4>
            <p className="text-sm text-muted-foreground">Insulation options, draft prevention, smaller ventilation</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">🌧️ Wet Climates</h4>
            <p className="text-sm text-muted-foreground">Enhanced drainage, moisture barriers, ventilation for humidity</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2">💨 Windy Areas</h4>
            <p className="text-sm text-muted-foreground">Reinforced construction, secured roofing</p>
          </div>
        </div>

        <p className="text-muted-foreground">
          In Phoenix, where summer temperatures exceed 110°F, plans must prioritize shade and ventilation over insulation. <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline font-medium">Our Arizona-specific building guide</Link> addresses the unique challenges of desert chicken keeping that generic plans overlook.
        </p>
      </section>

      {/* Section 7: Maintenance Access */}
      <section id="maintenance-access" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">7. Maintenance Access Planning</h2>
        
        <p className="text-muted-foreground mb-6">
          Plans that ignore maintenance access create coops that are difficult to clean, leading to health problems and owner frustration.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Essential access features:</h3>
        
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Human-sized doors or removable panels for cleaning</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Easy access to feeders and waterers</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Removable or hinged roost bars for cleaning underneath</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Nest box access from outside (no disturbing roosting birds)</li>
        </ul>

        <p className="text-muted-foreground">
          Plans requiring you to crawl into the coop for daily maintenance guarantee you'll skip cleaning tasks, compromising flock health.
        </p>
      </section>

      {/* Section 8: Legal Compliance */}
      <section id="legal-compliance" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <MapPin className="h-8 w-8 text-primary" />
          8. Legal Compliance Information
        </h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Most free plans completely ignore legal requirements</strong>—a potentially expensive oversight. Municipal regulations vary dramatically even within the same state.
        </p>

        <h3 className="font-display text-xl text-foreground mb-4">Legal considerations include:</h3>
        
        <ul className="space-y-2 text-muted-foreground mb-6">
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Setback requirements from property lines</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Maximum flock sizes</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> Permit requirements for structures over certain sizes</li>
          <li className="flex items-start gap-2"><span className="text-primary">•</span> HOA restrictions (often more restrictive than municipal codes)</li>
        </ul>

        <p className="text-muted-foreground">
          In Arizona, Phoenix requires 80-foot setbacks unless neighbors provide written consent, while Chandler allows 5-foot setbacks. Plans that ignore these variables can result in costly relocations or fines. Check our <Link to="/guides/coop-permit-guide" className="text-primary hover:underline font-medium">state-by-state permit guide</Link> before building.
        </p>
      </section>

      {/* Section 9: Cost Estimates */}
      <section id="cost-estimates" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <DollarSign className="h-8 w-8 text-primary" />
          9. Realistic Cost Estimates
        </h2>
        
        <p className="text-muted-foreground mb-6">
          Free plans often provide outdated or unrealistic cost estimates. Quality plans include current material pricing or provide formulas for calculating costs based on local lumber prices.
        </p>

        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h3 className="font-display text-xl text-foreground mb-4">Realistic 2025 Cost Ranges</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-secondary/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">Small Coop (4-6 birds)</h4>
              <p className="text-2xl font-bold text-primary">$400-700</p>
              <p className="text-sm text-muted-foreground">using quality materials</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">Medium Coop (8-12 birds)</h4>
              <p className="text-2xl font-bold text-primary">$700-1,200</p>
              <p className="text-sm text-muted-foreground">standard build quality</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <h4 className="font-semibold text-foreground mb-2">Large Coop (12+ birds)</h4>
              <p className="text-2xl font-bold text-primary">$1,200-2,000+</p>
              <p className="text-sm text-muted-foreground">full predator protection</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground">
          Plans suggesting you can build a predator-proof coop for under $200 are either using inadequate materials or omitting essential components. See our <Link to="/guides/cost-breakdown-2025" className="text-primary hover:underline font-medium">complete cost breakdown</Link> for detailed material pricing.
        </p>
      </section>

      {/* Section 10: Red Flags */}
      <section id="red-flags" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          10. Critical Red Flags to Avoid
        </h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Immediately disqualify any free plan that includes these dangerous elements:</strong>
        </p>

        <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">Chicken wire for primary protection:</strong> Raccoons tear through it easily</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">Simple hook latches:</strong> Raccoons can open these</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">No ventilation specifications:</strong> Will cause respiratory problems</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">Undersized dimensions:</strong> Creates overcrowding stress</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">No foundation requirements:</strong> Leads to structural failure</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">Untreated lumber in ground contact:</strong> Rots quickly</li>
            <li className="flex items-start gap-2"><span className="text-destructive font-bold">✗</span> <strong className="text-foreground">No predator barrier specifications:</strong> Guarantees losses</li>
          </ul>
        </div>

        <p className="text-muted-foreground">
          These aren't minor flaws—they're design failures that waste money and endanger your flock.
        </p>
      </section>

      {/* Section 11: Where to Find */}
      <section id="where-to-find" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">11. Best Sources for Quality Free Plans</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">University extension services provide the most reliable free plans.</strong> These plans undergo professional review and testing before publication.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recommended Sources
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">University of Arizona Cooperative Extension:</strong> Desert-adapted designs</li>
              <li>• <strong className="text-foreground">Virginia Tech Extension:</strong> Comprehensive plans with material lists</li>
              <li>• <strong className="text-foreground">University of Kentucky Extension:</strong> Multiple size options</li>
              <li>• <strong className="text-foreground">Cornell Cooperative Extension:</strong> Cold-climate adaptations</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
            <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Approach with Caution
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pinterest pins without original sources</li>
              <li>• Blog posts from non-experienced builders</li>
              <li>• Plans offering unrealistic cost estimates</li>
              <li>• Designs that look too simple or lack detail</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground">
          For a comprehensive review of the best free plan sources, see our <Link to="/guides/free-chicken-coop-plans" className="text-primary hover:underline font-medium">25 Best Free Plan Sources Reviewed</Link> guide.
        </p>
      </section>

      {/* The Bottom Line */}
      <section className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">The Bottom Line: Time vs. Money vs. Quality</h2>
        
        <p className="text-muted-foreground mb-6">
          <strong className="text-foreground">Quality free plans do exist, but they're rare.</strong> University extension services provide the most reliable free options, while most online sources offer incomplete or dangerous designs.
        </p>

        <p className="text-muted-foreground mb-6">
          The reality is that developing comprehensive coop plans requires significant expertise and time investment. <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline font-medium">Our complete building guide</Link> accounts for regional climate, local predators, building codes, and long-term maintenance—factors that casual builders often overlook.
        </p>

        <p className="text-muted-foreground mb-6">
          If you find a free plan that meets all criteria in this checklist, you've discovered a gem. More likely, you'll need to either supplement free plans with additional research or invest in professionally developed plans that address these critical elements comprehensively.
        </p>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
          <p className="text-lg text-foreground font-medium">
            <strong>Your flock's safety and your building success depend on choosing plans that prioritize function over cost savings.</strong> Use this checklist to evaluate any free plan thoroughly before breaking ground—your chickens will thank you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-12">
        <h2 className="font-display text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Are free chicken coop plans safe to use?</h3>
            <p className="text-muted-foreground">
              Free plans can be safe if they include proper predator protection, adequate ventilation, and appropriate space calculations. However, many free plans omit critical safety elements. Always evaluate plans using our checklist before building.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">What's the most common mistake in free chicken coop plans?</h3>
            <p className="text-muted-foreground">
              Undersized coops are the most frequent problem. Many free plans claim a 4×4 coop houses 8 chickens, but this provides only 2 square feet per bird—less than half the recommended space.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">How much should I expect to spend building from free plans?</h3>
            <p className="text-muted-foreground">
              Quality materials for a predator-proof coop cost $400-700 for 4-6 birds, regardless of plan source. Plans suggesting costs under $200 typically use inadequate materials or omit essential components.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Do I need a permit to build from free plans?</h3>
            <p className="text-muted-foreground">
              Permit requirements vary by location and structure size. Many municipalities require permits for permanent structures over 120-200 square feet. Check local building codes before construction, as free plans rarely address permit requirements.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-2">Can I modify free plans for my specific needs?</h3>
            <p className="text-muted-foreground">
              Yes, but modifications should maintain essential elements like proper ventilation, adequate space, and predator protection. <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline font-medium">Understanding the principles behind good coop design</Link> helps ensure modifications don't compromise safety or functionality.
            </p>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default FreePlanQualityChecklist;
