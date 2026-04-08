import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, BookOpen, ShoppingBag, Mail } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const POPULAR_GUIDES = [
  { slug: "how-to-build-chicken-coop", title: "How to Build a Chicken Coop (Complete Guide)" },
  { slug: "small-chicken-coop-plans", title: "Small Chicken Coop Plans" },
  { slug: "predator-proof-coop-guide", title: "Predator-Proof Your Coop" },
  { slug: "coop-materials-guide", title: "Chicken Coop Materials Guide" },
  { slug: "cost-breakdown-2025", title: "2026 Cost Breakdown" },
  { slug: "chicken-coop-size-calculator", title: "Coop Size Calculator" },
];

const NotFound = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `/thanks-for-subscribing?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <>
      <SEO
        title="Page Not Found | CoopCraft"
        description="The page you're looking for doesn't exist. Browse our free chicken coop plans, guides, and resources."
        canonical={`https://buildingachickencoopplans.com${location.pathname}`}
      />
      <Header />
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
          {/* Hero */}
          <div className="text-center mb-12">
            <p className="text-7xl mb-6">🐔</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              This coop is empty
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The page you were looking for flew the coop. But we've got plenty of other guides to help you build the perfect chicken house.
            </p>
          </div>

          {/* Primary actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <Link
              to="/"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition group"
            >
              <Home className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition">Homepage</p>
                <p className="text-sm text-muted-foreground">Start from the top</p>
              </div>
            </Link>
            <Link
              to="/guides"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition group"
            >
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition">All Guides</p>
                <p className="text-sm text-muted-foreground">29+ free resources</p>
              </div>
            </Link>
            <Link
              to="/shop"
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition group"
            >
              <ShoppingBag className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition">Shop Plans</p>
                <p className="text-sm text-muted-foreground">Printable PDFs</p>
              </div>
            </Link>
          </div>

          {/* Popular guides */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Popular Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {POPULAR_GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  to={`/guides/${guide.slug}`}
                  className="block p-4 rounded-lg border border-border bg-card hover:border-primary hover:bg-accent/50 transition text-foreground font-medium"
                >
                  {guide.title} →
                </Link>
              ))}
            </div>
          </section>

          {/* Email capture */}
          <section className="bg-accent/30 border border-border rounded-xl p-8 text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="text-xl font-bold text-foreground mb-2">
              Get our free coop mistakes guide
            </h2>
            <p className="text-muted-foreground mb-4">
              10 expensive chicken coop mistakes that waste $500+. Sent instantly, no spam.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition"
              >
                Get It
              </button>
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
