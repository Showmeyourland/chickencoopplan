import { useState } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/recommended-plans", label: "Free Plans", badge: "NEW" },
    { to: "/guides", label: "Guides" },
    { to: "/shop", label: "Shop" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="ChickenCoopCraft" className="h-12 w-auto" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
              {link.badge && (
                <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent text-accent-foreground rounded">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="hidden sm:flex">
            <Link to="/shop">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-bold bg-accent text-accent-foreground rounded">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
