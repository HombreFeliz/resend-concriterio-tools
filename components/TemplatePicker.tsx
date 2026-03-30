"use client";

import { templates, TemplateId } from "@/lib/templates";

interface TemplatePickerProps {
  activeTemplate: TemplateId;
  onSelect: (id: TemplateId) => void;
}

export default function TemplatePicker({ activeTemplate, onSelect }: TemplatePickerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {templates.map((template) => {
        const isActive = template.id === activeTemplate;
        return (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`text-left p-5 rounded-xl border transition-colors duration-150 ${
              isActive
                ? "border-primary bg-surface"
                : "border-border bg-surface/50 hover:border-muted"
            }`}
          >
            <span
              className={`inline-block px-2 py-0.5 rounded text-xs font-mono mb-2 ${
                isActive
                  ? "bg-primary/15 text-primary"
                  : "bg-border text-muted"
              }`}
            >
              {template.filename}
            </span>
            <h3 className="text-text font-semibold text-lg mb-1">
              {template.name}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {template.description}
            </p>
          </button>
        );
      })}
    </div>
  );
}
