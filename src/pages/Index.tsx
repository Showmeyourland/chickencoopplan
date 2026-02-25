import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import QuickFacts from "@/components/QuickFacts";
import FeaturedGuides from "@/components/FeaturedGuides";
import HomeFAQ from "@/components/HomeFAQ";
import Footer from "@/components/Footer";
import SEO, { WebSiteSchema } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free DIY Chicken Coop Plans & Building Guides | CoopCraft"
        description="Browse free DIY chicken coop plans with step-by-step instructions, full materials lists, and cost breakdowns. Beginner-friendly designs for every flock size and budget."
        canonical="/"
        type="website"
      />
      <WebSiteSchema 
        name="CoopCraft"
        url="https://buildingachickencoopplans.com"
        searchUrl="https://buildingachickencoopplans.com/search?q={search_term_string}"
      />
      <Header />
      <main>
        <Hero />
        <CoopDesigns />
        <QuickFacts />
        <FeaturedGuides />
        <HomeFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
