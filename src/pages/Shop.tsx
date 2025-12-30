import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import NewsletterSignup from "@/components/NewsletterSignup";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Shop Chicken Coop Plans | CoopCraft"
        description="Shop premium chicken coop plans and building kits. Coming soon - sign up to be notified when our store launches."
        canonical="https://buildingachickencoopplans.com/shop"
      />
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-2xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Shop Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We're building something special. Our online store with premium chicken coop plans and building kits will be launching soon.
          </p>
          
          <div className="bg-muted/30 rounded-xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Get Notified When We Launch
            </h2>
            <p className="text-muted-foreground mb-6">
              Be the first to know when our shop goes live and get exclusive early-bird discounts.
            </p>
            <NewsletterSignup />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link to="/guides">
                Browse Free Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/recommended-plans">
                View Free Plans
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
