import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coop.jpg";

const Hero = () => {
  const highlights = [
    "Expert coop design guides",
    "Climate-specific solutions",
    "Predator protection strategies",
  ];

  return (
    <section className="relative overflow-hidden gradient-soft py-20 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Your Complete Chicken Keeping Resource
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Build the Perfect{" "}
              <span className="text-primary">Chicken Coop</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Comprehensive, expert-backed guidance for backyard chicken keeping. 
              From coop construction to daily care, we cover everything you need 
              to raise happy, healthy hens.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Explore Guides
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Coop Calculator
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/50">
              <img 
                src={heroImage} 
                alt="Beautiful rustic chicken coop in a sunny backyard with free-range chickens" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -left-6 top-1/4 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float">
              <div className="text-2xl font-serif font-bold text-primary">4 sq ft</div>
              <div className="text-xs text-muted-foreground">per bird minimum</div>
            </div>
            
            <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-4 shadow-lg border border-border/50 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-2xl font-serif font-bold text-accent">10+</div>
              <div className="text-xs text-muted-foreground">research areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
