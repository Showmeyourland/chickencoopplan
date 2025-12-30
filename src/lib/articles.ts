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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
    seo: {
      metaTitle: 'Chicken Coop Size Calculator: How Much Space Do You Need? (2025)',
      metaDescription: 'Free chicken coop size calculator with breed-specific requirements. Calculate exact indoor/outdoor space for your flock with climate considerations.',
    },
  },
  {
    id: '4x4-chicken-coop-plans',
    slug: '4x4-chicken-coop-plans',
    title: 'DIY Chicken Coop Plans: Free vs Premium - Which Should You Choose?',
    excerpt: 'Honest comparison of free vs premium DIY chicken coop plans. Quality assessment, hidden costs analysis, and unbiased recommendations to help you choose the right plans for your project.',
    author: 'Sarah Martinez',
    authorCredentials: 'DIY Building Expert | 3+ years testing 25+ plan sources',
    date: '2025-01-28',
    updatedDate: '2025-01-28',
    readingTime: 45,
    category: 'Planning',
    tags: ['DIY', 'Plans', 'Free vs Premium', 'Cost Analysis', 'Building'],
    difficulty: 'Beginner',
    costRange: '$0-$150 (plans only)',
    featured: true,
    image: undefined,
    seo: {
      metaTitle: 'DIY Chicken Coop Plans: Free vs Premium Comparison 2025',
      metaDescription: 'Honest comparison of free vs premium DIY chicken coop plans. Quality assessment, hidden costs analysis, and recommendations based on 70+ real projects.',
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
    image: undefined,
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
    image: undefined,
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
    image: undefined,
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
