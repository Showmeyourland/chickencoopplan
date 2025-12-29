import { BookOpen } from "lucide-react";

const FeaturedGuides = () => {
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
              Coming soon — step-by-step tutorials and tips for building your perfect coop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
