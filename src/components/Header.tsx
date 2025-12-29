import { Egg, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
            <Egg className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-xl text-foreground">
              CoopCraft
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">
              Build Better Coops
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#plans" className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Free Plans
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent text-accent-foreground rounded">NEW</span>
          </a>
          <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Guides
          </a>
          <a href="/ultimate-chicken-coop-guide" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
