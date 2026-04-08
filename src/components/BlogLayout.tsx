import { Link } from "react-router-dom";
import { Egg, ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { articleSchema, guideBreadcrumbSchema } from "@/lib/guideSchemas";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import AuthorBio from "@/components/AuthorBio";
import RelatedGuides from "@/components/RelatedGuides";
import StickyPlanCTA from "@/components/StickyPlanCTA";
import MobilePlanCTA from "@/components/MobilePlanCTA";
import NewsletterSignup from "@/components/NewsletterSignup";
import EmailCapture from "@/components/EmailCapture";
import { Article } from "@/lib/articles";
import { getFeaturedProduct } from "@/data/guideToProduct";
import { getGuideMeta } from "@/data/guideMetadata";
import LastUpdated from "@/components/LastUpdated";
import { howToData } from "@/lib/howto-steps";
import { guideFaqData } from "@/lib/guideFaqs";
import { faqPageSchema } from "@/lib/guideSchemas";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import guide images for SEO meta tags
import guideArizona from '@/assets/guide-arizona.jpg';
import guideChickenRun from '@/assets/guide-chicken-run.jpg';
import guideCleaning from '@/assets/guide-cleaning.jpg';
import guideCoopMistakes from '@/assets/guide-coop-mistakes.jpg';
import guideCoopSizeCalculator from '@/assets/guide-coop-size-calculator.jpg';
import guideCostBreakdown from '@/assets/guide-cost-breakdown.jpg';
import guideFlooringOptions from '@/assets/guide-flooring-options.jpg';
import guideFreeCoopPlans from '@/assets/guide-free-coop-plans.jpg';
import guideFreeVsPremiumPlans from '@/assets/guide-free-vs-premium-plans.jpg';
import guideHowToBuildCoop from '@/assets/guide-how-to-build-coop.jpg';
import guideInsulation from '@/assets/guide-insulation.jpg';
import guideLargeCoop from '@/assets/guide-large-coop.jpg';
import guideLighting from '@/assets/guide-lighting.jpg';
import guideMaterials from '@/assets/guide-materials.jpg';
import guideMobileCoop from '@/assets/guide-mobile-coop.jpg';
import guidePermits from '@/assets/guide-permits.jpg';
import guidePredator from '@/assets/guide-predator.jpg';
import guideSmallCoopPlans from '@/assets/guide-small-coop-plans.jpg';
import guideUrbanCoop from '@/assets/guide-urban-coop.jpg';
import guideVentilation from '@/assets/guide-ventilation.jpg';
import guideWinterCoop from '@/assets/guide-winter-coop.jpg';
import guide4x4CoopPlans from '@/assets/guide-4x4-coop-plans.jpg';
import guideFreeCoopQualityChecklist from '@/assets/guide-free-coop-quality-checklist.jpg';
import guideSmallBackyardCoop from '@/assets/guide-small-backyard-coop.jpg';
import guideBeginner from '@/assets/guide-beginner.jpg';
import guideClimate from '@/assets/guide-climate.jpg';
import guideNestingBoxes from '@/assets/guide-nesting-boxes.jpg';
import guideRoofing from '@/assets/guide-roofing.jpg';
import guideBreeds from '@/assets/guide-breeds.jpg';
import guideChickenCoopPlansPillar from '@/assets/guide-chicken-coop-plans-pillar.jpg';
import guideCoopPlans4Chickens from '@/assets/guide-coop-plans-4-chickens.jpg';
import guideAFrameCoop from '@/assets/guide-a-frame-coop.jpg';
import guideWalkInCoop from '@/assets/guide-walk-in-coop.jpg';
import guideCoopMaterialsList from '@/assets/guide-coop-materials-list.jpg';

// Map slug to imported image for SEO meta tags
const seoImageMap: Record<string, string> = {
  'arizona-chicken-coop-guide': guideArizona,
  'beginner-chicken-coop-plans': guideBeginner,
  'best-chicken-breeds-beginners': guideBreeds,
  'chicken-run-design-guide': guideChickenRun,
  'chicken-coop-cleaning-guide': guideCleaning,
  'chicken-coop-roofing-guide': guideRoofing,
  'climate-chicken-coop-guide': guideClimate,
  'expensive-coop-mistakes': guideCoopMistakes,
  'chicken-coop-size-calculator': guideCoopSizeCalculator,
  'cost-breakdown-2025': guideCostBreakdown,
  'chicken-coop-flooring-guide': guideFlooringOptions,
  'free-chicken-coop-plans': guideFreeCoopPlans,
  'free-coop-plans-quality-checklist': guideFreeCoopQualityChecklist,
  'free-vs-premium-plans': guideFreeVsPremiumPlans,
  'how-to-build-chicken-coop': guideHowToBuildCoop,
  'chicken-coop-insulation-guide': guideInsulation,
  'large-chicken-coop-plans': guideLargeCoop,
  'chicken-coop-lighting-guide': guideLighting,
  'coop-materials-guide': guideMaterials,
  'mobile-chicken-coop-plans': guideMobileCoop,
  'nesting-box-guide': guideNestingBoxes,
  'coop-permit-guide': guidePermits,
  'predator-proof-coop-guide': guidePredator,
  'small-chicken-coop-plans': guideSmallCoopPlans,
  'urban-chicken-coop-plans': guideUrbanCoop,
  'coop-ventilation-guide': guideVentilation,
  'winter-chicken-coop-guide': guideWinterCoop,
  '4x4-chicken-coop-plans': guide4x4CoopPlans,
  'small-backyard-coop-plans': guideSmallBackyardCoop,
  'chicken-coop-plans': guideChickenCoopPlansPillar,
  'chicken-coop-plans-4-chickens': guideCoopPlans4Chickens,
  'a-frame-chicken-coop-plans': guideAFrameCoop,
  'walk-in-chicken-coop-plans': guideWalkInCoop,
  'chicken-coop-plans-materials-list': guideCoopMaterialsList,
};

const getSeoImage = (slug: string): string => {
  return seoImageMap[slug] || '/og-image.jpg';
};

interface BlogLayoutProps {
  children: React.ReactNode;
  article: Article;
  showTableOfContents?: boolean;
}

const BlogLayout = ({ children, article, showTableOfContents = true }: BlogLayoutProps) => {
  const resolvedImage = getSeoImage(article.slug);
  const guideMeta = getGuideMeta(article.slug);
  const featuredProduct = getFeaturedProduct(article.slug);
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: article.category, href: `/guides?category=${encodeURIComponent(article.category)}` },
    { label: article.title }
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(article.title);

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgressBar />
      <SEO 
        title={article.seo?.metaTitle || article.title}
        description={article.seo?.metaDescription || article.excerpt}
        canonical={`/guides/${article.slug}`}
        image={resolvedImage}
        type="article"
        author={article.author}
        publishedTime={article.date}
        modifiedTime={article.updatedDate}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema({
            title: article.seo?.metaTitle || article.title,
            description: article.seo?.metaDescription || article.excerpt,
            slug: article.slug,
            datePublished: guideMeta?.datePublished || article.date || "2026-01-01",
            dateModified: guideMeta?.dateModified || article.updatedDate || "2026-04-07",
            imageUrl: resolvedImage.startsWith('http') ? resolvedImage : `https://buildingachickencoopplans.com${resolvedImage}`,
          }))}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(guideBreadcrumbSchema({
            title: article.title,
            slug: article.slug,
          }))}
        </script>
      </Helmet>
      {/* HowTo Schema for step-by-step guides */}
      {howToData[article.slug] && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: howToData[article.slug].name,
              description: howToData[article.slug].description,
              step: howToData[article.slug].steps.map((step, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                name: step.name,
                text: step.text,
              })),
            })}
          </script>
        </Helmet>
      )}
      {/* FAQPage Schema for guides with FAQ data */}
      {guideFaqData[article.slug] && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(faqPageSchema(guideFaqData[article.slug]))}
          </script>
        </Helmet>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
              <Egg className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-xl text-foreground">CoopCraft</span>
              <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">Build Better Coops</span>
            </div>
          </Link>
          
          <Link to="/guides">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Guides
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="py-12 pb-24 lg:pb-12">
        <div className="container max-w-6xl">
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-12">
          <article>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              {article.difficulty && (
                <Badge variant="outline">{article.difficulty}</Badge>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              {guideMeta ? (
                <LastUpdated datePublished={guideMeta.datePublished} dateModified={guideMeta.dateModified} />
              ) : (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Quick Overview Box */}
            {(article.difficulty || article.costRange) && (
              <div className="mt-6 p-6 bg-muted/50 rounded-xl border border-border">
                <h3 className="font-display text-lg text-foreground mb-4">Quick Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  {article.difficulty && (
                    <div>
                      <span className="text-muted-foreground">Difficulty</span>
                      <p className="font-medium text-foreground">{article.difficulty}</p>
                    </div>
                  )}
                  {article.readingTime && (
                    <div>
                      <span className="text-muted-foreground">Reading Time</span>
                      <p className="font-medium text-foreground">{article.readingTime} min</p>
                    </div>
                  )}
                  {article.costRange && (
                    <div>
                      <span className="text-muted-foreground">Cost Range</span>
                      <p className="font-medium text-foreground">{article.costRange}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-muted-foreground">Category</span>
                    <p className="font-medium text-foreground">{article.category}</p>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Email Capture — mid-article */}
          <div className="my-10">
            <EmailCapture />
          </div>

          {/* Visible FAQ Section */}
          {guideFaqData[article.slug] && (
            <section className="mt-12 mb-8">
              <h2 className="text-3xl font-display text-foreground mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {guideFaqData[article.slug].map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          )}

          {/* Email Capture — end of article */}
          <div className="my-10">
            <EmailCapture />
          </div>

          {/* Mid-Article Newsletter */}
          <div className="my-12">
            <NewsletterSignup 
              variant="inline"
              title="Enjoying this guide?"
              description="Get more chicken coop tips and exclusive building plans delivered to your inbox."
            />
          </div>

          {/* Social Sharing */}
          <div className="flex items-center gap-4 py-6 border-t border-b border-border my-8">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share this guide:
            </span>
            <div className="flex gap-2">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio 
            name={article.author}
            credentials="Chicken Coop Building Expert"
            bio="With over a decade of experience in backyard farming and DIY construction, our team provides practical, tested advice for building the perfect chicken coop."
          />

          {/* Related Guides */}
          <RelatedGuides currentSlug={article.slug} />

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20">
            <h3 className="font-display text-2xl text-foreground mb-3">
              Ready to Build Your Coop?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get our complete step-by-step building plans with detailed material lists, cut sheets, and construction tips.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/">
                <Button size="lg">Browse Free Plans</Button>
              </Link>
              <Link to="/guides/how-to-build-chicken-coop">
                <Button size="lg" variant="outline">Building Guide</Button>
              </Link>
            </div>
          </div>
        </article>
          <StickyPlanCTA
            featuredProductSlug={featuredProduct.slug}
            featuredProductName={featuredProduct.name}
            featuredProductPrice={featuredProduct.price}
          />
          </div>
        </div>
        <MobilePlanCTA
          featuredProductSlug={featuredProduct.slug}
          featuredProductPrice={featuredProduct.price}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Egg className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg text-foreground">CoopCraft</span>
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/guides" className="hover:text-foreground transition-colors">All Guides</Link>
              <Link to="/guides/how-to-build-chicken-coop" className="hover:text-foreground transition-colors">Building Guide</Link>
              <Link to="/" className="hover:text-foreground transition-colors">Plans</Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 CoopCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
