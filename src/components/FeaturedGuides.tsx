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
    <section id="guides" className="py-16 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-4xl font-display text-foreground">
              How-to Guides
            </h2>
            <p className="mt-2 text-muted-foreground">
              Expert tips and step-by-step instructions for chicken keeping success
            </p>
          </div>
          <Button variant="outline" className="gap-2 font-semibold">
            View All Guides
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <article
              key={i}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5 space-y-3">
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
                
                <p className="text-sm text-muted-foreground">
                  {guide.description}
                </p>

                <span className="inline-block text-sm font-semibold text-primary group-hover:underline">
                  Read Guide →
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
