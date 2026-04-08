import { Link } from "react-router-dom";
import { Download, Check } from "lucide-react";

interface StickyPlanCTAProps {
  featuredProductSlug?: string;
  featuredProductName?: string;
  featuredProductPrice?: string;
}

const StickyPlanCTA = ({
  featuredProductSlug = "4x8-medium-coop-plans",
  featuredProductName = "4×8 Chicken Coop Plans",
  featuredProductPrice = "$24",
}: StickyPlanCTAProps) => {
  return (
    <aside className="hidden lg:block sticky top-24 self-start w-full max-w-xs">
      <div className="bg-primary/5 border-2 border-primary rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Download className="w-5 h-5 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wide text-primary">
            Get the full plans
          </span>
        </div>
        <h3 className="text-xl font-display text-foreground mb-2">{featuredProductName}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Skip the guesswork. Our printable PDF includes the exact cut list, 2026 materials list, and step-by-step diagrams.
        </p>
        <ul className="space-y-2 mb-5 text-sm">
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Full printable PDF</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Exact cut list &amp; materials</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">Instant download</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground">30-day money-back</span>
          </li>
        </ul>
        <Link
          to={`/shop/${featuredProductSlug}`}
          className="block w-full text-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-lg transition mb-2"
        >
          Get Plans — {featuredProductPrice}
        </Link>
        <p className="text-xs text-center text-muted-foreground">
          Secure checkout · Instant download
        </p>
      </div>
    </aside>
  );
};

export default StickyPlanCTA;
