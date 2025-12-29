import { Link } from 'react-router-dom';
import { Egg, ArrowLeft, Heart, ArrowRight, Sun, Snowflake, Droplets, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';

const ChickenCareBasics = () => {
  const careTopics = [
    {
      title: 'Housing Requirements',
      icon: '🏠',
      points: [
        '4 sq ft of coop space per chicken minimum',
        '10 sq ft of run space per chicken',
        '8-12 inches of roosting bar per bird',
        '1 nesting box per 3-4 hens',
      ],
    },
    {
      title: 'Daily Care',
      icon: '☀️',
      points: [
        'Fresh water (check twice daily in summer)',
        'Quality layer feed available at all times',
        'Collect eggs daily',
        'Quick health check on each bird',
      ],
    },
    {
      title: 'Weekly Tasks',
      icon: '📋',
      points: [
        'Clean waterers and feeders',
        'Add fresh bedding as needed',
        'Check for signs of pests or illness',
        'Inspect coop for damage or security issues',
      ],
    },
  ];

  const seasons = [
    { name: 'Spring', icon: Droplets, color: 'text-blue-500', tips: 'Deep clean coop, prepare for new chicks, watch for broody hens' },
    { name: 'Summer', icon: Sun, color: 'text-yellow-500', tips: 'Extra water, shade, frozen treats, watch for heat stress' },
    { name: 'Fall', icon: '🍂', color: 'text-orange-500', tips: 'Prepare for winter, increase protein for molting, stock up on supplies' },
    { name: 'Winter', icon: Snowflake, color: 'text-cyan-500', tips: 'Prevent frostbite, ensure ventilation, heated water, supplemental light' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Backyard Chicken Care: Complete Beginner's Guide"
        description="Everything you need to know about caring for backyard chickens. Housing requirements, feeding, health, and seasonal care tips for beginners."
        canonical="/chicken-care-basics"
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
          <Breadcrumbs items={[{ label: 'Guides', href: '/blog' }, { label: 'Chicken Care Basics' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Beginner's Guide</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Backyard Chicken Care Basics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keep your flock healthy and happy with our comprehensive guide to chicken care. 
              Perfect for first-time chicken keepers.
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Essential Care Overview</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {careTopics.map((topic) => (
                <div key={topic.title} className="bg-card border border-border rounded-xl p-6">
                  <span className="text-3xl mb-3 block">{topic.icon}</span>
                  <h3 className="font-display text-lg text-foreground mb-3">{topic.title}</h3>
                  <ul className="space-y-2">
                    {topic.points.map((point) => (
                      <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Feeding */}
          <section className="mb-16 bg-secondary/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl text-foreground">Feeding Your Flock</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Daily Requirements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong className="text-foreground">Layer feed:</strong> 1/4 lb per hen per day</li>
                  <li>• <strong className="text-foreground">Fresh water:</strong> 1 pint per hen per day</li>
                  <li>• <strong className="text-foreground">Grit:</strong> Available free-choice</li>
                  <li>• <strong className="text-foreground">Calcium:</strong> Oyster shell for laying hens</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Healthy Treats (10% of diet max)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Leafy greens (kale, lettuce, spinach)</li>
                  <li>• Fruits (berries, melon, apples)</li>
                  <li>• Mealworms and grubs</li>
                  <li>• Cooked grains and vegetables</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seasonal Care */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Seasonal Care Tips</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {seasons.map((season) => (
                <div key={season.name} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {typeof season.icon === 'string' ? (
                      <span className="text-xl">{season.icon}</span>
                    ) : (
                      <season.icon className={`h-5 w-5 ${season.color}`} />
                    )}
                    <h3 className="font-display text-lg text-foreground">{season.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{season.tips}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Coop Connection */}
          <section className="mb-16">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h2 className="font-display text-2xl text-foreground mb-3">Good Care Starts with a Good Coop</h2>
              <p className="text-muted-foreground mb-6">
                A well-designed coop makes daily care easier and keeps your chickens healthier. 
                Proper ventilation, easy-clean floors, and secure predator protection are essential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/">
                  <Button className="gap-2">
                    Browse Coop Plans
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/coop-building-guide">
                  <Button variant="outline" className="gap-2">
                    DIY Building Guide
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="font-display text-2xl text-foreground mb-6">Continue Learning</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/ultimate-chicken-coop-guide" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Ultimate Coop Guide</h3>
                <p className="text-sm text-muted-foreground">Complete resource for coop planning and building</p>
              </Link>
              <Link to="/guides/coop-cost-breakdown-2025" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Cost Breakdown 2025</h3>
                <p className="text-sm text-muted-foreground">Budget for your coop project</p>
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

export default ChickenCareBasics;
