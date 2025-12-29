import { Home } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">
                Coop Authority
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Expert-backed guidance for backyard chicken keeping. 
              Build the perfect coop, raise happy hens.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Guides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Coop Construction</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Predator Protection</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seasonal Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Coop Calculator</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Material Lists</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cost Estimator</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Breed Selector</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Climate Guides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hot & Arid</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cold & Harsh</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Humid Climates</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Temperate Zones</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Coop Authority. Expert chicken keeping knowledge.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
