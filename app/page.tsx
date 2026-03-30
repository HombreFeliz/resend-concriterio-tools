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
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-sm text-primary mb-3">resend.concriterio.tools</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Envía emails transaccionales con Resend
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Demo interactiva: elige una plantilla, introduce tu email y recibe el
            mensaje en tu bandeja. Todo con React Email + Next.js.
          </p>
        </header>

        {/* Template Picker */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Elige una plantilla</h2>
          <TemplatePicker
            activeTemplate={activeTemplate}
            onSelect={(id) => {
              setActiveTemplate(id);
              setResponse(null);
            }}
          />
        </section>

        {/* Code Viewer */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Código del componente</h2>
          <CodeViewer activeTemplate={activeTemplate} />
        </section>

        {/* Send Form */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Enviar email de prueba</h2>
          <SendForm activeTemplate={activeTemplate} onResponse={setResponse} />
        </section>

        {/* API Response */}
        <section className="mb-16">
          <ApiResponse data={response} />
        </section>

        {/* Banner: Consultoría */}
        <section className="mb-4 p-5 rounded-xl border border-border bg-surface">
          <p className="text-text mb-1">
            ¿Necesitas ayuda integrando esto en tu proyecto?
          </p>
          <p className="text-muted text-sm mb-3">
            Sesión de consultoría 1:1 para resolver tu caso concreto.{" "}
            <span className="text-primary font-semibold">90€/sesión</span>
          </p>
          <a
            href="https://cal.com/polmarza/toma-de-contacto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-primary hover:underline"
          >
            Reservar sesión &rarr;
          </a>
        </section>

        {/* Banner: Newsletter */}
        <section className="mb-4 p-5 rounded-xl border border-border bg-surface">
          <p className="text-text mb-1">
            Cada semana, herramientas como esta en tu bandeja.
          </p>
          <a
            href="https://concriterio.blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-primary hover:underline"
          >
            Suscribirme a la newsletter &rarr;
          </a>
        </section>

        {/* Banner: Repositorio */}
        <section className="mb-16 p-5 rounded-xl border border-border bg-surface">
          <p className="text-text mb-1">
            Esta demo está construida con Next.js + Resend. El código es público.
          </p>
          <a
            href="https://github.com/polmarza/resend-concriterio-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-primary hover:underline"
          >
            Ver en GitHub &rarr;
          </a>
        </section>

        {/* Stack */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6">Stack técnico</h2>
          <div className="space-y-4">
            {stackItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
              >
                <span className="font-mono text-sm text-primary whitespace-nowrap">
                  {item.name}
                </span>
                <span className="text-muted text-sm">{item.reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 pb-12 text-center text-muted text-sm">
          <p>
            Hecho por{" "}
            <a
              href="https://concriterio.blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Con Criterio
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
