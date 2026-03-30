"use client";

import { useState } from "react";
import { TemplateId } from "@/lib/templates";

interface SendFormProps {
  activeTemplate: TemplateId;
  onResponse: (data: Record<string, unknown>) => void;
}

export default function SendForm({ activeTemplate, onResponse }: SendFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to: email, templateId: activeTemplate }),
      });
      const data = await res.json();
      onResponse(data);
    } catch {
      onResponse({ error: "Error de red. Inténtalo de nuevo." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2.5">
      <div className="relative flex-1">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-surface-elevated border border-border text-text text-sm placeholder:text-muted/60 font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-150"
        />
      </div>
      <button
        type="submit"
        disabled={!isValid || loading}
        className="px-5 py-2.5 rounded-lg bg-text text-background font-semibold text-sm hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150 cursor-pointer whitespace-nowrap"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            Enviar email
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </span>
        )}
      </button>
    </form>
  );
}
