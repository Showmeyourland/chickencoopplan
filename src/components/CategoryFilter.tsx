import { cn } from '@/lib/utils';
import type { ArticleCategory } from '@/lib/articles';

interface CategoryFilterProps {
  categories: ArticleCategory[];
  selectedCategory: ArticleCategory | 'All';
  onSelectCategory: (category: ArticleCategory | 'All') => void;
  className?: string;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}: CategoryFilterProps) => {
  const allCategories: (ArticleCategory | 'All')[] = ['All', ...categories];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-full transition-all',
            selectedCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
