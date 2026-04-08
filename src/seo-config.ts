// Central SEO configuration — single source of truth for all route metadata
export interface RouteSEO {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
}

const SITE_URL = 'https://buildingachickencoopplans.com';

export const seoConfig: Record<string, RouteSEO> = {
  '/': {
    title: 'Free DIY Chicken Coop Plans & Building Guides | CoopCraft',
    description: 'Browse free DIY chicken coop plans with step-by-step instructions, full materials lists, and cost breakdowns. Beginner-friendly designs for every flock size and budget.',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/guides': {
    title: 'Chicken Coop Building Guides & Tutorials | CoopCraft',
    description: 'Free chicken coop building guides covering design, materials, costs, ventilation, insulation, and more. Step-by-step tutorials for every skill level.',
    canonical: `${SITE_URL}/guides`,
    ogType: 'website',
  },
  '/guides/cost-breakdown-2025': {
    title: 'How Much Does It Cost to Build a Chicken Coop in 2026?',
    description: 'Real 2026 chicken coop building costs with dollar-by-dollar breakdowns for small, medium, and large coops. Materials list and budget-saving tips included.',
    canonical: `${SITE_URL}/guides/cost-breakdown-2025`,
  },
  '/guides/how-to-build-chicken-coop': {
    title: 'How to Build a Chicken Coop: Complete 10-Day Guide (2026)',
    description: 'Step-by-step instructions to build your own chicken coop in 10 days. Full materials list, tools, framing, roofing, and predator-proofing for beginners.',
    canonical: `${SITE_URL}/guides/how-to-build-chicken-coop`,
  },
  '/guides/small-chicken-coop-plans': {
    title: 'Small Chicken Coop Plans: Designs for 4–8 Birds (Free Guides)',
    description: 'Free small chicken coop plans for 4–8 birds. Compact designs with full materials lists, cut diagrams, and step-by-step building instructions.',
    canonical: `${SITE_URL}/guides/small-chicken-coop-plans`,
  },
  '/guides/4x4-chicken-coop-plans': {
    title: '4x4 Chicken Coop Plans: How Many Chickens Fit + Full Build Guide',
    description: 'A 4x4 coop fits 4 chickens comfortably. Get free 4x4 chicken coop plans with materials lists, cut diagrams, and step-by-step building instructions.',
    canonical: `${SITE_URL}/guides/4x4-chicken-coop-plans`,
  },
  '/guides/chicken-coop-size-calculator': {
    title: 'Chicken Coop Size Calculator: Space Per Chicken (2026)',
    description: 'Use our free chicken coop size calculator to get exact square footage per hen. Includes run size, nesting box count, and breed-specific adjustments.',
    canonical: `${SITE_URL}/guides/chicken-coop-size-calculator`,
  },
  '/guides/coop-materials-guide': {
    title: 'Chicken Coop Materials List: Complete 2026 Buying Guide',
    description: 'Exact chicken coop materials list with lumber, hardware, roofing, and wire specs. Includes weather-resistance comparison and where to buy each item.',
    canonical: `${SITE_URL}/guides/coop-materials-guide`,
  },
  '/guides/coop-permit-guide': {
    title: 'Do You Need a Permit to Build a Chicken Coop? State Guide',
    description: 'Chicken coop permit rules explained state by state. Find out if your city requires a permit, HOA restrictions, and how to get approval fast.',
    canonical: `${SITE_URL}/guides/coop-permit-guide`,
  },
  '/guides/predator-proof-coop-guide': {
    title: 'Predator-Proof Chicken Coop: Hardware, Locks & Aprons',
    description: 'Stop losing chickens to predators. This guide covers hardware cloth, predator aprons, locks, and proven fencing that keeps raccoons and coyotes out.',
    canonical: `${SITE_URL}/guides/predator-proof-coop-guide`,
  },
  '/guides/coop-ventilation-guide': {
    title: 'Chicken Coop Ventilation Guide: Design & Air Flow Tips',
    description: 'Proper chicken coop ventilation prevents ammonia buildup, frostbite, and disease. Learn ventilation design, square footage rules, and common mistakes.',
    canonical: `${SITE_URL}/guides/coop-ventilation-guide`,
  },
  '/guides/arizona-chicken-coop-guide': {
    title: 'Arizona Chicken Coop Guide: Heat, Permits & Local Zoning Rules',
    description: 'Build a chicken coop that survives Arizona heat. Covers shade design, ventilation for 110°F+ days, Maricopa County permits, and Phoenix zoning rules.',
    canonical: `${SITE_URL}/guides/arizona-chicken-coop-guide`,
  },
  '/guides/expensive-coop-mistakes': {
    title: '7 Chicken Coop Mistakes That Cost Beginners $1,000+ (Avoid These)',
    description: 'The most expensive chicken coop building mistakes — wrong materials, undersized vents, skipping the apron, and more. Learn what pros do differently.',
    canonical: `${SITE_URL}/guides/expensive-coop-mistakes`,
  },
  '/guides/urban-chicken-coop-plans': {
    title: 'Urban Chicken Coop Plans: Small-Space Designs + City Zoning Guide',
    description: 'Compact chicken coop plans designed for urban backyards. Includes city zoning requirements, noise reduction tips, and neighbor-friendly designs.',
    canonical: `${SITE_URL}/guides/urban-chicken-coop-plans`,
  },
  '/guides/free-vs-premium-plans': {
    title: 'Free vs Premium Chicken Coop Plans: Which Are Worth It?',
    description: 'Compare free and premium chicken coop plans. We break down quality, detail level, support, and whether paid plans are worth the investment.',
    canonical: `${SITE_URL}/guides/free-vs-premium-plans`,
  },
  '/guides/winter-chicken-coop-guide': {
    title: 'Winter Chicken Coop Guide: Insulation, Heating & Cold Weather Tips',
    description: 'Prepare your chicken coop for winter with insulation, ventilation, heating, and lighting tips. Keep your flock laying eggs through the coldest months.',
    canonical: `${SITE_URL}/guides/winter-chicken-coop-guide`,
  },
  '/guides/mobile-chicken-coop-plans': {
    title: 'Mobile Chicken Coop Plans: Tractors, A-Frames & Portable Designs',
    description: 'Free mobile chicken coop plans including chicken tractors, A-frames, and portable designs. Move your flock to fresh pasture with these lightweight builds.',
    canonical: `${SITE_URL}/guides/mobile-chicken-coop-plans`,
  },
  '/guides/chicken-coop-flooring-guide': {
    title: 'Chicken Coop Flooring Guide: Best Materials for Health & Easy Cleaning',
    description: 'Concrete, sand, rubber mats, or deep litter — a complete comparison of chicken coop flooring materials with costs, ease of cleaning, and flock health impact.',
    canonical: `${SITE_URL}/guides/chicken-coop-flooring-guide`,
  },
  '/guides/large-chicken-coop-plans': {
    title: 'Large Chicken Coop Plans: Walk-In Designs for 20–50+ Birds',
    description: 'Free large chicken coop plans for 20–50+ birds. Walk-in designs with full materials lists, ventilation planning, and run sizing for bigger flocks.',
    canonical: `${SITE_URL}/guides/large-chicken-coop-plans`,
  },
  '/guides/chicken-coop-insulation-guide': {
    title: 'Chicken Coop Insulation Guide: Do You Need It? (2026)',
    description: 'Complete chicken coop insulation guide: best materials, winter vs summer, cost, and whether your flock actually needs insulation in your climate.',
    canonical: `${SITE_URL}/guides/chicken-coop-insulation-guide`,
  },
  '/guides/free-chicken-coop-plans': {
    title: 'Free Chicken Coop Plans: 25 Best Sources Reviewed [2026]',
    description: 'Download free chicken coop plans with detailed materials lists, cut diagrams, and step-by-step instructions. Designs for every flock size and budget.',
    canonical: `${SITE_URL}/guides/free-chicken-coop-plans`,
  },
  '/guides/chicken-coop-lighting-guide': {
    title: 'Chicken Coop Lighting Guide: Bulbs, Timers & Egg Production Tips',
    description: 'Chickens need 14–16 hours of light to lay consistently. Learn how to add supplemental lighting to your coop safely and on a timer.',
    canonical: `${SITE_URL}/guides/chicken-coop-lighting-guide`,
  },
  '/guides/chicken-run-design-guide': {
    title: 'Chicken Run Design Guide: Size, Fencing & Predator-Proofing',
    description: 'Design a safe chicken run with proper sizing (10 sq ft per bird), predator-proof fencing, and covered roof options. Free plans and layout ideas.',
    canonical: `${SITE_URL}/guides/chicken-run-design-guide`,
  },
  '/guides/chicken-coop-cleaning-guide': {
    title: 'How Often to Clean a Chicken Coop (And The Easy Way)',
    description: 'How often to clean your chicken coop, the deep-litter method, daily vs weekly tasks, and the cleaning supplies that actually work. Beginner-friendly.',
    canonical: `${SITE_URL}/guides/chicken-coop-cleaning-guide`,
  },
  '/guides/free-coop-plans-quality-checklist': {
    title: 'Free Coop Plans Quality Checklist: 12 Things to Check First',
    description: 'Not all free chicken coop plans are worth building. Use this 12-point checklist to evaluate plan quality before you buy materials or start cutting wood.',
    canonical: `${SITE_URL}/guides/free-coop-plans-quality-checklist`,
  },
  '/guides/small-backyard-coop-plans': {
    title: 'Small Backyard Chicken Coop Plans: Designs for Yards Under 500 sq ft',
    description: 'Chicken coop plans designed for small backyards. Space-efficient designs for 3–6 hens with integrated runs, vertical space, and easy access for cleaning.',
    canonical: `${SITE_URL}/guides/small-backyard-coop-plans`,
  },
  '/guides/beginner-chicken-coop-plans': {
    title: 'Beginner Chicken Coop Plans: Start Here If You\'ve Never Built One',
    description: 'First-time builder? These beginner chicken coop plans use basic tools and simple joinery. Step-by-step instructions with photos for every stage.',
    canonical: `${SITE_URL}/guides/beginner-chicken-coop-plans`,
  },
  '/guides/climate-chicken-coop-guide': {
    title: 'Chicken Coop Design by Climate: Hot, Cold & Humid Zones',
    description: 'Build the right coop for your weather. From arctic winters to desert heat, here\'s how climate affects ventilation, insulation, roofing, and floor choice.',
    canonical: `${SITE_URL}/guides/climate-chicken-coop-guide`,
  },
  '/recommended-plans': {
    title: 'Best Chicken Coop Plans 2026: Expert-Reviewed & Rated',
    description: 'Expert-reviewed chicken coop plans rated by difficulty, cost, and build quality. Curated collection of the best DIY coop designs with detailed comparisons.',
    canonical: `${SITE_URL}/recommended-plans`,
  },
  '/plan-reviews': {
    title: 'Chicken Coop Plan Reviews & Ratings | CoopCraft',
    description: 'Honest reviews and ratings of popular chicken coop plans. Compare features, difficulty, cost, and quality before you buy or build.',
    canonical: `${SITE_URL}/plan-reviews`,
  },
  '/guides/nesting-box-guide': {
    title: 'Chicken Coop Nesting Boxes: Size, Placement & DIY Guide',
    description: 'How many nesting boxes per hen, exact dimensions by breed, placement tips, and DIY build instructions. The complete nesting box guide for 2026.',
    canonical: `${SITE_URL}/guides/nesting-box-guide`,
  },
  '/guides/chicken-coop-roofing-guide': {
    title: 'Chicken Coop Roofing Guide: Metal vs Shingles + Pitch Calculator',
    description: 'Compare corrugated metal, asphalt shingles, and polycarbonate for your chicken coop roof. Includes pitch recommendations by climate and a cost calculator.',
    canonical: `${SITE_URL}/guides/chicken-coop-roofing-guide`,
  },
  '/guides/best-chicken-breeds-beginners': {
    title: 'Best Chicken Breeds for Beginners: Top 10 Picks by Climate & Eggs',
    description: 'The best chicken breeds for first-time keepers ranked by egg production, temperament, and climate tolerance. Includes an interactive breed finder tool.',
    canonical: `${SITE_URL}/guides/best-chicken-breeds-beginners`,
  },
  '/guides/chicken-coop-plans': {
    title: 'Chicken Coop Plans: 20 Free DIY Designs for Every Backyard (2026)',
    description: 'Free chicken coop plans organized by flock size, style, budget, and climate. Every plan includes materials lists, cut diagrams, and step-by-step instructions.',
    canonical: `${SITE_URL}/guides/chicken-coop-plans`,
    ogType: 'article',
  },
  '/guides/chicken-coop-plans-4-chickens': {
    title: 'Chicken Coop Plans for 4 Chickens: 5 Beginner-Friendly Designs (2026)',
    description: 'Five proven chicken coop plans sized for 4 hens. Includes the Classic 4x4, A-Frame, Tractor, Urban Corner, and Converted Shed with costs and materials.',
    canonical: `${SITE_URL}/guides/chicken-coop-plans-4-chickens`,
    ogType: 'article',
  },
  '/guides/a-frame-chicken-coop-plans': {
    title: 'A-Frame Chicken Coop Plans: Simple Weekend Build Designs (2026)',
    description: 'Three free A-frame chicken coop plans from $100-400. The simplest coop you can build — fewest cuts, lowest cost, and a weekend build for 3-5 hens.',
    canonical: `${SITE_URL}/guides/a-frame-chicken-coop-plans`,
    ogType: 'article',
  },
  '/guides/walk-in-chicken-coop-plans': {
    title: 'Walk-In Chicken Coop Plans: Full-Size Designs for 10+ Hens (2026)',
    description: 'Five walk-in chicken coop plans from 6x8 to 10x16. Stand-up access, easy cleaning, and room for 10-24 hens. DIY costs from $850 to $2,700.',
    canonical: `${SITE_URL}/guides/walk-in-chicken-coop-plans`,
    ogType: 'article',
  },
  '/guides/chicken-coop-plans-materials-list': {
    title: 'Chicken Coop Plans with Materials List: Free Downloadable Guide (2026)',
    description: 'Complete chicken coop materials lists with 2026 prices for 4x4, 4x8, and 8x8 coops. Exact quantities, specs, and where to buy every item.',
    canonical: `${SITE_URL}/guides/chicken-coop-plans-materials-list`,
    ogType: 'article',
  },
  '/shop': {
    title: 'Shop Chicken Coop Plans | CoopCraft',
    description: 'Shop premium chicken coop plans and building kits. Coming soon - sign up to be notified when our store launches.',
    canonical: `${SITE_URL}/shop`,
  },
};

export function getSEO(path: string): RouteSEO {
  return seoConfig[path] || seoConfig['/'];
}

export { SITE_URL };
