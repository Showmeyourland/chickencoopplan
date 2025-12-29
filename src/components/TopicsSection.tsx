import { 
  Home, 
  Heart, 
  Thermometer, 
  Hammer, 
  Shield, 
  Scale, 
  DollarSign, 
  Wrench, 
  Calendar, 
  Zap 
} from "lucide-react";
import TopicCard from "./TopicCard";

const topics = [
  {
    icon: Home,
    title: "Coop Design & Construction",
    description: "Essential components, roosting requirements, ventilation systems, and construction techniques.",
    articles: 24,
  },
  {
    icon: Heart,
    title: "Chicken Biology & Behavior",
    description: "Natural behaviors, roosting instincts, social dynamics, and environmental requirements.",
    articles: 18,
  },
  {
    icon: Hammer,
    title: "Materials & Techniques",
    description: "Lumber types, hardware cloth, roofing options, and foundation materials compared.",
    articles: 15,
  },
  {
    icon: Thermometer,
    title: "Climate Considerations",
    description: "Hot and cold climate adaptations, regional strategies, and seasonal transitions.",
    articles: 21,
  },
  {
    icon: Shield,
    title: "Predator Protection",
    description: "Common predators, attack patterns, security measures, and deterrent strategies.",
    articles: 12,
  },
  {
    icon: Scale,
    title: "Legal Requirements",
    description: "Zoning ordinances, permit processes, HOA restrictions, and health regulations.",
    articles: 8,
  },
  {
    icon: DollarSign,
    title: "Cost Analysis & Budgeting",
    description: "Size-based pricing, quality tiers, DIY vs professional, and hidden costs.",
    articles: 10,
  },
  {
    icon: Wrench,
    title: "Maintenance & Troubleshooting",
    description: "Daily, weekly, and seasonal tasks plus common problems and solutions.",
    articles: 16,
  },
  {
    icon: Calendar,
    title: "Seasonal Management",
    description: "Spring prep, summer maintenance, fall preparations, and winter management.",
    articles: 14,
  },
  {
    icon: Zap,
    title: "Advanced Systems",
    description: "Automation, mobile coops, garden integration, and multi-species housing.",
    articles: 11,
  },
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Research Areas
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Comprehensive Knowledge Base
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our 10 detailed research areas, each backed by extension service 
            publications, veterinary resources, and real-world testing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {topics.map((topic, i) => (
            <TopicCard key={topic.title} {...topic} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
