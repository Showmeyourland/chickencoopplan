import { LucideIcon } from "lucide-react";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  articles: number;
  delay?: number;
}

const TopicCard = ({ icon: Icon, title, description, articles, delay = 0 }: TopicCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative space-y-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        
        <div>
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-medium text-muted-foreground">
            {articles} articles
          </span>
          <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Explore →
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
