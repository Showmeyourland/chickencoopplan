import { Link } from "react-router-dom";

interface MobilePlanCTAProps {
  featuredProductSlug?: string;
  featuredProductPrice?: string;
}

const MobilePlanCTA = ({
  featuredProductSlug = "4x8-medium-coop-plans",
  featuredProductPrice = "$24",
}: MobilePlanCTAProps) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t-2 border-primary shadow-2xl z-50 p-3">
      <Link
        to={`/shop/${featuredProductSlug}`}
        className="flex items-center justify-between bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-lg transition"
      >
        <span>Get the full PDF plans</span>
        <span className="bg-primary-foreground text-primary px-3 py-1 rounded-md text-sm">
          {featuredProductPrice} →
        </span>
      </Link>
    </div>
  );
};

export default MobilePlanCTA;
