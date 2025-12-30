import { Link } from "react-router-dom";
import { Egg, ArrowLeft, Crown, Lock, Sparkles, BookOpen, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";

const PremiumResources = () => {
  const premiumFeatures = [
    {
      icon: BookOpen,
      title: "Premium Building Guides",
      description: "Step-by-step guides with professional tips and advanced techniques"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch expert builders construct coops from start to finish"
    },
    {
      icon: Download,
      title: "Downloadable Plans",
      description: "Professional CAD drawings with detailed measurements and cut lists"
    },
    {
      icon: Sparkles,
      title: "Exclusive Designs",
      description: "Access to premium coop designs not available anywhere else"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Premium Chicken Coop Guides & Resources - Coming Soon"
        description="Exclusive premium resources for serious coop builders. Professional plans, video tutorials, and expert guides coming soon."
        canonical="/premium-resources"
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
              <Crown className="h-4 w-4" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              Premium Guides & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade resources for builders who want the best. 
              Expert guidance, exclusive designs, and comprehensive tutorials.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <Lock className="h-4 w-4 text-muted-foreground/50" />
                </div>
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Early Access Signup */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
            <Crown className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="font-display text-2xl text-foreground mb-3">
              Get Early Access & Founding Member Pricing
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join our early access list for exclusive founding member discounts 
              when premium resources launch. Limited spots available.
            </p>
            <NewsletterSignup 
              variant="inline" 
              title="Get Early Access & VIP Pricing"
              description="Enter your email for exclusive founding member discounts"
            />
          </div>

          {/* Free Resources CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Explore our comprehensive free resources while you wait:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/ultimate-chicken-coop-guide">
                <Button variant="outline">Ultimate Coop Guide</Button>
              </Link>
              <Link to="/coop-building-guide">
                <Button variant="outline">Building Tutorials</Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline">All Free Guides</Button>
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

export default PremiumResources;
