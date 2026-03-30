"use client";

import { templates, TemplateId } from "@/lib/templates";

interface TemplatePickerProps {
  activeTemplate: TemplateId;
  onSelect: (id: TemplateId) => void;
}

const icons: Record<TemplateId, React.ReactNode> = {
  welcome: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  notification: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  reset: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

export default function TemplatePicker({ activeTemplate, onSelect }: TemplatePickerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {templates.map((template) => {
        const isActive = template.id === activeTemplate;
        return (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`group relative text-left p-5 rounded-xl border transition-all duration-150 cursor-pointer ${
              isActive
                ? "border-glass-border bg-surface-elevated"
                : "border-border bg-surface hover:border-glass-border"
            }`}
          >
            {isActive && (
              <div className="absolute inset-0 rounded-xl bg-primary/[0.03] pointer-events-none" />
            )}
            <div className="relative">
              <div
                className={`mb-3 ${
                  isActive ? "text-primary" : "text-muted group-hover:text-text-secondary"
                } transition-colors duration-150`}
              >
                {icons[template.id]}
              </div>
              <h3 className="text-text font-semibold text-[15px] mb-1">
                {template.name}
              </h3>
              <p className="text-text-secondary text-[13px] leading-relaxed">
                {template.description}
              </p>
              <span
                className={`inline-block mt-3 px-2 py-0.5 rounded text-[11px] font-mono tracking-tight ${
                  isActive
                    ? "bg-primary/10 text-primary-light"
                    : "bg-border text-muted"
                }`}
              >
                {template.filename}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
