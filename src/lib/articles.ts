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
    id: 'chicken-coop-insulation-guide',
    slug: 'chicken-coop-insulation-guide',
    title: 'Chicken Coop Insulation Guide: When and How to Insulate (2025)',
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
      metaTitle: 'Chicken Coop Insulation Guide: When and How to Insulate (2025)',
      metaDescription: 'Complete insulation guide with 3 tools: Decision Wizard, R-Value Planner, Condensation Risk Checker. Know when and how to insulate safely.',
    },
  },
  {
    id: 'large-chicken-coop-plans',
    slug: 'large-chicken-coop-plans',
    title: 'Large Chicken Coop Plans: Housing 20+ Birds Efficiently (2025)',
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
      metaTitle: 'Large Chicken Coop Plans: Housing 20+ Birds Efficiently (2025)',
      metaDescription: 'Large coop guide with 3 tools: Space Calculator, Ventilation Estimator, Automation Planner. Design for 20+ birds without the headaches.',
    },
  },
  {
    id: 'chicken-coop-flooring-guide',
    slug: 'chicken-coop-flooring-guide',
    title: 'Chicken Coop Flooring Options: Pros & Cons of Every Material (2025)',
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
      metaTitle: 'Chicken Coop Flooring Options: Pros & Cons of Every Material (2025)',
      metaDescription: 'Compare coop flooring with 3 tools: Cost Estimator, Cleaning Planner, Health Risk Checker. Dirt, wood, concrete, sand & more.',
    },
  },
  {
    id: 'mobile-chicken-coop-plans',
    slug: 'mobile-chicken-coop-plans',
    title: 'Mobile Chicken Coop Plans: Best Tractor Designs for Rotational Grazing (2025)',
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
      metaTitle: 'Mobile Chicken Coop Plans: Best Tractor Designs for Rotational Grazing (2025)',
      metaDescription: 'Mobile coop guide with 3 tools: Rotation Planner, Weight Estimator, Pasture Impact Calculator. Build a tractor that actually moves.',
    },
  },
  {
    id: 'winter-chicken-coop-guide',
    slug: 'winter-chicken-coop-guide',
    title: 'Winter Chicken Coop Preparation: Complete Weatherization Guide (2025)',
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
      metaTitle: 'Winter Chicken Coop Preparation: Complete Weatherization Guide (2025)',
      metaDescription: 'Winter coop guide with 3 interactive tools: Heater Decision, Insulation Planner, Emergency Checklist. Keep your flock safe in cold weather.',
    },
  },
  {
    id: 'free-vs-premium-plans',
    slug: 'free-vs-premium-plans',
    title: 'DIY Chicken Coop Plans: Free vs Premium - Which Should You Choose? (2025)',
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
      metaTitle: 'DIY Chicken Coop Plans: Free vs Premium - Which Should You Choose? (2025)',
      metaDescription: 'Compare free vs premium chicken coop plans with our interactive tools. Cost Estimator, Plan Quiz, and Ventilation Calculator to find your perfect plan.',
    },
  },
  {
    id: 'urban-chicken-coop-plans',
    slug: 'urban-chicken-coop-plans',
    title: 'Urban Chicken Coop Plans: Complete City Backyard Solutions (2025)',
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
      metaTitle: 'Urban Chicken Coop Plans: Complete City Backyard Solutions (2025)',
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
      metaTitle: '5 Expensive Chicken Coop Mistakes That Cost Beginners $1000+ (2025)',
      metaDescription: 'Avoid these costly chicken coop mistakes that cost me over $2,000 in my first year. Real failure stories with prevention strategies.',
    },
  },
  {
    id: 'arizona-chicken-coop-guide',
    slug: 'arizona-chicken-coop-guide',
    title: 'The Complete Arizona Chicken Coop Guide: Building for Desert Success (2025)',
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
      metaTitle: 'Arizona Chicken Coop Guide: Desert Climate Building Requirements (2025)',
      metaDescription: 'Complete Arizona chicken coop guide with desert climate considerations, local regulations, heat management, and material choices for Phoenix and Tucson.',
    },
  },
  {
    id: 'coop-ventilation-guide',
    slug: 'coop-ventilation-guide',
    title: 'Complete Chicken Coop Ventilation Guide: Prevent Problems Before They Start (2025)',
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
      metaTitle: 'Complete Chicken Coop Ventilation Guide (2025)',
      metaDescription: 'Expert ventilation guide with climate-specific designs, troubleshooting solutions, and cost-effective upgrades to prevent respiratory diseases.',
    },
  },
  {
    id: 'predator-proof-coop-guide',
    slug: 'predator-proof-coop-guide',
    title: 'Predator-Proof Chicken Coop: Complete Security Guide (2025)',
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
      metaTitle: 'Predator-Proof Chicken Coop: Complete Security Guide (2025)',
      metaDescription: 'Complete predator-proofing guide with 5-layer security systems, hardware cloth specs, and proven protection strategies for coyotes, raccoons, and hawks.',
    },
  },
  {
    id: 'coop-permit-guide',
    slug: 'coop-permit-guide',
    title: 'Chicken Coop Permit Requirements: Complete State-by-State Guide (2025)',
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
      metaTitle: 'Chicken Coop Permit Requirements: State-by-State Guide (2025)',
      metaDescription: 'Complete chicken coop permit guide covering all 50 states. Application processes, costs, timelines, and appeals procedures.',
    },
  },
  {
    id: 'coop-materials-guide',
    slug: 'coop-materials-guide',
    title: 'Best Chicken Coop Materials for Every Budget (2025 Guide)',
    excerpt: 'Complete chicken coop materials guide with real-world durability testing, current 2025 pricing, and regional supplier recommendations. Save money with our budget-tested material choices.',
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
      metaTitle: 'Best Chicken Coop Materials for Every Budget (2025 Guide)',
      metaDescription: 'Complete chicken coop materials guide with real-world durability testing, current 2025 pricing, and regional supplier recommendations.',
    },
  },
  {
    id: 'chicken-coop-size-calculator',
    slug: 'chicken-coop-size-calculator',
    title: 'Chicken Coop Size Calculator: How Much Space Do You Really Need? (2025)',
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
      metaTitle: 'Chicken Coop Size Calculator: How Much Space Do You Need? (2025)',
      metaDescription: 'Free chicken coop size calculator with breed-specific requirements. Calculate exact indoor/outdoor space for your flock with climate considerations.',
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
      metaTitle: 'Small Chicken Coop Plans: 15 Best Designs for Backyards Under 1000 sq ft',
      metaDescription: 'Discover the best small chicken coop plans for urban backyards. 15 space-saving designs with detailed pros/cons and city ordinance tips.',
    },
  },
  {
    id: 'how-to-build-chicken-coop',
    slug: 'how-to-build-chicken-coop',
    title: 'How to Build a Chicken Coop: Complete Step-by-Step Guide for 2025',
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
      metaTitle: 'How to Build a Chicken Coop: Complete Step-by-Step Guide for 2025',
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
      metaTitle: 'Chicken Coop Cost Breakdown 2025: Budget vs Premium Builds',
      metaDescription: 'Complete 2025 cost guide for building a chicken coop. Budget ($250-400), standard ($400-700), and premium ($700-1,200) builds with material lists.',
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
