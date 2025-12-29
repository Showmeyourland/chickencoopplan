import { Home, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <span className="text-2xl">🐔</span>
          </div>
          <div>
            <span className="font-display text-2xl text-foreground tracking-wider">
              EASY COOPS
            </span>
            <span className="hidden sm:block text-xs text-muted-foreground -mt-1">
              DIY Chicken Coop Plans
            </span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#plans" className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
            Chicken Coop Plans
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded">FREE</span>
          </a>
          <a href="#premium" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop Plans
          </a>
          <a href="#guides" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How-to Guides
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
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
