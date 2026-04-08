import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoopDesigns from "@/components/CoopDesigns";
import QuickFacts from "@/components/QuickFacts";
import GuideIndex from "@/components/GuideIndex";
import HomeFAQ from "@/components/HomeFAQ";
import HomepageContent from "@/components/HomepageContent";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import EmailCapture from "@/components/EmailCapture";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CoopCraft",
  "alternateName": "Building A Chicken Coop Plans",
  "url": "https://buildingachickencoopplans.com",
  "logo": "https://buildingachickencoopplans.com/logo.png",
  "description": "Free DIY chicken coop plans with step-by-step instructions, full materials lists, and cost breakdowns for every backyard flock size.",
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CoopCraft",
  "url": "https://buildingachickencoopplans.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://buildingachickencoopplans.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free DIY Chicken Coop Plans & Building Guides | CoopCraft"
        description="Browse free DIY chicken coop plans with step-by-step instructions, full materials lists, and cost breakdowns. Beginner-friendly designs for every flock size and budget."
        canonical="/"
        type="website"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <div className="container max-w-3xl mx-auto px-4 py-10">
          <EmailCapture />
        </div>
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
