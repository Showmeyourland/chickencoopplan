import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { relatedGuidesMap, defaultRelatedGuides } from "@/data/relatedGuides";
import { getArticleBySlug } from "@/lib/articles";

interface RelatedGuidesProps {
  currentSlug: string;
}

const RelatedGuides = ({ currentSlug }: RelatedGuidesProps) => {
  const slugs = relatedGuidesMap[currentSlug] || defaultRelatedGuides;
  const guides = slugs
    .filter((s) => s !== currentSlug)
    .map((slug) => {
      const article = getArticleBySlug(slug);
      return article ? { slug: article.slug, title: article.title, excerpt: article.excerpt } : null;
    })
    .filter(Boolean)
    .slice(0, 4);

  if (guides.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="text-2xl font-display text-foreground mb-8">Keep Reading</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <Link
            key={guide!.slug}
            to={`/guides/${guide!.slug}`}
            className="group block p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition"
          >
            <h3 className="text-lg font-display text-foreground group-hover:text-primary mb-2">
              {guide!.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{guide!.excerpt}</p>
            <div className="flex items-center text-sm font-medium text-primary">
              Read guide <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedGuides;
