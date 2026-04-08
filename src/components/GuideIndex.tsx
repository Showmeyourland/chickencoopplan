import { Link } from "react-router-dom";
import { BookOpen, Hammer, DollarSign, Shield, Thermometer, Ruler } from "lucide-react";

const guideGroups = [
  {
    title: "Plans by Size",
    icon: Ruler,
    guides: [
      { label: "Small Chicken Coop Plans", href: "/guides/small-chicken-coop-plans" },
      { label: "4x4 Chicken Coop Plans", href: "/guides/4x4-chicken-coop-plans" },
      { label: "Large Chicken Coop Plans for 20–50+ Birds", href: "/guides/large-chicken-coop-plans" },
      { label: "Beginner Chicken Coop Plans", href: "/guides/beginner-chicken-coop-plans" },
      { label: "Small Backyard Chicken Coop Plans", href: "/guides/small-backyard-coop-plans" },
      { label: "Urban Chicken Coop Plans for City Backyards", href: "/guides/urban-chicken-coop-plans" },
      { label: "Mobile Chicken Coop & Tractor Plans", href: "/guides/mobile-chicken-coop-plans" },
      { label: "Free Chicken Coop Plans", href: "/guides/free-chicken-coop-plans" },
    ],
  },
  {
    title: "Build Guides",
    icon: Hammer,
    guides: [
      { label: "How to Build a Chicken Coop Step-by-Step", href: "/guides/how-to-build-chicken-coop" },
      { label: "Chicken Coop Size Calculator", href: "/guides/chicken-coop-size-calculator" },
      { label: "Chicken Coop Materials Guide", href: "/guides/coop-materials-guide" },
      { label: "Nesting Box Size, Placement & DIY Guide", href: "/guides/nesting-box-guide" },
      { label: "Chicken Coop Roofing Guide", href: "/guides/chicken-coop-roofing-guide" },
      { label: "Chicken Coop Flooring Guide", href: "/guides/chicken-coop-flooring-guide" },
      { label: "Chicken Coop Ventilation Guide", href: "/guides/coop-ventilation-guide" },
      { label: "Chicken Run Design & Fencing Guide", href: "/guides/chicken-run-design-guide" },
    ],
  },
  {
    title: "Cost & Permits",
    icon: DollarSign,
    guides: [
      { label: "2026 Chicken Coop Cost Breakdown", href: "/guides/cost-breakdown-2025" },
      { label: "Chicken Coop Permit Guide by State", href: "/guides/coop-permit-guide" },
      { label: "Free vs Premium Chicken Coop Plans", href: "/guides/free-vs-premium-plans" },
      { label: "Free Coop Plans Quality Checklist", href: "/guides/free-coop-plans-quality-checklist" },
      { label: "Expensive Chicken Coop Mistakes to Avoid", href: "/guides/expensive-coop-mistakes" },
    ],
  },
  {
    title: "Care, Cleaning & Predators",
    icon: Shield,
    guides: [
      { label: "Predator-Proof Chicken Coop Guide", href: "/guides/predator-proof-coop-guide" },
      { label: "Chicken Coop Cleaning Schedule & Guide", href: "/guides/chicken-coop-cleaning-guide" },
      { label: "Chicken Coop Lighting for Egg Production", href: "/guides/chicken-coop-lighting-guide" },
      { label: "Best Chicken Breeds for Beginners", href: "/guides/best-chicken-breeds-beginners" },
    ],
  },
  {
    title: "Climate-Specific",
    icon: Thermometer,
    guides: [
      { label: "Winter Chicken Coop Weatherization Guide", href: "/guides/winter-chicken-coop-guide" },
      { label: "Chicken Coop Insulation Guide", href: "/guides/chicken-coop-insulation-guide" },
      { label: "Arizona Chicken Coop Guide for Desert Heat", href: "/guides/arizona-chicken-coop-guide" },
      { label: "Chicken Coop Design by Climate Zone", href: "/guides/climate-chicken-coop-guide" },
    ],
  },
];

const GuideIndex = () => {
  return (
    <section id="guides" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-primary mb-2">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Complete Guide Library</span>
          </div>
          <h2 className="text-4xl font-display text-foreground">
            Free Chicken Coop Building Guides
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            30+ expert guides covering every aspect of building, maintaining, and optimizing your{" "}
            <Link to="/" className="text-primary hover:underline">chicken coop plans</Link>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideGroups.map((group) => (
            <div key={group.title} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <group.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{group.title}</h3>
              </div>
              <ul className="space-y-2">
                {group.guides.map((guide) => (
                  <li key={guide.href}>
                    <Link
                      to={guide.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                    >
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideIndex;
