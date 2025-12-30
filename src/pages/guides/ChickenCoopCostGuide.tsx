import { Link } from 'react-router-dom';
import { Egg, ArrowLeft, DollarSign, ArrowRight, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';

const ChickenCoopCostGuide = () => {
  const costRanges = [
    { type: 'Budget Build', materials: '$250-400', total: '$350-650', lifespan: '5-8 years', best: 'First-time builders testing chicken keeping' },
    { type: 'Standard Build', materials: '$400-700', total: '$500-900', lifespan: '15-20 years', best: 'Most backyard chicken keepers' },
    { type: 'Premium Build', materials: '$700-1,200', total: '$800-1,400', lifespan: '25+ years', best: 'Long-term investment, high-end features' },
  ];

  const pricetrends = [
    { item: 'Pressure-treated lumber', trend: 'up', change: '+15%' },
    { item: 'Hardware cloth', trend: 'up', change: '+12%' },
    { item: 'Basic lumber', trend: 'stable', change: '0%' },
    { item: 'Solar panels', trend: 'down', change: '-10%' },
    { item: 'LED lighting', trend: 'down', change: '-5%' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chicken Coop Cost Guide: Complete Budget Breakdown"
        description="Comprehensive guide to chicken coop costs in 2025. Budget breakdowns, regional pricing, hidden costs, and money-saving strategies for every build type."
        canonical="/guides/cost-guide"
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
        <div className="container max-w-5xl">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Cost Guide' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <DollarSign className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Budget Planning</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Chicken Coop Cost Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to budget for your chicken coop project. 
              From materials to hidden costs, we've got you covered.
            </p>
          </div>

          {/* Quick Cost Overview */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">2025 Cost Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {costRanges.map((range, index) => (
                <div 
                  key={range.type} 
                  className={`rounded-xl p-6 ${
                    index === 1 
                      ? 'bg-primary/10 border-2 border-primary/30' 
                      : 'bg-card border border-border'
                  }`}
                >
                  {index === 1 && (
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">Most Popular</span>
                  )}
                  <h3 className="font-display text-xl text-foreground mt-1 mb-3">{range.type}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Materials:</span> {range.materials}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Total Project:</span> {range.total}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="text-foreground font-medium">Lifespan:</span> {range.lifespan}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">Best for: {range.best}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Price Trends */}
          <section className="mb-16 bg-secondary/50 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-foreground mb-6">2025 Price Trends</h2>
            <div className="space-y-3">
              {pricetrends.map((item) => (
                <div key={item.item} className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <span className="text-foreground">{item.item}</span>
                  <div className="flex items-center gap-2">
                    {item.trend === 'up' && <TrendingUp className="h-4 w-4 text-destructive" />}
                    {item.trend === 'down' && <TrendingDown className="h-4 w-4 text-primary" />}
                    {item.trend === 'stable' && <Minus className="h-4 w-4 text-muted-foreground" />}
                    <span className={`font-medium ${
                      item.trend === 'up' ? 'text-destructive' : 
                      item.trend === 'down' ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Breakdown Link */}
          <section className="mb-16">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl text-foreground mb-3">Want Line-by-Line Cost Details?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Our comprehensive 2025 Cost Breakdown includes detailed material lists, quantity calculations, 
                and regional price variations.
              </p>
              <Link to="/guides/cost-breakdown-2025">
                <Button size="lg" className="gap-2">
                  View Complete Cost Breakdown
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Hidden Costs Warning */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Don't Forget Hidden Costs</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Tools', cost: '$50-200', note: 'If you don\'t already own them' },
                { title: 'Permits', cost: '$0-150', note: 'Check local requirements' },
                { title: 'Site Prep', cost: '$50-300', note: 'Leveling, drainage, clearing' },
                { title: 'Delivery', cost: '$0-100', note: 'For large material orders' },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-card border border-border rounded-xl">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <span className="text-primary font-medium">{item.cost}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="font-display text-2xl text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/guides/plans-guide" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Plans Guide</h3>
                <p className="text-sm text-muted-foreground">Compare plan options for your budget</p>
              </Link>
              <Link to="/guides/building-guide" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">DIY Building Guide</h3>
                <p className="text-sm text-muted-foreground">Save money with DIY construction</p>
              </Link>
            </div>
          </section>

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

export default ChickenCoopCostGuide;
