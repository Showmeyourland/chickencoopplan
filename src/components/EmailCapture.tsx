import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeEmail } from "@/api/subscribe";

interface EmailCaptureProps {
  variant?: "default" | "shop";
}

const EmailCapture = ({ variant = "default" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const result = await subscribeEmail(email);
      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
        <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
        <h3 className="text-xl font-display text-foreground mb-2">Check your inbox</h3>
        <p className="text-muted-foreground">Your free PDF is on its way.</p>
      </div>
    );
  }

  const heading = variant === "shop"
    ? "Not ready to buy? Get our free guide first"
    : "Get our free PDF: 10 Chicken Coop Mistakes That Waste $500+";

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex h-12 w-12 rounded-xl bg-primary/10 items-center justify-center shrink-0">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-display text-foreground mb-1">{heading}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Sent instantly. No spam. Unsubscribe anytime.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={status === "loading"} className="shrink-0">
              {status === "loading" ? "Sending…" : "Send My Free PDF"}
            </Button>
          </form>
          {status === "error" && (
            <p className="flex items-center gap-1.5 text-sm text-destructive mt-2">
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCapture;
