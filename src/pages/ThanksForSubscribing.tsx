import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { products } from "@/data/products";

const featured = products.filter(p => ["4x4-starter", "4x8-medium", "8x8-walkin"].includes(p.id));

const ThanksForSubscribing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Check Your Inbox | CoopCraft"
        description="Your free chicken coop mistakes PDF is on its way."
        canonical="/thanks-for-subscribing"
      />
      <Header />
      <main className="flex-1 py-16">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-display text-foreground mb-4">Check your inbox</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Your free PDF is on its way. It should arrive within 60 seconds.
          </p>
          <p className="text-muted-foreground mb-12">
            While you wait, browse our full chicken coop plans →
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {featured.map((product) => (
              <Card key={product.id} className="overflow-hidden border-border hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={product.heroImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
                <CardContent className="p-4 text-left">
                  <h3 className="font-display text-foreground mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">{product.priceDisplay}</span>
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/shop/${product.slug}`}>View</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button asChild size="lg">
            <Link to="/shop">
              Browse All Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThanksForSubscribing;
