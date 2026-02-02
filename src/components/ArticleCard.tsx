import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/articles';

// Import guide images
import guideArizona from '@/assets/guide-arizona.jpg';
import guideBeginner from '@/assets/guide-beginner.jpg';
import guideChickenRun from '@/assets/guide-chicken-run.jpg';
import guideCleaning from '@/assets/guide-cleaning.jpg';
import guideClimate from '@/assets/guide-climate.jpg';
import guideCoopMistakes from '@/assets/guide-coop-mistakes.jpg';
import guideCoopSizeCalculator from '@/assets/guide-coop-size-calculator.jpg';
import guideCostBreakdown from '@/assets/guide-cost-breakdown.jpg';
import guideFlooringOptions from '@/assets/guide-flooring-options.jpg';
import guideFreeCoopPlans from '@/assets/guide-free-coop-plans.jpg';
import guideFreeVsPremiumPlans from '@/assets/guide-free-vs-premium-plans.jpg';
import guideHowToBuildCoop from '@/assets/guide-how-to-build-coop.jpg';
import guideInsulation from '@/assets/guide-insulation.jpg';
import guideLargeCoop from '@/assets/guide-large-coop.jpg';
import guideLighting from '@/assets/guide-lighting.jpg';
import guideMaterials from '@/assets/guide-materials.jpg';
import guideMobileCoop from '@/assets/guide-mobile-coop.jpg';
import guidePermits from '@/assets/guide-permits.jpg';
import guidePredator from '@/assets/guide-predator.jpg';
import guideSmallCoopPlans from '@/assets/guide-small-coop-plans.jpg';
import guideUrbanCoop from '@/assets/guide-urban-coop.jpg';
import guideVentilation from '@/assets/guide-ventilation.jpg';
import guideWinterCoop from '@/assets/guide-winter-coop.jpg';
import guide4x4CoopPlans from '@/assets/guide-4x4-coop-plans.jpg';
import guideSmallBackyardCoop from '@/assets/guide-small-backyard-coop.jpg';

// Map slug to imported image
const imageMap: Record<string, string> = {
  'arizona-chicken-coop-guide': guideArizona,
  'beginner-chicken-coop-plans': guideBeginner,
  'chicken-run-design-guide': guideChickenRun,
  'chicken-coop-cleaning-guide': guideCleaning,
  'climate-chicken-coop-guide': guideClimate,
  'expensive-coop-mistakes': guideCoopMistakes,
  'coop-size-calculator': guideCoopSizeCalculator,
  'coop-cost-breakdown-2025': guideCostBreakdown,
  'chicken-coop-flooring-guide': guideFlooringOptions,
  'free-chicken-coop-plans': guideFreeCoopPlans,
  'free-vs-premium-plans': guideFreeVsPremiumPlans,
  'how-to-build-chicken-coop': guideHowToBuildCoop,
  'chicken-coop-insulation-guide': guideInsulation,
  'large-chicken-coop-plans': guideLargeCoop,
  'chicken-coop-lighting-guide': guideLighting,
  'coop-materials-guide': guideMaterials,
  'mobile-chicken-coop-plans': guideMobileCoop,
  'coop-permit-guide': guidePermits,
  'predator-proof-coop-guide': guidePredator,
  'small-chicken-coop-plans': guideSmallCoopPlans,
  'urban-chicken-coop-plans': guideUrbanCoop,
  'coop-ventilation-guide': guideVentilation,
  'winter-chicken-coop-guide': guideWinterCoop,
  '4x4-coop-plans': guide4x4CoopPlans,
  'small-backyard-coop-plans': guideSmallBackyardCoop,
};

const getArticleImage = (slug: string): string | undefined => {
  return imageMap[slug];
};

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

const ArticleCard = ({ article, variant = 'default' }: ArticleCardProps) => {
  const articleUrl = `/guides/${article.slug}`;

  if (variant === 'compact') {
    return (
      <Link 
        to={articleUrl}
        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{article.readingTime} min read</span>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
      </Link>
    );
  }

  const articleImage = getArticleImage(article.slug);

  if (variant === 'featured') {
    return (
      <Link 
        to={articleUrl}
        className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
      >
        {articleImage && (
          <div className="aspect-video bg-muted overflow-hidden">
            <img 
              src={articleImage} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {article.category}
            </Badge>
            {article.difficulty && (
              <Badge variant="outline" className="text-xs">
                {article.difficulty}
              </Badge>
            )}
          </div>
          
          <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors mb-2">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{article.readingTime} min read</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              Read more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link 
      to={articleUrl}
      className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-md transition-all"
    >
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
          {article.difficulty && (
            <Badge variant="outline" className="text-xs">
              {article.difficulty}
            </Badge>
          )}
        </div>
        
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{article.readingTime} min</span>
            {article.estimatedCost && (
              <>
                <span>•</span>
                <span>{article.estimatedCost}</span>
              </>
            )}
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
