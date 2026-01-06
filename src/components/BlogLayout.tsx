import { Link } from "react-router-dom";
import { Egg, ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO, { ArticleSchema } from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import AuthorBio from "@/components/AuthorBio";
import RelatedArticles from "@/components/RelatedArticles";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Article, getRelatedArticles } from "@/lib/articles";

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

// Map slug to imported image for SEO meta tags
const seoImageMap: Record<string, string> = {
  'arizona-chicken-coop-guide': guideArizona,
  'chicken-run-design-guide': guideChickenRun,
  'chicken-coop-cleaning-guide': guideCleaning,
  'expensive-coop-mistakes': guideCoopMistakes,
  'coop-size-calculator': guideCoopSizeCalculator,
  'coop-cost-breakdown-2025': guideCostBreakdown,
  'chicken-coop-flooring-guide': guideFlooringOptions,
  'free-chicken-coop-plans': guideFreeCoopPlans,
  'free-vs-premium-plans': guideFreeVsPremiumPlans,
  'how-to-build-chicken-coop': guideHowToBuildCoop,
  'chicken-coop-insulation-guide': guideInsulation,
  'large-chicken-coop-plans': guideLargeCoop,
  'chicken-coop-lighting-guide': guideLighting,
  'coop-materials-guide': guideMaterials,
  'mobile-chicken-coop-plans': guideMobileCoop,
  'coop-permit-guide': guidePermits,
  'predator-proof-coop-guide': guidePredator,
  'small-chicken-coop-plans': guideSmallCoopPlans,
  'urban-chicken-coop-plans': guideUrbanCoop,
  'coop-ventilation-guide': guideVentilation,
  'winter-chicken-coop-guide': guideWinterCoop,
  '4x4-coop-plans': guide4x4CoopPlans,
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
  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);
  const resolvedImage = getSeoImage(article.slug);
  
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
      <ArticleSchema 
        title={article.title}
        description={article.excerpt}
        author={article.author}
        datePublished={article.date}
        dateModified={article.updatedDate || article.date}
        image={resolvedImage}
        url={`/guides/${article.slug}`}
      />

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
      <main className="py-12">
        <article className="container max-w-4xl">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} className="mb-8" />

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
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
                {article.updatedDate && (
                  <span className="text-xs">(Updated: {article.updatedDate})</span>
                )}
              </div>
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

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12">
              <RelatedArticles articles={relatedArticles} variant="grid" />
            </div>
          )}

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
              © 2025 CoopCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
