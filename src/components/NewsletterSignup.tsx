import { useState } from 'react';
import { Mail, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsletterSignupProps {
  variant?: 'inline' | 'full' | 'compact';
  title?: string;
  description?: string;
  className?: string;
}

const NewsletterSignup = ({
  variant = 'inline',
  title = 'Get Weekly Chicken Coop Building Tips',
  description = 'Join 5,000+ backyard farmers getting expert advice delivered to their inbox.',
  className = '',
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call - replace with actual newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus('success');
    setMessage('Thanks for subscribing! Check your email for confirmation.');
    setEmail('');
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 px-3 py-2 text-sm rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <Button type="submit" size="sm" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : status === 'success' ? (
            <Check className="h-4 w-4" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`p-8 bg-primary/10 border border-primary/20 rounded-2xl ${className}`}>
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-display text-2xl text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          {status === 'success' ? (
            <div className="flex items-center justify-center gap-2 text-primary">
              <Check className="h-5 w-5" />
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="gap-2" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4" />
                    Subscribe Free
                  </>
                )}
              </Button>
            </form>
          )}
          
          <p className="text-xs text-muted-foreground mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    );
  }

  // Default: inline variant
  return (
    <div className={`p-6 bg-secondary/50 border border-border rounded-xl ${className}`}>
      <h4 className="font-display text-lg text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      {status === 'success' ? (
        <div className="flex items-center gap-2 text-primary text-sm">
          <Check className="h-4 w-4" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-3 py-2 text-sm rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <Button type="submit" size="sm" disabled={status === 'loading'}>
            {status === 'loading' ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
