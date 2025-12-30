import { Link } from "react-router-dom";
import { Egg, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container">
        {/* Newsletter */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-display text-2xl mb-3">Get New Plans First</h3>
          <p className="text-primary-foreground/70 mb-6">
            Join our newsletter for exclusive designs and building tips.
          </p>
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Egg className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl">CoopCraft</span>
            </Link>
            <p className="text-sm text-primary-foreground/70">
              Professional DIY chicken coop plans for backyard farmers. 
              Build with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Plans</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/recommended-plans" className="hover:text-primary-foreground transition-colors">Recommended Plans</Link></li>
              <li><Link to="/plan-reviews" className="hover:text-primary-foreground transition-colors">Plan Reviews</Link></li>
              <li><Link to="/guides/small-chicken-coop-plans" className="hover:text-primary-foreground transition-colors">Small Coop Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Guides</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/guides/how-to-build-chicken-coop" className="hover:text-primary-foreground transition-colors">How to Build a Coop</Link></li>
              <li><Link to="/guides/cost-breakdown-2025" className="hover:text-primary-foreground transition-colors">2025 Cost Breakdown</Link></li>
              <li><Link to="/guides/chicken-coop-materials" className="hover:text-primary-foreground transition-colors">Materials Guide</Link></li>
              <li><Link to="/guides/predator-proof-coop" className="hover:text-primary-foreground transition-colors">Predator Proofing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/guides" className="hover:text-primary-foreground transition-colors">All Guides</Link></li>
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Browse Designs</Link></li>
              <li><Link to="/guides/chicken-coop-size-calculator" className="hover:text-primary-foreground transition-colors">Size Calculator</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          © 2025 CoopCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
