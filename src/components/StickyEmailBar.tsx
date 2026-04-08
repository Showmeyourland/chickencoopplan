import { useState } from "react";
import { X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeEmail } from "@/api/subscribe";

const StickyEmailBar = () => {
  const [dismissed, setDismissed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      await subscribeEmail(email);
      setStatus("success");
      setTimeout(() => setDismissed(true), 2000);
    } catch {
      setStatus("idle");
    }
  };

  if (dismissed) return null;

  if (status === "success") {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground p-3 text-center text-sm">
        ✓ Check your inbox for the free PDF!
      </div>
    );
  }

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-4 right-4 z-50 md:hidden bg-primary text-primary-foreground rounded-full px-4 py-2.5 text-sm font-medium shadow-lg flex items-center gap-2"
      >
        <FileText className="h-4 w-4" />
        Free PDF
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t border-border shadow-lg p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">Get our free coop mistakes guide →</span>
        <button onClick={() => setCollapsed(true)} className="p-1 text-muted-foreground">
          <X className="h-4 w-4" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-9 text-sm"
        />
        <Button type="submit" size="sm" disabled={status === "loading"}>
          {status === "loading" ? "…" : "Get it"}
        </Button>
      </form>
    </div>
  );
};

export default StickyEmailBar;
