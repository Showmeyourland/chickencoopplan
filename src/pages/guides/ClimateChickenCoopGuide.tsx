import { useState } from "react";
import { Link } from "react-router-dom";
import BlogLayout from "@/components/BlogLayout";
import { getArticleBySlug } from "@/lib/articles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Snowflake, Droplets, Wind, CheckCircle, AlertTriangle, Thermometer, MapPin } from "lucide-react";

const ClimateChickenCoopGuide = () => {
  const article = getArticleBySlug('climate-chicken-coop-guide');

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <BlogLayout article={article}>
      <p className="lead">
        <strong>One-size-fits-all chicken coop plans fail in extreme climates.</strong> After building coops across Arizona's Sonoran Desert (where summer temperatures reach 118°F) and consulting with builders from Minnesota's sub-zero winters to Florida's hurricane-prone humidity, I've learned that climate determines every critical design decision—from ventilation placement to material selection.
      </p>

      <p>
        The difference between a thriving flock and heat-stressed, frostbitten, or disease-prone birds comes down to understanding how your local climate affects chicken biology and adapting coop design accordingly. This comprehensive guide reveals the specific modifications needed for every major climate zone in North America.
      </p>

      {/* Interactive Climate Zone Selector */}
      <ClimateZoneSelector />

      <h2 id="climate-zones">Understanding Climate Zones for Chicken Keeping</h2>

      <p>
        <strong>Chicken physiology determines climate requirements, not human comfort preferences.</strong> Chickens cannot sweat—they rely entirely on panting, wing spreading, and blood circulation through combs and wattles for cooling. This makes heat management far more critical than cold protection in most regions.
      </p>

      <h3>Critical Temperature Thresholds</h3>

      <ul>
        <li><strong>Heat stress begins:</strong> 85°F (chickens start panting)</li>
        <li><strong>Dangerous heat levels:</strong> 90°F+ with humidity (lethal without intervention)</li>
        <li><strong>Cold tolerance:</strong> Most breeds comfortable to 20°F when dry and draft-free</li>
        <li><strong>Extreme cold risk:</strong> Below 0°F requires supplemental protection</li>
      </ul>

      <h3>Primary Climate Categories for Coop Design</h3>

      <h4>Hot/Arid (Desert Southwest)</h4>
      <ul>
        <li>Summer highs 100°F+, low humidity</li>
        <li>Extreme temperature swings (40°F+ daily variation)</li>
        <li>Intense solar radiation, minimal precipitation</li>
        <li>Primary concern: Heat management and shade</li>
      </ul>

      <h4>Cold Continental (Northern States/Canada)</h4>
      <ul>
        <li>Winter lows below 0°F, heavy snow loads</li>
        <li>Short summers with moderate temperatures</li>
        <li>Primary concern: Insulation and structural integrity</li>
      </ul>

      <h4>Humid Subtropical (Southeast)</h4>
      <ul>
        <li>High humidity year-round (70-90%)</li>
        <li>Moderate temperatures but feels much hotter</li>
        <li>Hurricane/tornado risk, heavy precipitation</li>
        <li>Primary concern: Ventilation and moisture management</li>
      </ul>

      <h4>Temperate (Pacific Northwest, Moderate Midwest)</h4>
      <ul>
        <li>Mild temperature extremes</li>
        <li>High precipitation, moderate humidity</li>
        <li>Primary concern: Drainage and all-weather functionality</li>
      </ul>

      <p>
        <Link to="/guides/how-to-build-chicken-coop" className="text-primary hover:underline">Our complete building guide</Link> includes climate modifications for every region, addressing the specific challenges that generic plans ignore.
      </p>

      <h2 id="hot-arid-designs">Hot/Arid Climate Designs (Desert Southwest)</h2>

      <p>
        <strong>In Arizona's desert climate, heat kills chickens faster than any predator.</strong> Phoenix summer temperatures reaching 115°F+ require aggressive cooling strategies that contradict standard coop design advice.
      </p>

      <h3>Essential Hot-Climate Modifications</h3>

      <h4>Maximum Ventilation Approach</h4>
      <ul>
        <li><strong>Hardware cloth walls:</strong> Replace solid siding with 1/2-inch hardware cloth</li>
        <li><strong>Continuous ridge vents:</strong> Full roof peak open for hot air exhaust</li>
        <li><strong>Cross-ventilation:</strong> Openings on all four walls for airflow</li>
        <li><strong>Floor ventilation:</strong> Raised floors with air gaps underneath</li>
      </ul>

      <p>
        For detailed ventilation calculations, see our <Link to="/guides/coop-ventilation-guide" className="text-primary hover:underline">complete ventilation guide</Link>.
      </p>

      <h4>Shade and Thermal Management</h4>
      <ul>
        <li><strong>Deep roof overhangs:</strong> 24-36 inches to shade walls</li>
        <li><strong>Light-colored surfaces:</strong> White or light tan reflects solar radiation</li>
        <li><strong>Thermal mass avoidance:</strong> No concrete floors or heavy materials</li>
        <li><strong>Eastern orientation:</strong> Morning sun acceptable, afternoon shade critical</li>
      </ul>

      <h4>Cooling Features</h4>
      <ul>
        <li><strong>Misting systems:</strong> Evaporative cooling works excellently in dry climates</li>
        <li><strong>Shade structures:</strong> 70% shade cloth over runs</li>
        <li><strong>Water multiplication:</strong> Multiple waterers in shaded locations</li>
        <li><strong>Elevated design:</strong> Airflow underneath provides additional cooling</li>
      </ul>

      <h4>Material Adaptations</h4>
      <ul>
        <li><strong>Metal roofing:</strong> Excellent heat reflection, quick cooling at night</li>
        <li><strong>No insulation:</strong> Traps heat rather than providing cooling</li>
        <li><strong>UV-resistant materials:</strong> Standard plastic degrades rapidly</li>
        <li><strong>Galvanized hardware:</strong> Stainless where budget allows</li>
      </ul>

      <p>
        For complete Arizona-specific requirements, see our <Link to="/guides/arizona-chicken-coop-guide" className="text-primary hover:underline">Arizona chicken coop guide</Link>.
      </p>

      <h4>Breed Considerations for Hot Climates</h4>
      <ul>
        <li><strong>Heat-tolerant breeds:</strong> Leghorns, Minorcas, Egyptian Fayoumis</li>
        <li><strong>Large combs preferred:</strong> Better heat dissipation</li>
        <li><strong>Light-colored plumage:</strong> Reflects rather than absorbs heat</li>
        <li><strong>Avoid heavy breeds:</strong> Brahmas, Cochins suffer in extreme heat</li>
      </ul>

      <h2 id="cold-climate-designs">Cold Climate Designs (Northern States/Canada)</h2>

      <p>
        <strong>Cold-climate coops prioritize warmth retention while maintaining essential ventilation.</strong> The challenge lies in balancing moisture removal with heat conservation—sealed coops cause more problems than drafty ones.
      </p>

      <h3>Essential Cold-Climate Modifications</h3>

      <h4>Insulation Strategies</h4>
      <ul>
        <li><strong>Wall insulation:</strong> R-13 to R-19 in stud cavities</li>
        <li><strong>Roof insulation:</strong> R-30 minimum for snow country</li>
        <li><strong>Vapor barriers:</strong> Prevent condensation in wall cavities</li>
        <li><strong>Thermal breaks:</strong> Minimize heat loss through framing</li>
      </ul>

      <p>
        For complete insulation guidance, see our <Link to="/guides/chicken-coop-insulation-guide" className="text-primary hover:underline">insulation guide</Link>.
      </p>

      <h4>Controlled Ventilation Approach</h4>
      <ul>
        <li><strong>Adjustable vents:</strong> Reduce airflow in extreme cold</li>
        <li><strong>High placement:</strong> Ventilation above roost level prevents drafts</li>
        <li><strong>Baffle systems:</strong> Indirect airflow prevents wind infiltration</li>
        <li><strong>Minimum 1 sq ft per 10 birds:</strong> Reduced from standard summer requirements</li>
      </ul>

      <h4>Structural Considerations</h4>
      <ul>
        <li><strong>Snow load calculations:</strong> Roof rated for local snow loads (varies 20-70 psf)</li>
        <li><strong>Foundation below frost line:</strong> Prevents heaving and damage</li>
        <li><strong>Steep roof pitch:</strong> 6:12 or steeper for snow shedding</li>
        <li><strong>Reinforced construction:</strong> Wind and ice storm resistance</li>
      </ul>

      <h4>Heating and Electricity</h4>
      <ul>
        <li><strong>Electrical service:</strong> 15-amp circuit minimum for heated waterers</li>
        <li><strong>GFCI protection:</strong> Required for all outdoor electrical</li>
        <li><strong>Heated waterers:</strong> Base heaters prevent freezing</li>
        <li><strong>Safe supplemental heat:</strong> Flat panel radiant heaters, never heat lamps</li>
      </ul>

      <p>
        For complete winter preparation, see our <Link to="/guides/winter-chicken-coop-guide" className="text-primary hover:underline">winter weatherization guide</Link>.
      </p>

      <h4>Cold-Weather Access Features</h4>
      <ul>
        <li><strong>Wider doors:</strong> Access while wearing bulky clothing</li>
        <li><strong>Interior storage:</strong> Feed and supplies protected from freezing</li>
        <li><strong>Easy-open latches:</strong> Operable with gloved hands</li>
        <li><strong>Shelter for humans:</strong> Weather protection during maintenance</li>
      </ul>

      <h2 id="humid-subtropical">Humid Subtropical Designs (Southeast)</h2>

      <p>
        <strong>High humidity makes moderate temperatures feel dangerous to chickens.</strong> 85°F at 90% humidity creates the same heat stress as 100°F+ in dry climates because evaporative cooling (panting) becomes ineffective.
      </p>

      <h3>Essential Humid-Climate Modifications</h3>

      <h4>Aggressive Ventilation Requirements</h4>
      <ul>
        <li><strong>Double standard ventilation:</strong> 2 square feet per bird minimum</li>
        <li><strong>Ridge and soffit vents:</strong> Full-length continuous ventilation</li>
        <li><strong>Power ventilation:</strong> Fans for extreme humidity periods</li>
        <li><strong>Cross-flow design:</strong> Multiple air paths through coop</li>
      </ul>

      <h4>Moisture Management Systems</h4>
      <ul>
        <li><strong>Raised floors:</strong> Mandatory for airflow underneath</li>
        <li><strong>Drainage systems:</strong> French drains around coop perimeter</li>
        <li><strong>Moisture barriers:</strong> Under roof to prevent condensation drips</li>
        <li><strong>Quick-dry bedding:</strong> Sand or pine shavings, never straw</li>
      </ul>

      <h4>Storm Resistance Features</h4>
      <ul>
        <li><strong>Wind rating:</strong> 120+ mph for hurricane zones</li>
        <li><strong>Impact-resistant materials:</strong> Metal or reinforced siding</li>
        <li><strong>Secure foundation:</strong> Concrete pads or deep anchoring</li>
        <li><strong>Emergency access:</strong> Removable panels for storm preparation</li>
      </ul>

      <h4>Pest and Disease Prevention</h4>
      <ul>
        <li><strong>Sealed feed storage:</strong> High humidity accelerates spoilage</li>
        <li><strong>Improved drainage:</strong> Standing water breeds mosquitoes</li>
        <li><strong>Easy cleaning access:</strong> Frequent cleaning required</li>
        <li><strong>Pest-resistant materials:</strong> Metal or treated lumber throughout</li>
      </ul>

      <h2 id="temperate-designs">Temperate Climate Designs (Pacific Northwest, Midwest)</h2>

      <p>
        <strong>Moderate climates require balanced designs that handle diverse weather patterns.</strong> These regions experience significant seasonal variation without extreme temperatures, creating different challenges.
      </p>

      <h3>All-Weather Functionality</h3>
      <ul>
        <li><strong>Variable ventilation:</strong> Adjustable systems for seasonal changes</li>
        <li><strong>Weather protection:</strong> Overhangs and windbreaks for comfort</li>
        <li><strong>Drainage planning:</strong> Essential for high-precipitation regions</li>
        <li><strong>Moderate insulation:</strong> R-7 to R-13 for comfort without overheating</li>
      </ul>

      <h3>Precipitation Management</h3>
      <ul>
        <li><strong>Gutters and downspouts:</strong> Direct water away from coop</li>
        <li><strong>Proper site grading:</strong> Slope away from foundation</li>
        <li><strong>Mud prevention:</strong> Gravel or mulch in high-traffic areas</li>
        <li><strong>Covered run areas:</strong> Outdoor access during rain</li>
      </ul>

      <h3>Seasonal Adaptation Features</h3>
      <ul>
        <li><strong>Removable wall panels:</strong> Convert between winter and summer modes</li>
        <li><strong>Adjustable roosts:</strong> Higher in winter, lower in summer</li>
        <li><strong>Flexible run systems:</strong> Expandable for good weather periods</li>
        <li><strong>Storage integration:</strong> Space for seasonal equipment</li>
      </ul>

      <h2 id="extreme-weather">Extreme Weather Considerations</h2>

      <p>
        <strong>Climate change increases extreme weather frequency across all regions.</strong> Modern coop designs must withstand not just typical conditions, but unprecedented storms, heat waves, and cold snaps.
      </p>

      <h3>Heat Wave Protection</h3>
      <ul>
        <li><strong>Emergency cooling:</strong> Misting systems, fans, frozen water bottles</li>
        <li><strong>Shade expansion:</strong> Temporary shade cloth deployment</li>
        <li><strong>Water backup:</strong> Multiple sources prevent shortages</li>
        <li><strong>Heat-tolerant landscaping:</strong> Trees and shrubs for long-term shade</li>
      </ul>

      <h3>Ice Storm Resilience</h3>
      <ul>
        <li><strong>Structural redundancy:</strong> Over-engineered roof systems</li>
        <li><strong>Power alternatives:</strong> Generator capability for heated waterers</li>
        <li><strong>Emergency access:</strong> Multiple routes to coops</li>
        <li><strong>Backup supplies:</strong> Feed and bedding storage</li>
      </ul>

      <h3>Flood Preparation</h3>
      <ul>
        <li><strong>Elevated construction:</strong> Above 100-year flood levels</li>
        <li><strong>Quick relocation:</strong> Portable coop options</li>
        <li><strong>Drainage systems:</strong> Handle extreme precipitation</li>
        <li><strong>Emergency evacuation:</strong> Transport crates and plans</li>
      </ul>

      <h3>Wildfire Considerations</h3>
      <ul>
        <li><strong>Defensible space:</strong> Cleared area around coops</li>
        <li><strong>Fire-resistant materials:</strong> Metal roofing, concrete foundations</li>
        <li><strong>Water access:</strong> Hoses and sprinkler capability</li>
        <li><strong>Evacuation planning:</strong> Rapid removal procedures</li>
      </ul>

      <h2 id="material-selection">Climate-Specific Material Selection</h2>

      <p>
        <strong>Materials that work in one climate can fail catastrophically in another.</strong> Understanding how different materials respond to temperature, humidity, and weather patterns prevents expensive failures.
      </p>

      <p>
        For comprehensive material guidance, see our <Link to="/guides/coop-materials-guide" className="text-primary hover:underline">materials selection guide</Link>.
      </p>

      <h3>Hot Climate Material Choices</h3>
      <ul>
        <li><strong>Roofing:</strong> Galvanized metal with reflective coating</li>
        <li><strong>Siding:</strong> Hardware cloth with shade fabric backing</li>
        <li><strong>Foundation:</strong> Concrete blocks for thermal mass avoidance</li>
        <li><strong>Fasteners:</strong> Stainless steel to prevent rust</li>
        <li><strong>Avoid:</strong> Asphalt shingles, solid wood siding, dark colors</li>
      </ul>

      <h3>Cold Climate Material Choices</h3>
      <ul>
        <li><strong>Roofing:</strong> Architectural shingles rated for ice dams</li>
        <li><strong>Siding:</strong> Cedar or pressure-treated plywood with house wrap</li>
        <li><strong>Foundation:</strong> Concrete or pressure-treated lumber below frost line</li>
        <li><strong>Insulation:</strong> Fiberglass batts with vapor barriers</li>
        <li><strong>Avoid:</strong> Metal siding (thermal bridging), inadequate vapor barriers</li>
      </ul>

      <h3>Humid Climate Material Choices</h3>
      <ul>
        <li><strong>Roofing:</strong> Metal with high-performance underlayment</li>
        <li><strong>Siding:</strong> Pressure-treated or naturally rot-resistant lumber</li>
        <li><strong>Foundation:</strong> Concrete with moisture barriers</li>
        <li><strong>Hardware:</strong> Galvanized or stainless throughout</li>
        <li><strong>Avoid:</strong> Untreated lumber, standard steel fasteners</li>
      </ul>

      <h3>Temperate Climate Material Choices</h3>
      <ul>
        <li><strong>Roofing:</strong> Asphalt shingles or metal, depending on precipitation</li>
        <li><strong>Siding:</strong> Composite materials or treated lumber</li>
        <li><strong>Foundation:</strong> Pressure-treated skids or concrete pads</li>
        <li><strong>Versatile fasteners:</strong> Galvanized screws throughout</li>
      </ul>

      <h2 id="seasonal-adaptations">Seasonal Adaptation Features</h2>

      <p>
        <strong>The best climate-adapted coops include features that modify for seasonal changes.</strong> Built-in flexibility ensures optimal conditions year-round rather than fixed compromises.
      </p>

      <h3>Adjustable Ventilation Systems</h3>
      <ul>
        <li><strong>Sliding panels:</strong> Increase airflow for summer, reduce for winter</li>
        <li><strong>Removable wall sections:</strong> Convert solid walls to hardware cloth</li>
        <li><strong>Hinged vents:</strong> Variable opening sizes</li>
        <li><strong>Storm shutters:</strong> Complete closure for extreme weather</li>
      </ul>

      <h3>Modular Run Systems</h3>
      <ul>
        <li><strong>Seasonal expansion:</strong> Larger runs for good weather</li>
        <li><strong>Weather protection:</strong> Covered areas for rain/snow</li>
        <li><strong>Wind barriers:</strong> Temporary windbreaks for cold periods</li>
        <li><strong>Shade deployment:</strong> Moveable shade structures</li>
      </ul>

      <h3>Adaptive Interior Features</h3>
      <ul>
        <li><strong>Adjustable roosts:</strong> Higher placement in cold weather</li>
        <li><strong>Removable insulation:</strong> Add/remove as seasons change</li>
        <li><strong>Variable bedding depth:</strong> Deeper litter for winter warmth</li>
        <li><strong>Equipment storage:</strong> Space for seasonal tools and supplies</li>
      </ul>

      <h2 id="regional-examples">Regional Design Examples</h2>

      <p>
        <strong>Specific regional adaptations demonstrate how climate drives design decisions.</strong> These examples show real-world applications of climate principles.
      </p>

      <h3>Phoenix, Arizona Adaptation</h3>
      <ul>
        <li><strong>Design priority:</strong> Maximum airflow and shade</li>
        <li><strong>Wall construction:</strong> Hardware cloth with 70% shade fabric</li>
        <li><strong>Roof system:</strong> White metal with 36-inch overhangs</li>
        <li><strong>Cooling features:</strong> Misting system operating 2-5 PM daily</li>
        <li><strong>Elevation:</strong> 24-inch minimum clearance for airflow</li>
      </ul>

      <h3>Minnesota Winter Adaptation</h3>
      <ul>
        <li><strong>Design priority:</strong> Insulation with controlled ventilation</li>
        <li><strong>Wall construction:</strong> 2×6 framing with R-19 insulation</li>
        <li><strong>Roof system:</strong> Steep pitch for snow load, R-30 insulation</li>
        <li><strong>Heating features:</strong> 15-amp electrical for heated waterers</li>
        <li><strong>Foundation:</strong> Concrete below 42-inch frost line</li>
      </ul>

      <h3>Florida Hurricane Adaptation</h3>
      <ul>
        <li><strong>Design priority:</strong> Storm resistance and moisture management</li>
        <li><strong>Wall construction:</strong> Metal siding on engineered frame</li>
        <li><strong>Roof system:</strong> Impact-rated metal, 120+ mph wind rating</li>
        <li><strong>Foundation:</strong> Concrete pad with anchor bolts</li>
        <li><strong>Drainage:</strong> French drains and elevated construction</li>
      </ul>

      <h3>Pacific Northwest Rain Adaptation</h3>
      <ul>
        <li><strong>Design priority:</strong> Weather protection and drainage</li>
        <li><strong>Wall construction:</strong> Cedar siding with house wrap</li>
        <li><strong>Roof system:</strong> Architectural shingles with full gutters</li>
        <li><strong>Run coverage:</strong> 50% covered for year-round outdoor access</li>
        <li><strong>Site preparation:</strong> Extensive gravel base for drainage</li>
      </ul>

      <h2 id="common-mistakes">Climate-Specific Mistakes to Avoid</h2>

      <p>
        <strong>Climate-inappropriate designs create expensive failures and unhealthy flocks.</strong> Understanding these common mistakes prevents costly rebuilds and bird losses. For more common building errors, see our <Link to="/guides/expensive-coop-mistakes" className="text-primary hover:underline">expensive coop mistakes guide</Link>.
      </p>

      <h3>Hot Climate Mistakes</h3>
      <ul>
        <li><strong>Insulation installation:</strong> Traps heat rather than providing cooling</li>
        <li><strong>Solid wall construction:</strong> Prevents essential airflow</li>
        <li><strong>Dark-colored materials:</strong> Absorb and retain dangerous heat</li>
        <li><strong>Inadequate shade:</strong> Direct sun exposure causes heat stroke</li>
        <li><strong>Water rationing:</strong> Insufficient waterers for increased consumption</li>
      </ul>

      <h3>Cold Climate Mistakes</h3>
      <ul>
        <li><strong>Over-sealing coops:</strong> Creates dangerous moisture buildup</li>
        <li><strong>Heat lamp usage:</strong> Fire hazard that kills chickens annually</li>
        <li><strong>Inadequate insulation:</strong> Wasted heating energy</li>
        <li><strong>Poor ventilation placement:</strong> Creates drafts on roosting birds</li>
        <li><strong>Insufficient electrical:</strong> Cannot power heated waterers safely</li>
      </ul>

      <h3>Humid Climate Mistakes</h3>
      <ul>
        <li><strong>Standard ventilation rates:</strong> Inadequate for moisture removal</li>
        <li><strong>Poor drainage planning:</strong> Creates breeding ground for disease</li>
        <li><strong>Insufficient storm preparation:</strong> Structural failure in hurricanes</li>
        <li><strong>Moisture-sensitive materials:</strong> Rapid rot and deterioration</li>
        <li><strong>Inadequate pest control:</strong> High humidity increases pest pressure</li>
      </ul>

      <h3>Temperate Climate Mistakes</h3>
      <ul>
        <li><strong>Fixed ventilation systems:</strong> Cannot adapt to seasonal changes</li>
        <li><strong>Inadequate drainage:</strong> Problems during high-precipitation periods</li>
        <li><strong>Inflexible design:</strong> Cannot accommodate weather extremes</li>
        <li><strong>Seasonal access problems:</strong> Maintenance difficulties in bad weather</li>
      </ul>

      <h2 id="plan-selection">Choosing Plans for Your Climate</h2>

      <p>
        <strong>Climate should be the primary factor in plan selection, not appearance or cost.</strong> Use our <Link to="/guides/free-coop-plans-quality-checklist" className="text-primary hover:underline">plan quality checklist</Link> to evaluate climate-specific features in any plans you're considering.
      </p>

      <h3>Essential Plan Features by Climate</h3>

      <h4>Hot/Arid Requirements</h4>
      <ul>
        <li>Maximum ventilation specifications (2+ sq ft per bird)</li>
        <li>Shade calculation and overhang details</li>
        <li>Cooling system integration options</li>
        <li>Heat-resistant material specifications</li>
        <li>Elevation requirements for airflow</li>
      </ul>

      <h4>Cold Climate Requirements</h4>
      <ul>
        <li>Insulation specifications and installation details</li>
        <li>Snow load calculations for your region</li>
        <li>Electrical planning for heated equipment</li>
        <li>Vapor barrier and moisture management</li>
        <li>Adjustable ventilation systems</li>
      </ul>

      <h4>Humid Climate Requirements</h4>
      <ul>
        <li>Enhanced ventilation calculations</li>
        <li>Storm resistance engineering</li>
        <li>Drainage system specifications</li>
        <li>Moisture-resistant material lists</li>
        <li>Pest prevention features</li>
      </ul>

      <h3>Questions to Ask Plan Providers</h3>
      <ul>
        <li>Has this design been tested in my climate zone?</li>
        <li>What modifications are recommended for my region?</li>
        <li>Are material alternatives provided for different climates?</li>
        <li>Does ventilation sizing account for local humidity levels?</li>
        <li>Are structural calculations appropriate for local weather loads?</li>
      </ul>

      <h2>Climate-Adapted Design: The Foundation of Successful Chicken Keeping</h2>

      <p>
        <strong>Climate determines every aspect of chicken coop functionality—from basic survival to egg production optimization.</strong> Chickens in climate-appropriate housing are healthier, more productive, and require significantly less management than birds struggling against inappropriate environments.
      </p>

      <p>
        <strong>The investment perspective:</strong> Climate-specific plans may cost slightly more than generic alternatives, but they prevent the much higher costs of rebuilding failed coops, replacing heat-stressed or frozen birds, and dealing with health problems caused by environmental stress.
      </p>

      <h3>Long-Term Benefits of Climate-Appropriate Design</h3>
      <ul>
        <li><strong>Lower mortality:</strong> Environmental stress is the leading cause of backyard chicken deaths</li>
        <li><strong>Higher production:</strong> Comfortable birds lay more consistently</li>
        <li><strong>Reduced maintenance:</strong> Appropriate materials last longer in local conditions</li>
        <li><strong>Lower energy costs:</strong> Efficient designs reduce heating/cooling needs</li>
        <li><strong>Greater enjoyment:</strong> Successful flocks are more rewarding to keep</li>
      </ul>

      <p>
        Climate adaptation isn't an optional upgrade—it's the fundamental requirement for successful chicken keeping. Choose plans designed specifically for your weather patterns rather than hoping generic designs will work in your environment.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>Can I modify generic plans for my climate?</h3>
      <p>
        Basic modifications are possible (adding insulation, increasing ventilation), but fundamental design changes like structural requirements for snow loads or hurricane resistance require professionally engineered plans. It's usually more cost-effective to choose climate-specific plans.
      </p>

      <h3>How do I know what climate zone I'm in for coop planning?</h3>
      <p>
        Use your USDA Hardiness Zone for cold tolerance, but also consider local factors: summer high temperatures, humidity levels, precipitation patterns, and extreme weather frequency. Local extension services often provide specific guidance.
      </p>

      <h3>Do I need different plans for each season?</h3>
      <p>
        No, but your plans should include seasonal adaptation features like adjustable ventilation, removable panels, or modular components. Fixed designs that work year-round are compromises that don't optimize for any season.
      </p>

      <h3>What's the most important climate factor for chicken health?</h3>
      <p>
        Heat management is typically most critical because chickens cannot sweat. Even cold-climate chickens face summer heat stress, while heat-tolerant breeds can often handle cold better than heavy breeds handle heat.
      </p>

      <h3>Are climate-specific plans worth the extra cost?</h3>
      <p>
        Absolutely. The cost difference between generic and climate-specific plans ($20-50) is insignificant compared to rebuilding a failed coop ($500-1,500) or losing birds to environmental stress. Climate-appropriate housing is essential, not optional.
      </p>
    </BlogLayout>
  );
};

// Interactive Climate Zone Selector Tool
const ClimateZoneSelector = () => {
  const [selectedClimate, setSelectedClimate] = useState<string | null>(null);

  const climateZones = [
    {
      id: 'hot-arid',
      name: 'Hot & Arid',
      icon: Sun,
      regions: 'Arizona, Nevada, New Mexico, West Texas',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30',
      borderColor: 'border-orange-200 dark:border-orange-800',
      characteristics: ['100°F+ summers', 'Low humidity', '40°F+ daily swings', 'Intense sun'],
      priorities: ['Maximum ventilation', 'Shade structures', 'Reflective materials', 'Misting systems'],
      avoid: ['Insulation', 'Solid walls', 'Dark colors', 'Concrete floors'],
      ventilation: '2+ sq ft per bird',
      insulation: 'None - traps heat',
    },
    {
      id: 'cold',
      name: 'Cold & Harsh',
      icon: Snowflake,
      regions: 'Minnesota, Wisconsin, Montana, Canada',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      borderColor: 'border-blue-200 dark:border-blue-800',
      characteristics: ['Below 0°F winters', 'Heavy snow loads', 'Short summers', 'Ice storms'],
      priorities: ['R-19+ wall insulation', 'R-30 roof insulation', 'Heated waterers', 'Steep roof pitch'],
      avoid: ['Heat lamps', 'Sealed ventilation', 'Metal siding', 'Shallow foundations'],
      ventilation: '1 sq ft per 10 birds (adjustable)',
      insulation: 'R-13 to R-19 walls, R-30 roof',
    },
    {
      id: 'humid',
      name: 'Humid Subtropical',
      icon: Droplets,
      regions: 'Florida, Georgia, Louisiana, Carolinas',
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      characteristics: ['70-90% humidity', 'Hurricane risk', 'Heavy rain', 'Mild winters'],
      priorities: ['Double ventilation', 'Storm resistance', 'French drains', 'Raised floors'],
      avoid: ['Standard ventilation', 'Untreated lumber', 'Poor drainage', 'Straw bedding'],
      ventilation: '2 sq ft per bird minimum',
      insulation: 'Minimal - focus on airflow',
    },
    {
      id: 'temperate',
      name: 'Temperate',
      icon: Wind,
      regions: 'Pacific NW, Midwest, Mid-Atlantic',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      characteristics: ['Mild extremes', 'High precipitation', 'Seasonal variation', 'Moderate humidity'],
      priorities: ['Variable ventilation', 'Drainage systems', 'Covered runs', 'Flexible design'],
      avoid: ['Fixed systems', 'Poor drainage', 'Inflexible layouts', 'Single-season design'],
      ventilation: '1-2 sq ft per bird (adjustable)',
      insulation: 'R-7 to R-13 (removable)',
    },
  ];

  const selected = climateZones.find(c => c.id === selectedClimate);

  return (
    <Card className="my-8 border-2 border-primary/20">
      <CardHeader className="bg-primary/5">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Climate Zone Design Selector
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Select your climate zone to see specific design requirements and recommendations
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Climate Zone Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {climateZones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedClimate(zone.id)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedClimate === zone.id
                  ? `${zone.bgColor} ${zone.borderColor} shadow-md`
                  : 'border-border hover:border-primary/30 hover:bg-muted/50'
              }`}
            >
              <zone.icon className={`h-8 w-8 mb-2 ${
                selectedClimate === zone.id ? 'text-primary' : 'text-muted-foreground'
              }`} />
              <h4 className="font-semibold text-sm">{zone.name}</h4>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{zone.regions}</p>
            </button>
          ))}
        </div>

        {/* Selected Climate Details */}
        {selected && (
          <div className={`p-6 rounded-xl ${selected.bgColor} ${selected.borderColor} border-2`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${selected.color}`}>
                <selected.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl">{selected.name} Climate</h3>
                <p className="text-sm text-muted-foreground">{selected.regions}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Characteristics */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  Climate Characteristics
                </h4>
                <ul className="space-y-1">
                  {selected.characteristics.map((char, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Priorities */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Design Priorities
                </h4>
                <ul className="space-y-1">
                  {selected.priorities.map((priority, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      {priority}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Avoid */}
              <div>
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  Avoid These Mistakes
                </h4>
                <ul className="space-y-1">
                  {selected.avoid.map((item, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <AlertTriangle className="h-3 w-3 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Specs */}
              <div>
                <h4 className="font-semibold text-sm mb-2">Quick Specifications</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ventilation:</span>
                    <Badge variant="outline">{selected.ventilation}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Insulation:</span>
                    <Badge variant="outline">{selected.insulation}</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <Link to={`#${selected.id}-designs`}>
                <Button className="w-full">
                  View Detailed {selected.name} Design Guide
                </Button>
              </Link>
            </div>
          </div>
        )}

        {!selected && (
          <div className="text-center py-8 text-muted-foreground">
            <MapPin className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Select your climate zone above to see specific design requirements</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClimateChickenCoopGuide;
