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
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Egg className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl">CoopCraft</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Professional DIY chicken coop plans for backyard farmers. 
              Build with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Plans</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Free Downloads</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Premium Collection</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Custom Designs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Material Calculator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Building Guides</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sizing Calculator</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          © 2024 CoopCraft. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
