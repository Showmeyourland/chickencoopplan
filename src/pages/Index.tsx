import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import QuickFacts from "@/components/QuickFacts";
import GuideIndex from "@/components/GuideIndex";
import HomeFAQ from "@/components/HomeFAQ";
import HomepageContent from "@/components/HomepageContent";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free DIY Chicken Coop Plans & Building Guides | CoopCraft"
        description="Browse free DIY chicken coop plans with step-by-step instructions, full materials lists, and cost breakdowns. Beginner-friendly designs for every flock size and budget."
        canonical="/"
        type="website"
      />
      <Header />
      <main>
        <Hero />
        <CoopDesigns />
        <QuickFacts />
        <GuideIndex />
        <HomeFAQ />
        <HomepageContent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
