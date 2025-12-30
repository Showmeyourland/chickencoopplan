import { Link } from 'react-router-dom';
import { Egg, ArrowLeft, FileText, ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';

const ChickenCoopPlansGuide = () => {
  const planComparison = [
    { feature: 'Detailed measurements', free: true, premium: true },
    { feature: 'Basic material list', free: true, premium: true },
    { feature: 'Step-by-step instructions', free: false, premium: true },
    { feature: 'Cut sheets & diagrams', free: false, premium: true },
    { feature: 'Video tutorials', free: false, premium: true },
    { feature: 'Material quantity calculator', free: false, premium: true },
    { feature: 'Expert support', free: false, premium: true },
    { feature: 'Design modifications', free: false, premium: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Chicken Coop Plans Guide: Free vs Premium Options"
        description="Compare free and premium chicken coop plans. Learn what to look for in quality plans, size recommendations, and how to choose the right design for your flock."
        canonical="/guides/plans-guide"
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
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Coop Plans Guide' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <FileText className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Plans Comparison</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Chicken Coop Plans Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understand the difference between free and premium plans, what makes a good plan, 
              and how to choose the right design for your needs.
            </p>
          </div>

          {/* Comparison Table */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Free vs Premium Plans</h2>
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-muted p-4 font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-center">Free Plans</div>
                <div className="text-center">Premium Plans</div>
              </div>
              {planComparison.map((item, index) => (
                <div key={item.feature} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
                  <div className="text-foreground">{item.feature}</div>
                  <div className="flex justify-center">
                    {item.free ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {item.premium ? (
                      <Check className="h-5 w-5 text-primary" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Size Guide */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Choosing the Right Size</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-lg text-foreground mb-2">Small Coop</h3>
                <p className="text-3xl font-display text-primary mb-2">4-6 Birds</p>
                <p className="text-muted-foreground text-sm mb-4">Perfect for beginners and small backyards. Approximately 16-24 sq ft of coop space.</p>
                <Link to="/" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View small coop plans <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-display text-lg text-foreground mb-2">Medium Coop</h3>
                <p className="text-3xl font-display text-primary mb-2">8-12 Birds</p>
                <p className="text-muted-foreground text-sm mb-4">Most popular choice. Great for families wanting a steady egg supply. 32-48 sq ft.</p>
                <Link to="/" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View medium coop plans <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-display text-lg text-foreground mb-2">Large Coop</h3>
                <p className="text-3xl font-display text-primary mb-2">15+ Birds</p>
                <p className="text-muted-foreground text-sm mb-4">For serious chicken keepers or small-scale egg operations. 60+ sq ft.</p>
                <Link to="/" className="text-primary text-sm hover:underline flex items-center gap-1">
                  View large coop plans <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </section>

          {/* What to Look For */}
          <section className="mb-16 bg-secondary/50 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-foreground mb-6">What Makes a Good Plan?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Essential Elements</h3>
                <ul className="space-y-2">
                  {['Clear, detailed measurements', 'Complete materials list with quantities', 'Labeled diagrams from multiple angles', 'Foundation and framing details', 'Ventilation and window specs'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-3">Bonus Features</h3>
                <ul className="space-y-2">
                  {['Cut sheets for lumber', 'Hardware cloth placement guide', 'Roofing installation steps', 'Nesting box and roost details', 'Predator-proofing checklist'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="font-display text-2xl text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/guides/cost-breakdown-2025" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Cost Breakdown 2025</h3>
                <p className="text-sm text-muted-foreground">Detailed material costs for each build type</p>
              </Link>
              <Link to="/guides/building-guide" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">DIY Building Guide</h3>
                <p className="text-sm text-muted-foreground">Step-by-step construction tutorials</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center mb-12">
            <Link to="/">
              <Button size="lg" className="gap-2">
                Browse Our Free Plans
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

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

export default ChickenCoopPlansGuide;
