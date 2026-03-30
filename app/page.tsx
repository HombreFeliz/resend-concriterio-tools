"use client";

import { useState } from "react";
import { TemplateId } from "@/lib/templates";
import TemplatePicker from "@/components/TemplatePicker";
import CodeViewer from "@/components/CodeViewer";
import SendForm from "@/components/SendForm";
import ApiResponse from "@/components/ApiResponse";

const stackItems = [
  {
    name: "Next.js 15",
    reason: "App Router con Server Components y API routes integradas — sin backend separado.",
  },
  {
    name: "Resend SDK",
    reason: "API de email transaccional con SDK TypeScript de primera clase y free tier generoso.",
  },
  {
    name: "React Email",
    reason: "Plantillas de email como componentes React — mismo lenguaje que el resto de la app.",
  },
  {
    name: "Tailwind CSS",
    reason: "Utility-first CSS que mantiene los estilos colocalizados con el markup.",
  },
  {
    name: "TypeScript",
    reason: "Tipado estático que previene errores en tiempo de desarrollo, no en producción.",
  },
];

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>("welcome");
  const [response, setResponse] = useState<Record<string, unknown> | null>(null);

  return (
    <main className="min-h-screen">
      {/* Hero section with glow */}
      <div className="relative overflow-hidden">
        <div className="hero-glow" />
        <div className="max-w-2xl mx-auto px-5 pt-20 pb-16 relative z-10">
          <header className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-mono text-[13px] text-text-secondary tracking-wide">
                resend.concriterio.tools
              </span>
            </div>
            <h1 className="text-[40px] sm:text-[48px] font-bold tracking-tight leading-[1.1] mb-5">
              Envía emails{" "}
              <span className="text-primary">transaccionales</span>
              <br />
              con Resend
            </h1>
            <p className="text-text-secondary text-[17px] leading-relaxed max-w-lg">
              Elige una plantilla, introduce tu email y recibe el mensaje en tu
              bandeja. React Email + Next.js + Resend SDK.
            </p>
          </header>

          {/* Template Picker */}
          <section className="mb-12">
            <SectionLabel>01 — Plantilla</SectionLabel>
            <TemplatePicker
              activeTemplate={activeTemplate}
              onSelect={(id) => {
                setActiveTemplate(id);
                setResponse(null);
              }}
            />
          </section>

          {/* Code Viewer */}
          <section className="mb-12">
            <SectionLabel>02 — Código del componente</SectionLabel>
            <CodeViewer activeTemplate={activeTemplate} />
          </section>

          {/* Send Form */}
          <section className="mb-3">
            <SectionLabel>03 — Enviar email de prueba</SectionLabel>
            <SendForm activeTemplate={activeTemplate} onResponse={setResponse} />
          </section>

          {/* API Response */}
          <section className="mb-20">
            <ApiResponse data={response} />
          </section>

          {/* Divider */}
          <div className="border-t border-border mb-16" />

          {/* Banners */}
          <div className="space-y-3 mb-16">
            <BannerCard
              title="¿Necesitas ayuda integrando esto en tu proyecto?"
              description="Sesión de consultoría 1:1 para resolver tu caso concreto."
              href="https://cal.com/polmarza/toma-de-contacto"
              cta="Reservar sesión"
              badge="90€/sesión"
            />
            <BannerCard
              title="Cada semana, herramientas como esta en tu bandeja."
              href="https://concriterio.blog"
              cta="Suscribirme a la newsletter"
            />
            <BannerCard
              title="Esta demo está construida con Next.js + Resend. El código es público."
              href="https://github.com/polmarza/resend-concriterio-tools"
              cta="Ver en GitHub"
            />
          </div>

          {/* Stack */}
          <section className="mb-20">
            <SectionLabel>Stack técnico</SectionLabel>
            <div className="space-y-0">
              {stackItems.map((item, i) => (
                <div
                  key={item.name}
                  className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3.5 ${
                    i < stackItems.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-mono text-[13px] text-primary shrink-0 w-24">
                    {item.name}
                  </span>
                  <span className="text-text-secondary text-[14px]">
                    {item.reason}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-8 pb-16 flex items-center justify-between">
            <p className="text-muted text-[13px]">
              Hecho por{" "}
              <a
                href="https://concriterio.blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text transition-colors duration-150"
              >
                Con Criterio
              </a>
            </p>
            <p className="text-muted text-[13px] font-mono">
              2025
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[13px] font-mono text-muted uppercase tracking-wider mb-4">
      {children}
    </h2>
  );
}

interface BannerCardProps {
  title: string;
  description?: string;
  href: string;
  cta: string;
  badge?: string;
}

function BannerCard({ title, description, href, cta, badge }: BannerCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-border bg-surface hover:border-border-hover hover:bg-surface-elevated transition-all duration-150"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-text text-[15px] mb-0.5">{title}</p>
          {description && (
            <p className="text-muted text-[13px]">
              {description}
              {badge && (
                <span className="ml-2 inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-primary/10 text-primary-light">
                  {badge}
                </span>
              )}
            </p>
          )}
        </div>
        <span className="text-muted text-[13px] group-hover:text-primary shrink-0 mt-0.5 transition-colors duration-150 flex items-center gap-1">
          {cta}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform duration-150">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </a>
  );
}
