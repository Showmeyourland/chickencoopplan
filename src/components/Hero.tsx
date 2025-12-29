import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coop.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero py-12 lg:py-20">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-foreground leading-none">
              DIY Chicken Coop Plans:{" "}
              <span className="text-primary relative">
                40+ Free
                <svg className="absolute -right-4 -top-2 w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </span>{" "}
              Beginner Designs!
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Our chicken coop plans are specifically designed to simplify the building process 
              while ensuring safety and comfort for your birds. With basic construction skills, 
              you can efficiently build a suitable home for your chickens without excessive time or expense.
            </p>

            {/* Author Credits */}
            <div className="flex flex-wrap items-center gap-6 py-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                    alt="Author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Written by</div>
                  <div className="font-semibold text-foreground">Joseph Truini →</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm">
                  <div className="text-muted-foreground">Reviewed by</div>
                  <div className="font-semibold text-foreground">Phillip J. Clauer →</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold">
                Free PDF Plans
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Coop Design Guide
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Circular image container like EasyCoops */}
              <div className="aspect-square max-w-lg mx-auto rounded-full overflow-hidden border-8 border-accent/30 shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Beautiful chicken coop with free-range chickens" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Speech bubbles */}
              <div className="absolute top-10 right-0 bg-foreground text-primary-foreground px-4 py-2 rounded-lg font-display text-lg rotate-6 shadow-lg">
                YOU BUILD IT...
              </div>
              <div className="absolute bottom-20 right-10 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-display text-lg -rotate-6 shadow-lg">
                ...WE'LL PECK IT!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative chicken feathers */}
      <div className="absolute top-10 left-10 opacity-10 text-8xl rotate-12">🪶</div>
      <div className="absolute bottom-10 right-20 opacity-10 text-6xl -rotate-12">🪶</div>
    </section>
  );
};

export default Hero;
