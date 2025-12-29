import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-xl">🐔</span>
              </div>
              <span className="font-display text-xl">EASY COOPS</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Free DIY chicken coop plans for backyard chicken keepers. 
              Build the perfect home for your flock.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-3">Coop Plans</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground">Walk-in Coops</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Chicken Tractors</a></li>
              <li><a href="#" className="hover:text-primary-foreground">A-Frame Coops</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Large Coops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground">How-to Guides</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Design Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Material Lists</a></li>
              <li><a href="#" className="hover:text-primary-foreground">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Refunds</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          © 2024 Easy Coops. Free DIY Chicken Coop Plans.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
