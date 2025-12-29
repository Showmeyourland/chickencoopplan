import { Home, BookOpen, Hammer, Shield, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Home className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-semibold text-foreground">
            Coop Authority
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#guides" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="#topics" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Topics
          </a>
          <a href="#climate" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Climate
          </a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
        </nav>

        <Button variant="default" size="sm" className="hidden sm:flex">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
