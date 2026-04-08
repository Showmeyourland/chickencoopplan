import { useState } from "react";
import { Download, CreditCard, Users, Ruler, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import coopStarter from "@/assets/coop-starter.jpg";
import coopHomestead from "@/assets/coop-homestead.jpg";
import coopEstate from "@/assets/coop-estate.jpg";
import coopTractor from "@/assets/coop-tractor.jpg";
import coopModern from "@/assets/coop-modern.jpg";
import coopDesert from "@/assets/coop-desert.jpg";

const categories = [
  { id: "all", label: "All Plans", count: 45 },
  { id: "walk-in", label: "Walk-In Coops", count: 18 },
  { id: "standard", label: "Standard Coops", count: 15 },
  { id: "tractor", label: "Chicken Tractors", count: 8 },
  { id: "specialty", label: "Specialty Designs", count: 4 },
];

const designs = [
  {
    id: 1,
    name: "The Homesteader",
    description: "A spacious walk-in design with integrated run. Perfect for medium flocks with room to grow and easy daily access.",
    image: coopHomestead,
    category: "walk-in",
    capacity: "8-12 birds",
    dimensions: "8' × 12'",
    difficulty: "Beginner",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 29,
    popular: true,
  },
  {
    id: 2,
    name: "Rolling Pasture",
    description: "Portable tractor design on wheels for rotational grazing. Give your flock fresh ground every day.",
    image: coopTractor,
    category: "tractor",
    capacity: "4-6 birds",
    dimensions: "4' × 8'",
    difficulty: "Beginner",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 19,
    popular: false,
  },
  {
    id: 3,
    name: "Classic Barnyard",
    description: "Traditional red barn styling with modern functionality. External nesting boxes and easy-clean design.",
    image: coopStarter,
    category: "standard",
    capacity: "4-6 birds",
    dimensions: "4' × 4'",
    difficulty: "Beginner",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 24,
    popular: false,
  },
  {
    id: 4,
    name: "Ranch Deluxe",
    description: "Our largest design for serious chicken keepers. Full walk-in access with separate roosting and nesting areas.",
    image: coopEstate,
    category: "walk-in",
    capacity: "15-25 birds",
    dimensions: "12' × 16'",
    difficulty: "Intermediate",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 49,
    popular: false,
  },
  {
    id: 5,
    name: "Urban Modern",
    description: "Sleek contemporary design perfect for city backyards. Compact footprint with smart storage solutions.",
    image: coopModern,
    category: "specialty",
    capacity: "3-5 birds",
    dimensions: "4' × 6'",
    difficulty: "Intermediate",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 34,
    popular: false,
  },
  {
    id: 6,
    name: "Desert Breeze",
    description: "Engineered for hot climates with maximum ventilation and shade coverage. Keeps flocks cool in 100°F+ weather.",
    image: coopDesert,
    category: "specialty",
    capacity: "6-10 birds",
    dimensions: "8' × 10'",
    difficulty: "Intermediate",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 39,
    popular: false,
  },
];

const CoopDesigns = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDesigns = activeCategory === "all" 
    ? designs 
    : designs.filter(d => d.category === activeCategory);

  return (
    <section id="plans" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">
            Chicken Coop Plans
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of free and premium coop blueprints. Every plan includes 
            detailed instructions, cut lists, and material specifications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground border border-border hover:border-primary/50"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Coop Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <article
              key={design.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={design.image}
                  alt={`${design.name} chicken coop plan — ${design.capacity}, ${design.dimensions}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                {design.popular && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {design.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {design.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-border">
                  <div className="text-center">
                    <Users className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-xs text-muted-foreground">Capacity</div>
                    <div className="text-sm font-medium">{design.capacity}</div>
                  </div>
                  <div className="text-center">
                    <Ruler className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-xs text-muted-foreground">Size</div>
                    <div className="text-sm font-medium">{design.dimensions}</div>
                  </div>
                  <div className="text-center">
                    <Wrench className="h-4 w-4 mx-auto text-primary mb-1" />
                    <div className="text-xs text-muted-foreground">Level</div>
                    <div className="text-sm font-medium">{design.difficulty}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="default" className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Free PDF
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <CreditCard className="h-4 w-4" />
                    Premium ${design.premiumPrice}
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-14">
          <Button variant="outline" size="lg" className="font-semibold px-8">
            View All 45 Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoopDesigns;
