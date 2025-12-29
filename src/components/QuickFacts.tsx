const facts = [
  { stat: "4 sq ft", label: "Indoor space", desc: "per bird minimum" },
  { stat: "10 sq ft", label: "Outdoor run", desc: "per chicken" },
  { stat: "8-10\"", label: "Roosting bar", desc: "per bird" },
  { stat: "1 box", label: "Nesting box", desc: "per 4 hens" },
  { stat: "14 hrs", label: "Light needed", desc: "for laying" },
  { stat: "½\" mesh", label: "Hardware cloth", desc: "predator-proof" },
];

const QuickFacts = () => {
  return (
    <section className="py-12 bg-foreground">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display text-primary-foreground">
            Quick Reference Facts
          </h2>
          <p className="mt-2 text-primary-foreground/70 text-sm">
            Essential numbers every chicken keeper should know
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20"
            >
              <div className="text-2xl font-display text-accent">
                {fact.stat}
              </div>
              <div className="text-sm font-medium text-primary-foreground mt-1">
                {fact.label}
              </div>
              <div className="text-xs text-primary-foreground/60">
                {fact.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
