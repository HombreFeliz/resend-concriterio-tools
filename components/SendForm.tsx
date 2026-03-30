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
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        className="flex-1 px-4 py-3 rounded-lg bg-surface border border-border text-text placeholder:text-muted font-body text-sm focus:outline-none focus:border-primary transition-colors duration-150"
      />
      <button
        type="submit"
        disabled={!isValid || loading}
        className="px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando
          </span>
        ) : (
          "Enviar"
        )}
      </button>
    </form>
  );
}
