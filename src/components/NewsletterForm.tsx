import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Placeholder — will connect to a real service later
    setStatus("submitted");
    setEmail("");
  };

  if (status === "submitted") {
    return (
      <p className="font-[family-name:var(--font-accent)] text-sm italic text-sage">
        Thank you. You're on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="min-w-0 flex-1 border border-sand/30 bg-charcoal/50 px-3 py-2 text-sm text-linen placeholder:text-sand/40 focus:border-terracotta focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-terracotta px-4 py-2 text-xs font-medium tracking-wider text-white uppercase transition-colors hover:bg-terracotta/80"
      >
        Join
      </button>
    </form>
  );
}
