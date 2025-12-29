const facts = [
  {
    stat: "4 sq ft",
    label: "Indoor space per bird",
    description: "Minimum for standard breeds",
  },
  {
    stat: "10 sq ft",
    label: "Outdoor run space",
    description: "Per chicken for health",
  },
  {
    stat: "8-10\"",
    label: "Roosting bar space",
    description: "Linear inches per bird",
  },
  {
    stat: "1 box",
    label: "Per 4 hens",
    description: "Nesting box ratio",
  },
  {
    stat: "14 hrs",
    label: "Light for laying",
    description: "Daily light exposure",
  },
  {
    stat: "½\" mesh",
    label: "Hardware cloth",
    description: "Predator-proof sizing",
  },
];

const QuickFacts = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary-foreground">
            Quick Reference Facts
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Essential numbers every chicken keeper should know
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                {fact.stat}
              </div>
              <div className="mt-1 text-sm font-medium text-primary-foreground">
                {fact.label}
              </div>
              <div className="mt-1 text-xs text-primary-foreground/70">
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
