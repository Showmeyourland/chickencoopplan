import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import guideBeginnerImage from "@/assets/guide-beginner.jpg";
import guidePredatorImage from "@/assets/guide-predator.jpg";
import guideClimateImage from "@/assets/guide-climate.jpg";

const guides = [
  {
    category: "Beginner",
    title: "Starting Your First Flock",
    description: "Everything you need to know before bringing chickens home, from breed selection to coop preparation.",
    readTime: "12 min",
    image: guideBeginnerImage,
  },
  {
    category: "Security",
    title: "Predator-Proofing Your Coop",
    description: "Protect your flock from common threats with proper hardware cloth, latches, and nighttime security.",
    readTime: "8 min",
    image: guidePredatorImage,
  },
  {
    category: "Climate",
    title: "Hot Weather Coop Design",
    description: "Keep your chickens cool and productive during summer heat with ventilation and shade strategies.",
    readTime: "10 min",
    image: guideClimateImage,
  },
];

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
          </div>
          <Button variant="outline" className="gap-2 font-semibold">
            All Guides
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                </div>
                
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary pt-2">
                  Read Guide
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
