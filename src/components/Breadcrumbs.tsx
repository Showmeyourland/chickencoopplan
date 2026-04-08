import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1 text-sm mb-6 ${className}`}
    >
      <Link
        to="/"
        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" aria-hidden="true" />
          {item.href ? (
            <Link
              to={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
