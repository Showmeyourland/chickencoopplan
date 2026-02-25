import { Link } from "react-router-dom";
import { Wind, AlertTriangle, CheckCircle, Thermometer, Clock, DollarSign, Droplets, Settings, Wrench, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import TableOfContents from "@/components/TableOfContents";
import AuthorBio from "@/components/AuthorBio";
import RelatedArticles from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/lib/articles";
import guideVentilationImage from "@/assets/guide-ventilation.jpg";

const tocItems = [
  { id: "why-ventilation-matters", text: "Why Ventilation Matters", level: 2 },
  { id: "respiratory-science", text: "Chicken Respiratory Science", level: 2 },
  { id: "calculating-requirements", text: "Calculating Requirements", level: 2 },
  { id: "climate-designs", text: "Climate-Specific Designs", level: 2 },
  { id: "common-mistakes", text: "Common Mistakes", level: 2 },
  { id: "troubleshooting", text: "Troubleshooting Problems", level: 2 },
  { id: "retrofit-solutions", text: "Retrofit Solutions", level: 2 },
  { id: "cost-upgrades", text: "Cost-Effective Upgrades", level: 2 },
  { id: "seasonal-management", text: "Seasonal Management", level: 2 },
  { id: "faq", text: "FAQ", level: 2 },
];

const ventilationFormula = [
  { birds: "4-6", minimum: "4-6 sq ft", summer: "10-15 sq ft", placement: "2 sq ft exhaust + 2-3 sq ft inlet" },
  { birds: "8-10", minimum: "8-10 sq ft", summer: "20-25 sq ft", placement: "5 sq ft exhaust + 3-5 sq ft inlet" },
  { birds: "12-15", minimum: "12-15 sq ft", summer: "30-40 sq ft", placement: "8 sq ft exhaust + 4-7 sq ft inlet" },
];

const climateFactors = [
  { climate: "Hot, Dry (AZ, NV, TX)", multiplier: "2.5-3.0×", priority: "Maximum airflow, evaporative cooling" },
  { climate: "Hot, Humid (FL, LA, Gulf)", multiplier: "2.0-2.5×", priority: "Moisture removal, air movement" },
  { climate: "Cold (Northern States)", multiplier: "1.0× (base)", priority: "Moisture removal without drafts" },
  { climate: "Moderate (Pacific NW)", multiplier: "1.5-2.0×", priority: "Flexible, seasonal adjustment" },
];

const commonMistakes = [
  {
    mistake: "Confusing Ventilation with Drafts",
    problem: "Sealing coops to 'prevent drafts' eliminates necessary ventilation",
    signs: ["Ammonia smell", "Condensation on walls", "Respiratory symptoms", "Wet bedding"],
    fix: "Open high-level ventilation permanently; position inlets to avoid direct airflow on roosts",
    cost: "$50-150",
  },
  {
    mistake: "Undersized Openings",
    problem: "Most commercial coops provide 30-50% of needed ventilation",
    signs: ["Strong ammonia at bird height", "Excessive moisture", "Heat buildup"],
    fix: "Add ventilation panels, cupolas, or ridge vents to reach 1 sq ft per bird minimum",
    cost: "$80-200",
  },
  {
    mistake: "Poor Placement",
    problem: "Openings too low, on same wall, or unprotected from weather",
    signs: ["Dead air zones", "Drafts on roosting birds", "Rain entering coop"],
    fix: "High exhaust (60-70% near roofline), low inlets (30-40% at 12-18 inches)",
    cost: "$100-250",
  },
  {
    mistake: "Sealing in Winter",
    problem: "Completely closing ventilation during cold weather traps moisture",
    signs: ["Frostbitten combs", "Ice on walls", "Respiratory disease outbreaks"],
    fix: "Reduce inlets by 50% max; never close exhaust vents completely",
    cost: "$0 (behavior change)",
  },
];

const troubleshootingProblems = [
  {
    problem: "Strong Ammonia Odor",
    cause: "Inadequate air exchange allowing ammonia buildup",
    immediate: ["Increase bedding depth", "Remove wet bedding", "Open more ventilation", "Apply Sweet PDZ"],
    longTerm: ["Double ventilation area", "Install exhaust fan", "Relocate waterers outside"],
  },
  {
    problem: "Condensation on Walls",
    cause: "Moisture production exceeding ventilation capacity",
    immediate: ["Add moisture-absorbing bedding", "Check for water leaks", "Open all vents"],
    longTerm: ["Install additional exhaust ventilation", "Add moisture barriers", "Consider dehumidifier"],
  },
  {
    problem: "Frostbitten Combs",
    cause: "High humidity creating moisture that freezes on combs",
    immediate: ["Increase high-level ventilation", "Apply petroleum jelly to combs", "Remove heat sources"],
    longTerm: ["Monitor humidity (target 50-70%)", "Choose breeds with smaller combs"],
  },
  {
    problem: "Respiratory Symptoms",
    cause: "Poor air quality damaging respiratory tissue",
    immediate: ["Open all ventilation", "Remove birds if severe", "Test ammonia at bird height"],
    longTerm: ["Maintain maximum ventilation", "Daily bedding changes", "Consult veterinarian"],
  },
];

const retrofitOptions = [
  { option: "Upper Wall Panels", best: "Solid upper walls with roof overhangs", cost: "$80-150", time: "4-6 hours", skill: "Intermediate" },
  { option: "Soffit Vent Installation", best: "Roof overhangs, limited wall options", cost: "$40-80", time: "2-3 hours", skill: "Beginner" },
  { option: "Cupola Addition", best: "Limited wall space", cost: "$150-300", time: "6-8 hours", skill: "Advanced" },
  { option: "Mechanical Ventilation", best: "Insufficient passive ventilation", cost: "$80-250", time: "3-5 hours", skill: "Intermediate" },
];

const ChickenCoopVentilationGuide = () => {
  return (
    <>
      <SEO
        title="Chicken Coop Ventilation Guide: How Much & Where to Put It"
        description="Chickens need 1 sq ft of ventilation per 10 sq ft of coop space. Here's how to calculate it, where to install vents, and how to avoid the cold drafts that kill flocks."
        canonical="/guides/coop-ventilation-guide"
        type="article"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 h-[400px] md:h-[500px]">
            <img
              src={guideVentilationImage}
              alt="Well-ventilated chicken coop with natural airflow and healthy chickens"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          </div>

          <div className="relative container mx-auto px-4 pt-32 pb-12 md:pt-48 md:pb-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: "Coop Ventilation Guide" },
              ]}
            />

            <div className="max-w-4xl mt-6">
              <Badge variant="secondary" className="mb-4">
                Building
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Complete Chicken Coop Ventilation Guide (2025)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Climate-specific ventilation designs, troubleshooting solutions, and cost-effective upgrades to prevent respiratory diseases and keep your flock healthy.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  35 min read
                </span>
                <span className="flex items-center gap-1">
                  <Wind className="h-4 w-4" />
                  Intermediate
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  $50-$400 upgrades
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Wind className="h-5 w-5" />
                Critical Ventilation Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold">90% of health problems</span>
                    <p className="text-muted-foreground">prevented by proper ventilation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Thermometer className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <span className="font-semibold">Air quality &gt; temperature</span>
                    <p className="text-muted-foreground">chickens need fresh air, not warmth</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Droplets className="h-4 w-4 mt-1 text-blue-500" />
                  <div>
                    <span className="font-semibold">1 lb moisture/bird/day</span>
                    <p className="text-muted-foreground">must be removed by ventilation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              <div className="space-y-12">
                {/* Author Experience */}
                <Card className="bg-muted/30">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic">
                      "I learned ventilation the hard way after losing birds to respiratory issues. After helping dozens of chicken keepers solve ventilation crises in Arizona's extreme climate, I've learned that most 'complicated' coop problems trace back to inadequate airflow design."
                    </p>
                    <p className="mt-3 font-medium">— Sarah Martinez, Backyard Chicken Expert</p>
                  </CardContent>
                </Card>

                {/* Why Ventilation Matters */}
                <section id="why-ventilation-matters">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Wind className="h-6 w-6 text-primary" />
                    Why Proper Ventilation Matters More Than Temperature
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    <strong className="text-foreground">Air quality directly impacts flock health more than temperature.</strong> Ammonia damage to respiratory tissue begins at just 5 ppm—well below the human detection threshold of 20 ppm. By the time you smell ammonia, your chickens have already suffered lung damage.
                  </p>

                  <Card className="bg-destructive/5 border-destructive/20 mb-6">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-destructive mb-3">The Hidden Costs of Poor Ventilation</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        In my second winter, I sealed up my coop to keep birds "warm." Within three weeks:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li>• Respiratory infections in 4 of 6 birds ($180 in vet bills)</li>
                        <li>• Frostbitten combs despite using a heat lamp</li>
                        <li>• Eye irritation from ammonia buildup</li>
                        <li>• 60% decrease in egg production</li>
                      </ul>
                      <p className="text-sm mt-3 font-medium">
                        The solution was adding MORE ventilation, not less. Problems resolved in 10 days.
                      </p>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">What Proper Ventilation Prevents</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold mb-2">Respiratory Diseases</h4>
                        <p className="text-sm text-muted-foreground">Mycoplasma, bronchitis, and aspergillosis thrive in poorly ventilated spaces. Average treatment cost: $150-300.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold mb-2">Frostbite</h4>
                        <p className="text-sm text-muted-foreground">Caused by humidity, not cold. Ventilated coops in sub-zero temps have less frostbite than sealed coops.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold mb-2">Behavioral Problems</h4>
                        <p className="text-sm text-muted-foreground">Ammonia stress triggers feather pecking. Well-ventilated flocks show 80% less aggression.</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold mb-2">Heat Stress</h4>
                        <p className="text-sm text-muted-foreground">Inadequate ventilation can kill birds in hours. Heat stress begins at 85°F and becomes lethal near 100°F.</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Respiratory Science */}
                <section id="respiratory-science">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    The Science Behind Chicken Respiratory Needs
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    Chickens have completely different respiratory systems than mammals—they process oxygen through air sacs that extend throughout their body and even into hollow bones.
                  </p>

                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Key Differences Affecting Ventilation Design</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span><strong>No diaphragm:</strong> Breathe by expanding entire body cavity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span><strong>Air sacs throughout body:</strong> Contaminated air affects more than lungs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span><strong>Higher respiratory rate:</strong> 15-30 breaths/min vs. human 12-20</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span><strong>More efficient extraction:</strong> But also more efficient toxin absorption</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-amber-500/10 border-amber-500/20">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">The Ammonia Test</h4>
                      <p className="text-sm text-muted-foreground">
                        Squat to chicken height (about 12 inches above the litter) in your coop. If your eyes, nose, or throat burn, ammonia levels are already dangerous for your birds.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                {/* Calculating Requirements */}
                <section id="calculating-requirements">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Settings className="h-6 w-6 text-primary" />
                    Calculating Your Ventilation Requirements
                  </h2>

                  <Card className="bg-primary/5 border-primary/20 mb-6">
                    <CardHeader>
                      <CardTitle>The Standard Formula</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-bold text-primary mb-4">1 Square Foot of Ventilation Per Bird (Minimum)</p>
                      <p className="text-muted-foreground">Positioned near the roofline. Increase 2-3× for hot climates.</p>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">Ventilation by Flock Size</h3>
                  <Table className="mb-8">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Flock Size</TableHead>
                        <TableHead>Minimum</TableHead>
                        <TableHead>Hot Climate</TableHead>
                        <TableHead>Placement</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {ventilationFormula.map((row) => (
                        <TableRow key={row.birds}>
                          <TableCell className="font-medium">{row.birds} birds</TableCell>
                          <TableCell>{row.minimum}</TableCell>
                          <TableCell>{row.summer}</TableCell>
                          <TableCell className="text-sm">{row.placement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <h3 className="text-xl font-semibold mb-4">Climate Adjustment Factors</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Climate Zone</TableHead>
                        <TableHead>Multiplier</TableHead>
                        <TableHead>Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {climateFactors.map((row) => (
                        <TableRow key={row.climate}>
                          <TableCell className="font-medium">{row.climate}</TableCell>
                          <TableCell><Badge variant="secondary">{row.multiplier}</Badge></TableCell>
                          <TableCell className="text-sm text-muted-foreground">{row.priority}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </section>

                {/* Climate Designs */}
                <section id="climate-designs">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Thermometer className="h-6 w-6 text-primary" />
                    Climate-Specific Ventilation Designs
                  </h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="hot-dry">
                      <AccordionTrigger>Hot, Dry Climate (Arizona, Nevada, Texas)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Priority:</strong> Maximum airflow and evaporative cooling</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Replace solid walls with hardware cloth from 18" up</li>
                            <li>• Hip or shed roof with 12-18" overhangs</li>
                            <li>• Orient long axis east-west to minimize afternoon sun</li>
                            <li>• Add solar-powered exhaust fans for extreme heat days</li>
                          </ul>
                          <p className="text-sm text-muted-foreground mt-2">
                            <strong>Cost for 8×12 coop:</strong> $530-790 (panels, overhangs, fan, misting)
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cold">
                      <AccordionTrigger>Cold Climate (Northern States, Canada)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Priority:</strong> Moisture removal without creating drafts</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Continuous ridge ventilation along roof peak</li>
                            <li>• Protected soffit vents with closeable shutters</li>
                            <li>• Deep litter method (8-12" bedding) for composting heat</li>
                            <li>• Shield from prevailing winter winds</li>
                          </ul>
                          <p className="text-sm font-medium mt-2">
                            Never completely seal ventilation openings—even in extreme cold!
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="humid">
                      <AccordionTrigger>Humid Climate (Southeast, Gulf Coast)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Priority:</strong> Moisture removal and constant air movement</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Raised construction minimum 18" off ground</li>
                            <li>• Double roof with air gap for heat reduction</li>
                            <li>• Large overhangs (24-36") to protect from rain</li>
                            <li>• Cupola or ridge vents for enhanced exhaust</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="moderate">
                      <AccordionTrigger>Moderate Climate (Pacific Northwest)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Priority:</strong> Flexible ventilation for variable conditions</p>
                          <ul className="space-y-1 text-sm">
                            <li>• Hinged or sliding adjustable panels</li>
                            <li>• Multiple small openings for better control</li>
                            <li>• Account for seasonal wind pattern changes</li>
                            <li>• Temperature-activated vent openers</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    Common Ventilation Mistakes (And How to Fix Them)
                  </h2>

                  <div className="space-y-4">
                    {commonMistakes.map((item, index) => (
                      <Card key={index} className="border-l-4 border-l-destructive">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between">
                            <span>Mistake #{index + 1}: {item.mistake}</span>
                            <Badge variant="outline">{item.cost} to fix</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-sm text-muted-foreground">{item.problem}</p>
                          <div>
                            <p className="text-sm font-medium mb-1">Signs you have this problem:</p>
                            <ul className="text-sm text-muted-foreground">
                              {item.signs.map((sign, i) => (
                                <li key={i}>• {sign}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-primary/5 p-3 rounded-lg">
                            <p className="text-sm"><strong>The Fix:</strong> {item.fix}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Troubleshooting */}
                <section id="troubleshooting">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-primary" />
                    Troubleshooting Ventilation Problems
                  </h2>

                  <div className="space-y-6">
                    {troubleshootingProblems.map((item, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="text-lg">{item.problem}</CardTitle>
                          <p className="text-sm text-muted-foreground">Primary cause: {item.cause}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-amber-600">Immediate Actions</h4>
                              <ul className="space-y-1 text-sm">
                                {item.immediate.map((action, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-amber-600">→</span> {action}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm mb-2 text-primary">Long-Term Solutions</h4>
                              <ul className="space-y-1 text-sm">
                                {item.longTerm.map((action, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle className="h-3 w-3 mt-1 text-primary flex-shrink-0" /> {action}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Retrofit Solutions */}
                <section id="retrofit-solutions">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-primary" />
                    Retrofit Solutions for Existing Coops
                  </h2>

                  <Card className="mb-6 bg-muted/30">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-3">Quick Assessment: Does Your Coop Need Retrofitting?</h4>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Count all permanent openings (not doors)</li>
                        <li>Measure length × width of each opening</li>
                        <li>Add up total square feet</li>
                        <li>Divide by number of birds</li>
                      </ol>
                      <p className="mt-3 font-medium">If result is less than 1 sq ft per bird, retrofitting is essential.</p>
                    </CardContent>
                  </Card>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Retrofit Option</TableHead>
                        <TableHead>Best For</TableHead>
                        <TableHead>Cost</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Skill</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {retrofitOptions.map((option) => (
                        <TableRow key={option.option}>
                          <TableCell className="font-medium">{option.option}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{option.best}</TableCell>
                          <TableCell>{option.cost}</TableCell>
                          <TableCell>{option.time}</TableCell>
                          <TableCell><Badge variant="outline">{option.skill}</Badge></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </section>

                {/* Cost Upgrades */}
                <section id="cost-upgrades">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Cost-Effective Ventilation Upgrades
                  </h2>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Under $50</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-3">
                        <div>
                          <p className="font-medium">Hardware cloth panels</p>
                          <p className="text-muted-foreground">$20-35</p>
                        </div>
                        <div>
                          <p className="font-medium">Adjustable vent covers</p>
                          <p className="text-muted-foreground">$15-30</p>
                        </div>
                        <div>
                          <p className="font-medium">Ammonia absorbers</p>
                          <p className="text-muted-foreground">$25-40</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">$50-150</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-3">
                        <div>
                          <p className="font-medium">Wall panel conversion</p>
                          <p className="text-muted-foreground">$80-150</p>
                        </div>
                        <div>
                          <p className="font-medium">Solar exhaust fan</p>
                          <p className="text-muted-foreground">$80-120</p>
                        </div>
                        <div>
                          <p className="font-medium">Auto vent openers</p>
                          <p className="text-muted-foreground">$50-80</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">$150-400</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-3">
                        <div>
                          <p className="font-medium">Cupola installation</p>
                          <p className="text-muted-foreground">$150-300</p>
                        </div>
                        <div>
                          <p className="font-medium">Electric fan + thermostat</p>
                          <p className="text-muted-foreground">$120-200</p>
                        </div>
                        <div>
                          <p className="font-medium">Full ventilation retrofit</p>
                          <p className="text-muted-foreground">$250-400</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Seasonal Management */}
                <section id="seasonal-management">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Thermometer className="h-6 w-6 text-primary" />
                    Seasonal Ventilation Management
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Summer Management</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>• Open all available ventilation</p>
                        <p>• Add supplemental fans if needed</p>
                        <p>• Monitor for heat stress signs</p>
                        <p>• Provide shade and cool water</p>
                        <p>• Consider misting systems</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Winter Management</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>• Reduce inlet openings by 50% max</p>
                        <p>• Never close exhaust vents completely</p>
                        <p>• Monitor for condensation (bad sign)</p>
                        <p>• Use deep litter for composting heat</p>
                        <p>• Watch for frostbite on combs</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-primary" />
                    Frequently Asked Questions
                  </h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="cold-climates">
                      <AccordionTrigger>Don't chickens need a warm, sealed coop in winter?</AccordionTrigger>
                      <AccordionContent>
                        <strong>No!</strong> This is the most dangerous myth in chicken keeping. Chickens have excellent cold tolerance (most breeds handle single digits easily) but are highly vulnerable to respiratory damage from ammonia and moisture. A well-ventilated coop is safer than a warm, sealed one—even in sub-zero temperatures.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="how-much">
                      <AccordionTrigger>How much ventilation do I really need?</AccordionTrigger>
                      <AccordionContent>
                        Minimum: 1 square foot of permanent opening per bird, positioned near the roofline. In hot climates, multiply by 2.5-3×. The most common mistake is providing too little—most commercial coops provide only 30-50% of needed ventilation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="drafts">
                      <AccordionTrigger>What's the difference between ventilation and drafts?</AccordionTrigger>
                      <AccordionContent>
                        Ventilation is intentional airflow for air exchange—positioned high to remove moisture and ammonia. Drafts are cold air blowing directly on roosting birds. Position exhaust vents near the roofline and inlet vents away from roosts to achieve ventilation without drafts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="fans">
                      <AccordionTrigger>Do I need fans, or is passive ventilation enough?</AccordionTrigger>
                      <AccordionContent>
                        For most climates, properly designed passive ventilation is sufficient. Fans are helpful in extreme heat (90°F+), high humidity, or when passive ventilation is physically limited by coop design. Solar fans are excellent for hot, sunny climates.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="ammonia">
                      <AccordionTrigger>How do I reduce ammonia smell in my coop?</AccordionTrigger>
                      <AccordionContent>
                        First, increase ventilation—this is the root cause. Then: add moisture-absorbing bedding, remove wet spots, apply Sweet PDZ or zeolite, and relocate waterers outside if possible. If you can smell ammonia, your birds are already being harmed.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* CTA */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Ready to Build a Well-Ventilated Coop?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get our detailed building guides with proper ventilation specifications built in
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Button asChild>
                        <Link to="/guides/how-to-build-chicken-coop">Building Guide</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/guides/coop-materials-guide">Materials Guide</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <AuthorBio name="Sarah Martinez" credentials="Backyard Chicken Expert | Ventilation Specialist" />

                <RelatedArticles
                  articles={getRelatedArticles("coop-ventilation-guide", "Building")}
                />
              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <TableOfContents items={tocItems} />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <NewsletterSignup />
      </main>

      <Footer />
    </>
  );
};

export default ChickenCoopVentilationGuide;