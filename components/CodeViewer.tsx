"use client";

import { useState } from "react";
import { templates, TemplateId } from "@/lib/templates";

interface CodeViewerProps {
  activeTemplate: TemplateId;
}

function highlightSyntax(code: string): React.ReactNode[] {
  const lines = code.split("\n");
  return lines.map((line, i) => (
    <div key={i} className="flex hover:bg-white/[0.02] -mx-4 px-4 rounded">
      <span className="code-line-number text-[13px] leading-6 shrink-0">
        {i + 1}
      </span>
      <span
        className="text-[13px] leading-6 whitespace-pre"
        dangerouslySetInnerHTML={{ __html: colorize(line) }}
      />
    </div>
  ));
}

function colorize(line: string): string {
  return line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /\b(import|from|export|default|function|return|interface|const)\b/g,
      '<span class="token-keyword">$1</span>'
    )
    .replace(
      /(&quot;|")(.*?)(\1)/g,
      '<span class="token-string">"$2"</span>'
    )
    .replace(
      /(\w+)(?=\s*[:=]\s*\{)/g,
      '<span class="token-prop">$1</span>'
    );
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
    <div className="rounded-xl border border-glass-border overflow-hidden bg-code-bg">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.08]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.08]" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/[0.06] border border-white/[0.08]" />
          </div>
          <span className="font-mono text-[12px] text-muted">
            {template.filename}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[12px] font-mono px-2.5 py-1 rounded-lg border border-border text-muted hover:text-text-secondary hover:border-glass-border transition-all duration-150 cursor-pointer"
        >
          {copied ? (
            <span className="flex items-center gap-1.5 text-success">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copiado
            </span>
          ) : (
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copiar
            </span>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono">
          <code>{highlightSyntax(template.source)}</code>
        </pre>
      </div>
    </div>
  );
}
