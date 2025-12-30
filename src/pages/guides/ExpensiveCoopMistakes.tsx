import { Link } from 'react-router-dom';
import { AlertTriangle, DollarSign, Shield, Wind, Wrench, MapPin, CheckCircle, XCircle, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import AuthorBio from '@/components/AuthorBio';
import RelatedArticles from '@/components/RelatedArticles';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getRelatedArticles } from '@/lib/articles';
import guideCoopMistakesImage from '@/assets/guide-coop-mistakes.jpg';

const tocItems = [
  { id: 'mistake-1-predator', text: 'Mistake #1: Inadequate Predator Protection ($750)', level: 2 },
  { id: 'mistake-2-ventilation', text: 'Mistake #2: Poor Ventilation Design ($425)', level: 2 },
  { id: 'mistake-3-materials', text: 'Mistake #3: Cheap Materials That Failed ($580)', level: 2 },
  { id: 'mistake-4-space', text: 'Mistake #4: Insufficient Space Planning ($392)', level: 2 },
  { id: 'mistake-5-location', text: 'Mistake #5: Wrong Coop Location ($200)', level: 2 },
  { id: 'prevention-checklist', text: 'Prevention Checklist', level: 2 },
  { id: 'recovery-strategies', text: 'Recovery Strategies', level: 2 },
  { id: 'cost-comparison', text: 'Prevention vs. Repair Costs', level: 2 },
  { id: 'red-flags', text: 'Warning Signs', level: 2 },
];

const mistakeSummary = [
  { mistake: 'Predator Protection', loss: '$750', prevention: '$200', icon: Shield },
  { mistake: 'Ventilation', loss: '$425', prevention: '$150', icon: Wind },
  { mistake: 'Materials', loss: '$580', prevention: '$250', icon: Wrench },
  { mistake: 'Space Planning', loss: '$392', prevention: '$300', icon: MapPin },
  { mistake: 'Location', loss: '$200', prevention: '$0', icon: MapPin },
];

const ExpensiveCoopMistakes = () => {
  const relatedArticles = getRelatedArticles('expensive-coop-mistakes', 'Troubleshooting', 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: '5 Expensive Chicken Coop Mistakes' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="5 Expensive Chicken Coop Mistakes That Cost Beginners $1000+ (2025)"
        description="Avoid these costly chicken coop mistakes that cost me over $2,000 in my first year. Real failure stories with prevention strategies to save beginners thousands."
        canonical="/guides/expensive-coop-mistakes"
      />

      <Header />

      <main className="py-12">
        <article className="container max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Hero Section */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Beginner Guide
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                <DollarSign className="w-3 h-3 mr-1" />
                $2,347 in Lessons
              </Badge>
              <Badge variant="outline">25 min read</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              5 Expensive Chicken Coop Mistakes That Cost Beginners $1000+ (Learn From My Failures)
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              <em>By someone who made every costly mistake possible—so you don't have to</em>
            </p>

            <img
              src={guideCoopMistakesImage}
              alt="Damaged chicken coop showing common building mistakes"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
          </header>

          {/* Quick Overview */}
          <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-red-500" />
                My First Year Cost Breakdown
              </h3>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                {mistakeSummary.map((item, index) => (
                  <div key={index} className="p-3 bg-background rounded-lg">
                    <item.icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm font-medium">{item.mistake}</p>
                    <p className="text-lg font-bold text-red-600">{item.loss}</p>
                    <p className="text-xs text-green-600">Preventable: {item.prevention}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t text-center">
                <p className="text-2xl font-bold text-red-600">Total Avoidable Losses: $2,347</p>
                <p className="text-sm text-muted-foreground">Prevention cost: $900 | ROI: 161%</p>
              </div>
            </CardContent>
          </Card>

          <TableOfContents items={tocItems} className="mb-8" />

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="lead">
              <strong>My first year of chicken keeping cost me $2,347 in avoidable mistakes.</strong> I thought I'd done my research. I'd watched YouTube videos, read blogs, and felt confident building what looked like a perfectly adequate chicken coop. Within six months, I'd lost birds to predators, dealt with a respiratory disease outbreak, rebuilt major sections due to material failures, and faced behavioral problems that required expensive solutions.
            </p>

            <p>
              The worst part? Every single problem was preventable with slightly better planning and a modest additional investment upfront. These weren't exotic failures or freak accidents—they were predictable consequences of common beginner mistakes that thousands of new chicken keepers make every year.
            </p>

            <p>
              This guide details the exact mistakes that cost me the most money, why beginners fall into these traps, and specific strategies to avoid them. Whether you're planning your first coop or already dealing with problems, these hard-learned lessons can save you hundreds or thousands of dollars in rebuild costs, veterinary bills, and replacement birds.
            </p>
          </section>

          {/* Mistake #1: Predator Protection */}
          <section id="mistake-1-predator" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-500" />
              Mistake #1: Inadequate Predator Protection ($750 loss)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>The disaster:</strong> Three months after completing my "predator-proof" coop, I lost four chickens in a single night to what I later discovered was a raccoon. My total financial loss: $750.
              </p>

              <h3>How It Happened</h3>

              <p>
                I'd followed online plans that called for chicken wire around the run and a simple hook-and-eye latch on the coop door. It looked secure, and the chickens seemed safe for the first few months. Then I came out one morning to find carnage.
              </p>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">The raccoon had:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Torn through the chicken wire like tissue paper</li>
                    <li>• Opened the latch by lifting the hook (raccoons have opposable thumbs)</li>
                    <li>• Killed four of my six hens, eating parts and leaving the rest</li>
                    <li>• Scattered feed everywhere and destroyed two nesting boxes</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>The Real Cost Breakdown</h3>

              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell rowSpan={4}>Immediate Losses</TableCell>
                    <TableCell>4 replacement hens</TableCell>
                    <TableCell className="text-right">$100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lost egg production (3 months)</TableCell>
                    <TableCell className="text-right">$180</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Veterinary exam of survivors</TableCell>
                    <TableCell className="text-right">$85</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Cleanup and sanitization</TableCell>
                    <TableCell className="text-right">$45</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell rowSpan={3}>Security Upgrades</TableCell>
                    <TableCell>Hardware cloth (100ft)</TableCell>
                    <TableCell className="text-right">$185</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Predator-proof latches</TableCell>
                    <TableCell className="text-right">$65</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ground barriers</TableCell>
                    <TableCell className="text-right">$90</TableCell>
                  </TableRow>
                  <TableRow className="font-bold bg-red-50 dark:bg-red-950/30">
                    <TableCell colSpan={2}>TOTAL DAMAGE</TableCell>
                    <TableCell className="text-right text-red-600">$750</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3>The Prevention Strategy That Actually Works</h3>

              <Card className="mb-6 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Hardware Cloth Specifications
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Material:</strong> 1/2-inch galvanized hardware cloth, 19-gauge minimum</li>
                    <li><strong>Coverage:</strong> All coop and run openings, including windows and vents</li>
                    <li><strong>Ground barrier:</strong> 12-inch buried barrier or 24-inch ground-level apron</li>
                    <li><strong>Cost:</strong> $150-250 for typical coop (vs. $15-40 for chicken wire)</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      Total prevention cost: $200-300 vs. $750 in losses and repairs
                    </p>
                  </div>
                </CardContent>
              </Card>

              <h3>Red Flags You're Vulnerable</h3>
              <ul>
                <li>Using chicken wire for predator barriers</li>
                <li>Simple hook-and-eye or sliding bolt latches</li>
                <li>Gaps larger than 1/2 inch anywhere in the structure</li>
                <li>No ground-level barriers against digging</li>
                <li>Thinking "it hasn't happened yet, so we're safe"</li>
              </ul>
            </div>
          </section>

          {/* Mistake #2: Poor Ventilation */}
          <section id="mistake-2-ventilation" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wind className="w-8 h-8 text-blue-500" />
              Mistake #2: Poor Ventilation Design ($425 loss)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>The disaster:</strong> Six weeks into winter, four of my six chickens developed respiratory infections requiring veterinary treatment. The cause? My "cozy" coop design had created a toxic ammonia environment that destroyed their respiratory health.
              </p>

              <h3>How It Happened</h3>

              <p>
                Determined to keep my birds "warm and comfortable," I'd designed what I thought was a snug, draft-free coop. I sealed gaps, added extra insulation, and kept ventilation openings small to "prevent heat loss." The result was a humid, ammonia-filled death trap.
              </p>

              <Card className="mb-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-yellow-700 dark:text-yellow-400">The signs I missed:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Strong ammonia smell when opening the coop (I thought this was normal)</li>
                    <li>• Condensation on windows and walls (I figured it was cold weather)</li>
                    <li>• Birds staying outside even in cold weather (I thought they were hardy)</li>
                    <li>• Wet bedding that never seemed to dry out</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>The Science-Based Prevention Strategy</h3>

              <Card className="mb-6 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Minimum Ventilation Requirements</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Total opening area:</strong> 1 square foot per bird near the roofline</li>
                    <li><strong>Cross-ventilation:</strong> Openings on opposite walls, minimum 3 feet apart</li>
                    <li><strong>High placement:</strong> Exhaust openings 6-12 inches below roof line</li>
                    <li><strong>Weather protection:</strong> Overhangs or baffles prevent rain entry</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-semibold text-green-700 dark:text-green-400">
                      Proper ventilation cost: $100-200 vs. $425+ in health problems
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">The Ammonia Test Every Beginner Should Know</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Squat to bird height (12 inches above bedding) inside your coop</li>
                    <li>2. If your eyes, nose, or throat burn, ammonia levels are already dangerous</li>
                    <li>3. By the time humans smell ammonia (20 ppm), birds are already being harmed (damage starts at 5 ppm)</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mistake #3: Cheap Materials */}
          <section id="mistake-3-materials" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-orange-500" />
              Mistake #3: Cheap Materials That Failed ($580 loss)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>The disaster:</strong> Eighteen months after completing my coop, I was essentially rebuilding it from scratch. Cheap materials had failed across the board, creating safety hazards and requiring complete replacement much sooner than expected.
              </p>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">The Failure Timeline</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Month 6:</strong> Particle board roof sheathing began swelling from moisture</li>
                    <li><strong>Month 9:</strong> Untreated lumber framing showed rot at ground contact points</li>
                    <li><strong>Month 12:</strong> Cheap hinges failed, leaving doors unsecurable</li>
                    <li><strong>Month 15:</strong> Chicken wire developed holes, creating predator access</li>
                    <li><strong>Month 18:</strong> Structural failure required complete rebuild</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>The Materials Investment Strategy</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Never Compromise</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pressure-treated foundation</li>
                      <li>• Construction-grade framing</li>
                      <li>• 19-gauge hardware cloth</li>
                      <li>• Quality metal roofing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 dark:border-yellow-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Important for Longevity</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Exterior-grade plywood/OSB</li>
                      <li>• Cedar or quality siding</li>
                      <li>• Real glass windows</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Moderate Impact</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Stainless steel hinges</li>
                      <li>• Two-step latches</li>
                      <li>• Outdoor-rated screws</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Mistake #4: Space Planning */}
          <section id="mistake-4-space" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-purple-500" />
              Mistake #4: Insufficient Space Planning ($392 loss)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>The disaster:</strong> I built for 6 birds, started with 4, then added 2 more "because we had room." Within months, I was dealing with aggressive pecking, reduced egg production, and behavioral problems that required coop expansion and veterinary intervention.
              </p>

              <h3>Space Requirements That Actually Work</h3>

              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Flock Size</TableHead>
                    <TableHead>Indoor Min</TableHead>
                    <TableHead>Recommended</TableHead>
                    <TableHead>Outdoor Run</TableHead>
                    <TableHead>Roosting</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>4 birds</TableCell>
                    <TableCell>4×4 (16 sq ft)</TableCell>
                    <TableCell>6×6 (36 sq ft)</TableCell>
                    <TableCell>8×8 (64 sq ft)</TableCell>
                    <TableCell>3-4 linear feet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6 birds</TableCell>
                    <TableCell>4×6 (24 sq ft)</TableCell>
                    <TableCell>6×8 (48 sq ft)</TableCell>
                    <TableCell>10×12 (120 sq ft)</TableCell>
                    <TableCell>5-6 linear feet</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10 birds</TableCell>
                    <TableCell>8×6 (48 sq ft)</TableCell>
                    <TableCell>8×8 (64 sq ft)</TableCell>
                    <TableCell>12×16 (192 sq ft)</TableCell>
                    <TableCell>8-10 linear feet</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3>Early Warning Signs of Space Problems</h3>
              <ul>
                <li>Feather pecking or missing feathers (especially on backs, tails)</li>
                <li>Birds unable to access feeders due to blocking by dominant birds</li>
                <li>Excessive noise and commotion during feeding times</li>
                <li>Decreased egg production despite adequate nutrition</li>
                <li>One or more birds consistently isolated from the flock</li>
              </ul>
            </div>
          </section>

          {/* Mistake #5: Wrong Location */}
          <section id="mistake-5-location" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-teal-500" />
              Mistake #5: Wrong Coop Location ($200 loss)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>The disaster:</strong> Four months after completing my coop, I realized I'd placed it in the worst possible location on my property. Poor drainage led to muddy conditions, afternoon sun created heat stress, and difficult access made daily care a burden.
              </p>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">What I didn't account for:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Drainage patterns:</strong> Low spot that collected water from surrounding areas</li>
                    <li><strong>Sun exposure:</strong> Full afternoon sun with no natural shade</li>
                    <li><strong>Wind patterns:</strong> Exposed to prevailing winter winds</li>
                    <li><strong>Utility access:</strong> No nearby electrical for future automation</li>
                    <li><strong>Neighbor proximity:</strong> Too close to property line, creating complaints</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>Site Selection Strategy</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
                      <CheckCircle className="w-4 h-4 inline mr-1" />
                      Do This
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Observe drainage during heavy rain</li>
                      <li>• Choose elevated locations</li>
                      <li>• Utilize afternoon shade</li>
                      <li>• Ensure easy daily access</li>
                      <li>• Check electrical access</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">
                      <XCircle className="w-4 h-4 inline mr-1" />
                      Avoid This
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>• Standing water after rain</li>
                      <li>• No afternoon shade (2-6 PM)</li>
                      <li>• Difficult access route</li>
                      <li>• Below required setbacks</li>
                      <li>• Low-lying flood areas</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Prevention Checklist */}
          <section id="prevention-checklist" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-500" />
              Prevention Checklist: Avoid These Mistakes
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Use this checklist before breaking ground to avoid the $2,347 in mistakes I made.</strong>
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="predator">
                  <AccordionTrigger>Predator Protection Checklist</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Hardware cloth (1/2", 19-gauge) specified for all openings</li>
                      <li>☐ Two-step predator-proof latches on all doors</li>
                      <li>☐ Ground barriers: 12" buried OR 24" surface apron</li>
                      <li>☐ No gaps larger than 1/2" anywhere in structure</li>
                      <li>☐ Overhead protection from aerial predators</li>
                      <li>☐ Secure feed storage to avoid attracting predators</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ventilation">
                  <AccordionTrigger>Ventilation Planning Checklist</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>☐ 1+ square feet of ventilation per bird near roofline</li>
                      <li>☐ Cross-ventilation on opposite walls</li>
                      <li>☐ Ventilation openings positioned above roosting areas</li>
                      <li>☐ Weather protection (overhangs) for all ventilation</li>
                      <li>☐ Adjustable closures for seasonal management</li>
                      <li>☐ All ventilation openings covered with hardware cloth</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="materials">
                  <AccordionTrigger>Material Selection Checklist</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Pressure-treated lumber for all ground contact</li>
                      <li>☐ Exterior-grade plywood/OSB (never particle board)</li>
                      <li>☐ Hardware cloth specified (never chicken wire for barriers)</li>
                      <li>☐ Galvanized or stainless steel fasteners</li>
                      <li>☐ Quality hinges rated for outdoor use</li>
                      <li>☐ Metal or quality shingle roofing with proper underlayment</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="space">
                  <AccordionTrigger>Space Planning Checklist</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>☐ 4-6 square feet per bird inside coop</li>
                      <li>☐ 10-15 square feet per bird in outdoor run</li>
                      <li>☐ 8-10 linear inches of roosting space per bird</li>
                      <li>☐ Multiple feeding and watering stations</li>
                      <li>☐ Visual barriers for subordinate bird escape routes</li>
                      <li>☐ Room for future expansion if flock grows</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="site">
                  <AccordionTrigger>Site Selection Checklist</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-sm">
                      <li>☐ Drainage tested during heavy rain</li>
                      <li>☐ Afternoon shade available or planned</li>
                      <li>☐ Convenient access route in all weather</li>
                      <li>☐ Electrical access within 100 feet</li>
                      <li>☐ Setback requirements verified with city/HOA</li>
                      <li>☐ Neighbor impact considered and discussed</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Recovery Strategies */}
          <section id="recovery-strategies" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Recovery Strategies: Already Made These Mistakes?</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>If you're reading this because you're already dealing with problems, don't panic.</strong> Most chicken coop mistakes can be fixed, though it's more expensive than doing it right the first time.
              </p>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Emergency Triage: What to Fix First</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-red-600">Priority 1 - Immediate Safety Threats:</h5>
                      <ol className="text-sm space-y-1 ml-4">
                        <li>1. Predator vulnerabilities: Patch holes, upgrade latches</li>
                        <li>2. Structural failures: Shore up collapsing sections</li>
                        <li>3. Health emergencies: Address respiratory symptoms</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-600">Priority 2 - System Improvements:</h5>
                      <ol className="text-sm space-y-1 ml-4">
                        <li>1. Ventilation upgrades: Add exhaust openings</li>
                        <li>2. Space expansion: Address overcrowding</li>
                        <li>3. Drainage remediation: Install french drains</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cost Comparison */}
          <section id="cost-comparison" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-500" />
              Prevention vs. Repair: True Cost Analysis
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prevention Category</TableHead>
                    <TableHead className="text-right">Additional Cost</TableHead>
                    <TableHead>Problems Prevented</TableHead>
                    <TableHead className="text-right">Savings</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Predator protection</TableCell>
                    <TableCell className="text-right">$200</TableCell>
                    <TableCell>Flock losses, rebuild costs</TableCell>
                    <TableCell className="text-right text-green-600">$750+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Proper ventilation</TableCell>
                    <TableCell className="text-right">$150</TableCell>
                    <TableCell>Respiratory diseases</TableCell>
                    <TableCell className="text-right text-green-600">$425+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Quality materials</TableCell>
                    <TableCell className="text-right">$250</TableCell>
                    <TableCell>Premature failure, rebuilds</TableCell>
                    <TableCell className="text-right text-green-600">$580+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Adequate space</TableCell>
                    <TableCell className="text-right">$300</TableCell>
                    <TableCell>Behavioral problems</TableCell>
                    <TableCell className="text-right text-green-600">$392+</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Site selection</TableCell>
                    <TableCell className="text-right">$0</TableCell>
                    <TableCell>Relocation, drainage</TableCell>
                    <TableCell className="text-right text-green-600">$200+</TableCell>
                  </TableRow>
                  <TableRow className="font-bold bg-green-50 dark:bg-green-950/30">
                    <TableCell>TOTALS</TableCell>
                    <TableCell className="text-right">$900</TableCell>
                    <TableCell>Multiple system failures</TableCell>
                    <TableCell className="text-right text-green-600">$2,347+</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Card className="mb-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-6 text-center">
                  <p className="text-2xl font-bold text-green-600">Return on Investment: 161%</p>
                  <p className="text-muted-foreground">$900 prevents $2,347+ in problems</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Red Flags */}
          <section id="red-flags" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              Warning Signs You're About to Make Expensive Mistakes
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Planning Phase Red Flags</h3>

              <Card className="mb-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Questions That Reveal Planning Problems:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>"How cheap can I build this?" (instead of "How do I build this right?")</li>
                    <li>"What's the minimum space I can get away with?" (instead of optimal space)</li>
                    <li>"Do I really need hardware cloth?" (if you're asking, you need it)</li>
                    <li>"Can I skip the ventilation for now?" (ventilation isn't optional)</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>The Psychology of Expensive Mistakes</h3>
              <ul>
                <li><strong>Optimism bias:</strong> "Bad things happen to other people, not me"</li>
                <li><strong>Sunk cost fallacy:</strong> "I've already spent this much, I can't change now"</li>
                <li><strong>Present bias:</strong> Overvaluing immediate savings vs. long-term costs</li>
                <li><strong>Planning fallacy:</strong> Underestimating time, cost, and complexity</li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion: Learning From My $2,347 Education</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                My first year of chicken keeping was expensive, frustrating, and embarrassing. I lost birds to preventable predator attacks, spent sleepless nights worrying about sick chickens, and rebuilt major systems multiple times. The $2,347 I spent on avoidable mistakes could have funded a premium coop that would have served me perfectly for decades.
              </p>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">The Five Expensive Mistakes to Avoid:</h4>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1. Inadequate predator protection:</strong> $750 loss → invest $200 in hardware cloth and proper latches</li>
                    <li><strong>2. Poor ventilation design:</strong> $425 loss → invest $150 in proper air exchange systems</li>
                    <li><strong>3. Cheap materials that failed:</strong> $580 loss → invest $250 in quality materials upfront</li>
                    <li><strong>4. Insufficient space planning:</strong> $392 loss → invest $300 in adequate space from day one</li>
                    <li><strong>5. Wrong coop location:</strong> $200 loss → invest time in proper site selection (free)</li>
                  </ol>
                </CardContent>
              </Card>

              <p>
                Beyond the financial savings, building correctly from the start means less stress, healthier birds, better egg production, and the satisfaction of creating something that works reliably for years. Your chickens depend on you to provide them with safe, healthy housing—they deserve better than my trial-and-error approach.
              </p>
            </div>
          </section>

          <AuthorBio 
            name="Sarah Martinez"
            credentials="Backyard Chicken Expert | 12+ Years Experience"
            bio="Sarah learned these lessons the hard way in her first year of chicken keeping. Since then, she's helped hundreds of beginners avoid the same expensive mistakes through her guides and one-on-one consultations."
          />

          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} />
            </div>
          )}

          <div className="mt-12">
            <NewsletterSignup />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ExpensiveCoopMistakes;
