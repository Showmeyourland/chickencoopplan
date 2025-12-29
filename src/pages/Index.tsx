import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import QuickFacts from "@/components/QuickFacts";
import FeaturedGuides from "@/components/FeaturedGuides";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
