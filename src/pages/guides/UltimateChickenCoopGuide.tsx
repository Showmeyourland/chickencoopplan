import { Link } from 'react-router-dom';
import { Egg, ArrowLeft, BookOpen, CheckCircle, ArrowRight, Home as HomeIcon, DollarSign, Heart, Hammer, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import NewsletterSignup from '@/components/NewsletterSignup';

const UltimateChickenCoopGuide = () => {
  const sections = [
    {
      title: 'Planning Your Coop',
      icon: HomeIcon,
      description: 'Choose the right size, location, and design for your flock.',
      links: [
        { label: 'How Many Chickens Can I Keep?', href: '/guides' },
        { label: 'Choosing the Right Location', href: '/guides' },
        { label: 'Coop Size Calculator', href: '/guides' },
      ],
    },
    {
      title: 'Building & Construction',
      icon: Hammer,
      description: 'Step-by-step building guides and material selection.',
      links: [
        { label: 'DIY Building Guide', href: '/guides/building-guide' },
        { label: 'Essential Tools List', href: '/guides' },
        { label: 'Material Comparisons', href: '/guides/cost-breakdown-2025' },
      ],
    },
    {
      title: 'Costs & Budgeting',
      icon: DollarSign,
      description: 'Understand all costs involved in building and maintaining a coop.',
      links: [
        { label: '2025 Cost Breakdown', href: '/guides/cost-breakdown-2025' },
        { label: 'Budget vs Premium Builds', href: '/guides/cost-breakdown-2025' },
        { label: 'Money-Saving Tips', href: '/guides/cost-breakdown-2025' },
      ],
    },
    {
      title: 'Chicken Care',
      icon: Heart,
      description: 'Keep your flock healthy and happy year-round.',
      links: [
        { label: 'Beginner Care Guide', href: '/guides/chicken-care' },
        { label: 'Feeding Basics', href: '/guides' },
        { label: 'Seasonal Care Tips', href: '/guides' },
      ],
    },
    {
      title: 'Troubleshooting',
      icon: AlertTriangle,
      description: 'Common problems and how to solve them.',
      links: [
        { label: 'Predator Protection', href: '/guides' },
        { label: 'Ventilation Issues', href: '/guides' },
        { label: 'Common Building Mistakes', href: '/guides' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Ultimate Chicken Coop Guide: Everything You Need to Know"
        description="The complete guide to chicken coops. Learn planning, building, costs, chicken care, and troubleshooting. Your one-stop resource for backyard chicken keeping."
        canonical="/guides/ultimate-guide"
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
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Ultimate Chicken Coop Guide' }]} className="mb-8" />

          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Complete Resource</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Ultimate Chicken Coop Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about building, maintaining, and optimizing your chicken coop. 
              Your comprehensive resource for backyard chicken keeping success.
            </p>
          </div>

          {/* Progress Overview */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
            <h2 className="font-display text-xl text-foreground mb-4">What You'll Learn</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Coop sizing & planning', 'Material selection', 'Building techniques', 'Cost optimization', 'Chicken health basics', 'Seasonal maintenance'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <div key={section.title} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {index + 1}. {section.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <div className="space-y-2">
                      {section.links.map((link) => (
                        <Link
                          key={link.label}
                          to={link.href}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-12">
            <Link to="/">
              <Button size="lg" className="gap-2">
                Browse Our Coop Plans
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

export default UltimateChickenCoopGuide;
