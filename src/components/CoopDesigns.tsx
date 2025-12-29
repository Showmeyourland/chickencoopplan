import { Star, Users, Ruler, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import coopStarter from "@/assets/coop-starter.jpg";
import coopHomestead from "@/assets/coop-homestead.jpg";
import coopEstate from "@/assets/coop-estate.jpg";
import coopTractor from "@/assets/coop-tractor.jpg";
import coopModern from "@/assets/coop-modern.jpg";
import coopDesert from "@/assets/coop-desert.jpg";

const designs = [
  {
    id: 1,
    name: "The Starter Coop",
    description: "Perfect for beginners with a small backyard flock. Classic red barn design with easy access.",
    image: coopStarter,
    price: 49,
    originalPrice: 79,
    capacity: "3-4 chickens",
    dimensions: "4' x 3' x 4'",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 234,
    bestseller: true,
    features: ["Detailed PDF plans", "Material list", "Step-by-step guide", "Support included"],
  },
  {
    id: 2,
    name: "Homestead Haven",
    description: "Walk-in design with attached run. Ideal for growing flocks with room to expand.",
    image: coopHomestead,
    price: 79,
    originalPrice: 119,
    capacity: "8-10 chickens",
    dimensions: "8' x 6' x 6'",
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 187,
    bestseller: false,
    features: ["Full blueprints", "3D renderings", "Video tutorials", "Lifetime updates"],
  },
  {
    id: 3,
    name: "Estate Coop Deluxe",
    description: "Premium barn-style coop with cupola. Maximum space and ventilation for large flocks.",
    image: coopEstate,
    price: 129,
    originalPrice: 199,
    capacity: "15-20 chickens",
    dimensions: "12' x 10' x 9'",
    difficulty: "Advanced",
    rating: 4.9,
    reviews: 156,
    bestseller: false,
    features: ["Architectural plans", "CAD files", "Material calculator", "1-on-1 support"],
  },
  {
    id: 4,
    name: "Mobile Tractor Pro",
    description: "Portable coop on wheels for rotational grazing. Fresh grass access every day.",
    image: coopTractor,
    price: 59,
    originalPrice: 89,
    capacity: "4-6 chickens",
    dimensions: "6' x 3' x 3'",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 143,
    bestseller: false,
    features: ["Wheel assembly guide", "Lightweight design", "Predator-proof", "Easy to move"],
  },
  {
    id: 5,
    name: "Modern Minimalist",
    description: "Contemporary design with solar-ready roof. Clean lines for the design-conscious keeper.",
    image: coopModern,
    price: 99,
    originalPrice: 149,
    capacity: "6-8 chickens",
    dimensions: "6' x 5' x 5'",
    difficulty: "Intermediate",
    rating: 4.8,
    reviews: 98,
    bestseller: false,
    features: ["Solar panel mount", "Auto door ready", "Premium finishes", "Tech integration"],
  },
  {
    id: 6,
    name: "Desert Climate Coop",
    description: "Optimized for hot, arid climates. Extended shade and maximum ventilation.",
    image: coopDesert,
    price: 89,
    originalPrice: 139,
    capacity: "8-12 chickens",
    dimensions: "10' x 8' x 7'",
    difficulty: "Intermediate",
    rating: 4.9,
    reviews: 76,
    bestseller: false,
    features: ["Heat management", "Shade structure", "Misting compatible", "Arizona tested"],
  },
];

const CoopDesigns = () => {
  return (
    <section id="designs" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Premium Plans
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Coop Design Templates
          </h2>
          <p className="mt-4 text-muted-foreground">
            Professional blueprints and step-by-step guides to build your perfect coop. 
            Every plan includes detailed materials lists and expert support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {design.bestseller && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Bestseller
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium">{design.rating}</span>
                  <span className="text-xs text-muted-foreground">({design.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {design.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {design.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{design.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Ruler className="h-4 w-4" />
                    <span>{design.dimensions}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-1.5">
                  {design.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif font-bold text-primary">
                      ${design.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ${design.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Get Plans
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Instant PDF Download
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            30-Day Money Back Guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Lifetime Updates
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Expert Support Included
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoopDesigns;
