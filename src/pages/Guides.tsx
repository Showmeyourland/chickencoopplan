import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Egg, ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import ArticleCard from '@/components/ArticleCard';
import CategoryFilter from '@/components/CategoryFilter';
import NewsletterSignup from '@/components/NewsletterSignup';
import Breadcrumbs from '@/components/Breadcrumbs';
import { articles, categories, getFeaturedArticles, searchArticles } from '@/lib/articles';
import type { ArticleCategory } from '@/lib/articles';

const Guides = () => {
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredArticles = getFeaturedArticles(3);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chicken Coop Guides - Building, Costs, Care & More"
        description="Expert guides on building chicken coops, managing costs, and caring for backyard chickens. Free resources and step-by-step tutorials."
        canonical="/guides"
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
              <Egg className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-xl text-foreground">CoopCraft</span>
              <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">Build Better Coops</span>
            </div>
          </Link>

          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="py-12">
        <div className="container">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[{ label: 'Guides' }]} 
            className="mb-8"
          />

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-primary mb-3">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Guides & Resources</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Chicken Coop Building Guides
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert advice on building, maintaining, and optimizing your backyard chicken coop. From budget builds to premium setups.
            </p>
          </div>

          {/* Featured Section */}
          {featuredArticles.length > 0 && (
            <section className="mb-16">
              <h2 className="font-display text-2xl text-foreground mb-6">Featured Guides</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} variant="featured" />
                ))}
              </div>
            </section>
          )}

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>

          {/* Articles Grid */}
          <section className="mb-16">
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
                <Button variant="outline" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                  Clear filters
                </Button>
              </div>
            )}
          </section>


          {/* Newsletter */}
          <NewsletterSignup variant="full" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Egg className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg text-foreground">CoopCraft</span>
            </Link>
            <p className="text-sm text-muted-foreground">© 2025 CoopCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Guides;
