import { useState, useEffect } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents = ({ items, className = '' }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className={cn('bg-muted/50 rounded-xl p-4', className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <List className="h-4 w-4 text-primary" />
          <span className="font-display text-sm text-foreground">Table of Contents</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <ol className="mt-3 space-y-1.5 text-sm">
          {items.map((item, index) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
            >
              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  'text-left hover:text-primary transition-colors w-full truncate',
                  activeId === item.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
              >
                <span className="mr-1.5">{index + 1}.</span>
                {item.text}
              </button>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
};

export default TableOfContents;

// Helper function to extract TOC from content
export function extractTOCFromContent(contentRef: HTMLElement | null): TOCItem[] {
  if (!contentRef) return [];
  
  const headings = contentRef.querySelectorAll('h2, h3');
  return Array.from(headings).map((heading) => ({
    id: heading.id,
    text: heading.textContent || '',
    level: parseInt(heading.tagName[1]),
  }));
}
