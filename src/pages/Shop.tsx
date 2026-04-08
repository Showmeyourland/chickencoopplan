import { Link } from "react-router-dom";
import { ShoppingBag, Download, RefreshCw, Shield, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import EmailCapture from "@/components/EmailCapture";
import { products } from "@/data/products";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const shopFaqs = [
  { question: "What format are the plans in?", answer: "All plans are delivered as high-resolution PDF files. They're designed to print clearly on standard 8.5×11\" or A4 paper, and also look great on tablets and laptops." },
  { question: "How do I get my plans after purchase?", answer: "Instantly. After checkout, you'll receive a download link on-screen and via email. No waiting, no shipping — download and start building right away." },
  { question: "Can I print the plans at home?", answer: "Yes. Every plan is formatted for standard home printers. Diagrams and cut lists are sized to print clearly in black & white or color." },
  { question: "What's your refund policy?", answer: "We offer a 30-day money-back guarantee. If you're not happy with the plans for any reason, email us and we'll refund you — no questions asked." },
  { question: "Do the plans include materials lists?", answer: "Yes. Every plan includes a full 2026 materials list with quantities, dimensions, and approximate Home Depot prices so you know exactly what to buy and what it'll cost." },
  { question: "Will the plans be updated?", answer: "Yes. When we update a plan (new pricing, improved diagrams, etc.), you'll receive the updated version free via email. Buy once, get updates for life." },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Chicken Coop Plans PDF — Instant Download | CoopCraft"
        description="Complete chicken coop plans with step-by-step instructions, full materials lists, and cut sheets. Instant PDF download. Sizes from 4×4 to 10×12."
        canonical="/shop"
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-4">Instant PDF Download</Badge>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              Complete Chicken Coop Plans (PDF)
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Step-by-step plans with full materials lists. Instant download. Works on any printer.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow group">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-2xl font-bold text-white">{product.priceDisplay}</span>
                    </div>
                    {product.id === "bundle-all-five" && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Best Value</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-display text-foreground mb-1">{product.name}</h2>
                    <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>
                    <ul className="space-y-1.5 mb-6">
                      {product.bullets.slice(0, 3).map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={`/shop/${product.slug}`}>View Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Row */}
        <section className="py-10 border-y border-border bg-muted/20">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-primary" />
                <span>Lifetime updates</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>30-day refund</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>2,000+ builders</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-display text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {shopFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Email Capture — shop footer */}
        <section className="pb-12">
          <div className="container max-w-3xl mx-auto px-4">
            <EmailCapture variant="shop" />
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center pb-8 text-xs text-muted-foreground">
          Secure checkout powered by Lemon Squeezy. Instant PDF download after purchase.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
