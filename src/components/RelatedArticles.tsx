import ArticleCard from '@/components/ArticleCard';
import type { Article } from '@/lib/articles';

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  variant?: 'grid' | 'sidebar';
  className?: string;
}

const RelatedArticles = ({
  articles,
  title = 'Related Articles',
  variant = 'grid',
  className = '',
}: RelatedArticlesProps) => {
  if (articles.length === 0) return null;

  if (variant === 'sidebar') {
    return (
      <div className={`bg-muted/50 rounded-xl p-4 ${className}`}>
        <h4 className="font-display text-sm text-foreground mb-3">{title}</h4>
        <div className="space-y-1">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="font-display text-2xl text-foreground mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
