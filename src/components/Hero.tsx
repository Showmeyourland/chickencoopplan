import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coop.jpg";

const Hero = () => {
  const features = [
    "Step-by-step building instructions",
    "Complete material lists included",
    "Beginner to advanced difficulty",
  ];

  return (
    <section className="relative overflow-hidden gradient-hero py-16 lg:py-24">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="h-4 w-4 fill-current" />
              Trusted by 50,000+ backyard farmers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-tight">
              Free Chicken Coop Plans for{" "}
              <span className="text-primary">Every Backyard</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Download professional-grade DIY chicken coop blueprints at no cost. 
              From compact urban coops to sprawling homestead designs, find the 
              perfect plan for your flock.
            </p>

            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="font-semibold gap-2">
                Browse Free Plans
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                View Premium Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-display text-foreground">45+</div>
                <div className="text-sm text-muted-foreground">Free Plans</div>
              </div>
              <div>
                <div className="text-3xl font-display text-foreground">12k+</div>
                <div className="text-sm text-muted-foreground">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-display text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            {/* Stacked card effect */}
            <div className="absolute inset-4 bg-primary/20 rounded-3xl rotate-3" />
            <div className="absolute inset-2 bg-primary/10 rounded-3xl -rotate-2" />
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-card">
              <img 
                src={heroImage} 
                alt="Beautiful backyard chicken coop with free building plans"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Walk-In Coop</div>
                    <div className="text-sm text-muted-foreground">Fits 8-12 chickens</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
