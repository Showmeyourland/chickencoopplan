import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

const FeaturedGuides = () => {
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="guides" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Learn</span>
            </div>
            <h2 className="text-4xl font-display text-foreground">
              Building Guides
            </h2>
            <p className="text-muted-foreground mt-2">
              Expert tips and tutorials for building your perfect coop.
            </p>
          </div>
          <Link to="/guides">
            <Button variant="outline" className="gap-2">
              View All Guides
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {featuredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/guides/cost-breakdown-2025" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                Chicken Coop Cost Breakdown 2025
              </h3>
              <p className="text-sm text-muted-foreground">Complete budget guide from $250 to premium builds.</p>
            </Link>
            <Link to="/guides/building-guide" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                DIY Building Guide
              </h3>
              <p className="text-sm text-muted-foreground">Step-by-step construction tutorials.</p>
            </Link>
            <Link to="/guides/chicken-care" className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                Chicken Care Basics
              </h3>
              <p className="text-sm text-muted-foreground">Everything beginners need to know.</p>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedGuides;
