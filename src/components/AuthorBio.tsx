import { Link } from 'react-router-dom';
import { User, ArrowRight } from 'lucide-react';

interface AuthorBioProps {
  name: string;
  credentials: string;
  bio?: string;
  variant?: 'inline' | 'full';
}

const AuthorBio = ({
  name,
  credentials,
  bio = 'Expert chicken keeper with over a decade of experience building coops and helping backyard farmers create the perfect home for their flocks.',
  variant = 'full',
}: AuthorBioProps) => {
  if (variant === 'inline') {
    return (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{credentials}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 bg-secondary/50 rounded-xl border border-border">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
        <User className="h-8 w-8 text-primary" />
      </div>
      <div className="flex-1">
        <h4 className="font-display text-lg text-foreground mb-1">
          About {name}
        </h4>
        <p className="text-sm text-primary font-medium mb-2">{credentials}</p>
        <p className="text-sm text-muted-foreground mb-3">{bio}</p>
        <Link 
          to="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Explore our coop plans
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
};

export default AuthorBio;
