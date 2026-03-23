export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorCredentials: string;
  date: string;
  updatedDate?: string;
  readingTime: number;
  category: ArticleCategory;
  tags: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  projectTime?: string;
  estimatedCost?: string;
  costRange?: string;
  featured?: boolean;
  image?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export type ArticleCategory = 
  | 'Building'
  | 'Costs'
  | 'Planning'
  | 'Care'
  | 'Troubleshooting';

export const categories: ArticleCategory[] = [
  'Building',
  'Costs',
  'Planning',
  'Care',
  'Troubleshooting'
];

export const difficultyLevels = ['Beginner', 'Intermediate', 'Advanced'] as const;

export const articles: Article[] = [
  {
    id: 'nesting-box-guide',
    slug: 'nesting-box-guide',
    title: 'Chicken Coop Nesting Boxes: Complete Size, Placement & DIY Guide (2026)',
    excerpt: 'How many nesting boxes do you need? One per 3–4 hens. Get exact dimensions by breed size, placement tips, bedding recommendations, and DIY build instructions.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Coop Design Specialist',
    date: '2026-03-23',
    updatedDate: '2026-03-23',
    readingTime: 20,
    category: 'Building',
    tags: ['Nesting Boxes', 'Eggs', 'DIY', 'Coop Interior', 'Beginner'],
    difficulty: 'Beginner',
    costRange: '$15-$50',
    featured: true,
    image: '/src/assets/guide-nesting-boxes.jpg',
    seo: {
      metaTitle: 'Chicken Coop Nesting Boxes: How Many, Size & Placement Guide',
      metaDescription: 'How many nesting boxes do you need? One per 3–4 hens. Get exact dimensions by breed size, placement tips, and DIY build instructions.',
    },
  },
  {
    id: 'chicken-coop-roofing-guide',
    slug: 'chicken-coop-roofing-guide',
    title: 'Chicken Coop Roofing Guide: Materials, Pitch & Installation (2026)',
    excerpt: 'Compare corrugated metal, asphalt shingles, and polycarbonate for your chicken coop roof. Includes pitch recommendations by climate and a roofing cost calculator.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Construction Specialist',
    date: '2026-03-23',
    updatedDate: '2026-03-23',
    readingTime: 25,
    category: 'Building',
    tags: ['Roofing', 'Materials', 'Construction', 'Metal Roof', 'Shingles'],
    difficulty: 'Intermediate',
    costRange: '$60-$200',
    featured: true,
    image: '/src/assets/guide-roofing.jpg',
    seo: {
      metaTitle: 'Chicken Coop Roofing Guide: Metal vs Shingles + Pitch Calculator',
      metaDescription: 'Compare corrugated metal, asphalt shingles, and polycarbonate for your chicken coop roof. Includes pitch by climate and a cost calculator.',
    },
  },
  {
    id: 'best-chicken-breeds-beginners',
    slug: 'best-chicken-breeds-beginners',
    title: 'Best Chicken Breeds for Beginners: Top 10 Ranked by Eggs & Climate (2026)',
    excerpt: 'The best chicken breeds for first-time keepers ranked by egg production, temperament, and climate tolerance. Includes an interactive breed finder tool.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Flock Management Specialist',
    date: '2026-03-23',
    updatedDate: '2026-03-23',
    readingTime: 22,
    category: 'Care',
    tags: ['Breeds', 'Beginners', 'Egg Production', 'Climate', 'Flock Management'],
    difficulty: 'Beginner',
    costRange: '$3-$30/bird',
    featured: true,
    image: '/src/assets/guide-breeds.jpg',
    seo: {
      metaTitle: 'Best Chicken Breeds for Beginners: Top 10 Picks by Climate & Eggs',
      metaDescription: 'The best chicken breeds for first-time keepers ranked by egg production, temperament, and climate tolerance. Interactive breed finder tool.',
    },
  },
  {
    id: 'climate-chicken-coop-guide',
    slug: 'climate-chicken-coop-guide',
    title: 'Chicken Coop Plans by Climate: Weather-Specific Designs That Actually Work (2026)',
    excerpt: 'Climate-specific chicken coop designs for hot, cold, humid, and temperate regions. Expert adaptations for extreme weather conditions that keep flocks healthy year-round.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Climate Adaptation Specialist',
    date: '2025-02-02',
    updatedDate: '2025-02-02',
    readingTime: 40,
    category: 'Building',
    tags: ['Climate', 'Weather', 'Regional', 'Hot Climate', 'Cold Climate', 'Humid', 'Temperate'],
    difficulty: 'Intermediate',
    costRange: '$600-$2,500',
    featured: true,
    image: '/src/assets/guide-climate.jpg',
    seo: {
      metaTitle: 'Chicken Coop Design by Climate: Hot, Cold & Humid Zones',
      metaDescription: 'Build the right coop for your weather. From arctic winters to desert heat, here\'s how climate affects ventilation, insulation, roofing, and floor choice.',
    },
  },
  {
    id: 'beginner-chicken-coop-plans',
    slug: 'beginner-chicken-coop-plans',
    title: 'Beginner-Friendly Chicken Coop Plans: Complete Guide for First-Time Builders (2026)',
    excerpt: 'Step-by-step chicken coop plans for beginners. No experience needed. Basic tools only. Start your chicken journey with confidence using beginner-tested designs.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Beginner Builder Coach',
    date: '2025-02-02',
    updatedDate: '2025-02-02',
    readingTime: 35,
    category: 'Building',
    tags: ['Beginner', 'First-Time Builder', 'Step-by-Step', 'Easy Build', 'Basic Tools'],
    difficulty: 'Beginner',
    costRange: '$400-$800',
    featured: true,
    image: '/src/assets/guide-beginner.jpg',
    seo: {
      metaTitle: 'Beginner Chicken Coop Plans: Start Here If You\'ve Never Built One',
      metaDescription: 'Step-by-step chicken coop plans for beginners. No experience needed. Basic tools only. Start your chicken journey with confidence.',
    },
  },
  {
    id: 'small-backyard-coop-plans',
    slug: 'small-backyard-coop-plans',
    title: 'Small Backyard Chicken Coop Plans: Space-Smart Designs for Urban Lots (2026)',
    excerpt: 'Expert-designed chicken coop plans optimized for small backyards. Space-efficient designs for 4-8 hens that maximize your urban lot without compromising bird welfare.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Urban Lot Specialist',
    date: '2025-02-02',
    updatedDate: '2025-02-02',
    readingTime: 30,
    category: 'Planning',
    tags: ['Small Backyard', 'Urban Lots', 'Space Efficiency', 'Compact Design', '4-8 Birds'],
    difficulty: 'Beginner',
    costRange: '$400-$1,200',
    featured: true,
    image: '/src/assets/guide-small-backyard-coop.jpg',
    seo: {
      metaTitle: 'Small Backyard Chicken Coop Plans: Space-Smart Designs for Urban Lots (2026)',
      metaDescription: 'Expert-designed chicken coop plans optimized for small backyards. Space-efficient designs for 4-8 hens that maximize urban lots.',
    },
  },
  {
    id: 'free-coop-plans-quality-checklist',
    slug: 'free-coop-plans-quality-checklist',
    title: 'Free Coop Plans Quality Checklist: 12 Must-Have Elements (2026)',
    excerpt: 'Expert 12-point checklist for evaluating free chicken coop plans. Learn what separates safe, buildable designs from dangerous blueprints that waste time and money.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Plan Review Specialist',
    date: '2025-02-02',
    updatedDate: '2025-02-02',
    readingTime: 25,
    category: 'Planning',
    tags: ['Free Plans', 'Evaluation', 'Checklist', 'Quality', 'Safety'],
    difficulty: 'Beginner',
    costRange: '$400-$1,500',
    featured: true,
    image: '/src/assets/guide-free-coop-quality-checklist.jpg',
    seo: {
      metaTitle: 'Free Coop Plans Quality Checklist: 12 Must-Have Elements (2026)',
      metaDescription: 'Expert 12-point checklist for evaluating free chicken coop plans. Learn what separates safe, buildable designs from dangerous blueprints.',
    },
  },
  {
    id: 'chicken-coop-cleaning-guide',
    slug: 'chicken-coop-cleaning-guide',
    title: 'Chicken Coop Cleaning Schedule: Maintenance Made Simple (2026)',
    excerpt: 'Complete chicken coop cleaning schedule with daily, weekly, monthly, and seasonal tasks. Includes 3 interactive tools: Schedule Builder, Ammonia Risk Checker, and Deep-Clean Checklist Generator.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Coop Maintenance Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 25,
    category: 'Care',
    tags: ['Cleaning', 'Maintenance', 'Health', 'Ammonia', 'Bedding'],
    difficulty: 'Beginner',
    costRange: '$20-$100/year',
    featured: true,
    image: '/src/assets/guide-cleaning.jpg',
    seo: {
      metaTitle: 'How Often Should You Clean a Chicken Coop? Schedule + Deep Clean Guide',
      metaDescription: 'Most backyard coops need a full clean every 1\u20132 months. Here\u2019s a week-by-week cleaning schedule, plus a deep clean checklist to keep your flock healthy year-round.',
    },
  },
  {
    id: 'chicken-run-design-guide',
    slug: 'chicken-run-design-guide',
    title: 'Chicken Run Design: Maximizing Outdoor Space & Safety (2026)',
    excerpt: 'Complete chicken run design guide covering size calculations, fencing options, predator-proofing, and enrichment features. Includes 3 interactive tools: Run Size Calculator, Fencing Estimator, and Enrichment Planner.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Run Design Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building',
    tags: ['Chicken Run', 'Fencing', 'Predator-Proofing', 'Enrichment', 'Outdoor Space'],
    difficulty: 'Intermediate',
    costRange: '$200-$1,500',
    featured: true,
    image: '/src/assets/guide-chicken-run.jpg',
    seo: {
      metaTitle: 'Chicken Run Design: Maximizing Outdoor Space & Safety (2026)',
      metaDescription: 'Complete run design guide with 3 tools: Size Calculator, Fencing Estimator, Enrichment Planner. Build a safe, enriching outdoor space.',
    },
  },
  {
    id: 'chicken-coop-lighting-guide',
    slug: 'chicken-coop-lighting-guide',
    title: 'Chicken Coop Lighting Requirements: Natural vs Artificial (2026)',
    excerpt: 'Complete coop lighting guide covering egg production impacts, energy efficiency, and safe timer systems. Includes 3 interactive tools: Daylight & Lay Planner, LED Cost Calculator, and Timer Schedule Builder.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Lighting Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Care',
    tags: ['Lighting', 'Egg Production', 'Energy Efficiency', 'Timer Systems', 'LED'],
    difficulty: 'Beginner',
    costRange: '$20-$80',
    featured: true,
    image: '/src/assets/guide-lighting.jpg',
    seo: {
      metaTitle: 'Chicken Coop Lighting Requirements: Natural vs Artificial (2026)',
      metaDescription: 'Complete coop lighting guide with 3 tools: Daylight Planner, LED Cost Calculator, Timer Builder. Boost egg production safely.',
    },
  },
  {
    id: 'free-chicken-coop-plans',
    slug: 'free-chicken-coop-plans',
    title: 'Free Chicken Coop Plans: 25 Best Sources Reviewed (2026)',
    excerpt: 'Quality-first review of 25 best sources for free chicken coop plans, including hidden costs, plan scoring, and practical upgrade recommendations with 3 interactive tools.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Plan Review Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Planning',
    tags: ['Free Plans', 'Plan Review', 'DIY', 'Budget', 'Resources'],
    difficulty: 'Beginner',
    costRange: '$200-$1,500+',
    featured: true,
    image: '/src/assets/guide-free-coop-plans.jpg',
    seo: {
      metaTitle: 'Free Chicken Coop Plans: 25 Best Sources Reviewed (2026)',
      metaDescription: 'Quality-first review of 25 best free coop plan sources with 3 tools: Plan Scorecard, Hidden Cost Estimator, and Materials Calculator.',
    },
  },
  {
    id: 'chicken-coop-insulation-guide',
    slug: 'chicken-coop-insulation-guide',
    title: 'Chicken Coop Insulation Guide: When and How to Insulate (2026)',
    excerpt: 'Complete insulation guide with 3 interactive tools: Insulation Decision Wizard, R-Value Planner, and Condensation Risk Checker. Climate-based decisions and safe installation.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Cold Climate Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building',
    tags: ['Insulation', 'Winter', 'Moisture Control', 'Ventilation', 'Climate'],
    difficulty: 'Intermediate',
    costRange: '$100-$600',
    featured: true,
    image: '/src/assets/guide-insulation.jpg',
    seo: {
      metaTitle: 'Chicken Coop Insulation Guide: Best Materials + What to Avoid',
      metaDescription: 'Should you insulate your chicken coop? Yes \u2014 if temps drop below 20\u00b0F. Here\u2019s exactly what to use, what to skip, and how to install it without harming your flock.',
    },
  },
  {
    id: 'large-chicken-coop-plans',
    slug: 'large-chicken-coop-plans',
    title: 'Large Chicken Coop Plans: Housing 20+ Birds Efficiently (2026)',
    excerpt: 'Complete large coop guide with 3 interactive tools: Space Calculator, Ventilation Estimator, and Automation Planner. Scale your flock without scaling your workload.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Large Flock Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 32,
    category: 'Building',
    tags: ['Large Coop', 'Scaling', 'Ventilation', 'Automation', '20+ Birds'],
    difficulty: 'Intermediate',
    costRange: '$1,500-$5,000',
    featured: true,
    image: '/src/assets/guide-large-coop.jpg',
    seo: {
      metaTitle: 'Large Chicken Coop Plans: Walk-In Designs for 20\u201350+ Birds',
      metaDescription: 'Large coop guide with 3 tools: Space Calculator, Ventilation Estimator, Automation Planner. Design for 20+ birds without the headaches.',
    },
  },
  {
    id: 'chicken-coop-flooring-guide',
    slug: 'chicken-coop-flooring-guide',
    title: 'Chicken Coop Flooring Options: Pros & Cons of Every Material (2026)',
    excerpt: 'Complete flooring guide with 3 interactive tools: Cost Estimator, Cleaning Schedule Planner, and Health Risk Checker. Find the best floor for your coop and climate.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Coop Design Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 28,
    category: 'Building',
    tags: ['Flooring', 'Materials', 'Cleaning', 'Health', 'Bedding'],
    difficulty: 'Beginner',
    costRange: '$0-$500',
    featured: true,
    image: '/src/assets/guide-flooring-options.jpg',
    seo: {
      metaTitle: 'Chicken Coop Flooring Guide: Best Materials for Health & Easy Cleaning',
      metaDescription: 'Concrete, sand, rubber mats, or deep litter \u2014 a complete comparison of chicken coop flooring materials with costs, ease of cleaning, and flock health impact.',
    },
  },
  {
    id: 'mobile-chicken-coop-plans',
    slug: 'mobile-chicken-coop-plans',
    title: 'Mobile Chicken Coop Plans: Best Tractor Designs for Rotational Grazing (2026)',
    excerpt: 'Complete mobile coop guide with 3 interactive tools: Rotation Planner, Weight/Moveability Estimator, and Pasture Impact Calculator. Master rotational grazing with the right tractor design.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Rotational Grazing Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Building',
    tags: ['Mobile Coop', 'Chicken Tractor', 'Rotational Grazing', 'Pasture', 'DIY'],
    difficulty: 'Intermediate',
    costRange: '$200-$800',
    featured: true,
    image: '/src/assets/guide-mobile-coop.jpg',
    seo: {
      metaTitle: 'Mobile Chicken Coop Plans: Tractors, A-Frames & Portable Designs',
      metaDescription: 'Mobile coop guide with 3 tools: Rotation Planner, Weight Estimator, Pasture Impact Calculator. Build a tractor that actually moves.',
    },
  },
  {
    id: 'winter-chicken-coop-guide',
    slug: 'winter-chicken-coop-guide',
    title: 'Winter Chicken Coop Preparation: Complete Weatherization Guide (2026)',
    excerpt: 'Complete winter weatherization guide with 3 interactive tools: Heater Decision Tool, Insulation Planner, and Emergency Checklist Builder. Keep your flock safe through cold weather.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Cold Weather Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Care',
    tags: ['Winter', 'Weatherization', 'Heating', 'Insulation', 'Emergency Planning'],
    difficulty: 'Intermediate',
    costRange: '$50-$500',
    featured: true,
    image: '/src/assets/guide-winter-coop.jpg',
    seo: {
      metaTitle: 'Winter Chicken Coop Preparation: Complete Weatherization Guide (2026)',
      metaDescription: 'Winter coop guide with 3 interactive tools: Heater Decision, Insulation Planner, Emergency Checklist. Keep your flock safe in cold weather.',
    },
  },
  {
    id: 'free-vs-premium-plans',
    slug: 'free-vs-premium-plans',
    title: 'DIY Chicken Coop Plans: Free vs Premium - Which Should You Choose? (2026)',
    excerpt: 'Comprehensive guide comparing free and premium chicken coop plans with interactive tools: Cost Estimator, Plan Suitability Quiz, and Ventilation Calculator to help you decide.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Plan Comparison Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Costs',
    tags: ['Free Plans', 'Premium Plans', 'Comparison', 'Budget', 'DIY', 'Decision Guide'],
    difficulty: 'Beginner',
    costRange: '$200-$1,400',
    featured: true,
    image: '/src/assets/guide-free-vs-premium-plans.jpg',
    seo: {
      metaTitle: 'DIY Chicken Coop Plans: Free vs Premium - Which Should You Choose? (2026)',
      metaDescription: 'Compare free vs premium chicken coop plans with our interactive tools. Cost Estimator, Plan Quiz, and Ventilation Calculator to find your perfect plan.',
    },
  },
  {
    id: 'urban-chicken-coop-plans',
    slug: 'urban-chicken-coop-plans',
    title: 'Urban Chicken Coop Plans: Complete City Backyard Solutions (2026)',
    excerpt: 'Expert urban chicken coop designs for city backyards. Includes noise reduction, neighbor relations, space optimization, and regulations for successful city chicken keeping.',
    author: 'Sarah Martinez',
    authorCredentials: 'Urban Chicken Expert | Seattle, Portland, Austin Experience',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Planning',
    tags: ['Urban', 'City', 'Small Space', 'Neighbor Relations', 'Noise Reduction'],
    difficulty: 'Intermediate',
    costRange: '$600-$2,500',
    featured: true,
    image: '/src/assets/guide-urban-coop.jpg',
    seo: {
      metaTitle: 'Urban Chicken Coop Plans: Small-Space Designs + City Zoning Guide',
      metaDescription: 'Expert urban chicken coop designs for city backyards. Noise reduction, neighbor relations, space optimization, and regulations for city chicken keeping.',
    },
  },
  {
    id: 'expensive-coop-mistakes',
    slug: 'expensive-coop-mistakes',
    title: '5 Expensive Chicken Coop Mistakes That Cost Beginners $1000+ (Learn From My Failures)',
    excerpt: 'Avoid these costly chicken coop mistakes that cost me over $2,000 in my first year. Real failure stories with prevention strategies to save beginners thousands.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | 12+ Years Experience',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 25,
    category: 'Troubleshooting',
    tags: ['Mistakes', 'Beginner', 'Cost Savings', 'Prevention', 'Tips'],
    difficulty: 'Beginner',
    costRange: '$900 prevention vs $2,347 losses',
    featured: true,
    image: '/src/assets/guide-coop-mistakes.jpg',
    seo: {
      metaTitle: '5 Expensive Chicken Coop Mistakes That Cost Beginners $1000+ (2026)',
      metaDescription: 'Avoid these costly chicken coop mistakes that cost me over $2,000 in my first year. Real failure stories with prevention strategies.',
    },
  },
  {
    id: 'arizona-chicken-coop-guide',
    slug: 'arizona-chicken-coop-guide',
    title: 'The Complete Arizona Chicken Coop Guide: Building for Desert Success (2026)',
    excerpt: 'Complete Arizona chicken coop building guide with desert climate considerations, local regulations, heat management, and material choices for Phoenix, Tucson, and statewide requirements.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | 8+ Years Arizona Experience',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 40,
    category: 'Building',
    tags: ['Arizona', 'Desert', 'Heat Management', 'Regional', 'Climate'],
    difficulty: 'Intermediate',
    costRange: '$800-$2,500',
    featured: true,
    image: '/src/assets/guide-arizona.jpg',
    seo: {
      metaTitle: 'Arizona Chicken Coop Guide: Heat, Permits & Local Zoning Rules',
      metaDescription: 'Complete Arizona chicken coop guide with desert climate considerations, local regulations, heat management, and material choices for Phoenix and Tucson.',
    },
  },
  {
    id: 'coop-ventilation-guide',
    slug: 'coop-ventilation-guide',
    title: 'Complete Chicken Coop Ventilation Guide: Prevent Problems Before They Start (2026)',
    excerpt: 'Expert chicken coop ventilation guide with climate-specific designs, troubleshooting solutions, and cost-effective upgrades. Prevent respiratory diseases and flock health problems.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Ventilation Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building',
    tags: ['Ventilation', 'Air Quality', 'Health', 'Climate', 'Building'],
    difficulty: 'Intermediate',
    costRange: '$50-$400',
    featured: true,
    image: '/src/assets/guide-ventilation.jpg',
    seo: {
      metaTitle: 'Chicken Coop Ventilation Guide: How Much & Where to Put It',
      metaDescription: 'Chickens need 1 sq ft of ventilation per 10 sq ft of coop space. Here\u2019s how to calculate it, where to install vents, and how to avoid the cold drafts that kill flocks.',
    },
  },
  {
    id: 'predator-proof-coop-guide',
    slug: 'predator-proof-coop-guide',
    title: 'Predator-Proof Chicken Coop: Complete Security Guide (2026)',
    excerpt: 'Complete predator-proofing guide with regional threat assessment, 5-layer security systems, hardware cloth specifications, and proven protection strategies tested against coyotes, raccoons, hawks, and more.',
    author: 'Sarah Martinez',
    authorCredentials: 'Predator Defense Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 40,
    category: 'Troubleshooting',
    tags: ['Predators', 'Security', 'Hardware Cloth', 'Protection', 'Safety'],
    difficulty: 'Advanced',
    costRange: '$200-$1,500',
    featured: true,
    image: '/src/assets/guide-predator.jpg',
    seo: {
      metaTitle: 'Predator-Proof Chicken Coop Guide: Hardware, Locks & Aprons',
      metaDescription: 'Hardware cloth, apron fencing, automatic doors, and secure latches \u2014 a complete guide to protecting your flock from foxes, raccoons, coyotes, and hawks.',
    },
  },
  {
    id: 'coop-permit-guide',
    slug: 'coop-permit-guide',
    title: 'Chicken Coop Permit Requirements: Complete State-by-State Guide (2026)',
    excerpt: 'Complete chicken coop permit guide covering all 50 states. Application processes, costs, timelines, and appeals. Navigate coop permits with confidence using our comprehensive legal breakdown.',
    author: 'Sarah Martinez',
    authorCredentials: 'Legal Research & Compliance Specialist',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Planning',
    tags: ['Permits', 'Legal', 'Zoning', 'HOA', 'Regulations'],
    difficulty: 'Beginner',
    costRange: '$0-$500 (permits)',
    featured: true,
    image: '/src/assets/guide-permits.jpg',
    seo: {
      metaTitle: 'Do You Need a Permit to Build a Chicken Coop? (State Guide)',
      metaDescription: 'Most areas require a permit for coops over 100\u2013120 sq ft. Find out if your state and city require a building permit before you break ground \u2014 and what happens if you skip it.',
    },
  },
  {
    id: 'coop-materials-guide',
    slug: 'coop-materials-guide',
    title: 'Best Chicken Coop Materials for Every Budget (2025 Guide)',
    excerpt: 'Complete chicken coop materials guide with real-world durability testing, current 2026 pricing, and regional supplier recommendations. Save money with our budget-tested material choices.',
    author: 'Sarah Martinez',
    authorCredentials: 'Coop Builder & Materials Tester',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 35,
    category: 'Building',
    tags: ['Materials', 'Building', 'Budget', 'Lumber', 'Hardware'],
    difficulty: 'Beginner',
    costRange: '$200-$2,000+',
    featured: true,
    image: '/src/assets/guide-materials.jpg',
    seo: {
      metaTitle: 'Chicken Coop Materials Guide: What to Buy & What to Skip',
      metaDescription: 'Lumber, hardware cloth, roofing, flooring, insulation \u2014 a complete chicken coop materials list with costs, ratings, and what the pros actually use.',
    },
  },
  {
    id: 'chicken-coop-size-calculator',
    slug: 'chicken-coop-size-calculator',
    title: 'Chicken Coop Size Calculator: How Much Space Do You Really Need? (2026)',
    excerpt: 'Free chicken coop size calculator with breed-specific requirements. Calculate exact indoor/outdoor space needed for your flock with climate and management considerations.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | 200+ Coop Consultations',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 20,
    category: 'Planning',
    tags: ['Calculator', 'Planning', 'Space', 'Beginner', 'Tools'],
    difficulty: 'Beginner',
    featured: true,
    image: '/src/assets/guide-coop-size-calculator.jpg',
    seo: {
      metaTitle: 'Chicken Coop Size Calculator: How Much Space Per Chicken?',
      metaDescription: 'Use our free chicken coop size calculator. Standard rule: 4 sq ft per chicken inside + 10 sq ft per chicken in the run. Includes nesting box and roost bar sizing.',
    },
  },
  {
    id: '4x4-chicken-coop-plans',
    slug: '4x4-chicken-coop-plans',
    title: '4x4 Chicken Coop Plans: Complete Beginner Build Guide (2026)',
    excerpt: 'Three complete 4x4 chicken coop plans for 3-4 birds. Budget ($250-300), Standard ($350-450), and Premium ($500-650) builds with step-by-step construction guides.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | Plan Designer',
    date: '2025-01-30',
    updatedDate: '2025-01-30',
    readingTime: 30,
    category: 'Building',
    tags: ['4x4 Coop', 'Beginner', 'Small Flock', 'DIY', 'Step-by-Step'],
    difficulty: 'Beginner',
    costRange: '$250-$650',
    featured: true,
    image: '/src/assets/guide-4x4-coop-plans.jpg',
    seo: {
      metaTitle: '4x4 Chicken Coop Plans: How Many Chickens Fit + Full Build Guide',
      metaDescription: 'Three complete 4x4 chicken coop plans for 3-4 birds. Budget, Standard, and Premium builds with step-by-step construction guides.',
    },
  },
  {
    id: 'small-chicken-coop-plans',
    slug: 'small-chicken-coop-plans',
    title: 'Small Chicken Coop Plans: 15 Best Designs for Backyards Under 1000 sq ft',
    excerpt: 'Discover the best small chicken coop plans for urban backyards. 15 space-saving designs with detailed pros/cons, city ordinance tips, and space optimization strategies for lots under 1000 sq ft.',
    author: 'Sarah Martinez',
    authorCredentials: 'Urban Chicken Expert | 12+ years helping city dwellers keep chickens',
    date: '2025-01-25',
    updatedDate: '2025-01-25',
    readingTime: 35,
    category: 'Planning',
    tags: ['Small Space', 'Urban', 'Planning', 'DIY', 'City Ordinances'],
    difficulty: 'Beginner',
    costRange: '$150-$800',
    featured: true,
    image: '/src/assets/guide-small-coop-plans.jpg',
    seo: {
      metaTitle: 'Small Chicken Coop Plans: Designs for 4\u20138 Birds (Free Guides)',
      metaDescription: 'Discover the best small chicken coop plans for urban backyards. 15 space-saving designs with detailed pros/cons and city ordinance tips.',
    },
  },
  {
    id: 'how-to-build-chicken-coop',
    slug: 'how-to-build-chicken-coop',
    title: 'How to Build a Chicken Coop: Complete Step-by-Step Guide for 2026',
    excerpt: 'Learn how to build a chicken coop with our beginner-friendly guide. Includes material lists, cost breakdowns, common mistakes to avoid, and real failure stories from experienced builders.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert | 12+ years raising desert chickens',
    date: '2025-01-20',
    updatedDate: '2025-01-20',
    readingTime: 45,
    category: 'Building',
    tags: ['DIY', 'Building', 'Beginner', 'Materials', 'Step-by-Step'],
    difficulty: 'Beginner',
    projectTime: '2-4 weeks',
    costRange: '$250-$1,200',
    featured: true,
    image: '/src/assets/guide-how-to-build-coop.jpg',
    seo: {
      metaTitle: 'How to Build a Chicken Coop: Complete Step-by-Step Guide for 2026',
      metaDescription: 'Learn how to build a chicken coop with our beginner-friendly guide. Includes material lists, cost breakdowns, and common mistakes to avoid.',
    },
  },
  {
    id: 'coop-cost-breakdown-2025',
    slug: 'cost-breakdown-2025',
    title: 'Chicken Coop Cost Breakdown 2025: Budget vs Premium Builds',
    excerpt: 'Complete cost analysis for building a chicken coop in 2025. Covers budget ($250-400), standard ($400-700), and premium ($700-1,200) builds with detailed material lists and money-saving strategies.',
    author: 'Sarah Martinez',
    authorCredentials: 'Backyard Chicken Expert',
    date: '2025-01-15',
    updatedDate: '2025-01-15',
    readingTime: 25,
    category: 'Costs',
    tags: ['Budget', 'Materials', 'Planning', 'DIY'],
    difficulty: 'Beginner',
    costRange: '$250-$1,200',
    featured: true,
    image: '/src/assets/guide-cost-breakdown.jpg',
    seo: {
      metaTitle: 'How Much Does It Cost to Build a Chicken Coop? [2026 Guide]',
      metaDescription: 'DIY chicken coop costs range from $100 to $4,000+. Get a complete breakdown by coop size, type, and materials \u2014 plus what you\u2019ll pay for DIY vs. hiring a contractor.',
    },
  },
];

// Helper functions
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter(article => article.category === category);
}

export function getRelatedArticles(currentSlug: string, category: ArticleCategory, limit: number = 3): Article[] {
  const currentArticle = articles.find(a => a.slug === currentSlug);
  if (!currentArticle) return articles.slice(0, limit);
  
  return articles
    .filter(article => 
      article.slug !== currentSlug && 
      (article.category === category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, limit);
}

export function getFeaturedArticles(limit: number = 3): Article[] {
  return articles.filter(article => article.featured).slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  articles.forEach(article => article.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
