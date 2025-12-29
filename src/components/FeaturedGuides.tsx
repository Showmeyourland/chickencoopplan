import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import guideBeginnerImage from "@/assets/guide-beginner.jpg";
import guidePredatorImage from "@/assets/guide-predator.jpg";
import guideClimateImage from "@/assets/guide-climate.jpg";

const guides = [
  {
    category: "Getting Started",
    title: "Complete Beginner's Guide to Chicken Keeping",
    description: "Everything you need to know before getting your first flock, from choosing breeds to preparing your space.",
    readTime: "15 min read",
    image: guideBeginnerImage,
    imageAlt: "Hands gently holding a fluffy golden brown chick",
  },
  {
    category: "Construction",
    title: "Building a Predator-Proof Coop",
    description: "Step-by-step guide to securing your coop against common predators with tested methods.",
    readTime: "12 min read",
    image: guidePredatorImage,
    imageAlt: "Secure wooden chicken coop with heavy-duty hardware cloth and latches",
  },
  {
    category: "Climate",
    title: "Hot Climate Coop Design: Arizona Focus",
    description: "Specialized techniques for keeping chickens cool and healthy in extreme heat conditions.",
    readTime: "10 min read",
    image: guideClimateImage,
    imageAlt: "Desert chicken coop with shade structures and chickens in Arizona landscape",
  },
];

const FeaturedGuides = () => {
  return (
    <section id="guides" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Featured Content
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Essential Guides
            </h2>
          </div>
          <Button variant="outline" className="group">
            View All Guides
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {guide.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {guide.readTime}
                  </span>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {guide.description}
                </p>

                <div className="pt-2">
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Read Guide →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
