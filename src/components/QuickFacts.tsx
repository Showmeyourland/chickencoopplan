import { Ruler, Users, Sun, Shield } from "lucide-react";

const facts = [
  { icon: Ruler, stat: "4 sq ft", label: "Indoor space per bird" },
  { icon: Users, stat: "10 sq ft", label: "Outdoor run per bird" },
  { icon: Sun, stat: "14 hours", label: "Light for egg laying" },
  { icon: Shield, stat: "½\" mesh", label: "Predator-proof wire" },
];

const QuickFacts = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display text-primary-foreground">
            Quick Sizing Guide
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Essential measurements for planning your coop
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <fact.icon className="h-8 w-8 mx-auto text-accent mb-3" />
              <div className="text-3xl font-display text-primary-foreground">
                {fact.stat}
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
