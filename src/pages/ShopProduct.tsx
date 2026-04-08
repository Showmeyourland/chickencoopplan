import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Check, Download, Shield, RefreshCw, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { products } from "@/data/products";

const ShopProduct = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  const handleBuyNow = () => {
    if (product.lemonSqueezyCheckoutUrl && product.lemonSqueezyCheckoutUrl !== "REPLACE_ME") {
      window.open(product.lemonSqueezyCheckoutUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title={`${product.name} — Instant PDF Download | CoopCraft`}
        description={product.description}
        canonical={`/shop/${product.slug}`}
      />
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Back link */}
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to all plans
          </Link>

          {/* Product layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left — Hero image */}
            <div className="space-y-4">
              <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden border border-border">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Preview thumbnails placeholder */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg border border-border flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Preview {i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Product info */}
            <div>
              {product.id === "bundle-all-five" && (
                <Badge className="mb-3 bg-primary text-primary-foreground">Best Value — Save $36</Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{product.tagline}</p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-foreground">{product.priceDisplay}</span>
                <span className="text-sm text-muted-foreground">one-time purchase</span>
              </div>

              <Button
                size="lg"
                className="w-full text-lg gap-2 mb-4"
                onClick={handleBuyNow}
              >
                <Download className="h-5 w-5" />
                Buy Now — Instant Download
                <ExternalLink className="h-4 w-4" />
              </Button>

              <div className="flex justify-center gap-6 text-xs text-muted-foreground mb-8">
                <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> 30-day refund</span>
                <span className="flex items-center gap-1"><RefreshCw className="h-3.5 w-3.5" /> Lifetime updates</span>
                <span className="flex items-center gap-1"><Download className="h-3.5 w-3.5" /> Instant PDF</span>
              </div>

              <Separator className="mb-6" />

              {/* Bullets */}
              <h3 className="font-display text-lg text-foreground mb-4">What's included</h3>
              <ul className="space-y-3 mb-8">
                {product.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <Separator className="mb-6" />

              {/* Description */}
              <h3 className="font-display text-lg text-foreground mb-3">About this plan</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {/* Testimonials placeholder */}
              <h3 className="font-display text-lg text-foreground mb-4">What builders say</h3>
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((i) => (
                  <blockquote key={i} className="border-l-2 border-border pl-4 py-2">
                    {/* Customer testimonial coming soon */}
                    <p className="text-sm text-muted-foreground italic">Customer testimonial coming soon.</p>
                  </blockquote>
                ))}
              </div>

              {/* Money-back badge */}
              <div className="p-5 bg-muted/50 rounded-xl border border-border flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">30-Day Money-Back Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    Not happy with the plans? Email us within 30 days for a full refund — no questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 pb-4 text-xs text-muted-foreground">
          Secure checkout powered by Lemon Squeezy. Instant PDF download after purchase.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopProduct;
