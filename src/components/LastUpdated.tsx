import { Calendar } from "lucide-react";

interface LastUpdatedProps {
  datePublished: string;
  dateModified: string;
}

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const LastUpdated = ({ datePublished, dateModified }: LastUpdatedProps) => {
  const wasUpdated = datePublished !== dateModified;
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Calendar className="w-4 h-4" />
      {wasUpdated ? (
        <span>
          <time dateTime={dateModified}>Updated {formatDate(dateModified)}</time>
          {" · "}
          <time dateTime={datePublished} className="text-muted-foreground/70">
            Published {formatDate(datePublished)}
          </time>
        </span>
      ) : (
        <time dateTime={datePublished}>Published {formatDate(datePublished)}</time>
      )}
    </div>
  );
};

export default LastUpdated;
