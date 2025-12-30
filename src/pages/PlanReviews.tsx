import { Link } from "react-router-dom";
import { Egg, ArrowLeft, Search, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";

const PlanReviews = () => {
  const plannedReviews = [
    { name: "The Garden Coop", type: "Small Coop", status: "In Review" },
    { name: "Mobile Chicken Tractor", type: "Mobile Coop", status: "Coming Soon" },
    { name: "A-Frame Starter Coop", type: "Beginner", status: "Coming Soon" },
    { name: "Large Walk-In Coop", type: "Large Coop", status: "Planned" },
    { name: "Urban Micro Coop", type: "Urban", status: "Planned" },
    { name: "Barn-Style Coop", type: "Premium", status: "Planned" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Detailed Chicken Coop Plan Reviews - In Development"
        description="Comprehensive reviews of popular chicken coop plans coming soon. Get in-depth analysis, pros and cons, and expert recommendations."
        canonical="/plan-reviews"
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
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">In Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              Detailed Plan Comparisons
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth reviews of popular chicken coop plans with expert analysis, 
              real builder feedback, and honest recommendations.
            </p>
          </div>

          {/* Upcoming Reviews */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl text-foreground">Reviews in Progress</h2>
              </div>
              <div className="space-y-4">
                {plannedReviews.map((review, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.type}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      review.status === "In Review" 
                        ? "bg-primary/20 text-primary" 
                        : review.status === "Coming Soon"
                        ? "bg-accent/20 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {review.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center">
            <h2 className="font-display text-2xl text-foreground mb-3">
              Get Notified When Reviews Launch
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Be the first to read our detailed plan reviews and make informed decisions 
              about your coop building project.
            </p>
            <NewsletterSignup 
              variant="inline" 
              title="Get Notified"
              description="Enter your email to be notified when reviews launch"
            />
          </div>

          {/* Explore Current Resources */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Start planning your coop with our current guides:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/guides/cost-breakdown-2025">
                <Button variant="outline">Cost Guide</Button>
              </Link>
              <Link to="/guides/small-chicken-coop-plans">
                <Button variant="outline">Small Coop Plans</Button>
              </Link>
              <Link to="/">
                <Button variant="outline">Browse Designs</Button>
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

export default PlanReviews;
