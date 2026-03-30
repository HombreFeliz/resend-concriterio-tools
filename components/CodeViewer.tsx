"use client";

import { useState } from "react";
import { templates, TemplateId } from "@/lib/templates";

interface CodeViewerProps {
  activeTemplate: TemplateId;
}

export default function CodeViewer({ activeTemplate }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);
  const template = templates.find((t) => t.id === activeTemplate)!;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(template.source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
        <span className="font-mono text-sm text-muted">
          {template.filename}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs font-mono px-3 py-1 rounded-md border border-border text-muted hover:text-text hover:border-muted transition-colors duration-150"
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <div className="bg-code-bg p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed text-text">
          <code>{template.source}</code>
        </pre>
      </div>
    </div>
  );
}
