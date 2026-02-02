import { Link } from 'react-router-dom';
import { Thermometer, Droplets, Sun, Wind, Shield, AlertTriangle, CheckCircle, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import AuthorBio from '@/components/AuthorBio';
import RelatedArticles from '@/components/RelatedArticles';
import NewsletterSignup from '@/components/NewsletterSignup';
import { getRelatedArticles } from '@/lib/articles';
import guideArizonaImage from '@/assets/guide-arizona.jpg';

const tocItems = [
  { id: 'arizona-regulations', text: 'Arizona Chicken Regulations', level: 2 },
  { id: 'desert-climate-challenges', text: 'Desert Climate Challenges', level: 2 },
  { id: 'heat-management-systems', text: 'Heat Management Systems', level: 2 },
  { id: 'coop-design-principles', text: 'Desert Coop Design Principles', level: 2 },
  { id: 'material-selection', text: 'Materials That Survive Arizona', level: 2 },
  { id: 'water-management', text: 'Water Systems for Desert Chickens', level: 2 },
  { id: 'predator-protection', text: 'Arizona Predator Protection', level: 2 },
  { id: 'seasonal-considerations', text: 'Monsoons and Seasonal Changes', level: 2 },
  { id: 'breed-selection', text: 'Best Breeds for Arizona', level: 2 },
  { id: 'troubleshooting', text: 'Troubleshooting Common Problems', level: 2 },
  { id: 'faq', text: 'FAQ', level: 2 },
];

const ArizonaChickenCoopGuide = () => {
  const relatedArticles = getRelatedArticles('arizona-chicken-coop-guide', 'Building', 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Guides', href: '/guides' },
    { label: 'Arizona Chicken Coop Guide' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Arizona Chicken Coop Guide: Desert Climate Building Requirements (2025)"
        description="Complete Arizona chicken coop building guide with desert climate considerations, local regulations, heat management, and material choices for Phoenix, Tucson, and statewide requirements."
        canonical="/guides/arizona-chicken-coop-guide"
      />

      <Header />

      <main className="py-12">
        <article className="container max-w-4xl">
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                <MapPin className="w-3 h-3 mr-1" />
                Arizona
              </Badge>
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                <Thermometer className="w-3 h-3 mr-1" />
                Desert Climate
              </Badge>
              <Badge variant="outline">40 min read</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              The Complete Arizona Chicken Coop Guide: Building for Desert Success (2025)
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              <em>By someone who's kept chickens through 8 Arizona summers and learned what actually works in 118°F heat</em>
            </p>

            <img
              src={guideArizonaImage}
              alt="Arizona desert chicken coop with shade cloth and misting system in Sonoran Desert landscape"
              className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
          </header>

          {/* Quick Overview Box */}
          <Card className="mb-8 border-orange-200 dark:border-orange-800 bg-orange-50/50 dark:bg-orange-950/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-orange-500" />
                Quick Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Region:</span> Arizona (Phoenix, Tucson, Flagstaff)
                </div>
                <div>
                  <span className="font-medium">Climate Challenge:</span> Extreme heat (118°F+)
                </div>
                <div>
                  <span className="font-medium">Estimated Cost:</span> $800-$2,500
                </div>
                <div>
                  <span className="font-medium">Key Focus:</span> Heat management & cooling
                </div>
              </div>
            </CardContent>
          </Card>

          <TableOfContents items={tocItems} />

          {/* Introduction */}
          <section className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="lead">
              <strong>Arizona chicken keeping requires completely different strategies than most online guides suggest.</strong> When Phoenix hits 118°F for weeks straight and Tucson sees 45 consecutive days over 110°F, standard chicken coop advice becomes dangerous misinformation. After losing birds to heat stress in my first Arizona summer and helping dozens of desert chicken keepers solve climate challenges, I've learned that success here demands specific knowledge of our unique regulations, extreme heat management, and desert predator protection.
            </p>

            <p>
              This comprehensive guide covers everything Arizona chicken keepers need to know: state and local regulations (including the game-changing HB2325 law), desert-specific coop design principles, heat management systems that actually work in extreme temperatures, material choices for our intense sun and monsoon seasons, and predator protection against javelinas, coyotes, and desert wildlife. Whether you're in Phoenix, Tucson, Flagstaff, or rural Arizona, these proven strategies will keep your flock healthy and productive year-round. For a broader look at how different climates affect coop design, see our <Link to="/guides/climate-chicken-coop-guide" className="text-primary hover:underline">complete climate-specific design guide</Link>.
            </p>
          </section>

          {/* Arizona Regulations Section */}
          <section id="arizona-regulations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Arizona Chicken Regulations: What You Need to Know
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Arizona's HB2325 law prohibits municipalities from banning up to 6 hens on properties of 1 acre or less, but local regulations and HOA restrictions still apply.</strong> This 2012 state law revolutionized backyard chicken keeping in Arizona, but understanding the nuances can save you thousands in fines and legal trouble.
              </p>

              <h3>Statewide Regulations Under HB2325</h3>

              <Card className="mb-6 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    What the law protects:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to keep up to 6 hens (no roosters) on residential lots under 1 acre</li>
                    <li>• Prevents municipalities from outright bans</li>
                    <li>• Applies to all incorporated cities and towns in Arizona</li>
                    <li>• Cannot be overridden by local ordinances</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    What the law does NOT protect:
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• HOA restrictions (explicitly excluded from state protection)</li>
                    <li>• Roosters (banned in most urban areas due to noise)</li>
                    <li>• Commercial operations or more than 6 birds</li>
                    <li>• Specific coop placement, setback, or design requirements</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>Major City Regulations</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Phoenix (Population 1.7M)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Permit:</strong> No permit needed for up to 6 hens</li>
                      <li><strong>Setback:</strong> 80-foot from residences unless consent</li>
                      <li><strong>Roosters:</strong> Prohibited in urban zones</li>
                      <li><strong>Note:</strong> Most restrictive setbacks in AZ</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Tucson (Population 550K)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Permit:</strong> No permit required</li>
                      <li><strong>Setback:</strong> 50-foot from dwellings</li>
                      <li><strong>Limit:</strong> Up to 24 chickens permitted</li>
                      <li><strong>Note:</strong> Most permissive major AZ city</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Chandler (Population 280K)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Permit:</strong> No permit for up to 5 chickens</li>
                      <li><strong>Setback:</strong> 5-foot from property lines</li>
                      <li><strong>Inspection:</strong> City may inspect for compliance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Scottsdale (Population 260K)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Permit:</strong> Animal license required ($15/year)</li>
                      <li><strong>Setback:</strong> 6ft from property, 40ft from homes</li>
                      <li><strong>Coop size:</strong> Maximum 32 square feet</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>HOA Considerations in Arizona</h3>

              <p>
                <strong>HOA authority supersedes municipal permissions.</strong> Arizona has extensive HOA coverage—approximately 60% of Phoenix metro homes are in HOA-governed communities. Recent court cases have upheld significant penalties for chicken keeping violations.
              </p>
            </div>
          </section>

          {/* Desert Climate Challenges */}
          <section id="desert-climate-challenges" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-red-500" />
              Understanding Desert Climate Challenges
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Arizona's Sonoran Desert climate creates the most challenging chicken-keeping environment in North America.</strong> Summer temperatures routinely exceed 115°F, humidity drops below 10%, and UV radiation is extreme year-round. Standard chicken management fails catastrophically here.
              </p>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Phoenix Summer Statistics</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Average highs (Jun-Sep):</strong> 104-118°F</p>
                      <p><strong>Record high:</strong> 122°F (multiple times)</p>
                    </div>
                    <div>
                      <p><strong>Days over 110°F:</strong> 40-60 per year</p>
                      <p><strong>Nighttime lows in summer:</strong> 85-95°F</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Heat Stress Timeline for Chickens</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <Card className="bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold text-yellow-600">85°F</p>
                    <p className="text-xs">Mild stress, panting starts</p>
                  </CardContent>
                </Card>
                <Card className="bg-orange-50 dark:bg-orange-950/30 border-orange-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold text-orange-600">90°F</p>
                    <p className="text-xs">Moderate stress, wing spreading</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 dark:bg-red-950/30 border-red-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold text-red-600">95°F</p>
                    <p className="text-xs">Severe stress, weakness</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-100 dark:bg-red-900/30 border-red-300">
                  <CardContent className="p-3 text-center">
                    <p className="text-2xl font-bold text-red-700">100°F+</p>
                    <p className="text-xs">Emergency! Death in 2-4 hrs</p>
                  </CardContent>
                </Card>
              </div>

              <h3>Low Humidity Challenges</h3>

              <p>
                <strong>Desert humidity regularly drops to 5-15%</strong> during summer, creating unique problems:
              </p>

              <ul>
                <li><strong>Rapid dehydration:</strong> Water consumption triples in low humidity</li>
                <li><strong>Respiratory stress:</strong> Dry air irritates breathing passages</li>
                <li><strong>Egg quality issues:</strong> Shells become thinner, more fragile</li>
                <li><strong>Dust problems:</strong> Increased dust affects respiratory health</li>
              </ul>

              <h3>Intense Solar Radiation</h3>

              <p>
                <strong>Arizona receives 85-90% of maximum possible sunshine annually</strong>—among the highest in the world. This creates problems beyond just temperature:
              </p>

              <ul>
                <li><strong>UV degradation:</strong> Plastics and some materials break down rapidly</li>
                <li><strong>Metal heating:</strong> Steel surfaces can reach 160-180°F</li>
                <li><strong>Reflective glare:</strong> Can cause eye problems in chickens</li>
                <li><strong>Uneven heating:</strong> Direct vs. shaded areas vary by 40-60°F</li>
              </ul>
            </div>
          </section>

          {/* Heat Management Systems */}
          <section id="heat-management-systems" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8 text-blue-500" />
              Proven Heat Management Systems
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Successful Arizona chicken keeping requires multiple integrated heat management strategies.</strong> No single solution works in 115°F+ temperatures—you need layered approaches that address different aspects of heat stress.
              </p>

              <h3>Evaporative Cooling Systems</h3>

              <p>
                <strong>Evaporative cooling works exceptionally well in Arizona's low humidity.</strong> During my worst heat crisis, a simple misting system dropped coop temperatures by 25-30°F and saved my remaining flock.
              </p>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Misting System Specifications</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Nozzle size:</strong> 0.008" orifice, 10-15 psi pressure</p>
                      <p><strong>Timer control:</strong> 30 sec on, 5 min off at 100°F+</p>
                    </div>
                    <div>
                      <p><strong>Water use:</strong> 2-5 gal/day for 8×12 coop</p>
                      <p><strong>Installation cost:</strong> $80-150 for basic system</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h4>Evaporative Cooling Effectiveness</h4>

              <div className="grid md:grid-cols-4 gap-3 mb-6">
                <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-lg font-bold text-blue-600">10% humidity</p>
                    <p className="text-sm">35-40°F reduction</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-lg font-bold text-blue-600">20% humidity</p>
                    <p className="text-sm">25-30°F reduction</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-lg font-bold text-blue-600">40% humidity</p>
                    <p className="text-sm">15-20°F reduction</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-50 dark:bg-gray-950/30 border-gray-200">
                  <CardContent className="p-3 text-center">
                    <p className="text-lg font-bold text-gray-600">60%+ humidity</p>
                    <p className="text-sm">Stop misting</p>
                  </CardContent>
                </Card>
              </div>

              <h3>Shade Structure Design</h3>

              <p>
                <strong>Shade is critical, but not all shade is equal in desert conditions.</strong> White shade cloth provides better cooling than trees or solid roofs because it allows air circulation while blocking 80-90% of solar radiation.
              </p>

              <ul>
                <li><strong>Shade cloth density:</strong> 80-90% for summer, 70% for winter</li>
                <li><strong>Color:</strong> White or aluminized for maximum reflection</li>
                <li><strong>Height:</strong> 10-15 feet above coop for air circulation</li>
                <li><strong>Coverage area:</strong> 150% of coop footprint (extended shade zones)</li>
              </ul>
            </div>
          </section>

          {/* Coop Design Principles */}
          <section id="coop-design-principles" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Wind className="w-8 h-8 text-primary" />
              Desert-Specific Coop Design Principles
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Desert coop design reverses many traditional principles.</strong> Where cold-climate coops prioritize insulation and draft prevention, Arizona coops must maximize airflow while providing complete shade.
              </p>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Arizona Coop Design Rules</h4>
                  <ul className="space-y-2 text-sm">
                    <li>✓ <strong>Ventilation:</strong> 2-3 square feet per bird (vs. 1 sq ft elsewhere)</li>
                    <li>✓ <strong>Roof height:</strong> 8-12 feet (increases hot air volume)</li>
                    <li>✓ <strong>Roof material:</strong> Light-colored metal with radiant barrier</li>
                    <li>✓ <strong>Open sides:</strong> 50-70% open (hardware cloth protected)</li>
                    <li>✓ <strong>Ground materials:</strong> Light-colored gravel or decomposed granite</li>
                    <li>✓ <strong>Roosting space:</strong> 10-12 inches per bird (vs. 8-10 elsewhere)</li>
                  </ul>
                </CardContent>
              </Card>

              <h3>Example Coop Sizing for Arizona</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">4 Birds</p>
                    <p className="text-sm">8×8 coop minimum</p>
                    <p className="text-sm">12×16 run</p>
                    <p className="text-sm">10×12 shade structure</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">6 Birds</p>
                    <p className="text-sm">8×12 coop</p>
                    <p className="text-sm">16×20 run</p>
                    <p className="text-sm">12×16 shade structure</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">10 Birds</p>
                    <p className="text-sm">12×16 coop</p>
                    <p className="text-sm">20×24 run</p>
                    <p className="text-sm">16×20 shade structure</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Material Selection */}
          <section id="material-selection" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Materials That Survive Arizona Conditions</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Arizona's extreme UV radiation, temperature swings of 100°F+, and occasional severe weather destroy standard construction materials rapidly.</strong> Choosing the wrong materials costs thousands in premature replacement and can endanger your flock during extreme weather.
              </p>

              <h3>Lumber Performance Ranking for Arizona</h3>

              <Card className="mb-4 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">Excellent Choices (15+ year lifespan)</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Western Red Cedar:</strong> Natural oils resist UV and insects, $8-12 per 2×4×8</li>
                    <li><strong>Cypress:</strong> Excellent moisture resistance, naturally pest-resistant, $6-10 per 2×4×8</li>
                    <li><strong>Redwood:</strong> Premium choice but expensive, $12-18 per 2×4×8</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-4 border-yellow-200 dark:border-yellow-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">Good Choices (8-12 year lifespan)</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Pressure-treated pine (ACQ):</strong> Cost-effective for non-contact use, $5-7 per 2×4×8</li>
                    <li><strong>Douglas Fir (sealed):</strong> Strong structural lumber with proper sealing, $4-6 per 2×4×8</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-200 dark:border-red-800">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Avoid in Arizona</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>Untreated pine/fir:</strong> Fails within 2-3 years in sun exposure</li>
                    <li><strong>Particle board/OSB:</strong> Monsoon moisture causes rapid failure</li>
                    <li><strong>Composite decking:</strong> Extreme heat causes warping and expansion</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Water Management */}
          <section id="water-management" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Droplets className="w-8 h-8 text-blue-500" />
              Water Systems for Desert Chickens
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Water management is the most critical aspect of Arizona chicken keeping.</strong> In 115°F heat with 10% humidity, chickens can die from dehydration in 6-8 hours. Standard watering systems fail catastrophically in desert conditions.
              </p>

              <Card className="mb-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Arizona Chicken Water Requirements</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>70-85°F:</strong> 0.5-1 pints per bird daily</p>
                      <p><strong>90-105°F:</strong> 1-2 pints per bird daily</p>
                    </div>
                    <div>
                      <p><strong>110°F+:</strong> 2-4 pints per bird daily</p>
                      <p><strong>Heat stress events:</strong> Up to 5-6 pints per bird</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3>Essential Design Principles</h3>

              <ul>
                <li><strong>Multiple sources:</strong> Minimum 2 independent watering points</li>
                <li><strong>Large capacity:</strong> 3-5 gallons per 6 birds minimum</li>
                <li><strong>Shade protection:</strong> All waterers must be continuously shaded</li>
                <li><strong>Easy monitoring:</strong> Visual water level indicators</li>
              </ul>
            </div>
          </section>

          {/* Predator Protection */}
          <section id="predator-protection" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Arizona Predator Protection Strategies
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Arizona predator pressure is intense and includes species not found elsewhere.</strong> Coyotes, javelinas, Gila monsters, and multiple raptor species create challenges requiring specific countermeasures.
              </p>

              <h3>Desert-Specific Predator Threats</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Coyotes (Most Dangerous)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Activity:</strong> Year-round, peak at dawn/dusk</li>
                      <li><strong>Method:</strong> Dig under, jump over, or breach fencing</li>
                      <li><strong>Defense:</strong> 8-foot fencing, buried barriers, electric options</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 dark:border-orange-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Javelinas</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Activity:</strong> Year-round, peak morning/evening</li>
                      <li><strong>Method:</strong> Break through fencing for feed</li>
                      <li><strong>Defense:</strong> Heavy-gauge fencing, secure feed storage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 dark:border-yellow-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Rattlesnakes</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Season:</strong> April-October, peak summer</li>
                      <li><strong>Attraction:</strong> Eggs, chicks, rodents, shade</li>
                      <li><strong>Defense:</strong> 1/4" hardware cloth, clearing around coop</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Harris's Hawks</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Activity:</strong> Year-round, daytime hunting</li>
                      <li><strong>Method:</strong> Cooperative pack hunting</li>
                      <li><strong>Defense:</strong> Covered runs, dense shade overhead</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Seasonal Considerations */}
          <section id="seasonal-considerations" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-primary" />
              Managing Monsoons and Seasonal Changes
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Arizona's monsoon season (June 15 - September 30) brings sudden weather changes:</strong> humidity spikes from 10% to 70%, temperature drops of 20-30°F during storms, intense rainfall (1-2 inches in 30 minutes), flash flooding, and frequent lightning.
              </p>

              <h3>Year-Round Management Calendar</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Jan-Feb: Mild Winter</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Best weather for coop maintenance</li>
                      <li>• Plan and order materials</li>
                      <li>• Repair winter storm damage</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Mar-Apr: Spring Prep</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Begin heat system preparation</li>
                      <li>• Deep clean coops</li>
                      <li>• Install/service cooling systems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">May-Jun: Pre-Summer</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Complete all projects before extreme heat</li>
                      <li>• Test cooling systems thoroughly</li>
                      <li>• Prepare for monsoon season</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 dark:border-red-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-red-600 mb-2">Jul-Sep: Survival Mode</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Focus on maintaining life-support systems</li>
                      <li>• Monitor birds continuously</li>
                      <li>• Avoid major construction projects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Breed Selection */}
          <section id="breed-selection" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Best Chicken Breeds for Arizona</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                <strong>Breed selection can make the difference between thriving chickens and constant struggle in Arizona's extreme climate.</strong> Heat-tolerant breeds share specific physiological characteristics that help them survive 115°F+ temperatures.
              </p>

              <h3>Excellent Arizona Breeds</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400">White Leghorn (Top Choice)</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Heat tolerance:</strong> Excellent, Mediterranean origin</li>
                      <li><strong>Eggs:</strong> 280-320 large white eggs annually</li>
                      <li><strong>Size:</strong> 4-5 lbs, efficient feed conversion</li>
                      <li><strong>Cost:</strong> $15-25 per chick</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 dark:border-green-800">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Egyptian Fayoumi</h4>
                    <ul className="text-sm space-y-1">
                      <li><strong>Heat tolerance:</strong> Extreme, North African desert origin</li>
                      <li><strong>Eggs:</strong> 150-200 small eggs, consistent in heat</li>
                      <li><strong>Hardiness:</strong> Disease resistant, very long-lived</li>
                      <li><strong>Cost:</strong> $25-40 per chick (rare, worth seeking)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3>Breeds to Avoid in Arizona</h3>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <p className="font-semibold mb-3 text-red-700 dark:text-red-400">Cold-climate breeds that struggle in desert heat:</p>
                  <ul className="text-sm space-y-2">
                    <li><strong>Brahma:</strong> Massive size, dense feathering—can die within hours at 110°F+</li>
                    <li><strong>Cochin:</strong> Extreme feathering, nearly impossible to manage in AZ summers</li>
                    <li><strong>Buff Orpington:</strong> Dense feathering, heat-absorbing color, high mortality risk</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Troubleshooting */}
          <section id="troubleshooting" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              Troubleshooting Common Arizona Problems
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Emergency Heat Response Protocol</h3>

              <Card className="mb-6 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">When birds show severe heat stress (panting, wings spread, lethargic)</h4>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1. Move immediately</strong> to coolest available location</li>
                    <li><strong>2. Cool water immersion:</strong> Feet and legs in lukewarm (not cold) water</li>
                    <li><strong>3. Increase airflow:</strong> Fans, misting, whatever is available</li>
                    <li><strong>4. Offer electrolyte water:</strong> Encourage drinking</li>
                    <li><strong>5. Monitor recovery:</strong> Birds should respond within 30-60 minutes</li>
                    <li><strong>6. Seek vet care</strong> if no improvement after 1 hour</li>
                  </ol>
                </CardContent>
              </Card>

              <h3>Water System Failure Response</h3>

              <ul>
                <li><strong>Immediate:</strong> Any clean water in any container</li>
                <li><strong>Short-term:</strong> Multiple shallow dishes refreshed frequently</li>
                <li><strong>Cooling addition:</strong> Add ice to water (not directly to birds)</li>
                <li><strong>System repair:</strong> Fix primary system or install temporary backup</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQ: Arizona Chicken Keeping</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Can chickens really survive 115°F+ temperatures in Arizona?</h3>
                  <p className="text-muted-foreground">
                    Yes, with proper management. Heat-tolerant breeds like White Leghorns and Anconas can survive 118°F temperatures with adequate shade, ventilation, water, and cooling systems. However, they require specific management—standard chicken care advice from other climates will fail catastrophically in Arizona summers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How much does it cost to build a desert-appropriate chicken coop in Arizona?</h3>
                  <p className="text-muted-foreground">
                    Budget $800-2,500 for a 6-bird coop with proper heat management. Basic setup: $800-1,200. Mid-range with misting and better materials: $1,200-1,800. Premium with automation and maximum heat protection: $1,800-2,500. The key is investing in heat management—skimping on cooling systems costs more in lost birds and vet bills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do I need a permit to keep chickens in Phoenix?</h3>
                  <p className="text-muted-foreground">
                    No permit required for up to 6 hens in Phoenix, but you must maintain 80-foot setbacks from neighboring residences unless you have written consent. Check your HOA restrictions—they supersede city permissions and can impose significant fines.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's the biggest mistake new Arizona chicken keepers make?</h3>
                  <p className="text-muted-foreground">
                    Underestimating heat management needs and using designs meant for temperate climates. I've seen people lose entire flocks because they followed generic online plans without desert modifications. Arizona requires 2-3 times more ventilation, shade structures, and water capacity than standard recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How much water do chickens need during Arizona summers?</h3>
                  <p className="text-muted-foreground">
                    2-4 pints per bird daily during extreme heat (110°F+), compared to 0.5 pints in moderate weather. That's a 6-8x increase. Plan water system capacity for 3-5 gallons per 6 birds to handle extreme consumption. Always provide backup water sources—system failures during heat waves kill birds within hours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What chicken breeds should I avoid in Arizona?</h3>
                  <p className="text-muted-foreground">
                    Avoid cold-climate breeds with dense feathering: Brahmas, Cochins, Buff Orpingtons, and other heavy, fluffy breeds. They can die within hours at 110°F+. Stick with Mediterranean breeds (Leghorns, Anconas, Minorcas) or other heat-tolerant varieties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Conclusion: Your Success in the Arizona Desert</h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Successful chicken keeping in Arizona requires abandoning conventional wisdom and embracing desert-specific strategies. The extreme heat, intense UV radiation, unique predators, and dramatic weather changes demand approaches that would seem excessive in moderate climates but are essential for survival here.
              </p>

              <Card className="mb-6 border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Your path to success starts with these priorities:</h4>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1. Understand local regulations</strong> - Know your city requirements and HOA restrictions before starting</li>
                    <li><strong>2. Invest in heat management</strong> - Shade, ventilation, and cooling systems aren't optional luxuries</li>
                    <li><strong>3. Choose appropriate breeds</strong> - Mediterranean breeds will thrive while cold-climate breeds will struggle or die</li>
                    <li><strong>4. Plan for extreme weather</strong> - Both summer heat and monsoon storms require specific preparation</li>
                    <li><strong>5. Connect with local resources</strong> - Arizona suppliers and communities understand desert challenges</li>
                  </ol>
                </CardContent>
              </Card>

              <p>
                Thousands of Arizona chicken keepers are succeeding with these methods. With proper planning, appropriate materials, and desert-adapted management, you can maintain a thriving, productive flock year-round in the Sonoran Desert. The key is respecting the environment and working with it, not against it.
              </p>
            </div>
          </section>

          <AuthorBio 
            name="Sarah Martinez"
            credentials="Backyard Chicken Expert | 8+ Years Arizona Experience"
            bio="Sarah has been raising chickens in the Arizona desert since 2016, learning through experience what works in extreme heat. After losing birds to heat stress in her first summer, she developed the management strategies shared in this guide and has helped dozens of Phoenix-area chicken keepers succeed with their flocks."
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

export default ArizonaChickenCoopGuide;
