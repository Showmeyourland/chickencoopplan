import { Link } from 'react-router-dom';
import { Home, Users, Volume2, Palette, Shield, FileCheck, MapPin, Wrench, Building, CheckCircle } from 'lucide-react';
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
import guideUrbanCoopImage from '@/assets/guide-urban-coop.jpg';

const tocItems = [
  { id: 'urban-challenges', text: 'Understanding Urban Challenges', level: 2 },
  { id: 'neighbor-relations', text: 'Neighbor Relations: Key to Success', level: 2 },
  { id: 'space-optimization', text: 'Space Optimization for Small Lots', level: 2 },
  { id: 'noise-reduction', text: 'Noise Reduction Strategies', level: 2 },
  { id: 'aesthetic-integration', text: 'Aesthetic Integration', level: 2 },
  { id: 'urban-coop-designs', text: 'Proven Urban Coop Designs', level: 2 },
  { id: 'regulatory-compliance', text: 'Navigating Regulations', level: 2 },
  { id: 'urban-predators', text: 'Urban Predator Protection', level: 2 },
  { id: 'maintenance-logistics', text: 'Urban Maintenance', level: 2 },
  { id: 'troubleshooting', text: 'Troubleshooting', level: 2 },
];

const successFormula = [
  { factor: 'Neighbor Approval', percentage: 30, icon: Users },
  { factor: 'Regulatory Compliance', percentage: 25, icon: FileCheck },
  { factor: 'Space Efficiency', percentage: 20, icon: MapPin },
  { factor: 'Aesthetic Integration', percentage: 15, icon: Palette },
  { factor: 'Noise Management', percentage: 10, icon: Volume2 },
];

const UrbanChickenCoopPlans = () => {
  const relatedArticles = getRelatedArticles('urban-chicken-coop-plans', 'Planning', 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Urban Chicken Coop Plans' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Urban Chicken Coop Plans: Complete City Backyard Solutions (2025)"
        description="Expert urban chicken coop designs for city backyards. Includes noise reduction, neighbor relations, space optimization, and regulations for successful city chicken keeping."
        canonical="/guides/urban-chicken-coop-plans"
      />

      <Header />

      <main className="py-12">
        <article className="container max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

          {/* Hero Section */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                <Building className="w-3 h-3 mr-1" />
                Urban Living
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Home className="w-3 h-3 mr-1" />
                Small Space
              </Badge>
              <Badge variant="outline">35 min read</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Urban Chicken Coop Plans: Complete City Backyard Solutions (2025)
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              <em>By someone who's successfully kept chickens in three different city neighborhoods—and learned what actually works</em>
            </p>

            <img
              src={guideUrbanCoopImage}
              alt="Modern urban chicken coop integrated into a small city backyard garden"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
          </header>

          {/* Quick Overview */}
          <Card className="mb-8 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Urban Success Formula
              </h3>
              <div className="grid grid-cols-5 gap-2 text-center">
                {successFormula.map((item, index) => (
                  <div key={index} className="p-2">
                    <item.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                    <p className="text-2xl font-bold text-primary">{item.percentage}%</p>
                    <p className="text-xs text-muted-foreground">{item.factor}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                City chicken keeping is as much about human psychology as it is about chicken biology
              </p>
            </CardContent>
          </Card>

          <TableOfContents items={tocItems} className="mb-8" />

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="lead">
              <strong>Urban chicken keeping requires completely different strategies than rural designs.</strong> When your neighbor is 8 feet away instead of 800 feet, when your backyard is 20×30 instead of 2 acres, and when city regulations dictate every aspect of your coop placement, standard chicken keeping advice becomes useless or even dangerous.
            </p>

            <p>
              After successfully keeping chickens in Seattle's Capitol Hill, Portland's Hawthorne district, and Austin's East Side—each with different challenges, neighbors, and regulations—I've learned that city chicken keeping is as much about human psychology and urban planning as it is about chicken biology.
            </p>

            <p>
              This comprehensive guide provides urban-specific coop designs, neighbor relationship strategies, noise reduction techniques, and space optimization solutions that work in real city conditions.
            </p>
          </section>

          {/* Urban Challenges */}
          <section id="urban-challenges" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Understanding Urban Chicken Keeping Challenges
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>City chicken keeping fails when rural strategies are applied to urban conditions.</strong> The physics, psychology, and politics of dense neighborhoods create unique challenges that require specialized solutions.
              </p>

              <h3>Urban vs. Rural: Critical Differences</h3>

              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Aspect</TableHead>
                    <TableHead>Rural Approach</TableHead>
                    <TableHead>Urban Requirement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Predator pressure</TableCell>
                    <TableCell>Wild animals, periodic threats</TableCell>
                    <TableCell>Urban predators, human theft</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Noise tolerance</TableCell>
                    <TableCell>No restrictions</TableCell>
                    <TableCell>Strict ordinances, neighbor complaints</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Aesthetics</TableCell>
                    <TableCell>Function over form</TableCell>
                    <TableCell>Must integrate with landscaping</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Space planning</TableCell>
                    <TableCell>Horizontal expansion</TableCell>
                    <TableCell>Vertical optimization essential</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Regulations</TableCell>
                    <TableCell>Minimal oversight</TableCell>
                    <TableCell>Complex permitting, inspections</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3>Common Urban Failure Patterns</h3>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">How Urban Chicken Projects Fail:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Neighbor complaints (40%):</strong> Usually about noise, odor, or aesthetics</li>
                    <li><strong>Regulatory violations (25%):</strong> Permit issues, setback violations, bird limits</li>
                    <li><strong>Space inadequacy (20%):</strong> Overcrowding, behavioral problems, health issues</li>
                    <li><strong>Maintenance burden (10%):</strong> Daily care becomes difficult in tight spaces</li>
                    <li><strong>Security problems (5%):</strong> Theft, vandalism, predator access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Neighbor Relations */}
          <section id="neighbor-relations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-500" />
              Neighbor Relations: The Key to Urban Success
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Your neighbors can shut down your chicken operation faster than any predator or disease.</strong> In my experience across three cities, neighbor support is the difference between a thriving urban flock and a forced removal within six months.
              </p>

              <h3>Pre-Launch Neighbor Strategy: 30-Day Timeline</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Week 1: Initial Outreach</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Visit immediate neighbors personally</li>
                      <li>• Explain plans before construction</li>
                      <li>• Listen to concerns and take notes</li>
                      <li>• Share educational materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Week 2: Address Concerns</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Research solutions to worries</li>
                      <li>• Modify plans for legitimate issues</li>
                      <li>• Provide written answers</li>
                      <li>• Show examples of well-managed coops</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Week 3: Build Support</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Offer to share eggs</li>
                      <li>• Provide contact information</li>
                      <li>• Show professional coop plans</li>
                      <li>• Get written support letters</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Week 4: Finalize</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Document agreements</li>
                      <li>• Establish communication protocols</li>
                      <li>• Set construction expectations</li>
                      <li>• Plan neighborhood introduction</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Addressing Common Neighbor Concerns</h3>

              <Accordion type="single" collapsible className="w-full mb-6">
                <AccordionItem value="smell">
                  <AccordionTrigger>"Chickens will smell and attract pests"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Facts to share:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Well-maintained coops produce less odor than many urban composters</li>
                        <li>• Urban chickens eat scraps that would otherwise attract rats in garbage</li>
                        <li>• Proper management creates no fly or rodent problems</li>
                      </ul>
                      <p><strong>Your commitments:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Daily coop cleaning and bedding management</li>
                        <li>• Secure feed storage in rodent-proof containers</li>
                        <li>• Immediate cleanup of spilled feed or food scraps</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="noise">
                  <AccordionTrigger>"Chickens will be noisy and disruptive"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Facts to share:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Hens produce 60-70 decibels (conversation level) vs. dogs at 85-90+ decibels</li>
                        <li>• Roosters are typically banned in urban areas anyway</li>
                        <li>• Chickens are most active during normal daytime hours</li>
                      </ul>
                      <p><strong>Your commitments:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• No roosters (hens only)</li>
                        <li>• Automatic door closers for containment</li>
                        <li>• Sound dampening materials in coop</li>
                        <li>• Limited flock size (3-6 birds maximum)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="property">
                  <AccordionTrigger>"Property values will decrease"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Facts to share:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Well-designed coops can increase property values as attractive landscaping features</li>
                        <li>• Sustainable living features appeal to many modern buyers</li>
                        <li>• Professional installation indistinguishable from garden shed or gazebo</li>
                      </ul>
                      <p><strong>Your commitments:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Professional design complementing architecture</li>
                        <li>• Landscaping integration to enhance aesthetics</li>
                        <li>• Willingness to modify if concerns arise</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="mb-6 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    The Egg Diplomacy Strategy
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Regular egg sharing:</strong> 6-12 eggs monthly to immediate neighbors</li>
                    <li><strong>Holiday gifts:</strong> Baked goods made with fresh eggs</li>
                    <li><strong>Educational opportunities:</strong> Let neighbors' children visit and learn</li>
                    <li><strong>Community events:</strong> Host backyard gatherings featuring the chickens</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Space Optimization */}
          <section id="space-optimization" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-purple-500" />
              Space Optimization for Small Urban Lots
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Urban lots demand creative space solutions that maximize chicken welfare while minimizing footprint.</strong> Vertical design, multi-purpose structures, and clever integration can make productive flocks possible in surprisingly small spaces.
              </p>

              <h3>Minimum Space Requirements for Urban Flocks</h3>

              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>Flock Size</TableHead>
                    <TableHead>Indoor Coop</TableHead>
                    <TableHead>Outdoor Run</TableHead>
                    <TableHead>Total Footprint</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>3 birds</TableCell>
                    <TableCell>12-18 sq ft</TableCell>
                    <TableCell>30-45 sq ft</TableCell>
                    <TableCell>42-63 sq ft</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4 birds</TableCell>
                    <TableCell>16-24 sq ft</TableCell>
                    <TableCell>40-60 sq ft</TableCell>
                    <TableCell>56-84 sq ft</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6 birds</TableCell>
                    <TableCell>24-36 sq ft</TableCell>
                    <TableCell>60-90 sq ft</TableCell>
                    <TableCell>84-126 sq ft</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <h3>Vertical Design Strategies</h3>

              <ul>
                <li><strong>Elevated coops:</strong> Raise sleeping area, use space beneath for run extension</li>
                <li><strong>Multi-level roosts:</strong> Staggered roosting at different heights</li>
                <li><strong>Hanging feeders/waterers:</strong> Ground-free systems maximize floor space</li>
                <li><strong>Wall-mounted nesting boxes:</strong> External access preserves interior room</li>
              </ul>
            </div>
          </section>

          {/* Noise Reduction */}
          <section id="noise-reduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Volume2 className="w-8 h-8 text-orange-500" />
              Noise Reduction Strategies and Design
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Urban noise management can make or break your chicken operation.</strong> In my Portland neighborhood, noise complaints shut down three chicken projects within two blocks, while proper noise design allowed successful long-term operations.
              </p>

              <h3>Understanding Chicken Noise Patterns</h3>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Hen Vocalizations and Decibel Levels</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Normal clucking:</strong> 60-65 dB (conversation level)</p>
                      <p><strong>Alert calls:</strong> 70-75 dB (moderate noise)</p>
                      <p><strong>Egg-laying announcements:</strong> 75-80 dB (brief bursts)</p>
                    </div>
                    <div>
                      <p><strong>Comparison:</strong></p>
                      <p>• Dogs: 85-95 dB (much louder)</p>
                      <p>• Lawn mowers: 85-95 dB (much louder)</p>
                      <p>• AC units: 60-75 dB (similar)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Quiet Breed Selection</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Excellent Urban Choices (Quiet)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Buff Orpington:</strong> Calm, docile, rarely squawk</li>
                      <li><strong>Sussex:</strong> Gentle nature, minimal vocalizations</li>
                      <li><strong>Australorp:</strong> Quiet, friendly, good urban adaptation</li>
                      <li><strong>Wyandotte:</strong> Mild-mannered, low noise production</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Breeds to Avoid (Noisier)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Rhode Island Red:</strong> Assertive, more vocal</li>
                      <li><strong>Leghorn:</strong> Active, alert, frequent vocalizations</li>
                      <li><strong>Bantams:</strong> Often noisier relative to size</li>
                      <li><strong>Game breeds:</strong> Naturally more aggressive and vocal</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Sound Dampening Design</h3>

              <ul>
                <li><strong>Double-wall construction:</strong> Air gap between interior and exterior walls</li>
                <li><strong>Sound-absorbing insulation:</strong> Fiberglass or acoustic foam in wall cavities</li>
                <li><strong>Acoustic baffles:</strong> Sound-absorbing material in ventilation openings</li>
                <li><strong>Living sound barriers:</strong> Dense evergreen plantings around coop</li>
              </ul>
            </div>
          </section>

          {/* Aesthetic Integration */}
          <section id="aesthetic-integration" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Palette className="w-8 h-8 text-pink-500" />
              Aesthetic Integration and Property Values
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Urban chicken coops must enhance, not detract from, neighborhood aesthetics.</strong> Coops that look like attractive garden features succeed long-term, while those that look like farm buildings create ongoing friction.
              </p>

              <h3>Design Styles for Different Urban Settings</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Modern Urban</h4>
                    <ul className="text-sm space-y-1">
                      <li>Metal siding, flat/shed roof</li>
                      <li>Grays, whites, blacks</li>
                      <li>Clean lines, minimal ornamentation</li>
                      <li>Best for: Contemporary neighborhoods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Traditional Urban</h4>
                    <ul className="text-sm space-y-1">
                      <li>Wood siding, shingle/gable roof</li>
                      <li>Earth tones, heritage colors</li>
                      <li>Decorative trim, window boxes</li>
                      <li>Best for: Historic districts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Garden Pavilion</h4>
                    <ul className="text-sm space-y-1">
                      <li>Cedar, composite, glass panels</li>
                      <li>Open sides, integrated seating</li>
                      <li>Dual-purpose structure</li>
                      <li>Best for: Small multi-use lots</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Landscaping Integration</h3>

              <ul>
                <li><strong>Foundation plantings:</strong> Shrubs and perennials around coop base</li>
                <li><strong>Pathway design:</strong> Attractive access routes using pavers or stepping stones</li>
                <li><strong>Vertical gardening:</strong> Trellises, hanging gardens, climbing plants</li>
                <li><strong>Seasonal interest:</strong> Plants providing year-round visual appeal</li>
              </ul>
            </div>
          </section>

          {/* Urban Coop Designs */}
          <section id="urban-coop-designs" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Home className="w-8 h-8 text-primary" />
              Proven Urban Coop Designs
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">The Urban Minimalist (3-4 birds)</h4>
                    <ul className="text-sm space-y-1 mb-3">
                      <li><strong>Footprint:</strong> 4×6 feet total</li>
                      <li><strong>Configuration:</strong> Elevated coop with run below</li>
                      <li><strong>Height:</strong> 8 feet total</li>
                      <li><strong>Cost:</strong> $600-1,200</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Best for: Small lots, modern neighborhoods, noise-sensitive areas
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/30">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3">The Garden Cottage (4-6 birds)</h4>
                    <ul className="text-sm space-y-1 mb-3">
                      <li><strong>Footprint:</strong> 6×8 feet total</li>
                      <li><strong>Configuration:</strong> Walk-in design</li>
                      <li><strong>Height:</strong> 7 feet interior</li>
                      <li><strong>Cost:</strong> $1,500-2,500</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Best for: Traditional neighborhoods, larger lots, aesthetic focus
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Regulatory Compliance */}
          <section id="regulatory-compliance" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileCheck className="w-8 h-8 text-green-500" />
              Navigating Urban Regulations and Permits
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Major City Regulations Comparison</h3>

              <Table className="mb-6">
                <TableHeader>
                  <TableRow>
                    <TableHead>City</TableHead>
                    <TableHead>Birds Allowed</TableHead>
                    <TableHead>Permit</TableHead>
                    <TableHead>Setbacks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Seattle</TableCell>
                    <TableCell>8 hens max</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>10 ft from residences</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Portland</TableCell>
                    <TableCell>3 hens max</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>15 ft from residences</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Austin</TableCell>
                    <TableCell>10 hens max</TableCell>
                    <TableCell>No (registration)</TableCell>
                    <TableCell>10 ft from residences</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Denver</TableCell>
                    <TableCell>8 hens max</TableCell>
                    <TableCell>Yes (annual)</TableCell>
                    <TableCell>15 ft from residences</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Chicago</TableCell>
                    <TableCell>Prohibited</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>N/A</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Card className="mb-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Research Process for Your Location</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. <strong>City/county website:</strong> Search for "chickens," "poultry," or "livestock" ordinances</li>
                    <li>2. <strong>Zoning office:</strong> Call to verify current regulations and permit requirements</li>
                    <li>3. <strong>Animal control:</strong> Understand enforcement policies and complaint procedures</li>
                    <li>4. <strong>Building department:</strong> Check if structural permits required</li>
                    <li>5. <strong>HOA documents:</strong> Review CC&Rs for any restrictions</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Urban Predators */}
          <section id="urban-predators" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-500" />
              Urban Predator Protection Strategies
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Urban predators are often more intelligent and persistent than their rural counterparts.</strong> City-adapted raccoons have learned to open complex latches, while urban coyotes have become more aggressive and less afraid of humans.
              </p>

              <h3>Urban Predator Profiles</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Raccoons (Primary Threat)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Can open multi-step latches</li>
                      <li>• Strong enough to tear hardware cloth</li>
                      <li>• Often work in coordinated groups</li>
                      <li>• Will hunt during day in urban areas</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Domestic Dogs (Leading Cause)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Often loose in neighborhoods</li>
                      <li>• Prey instinct triggered by birds</li>
                      <li>• Legal complications with neighbors</li>
                      <li>• Require relationship-based solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Layered Security Systems</h3>

              <ul>
                <li><strong>Perimeter:</strong> 8-foot fencing with lean-in tops and dig barriers</li>
                <li><strong>Coop hardening:</strong> 1/2-inch hardware cloth, two-step latches</li>
                <li><strong>Overhead protection:</strong> Complete netting coverage</li>
                <li><strong>Technology:</strong> Motion cameras, smart lighting, automated doors</li>
              </ul>
            </div>
          </section>

          {/* Maintenance */}
          <section id="maintenance-logistics" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-gray-500" />
              Urban Maintenance and Logistics
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Daily Care Optimization</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Morning Routine (15-20 min)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Quiet approach during sensitive hours</li>
                      <li>• Quick health check</li>
                      <li>• Food and water refresh</li>
                      <li>• Egg collection</li>
                      <li>• Security check</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Evening Routine (10-15 min)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Final egg collection</li>
                      <li>• Secure lockup verification</li>
                      <li>• Food removal (pest prevention)</li>
                      <li>• Quick cleanup</li>
                      <li>• Tomorrow preparation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Urban Waste Management</h3>

              <ul>
                <li><strong>Tumbler composters:</strong> Contained, quick processing, neat appearance</li>
                <li><strong>Worm composting:</strong> Compact, produces high-quality fertilizer</li>
                <li><strong>Municipal programs:</strong> Some cities accept chicken manure</li>
                <li><strong>Garden club sharing:</strong> Other gardeners may want composted manure</li>
              </ul>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Troubleshooting Urban Problems</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Urban chicken problems often have human solutions rather than technical solutions.</strong> Most issues involve neighbor relations, regulatory compliance, or space optimization.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="noise">
                  <AccordionTrigger>"Your chickens are too noisy"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Immediate:</strong></p>
                      <ul className="text-sm">
                        <li>• Monitor flock during complaint times</li>
                        <li>• Implement quiet-time containment</li>
                        <li>• Check for stressors causing excess noise</li>
                        <li>• Adjust automatic door timers</li>
                      </ul>
                      <p><strong>Long-term:</strong></p>
                      <ul className="text-sm">
                        <li>• Install sound dampening materials</li>
                        <li>• Consider flock size reduction</li>
                        <li>• Replace noisy breeds with quieter varieties</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="smell">
                  <AccordionTrigger>"Your chickens smell bad"</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Immediate:</strong></p>
                      <ul className="text-sm">
                        <li>• Deep clean coop and replace all bedding</li>
                        <li>• Remove spilled feed or standing water</li>
                        <li>• Check ventilation for blockages</li>
                      </ul>
                      <p><strong>Long-term:</strong></p>
                      <ul className="text-sm">
                        <li>• Upgrade ventilation system</li>
                        <li>• Implement daily waste removal</li>
                        <li>• Relocate coop further from property lines</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="violation">
                  <AccordionTrigger>Violation notice received</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Response Protocol:</strong></p>
                      <ol className="text-sm space-y-1">
                        <li>1. Understand the specific violation</li>
                        <li>2. Review actual regulations</li>
                        <li>3. Document current status with photos</li>
                        <li>4. Implement immediate fixes</li>
                        <li>5. Respond professionally in writing</li>
                        <li>6. Request inspection to demonstrate compliance</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion: Urban Chicken Success Through Human-Centered Design</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Urban chicken keeping succeeds when we recognize that city environments require fundamentally different approaches than rural operations. The technical aspects of chicken care remain important, but they're secondary to the human factors that determine long-term success.
              </p>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">The Keys to Urban Chicken Success:</h4>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1. Invest in neighbor relationships</strong> before you invest in construction</li>
                    <li><strong>2. Understand and exceed regulatory requirements</strong> from day one</li>
                    <li><strong>3. Design for aesthetics and integration</strong> rather than just function</li>
                    <li><strong>4. Plan for noise and odor management</strong> as primary design factors</li>
                    <li><strong>5. Maintain proactive communication</strong> with everyone affected by your operation</li>
                  </ol>
                </CardContent>
              </Card>

              <p>
                With proper attention to these factors, urban chicken keeping can thrive even in dense city neighborhoods. The key is understanding that in urban environments, success depends as much on managing human relationships as managing chicken welfare.
              </p>
            </div>
          </section>

          <AuthorBio 
            name="Sarah Martinez"
            credentials="Urban Chicken Expert | Seattle, Portland, Austin Experience"
            bio="Sarah has successfully kept chickens in three major city neighborhoods, learning firsthand what strategies work in dense urban environments. Her guides focus on the human factors that determine urban chicken success."
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

export default UrbanChickenCoopPlans;
