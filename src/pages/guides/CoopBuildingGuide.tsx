import { Link } from 'react-router-dom';
import { Egg, ArrowLeft, Hammer, ArrowRight, Wrench, Ruler, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';

const CoopBuildingGuide = () => {
  const buildingSteps = [
    { step: 1, title: 'Planning & Design', description: 'Choose your coop size, style, and location. Gather materials and tools.' },
    { step: 2, title: 'Foundation & Floor', description: 'Level the ground, set foundation skids, and build the floor frame.' },
    { step: 3, title: 'Wall Framing', description: 'Frame and raise walls, ensuring plumb and square construction.' },
    { step: 4, title: 'Roof Structure', description: 'Install rafters, sheathing, and roofing material for weather protection.' },
    { step: 5, title: 'Siding & Trim', description: 'Apply exterior siding, add trim, and paint or stain for protection.' },
    { step: 6, title: 'Interior Finishing', description: 'Install roosts, nesting boxes, ventilation, and access doors.' },
  ];

  const tools = [
    { category: 'Power Tools', items: ['Circular saw or miter saw', 'Drill/driver', 'Jigsaw'] },
    { category: 'Hand Tools', items: ['Hammer', 'Tape measure', 'Speed square', 'Level', 'Tin snips'] },
    { category: 'Safety Gear', items: ['Safety glasses', 'Work gloves', 'Hearing protection', 'Dust mask'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="DIY Chicken Coop Building: Step-by-Step Instructions"
        description="Complete DIY chicken coop building guide. Step-by-step instructions, tool lists, material guides, and expert tips for building your own chicken coop."
        canonical="/coop-building-guide"
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
          <Breadcrumbs items={[{ label: 'Guides', href: '/blog' }, { label: 'DIY Building Guide' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Hammer className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Construction Guide</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              DIY Chicken Coop Building Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step-by-step instructions for building your own chicken coop. 
              From foundation to finishing touches.
            </p>
          </div>

          {/* Skill Level */}
          <section className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Ruler className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Skill Level</h3>
                <p className="text-muted-foreground text-sm">Beginner to Intermediate</p>
              </div>
              <div>
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Time Required</h3>
                <p className="text-muted-foreground text-sm">2-4 weekends</p>
              </div>
              <div>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Helper Needed</h3>
                <p className="text-muted-foreground text-sm">Recommended for walls & roof</p>
              </div>
            </div>
          </section>

          {/* Building Steps */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Building Process Overview</h2>
            <div className="space-y-4">
              {buildingSteps.map((item) => (
                <div key={item.step} className="flex gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tools List */}
          <section className="mb-16 bg-secondary/50 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-foreground mb-6">Tools You'll Need</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {tools.map((category) => (
                <div key={category.category}>
                  <h3 className="font-semibold text-foreground mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-16">
            <h2 className="font-display text-2xl text-foreground mb-6">Common Mistakes to Avoid</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { mistake: 'Building too small', fix: 'Allow 4+ sq ft per bird inside, 10+ outside' },
                { mistake: 'Poor ventilation', fix: 'Include vents near roofline on opposing walls' },
                { mistake: 'Using chicken wire', fix: 'Use 1/2" hardware cloth for predator protection' },
                { mistake: 'Skipping foundation', fix: 'Raise coop off ground to prevent rot' },
              ].map((item) => (
                <div key={item.mistake} className="p-4 bg-card border border-border rounded-xl">
                  <h3 className="font-semibold text-destructive mb-1">❌ {item.mistake}</h3>
                  <p className="text-sm text-muted-foreground">✓ {item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Get Plans CTA */}
          <section className="mb-16">
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
              <h2 className="font-display text-2xl text-foreground mb-3">Ready to Start Building?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Our detailed plans include complete material lists, cut sheets, and step-by-step 
                instructions with photos for every stage.
              </p>
              <Link to="/">
                <Button size="lg" className="gap-2">
                  Browse Our Coop Plans
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Links */}
          <section className="mb-12">
            <h2 className="font-display text-2xl text-foreground mb-6">Related Resources</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/guides/coop-cost-breakdown-2025" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Cost Breakdown 2025</h3>
                <p className="text-sm text-muted-foreground">Detailed material costs and budgeting</p>
              </Link>
              <Link to="/chicken-coop-plans-guide" className="group p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-1">Plans Guide</h3>
                <p className="text-sm text-muted-foreground">Compare plan options and features</p>
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

export default CoopBuildingGuide;
