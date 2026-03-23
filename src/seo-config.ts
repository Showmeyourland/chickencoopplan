// Central SEO configuration — single source of truth for all route metadata
// Used by both the Vite static pre-rendering plugin AND react-helmet-async at runtime

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
    title: 'How Much Does It Cost to Build a Chicken Coop? [2026 Guide]',
    description: 'DIY chicken coop costs range from $100 to $4,000+. Get a complete breakdown by coop size, type, and materials — plus what you\'ll pay for DIY vs. hiring a contractor.',
    canonical: `${SITE_URL}/guides/cost-breakdown-2025`,
  },
  '/guides/how-to-build-chicken-coop': {
    title: 'How to Build a Chicken Coop: Step-by-Step Guide for Beginners',
    description: 'Learn how to build a chicken coop from scratch with our complete step-by-step guide. Includes materials list, tools needed, and beginner-friendly instructions.',
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
    title: 'Chicken Coop Size Calculator: How Much Space Per Chicken?',
    description: 'Use our free chicken coop size calculator. Standard rule: 4 sq ft per chicken inside + 10 sq ft per chicken in the run. Includes nesting box and roost bar sizing.',
    canonical: `${SITE_URL}/guides/chicken-coop-size-calculator`,
  },
  '/guides/coop-materials-guide': {
    title: 'Chicken Coop Materials Guide: What to Buy & What to Skip',
    description: 'Lumber, hardware cloth, roofing, flooring, insulation — a complete chicken coop materials list with costs, ratings, and what the pros actually use.',
    canonical: `${SITE_URL}/guides/coop-materials-guide`,
  },
  '/guides/coop-permit-guide': {
    title: 'Do You Need a Permit to Build a Chicken Coop? (State Guide)',
    description: 'Most areas require a permit for coops over 100–120 sq ft. Find out if your state and city require a building permit before you break ground — and what happens if you skip it.',
    canonical: `${SITE_URL}/guides/coop-permit-guide`,
  },
  '/guides/predator-proof-coop-guide': {
    title: 'Predator-Proof Chicken Coop Guide: Hardware, Locks & Aprons',
    description: 'Hardware cloth, apron fencing, automatic doors, and secure latches — a complete guide to protecting your flock from foxes, raccoons, coyotes, and hawks.',
    canonical: `${SITE_URL}/guides/predator-proof-coop-guide`,
  },
  '/guides/coop-ventilation-guide': {
    title: 'Chicken Coop Ventilation Guide: How Much & Where to Put It',
    description: 'Chickens need 1 sq ft of ventilation per 10 sq ft of coop space. Here\'s how to calculate it, where to install vents, and how to avoid the cold drafts that kill flocks.',
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
    title: 'Chicken Coop Insulation Guide: Best Materials + What to Avoid',
    description: 'Should you insulate your chicken coop? Yes — if temps drop below 20°F. Here\'s exactly what to use, what to skip, and how to install it without harming your flock.',
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
    title: 'How Often Should You Clean a Chicken Coop? Schedule + Deep Clean Guide',
    description: 'Most backyard coops need a full clean every 1–2 months. Here\'s a week-by-week cleaning schedule, plus a deep clean checklist to keep your flock healthy year-round.',
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
    title: 'Best Chicken Coop Plans - Expert Reviews Coming Soon | CoopCraft',
    description: 'Get notified when our expert-reviewed chicken coop plans launch. Curated collection of the best DIY coop designs with detailed ratings and comparisons.',
    canonical: `${SITE_URL}/recommended-plans`,
  },
  '/plan-reviews': {
    title: 'Chicken Coop Plan Reviews & Ratings | CoopCraft',
    description: 'Honest reviews and ratings of popular chicken coop plans. Compare features, difficulty, cost, and quality before you buy or build.',
    canonical: `${SITE_URL}/plan-reviews`,
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
