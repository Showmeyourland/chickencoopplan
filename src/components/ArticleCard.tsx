import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/articles';

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

  if (variant === 'featured') {
    return (
      <Link 
        to={articleUrl}
        className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
      >
        {article.image && (
          <div className="aspect-video bg-muted overflow-hidden">
            <img 
              src={article.image} 
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
