import { useState } from "react";
import { Download, ShoppingCart, Users, Ruler, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import coopStarter from "@/assets/coop-starter.jpg";
import coopHomestead from "@/assets/coop-homestead.jpg";
import coopEstate from "@/assets/coop-estate.jpg";
import coopTractor from "@/assets/coop-tractor.jpg";
import coopModern from "@/assets/coop-modern.jpg";
import coopDesert from "@/assets/coop-desert.jpg";

const categories = [
  { id: "all", label: "All Plans", count: 40 },
  { id: "walk-in", label: "Walk-in Chicken Coop Plans", count: 49 },
  { id: "house", label: "Chicken House Plans", count: 29 },
  { id: "tractor", label: "Movable Chicken Tractor Plans", count: 5 },
  { id: "a-frame", label: "A-Frame Chicken Coop Plans", count: 1 },
];

const designs = [
  {
    id: 1,
    name: "Walk-In Chicken Coop Plan",
    description: "This walk-in chicken coop offers a spacious interior to house up to 12 chickens, and the integrated run is a safe space for them to explore and forage during the day.",
    image: coopHomestead,
    category: "walk-in",
    capacity: "12 chickens",
    dimensions: "20 x 9",
    difficulty: "Beginner friendly",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 29,
  },
  {
    id: 2,
    name: "Mobile Chicken Coop",
    description: "Having a portable chicken coop means you can move it whenever and wherever you want to give your chickens fresh grass to scratch and eat.",
    image: coopTractor,
    category: "tractor",
    capacity: "8 chickens",
    dimensions: "5 x 13",
    difficulty: "Beginner friendly",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 24,
  },
  {
    id: 3,
    name: "Classic Red Barn Coop",
    description: "This Amish-style coop suits safe upcountry backyards with nesting boxes accessible from outside, two windows for light, and a droppings tray for easy cleaning.",
    image: coopStarter,
    category: "house",
    capacity: "6 chickens",
    dimensions: "6 x 6",
    difficulty: "Medium",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 34,
  },
  {
    id: 4,
    name: "Extra Large Chicken Coop with Run",
    description: "The Chicken's Dream Home plan is designed by a professional architect and offers clear directions to help you construct your Egg-cellent hideaway.",
    image: coopEstate,
    category: "walk-in",
    capacity: "20 chickens",
    dimensions: "9 x 42",
    difficulty: "Beginner friendly",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 49,
  },
  {
    id: 5,
    name: "Modern Solar Chicken Coop",
    description: "This modern loft-design chicken coop is perfect for urban and suburban chicken growers. The elevated hutch makes this coop perfect for areas that tend to flood.",
    image: coopModern,
    category: "house",
    capacity: "12 chickens",
    dimensions: "17 x 6",
    difficulty: "Intermediate",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 39,
  },
  {
    id: 6,
    name: "Desert Climate Chicken Coop",
    description: "Designed with Arizona heat in mind, this coop features extended shade structures and maximum ventilation to keep your flock cool and comfortable.",
    image: coopDesert,
    category: "house",
    capacity: "10 chickens",
    dimensions: "10 x 8",
    difficulty: "Intermediate",
    hasFree: true,
    hasPremium: true,
    premiumPrice: 44,
  },
];

const CoopDesigns = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDesigns = activeCategory === "all" 
    ? designs 
    : designs.filter(d => d.category === activeCategory);

  return (
    <section id="plans" className="py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">
            DIY Chicken Coop Plans
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            These free chicken coop plans offer sizes from small chicken coops to large chicken houses. 
            Additionally, they serve as a resource for chicken coop ideas, offering innovative designs and inspiration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 p-4 bg-card rounded-xl border border-border">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-foreground text-background"
                  : "bg-transparent text-foreground border border-border hover:border-foreground"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
          <div><strong>Winter readiness:</strong> Insulated chicken coops (43)</div>
          <div><strong>Accommodates:</strong> 3 chickens — 50 chickens</div>
          <div><strong>Width:</strong> 2 feets — 20 feets</div>
          <div><strong>Length:</strong> 3 feets — 42 feets</div>
        </div>

        {/* Coop Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <article
              key={design.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-display text-2xl text-foreground">
                  {design.name}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {design.description}
                </p>

                {/* Specs Table */}
                <div className="border border-border rounded-lg overflow-hidden text-sm">
                  <div className="flex border-b border-border">
                    <div className="w-1/3 px-3 py-2 bg-muted font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" /> Capacity
                    </div>
                    <div className="w-2/3 px-3 py-2">{design.capacity}</div>
                  </div>
                  <div className="flex border-b border-border">
                    <div className="w-1/3 px-3 py-2 bg-muted font-medium flex items-center gap-2">
                      <Ruler className="h-4 w-4" /> Dimensions
                    </div>
                    <div className="w-2/3 px-3 py-2">{design.dimensions}</div>
                  </div>
                  <div className="flex">
                    <div className="w-1/3 px-3 py-2 bg-muted font-medium flex items-center gap-2">
                      <Wrench className="h-4 w-4" /> Difficulty
                    </div>
                    <div className="w-2/3 px-3 py-2">{design.difficulty}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {design.hasFree && (
                    <Button variant="default" className="flex-1 gap-2">
                      <Download className="h-4 w-4" />
                      Free Plan
                    </Button>
                  )}
                  {design.hasPremium && (
                    <Button variant="outline" className="flex-1 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Premium Plan
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-display text-lg px-8">
            Load More Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoopDesigns;
