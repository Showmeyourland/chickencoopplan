import { Sun, Snowflake, Droplets, Wind } from "lucide-react";

const climates = [
  {
    icon: Sun,
    title: "Hot & Arid",
    region: "Southwest, Arizona",
    tips: ["Shade structures", "Misting systems", "Heat-tolerant breeds"],
    color: "from-orange-400 to-red-500",
  },
  {
    icon: Snowflake,
    title: "Cold & Harsh",
    region: "Northern States",
    tips: ["Insulated coops", "Heated waterers", "Draft prevention"],
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Droplets,
    title: "Humid & Wet",
    region: "Southeast, Pacific NW",
    tips: ["Maximum ventilation", "Elevated coops", "Moisture control"],
    color: "from-cyan-400 to-teal-500",
  },
  {
    icon: Wind,
    title: "Temperate",
    region: "Mid-Atlantic, Midwest",
    tips: ["Seasonal prep", "Flexible design", "All-purpose breeds"],
    color: "from-emerald-400 to-green-500",
  },
];

const ClimateSection = () => {
  return (
    <section id="climate" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Regional Expertise
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Climate-Specific Solutions
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every climate presents unique challenges. Our guides adapt best practices 
            to your specific regional conditions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {climates.map((climate, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${climate.color} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative space-y-4">
                <climate.icon className="h-10 w-10 text-primary" />
                
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {climate.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {climate.region}
                  </p>
                </div>

                <ul className="space-y-2">
                  {climate.tips.map((tip, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClimateSection;
