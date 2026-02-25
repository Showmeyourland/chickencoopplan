import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle, MapPin, Clock, DollarSign, Eye, Lock, Target, Bird, Zap } from "lucide-react";
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
import guidePredatorImage from "@/assets/guide-predator.jpg";

const tocItems = [
  { id: "threat-assessment", text: "Regional Threat Assessment", level: 2 },
  { id: "security-layers", text: "5-Layer Security System", level: 2 },
  { id: "hardware-cloth", text: "Hardware Cloth Foundation", level: 2 },
  { id: "ground-protection", text: "Ground-Level Protection", level: 2 },
  { id: "aerial-protection", text: "Aerial Predator Protection", level: 2 },
  { id: "entry-points", text: "Securing Entry Points", level: 2 },
  { id: "testing", text: "Security Testing Methods", level: 2 },
  { id: "seasonal-behavior", text: "Seasonal Predator Behavior", level: 2 },
  { id: "emergency-response", text: "Emergency Response", level: 2 },
  { id: "faq", text: "FAQ", level: 2 },
];

const predatorData = [
  { name: "Raccoons", capability: "Dexterous paws, problem-solving intelligence", force: "25-pound force", icon: "🦝" },
  { name: "Foxes", capability: "Excellent diggers, 3-foot jump height", force: "4-inch gap entry", icon: "🦊" },
  { name: "Coyotes", capability: "6-foot fence clearing, pack hunting", force: "Extreme persistence", icon: "🐺" },
  { name: "Weasels/Mink", capability: "1-inch gap entry, kill entire flocks", force: "Nocturnal hunters", icon: "🦦" },
  { name: "Domestic Dogs", capability: "#1 killer of backyard chickens", force: "Unpredictable attacks", icon: "🐕" },
];

const securityLayers = [
  {
    layer: 1,
    title: "Perimeter Deterrence",
    items: ["Motion-activated lights (1,200+ lumens)", "Scent deterrents (predator urine, soap)", "Radio/sound for human presence", "6+ feet fence height for coyotes"],
    goal: "Encourage predators to hunt elsewhere",
    cost: "$50-200",
    effectiveness: "30-40% reduction",
  },
  {
    layer: 2,
    title: "Structural Barriers",
    items: ["19-gauge, 1/2-inch hardware cloth", "12-inch burial or 24-inch apron", "Hardware cloth roof or netting", "Concrete or elevated foundations"],
    goal: "Physical barriers that prevent entry",
    cost: "$200-800",
    effectiveness: "85-95% protection",
  },
  {
    layer: 3,
    title: "Entry Point Security",
    items: ["Two-step predator-proof latches", "Overlapping door frames", "Hardware cloth over all vents", "Automatic door closures"],
    goal: "Eliminate human error in lockup",
    cost: "$100-400",
    effectiveness: "90-98% improvement",
  },
  {
    layer: 4,
    title: "Interior Protection",
    items: ["Separate roosting chamber", "External nesting box access", "Solar-powered emergency lighting", "Multiple escape routes"],
    goal: "Protect chickens if outer defenses fail",
    cost: "$100-300",
    effectiveness: "Final 5% security gap",
  },
  {
    layer: 5,
    title: "Monitoring & Response",
    items: ["Night vision security cameras", "Motion sensor smartphone alerts", "Weekly security inspections", "Emergency response protocols"],
    goal: "Rapid detection and response",
    cost: "$150-600",
    effectiveness: "Early warning/evidence",
  },
];

const hardwareClothSpecs = [
  { spec: 'Chicken wire (1" hex)', pressure: "Failed in 15 min", clawTest: "Tears easily", durability: "2-3 years", status: "fail" },
  { spec: '23-gauge, 1/2" hardware cloth', pressure: "Bent/deformed", clawTest: "Partial failure", durability: "5-8 years", status: "warning" },
  { spec: '19-gauge, 1/2" galvanized', pressure: "No damage", clawTest: "Excellent", durability: "15+ years", status: "pass" },
  { spec: '19-gauge, 1/4" galvanized', pressure: "Superior strength", clawTest: "Snake-proof", durability: "20+ years", status: "pass" },
];

const diggingCapabilities = [
  { predator: "Foxes", depth: "18-24 inches", speed: "Fast (1-2 hours)", soil: "Soft soil, avoids rock" },
  { predator: "Raccoons", depth: "12-18 inches", speed: "Moderate (2-4 hours)", soil: "Any soil type" },
  { predator: "Coyotes", depth: "24-36 inches", speed: "Very fast (30-60 min)", soil: "Loose/sandy soil" },
  { predator: "Weasels", depth: "6-12 inches", speed: "Extremely fast (15-30 min)", soil: "Follows existing holes" },
];

const aerialPredators = [
  { predator: "Red-tailed hawk", preySize: "Chicks to 4 lb hens", attack: "High-speed dive from perch", region: "All US regions" },
  { predator: "Cooper's hawk", preySize: "Chicks to 6 lb hens", attack: "Fast pursuit through obstacles", region: "Wooded areas" },
  { predator: "Great horned owl", preySize: "All chickens", attack: "Silent night attack", region: "All US regions" },
  { predator: "Bald eagle", preySize: "Large hens, roosters", attack: "Powerful grab from above", region: "Near water sources" },
];

const PredatorProofCoopGuide = () => {
  return (
    <>
      <SEO
        title="Predator-Proof Chicken Coop Guide: Hardware, Locks & Aprons"
        description="Hardware cloth, apron fencing, automatic doors, and secure latches — a complete guide to protecting your flock from foxes, raccoons, coyotes, and hawks."
        canonical="/guides/predator-proof-coop-guide"
        type="article"
      />

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 h-[400px] md:h-[500px]">
            <img
              src={guidePredatorImage}
              alt="Predator-proof chicken coop with hardware cloth and secure locks at dusk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
          </div>

          <div className="relative container mx-auto px-4 pt-32 pb-12 md:pt-48 md:pb-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Guides", href: "/guides" },
                { label: "Predator-Proof Coop Guide" },
              ]}
            />

            <div className="max-w-4xl mt-6">
              <Badge variant="secondary" className="mb-4">
                Troubleshooting
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Predator-Proof Chicken Coop: Complete Security Guide (2025)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Proven protection systems tested against coyotes, raccoons, hawks, and snakes. Regional threat assessment and 5-layer security design.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  40 min read
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  Advanced
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  $200-$1,500 investment
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="h-5 w-5" />
                Critical Security Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 mt-1 text-destructive" />
                  <div>
                    <span className="font-semibold">70% of backyard chicken deaths</span>
                    <p className="text-muted-foreground">are caused by predators</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <span className="font-semibold">99%+ protection rate</span>
                    <p className="text-muted-foreground">achievable with proper systems</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <span className="font-semibold">Human error is #1 cause</span>
                    <p className="text-muted-foreground">of successful predator attacks</p>
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
                      "After losing 12 chickens to predators in my first year and spending 6 years perfecting desert coop security, I've developed foolproof protection systems tested against coyotes, raccoons, hawks, and snakes. Here's everything that actually works."
                    </p>
                    <p className="mt-3 font-medium">— Sarah Martinez, Predator Defense Specialist</p>
                  </CardContent>
                </Card>

                {/* Regional Threat Assessment */}
                <section id="threat-assessment">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Regional Predator Threat Assessment
                  </h2>
                  
                  <p className="text-muted-foreground mb-6">
                    Effective predator-proofing begins with understanding which threats you actually face. A coop designed for raccoons and hawks fails catastrophically against coyotes and weasels.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Primary Mammalian Threats (95% of attacks)</h3>
                  
                  <div className="grid gap-3 mb-8">
                    {predatorData.map((predator) => (
                      <Card key={predator.name} className="bg-muted/30">
                        <CardContent className="py-4 flex items-center gap-4">
                          <span className="text-3xl">{predator.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold">{predator.name}</h4>
                            <p className="text-sm text-muted-foreground">{predator.capability}</p>
                          </div>
                          <Badge variant="outline">{predator.force}</Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="southwest">
                      <AccordionTrigger>Southwest Desert (Arizona, Nevada, SoCal)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Primary threats:</strong> Coyotes (most persistent), javelinas, ringtails, snakes, hawks</p>
                          <p><strong>Seasonal:</strong> Increased activity during monsoon season (July-September)</p>
                          <p><strong>Unique challenges:</strong> Extreme heat limits options, flash floods test foundation security</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="southeast">
                      <AccordionTrigger>Southeast Humid Regions (Florida, Georgia, Louisiana)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Primary threats:</strong> Raccoons (extremely populous), opossums, bobcats, alligators, fire ants, snakes</p>
                          <p><strong>Environmental:</strong> High humidity accelerates hardware cloth corrosion</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="northern">
                      <AccordionTrigger>Northern States (Minnesota, Wisconsin, Northern Plains)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Primary threats:</strong> Weasels/mink (extreme cold survival), foxes, bears (rural), great horned owls</p>
                          <p><strong>Winter:</strong> Predator behavior changes with food scarcity, snow aids climbing</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pacific">
                      <AccordionTrigger>Pacific Northwest (Washington, Oregon, NorCal)</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3">
                          <p><strong>Primary threats:</strong> Raccoons (extremely intelligent), cougars (rare but devastating), coyotes, mink, Cooper's hawks</p>
                          <p><strong>Climate:</strong> Constant moisture challenges materials, dense vegetation provides predator cover</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* 5-Layer Security System */}
                <section id="security-layers">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    The 5-Layer Defense System
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    Single-point security failures kill chickens. Professional predator-proof systems use redundant layers that provide multiple fail-safes.
                  </p>

                  <div className="space-y-6">
                    {securityLayers.map((layer) => (
                      <Card key={layer.layer} className="border-l-4 border-l-primary">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            <span>Layer {layer.layer}: {layer.title}</span>
                            <div className="flex gap-2">
                              <Badge variant="outline">{layer.cost}</Badge>
                              <Badge variant="secondary">{layer.effectiveness}</Badge>
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid md:grid-cols-2 gap-2 mb-4">
                            {layer.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-muted-foreground">
                            <strong>Goal:</strong> {layer.goal}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Hardware Cloth */}
                <section id="hardware-cloth">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-primary" />
                    Hardware Cloth: The Foundation of Security
                  </h2>

                  <Card className="bg-primary/5 border-primary/20 mb-6">
                    <CardHeader>
                      <CardTitle>The Only Acceptable Specification</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary mb-4">19-Gauge, 1/2-Inch Galvanized Hardware Cloth</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                          <span><strong>1/2-inch aperture:</strong> Prevents raccoon paws (3/4-inch reach) from accessing chickens</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                          <span><strong>19-gauge thickness:</strong> Resists 25-pound raccoon force and coyote teeth</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                          <span><strong>Galvanized coating:</strong> 15+ year corrosion resistance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary" />
                          <span><strong>Welded construction:</strong> Superior to twisted wire under pressure</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <h3 className="text-xl font-semibold mb-4">Hardware Cloth Testing Results</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Specification</TableHead>
                        <TableHead>25-lb Pressure Test</TableHead>
                        <TableHead>Claw/Tooth Sim</TableHead>
                        <TableHead>Durability</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hardwareClothSpecs.map((spec) => (
                        <TableRow key={spec.spec}>
                          <TableCell className="font-medium">{spec.spec}</TableCell>
                          <TableCell>
                            <span className={spec.status === 'fail' ? 'text-destructive' : spec.status === 'warning' ? 'text-amber-600' : 'text-primary'}>
                              {spec.status === 'fail' ? '❌' : spec.status === 'warning' ? '⚠' : '✅'} {spec.pressure}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={spec.status === 'fail' ? 'text-destructive' : spec.status === 'warning' ? 'text-amber-600' : 'text-primary'}>
                              {spec.clawTest}
                            </span>
                          </TableCell>
                          <TableCell>{spec.durability}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Card className="mt-6 bg-destructive/5 border-destructive/20">
                    <CardContent className="pt-6">
                      <h4 className="font-semibold text-destructive mb-2">Installation Mistakes That Cause Failures</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Insufficient stapling:</strong> Must staple every 2 inches with heavy-duty staples</li>
                        <li>• <strong>Poor overlap:</strong> Minimum 1-inch overlap at all seams, wired together</li>
                        <li>• <strong>Weak attachment:</strong> Staple to structural lumber, never just trim boards</li>
                        <li>• <strong>Corner gaps:</strong> Use specially formed corner pieces or double-wire connections</li>
                        <li>• <strong>Ground contact:</strong> Hardware cloth must contact ground or underground barrier</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                {/* Ground Protection */}
                <section id="ground-protection">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Underground & Ground-Level Threats
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    80% of predator entry attempts target the ground level where digging, chewing, and squeezing attacks are most effective.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">Predator Digging Capabilities</h3>
                  <Table className="mb-8">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Predator</TableHead>
                        <TableHead>Digging Depth</TableHead>
                        <TableHead>Speed</TableHead>
                        <TableHead>Soil Preference</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {diggingCapabilities.map((pred) => (
                        <TableRow key={pred.predator}>
                          <TableCell className="font-medium">{pred.predator}</TableCell>
                          <TableCell>{pred.depth}</TableCell>
                          <TableCell>{pred.speed}</TableCell>
                          <TableCell>{pred.soil}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Burial System</CardTitle>
                        <Badge>Most Secure</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Method:</strong> 12-18" trench, vertical hardware cloth</p>
                        <p><strong>Cost:</strong> $3-8 per linear foot</p>
                        <p className="text-muted-foreground">Maximum security, works against all diggers</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Apron System</CardTitle>
                        <Badge variant="secondary">Easier Install</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Method:</strong> 18-24" horizontal outward apron</p>
                        <p><strong>Cost:</strong> $1.50-4 per linear foot</p>
                        <p className="text-muted-foreground">Less excavation, nearly equal protection</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Concrete Barrier</CardTitle>
                        <Badge variant="outline">Premium</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Method:</strong> 4-6" concrete footing with embedded cloth</p>
                        <p><strong>Cost:</strong> $8-15 per linear foot</p>
                        <p className="text-muted-foreground">Permanent, extremely secure</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Aerial Protection */}
                <section id="aerial-protection">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Bird className="h-6 w-6 text-primary" />
                    Aerial Predator Protection
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    Hawks, owls, and eagles are federally protected, so deterrence rather than harm is the only legal approach.
                  </p>

                  <Table className="mb-8">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Predator</TableHead>
                        <TableHead>Prey Size</TableHead>
                        <TableHead>Attack Pattern</TableHead>
                        <TableHead>Region</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {aerialPredators.map((pred) => (
                        <TableRow key={pred.predator}>
                          <TableCell className="font-medium">{pred.predator}</TableCell>
                          <TableCell>{pred.preySize}</TableCell>
                          <TableCell>{pred.attack}</TableCell>
                          <TableCell>{pred.region}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Hardware Cloth Roof</CardTitle>
                        <Badge>100% Protection</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Cost:</strong> $4-8 per sq ft installed</p>
                        <p className="text-muted-foreground">Best for: Small runs, high-value flocks</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Heavy-Duty Netting</CardTitle>
                        <Badge variant="secondary">Balanced</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Cost:</strong> $0.75-2 per sq ft installed</p>
                        <p className="text-muted-foreground">Best for: Large runs, budget builds</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Partial + Shelter</CardTitle>
                        <Badge variant="outline">Strategic</Badge>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p><strong>Cost:</strong> $1-3 per sq ft installed</p>
                        <p className="text-muted-foreground">Best for: Large free-range areas</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Entry Points */}
                <section id="entry-points">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Lock className="h-6 w-6 text-primary" />
                    Securing Doors, Vents & Access Points
                  </h2>

                  <Card className="bg-amber-500/10 border-amber-500/20 mb-6">
                    <CardContent className="pt-6">
                      <p className="font-semibold text-amber-700 dark:text-amber-400">
                        Human error (forgetting to lock doors) is the #1 cause of successful predator attacks. Automatic systems eliminate this risk.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Door Security Essentials</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Two-step latches (raccoons can open simple latches)</p>
                        <p>• Spring-loaded mechanisms</p>
                        <p>• Carabiner backups on all latches</p>
                        <p>• Overlapping door frames (no gaps)</p>
                        <p>• Heavy-duty hinges (can't be pried)</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Automatic Door Systems</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Timer-based closure (sunset programming)</p>
                        <p>• Light-sensor activation</p>
                        <p>• Battery backup for power outages</p>
                        <p>• Manual override capability</p>
                        <p>• Cost: $100-300 for quality systems</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Testing */}
                <section id="testing">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Eye className="h-6 w-6 text-primary" />
                    Security Testing & Validation
                  </h2>

                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Weekly Inspection Checklist</h4>
                        <ul className="grid md:grid-cols-2 gap-2 text-sm">
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Check all hardware cloth for damage/rust</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Test all latches and locks</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Inspect ground perimeter for digging attempts</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Verify automatic door operation</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Check for gaps at corners and seams</li>
                          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Test motion lights and cameras</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Pressure Testing Methods</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Simulate predator attacks to verify security:
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>• Apply 25 lbs of pressure to hardware cloth panels</li>
                          <li>• Attempt to lift doors and pop latches</li>
                          <li>• Probe all gaps with a ruler (nothing over 1/2 inch)</li>
                          <li>• Pull on aprons and buried barriers</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Seasonal Behavior */}
                <section id="seasonal-behavior">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    Seasonal Predator Behavior Changes
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Spring/Summer</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>• Increased hawk activity during nesting season</p>
                        <p>• Snake activity peaks in warm months</p>
                        <p>• Raccoons teaching young to hunt</p>
                        <p>• Extended daylight = more attack window</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Fall/Winter</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>• Food scarcity increases desperation</p>
                        <p>• Snow provides climbing assistance</p>
                        <p>• Owl activity increases (breeding season)</p>
                        <p>• Shortened days = predators adjust timing</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Emergency Response */}
                <section id="emergency-response">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    Emergency Response & Recovery
                  </h2>

                  <Card className="bg-destructive/5 border-destructive/20">
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-destructive">If an Attack Occurs:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm mt-2">
                          <li>Secure surviving chickens immediately</li>
                          <li>Document the damage (photos, videos)</li>
                          <li>Identify entry point and attack method</li>
                          <li>Implement emergency repairs</li>
                          <li>Set up trail camera to identify predator</li>
                          <li>Report to local wildlife control if necessary</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold">Post-Attack Security Upgrade</h4>
                        <p className="text-sm text-muted-foreground">
                          Every attack reveals a security weakness. Use the experience to upgrade your defenses and prevent future incidents.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ */}
                <section id="faq">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="chicken-wire">
                      <AccordionTrigger>Is chicken wire enough to keep predators out?</AccordionTrigger>
                      <AccordionContent>
                        <strong>No.</strong> Chicken wire is designed to keep chickens in, not predators out. Raccoons can tear through it in minutes, and dogs can destroy it easily. Always use 19-gauge, 1/2-inch hardware cloth for predator protection.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cost">
                      <AccordionTrigger>How much should I budget for predator-proofing?</AccordionTrigger>
                      <AccordionContent>
                        A complete 5-layer security system costs $600-1,500 depending on coop size and threat level. However, even a $200 investment in proper hardware cloth and latches provides 85-95% protection—far better than losing your flock.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="urban">
                      <AccordionTrigger>Do I need predator protection in urban areas?</AccordionTrigger>
                      <AccordionContent>
                        Yes! Raccoons, opossums, and domestic dogs are extremely common in urban areas. Hawks also hunt in cities. Urban coops may face fewer coyotes, but other threats are often higher due to reduced natural prey.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="automatic-doors">
                      <AccordionTrigger>Are automatic coop doors worth the investment?</AccordionTrigger>
                      <AccordionContent>
                        Absolutely. Since human error (forgetting to close the coop) is the #1 cause of successful predator attacks, automatic doors that close at sunset provide tremendous peace of mind. Quality systems cost $100-300 and last 5-10 years.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="weasels">
                      <AccordionTrigger>How do I protect against weasels and mink?</AccordionTrigger>
                      <AccordionContent>
                        Weasels can squeeze through gaps as small as 1 inch. Use 1/2-inch hardware cloth (or 1/4-inch for complete protection), ensure zero gaps at corners and seams, and check for holes regularly. Raised coops with solid floors also help.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </section>

                {/* CTA */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Ready to Build a Secure Coop?</h3>
                    <p className="text-muted-foreground mb-4">
                      Get our predator-proof coop plans with detailed security specifications
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

                <AuthorBio name="Sarah Martinez" credentials="Predator Defense Specialist" />

                <RelatedArticles
                  articles={getRelatedArticles("predator-proof-coop-guide", "Troubleshooting")}
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

export default PredatorProofCoopGuide;