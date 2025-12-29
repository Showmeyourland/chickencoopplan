import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import TopicsSection from "@/components/TopicsSection";
import QuickFacts from "@/components/QuickFacts";
import FeaturedGuides from "@/components/FeaturedGuides";
import ClimateSection from "@/components/ClimateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CoopDesigns />
        <TopicsSection />
        <QuickFacts />
        <FeaturedGuides />
        <ClimateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
