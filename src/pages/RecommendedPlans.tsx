import { Link } from "react-router-dom";
import { Egg, ArrowLeft, Star, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";

const RecommendedPlans = () => {
  const upcomingFeatures = [
    "Expert-reviewed coop plans with detailed ratings",
    "Side-by-side plan comparisons",
    "Material cost breakdowns for each plan",
    "Difficulty ratings and time estimates",
    "Video walkthroughs and building tips",
    "Exclusive member discounts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Best Chicken Coop Plans - Expert Reviews Coming Soon"
        description="Get notified when our expert-reviewed chicken coop plans launch. Curated collection of the best DIY coop designs with detailed ratings and comparisons."
        canonical="/recommended-plans"
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

      <main className="py-16">
        <div className="container max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              Best Chicken Coop Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert-reviewed coop plans with detailed ratings, comparisons, and building guides. 
              Be the first to know when we launch.
            </p>
          </div>

          {/* Preview Card */}
          <Card className="mb-12 border-2 border-dashed border-primary/30 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl text-foreground">What's Coming</h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-4">
                {upcomingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Get Early Access
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join our waitlist to be notified when we launch. Early subscribers get exclusive 
              discounts on premium plan collections.
            </p>
            <NewsletterSignup 
              variant="inline" 
              title="Get Early Access"
              description="Enter your email for early access notifications"
            />
          </div>

          {/* Explore Current Resources */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              While you wait, explore our free resources:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog">
                <Button variant="outline">Browse All Guides</Button>
              </Link>
              <Link to="/chicken-coop-plans-guide">
                <Button variant="outline">Free vs Premium Plans</Button>
              </Link>
              <Link to="/coop-building-guide">
                <Button variant="outline">Building Tutorials</Button>
              </Link>
            </div>
          </div>
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

export default RecommendedPlans;
