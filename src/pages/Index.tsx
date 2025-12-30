import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import QuickFacts from "@/components/QuickFacts";
import FeaturedGuides from "@/components/FeaturedGuides";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="CoopCraft | DIY Chicken Coop Plans & Building Guides"
        description="Professional DIY chicken coop plans for backyard farmers. Step-by-step building guides, cost breakdowns, and expert tips for every budget."
        canonical="https://buildingachickencoopplans.com/"
        type="website"
      />
      <Header />
      <main>
        <Hero />
        <CoopDesigns />
        <QuickFacts />
        <FeaturedGuides />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
