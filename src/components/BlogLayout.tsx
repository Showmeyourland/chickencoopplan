import { Link } from "react-router-dom";
import { Egg, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  author: string;
  date: string;
}

const BlogLayout = ({ children, title, author, date }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
              <Egg className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-xl text-foreground">
                CoopCraft
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground -mt-0.5">
                Build Better Coops
              </span>
            </div>
          </Link>
          
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Article */}
      <main className="py-12">
        <article className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/" className="text-sm text-primary hover:underline">
              ← Back to CoopCraft Home
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground">
              <em>By {author} | {date}</em>
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20">
            <h3 className="font-display text-2xl text-foreground mb-3">
              Ready to Build Your Coop?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get our complete step-by-step building plans with detailed material lists, cut sheets, and construction tips.
            </p>
            <Link to="/">
              <Button size="lg" className="gap-2">
                Browse Free Plans
              </Button>
            </Link>
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
